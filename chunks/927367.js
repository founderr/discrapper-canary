"use strict";
n.r(t), n.d(t, {
  UploadErrorCodes: function() {
    return s
  },
  default: function() {
    return a
  }
});
var r, s, o = n("782340");
(r = s || (s = {}))[r.GENERAL = 0] = "GENERAL", r[r.NO_FILE = 1] = "NO_FILE", r[r.PROGRESS = 2] = "PROGRESS", r[r.UPLOAD = 3] = "UPLOAD", r[r.READ = 4] = "READ";
var a = class e {
  get displayMessage() {
    switch (this.code) {
      case 1:
        return o.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_NO_FILE;
      case 2:
        return o.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_PROGRESS;
      case 3:
        return o.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_UPLOAD;
      case 4:
        return o.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_READ;
      default:
        return o.default.Messages.UPLOAD_DEBUG_LOG_FAILURE
    }
  }
  constructor(e) {
    this.code = e
  }
}