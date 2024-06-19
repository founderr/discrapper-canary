var _ = S(442837),
  t = S(339085);
e.Z = function(E, e) {
  return (0, _.e7)([t.Z], () => {
    var S;
    if (null == e) return null;
    let _ = t.Z.getDisambiguatedEmojiContext(E);
    return null !== (S = _.getById(e)) && void 0 !== S ? S : _.getByName(e)
  }, [E, e])
}