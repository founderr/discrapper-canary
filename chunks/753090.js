var r = n(47120);
function i(e) {
    let t = new Map();
    return (n) => {
        let r = t.get(n);
        return void 0 === r && ((r = e(n)), t.set(n, r)), r;
    };
}
t.Z = { makeMemoizer: i };
