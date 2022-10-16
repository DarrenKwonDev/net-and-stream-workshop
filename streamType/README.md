readable: readable.pipe(A)
writable : A.pipe(writable)
transform : A.pipe(transform).pipe(B)
duplex : A.pipe(duplex).pipe(B)
