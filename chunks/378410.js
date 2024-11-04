n(47120);
var i = n(710845),
    r = n(914946),
    a = n(452426),
    l = n(981631);
let s = new i.Z(l.BZL);
t.Z = {
    [l.Etm.CAPTURE_LOG]: {
        validation: (e) =>
            (0, a.Z)(e)
                .required()
                .keys({
                    level: e.string().max(10).required(),
                    message: e.string().max(1000).required()
                }),
        handler(e) {
            let {
                socket: t,
                args: { level: n, message: i }
            } = e;
            (0, r.bu)(t.transport);
            let a = t.application.id,
                l = ''.concat(a, ' - ').concat(i);
            switch (n) {
                case 'log':
                    s.log(l);
                    break;
                case 'warn':
                    s.warn(l);
                    break;
                case 'debug':
                    s.verbose(l);
                    break;
                case 'info':
                    s.info(l);
                    break;
                case 'error':
                    s.error(l);
            }
        }
    }
};
