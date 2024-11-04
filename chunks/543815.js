n(47120);
var i = n(232567),
    r = n(996106),
    a = n(452426),
    l = n(863141),
    s = n(186901),
    o = n(981631);
t.Z = {
    [o.Etm.GET_USER]: {
        scope: s.lH,
        validation: (e) => (0, a.Z)(e).required().keys({ id: e.string().required() }),
        handler(e) {
            let {
                args: { id: t }
            } = e;
            return (0, i.PR)(t)
                .then(l.Z)
                .catch(() => {
                    throw new r.Z({ errorCode: o.lTL.INVALID_USER }, 'Invalid user id: '.concat(t));
                });
        }
    }
};
