let i = r(517024);
function a() {}
(e.exports = a),
    (a.prototype.get = function (e) {
        return this.header[e.toLowerCase()];
    }),
    (a.prototype._setHeaderProperties = function (e) {
        let n = e['content-type'] || '';
        this.type = i.type(n);
        let r = i.params(n);
        for (let e in r) Object.prototype.hasOwnProperty.call(r, e) && (this[e] = r[e]);
        this.links = {};
        try {
            e.link && (this.links = i.parseLinks(e.link));
        } catch (e) {}
    }),
    (a.prototype._setStatusProperties = function (e) {
        let n = Math.trunc(e / 100);
        (this.statusCode = e), (this.status = this.statusCode), (this.statusType = n), (this.info = 1 === n), (this.ok = 2 === n), (this.redirect = 3 === n), (this.clientError = 4 === n), (this.serverError = 5 === n), (this.error = (4 === n || 5 === n) && this.toError()), (this.created = 201 === e), (this.accepted = 202 === e), (this.noContent = 204 === e), (this.badRequest = 400 === e), (this.unauthorized = 401 === e), (this.notAcceptable = 406 === e), (this.forbidden = 403 === e), (this.notFound = 404 === e), (this.unprocessableEntity = 422 === e);
    });
