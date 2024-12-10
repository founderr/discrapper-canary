n(47120);
var i = n(232567),
    r = n(996106),
    l = n(452426),
    a = n(863141),
    o = n(186901),
    s = n(981631);
t.Z = {
    [s.Etm.GET_USER]: {
        scope: o.lH,
        validation: (e) => (0, l.Z)(e).required().keys({ id: e.string().required() }),
        handler(e) {
            let {
                args: { id: t }
            } = e;
            return (0, i.PR)(t)
                .then(a.Z)
                .catch(() => {
                    throw new r.Z({ errorCode: s.lTL.INVALID_USER }, 'Invalid user id: '.concat(t));
                });
        }
    }
};
