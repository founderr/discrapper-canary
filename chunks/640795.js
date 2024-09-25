n.d(t, {
    q: function () {
        return p;
    }
});
var r = n(411104);
var i = n(956067),
    a = n(544891),
    o = n(570140),
    s = n(710845),
    l = n(873741),
    u = n(139674);
let c = 'https://cdn.discordapp.com/bad-domains/updated_hashes.json',
    d = 'https://cdn.discordapp.com/bad-domains/current_revision.txt',
    { WEBAPP_ENDPOINT: _ } = window.GLOBAL_ENV,
    E = 'https:'.concat(_, '/bad-hash-delta'),
    f = 15,
    h = new s.Z('FetchBlockedDomain');
function p() {
    return i.Z.timeAsync('\uD83D\uDCBE', 'fetchBlockedDomainList', m);
}
async function m() {
    h.verbose('Fetching blocked domain list');
    try {
        let e;
        let t = parseInt((await a.tn.get(d)).text),
            n = u.Z.getCurrentRevision();
        if ((h.verbose('Server revision: '.concat(t, ', Client revision: ').concat(n)), null === n || n !== t)) {
            try {
                if (null === n || n > t) {
                    let e = null === n ? 'null' : 'greater than server revision number';
                    throw Error('Client revision number is ' + e);
                }
                if (t - n > f) throw Error('Client revision number is more than '.concat(f, ' behind the server revision number'));
                let r = (
                    await a.tn.get({
                        url: E,
                        query: { revision: n }
                    })
                ).body;
                if (0 === r.ADDED.length && 0 === r.REMOVED.length) {
                    h.verbose('No changes to blocked domains list.');
                    return;
                }
                h.verbose('Retrieved delta, domains added: '.concat(r.ADDED.length, ', domains removed: ').concat(r.REMOVED.length));
                let o = await i.Z.timeAsync('\uD83D\uDCBE', 'getBlockedDomainList', () => u.Z.getBlockedDomainList());
                if (null === o) throw Error('Blocked domain list is null');
                h.verbose('Blocked domains list length: '.concat(o.size, ' before update')),
                    r.ADDED.forEach((e) => {
                        if (o.has(e)) throw Error('Unable to add domain which is already in the blockedDomains set: '.concat(e));
                        o.add(e);
                    }),
                    r.REMOVED.forEach((e) => {
                        if (!o.has(e)) throw Error('Unable to removed domain which is not in the blockedDomains set: '.concat(e));
                        o.delete(e);
                    }),
                    (e = Array.from(o)),
                    h.verbose('Delta applied successfully');
            } catch (t) {
                if ((h.verbose('Unable to process domain list delta: '.concat(t.message)), (0, l.K)())) {
                    h.verbose('Slow network detected, not downloading full list');
                    return;
                }
                h.verbose('Downloading the full bad domains file'), (e = (await a.tn.get({ url: c })).body);
            }
            h.verbose('Blocked domains list length: '.concat(e.length, ' after update')),
                i.Z.time('\uD83D\uDCBE', 'Save Blocked Domain List', () =>
                    o.Z.dispatch({
                        type: 'BLOCKED_DOMAIN_LIST_FETCHED',
                        list: e,
                        revision: t
                    })
                );
        }
    } catch (e) {
        h.error(e);
    }
}
