
function n(e) {
  return (n = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
return e.__proto__ || Object.getPrototypeOf(e);
  })(e);
}
r.d(t, {
  Z: function() {
return n;
  }
});