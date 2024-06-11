"use strict";
n.r(t);
var r = n("470079"),
  i = n.n(r),
  a = n("844303");
t.default = function(e) {
  var t = e.onClick,
    n = e.label,
    r = e.children,
    o = e.active,
    s = (0, a.default)({
      default: {
        button: {
          backgroundImage: "linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%)",
          border: "1px solid #878787",
          borderRadius: "2px",
          height: "20px",
          boxShadow: "0 1px 0 0 #EAEAEA",
          fontSize: "14px",
          color: "#000",
          lineHeight: "20px",
          textAlign: "center",
          marginBottom: "10px",
          cursor: "pointer"
        }
      },
      active: {
        button: {
          boxShadow: "0 0 0 1px #878787"
        }
      }
    }, {
      active: o
    });
  return i().createElement("div", {
    style: s.button,
    onClick: t
  }, n || r)
}