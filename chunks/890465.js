r.d(n, {
    V: function () {
        return i;
    }
});
class i {
    call() {
        try {
            this.task && this.task();
        } catch (e) {
            this.onError(e);
        } finally {
            (this.task = null), this.release(this);
        }
    }
    constructor(e, n) {
        (this.onError = e), (this.release = n), (this.task = null);
    }
}
