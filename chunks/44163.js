var i = r(585483),
    a = r(5967),
    s = r(933513),
    o = r(981631);
n.Z = {
    init() {
        document.addEventListener('paste', (e) => {
            !(0, s.Z)((0, a.uB)(e)) && i.S.dispatchToLastSubscribed(o.CkL.GLOBAL_CLIPBOARD_PASTE, { event: e });
        });
    }
};
