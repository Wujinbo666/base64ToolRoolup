// src/main.js
var oBtnUpload = document.getElementById("btn_upload")
var oIptFile = document.getElementById("ipt_file")
var oBtnCreate = document.getElementById("btn_create")
var oImg = document.getElementById("o_img")
var oButtomBox = document.getElementById("buttom")
var oTxtarea = document.getElementById("ipt_txtarea")
var oBtnBlob2Base64 = document.getElementById("btn_blob2_base64")
var imgFile 

oIptFile.addEventListener('change', function(e) {
  imgFile = e.target.files[0]
  oImg.src =  URL.createObjectURL(e.target.files[0])
})

oBtnUpload.addEventListener('click', function() {
  oIptFile.click()
})

oBtnCreate.addEventListener('click', function() {
  if(window.FileReader) {
    var reader = new FileReader()
    reader.readAsDataURL(imgFile)
    reader.onload = function(e) {
      oTxtarea.value = e.target.result;
    }
  }
})

oBtnBlob2Base64.addEventListener('click', function() {
  //#region 二进制图片
  var imageBlob = [
    0xff,0xd8,0xff,0xe1,0x00,0x30,0x45,0x78,0x69,0x66,0x00,0x00,0x4d,0x4d,0x00,0x2a,
    0x00,0x00,0x00,0x08,0x00,0x01,0x01,0x31,0x00,0x02,0x00, 0x00,0x00,0x0e,0x00,0x00,
    0x00,0x1a,0x00,0x00,0x00,0x00,0x77,0x77,0x77,0x2e,0x6d, 0x65,0x69,0x74,0x75,0x2e,
    0x63,0x6f,0x6d,0x00,0xff,0xdb,0x00,0x43,0x00,0x03,0x02, 0x02,0x03,0x02,0x02,0x03,
    0x03,0x03,0x03,0x04,0x03,0x03,0x04,0x05,0x08,0x05,0x05, 0x04,0x04,0x05,0x0a,0x07,
    0x07,0x06,0x08,0x0c,0x0a,0x0c,0x0c,0x0b,0x0a,0x0b,0x0b, 0x0d,0x0e,0x12,0x10,0x0d,
    0x0e,0x11,0x0e,0x0b,0x0b,0x10,0x16,0x10,0x11,0x13,0x14, 0x15,0x15,0x15,0x0c,0x0f,
    0x17,0x18,0x16,0x14,0x18,0x12,0x14,0x15,0x14,0xff,0xdb, 0x00,0x43,0x01,0x03,0x04,
    0x04,0x05,0x04,0x05,0x09,0x05,0x05,0x09,0x14,0x0d,0x0b, 0x0d,0x14,0x14,0x14,0x14,
    0x14,0x14,0x14,0x14,0x14,0x14,0x14,0x14,0x14,0x14,0x14, 0x14,0x14,0x14,0x14,0x14,
    0x14,0x14,0x14,0x14,0x14,0x14,0x14,0x14,0x14,0x14,0x14, 0x14,0x14,0x14,0x14,0x14,
    0x14,0x14,0x14,0x14,0x14,0x14,0x14,0x14,0x14,0x14,0x14, 0x14,0x14,0x14,0xff,0xc0,
    0x00,0x11,0x08,0x00,0x30,0x00,0xc8,0x03,0x01,0x11,0x00, 0x02,0x11,0x01,0x03,0x11,
    0x01,0xff,0xc4,0x00,0x1f,0x00,0x00,0x01,0x05,0x01,0x01, 0x01,0x01,0x01,0x01,0x00,
    0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x01,0x02,0x03,0x04, 0x05,0x06,0x07,0x08,0x09,
    0x0a,0x0b,0xff,0xc4,0x00,0xb5,0x10,0x00,0x02,0x01,0x03, 0x03,0x02,0x04,0x03,0x05,
    0x05,0x04,0x04,0x00,0x00,0x01,0x7d,0x01,0x02,0x03,0x00, 0x04,0x11,0x05,0x12,0x21,
    0x31,0x41,0x06,0x13,0x51,0x61,0x07,0x22,0x71,0x14,0x32, 0x81,0x91,0xa1,0x08,0x23,
    0x42,0xb1,0xc1,0x15,0x52,0xd1,0xf0,0x24,0x33,0x62,0x72, 0x82,0x09,0x0a,0x16,0x17,
    0x18,0x19,0x1a,0x25,0x26,0x27,0x28,0x29,0x2a,0x34,0x35, 0x36,0x37,0x38,0x39,0x3a,
    0x43,0x44,0x45,0x46,0x47,0x48,0x49,0x4a,0x53,0x54,0x55, 0x56,0x57,0x58,0x59,0x5a,
    0x63,0x64,0x65,0x66,0x67,0x68,0x69,0x6a,0x73,0x74,0x75, 0x76,0x77,0x78,0x79,0x7a,
    0x83,0x84,0x85,0x86,0x87,0x88,0x89,0x8a,0x92,0x93,0x94, 0x95,0x96,0x97,0x98,0x99,
    0x9a,0xa2,0xa3,0xa4,0xa5,0xa6,0xa7,0xa8,0xa9,0xaa,0xb2, 0xb3,0xb4,0xb5,0xb6,0xb7,
    0xb8,0xb9,0xba,0xc2,0xc3,0xc4,0xc5,0xc6,0xc7,0xc8,0xc9, 0xca,0xd2,0xd3,0xd4,0xd5,
    0xd6,0xd7,0xd8,0xd9,0xda,0xe1,0xe2,0xe3,0xe4,0xe5,0xe6, 0xe7,0xe8,0xe9,0xea,0xf1,
    0xf2,0xf3,0xf4,0xf5,0xf6,0xf7,0xf8,0xf9,0xfa,0xff,0xc4, 0x00,0x1f,0x01,0x00,0x03,
    0x01,0x01,0x01,0x01,0x01,0x01,0x01,0x01,0x01,0x00,0x00, 0x00,0x00,0x00,0x00,0x01,
    0x02,0x03,0x04,0x05,0x06,0x07,0x08,0x09,0x0a,0x0b,0xff, 0xc4,0x00,0xb5,0x11,0x00,
    0x02,0x01,0x02,0x04,0x04,0x03,0x04,0x07,0x05,0x04,0x04, 0x00,0x01,0x02,0x77,0x00,
    0x01,0x02,0x03,0x11,0x04,0x05,0x21,0x31,0x06,0x12,0x41, 0x51,0x07,0x61,0x71,0x13,
    0x22,0x32,0x81,0x08,0x14,0x42,0x91,0xa1,0xb1,0xc1,0x09, 0x23,0x33,0x52,0xf0,0x15,
    0x62,0x72,0xd1,0x0a,0x16,0x24,0x34,0xe1,0x25,0xf1,0x17, 0x18,0x19,0x1a,0x26,0x27,
    0x28,0x29,0x2a,0x35,0x36,0x37,0x38,0x39,0x3a,0x43,0x44, 0x45,0x46,0x47,0x48,0x49,
    0x4a,0x53,0x54,0x55,0x56,0x57,0x58,0x59,0x5a,0x63,0x64, 0x65,0x66,0x67,0x68,0x69,
    0x6a,0x73,0x74,0x75,0x76,0x77,0x78,0x79,0x7a,0x82,0x83, 0x84,0x85,0x86,0x87,0x88,
    0x89,0x8a,0x92,0x93,0x94,0x95,0x96,0x97,0x98,0x99,0x9a, 0xa2,0xa3,0xa4,0xa5,0xa6,
    0xa7,0xa8,0xa9,0xaa,0xb2,0xb3,0xb4,0xb5,0xb6,0xb7,0xb8, 0xb9,0xba,0xc2,0xc3,0xc4,
    0xc5,0xc6,0xc7,0xc8,0xc9,0xca,0xd2,0xd3,0xd4,0xd5,0xd6, 0xd7,0xd8,0xd9,0xda,0xe2,
    0xe3,0xe4,0xe5,0xe6,0xe7,0xe8,0xe9,0xea,0xf2,0xf3,0xf4, 0xf5,0xf6,0xf7,0xf8,0xf9,
    0xfa,0xff,0xda,0x00,0x0c,0x03,0x01,0x00,0x02,0x11,0x03, 0x11,0x00,0x3f,0x00,0xf3,
    0x7a,0xfe,0xa5,0x3f,0x90,0x82,0x80,0x0a,0x00,0x28,0x00, 0xa0,0x02,0x80,0x0a,0x00,
    0x28,0x00,0xa0,0x02,0x80,0x0a,0x00,0x28,0x00,0xa0,0x02, 0x80,0x0a,0x00,0x28,0x00,
    0xa0,0x02,0x80,0x0a,0x00,0x28,0x00,0xa0,0x02,0x80,0x0a, 0x00,0x29,0x3d,0x84,0x75,
    0xff,0x00,0x0a,0x7f,0xe4,0x6c,0xb8,0xff,0x00,0xb0,0x1e, 0xb7,0xff,0x00,0xa6,0x9b,
    0xba,0xf2,0xf3,0x5f,0xe1,0x47,0xfe,0xbe,0x53,0xff,0x00, 0xd3,0x91,0x3d,0xcc,0xa3,
    0xf8,0xf5,0x3f,0xeb,0xdd,0x5f,0xfd,0x37,0x23,0x90,0xaf, 0x54,0xf1,0x02,0x80,0x0a,
    0x00,0x28,0x00,0xa0,0x02,0x80,0x0a,0x00,0x28,0x00,0xa0, 0x02,0x80,0x0a,0x00,0x28,
    0x00,0xa0,0x02,0x80,0x0a,0x00,0x28,0x00,0xa0,0x02,0x80, 0x0a,0x00,0x28,0x00,0xa0,
    0x02,0x80,0x0a,0x00,0x29,0x3d,0x84,0x75,0xff,0x00,0x0a, 0x7f,0xe4,0x6c,0xb8,0xff,
    0x00,0xb0,0x1e,0xb7,0xff,0x00,0xa6,0x9b,0xba,0xf2,0xf3, 0x5f,0xe1,0x47,0xfe,0xbe,
    0x53,0xff,0x00,0xd3,0x91,0x3d,0xcc,0xa3,0xf8,0xf5,0x3f, 0xeb,0xdd,0x5f,0xfd,0x37,
    0x23,0x90,0xaf,0x54,0xf1,0x02,0x80,0x0a,0x00,0x28,0x00, 0xa0,0x02,0x80,0x0a,0x00,
    0x28,0x00,0xa0,0x02,0x80,0x0a,0x00,0x28,0x00,0xa0,0x02, 0x80,0x0a,0x00,0x28,0x00,
    0xa0,0x02,0x80,0x0a,0x00,0x28,0x00,0xa0,0x02,0x80,0x0a, 0x00,0x29,0x3d,0x84,0x75,
    0xff,0x00,0x0a,0x7f,0xe4,0x6c,0xb8,0xff,0x00,0xb0,0x1e, 0xb7,0xff,0x00,0xa6,0x9b,
    0xba,0xf2,0xf3,0x5f,0xe1,0x47,0xfe,0xbe,0x53,0xff,0x00, 0xd3,0x91,0x3d,0xcc,0xa3,
    0xf8,0xf5,0x3f,0xeb,0xdd,0x5f,0xfd,0x37,0x23,0x80,0xf3, 0x5f,0xfb,0xed,0xf9,0xd7,
    0x75,0xd9,0xe7,0x59,0x76,0x0f,0x35,0xff,0x00,0xbe,0xdf, 0x9d,0x17,0x61,0x65,0xd8,
    0x3c,0xd7,0xfe,0xfb,0x7e,0x74,0x5d,0x85,0x97,0x60,0xf3, 0x5f,0xfb,0xed,0xf9,0xd1,
    0x76,0x16,0x5d,0x83,0xcd,0x7f,0xef,0xb7,0xe7,0x45,0xd8, 0x59,0x76,0x0f,0x35,0xff,
    0x00,0xbe,0xdf,0x9d,0x17,0x61,0x65,0xd8,0x3c,0xd7,0xfe, 0xfb,0x7e,0x74,0x5d,0x85,
    0x97,0x60,0xf3,0x5f,0xfb,0xed,0xf9,0xd1,0x76,0x16,0x5d, 0x83,0xcd,0x7f,0xef,0xb7,
    0xe7,0x45,0xd8,0x59,0x76,0x0f,0x35,0xff,0x00,0xbe,0xdf, 0x9d,0x17,0x61,0x65,0xd8,
    0x3c,0xd7,0xfe,0xfb,0x7e,0x74,0x5d,0x85,0x97,0x60,0xf3, 0x5f,0xfb,0xed,0xf9,0xd1,
    0x76,0x16,0x5d,0x83,0xcd,0x7f,0xef,0xb7,0xe7,0x45,0xd8, 0x59,0x76,0x0f,0x35,0xff,
    0x00,0xbe,0xdf,0x9d,0x17,0x61,0x65,0xd8,0x3c,0xd7,0xfe, 0xfb,0x7e,0x74,0x5d,0x85,
    0x97,0x60,0xf3,0x5f,0xfb,0xed,0xf9,0xd1,0x76,0x16,0x5d, 0x83,0xcd,0x7f,0xef,0xb7,
    0xe7,0x45,0xd8,0x59,0x76,0x0f,0x35,0xff,0x00,0xbe,0xdf, 0x9d,0x17,0x61,0x65,0xd8,
    0x3c,0xd7,0xfe,0xfb,0x7e,0x74,0x5d,0x85,0x97,0x60,0xf3, 0x5f,0xfb,0xed,0xf9,0xd1,
    0x76,0x16,0x5d,0x83,0xcd,0x7f,0xef,0xb7,0xe7,0x45,0xd8, 0x59,0x76,0x0f,0x35,0xff,
    0x00,0xbe,0xdf,0x9d,0x17,0x61,0x65,0xd8,0x3c,0xd7,0xfe, 0xfb,0x7e,0x74,0x5d,0x85,
    0x97,0x60,0xf3,0x5f,0xfb,0xed,0xf9,0xd1,0x76,0x16,0x5d, 0x8e,0xd3,0xe1,0x1c,0x8c,
    0xde,0x2c,0xbc,0xcb,0x13,0x8d,0x03,0x5d,0xef,0xff,0x00, 0x50,0xab,0xba,0xf2,0xf3,
    0x26,0xfd,0x8c,0x7f,0xc7,0x4f,0xff,0x00,0x4e,0x44,0xf6, 0x32,0xa4,0xbd,0xbc,0xff,
    0x00,0xeb,0xdd,0x4f,0xfd,0x37,0x33,0x88,0xaf,0x4c,0xf1, 0xc2,0x80,0x0a,0x00,0x28,
    0x00,0xa0,0x02,0x80,0x0a,0x00,0x28,0x00,0xa0,0x02,0x80, 0x0a,0x00,0x28,0x00,0xa0,
    0x02,0x80,0x0a,0x00,0x28,0x00,0xa0,0x02,0x80,0x0a,0x00, 0x28,0x00,0xa0,0x02,0x80,
    0x0a,0x00,0x28,0x03,0xb6,0xf8,0x49,0xff,0x00,0x23,0x6d, 0xe7,0xfd,0x80,0x35,0xdf,
    0xfd,0x35,0x5d,0xd7,0x97,0x98,0xff,0x00,0x06,0x3f,0xe3, 0xa7,0xff,0x00,0xa7,0x22,
    0x7b,0x39,0x57,0xf1,0xa7,0xff,0x00,0x5e,0xea,0x7f,0xe9, 0xb9,0x9c,0x4d,0x7a,0x87,
    0x8c,0x14,0x00,0x50,0x01,0x40,0x05,0x00,0x14,0x00,0x50, 0x01,0x40,0x05,0x00,0x14,
    0x00,0x50,0x01,0x40,0x05,0x00,0x14,0x00,0x50,0x01,0x40, 0x05,0x00,0x14,0x00,0x50,
    0x01,0x40,0x05,0x00,0x14,0x00,0x50,0x01,0x40,0x1d,0xb7, 0xc2,0x4f,0xf9,0x1b,0x6f,
    0x3f,0xec,0x01,0xae,0xff,0x00,0xe9,0xaa,0xee,0xbc,0xbc, 0xc7,0xf8,0x31,0xff,0x00,
    0x1d,0x3f,0xfd,0x39,0x13,0xd9,0xca,0xbf,0x8d,0x3f,0xfa, 0xf7,0x53,0xff,0x00,0x4d,
    0xcc,0xff,0xd9
    ]
  //#endregion
  function  arrayBufferToBase64(buffer){
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i += 1) {
    binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  var ret = arrayBufferToBase64(imageBlob)
  url = `data:image/png;base64,${ret}`
  oImg.src=url
  console.log(url);
})
