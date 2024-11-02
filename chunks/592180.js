n.d(t, {
    a: function () {
        return r;
    },
    g: function () {
        return l;
    }
});
var i = n(911969);
function r(e) {
    return null != e.interactionMetadata;
}
function l(e) {
    var t, n;
    return (null === (t = e.interactionMetadata) || void 0 === t ? void 0 : t.type) === i.B8.APPLICATION_COMMAND && (null === (n = e.interactionMetadata) || void 0 === n ? void 0 : n.command_type) === i.yU.PRIMARY_ENTRY_POINT;
}
