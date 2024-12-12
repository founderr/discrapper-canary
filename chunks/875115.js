function n(e) {
    for (var n, r = e.length; r--; )
        if (255 === (n = e.readUInt8(r))) e.writeUInt8(0, r);
        else {
            n++, e.writeUInt8(n, r);
            break;
        }
}
e.exports = n;
