var device;

function setup(device) {
  //debugger
  return device.open()
  .then(() => device.selectConfiguration(1))
  .then(() => device.claimInterface(0))
}

function print() {
  var string = document.getElementById("printContent").value + "\n";
  var encoder = new TextEncoder();
  var data = encoder.encode(string);
  //device.transferOut(1, data)
  //.catch(error => { console.log(error); })

  var data1 = new Uint8Array(8);
  data1[0] = 0x50;
  data1[1] = 0x03;
  data1[2] = 0x00;
  //var data1 = [0x50, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00];
  device.transferOut(1, data1);

  data1[0] = 0x45;
  data1[1] = 0x40;
  data1[2] = 0x3b;
  data1[3] = 0x0f;
  data1[6] = 0x01;

  device.transferOut(1, data1);
  device.close();
  //var data2 = [0x45, 0x40, 0x3b, 0x0f, 0x00, 0x00, 0x01, 0x00];
  //device.transferOut(1, data2);

}

function write(device) {
  var data1 = new Uint8Array(8);
  data1[0] = 0x50;
  data1[1] = 0x03;
  data1[2] = 0x00;
  //var data1 = [0x50, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00];
  device.transferOut(1, data1);

  data1[0] = 0x45;
  data1[1] = 0x40;
  data1[2] = 0x3b;
  data1[3] = 0x0f;
  data1[6] = 0x01;

  device.transferOut(1, data1);
  //device.close();
  //var data2 = [0x45, 0x40, 0x3b, 0x0f, 0x00, 0x00, 0x01, 0x00];
  //device.transferOut(1, data2);

}

function connect() {
  if (device == null) {
    navigator.usb.requestDevice({ filters: [{ vendorId: 0x0426 }] })
    .then(selectedDevice => {
      device = selectedDevice;
      console.log(device);
      return setup(device);
    })
    .then(() => write(device))
    .catch(error => { console.log(error); })
  }
}

function connectAndPrint() {
  if (device == null) {
    navigator.usb.requestDevice({ filters: [{ vendorId: 0x0426 }] })
    .then(selectedDevice => {
      device = selectedDevice;
      console.log(device);
      return setup(device);
    })
    .then(() => print())
    .catch(error => { console.log(error); })
  }
  else
    print();
}

navigator.usb.getDevices()
.then(devices => {
  if (devices.length > 0) {
    device = devices[0];
    return setup(device);
  }
})
.catch(error => { console.log(error); });
