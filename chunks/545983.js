var i = r(286233),
    a = r(315016);
e.exports = function () {
    var e = a();
    return (
        i(
            String.prototype,
            { trim: e },
            {
                trim: function () {
                    return String.prototype.trim !== e;
                }
            }
        ),
        e
    );
};
