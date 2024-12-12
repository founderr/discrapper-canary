var i = r(47120);
function a(e) {
    let n = new Map();
    return (r) => {
        let i = n.get(r);
        return void 0 === i && ((i = e(r)), n.set(r, i)), i;
    };
}
n.Z = { makeMemoizer: a };
