r.d(n, {
    g: function () {
        return a;
    }
});
var i = r(890465);
class a {
    create(e) {
        let n = this.freeTasks,
            r = n.length ? n.pop() : new i.V(this.onError, (e) => (n[n.length] = e));
        return (r.task = e), r;
    }
    constructor(e) {
        (this.onError = e), (this.freeTasks = []);
    }
}
