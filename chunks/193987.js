n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(735250);
n(470079);
var s = n(481060),
    a = n(346479),
    l = n(665906),
    r = n(689938);
function o(e) {
    let t = (0, l.Xb)(e),
        n = e.isLockedThread();
    if (t)
        return n
            ? (0, i.jsx)(s.MenuItem, {
                  id: 'unlock-thread',
                  label: e.isForumPost() ? r.Z.Messages.UNLOCK_FORUM_POST : r.Z.Messages.UNLOCK_THREAD,
                  action: () => a.Z.unlockThread(e)
              })
            : (0, i.jsx)(s.MenuItem, {
                  id: 'lock-thread',
                  label: e.isForumPost() ? r.Z.Messages.LOCK_FORUM_POST : r.Z.Messages.LOCK_THREAD,
                  action: () => a.Z.lockThread(e)
              });
}
