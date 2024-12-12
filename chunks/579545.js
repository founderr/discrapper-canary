var i = r(406434);
function a(e) {
    var n = e.state,
        r = e.name;
    n.modifiersData[r] = (0, i.Z)({
        reference: n.rects.reference,
        element: n.rects.popper,
        strategy: 'absolute',
        placement: n.placement
    });
}
n.Z = {
    name: 'popperOffsets',
    enabled: !0,
    phase: 'read',
    fn: a,
    data: {}
};
