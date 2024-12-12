var i = r(627494);
var a = r(757143);
let s = /[<>:"/\\|?*\.]/g;
function o(e) {
    return e.replaceAll(s, '').trim().replaceAll(' ', '_');
}
n.Z = o;
