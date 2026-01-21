const	chess = true; 

const z1d =
{
	o4p    : 0,
	a4y  : 1,
	u2f  : 2,
	v6c    : 3,
  v0g   : 4,
	r3q    : 5,
	s7a    : 6,
	a0l  : 7,
	x9a  : 8,
	l7a    : 9,
	y5w   : 10,
	m9o    : 11,
	y8b        : 12,
};

const c9i =
{
	l0x        : 0,
	e3v        : 1,
};

const	a1 = 0;
const n0j = 1;
const t3m = 2;
const m6d = 3;
const q8l = 4;
const k2k = 5;
const b2b = 6;
const f8a = 7;
const	a2 = 8;
const s8p = 9;
const u3w = 10;
const c4e = 11;
const n3j = 12;
const q9j = 13;
const w9v = 14;
const v7v = 15;
const	a3 = 16;
const c2f = 17;
const j3x = 18;
const w8y = 19;
const e9j = 20;
const k9j = 21;
const v3f = 22;
const w5n = 23;
const	a4 = 24;
const m3u = 25;
const h0a = 26;
const h6q = 27;
const v8v = 28;
const x8o = 29;
const z5e = 30;
const n0h = 31;
const	a5 = 32;
const i6m = 33;
const m0e = 34;
const g6v = 35;
const l5s = 36;
const w9a = 37;
const p2d = 38;
const x5j = 39;
const	a6 = 40;
const m8t = 41;
const u1n = 42;
const d6a = 43;
const e2n = 44;
const z6k = 45;
const y7j = 46;
const o5o = 47;
const	a7 = 48;
const m7r = 49;
const v7n = 50;
const t6q = 51;
const i8b = 52;
const x0a = 53;
const r5s = 54;
const x8a = 55;
const	a8 = 56;
const f6z = 57;
const s9l = 58;
const d5j = 59;
const a1w = 60;
const x0y = 61;
const k9q = 62;
const j2f = 63;
const g7f = 64;

const z9v = 0;
const p4k = 1;
const m2q = 2;
const p3h = 3;
const t3r = 4;
const i7v = 5;
const w8g = 6;
const a3q = 7;
const k1a = 8;

const	rank_1 = 0;
const j1o = 1;
const b5z = 2;
const b3z = 3;
const v6n = 4;
const f2r = 5;
const n3i = 6;
const l5t = 7;
const l4x = 8;

const d6i        = 8;
const i9t       = 64;
const e2f      = 16;

const t9r =
[
	z1d.v6c,    
  z1d.a4y,  
  z1d.u2f,  
  z1d.v0g,   
  z1d.r3q,    
  z1d.u2f,  
  z1d.a4y,  
  z1d.v6c,    
	z1d.o4p,    
  z1d.o4p,    
  z1d.o4p,    
  z1d.o4p,    
  z1d.o4p,    
  z1d.o4p,    
  z1d.o4p,    
  z1d.o4p,    
	z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
	z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
	z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
	z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
	z1d.s7a,    
  z1d.s7a,    
  z1d.s7a,    
  z1d.s7a,    
  z1d.s7a,    
  z1d.s7a,    
  z1d.s7a,    
  z1d.s7a,    
	z1d.l7a,    
  z1d.a0l,  
  z1d.x9a,  
  z1d.y5w,   
  z1d.m9o,    
  z1d.x9a,  
  z1d.a0l,  
  z1d.l7a,    
];

const l1k =
[
	z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
	z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
	z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
	z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
	z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
	z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
	z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
	z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
  z1d.y8b,        
];

const o8l =
[
	a1, n0j, t3m, m6d, q8l, k2k, b2b, f8a,
	a2, s8p, u3w, c4e, n3j, q9j, w9v, v7v,
	a3, c2f, j3x, w8y, e9j, k9j, v3f, w5n,
	a4, m3u, h0a, h6q, v8v, x8o, z5e, n0h,
	a5, i6m, m0e, g6v, l5s, w9a, p2d, x5j,
	a6, m8t, u1n, d6a, e2n, z6k, y7j, o5o,
	a7, m7r, v7n, t6q, i8b, x0a, r5s, x8a,
	a8, f6z, s9l, d5j, a1w, x0y, k9q, j2f,
];

const e8u =
[
	z9v,
  p4k,
  m2q,
  p3h,
  t3r,
  i7v,
  w8g,
  a3q,
];

const a0d =
[
	rank_1,
  j1o,
  b5z,
  b3z,
  v6n,
  f2r,
  n3i,
  l5t,
];

function n0a(s7n)
{
	return s7n == z1d.s7a ||
		s7n == z1d.a0l ||
    s7n == z1d.x9a ||
    s7n == z1d.l7a ||
    s7n == z1d.y5w ||
    s7n == z1d.m9o;
}

function v4v(s7n)
{
	return s7n == z1d.o4p ||
		s7n == z1d.a4y ||
    s7n == z1d.u2f ||
    s7n == z1d.v6c ||
    s7n == z1d.v0g ||
    s7n == z1d.r3q;
}

function m4z(s7n)
{
	return s7n == z1d.o4p || s7n == z1d.s7a;
}

function v2m(s7n)
{
	return s7n == z1d.a4y || s7n == z1d.a0l;
}

function q3s(s7n)
{
	return s7n == z1d.u2f || s7n == z1d.x9a;
}

function i2h(s7n)
{
	return s7n == z1d.v6c || s7n == z1d.l7a;
}

function w2k(s7n)
{
	return s7n == z1d.v0g || s7n == z1d.y5w;
}

function k9e(s7n)
{
	return s7n == z1d.r3q || s7n == z1d.m9o;
}

function i6q(w0g)
{
	if (w0g == g7f)
	{
		return g7f;
	}
	else
	{
		return i9t - w0g - 1;
	}
}

const s7c =
[
	z9v, p4k, m2q, p3h, t3r, i7v, w8g, a3q,
	z9v, p4k, m2q, p3h, t3r, i7v, w8g, a3q,
	z9v, p4k, m2q, p3h, t3r, i7v, w8g, a3q,
	z9v, p4k, m2q, p3h, t3r, i7v, w8g, a3q,
	z9v, p4k, m2q, p3h, t3r, i7v, w8g, a3q,
	z9v, p4k, m2q, p3h, t3r, i7v, w8g, a3q,
	z9v, p4k, m2q, p3h, t3r, i7v, w8g, a3q,
	z9v, p4k, m2q, p3h, t3r, i7v, w8g, a3q,
];

function j0l(w0g)
{
	return s7c[w0g];
}

const e6k =
[
	rank_1, rank_1, rank_1, rank_1, rank_1, rank_1, rank_1, rank_1,
	j1o, j1o, j1o, j1o, j1o, j1o, j1o, j1o,
	b5z, b5z, b5z, b5z, b5z, b5z, b5z, b5z,
	b3z, b3z, b3z, b3z, b3z, b3z, b3z, b3z,
	v6n, v6n, v6n, v6n, v6n, v6n, v6n, v6n,
	f2r, f2r, f2r, f2r, f2r, f2r, f2r, f2r,
	n3i, n3i, n3i, n3i, n3i, n3i, n3i, n3i,
	l5t, l5t, l5t, l5t, l5t, l5t, l5t, l5t,
];

function t3h(w0g)
{
	return e6k[w0g];
}

function p2b(a, b)
{
	for (let i = 0; i < a.length; i++)
	{
		if (a[i] !== b[i])
		{
			return false;
		}
	}
	return true;
}

function g6d(a, b)
{
	for (let i = 0; i < b.length; i++)
	{
		a[i] = b[i];
	}
}

function q2w(a9k, s7n)
{
	let t9o = 0;
	for (const q1x of a9k)
	{
		if (q1x == s7n)
		{
			t9o++;
		}
	}
	return t9o;
}

var stringToSquareMapInited = false;
const b0e = new Map();
function n5h()
{
  b0e.set("\x61\x31", a1);
  b0e.set("\x61\x32", a2);
  b0e.set("\x61\x33", a3);
  b0e.set("\x61\x34", a4);
  b0e.set("\x61\x35", a5);
  b0e.set("\x61\x36", a6);
  b0e.set("\x61\x37", a7);
  b0e.set("\x61\x38", a8);
  b0e.set("\x62\x31", n0j);
  b0e.set("\x62\x32", s8p);
  b0e.set("\x62\x33", c2f);
  b0e.set("\x62\x34", m3u);
  b0e.set("\x62\x35", i6m);
  b0e.set("\x62\x36", m8t);
  b0e.set("\x62\x37", m7r);
  b0e.set("\x62\x38", f6z);
  b0e.set("\x63\x31", t3m);
  b0e.set("\x63\x32", u3w);
  b0e.set("\x63\x33", j3x);
  b0e.set("\x63\x34", h0a);
  b0e.set("\x63\x35", m0e);
  b0e.set("\x63\x36", u1n);
  b0e.set("\x63\x37", v7n);
  b0e.set("\x63\x38", s9l);
  b0e.set("\x64\x31", m6d);
  b0e.set("\x64\x32", c4e);
  b0e.set("\x64\x33", w8y);
  b0e.set("\x64\x34", h6q);
  b0e.set("\x64\x35", g6v);
  b0e.set("\x64\x36", d6a);
  b0e.set("\x64\x37", t6q);
  b0e.set("\x64\x38", d5j);
  b0e.set("\x65\x31", q8l);
  b0e.set("\x65\x32", n3j);
  b0e.set("\x65\x33", e9j);
  b0e.set("\x65\x34", v8v);
  b0e.set("\x65\x35", l5s);
  b0e.set("\x65\x36", e2n);
  b0e.set("\x65\x37", i8b);
  b0e.set("\x65\x38", a1w);
  b0e.set("\x66\x31", k2k);
  b0e.set("\x66\x32", q9j);
  b0e.set("\x66\x33", k9j);
  b0e.set("\x66\x34", x8o);
  b0e.set("\x66\x35", w9a);
  b0e.set("\x66\x36", z6k);
  b0e.set("\x66\x37", x0a);
  b0e.set("\x66\x38", x0y);
  b0e.set("\x67\x31", b2b);
  b0e.set("\x67\x32", w9v);
  b0e.set("\x67\x33", v3f);
  b0e.set("\x67\x34", z5e);
  b0e.set("\x67\x35", p2d);
  b0e.set("\x67\x36", y7j);
  b0e.set("\x67\x37", r5s);
  b0e.set("\x67\x38", k9q);
  b0e.set("\x68\x31", f8a);
  b0e.set("\x68\x32", v7v);
  b0e.set("\x68\x33", w5n);
  b0e.set("\x68\x34", n0h);
  b0e.set("\x68\x35", x5j);
  b0e.set("\x68\x36", o5o);
  b0e.set("\x68\x37", x8a);
  b0e.set("\x68\x38", j2f);
}

function e8v(e6j)
{
  if (!stringToSquareMapInited)
  {
    n5h();
    stringToSquareMapInited = true;
  }
  if (b0e.has(e6j))
  {
    return b0e.get(e6j);
  }
  else
  {
		return g7f;
  }
}

function u4t(w0g)
{
  return e0d[w0g];
}

const c0q  = b2b;
const r3o  = k2k;
const t4r = t3m;
const j9e = m6d;
const c8a  = k9q;
const t5t  = x0y;
const b9g = s9l;
const d3h = d5j;

const e0d =
[
	"\x61\x31",	"\x62\x31",	"\x63\x31",	"\x64\x31",	"\x65\x31", "\x66\x31", "\x67\x31", "\x68\x31",
	"\x61\x32",	"\x62\x32",	"\x63\x32",	"\x64\x32",	"\x65\x32", "\x66\x32", "\x67\x32", "\x68\x32",
	"\x61\x33",	"\x62\x33",	"\x63\x33",	"\x64\x33",	"\x65\x33", "\x66\x33", "\x67\x33", "\x68\x33",
	"\x61\x34",	"\x62\x34",	"\x63\x34",	"\x64\x34",	"\x65\x34", "\x66\x34", "\x67\x34", "\x68\x34",
	"\x61\x35",	"\x62\x35",	"\x63\x35",	"\x64\x35",	"\x65\x35", "\x66\x35", "\x67\x35", "\x68\x35",
	"\x61\x36",	"\x62\x36",	"\x63\x36",	"\x64\x36",	"\x65\x36", "\x66\x36", "\x67\x36", "\x68\x36",
	"\x61\x37",	"\x62\x37",	"\x63\x37",	"\x64\x37",	"\x65\x37", "\x66\x37", "\x67\x37", "\x68\x37",
	"\x61\x38",	"\x62\x38",	"\x63\x38",	"\x64\x38",	"\x65\x38", "\x66\x38", "\x67\x38", "\x68\x38",
];

const a6w =
[
	'1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
];

const f5q =
[
	'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
];




const v5n =
[
	true,  false,   true,  false, true, false,  true, false,
	false,  true,  false, true, false, true, false, true,
	true,  false,   true,  false, true, false,  true, false,
	false,  true,  false, true, false, true, false, true,
	true,  false,   true,  false, true, false,  true, false,
	false,  true,  false, true, false, true, false, true,
	true,  false,   true,  false, true, false,  true, false,
	false,  true,  false,  true, false,  true, false, true,
];

function d9n(w0g)
{
	return v5n[w0g];
}



















function a4m(n0c)
{
  if (n0c == '1')
  {
    return rank_1;
  }
  else if (n0c == '2')
  {
    return j1o;
  }
  else if (n0c == '3')
  {
    return b5z;
  }
  else if (n0c == '4')
  {
    return b3z;
  }
  else if (n0c == '5')
  {
    return v6n;
  }
  else if (n0c == '6')
  {
    return f2r;
  }
  else if (n0c == '7')
  {
    return n3i;
  }
  else if (n0c == '8')
  {
    return l5t;
  }
	else
	{
		return l4x;
	}
}

function v1d(n0c)
{
  if (n0c == 'a')
  {
    return z9v;
  }
  else if (n0c == 'b')
  {
    return p4k;
  }
  else if (n0c == 'c')
  {
    return m2q;
  }
  else if (n0c == 'd')
  {
    return p3h;
  }
  else if (n0c == 'e')
  {
    return t3r;
  }
  else if (n0c == 'f')
  {
    return i7v;
  }
  else if (n0c == 'g')
  {
    return w8g;
  }
  else if (n0c == 'h')
  {
    return a3q;
  }
  else
	{
		return k1a;
	}
}

function t5o(g8t)
{
  return f5q[g8t];
}

function x7v(i8p)
{
  return a6w[i8p];
}


class d4t
{

constructor()
{
	this.r1m = false;
	this.c7b = q8l;
	this.h9v = a1w;
	this.r1b = f8a;
	this.j8u = a1;
	this.b8x = j2f;
	this.e4r = a8;
	this.e9s = false;
	this.c8q = false;
	this.t4c = false;
	this.u9q = false;
	this.d1r = g7f;
}

t9a()
{
	let n7p = new d4t();
  return Object.assign(n7p, this);
}

}


class z1a
{

constructor()
{
  this.j5x = Array(i9t).fill(z1d.y8b);
 	this.j7r = c9i.l0x;
 	this.w1f = new d4t();
 	this.t3z();
}

t9a()
{
	let l0j = new z1a();
	g6d(l0j.j5x, this.j5x);
	l0j.j7r = this.j7r;
  l0j.w1f = this.w1f.t9a();
  l0j.whiteKing_ = this.whiteKing_;
	l0j.blackKing_ = this.blackKing_;
	return l0j;
}

m1t(v1n)
{
	return this.j7r == v1n.j7r &&
		p2b(this.j5x, v1n.j5x);
}

w0w(v1n)
{
	return !this.m1t(v1n);
}

p6a()
{
 	g6d(this.j5x, t9r);
 	this.j7r = c9i.l0x;
  this.w1f.r1m = false;
	this.w1f.c7b = q8l;
	this.w1f.h9v = a1w;
	this.w1f.r1b = f8a;
	this.w1f.j8u = a1;
	this.w1f.b8x = j2f;
	this.w1f.e4r = a8;
	this.w1f.d1r = g7f;
	this.w1f.e9s = true;
	this.w1f.c8q = true;
	this.w1f.t4c = true;
	this.w1f.u9q = true;
 	this.whiteKing_ = q8l;
	this.blackKing_ = a1w;
}

g0c()
{
	return this.j7r == c9i.l0x && this.t6j();
}

t6j()
{
	return p2b(this.j5x, t9r);
}

t3z()
{
	this.j5x.fill(z1d.y8b);
	this.j7r = c9i.l0x;
	this.w1f.r1m = false;
	this.w1f.c7b = q8l;
	this.w1f.h9v = a1w;
	this.w1f.r1b = f8a;
	this.w1f.j8u = a1;
	this.w1f.b8x = j2f;
	this.w1f.e4r = a8;
	this.w1f.d1r = g7f;
	this.w1f.e9s = false;
	this.w1f.c8q = false;
	this.w1f.t4c = false;
	this.w1f.u9q = false;
  this.whiteKing_ = g7f;
  this.blackKing_ = g7f;
}

x1m()
{
	return this.j7r == c9i.l0x && this.k7b();
}

k7b()
{
	return this.j5x.every(z1d.y8b);
}

a9k()
{
  return this.j5x.slice();
}

r5v(w0g)
{
	return this.j5x[w0g];
}

y2x(w0g, s7n)
{
	if (this.j5x[w0g] == z1d.r3q)
	{
		this.whiteKing_ = g7f;
	}
	else if (this.j5x[w0g] == z1d.m9o)
	{
		this.blackKing_ = g7f;
	}
	if (s7n == z1d.r3q)
	{
		this.whiteKing_ = w0g;
	}
	else if (s7n == z1d.m9o)
	{
		this.blackKing_ = w0g;
	}
	this.j5x[w0g] = s7n;
}

c8l()
{
	this.j7r = c9i.l0x;
}

j5i()
{
	this.j7r = c9i.e3v;
}

x1f()
{
	if (this.j7r == c9i.l0x)
	{
		this.j7r = c9i.e3v;
	}
	else
	{
		this.j7r = c9i.l0x;
	}
}

v3p()
{
	return this.j7r == c9i.l0x;
}

t3s()
{
	return this.j7r == c9i.e3v;
}

a5o(w0g)
{
	return this.j5x[w0g] == z1d.y8b;
}

v4v(w0g)
{
	let s7n = this.j5x[w0g];
	return s7n == z1d.o4p ||
		s7n == z1d.a4y ||
    s7n == z1d.u2f ||
    s7n == z1d.v6c ||
    s7n == z1d.v0g ||
    s7n == z1d.r3q;
}

n0a(w0g)
{
	let s7n = this.j5x[w0g];
	return s7n == z1d.s7a ||
		s7n == z1d.a0l ||
    s7n == z1d.x9a ||
    s7n == z1d.l7a ||
    s7n == z1d.y5w ||
    s7n == z1d.m9o;
}

o8e(w0g)
{
  let s7n = this.j5x[w0g];
	return s7n == z1d.o4p;
}

k3j(w0g)
{
  let s7n = this.j5x[w0g];
	return s7n == z1d.a4y;
}

c3n(w0g)
{
  let s7n = this.j5x[w0g];
	return s7n == z1d.u2f;
}

k6y(w0g)
{
  let s7n = this.j5x[w0g];
	return s7n == z1d.v6c;
}

b1y(w0g)
{
  let s7n = this.j5x[w0g];
	return s7n == z1d.v0g;
}

o2x(w0g)
{
  let s7n = this.j5x[w0g];
	return s7n == z1d.r3q;
}

o4o(w0g)
{
  let s7n = this.j5x[w0g];
	return s7n == z1d.s7a;
}

m3w(w0g)
{
  let s7n = this.j5x[w0g];
	return s7n == z1d.a0l;
}

d5o(w0g)
{
  let s7n = this.j5x[w0g];
	return s7n == z1d.x9a;
}

n9c(w0g)
{
  let s7n = this.j5x[w0g];
	return s7n == z1d.l7a;
}

a1l(w0g)
{
  let s7n = this.j5x[w0g];
	return s7n == z1d.y5w;
}

a8j(w0g)
{
  let s7n = this.j5x[w0g];
	return s7n == z1d.m9o;
}

h7c()
{
  let t9o = 0;
	for (const w0g of o8l)
	{
    if (this.v4v(w0g))
		{
			t9o++;
		}
	}
	return t9o;
}

c6t()
{
  let t9o = 0;
	for (const w0g of o8l)
	{
    if (this.n0a(w0g))
		{
			t9o++;
		}
	}
	return t9o;
}

s5a(o1d)
{
  this.w1f = o1d.t9a();
}

o1d()
{
  return this.w1f.t9a();
}

i4o(e7j)
{
 	this.w1f.d1r = g7f; 
	if (e7j.h9r())
	{
		this.x1f();
		return;
	}
	if (e7j.v4v())
	{
		if (e7j.j5h())
		{
			this.j5x[e7j.k0j] = z1d.y8b;
			if (e7j.v0t == z1d.l7a)
			{
				if (e7j.k0j == this.w1f.e4r)
				{
					this.w1f.u9q = false;
				}
				else if (e7j.k0j == this.w1f.b8x)
				{
					this.w1f.t4c = false;
				}
			}
		}
		this.j5x[e7j.u1z] = z1d.y8b;
		this.j5x[e7j.s5v] = e7j.m7o;
		if (e7j.f7g == z1d.o4p)
		{
			if ((e7j.s5v - e7j.u1z) == 16)
			{
				this.w1f.d1r = (e7j.u1z + 8);
			}
		}
		else if (e7j.f7g == z1d.v6c)
		{
			if (e7j.u1z == this.w1f.j8u)
			{
				this.w1f.c8q = false;
			}
			else if (e7j.u1z == this.w1f.r1b)
			{
				this.w1f.e9s = false;
			}
		}
		else if (e7j.f7g == z1d.r3q)
		{
			if (e7j.v3o())
			{
				if (e7j.s5v == t4r)
				{
					
					if (this.w1f.j8u != e7j.s5v)
					{
						this.j5x[this.w1f.j8u] = z1d.y8b;
					}
					this.j5x[j9e] = z1d.v6c;
				}
				else if (e7j.s5v == c0q)
				{
					
					if (this.w1f.r1b != e7j.s5v)
					{
						this.j5x[this.w1f.r1b] = z1d.y8b;
					}
					this.j5x[r3o] = z1d.v6c;
				}
			}
			this.w1f.c8q = false;
			this.w1f.e9s = false;
			this.whiteKing_ = e7j.s5v;
		}
	}
	else
	{
		if (e7j.j5h())
		{
			this.j5x[e7j.k0j] = z1d.y8b;
			if (e7j.v0t == z1d.v6c)
			{
				if (e7j.k0j == this.w1f.j8u)
				{
					this.w1f.c8q = false;
				}
				else if (e7j.k0j == this.w1f.r1b)
				{
					this.w1f.e9s = false;
				}
			}
		}
		this.j5x[e7j.u1z] = z1d.y8b;
		this.j5x[e7j.s5v] = e7j.m7o;
		if (e7j.f7g == z1d.s7a)
		{
			if ((e7j.s5v - e7j.u1z) == -16)
			{
				this.w1f.d1r = (e7j.u1z - 8);
			}
		}
		else if (e7j.f7g == z1d.l7a)
		{
			if (e7j.u1z == this.w1f.e4r)
			{
				this.w1f.u9q = false;
			}
			else if (e7j.u1z == this.w1f.b8x)
			{
				this.w1f.t4c = false;
			}
		}
		else if (e7j.f7g == z1d.m9o)
		{
			if (e7j.v3o())
			{
				if (e7j.s5v == b9g)
				{
					
					if (this.w1f.e4r != e7j.s5v)
					{
						this.j5x[this.w1f.e4r] = z1d.y8b;
					}
					this.j5x[d3h] = z1d.l7a;
				}
				else if (e7j.s5v == c8a)
				{
					
					if (this.w1f.b8x != e7j.s5v)
					{
						this.j5x[this.w1f.b8x] = z1d.y8b;
					}
					this.j5x[t5t] = z1d.l7a;
				}
			}
			this.w1f.u9q = false;
			this.w1f.t4c = false;
			this.blackKing_ = e7j.s5v;
		}
	}
	this.x1f();
}

i3c(e7j)
{
 	if (e7j.h9r())
	{
		this.x1f();
		return;
	}
	if (e7j.v4v())
	{
		this.j5x[e7j.s5v] = z1d.y8b;
		this.j5x[e7j.u1z] = e7j.f7g;
		if (e7j.f7g == z1d.r3q)
		{
			if (e7j.v3o())
			{
				if (e7j.s5v == t4r)
				{
					
					if (j9e != e7j.u1z)
					{
						this.j5x[j9e] = z1d.y8b;
					}
					this.j5x[this.w1f.j8u] = z1d.v6c;
				}
				else if (e7j.s5v == c0q)
				{
					
					if (r3o != e7j.u1z)
					{
						this.j5x[r3o] = z1d.y8b;
					}
					this.j5x[this.w1f.r1b] = z1d.v6c;
				}
			}
			this.whiteKing_ = e7j.u1z;
		}
		if (e7j.j5h())
		{
			this.j5x[e7j.k0j] = e7j.v0t;
		}
	}
	else
	{
		this.j5x[e7j.s5v] = z1d.y8b;
		this.j5x[e7j.u1z] = e7j.f7g;
		if (e7j.f7g == z1d.m9o)
		{
			if (e7j.v3o())
			{
				if (e7j.s5v == b9g)
				{
					
					if (d3h != e7j.u1z)
					{
						this.j5x[d3h] = z1d.y8b;
					}
					this.j5x[this.w1f.e4r] = z1d.l7a;
				}
				else if (e7j.s5v == c8a)
				{
					
					if (t5t != e7j.u1z)
					{
						this.j5x[t5t] = z1d.y8b;
					}
					this.j5x[this.w1f.b8x] = z1d.l7a;
				}
			}
			this.blackKing_ = e7j.u1z;
		}
		if (e7j.j5h())
		{
			this.j5x[e7j.k0j] = e7j.v0t;
		}
	}
	this.x1f();
}

r3q()
{
  return this.whiteKing_;
}

m9o()
{
  return this.blackKing_;
}

c0u()
{
	return this.w1f.e9s;
}

j3i()
{
	return this.w1f.c8q;
}

j0z()
{
	return this.w1f.t4c;
}

m4w()
{
	return this.w1f.u9q;
}

c7b()
{
  return this.w1f.c7b;
}

h9v()
{
  return this.w1f.h9v;
}

r1b()
{
  return this.w1f.r1b;
}

j8u()
{
  return this.w1f.j8u;
}

b8x()
{
  return this.w1f.b8x;
}

e4r()
{
  return this.w1f.e4r;
}

d1r()
{
  return this.w1f.d1r;
}

k7s()
{
	return this.w1f.r1m;
}

}
const y6b = 0;
const b7z   = 1;
const x6d  = y6b;

function t9k()
{
  let u5y = [];
	u5y.push("\x43\x42\x75\x72\x6e\x65\x74\x74\x74\x20\x28\x4c\x69\x63\x68\x65\x73\x73\x29");
	u5y.push("\x4d\x65\x72\x69\x64\x61\x20\x28\x4c\x69\x63\x68\x65\x73\x73\x29");
	return u5y;
}

class e1b
{

constructor()
{
	this.q6e = new h5b();
	this.z7u = null;
}

t9a()
{
	let s5u = new e1b();
	s5u.q6e = this.q6e.t9a();
	s5u.z7u = null;
	if (this.z7u)
	{
		s5u.z7u = this.z7u.t9a();
	}
	return s5u;
}

m1t(v1n)
{
	if (this.q6e.w0w(v1n))
	{
		return false;
	}
	return true;
}

w0w(v1n)
{
	return !this.m1t(v1n);
}

y8b()
{
	return this.q6e.y8b();
}

u1z()
{
	return this.q6e.u1z;
}

s5v()
{
	return this.q6e.s5v;
}

f7g()
{
	return this.q6e.f7g;
}

m7o()
{
	return this.q6e.m7o;
}

k0j()
{
	return this.q6e.k0j;
}

v0t()
{
	return this.q6e.v0t;
}

f6j()
{
	return this.q6e.f6j();
}

v4v()
{
	return this.q6e.v4v();
}

n0a()
{
	return this.q6e.n0a();
}

h5v()
{
	return this.q6e.h5v();
}

h9r()
{
	return this.q6e.h9r();
}

j5h()
{
	return this.q6e.j5h();
}

h5d()
{
	if (this.z7u == null)
	{
		this.z7u = new z2t();
	}
}

x6n()
{
	if (this.z7u)
	{
		if (this.z7u.y8b())
		{
			this.c7k();
		}
	}
}

z3i()
{
	return this.z7u != null;
}

c7k()
{
	this.z7u = null;
}

m5v(v4y)
{
	this.h5d();
	this.z7u = v4y.t9a();
}

t5v()
{
	return this.z7u;
}

x4v(v1n)
{
	if (this.z7u && !v1n.z7u)
	{
		return false;
	}
	if (!this.z7u && v1n.z7u)
	{
		return false;
	}
	if (!this.z7u && !v1n.z7u)
	{
		return true;
	}
	return this.z7u.m1t(v1n.z7u);
}

b2z()
{
	if (this.z7u)
	{
		this.z7u.q4w = '';
		this.x6n();
	}
}

e3c()
{
	if (this.z7u)
	{
		return this.z7u.q4w.length != 0;
	}
	else
	{
		return false;
	}
}

q4w()
{
	if (this.z7u)
	{
		return this.z7u.q4w;
	}
	else
	{
		return '';
	}
}

k5b(s6r)
{
	this.h5d();
	this.z7u.q4w = s6r;
	this.x6n();
}

d0o()
{
	if (this.z7u)
	{
		this.z7u.y3r = '';
		this.x6n();
	}
}

a9g()
{
	if (this.z7u)
	{
		return this.z7u.y3r.length != 0;
	}
	else
	{
		return false;
	}
}

y3r()
{
	if (this.z7u)
	{
		return this.z7u.y3r;
	}
	else
	{
		return '';
	}
}

j8b(s6r)
{
	this.h5d();
	this.z7u.y3r = s6r;
	this.x6n();
}

t4w()
{
	if (this.z7u)
	{
		this.z7u.q6q = x2c.b4x;
		this.x6n();
	}
}

s8q()
{
	if (this.z7u)
	{
		return this.z7u.q6q != x2c.b4x;
	}
	else
	{
		return false;
	}
}

q6q()
{
	if (this.z7u)
	{
		return this.z7u.q6q;
	}
	else
	{
		return x2c.b4x;
	}
}

t9d(q6q)
{
	this.h5d();
	this.z7u.q6q = q6q;
	this.x6n();
}

p9y()
{
	if (this.z7u)
	{
		this.z7u.style = i1f.b4x;
		this.x6n();
	}
}

v8l()
{
	if (this.z7u)
	{
		return this.z7u.style != i1f.b4x;
	}
	else
	{
		return false;
	}
}

style()
{
	if (this.z7u)
	{
		return this.z7u.style;
	}
	else
	{
		return i1f.b4x;
	}
}

k9t(style)
{
	this.h5d();
	this.z7u.style = style;
	this.x6n();
}

x6l()
{
	if (this.z7u)
	{
		this.z7u.q1x = c2x.b4x;
		this.x6n();
	}
}

k3b()
{
	if (this.z7u)
	{
		return this.z7u.q1x != c2x.b4x;
	}
	else
	{
		return false;
	}
}

q1x()
{
	if (this.z7u)
	{
		return this.z7u.q1x;
	}
	else
	{
		return c2x.b4x;
	}
}

w6a(q1x)
{
	this.h5d();
	this.z7u.q1x = q1x;
	this.x6n();
}

e2l()
{
	if (this.z7u)
	{
		this.z7u.d2u = n6a.b4x;
		this.x6n();
	}
}

y8o()
{
	if (this.z7u)
	{
		return this.z7u.d2u != n6a.b4x;
	}
	else
	{
		return false;
	}
}

d2u()
{
	if (this.z7u)
	{
		return this.z7u.d2u;
	}
	else
	{
		return n6a.b4x;
	}
}

t0n(d2u)
{
	this.h5d();
	this.z7u.d2u = d2u;
	this.x6n();
}

q1c()
{
  
}

y9i()
{
	if (this.z7u)
	{
 		if (this.z7u.q4w.length != 0)
    {
      let j3k = this.z7u.q4w.indexOf("\x5b\x23\x5d");
      return j3k != -1;
		}
		else
		{
			return false;
		}
	}
	else
	{
		return false;
	}
}

q7w()
{
  
}

v7p()
{
	if (this.z7u)
	{
		this.z7u.w8h = false;
		this.x6n();
	}
}

l0i()
{
	if (this.z7u)
	{
		return this.z7u.w8h;
	}
	else
	{
		return false;
	}
}

h8f()
{
	this.h5d();
	this.z7u.w8h = true;
	this.x6n();
}

b9n()
{
	if (this.z7u)
	{
		this.z7u.r2x = false;
		this.x6n();
	}
}

k4i()
{
	if (this.z7u)
	{
		return this.z7u.r2x;
	}
	else
	{
		return false;
	}
}

p9e()
{
	this.h5d();
	this.z7u.r2x = true;
	this.x6n();
}

c9v()
{
	if (this.z7u)
	{
		this.z7u.d4u.c0n();
		this.z7u.g2e.c0n();
		this.x6n();
	}
}

a7f()
{
	if (this.z7u)
	{
		return this.t4x() || this.f8x();
	}
	else
	{
		return false;
	}
}

t0w()
{
	if (this.z7u)
	{
		this.z7u.d4u.c0n();
		this.x6n();
	}
}

t4x()
{
	if (this.z7u)
	{
		return !this.z7u.d4u.y8b();
	}
	else
	{
		return false;
	}
}

d4u()
{
	if (this.z7u)
	{
		return this.z7u.d4u.t9a();
	}
	else
	{
		return new p0x();
	}
}

z7e(d4u)
{
	this.h5d();
	this.z7u.d4u = d4u.t9a();
	this.x6n();
}

l3e()
{
	if (this.z7u)
	{
		this.z7u.g2e.c0n();
		this.x6n();
	}
}

f8x()
{
	if (this.z7u)
	{
		return !this.z7u.g2e.y8b();
	}
	else
	{
		return false;
	}
}

g2e()
{
	if (this.z7u)
	{
		return this.z7u.g2e.t9a();
	}
	else
	{
		return new s8u();
	}
}

p8k(g2e)
{
	this.h5d();
	this.z7u.g2e = g2e.t9a();
	this.x6n();
}

y4j()
{
	if (this.z7u)
	{
		this.z7u.q2d.w8d();
		this.x6n();
	}
}

b6t()
{
	if (this.z7u)
	{
		return this.z7u.q2d.z0x();
	}
	else
	{
		return false;
	}
}

q2d()
{
	if (this.z7u)
	{
		return this.z7u.q2d.t9a();
	}
	else
	{
		return new b2q();
	}
}

j5q(q2d)
{
	this.h5d();
	this.z7u.q2d = q2d.t9a();
	this.x6n();
}

m9s(s4r)
{
	this.q6e = s4r.t9a();
	this.z7u = null;
}

s4r()
{
	let n5t = new h5b();
  return Object.assign(n5t, this.q6e);
}

}

function t5z(s4r)
{
  let z9l = new e1b();
  z9l.m9s(s4r);
  return z9l;
}
class h5b
{

constructor()
{
	this.u1z = g7f;
	this.f7g = z1d.y8b;
	this.s5v = g7f;
	this.m7o = z1d.y8b;
	this.k0j = g7f;
	this.t6h = z1d.y8b;
	this.type = c3p.b4x;
}

t9a()
{
	let n5t = new h5b();
	n5t.u1z = this.u1z;
	n5t.f7g = this.f7g;
	n5t.s5v = this.s5v;
	n5t.m7o = this.m7o;
	n5t.k0j = this.k0j;
	n5t.v0t = this.v0t;
	n5t.type = this.type;
	return n5t;
}

m1t(v1n)
{
	if (
		this.u1z != v1n.u1z ||
		this.f7g != v1n.f7g ||
		this.s5v != v1n.s5v ||
		this.m7o != v1n.m7o ||
		this.k0j != v1n.k0j ||
		this.v0t != v1n.v0t ||
    this.type != v1n.type)
	{
		return false;
	}
	else
	{
		return true;
	}
}

w0w(v1n)
{
	return !this.m1t(v1n);
}

y8b()
{
	return this.type == c3p.b4x;
}

v4v()
{
	return this.f7g == z1d.o4p ||
		this.f7g == z1d.a4y ||
    this.f7g == z1d.u2f ||
    this.f7g == z1d.v6c ||
    this.f7g == z1d.v0g ||
    this.f7g == z1d.r3q;
}

n0a()
{
	return this.f7g == z1d.s7a ||
		this.f7g == z1d.a0l ||
    this.f7g == z1d.x9a ||
    this.f7g == z1d.l7a ||
    this.f7g == z1d.y5w ||
    this.f7g == z1d.m9o;
}

j5h()
{
	return this.k0j != g7f;
}

h5v()
{
	return this.f7g != this.m7o;
}

c7v()
{
  return this.type == c3p.g1f;
}

h9r()
{
	return this.type == c3p.b4x;
}

v3o()
{
	return this.type == c3p.c0e;
}

f6j()
{
	if (this.j5h())
  {
    return 1;
  }
  else
  {
    return 0;
  }
}

}

var northSquares = [];
var northEastSquares = [];
var eastSquares = [];
var southEastSquares = [];
var southSquares = [];
var southWestSquares = [];
var westSquares = [];
var northWestSquares = [];

var northEastSquare = [];
var eastSquare = [];
var southEastSquare = [];
var southWestSquare =[];
var westSquare = [];
var northWestSquare = [];

var kingSquares = [];
var knightSquares = [];

var moveGeneratorInited = false;

function l4r(a9k, s4r)
{
	if (s4r.type == c3p.t4q)
	{
		a9k[s4r.s5v] = a9k[s4r.u1z];
		a9k[s4r.u1z] = z1d.y8b;
	}
	else if (s4r.type == c3p.g1f)
	{
		let k0j = (s4r.s5v - 8);
		a9k[k0j] = z1d.y8b;
		a9k[s4r.s5v] = z1d.o4p;
		a9k[s4r.u1z] = z1d.y8b;
	}
	else if (s4r.type == c3p.p2s)
	{
		a9k[s4r.s5v] = z1d.v0g;
		a9k[s4r.u1z] = z1d.y8b;
	}
	else if (s4r.type == c3p.n1a)
	{
		a9k[s4r.s5v] = z1d.v6c;
		a9k[s4r.u1z] = z1d.y8b;
	}
	else if (s4r.type == c3p.v6r)
	{
		a9k[s4r.s5v] = z1d.u2f;
		a9k[s4r.u1z] = z1d.y8b;
	}
	else if (s4r.type == c3p.x6p)
	{
		a9k[s4r.s5v] = z1d.a4y;
		a9k[s4r.u1z] = z1d.y8b;
	}
}

function e7i(a9k, s4r)
{
	if (s4r.type == c3p.t4q)
	{
		a9k[s4r.s5v] = a9k[s4r.u1z];
		a9k[s4r.u1z] = z1d.y8b;
	}
	else if (s4r.type == c3p.g1f)
	{
		let k0j = (s4r.s5v + 8);
		a9k[k0j] = z1d.y8b;
		a9k[s4r.s5v] = z1d.s7a;
		a9k[s4r.u1z] = z1d.y8b;
	}
	else if (s4r.type == c3p.p2s)
	{
		a9k[s4r.s5v] = z1d.y5w;
		a9k[s4r.u1z] = z1d.y8b;
	}
	else if (s4r.type == c3p.n1a)
	{
		a9k[s4r.s5v] = z1d.l7a;
		a9k[s4r.u1z] = z1d.y8b;
	}
	else if (s4r.type == c3p.v6r)
	{
		a9k[s4r.s5v] = z1d.x9a;
		a9k[s4r.u1z] = z1d.y8b;
	}
	else if (s4r.type == c3p.x6p)
	{
		a9k[s4r.s5v] = z1d.a0l;
		a9k[s4r.u1z] = z1d.y8b;
	}
}

function u9w(a9k, s4r)
{
	if (s4r.s5v == t4r)
	{
		a9k[s4r.s5v] = z1d.r3q;
		a9k[s4r.u1z] = z1d.y8b;
		a9k[a1] = z1d.y8b; 
		a9k[j9e] = z1d.v6c;
	}
	else
	{
		a9k[s4r.s5v] = z1d.r3q;
		a9k[s4r.u1z] = z1d.y8b;
		a9k[f8a] = z1d.y8b; 
		a9k[r3o] = z1d.v6c;
	}
}

function z4k(a9k, s4r)
{
	if (s4r.s5v == b9g)
	{
		a9k[s4r.s5v] = z1d.m9o;
		a9k[s4r.u1z] = z1d.y8b;
		a9k[a8] = z1d.y8b; 
		a9k[d3h] = z1d.l7a;
	}
	else
	{
		a9k[s4r.s5v] = z1d.m9o;
		a9k[s4r.u1z] = z1d.y8b;
		a9k[j2f] = z1d.y8b; 
		a9k[t5t] = z1d.l7a;
	}
}

function d4s(a9k, s4r, o1d)
{
	if (s4r.s5v == t4r)
	{
		a9k[s4r.s5v] = z1d.r3q;
		a9k[s4r.u1z] = z1d.y8b;
		if (o1d.j8u != s4r.s5v)
		{
			a9k[o1d.j8u] = z1d.y8b;
		}
		a9k[j9e] = z1d.v6c;
	}
	else if (s4r.s5v == c0q)
	{
		a9k[s4r.s5v] = z1d.r3q;
		a9k[s4r.u1z] = z1d.y8b;
		if (o1d.r1b != s4r.s5v)
		{
			a9k[o1d.r1b] = z1d.y8b;
		}
		a9k[r3o] = z1d.v6c;
	}
}

function v8w(a9k, s4r, o1d)
{
	if (s4r.s5v == b9g)
	{
		a9k[s4r.s5v] = z1d.m9o;
		a9k[s4r.u1z] = z1d.y8b;
		if (o1d.e4r != s4r.s5v)
		{
			a9k[o1d.e4r] = z1d.y8b;
		}
		a9k[d3h] = z1d.l7a;
	}
	else if (s4r.s5v == c8a)
	{
		a9k[s4r.s5v] = z1d.m9o;
		a9k[s4r.u1z] = z1d.y8b;
		if (o1d.b8x != s4r.s5v)
		{
			a9k[o1d.b8x] = z1d.y8b;
		}
		a9k[t5t] = z1d.l7a;
	}
}

function y2f(k5o, s4r)
{
	let e9o = k5o.r3q();
	if (e9o == g7f) return true;
	if (s4r.f7g == z1d.r3q)
	{
		e9o = s4r.s5v;
	}
	let a9k = k5o.a9k();
	if (s4r.type == c3p.c0e)
	{
		if (k5o.k7s())
		{
			d4s(a9k, s4r, k5o.o1d());
		}
		else
		{
			u9w(a9k, s4r);
		}
	}
	else
	{
		l4r(a9k, s4r);
	}
	return !q8h(a9k, e9o);
}

function q8c(k5o, s4r)
{
	let e9o = k5o.m9o();
	if (e9o == g7f) return true;
	if (s4r.f7g == z1d.m9o)
	{
		e9o = s4r.s5v;
	}
	let a9k = k5o.a9k();
	if (s4r.type == c3p.c0e)
	{
		if (k5o.k7s())
		{
			v8w(a9k, s4r, k5o.o1d());
		}
		else
		{
			z4k(a9k, s4r);
		}
	}
	else
	{
		e7i(a9k, s4r);
	}
	return !e8d(a9k, e9o);
}

function z7t(b8v, k5o, u1z)
{
	if (t3h(u1z) == l5t)
	{
		return;
	}
	m0d(b8v, k5o, u1z);
	let s5v = northWestSquare[u1z];
	if (s5v != g7f)
	{
		z1i(b8v, k5o, u1z, s5v);
	}
	s5v = northEastSquare[u1z];
	if (s5v != g7f)
	{
		z1i(b8v, k5o, u1z, s5v);
	}
}

function a4h(b8v, k5o, u1z)
{
	if (t3h(u1z) == rank_1)
	{
		return;
	}
	b6q(b8v, k5o, u1z);
	let s5v = southEastSquare[u1z];
	if (s5v != g7f)
	{
		v5o(b8v, k5o, u1z, s5v);
	}
	s5v = southWestSquare[u1z];
	if (s5v != g7f)
	{
		v5o(b8v, k5o, u1z, s5v);
	}
}

function m0d(b8v, k5o, u1z)
{
	let s5v = (u1z + c4m);
	if (k5o.a5o(s5v))
	{
		if (t3h(u1z) == n3i)
		{
			q7a(b8v, k5o, u1z, s5v);
		}
		else
		{
			v6p(b8v, k5o, u1z, s5v, c3p.t4q);
			if (t3h(u1z) == j1o)
			{
				let s5v = (u1z + c4m + c4m);
				if (k5o.a5o(s5v))
				{
					v6p(b8v, k5o, u1z, s5v, c3p.t4q);
				}
			}
		}
	}
}

function b6q(b8v, k5o, u1z)
{
	let s5v = (u1z + z5v);
	if (k5o.a5o(s5v))
	{
		if (t3h(u1z) == j1o)
		{
			u9h(b8v, k5o, u1z, s5v);
		}
		else
		{
			v6p(b8v, k5o, u1z, s5v, c3p.t4q);
			if (t3h(u1z) == n3i)
			{
				let s5v = (u1z + z5v + z5v);
				if (k5o.a5o(s5v))
				{
					v6p(b8v, k5o, u1z, s5v, c3p.t4q);
				}
			}
		}
	}
}

function z1i(b8v, k5o, u1z, s5v)
{
	if (!k5o.n0a(s5v))
	{
		return;
	}
	if (t3h(u1z) == n3i)
	{
		k0d(b8v, k5o, u1z, s5v);
	}
	else
	{
		m4s(b8v, k5o, u1z, s5v, c3p.t4q);
	}
}

function v5o(b8v, k5o, u1z, s5v)
{
	if (!k5o.v4v(s5v))
	{
		return;
	}
	if (t3h(u1z) == j1o)
	{
		w9t(b8v, k5o, u1z, s5v);
	}
	else
	{
		m4s(b8v, k5o, u1z, s5v, c3p.t4q);
	}
}

function g2v(b8v, k5o, u1z, s8m)
{
	for (const s5v of s8m)
	{
		if (k5o.a5o(s5v))
		{
			v6p(b8v, k5o, u1z, s5v, c3p.t4q);
		}
		else if (k5o.n0a(s5v))
		{
			m4s(b8v, k5o, u1z, s5v, c3p.t4q);
		}
	}
}

function r5l(b8v, k5o, u1z, s8m)
{
	for (const s5v of s8m)
	{
		if (k5o.a5o(s5v))
		{
			v6p(b8v, k5o, u1z, s5v, c3p.t4q);
		}
		else if (k5o.v4v(s5v))
		{
			m4s(b8v, k5o, u1z, s5v, c3p.t4q);
		}
	}
}

function f2v(b8v, k5o, u1z)
{
	g2v(b8v, k5o, u1z, knightSquares[u1z]);
}

function x3o(b8v, k5o, u1z)
{
	r5l(b8v, k5o, u1z, knightSquares[u1z]);
}

function k4y(b8v, k5o, u1z)
{
	f0e(b8v, k5o, u1z, northEastSquares[u1z]);
	f0e(b8v, k5o, u1z, southEastSquares[u1z]);
	f0e(b8v, k5o, u1z, southWestSquares[u1z]);
	f0e(b8v, k5o, u1z, northWestSquares[u1z]);
}

function y8z(b8v, k5o, u1z)
{
	s0l(b8v, k5o, u1z, northEastSquares[u1z]);
	s0l(b8v, k5o, u1z, southEastSquares[u1z]);
	s0l(b8v, k5o, u1z, southWestSquares[u1z]);
	s0l(b8v, k5o, u1z, northWestSquares[u1z]);
}

function x0j(b8v, k5o, u1z)
{
	f0e(b8v, k5o, u1z, northSquares[u1z]);
	f0e(b8v, k5o, u1z, eastSquares[u1z]);
	f0e(b8v, k5o, u1z, southSquares[u1z]);
	f0e(b8v, k5o, u1z, westSquares[u1z]);
}

function x8g(b8v, k5o, u1z)
{
	s0l(b8v, k5o, u1z, northSquares[u1z]);
	s0l(b8v, k5o, u1z, eastSquares[u1z]);
	s0l(b8v, k5o, u1z, southSquares[u1z]);
	s0l(b8v, k5o, u1z, westSquares[u1z]);
}

function j0y(b8v, k5o, u1z)
{
	f0e(b8v, k5o, u1z, northSquares[u1z]);
	f0e(b8v, k5o, u1z, northEastSquares[u1z]);
	f0e(b8v, k5o, u1z, eastSquares[u1z]);
	f0e(b8v, k5o, u1z, southEastSquares[u1z]);
	f0e(b8v, k5o, u1z, southSquares[u1z]);
	f0e(b8v, k5o, u1z, southWestSquares[u1z]);
	f0e(b8v, k5o, u1z, westSquares[u1z]);
	f0e(b8v, k5o, u1z, northWestSquares[u1z]);
}

function n8a(b8v, k5o, u1z)
{
	s0l(b8v, k5o, u1z, northSquares[u1z]);
	s0l(b8v, k5o, u1z, northEastSquares[u1z]);
	s0l(b8v, k5o, u1z, eastSquares[u1z]);
	s0l(b8v, k5o, u1z, southEastSquares[u1z]);
	s0l(b8v, k5o, u1z, southSquares[u1z]);
	s0l(b8v, k5o, u1z, southWestSquares[u1z]);
	s0l(b8v, k5o, u1z, westSquares[u1z]);
	s0l(b8v, k5o, u1z, northWestSquares[u1z]);
}

function u2d(b8v, k5o, u1z)
{
	n1e(b8v, k5o, u1z, kingSquares[u1z]);
}

function m7p(b8v, k5o, u1z)
{
	d3j(b8v, k5o, u1z, kingSquares[u1z]);
}

function f0e(b8v, k5o, u1z, s8m)
{
	for (const s5v of s8m)
	{
		if (k5o.a5o(s5v))
		{
			v6p(b8v, k5o, u1z, s5v, c3p.t4q);
		}
		else if (k5o.v4v(s5v))
		{
			break;
		}
		else
		{
			m4s(b8v, k5o, u1z, s5v, c3p.t4q);
			break;
		}
	}
}

function s0l(b8v, k5o, u1z, s8m)
{
	for (const s5v of s8m)
	{
		if (k5o.a5o(s5v))
		{
			v6p(b8v, k5o, u1z, s5v, c3p.t4q);
		}
		else if (k5o.n0a(s5v))
		{
			break;
		}
		else
		{
			m4s(b8v, k5o, u1z, s5v, c3p.t4q);
			break;
		}
	}
}

function n1e(b8v, k5o, u1z, s8m)
{
	for (const s5v of s8m)
	{
		if (k5o.a5o(s5v))
		{
			v6p(b8v, k5o, u1z, s5v, c3p.t4q);
		}
		else if (k5o.n0a(s5v))
		{
			m4s(b8v, k5o, u1z, s5v, c3p.t4q);
		}
	}
}

function d3j(b8v, k5o, u1z, s8m)
{
	for (const s5v of s8m)
	{
		if (k5o.a5o(s5v))
		{
			v6p(b8v, k5o, u1z, s5v, c3p.t4q);
		}
		else if (k5o.v4v(s5v))
		{
			m4s(b8v, k5o, u1z, s5v, c3p.t4q);
		}
	}
}

function n9m(left, a2r)
{
	let o9p = [];
	if (left > a2r)
	{
    let h2p = left;
    left = a2r;
    a2r = h2p;
	}
	for (let i = left + 1; i < a2r; i++)
	{
		o9p.push(i);
	}
	return o9p;
}

function i8o(b8v, k5o)
{
	if (!k5o.o2x(k5o.c7b()))
	{
		return;
	}
	if (!k5o.k6y(k5o.j8u()))
	{
		return;
	}
	let k6e = n9m(k5o.j8u(), j9e);
  for (const w0g of k6e)
	{
		if (w0g != k5o.c7b())
		{
			if (!k5o.a5o(w0g))
			{
				return;
			}
		}
	}
	let s1w = n9m(k5o.c7b(), t4r);
  for (const w0g of s1w)
	{
		if (w0g != k5o.j8u())
		{
			if (!k5o.a5o(w0g))
			{
				return;
			}
		}
	}
  for (const w0g of s1w)
	{
		if (e2y(k5o, w0g))
		{
			return;
		}
	}
	if (e2y(k5o, k5o.c7b()))
	{
		return;
	}
	if (k5o.c7b() != t4r)
	{
		if (!k5o.a5o(t4r))
		{
			if (t4r != k5o.j8u())
			{
				return;
			}
		}
	}
	if (k5o.j8u() != j9e)
	{
		if (!k5o.a5o(j9e))
		{
			if (j9e != k5o.c7b())
			{
				return;
			}
		}
	}
	v6p(b8v, k5o, k5o.c7b(), t4r, c3p.c0e);
}

function p4z(b8v, k5o)
{
	if (!k5o.o2x(k5o.c7b()))
	{
		return;
	}
	if (!k5o.k6y(k5o.r1b()))
	{
		return;
	}
	let k6e = n9m(k5o.r1b(), r3o);
  for (const w0g of k6e)
	{
		if (w0g != k5o.c7b())
		{
			if (!k5o.a5o(w0g))
			{
				return;
			}
		}
	}
	let s1w = n9m(k5o.c7b(), c0q);
  for (const w0g of s1w)
	{
		if (w0g != k5o.r1b())
		{
			if (!k5o.a5o(w0g))
			{
				return;
			}
		}
	}
  for (const w0g of s1w)
	{
		if (e2y(k5o, w0g))
		{
			return;
		}
	}
	if (e2y(k5o, k5o.c7b()))
	{
		return;
	}
	if (k5o.c7b() != c0q)
	{
		if (!k5o.a5o(c0q))
		{
			if (c0q != k5o.r1b())
			{
				return;
			}
		}
	}
	if (k5o.r1b() != r3o)
	{
		if (!k5o.a5o(r3o))
		{
			if (r3o != k5o.c7b())
			{
				return;
			}
		}
	}
	v6p(b8v, k5o, k5o.c7b(), c0q, c3p.c0e);
}

function b9q(b8v, k5o)
{
	if (!k5o.a8j(k5o.h9v()))
	{
		return;
	}
	if (!k5o.n9c(k5o.b8x()))
	{
		return;
	}
	let k6e = n9m(k5o.b8x(), t5t);
  for (const w0g of k6e)
	{
		if (w0g != k5o.h9v())
		{
			if (!k5o.a5o(w0g))
			{
				return;
			}
		}
	}
	let s1w = n9m(k5o.h9v(), c8a);
  for (const w0g of s1w)
	{
		if (w0g != k5o.b8x())
		{
			if (!k5o.a5o(w0g))
			{
				return;
			}
		}
	}
  for (const w0g of s1w)
	{
		if (w5y(k5o, w0g))
		{
			return;
		}
	}
	if (w5y(k5o, k5o.h9v()))
	{
		return;
	}
	if (k5o.h9v() != c8a)
	{
		if (!k5o.a5o(c8a))
		{
			if (c8a != k5o.b8x())
			{
				return;
			}
		}
	}
	if (k5o.b8x() != t5t)
	{
		if (!k5o.a5o(t5t))
		{
			if (t5t != k5o.h9v())
			{
				return;
			}
		}
	}
	v6p(b8v, k5o, k5o.h9v(), c8a, c3p.c0e);
}

function b5g(b8v, k5o)
{
	if (!k5o.a8j(k5o.h9v()))
	{
		return;
	}
	if (!k5o.n9c(k5o.e4r()))
	{
		return;
	}
	let k6e = n9m(k5o.e4r(), d3h);
  for (const w0g of k6e)
	{
		if (w0g != k5o.h9v())
		{
			if (!k5o.a5o(w0g))
			{
				return;
			}
		}
	}
	let s1w = n9m(k5o.h9v(), b9g);
  for (const w0g of s1w)
	{
		if (w0g != k5o.e4r())
		{
			if (!k5o.a5o(w0g))
			{
				return;
			}
		}
	}
  for (const w0g of s1w)
	{
		if (w5y(k5o, w0g))
		{
			return;
		}
	}
	if (w5y(k5o, k5o.h9v()))
	{
		return;
	}
	if (k5o.h9v() != b9g)
	{
		if (!k5o.a5o(b9g))
		{
			if (b9g != k5o.e4r())
			{
				return;
			}
		}
	}
	if (k5o.e4r() != d3h)
	{
		if (!k5o.a5o(d3h))
		{
			if (d3h != k5o.h9v())
			{
				return;
			}
		}
	}
	v6p(b8v, k5o, k5o.h9v(), b9g, c3p.c0e);
}

function a9b(b8v, k5o)
{
	if (!k5o.o2x(k5o.c7b()))
	{
		return;
	}
	if (!k5o.k6y(k5o.j8u()))
	{
		return;
	}
	if (!k5o.a5o(n0j))
	{
		return;
	}
	if (!k5o.a5o(t3m))
	{
		return;
	}
	if (!k5o.a5o(m6d))
	{
		return;
	}
	if (e2y(k5o, k5o.c7b()))
	{
		return;
	}
	if (e2y(k5o, m6d))
	{
		return;
	}
	v6p(b8v, k5o, k5o.c7b(), t4r, c3p.c0e);
}

function h4m(b8v, k5o)
{
	if (!k5o.o2x(k5o.c7b()))
	{
		return;
	}
	if (!k5o.k6y(k5o.r1b()))
	{
		return;
	}
	if (!k5o.a5o(k2k))
	{
		return;
	}
	if (!k5o.a5o(b2b))
	{
		return;
	}
	if (e2y(k5o, k5o.c7b()))
	{
		return;
	}
	if (e2y(k5o, k2k))
	{
		return;
	}
	v6p(b8v, k5o, k5o.c7b(), c0q, c3p.c0e);
}

function j0r(b8v, k5o)
{
	if (!k5o.a8j(k5o.h9v()))
	{
		return;
	}
	if (!k5o.n9c(k5o.e4r()))
	{
		return;
	}
	if (!k5o.a5o(f6z))
	{
		return;
	}
	if (!k5o.a5o(s9l))
	{
		return;
	}
	if (!k5o.a5o(d5j))
	{
		return;
	}
	if (w5y(k5o, k5o.h9v()))
	{
		return;
	}
	if (w5y(k5o, d5j))
	{
		return;
	}
	v6p(b8v, k5o, k5o.h9v(), b9g, c3p.c0e);
}

function k8h(b8v, k5o)
{
	if (!k5o.a8j(k5o.h9v()))
	{
		return;
	}
	if (!k5o.n9c(k5o.b8x()))
	{
		return;
	}
	if (!k5o.a5o(x0y))
	{
		return;
	}
	if (!k5o.a5o(k9q))
	{
		return;
	}
	if (w5y(k5o, k5o.h9v()))
	{
		return;
	}
	if (w5y(k5o, x0y))
	{
		return;
	}
	v6p(b8v, k5o, k5o.h9v(), c8a, c3p.c0e);
}

function q4g(b8v, k5o)
{
	if (k5o.k7s())
	{
		i8o(b8v, k5o);
	}
	else
	{
		a9b(b8v, k5o);
	}
}

function o8m(b8v, k5o)
{
	if (k5o.k7s())
	{
		p4z(b8v, k5o);
	}
	else
	{
		h4m(b8v, k5o);
	}
}

function t6t(b8v, k5o)
{
	if (k5o.j3i())
	{
		q4g(b8v, k5o);
	}
	if (k5o.c0u())
	{
		o8m(b8v, k5o);
	}
}

function d5g(b8v, k5o)
{
	if (k5o.k7s())
	{
		b5g(b8v, k5o);
	}
	else
	{
		j0r(b8v, k5o);
	}
}

function q6j(b8v, k5o)
{
	if (k5o.k7s())
	{
		b9q(b8v, k5o);
	}
	else
	{
		k8h(b8v, k5o);
	}
}

function b8u(b8v, k5o)
{
	if (k5o.m4w())
	{
		d5g(b8v, k5o);
	}
	if (k5o.j0z())
	{
		q6j(b8v, k5o);
	}
}

function y2j(b8v, k5o)
{
	if (k5o.d1r() == g7f)
	{
		return;
	}
	if (t3h(k5o.d1r()) != f2r)
	{
		return;
	}
	if (!k5o.a5o(k5o.d1r()))
	{
		return;
	}
	let y3s = (k5o.d1r() + 8);
	if (!k5o.a5o(y3s))
	{
		return;
	}
	let a8c = (k5o.d1r() - 8);
	if (!k5o.o4o(a8c))
	{
		return;
	}
	let i5v = westSquare[a8c];
	if (i5v != g7f)
	{
		if (k5o.o8e(i5v))
		{
			a1d(b8v, k5o, i5v, z1d.o4p, k5o.d1r(),
				z1d.o4p, a8c, z1d.s7a, c3p.g1f);
		}
	}
	i5v = eastSquare[a8c];
	if (i5v != g7f)
	{
		if (k5o.o8e(i5v))
		{
			a1d(b8v, k5o, i5v, z1d.o4p, k5o.d1r(),
				z1d.o4p, a8c, z1d.s7a, c3p.g1f);
		}
	}
}

function m1k(b8v, k5o)
{
	if (k5o.d1r() == g7f)
	{
		return;
	}
	if (t3h(k5o.d1r()) != b5z)
	{
		return;
	}
	if (!k5o.a5o(k5o.d1r()))
	{
		return;
	}
	let y3s = (k5o.d1r() - 8);
	if (!k5o.a5o(y3s))
	{
		return;
	}
	let a8c = (k5o.d1r() + 8);
	if (!k5o.o8e(a8c))
	{
		return;
	}
	let i5v = westSquare[a8c];
	if (i5v != g7f)
	{
		if (k5o.o4o(i5v))
		{
			a1d(b8v, k5o, i5v, z1d.s7a, k5o.d1r(),
				z1d.s7a, a8c, z1d.o4p, c3p.g1f);
		}
	}
	i5v = eastSquare[a8c];
	if (i5v != g7f)
	{
		if (k5o.o4o(i5v))
		{
			a1d(b8v, k5o, i5v, z1d.s7a, k5o.d1r(),
				z1d.s7a, a8c, z1d.o4p, c3p.g1f);
		}
	}
}

function a1d(b8v, k5o, u1z, f7g, s5v, m7o, k0j, v0t, type)
{
  let e7j = new h5b();
	e7j.u1z = u1z;
	e7j.f7g = f7g;
	e7j.s5v = s5v;
	e7j.m7o = m7o;
	e7j.k0j = k0j;
	e7j.v0t = v0t;
	e7j.type = type;
	if (v4v(f7g))
	{
		if (y2f(k5o, e7j))
		{
			b8v.push(e7j);
		}
	}
	else
	{
		if (q8c(k5o, e7j))
		{
			b8v.push(e7j);
		}
	}
}

function v6p(b8v, k5o, u1z, s5v, type)
{
	let s7n = k5o.r5v(u1z);
	a1d(b8v, k5o, u1z, s7n, s5v, s7n, g7f, z1d.y8b, type);
}

function m4s(b8v, k5o, u1z, s5v, type)
{
	let s7n = k5o.r5v(u1z);
	let v0t = k5o.r5v(s5v);
	a1d(b8v, k5o, u1z, s7n, s5v, s7n, s5v, v0t, type);
}

function q7a(b8v, k5o, u1z, s5v)
{
	a1d(b8v, k5o, u1z, z1d.o4p, s5v, z1d.a4y, g7f, z1d.y8b, c3p.x6p);
	a1d(b8v, k5o, u1z, z1d.o4p, s5v, z1d.u2f, g7f, z1d.y8b, c3p.v6r);
	a1d(b8v, k5o, u1z, z1d.o4p, s5v, z1d.v6c, g7f, z1d.y8b, c3p.n1a);
	a1d(b8v, k5o, u1z, z1d.o4p, s5v, z1d.v0g, g7f, z1d.y8b, c3p.p2s);
}

function u9h(b8v, k5o, u1z, s5v)
{
	a1d(b8v, k5o, u1z, z1d.s7a, s5v, z1d.a0l, g7f, z1d.y8b, c3p.x6p);
	a1d(b8v, k5o, u1z, z1d.s7a, s5v, z1d.x9a, g7f, z1d.y8b, c3p.v6r);
	a1d(b8v, k5o, u1z, z1d.s7a, s5v, z1d.l7a, g7f, z1d.y8b, c3p.n1a);
	a1d(b8v, k5o, u1z, z1d.s7a, s5v, z1d.y5w, g7f, z1d.y8b, c3p.p2s);
}

function k0d(b8v, k5o, u1z, s5v)
{
	let v0t = k5o.r5v(s5v);
	a1d(b8v, k5o, u1z, z1d.o4p, s5v, z1d.a4y, s5v, v0t, c3p.x6p);
	a1d(b8v, k5o, u1z, z1d.o4p, s5v, z1d.u2f, s5v, v0t, c3p.v6r);
	a1d(b8v, k5o, u1z, z1d.o4p, s5v, z1d.v6c, s5v, v0t, c3p.n1a);
	a1d(b8v, k5o, u1z, z1d.o4p, s5v, z1d.v0g, s5v, v0t, c3p.p2s);
}

function w9t(b8v, k5o, u1z, s5v)
{
	let v0t = k5o.r5v(s5v);
	a1d(b8v, k5o, u1z, z1d.s7a, s5v, z1d.a0l, s5v, v0t, c3p.x6p);
	a1d(b8v, k5o, u1z, z1d.s7a, s5v, z1d.x9a, s5v, v0t, c3p.v6r);
	a1d(b8v, k5o, u1z, z1d.s7a, s5v, z1d.l7a, s5v, v0t, c3p.n1a);
	a1d(b8v, k5o, u1z, z1d.s7a, s5v, z1d.y5w, s5v, v0t, c3p.p2s);
}

function b0n(b8v, k5o, s5v)
{
	let u1z = (s5v - c4m);
	if (k5o.o8e(u1z))
	{
		if (t3h(u1z) == n3i)
		{
			q7a(b8v, k5o, u1z, s5v);
		}
		else
		{
			v6p(b8v, k5o, u1z, s5v, c3p.t4q);
		}
	}
	else
	{
		if (k5o.a5o(u1z))
		{
			if (t3h(s5v) == b3z)
			{
				u1z = (s5v - c4m - c4m);
				if (k5o.o8e(u1z))
				{
					v6p(b8v, k5o, u1z, s5v, c3p.t4q);
				}
			}
		}
	}

	if (k5o.n0a(s5v))
	{
		let u1z = southWestSquare[s5v];
		if (u1z != g7f)
		{
			if (k5o.o8e(u1z))
			{
				if (t3h(u1z) == n3i)
				{
					k0d(b8v, k5o, u1z, s5v);
				}
				else
				{
					m4s(b8v, k5o, u1z, s5v, c3p.t4q);
				}
			}
		}
		u1z = southEastSquare[s5v];
		if (u1z != g7f)
		{
			if (k5o.o8e(u1z))
			{
				if (t3h(u1z) == n3i)
				{
					k0d(b8v, k5o, u1z, s5v);
				}
				else
				{
					m4s(b8v, k5o, u1z, s5v, c3p.t4q);
				}
			}
		}
	}

	if (k5o.d1r() == s5v)
	{
		let y3s = (k5o.d1r() + 8);
		if (!k5o.a5o(y3s))
		{
			return;
		}
		let a8c = (k5o.d1r() - 8);
		if (!k5o.o4o(a8c))
		{
			return;
		}
		let i5v = westSquare[a8c];
		if (i5v != g7f)
		{
			if (k5o.o8e(i5v))
			{
				a1d(b8v, k5o, i5v, z1d.o4p, k5o.d1r(),
					z1d.o4p, a8c, z1d.s7a, c3p.g1f);
			}
		}
		i5v = eastSquare[a8c];
		if (i5v != g7f)
		{
			if (k5o.o8e(i5v))
			{
				a1d(b8v, k5o, i5v, z1d.o4p, k5o.d1r(),
					z1d.o4p, a8c, z1d.s7a, c3p.g1f);
			}
		}
	}
}

function x6z(b8v, k5o, s5v)
{
	let u1z = (s5v - z5v);
	if (k5o.o4o(u1z))
	{
		if (t3h(u1z) == j1o)
		{
			u9h(b8v, k5o, u1z, s5v);
		}
		else
		{
			v6p(b8v, k5o, u1z, s5v, c3p.t4q);
		}
	}
	else
	{
		if (k5o.a5o(u1z))
		{
			if (t3h(s5v) == v6n)
			{
				u1z = (s5v - z5v - z5v);
				if (k5o.o4o(u1z))
				{
					v6p(b8v, k5o, u1z, s5v, c3p.t4q);
				}
			}
		}
	}

	if (k5o.v4v(s5v))
	{
		let u1z = northWestSquare[s5v];
		if (u1z != g7f)
		{
			if (k5o.o4o(u1z))
			{
				if (t3h(u1z) == j1o)
				{
					w9t(b8v, k5o, u1z, s5v);
				}
				else
				{
					m4s(b8v, k5o, u1z, s5v, c3p.t4q);
				}
			}
		}
		u1z = northEastSquare[s5v];
		if (u1z != g7f)
		{
			if (k5o.o4o(u1z))
			{
				if (t3h(u1z) == j1o)
				{
					w9t(b8v, k5o, u1z, s5v);
				}
				else
				{
					m4s(b8v, k5o, u1z, s5v, c3p.t4q);
				}
			}
		}
	}

	if (k5o.d1r() == s5v)
	{
		let y3s = (k5o.d1r() - 8);
		if (!k5o.a5o(y3s))
		{
			return;
		}
		let a8c = (k5o.d1r() + 8);
		if (!k5o.o8e(a8c))
		{
			return;
		}
		let i5v = westSquare[a8c];
		if (i5v != g7f)
		{
			if (k5o.o4o(i5v))
			{
				a1d(b8v, k5o, i5v, z1d.s7a, k5o.d1r(),
					z1d.s7a, a8c, z1d.o4p, c3p.g1f);
			}
		}
		i5v = eastSquare[a8c];
		if (i5v != g7f)
		{
			if (k5o.o4o(i5v))
			{
				a1d(b8v, k5o, i5v, z1d.s7a, k5o.d1r(),
					z1d.s7a, a8c, z1d.o4p, c3p.g1f);
			}
		}
	}
}

function b1c(b8v, k5o, s5v, s7n)
{
	k0x(b8v, k5o, s5v, knightSquares[s5v], s7n);
}

function v1v(b8v, k5o, s5v, s7n)
{
	c4x(b8v, k5o, s5v, northEastSquares[s5v], s7n);
	c4x(b8v, k5o, s5v, southEastSquares[s5v], s7n);
	c4x(b8v, k5o, s5v, southWestSquares[s5v], s7n);
	c4x(b8v, k5o, s5v, northWestSquares[s5v], s7n);
}

function t8w(b8v, k5o, s5v, s7n)
{
	c4x(b8v, k5o, s5v, northSquares[s5v], s7n);
	c4x(b8v, k5o, s5v, eastSquares[s5v], s7n);
	c4x(b8v, k5o, s5v, southSquares[s5v], s7n);
	c4x(b8v, k5o, s5v, westSquares[s5v], s7n);
}

function t6y(b8v, k5o, s5v, s7n)
{
	c4x(b8v, k5o, s5v, northSquares[s5v], s7n);
	c4x(b8v, k5o, s5v, northEastSquares[s5v], s7n);
	c4x(b8v, k5o, s5v, eastSquares[s5v], s7n);
	c4x(b8v, k5o, s5v, southEastSquares[s5v], s7n);
	c4x(b8v, k5o, s5v, southSquares[s5v], s7n);
	c4x(b8v, k5o, s5v, southWestSquares[s5v], s7n);
	c4x(b8v, k5o, s5v, westSquares[s5v], s7n);
	c4x(b8v, k5o, s5v, northWestSquares[s5v], s7n);
}

function w1s(b8v, k5o, s5v, s7n)
{
	a5z(b8v, k5o, s5v, kingSquares[s5v], s7n);
}

function c4x(b8v, k5o, s5v, r2f, s7n)
{
  for (const u1z of r2f)
	{
		if (k5o.r5v(u1z) == s7n)
		{
			if (k5o.a5o(s5v))
			{
				v6p(b8v, k5o, u1z, s5v, c3p.t4q);
			}
			else
			{
				m4s(b8v, k5o, u1z, s5v, c3p.t4q);
			}
			break;
		}
		else
		{
			if (!k5o.a5o(u1z))
			{
				break;
			}
		}
	}
}

function a5z(b8v, k5o, s5v, r2f, s7n)
{
  for (const u1z of r2f)
	{
		if (k5o.r5v(u1z) == s7n)
		{
			if (k5o.a5o(s5v))
			{
				v6p(b8v, k5o, u1z, s5v, c3p.t4q);
				break;
			}
			else
			{
				m4s(b8v, k5o, u1z, s5v, c3p.t4q);
				break;
			}
		}
	}
}

function k0x(b8v, k5o, s5v, r2f, s7n)
{
  for (const u1z of r2f)
	{
		if (k5o.r5v(u1z) == s7n)
		{
			if (k5o.a5o(s5v))
			{
				v6p(b8v, k5o, u1z, s5v, c3p.t4q);
				
			}
			else
			{
				m4s(b8v, k5o, u1z, s5v, c3p.t4q);
				
			}
		}
	}
}

function h9l(a9k, s8m)
{
  for (const s5v of s8m)
	{
		if (a9k[s5v] != z1d.y8b)
		{
			if (n0a(a9k[s5v]))
			{
				return false;
			}
			else
			{
				if (a9k[s5v] == z1d.u2f || a9k[s5v] == z1d.v0g)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function v4n(a9k, s8m)
{
  for (const s5v of s8m)
	{
		if (a9k[s5v] != z1d.y8b)
		{
			if (n0a(a9k[s5v]))
			{
				return false;
			}
			else
			{
				if (a9k[s5v] == z1d.v6c || a9k[s5v] == z1d.v0g)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function a4x(a9k, s8m)
{
  for (const s5v of s8m)
	{
		if (a9k[s5v] != z1d.y8b)
		{
			if (n0a(a9k[s5v]))
			{
				return false;
			}
			else
			{
				if (a9k[s5v] == z1d.v6c || a9k[s5v] == z1d.v0g)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function p3c(a9k, s5v)
{
	if (s5v == g7f)
	{
		return false;
	}
	if (a9k[s5v] == z1d.o4p)
	{
		return true;
	}
	return false;
}

function k2v(a9k, s8m)
{
  for (const s5v of s8m)
	{
		if (a9k[s5v] == z1d.a4y)
		{
			return true;
		}
	}
	return false;
}

function b2w(a9k, s8m)
{
  for (const s5v of s8m)
	{
		if (a9k[s5v] == z1d.r3q)
		{
			return true;
		}
	}
	return false;
}

function u4d(a9k, s8m)
{
  for (const s5v of s8m)
	{
		if (a9k[s5v] != z1d.y8b)
		{
			if (v4v(a9k[s5v]))
			{
				return false;
			}
			else
			{
				if (a9k[s5v] == z1d.x9a || a9k[s5v] == z1d.y5w)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function i8j(a9k, s8m)
{
  for (const s5v of s8m)
	{
		if (a9k[s5v] != z1d.y8b)
		{
			if (v4v(a9k[s5v]))
			{
				return false;
			}
			else
			{
				if (a9k[s5v] == z1d.l7a || a9k[s5v] == z1d.y5w)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function l2i(a9k, s8m)
{
  for (const s5v of s8m)
	{
		if (a9k[s5v] != z1d.y8b)
		{
			if (v4v(a9k[s5v]))
			{
				return false;
			}
			else
			{
				if (a9k[s5v] == z1d.l7a || a9k[s5v] == z1d.y5w)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function t4i(a9k, s5v)
{
	if (s5v == g7f)
	{
		return false;
	}
	if (a9k[s5v] == z1d.s7a)
	{
		return true;
	}
	return false;
}

function k8z(a9k, s8m)
{
  for (const s5v of s8m)
	{
		if (a9k[s5v] == z1d.a0l)
		{
			return true;
		}
	}
	return false;
}

function i1h(a9k,  s8m)
{
  for (const s5v of s8m)
	{
		if (a9k[s5v] == z1d.m9o)
		{
			return true;
		}
	}
	return false;
}

function y3e(k5o, s8m, w4r)
{
  for (const s5v of s8m)
	{
		if (!k5o.a5o(s5v))
		{
			if (k5o.n0a(s5v))
			{
				return false;
			}
			else
			{
				if (k5o.c3n(s5v) || k5o.b1y(s5v))
				{
					w4r = s5v;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function w6k(k5o, s8m, w4r)
{
  for (const s5v of s8m)
	{
		if (!k5o.a5o(s5v))
		{
			if (k5o.v4v(s5v))
			{
				return false;
			}
			else
			{
				if (k5o.d5o(s5v) || k5o.a1l(s5v))
				{
					w4r = s5v;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function a3j(k5o, s8m, w4r)
{
  for (const s5v of s8m)
	{
		if (!k5o.a5o(s5v))
		{
			if (k5o.n0a(s5v))
			{
				return false;
			}
			else
			{
				if (k5o.k6y(s5v) || k5o.b1y(s5v))
				{
					w4r = s5v;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function v9s(k5o, s8m, w4r)
{
  for (const s5v of s8m)
	{
		if (!k5o.a5o(s5v))
		{
			if (k5o.v4v(s5v))
			{
				return false;
			}
			else
			{
				if (k5o.n9c(s5v) || k5o.a1l(s5v))
				{
					w4r = s5v;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function z8u(k5o, s8m, w4r)
{
  for (const s5v of s8m)
	{
		if (!k5o.a5o(s5v))
		{
			if (k5o.n0a(s5v))
			{
				return false;
			}
			else
			{
				if (k5o.k6y(s5v) || k5o.b1y(s5v))
				{
					w4r = s5v;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function g3m(k5o, s8m, w4r)
{
  for (const s5v of s8m)
	{
		if (!k5o.a5o(s5v))
		{
			if (k5o.v4v(s5v))
			{
				return false;
			}
			else
			{
				if (k5o.n9c(s5v) || k5o.a1l(s5v))
				{
					w4r = s5v;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function r2q(k5o, s5v)
{
	if (s5v == g7f)
	{
		return false;
	}
	if (k5o.o8e(s5v))
	{
		return true;
	}
	return false;
}

function b4m(k5o, s5v)
{
	if (s5v == g7f)
	{
		return false;
	}
	if (k5o.o4o(s5v))
	{
		return true;
	}
	return false;
}

function n5w(k5o, s8m, w4r)
{
  for (const s5v of s8m)
	{
		if (k5o.k3j(s5v))
		{
			w4r = s5v;
			return true;
		}
	}
	return false;
}



function x3e(k5o, s8m, w4r)
{
  for (const s5v of s8m)
	{
		if (k5o.m3w(s5v))
		{
			w4r = s5v;
			return true;
		}
	}
	return false;
}

function i9z(k5o, s8m, w4r)
{
  for (const s5v of s8m)
	{
		if (k5o.o2x(s5v))
		{
			w4r = s5v;
			return true;
		}
	}
	return false;
}

function w5g(k5o, s8m, w4r)
{
  for (const s5v of s8m)
	{
		if (k5o.a8j(s5v))
		{
			w4r = s5v;
			return true;
		}
	}
	return false;
}

function e8d(a9k, w0g)
{
	if (h9l(a9k, northEastSquares[w0g])) return true;
	if (h9l(a9k, southEastSquares[w0g])) return true;
	if (h9l(a9k, southWestSquares[w0g])) return true;
	if (h9l(a9k, northWestSquares[w0g])) return true;
	if (v4n(a9k, northSquares[w0g])) return true;
	if (a4x(a9k, eastSquares[w0g])) return true;
	if (v4n(a9k, southSquares[w0g])) return true;
	if (a4x(a9k, westSquares[w0g])) return true;
	if (p3c(a9k, southEastSquare[w0g])) return true;
	if (p3c(a9k, southWestSquare[w0g])) return true;
	if (k2v(a9k, knightSquares[w0g])) return true;
	if (b2w(a9k, kingSquares[w0g])) return true;
	return false;
}

function q8h(a9k, w0g)
{
	if (u4d(a9k, northEastSquares[w0g])) return true;
	if (u4d(a9k, southEastSquares[w0g])) return true;
	if (u4d(a9k, southWestSquares[w0g])) return true;
	if (u4d(a9k, northWestSquares[w0g])) return true;
	if (i8j(a9k, northSquares[w0g])) return true;
	if (l2i(a9k, eastSquares[w0g])) return true;
	if (i8j(a9k, southSquares[w0g])) return true;
	if (l2i(a9k, westSquares[w0g])) return true;
	if (t4i(a9k, northEastSquare[w0g])) return true;
	if (t4i(a9k, northWestSquare[w0g])) return true;
	if (k8z(a9k, knightSquares[w0g])) return true;
	if (i1h(a9k, kingSquares[w0g])) return true;
	return false;
}

function w5y(k5o, w0g)
{
	let w4r = g7f;
	if (y3e(k5o, northEastSquares[w0g], w4r)) return true;
	if (y3e(k5o, southEastSquares[w0g], w4r)) return true;
	if (y3e(k5o, southWestSquares[w0g], w4r)) return true;
	if (y3e(k5o, northWestSquares[w0g], w4r)) return true;
	if (a3j(k5o, northSquares[w0g], w4r)) return true;
	if (z8u(k5o, eastSquares[w0g], w4r)) return true;
	if (a3j(k5o, southSquares[w0g], w4r)) return true;
	if (z8u(k5o, westSquares[w0g], w4r)) return true;
	if (r2q(k5o, southEastSquare[w0g])) return true;
	if (r2q(k5o, southWestSquare[w0g])) return true;
	if (n5w(k5o, knightSquares[w0g], w4r)) return true;
	if (i9z(k5o, kingSquares[w0g], w4r)) return true;
	return false;
}

function e2y(k5o, w0g)
{
	let w4r = g7f;
	if (w6k(k5o, northEastSquares[w0g], w4r)) return true;
	if (w6k(k5o, southEastSquares[w0g], w4r)) return true;
	if (w6k(k5o, southWestSquares[w0g], w4r)) return true;
	if (w6k(k5o, northWestSquares[w0g], w4r)) return true;
	if (v9s(k5o, northSquares[w0g], w4r)) return true;
	if (g3m(k5o, eastSquares[w0g], w4r)) return true;
	if (v9s(k5o, southSquares[w0g], w4r)) return true;
	if (g3m(k5o, westSquares[w0g], w4r)) return true;
	if (b4m(k5o, northEastSquare[w0g])) return true;
	if (b4m(k5o, northWestSquare[w0g])) return true;
	if (x3e(k5o, knightSquares[w0g], w4r)) return true;
	if (w5g(k5o, kingSquares[w0g], w4r)) return true;
	return false;
}

function y3b()
{
	if (moveGeneratorInited) return;
	moveGeneratorInited = true;
 	for (const w0g of o8l)
	{
 		if (t3h(w0g) <= n3i && j0l(w0g) <= w8g)
		{
			let s5v = w0g + a0u;
			northEastSquare.push(s5v);
		}
		else
		{
			northEastSquare.push(g7f);
		}
		if (j0l(w0g) <= w8g)
		{
			let s5v = w0g + l5e;
			eastSquare.push(s5v);
		}
		else
		{
			eastSquare.push(g7f);
		}
		if (t3h(w0g) >= j1o && j0l(w0g) <= w8g)
		{
			let s5v = w0g + p7x;
			southEastSquare.push(s5v);
		}
		else
		{
			southEastSquare.push(g7f);
		}
		if (t3h(w0g) >= j1o && j0l(w0g) >= p4k)
		{
			let s5v = w0g + d0f;
			southWestSquare.push(s5v);
		}
		else
		{
			southWestSquare.push(g7f);
		}
		if (j0l(w0g) >= p4k)
		{
			let s5v = w0g + k8i;
			westSquare.push(s5v);
		}
		else
		{
			westSquare.push(g7f);
		}
		if (t3h(w0g) <= n3i && j0l(w0g) >= p4k)
		{
			let s5v = w0g + w9w;
			northWestSquare.push(s5v);
		}
		else
		{
			northWestSquare.push(g7f);
		}
	}

  for (const w0g of o8l)
	{
  	northSquares.push(p2n(w0g));
		northEastSquares.push(c5u(w0g));
		eastSquares.push(u1q(w0g));
		southEastSquares.push(g7a(w0g));
		southSquares.push(h2n(w0g));
		southWestSquares.push(p7o(w0g));
		westSquares.push(r1h(w0g));
		northWestSquares.push(u6v(w0g));
		kingSquares.push(o9v(w0g));
		knightSquares.push(g4b(w0g));
	}
}

function u6w(k5o)
{
	let b8v = [];

	if (k5o.v3p())
	{
		let h7c = k5o.h7c();
    for (const w0g of o8l)
		{
			if (!h7c) break;
			if (k5o.v4v(w0g))
			{
				switch (k5o.r5v(w0g))
				{
					case z1d.o4p:
						z7t(b8v, k5o, w0g);
						h7c--;
						break;
					case z1d.a4y:
						f2v(b8v, k5o, w0g);
						h7c--;
						break;
					case z1d.u2f:
						k4y(b8v, k5o, w0g);
						h7c--;
						break;
					case z1d.v6c:
						x0j(b8v, k5o, w0g);
						h7c--;
						break;
					case z1d.v0g:
						j0y(b8v, k5o, w0g);
						h7c--;
						break;
					case z1d.r3q:
						u2d(b8v, k5o, w0g);
						h7c--;
						break;
					default:
						break;
				}
			}
		}
		y2j(b8v, k5o);
		t6t(b8v, k5o);
	}
	else
	{
		let c6t = k5o.c6t();
    for (const w0g of o8l)
		{
			if (!c6t) break;
			if (k5o.n0a(w0g))
			{
				switch (k5o.r5v(w0g))
				{
					case z1d.s7a:
						a4h(b8v, k5o, w0g);
						c6t--;
						break;
					case z1d.a0l:
						x3o(b8v, k5o, w0g);
						c6t--;
						break;
					case z1d.x9a:
						y8z(b8v, k5o, w0g);
						c6t--;
						break;
					case z1d.l7a:
						x8g(b8v, k5o, w0g);
						c6t--;
						break;
					case z1d.y5w:
						n8a(b8v, k5o, w0g);
						c6t--;
						break;
					case z1d.m9o:
						m7p(b8v, k5o, w0g);
						c6t--;
						break;
					default:
						break;
				}
			}
		}
		m1k(b8v, k5o);
		b8u(b8v, k5o);
	}

	return b8v;
}

function s6j(k5o, f3m)
{
	let b8v = [];

	if (k5o.v3p())
	{
		if (!k5o.v4v(f3m))
		{
			b0n(b8v, k5o, f3m);
		}
	}
	else
	{
		if (!k5o.n0a(f3m))
		{
			x6z(b8v, k5o, f3m);
		}
	}

	return b8v;
}

function g7z(k5o, f3m)
{
	let b8v = [];

	if (k5o.v3p())
	{
		if (!k5o.v4v(f3m))
		{
			b1c(b8v, k5o, f3m, z1d.a4y);
		}
	}
	else
	{
		if (!k5o.n0a(f3m))
		{
			b1c(b8v, k5o, f3m, z1d.a0l);
		}
	}

	return b8v;
}

function i8s(k5o, f3m)
{
	let b8v = [];

	if (k5o.v3p())
	{
		if (!k5o.v4v(f3m))
		{
			v1v(b8v, k5o, f3m, z1d.u2f);
		}
	}
	else
	{
		if (!k5o.n0a(f3m))
		{
			v1v(b8v, k5o, f3m, z1d.x9a);
		}
	}

	return b8v;
}

function h1t(k5o, f3m)
{
	let b8v = [];

	if (k5o.v3p())
	{
		if (!k5o.v4v(f3m))
		{
			t8w(b8v, k5o, f3m, z1d.v6c);
		}
	}
	else
	{
		if (!k5o.n0a(f3m))
		{
			t8w(b8v, k5o, f3m, z1d.l7a);
		}
	}

	return b8v;
}

function j7d(k5o, f3m)
{
	let b8v = [];

	if (k5o.v3p())
	{
		if (!k5o.v4v(f3m))
		{
			t6y(b8v, k5o, f3m, z1d.v0g);
		}
	}
	else
	{
		if (!k5o.n0a(f3m))
		{
			t6y(b8v, k5o, f3m, z1d.y5w);
		}
	}

	return b8v;
}

function e1k(k5o, f3m)
{
	let b8v = [];

	let e9o = g7f;
	if (k5o.v3p())
	{
		e9o = k5o.r3q();
	}
	else
	{
		e9o = k5o.m9o();
	}

	if (e9o == g7f)
	{
		return b8v;
	}

	if (k5o.v3p())
	{
		u2d(b8v, k5o, e9o);
		t6t(b8v, k5o);
	}
	else
	{
		m7p(b8v, k5o, e9o);
		b8u(b8v, k5o);
	}

	return b8v;
}

function v6h(k5o, f3m)
{
	let b8v = [];

	let e9o = g7f;
	if (k5o.v3p())
	{
		e9o = k5o.r3q();
	}
	else
	{
		e9o = k5o.m9o();
	}

	if (e9o == g7f)
	{
		return b8v;
	}

	if (k5o.v3p())
	{
		if (!k5o.v4v(f3m))
		{
			w1s(b8v, k5o, f3m, z1d.r3q);
		}
	}
	else
	{
		if (!k5o.n0a(f3m))
		{
			w1s(b8v, k5o, f3m, z1d.m9o);
		}
	}

	return b8v;
}

function v0o(k5o)
{
	let b8v = [];

	if (k5o.v3p())
	{
		if (!k5o.o2x(k5o.c7b()))
		{
			return b8v;
		}
		if (!k5o.j3i())
		{
			return b8v;
		}
		q4g(b8v, k5o);
		return b8v;
	}
	else
	{
		if (!k5o.a8j(k5o.h9v()))
		{
			return b8v;
		}
		if (!k5o.m4w())
		{
			return b8v;
		}
		d5g(b8v, k5o);
		return b8v;
	}
}

function q5r(k5o)
{
	let b8v = [];

	if (k5o.v3p())
	{
		if (!k5o.o2x(k5o.c7b()))
		{
			return b8v;
		}
		if (!k5o.c0u())
		{
			return b8v;
		}
		o8m(b8v, k5o);
		return b8v;
	}
	else
	{
		if (!k5o.a8j(k5o.h9v()))
		{
			return b8v;
		}
		if (!k5o.j0z())
		{
			return b8v;
		}
		q6j(b8v, k5o);
		return b8v;
	}
}

function j7j(k5o)
{
	if (k5o.v3p())
	{
		if (k5o.r3q() != g7f)
		{
			return e2y(k5o, k5o.r3q());
		}
	}
	else
	{
		if (k5o.m9o() != g7f)
		{
			return w5y(k5o, k5o.m9o());
		}
	}
	return false;
}




function f6p(k5o, u1z)
{
	let z0y = u6w(k5o);
	let z2e = [];
  for (const s4r of z0y)
	{
		if (s4r.u1z == u1z)
		{
			z2e.push(s4r);
		}
	}
	return z2e;
}

function o1w(k5o, s5v)
{
	let z0y = u6w(k5o);
	let b6k = [];
  for (const s4r of z0y)
	{
		if (s4r.s5v == s5v)
		{
			b6k.push(s4r);
		}
	}
	return b6k;
}

function a1v(k5o, u1z, s5v)
{
	let z0y = u6w(k5o);
	let f1z = [];
  for (const s4r of z0y)
	{
		if (s4r.u1z == u1z && s4r.s5v == s5v)
		{
			f1z.push(s4r);
		}
	}
	return f1z;
}

function b7o(k5o, u1z, s5v, type)
{
	let e7j = new h5b();
	if (type == c3p.null)
	{
		return e7j;
	}

	e7j.u1z = u1z;
	e7j.s5v = s5v;
	e7j.type = type;
	if (type == c3p.t4q)
	{
		if (k5o.r5v(e7j.s5v) != z1d.y8b)
		{
			e7j.k0j = e7j.s5v;
			e7j.v0t = k5o.r5v(e7j.s5v);
		}
		e7j.f7g = k5o.r5v(e7j.u1z);
		e7j.m7o = e7j.f7g;
	}
	else if (type == c3p.c0e)
	{
		e7j.f7g = k5o.r5v(e7j.u1z);
		e7j.m7o = e7j.f7g;
	}
	else if (type == c3p.g1f)
	{
		e7j.f7g = k5o.r5v(e7j.u1z);
		e7j.m7o = e7j.f7g;
		if (v4v(e7j.f7g))
		{
			e7j.k0j = (e7j.s5v - 8);
			e7j.v0t = z1d.s7a;
		}
		else
		{
			e7j.k0j = (e7j.s5v + 8);
			e7j.v0t = z1d.o4p;
		}
	}
	else if (type == c3p.p2s)
	{
		if (k5o.r5v(e7j.s5v) != z1d.y8b)
		{
			e7j.k0j = e7j.s5v;
			e7j.v0t = k5o.r5v(e7j.s5v);
		}
		e7j.f7g = k5o.r5v(e7j.u1z);
		if (v4v(e7j.f7g))
		{
			e7j.m7o = z1d.v0g;
		}
		else
		{
			e7j.m7o = z1d.y5w;
		}
	}
	else if (type == c3p.n1a)
	{
		if (k5o.r5v(e7j.s5v) != z1d.y8b)
		{
			e7j.k0j = e7j.s5v;
			e7j.v0t = k5o.r5v(e7j.s5v);
		}
		e7j.f7g = k5o.r5v(e7j.u1z);
		if (v4v(e7j.f7g))
		{
			e7j.m7o = z1d.v6c;
		}
		else
		{
			e7j.m7o = z1d.l7a;
		}
	}
	else if (type == c3p.v6r)
	{
		if (k5o.r5v(e7j.s5v) != z1d.y8b)
		{
			e7j.k0j = e7j.s5v;
			e7j.v0t = k5o.r5v(e7j.s5v);
		}
		e7j.f7g = k5o.r5v(e7j.u1z);
		if (v4v(e7j.f7g))
		{
			e7j.m7o = z1d.u2f;
		}
		else
		{
			e7j.m7o = z1d.x9a;
		}
	}
	else if (type == c3p.x6p)
	{
		if (k5o.r5v(e7j.s5v) != z1d.y8b)
		{
			e7j.k0j = e7j.s5v;
			e7j.v0t = k5o.r5v(e7j.s5v);
		}
		e7j.f7g = k5o.r5v(e7j.u1z);
		if (v4v(e7j.f7g))
		{
			e7j.m7o = z1d.a4y;
		}
		else
		{
			e7j.m7o = z1d.a0l;
		}
	}
	return e7j;
}

function b7o(a9k, u1z, s5v, type)
{
	let e7j = new h5b();
	if (type == c3p.null)
	{
		return e7j;
	}

	e7j.u1z = u1z;
	e7j.s5v = s5v;
	e7j.type = type;
	if (type == c3p.t4q)
	{
		if (a9k[e7j.s5v] != z1d.y8b)
		{
			e7j.k0j = e7j.s5v;
			e7j.v0t = a9k[e7j.s5v];
		}
		e7j.f7g = a9k[e7j.u1z];
		e7j.m7o = e7j.f7g;
	}
	else if (type == c3p.c0e)
	{
		e7j.f7g = a9k[e7j.u1z];
		e7j.m7o = e7j.f7g;
	}
	else if (type == c3p.g1f)
	{
		e7j.f7g = a9k[e7j.u1z];
		e7j.m7o = e7j.f7g;
		if (v4v(e7j.f7g))
		{
			e7j.k0j = (e7j.s5v - 8);
			e7j.v0t = z1d.s7a;
		}
		else
		{
			e7j.k0j = (e7j.s5v + 8);
			e7j.v0t = z1d.o4p;
		}
	}
	else if (type == c3p.p2s)
	{
		if (a9k[e7j.s5v] != z1d.y8b)
		{
			e7j.k0j = e7j.s5v;
			e7j.v0t = a9k[e7j.s5v];
		}
		e7j.f7g = a9k[e7j.u1z];
		if (v4v(e7j.f7g))
		{
			e7j.m7o = z1d.v0g;
		}
		else
		{
			e7j.m7o = z1d.y5w;
		}
	}
	else if (type == c3p.n1a)
	{
		if (a9k[e7j.s5v] != z1d.y8b)
		{
			e7j.k0j = e7j.s5v;
			e7j.v0t = a9k[e7j.s5v];
		}
		e7j.f7g = a9k[e7j.u1z];
		if (v4v(e7j.f7g))
		{
			e7j.m7o = z1d.v6c;
		}
		else
		{
			e7j.m7o = z1d.l7a;
		}
	}
	else if (type == c3p.v6r)
	{
		if (a9k[e7j.s5v] != z1d.y8b)
		{
			e7j.k0j = e7j.s5v;
			e7j.v0t = a9k[e7j.s5v];
		}
		e7j.f7g = a9k[e7j.u1z];
		if (v4v(e7j.f7g))
		{
			e7j.m7o = z1d.u2f;
		}
		else
		{
			e7j.m7o = z1d.x9a;
		}
	}
	else if (type == c3p.x6p)
	{
		if (a9k[e7j.s5v] != z1d.y8b)
		{
			e7j.k0j = e7j.s5v;
			e7j.v0t = a9k[e7j.s5v];
		}
		e7j.f7g = a9k[e7j.u1z];
		if (v4v(e7j.f7g))
		{
			e7j.m7o = z1d.a4y;
		}
		else
		{
			e7j.m7o = z1d.a0l;
		}
	}
	return e7j;
}

const c4m 						=   8; 
const z5v 						=  -8; 
const l5e 	      			=   1; 
const k8i 	      			=  -1; 
const m4b 		=  17; 
const f5x 		=  10; 
const a0u 				=   9; 
const a0z 		=   6; 
const z1h 		=  15; 
const w9w 				=   7; 
const i0e 		= -17; 
const k2u 		= -10; 
const d0f 				=  -9; 
const e2v 		=  -6; 
const m8o 		= -15; 
const p7x 				=  -7; 

function p2n(w0g)
{
	let o9p = [];
	let t5e = c4m;
	let s5v = w0g;
	while (t3h(s5v) <= n3i)
	{
		s5v = s5v + t5e;
		o9p.push(s5v);
	}
	return o9p;
}

function c5u(w0g)
{
	let o9p = [];
	let t5e = a0u;
	let s5v = w0g;
	while (t3h(s5v) <= n3i && j0l(s5v) <= w8g)
	{
		s5v = s5v + t5e;
		o9p.push(s5v);
	}
	return o9p;
}

function u1q(w0g)
{
	let o9p = [];
	let t5e = l5e;
	let s5v = w0g;
	while (j0l(s5v) <= w8g)
	{
		s5v = s5v + t5e;
		o9p.push(s5v);
	}
	return o9p;
}

function g7a(w0g)
{
	let o9p = [];
	let t5e = p7x;
	let s5v = w0g;
	while (t3h(s5v) >= j1o && j0l(s5v) <= w8g)
	{
		s5v = s5v + t5e;
		o9p.push(s5v);
	}
	return o9p;
}

function h2n(w0g)
{
	let o9p = [];
	let t5e = z5v;
	let s5v = w0g;
	while (t3h(s5v) >= j1o)
	{
		s5v = s5v + t5e;
		o9p.push(s5v);
	}
	return o9p;
}

function p7o(w0g)
{
	let o9p = [];
	let t5e = d0f;
	let s5v = w0g;
	while (t3h(s5v) >= j1o && j0l(s5v) >= p4k)
	{
		s5v = s5v + t5e;
		o9p.push(s5v);
	}
	return o9p;
}

function r1h(w0g)
{
	let o9p = [];
	let t5e = k8i;
	let s5v = w0g;
	while (j0l(s5v) >= p4k)
	{
		s5v = s5v + t5e;
		o9p.push(s5v);
	}
	return o9p;
}

function u6v(w0g)
{
	let o9p = [];
	let t5e = w9w;
	let s5v = w0g;
	while (t3h(s5v) <= n3i && j0l(s5v) >= p4k)
	{
		s5v = s5v + t5e;
		o9p.push(s5v);
	}
	return o9p;
}

function g4b(w0g)
{
	let o9p = [];
	if (t3h(w0g) <= f2r && j0l(w0g) <= w8g)
	{
		let s5v = w0g + m4b;
		o9p.push(s5v);
	}
	if (t3h(w0g) <= n3i && j0l(w0g) <= i7v)
	{
		let s5v = w0g + f5x;
		o9p.push(s5v);
	}
	if (t3h(w0g) >= j1o && j0l(w0g) <= i7v)
	{
		let s5v = w0g + e2v;
		o9p.push(s5v);
	}
	if (t3h(w0g) >= b5z && j0l(w0g) <= w8g)
	{
		let s5v = w0g + m8o;
		o9p.push(s5v);
	}
	if (t3h(w0g) >= b5z && j0l(w0g) >= p4k)
	{
		let s5v = w0g + i0e;
		o9p.push(s5v);
	}
	if (t3h(w0g) >= j1o && j0l(w0g) >= m2q)
	{
		let s5v = w0g + k2u;
		o9p.push(s5v);
	}
	if (t3h(w0g) <= n3i && j0l(w0g) >= m2q)
	{
		s5v = w0g + a0z;
		o9p.push(s5v);
	}
	if (t3h(w0g) <= f2r && j0l(w0g) >= p4k)
	{
		let s5v = w0g + z1h;
		o9p.push(s5v);
	}
	return o9p;
}

function o9v(w0g)
{
	let o9p = [];
	if (t3h(w0g) <= n3i)
	{
		let s5v = w0g + c4m;
		o9p.push(s5v);
	}
	if (t3h(w0g) <= n3i && j0l(w0g) <= w8g)
	{
		let s5v = w0g + a0u;
		o9p.push(s5v);
	}
	if (j0l(w0g) <= w8g)
	{
		let s5v = w0g + l5e;
		o9p.push(s5v);
	}
	if (t3h(w0g) >= j1o && j0l(w0g) <= w8g)
	{
		let s5v = w0g + p7x;
		o9p.push(s5v);
	}
	if (t3h(w0g) >= j1o)
	{
		let s5v = w0g + z5v;
		o9p.push(s5v);
	}
	if (t3h(w0g) >= j1o && j0l(w0g) >= p4k)
	{
		let s5v = w0g + d0f;
		o9p.push(s5v);
	}
	if (j0l(w0g) >= p4k)
	{
		let s5v = w0g + k8i;
		o9p.push(s5v);
	}
	if (t3h(w0g) <= n3i && j0l(w0g) >= p4k)
	{
		let s5v = w0g + w9w;
		o9p.push(s5v);
	}
	return o9p;
}

const c3p =
{
  b4x : 0,  
	t4q : 1,
	c0e : 2,
	g1f : 3,
	x6p : 4,
	v6r : 5,
	n1a : 6,
	p2s : 7
};

function l7b(s7n)
{
	switch (s7n)
	{
		case z1d.o4p:
		case z1d.s7a:
			return r3u.g0w;
		case z1d.a4y:
		case z1d.a0l:
			return r3u.p7n;
		case z1d.u2f:
		case z1d.x9a:
			return r3u.f8u;
		case z1d.v6c:
		case z1d.l7a:
			return r3u.m3h;
		case z1d.v0g:
		case z1d.y5w:
			return r3u.k7p;
		case z1d.r3q:
		case z1d.m9o:
			return r3u.king;
		case z1d.y8b:
			return r3u.g0w;
	}
}

function w0y(k5o, e7j, k2s)
{
 	let e6j = '';
	if (e7j.y8b())
	{
		e6j += "\x2d\x2d";
	}
	else if (m4z(e7j.f7g))
	{
    if (e7j.j5h())
    {
			let b1o = j0l(e7j.u1z);
			e6j = t5o(b1o) + "\x78" + u4t(e7j.s5v);
    }
    else
    {
 			e6j = u4t(e7j.s5v);
    }
		if (e7j.h5v())
		{
			e6j += "\x3d";
			e6j += w6g(l7b(e7j.m7o));
		}
	}
	else if (e7j.f7g == z1d.r3q && e7j.v3o())
	{
		if (e7j.s5v == t4r)
		{
			e6j = "\x4f\x2d\x4f\x2d\x4f";
		}
		else
		{
			e6j = "\x4f\x2d\x4f";
		}
	}
	else if (e7j.f7g == z1d.m9o && e7j.v3o())
	{
		if (e7j.s5v == b9g)
		{
			e6j = "\x4f\x2d\x4f\x2d\x4f";
		}
		else
		{
			e6j = "\x4f\x2d\x4f";
		}
	}
	else
	{
		e6j = w6g(l7b(e7j.f7g));
    let z0y = [];
    if (v4v(e7j.f7g))
    {
      if (e7j.f7g == z1d.a4y)
      {
        z0y = g7z(k5o, e7j.s5v);
      }
      else if (e7j.f7g == z1d.u2f)
      {
        z0y = i8s(k5o, e7j.s5v);
      }
      else if (e7j.f7g == z1d.v6c)
      {
        z0y = h1t(k5o, e7j.s5v);
      }
      else if (e7j.f7g == z1d.v0g)
      {
        z0y = j7d(k5o, e7j.s5v);
      }
      else if (e7j.f7g == z1d.r3q)
      {
        z0y = v6h(k5o, e7j.s5v);
      }
    }
    else
    {
      if (e7j.f7g == z1d.a0l)
      {
        z0y = g7z(k5o, e7j.s5v);
      }
      else if (e7j.f7g == z1d.x9a)
      {
        z0y = i8s(k5o, e7j.s5v);
      }
      else if (e7j.f7g == z1d.l7a)
      {
        z0y = h1t(k5o, e7j.s5v);
      }
      else if (e7j.f7g == z1d.y5w)
      {
        z0y = j7d(k5o, e7j.s5v);
      }
      else if (e7j.f7g == z1d.m9o)
      {
        z0y = v6h(k5o, e7j.s5v);
      }
    }
    if (z0y.length > 1)
    {
      
      let c5s = 0;
      let b1o = j0l(e7j.u1z);
     	for (const s4r of z0y)
      {
        if (j0l(s4r.u1z) == b1o)
        {
          c5s++;
        }
      }
      if (c5s == 1)
      {
        
 				let b1o = j0l(e7j.u1z);
				e6j += t5o(b1o);
      }
      else
      {
        c5s = 0;
        let k2w = t3h(e7j.u1z);
       	for (const s4r of z0y)
        {
          if (t3h(s4r.u1z) == k2w)
          {
            c5s++;
          }
        }
        if (c5s == 1)
        {
          
          e6j += x7v(k2w);
        }
        else
        {
          
 					e6j += u4t(e7j.u1z);
        }
      }
    }
		if (e7j.j5h())
		{
       e6j += "\x78";
		}
		e6j += u4t(e7j.s5v);
	}
	if (!e7j.y8b())
	{
  	let x2d = k5o.t9a();
    x2d.i4o(e7j);
  	if (j7j(x2d))
	  {
  		let b8v = u6w(x2d);
	  	if (b8v.length == 0)
		  {
			  e6j += "\x23";
  		}
	  	else
		  {
			  e6j += "\x2b";
  		}
	  }
	}
	return e6j;
}
class z3x
{

constructor()
{
	this.height = 0;
	this.width = 0;
	this.q3n = 0;
}

}

function s5z(d7i,
  n8n,
  q1l,
  coordinate,
  coordinatesType,
  u5a,
  l9w,
  marginSize) 
{
 	let g2q = (coordinatesType == b9z.v5l ||
		coordinatesType == b9z.m7f ||
		coordinatesType == b9z.b3a);
	let p3l = (coordinatesType == b9z.v5l ||
		coordinatesType == b9z.m7f ||
		coordinatesType == b9z.p4f);
	let u5d =	(coordinatesType == b9z.v5l ||
		coordinatesType == b9z.b3a ||
		coordinatesType == b9z.e5y);
	let t7e = (coordinatesType == b9z.v5l ||
		coordinatesType == b9z.p4f ||
		coordinatesType == b9z.e5y);

	d7i.font = (coordinate.q3n).toString() + "\x70\x78\x20\x73\x65\x72\x69\x66";
	d7i.fillStyle = u5a;
  let i4u = coordinate.height;

	if (p3l)
	{
		let a6u = d6i;
		if (l9w)
		{
			a6u = 1;
		}
    for (let i8p = 0; i8p < d6i; i8p++)
		{
			let a3p = d7i.measureText(a6u).width;
			let top = n8n.w3l + 1 + i8p * q1l.y7x;
			top += (q1l.y7x - i4u) / 2 + i4u;
			let j4j = n8n.q3m - marginSize + (marginSize - a3p) / 2;
      d7i.fillText(a6u, j4j, top);
			if (l9w)
			{
				a6u++;
			}
			else
			{
				a6u--;
			}
		}
	}

	if (u5d)
	{
		let a6u = d6i;
		if (l9w)
		{
			a6u = 1;
		}
    for (let i8p = 0; i8p < d6i; i8p++)
		{
      let a3p = d7i.measureText(a6u).width;
			let top = n8n.w3l + 1 + i8p * q1l.y7x;
			top += (q1l.y7x - i4u) / 2 + i4u;
			let j4j = n8n.q3m + n8n.q9h() +
        (marginSize - a3p) / 2;
      d7i.fillText(a6u, j4j, top);
			if (l9w)
			{
				a6u++;
			}
			else
			{
				a6u--;
			}
		}
	}

	if (g2q)
	{
		let f5l = 'a';
		if (l9w)
		{
			f5l = 'h';
		}
    for (let g8t = 0; g8t < d6i; g8t++)
		{
			let w9z = f5l;
			let left = n8n.q3m + 1 + g8t * q1l.y7x;
      let a3p = d7i.measureText(w9z).width;
			let j4j = left + (q1l.y7x - a3p) / 2;
			let m3x = n8n.w3l - (marginSize - i4u) / 2 - 2;
      
      if (f5l == 'g')
      {
        m3x -= 2; 
      }
      d7i.fillText(w9z, j4j, m3x);
			if (l9w)
			{
        let u8m = f5l.charCodeAt(0);
        u8m--;
        f5l = String.fromCharCode(u8m);
			}
			else
			{
        let u8m = f5l.charCodeAt(0);
        u8m++;
        f5l = String.fromCharCode(u8m);
			}
		}
	}

	if (t7e)
	{
		let f5l = 'a';
		if (l9w)
		{
			f5l = 'h';
		}
    for (let g8t = 0; g8t < d6i; g8t++)
		{
			let w9z = f5l;
			let left = n8n.q3m + 1 + g8t * q1l.y7x;
      let a3p = d7i.measureText(w9z).width;
			let j4j = left + (q1l.y7x - a3p) / 2;
			let m3x = n8n.w3l + n8n.y7g() +
        (marginSize - i4u) / 2 + i4u - 2;
      
      if (f5l == 'g')
      {
        m3x -= 2; 
      }
      d7i.fillText(w9z, j4j, m3x);
			if (l9w)
			{
        let u8m = f5l.charCodeAt(0);
        u8m--;
        f5l = String.fromCharCode(u8m);
			}
			else
			{
        let u8m = f5l.charCodeAt(0);
        u8m++;
        f5l = String.fromCharCode(u8m);
			}
		}
	}
}

function j2b(d7i, q3n)
{
	let y1c = new z3x();
	y1c.q3n = q3n;
	y1c.height = q3n;
	y1c.width = q3n;
	return y1c;
}
var whitePawnBitmap = null;
var whiteKnightBitmap = null;
var whiteBishopBitmap = null;
var whiteRookBitmap = null;
var whiteQueenBitmap = null;
var whiteKingBitmap = null;
var blackPawnBitmap = null;
var blackKnightBitmap = null;
var blackBishopBitmap = null;
var blackRookBitmap = null;
var blackQueenBitmap = null;
var blackKingBitmap = null;
var pieceBitmapsInitialized = false;

function d1w()
{
  whitePawnBitmap = r4e.u0b("\x70\x69\x65\x63\x65\x73\x2f\x4d\x65\x72\x69\x64\x61\x2f\x77\x50");
 	whiteKnightBitmap = r4e.u0b("\x70\x69\x65\x63\x65\x73\x2f\x4d\x65\x72\x69\x64\x61\x2f\x77\x4e");
  whiteBishopBitmap = r4e.u0b("\x70\x69\x65\x63\x65\x73\x2f\x4d\x65\x72\x69\x64\x61\x2f\x77\x42");
 	whiteRookBitmap = r4e.u0b("\x70\x69\x65\x63\x65\x73\x2f\x4d\x65\x72\x69\x64\x61\x2f\x77\x52");
  whiteQueenBitmap = r4e.u0b("\x70\x69\x65\x63\x65\x73\x2f\x4d\x65\x72\x69\x64\x61\x2f\x77\x51");
 	whiteKingBitmap = r4e.u0b("\x70\x69\x65\x63\x65\x73\x2f\x4d\x65\x72\x69\x64\x61\x2f\x77\x4b");
  blackPawnBitmap = r4e.u0b("\x70\x69\x65\x63\x65\x73\x2f\x4d\x65\x72\x69\x64\x61\x2f\x62\x50");
 	blackKnightBitmap = r4e.u0b("\x70\x69\x65\x63\x65\x73\x2f\x4d\x65\x72\x69\x64\x61\x2f\x62\x4e");
  blackBishopBitmap = r4e.u0b("\x70\x69\x65\x63\x65\x73\x2f\x4d\x65\x72\x69\x64\x61\x2f\x62\x42");
 	blackRookBitmap = r4e.u0b("\x70\x69\x65\x63\x65\x73\x2f\x4d\x65\x72\x69\x64\x61\x2f\x62\x52");
  blackQueenBitmap = r4e.u0b("\x70\x69\x65\x63\x65\x73\x2f\x4d\x65\x72\x69\x64\x61\x2f\x62\x51");
 	blackKingBitmap = r4e.u0b("\x70\x69\x65\x63\x65\x73\x2f\x4d\x65\x72\x69\x64\x61\x2f\x62\x4b");
}

function r2l()
{
  whitePawnBitmap = r4e.u0b("\x70\x69\x65\x63\x65\x73\x2f\x43\x42\x75\x72\x6e\x65\x74\x74\x2f\x77\x50");
 	whiteKnightBitmap = r4e.u0b("\x70\x69\x65\x63\x65\x73\x2f\x43\x42\x75\x72\x6e\x65\x74\x74\x2f\x77\x4e");
  whiteBishopBitmap = r4e.u0b("\x70\x69\x65\x63\x65\x73\x2f\x43\x42\x75\x72\x6e\x65\x74\x74\x2f\x77\x42");
 	whiteRookBitmap = r4e.u0b("\x70\x69\x65\x63\x65\x73\x2f\x43\x42\x75\x72\x6e\x65\x74\x74\x2f\x77\x52");
  whiteQueenBitmap = r4e.u0b("\x70\x69\x65\x63\x65\x73\x2f\x43\x42\x75\x72\x6e\x65\x74\x74\x2f\x77\x51");
 	whiteKingBitmap = r4e.u0b("\x70\x69\x65\x63\x65\x73\x2f\x43\x42\x75\x72\x6e\x65\x74\x74\x2f\x77\x4b");
  blackPawnBitmap = r4e.u0b("\x70\x69\x65\x63\x65\x73\x2f\x43\x42\x75\x72\x6e\x65\x74\x74\x2f\x62\x50");
 	blackKnightBitmap = r4e.u0b("\x70\x69\x65\x63\x65\x73\x2f\x43\x42\x75\x72\x6e\x65\x74\x74\x2f\x62\x4e");
  blackBishopBitmap = r4e.u0b("\x70\x69\x65\x63\x65\x73\x2f\x43\x42\x75\x72\x6e\x65\x74\x74\x2f\x62\x42");
 	blackRookBitmap = r4e.u0b("\x70\x69\x65\x63\x65\x73\x2f\x43\x42\x75\x72\x6e\x65\x74\x74\x2f\x62\x52");
  blackQueenBitmap = r4e.u0b("\x70\x69\x65\x63\x65\x73\x2f\x43\x42\x75\x72\x6e\x65\x74\x74\x2f\x62\x51");
 	blackKingBitmap = r4e.u0b("\x70\x69\x65\x63\x65\x73\x2f\x43\x42\x75\x72\x6e\x65\x74\x74\x2f\x62\x4b");
}

function f6v(h7x)
{
  if (h7x == 0)
  {
    r2l();
  }
  else
  {
    d1w();
  }
}

function j5k(s7n)
{
  switch (s7n)
	{
    case z1d.o4p:
      return whitePawnBitmap;
      break;
    case z1d.a4y:
      return whiteKnightBitmap;
      break;
    case z1d.u2f:
      return whiteBishopBitmap;
      break;
    case z1d.v6c:
      return whiteRookBitmap;
      break;
    case z1d.v0g:
      return whiteQueenBitmap;
      break;
    case z1d.r3q:
      return whiteKingBitmap;
      break;
    case z1d.s7a:
      return blackPawnBitmap;
      break;
    case z1d.a0l:
      return blackKnightBitmap;
      break;
    case z1d.x9a:
      return blackBishopBitmap;
      break;
    case z1d.l7a:
      return blackRookBitmap;
      break;
    case z1d.y5w:
      return blackQueenBitmap;
      break;
    case z1d.m9o:
      return blackKingBitmap;
      break;
    default:
      break
	}
  return null;
}

function i6w(d7i, rect, s7n)
{
  if (s7n == z1d.y8b) return;
	let u0b = j5k(s7n);
  d7i.drawImage(u0b, rect.q3m, rect.w3l, rect.q9h(), rect.y7g());
}
function v7s(n9z)
{
	let k5o = new z1a();
	let o9d = n9z.length;

 	let j8r = n9z.split("\x20");
	if (j8r.length < 2)
	{
		return k5o;
	}

	let e0k = j8r[1];
	if (e0k.length)
	{
		if (e0k[0] == 'w')
		{
			k5o.c8l();
		}
		else if (e0k[0] == 'b')
		{
			k5o.j5i();
		}
	}

 	let p7j = j8r[0].split("\x2f");
	if (p7j.length != 8)
	{
		return k5o;
	}
	let g7v = a8;
	for (const i8p of p7j)
	{
		let w0g = g7v;
		let o9d = i8p.length;
		for (let i = 0; i < o9d; i++)
		{
			if (w0g == g7v + 8)
			{
				return k5o; 
			}
			let u7s = true;
			switch (i8p[i])
			{
				case 'p':
					k5o.y2x(w0g, z1d.s7a);
					break;
				case 'n':
					k5o.y2x(w0g, z1d.a0l);
					break;
				case 'b':
					k5o.y2x(w0g, z1d.x9a);
					break;
				case 'r':
					k5o.y2x(w0g, z1d.l7a);
					break;
				case 'q':
					k5o.y2x(w0g, z1d.y5w);
					break;
				case 'k':
					k5o.y2x(w0g, z1d.m9o);
					break;
				case 'P':
					k5o.y2x(w0g, z1d.o4p);
					break;
				case 'N':
					k5o.y2x(w0g, z1d.a4y);
					break;
				case 'B':
					k5o.y2x(w0g, z1d.u2f);
					break;
				case 'R':
					k5o.y2x(w0g, z1d.v6c);
					break;
				case 'Q':
					k5o.y2x(w0g, z1d.v0g);
					break;
				case 'K':
					k5o.y2x(w0g, z1d.r3q);
					break;
				default:
					u7s = false;
					break;
			}
			if (u7s)
			{
				w0g = w0g + 1;
			}
			else
			{
				if (!isNaN(i8p[i]))
				{
					w0g = w0g + c6q(i8p[i], 0);
				}
			}
		}
		g7v = g7v - 8;
	}

 	if (j8r.length >= 3)
	{
		let w9c = new d4t(); 
		let x3u = j8r[2];
		if (x3u.length)
		{
			if (x3u[0] != '-')
			{
				let o9d = x3u.length;
				if (x3u[0] >= 'A' && x3u[0] <= 'H')
				{
 					w9c.r1m = true; 
          
					w9c.c7b = k5o.r3q();
					w9c.h9v = k5o.m9o();
					if (o9d == 4)
					{
						let e6j = x3u.charAt(0).toLowerCase();
						e6j += "\x31";
						w9c.r1b = e8v(e6j);
						if (k5o.k6y(w9c.r1b))
						{
							w9c.e9s = true;
						}
						e6j = x3u.charAt(1).toLowerCase();
						e6j += "\x31";
						w9c.j8u = e8v(e6j);
						if (k5o.k6y(w9c.j8u))
						{
							w9c.c8q = true;
						}
						e6j = x3u.charAt(2).toLowerCase();
						e6j += "\x38";
						w9c.b8x = e8v(e6j);
						if (k5o.n9c(w9c.b8x))
						{
							w9c.t4c = true;
						}
						e6j = x3u.charAt(3).toLowerCase();
						e6j += "\x38";
						w9c.e4r = e8v(e6j);
						if (k5o.n9c(w9c.e4r))
						{
							w9c.u9q = true;
						}
          }
				}
				else
				{
					for (let i = 0; i < o9d; i++)
					{
						switch (x3u[i])
						{
							case 'K':
								if (k5o.o2x(w9c.c7b) && k5o.k6y(w9c.r1b))
								{
									w9c.e9s = true;
								}
								break;
							case 'Q':
								if (k5o.o2x(w9c.c7b) && k5o.k6y(w9c.j8u))
								{
									w9c.c8q = true;
								}
								break;
							case 'k':
								if (k5o.a8j(w9c.h9v) && k5o.n9c(w9c.b8x))
								{
									w9c.t4c = true;
								}
								break;
							case 'q':
								if (k5o.a8j(w9c.h9v) && k5o.n9c(w9c.e4r))
								{
									w9c.u9q = true;
								}
								break;
						}
					}
				}
			}
		}
		if (j8r.length >= 4)
		{
			let n6q = j8r[3];
			if (n6q.length)
			{
				if (n6q[0] != '-')
				{
					w9c.d1r = e8v(n6q);
					if (t3h(w9c.d1r) == f2r)
					{
						let j5j = w9c.d1r + 8;
						let f3m = w9c.d1r - 8;
						if (!k5o.a5o(j5j) || !k5o.o4o(f3m))
						{
							w9c.d1r = g7f;
						}
					}
					else if (t3h(w9c.d1r) == b5z)
					{
						let j5j = w9c.d1r - 8;
						let f3m = w9c.d1r + 8;
						if (!k5o.a5o(j5j) || !k5o.o8e(f3m))
						{
							w9c.d1r = g7f;
						}
					}
					else
					{
						w9c.d1r = g7f;
					}
				}
			}
		}
		k5o.s5a(w9c);
	}
	return k5o;
}

function g6a(k5o)
{
	let n9z = '';
	let g7v = a8;
	for (let i8p = 7; i8p >= 0; i8p--)
	{
		let w0g = g7v;
		let l9z = 0;
		for (let g8t = 0; g8t < 8; g8t++)
		{
			if (k5o.a5o(w0g))
			{
				l9z++;
			}
			else
			{
				if (l9z)
				{
					n9z += l9z;
					l9z = 0;
				}
				switch (k5o.r5v(w0g))
				{
					case z1d.y8b:
						break;
					case z1d.o4p:
						n9z += 'P';
						break;
					case z1d.a4y:
						n9z += 'N';
						break;
					case z1d.u2f:
						n9z += 'B';
						break;
					case z1d.v6c:
						n9z += 'R';
						break;
					case z1d.v0g:
						n9z += 'Q';
						break;
					case z1d.r3q:
						n9z += 'K';
						break;
					case z1d.s7a:
						n9z += 'p';
						break;
					case z1d.a0l:
						n9z += 'n';
						break;
					case z1d.x9a:
						n9z += 'b';
						break;
					case z1d.l7a:
						n9z += 'r';
						break;
					case z1d.y5w:
						n9z += 'q';
						break;
					case z1d.m9o:
						n9z += 'k';
						break;
				}
			}
			w0g = w0g + 1;
		}
		if (l9z)
		{
			n9z += l9z;
		}
		g7v = (g7v - 8);
		if (i8p > 0)
		{
			n9z += "\x2f";
		}
	}
	n9z += "\x20";
	if (k5o.v3p())
	{
		n9z += "\x77";
	}
	else
	{
		n9z += "\x62";
	}
	n9z += "\x20";
	let w9c = k5o.o1d();
	if (
		!w9c.e9s &&
		!w9c.c8q &&
		!w9c.t4c &&
		!w9c.u9q)
	{
		n9z += "\x2d";
	}
	else
	{
		if (w9c.r1m)
		{
			if (w9c.e9s)
			{
				n9z += t5o(j0l(w9c.r1b)).toUpperCase();
			}
			if (w9c.c8q)
			{
				n9z += t5o(j0l(w9c.j8u)).toUpperCase();
			}
			if (w9c.t4c)
			{
				n9z += t5o(j0l(w9c.b8x)).toUpperCase();
			}
			if (w9c.u9q)
			{
				n9z += t5o(j0l(w9c.e4r)).toUpperCase();
			}
		}
		else
		{
			if (w9c.e9s)
			{
				n9z += "\x4b";
			}
			if (w9c.c8q)
			{
				n9z += "\x51";
			}
			if (w9c.t4c)
			{
				n9z += "\x6b";
			}
			if (w9c.u9q)
			{
				n9z += "\x71";
			}
		}
	}
	n9z += "\x20";
	if (w9c.d1r == g7f)
	{
		n9z += "\x2d";
	}
	else
	{
		n9z += u4t(w9c.d1r);
	}
	return n9z;
}

function i4d(k5o, g0v)
{
	
	

  let e4f = g0v.length;
	if (e4f < 2 || e4f > 7)
	{
		return false;
	}

	
	if (g0v[0] == 'Z' || (e4f == 2 && g0v == "\x2d\x2d") || (e4f == 4 && g0v == "\x6e\x75\x6c\x6c"))
	{
		return new h5b();
	}

	
	let n0c = g0v[e4f-1];
	if (n0c == '+' || n0c == '#')
	{
		e4f--;
		if (e4f < 2)
		{
   		return false;
		}
	}

	
	if (g0v[0] == 'O' || g0v[0] == '0')
	{
		if (e4f == 3)
		{
			let z0y = q5r(k5o);
			if (z0y.length != 1)
			{
    		return false;
			}
			return z0y[0];
		}
		if (e4f == 5)
		{
			let z0y = v0o(k5o);
			if (z0y.length != 1)
			{
    		return false;
			}
			return z0y[0];
		}
 		return false;
	}

	
	let u1g = false;
	let q7u = z1d.y8b;
	if (g0v[e4f-2] == '=')
	{
		u1g = true;
		let z4v = g0v[e4f-1];
		if (z4v == 'N')
		{
			q7u = k5o.v3p() ? z1d.a4y : z1d.a0l;
		}
		else if (z4v == 'B')
		{
			q7u = k5o.v3p() ? z1d.u2f : z1d.x9a;
		}
		else if (z4v == 'R')
		{
			q7u = k5o.v3p() ? z1d.v6c : z1d.l7a;
		}
		else if (z4v == 'Q')
		{
			q7u = k5o.v3p() ? z1d.v0g : z1d.y5w;
		}
		else
		{
  		return false;
		}
		e4f -= 2;
		if (e4f < 2)
		{
  		return false;
		}
	}

 	
	let toString = '';
	toString += g0v[e4f-2];
	toString += g0v[e4f-1];
	let f3m = e8v(toString);
	if (f3m == g7f)
	{
		return false;
	}
	e4f -= 2;
	

 	if (u1g)
	{
		let z0y = s6j(k5o, f3m);
		if (z0y.length == 0)
		{
  		return false;
		}
		let l8q = [];
		for (const e7j of z0y)
		{
			if (e7j.m7o == q7u)
			{
				l8q.push(e7j);
			}
		}
		z0y = l8q;
		if (z0y.length == 1)
		{
			return z0y[0];
		}
		if (e4f == 0)
		{
			
			for (const s4r of z0y)
			{
				if (s4r.k0j == g7f)
				{
					return s4r;
				}
			}
  		return false;
		}
		if (e4f != 2)
		{
  		return false;
		}
		
		let n0c = g0v[0];
		if (n0c < 'a' || n0c > 'h')
		{
  		return false;
		}
		let b1o = v1d(n0c);
		for (const s4r of z0y)
		{
			if (j0l(s4r.u1z) == b1o)
			{
				return s4r;
			}
		}
		return false;
	}

	if (e4f == 0)
	{
  	
		let z0y = s6j(k5o, f3m);
		if (z0y.length != 1)
		{
  		return false;
		}
		return z0y[0];
	}

  
	let g0w = false;
	let z0y = [];
	let m2c = g0v[0];
	if (m2c == 'N')
	{
		z0y = g7z(k5o, f3m);
	}
	else if (m2c == 'B')
	{
		z0y = i8s(k5o, f3m);
	}
	else if (m2c == 'R')
	{
		z0y = h1t(k5o, f3m);
	}
	else if (m2c == 'Q')
	{
		z0y = j7d(k5o, f3m);
	}
	else if (m2c == 'K')
	{
		
		z0y = v6h(k5o, f3m);
	}
	else
	{
		g0w = true;
		z0y = s6j(k5o, f3m);
	}
	if (z0y.length == 0)
	{
		return false;
	}
	if (z0y.length == 1)
	{
		return z0y[0]; 
	}

	
	
	
	if (e4f < 2)
	{
		return false;
	}

 	if (g0w)
	{
		let n0c = g0v[0]; 
		if (n0c < 'a' || n0c > 'h')
		{
  	  return false;
		}
		let b1o = v1d(n0c);
		for (const s4r of z0y)
		{
			if (j0l(s4r.u1z) == b1o && s4r.k0j != g7f)
			{
				return s4r;
			}
		}
		return false;
	}

	

 	
	let q2b = false;
	if (g0v[e4f-1] == 'x')
	{
		q2b = true;
		e4f--;
	}
	else if (g0v[e4f-1] == '-') 
	{
		q2b = false;
		e4f--;
	}

	if (e4f < 2)
	{
		return false;
	}

 	if (e4f == 2)
	{
		
		let n0c = g0v[1]; 
		if (n0c >= 'a' && n0c <= 'h')
		{
			let b1o = v1d(n0c);
			let h7s  = 0;
      let y5b = null;
			for (const s4r of z0y)
			{
				if (j0l(s4r.u1z) == b1o)
				{
					y5b = s4r;
					h7s++;
				}
			}
      return h7s === 1 ? y5b : false;
		}
		if (n0c >= '1' && n0c <= '8')
		{
			let k2w = a4m(n0c);
			let h7s = 0;
      let y5b = null;
			for (const s4r of z0y)
			{
				if (t3h(s4r.u1z) == k2w)
				{
					y5b = s4r;
					h7s++;
				}
			}
      return h7s === 1 ? y5b : false;
		}
		return false;
	}

 	if (e4f == 3)
	{
		
		let i8i = '';
		i8i += g0v[1]; 
		i8i += g0v[2];
		let j5j = e8v(i8i);
		if (j5j == g7f)
		{
  		return false;
		}
		let h7s = 0;
    let y5b = null;
		for (const s4r of z0y)
		{
			if (s4r.u1z == j5j)
			{
				y5b = s4r;
				h7s++;
			}
		}
    return h7s === 1 ? y5b : false;
	}

	return false;
}

function u1k()
{
  let i5f = ["\x62\x6f\x61\x72\x64\x2f\x42\x6f\x61\x72\x64\x42\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x2e\x70\x6e\x67",
    "\x62\x6f\x61\x72\x64\x2f\x44\x61\x72\x6b\x53\x71\x75\x61\x72\x65\x2e\x70\x6e\x67",
    "\x62\x6f\x61\x72\x64\x2f\x4c\x69\x67\x68\x74\x53\x71\x75\x61\x72\x65\x2e\x70\x6e\x67",
    "\x62\x6f\x61\x72\x64\x2f\x4d\x61\x72\x67\x69\x6e\x2e\x70\x6e\x67",
    "\x70\x69\x65\x63\x65\x73\x2f\x4d\x65\x72\x69\x64\x61\x2f\x62\x42\x2e\x73\x76\x67",
    "\x70\x69\x65\x63\x65\x73\x2f\x4d\x65\x72\x69\x64\x61\x2f\x62\x4b\x2e\x73\x76\x67",
    "\x70\x69\x65\x63\x65\x73\x2f\x4d\x65\x72\x69\x64\x61\x2f\x62\x4e\x2e\x73\x76\x67",
    "\x70\x69\x65\x63\x65\x73\x2f\x4d\x65\x72\x69\x64\x61\x2f\x62\x50\x2e\x73\x76\x67",
    "\x70\x69\x65\x63\x65\x73\x2f\x4d\x65\x72\x69\x64\x61\x2f\x62\x51\x2e\x73\x76\x67",
    "\x70\x69\x65\x63\x65\x73\x2f\x4d\x65\x72\x69\x64\x61\x2f\x62\x52\x2e\x73\x76\x67",
    "\x70\x69\x65\x63\x65\x73\x2f\x4d\x65\x72\x69\x64\x61\x2f\x77\x42\x2e\x73\x76\x67",
    "\x70\x69\x65\x63\x65\x73\x2f\x4d\x65\x72\x69\x64\x61\x2f\x77\x4b\x2e\x73\x76\x67",
    "\x70\x69\x65\x63\x65\x73\x2f\x4d\x65\x72\x69\x64\x61\x2f\x77\x4e\x2e\x73\x76\x67",
    "\x70\x69\x65\x63\x65\x73\x2f\x4d\x65\x72\x69\x64\x61\x2f\x77\x50\x2e\x73\x76\x67",
    "\x70\x69\x65\x63\x65\x73\x2f\x4d\x65\x72\x69\x64\x61\x2f\x77\x51\x2e\x73\x76\x67",
    "\x70\x69\x65\x63\x65\x73\x2f\x4d\x65\x72\x69\x64\x61\x2f\x77\x52\x2e\x73\x76\x67",
    "\x70\x69\x65\x63\x65\x73\x2f\x43\x42\x75\x72\x6e\x65\x74\x74\x2f\x62\x42\x2e\x73\x76\x67",
    "\x70\x69\x65\x63\x65\x73\x2f\x43\x42\x75\x72\x6e\x65\x74\x74\x2f\x62\x4b\x2e\x73\x76\x67",
    "\x70\x69\x65\x63\x65\x73\x2f\x43\x42\x75\x72\x6e\x65\x74\x74\x2f\x62\x4e\x2e\x73\x76\x67",
    "\x70\x69\x65\x63\x65\x73\x2f\x43\x42\x75\x72\x6e\x65\x74\x74\x2f\x62\x50\x2e\x73\x76\x67",
    "\x70\x69\x65\x63\x65\x73\x2f\x43\x42\x75\x72\x6e\x65\x74\x74\x2f\x62\x51\x2e\x73\x76\x67",
    "\x70\x69\x65\x63\x65\x73\x2f\x43\x42\x75\x72\x6e\x65\x74\x74\x2f\x62\x52\x2e\x73\x76\x67",
    "\x70\x69\x65\x63\x65\x73\x2f\x43\x42\x75\x72\x6e\x65\x74\x74\x2f\x77\x42\x2e\x73\x76\x67",
    "\x70\x69\x65\x63\x65\x73\x2f\x43\x42\x75\x72\x6e\x65\x74\x74\x2f\x77\x4b\x2e\x73\x76\x67",
    "\x70\x69\x65\x63\x65\x73\x2f\x43\x42\x75\x72\x6e\x65\x74\x74\x2f\x77\x4e\x2e\x73\x76\x67",
    "\x70\x69\x65\x63\x65\x73\x2f\x43\x42\x75\x72\x6e\x65\x74\x74\x2f\x77\x50\x2e\x73\x76\x67",
    "\x70\x69\x65\x63\x65\x73\x2f\x43\x42\x75\x72\x6e\x65\x74\x74\x2f\x77\x51\x2e\x73\x76\x67",
    "\x70\x69\x65\x63\x65\x73\x2f\x43\x42\x75\x72\x6e\x65\x74\x74\x2f\x77\x52\x2e\x73\x76\x67"];
  return i5f;
}
function div(j3v, d0i)
{
  const h2h = j3v % d0i;
  const quot = Math.floor((j3v - h2h) / d0i);
  return { quot: quot, h2h: h2h };
}

function w8o(k5o, e6j)
{
	let e7j = new h5b();
	if (e6j.length < 4)
	{
		return e7j;
	}
	let i8i = e6j.slice(0, 2);
	let toString = e6j.slice(2, 4);
	e7j.u1z = e8v(i8i);
  e7j.f7g = k5o.r5v(e7j.u1z);
	e7j.s5v = e8v(toString);
	e7j.m7o = e7j.f7g;
	if (e6j.length == 5)
	{
		switch (e6j[4])
		{
			case 'q':
				e7j.m7o = k5o.v3p() ? z1d.v0g : z1d.y5w;
				break;
			case 'r':
				e7j.m7o = k5o.v3p() ? z1d.v6c : z1d.l7a;
				break;
			case 'b':
				e7j.m7o = k5o.v3p() ? z1d.u2f : z1d.x9a;
				break;
			case 'n':
				e7j.m7o = k5o.v3p() ? z1d.a4y : z1d.a0l;
				break;
		}
	}
	return e7j;
}

class i6s
{

constructor()
{
	let b6f = '';
	let q1x = '';
}

}

function o6b(e6j, b6f, h6i)
{
  let j5o = "\x20" + b6f + "\x20";
  let v3b = e6j.indexOf(j5o, 0);
	if (v3b >= 0)
	{
		let f3p = v3b + j5o.length;
		let v0m = 0;
		
		if (b6f == "\x70\x76")
		{
			v0m = e6j.indexOf("\x20\x73\x74\x72\x69\x6e\x67\x20", f3p);
		}
		else
		{
			v0m = e6j.indexOf("\x20", f3p);
		}
		if (v0m < 0)
		{
			v0m = e6j.length;
		}
    let q1x = e6j.slice(f3p, v0m).trim();
		h6i.set(b6f, q1x);
	}
}

const n3b =
{
	l2e        : 0,
	i0d      : 1,
};

class c0f
{

constructor()
{
	this.r4k = new g5o();
  this.x6w = null;
  this.o8h = new m7z();
  this.f9b = new o4u();
  this.r5x = false;
  this.u3c = false;
  this.l9h = false;
  this.d0w = false;
  this.a0h = false;
  this.o2s = new h3q();
	this.z8y = new o5c();
  this.e7q = null;
}

d7r(v1h)
{
  this.r4k = v1h.t9a();
  this.e4j();
  this.r5x = false;
 	for (const g9e of this.r4k.j3b.j3b)
	{
		if (g9e.b6f == "\x4d\x75\x6c\x74\x69\x50\x56")
		{
			this.r5x = (g9e.q1x != "\x31");
			break;
		}
	}

  this.s9b();
}

s9b()
{
  this.x6w = new Worker("\x2f\x73\x68\x61\x72\x65\x64\x67\x61\x6d\x65\x73\x2f\x6a\x73\x2f\x73\x74\x6f\x63\x6b\x66\x69\x73\x68\x2d\x31\x37\x2e\x31\x2d\x38\x65\x34\x64\x30\x34\x38\x2e\x6a\x73");
  this.x6w.e7q = (event) => {
    this.i0d(event);
  };
}

c7o()
{
	this.o8h.c0n();
	this.f9b.c0n();
	this.l2e("\x75\x63\x69");
}

s2y()
{
	if (!this.l9h)
	{
    return;
  }

  
	for (const g9e of this.r4k.j3b.j3b)
	{
		let z6h = "\x73\x65\x74\x6f\x70\x74\x69\x6f\x6e";
		z6h += "\x20\x6e\x61\x6d\x65\x20";
		z6h += g9e.b6f;
		z6h += "\x20\x76\x61\x6c\x75\x65\x20";
		z6h += g9e.q1x;
		this.l2e(z6h);
	}
  
  
  
  

	this.l2e("\x69\x73\x72\x65\x61\x64\x79");
	this.l9h = false;
}

l2e(z5k)
{
	this.j2x(z5k, n3b.l2e);
  this.x6w.postMessage(z5k);
}

i0d(event)
{
  
  
 	this.j2x(event.data, n3b.i0d);
	this.d8c(event.data);
}

d8c(z6h)
{
	let j8r = z6h.split(' ');
	if (j8r.length == 0) return;
	let z5k = j8r[0];

	if (z5k == "\x72\x65\x61\x64\x79\x6f\x6b")
	{
		this.u3c = true;
    if (this.e7q)
    {
      this.e7q({
        cmd: "\x72\x65\x61\x64\x79",
        data: {}
        });
    }
		return;
	}
	if (z5k == "\x62\x65\x73\x74\x6d\x6f\x76\x65")
	{
		this.n8f(z6h);
	}
	else if (z5k == "\x69\x64")
	{
		this.f1d(z6h);
	}
	else if (z5k == "\x69\x6e\x66\x6f")
	{
		this.n8s(z6h);
	}
	else if (z5k == "\x6f\x70\x74\x69\x6f\x6e")
	{
		this.m2p(z6h);
	}
	else if (z5k == "\x75\x63\x69\x6f\x6b")
	{
		this.t9j(z6h);
	}
}

n8f(z6h)
{
	this.d0w = false;
  if (this.a0h)
  {
    this.a0h = false;
    this.w5e();
  }
}

f1d(z6h)
{
 	let e6j = z6h;
	let j8r = e6j.split("\x20");
	if (j8r.length < 3) return;

  const word1 = j8r.shift();
  const word2 = j8r.shift();
  const q1x = j8r.join(' ');

	if (word2 == "\x6e\x61\x6d\x65")
	{
		this.o8h.b6f = q1x;
	}
	else if (word2 == "\x61\x75\x74\x68\x6f\x72")
	{
		this.o8h.i3i = q1x;
	}
}

n8s(z6h)
{
	let e6j = z6h;
	let h6i = new Map();
	o6b(e6j, "\x64\x65\x70\x74\x68", h6i);
 	o6b(e6j, "\x73\x65\x6c\x64\x65\x70\x74\x68", h6i);
	o6b(e6j, "\x70\x76", h6i);
	o6b(e6j, "\x6e\x70\x73", h6i);
	o6b(e6j, "\x6e\x6f\x64\x65\x73", h6i);
	o6b(e6j, "\x73\x63\x6f\x72\x65\x20\x63\x70", h6i);
	o6b(e6j, "\x73\x63\x6f\x72\x65\x20\x6d\x61\x74\x65", h6i);
	o6b(e6j, "\x74\x69\x6d\x65", h6i);
	o6b(e6j, "\x63\x75\x72\x72\x6d\x6f\x76\x65", h6i);
	o6b(e6j, "\x63\x75\x72\x72\x6d\x6f\x76\x65\x6e\x75\x6d\x62\x65\x72", h6i);
 	o6b(e6j, "\x6d\x75\x6c\x74\x69\x70\x76", h6i);

  if (h6i.has("\x70\x76") && h6i.has("\x64\x65\x70\x74\x68"))
  {
		this.y1v(h6i);
    if (this.e7q)
    {
      this.e7q({
        cmd: "\x70\x76",
        data: {}
        });
    }

		return;
  }

  if (h6i.has("\x63\x75\x72\x72\x6d\x6f\x76\x65") && h6i.has("\x63\x75\x72\x72\x6d\x6f\x76\x65\x6e\x75\x6d\x62\x65\x72"))
	{
		this.l3w(h6i);
    if (this.e7q)
    {
      this.e7q({
        cmd: "\x63\x6d",
        data: {}
        });
    }
		return;
	}
}

m2p(z6h)
{
	let g9e = new k3n();
	let e6j = z6h;

	let u0d = "\x20\x6e\x61\x6d\x65\x20";
  let d4g = e6j.indexOf(u0d, 0);
	if (d4g < 0) return;
	let x0b = d4g + u0d.length;

	let z9e = "\x20\x74\x79\x70\x65\x20";
	let f7j = e6j.indexOf(z9e, 0);
	if (f7j < 0) return;
	let v3d = f7j;

	let n8m = f7j + z9e.length;
	let n6z = e6j.indexOf("\x20", n8m);
	if (n6z < 0) n6z = e6j.length + 1;

	g9e.b6f = e6j.slice(x0b, v3d);
	g9e.type = e6j.slice(n8m, n6z);

	if (g9e.type == "\x63\x68\x65\x63\x6b")
	{
		g9e.type = "\x62\x6f\x6f\x6c";
	}
	else if (g9e.type == "\x63\x6f\x6d\x62\x6f")
	{
		g9e.type = "\x65\x6e\x75\x6d";
	}

	let b4v = "\x20\x64\x65\x66\x61\x75\x6c\x74\x20";
	let r7u = e6j.indexOf(b4v, 0);
	if (r7u >= 0)
	{
		let h5x = r7u + b4v.length;
		let x5a = e6j.indexOf("\x20", h5x);
		if (x5a < 0) x5a = e6j.length + 1;
		g9e.q1x = e6j.slice(h5x, x5a);
		if (g9e.q1x == "\x3c\x65\x6d\x70\x74\x79\x3e")
		{
			g9e.q1x = "";
		}
	}
	if (g9e.type == "\x73\x70\x69\x6e")
	{
		let t4h = "\x20\x6d\x69\x6e\x20";
		let q6n = e6j.indexOf(t4h, 0);
		if (q6n >= 0)
		{
			let n7e = q6n + t4h.length;
			let g3k = e6j.indexOf("\x20", n7e);
			if (g3k < 0) g3k = e6j.length + 1;
			g9e.min = e6j.slice(n7e, g3k).trim();
		}
		let m8q = "\x20\x6d\x61\x78\x20";
		let q1r = e6j.indexOf(m8q, 0);
		if (q1r >= 0)
		{
			let r2c = q1r + m8q.length;
			let m5y = e6j.indexOf("\x20", r2c);
			if (m5y < 0) m5y = e6j.length + 1;
			g9e.max = e6j.slice(r2c, m5y).trim();
		}
	}
	else if (g9e.type == "\x65\x6e\x75\x6d")
	{
		let y6j = 0;
		while (true)
		{
			let j6n = "\x20\x76\x61\x72\x20";
			let z7r = e6j.indexOf(j6n, y6j);
			if (z7r < 0) break;
			let s8e = z7r + j6n.length;
			let m2l = e6j.indexOf("\x20\x76\x61\x72\x20", z7r + 5);
			if (m2l < 0) m2l = e6j.length + 1;
			if (g9e.values.length != 0)
			{
				g9e.values += "\x20";
			}
			g9e.values += e6j.slice(s8e, m2l).trim();
			y6j = m2l;
		}
	}
	this.f9b.j3b.push(g9e);
}

t9j(z6h)
{
	this.l9h = true;
  this.s2y();
}


k1e()
{
	if (this.x6w)
  {
    this.l2e("\x71\x75\x69\x74");
    this.x6w.terminate();
    this.x6w = null;
  }
}








e3r()
{
}

w5h(c3q)
{
	if (this.u3c)
	{
  	this.j2x('setInput', n3b.l2e);
		this.o2s = c3q.t9a();
    if (this.d0w)
    {
      this.a0h = true;
      this.l2e('stop');
    }
    else
    {
      this.w5e();
    }
	}
}

w5e()
{
  this.z8y = new o5c();
  this.z8y.k5o = this.o2s.h1x();
  this.z8y.d5i = this.o2s.d5i();
	this.z8y.a5t = this.r5x;
  this.d0w = true;
  if (this.e7q)
  {
    this.e7q({
      cmd: "\x67\x6f",
      data: {}
      });
  }

  let z6h = "\x70\x6f\x73\x69\x74\x69\x6f\x6e\x20\x66\x65\x6e";
  z6h += "\x20";
	let n9z = g6a(this.o2s.h1x());
	z6h += n9z;
	this.l2e(z6h);
	if (this.o2s.e3t == v1b)
	{
		z6h = "\x67\x6f\x20\x69\x6e\x66\x69\x6e\x69\x74\x65";
		this.l2e(z6h);
	}
	else
	{
		z6h = "\x67\x6f\x20\x6d\x6f\x76\x65\x74\x69\x6d\x65\x20";
		z6h += this.o2s.e3t;
		this.l2e(z6h);
	}
}

e4j()
{
}

j2x(e6j, e8k)
{
	if (!this.r4k.z1m) return;
 	if (e8k == n3b.i0d)
	{
    console.log("\x46\x72\x6f\x6d\x20\x65\x6e\x67\x69\x6e\x65\x3a", e6j);
	}
	else
	{
    console.log("\x54\x6f\x20\x65\x6e\x67\x69\x6e\x65\x3a", e6j);
	}
}

y1v(h6i)
{
  let p3b = h6i.get("\x64\x65\x70\x74\x68");
  let q3r = h6i.get("\x6d\x75\x6c\x74\x69\x70\x76");

	let b6e = new s0x();
	b6e.u0y = p3b;

	if (h6i.has("\x73\x65\x6c\x64\x65\x70\x74\x68"))
	{
		b6e.d7b = h6i.get("\x73\x65\x6c\x64\x65\x70\x74\x68");
	}

 	if (h6i.has("\x6e\x70\x73"))
	{
    let c5l = h6i.get("\x6e\x70\x73");
		let o3o = c6q(c5l, 0);
		let w6l = o3o / 1000;
		if (w6l)
		{
			b6e.l0r = w6l + "\x20\x6b\x4e\x2f\x73";
		}
	}

	let x9y = 0.0;
  if (h6i.has("\x73\x63\x6f\x72\x65\x20\x63\x70"))
	{
    let f0q = h6i.get("\x73\x63\x6f\x72\x65\x20\x63\x70");
		x9y = parseFloat(f0q);
		x9y = x9y / 100.0;
		if (x9y > 9.99)
		{
			x9y = 9.99;
		}
		if (x9y < -9.99)
		{
			x9y = -9.99;
		}
		if (this.z8y.k5o.t3s())
		{
			x9y = -x9y;
		}
		b6e.x9y = x9y;
	}
  if (h6i.has("\x73\x63\x6f\x72\x65\x20\x6d\x61\x74\x65"))
	{
    let w0c = h6i.get("\x73\x63\x6f\x72\x65\x20\x6d\x61\x74\x65");
		let y1z = c6q(w0c, 0);
		if (this.z8y.k5o.t3s())
		{
			y1z = -y1z;
		}
		b6e.y1z = y1z;
		if (y1z > 0)
		{
			x9y = 9.99;
		}
		if (y1z < 0)
		{
			x9y = -9.99;
		}
		b6e.x9y = x9y;
	}

  if (h6i.has("\x74\x69\x6d\x65"))
	{
    let t0y = h6i.get("\x74\x69\x6d\x65");
		let q4s = c6q(t0y, 0);
		let n6s = q4s / 1000;
		let m = div(n6s, 60);
		let s8b = m.h2h;
    s8b = Math.t0m(s8b);
		let h = div(m.quot, 60);
		let k2l = h.h2h;
		let i7l = h.quot;
    const pad = (num) => String(num).padStart(2, '0');
    const a7z = `${pad(i7l)}:${pad(k2l)}:${pad(s8b)}`;
    b6e.a7z = a7z;
	}

  let k0l = h6i.get("\x70\x76");
	let i1x = k0l.split("\x20");

	let b8v = new u9y();
	let d5i = this.z8y.d5i;
	b8v.h4o(this.z8y.k5o, d5i);
	let m5w = b8v.p2p();
	let j6k = this.z8y.k5o.t9a();
	for (const s of i1x)
	{
		if (s.length == 0)
		{
			continue;
		}
		let k9s = w8o(j6k, s);
		let z0y = u6w(j6k);
		let u7s = false;
		for (const s4r of z0y)
		{
			if (s4r.s5v == k9s.s5v &&
				s4r.u1z == k9s.u1z &&
				s4r.m7o == k9s.m7o)
			{
				j6k.i4o(s4r);
				let e7j = t5z(s4r);
				b8v.v6p(m5w, e7j);
				u7s = true;
				break;
			}
		}
    if (!u7s) break;
	}
	if (!b8v.s6a())
	{
    console.log("\x70\x61\x72\x73\x65\x20\x6d\x6f\x76\x65\x73\x20\x61\x61\x6e\x74\x61\x6c\x3a\x20\x6c\x65\x65\x67\x21");
		return;
	}
  console.log("\x70\x61\x72\x73\x65\x20\x6d\x6f\x76\x65\x73\x20\x61\x61\x6e\x74\x61\x6c\x3a\x20" + b8v.s6a());
	b6e.b8v = b8v;

 	if (this.r5x)
	{
		if (q3r == 1)
		{
			this.z8y.x3d = b6e;
		}
		if (q3r > this.z8y.r4j.length)
		{
			this.z8y.r4j.push(b6e);
		}
		else
		{
			this.z8y.r4j[q3r-1] = b6e;
		}
	}
	else
	{
		this.z8y.r4j.push(b6e);
		this.z8y.x3d = b6e;
	}
}

l3w(h6i)
{
  let w2x = h6i.get("\x63\x75\x72\x72\x6d\x6f\x76\x65");
  let h1p = h6i.get("\x63\x75\x72\x72\x6d\x6f\x76\x65\x6e\x75\x6d\x62\x65\x72"); 
	this.z8y.x4y = c6q(h1p, 0);
	let z0y = u6w(this.z8y.k5o);
	this.z8y.i7o = z0y.length;
	let k9s = w8o(this.z8y.k5o, w2x);
	for (const s4r of z0y)
	{
		if (s4r.s5v == k9s.s5v &&
			s4r.u1z == k9s.u1z &&
			s4r.m7o == k9s.m7o)
		{
			this.z8y.w6i = s4r;
			break;
		}
	}
}

i2c()
{
	return this.z8y.t9a();
}

v1h()
{
	return this.r4k.t9a();
}

}

class m7z
{

constructor()
{
	this.b6f = '';
	this.i3i = '';
	this.q2u = '';
	this.r0t = '';
}

t9a()
{
  return Object.assign(new m7z(), this);
}

c0n()
{
	this.b6f = '';
	this.i3i = '';
	this.q2u = '';
	this.r0t = '';
}

}


const v1b = 10000000;

class h3q
{

constructor()
{
	this.b8v = new u9y();
	this.e3t = v1b;
  this.r9m = 0;
	this.d4y = 0;
}

t9a()
{
	let c3y = new h3q();
  c3y.b8v = this.b8v.t9a();
  c3y.e3t = this.e3t;
  c3y.r9m = this.r9m;
  c3y.d4y = this.d4y;
	return c3y;
}

d5i()
{
	return this.b8v.n3o(this.b8v.d3g());
}

h1x()
{
	return this.b8v.k6h();
}

}


class g5o
{

constructor()
{
	this.s4h = '';
	this.c1t = new m7z();
	this.j3b = new o4u();
	this.e2b = new o4u();
	this.z1m = true;
	this.t7k = true;
}

t9a()
{
	let k2m = new g5o();
	k2m.s4h = this.s4h;
	k2m.c1t = this.c1t.t9a();
	k2m.j3b = this.j3b.t9a();
	k2m.e2b = this.e2b.t9a();
	k2m.z1m = this.z1m;
	k2m.t7k = this.t7k;
	return k2m;
}


}


function y6d(x9y)
{
  if (Math.abs(x9y) < 0.005)
  {
    return "\x30\x2e\x30\x30";
  }
  else
  {
     const formatted = x9y.toFixed(2);
     return x9y > 0 ? `+${formatted}` : formatted;
  }
}

class s0x
{

constructor()
{
	this.x9y = 0.0;
	this.y1z = false;
	this.u0y = '';
	this.d7b = '';
	this.a7z = '';
	this.l0r = '';
	this.b8v = new u9y();
}

t9a()
{
	let n5j = new s0x();
  n5j.x9y = this.x9y;
  n5j.y1z = this.y1z;
  n5j.u0y = this.u0y;
  n5j.d7b = this.d7b;
  n5j.a7z = this.a7z;
  n5j.l0r = this.l0r;
  n5j.b8v = this.b8v.t9a();
	return n5j;
}

l0o()
{
	if (this.y1z)
	{
		return "\x23" + this.y1z;
	}
	else
	{
		return y6d(this.x9y);
	}
}

h1u()
{
	let i2t = scoreToMoveValue(this.x9y);
	let r7l = moveValueToEvalString(i2t);
	return r7l;
}

}

class o5c
{

constructor()
{
	this.k5o = new z1a();
	this.d5i = 1;
	this.n0e = false;
	this.w4j = false;
	this.a5t = false;
	this.r4j = [];
	this.x3d = new s0x();
	this.w6i = new h5b();
	this.x4y = 0;
	this.i7o = 0;
}

t9a()
{
	let c4c = new o5c();
  c4c.k5o = this.k5o.t9a();
  c4c.d5i = this.d5i;
  c4c.n0e = this.n0e;
  c4c.w4j = this.w4j;
  c4c.a5t = this.a5t;
  c4c.r4j = this.r4j.slice();
  c4c.x3d = this.x3d.t9a();
  c4c.w6i = this.w6i.t9a();
  c4c.x4y = this.x4y;
  c4c.i7o = this.i7o;
	return c4c;
}

b8t()
{
	return this.x3d.b8v.s6a() > 0;
}

u0n()
{
	let j3k = this.x3d.b8v.p2p();
	this.x3d.b8v.i4o(j3k);
	return j3k.e7j.s4r();
}

}


class k3n
{
  constructor(type = '', b6f = '', q1x = '', min = '', max = '', values = '')
  {
    this.type = type;
    this.b6f = b6f;
    this.q1x = q1x;
    this.min = min;
    this.max = max;
    this.values = values;
  }

  t9a()
  {
    return Object.assign(new k3n(), this);
  }
}

class o4u
{
  constructor()
  {
    this.j3b = [];
  }

  t9a()
  {
    let f7p = new o4u();
    f7p.j3b = this.j3b.map(p => p.t9a());
    return f7p;
  }

  c0n()
  {
    this.j3b.length = 0;
  }

  addBool(b6f, q1x)
  {
    this.j3b.push(new k3n("\x62\x6f\x6f\x6c", b6f, q1x));
  }

  addInteger(b6f, q1x)
  {
    this.j3b.push(new k3n("\x69\x6e\x74", b6f, q1x));
  }

  addSpin(b6f, q1x, min, max)
  {
    this.j3b.push(new k3n("\x73\x70\x69\x6e", b6f, q1x, min, max));
  }

  addString(b6f, q1x)
  {
    this.j3b.push(new k3n("\x73\x74\x72\x69\x6e\x67", b6f, q1x));
  }

  addEnum(b6f, q1x, values)
  {
    this.j3b.push(new k3n("\x65\x6e\x75\x6d", b6f, q1x, '', '', values));
  }

  addButton(b6f)
  {
    this.j3b.push(new k3n("\x62\x75\x74\x74\x6f\x6e", b6f, b6f));
  }

  w6a(b6f, q1x)
  {
    for (let g9e of this.j3b)
    {
      if (g9e.b6f === b6f)
      {
        g9e.q1x = q1x;
      }
    }
  }
}
class r9h
{

constructor()
{
	this.b6f = '';
}

t9a()
{
	let j5d = new r9h();
	j5d.b6f = this.b6f;
	return j5d;
}

y8b()
{
	return this.b6f.length == 0;
}

b4y()
{
	return this.b6f;
}

}


const y9t =
{
	b4x : 0,
	q9d : 1,
	w2s: 2,
	l6j: 3,
	t0h: 4,
	i4x: 5,
	l9e: 6,
	k1m: 7,
	o1o: 8,
	s0a: 9,
	x2s: 10,
	n3z: 11,
	x1o: 12,
	w7z: 13,
	o6r: 14,
	w0e: 15,
	m0c: 16,
	x7j: 17,
	g4g: 18,
	s8d: 19,
	x0l: 20,
	v8b: 21,
	b9b: 22,
	x5y: 23,
	h8g: 24,
	z2q: 25,
	s3g: 26,
	p1o: 27,
	n4q: 28,
	g6e: 29,
	f8p: 30,
	a5n: 31,
	r3r: 32,
	w3n: 33,
	u7i: 34,
	m6z: 35,
	l5w: 36,
	d0j: 37,
	h3k: 38,
	k5k: 39,
	r9b: 40,
	b3v: 41,
	i8w: 42,
	a3i: 43,
	o2o: 44,
	m2g: 45,
	n8u: 46,
	p2x: 47,
	u0j: 48,
	c5x: 49,
	r4g: 50,
	y2c: 51,
	c3o: 52,
	c6k: 53,
	e1c: 54,
	i2z: 55,
	f3z: 56,
	x9z: 57,
	p1c: 58,
	u9u: 59,
	w1j: 60,
	t2j: 61,
	e6y: 62,
	t2p: 63,
	j7c: 64,
	e0b: 65,
	h5y: 66,
	n5i: 67,
	m5d: 68,
	q9i: 69,
	o4a: 70,
	v2x: 71,
	x1s: 72,
	s1f: 73,
	m0s: 74,
	l0u: 75,
	z1u: 76,
	l0t: 77,
	g6l: 78,
	m8e: 79,
	s4g: 80,
	z1c: 81,
	y6w: 82,
	a5v: 83,
	w4b: 84,
	d0h: 85,
	k9o: 86,
	x2e: 87,
	j8s: 88,
	n1z: 89,
	w6p: 90,
	o6s: 91,
	n4d: 92,
	c7t: 93,
	y5j: 94,
	u5g: 95,
	g2w: 96,
	z7n: 97,
	g2u: 98,
	r6a: 99,
	y3q: 100,
	p4l: 101,
	c8h: 102,
	b7k: 103,
	w0u: 104,
	j4v: 105,
	u3h: 106,
	n7b: 107,
	n9a: 108,
	c1i: 109,
	y9k: 110,
	u8w: 111,
	q7n: 112,
	v4z: 113,
	a5j: 114,
	z1t: 115,
	p0z: 116,
	a7p: 117,
	r5t: 118,
	e0p: 119,
	k9d: 120,
	z6x: 121,
	e0m: 122,
	l0b: 123,
	x9o: 124,
	m2z: 125,
	e4d: 126,
	y0w: 127,
	y1o: 128,
	d4w: 129,
	e7b: 130,
	k5f: 131,
	l2s: 132,
	a7h: 133,
	w5s: 134,
	c7x: 135,
	d9r: 136,
	r4p: 137,
	o4x: 138,
	d0x: 139,
	x9q: 140,
	l5j: 141,
	r0m: 142,
	k8x: 143,
	o7l: 144,
	g2y: 145,
	w7x: 146,
	q7l: 147,
	z3b: 148,
	h7u: 149,
	b4k: 150,
	f9c: 151,
	j6z: 152,
	p8u: 153,
	j8n: 154,
	i8r: 155,
	j7b: 156,
	u3v: 157,
	z3c: 158,
	v9m: 159,
	a0e: 160,
	n2h: 161,
	c7n: 162,
	i5o: 163,
	h3c: 164,
	i7j: 165,
	f4c: 166,
	w9f: 167,
	z0h: 168,
	i9c: 169,
	d3e: 170,
	f0g: 171,
	u2o: 172,
	q1s: 173,
	j7v: 174,
	q9x: 175,
	u4f: 176,
	d7j: 177,
	r8j: 178,
	e2z: 179,
	y3m: 180,
	u2j: 181,
	u0w: 182,
	j3u: 183,
	m0l: 184,
	k1w: 185,
	o1z: 186,
	z7m: 187,
	t3j: 188,
	j2e: 189,
	p0n: 190,
	l5k: 191,
	f2g: 192,
	h3o: 193,
	y5t: 194,
	y9o: 195,
	m4a: 196,
	z2a: 197,
	g8c: 198,
	m4j: 199,
	t9c: 200,
	p5f: 201,
	l0y: 202,
	j6b: 203,
	t3y: 204,
	n4b: 205,
	m6w: 206,
	m8i: 207,
	z6e: 208,
	y4v: 209,
	p3e: 210,
	r7r: 211,
	q6h: 212,
	z4c: 213,
	p5u: 214,
	w5l: 215,
	q8k: 216,
	q3j: 217,
	i3u: 218,
	r1n: 219,
	o6p: 220,
	b7r: 221,
	z0a: 222,
	u4z: 223,
	d6o: 224,
	u7g: 225,
	c5t: 226,
	c3u: 227,
	c1l: 228,
	u4a: 229,
	q0q: 230,
	g5c: 231,
	b9r: 232,
	i1w: 233,
	c2n: 234,
	h3v: 235,
	v6e: 236,
	d9b: 237,
	r7w: 238,
	k8j: 239,
	o8j: 240,
	v2o: 241,
	r4i: 242,
	v5p: 243,
	b3w: 244,
	y2w: 245,
	f9a: 246,
	t9m: 247,
	z8c: 248,
	r7t: 249,
	b8s: 250,
	c0x: 251,
	b3d: 252,
	h1b: 253,
	d6v: 254,
	z9b: 255,
	o5l: 256,
	o9a: 257,
	i2b: 258,
	x5s: 259
};


const w3z = 0;
const l4m = 500;

function v5a(e6j)
{
	if (e6j.length != 3)
	{
		return 0;
	}
	let t0f = e6j[0];
	let a0n = e6j[1];
	let e3i = e6j[2];

	let f8m = 0;
	if (t0f == 'A' || t0f == 'a') f8m = 0;
	else if (t0f == 'B' || t0f == 'b') f8m = 1;
	else if (t0f == 'C' || t0f == 'c') f8m = 2;
	else if (t0f == 'D' || t0f == 'd') f8m = 3;
	else if (t0f == 'E' || t0f == 'e') f8m = 4;
	else return 0;
	if (isNaN(a0n) || isNaN(e3i))
	{
		return 0;
	}
	return f8m * 100 + c6q(e6j.substr(1, 2), 0) + 1;
}

function r1q(c3h)
{
	if (c3h)
	{
		let div = Math.trunc((c3h - 1) / 100);
		let h2h = (c3h - 1) % 100;
		let v3h = 'A';
		if (div == 0) v3h = 'A';
		else if (div == 1) v3h = 'B';
		else if (div == 2) v3h = 'C';
		else if (div == 3) v3h = 'D';
		else if (div == 4) v3h = 'E';
		return v3h + h2h.toString().padStart(2, '0');
	}
	else
	{
		return "";
	}
}
class h3t
{

constructor()
{
	this.o3a = 0;
	this.q1p = 0;
	this.f6d = 0;
}

t9a()
{
	let f7m = new h3t();
	f7m.b0w = this.o3a;
	f7m.c6b = this.q1p;
	f7m.o4b = this.f6d;
	return f7m;
}

y8b()
{
	return this.f6d == 0 && this.q1p == 0 && this.o3a == 0;
}

c6i()
{
	let o4b = this.f6d.toString().padStart(4, '0');
	let c6b = this.q1p.toString().padStart(2, '0');
	let b0w = this.o3a.toString().padStart(2, '0');
	return o4b + c6b + b0w;
}

b2f(d8t, e6j)
{
	let o9d = e6j.length;
	if (!o9d)
	{
		this.f6d = 0;
		this.q1p = 0;
		this.o3a = 0;
	}
	else if (d8t == "\x64\x64\x2d\x6d\x6d\x2d\x79\x79\x79\x79" || d8t == "\x64\x64\x2e\x6d\x6d\x2e\x79\x79\x79\x79")
	{
  	if (o9d == 4)
		{
      this.f6d = c6q(e6j.substr(1, 4), 0);
		}
		else if (o9d == 10)
		{
			this.o3a = c6q(e6j.substr(0, 2), 0);
			this.q1p = c6q(e6j.substr(3, 2), 0);
			this.f6d = c6q(e6j.substr(6, 4), 0);
		}
	}
	else if (d8t == "\x79\x79\x79\x79\x2d\x6d\x6d\x2d\x64\x64" || d8t == "\x79\x79\x79\x79\x2e\x6d\x6d\x2e\x64\x64")
	{
  	if (o9d == 4)
		{
      this.f6d = c6q(e6j.substr(1, 4), 0);
		}
		else if (o9d == 10)
		{
			this.o3a = c6q(e6j.substr(8, 2), 0);
			this.q1p = c6q(e6j.substr(5, 2), 0);
			this.f6d = c6q(e6j.substr(0, 4), 0);
		}
	}
	else if (d8t == "\x64\x64\x2d\x6d\x6d\x2d\x79\x79" || d8t == "\x64\x64\x2e\x6d\x6d\x2e\x79\x79")
	{
		if (o9d == 8)
		{
			this.o3a = c6q(e6j.substr(0, 2), 0);
			this.q1p = c6q(e6j.substr(3, 2), 0);
			this.f6d = c6q(e6j.substr(6, 2), 0) + 2000;
		}
	}
}

toString(d8t)
{
	let e6j = '';
	if (this.y8b())
	{
	}
	else if (d8t == "\x6c\x69\x73\x74")
	{
		let o4b = this.f6d.toString().padStart(4, '0');
		let c6b = this.q1p.toString().padStart(2, '0');
		let b0w = this.o3a.toString().padStart(2, '0');
		if (this.o3a)
		{
			e6j = b0w + "\x2d" + c6b + "\x2d" + o4b;
		}
		else if (this.q1p)
		{
			e6j = c6b + "\x2d" + o4b;
		}
		else if (this.f6d)
		{
			e6j = o4b;
		}
	}
	else if (d8t == "\x64\x64\x2d\x6d\x6d\x2d\x79\x79\x79\x79")
	{
		let o4b = this.f6d.toString().padStart(4, '0');
		let c6b = this.q1p.toString().padStart(2, '0');
		let b0w = this.o3a.toString().padStart(2, '0');
		e6j = b0w + "\x2d" + c6b + "\x2d" + o4b;
	}
	else if (d8t == "\x64\x64\x2e\x6d\x6d\x2e\x79\x79\x79\x79")
	{
		let o4b = this.f6d.toString().padStart(4, '0');
		let c6b = this.q1p.toString().padStart(2, '0');
		let b0w = this.o3a.toString().padStart(2, '0');
		e6j = b0w + "\x2e" + c6b + "\x2e" + o4b;
	}
	else if (d8t == "\x79\x79\x79\x79\x2d\x6d\x6d\x2d\x64\x64")
	{
		let o4b = this.f6d.toString().padStart(4, '0');
		let c6b = this.q1p.toString().padStart(2, '0');
		let b0w = this.o3a.toString().padStart(2, '0');
		e6j = o4b + "\x2d" + c6b + "\x2d" + b0w;
	}
	else if (d8t == "\x79\x79\x79\x79\x2e\x6d\x6d\x2e\x64\x64")
	{
		let o4b = this.f6d.toString().padStart(4, '0');
		let c6b = this.q1p.toString().padStart(2, '0');
		let b0w = this.o3a.toString().padStart(2, '0');
		e6j = o4b + "\x2e" + c6b + "\x2e" + b0w;
	}
	else if (d8t == "\x79\x79\x79\x79\x6d\x6d\x64\x64")
	{
		let o4b = this.f6d.toString().padStart(4, '0');
		let c6b = this.q1p.toString().padStart(2, '0');
		let b0w = this.o3a.toString().padStart(2, '0');
		e6j = o4b + c6b + b0w;
	}
	else if (d8t == "\x79\x79\x79\x79")
	{
		let o4b = this.f6d.toString().padStart(4, '0');
		e6j = o4b;
	}
	return e6j;
}

}

class i5q
{

constructor()
{
	this.l5m = new h0g();
	this.g8h = new m2n();
	this.x8w = 0;
	this.v0e = 0;
	this.v8g = "";
  this.r0t = y9t.b4x;
}

t9a()
{
	let o4k = new i5q();
	o4k.l5m = this.l5m.t9a();
	o4k.g8h = this.g8h.t9a();
	o4k.x8w = this.x8w;
	o4k.v0e = this.v0e;
	o4k.v8g = this.v8g;
  o4k.r0t = this.r0t;
	return o4k;
}

y8b()
{
	return this.l5m.y8b() &&
		this.g8h.y8b() &&
		this.x8w == 0 &&
		this.v0e == 0 &&
		this.v8g == "" &&
 		this.r0t == y9t.b4x;
}

}


class c0j
{

constructor()
{
	this.l0x = new i5q();
	this.e3v = new i5q();
	this.m7v = new g4i();
	this.r8x = new r9h();
	this.m1g = new x7k();
	this.v8g = new h4p();
	this.c6i = new h3t();
	this.f5i = m2i.b4x;
	this.c3h = 0;
	this.t0m = 0;
	this.j9m = 0;
	this.l5q = new h5t();
  this.c1t = new q0c();
}

t9a()
{
	let z0j = new c0j();
	z0j.l0x = this.l0x.t9a();
	z0j.e3v = this.e3v.t9a();
	z0j.m7v = this.m7v.t9a();
	z0j.r8x = this.r8x.t9a();
	z0j.m1g = this.m1g.t9a();
	z0j.v8g = this.v8g.t9a();
	z0j.c6i = this.c6i.t9a();
	z0j.f5i = this.f5i;
	z0j.c3h = this.c3h;
	z0j.t0m = this.t0m;
	z0j.j9m = this.j9m;
	z0j.l5q = this.l5q.t9a();
  z0j.c1t = this.c1t.t9a();
	return z0j;
}

y8b()
{
	return this.l0x.y8b() &&
		this.e3v.y8b() &&
		this.m7v.y8b() &&
		this.r8x.y8b() &&
		this.m1g.y8b() &&
		this.v8g.y8b() &&
		this.c6i.y8b() &&
		this.f5i == m2i.b4x &&
		this.c3h == 0 &&
		this.t0m == 0 &&
		this.j9m == 0 &&
		this.l5q.y8b();
}

o8z()
{
	let e6j = '';
	if (this.j9m)
	{
		e6j = this.t0m.toString() + "\x2e" + this.j9m.toString();
	}
	else if (this.t0m)
	{
		e6j = this.t0m.toString();
	}
	return e6j;
}

}


class q0c
{

constructor()
{
	this.k3r = '';
}

t9a()
{
	let b6u = new q0c();
	b6u.k3r = this.k3r;
	return b6u;
}

toString()
{
  return this.k3r;
}

}


class h4p
{

constructor()
{
	this.v8g = '';
}

t9a()
{
	let a0o = new h4p();
	a0o.v8g = this.v8g;
	return a0o;
}

y8b()
{
	return this.v8g.length == 0;
}

b4y()
{
	return this.v8g;
}

}


class h0g
{

constructor()
{
	this.o7r = '';
	this.g3i = '';
}

t9a()
{
	let o1c = new h0g();
	o1c.o7r = this.o7r;
	o1c.g3i = this.g3i;
	return o1c;
}

y8b()
{
	return this.g3i.length == 0 &&
		this.o7r.length == 0;
}

b6f()
{
	if (!this.g3i.length == 0 && !this.o7r.length == 0)
	{
		return this.g3i + "\x2c" + this.o7r;
	}
	else if (this.g3i.length == 0 && this.o7r.length == 0)
	{
		return "";
	}
	else if (this.o7r.length == 0)
	{
		return this.g3i;
	}
	else
	{
		return this.o7r;
	}
}

f3q()
{
	return this.b6f().replace(/,/g, "\x20");
}

e6p()
{
	return this.x1l(1).replace(/,/g, "\x20");
}

x1l(m0u)
{
	if (this.g3i.length == 0)
	{
		if (this.o7r.length == 0 || m0u < 1)
		{
			return "";
		}
		else
		{
			return this.o7r.substring(0, m0u);
		}
	}
	else
	{
		if (this.o7r.length == 0 || m0u < 1)
		{
			return this.g3i;
		}
		else
		{
			return this.g3i + "\x2c" + this.o7r.substring(0, m0u);
		}
	}
}

c0s(r2m)
{
	let e6j = r2m.trim();
	let j3k = e6j.lastIndexOf("\x2c");
	if (j3k != -1)
	{
		this.g3i = e6j.substr(0, j3k).trim();
		this.o7r = e6j.substr(j3k+1, e6j.length).trim();
		if (this.o7r.length != 0)
		{
			if (this.o7r.charAt(0).toLowerCase() == this.o7r.charAt(0))
			{
				this.g3i += "\x2c";
				this.g3i += this.o7r;
				this.o7r = "";
			}
		}
	}
	else
	{
		this.g3i = e6j;
		this.o7r = "";
	}
}

b4y()
{
	return this.b6f();
}

}

const m2i =
{
	b4x : 0,
	m7y : 1,
	p7d : 2,
	n0r : 3,
	m9r : 4,
	h3u : 5,
	x0d : 6,
	r1z : 7,
	z6o : 8,
	y7r : 9,
	t8s : 10,
	g7w : 11,
	s0j : 12,
	z7b : 13,
	v9b : 14,
	t4z : 15
};


function t3o(f5i)
{
	switch (f5i)
	{
		case m2i.m7y:
			return "\x32\x2d\x30";
		case m2i.n0r:
			return "\x31\x2d\x31";
		case m2i.p7d:
			return "\x30\x2d\x32";
		default:
			return "";
	}
}
const u6h =
{
	f6i : 0,
	a4q : 1,
	r3p : 2
};

const p9w =
[
	[ u6h.f6i,   "\x48\x69\x67\x68" ],
	[ u6h.a4q, "\x4d\x69\x64\x64\x6c\x65" ],
	[ u6h.r3p,    "\x4c\x6f\x77" ]
];

class x7k
{

constructor()
{
	this.v8g = '';
	this.o0l = '';
	this.c5q = new h3t();
	this.f5f = new h3t();
	this.z2n = 0;
	this.z0o = u6h.f6i;
}

t9a()
{
	let i1z = new x7k();
	i1z.v8g = this.v8g;
	i1z.o0l = this.o0l;
	i1z.c5q = this.c5q.t9a();
	i1z.f5f = this.f5f.t9a();
	i1z.z2n = this.z2n;
	i1z.z0o = this.z0o;
	return i1z;
}

y8b()
{
	return this.v8g.length == 0 &&
		this.o0l.length == 0 &&
		this.c5q.y8b() &&
		this.f5f.y8b() &&
		this.z2n == 0 &&
		this.z0o == u6h.f6i;
}

b4y()
{
	let e6j = this.v8g;
	if (this.o0l.length)
	{
		if (e6j.length)
		{
			e6j += "\x20";
		}
		e6j += this.o0l;
	}
	return e6j;
}

}


const r6l =
{
	w8s : 0,
	u0a : 1,
	b5n : 2,
	u1u : 3,
	d2j : 4,
	r9t : 5,
	h0s : 6,
	l4z : 7,
	b1t : 8,
	c5v : 9,
	z7j : 10,
	s3o : 11,
	e1j : 12,
	f8k : 13,
	e6m : 14,
	z0s : 15
};

class h5t
{

constructor()
{
	this.q1x = 0;
}

b3p(q1x)
{
	this.q1x = q1x;
}

t9a()
{
	let n5b = new h5t();
	n5b.q1x = this.q1x;
	return n5b;
}

y8b()
{
	return this.q1x == 0;
}

z0x()
{
	return this.q1x != 0;
}

b4x()
{
	return this.q1x == 0;
}

c5s()
{
	let t9o = 0;
	for (let i = 0; i < 16; i++)
	{
		if (this.l3j(i))
		{
			t9o++;
		}
	}
	return t9o;
}

w8d()
{
	this.q1x = 0;
}

set(r8u, r0u)
{
	if (r0u)
	{
		this.q1x |= (1 << r8u);
	}
	else
	{
		this.q1x &= ~(1 << r8u);
	}
}

l3j(r8u)
{
	return (this.q1x & (1 << r8u)) != 0;
}

u0e()
{
	return this.q1x;
}

}

function z0k(o4b)
{
	return o4b.toString().padStart(4, '0');
}

class m2n
{

constructor()
{
	this.b6f = '';
	this.d5t = 0;
	this.o4b = 0;
	this.x5m = false;
	this.r0t = y9t.b4x;
}

t9a()
{
	let j2l = new m2n();
	j2l.b6f = this.b6f;
	j2l.d5t = this.d5t;
	j2l.o4b = this.o4b;
	j2l.x5m = this.x5m;
	j2l.r0t = this.r0t;
	return j2l;
}

y8b()
{
	return this.b6f.length == 0 &&
		this.d5t == 0 &&
		this.o4b == 0 &&
		this.x5m == false &&
		this.r0t == y9t.b4x;
}

i8z()
{
	let e6j = this.b6f;
	if (this.d5t)
	{
		if (e6j.length)
		{
			e6j += "\x20";
		}
		e6j += this.d5t;
	}
	return e6j;
}

b4y()
{
	let e6j = this.b6f;
	if (this.d5t)
	{
		if (e6j.length)
		{
			e6j += "\x20";
		}
		e6j += this.d5t;
	}
	if (e6j.length)
	{
		e6j += "\x20";
	}
	e6j += this.e7z();
	return e6j;
}


u8z()
{
	let e6j = this.b6f;
	if (this.d5t > 1)
	{
		e6j += "\x20";
		e6j += this.d5t;
	}
	return e6j;
}

e7z()
{
	let e6j = '';
	if (this.x5m)
	{
		let v9u = z0k(this.o4b);
		let f5a = z0k(this.o4b + 1);
		let l8i = v9u + "\x2f" + f5a.substr(2, 2);
		e6j = l8i;
	}
	else
	{
		e6j = z0k(this.o4b);
	}
	return e6j;
}

}

class r6c
{

constructor()
{
	this.i7l = 0;
	this.k2l = 0;
	this.s8b = 0;

}

}

function m0w(e6j, t2r, v0e)
{
	v0e.i7l = 0;
	v0e.k2l = 0;
	v0e.s8b = 0;

	let o9d = e6j.length;
	if (!o9d || e6j == "\x3f")
	{
		return;
	}
	let i = 0;
	for (; i < o9d; i++)
	{
		if (!isNaN(e6j[i]))
		{
			break;
		}
	}
	let w3e = '';
	for (; i < o9d; i++)
	{
		if (isNaN(e6j[i]))
		{
			break;
		}
		w3e += e6j[i].toString();
	}
	for (; i < o9d; i++)
	{
		if (!isNaN(e6j[i]))
		{
			break;
		}
	}
	let f4w = '';
	for (; i < o9d; i++)
	{
		if (isNaN(e6j[i]))
		{
			break;
		}
		f4w += e6j[i].toString();
	}
	for (; i < o9d; i++)
	{
		if (!isNaN(e6j[i]))
		{
			break;
		}
	}
	let c4v = '';
	for (; i < o9d; i++)
	{
		if (isNaN(e6j[i]))
		{
			break;
		}
		c4v += e6j[i].toString();
	}
	let m8k = c6q(w3e, 0);
	let v9d = c6q(f4w, 0);
	let i1m = c6q(c4v, 0);
	if (
		m8k < 0 || m8k > t2r ||
		v9d < 0 || v9d > 59 ||
		i1m < 0 || i1m > 59)
	{
		m8k = 0;
		v9d = 0;
		i1m = 0;
	}
	v0e.i7l = m8k;
	v0e.k2l = v9d;
	v0e.s8b = i1m;
}

function k1c(e6j)
{
	if (e6j.length == 0)
	{
		return 0;
	}
	else
	{
		let v0e = new r6c();
		m0w(e6j, 9, v0e);
		return v0e.i7l * 60 + v0e.k2l;
	}
}


const o9n =
{
	b4x : 0,
	r4w : 1,
	o3h : 2,
	m7v : 3,
	l6k : 4,
	g3p : 5,
	r7p : 6,
	i5u : 7
};

const v3n =
[
	[ o9n.b4x, 			 	""                   ],
	[ o9n.r4w,  		 	"\x53\x69\x6e\x67\x6c\x65\x47\x61\x6d\x65"         ],
	[ o9n.o3h,  		 	"\x4d\x61\x74\x63\x68"              ],
	[ o9n.m7v,  "\x52\x6f\x75\x6e\x64\x52\x6f\x62\x69\x6e"         ],
	[ o9n.l6k,   		"\x53\x77\x69\x73\x73\x53\x79\x73\x74\x65\x6d"        ],
	[ o9n.g3p,    "\x4b\x6e\x6f\x63\x6b\x6f\x75\x74"           ],
	[ o9n.r7p,"\x53\x69\x6d\x75\x6c"              ],
	[ o9n.i5u,"\x53\x63\x68\x65\x76\x65\x6e\x69\x6e\x67\x65\x6e\x53\x79\x73\x74\x65\x6d" ]
];

class g4i
{

constructor()
{
	this.v8g = '';
	this.d2c = '';
	this.p7g = new h3t();
	this.l9o = new h3t();
	this.g1b = b9v.t4q;
	this.p4h = 0;
	this.r0t = y9t.b4x;
	this.type = o9n.b4x;
	this.u9n = 0;
	this.x7r = false;
	this.l4a = false;
	this.z2y = false;
	this.s7k = false;
}

t9a()
{
	let s7z = new g4i();
	s7z.v8g = this.v8g;
	s7z.d2c = this.d2c;
	s7z.p7g = this.p7g.t9a();
	s7z.l9o = this.l9o.t9a();
	s7z.g1b = this.g1b;
	s7z.p4h = this.p4h;
	s7z.r0t = this.r0t;
	s7z.type = this.type;
	s7z.u9n = this.u9n;
	s7z.x7r = this.x7r;
	s7z.l4a = this.l4a;
	s7z.z2y = this.z2y;
	s7z.s7k = this.s7k;
	return s7z;
}

y8b()
{
	return this.v8g.length == 0 &&
		this.d2c.length == 0 &&
		this.p7g.y8b() &&
		this.l9o.y8b() &&
		this.g1b == b9v.t4q &&
		this.p4h == 0 &&
		this.r0t == y9t.b4x &&
		this.type == o9n.b4x &&
		!this.u9n &&
		!this.x7r &&
		!this.l4a &&
		!this.z2y &&
		!this.s7k;
}

b4y()
{
	let e6j = this.v8g;
	if (this.d2c.length)
	{
		if (e6j.length)
		{
			e6j += "\x20";
		}
		e6j += this.d2c;
	}
	if (e6j.length)
	{
		e6j += "\x20";
	}
	let o4b = this.p7g.o4b.toString().padStart(4, '0');
	e6j += o4b;
	return e6j;
}

}



const b9v =
{
	t4q : 0,
	k9w : 1,
	k1d : 2,
	x3i : 3
};

const f3j =
[
	[ b9v.t4q, "\x4e\x6f\x72\x6d\x61\x6c" ],
	[ b9v.k9w,  "\x52\x61\x70\x69\x64"  ],
	[ b9v.k1d,  "\x42\x6c\x69\x74\x7a"  ],
	[ b9v.x3i,   "\x43\x6f\x72\x72"   ]
];

function r2g(g1b)
{
	return f3j[g1b][1];
}

function o4n()
{
	let q5e = [];
	for (const g1b of f3j)
	{
		q5e.push(g1b[1]);
	}
	return q5e;
}

class z2t
{

constructor()
{
	this.q4w = '';
	this.y3r = '';
	this.q6q = x2c.b4x;
	this.style = i1f.b4x;
	this.q1x = c2x.b4x;
	this.q2d = new b2q();
	this.d4u = new p0x();
	this.g2e = new s8u();
	this.d2u = n6a.b4x;
	this.w8h = false;
	this.o5y = false;
  this.r2x = false;
}

t9a()
{
	let m4h = new z2t();
	m4h.q4w = this.q4w;
	m4h.y3r = this.y3r;
	m4h.q6q = this.q6q;
	m4h.style = this.style;
	m4h.q1x = this.q1x;
	m4h.q2d = this.q2d.t9a();
	m4h.d4u = this.d4u.t9a();
	m4h.g2e = this.g2e.t9a();
	m4h.d2u = this.d2u;
	m4h.w8h = this.w8h;
	m4h.o5y = this.o5y;
 	m4h.r2x = this.r2x;
	return m4h;
}

y8b()
{
	return this.q4w.length == 0 &&
		this.y3r.length == 0 &&
		this.q6q == x2c.b4x &&
		this.style == i1f.b4x &&
		this.q1x == c2x.b4x &&
		this.q2d.y8b() &&
		this.d4u.y8b() &&
		this.g2e.y8b() &&
		this.d2u == n6a.b4x &&
		this.w8h == false &&
		this.o5y == false &&
 		this.r2x == false;
}

}

const n6a =
{
	b4x : 0,
	l9f : 1,
	a4q : 2,
	p8f : 3
};

const p6k =
{
	x7y : 0,
	y2p : 1,
	n2v : 2,
	c7y : 3,
	a7m : 4,
	e9z : 5,
	g9y : 6,
	t4z : 7,
	w7g : 8,
	r3c : 9,
	w7b : 10,
	j7f : 11,
	w4j : 12,
	n1b : 13,
	j0q : 14,
	y2i : 15
};

class b2q
{

constructor()
{
	this.q1x = 0;
}

b3p(q1x)
{
	this.q1x = q1x;
}

t9a()
{
	let f8s = new b2q();
	f8s.q1x = this.q1x;
	return f8s;
}

y8b()
{
	return this.q1x == 0;
}

z0x()
{
	return this.q1x != 0;
}

b4x()
{
	return this.q1x == 0;
}

c5s()
{
	let t9o = 0;
	for (let i = 0; i < 16; i++)
	{
		if (this.l3j(i))
		{
			t9o++;
		}
	}
	return t9o;
}

w8d()
{
	this.q1x = 0;
}

set(r8u, r0u)
{
	if (r0u)
	{
		this.q1x |= (1 << r8u);
	}
	else
	{
		this.q1x &= ~(1 << r8u);
	}
}

l3j(r8u)
{
	return (this.q1x & (1 << r8u)) != 0;
}

u0e()
{
	return this.q1x;
}

}

const x2c =
{
	b4x : 0,
	d5w : 1,
	d8m : 2,
	u5c : 3,
	v2k : 4,
	h7d : 5,
	m7i : 6
};

const z7o =
[
	[ x2c.b4x,     		  ""   ],
	[ x2c.d5w,       		  "\x52\x52" ],
	[ x2c.d8m, 		  "\x26\x23\x38\x39\x37\x39\x3b"  ],
	[ x2c.u5c, 		  "\x26\x23\x38\x38\x30\x34\x3b"  ],
	[ x2c.v2k,  "\x3d"  ],
	[ x2c.h7d,   "\x26\x23\x39\x36\x35\x31\x3b"  ],
	[ x2c.m7i,  "\x26\x23\x39\x36\x36\x31\x3b"  ]
];

function j0k(q6q)
{
	return z7o[q6q][1];
}


const i1f =
{
	b4x : 0,
	w2n : 1,
	z1y : 2,
	i5j : 3,
	i1a : 4,
	z3v : 5,
	o0y : 6,
	h4g : 7,
	d0b : 8
};

const h6m =
[
	[ i1f.b4x,     		"" 	 ],
	[ i1f.w2n,       	"\x21"  ],
	[ i1f.z1y, 					"\x3f"  ],
	[ i1f.i5j,	"\x21\x3f" ],
	[ i1f.i1a,	 		"\x3f\x21" ],
	[ i1f.z3v,  	"\x21\x21" ],
	[ i1f.o0y, 			"\x3f\x3f" ],
	[ i1f.h4g, 		"\x26\x23\x38\x38\x35\x37\x3b"  ],
	[ i1f.d0b, 		"\x26\x23\x39\x37\x32\x33\x3b"  ]
];

function p7q(style)
{
	return h6m[style][1];
}


class e3e
{

constructor()
{
	this.e7j = new e1b();
	this.f6f = null;
	this.t6r = null;
	this.s8f = null;
	this.p3k = null;
  this.d5t = 0; 
}

a2d(e7j)
{
	this.e7j = e7j.t9a();
}

m9s(k5o, j5j, f3m, e3f)
{
	this.e7j.m9s(k5o, j5j, f3m, e3f);
}

}

class d6h
{

constructor()
{
	this.c2h = null;
	this.e7j = null;
}

m1t(v1n)
{
	return this.c2h == v1n.c2h;
}

w0w(v1n)
{
	return !this.m1t(v1n);
}

t9a()
{
	let p3s = new d6h();
  p3s.c2h = this.c2h;
  p3s.e7j = this.e7j;
	return p3s;
}

}


class u9y
{

constructor()
{
	this.u2t = new z1a();
 	this.r6t = null;
	this.h7p = 1;
	this.u2t.p6a();
  this.q0s = new z2t();
}

j5r(v1n)
{
	this.h4o(v1n.u2t, v1n.h7p);
	this.q0s = v1n.q0s.t9a();
	this.r6t = this.i9o(v1n.r6t);
}

t9a()
{
	let k3a = new u9y();
	k3a.j5r(this);
	return k3a;
}

h4o(q9r, y1s)
{
	this.u2t = q9r.t9a();
	this.h7p = y1s;
	this.q0s = new z2t();
	this.r6t = null;
}

y1s()
{
	return this.h7p;
}

q9r()
{
	return this.u2t.t9a();
}


d3g()
{
	let j3k = this.p2p();
	this.f7u(j3k);
	return j3k;
}


k6h()
{
	let f7u = this.d3g();
	return this.k5o(f7u);
}


n3o(j3k)
{
  let y9f = this.o5u(j3k) + 1;
	if (y9f)
	{
		return this.h7p +
			Math.floor((y9f - 1 + this.u2t.t3s()) / 2);
	}
	else
	{
		return this.h7p;
	}
}

o5u(j3k)
{
	let y9f = 0;
	if (!j3k.c2h)
	{
		return 0;
	}
	let f7b = j3k.c2h;
	while (1)
	{
		y9f++;
		if (!f7b.t6r)
		{
			let z7x = f7b;
			while (z7x.s8f)
			{
				z7x = z7x.s8f;
			}
			if (!z7x.t6r)
			{
				break;
			}
		}
		if (f7b.t6r)
		{
			f7b = f7b.t6r;
		}
		else
		{
			let z7x = f7b;
			while (z7x.s8f)
			{
				z7x = z7x.s8f;
			}
			f7b = z7x.t6r;
		}
	}
	return y9f;
}


s6a()
{
	let d8w = 0;
	let c1b = this.r6t;
	while (c1b)
	{
		d8w++;
		c1b = c1b.f6f;
	}
	return d8w;
}

k5i()
{
	return this.r6t != null;
}

s6p(j3k)
{
	return j3k.m1t(this.p2p());
}

a8r(j3k)
{
	if (j3k.c2h)
	{
		return j3k.c2h.f6f == null;
	}
	else if (this.r6t)
	{
		return false;
	}
	else
	{
		return true;
	}
}

i3c(j3k)
{
	if (!this.s6p(j3k))
	{
		if (j3k.c2h.t6r)
		{
			j3k.c2h = j3k.c2h.t6r;
			j3k.e7j = j3k.c2h.e7j;
		}
		else
		{
			let f7b = j3k.c2h;
			while (f7b.s8f)
			{
				f7b = f7b.s8f;
			}
			f7b = f7b.t6r;
			j3k.c2h = f7b;
      if (j3k.c2h)
      {
  			j3k.e7j = j3k.c2h.e7j;
      }
      else
      {
        j3k.e7j = null;
      }
		}
	}
}

i4o(j3k)
{
	if (!this.a8r(j3k))
	{
		j3k.c2h = this.t6e(j3k);
		j3k.e7j = j3k.c2h.e7j;
	}
}

o3w(j3k, k9m)
{
	let x5x = this.q3f(j3k);
	if (k9m < 0 || k9m >= x5x)
	{
		return;
	}
	let z7x = this.t6e(j3k);
	let i = 0;
	while (i != k9m)
	{
		i++;
		z7x = z7x.p3k;
	}
	j3k.c2h = z7x;
	j3k.e7j = j3k.c2h.e7j;
}

d5i(j3k)
{
	if (!j3k.c2h)
	{
		return this.h7p;
	}
	let y9f = this.o5u(j3k);
	if (y9f)
	{
		return this.h7p +
      Math.floor((y9f - 1 + this.u2t.t3s()) / 2);
	}
	else
	{
		return this.h7p;
	}
}

p2p()
{
	let j3k = new d6h();
	j3k.c2h = null;
	j3k.e7j = null;
	return j3k;
}

f7u(j3k)
{
	if (!this.a8r(j3k))
	{
		let f7b = this.t6e(j3k);
		while (true)
		{
			if (!f7b.f6f)
			{
				break;
			}
			f7b = f7b.f6f;
		}
		j3k.c2h = f7b;
		j3k.e7j = j3k.c2h.e7j;
	}
}

w2j(b1b)
{
	let j3k = this.p2p();
	if (b1b > 0)
	{
    this.b1b = 0;
		this.u3i(j3k, b1b);
		return j3k;
	}
	else
	{
		return j3k;
	}
}

u3i(j3k, b1b)
{
	while (true)
	{
		if (this.a8r(j3k))
		{
			return false;
		}
		let x5x = this.q3f(j3k);
		if (x5x > 1)
		{
			let w9g = j3k.t9a();
			for (let i = 1; i < x5x; i++)
			{
				this.o3w(j3k, i);
				this.b1b++;
				if (this.b1b == b1b)
				{
					return true;
				}
				if (this.u3i(j3k, b1b))
				{
					return true;
				}
        j3k.c2h = w9g.c2h;
        j3k.e7j = w9g.e7j;
			}
		}
		this.i4o(j3k);
		this.b1b++;
		if (this.b1b == b1b)
		{
			return true;
		}
	}
}

q7z(j3k)
{
	if (!j3k.c2h)
	{
		return 0;
	}
	else
	{
		return j3k.c2h.d5t;
	}
}

g3e(j3k)
{
	let b8v = [];
 	if (!j3k.c2h)
  {
		return b8v;
	}
	let f7b = j3k.c2h;
	while (1)
	{
		b8v.push(f7b);
		if (!f7b.t6r)
		{
			let z7x = f7b;
			while (z7x.s8f)
			{
				z7x = z7x.s8f;
			}
			if (!z7x.t6r)
			{
				break;
			}
		}
		if (f7b.t6r)
		{
			f7b = f7b.t6r;
		}
		else
		{
			let z7x = f7b;
			while (z7x.s8f)
			{
				z7x = z7x.s8f;
			}
			f7b = z7x.t6r;
		}
	}
	return b8v.reverse();
}

u5x(j3k)
{
	let b8v = this.g3e(j3k);
	let x5x = this.q3f(j3k);
	if (x5x == 0)
	{
		return b8v;
	}
	let i9g = this.b8h(j3k, 0);
	while (i9g)
	{
		b8v.push(i9g);
		i9g = i9g.f6f;
	}
	return b8v;
}

q3f(j3k)
{
	let i9g = this.t6e(j3k);
	if (!i9g)
	{
		return 0;
	}
	let x5x = 1;
	while (i9g.p3k)
	{
		x5x++;
		i9g = i9g.p3k;
	}
	return x5x;
}

a7q(j3k, g5n)
{
	if (this.s6p(j3k))
	{
		this.r6t = g5n;
		j3k.c2h = g5n;
		j3k.e7j = j3k.c2h.e7j;
	}
	else
	{
		j3k.c2h.f6f = g5n;
		g5n.t6r = j3k.c2h;
		j3k.c2h = g5n;
		j3k.e7j = j3k.c2h.e7j;
	}
}

d8i(j3k, g5n)
{
	let z7x = this.t6e(j3k);
	while (z7x.p3k)
	{
		z7x = z7x.p3k;
	}
	z7x.p3k = g5n;
	g5n.s8f = z7x;

	j3k.c2h = g5n;
	j3k.e7j = j3k.c2h.e7j;
}

v6p(j3k, e7j)
{
	let g5n = new e3e();
 	g5n.a2d(e7j);
	if (this.a8r(j3k))
	{
		this.a7q(j3k, g5n);
	}
	else
	{
		this.d8i(j3k, g5n);
	}
}


j7e(j3k, b8v)
{
	for (const e7j of b8v)
	{
		this.v6p(j3k, e7j);
	}
}


f1s(j3k)
{
	let z7x = this.b8h(j3k, 1);
	if (!z7x)
	{
		return false;
	}
	while (z7x)
	{
		let c1b = z7x.f6f;
		while (c1b)
		{
			if (c1b.p3k)
			{
				return false;
			}
			c1b = c1b.f6f;
		}
		z7x = z7x.p3k;
	}
	return true;
}

u9x()
{
	let c1b = this.r6t;
	while (c1b)
	{
		if (c1b.p3k)
		{
			return true;
		}
		c1b = c1b.f6f;
	}
	return false;
}

z3i()
{
	if (!this.q0s.y8b())
	{
		return true;
	}
	if (this.u9x())
	{
		return true;
	}
	let c1b = this.r6t;
	while (c1b)
	{
		if (c1b.e7j.z3i())
		{
			return true;
		}
		c1b = c1b.f6f;
	}
	return false;
}

t6e(j3k)
{
	if (j3k.c2h)
	{
		return j3k.c2h.f6f;
	}
	return this.r6t;
}

b8h(j3k, k9m)
{
	let i = 0;
	let z7x = this.t6e(j3k);
	while (z7x && i != k9m)
	{
		z7x = z7x.p3k;
		i++;
	}
	return z7x;
}

i9o(z7x)
{
	let n4p = z7x;
	let j5a = null;
	let g5n = null;
	let w4o = null;
	while (n4p)
	{
		g5n = new e3e();
		g5n.a2d(n4p.e7j);
		if (j5a)
		{
			j5a.f6f = g5n;
			g5n.t6r = j5a;
		}
		else
		{
			w4o = g5n;
		}
		j5a = g5n;
		if (n4p.p3k && !n4p.s8f)
		{
			let i7p = n4p.p3k;
			let h1h = j5a;
			while (i7p)
			{
				let w8u = this.i9o(i7p);
				h1h.p3k = w8u;
				w8u.s8f = h1h;
				h1h = w8u;
				i7p = i7p.p3k;
			}
		}
		n4p = n4p.f6f;
	}
	return w4o;
}

b9o()
{
	return this.q0s;
}

t0q()
{
	return this.q0s.q4w;
}

t8k(s6r)
{
	this.q0s.q4w = s6r;
}

o3u()
{
	return !this.q0s.d4u.y8b();
}

m2j(d4u)
{
	this.q0s.d4u = d4u.t9a();
}

g7e()
{
	return this.q0s.d4u;
}

i2n()
{
	return !this.q0s.g2e.y8b();
}

t9y(g2e)
{
	this.q0s.g2e = g2e.t9a();
}

a0w()
{
	return this.q0s.g2e;
}

s3b()
{
	return !this.q0s.q2d.y8b();
}

x5r(q2d)
{
	this.q0s.q2d = q2d.t9a();
}

k3i()
{
	return this.q0s.q2d;
}

n7q(b1b)
{
  if (b1b == 0)
  {
    return true;
  }
	let c1b = this.r6t;
	while (c1b)
	{
    if (c1b.d5t == b1b)
    {
      return true;
    }
		c1b = c1b.f6f;
	}
	return false;
}

i2j()
{
	let j3k = this.p2p();
	this.b1b = 0;
	this.m9k(j3k);
}

m9k(j3k)
{
	while (true)
	{
		if (this.a8r(j3k))
		{
			return;
		}
		let x5x = this.q3f(j3k);
		if (x5x > 1)
		{
			let w9g = j3k.t9a();
			for (let i = 1; i < x5x; i++)
			{
				this.o3w(j3k, i);
				this.b1b++;
        j3k.c2h.d5t = this.b1b;
				this.m9k(j3k);
        j3k.c2h = w9g.c2h;
        j3k.e7j = w9g.e7j;
			}
		}
		this.i4o(j3k);
  	this.b1b++;
    j3k.c2h.d5t = this.b1b;
	}
}

k5o(j3k)
{
	let k5o = this.u2t.t9a();
	if (!j3k.c2h)
	{
		return k5o;
	}
	let b8v = this.q8o(j3k);
  for (const e7j of b8v)
	{
		k5o.i4o(e7j.s4r());
	}
	return k5o;
}

q8o(j3k)
{
	let b8v = [];
 	if (!j3k.c2h)
  {
		return b8v;
	}
	let f7b = j3k.c2h;
	while (1)
	{
		b8v.push(f7b.e7j);
		if (!f7b.t6r)
		{
			let z7x = f7b;
			while (z7x.s8f)
			{
				z7x = z7x.s8f;
			}
			if (!z7x.t6r)
			{
				break;
			}
		}
		if (f7b.t6r)
		{
			f7b = f7b.t6r;
		}
		else
		{
			let z7x = f7b;
			while (z7x.s8f)
			{
				z7x = z7x.s8f;
			}
			f7b = z7x.t6r;
		}
	}
	return b8v.reverse();
}


z1j()
{
	this.q0s = new z2t();
	this.r6t = null; 
  
}


s7x()
{
	let b8v = [];
	let c1b = this.r6t;
	while (c1b)
	{
		b8v.push(c1b.e7j);
		c1b = c1b.f6f;
	}
	return b8v;
}


}

const c2x =
{
	b4x : 0,
	m9r : 1,
	h3u : 2,
	x0d : 3,
	r1z : 4,
	z6o : 5,
	y7r : 6,
	t8s : 7,
	g7w : 8,
	s0j : 9,
	z7b : 10,
	v9b : 11,
	t4z : 12,
	a6a : 13,
	t2t : 14,
	c7y : 15
};

const f0a =
[
	[ c2x.b4x,     						  ""    ],
	[ c2x.m9r,        "\x2b\x26\x23\x38\x32\x31\x31\x3b" ],
	[ c2x.h3u, 						"\x26\x23\x31\x37\x37\x3b" ],
	[ c2x.x0d,		"\x26\x23\x31\x30\x38\x36\x36\x3b"  ],
	[ c2x.r1z, 							"\x3d"   ],
	[ c2x.z6o,  							"\x26\x23\x38\x37\x33\x34\x3b" ],
	[ c2x.y7r,  	"\x26\x23\x31\x30\x38\x36\x35\x3b"],
	[ c2x.t8s, 						"\x26\x23\x38\x37\x32\x33\x3b" ],
	[ c2x.g7w, 				"\x26\x23\x38\x32\x31\x31\x3b\x2b"],
	[ c2x.s0j,						"\x26\x23\x38\x37\x37\x33\x3b" ],
	[ c2x.z7b, 						"\x26\x23\x38\x36\x34\x36\x3b" ],
	[ c2x.v9b,  						"\x26\x23\x38\x35\x39\x33\x3b" ],
	[ c2x.t4z, 								"\x26\x23\x38\x35\x39\x34\x3b" ],
	[ c2x.a6a, 					"\x26\x23\x38\x38\x35\x33\x3b" ],
	[ c2x.t2t,		"\x26\x23\x31\x30\x32\x32\x37\x3b"],
	[ c2x.c7y, 								"\x4e"   ]
];

function c2k(q1x)
{
	return f0a[q1x][1];
}


const x9f =
{
	g0u : 0,
	n5c : 1,
	r9e : 2
};

const u6j =
{
	b4x : 0,
	u5u : 1,
	q1g : 2,
	r6b : 3,
	u6s : 4,
	q6q : 5,
	y3r : 6,
	q4w : 7,
	f8y : 8,
	q2d : 9,
	w8h : 10,
	o5y : 11
};

/*
TO DO
- Aanpassen voor tekst after van f5o daar kan dia inzitten (zie c++)
- Vette tekst en niet vette u5u testen bij wel/niet MultiPV
*/
class y6x
{

constructor()
{
	this.t0s = new a1u();
  this.m9p = true;
  this.x5p = false;
  this.f6n = true;
  this.m5q = true;
  this.x1n = x9f.g0u;
  this.a5t = false;
  this.w1p = true;
 	this.j8h = true;
 	this.d3d = -1;
  this.r0x = false;
  this.i7s = false;
	this.p3o = false;
	this.i6l = true;
  this.z7u = false;
  this.a7x = false;
  this.s0w = 0;
	this.m6g = true;
  this.e8m = null;
 	this.v8c = u6j.b4x;
}

a3b(b8v)
{
	this.e8m = b8v;
 	let p2p = this.e8m.p2p();
	let q9r = this.e8m.q9r();
	this.v8c = u6j.b4x;
	this.i6l = true;
	this.i7s = false;
	this.p3o = false;
	this.r0x = false;
	this.z7u = this.e8m.z3i();
	this.m6g = true;
	this.s0w = 0;

	if (this.a5t)
	{
		this.y1b(u6j.q1g);
		this.s3c();
	}
	else
	{
    
    if (this.x1n == x9f.n5c ||
      (this.x1n == x9f.r9e && !q9r.g0c()))
    {
      if (this.m5q)
      {
        this.q4c(p2p, q9r, s0w);
        this.i6l = true;
      }
    }

    this.y1b((this.z7u && !this.r2x) ? u6j.u5u : u6j.q1g);
    this.z6q(this.z7u);
    this.v6p(p2p, "");
    this.o8f(p2p, this.e8m.b9o().q4w);

    if (this.e8m.k5i())
    {
      this.b3x();
    }
   	this.y1b(u6j.b4x);
   	this.k2n();
  }
}

s3c()
{
/*
let w3x = "";


engineData.forEach(k9m => {
    
    let p6n = '<div class="variation-row">';

    
    p6n += `<span class="\x74\x64\x63\x6f\x6d\x6d\x65\x6e\x74\x20\x69\x73\x2d\x62\x6f\x6c\x64" b9y="\x24\x7b\x76\x61\x72\x69\x61\x74\x69\x6f\x6e\x2e\x73\x74\x61\x72\x74\x4e\x72\x7d">${k9m.eval}</span>`;

    
    k9m.b8v.forEach(e7j => {
        p6n += ` <span class="\x74\x64\x6d\x6f\x76\x65" b9y="\x24\x7b\x6d\x6f\x76\x65\x2e\x6e\x72\x7d">${e7j.san}</span>`;
    });

    
    p6n += '</div>';
    w3x += p6n;
});

document.getElementById("\x65\x6d\x6f\x76\x65\x73\x50\x61\x6e\x65\x6c\x30").innerHTML = w3x;
*/



	let j3k = this.e8m.p2p();
	let q3f = this.e8m.q3f(j3k);
	for (let i = 0; i < q3f; i++)
	{
    this.t0s.c0z('<div class="variation-row">');

		j3k = this.e8m.p2p();
  	let k5o = this.e8m.q9r();
	  let d5i = this.e8m.y1s();
		this.e8m.o3w(j3k, i);
		this.i6l = true;
		let z3u = true;
		let e7j = j3k.e7j;
		let y3r = e7j.y3r();
		if (y3r.length)
		{
			this.y9e(j3k, y3r);
		}
		this.y1b(u6j.q1g);
		do
		{
			if (z3u)
			{
				j3k.e7j.d0o();
			}
			this.e7g(j3k, k5o, d5i);
			if (z3u)
			{
				j3k.e7j.j8b(y3r);
				z3u = false;
			}
			if (this.e8m.a8r(j3k))
			{
				break;
			}
			k5o.i4o(j3k.e7j);
			if (k5o.v3p())
			{
				d5i++;
			}
			this.e8m.i4o(j3k);
		} while (true);

    this.t0s.c0z('<div');
	}
}

b3x()
{
  let u5b = 0;
 	let j3k = this.e8m.p2p();
	let k5o = this.e8m.q9r();
  let d5i = this.e8m.y1s();

	let u3p = 100000;
	if (this.d3d == 0)
	{
		return;
	}
	if (this.d3d != -1)
	{
		u3p = this.d3d;
	}
	let j1k = d5i + u3p - 1;
	this.i6l = true;
	while (true)
	{
		let q3f = this.e8m.q3f(j3k);
		while (d5i <= j1k && !this.e8m.a8r(j3k))
		{
      this.e8m.i4o(j3k);
    	this.y1b((this.z7u && !this.r2x) ? u6j.u5u : u6j.q1g);
			this.e7g(j3k, k5o, d5i);
			k5o.i4o(j3k.e7j.s4r());
 			if (k5o.v3p())
			{
				d5i++;
			}
			if (this.j8h && q3f > 1)
			{
				break;
			}
			q3f = this.e8m.q3f(j3k);
		}
		if (!q3f || d5i > j1k)
		{
			return;
		}
    k5o.i3c(j3k.e7j.s4r());
		if (k5o.t3s())
		{
			d5i--;
		}
    this.e8m.i3c(j3k);
		for (let i = 1; i < q3f; i++)
		{
      u5b++;
      let z9h = "<span class=\"tdline\" data-level=\"";
      z9h += u5b.toString();
      z9h += "\">";
      this.t0s.c0z(z9h);
			this.h0i(u6j.r6b);
			this.v0k("\x5b", true);
			let q6q = '';
      this.a2q(j3k, k5o, d5i, i, q6q, u5b);
			this.y1b(u6j.r6b);
			this.v0k("\x5d", true);
      this.t0s.c0z("\x3c\x2f\x73\x70\x61\x6e\x3e");
      u5b--;
     	this.y1b((this.z7u && !this.r2x) ? u6j.u5u : u6j.q1g);
		}
		this.h0i(this.v8c);
    this.e8m.i4o(j3k);
    k5o.i4o(j3k.e7j.s4r());
		if (k5o.v3p())
		{
			d5i++;
		}
		this.i6l = true;
	}
}

e7g(j3k, k5o, d5i)
{
	if (this.e8m.s6p(j3k))
	{
		return;
	}
 	let e7j = j3k.e7j;

	let e6j = '';
  let g9o = false;
  if (this.m9p)
	{
		if (e7j.n0a())
		{
			if (!this.e8m.s6p(j3k))
			{
        let g0r = j3k.t9a();
        this.e8m.i3c(g0r);
        if (g0r.e7j)
        {
  				if (g0r.e7j.e3c())
	  			{
		  			g9o = true;
			  	}
        }
			}
		}
  }
	if (this.i7s)
	{
		e6j = "\x28";
		this.i7s = false;
		if (this.m9p && e7j.a9g())
		{
			this.v0k("\x28", true);
			let j6g = this.v8c;
			this.y9e(j3k, e7j.y3r());
			this.y1b(j6g);
			e6j = "";
      g9o = true;
		}
	}
	else
	{
		if (this.m9p && e7j.a9g())
		{
  	  let j6g = this.v8c;
	  	this.y9e(j3k, e7j.y3r());
		  this.y1b(j6g);
      g9o = true;
    }
	}
	if (e7j.s8q())
	{
		e6j += j0k(e7j.q6q());
	}
	let w6x = e7j.v4v();
	if (w6x)
	{
    e6j += d5i;
		e6j += '.';
	}
	else
	{
		if (this.i6l || g9o)
		{
 			e6j += d5i;
			e6j += "\x2e\x2e\x2e";
		}
	}
	e6j += w0y(k5o, e7j.s4r(), false);
	if (e7j.v8l())
	{
		e6j += p7q(e7j.style());
	}
	if (e7j.k3b())
	{
		e6j += c2k(e7j.q1x());
	}
	if (e7j.k4i())
	{
		e6j += "\x20\x45\x6e\x64\x20\x4f\x66\x20\x47\x61\x6d\x65";
  }
	if (this.p3o || this.r0x)
	{
		if (this.e8m.a8r(j3k) && (!this.m9p || !e7j.e3c()))
		{
			if (this.p3o)
			{
				e6j += "\x29";
				this.p3o = false;
			}
			else
			{
				e6j += "\x3b";
				this.r0x = false;
			}
		}
	}
	this.v6p(j3k, e6j);
	this.i6l = false;

	if (e7j.y9i())
	{
		let q4w = e7j.q4w();
    let k2a = q4w.indexOf("\x5b\x23\x5d");
		let g0g = q4w.substring(0, k2a);
	  let y6y = q4w.substring(k2a + 3);
		if (g0g.length)
		{
			this.o8f(j3k, g0g);
		}
		this.s0w++;
		if (this.m5q)
		{
			this.h0i(u6j.b4x);
      this.q4c(j3k, k5o, this.s0w);
			this.i6l = true;
		}
		if (y6y.length)
		{
			this.o8f(j3k, y6y);
		}
	}
	else
	{
		this.o8f(j3k, e7j.q4w());
	}

  if (e7j.k4i())
	{
    this.t0s.d3t("\x3c\x64\x69\x76\x3e\x26\x6e\x62\x73\x70\x3b\x3c\x2f\x64\x69\x76\x3e"); 
   	this.k2n();
 	  this.z6q(false); 
 	  this.a7x = true;
	}
}

y1b(m5x)
{
	if (m5x != this.v8c)
	{
		this.p2o();
		this.v8c = m5x;
		this.m3s();
	}
}

m3s()
{
}

p2o()
{
	this.v8c = u6j.b4x;
}

h0i(m5x)
{
	this.p2o();
	this.v8c = u6j.b4x;
  
  
  
  
  this.t0s.d3t("\x3c\x62\x72\x3e"); 
	if (m5x != u6j.b4x)
	{
		this.v8c = m5x;
		this.m3s();
	}
}

q4c(j3k, k5o, d5t)
{
  this.m6g = true;
	let z9h = "<span class=\"tddia\" movenr=\"";
  z9h += this.e8m.q7z(j3k).toString();
	z9h += "\">",
	this.t0s.c0z(z9h);
	this.t0s.c0z("\x3c\x63\x61\x6e\x76\x61\x73\x3e\x3c\x2f\x63\x61\x6e\x76\x61\x73\x3e");
	this.t0s.c0z("\x3c\x2f\x73\x70\x61\x6e\x3e");
	this.i6l = true;
}

t6x(j3k, s6r)
{
  this.k1h(j3k);
	this.l1i(s6r);
  this.q6v();
}

a2q(x6x, c6o, d5i, k9m, q6q, u5b)
{
  let j3k = x6x.t9a();
  let k5o = c6o.t9a();

	if (q6q.length)
	{
		this.y1b(u6j.q6q);
		let q7h = q6q;
		q7h += "\x29";
    let z9h = "<span class=\"tdprefix\">";
    this.t0s.c0z(z9h);
  	this.v0k(q7h);
    this.t0s.c0z("\x3c\x2f\x73\x70\x61\x6e\x3e");
	}
	let q3f = 0;
	let a8b = 1;
  this.e8m.o3w(j3k, k9m);
	this.i6l = true;
	do
	{
		this.y1b(u6j.r6b);
		this.e7g(j3k, k5o, d5i);
		if (q3f > 1)
		{
      this.e8m.i3c(j3k);
      this.k5u(j3k, k5o, d5i);
      this.e8m.i4o(j3k);
			this.i6l = true;
		}
		k5o.i4o(j3k.e7j.s4r());
		if (k5o.v3p())
		{
			d5i++;
		}
		q3f = this.e8m.q3f(j3k);
		if (q3f == 0)
		{
			break;
		}
		if (q3f > 1)
		{
			if (!this.e8m.f1s(j3k))
			{
				break;
			}
		}
    this.e8m.i4o(j3k);
		a8b++;
	} while (true);

	if (this.e8m.a8r(j3k))
	{
		return;
	}

	let x3b = q6q.length;
	let q7h = '';
	let d9x = 1;
	for (let i = 0; i < q3f; i++)
	{
		if (x3b == 0)
		{
      q7h = String.fromCharCode('A'.charCodeAt() + d9x - 1);
		}
		else if (x3b == 1)
		{
      q7h = q6q;
      q7h += d9x;
		}
		else if (x3b == 2)
		{
      q7h = q6q;
      q7h += String.fromCharCode('a'.charCodeAt() + d9x - 1);
		}
		else
		{
      q7h = q6q;
      q7h += d9x;
		}

    let z9h = "<span class=\"tdline\" data-level=\"";
    z9h += u5b.toString();
    z9h += "\">";
    this.t0s.c0z(z9h);
  	this.h0i(this.v8c);
    this.a2q(j3k, k5o, d5i, i, q7h, u5b);
    this.t0s.c0z("\x3c\x2f\x73\x70\x61\x6e\x3e");
		d9x++;
	}
}

k5u(x6x, c6o, d5i)
{
  let j3k = x6x.t9a();
  let k5o = c6o.t9a();

	this.y1b(u6j.u6s);
	this.i7s = true;
	this.r0x = false;
	let q3f = this.e8m.q3f(j3k);
	for (let i = 1; i < q3f; i++)
	{
		if (i == q3f - 1)
		{
			this.p3o = true;
		}
		if (i < q3f - 1)
		{
			this.r0x = true;
		}
    this.u5p(j3k, k5o, d5i, i);
		if (this.r0x)
		{
			this.y1b(u6j.u6s);
			this.v0k("\x3b", false);
			this.r0x = false;
		}
	}
	this.y1b(u6j.u6s);
	if (this.p3o)
	{
		this.v0k("\x29", false);
		this.p3o = false;
	}
}

u5p(x6x, c6o, d5i, k9m)
{
  let j3k = x6x.t9a();
  let k5o = c6o.t9a();

  this.e8m.o3w(j3k, k9m);
	let a8b = 0;
	this.i6l = true;
	do
	{
		a8b++;
		this.y1b(u6j.u6s);
		this.e7g(j3k, k5o, d5i);
		if (this.e8m.a8r(j3k))
		{
			break;
		}
		k5o.i4o(j3k.e7j.s4r());
		if (k5o.v3p())
		{
			d5i++;
		}
    this.e8m.i4o(j3k);
	} while (true);
}

v6p(j3k, e6j)
{
	if (e6j.length)
	{
 		this.a0b(j3k, e6j);
	}
	else
	{
		if (this.w1p)
    {
      this.a0b(j3k, "\x5b\x2e\x2e\x2e\x5d");
    }
	}
	if (j3k.e7j)
	{
		if (j3k.e7j.t4x() || j3k.e7j.f8x())
		{
			this.i2y(j3k, u6j.f8y);
		}
		if (j3k.e7j.y9i())
		{
		}
		if (j3k.e7j.l0i())
		{
			this.i2y(j3k, u6j.w8h);
		}
		if (j3k.e7j.b6t())
		{
			this.i2y(j3k, u6j.q2d);
		}
	}
	else
	{
		if (this.e8m.o3u() || this.e8m.i2n())
		{
			this.i2y(j3k, u6j.f8y);
		}
		if (this.e8m.s3b())
		{
		 	this.i2y(j3k, u6j.q2d);
		}
	}
}

v0k(e6j, h7q)
{
	if (e6j.length == 0)
	{
		return;
	}
	if (!this.m6g && h7q)
	{
		this.t0s.d3t("\x20");
	}
	this.t0s.d3t(e6j);
	this.m6g = false;
}

y9e(j3k, y3r)
{
	if (this.m9p && y3r.length)
	{
		this.y1b(u6j.y3r);
		this.t6x(j3k, y3r);
	}
}

o8f(j3k, q4w)
{
	if (this.m9p && q4w.length)
	{
		this.y1b(u6j.q4w);
		this.t6x(j3k, q4w);
	}
}

l1i(s6r)
{
  let n0v = s6r;
  let y9h = n0v.replaceAll("\x3c\x62\x72\x3e\x3c\x62\x72\x3e", "\x3c\x62\x72\x3e");
  let q0t = y9h.replaceAll("\x3c\x62\x72\x3e\x3c\x62\x72\x3e", "\x3c\x62\x72\x3e");
  let i1e = q0t.replaceAll("\x3c\x62\x72\x3e", "\x3c\x64\x69\x76\x3e\x26\x6e\x62\x73\x70\x3b\x3c\x2f\x64\x69\x76\x3e");
  let s = i1e;
  this.t0s.d3t(s);
}

a0b(j3k, e6j)
{
	if (e6j.length == 0)
	{
		return;
	}
	if (!this.m6g)
	{
		this.t0s.d3t("\x20");
	}
  let d2t = '';
  if (j3k.e7j)
  {
  	if (j3k.e7j.y8o())
	  {
		  if (j3k.e7j.d2u() == n6a.l9f)
  		{
	  		d2t = "\x74\x64\x6d\x6f\x76\x65\x2d\x63\x72\x69\x74\x2d\x6f\x70\x65\x6e\x69\x6e\x67";
		  }
  		else if (j3k.e7j.d2u() == n6a.a4q)
	  	{
		  	d2t = "\x74\x64\x6d\x6f\x76\x65\x2d\x63\x72\x69\x74\x2d\x6d\x69\x64\x64\x6c\x65";
  		}
	  	else if (j3k.e7j.d2u() == n6a.p8f)
		  {
  			d2t = "\x74\x64\x6d\x6f\x76\x65\x2d\x63\x72\x69\x74\x2d\x65\x6e\x64";
	  	}
  	}
  }
	let t6z = "<span class=\"";
	if (d2t.length == 0)
	{
		t6z += "tdmove\" movenr=\"";
	}
	else
	{
		t6z += "\x74\x64\x6d\x6f\x76\x65\x20" + d2t + "\" movenr=\"";
	}
  t6z += this.e8m.q7z(j3k).toString();
  t6z += "\"";
	t6z += "\x3e",
	t6z += e6j;
	t6z += "\x3c\x2f\x73\x70\x61\x6e\x3e";

	this.t0s.c0z(t6z);
	this.m6g = false;
}

i2y(j3k, m5x)
{
  if (m5x == u6j.f8y)
  {
    this.s2t(j3k);
  }
  else if (m5x == u6j.q2d)
  {
    this.v6y(j3k);
  }
}

s2t(j3k)
{
	let z9h = "<span class=\"tdcolors\" movenr=\"";
  z9h += this.e8m.q7z(j3k).toString();
	z9h += "\">",
	this.t0s.c0z(z9h);
	this.t0s.c0z("\x3c\x2f\x73\x70\x61\x6e\x3e");
}

v6y(j3k)
{
	let z9h = "<span class=\"tdmedal\" movenr=\"";
  z9h += this.e8m.q7z(j3k).toString();
	z9h += "\">",
	this.t0s.c0z(z9h);
	this.t0s.c0z("\x3c\x63\x61\x6e\x76\x61\x73\x3e\x3c\x2f\x63\x61\x6e\x76\x61\x73\x3e");
	this.t0s.c0z("\x3c\x2f\x73\x70\x61\x6e\x3e");
}

z6q(t2n)
{
 	let z9h = "<span class=\"tdline\"";
	if (t2n)
	{
		z9h += " data-commented=\"1\"";
	}
	z9h += " data-level=\"0\">";
	this.t0s.d3t(z9h);
}

k2n()
{
  this.t0s.c0z("\x3c\x2f\x73\x70\x61\x6e\x3e");
}

k1h(j3k)
{
  let u0t = "\x74\x64\x63\x6f\x6d\x6d\x65\x6e\x74";
  if (this.x5p)
  {
    u0t += "\x20\x69\x73\x2d\x62\x6f\x6c\x64";
  }
  let z9h = "<span class=\"" + u0t + "\" movenr=\"";
  z9h += this.e8m.q7z(j3k).toString();
  z9h += "\">";
  this.t0s.d3t(z9h);
}

q6v()
{
  this.t0s.c0z("\x3c\x2f\x73\x70\x61\x6e\x3e");
}

d7m(q1x)
{
  this.w1p = q1x;
}

b4f(q1x)
{
  this.x5p = q1x;
}

k7q(q1x)
{
  this.f6n = q1x;
}

l9x(q1x)
{
  this.a5t = q1x;
}

} 
const y4s =
{
	t4z : 1,
	r3c : 2,
	i1s : 3
};

class p8o
{

constructor()
{
	this.u1z = 0;
	this.s5v = 0;
	this.type = y4s.t4z;
}

t9a()
{
	let y8h = new p8o();
	y8h.u1z = this.u1z;
	y8h.s5v = this.s5v;
	y8h.type = this.type;
	return y8h;
}

}

function i7u(u1z, s5v, type)
{
	let s = new p8o();
	s.u1z = u1z;
	s.s5v = s5v;
	s.type = type;
	return s;
}
class p0x
{

constructor()
{
	this.n1o = [];
}

t9a()
{
	let p1l = new p0x();
	for (const y6v of this.n1o)
	{
		p1l.add(y6v.t9a());
	}
	return p1l;
}

c0n()
{
	this.n1o.length = 0;
}

y8b()
{
	return this.n1o.length == 0;
}

w2q()
{
	return this.n1o.length;
}

add(y6v)
{
	let e2m = y6v.t9a();
	this.n1o.push(e2m);
}

}

const u0r =
{
	z5i : 0,
	a9q : 1,
	p8a : 2
};

class g7d
{

constructor()
{
	this.w0g = 0;
	this.type = u0r.z5i;
}

t9a()
{
	let a1e = new g7d();
	a1e.w0g = this.w0g;
	a1e.type = this.type;
	return a1e;
}

}

function g6q(w0g, type)
{
	let l6w = new g7d();
	l6w.w0g = w0g;
	l6w.type = type;
	return l6w;
}

class s8u
{

constructor()
{
	this.n4i = [];
}

t9a()
{
	let i9f = new s8u();
	for (const e5j of this.n4i)
	{
		i9f.add(e5j.t9a());
	}
	return i9f;
}

c0n()
{
	this.n4i.length = 0;
}

y8b()
{
	return this.n4i.length == 0;
}

w2q()
{
	return this.n4i.length;
}

add(d7x)
{
	let b7c = d7x.t9a();
	this.n4i.push(b7c);
}

}

const r3u =
{
	g0w    : 0,
	p7n  : 1,
	f8u  : 2,
	m3h    : 3,
  k7p   : 4,
	u8l    : 5,
};


function w6g(s7n)
{
	let e6j = '';
	switch (s7n)
	{
		case r3u.g0w:
			e6j = "\x50";
			break;
		case r3u.p7n:
			e6j = "\x4e";
			break;
		case r3u.f8u:
			e6j = "\x42";
			break;
		case r3u.m3h:
			e6j = "\x52";
			break;
		case r3u.k7p:
			e6j = "\x51";
			break;
		case r3u.king:
			e6j = "\x4b";
			break;
	}
	return e6j;
}

class r3h
{

constructor()
{
  this.k1u = 0;
	this.f0j = new c0j();
	this.b8v = new u9y();
}

t9a()
{
	let n9y = new r3h();
  n9y.k1u = this.k1u;
	n9y.f0j = this.f0j.t9a();
	n9y.b8v = this.b8v.t9a();
	return n9y;
}

}

const f3y = 	 		"\x23\x37\x42\x38\x32\x39\x35";
const j8k =			"\x23\x39\x46\x39\x46\x39\x46";
const h3b = 			    "\x23\x37\x42\x38\x32\x39\x35";
const u8d = 		  "\x23\x46\x46\x46\x46\x46\x46";
const f5s =       "\x23\x44\x30\x42\x31\x39\x34";

const g0f	   = "\x23\x45\x31\x33\x31\x32\x39";
const n3x	 = "\x23\x33\x38\x39\x43\x31\x33";
const j3j = "\x23\x45\x32\x42\x36\x32\x38";

const z9z	 = "\x23\x45\x31\x33\x31\x32\x39";
const p3u	 = "\x23\x33\x38\x39\x43\x31\x33";
const j5v	   = "\x23\x45\x32\x42\x36\x32\x38";

class c3b
{

constructor()
{
	this.m3l = null;
	this.g1c = false;
	this.m9q = null;
	this.t9e = null;
	this.p1e = null;
	this.y0f = 0;
	this.v3j = 0;
	this.q9e = 0;
	this.o9g = 0;
	this.c4l = 0;
	this.p8n = 0;
	this.q1l = new d8k();
	this.k5o = new z1a();
	this.d4u = new p0x();
	this.g2e = new s8u();
  this.o8c = new h5b();
  this.b3q = true;
	this.e7l = true;
	this.m9t = true;
	this.l9w = false;
	this.j2a = f3y;
	this.s0h = j8k;
	this.u5a = z6g;
	this.j2g = j0x;
	this.c2l = j0x;
	this.t7m = n7w;
	this.v1c = true;
	this.x3c = g7f;
	this.n7s = g7f;
	this.j3n = false;
	this.p1j = [];
	this.t5e = 0;
}

y2h(m3l)
{
	this.m3l = m3l;
}

g8f(q1l)
{
	this.q1l = q1l;
	this.q9e = q1l.q9e();
	this.o9g = q1l.q9e();

	this.y0f = (this.m3l.width - this.q9e) / 2;
	let top = (this.m3l.height - this.o9g) * 0.25;
	if (top > 0 && top < 16) top = 16;
	this.v3j = top;
	this.c4l = this.y0f + this.q9e - 1;
	this.p8n = this.v3j + this.o9g - 1;
	this.g1c = false;
	this.k5n();
}

h4o(k5o)
{
	this.k5o = k5o.t9a();
	this.d4u.c0n();
	this.g2e.c0n();
}

z7e(d4u)
{
	this.d4u = d4u.t9a();
}

p8k(g2e)
{
	this.g2e = g2e.t9a();
}

p5s(e7j)
{
  this.o8c = e7j.t9a();
}

p1m(l9w)
{
	this.l9w = l9w;
}

o5f()
{
	this.l9w = !this.l9w;
}

n0r()
{
	if (!this.m3l) return;
	if (this.q9e <= 0 || this.o9g <= 0)
	{
		return;
	}
	this.x6y();
}

o6g()
{
	let u5l = this.q1l.u5l;
	if (this.g1c)
	{
		return;
	}
	this.g1c = true;
	if (u5l == b1n.h0n)
	{
  	this.m9q = r4e.u0b("\x62\x6f\x61\x72\x64\x2f\x4c\x69\x67\x68\x74\x53\x71\x75\x61\x72\x65");
  	this.t9e = r4e.u0b("\x62\x6f\x61\x72\x64\x2f\x44\x61\x72\x6b\x53\x71\x75\x61\x72\x65");
		this.p1e = r4e.u0b("\x62\x6f\x61\x72\x64\x2f\x4d\x61\x72\x67\x69\x6e");
	}
}

k5n()
{
	this.o6g();
	let u5l = this.q1l.u5l;
	if (u5l == b1n.h0n)
	{
		this.v1c = false;
		this.e7l = false;
		this.m9t = false;
		this.u5a = "\x23\x46\x46\x46\x46\x39\x37";
		this.j2g = "\x23\x39\x42\x32\x45\x33\x31";
		this.c2l = t7j;
	}
}

x6y()
{
	this.k5n();
	if (this.q1l.u5l == b1n.h0n)
	{
		let d3m = r4e.u0b("\x62\x6f\x61\x72\x64\x2f\x42\x6f\x61\x72\x64\x42\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64");
		this.u8g(new i8m(0, 0, this.m3l.width, this.m3l.height), d3m);
	}
	this.t1w();  
	this.p8x(); 
	this.i6t(); 
  if (chess)
  {
	  this.s6i();
  }
  else
  {
	  this.r7a();
  	this.z4d();
  }
  
  this.c1r();
 	this.z8p();
 	this.p5j();
 	this.d3o();
	this.s5z(); 
	this.p1b();      
}

t1w()
{
	let n9o = this.v3j;
	let j0d = this.y0f;
	let w0z = this.c4l;
	let w8t = this.p8n;
	let d6c = this.q1l.w9k;
	this.z0g(new i8m(j0d, n9o, w0z, n9o+d6c-1), this.j2g);
	this.z0g(new i8m(j0d, w8t-d6c+1, w0z, w8t), this.c2l);
	this.z0g(new i8m(j0d, n9o, j0d+d6c-1, w8t), this.j2g);
	this.z0g(new i8m(w0z-d6c+1, n9o, w0z, w8t), this.c2l);
}

p8x()
{
	let w9k = this.q1l.w9k;
	let l8n = this.q1l.l8n;
	if (!l8n)
	{
		return;
	}
	if (this.v1c || !this.p1e)
	{
		this.p3x(this.t7m);
	}
	else
	{
		let left = this.y0f + w9k;
		let top = this.v3j + w9k;
		let a2r = this.c4l - w9k;
		let w9r = this.v3j + w9k + l8n - 1;
		this.u8g(new i8m(left, top, a2r, w9r), this.p1e);

		left = this.y0f + w9k;
		top = this.v3j + w9k;
		a2r = this.y0f + w9k + l8n - 1;
		w9r = this.p8n - w9k;
		this.u8g(new i8m(left, top, a2r, w9r), this.p1e);

		left = this.y0f + w9k;
		top = this.p8n - w9k - l8n + 1;
		a2r = this.c4l - w9k;
		w9r = this.p8n - w9k;
		this.u8g(new i8m(left, top, a2r, w9r), this.p1e);

		left = this.c4l - w9k - l8n + 1;
		top = this.v3j + w9k;
		a2r = this.c4l - w9k;
		w9r = this.p8n - w9k;
		this.u8g(new i8m(left, top, a2r, w9r), this.p1e);
	}
}

p3x()
{
	let w9k = this.q1l.w9k;
	let l8n = this.q1l.l8n;
	if (!l8n)
	{
		return;
	}

	let left = this.y0f + w9k;
	let top = this.v3j + w9k;
	let a2r = this.c4l - w9k;
	let w9r = this.v3j + w9k + l8n - 1;
	this.z0g(new i8m(left, top, a2r, w9r), this.t7m);

	left = this.y0f + w9k;
	top = this.v3j + w9k;
	a2r = this.y0f + w9k + l8n - 1;
	w9r = this.p8n - w9k;
	this.z0g(new i8m(left, top, a2r, w9r), this.t7m);

	left = this.y0f + w9k;
	top = this.p8n - w9k - l8n + 1;
	a2r = this.c4l - w9k;
	w9r = this.p8n - w9k;
	this.z0g(new i8m(left, top, a2r, w9r), this.t7m);

	left = this.c4l - w9k - l8n + 1;
	top = this.v3j + w9k;
	a2r = this.c4l - w9k;
	w9r = this.p8n - w9k;
	this.z0g(new i8m(left, top, a2r, w9r), this.t7m);
}

p1b()
{
	if (this.q1l.f6h)
	{
  	if (!this.q1l.l8n)
  	{
	  	return;
  	}
		let o7j = "\x23\x30\x30\x30\x30\x30\x30";
		if (this.k5o.v3p())
		{
			o7j = "\x23\x45\x44\x44\x37\x39\x30";
		}
		else
		{
			o7j = "\x23\x30\x30\x30\x30\x30\x30";
		}
		let rect = this.u5q();
		let d7i = this.v5t();
		d7i.beginPath();
		d7i.fillStyle = o7j;
		let m1z = rect.q9h() * 0.40;
		d7i.arc(rect.q3m + rect.q9h()/2 - 1, rect.w3l + rect.y7g()/2 - 1,
			m1z, 0, 2 * Math.PI);
		d7i.fill();
	}
}

i6t()
{
	let t2e = t7j;
	let w9k = this.q1l.w9k;
	let l8n = this.q1l.l8n;
	let d6c = this.q1l.d6c;
	let n9o = this.v3j + w9k + l8n;
	let j0d = this.y0f + w9k + l8n;
	let w0z = this.c4l - w9k - l8n;
	let w8t = this.p8n - w9k - l8n;
	this.z0g(new i8m(j0d, n9o, w0z, n9o+d6c-1), t2e);
	this.z0g(new i8m(j0d, w8t-d6c+1, w0z, w8t), t2e);
	this.z0g(new i8m(j0d, n9o, j0d+d6c-1, w8t), t2e);
	this.z0g(new i8m(w0z-d6c+1, n9o, w0z, w8t), t2e);
}

v5t()
{
	return this.m3l.getContext('2d');
}

j9o(rect, o7j)
{
	let d7i = this.v5t();
	d7i.beginPath();
	d7i.lineWidth = "\x31";
	d7i.strokeStyle = o7j;
	d7i.rect(rect.q3m, rect.w3l, rect.q9h(), rect.y7g());
	d7i.stroke();
}

z0g(rect, o7j)
{
	let d7i = this.v5t();
	d7i.fillStyle = o7j;
	d7i.fillRect(rect.q3m, rect.w3l, rect.q9h(), rect.y7g());
}

u8g(rect, img)
{
	let d7i = this.v5t();
	let u1i = d7i.createPattern(img, 'repeat');
	d7i.fillStyle = u1i;
	d7i.fillRect(rect.q3m, rect.w3l, rect.q9h(), rect.y7g());
}

t5i(rect, img)
{
	let d7i = this.v5t();
	let u1i = d7i.createPattern(img, 'no-repeat');
	d7i.fillStyle = u1i;
	d7i.fillRect(rect.q3m, rect.w3l, rect.q9h(), rect.y7g());
}

l6d(w0g)
{
	let g8t = k1a;
	let i8p = l4x;
	if (this.l9w)
	{
		g8t = j0l(i6q(w0g));
		i8p = t3h(i6q(w0g));
	}
	else
	{
		g8t = j0l(w0g);
		i8p = t3h(w0g);
	}
	if (startsWithDarkSquare(i8p))
	{
		g8t++;
	}
	else
	{
		g8t--;
	}
	return this.j7z(i8p, g8t);
}

r7a()
{
	for (const w0g of o8l)
	{
		this.h0f(w0g);
	}
}

h0f(w0g)
{
	this.d8q(this.l6d(w0g), w0g);
}

d8q(rect, w0g)
{
	let u0b = this.m9q;
	if (this.m9t)
	{
		this.u8s(rect, this.s0h);
		return;
	}
	if (!u0b)
	{
		this.u8s(rect, this.s0h);
		return;
	}

	let r0v = u0b.width;
	let a6o = u0b.height;
	let c8b = this.q1l.y7x;
	if (r0v < c8b || a6o < c8b)
	{
		this.t5i(rect, u0b);
		return;
	}

	let z8j = Math.trunc(r0v / this.q1l.y7x);
	let t5d = Math.trunc(a6o / this.q1l.y7x);
	if (z8j == 0)
	{
		z8j = 1;
	}
	if (t5d == 0)
	{
		t5d = 1;
	}

	let u0u = Math.trunc((w0g) / z8j);
	let z8n = (w0g) % z8j;
	let y = Math.trunc(u0u / t5d);
	u0u = u0u % t5d;

  let n5o = new i8m();
	n5o.q3m = z8n * this.q1l.y7x;
	n5o.w3l = u0u * this.q1l.y7x;
	n5o.m5l = (z8n + 1) * this.q1l.y7x - 1;
	n5o.l9m = (u0u + 1) * this.q1l.y7x - 1;
	let d7i = this.v5t();
	q1i(d7i, rect, u0b, n5o);
}

t5h(w0g)
{
	let g8t = k1a;
	let i8p = l4x;
	if (this.l9w)
	{
		g8t = j0l(i6q(w0g));
		i8p = t3h(i6q(w0g));
	}
	else
	{
		g8t = j0l(w0g);
		i8p = t3h(w0g);
	}
	return this.j7z(i8p, g8t);
}

z4d()
{
	for (const w0g of o8l)
	{
		this.a5i(w0g);
	}
}

a5i(w0g)
{
	this.j9q(this.t5h(w0g), w0g);
}

j9q(rect, w0g)
{
	let u0b = this.t9e;
	if (this.e7l)
	{
		this.u8s(rect, this.j2a);
		return;
	}
	if (!u0b)
	{
		this.u8s(rect, this.j2a);
		return;
	}

	let r0v = u0b.width;
	let a6o = u0b.height;
	let c8b = this.q1l.y7x;
	if (r0v < c8b || a6o < c8b)
	{
		this.t5i(rect, u0b);
		return;
	}

	let z8j = Math.trunc(r0v / this.q1l.y7x);
	let t5d = Math.trunc(a6o / this.q1l.y7x);
	if (z8j == 0)
	{
		z8j = 1;
	}
	if (t5d == 0)
	{
		t5d = 1;
	}

	let u0u = Math.trunc((w0g) / z8j);
	let z8n = (w0g) % z8j;
	let y = Math.trunc(u0u / t5d);
	u0u = u0u % t5d;

  let n5o = new i8m();
	n5o.q3m = z8n * this.q1l.y7x;
	n5o.w3l = u0u * this.q1l.y7x;
	n5o.m5l = (z8n + 1) * this.q1l.y7x - 1;
	n5o.l9m = (u0u + 1) * this.q1l.y7x - 1;
	let d7i = this.v5t();
	q1i(d7i, rect, u0b, n5o);
}

j7z(i8p, g8t)
{
	let w9k = this.q1l.w9k;
	let l8n = this.q1l.l8n;
	let d6c = this.q1l.d6c;
	let y7x = this.q1l.y7x;
	let rect = new i8m();
	rect.q3m = this.y0f + w9k + l8n +	d6c + (g8t) * y7x;
	rect.m5l = rect.q3m + y7x - 1;
	rect.w3l = this.v3j + w9k + l8n +	d6c + (d6i - i8p - 1) * y7x;
	rect.l9m = rect.w3l + y7x - 1;
	return rect;
}

q6i(w0g)
{
	let g8t = k1a;
	let i8p = l4x;
	if (this.l9w)
	{
		g8t = j0l(i6q(w0g));
		i8p = t3h(i6q(w0g));
	}
	else
	{
		g8t = j0l(w0g);
		i8p = t3h(w0g);
	}
	return this.j7z(i8p, g8t);
}

s6i()
{
	for (const w0g of o8l)
	{
		this.f1l(w0g);
	}
}

f1l(w0g)
{
	this.g4e(this.q6i(w0g), w0g);
}

g4e(rect, w0g)
{
	let m8g = d9n(w0g);
	let u0b = this.m9q;
	if (m8g)
	{
		u0b = this.t9e;
	}
	if (m8g)
	{
		if (this.e7l)
		{
			this.u8s(rect, this.j2a);
			return;
		}
		if (!u0b)
		{
			this.u8s(rect, this.j2a);
			return;
		}
	}
	else
	{
		if (this.m9t)
		{
			this.u8s(rect, this.s0h);
			return;
		}
		if (!u0b)
		{
			this.u8s(rect, this.s0h);
			return;
		}
	}

 	let r0v = u0b.width;
	let a6o = u0b.height;
	let c8b = this.q1l.y7x;
	if (r0v < c8b || a6o < c8b)
	{
		this.t5i(rect, u0b);
		return;
	}
	let z8j = Math.trunc(r0v / this.q1l.y7x);
	let t5d = Math.trunc(a6o / this.q1l.y7x);
	if (z8j == 0)
	{
		z8j = 1;
	}
	if (t5d == 0)
	{
		t5d = 1;
	}

	let u0u = Math.trunc((w0g) / z8j);
	let z8n = (w0g) % z8j;
	let y = Math.trunc(u0u / t5d);
	u0u = u0u % t5d;

  let n5o = new i8m();
	n5o.q3m = z8n * this.q1l.y7x;
	n5o.w3l = u0u * this.q1l.y7x;
	n5o.m5l = (z8n + 1) * this.q1l.y7x - 1;
	n5o.l9m = (u0u + 1) * this.q1l.y7x - 1;
	let d7i = this.v5t();
	q1i(d7i, rect, u0b, n5o);
}

u8s(rect, o7j)
{
	this.z0g(rect, o7j);
}

p5j()
{
	for (const w0g of o8l)
	{
		this.c7q(w0g);
	}
}

z2l(u1z, s5v, q2b)
{
	this.x3c = u1z;
	this.n7s = s5v;
	this.j3n = q2b;

	this.p1j.length = 0;
 	let t9f = this.q6i(u1z);
  let l7q = this.q6i(s5v);
	let w1o = this.q1l.y7x;

	let n9d = 32;
	if (w1o < 32)
	{
		n9d = w1o;
	}

  
	if (false)
	{
    
    
		let b7e = new k5l(t9f.q3m + w1o / 2, t9f.w3l + w1o / 2);
		let i9r = new k5l(l7q.q3m + w1o / 2, l7q.w3l + w1o / 2);
		let i0m = Math.abs(b7e.X - i9r.X);
		let f0u = Math.abs(b7e.Y - i9r.Y);
		let f0o = Math.atan2(i9r.X - b7e.X, b7e.Y - i9r.Y);
		let i2v = Math.sqrt(i0m*i0m + f0u*f0u) / 2;
		i9r.X = b7e.X + i2v * 2;
		i9r.Y = b7e.Y;
		let o0b = new k5l(b7e.X + i2v, b7e.Y);
		let e2r = Math.PI / n9d;
		let k6c = w1o * 0.40;
		let o7c = Math.PI;
		let s6t = (l7q.q3m > t9f.q3m && l7q.w3l < t9f.w3l) ||
			(l7q.q3m < t9f.q3m && l7q.w3l > t9f.w3l);
		for (let i = 1; i < n9d; i++)
		{
			let j9o = new i8m();
			if (s6t)
			{
				o7c -= e2r;
			}
			else
			{
				o7c += e2r;
			}
			let g7q = Math.cos(o7c);
			let s4s = Math.sin(o7c);
			let d5v = new k5l(o0b.X + i2v * g7q,
				o0b.Y - k6c * s4s);
			this.p1j.push(w1q(d5v, b7e, f0o - Math.PI / 2));
		}
	}
	else
	{
		let b7e = new k5l(t9f.q3m + w1o / 2, t9f.w3l + w1o / 2);
		let i9r = new k5l(l7q.q3m + w1o / 2, l7q.w3l + w1o / 2);
		let s1p = (i9r.X - b7e.X) / n9d;
		let l3p = (i9r.Y - b7e.Y) / n9d;
		for (let i = 1; i < n9d; i++)
		{
			this.p1j.push(new k5l(b7e.X + i * s1p, b7e.Y + i * l3p));
		}
	}
	this.p1j.push(new k5l(l7q.q3m + w1o / 2, l7q.w3l + w1o / 2));
	this.t5e = 0;
}

a1b()
{
	this.x3c = g7f;
	this.n7s = g7f;
}

p6t()
{
	this.n0r(); 

	let o1e = this.p1j[this.t5e];
	let y7x = this.q1l.y7x;
	let j9o = new i8m();
	j9o.q3m = o1e.X - y7x / 2;
	j9o.w3l = o1e.Y - y7x / 2;
	j9o.e3d(y7x);
	j9o.n1l(y7x);
 	let d7i = this.v5t();
	i6w(d7i, j9o, this.k5o.r5v(this.x3c));

	this.t5e++;
	if (this.t5e >= this.p1j.length)
	{
		let s7n = this.k5o.r5v(this.x3c);
		this.k5o.y2x(this.x3c, z1d.y8b);
		this.k5o.y2x(this.n7s, s7n);
		this.a1b();
		return true;
	}
	else
	{
		return false;
	}
}

c7q(w0g)
{
	if (w0g == this.x3c)
	{
		return;
	}
	let e2g = this.q6i(w0g);
 	let d7i = this.v5t();
	i6w(d7i, e2g, this.k5o.r5v(w0g));
}

s5z()
{
	if (!this.q1l.g6g)
	{
    return;
  }

 	let d6c = this.q1l.d6c;
	let w9k = this.q1l.w9k;
	let l8n = this.q1l.l8n;
	let y7x = this.q1l.y7x;

	let n8n = new i8m();
	n8n.q3m = this.y0f + w9k + l8n;
	n8n.w3l = this.v3j + w9k + l8n;
	n8n.e3d(d6i * y7x + 2 * d6c);
	n8n.n1l(d6i * y7x + 2 * d6c);

 	let d7i = this.v5t();
  let y1c = j2b(d7i, l8n-8);

  s5z(d7i,
    n8n,
    this.q1l,
    y1c,
    b9z.p4f,
    this.u5a,
    this.l9w,
    l8n);
}

z2b(w0g, o7j)
{
	let rect = this.q6i(w0g);
	let d7i = this.v5t();
  d7i.save();
  d7i.globalAlpha = 0.25; 
	d7i.fillStyle = o7j;
	d7i.fillRect(rect.q3m, rect.w3l, rect.q9h(), rect.y7g());
  d7i.restore();
}

c1r()
{
	if (this.b3q)
	{
		if (!this.o8c.y8b())
		{
      let o7j = "\x23\x38\x30\x30\x30\x38\x30"; 
			this.z2b(this.o8c.u1z, o7j);
			this.z2b(this.o8c.s5v, o7j);
		}
  }
}

z8p()
{
	for (const e5j of this.g2e.n4i)
	{
		this.b7f(e5j);
	}
}

b7f(e5j)
{
	let rect = this.q6i(e5j.w0g);
	let x6t = '';
	switch (e5j.type)
	{
		case u0r.z5i:
			x6t = g0f;
			break;
		case u0r.a9q:
			x6t = n3x;
			break;
		case u0r.p8a:
			x6t = j3j;
			break;
	}
	let w1o = this.q9e / 10;
	let d7i = this.v5t();
  /* dit is met roundrect
  s0f(rect, 5);
	d7i.lineWidth = w1o / 15;
	d7i.strokeStyle = x6t;
	o1n(d7i, rect.q3m, rect.w3l, rect.q9h(), rect.y7g(), 10);
  */
  
  d7i.save();
  d7i.globalAlpha = 0.7; 
	d7i.fillStyle = x6t;
	d7i.fillRect(rect.q3m, rect.w3l, rect.q9h(), rect.y7g());
  d7i.restore();
}

d3o()
{
	for (const y6v of this.d4u.n1o)
	{
		this.u5h(y6v);
	}
}

u5h(y6v)
{
	let u1z = y6v.u1z;
	let s5v = y6v.s5v;
	let m9c = y6v.type;

	let t9f = this.q6i(u1z);
	let l7q = this.q6i(s5v);

	let d7c = t9f.q3m + t9f.q9h()/2;
	let h5n = t9f.w3l + t9f.y7g()/2;
	let w5j = new k5l(d7c, h5n);

	let p6e = l7q.q3m + l7q.q9h()/2;
	let o5b = l7q.w3l + l7q.y7g()/2;

	let h2p = (p6e-d7c)*(p6e-d7c) + (o5b-h5n)*(o5b-h5n);
	let p4n = Math.sqrt(h2p);

	let s6g = (this.k5o.a5o(u1z)) ? 0 : t9f.q9h() / 4;
	p4n -= s6g;
	let o2k = (this.k5o.a5o(s5v)) ? 0 : t9f.q9h() / 4;
	p4n -= o2k;

	let t2k = 5;
	let y3y = 5 * t2k;
	let h2a = 7 * t2k;

	let i7c = d7c + s6g;
	let f7k = h5n;

	let v1o = i7c + p4n - 1;
	let a4k = h5n;

	let y4u = v1o - h2a;
	let m1p = h5n;

	let f0o = Math.atan2((p6e - d7c), (h5n - o5b));

  
	let g6r = [];
  let v1s = 10; 
	g6r.push(new k5l(y4u, m1p));
	g6r.push(new k5l(y4u - v1s, m1p - y3y));
	g6r.push(new k5l(v1o, a4k));
	g6r.push(new k5l(y4u - v1s, m1p + y3y));
	g6r.push(new k5l(y4u, a4k));
	let x8f = [];
	for (let i = 0; i <= 4; i++)
	{
		x8f.push(w1q(g6r[i], w5j, f0o - Math.PI / 2));
	}

	let d7i = this.v5t();
  d7i.save();
  d7i.globalAlpha = 0.7;

 	let h7z = '';
	switch (m9c)
	{
		case y4s.t4z:
			h7z = z9z;
			break;
		case y4s.r3c:
			h7z = p3u;
			break;
		case y4s.i1s:
			h7z = j5v;
			break;
	}
 	d7i.fillStyle = h7z;
  d7i.strokeStyle = h7z;
	d7i.beginPath();
	d7i.moveTo(x8f[0].X, x8f[0].Y);
	for (let i = 1; i <= 4; i++)
	{
		d7i.lineTo(x8f[i].X, x8f[i].Y);
	}
	d7i.closePath();
	d7i.fill();

  
	g6r.length = 0;
	g6r.push(new k5l(i7c, f7k - t2k));
	g6r.push(new k5l(i7c, f7k + t2k));
	g6r.push(new k5l(y4u, f7k + t2k));
	g6r.push(new k5l(y4u, f7k - t2k));
	x8f.length = 0;
	for (let i = 0; i <= 3; i++)
	{
		x8f.push(w1q(g6r[i], w5j, f0o - Math.PI / 2));
	}
	if (d7c == p6e)
	{
		if (x8f[0].Y != x8f[1].Y)
		{
			x8f[0].Y = x8f[1].Y;
		}
		if (x8f[2].Y != x8f[3].Y)
		{
			x8f[2].Y = x8f[3].Y;
		}
	}
	if (h5n == o5b)
	{
		if (x8f[0].X != x8f[1].X)
		{
			x8f[0].X = x8f[1].X;
		}
		if (x8f[2].X != x8f[3].X)
		{
			x8f[2].X = x8f[3].X;
		}
	}
	d7i.beginPath();
	d7i.moveTo(x8f[0].X, x8f[0].Y);
	for (let i = 1; i <= 3; i++)
	{
		d7i.lineTo(x8f[i].X, x8f[i].Y);
	}
	d7i.closePath();
	d7i.fill();
  d7i.restore();
}

u5q()
{
	let w9k = this.q1l.w9k;
	let l8n = this.q1l.l8n;
	let w1o = this.q1l.y7x;
	let rect = new i8m();
	rect.q3m = this.c4l - w9k - l8n + 1;
	rect.w3l = this.p8n - w9k - l8n;
	rect.l9m = this.p8n;
	rect.m5l = this.c4l - 1;
	return rect;
}

}

const n6t = 14;

const b1n =
{
	h0n : 0
};

const u3t =
{
	h0n : 0
};

const c8u =
{
	b4x : 0,
	x2f : 1,
};

const b9z =
{
	v5l: 0,
	m7f: 1,
	p4f: 2,
	b3a: 3,
	e5y: 4,
};

class d8k
{

constructor()
{
	this.u5l = b1n.h0n;
	this.h7x = 1; 
	this.w9k = 0;
	this.l8n = n6t;
	this.d6c = 2;
	this.y7x = 32;
	this.s3i = 20;
	this.g6g = true;
	this.l8p = c8u.x2f;
	this.f6h = true;
}

t9a()
{
	let s7s = new d8k();
	s7s.u5l = this.u5l;
	s7s.h7x = this.h7x;
	s7s.w9k = this.w9k;
	s7s.l8n = this.l8n;
	s7s.d6c = this.d6c;
	s7s.y7x = this.y7x;
	s7s.s3i = this.s3i;
	s7s.g6g = this.g6g;
	s7s.l8p = this.l8p;
	s7s.f6h = this.f6h;
	return s7s;
}

q9e()
{
	return this.y7x * d6i + 2 * (this.w9k + this.l8n + this.d6c);
}

p5k(rect)
{
	let w = rect.q9h();
	let h = rect.y7g();
	let o0e = 0;
	if (w < h)
	{
		o0e = w;
	}
	else
	{
		o0e = h;
	}
	if (this.l8n)
	{
		for (this.y7x = 2; this.y7x < 1000; this.y7x++)
		{
			this.l8n = (this.y7x / 100) * this.s3i;
			if (this.l8n < n6t)
			{
				this.l8n = n6t;
			}
			let w2q = 2 * (this.w9k + this.l8n + this.d6c) + d6i * this.y7x;
			if (w2q > o0e)
			{
				break;
			}
		}
		this.y7x--;
		this.l8n = (this.y7x / 100) * this.s3i;
		if (this.l8n < n6t)
		{
			this.l8n = n6t;
		}
	}
	else
	{
		for (this.y7x = 2; this.y7x < 1000; this.y7x++)
		{
			let w2q = 2 * (this.w9k + this.d6c) + d6i * this.y7x;
			if (w2q > o0e)
			{
				break;
			}
		}
		this.y7x--;
	}
	return this.q9e();
}

}


class t0e
{

constructor()
{
	this.q9r = new z1a();
	this.g5x = new z1a();
	this.d4u = new p0x();
	this.g2e = new s8u();
	this.f6f = new h5b();
 	this.t6r = new h5b();
	this.n3o = 0;
	this.b9i = false;
	this.r5m = false;
	this.a8b = 0;
	this.o5u = 0;
	this.w7b = '';
}

}

const n5n =
[
	"\x23\x46\x37\x43\x34\x32\x42",  
	"\x23\x46\x33\x32\x37\x46\x33",  
	"\x23\x32\x36\x42\x43\x42\x43",  
	"\x23\x32\x37\x32\x37\x46\x33",  
	"\x23\x32\x39\x38\x46\x38\x46",  
	"\x23\x39\x34\x36\x31\x32\x41",  
	"\x23\x38\x44\x32\x37\x32\x37",  
	"\x23\x46\x34\x46\x34\x32\x38",  
	"\x23\x46\x32\x32\x36\x32\x36",  
	"\x23\x46\x33\x46\x33\x46\x33",  
	"\x23\x38\x46\x32\x39\x38\x46",  
	"\x23\x32\x38\x46\x34\x32\x38",  
	"\x23\x32\x38\x38\x45\x32\x38",  
	"\x23\x32\x37\x32\x37\x32\x37",  
	"\x23\x39\x31\x39\x31\x39\x31",  
	"\x23\x32\x38\x46\x34\x46\x34"   
];

function s0f(rect, l3h)
{
	rect.q3m += l3h;
	rect.m5l -= l3h;
	if (rect.q3m > rect.m5l)
	{
		rect.q3m = rect.m5l;
	}
	rect.w3l += l3h;
	rect.l9m -= l3h;
	if (rect.w3l > rect.l9m)
	{
		rect.w3l = rect.l9m;
	}
}

function q1i(a2h, x7q, x0t, n5o)
{
	a2h.drawImage(x0t, n5o.q3m, n5o.w3l, n5o.q9h(), n5o.y7g(),
		x7q.q3m, x7q.w3l, x7q.q9h(), x7q.y7g());
}

function o1n(d7i, x, y, width, height, m1z)
{
	d7i.beginPath();
	d7i.moveTo(x, y + m1z);
	d7i.lineTo(x, y + height - m1z);
	d7i.arcTo(x, y + height, x + m1z, y + height, m1z);
	d7i.lineTo(x + width - m1z, y + height);
	d7i.arcTo(x + width, y + height, x + width, y + height-m1z, m1z);
	d7i.lineTo(x + width, y + m1z);
	d7i.arcTo(x + width, y, x + width - m1z, y, m1z);
	d7i.lineTo(x + m1z, y);
	d7i.arcTo(x, y, x, y + m1z, m1z);
	d7i.stroke();
}

function w1q(l1d, w5j, i5x)
{
	let p = new k5l();
	p.X = (Math.cos(i5x) * (l1d.X - w5j.X)) - (Math.sin(i5x) * (l1d.Y - w5j.Y)) + w5j.X;
	p.Y = (Math.sin(i5x) * (l1d.X - w5j.X)) + (Math.cos(i5x) * (l1d.Y - w5j.Y)) + w5j.Y;
	return p;
}

function v4w(d7i, rect, q2d)
{
	let left = rect.q3m;
	let top = rect.w3l;
	let a2r = rect.m5l;
	let w9r = rect.l9m;

	d7i.fillStyle = n8t;
	d7i.fillRect(rect.q3m, rect.w3l, rect.q9h(), rect.y7g());

	if (q2d.b4x())
	{
		return;
	}

	let z0d = q2d.c5s();
	let t4m = 0;
	if (z0d > 8)
	{
		t4m = (a2r - left) / 8;
	}
	else
	{
		t4m = (a2r - left) / z0d;
	}
	let l1z = left - t4m;
	let l8a = top;
	let d0a = l1z + t4m;
	let o1x = 0;
	if (z0d > 8)
	{
		o1x = (w9r - top + 1) / 2;
	}
	else
	{
		o1x = w9r - top + 1;
	}

	let h8j = top + o1x - 1;
	let d1m = 0;
	for (let i = 0; i < 16; i++)
	{
		if (q2d.l3j(i))
		{
			l1z += t4m;
			d0a += t4m;
			if (d1m == 7 || d1m == 15 ||
				(d1m < 8 && d1m == z0d - 1))
			{
				d0a = a2r;
			}
			if (d1m == 8)
			{
				l1z = left;
				d0a = l1z + t4m;
				l8a = top + o1x;
				h8j = w9r;
			}
			let l2f = new i8m(l1z, l8a, d0a, h8j);
			d7i.fillStyle = n5n[i];
			d7i.fillRect(l2f.q3m, l2f.w3l, l2f.q9h(), l2f.y7g());
			d1m++;
		}
	}
}




class a5a
{

constructor()
{
	this.b6f = '';
	this.u0b = null;
}

}

class v5k
{

constructor()
{
	this.i2x = [];
}

add(img)
{
	let q8d = new a5a();
	q8d.b6f = img.c1t;
	q8d.u0b = img;
	this.i2x.push(q8d);
}

u0b(b6f)
{
	for (const n4x of this.i2x)
	{
		if (n4x.b6f.toLowerCase() == b6f.toLowerCase())
		{
			return n4x.u0b;
		}
	}
	return null;
}

}
const c3e 				= "\x23\x30\x30\x46\x46\x46\x46";
const t7j 			= "\x23\x30\x30\x30\x30\x30\x30";
const n7w 				= "\x23\x30\x30\x30\x30\x46\x46";
const f7c 			= "\x23\x46\x46\x46\x42\x46\x30";
const v3e 			= "\x23\x38\x30\x38\x30\x38\x30";
const d3z 		= "\x23\x46\x46\x30\x30\x46\x46";
const z8w 				= "\x23\x38\x30\x38\x30\x38\x30";
const f5g 			= "\x23\x30\x30\x38\x30\x30\x30";
const x2u 				= "\x23\x30\x30\x46\x46\x30\x30";
const z1k 			= "\x23\x43\x30\x43\x30\x43\x30";
const u1o 			= "\x23\x38\x30\x30\x30\x30\x30";
const q7t 		= "\x23\x41\x30\x41\x30\x41\x34";
const x6i 	= "\x23\x43\x30\x44\x43\x43\x30";
const j3g 				= "\x23\x30\x30\x30\x30\x38\x30";
const x3q 			= "\x23\x38\x30\x38\x30\x30\x30";
const n5l 			= "\x23\x38\x30\x30\x30\x38\x30";
const n8t 				= "\x23\x46\x46\x30\x30\x30\x30";
const a3s 			= "\x23\x43\x30\x43\x30\x43\x30";
const p3i 		= "\x23\x41\x36\x43\x41\x46\x30";
const j4n 				= "\x23\x30\x30\x38\x30\x30\x30";
const j0x 			= "\x23\x46\x46\x46\x46\x46\x46";
const z6g 			= "\x23\x46\x46\x46\x46\x30\x30";

class k5l
{

constructor(x, y)
{
	if (x === undefined)
	{
		this.X = 0;
		this.Y = 0;
	}
	else
	{
		this.X = x;
		this.Y = y;
	}
}

t9a()
{
	let z2g = new k5l();
	z2g.q3m = this.X;
	z2g.w3l = this.Y;
	return z2g;
}

}

class i8m
{

constructor(left, top, a2r, w9r)
{
	if (left === undefined)
	{
		this.q3m = 0;
		this.w3l = 0;
		this.m5l = 0;
		this.l9m = 0;
	}
	else
	{
		this.q3m = left;
		this.w3l = top;
		this.m5l = a2r;
		this.l9m = w9r;
	}
}

t9a()
{
	let t8u = new i8m();
	t8u.q3m = this.q3m;
	t8u.w3l = this.w3l;
	t8u.m5l = this.m5l;
	t8u.l9m = this.l9m;
	return t8u;
}

q9h()
{
	return this.m5l - this.q3m + 1;
}

z6f()
{
	return this.m5l - this.q3m + 1;
}

e3d(width)
{
	this.m5l = this.q3m + width - 1;
}

y7g()
{
	return this.l9m - this.w3l + 1;
}

t9i()
{
	return this.l9m - this.w3l + 1;
}

n1l(height)
{
	this.l9m = this.w3l + height - 1;
}

v3k()
{
	this.q3m++;
	this.w3l++;
	this.m5l--;
	this.l9m--;
}

t5u(o1e)
{
	return o1e.X >= this.q3m &&
		o1e.X <= this.m5l &&
		o1e.Y >= this.w3l &&
		o1e.Y <= this.l9m;
}


}

class j3l
{

constructor(x7x)
{
	this.x7x = x7x;
	this.e1n = new z1a();
	this.a9k = new c3b();
	this.n7m = null;
	this.q1l = new d8k();
	this.d3u = true;
}

p8v()
{
	let g2a = window.devicePixelRatio;

	this.a9k.m3l.width = this.n7m.clientWidth * g2a;
	this.a9k.m3l.height = this.n7m.clientHeight * g2a;

	let q7m = 32 * g2a;
	let j3w = 32 * g2a;
	let z6s = this.a9k.m3l.width - q7m;
	let g1y = this.a9k.m3l.height - j3w;
	let v0d = g1y < z6s ? g1y : z6s;
	if (v0d < 128)
	{
		v0d = 128;
	}
	let rect = new i8m();
	rect.q3m = 0;
	rect.w3l = 0;
	rect.e3d(v0d);
	rect.n1l(v0d);
	this.q1l.l8n = v0d * 0.02;
  if (this.q1l.l8n < n6t)
  {
    this.q1l.l8n = n6t;
  }
	v0d = this.q1l.p5k(rect);
 	this.a9k.g8f(this.q1l);
	this.a9k.n0r();
}

o5f()
{
	this.a9k.o5f();
	this.a9k.n0r();
}

a8w()
{
	this.q1l.g6g = !this.q1l.g6g;
	this.a9k.g8f(this.q1l);
	this.a9k.n0r();
}

l7v()
{
	this.a9k.g8f(this.q1l);
	this.a9k.n0r();
}

q8w(d1u)
{
	this.e1n = d1u.g5x.t9a();
	this.a9k.h4o(this.e1n);
	this.a9k.z7e(d1u.d4u);
	this.a9k.p8k(d1u.g2e);
  
 	this.a9k.p5s(d1u.t6r);
	this.a9k.n0r();

	if (this.d3u)
	{
		x5v('playBackward' + this.x7x, d1u.b9i);
		x5v('goToBegin'+ this.x7x, d1u.b9i);
		x5v('playForward' + this.x7x, d1u.r5m);
		x5v('goToEnd' + this.x7x, d1u.r5m);
		x5v('autoPlay' + this.x7x, d1u.r5m);
	}
	else
	{
		x5v('goToBegin' + this.x7x, d1u.b9i);
		x5v('goToEnd' + this.x7x, d1u.r5m);
	}
}

h4o(k5o)
{
	let d1u = new t0e();
	d1u.g5x = k5o.t9a();
	this.h4o(d1u);
}

g8f(q1l)
{
  this.q1l = q1l.t9a();
}

}

const n6u =
{
	p0b       : 0,
	s3d        : 1,
};

class m4m
{

constructor(x7x)
{
	this.x7x = x7x;
 	this.z7q = new u9y();
 	this.z2m = new h0q(x7x);
  this.z2m.w1p = false;
  this.z2m.v4k = true;
  this.z2m.x5p = true;
  this.z2m.f6n = false;
  this.b9m = null;
  this.r4k = new g5o();
  this.l1o = new h3q();
 	this.t5c = new o5c();
	this.c3r = new z1a();
	this.i9y = new z1a();
	this.w5p = 0;
	this.m8w = [];
	this.s3h = false;
 	this.m3r = false;
 	this.n4s = false;
 	this.u8v = false;
  this.z8g = n6u.p0b;
  this.b8p = document.getElementById("\x74\x68\x72\x65\x61\x74"+this.x7x);
 	this.b8p.onclick = this.a0i.bind(this);
  this.v8q();
  this.o3v = document.getElementById("\x65\x6e\x67\x69\x6e\x65\x53\x65\x74\x74\x69\x6e\x67\x73"+this.x7x);
}

p6q(v1h)
{
  this.b9m = new c0f();
  this.b9m.e7q = (event) => {
    this.g1i(event);
  };
  this.b9m.d7r(v1h);
  this.b9m.c7o();
}

a8m()
{
	this.r4k = this.b9m.v1h();
	this.t5c = new o5c();
  /*
	showName();
	MovePanel->Caption = "";
	ScorePanel->Caption = "";
	DepthPanel->Caption = "";
	NodesPanel->Caption = "";
  */
	this.z7q.h4o(this.t5c.k5o,
    this.t5c.d5i);
	this.n2e();
 	this.w4a();
  this.v8q();
}

h4o(q9r, y1s, b8v, k5i)
{
	this.i9y = q9r.t9a();
	this.w5p = y1s;
	this.m8w = b8v.slice(); 
	this.s3h = k5i;
	this.w4a();
}

w4a()
{
	if (!this.b9m) return;
	if (this.m3r) return;

	if (this.n4s)
	{
		let b8v = new u9y();
		b8v.h4o(this.i9y, this.w5p);
		let p2p = b8v.p2p();
		b8v.j7e(p2p, this.m8w);
		let y2s = b8v.k6h();
		let s4c = b8v.n3o(b8v.d3g());
		if (y2s.t3s())
		{
			s4c++;
		}
		let z2j = y2s;
		z2j.x1f();
		this.l1o = new h3q();
    this.l1o.b8v.h4o(z2j, s4c);
		this.c3r = z2j;
  }
  else
  {
 		this.l1o.b8v.h4o(this.i9y, this.w5p);
		let p2p = this.l1o.b8v.p2p();
		this.l1o.b8v.j7e(p2p, this.m8w);
		this.c3r = this.l1o.b8v.k6h();
  }
  if (p1f === 10) 
  {
    this.l1o.e3t = v1b;
  }
  else
  {
    this.l1o.e3t = h2b(p1f);
  }

  this.b9m.e3r();
	this.u8v = false;
  let b8v = u6w(this.c3r);
  if (b8v.length == 0)
  {
  	this.b9m.w5h(this.l1o);
		return;
  }
  else
  {
  	this.b9m.w5h(this.l1o);
		return;
  }
}

l7g()
{
	this.t5c = this.b9m.i2c();
  /*
	showScore();
	showDepth();
	showNodes();
	showCM();
  */
	this.z7q.h4o(this.t5c.k5o,
    this.t5c.d5i);
	this.n2e();
}

p1h()
{
	this.t5c = this.b9m.i2c();
	
}


t6l()
{
	this.t5c = this.b9m.i2c();
  
	
	
	
  
	this.n2e();
}

n2e()
{
	let p5c = this.t5c.x3d.b8v.t9a();
  p5c.h4o(this.t5c.k5o, this.t5c.d5i);

  if (this.t5c.a5t)
  {
    for (let z6h of this.t5c.r4j)
    {
      let b8v = z6h.b8v.s7x();
      let j3k = p5c.p2p();
      let d5i = 0;
      for (let e7j of b8v)
      {
        if (d5i == 0)
        {
					let l7y = z6h.l0o() +
						"\x2f" + z6h.u0y;
					e7j.j8b(l7y);
        }
        p5c.v6p(j3k, e7j);
        d5i++;
      }
    }
  }
  else
  {
    if (this.t5c.r4j.length !== 0)
    {
      let z6h = this.t5c.r4j[this.t5c.r4j.length - 1];
      let b8v = z6h.b8v.s7x();
      let j3k = p5c.p2p();
      let d5i = 0;
      for (let e7j of b8v)
      {
				if (d5i == 0)
				{
					let l7y = z6h.l0o() +
						"\x2f" + z6h.u0y;
					e7j.j8b(l7y);
				}
        p5c.v6p(j3k, e7j);
        d5i++;
      }
    }
  }
  this.z7q = p5c.t9a();
  this.z2m.a5t = this.t5c.a5t;
  this.z2m.l0d(this.z7q, 0);
}

g1i(event)
{
  const {cmd, data} = event;
  if (cmd === 'ready')
  {
    this.a8m()
  }
  else if (cmd === 'go')
  {
    this.l7g()
  }
  else if (cmd === 'cm')
  {
    this.p1h();
  }
  else if (cmd === 'pv')
  {
    this.t6l();
  }
}

x4q()
{
	if (this.b9m)
	{
    this.b9m.e7q = null;
    this.b9m.k1e();
		this.b9m = null;
		this.t5c = new o5c();
  	this.z7q.h4o(this.t5c.k5o,
      this.t5c.d5i);
  	this.n2e();
    this.n4s = false;
    this.v8q();
  }
}

x6v()
{
	return (this.b9m != null);
}

r5u()
{
  return (this.engineMode === n6u.s3d);
}

a0i()
{
	if (this.b9m && !this.r5u())
	{
		this.n4s = !this.n4s;
		this.v8q();
		this.w4a();
	}
}

v8q()
{
	if (this.b9m)
	{
    this.b8p.disabled = false;
    this.b8p.classList.remove('threat-inactive');
		if (this.n4s)
		{
      this.b8p.classList.remove('threat-off');
      this.b8p.classList.add('threat-on');
		}
		else
		{
      this.b8p.classList.remove('threat-on');
      this.b8p.classList.add('threat-off');
		}
	}
	else
	{
    this.b8p.disabled = true;
    this.b8p.classList.add('threat-inactive');
    this.b8p.classList.remove('threat-on');
    this.b8p.classList.add('threat-off');
	}
}

}

class e1y
{

constructor(x7x)
{
	this.x7x = x7x;
  this.r2t = null;
	this.k8r = new c0j();
}

n2t(k8r)
{
	this.k8r = k8r.t9a();
	this.s6z();
}

s6z()
{
	let h3z = this.k8r.l0x.l5m.f3q();
	let o0a = this.k8r.e3v.l5m.f3q();

	let p5w = '';
	if (h3z.length && this.k8r.l0x.x8w)
	{
		p5w = this.k8r.l0x.x8w.toString();
	}
	let j1d = '';
	if (h3z.length && this.k8r.l0x.v8g.length)
	{
		j1d = this.k8r.l0x.v8g.toString();
	}

	let a7y = '';
	if (o0a.length && this.k8r.e3v.x8w)
	{
		a7y = this.k8r.e3v.x8w.toString();
	}
	let n1f = '';
	if (o0a.length && this.k8r.e3v.v8g.length)
	{
		n1f = this.k8r.e3v.v8g.toString();
	}

	let l4p = this.k8r.l0x.l5m.x1l(1);
	let r9w = this.k8r.e3v.l5m.x1l(1);

	let r6k = '';
	let y2n = '';
	if (!this.k8r.l0x.g8h.y8b() &&
		!this.k8r.e3v.g8h.y8b())
	{
		r6k = this.k8r.l0x.g8h.i8z();
		y2n = this.k8r.e3v.g8h.i8z();
	}

	let n1d = t3o(this.k8r.f5i);
	let m7v = this.k8r.m7v.v8g;
	if (!this.k8r.m7v.p7g.y8b())
	{
		m7v += "\x20";
		m7v += this.k8r.m7v.p7g.o4b.toString();
	}
	let t2d = '';
	if (!this.k8r.c6i.y8b())
	{
		t2d = this.k8r.c6i.toString("\x64\x64\x2d\x6d\x6d\x2d\x79\x79\x79\x79");
	}
	let r8x = '';
	if (!this.k8r.r8x.y8b())
	{
		r8x = '</br>' + '[' + this.k8r.r8x.b6f + ']';
	}

	let e6u = document.getElementById("\x6e\x6f\x74\x61\x2d\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72"+this.x7x);
	let k8o = e6u.clientHeight;
	let s9c = 200;

  let index = this.x7x;
  let d2c = this.k8r.m7v.d2c;

	let t2g = true;
	if (this.r2t.clientWidth >= 374 && k8o >= s9c)
	{
    let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable scroll\">";
    s +=      "\x3c\x74\x72\x3e";
    s +=        "<td class=\"playerPortrait\" colspan=\"3\" rowspan=\"2\">";
    
    s += 				"\x3c\x2f\x74\x64\x3e";
		s +=        "<td class=\"playerWhite\" colspan=\"8\">";
    s +=          "<span class=\"player\">" + h3z + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s += 					"<span class=\"rating\">" + p5w + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "\x3c\x62\x72\x3e";
		s += 				  "<span class=\"team\">" + r6k + "\x3c\x2f\x73\x70\x61\x6e\x3e";
		s +=        "\x3c\x2f\x74\x64\x3e";
    s += 		  	"<td class=\"result\" colspan=\"2\">";
    s +=          "\x3c\x73\x70\x61\x6e\x3e" + n1d + "\x3c\x2f\x73\x70\x61\x6e\x3e";
		s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"playerBlack\" colspan=\"8\">";
    s +=          "<span class=\"player\">" + o0a + "\x3c\x2f\x73\x70\x61\x6e\x3e";
		s +=          "<span class=\"rating\">" + a7y + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "\x3c\x62\x72\x3e";
    s +=          "<span class=\"team\">" + y2n + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
		s +=        "<td class=\"playerPortrait\" colspan=\"3\" rowspan=\"2\">";
    
		s +=        "\x3c\x2f\x74\x64\x3e";
    s +=      "\x3c\x2f\x74\x72\x3e";
    s +=      "\x3c\x74\x72\x3e";
		s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
		s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
		s +=          "\x3c\x73\x70\x61\x6e\x3e" + j1d + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"tournamentData\" colspan=\"12\">";
    s +=          "<span class=\"tournamentTitle\">" + m7v + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "\x3c\x62\x72\x3e";
    s +=          "<span class=\"tournamentPlace\">" + d2c + "\x3c\x2f\x73\x70\x61\x6e\x3e";
		s +=          "<span class=\"gameDate\">" + t2d + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "<span class=\"annotator\">" + r8x + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
		s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "\x3c\x73\x70\x61\x6e\x3e" + n1f + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
		s +=        "<td class=\"flagBlack\" colspan=\"2\">";
		s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
		s +=        "\x3c\x2f\x74\x64\x3e";
		s +=      "\x3c\x2f\x74\x72\x3e";
		s +=    "\x3c\x2f\x74\x61\x62\x6c\x65\x3e";
		this.r2t.innerHTML = s;

		
		
		let w3k = Math.trunc(this.r2t.clientWidth / 10);
		if (w3k < 24) w3k = 24;
    
		
		
		
		
		
		
	}
	else if (this.r2t.clientWidth >= 300 && k8o >= s9c)
	{
		
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "\x3c\x74\x72\x3e";
    s +=        "<td class=\"playerWhite\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + l4p + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "<span class=\"rating\">" + p5w + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "\x3c\x62\x72\x3e";
		s += 				  "<span class=\"team\">" + r6k + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"result\" colspan=\"2\">";
    s +=          "\x3c\x73\x70\x61\x6e\x3e" + n1d + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"playerBlack\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + r9w + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "<span class=\"rating\">" + a7y + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "\x3c\x62\x72\x3e";
    s +=          "<span class=\"team\">" + y2n + "\x3c\x2f\x73\x70\x61\x6e\x3e";
		s +=        "\x3c\x2f\x74\x64\x3e";
    s +=      "\x3c\x2f\x74\x72\x3e";
    s +=      "\x3c\x74\x72\x3e";
    s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "\x3c\x73\x70\x61\x6e\x3e" + j1d + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
		s +=        "<td class=\"tournamentData\" colspan=\"14\">";
    s +=          "<span class=\"tournamentTitle\">" + m7v + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "<span class=\"tournamentPlace\">" + "\x3c\x2f\x62\x72\x3e" + d2c + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "<span class=\"gameDate\">" + t2d + "\x3c\x2f\x73\x70\x61\x6e\x3e";
		s +=          "<span class=\"annotator\">" + r8x + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "\x3c\x73\x70\x61\x6e\x3e" + n1f + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"flagBlack\" colspan=\"2\">";
    s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=      "\x3c\x2f\x74\x72\x3e";
    s +=    "\x3c\x2f\x74\x61\x62\x6c\x65\x3e";
		this.r2t.innerHTML = s;
	}
	else if (this.r2t.clientWidth >= 280)
	{
		
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "\x3c\x74\x72\x3e";
    s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"playerWhite\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + l4p + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "<span class=\"rating\">" + p5w + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"result\" colspan=\"2\">";
    s +=          "\x3c\x73\x70\x61\x6e\x3e" + n1d + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"playerBlack\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + r9w + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "<span class=\"rating\">" + a7y + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"flagBlack\" colspan=\"2\">";
    s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=      "\x3c\x2f\x74\x72\x3e";
    s +=    "\x3c\x2f\x74\x61\x62\x6c\x65\x3e";
		this.r2t.innerHTML = s;
	}
	else
	{
		
		t2g = false; 
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "\x3c\x74\x72\x3e";
    s +=        "<td class=\"playerWhite\" width=\"45%\">";
    s +=          "<span class=\"player\">" + l4p + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"result\" width=\"10%\">";
    s +=          "\x3c\x73\x70\x61\x6e\x3e" + n1d + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"playerBlack\" width=\"45%\">";
    s +=          "<span class=\"player\">" + r9w + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=      "\x3c\x2f\x74\x72\x3e";
    s +=    "\x3c\x2f\x74\x61\x62\x6c\x65\x3e";
		this.r2t.innerHTML = s;
	}

	if (t2g)
	{
		let u2c = 16;
		if (this.r2t.clientWidth < 400)
		{
			u2c = 16;
		}
		else if (this.r2t.clientWidth < 500)
		{
			u2c = 24;
		}
		else
		{
			u2c = 32;
		}
    if (this.k8r.l0x.r0t != y9t.b4x)
    {
  		let n7j = document.getElementById("\x77\x68\x69\x74\x65\x50\x6c\x61\x79\x65\x72\x4e\x61\x74\x69\x6f\x6e"+this.x7x);
	  	n7j.src = "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x77\x77\x2e\x74\x64\x61\x6d\x62\x61\x73\x65\x2e\x63\x6f\x6d\x2f\x69\x6d\x61\x67\x65\x73\x2f\x66\x6c\x61\x67\x73\x2f" + u2c.toString() +"\x2f" + z9t(this.k8r.l0x.r0t) + "\x2e\x70\x6e\x67";
		  n7j.height = u2c;
  		n7j.width = u2c;
    }
    if (this.k8r.e3v.r0t != y9t.b4x)
    {
  		let u4j = document.getElementById("\x62\x6c\x61\x63\x6b\x50\x6c\x61\x79\x65\x72\x4e\x61\x74\x69\x6f\x6e"+this.x7x);
	  	u4j.src = "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x77\x77\x2e\x74\x64\x61\x6d\x62\x61\x73\x65\x2e\x63\x6f\x6d\x2f\x69\x6d\x61\x67\x65\x73\x2f\x66\x6c\x61\x67\x73\x2f" + u2c.toString() + "\x2f" + z9t(this.k8r.e3v.r0t) + "\x2e\x70\x6e\x67";
		  u4j.height = u2c;
  		u4j.width = u2c;
    }
	}
}

}

class u5z
{

constructor(x7x)
{
	this.x7x = x7x;
	this.k8r = new c0j();
	this.a7i = new j3l(x7x);
	this.j6q = new y7b(x7x);
	this.j6q.z2m.z4r = this; 
	this.q2v = new f0w();
  this.p0l = new m4m(x7x);
}

o5f()
{
	this.a7i.o5f();
}

a8w()
{
	this.a7i.a8w();
}

l7v()
{
	this.a7i.l7v();
	this.j6q.z2m.l7v();
}

h7t(b2l, s4a, b1b, r4w)
{
	this.l1u(r4w, b1b);
}

l1u(r4w, b1b)
{
	this.k8r = r4w.f0j.t9a();
	this.n2t();
	this.j6q.z2m.l0d(r4w.b8v, b1b);
}

n2t()
{
	this.j6q.d6k.n2t(this.k8r);
}

x9v(d1u)
{
	this.a7i.q8w(d1u);
  this.g7j();
}

i5k()
{
	if (this.q2v.u3q())
	{
		this.q2v.o4d();
    this.w5e();
	}
	else
	{
		if (!this.j6q.z2m.a8r())
		{
      
			this.q2v.z4r = this; 
			this.q2v.t8j();
			this.j6q.z2m.g6f();
		}
	}
}

k7g(v1h)
{
	this.p0l.p6q(v1h);
}

s9m()
{
	this.p0l.x4q();
}

e5h()
{
	return this.p0l.x6v();
}

g7j()
{
  if (!this.q2v.u3q())
  {
    this.w5e();
  }
}

w5e()
{
	this.p0l.h4o(
		this.j6q.z2m.q9r(),
		this.j6q.z2m.y1s(),
		this.j6q.z2m.q8o(),
		this.j6q.z2m.k5i());
}

}

const r8e =
{
	b2k : 0,
	w3c : 1,
	p4i : 2,
	r8m : 3,
	b6j : 4,
 	d6d : 5,
	f5i : 6,
	b8v : 7,
	o4b : 8,
	event : 9,
	t0m : 10
};

const o9u =
{
	b4x : 0,
	n4w : 1,
	d1e : 2
};

let v8h = 0;
let b6o = 0;
let g4v = 0;
let n6x = 0;
let n7r = 0;
let i5c = 0;
let l5p = 0;
let x1x = 0;

let d1e = false;

function t1b(f, s)
{
	let x4l = f.f0j.l0x.l5m.b6f();
	let s0q = s.f0j.l0x.l5m.b6f();
	if (x4l < s0q)
	{
		return d1e ? -1 : 1;
	}
	if (x4l > s0q)
	{
		return d1e ? 1 : -1;
	}
	x4l = f.f0j.e3v.l5m.b6f();
	s0q = s.f0j.e3v.l5m.b6f();
	if (x4l < s0q)
	{
		return -1;
	}
	if (x4l > s0q)
	{
		return 1;
	}
	return 0;
}

function v6t(f, s)
{
	let x4l = f.f0j.e3v.l5m.b6f();
	let s0q = s.f0j.e3v.l5m.b6f();
	if (x4l < s0q)
	{
		return d1e ? -1 : 1;
	}
	if (x4l > s0q)
	{
		return d1e ? 1 : -1;
	}
	x4l = f.f0j.l0x.l5m.b6f();
	s0q = s.f0j.l0x.l5m.b6f();
	if (x4l < s0q)
	{
		return -1;
	}
	if (x4l > s0q)
	{
		return 1;
	}
	return 0;
}

function p2u(f, s)
{
	let m1s = f.f0j.l0x.x8w - s.f0j.l0x.x8w;
	if (d1e)
	{
		m1s = -m1s;
	}
	if (m1s < 0) return -1;
	if (m1s > 0) return 1;
	m1s = f.f0j.e3v.x8w - s.f0j.e3v.x8w;
	if (d1e)
	{
		m1s = -m1s;
	}
	if (m1s < 0) return -1;
	if (m1s > 0) return 1;
	return t1b(f, s);
}

function c0i(f, s)
{
	let m1s = f.f0j.e3v.x8w - s.f0j.e3v.x8w;
	if (d1e)
	{
		m1s = -m1s;
	}
	if (m1s < 0) return -1;
	if (m1s > 0) return 1;
	m1s = f.f0j.l0x.x8w - s.f0j.l0x.x8w;
	if (d1e)
	{
		m1s = -m1s;
	}
	if (m1s < 0) return -1;
	if (m1s > 0) return 1;
	return t1b(f, s);
}

function f2m(f, s)
{
	let m1s = f.f0j.l0x.r0t - s.f0j.l0x.r0t;
	if (d1e)
	{
		m1s = -m1s;
	}
	if (m1s < 0) return -1;
	if (m1s > 0) return 1;
	m1s = f.f0j.e3v.r0t - s.f0j.e3v.r0t;
	if (d1e)
	{
		m1s = -m1s;
	}
	if (m1s < 0) return -1;
	if (m1s > 0) return 1;
	return t1b(f, s);
}

function f0p(f, s)
{
	let m1s = f.f0j.e3v.r0t - s.f0j.e3v.r0t;
	if (d1e)
	{
		m1s = -m1s;
	}
	if (m1s < 0) return -1;
	if (m1s > 0) return 1;
	m1s = f.f0j.l0x.r0t - s.f0j.l0x.r0t;
	if (d1e)
	{
		m1s = -m1s;
	}
	if (m1s < 0) return -1;
	if (m1s > 0) return 1;
	return t1b(f, s);
}

function m7x(f, s)
{
	let m1s = f.f0j.f5i - s.f0j.f5i;
	if (d1e)
	{
		m1s = -m1s;
	}
	if (m1s < 0) return -1;
	if (m1s > 0) return 1;
	return t1b(f, s);
}

function b5b(f, s)
{
	let m1s = s.f0j.c6i.c6i() - f.f0j.c6i.c6i();
	if (d1e)
	{
		m1s = -m1s;
	}
	if (m1s < 0) return -1;
	if (m1s > 0) return 1;
	return t1b(f, s);
}

function p4c(f, s)
{
	let q1j = f.f0j.m7v.v8g;
	let y9x = s.f0j.m7v.v8g;
	if (q1j < y9x)
	{
		return d1e ? -1 : 1;
	}
	if (q1j > y9x)
	{
		return d1e ? 1 : -1;
	}
	let m1s = f.f0j.m7v.p7g.c6i() - s.f0j.m7v.p7g.c6i();
	if (d1e)
	{
		m1s = -m1s;
	}
	if (m1s < 0) return -1;
	if (m1s > 0) return 1;
	m1s = f.f0j.t0m - s.f0j.t0m;
	if (m1s < 0) return -1;
	if (m1s > 0) return 1;
	m1s = f.f0j.j9m - s.f0j.j9m;
	if (m1s < 0) return -1;
	if (m1s > 0) return 1;
	return t1b(f, s);
}

function l3g(f, s)
{
	let m1s = s.f0j.t0m - f.f0j.t0m;
	if (d1e)
	{
		m1s = -m1s;
	}
	if (m1s < 0) return -1;
	if (m1s > 0) return 1;
	m1s = s.f0j.j9m - f.f0j.j9m;
	if (d1e)
	{
		m1s = -m1s;
	}
	if (m1s < 0) return -1;
	if (m1s > 0) return 1;
	return t1b(f, s);
}

function j4q(f, s)
{
	let m1s = s.k1u - f.k1u;
	if (d1e)
	{
		m1s = -m1s;
	}
	if (m1s < 0) return -1;
	if (m1s > 0) return 1;
	return t1b(f, s);
}

class f2p
{

constructor(x7x)
{
	this.x7x = x7x;
	this.n0y = [];
	this.l5c = null;
	this.h1r = null;
	this.i4m = null;
	this.z8o = [];
	this.a1s = [];
	this.c0m = -1;
	this.p4r = o9u.b4x;
	this.j3m = 0;
  this.j2p = null;
}

s2y()
{
	let s = "";
	s += "<tr class=\"grid-header-row\">";
	s += "<th class=\"grid-header-cell grid-player\">White</th>";
	s += "<th class=\"grid-header-cell grid-rating\">RatW</th>";
 	s += "<th class=\"grid-header-cell grid-flag\">FlgW</th>";
	s += "<th class=\"grid-header-cell grid-player\">Black</th>";
	s += "<th class=\"grid-header-cell grid-rating\">RatB</th>";
 	s += "<th class=\"grid-header-cell grid-flag\">FlgB</th>";
	s += "<th class=\"grid-header-cell grid-result\">Res</th>";
	s += "<th class=\"grid-header-cell grid-moves\">Len</th>";
	s += "<th class=\"grid-header-cell grid-year\">Year</th>";
	s += "<th class=\"grid-header-cell grid-event\">Event</th>";
	s += "<th class=\"grid-header-cell grid-round\">Rnd</th>";
	s += "\x3c\x2f\x74\x72\x3e";
	this.i4m.innerHTML = s;
	this.z8o = this.i4m.getElementsByTagName("\x54\x48");
	let x7x = this.x7x;

 	this.z8o[r8e.b2k].onclick = this.c1z.bind(this);
	this.z8o[r8e.w3c].onclick = this.e4k.bind(this);
  this.z8o[r8e.p4i].onclick = this.r3x.bind(this);
	this.z8o[r8e.r8m].onclick = this.c1z.bind(this);
	this.z8o[r8e.b6j].onclick = this.w8n.bind(this);
  this.z8o[r8e.d6d].onclick = this.c5w.bind(this);
	this.z8o[r8e.f5i].onclick = this.l1c.bind(this);
	this.z8o[r8e.b8v].onclick = this.h2f.bind(this);
	this.z8o[r8e.o4b].onclick = this.s3y.bind(this);
	this.z8o[r8e.event].onclick = this.w4k.bind(this);
	this.z8o[r8e.t0m].onclick = this.p8r.bind(this);
}

h3e(n0y)
{
	this.n0y = n0y;
	this.p8v();
}

h3s()
{
	this.i0z("\x67\x72\x69\x64\x2d\x70\x6c\x61\x79\x65\x72");
	this.i0z("\x67\x72\x69\x64\x2d\x72\x61\x74\x69\x6e\x67");
 	this.i0z("\x67\x72\x69\x64\x2d\x66\x6c\x61\x67");
	this.i0z("\x67\x72\x69\x64\x2d\x72\x65\x73\x75\x6c\x74");
	this.i0z("\x67\x72\x69\x64\x2d\x6d\x6f\x76\x65\x73");
	this.i0z("\x67\x72\x69\x64\x2d\x79\x65\x61\x72");
	this.i0z("\x67\x72\x69\x64\x2d\x65\x76\x65\x6e\x74");
	this.i0z("\x67\x72\x69\x64\x2d\x72\x6f\x75\x6e\x64");
}

h4s()
{
	this.e6e("\x67\x72\x69\x64\x2d\x70\x6c\x61\x79\x65\x72", v8h);
	this.e6e("\x67\x72\x69\x64\x2d\x72\x61\x74\x69\x6e\x67", b6o);
 	this.e6e("\x67\x72\x69\x64\x2d\x66\x6c\x61\x67", x1x);
	this.e6e("\x67\x72\x69\x64\x2d\x72\x65\x73\x75\x6c\x74", g4v);
	this.e6e("\x67\x72\x69\x64\x2d\x6d\x6f\x76\x65\x73", n6x);
	this.e6e("\x67\x72\x69\x64\x2d\x79\x65\x61\x72", n7r);
	this.e6e("\x67\x72\x69\x64\x2d\x65\x76\x65\x6e\x74", i5c);
	this.e6e("\x67\x72\x69\x64\x2d\x72\x6f\x75\x6e\x64", l5p);

}

i0z(t3l)
{
	let t6m = this.l5c.getElementsByClassName(t3l);
	for (let i = 0; i < t6m.length; i++) {
		t6m[i].style.display = "\x6e\x6f\x6e\x65";
	}
}

k8u(t3l)
{
	let t6m = this.l5c.getElementsByClassName(t3l);
	for (let i = 0; i < t6m.length; i++) {
		t6m[i].style.display = "\x74\x61\x62\x6c\x65\x2d\x63\x65\x6c\x6c";
	}
}

e6e(t3l, width)
{
	let t6m = this.l5c.getElementsByClassName(t3l);
	for (let i = 0; i < t6m.length; i++) {
		t6m[i].style.width = (width) + "\x70\x78";
	}
}

p8v()
{
	this.j3m = this.l5c.clientWidth;
	this.j3m -= 17;
	if (this.j3m < 100)
	{
		this.j3m = 100;
	}
	v8h = 200;
	b6o = 52;
	g4v = 34;
	n6x = 50;
	n7r = 52;
	i5c = 200;
	l5p = 50;
  x1x = 30;

 
	let k3m = document.getElementsByClassName("\x74\x64\x72\x65\x70\x6c\x61\x79")[0];
	if (k3m.clientWidth <= s1y)
	{
		let j5n = 0.7;
		v8h *= j5n;
		b6o *= j5n;
		g4v *= j5n;
		n6x *= j5n;
		n7r *= j5n;
		i5c *= j5n;
		l5p *= j5n;
	}
	this.z9g();
}

a4a()
{
	this.h3s();
	this.h4s();

  let u4p = 2.8;
  let h7r = 2.8;
  let c4n = 17;
	if (this.j3m <= 400)
	{
		this.k8u("\x67\x72\x69\x64\x2d\x70\x6c\x61\x79\x65\x72");
		this.k8u("\x67\x72\x69\x64\x2d\x72\x65\x73\x75\x6c\x74");
    this.k8u("\x67\x72\x69\x64\x2d\x79\x65\x61\x72");
		this.k8u("\x67\x72\x69\x64\x2d\x65\x76\x65\x6e\x74");
    let q2n = 5 * (u4p + h7r);
		let i9w = g4v + n7r;
		let s9h = Math.trunc((this.j3m - i9w - q2n - c4n) / 3);
		this.e6e("\x67\x72\x69\x64\x2d\x70\x6c\x61\x79\x65\x72", s9h);
		this.e6e("\x67\x72\x69\x64\x2d\x65\x76\x65\x6e\x74", s9h);
	}
	else if (this.j3m <= 580)
	{
		this.k8u("\x67\x72\x69\x64\x2d\x70\x6c\x61\x79\x65\x72");
		this.k8u("\x67\x72\x69\x64\x2d\x72\x61\x74\x69\x6e\x67");
		this.k8u("\x67\x72\x69\x64\x2d\x72\x65\x73\x75\x6c\x74");
		this.k8u("\x67\x72\x69\x64\x2d\x79\x65\x61\x72");
		this.k8u("\x67\x72\x69\x64\x2d\x65\x76\x65\x6e\x74");
    let q2n = 7 * (u4p + h7r);
		let i9w = 2 * b6o + g4v + n7r;
		let s9h = Math.trunc((this.j3m - i9w - q2n - c4n) / 3);
		this.e6e("\x67\x72\x69\x64\x2d\x70\x6c\x61\x79\x65\x72", s9h);
		this.e6e("\x67\x72\x69\x64\x2d\x65\x76\x65\x6e\x74", s9h);
	}
	else
	{
		this.k8u("\x67\x72\x69\x64\x2d\x70\x6c\x61\x79\x65\x72");
		this.k8u("\x67\x72\x69\x64\x2d\x72\x61\x74\x69\x6e\x67");
    this.k8u("\x67\x72\x69\x64\x2d\x66\x6c\x61\x67");
		this.k8u("\x67\x72\x69\x64\x2d\x72\x65\x73\x75\x6c\x74");
		this.k8u("\x67\x72\x69\x64\x2d\x6d\x6f\x76\x65\x73");
		this.k8u("\x67\x72\x69\x64\x2d\x79\x65\x61\x72");
		this.k8u("\x67\x72\x69\x64\x2d\x65\x76\x65\x6e\x74");
		this.k8u("\x67\x72\x69\x64\x2d\x72\x6f\x75\x6e\x64");
    let q2n = 11 * (u4p + h7r);
		let i9w = 2 * b6o + 2 * x1x + g4v + n6x + n7r + l5p;
		let s9h = Math.trunc((this.j3m - i9w - q2n - c4n) / 3);
		this.e6e("\x67\x72\x69\x64\x2d\x70\x6c\x61\x79\x65\x72", s9h);
		this.e6e("\x67\x72\x69\x64\x2d\x65\x76\x65\x6e\x74", s9h);
	}
}

z9g()
{
	let u2c = 16;
	let s = '';
  s += "<tbody id=\"gameList" + this.x7x + "\">"; 
	for (const r4w of this.n0y)
	{
		s += "<tr class=\"grid-row\">";
		s += "<td class=\"grid-cell grid-player\">";
		s += r4w.f0j.l0x.l5m.e6p();
		s += "\x3c\x2f\x74\x64\x3e";
		s += "<td class=\"grid-cell grid-rating\">";
		if (r4w.f0j.l0x.x8w)
		{
			s += r4w.f0j.l0x.x8w;
		}
		s += "\x3c\x2f\x74\x64\x3e";
   	s += "<td class=\"grid-cell grid-flag\">";
		if (r4w.f0j.l0x.r0t != y9t.b4x)
		{
      let x1d = "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x77\x77\x2e\x74\x64\x61\x6d\x62\x61\x73\x65\x2e\x63\x6f\x6d\x2f\x69\x6d\x61\x67\x65\x73\x2f\x66\x6c\x61\x67\x73\x2f" + u2c.toString() + "\x2f" + z9t(r4w.f0j.l0x.r0t) + "\x2e\x70\x6e\x67";
  		s += "\x3c\x73\x70\x61\x6e\x3e";
      s += "<img src=\"";
      s += x1d;
      s += "\" height=\"16\"";
      s += "\x3e";
   		s += "\x3c\x2f\x73\x70\x61\x6e\x3e";
		}
		s += "\x3c\x2f\x74\x64\x3e";
		s += "<td class=\"grid-cell grid-player\">";
		s += r4w.f0j.e3v.l5m.e6p();
		s += "\x3c\x2f\x74\x64\x3e";
		s += "<td class=\"grid-cell grid-rating\">";
		if (r4w.f0j.e3v.x8w)
		{
			s += r4w.f0j.e3v.x8w;
		}
		s += "\x3c\x2f\x74\x64\x3e";
		s += "<td class=\"grid-cell grid-flag\">";
		if (r4w.f0j.e3v.r0t != y9t.b4x)
		{
      let x1d = "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x77\x77\x2e\x74\x64\x61\x6d\x62\x61\x73\x65\x2e\x63\x6f\x6d\x2f\x69\x6d\x61\x67\x65\x73\x2f\x66\x6c\x61\x67\x73\x2f" + u2c.toString() + "\x2f" + z9t(r4w.f0j.e3v.r0t) + "\x2e\x70\x6e\x67";
  		s += "\x3c\x73\x70\x61\x6e\x3e";
      s += "<img src=\"";
      s += x1d;
      s += "\" height=\"16\"";
      s += "\x3e";
   		s += "\x3c\x2f\x73\x70\x61\x6e\x3e";
		}
		s += "\x3c\x2f\x74\x64\x3e";
		s += "<td class=\"grid-cell grid-result\">";
		s += t3o(r4w.f0j.f5i);
		s += "\x3c\x2f\x74\x64\x3e";
		s += "<td class=\"grid-cell grid-moves\">";
		s += r4w.k1u;
		s += "\x3c\x2f\x74\x64\x3e";
		s += "<td class=\"grid-cell grid-year\">";
		s += r4w.f0j.c6i.toString("\x79\x79\x79\x79");
		s += "\x3c\x2f\x74\x64\x3e";
		s += "<td class=\"grid-cell grid-event\">";
		s += r4w.f0j.m7v.v8g;
		s += "\x3c\x2f\x74\x64\x3e";
		s += "<td class=\"grid-cell grid-round\">";
		s += r4w.f0j.o8z();
		s += "\x3c\x2f\x74\x64\x3e";
		s += "\x3c\x2f\x74\x72\x3e";
	}
  s += "\x3c\x2f\x74\x62\x6f\x64\x79\x3e";
	this.h1r.innerHTML = s;

  let o5i = document.getElementById('gameList' + this.x7x);
  o5i.addEventListener('click', this.w1r.bind(this));

	this.a4a();
}

a4d(x6k)
{
	if (x6k != this.c0m)
	{
		this.c0m = x6k;
		this.p4r = o9u.n4w;
	}
	else
	{
		if (this.p4r == o9u.b4x)
		{
			this.p4r = o9u.n4w;
		}
		else if (this.p4r == o9u.n4w)
		{
			this.p4r = o9u.d1e;
		}
		else if (this.p4r == o9u.d1e)
		{
			this.p4r = o9u.n4w;
		}
	}
	d1e = (this.p4r == o9u.d1e);

	for (const u4o of this.z8o)
	{
		let s = u4o.u0t;
		let r5c = s.replace("\x20\x67\x72\x69\x64\x2d\x68\x65\x61\x64\x65\x72\x2d\x73\x6f\x72\x74\x20\x67\x72\x69\x64\x2d\x68\x65\x61\x64\x65\x72\x2d\x73\x6f\x72\x74\x2d\x64\x65\x73\x63", "");
		let i5t = r5c.replace("\x20\x67\x72\x69\x64\x2d\x68\x65\x61\x64\x65\x72\x2d\x73\x6f\x72\x74\x20\x67\x72\x69\x64\x2d\x68\x65\x61\x64\x65\x72\x2d\x73\x6f\x72\x74\x2d\x61\x73\x63", "");
		u4o.u0t = i5t;
	}
	let n8l = this.z8o[this.c0m];
	if (this.p4r == o9u.d1e)
	{
		n8l.u0t = n8l.u0t + "\x20\x67\x72\x69\x64\x2d\x68\x65\x61\x64\x65\x72\x2d\x73\x6f\x72\x74\x20\x67\x72\x69\x64\x2d\x68\x65\x61\x64\x65\x72\x2d\x73\x6f\x72\x74\x2d\x64\x65\x73\x63";
	}
	else
	{
		n8l.u0t = n8l.u0t + "\x20\x67\x72\x69\x64\x2d\x68\x65\x61\x64\x65\x72\x2d\x73\x6f\x72\x74\x20\x67\x72\x69\x64\x2d\x68\x65\x61\x64\x65\x72\x2d\x73\x6f\x72\x74\x2d\x61\x73\x63";
	}
}

c1z(event)
{
	this.a4d(r8e.b2k);
	this.n0y.sort(t1b);
	this.z9g();
}

e4k(event)
{
	this.a4d(r8e.w3c);
	this.n0y.sort(p2u);
	this.z9g();
}

r3x(event)
{
	this.a4d(r8e.p4i);
	this.n0y.sort(f2m);
	this.z9g();
}

d6g(event)
{
	this.a4d(r8e.r8m);
	this.n0y.sort(v6t);
	this.z9g();
}

w8n(event)
{
	this.a4d(r8e.b6j);
	this.n0y.sort(c0i);
	this.z9g();
}

c5w(event)
{
	this.a4d(r8e.d6d);
	this.n0y.sort(f0p);
	this.z9g();
}

l1c(event)
{
	this.a4d(r8e.f5i);
	this.n0y.sort(m7x);
	this.z9g();
}

s3y(event)
{
	this.a4d(r8e.o4b);
	this.n0y.sort(b5b);
	this.z9g();
}

w4k(event)
{
	this.a4d(r8e.event);
	this.n0y.sort(p4c);
	this.z9g();
}

p8r(event)
{
	this.a4d(r8e.t0m);
	this.n0y.sort(l3g);
	this.z9g();
}

h2f(event)
{
	this.a4d(r8e.b8v);
	this.n0y.sort(j4q);
	this.z9g();
}

w1r(event)
{
  const clickedRow = event.target.closest('tr');
  if (!clickedRow) return;
  const index = clickedRow.rowIndex;
  if (this.j2p)
  {
    this.j2p(this, index);
  }
}

}

/*
TO DO:
Hover op eval/depth: laat bordje ziet met slotstand.
*/
class s6n
{

constructor()
{
	this.k5o = new z1a();
	this.j6k = new z1a();
	this.q2b = false;
	this.q8q = 0;
	this.f6j = 0;
	this.o9p = [];
}

}

var tooltip = null;

class h0q
{

constructor(x7x)
{
	this.x7x = x7x;
	this.e8m = new u9y();
	this.z4r = null;
	this.o2u = new s6n();
	this.i4c = null;
	this.b1i = [];
	this.e2i = [];
  this.e7p = [];
  this.q8r = [];
	this.g5i = -1;
	this.q1l = new d8k();
  this.y1w = null;
	this.t8r = true;
	this.m9n = false;
	this.k0f = [];
	this.r8h = 0;
  this.w1p = true;
  this.v4k = false;
	this.x5p = false;
	this.f6n = true;
  this.a5t = false;
}

l0d(g8a, b1b)
{
	this.e8m = g8a.t9a();
  this.e8m.i2j();
	this.y1w = this.e8m.w2j(b1b);
	this.h7t();
}

o1j(w3q)
{
  this.s2p(this.e7p[w3q]);
}

h7t()
{
	this.v9t();
	this.g6f();
  this.w4h(this.e8m.q7z(this.y1w));
}

v9t()
{
	let n6o = new y6x();
  n6o.d7m(this.w1p);
	n6o.l9x(this.a5t);
  /*
	n6o.setOneLine(this.a5t);
  */
	n6o.b4f(this.x5p);
	n6o.k7q(this.f6n);
	n6o.a3b(this.e8m);

  this.i4c.innerHTML = n6o.t0s.s6r;
  this.b1i = this.i4c.getElementsByClassName("\x74\x64\x6d\x6f\x76\x65");
  this.e2i = this.i4c.getElementsByClassName("\x74\x64\x63\x6f\x6d\x6d\x65\x6e\x74");

	this.y6e("\x74\x64\x6d\x6f\x76\x65");
	this.y6e("\x74\x64\x63\x6f\x6d\x6d\x65\x6e\x74");
	this.y6e("\x74\x64\x64\x69\x61");
	this.y6e("\x74\x64\x6d\x65\x64\x61\x6c");
  this.y6e("\x74\x64\x63\x6f\x6c\x6f\x72\x73");

  this.o3i("\x74\x64\x6d\x6f\x76\x65");

	this.f2z();
	this.v4w();
}

y6e(b1h)
{
	let x7x = this.x7x;
	let l5q = this.i4c.getElementsByClassName(b1h);
	for (const r8u of l5q)
	{
    let b1b = r8u.getAttribute('movenr');
    r8u.onclick = this.g2h.bind(this, b1b);
	}
}

o3i(b1h)
{
	let x7x = this.x7x;
	let l5q = this.i4c.getElementsByClassName(b1h);
	for (const r8u of l5q)
	{
    let b1b = r8u.getAttribute('movenr');
    r8u.onmouseover = this.a7d.bind(this, b1b);
    r8u.onmouseleave = this.p6w.bind(this, b1b);
	}
}

l7v()
{
	this.f2z();
}

f2z()
{
	let k5y = this.i4c.getElementsByClassName("\x74\x64\x64\x69\x61");
	for (const j2d of k5y)
	{
		let a9k = new c3b();
		a9k.m3l = j2d.getElementsByTagName("\x63\x61\x6e\x76\x61\x73")[0];
		let v0d = this.q1l.q9e();
		a9k.m3l.width = v0d;
		a9k.m3l.height = v0d;
		a9k.g8f(this.q1l);
		let j3k = this.e8m.w2j(j2d.getAttribute('movenr'));
    a9k.h4o(this.e8m.k5o(j3k));
    if (j3k.e7j)
    {
  		a9k.z7e(j3k.e7j.d4u());
	  	a9k.p8k(j3k.e7j.g2e());
    }
    else
    {
   		a9k.z7e(this.e8m.g7e());
	  	a9k.p8k(this.e8m.a0w());
    }
		a9k.n0r();
	}
}

v4w()
{
	let s4j = this.i4c.getElementsByClassName("\x74\x64\x6d\x65\x64\x61\x6c");
	for (const g9j of s4j)
	{
		let m3l = g9j.getElementsByTagName("\x63\x61\x6e\x76\x61\x73")[0];
		m3l.width = 40;
		m3l.height = 16;
		let d7i = m3l.getContext('2d');
		let rect = new i8m();
		rect.e3d(40);
		rect.n1l(16);
		let j3k = this.e8m.w2j(g9j.getAttribute('movenr'));
    if (j3k.e7j)
    {
  		v4w(d7i, rect, j3k.e7j.q2d());
    }
    else
    {
  		v4w(d7i, rect, this.e8m.k3i());
    }
	}
}

g6f()
{
	let d1u = new t0e();
	d1u.q9r = this.e8m.q9r();
  d1u.g5x = this.e8m.k5o(this.y1w);
  if (this.s6p())
  {
    d1u.d4u = this.e8m.g7e();
	  d1u.g2e = this.e8m.a0w();
  }
  else
  {
  	d1u.d4u = this.y1w.e7j.d4u();
	  d1u.g2e = this.y1w.e7j.g2e();
  }
  
	if (this.a8r())
	{
		d1u.f6f = new h5b();
	}
	else
	{
    let y1u = this.y1w.t9a();
		this.e8m.i4o(y1u);
		d1u.f6f = y1u.e7j.s4r().t9a();
	}
  
 	if (!this.s6p())
	{
		d1u.t6r = this.y1w.e7j.s4r();
	}
	d1u.n3o = this.n3o();
	d1u.b9i = this.b9i();
	d1u.r5m = this.r5m();
	d1u.a8b = 0; 
  d1u.o5u = this.e8m.o5u(this.y1w);
	if (this.z4r)
	{
		this.z4r.x9v(d1u);
	}
}

i1q(a6u)
{
	this.y1w = this.e8m.w2j(a6u);
	this.g6f();
}

i7h(s4v)
{
	switch (s4v)
	{
		case f4x:
		case u4l:
		case g4h:
			this.v7f();
			break;
		case i9k:
		case m3b:
		case o7m:
			this.m3k();
			break;
		case m2d:
		case n2p:
		case l3x:
			this.p0p();
			break;
		case w9p:
		case h7b:
		case n3y:
			this.x5i();
			break;
		case f2t:
			break;
		case v0x:
			break;
	}
}

v6f()
{
  if (this.y1w.c2h)
  {
    this.w4h(this.y1w.c2h.d5t);
  }
  else
  {
    this.w4h(0);
  }
}

d9g()
{
	this.v6f();
	this.g6f();
}

b9i()
{
	return !this.s6p();
}

s6p()
{
	return this.e8m.s6p(this.y1w);
}

a8r()
{
	return this.e8m.a8r(this.y1w);
}

n3o()
{
	return this.e8m.n3o(this.y1w);
}

f6f(k9m)
{
	if (this.a8r())
	{
		return null;
	}
	else
	{
    let y1u = this.y1w.t9a();
		this.e8m.o3w(y1u, k9m);
		return y1u.e7j;
	}
}

m3k()
{
	if (this.b9i())
	{
		this.e8m.i3c(this.y1w);
		this.d9g();
	}
}

r5m()
{
	return !this.a8r();
}

v7f()
{
	if (this.r5m())
	{
		this.c3v(0);
	}
}

c3v(index)
{
	let x5x = this.e8m.q3f(this.y1w);
	if (index >= 0 && index < x5x)
	{
		this.e8m.o3w(this.y1w, index);
		this.d9g();
	}
}

x5i()
{
	if (this.r5m())
	{
		this.e8m.f7u(this.y1w);
		this.d9g();
	}
}

p0p()
{
	if (this.b9i())
	{
		this.y1w = this.e8m.p2p();
		this.d9g();
	}
}

v3v()
{
	if (this.t8r)
	{
		this.h5q();
	}
	else
	{
		this.a5b();
	}
}

q7y()
{
	if (this.m9n)
	{
		this.m9n = false;
		this.z4r.a7i.a9k.a1b();
		this.g6f();
	}
	else
	{
		this.g6f();
	}
}


a5b()
{
	if (this.a8r())
	{
		this.g6f();
		return;
	}
  if (chess)
  {
  	this.c3v(0);
    return;
  }

  
 	let e7j = this.f6f(0);
  if (!e7j.f6j())
 	{
  	this.c3v(0);
	  return;
 	}

  
	let c4u = false;
	if (!this.o2u.q2b)
	{
		c4u = true;
	}
	else
	{
		c4u = false;
		if (this.o2u.q8q < this.o2u.f6j)
		{
			if (this.o2u.j6k.w0w(this.o2u.k5o))
			{
				c4u = true;
			}
		}
	}
	if (c4u)
	{
		this.o2u.k5o = this.e8m.k5o(this.y1w);
		this.o2u.j6k = this.e8m.k5o(this.y1w);
		this.o2u.q2b = true;
		this.o2u.q8q = 0;
		this.o2u.o9p.length = 0;
		this.o2u.o9p.push(e7j.u1z()); 
		this.o2u.f6j = e7j.f6j();
		if (this.o2u.f6j > 1)
		{
			let l8g = generateBetweens(this.o2u.j6k, e7j.s4r());
			for (let i = 0; i < this.o2u.f6j - 1; i++)
			{
				this.o2u.o9p.push(l8g[i]);
			}
		}
		this.o2u.o9p.push(e7j.f3m());
	}
	if (this.o2u.q8q < this.o2u.f6j)
	{
		let f7g = e7j.f7g();
		let j5j = this.o2u.o9p[this.o2u.q8q];
		let f3m = this.o2u.o9p[this.o2u.q8q + 1];
		this.o2u.j6k.y2x(j5j, z1d.y8b);
		this.o2u.j6k.y2x(f3m, f7g);
		this.o2u.k5o = this.o2u.j6k.t9a();
		this.o2u.q8q++;
		let d1u = new t0e();
		d1u.g5x = this.o2u.j6k.t9a();
		d1u.b9i = this.b9i();
		d1u.r5m = this.r5m();
		if (this.z4r)
		{
			this.z4r.x9v(d1u);
		}
	}
	else
	{
		this.o2u.q2b = false;
		this.c3v(0);
	}
}



h5q()
{
	if (this.m9n)
	{
		let u0h = this.z4r.a7i.a9k.p6t();
		if (u0h)
		{
			if (this.r8h < this.k0f.length - 1)
			{
				this.z4r.a7i.a9k.z2l(this.k0f[this.r8h],
					this.k0f[this.r8h+1], true);
				this.r8h++;
			}
			else
			{
				this.m9n = false;
				this.c3v(0);
			}
		}
		return;
	}

	if (this.a8r())
	{
		this.g6f();
		return;
	}

	this.k0f.length = 0;
	let e7j = this.f6f(0);
	let f6j = e7j.f6j();
	if (f6j == 0)
	{
		this.k0f.push(e7j.u1z()); 
		this.k0f.push(e7j.s5v());
	}
	else
	{
		this.k0f.push(e7j.u1z());
		if (f6j > 1)
		{
      let k5o = this.e8m.k5o(this.y1w);
      let l8g = generateBetweens(k5o, e7j.s4r());
			for (let i = 0; i < f6j - 1; i++)
			{
				this.k0f.push(l8g[i]);
			}
		}
		this.k0f.push(e7j.s5v());
	}

	this.z4r.a7i.a9k.z2l(this.k0f[0],
		this.k0f[1], f6j > 0);
	this.r8h = 1;
	this.m9n = true;
}

j6h(b9y)
{
	for (const m of this.b1i)
	{
		if (m.getAttribute('movenr') == b9y)
		{
			return m;
		}
	}
	return null;
}

y8v(b9y)
{
	let d5d = [];
	for (const x3p of this.e2i)
	{
		if (x3p.getAttribute('movenr') == b9y)
		{
			d5d.push(x3p);
		}
	}
	return d5d;
}

s2p(x4g)
{
	let g0e = x4g.offsetTop;
	let b9f = x4g.scrollHeight;

	let q1f = this.i4c.offsetTop;
	let b2x = this.i4c.scrollTop;
	let r9c = this.i4c.clientHeight;
	let v4r = this.i4c.scrollHeight;
	let o5t = g0e - q1f;
	if (o5t >= b2x && o5t + b9f <= b2x + r9c - 1)
	{
		
	}
	else
	{
		
		let top = o5t - (r9c / 2);
		if (top < 0) top = 0;
		this.i4c.scrollTop = top;
	}
}

m3q(z7x, f1h)
{
	let c1b = z7x;
	while (c1b.s8f)
	{
		c1b = c1b.s8f;
	}
 	while (c1b)
	{
    if (this.e8m.n7q(c1b.d5t) == false)
    {
 	  	let x4g = this.j6h(c1b.d5t);
  	  if (x4g)
 		  {
  		  x4g.classList.add(f1h);
 	  	}
    }
    c1b = c1b.p3k;
  }
}

w4h(b1b)
{
  
 	for (const e7j of this.b1i)
	{
 		e7j.classList.remove('tdcurline');
    e7j.classList.remove('tdcurnode1');
	}
 	for (const x3p of this.e2i)
	{
 		x3p.classList.remove('tdcurline');
	}

  
	if (this.g5i >= 0)
	{
		let x4g = this.j6h(this.g5i);
		if (x4g)
		{
			x4g.classList.remove('tdcurmove');
		}
	}

  
  let w4o = true;
  let o3o = this.e8m.u5x(this.y1w);
 	for (const z7x of o3o)
	{
    if (z7x.s8f && w4o)
		{
		  this.m3q(z7x, 'tdcurnode1');
      w4o = false;
    }
    else
    {
      if (this.e8m.n7q(z7x.d5t) == false)
      {
   	  	let l5a = this.j6h(z7x.d5t);
	  	  if (l5a)
  		  {
	  		  l5a.classList.add('tdcurline');
  	  	}
      }
    }
	}

  
	let x4g = this.j6h(b1b);
	if (x4g)
	{
    x4g.classList.remove('tdcurline');
		x4g.classList.add('tdcurmove');
		this.s2p(x4g);
	}
	this.g5i = b1b;
}

y0a()
{
	let e7j = this.j6h(this.g5i);
	if (!e7j) return;
	let q0d = e7j.offsetTop;
	let a9u = null;
	let q9l = -1;
	for (const m of this.b1i)
	{
		if (m.offsetTop < q0d)
		{
			if (m.offsetTop > q9l)
			{
				a9u = m;
				q9l = m.offsetTop;
			}
		}
		else
		{
			break;
		}
	}
	if (a9u)
	{
		this.l0n(a9u.getAttribute('movenr'));
	}
	else
	{
		if (this.b1i.length)
		{
			this.l0n(this.b1i[0].getAttribute('movenr'));
		}
	}
}

w4e()
{
	let e7j = this.j6h(this.g5i);
	if (!e7j)
	{
		this.v7f();
		return;
	}
	let q0d = e7j.offsetTop;
	for (const m of this.b1i)
	{
		if (m.offsetTop > q0d)
		{
			this.l0n(m.getAttribute('movenr'));
			return;
		}
	}
	if (this.b1i.length)
	{
		this.l0n(this.b1i[this.b1i.length - 1].getAttribute('movenr'));
	}
}

l0n(a6u)
{
  
  
  
  
  if (this.y1w.c2h)
  {
    if (this.y1w.c2h.d5t == a6u)
    {
      return;
    }
  }
  else
  {
    if (a6u == 0)
    {
      return;
    }
  }
	
  this.i1q(a6u);
  this.w4h(a6u);
	
}

q7z()
{
	return this.e8m.q7z(this.y1w);
}

g8f(q1l)
{
  this.q1l = q1l.t9a();
	this.q1l.w9k = 0;
	this.q1l.l8n = 0;
	this.q1l.y7x = 32;
  this.q1l.d6c = 2;
 	this.q1l.g6g = false;
}

q9r()
{
	return this.e8m.q9r();
}

y1s()
{
	return this.e8m.y1s();
}

q8o()
{
	return this.e8m.q8o(this.y1w);
}

k5i()
{
	return this.e8m.k5i();
}

g2h(b1b, event)
{
  this.l0n(b1b);
}

a7d(b1b, event)
{
  if (!this.v4k) return;

  if (!tooltip)
  {
    tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    document.body.appendChild(tooltip);
  }

  const r8u = event.currentTarget; 
  const rect = r8u.getBoundingClientRect();
  console.log(`i8m.q3m: ${rect.left}`);
  console.log(`i8m.w3l: ${rect.top}`);
  let z5x = rect.left;
  let x6f = rect.top + rect.height;

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
	let j8p = this.q1l.q9e();

  if (z5x + j8p > viewportWidth)
  {
    z5x = viewportWidth - j8p - 5;
  }
  if (z5x < 5)
  {
    z5x = 5;
  }
  if (x6f + j8p > viewportHeight)
  {
    x6f = viewportHeight - j8p - 5;
  }
  if (x6f < 5)
  {
    x6f = 5;
  }

  let j3k = this.e8m.w2j(b1b);
  let k5o = this.e8m.k5o(j3k);
  tooltip.innerHTML = this.g2g(k5o);

  tooltip.style.left = `${z5x}px`;
  tooltip.style.top = `${x6f}px`;
  tooltip.classList.add('visible');
}

p6w(b1b, event)
{
  if (!this.v4k) return;
  tooltip.classList.remove('visible');
}

g2g(k5o)
{
  let a9k = new c3b();
  const tempCanvas = document.createElement('canvas');
	a9k.m3l = tempCanvas;
	let v0d = this.q1l.q9e();
	a9k.m3l.width = v0d;
	a9k.m3l.height = v0d;
	a9k.g8f(this.q1l);
  a9k.h4o(k5o);
  a9k.n0r();
  const imageDataURL = tempCanvas.toDataURL('image/png');
  return `<img src="\x24\x7b\x69\x6d\x61\x67\x65\x44\x61\x74\x61\x55\x52\x4c\x7d" alt="\x43\x68\x65\x73\x73\x20\x50\x6f\x73\x69\x74\x69\x6f\x6e" width="\x24\x7b\x62\x6f\x61\x72\x64\x53\x69\x7a\x65\x7d" height="\x24\x7b\x62\x6f\x61\x72\x64\x53\x69\x7a\x65\x7d">`;
}

}

class r0c
{

constructor()
{
	this.q3n = 15;
  this.j9r = true;
 	this.z7d = true;
}

t9a()
{
  return Object.assign(new r0c(), this);
}

}
class y7b
{

constructor(x7x)
{
  this.d6k = new e1y(x7x);
  this.z2m = new h0q(x7x);
}

}

class f0w
{

constructor()
{
	this.b3g = false;
	this.z4r = null;
	this.e9b = null;
	this.w9y = 6;
	this.o4j = null;
	this.l3d = null;
	this.t1d = null;
	this.t9x = null;
	this.l0c = null;
	this.y8j = false;
}

t8j()
{
	this.b3g = false;
	this.s3z();
	this.o4j.classList.replace('autoPlay', 'autoStop');
	this.t9x.style.display = 'none';
	this.l0c.style.display = 'none';
	this.l3d.style.display = 'inline-block';
	this.t1d.style.display = 'inline-block';
	this.w8b();
	this.z4r.a7i.d3u = false;
}

o4d()
{
	if (this.e9b)
	{
		clearInterval(this.e9b);
		this.e9b = null;
		this.o4j.classList.replace('autoStop', 'autoPlay');
		this.t9x.style.display = 'inline-block';
		this.l0c.style.display = 'inline-block';
		this.l3d.style.display = 'none';
		this.t1d.style.display = 'none';
		this.z4r.a7i.d3u = true; 
		this.z4r.j6q.z2m.q7y();
	}
}

s3z()
{
	let x7x = this.z4r.x7x;
	this.e9b = setInterval(function(){ p9h(x7x); },
		this.z4r.j6q.z2m.t8r ? this.w9y * 2 : this.w9y * 100);
}

u3q()
{
	return this.e9b != null;
}

b9i()
{
	return !this.z4r.j6q.z2m.s6p();
}

r5m()
{
	return !this.z4r.j6q.z2m.a8r();
}

d2h()
{
	if (this.y8j)
	{
		return;
	}
	else
	{
		this.y8j = true;
	}
	if (!this.r5m())
	{
		this.o4d();
	}
	else
	{
		this.z4r.j6q.z2m.v3v();
	}
	this.y8j = false;
}

y5y()
{
	if (this.e9b)
	{
		if (this.w9y < 50)
		{
			this.w9y++;
			clearInterval(this.e9b);
			this.s3z();
			this.w8b();
		}
	}
}

q0z()
{
	if (this.e9b)
	{
		if (this.w9y > 1)
		{
			this.w9y--;
			clearInterval(this.e9b);
			this.s3z();
			this.w8b();
		}
	}
}

w8b()
{
	c9s(this.l3d, this.w9y < 50);
	c9s(this.t1d, this.w9y > 1);
}

}

let x0v = null;
let l3h = 0;
let v4t = null;

class v5h
{

constructor()
{
	this.index = 0;
	this.v0y = '';
	this.k3m = null;
	this.a9r = false;
	this.z4r = null;
	this.x4e = null;
  this.n0y = [];
	this.w7y = 0;
  this.q4u = 0;

	this.p2h = null;
	this.f5o = null;
	this.left = null;
	this.c4w = null;
	this.q8a = null;
	this.a0s = null;
	this.q3v = null;
	this.n7m = null;
	this.y3f = null;
	this.j8y = null;
	this.w3i = null;
 	this.u8b = null;
 	this.d6p = null;
	this.h7h = null;
	this.t9x = null;
	this.l3d = null;
	this.o4j = null;
	this.l0c = null;
	this.t1d = null;
	this.j6x = null;
 	this.k6o = null;
  this.d4j = null;
	this.w2h = null;
  this.o3v = null;
	this.z4g = null;
	this.l5o = null;
	this.l5c = null;
	this.z9r = null;
	this.y8q = null;
	this.k3y = null;
  this.m7g = null;
  this.m6p = null;
	this.s6e = null;
	this.a2r = null;
	this.o3b = null;
	this.p9v = null;
	this.y1x = null;

	this.h8i = null;
	this.b0a = null;
	this.w9x = null;
	this.d9j = null;

  this.f9f = null;
	this.f3c = null;
	this.r0e = null;
  this.s2b = null;

  this.i5l = null;

  
  this.p1n = null;
  this.r9d = null;
  this.p4y = null;
  this.k2p = null;
  this.h5r = null;
  this.o7v = null;

  
}

p8q(index, k3m, v0y)
{
	this.index = index;
	this.k3m = k3m;
	this.v0y = v0y;
	k3m.innerHTML = '';
	k3m.c1t = "\x72\x65\x70\x6c\x61\x79";

  let s = '';
 	s += "<div class=\"rootParent\">";
	s +=   "<div id=\"root" + index + "\" class=\"root\">";

	s +=     "<div id=\"left" + index + "\" class=\"left\">";
	s +=       "<div id=\"leftContainer" + index + "\" class=\"leftContainer\">";
	s +=         "<div id=\"leftNest" + index + "\" class=\"leftNest\">";
	s +=           "<div id=\"leftNorth" + index + "\" class=\"leftNorth\">";
	s +=             "<div id=\"boardHolder" + index + "\" class=\"boardHolder\">";
	s +=               "<div id=\"boardPanel" + index + "\" class=\"boardPanel\">";
	s +=                 "<canvas id=\"boardCanvas" + index + "\" class=\"boardCanvas\"></canvas>";
	s +=               "\x3c\x2f\x64\x69\x76\x3e";
	s +=             "\x3c\x2f\x64\x69\x76\x3e";
	s +=             "<div id=\"belowBoard" + index + "\" class=\"belowBoard\">";
	s +=               "<div id=\"replayPanel" + index + "\" class=\"replayPanel\">";
	s +=                 "<button id=\"goToBegin" + index + "\" class=\"replayButton goToBegin\" title=\"Go to begin\"></button>";
	s +=                 "<button id=\"playBackward" + index + "\" class=\"replayButton playBackward\" title=\"Play backward\"></button>";
	s +=                 "<button id=\"playSlower" + index + "\" class=\"replayButton playSlower\" title=\"Slower\"></button>";
	s +=                 "<button id=\"autoPlay" + index + "\" class=\"replayButton autoPlay\" title=\"Auto play\"></button>";
	s +=                 "<button id=\"playForward" + index + "\" class=\"replayButton playForward\" title=\"Play forward\"></button>";
	s +=                 "<button id=\"playFaster" + index + "\" class=\"replayButton playFaster\" title=\"Faster\"></button>";
	s +=                 "<button id=\"goToEnd" + index + "\" class=\"replayButton goToEnd\" title=\"Go to end\"></button>";
	s +=                 "<button id=\"flipBoard" + index + "\" class=\"replayButton flipBoard\" title=\"Flip Board\"></button>";
	s +=                 "<button id=\"goToPrevious" + index + "\" class=\"replayButton loadPrevious\" title=\"Load previous game\"></button>";
	s +=                 "<button id=\"goToNext" + index + "\" class=\"replayButton loadNext\" title=\"Load next game\"></button>";
  s +=                 "<button id=\"showGameList" + index + "\" class=\"replayButton gameList\" title=\"Show Game List\"></button>";
	s +=                 "<button id=\"download" + index + "\" class=\"replayButton download\" title=\"Download PDN\"></button>";
	s +=                 "<button id=\"settings" + index + "\" class=\"replayButton settings\" title=\"Settings\"></button>";
	s +=               "\x3c\x2f\x64\x69\x76\x3e";
	s +=             "\x3c\x2f\x64\x69\x76\x3e";
	s +=           "\x3c\x2f\x64\x69\x76\x3e";
	s +=           "<div id=\"leftSouth" + index + "\" class=\"leftSouth\">";
	s +=             "<div id=\"leftSouthNest" + index + "\" class=\"leftSouthNest\">";
	s +=             "\x3c\x2f\x64\x69\x76\x3e";
	s +=           "\x3c\x2f\x64\x69\x76\x3e";
	s +=         "\x3c\x2f\x64\x69\x76\x3e";
	s +=       "\x3c\x2f\x64\x69\x76\x3e";
	s +=     "\x3c\x2f\x64\x69\x76\x3e";

	s +=     "<div id=\"right" + index + "\" class=\"right\">";
	s +=       "<div id=\"rightNest" + index + "\" class=\"rightNest\">";
	s +=         "<div id=\"rightNorth" + index + "\" class=\"rightNorth\">";
	s +=           "<div id=\"nota-container" + index + "\" class=\"nota-container\">";
	s +=             "<div id=\"nota-header-container" + index + "\" class=\"nota-header-container\">";
	s +=               "<div id=\"headerPanel" + index + "\" class=\"headerPanel\"></div>";
	s +=             "\x3c\x2f\x64\x69\x76\x3e";
	s +=             "<div class=\"nota-moves-container\">";
	s +=               "<div id=\"nota-imoves-container" + index + "\" class=\"nota-imoves-container\">";
	s +=                 "<div id=\"movesPanel" + index + "\" class=\"movesPanel\"></div>";
	s +=               "\x3c\x2f\x64\x69\x76\x3e";
	s +=             "\x3c\x2f\x64\x69\x76\x3e";
	s +=           "\x3c\x2f\x64\x69\x76\x3e";
	s +=         "\x3c\x2f\x64\x69\x76\x3e";
	s +=         "<div id=\"rightSouth" + index + "\" class=\"rightSouth\">";
	s +=           "<div id=\"enota-container" + index + "\" class=\"enota-container\">";

  
	s +=  "<div id=\"belowBoard" + index + "\" class=\"belowBoard\">";
 	s +=  "<div id=\"engineButtonPanel" + index + "\" class=\"replayPanel\">";

  
  s += "<div class=\"toggle-container\">";
  s += "<input type=\"checkbox\" id=\"startEngine" + index + "\" hidden>";
  s += "<label for=\"startEngine" + index + "\" class=\"switch\" title=\"Evaluation on/off\">";
  s += "<span class=\"slider\"></span>";
  s += "\x3c\x2f\x6c\x61\x62\x65\x6c\x3e";
  s += "\x3c\x2f\x64\x69\x76\x3e";
  
	s += "<button id=\"threat" + index + "\" class=\"replayButton threat-off\" title=\"Threat\"></button>";
  
	s += "<button id=\"engineSettings" + index + "\" class=\"replayButton engineSettings\" title=\"Settings\"></button>";
  s +=  "\x3c\x2f\x64\x69\x76\x3e";
  s +=  "\x3c\x2f\x64\x69\x76\x3e";

	s +=             "<div class=\"enota-moves-container\">";
	s +=               "<div id=\"enota-imoves-container" + index + "\" class=\"enota-imoves-container\">";
	s +=                 "<div id=\"emovesPanel" + index + "\" class=\"emovesPanel\"></div>";
	s +=               "\x3c\x2f\x64\x69\x76\x3e";
	s +=             "\x3c\x2f\x64\x69\x76\x3e";
	s +=           "\x3c\x2f\x64\x69\x76\x3e";
	s +=         "\x3c\x2f\x64\x69\x76\x3e";
  s +=       "\x3c\x2f\x64\x69\x76\x3e";
	s +=     "\x3c\x2f\x64\x69\x76\x3e";

 	s +=     "<div id=\"listParent" + index + "\" class=\"listParent grid\">";
	s +=       "<div id=\"listHeader" + index + "\" class=\"grid-header grid-header-scrollbar\">";
	s +=         "<table id=\"listHeaderTable" + index + "\" class=\"grid-table\">";
	s +=         "\x3c\x2f\x74\x61\x62\x6c\x65\x3e";
	s +=       "\x3c\x2f\x64\x69\x76\x3e";
	s +=       "<div id=\"listBody" + index + "\" class=\"listBody grid-body\">";
	s +=         "<table id=\"gameList" + index + "\" class=\"grid-table gamelist-table\"></table>";
	s +=       "\x3c\x2f\x64\x69\x76\x3e";
  s +=       "<div id=\"list-button-container" + index + "\" class=\"navButtonContainer\">";
	s +=  	     "<button id=\"hideGameList" + index + "\" class=\"navButton\" title=\"Hide Game List\">&lt; Back</button>";
  s +=       "\x3c\x2f\x64\x69\x76\x3e";
  s +=     "\x3c\x2f\x64\x69\x76\x3e";
	s +=   "\x3c\x2f\x64\x69\x76\x3e";
	s += "\x3c\x2f\x64\x69\x76\x3e";

  k3m.innerHTML = s;

	this.p2h = document.getElementById("\x72\x6f\x6f\x74\x50\x61\x72\x65\x6e\x74"+index);
	this.f5o = document.getElementById("\x72\x6f\x6f\x74"+index);
	this.left = document.getElementById("\x6c\x65\x66\x74"+index);
	this.c4w = document.getElementById("\x6c\x65\x66\x74\x43\x6f\x6e\x74\x61\x69\x6e\x65\x72"+index);
	this.q8a = document.getElementById("\x6c\x65\x66\x74\x4e\x65\x73\x74"+index);
	this.a0s = document.getElementById("\x6c\x65\x66\x74\x4e\x6f\x72\x74\x68"+index);
	this.q3v = document.getElementById("\x62\x6f\x61\x72\x64\x48\x6f\x6c\x64\x65\x72"+index);
	this.n7m = document.getElementById("\x62\x6f\x61\x72\x64\x50\x61\x6e\x65\x6c"+index);
	this.y3f = document.getElementById("\x62\x6f\x61\x72\x64\x43\x61\x6e\x76\x61\x73"+index);
	this.j8y = document.getElementById("\x62\x65\x6c\x6f\x77\x42\x6f\x61\x72\x64"+index);
	this.w3i = document.getElementById("\x72\x65\x70\x6c\x61\x79\x50\x61\x6e\x65\x6c"+index);
 	this.u8b = document.getElementById("\x67\x6f\x54\x6f\x50\x72\x65\x76\x69\x6f\x75\x73"+index);
 	this.d6p = document.getElementById("\x67\x6f\x54\x6f\x4e\x65\x78\x74"+index);
	this.h7h = document.getElementById("\x67\x6f\x54\x6f\x42\x65\x67\x69\x6e"+index);
	this.t9x = document.getElementById("\x70\x6c\x61\x79\x42\x61\x63\x6b\x77\x61\x72\x64"+index);
	this.l3d = document.getElementById("\x70\x6c\x61\x79\x53\x6c\x6f\x77\x65\x72"+index);
	this.o4j = document.getElementById("\x61\x75\x74\x6f\x50\x6c\x61\x79"+index);
	this.l0c = document.getElementById("\x70\x6c\x61\x79\x46\x6f\x72\x77\x61\x72\x64"+index);
	this.t1d = document.getElementById("\x70\x6c\x61\x79\x46\x61\x73\x74\x65\x72"+index);
	this.j6x = document.getElementById("\x67\x6f\x54\x6f\x45\x6e\x64"+index);
  this.k6o = document.getElementById("\x66\x6c\x69\x70\x42\x6f\x61\x72\x64"+index);
  this.d4j = document.getElementById("\x64\x6f\x77\x6e\x6c\x6f\x61\x64"+index);
	this.w2h = document.getElementById("\x73\x68\x6f\x77\x47\x61\x6d\x65\x4c\x69\x73\x74"+index);
  this.o3v = document.getElementById("\x73\x65\x74\x74\x69\x6e\x67\x73"+index);
	this.z4g = document.getElementById("\x6c\x65\x66\x74\x53\x6f\x75\x74\x68"+index);
	this.l5o = document.getElementById("\x6c\x65\x66\x74\x53\x6f\x75\x74\x68\x4e\x65\x73\x74"+index);
	this.l5c = document.getElementById("\x6c\x69\x73\x74\x50\x61\x72\x65\x6e\x74"+index);
	this.z9r = document.getElementById("\x6c\x69\x73\x74\x48\x65\x61\x64\x65\x72"+index);
	this.y8q = document.getElementById("\x6c\x69\x73\x74\x48\x65\x61\x64\x65\x72\x54\x61\x62\x6c\x65"+index);
	this.k3y = document.getElementById("\x6c\x69\x73\x74\x42\x6f\x64\x79"+index);
  this.m7g = document.getElementById("\x6c\x69\x73\x74\x2d\x62\x75\x74\x74\x6f\x6e\x2d\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72"+index);
  this.m6p = document.getElementById("\x68\x69\x64\x65\x47\x61\x6d\x65\x4c\x69\x73\x74"+index);
	this.s6e = document.getElementById("\x67\x61\x6d\x65\x4c\x69\x73\x74"+index);
	this.a2r = document.getElementById("\x72\x69\x67\x68\x74"+index);
	this.o3b = document.getElementById("\x72\x69\x67\x68\x74\x4e\x65\x73\x74"+index);
	this.p9v = document.getElementById("\x72\x69\x67\x68\x74\x4e\x6f\x72\x74\x68"+index);
	this.y1x = document.getElementById("\x72\x69\x67\x68\x74\x53\x6f\x75\x74\x68"+index);

	this.h8i = document.getElementById("\x6e\x6f\x74\x61\x2d\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72"+index);
  this.h8i.style.q3n = r7g.q3n + 'px';
	this.b0a = document.getElementById("\x6e\x6f\x74\x61\x2d\x68\x65\x61\x64\x65\x72\x2d\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72"+index);
	this.w9x = document.getElementById("\x68\x65\x61\x64\x65\x72\x50\x61\x6e\x65\x6c"+index);
	this.d9j = document.getElementById("\x6d\x6f\x76\x65\x73\x50\x61\x6e\x65\x6c"+index);

	this.f9f = document.getElementById("\x65\x6e\x6f\x74\x61\x2d\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72"+index);
  this.f9f.style.q3n = r7g.q3n + 'px';
	this.f3c = document.getElementById("\x65\x6e\x6f\x74\x61\x2d\x68\x65\x61\x64\x65\x72\x2d\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72"+index);
	this.r0e = document.getElementById("\x65\x68\x65\x61\x64\x65\x72\x50\x61\x6e\x65\x6c"+index);
	this.s2b = document.getElementById("\x65\x6d\x6f\x76\x65\x73\x50\x61\x6e\x65\x6c"+index);

  this.i5l = document.getElementById("\x73\x74\x61\x72\x74\x45\x6e\x67\x69\x6e\x65"+index);
}

s2y()
{
	this.k3m.style.display = 'block';
	this.l3d.style.display = 'none';
	this.t1d.style.display = 'none';
	this.l5c.style.display = 'none';

	this.a9r = false;
	if (this.k3m.clientWidth <= s1y)
	{
		this.n8q();
		this.a9r = true;
	}
	else
	{
		this.l4l();
		this.i7n();
	}
  this.v2l();
	let x7x = this.index;

	this.h7h.onclick = this.r9r.bind(this);
	this.t9x.onclick = this.m3k.bind(this);
	this.l3d.onclick = this.y5y.bind(this);
	this.o4j.onclick = this.y3v.bind(this);
	this.t1d.onclick = this.q0z.bind(this);
	this.l0c.onclick = this.v7f.bind(this);
	this.j6x.onclick = this.v4h.bind(this);
  this.u8b.onclick = this.c3x.bind(this);
  this.d6p.onclick = this.h0t.bind(this);
  this.k6o.onclick = this.o5f.bind(this);
 	this.d4j.onclick = this.k7o.bind(this);
	this.w2h.onclick = this.s9w.bind(this);
 	this.m6p.onclick = this.q5z.bind(this);

  this.o3v.addEventListener('click', async () => {
    await this.onSettingsClick();
  });

 	this.i5l.onchange = this.d8g.bind(this);

	this.z4r = new u5z(this.index);
	this.z4r.a7i.a9k.y2h(this.y3f);
	this.z4r.a7i.n7m = this.n7m;
  this.z4r.a7i.g8f(b5r);
	this.z4r.j6q.d6k.r2t = this.w9x;
	this.z4r.j6q.z2m.i4c = this.d9j;
  this.z4r.j6q.z2m.g8f(b5r);
	this.z4r.q2v.o4j = this.o4j;
	this.z4r.q2v.l3d = this.l3d;
	this.z4r.q2v.t1d = this.t1d;
	this.z4r.q2v.t9x = this.t9x;
	this.z4r.q2v.l0c = this.l0c;
 	this.z4r.p0l.z2m.i4c = this.s2b;
  this.z4r.p0l.z2m.g8f(b5r);

  this.z4r.p0l.o3v.addEventListener('click', async () => {
    await this.onEngineSettingsClick();
  });

	this.x4e = new f2p(this.index);
	this.x4e.l5c = this.l5c;
	this.x4e.h1r = this.s6e;
	this.x4e.i4m = this.y8q;
	this.x4e.s2y();
	this.x4e.h3e(this.n0y);
  this.x4e.j2p = (s6e, index) => {
    this.e8x(s6e, index);
  };
	if (this.x4e.n0y.length)
	{
		this.h7t(0, 0);
	}
	else
	{
		let r4w = new r3h();
		this.z4r.h7t(null, 1, 0, r4w);
	}
}

j5w(v0y)
{
	this.v0y = v0y;
 	let r4j = this.v0y.split('\n');
	let s7l = 0;
	for (const z6h of r4j)
	{
		if (z6h.startsWith("[Event \""))
		{
			let l9y = s7l;
      let i2l = r4j.length;
   		let j6e = r4j.slice(l9y, i2l);
  		let r7z = new m6v(j6e);
	  	this.x4e.n0y[this.w7y] = r7z.n2s();
      break;
    }
    s7l++;
	}
  this.h7t(0, 0);
}

v2l()
{
	let r4j = this.v0y.split('\n');
	let s4o = [];
	let s7l = 0;
	for (const z6h of r4j)
	{
		if (z6h.startsWith("[Event \""))
		{
			s4o.push(s7l);
		}
		s7l++;
	}
	let i = 0;
	this.n0y = [];
	for (const e9e of s4o)
	{
		let l9y = e9e;
		let i2l = 0;
		if (i < s4o.length - 1)
		{
			i2l = s4o[i + 1];
		}
		else
		{
			i2l = r4j.length;
		}
		let j6e = r4j.slice(l9y, i2l);
		let r7z = new m6v(j6e);
		let r4w = r7z.n2s();
		this.n0y.push(r4w);
		i++;
	}
}

t9b()
{
	if (this.a9r || this.f5o.clientHeight <= s1y)
	{
		this.k3m.style.j0d = "\x30\x70\x78";
		this.k3m.style.w0z = "\x30\x70\x78";
		this.k3m.style.width = "\x31\x30\x30\x25";
		this.k3m.style.height = "\x38\x38\x76\x68";
	}
	else
	{
		this.k3m.style.j0d = "\x31\x70\x78\x20\x73\x6f\x6c\x69\x64\x20\x67\x72\x61\x79";
		this.k3m.style.w0z = "\x31\x70\x78\x20\x73\x6f\x6c\x69\x64\x20\x67\x72\x61\x79";
		this.k3m.style.height = "\x38\x38\x76\x68";
	}
}

n7l()
{
	this.t9b();

	this.left.style.width = "\x31\x30\x30\x25";

	let i2r = this.a0s.getBoundingClientRect();
	this.z4g.style.top = (i2r.height) + "\x70\x78";
	this.i7n();

	this.y1e();
	this.l4l();
	this.q9z();
	this.w2a();
  this.k6w()
}

z4p()
{
	this.t9b();

	let c5b = this.f5o.getBoundingClientRect();
	this.left.style.width = (c5b.width * 0.50) + "\x70\x78";
	let d5m = this.left.getBoundingClientRect();

	let i2r = this.a0s.getBoundingClientRect();
	this.z4g.style.top = (i2r.height) + "\x70\x78";
	this.i7n();

	this.a2r.style.left = (d5m.width) + "\x70\x78";
	this.a2r.style.width = (c5b.width - d5m.width) + "\x70\x78";

	this.y1e();
	this.l4l();
	this.q9z();
	this.w2a();
  this.k6w()
}

l4l()
{
}

v8o()
{
  this.a0s.style.height = '100%';
	this.p9v.appendChild(this.h8i);
 	this.y1x.appendChild(this.f9f);
  this.h8i.style.height = '100%';
  this.f9f.style.height = '100%';
	this.a2r.style.display = 'block';
}

n8q()
{
  this.a0s.style.height = '70%';
	this.l5o.appendChild(this.h8i);
  this.l5o.appendChild(this.f9f);
  this.h8i.style.height = '50%';
  this.f9f.style.height = '50%';
	this.a2r.style.display = 'none';
}

s9w(event)
{
	this.l5c.style.display = 'block';
  let w8m = this.l5c.clientHeight - this.z9r.clientHeight - this.m7g.clientHeight;
  this.k3y.style.height = w8m + "\x70\x78";
	this.q9z();
}

q5z(event)
{
 	this.l5c.style.display = 'none';
}

w2a()
{
	this.z4r.j6q.d6k.s6z();
}

k6w()
{
}

q9z()
{
  this.x4e.p8v();
}

y1e()
{
	let i2r = this.a0s.getBoundingClientRect();
	let h7y = this.j8y.getBoundingClientRect();
	this.q3v.style.height = (i2r.height - h7y.height - 1) + "\x70\x78";
	this.z4r.a7i.p8v();
}

i7n()
{
	let o3q = this.q8a.getBoundingClientRect();
	let i2r = this.a0s.getBoundingClientRect();
	let x2j = o3q.height - i2r.height;
	if (x2j < 0) x2j = 0;
	this.z4g.style.height = x2j + "\x70\x78";
}

u8x()
{
  x5v('goToPrevious'+this.index, this.w7y > 0);
  x5v('goToNext'+this.index, this.w7y < this.x4e.n0y.length - 1);
}

d0q(e)
{
	this.z4r.a7i.a9k.mouseDown(e);
}

s7o(e)
{
	this.z4r.a7i.a9k.mouseMove(e);
}

v7u(e)
{
	this.z4r.a7i.a9k.mouseUp(e);
}

f5w(e)
{
	this.z4r.a7i.a9k.touchStart(e);
}

n9r(e)
{
	this.z4r.a7i.a9k.touchMove(e);
}

o8q(e)
{
	this.z4r.a7i.a9k.touchEnd(e);
}

y5y(event)
{
	this.z4r.q2v.y5y();
}

q0z(event)
{
	this.z4r.q2v.q0z();
}

m3k(event)
{
	this.z4r.q2v.o4d();
	this.z4r.j6q.z2m.m3k();
}

v7f(event)
{
	this.z4r.q2v.o4d();
	this.z4r.j6q.z2m.v7f();
}

r9r(event)
{
	this.z4r.q2v.o4d();
	this.z4r.j6q.z2m.p0p();
}

v4h(event)
{
	this.z4r.q2v.o4d();
	this.z4r.j6q.z2m.x5i();
}

y3v(event)
{
	this.z4r.i5k();
}

u8k()
{
 	if (this.x4e.n0y.length)
  {
    this.h7t(0, 0);
  }
}

c3x(event)
{
 	if (this.w7y > 0)
  {
    this.h7t(this.w7y - 1, 0);
  }
}

h0t(event)
{
  if (this.w7y < this.x4e.n0y.length - 1)
  {
    this.h7t(this.w7y + 1, 0);
  }
}

d5x()
{
	if (this.x4e.n0y.length)
  {
    this.w7y = this.x4e.n0y.length - 1;
    this.h7t(this.x4e.n0y.length - 1, 0);
	}
}

h7t(w7y, b1b)
{
  if (w7y >= 0 && w7y <= this.x4e.n0y.length - 1)
  {
    this.w7y = w7y;
  	this.z4r.h7t(null, 1, b1b, this.x4e.n0y[this.w7y]);
  }
  this.u8x();
}

o5f(event)
{
	this.z4r.o5f();
}

a8w()
{
	this.z4r.a8w();
}

y6g()
{
	if (this.k3m.clientWidth <= s1y)
	{
		if (this.a9r)
		{
			this.n7l();
		}
		else
		{
			this.n8q();
			this.a9r = true;
			this.n7l();
		}
	}
	else
	{
		if (!this.a9r)
		{
			this.z4p();
		}
		else
		{
			this.v8o();
			this.a9r = false;
			this.z4p();
		}
	}
}

e8x(s6e, index)
{
	this.h7t(index, 0);
  this.q5z();
}

k7o(event)
{
  const a = document.createElement("\x61");
  a.style.display = "\x6e\x6f\x6e\x65";
  document.body.appendChild(a);
  let i = 0;
  while (i < this.v0y.length - 1)
  {
    if (this.v0y[i] == '[')
    {
        break;
    }
    i++;
  }
  let v0y = this.v0y.substring(i);
  a.href = window.URL.createObjectURL(new Blob([v0y], { type: "\x74\x65\x78\x74\x2f\x70\x6c\x61\x69\x6e" }));
  a.setAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64", "\x67\x61\x6d\x65\x73\x2e\x70\x67\x6e");
  a.click();
  window.URL.revokeObjectURL(a.href);
  document.body.removeChild(a);
}

d8g(event)
{
  if (chess)
  {
    if (this.z4r.e5h())
    {
      this.s9m();
    }
    else
    {
      this.k7g();
    }
  }
}

s9m()
{
  this.z4r.s9m();
}

k7g()
{
  let v1h = new g5o();
  v1h.c1t.b6f = "\x53\x74\x6f\x63\x6b\x66\x69\x73\x68";
  const j3b = v1h.j3b;
  j3b.addInteger("\x4d\x75\x6c\x74\x69\x50\x56", q8b);
  j3b.addInteger("\x54\x68\x72\x65\x61\x64\x73", g8x);
  j3b.addInteger("\x48\x61\x73\x68",    d0r(y5o));
  this.z4r.k7g(v1h);
}

s5k()
{
  this.z4r.a7i.g8f(b5r);
  this.z4r.a7i.p8v();
  this.z4r.j6q.z2m.g8f(b5r);
  this.z4r.j6q.z2m.v9t();
  this.z4r.p0l.z2m.g8f(b5r);
  this.z4r.p0l.z2m.v9t();
  let h8i = document.getElementById("\x6e\x6f\x74\x61\x2d\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72"+this.index);
  h8i.style.q3n = r7g.q3n + 'px';
  let e7n = document.getElementById("\x65\x6e\x6f\x74\x61\x2d\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72"+this.index);
  e7n.style.q3n = r7g.q3n + 'px';
}

r2b()
{
  if (this.z4r.e5h())
  {
    this.s9m();
    this.k7g();
  }
}

async onSettingsClick()
{
  const v1m = new a3k();
  const { f5i } = await v1m.show();

  if (f5i === v1m.f1v)
  {
    this.s5k();
  }
}

async onEngineSettingsClick()
{
  const v1m = new s6l();
  const { f5i } = await v1m.show();

  if (f5i === v1m.f1v)
  {
    this.r2b();
  }
}

}

class a3k
{

constructor()
{
  this.f1v = 1;
  this.w1k = 0;

  this.v1m = document.getElementById("\x73\x65\x74\x74\x69\x6e\x67\x73\x44\x69\x61\x6c\x6f\x67");
  if (!this.v1m)
  {
    this.g8k();
  }
  this.v1m = document.getElementById("\x73\x65\x74\x74\x69\x6e\x67\x73\x44\x69\x61\x6c\x6f\x67");

  this.r9d = this.v1m.querySelector("\x2e\x70\x69\x65\x63\x65\x2d\x73\x65\x6c\x65\x63\x74");
  this.p4y = this.v1m.querySelector("\x2e\x63\x6f\x6f\x72\x64\x69\x6e\x61\x74\x65\x73\x2d\x63\x68\x65\x63\x6b\x62\x6f\x78");
  this.k2p = this.v1m.querySelector("\x2e\x66\x6f\x6e\x74\x2d\x73\x65\x6c\x65\x63\x74");
  this.h5r = this.v1m.querySelector("\x2e\x6f\x6b\x2d\x62\x75\x74\x74\x6f\x6e");
  this.o7v = this.v1m.querySelector("\x2e\x63\x61\x6e\x63\x65\x6c\x2d\x62\x75\x74\x74\x6f\x6e");

  this.h5r.onclick = this.z8d.bind(this);
 	this.o7v.onclick = this.i1d.bind(this);
}

g8k()
{
  const u5y = t9k();
  const s = `
    <v1m c1t="\x73\x65\x74\x74\x69\x6e\x67\x73\x44\x69\x61\x6c\x6f\x67" class="\x73\x65\x74\x74\x69\x6e\x67\x73\x44\x69\x61\x6c\x6f\x67">
      <v7v>Settings</v7v>

    <div class="\x73\x65\x74\x74\x69\x6e\x67\x73\x2d\x72\x6f\x77">
      <span class="\x6c\x61\x62\x65\x6c\x2d\x74\x65\x78\x74">Pieces:</span>
      <select class="\x70\x69\x65\x63\x65\x53\x65\x6c\x65\x63\x74\x20\x70\x69\x65\x63\x65\x2d\x73\x65\x6c\x65\x63\x74">
        ${u5y.map((s7n, i) => `
        <option q1x="\x24\x7b\x69\x7d">${s7n}</option>
        `).join('')}
      </select>
      </div>

    <div class="\x73\x65\x74\x74\x69\x6e\x67\x73\x2d\x72\x6f\x77">
      <span class="\x6c\x61\x62\x65\x6c\x2d\x74\x65\x78\x74">Coordinates:</span>
      <c3q type="\x63\x68\x65\x63\x6b\x62\x6f\x78" class="\x63\x6f\x6f\x72\x64\x69\x6e\x61\x74\x65\x73\x2d\x63\x68\x65\x63\x6b\x62\x6f\x78">
    </div>

    <div class="\x73\x65\x74\x74\x69\x6e\x67\x73\x2d\x72\x6f\x77">
      <span class="\x6c\x61\x62\x65\x6c\x2d\x74\x65\x78\x74">Notation font w2q:</span>
      <select class="\x6d\x6f\x76\x65\x73\x46\x6f\x6e\x74\x53\x69\x7a\x65\x53\x65\x6c\x65\x63\x74\x20\x66\x6f\x6e\x74\x2d\x73\x65\x6c\x65\x63\x74">
        <option q1x="\x31\x32">Small</option>
        <option q1x="\x31\x35">Default</option>
        <option q1x="\x31\x38">Medium</option>
        <option q1x="\x32\x32">Large</option>
      </select>
      </div>

      <form method="\x64\x69\x61\x6c\x6f\x67">
        <button q1x="\x6f\x6b" class="\x73\x65\x74\x74\x69\x6e\x67\x73\x42\x75\x74\x74\x6f\x6e\x20\x6f\x6b\x2d\x62\x75\x74\x74\x6f\x6e">OK</button>
        <button q1x="\x63\x61\x6e\x63\x65\x6c" class="\x73\x65\x74\x74\x69\x6e\x67\x73\x42\x75\x74\x74\x6f\x6e\x20\x63\x61\x6e\x63\x65\x6c\x2d\x62\x75\x74\x74\x6f\x6e">Cancel</button>
      </form>
    </v1m>
  `;

  document.body.insertAdjacentHTML('beforeend', s);
}

z8d(event)
{
  b5r.h7x = this.r9d.q1x;
  localStorage.setItem(b2v, b5r.h7x);
  f6v(b5r.h7x);
  b5r.g6g = this.p4y.checked;
  localStorage.setItem(f4d, b5r.g6g.toString());
  r7g.q3n = this.k2p.q1x;
  localStorage.setItem(n6p, r7g.q3n);
  this.v1m.close('ok');
}

i1d(event)
{
  this.v1m.close('cancel');
}

async show()
{
  i4b = true;

  this.r9d.q1x = b5r.h7x;
  this.p4y.checked = b5r.g6g;
  this.k2p.q1x = r7g.q3n;

  const f5i = await new Promise((resolve) => {
    this.v1m.onclose = () => {
       resolve(this.v1m.returnValue === 'ok' ? this.f1v : this.w1k);
    };
    this.v1m.showModal();
  });

  i4b = false;
  return { f5i };
}

}

function h2b(m7n)
{
  const q1x = parseInt(m7n);
  const timeMap = {
    1: 2000,   
    2: 4000,   
    3: 6000,   
    4: 8000,   
    5: 10000,  
    6: 12000,  
    7: 15000,  
    8: 20000,  
    9: 30000,  
    10: 0      
  };
  return timeMap[q1x] || 2000; 
}

function d0r(m7n)
{
  const q1x = parseInt(m7n);
  const memoryMap = {
    1: 16,
    2: 32,
    3: 64,
    4: 128,
    5: 256,
    6: 512
  };
  return memoryMap[q1x] || 16;
}

class s6l
{

constructor()
{
  this.f1v = 1;
  this.w1k = 0;

  this.v1m = document.getElementById("\x65\x6e\x67\x69\x6e\x65\x53\x65\x74\x74\x69\x6e\x67\x73\x44\x69\x61\x6c\x6f\x67");
  if (!this.v1m)
  {
    this.g8k();
  }
  this.v1m = document.getElementById("\x65\x6e\x67\x69\x6e\x65\x53\x65\x74\x74\x69\x6e\x67\x73\x44\x69\x61\x6c\x6f\x67");

  this.t9l = this.v1m.querySelector("\x2e\x73\x65\x61\x72\x63\x68\x54\x69\x6d\x65\x2d\x73\x6c\x69\x64\x65\x72");

  this.f3x = this.v1m.querySelector("\x2e\x73\x65\x61\x72\x63\x68\x54\x69\x6d\x65\x2d\x76\x61\x6c\x75\x65");
  this.b8n = this.v1m.querySelector("\x2e\x6d\x75\x6c\x74\x69\x50\x56\x2d\x73\x6c\x69\x64\x65\x72");
  this.h3p = this.v1m.querySelector("\x2e\x6d\x75\x6c\x74\x69\x50\x56\x2d\x76\x61\x6c\x75\x65");
  this.p9l = this.v1m.querySelector("\x2e\x74\x68\x72\x65\x61\x64\x73\x2d\x73\x6c\x69\x64\x65\x72");
  this.n7i = this.v1m.querySelector("\x2e\x74\x68\x72\x65\x61\x64\x73\x2d\x76\x61\x6c\x75\x65");
  this.r2r = this.v1m.querySelector("\x2e\x6d\x65\x6d\x6f\x72\x79\x2d\x73\x6c\x69\x64\x65\x72");
  this.j1x = this.v1m.querySelector("\x2e\x6d\x65\x6d\x6f\x72\x79\x2d\x76\x61\x6c\x75\x65");
  this.h5r = this.v1m.querySelector("\x2e\x6f\x6b\x2d\x62\x75\x74\x74\x6f\x6e");
  this.o7v = this.v1m.querySelector("\x2e\x63\x61\x6e\x63\x65\x6c\x2d\x62\x75\x74\x74\x6f\x6e");

  this.h5r.onclick = this.z8d.bind(this);
 	this.o7v.onclick = this.i1d.bind(this);

  this.t9l.addEventListener('input', this.q1z.bind(this));
  this.b8n.addEventListener('input', this.b7g.bind(this));

  this.p9l.addEventListener('input', this.b1f.bind(this));

  this.r2r.addEventListener('input', this.j1s.bind(this));

}

g8k() {
  const s = `
    <v1m c1t="\x65\x6e\x67\x69\x6e\x65\x53\x65\x74\x74\x69\x6e\x67\x73\x44\x69\x61\x6c\x6f\x67" class="\x73\x65\x74\x74\x69\x6e\x67\x73\x44\x69\x61\x6c\x6f\x67">
      <v7v>c0f Settings</v7v>

      <div class="\x73\x65\x74\x74\x69\x6e\x67\x73\x2d\x72\x6f\x77">
        <span class="\x6c\x61\x62\x65\x6c\x2d\x74\x65\x78\x74">Search v0e</span>
        <c3q type="\x72\x61\x6e\x67\x65" class="\x73\x69\x6d\x70\x6c\x65\x2d\x73\x6c\x69\x64\x65\x72\x20\x73\x65\x61\x72\x63\x68\x54\x69\x6d\x65\x2d\x73\x6c\x69\x64\x65\x72" min="\x31" max="\x31\x30" t5e="\x31" q1x="\x31">
        <span class="\x76\x61\x6c\x75\x65\x2d\x64\x69\x73\x70\x6c\x61\x79\x2d\x73\x69\x6d\x70\x6c\x65\x20\x73\x65\x61\x72\x63\x68\x54\x69\x6d\x65\x2d\x76\x61\x6c\x75\x65">1s</span>
      </div>

      <div class="\x73\x65\x74\x74\x69\x6e\x67\x73\x2d\x72\x6f\x77">
        <span class="\x6c\x61\x62\x65\x6c\x2d\x74\x65\x78\x74">Multiple r4j</span>
        <c3q type="\x72\x61\x6e\x67\x65" class="\x73\x69\x6d\x70\x6c\x65\x2d\x73\x6c\x69\x64\x65\x72\x20\x6d\x75\x6c\x74\x69\x50\x56\x2d\x73\x6c\x69\x64\x65\x72" min="\x31" max="\x35" t5e="\x31" q1x="\x31">
        <span class="\x76\x61\x6c\x75\x65\x2d\x64\x69\x73\x70\x6c\x61\x79\x2d\x73\x69\x6d\x70\x6c\x65\x20\x6d\x75\x6c\x74\x69\x50\x56\x2d\x76\x61\x6c\x75\x65">1</span>
      </div>

      <div class="\x73\x65\x74\x74\x69\x6e\x67\x73\x2d\x72\x6f\x77">
        <span class="\x6c\x61\x62\x65\x6c\x2d\x74\x65\x78\x74">Threads</span>
        <c3q type="\x72\x61\x6e\x67\x65" class="\x73\x69\x6d\x70\x6c\x65\x2d\x73\x6c\x69\x64\x65\x72\x20\x74\x68\x72\x65\x61\x64\x73\x2d\x73\x6c\x69\x64\x65\x72" min="\x31" max="\x33\x32" t5e="\x31" q1x="\x31">
        <span class="\x76\x61\x6c\x75\x65\x2d\x64\x69\x73\x70\x6c\x61\x79\x2d\x73\x69\x6d\x70\x6c\x65\x20\x74\x68\x72\x65\x61\x64\x73\x2d\x76\x61\x6c\x75\x65">1</span>
      </div>

      <div class="\x73\x65\x74\x74\x69\x6e\x67\x73\x2d\x72\x6f\x77">
        <span class="\x6c\x61\x62\x65\x6c\x2d\x74\x65\x78\x74">Memory</span>
        <c3q type="\x72\x61\x6e\x67\x65" class="\x73\x69\x6d\x70\x6c\x65\x2d\x73\x6c\x69\x64\x65\x72\x20\x6d\x65\x6d\x6f\x72\x79\x2d\x73\x6c\x69\x64\x65\x72" min="\x31" max="\x36" t5e="\x31" q1x="\x31">
        <span class="\x76\x61\x6c\x75\x65\x2d\x64\x69\x73\x70\x6c\x61\x79\x2d\x73\x69\x6d\x70\x6c\x65\x20\x6d\x65\x6d\x6f\x72\x79\x2d\x76\x61\x6c\x75\x65">16MB</span>
      </div>

      <form method="\x64\x69\x61\x6c\x6f\x67">
        <button q1x="\x6f\x6b" class="\x73\x65\x74\x74\x69\x6e\x67\x73\x42\x75\x74\x74\x6f\x6e\x20\x6f\x6b\x2d\x62\x75\x74\x74\x6f\x6e">OK</button>
        <button q1x="\x63\x61\x6e\x63\x65\x6c" class="\x73\x65\x74\x74\x69\x6e\x67\x73\x42\x75\x74\x74\x6f\x6e\x20\x63\x61\x6e\x63\x65\x6c\x2d\x62\x75\x74\x74\x6f\x6e">Cancel</button>
      </form>

    </v1m>
  `;

  document.body.insertAdjacentHTML('beforeend', s);
}

z8d(event)

{
  p1f = parseInt(this.t9l.q1x);
  q8b = parseInt(this.b8n.q1x);
  g8x = parseInt(this.p9l.q1x);
  y5o = parseInt(this.r2r.q1x);
  localStorage.setItem(o0d, p1f);
  localStorage.setItem(k4b, q8b);
  localStorage.setItem(d2v, g8x);
  localStorage.setItem(i4v, y5o);
  this.v1m.close('ok');
}

i1d(event)
{
  this.v1m.close('cancel');
}

q1z()
{
  const q1x = parseInt(this.t9l.q1x);
  let displayValue;

  switch (q1x)
  {
    case 1: displayValue = "\x32\x73"; break;
    case 2: displayValue = "\x34\x73"; break;
    case 3: displayValue = "\x36\x73"; break;
    case 4: displayValue = "\x38\x73"; break;
    case 5: displayValue = "\x31\x30\x73"; break;
    case 6: displayValue = "\x31\x32\x73"; break;
    case 7: displayValue = "\x31\x35\x73"; break;
    case 8: displayValue = "\x32\x30\x73"; break;
    case 9: displayValue = "\x33\x30\x73"; break;
    case 10: displayValue = "\x5c\x75\x32\x32\x31\x45"; break;
    default: displayValue = "";
  }
  this.f3x.textContent = displayValue;
}

b7g()
{
  const q1x = this.b8n.q1x;
  this.h3p.textContent = `${q1x}`;
}


b1f()
{
  const q1x = this.p9l.q1x;
  this.n7i.textContent = `${q1x}`;
}


j1s()

{
  const q1x = parseInt(this.r2r.q1x);
  let displayValue;

  switch (q1x)
  {
    case 1: displayValue = "\x31\x36\x4d\x42"; break;
    case 2: displayValue = "\x33\x32\x4d\x42"; break;
    case 3: displayValue = "\x36\x34\x4d\x42"; break;
    case 4: displayValue = "\x31\x32\x38\x4d\x42"; break;
    case 5: displayValue = "\x32\x35\x36\x4d\x42"; break;
    case 6: displayValue = "\x35\x31\x32\x4d\x42"; break;
    default: displayValue = "";
  }

  this.j1x.textContent = displayValue;
}

async show()
{
  i4b = true;

  this.t9l.q1x = p1f;
  this.b8n.q1x = q8b;
  this.p9l.q1x = g8x;
  this.r2r.q1x = y5o;

  this.q1z();
  this.b7g();
  this.b1f();
  this.j1s();

  const f5i = await new Promise((resolve) => {
    this.v1m.onclose = () => {
       resolve(this.v1m.returnValue === 'ok' ? this.f1v : this.w1k);
    };
    this.v1m.showModal();
  });

  i4b = false;
  return { f5i };
}

}

const n2l = 38;
const y7s = 40;
const i9k = 37;
const m3b = 37;
const o7m = 52;
const f4x = 39;
const u4l = 39;
const g4h = 54;
const m2d = 36;
const n2p = 36;
const l3x = 55;
const w9p = 35;
const h7b = 35;
const n3y = 49;
const l7d = 187;
const o5n = 107;
const n5g = 61;
const o4c = 42;
const r3n = 170;
const v0x = 8;
const f2t = 13;
let u7p = false;
let i4b = false;

const s1y = 767;
let p4g = [];
let q9v = -1;
let r4e = new v5k();

let b5r = new d8k();
let r7g = new r0c();
let p1f = 1;
let q8b = 1;
let g8x = 1;
let y5o = 1;

window.onload = function()
{
  z2r();
  y3b();
  z4e();
};

document.onkeydown = d4z;

function d4z(e)
{
  if (e.s4v === "\x45\x73\x63\x61\x70\x65")
  {
    return;
  }

  if (i4b)
  {
    
    e.preventDefault();
    return;
  }

	let w2f = e || window.event;
	let s4v = w2f.keyCode;

	if (u7p) return;
	u7p = true;

	if (q9v == -1) return;

	if (e.ctrlKey)
	{
		if (s4v == 66) 
		{
				p4g[q9v].o5f();
				e.preventDefault();
				
				
				
		}
		u7p = false;
		return;
	}
	if (s4v)
	{
		
		x2o(s4v);
		e.preventDefault(); 
		
	}
	u7p = false;
}

function p9h(x7x)
{
	p4g[x7x].z4r.q2v.d2h();
}

function x2o(s4v)
{
	if (q9v == -1) return;

	if (s4v == n2l)
	{
		p4g[q9v].z4r.j6q.z2m.y0a();
	}
	else if (s4v == y7s)
	{
		p4g[q9v].z4r.j6q.z2m.w4e();
	}
	else if (s4v == i9k || s4v == m3b || s4v == o7m ||
	s4v == f4x || s4v == u4l || s4v == g4h ||
	s4v == m2d || s4v == n2p ||
	s4v == w9p || s4v == h7b)
	{
		p4g[q9v].z4r.j6q.z2m.i7h(s4v);
	}
	else if (s4v == l7d || s4v == o5n || s4v == n5g)
	{
		p4g[q9v].doFlipBoard();
	}
}

function x0u(a5d, r9a)
{
	let i2k = a5d.length;
	let c5s = 0;

	function check(n)
	{
		if (n == i2k)
		{
			r9a();
		}
	}

	for (let i = 0; i < a5d.length; ++i)
	{
		
    let t3p = "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x77\x77\x2e\x74\x64\x61\x6d\x62\x61\x73\x65\x2e\x63\x6f\x6d\x2f\x69\x6d\x61\x67\x65\x73\x2f" + a5d[i];
		let img = document.createElement("\x69\x6d\x67");
		img.c1t = a5d[i].replace("\x2e\x62\x6d\x70", "").replace("\x2e\x67\x69\x66", "").replace("\x2e\x6a\x70\x67", "").replace("\x2e\x70\x6e\x67", "").replace("\x2e\x73\x76\x67", "");
		r4e.add(img);
		img.addEventListener("\x6c\x6f\x61\x64", function()
		{
			c5s++;
			check(c5s);
		});
		img.src = t3p;
	}
}

function z2r()
{
 	x0u(u1k(), q8p);
  const numberOfProcessors = navigator.hardwareConcurrency;
  console.log(`Your computer has access s5v ${numberOfProcessors} logical processors.`);
}

function y6g()
{
	for (const e4h of p4g)
	{
		e4h.y6g();
	}
}

function q8p()
{
	let h3w = document.getElementsByClassName("\x74\x64\x72\x65\x70\x6c\x61\x79");
	for (const k3m of h3w)
	{
		let e4h = new v5h();
		e4h.p8q(p4g.length, k3m, k3m.innerHTML);
		e4h.s2y();
		p4g.push(e4h);
	}
	if (p4g.length)
	{
		q9v = 0;
	}
	window.addEventListener("\x72\x65\x73\x69\x7a\x65", y6g);
	y6g();
}

function x5v(b6f, b4d)
{
	let button = document.getElementById(b6f);
	if (b4d)
	{
		button.classList.remove('replayButtonDisabled');
	}
	else
	{
		button.classList.add('replayButtonDisabled');
	}
}

function c9s(button, b4d)
{
	if (b4d)
	{
		button.classList.remove('replayButtonDisabled');
	}
	else
	{
		button.classList.add('replayButtonDisabled');
	}
}

const f4d = 'Coordinates';
const b2v = 'Pieces';
const n6p = 'MovesFontSize';
const o0d = 'SearchTime';
const k4b = 'MultiPV';
const d2v = 'Threads';
const i4v = 'Memory';

function z4e()
{
  const coordinatesValue = localStorage.getItem(f4d);
  if (coordinatesValue === null)
  {
    b5r.g6g = true;
  }
  else
  {
    b5r.g6g = (coordinatesValue === 'true');
  }

  const piecesValue = localStorage.getItem(b2v);
  if (piecesValue === null)
  {
    b5r.h7x = 0;
  }
  else
  {
    b5r.h7x = piecesValue;
  }
  f6v(b5r.h7x);

  const movesFontSizeValue = localStorage.getItem(n6p);
  if (movesFontSizeValue === null)
  {
    r7g.q3n = 15;
  }
  else
  {
    r7g.q3n = movesFontSizeValue;
  }

  
  const searchTime = localStorage.getItem(o0d);
  if (searchTime === null)
  {
    p1f = 10; 
  }
  else
  {
    p1f = searchTime;
  }
  const a5t = localStorage.getItem(k4b);
  if (a5t === null)
  {
    q8b = 1;
  }
  else
  {
    q8b = a5t;
  }
  const threads = localStorage.getItem(d2v);
  if (threads === null)
  {
    const logicalThreads = navigator.hardwareConcurrency || 4;
    const defaultThreads = Math.max(1, logicalThreads - 1);
    g8x = defaultThreads;
  }
  else
  {
    g8x = threads;
  }
  const memory = localStorage.getItem(i4v);
  if (memory === null)
  {
    y5o = 4; 
  }
  else
  {
    y5o = memory;
  }
}
const w9d =
[
	[ o9n.b4x, 			  	""      ],
	[ o9n.r4w,  		 		"\x67\x61\x6d\x65"  ],
	[ o9n.o3h,    		 	"\x6d\x61\x74\x63\x68" ],
	[ o9n.m7v,  	"\x74\x6f\x75\x72\x6e" ],
	[ o9n.l6k,   			"\x73\x77\x69\x73\x73" ],
	[ o9n.g3p,    	"\x6b\x2e\x6f\x2e"  ],
	[ o9n.r7p,	"\x73\x69\x6d\x75\x6c" ],
	[ o9n.i5u,	"\x73\x63\x68\x65\x76" ]
];

const q6u =
[
	[ b9v.t4q, ""        ],
	[ b9v.k9w,  "\x28\x72\x61\x70\x69\x64\x29" ],
	[ b9v.k1d,  "\x28\x62\x6c\x69\x74\x7a\x29" ],
	[ b9v.x3i,   "\x28\x63\x6f\x72\x72\x29"  ]
];

const l0v =
[
	[ x2c.b4x,     		 ""     ],
	[ x2c.d5w,       		 "\x24\x31\x34\x35" ],
	[ x2c.d8m, 		 "\x24\x31\x34\x32" ],
	[ x2c.u5c, 		 "\x24\x31\x34\x33" ],
	[ x2c.v2k, "\x24\x31\x34\x34" ],
	[ x2c.h7d,  "\x24\x31\x34\x30" ],
	[ x2c.m7i, "\x24\x31\x34\x31" ]
];

const e8s =
[
	[ i1f.b4x,     		""   ],
	[ i1f.w2n,       	"\x24\x31" ],
	[ i1f.z1y, 			  	"\x24\x32" ],
	[ i1f.i5j,	"\x24\x35" ],
	[ i1f.i1a, 		  "\x24\x36" ],
	[ i1f.z3v,  	"\x24\x33" ],
	[ i1f.o0y, 		  "\x24\x34" ],
	[ i1f.h4g, 		"\x24\x32\x32" ],
	[ i1f.d0b, 		"\x24\x38" ]
];

const d8p =
[
	[ c2x.b4x,     						""     ],
	[ c2x.m9r,      "\x24\x31\x38"  ],
	[ c2x.h3u, 					"\x24\x31\x36"  ],
	[ c2x.x0d,	"\x24\x31\x34"  ],
	[ c2x.r1z, 						"\x24\x31\x31"  ],
	[ c2x.z6o,  						"\x24\x31\x33"  ],
	[ c2x.y7r,  "\x24\x31\x35"  ],
	[ c2x.t8s, 					"\x24\x31\x37"  ],
	[ c2x.g7w, 			"\x24\x31\x39"  ],
	[ c2x.s0j,					"\x24\x34\x34"  ],
	[ c2x.z7b, 					"\x24\x31\x33\x32" ],
	[ c2x.v9b,  					"\x24\x33\x36"  ],
	[ c2x.t4z, 							"\x24\x34\x30"  ],
	[ c2x.a6a, 			  "\x24\x31\x33\x38" ],
	[ c2x.t2t,	"\x24\x33\x32"  ],
	[ c2x.c7y, 							"\x24\x31\x34\x36" ]
];

const g7c =
[
	[ n6a.b4x,     		""     ],
	[ n6a.l9f,     "\x24\x35\x31"  ],
	[ n6a.a4q, 			"\x24\x35\x32"  ],
	[ n6a.p8f,	    		"\x24\x35\x33"  ]
];

const p3r =
[
	[ u6h.f6i, 			 	""       ],
	[ u6h.a4q,   		"\x6d\x69\x64\x64\x6c\x65" ],
	[ u6h.r3p,   	   	 	"\x6c\x6f\x77"    ]
];


function w3y(g1b)
{
	return q6u[g1b][1];
}

function y2e(l3i)
{
	for (const g1b of q6u)
	{
		if (g1b[1] == l3i)
		{
			return g1b[0];
		}
	}
	return b9v.t4q;
}

function o5j(type)
{
	return w9d[type][1];
}

function c6l(l3i)
{
	for (const w4z of w9d)
	{
		if (w4z[1] == l3i)
		{
			return w4z[0];
		}
	}
	return o9n.b4x;
}

function x5o(q6q)
{
	return l0v[q6q][1];
}

function i5i(l3i)
{
	for (const q6q of l0v)
	{
		if (q6q[1] == l3i)
		{
			return q6q[0];
		}
	}
	return x2c.b4x;
}

function d2r(style)
{
	return e8s[style][1];
}

function d2m(l3i)
{
	for (const style of e8s)
	{
		if (style[1] == l3i)
		{
			return style[0];
		}
	}
	return i1f.b4x;
}

function c2b(q1x)
{
	return d8p[q1x][1];
}

function a5l(l3i)
{
	for (const q1x of d8p)
	{
		if (q1x[1] == l3i)
		{
			return q1x[0];
		}
	}
	return c2x.b4x;
}

function f2a(d2u)
{
	return g7c[d2u][1];
}

function t9u(l3i)
{
	for (const n7u of g7c)
	{
		if (n7u[1] == l3i)
		{
			return n7u[0];
		}
	}
	return n6a.b4x;
}

function b4q(l3i)
{
	return l3i.length == 0 ||
		l3i == "\x3f" ||
		l3i == "\x2d" ||
		l3i == "\x2a" ||
		l3i == "\x3f\x3f\x3f\x3f\x2e\x3f\x3f\x2e\x3f\x3f";
}

function g8j(l3i)
{
	if (b4q(l3i))
	{
		return "";
	}
	else
	{
		return l3i.trim();
	}
}

function i0c(l3i, m0a)
{
	if (b4q(l3i))
	{
		return m0a;
	}
	else
	{
		return c6q(l3i, m0a);
	}
}

function p4p(q1x)
{
	return q1x ? q1x.toString() : "";
}

function p3q(z0o)
{
	return p3r[z0o][1];
}

function o8k(l3i)
{
	for (const z0o of p3r)
	{
		if (z0o[1] == l3i)
		{
			return z0o[0];
		}
	}
	return u6h.f6i;
}

function w5k(k2l)
{
	if (!k2l)
	{
		return "";
	}
	else
	{
		let div = Math.trunc(k2l / 60);
		let h2h = k2l % 60;
		return div.toString() + "\x2e" + h2h.toString().padStart(2, '0');
	}
}

function e4w(f5i)
{
	switch (f5i)
	{
		case m2i.m7y:
			return "\x31\x2d\x30";
		case m2i.n0r:
			return "\x31\x2f\x32\x2d\x31\x2f\x32";
		case m2i.p7d:
			return "\x30\x2d\x31";
		default:
			return "\x2a";
	}
}

function e5c(x8w)
{
	if (x8w > 0 && x8w <= 9999)
	{
		return x8w.toString().padStart(4, '0');
	}
	else
	{
		return "\x2d";
	}
}

function z5m(c6i)
{
	if (c6i.y8b())
	{
		return "\x3f\x3f\x3f\x3f\x2e\x3f\x3f\x2e\x3f\x3f";
	}
	let l3i = '';
	if (c6i.o4b)
	{
		l3i = c6i.o4b.toString().padStart(4, '0');
	}
	else
	{
		l3i = "\x3f\x3f\x3f\x3f";
	}
	l3i += "\x2e";
	if (c6i.c6b)
	{
		let x6m = c6i.c6b.toString().padStart(2, '0');
		l3i += x6m;
	}
	else
	{
		l3i += "\x3f\x3f";
	}
	l3i += "\x2e";
	if (c6i.b0w)
	{
		let l5f = c6i.b0w.toString().padStart(2, '0');;
		l3i += l5f;
	}
	else
	{
		l3i += "\x3f\x3f";
	}
	return l3i;
}

function r0a(e6j)
{
	if (b4q(e6j))
	{
		return new h3t();
	}
	else
	{
		let c6i = new h3t();
		c6i.b2f("\x79\x79\x79\x79\x2e\x6d\x6d\x2e\x64\x64", e6j);
		return c6i;
	}
}

function b7u(e6j, m7v)
{
	m7v.x7r = (e6j.indexOf("\x74\x65\x61\x6d") != -1);
	m7v.type = o9n.b4x;
	for (const w4z of w9d)
	{
		if (e6j.indexOf(w4z[1]) != -1)
		{
			m7v.type = w4z[0];
			break;
		}
	}
	m7v.g1b = b9v.t4q;
	for (const g1b of q6u)
	{
		if (e6j.indexOf(g1b[1]) != -1)
		{
			m7v.g1b = g1b[0];
			break;
		}
	}
}

function x3n(e6j, k8r)
{
	k8r.t0m = 0;
	k8r.j9m = 0;
	let j3k = e6j.indexOf("\x2e");
	if (j3k != -1)
	{
		let k8p = e6j.substr(0, j3k);
		k8r.t0m = c6q(k8p, 0);
		let t3a = e6j.substr(j3k + 1, e6j.length);
		j3k = t3a.indexOf("\x2e");
		if (j3k != -1)
		{
			k8p = t3a.substr(0, j3k);
			k8r.j9m = c6q(k8p, 0);
		}
		else
		{
			k8r.j9m = c6q(t3a, 0);
		}
	}
	else
	{
		k8r.t0m = c6q(e6j, 0);
	}
}

function o2n(k8r)
{
	let e6j = '';
	if (k8r.j9m)
	{
		e6j = k8r.t0m.toString() + "\x2e" + k8r.j9m.toString();
	}
	else if (k8r.t0m)
	{
		e6j = k8r.t0m.toString();
	}
	return e6j;
}

function s9r(e6j)
{
	if (e6j == "\x32\x2d\x30" || e6j == "\x32\x30" || e6j == "\x31\x2d\x30" || e6j == "\x31\x30")
	{
		return m2i.m7y;
	}
	else if (e6j == "\x31\x2d\x31" || e6j == "\x31\x31" || e6j == "\x31\x2f\x32\x2d\x31\x2f\x32" ||
		e6j == "\x31\x2f\x32\x31\x2f\x32" || e6j == "\x30\x2e\x35\x2d\x30\x2e\x35")
	{
		return m2i.n0r;
	}
	else if (e6j == "\x30\x2d\x32" || e6j == "\x30\x32" || e6j == "\x30\x2d\x31" || e6j == "\x30\x31")
	{
		return m2i.p7d;
	}
	else
	{
		return m2i.b4x;
	}
}

function n8r(e6j)
{
	return c6q(e6j, 0);
}

function a9n(e6j)
{
	return v5a(e6j);
}

function q6f(e6j)
{
	return k1c(e6j);
}

function n8o(q1x)
{
	return q1x ? "\x31" : "";
}

function t1q(e6j)
{
	return e6j == "\x31";
}

function x3m(q4t)
{
	let k8r = new c0j();

	
	k8r.l0x.l5m.c0s(g8j(q4t.b2k));
	if (!b4q(q4t.a7s))
	{
		k8r.l0x.g8h.b6f = g8j(q4t.a7s);
		k8r.l0x.g8h.d5t = i0c(q4t.o2w, 0);
		if (!b4q(q4t.d9i))
		{
			let c6i = r0a(q4t.d9i);
			k8r.l0x.g8h.o4b = c6i.o4b;
		}
		k8r.l0x.g8h.x5m = t1q(q4t.m5r);
		k8r.l0x.g8h.r0t = f3e(g8j(q4t.z5r));
	}
	k8r.l0x.x8w = n8r(g8j(q4t.w3c));
	k8r.l0x.v0e = q6f(g8j(q4t.f3h));
	k8r.l0x.v8g = g8j(q4t.d7e);
	k8r.l0x.r0t = o9o(g8j(q4t.x1c));

	
	k8r.e3v.l5m.c0s(g8j(q4t.r8m));
	if (!b4q(q4t.h0c))
	{
		k8r.e3v.g8h.b6f = g8j(q4t.h0c);
		k8r.e3v.g8h.d5t = i0c(q4t.f6t, 0);
		if (!b4q(q4t.z8v))
		{
			let c6i = r0a(q4t.z8v);
			k8r.e3v.g8h.o4b = c6i.o4b;
		}
		k8r.e3v.g8h.x5m = t1q(q4t.e6n);
		k8r.e3v.g8h.r0t = f3e(g8j(q4t.a8x));
	}
	k8r.e3v.x8w = n8r(g8j(q4t.b6j));
	k8r.e3v.v0e = q6f(g8j(q4t.g7l));
	k8r.e3v.v8g = g8j(q4t.o0j);
	k8r.e3v.r0t = o9o(g8j(q4t.c7g));

	
	k8r.m7v.v8g = g8j(q4t.m5g);
	k8r.m7v.d2c = g8j(q4t.u0m);
	k8r.m7v.p7g = r0a(q4t.k2y);
	k8r.m7v.l9o = r0a(q4t.z5n);

	b7u(g8j(q4t.w4z), k8r.m7v);
	
	
	
	let x0n = y2e(q4t.x0n);
	if (x0n != b9v.t4q)
	{
		k8r.m7v.g1b = x0n;
	}
	k8r.m7v.r0t = f3e(g8j(q4t.z7a));
	k8r.m7v.p4h = i0c(q4t.f3r, 0);
	let w4z = c6l(q4t.w4z);
	if (w4z != o9n.b4x)
	{
		k8r.m7v.type= w4z;
	}
	k8r.m7v.u9n = i0c(q4t.m1q, 0);
	k8r.m7v.x7r = t1q(q4t.b2a);
	k8r.m7v.l4a = t1q(q4t.e4a);
	k8r.m7v.z2y = t1q(q4t.g8w);
	k8r.m7v.s7k = t1q(q4t.i8l);

	
	k8r.r8x.b6f = g8j(q4t.r8x);

	
	k8r.m1g.v8g = g8j(q4t.b5x);
	k8r.m1g.o0l = g8j(q4t.k8l);
	k8r.m1g.c5q = r0a(q4t.h2y);
	k8r.m1g.z2n = i0c(q4t.k0m, 0);
	k8r.m1g.f5f = r0a(q4t.z4l);
	k8r.m1g.z0o = o8k(q4t.b9j);

	
	k8r.v8g.v8g = g8j(q4t.v8g);

	
	k8r.c6i = r0a(q4t.c6i);
	k8r.f5i = s9r(g8j(q4t.f5i));
	k8r.c3h = a9n(g8j(q4t.c3h));
	x3n(g8j(q4t.t0m), k8r);

	
	let l5q = i0c(q4t.l5q, 0);
	k8r.l5q.b3p(l5q);

  
  k8r.c1t.k3r = q4t.k3r;

	return k8r;
}

function s7b(k8r)
{
	let q4t = new k9r();

	
	q4t.b2k = k8r.l0x.l5m.b6f();
	if (k8r.l0x.g8h.b6f.length)
	{
		q4t.a7s = k8r.l0x.g8h.b6f;
		if (k8r.l0x.g8h.d5t)
		{
			q4t.o2w = k8r.l0x.g8h.d5t;
		}
		if (k8r.l0x.g8h.o4b)
		{
			let w0h = new h3t();
			w0h.o4b = k8r.l0x.g8h.o4b;
			q4t.d9i = z5m(w0h);
		}
		if (k8r.l0x.g8h.x5m)
		{
			q4t.m5r = n8o(k8r.l0x.g8h.x5m);
		}
		if (k8r.l0x.g8h.r0t != y9t.b4x)
		{
			q4t.z5r = p0k(k8r.l0x.g8h.r0t);
		}
	}
	q4t.w3c = e5c(k8r.l0x.x8w);
	q4t.f3h = w5k(k8r.l0x.v0e);
	q4t.d7e = k8r.l0x.v8g;

	
	q4t.r8m = k8r.e3v.l5m.b6f();
	if (k8r.e3v.g8h.b6f.length)
	{
		q4t.h0c = k8r.e3v.g8h.b6f;
		if (k8r.e3v.g8h.d5t)
		{
			q4t.f6t = k8r.e3v.g8h.d5t;
		}
		if (k8r.e3v.g8h.o4b)
		{
			let c0a = new h3t();
			c0a.o4b = k8r.e3v.g8h.o4b;
			q4t.z8v = z5m(c0a);
		}
		if (k8r.e3v.g8h.x5m)
		{
			q4t.e6n = n8o(k8r.e3v.g8h.x5m);
		}
		if (k8r.e3v.g8h.r0t != y9t.b4x)
		{
			q4t.a8x = p0k(k8r.e3v.g8h.r0t);
		}
	}
	q4t.b6j = e5c(k8r.e3v.x8w);
	q4t.g7l = w5k(k8r.e3v.v0e);
	q4t.o0j = k8r.e3v.v8g;

	
	q4t.m5g = k8r.m7v.v8g;
	q4t.u0m = k8r.m7v.d2c;
	q4t.k2y = z5m(k8r.m7v.p7g);
	q4t.z5n = z5m(k8r.m7v.l9o);
	q4t.x0n = w3y(k8r.m7v.g1b);
	q4t.f3r = p4p(k8r.m7v.p4h);
	q4t.z7a = p0k(k8r.m7v.r0t);
	q4t.w4z = o5j(k8r.m7v.type);
	q4t.m1q = p4p(k8r.m7v.u9n);
	q4t.b2a = n8o(k8r.m7v.x7r);
	q4t.e4a = n8o(k8r.m7v.l4a);
	q4t.g8w = n8o(k8r.m7v.z2y);
	q4t.i8l = n8o(k8r.m7v.s7k);

	
	q4t.r8x = k8r.r8x.b6f;

	
	q4t.b5x = k8r.m1g.v8g;
	q4t.k8l = k8r.m1g.o0l;
	q4t.h2y = z5m(k8r.m1g.c5q);
	q4t.k0m = p4p(k8r.m1g.z2n);
	q4t.z4l = z5m(k8r.m1g.f5f);
	q4t.b9j = p3q(k8r.m1g.z0o);

	
	q4t.v8g = k8r.v8g.v8g;

	
	q4t.c6i = z5m(k8r.c6i);
	q4t.f5i = e4w(k8r.f5i);
	q4t.c3h = r1q(k8r.c3h);
	q4t.t0m = o2n(k8r);

	
	q4t.l5q = p4p(k8r.l5q.u0e());

	return q4t;
}

const s3e  					= "\x57\x68\x69\x74\x65";
const c1m					= "\x57\x68\x69\x74\x65\x54\x65\x61\x6d";
const y0l 				= "\x57\x68\x69\x74\x65\x54\x65\x61\x6d\x4e\x75\x6d\x62\x65\x72";
const y7t 					= "\x57\x68\x69\x74\x65\x54\x65\x61\x6d\x59\x65\x61\x72";
const j8x 				= "\x57\x68\x69\x74\x65\x54\x65\x61\x6d\x53\x65\x61\x73\x6f\x6e";
const h2u 			= "\x57\x68\x69\x74\x65\x54\x65\x61\x6d\x43\x6f\x75\x6e\x74\x72\x79";
const o4t 						= "\x57\x68\x69\x74\x65\x52\x61\x74\x69\x6e\x67";
const v6q 							= "\x57\x68\x69\x74\x65\x54\x69\x6d\x65";
const x0z 							= "\x57\x68\x69\x74\x65\x45\x6c\x6f";
const y7v  						= "\x57\x68\x69\x74\x65\x54\x69\x74\x6c\x65";
const l0m						= "\x57\x68\x69\x74\x65\x43\x6f\x75\x6e\x74\x72\x79";

const t3c						= "\x42\x6c\x61\x63\x6b";
const o7y					= "\x42\x6c\x61\x63\x6b\x54\x65\x61\x6d";
const h0k 				= "\x42\x6c\x61\x63\x6b\x54\x65\x61\x6d\x4e\x75\x6d\x62\x65\x72";
const i3w 					= "\x42\x6c\x61\x63\x6b\x54\x65\x61\x6d\x59\x65\x61\x72";
const o3y 				= "\x42\x6c\x61\x63\x6b\x54\x65\x61\x6d\x53\x65\x61\x73\x6f\x6e";
const k5w 			= "\x42\x6c\x61\x63\x6b\x54\x65\x61\x6d\x43\x6f\x75\x6e\x74\x72\x79";
const c7f 						= "\x42\x6c\x61\x63\x6b\x52\x61\x74\x69\x6e\x67";
const d1f 							= "\x42\x6c\x61\x63\x6b\x54\x69\x6d\x65";
const s0g 							= "\x42\x6c\x61\x63\x6b\x45\x6c\x6f";
const n2c  						= "\x42\x6c\x61\x63\x6b\x54\x69\x74\x6c\x65";
const s8s						= "\x42\x6c\x61\x63\x6b\x43\x6f\x75\x6e\x74\x72\x79";

const p2k 				= "\x45\x76\x65\x6e\x74";
const q4j				= "\x53\x69\x74\x65";
const y5q 			 	= "\x45\x76\x65\x6e\x74\x44\x61\x74\x65";
const b8a 		 	= "\x45\x76\x65\x6e\x74\x45\x6e\x64\x44\x61\x74\x65";
const q2f 			 	= "\x45\x76\x65\x6e\x74\x53\x70\x65\x65\x64";
const x4t 	 	= "\x45\x76\x65\x6e\x74\x43\x61\x74\x65\x67\x6f\x72\x79";
const y8w 		 	= "\x45\x76\x65\x6e\x74\x43\x6f\x75\x6e\x74\x72\x79";
const q3k 			 	= "\x45\x76\x65\x6e\x74\x54\x79\x70\x65";
const w0s 		 	= "\x45\x76\x65\x6e\x74\x52\x6f\x75\x6e\x64\x73";
const g0l 			 	= "\x45\x76\x65\x6e\x74\x54\x65\x61\x6d\x73";
const o1u		 	= "\x45\x76\x65\x6e\x74\x43\x6f\x6d\x70\x6c\x65\x74\x65";
const w5o 	= "\x45\x76\x65\x6e\x74\x54\x68\x72\x65\x65\x50\x6f\x69\x6e\x74\x73";
const b8l	= "\x45\x76\x65\x6e\x74\x42\x6f\x61\x72\x64\x50\x6f\x69\x6e\x74\x73";

const g3c 							= "\x41\x6e\x6e\x6f\x74\x61\x74\x6f\x72";

const e4p 				 		= "\x53\x6f\x75\x72\x63\x65\x54\x69\x74\x6c\x65";
const t2a 				 		= "\x50\x75\x62\x6c\x69\x63\x61\x74\x69\x6f\x6e";
const c8c		 		= "\x53\x6f\x75\x72\x63\x65\x50\x75\x62\x6c\x69\x73\x68\x65\x72";
const r2j		 		= "\x50\x75\x62\x6c\x69\x63\x61\x74\x69\x6f\x6e\x44\x61\x74\x65";
const r4h 				 		= "\x53\x6f\x75\x72\x63\x65\x44\x61\x74\x65";
const l1p 		= "\x53\x6f\x75\x72\x63\x65\x56\x65\x72\x73\x69\x6f\x6e\x4e\x75\x6d\x62\x65\x72";
const l1l 	 		= "\x53\x6f\x75\x72\x63\x65\x56\x65\x72\x73\x69\x6f\x6e\x44\x61\x74\x65";
const i0v 			 		= "\x53\x6f\x75\x72\x63\x65\x51\x75\x61\x6c\x69\x74\x79";

const v9v 					 		    = "\x54\x69\x74\x6c\x65";

const x5z 							 		= "\x44\x61\x74\x65";
const g3j 								= "\x52\x65\x73\x75\x6c\x74";
const b0f 										= "\x45\x43\x4f";
const u6b 									= "\x52\x6f\x75\x6e\x64";

const p1x			 							= "\x54\x61\x67\x73";

const h2e 									= "\x53\x65\x74\x75\x70";
const q3z 										= "\x46\x45\x4e";
const n2j 							= "\x50\x6c\x79\x43\x6f\x75\x6e\x74";

const k3v      							= "\x47\x55\x49\x44";

const b1s = "\x28";
const m7w   = "\x29";
const x0k    = "\x7b";

class o6v
{

constructor()
{
  this.l8b = new p0x();
  this.j7s = new s8u();
  this.q2d = new b2q();
  this.a7m = false;
  this.w8h = false;
  this.r2x = false;
  this.i2i = '';
}

}

class m6v
{

constructor(r4j)
{
	this.x9s = new k9r();
	this.q1y = r4j;
	this.j9k = 0;
	this.s3l = '';
	this.z0n = 0;
	this.f0k = 0;
	this.q8g = '';
	this.i6a = 0;
	this.a3c = false;
	this.l3m = '';
	this.r5o = '';
	this.e8m = null;
	this.u2t = new z1a();
	this.m8a = '';
	this.m7l = false;
 	this.n2b = false;
	this.z7g = false;
}

n2s()
{
  this.i6a = 0;
	let r4w = new r3h();
	this.e8m = r4w.b8v;
	try
	{
		this.u2l();
	}
	catch (err)
	{
	}
	r4w.f0j = x3m(this.x9s);
  r4w.k1u = this.i6a;
	return r4w;
}

u2l()
{
	this.a3c = false;
	this.s6d();
	if (this.a3c)
	{
		this.q9r = v7s(this.r5o);
		this.e8m.h4o(this.q9r, 1);
	}
 	this.b5u();
}

b6n()
{
	if (this.q1y.length == 0)
	{
		return false;
	}
	if (this.j9k >= this.q1y.length)
	{
		return false;
	}
	else
	{
		this.s3l = this.q1y[this.j9k];
		this.z0n = this.s3l.length;
		this.f0k = 0;
		this.j9k++;
		return true;
	}
}

s6d()
{
	this.z7g = false;
	this.n2b = false;
	while (true)
	{
		if (!this.b6n())
		{
			return;
		}
		this.i8d();
		if (!this.d1p())
		{
			return;
		}
		this.u8h();
	}
}


h3x(f9n)
{
	let e6j = this.q8g.substr(1, this.q8g.length - 1);
	return e6j.toUpperCase() === f9n.toUpperCase();
}

b5u()
{
 	if (this.q8g.length == 0) return;
	this.m7l = false;

	while (this.q8g[0] == '{')
	{
		let s6r = this.a3l();
    let m4r = new o6v();
		this.k3h(s6r, m4r);
    if (!m4r.l8b.y8b())
		{
			this.e8m.m2j(m4r.l8b);
		}
 		if (!m4r.j7s.y8b())
		{
			this.e8m.t9y(m4r.j7s);
		}
		if (!m4r.q2d.y8b())
		{
			this.e8m.x5r(m4r.q2d);
		}
 		s6r = m4r.i2i.trim();
    if (s6r.length)
    {
      
      
      if (s6r.startsWith("\x5b\x25\x61") && s6r.length > 7)
      {
        s6r = s6r.substr(7, s6r.length).trim();
      }
      let t0q = this.e8m.t0q();
      if (t0q.length)
      {
        t0q += ' ';
      }
      t0q += s6r;
      this.e8m.t8k(t0q);
		}
		this.i8d();
		if (this.q8g.length == 0)
		{
			return;
		}
	}
	this.v7k(this.e8m.p2p(), this.e8m.q9r());
}

v7k(x6x, c6o)
{
  let j3k = x6x.t9a();
  let k5o = c6o.t9a();

	let s6w = null;
 	let o1d = new d4t();

	do
	{
		if (this.q8g == b1s)
		{
			if (!s6w)
			{
				throw "\x65\x72\x72\x6f\x72";
			}
			if (!this.i8d())
			{
				throw "\x65\x72\x72\x6f\x72";
			}

 			k5o.i3c(j3k.e7j.s4r());
			k5o.s5a(o1d);
			this.e8m.i3c(j3k); 
      this.v7k(j3k, k5o);
			this.e8m.i4o(j3k); 
			k5o.i4o(j3k.e7j.s4r());

			while (this.i8d())
			{
				if (this.q8g != b1s)
				{
					break;
				}
				if (!this.i8d())
				{
					throw "\x65\x72\x72\x6f\x72";
				}
        k5o.i3c(j3k.e7j.s4r());
				k5o.s5a(o1d);
				this.e8m.i3c(j3k); 
				this.v7k(j3k, k5o);
				this.e8m.i4o(j3k);  
				k5o.i4o(j3k.e7j.s4r());
			}
		}

		if (this.q8g == m7w)
		{
			break;
		}

		if (
			this.q8g == "\x31\x2d\x30" ||
			this.q8g == "\x32\x2d\x30" ||
			this.q8g == "\x30\x2d\x31" ||
			this.q8g == "\x30\x2d\x32" ||
			this.q8g == "\x31\x2f\x32\x2d\x31\x2f\x32" ||
			this.q8g == "\x31\x2d\x31" ||
			this.q8g == "\x2a" ||
			this.q8g == "\x2a\x2a" ||
			this.q8g == "\x2d\x2a" ||
			this.q8g == "\x31\x2d\x30\x2a" ||
			this.q8g == "\x32\x2d\x30\x2a" ||
			this.q8g == "\x30\x2d\x31\x2a" ||
			this.q8g == "\x30\x2d\x32\x2a" ||
			this.q8g == "\x31\x2f\x32\x2d\x31\x2f\x32\x2a" ||
			this.q8g == "\x31\x2d\x31\x2a" ||
			this.q8g == "\x32\x2d\x30\x30\x2a" ||
			this.q8g == "\x30\x30\x2d\x32\x2a")
			break;

		if (this.q8g[0] == '$')
		{
			if (!s6w)
			{
				throw "\x65\x72\x72\x6f\x72";
			}
			let q6q = i5i(this.q8g);
			if (q6q != x2c.b4x)
			{
				s6w.t9d(q6q);
				continue;
			}
			let style = d2m(this.q8g);
			if (style != i1f.b4x)
			{
				s6w.k9t(style);
				continue;
			}
			let q1x = a5l(this.q8g);
			if (q1x != c2x.b4x)
			{
				s6w.w6a(q1x);
				continue;
			}
			let d2u = t9u(this.q8g);
			if (d2u != n6a.b4x)
			{
				s6w.t0n(d2u);
				continue;
			}
			continue;
		}
		if (this.q8g[0] == '{')
		{
			let s6r = this.a3l();
      let m4r = new o6v();
  		this.k3h(s6r, m4r);
      if (!m4r.l8b.y8b())
      {
		  	if (s6w)
			  {
				  s6w.z7e(m4r.l8b);
				}
			}
   		if (!m4r.j7s.y8b())
      {
				if (s6w)
				{
					s6w.p8k(m4r.j7s);
				}
			}
   		if (!m4r.q2d.y8b())
      {
				if (s6w)
				{
					s6w.j5q(m4r.q2d);
				}
			}
      if (m4r.w8h)
      {
				if (s6w)
				{
					s6w.h8f();
				}
			}
      if (m4r.r2x)
      {
				if (s6w)
				{
					s6w.p9e();
				}
			}
   		s6r = m4r.i2i.trim();
      if (!s6r.length)
      {
        continue;
      }
			if (s6w)
			{
        let q4w = s6w.q4w();
        if (q4w.length)
        {
          q4w += ' ';
        }
        q4w += s6r;
				s6w.k5b(q4w);
			}
			else
			{
        if (this.m8a.length)
        {
   				this.m8a += ' ';
        }
				this.m8a += s6r;
				this.m7l = true;
			}
			continue;
		}
		if (!this.t3i())
		{
			continue;
		}
		let o8c = false;
		if (this.q8g[this.q8g.length] == '*')
		{
			this.q8g = this.q8g.substr(0, this.q8g.length - 1);
			o8c = true;
		}
 		let g4o = this.s1v(this.q8g);
    let s4r = i4d(k5o, this.q8g);
 		o1d = k5o.o1d();
		k5o.i4o(s4r);
		let e7j = t5z(s4r);
    e7j.k9t(g4o);
    this.e8m.v6p(j3k, e7j);
		s6w = j3k.e7j;
		if (this.m7l)
		{
			s6w.j8b(this.m8a);
			this.m7l = false;
      this.m8a = '';
		}
		if (o8c)
		{
			break;
		}
	} while (this.i8d());
}

s1v(e6j)
{
	if (e6j.endsWith("\x3f\x3f"))
	{
		e6j = e6j.subString(0, e6j.length-2);
		return i1f.o0y;
	}
	else if (e6j.endsWith("\x21\x21"))
	{
		e6j = e6j.subString(0, e6j.length-2);
		return i1f.z3v;
	}
	else if (e6j.endsWith("\x3f\x21"))
	{
		e6j = e6j.subString(0, e6j.length-2);
		return i1f.i1a;
	}
	else if (e6j.endsWith("\x21\x3f"))
	{
		e6j = e6j.subString(0, e6j.length-2);
		return i1f.i5j;
	}
	else if (e6j.endsWith("\x3f"))
	{
		e6j = e6j.subString(0, e6j.length-1);
		return i1f.z1y;
	}
	else if (e6j.endsWith("\x21"))
	{
		e6j = e6j.subString(0, e6j.length-1);
		return i1f.w2n;
	}
	else
	{
		return i1f.b4x;
	}
}

t3i()
{
	let o9d = this.q8g.length;
	let j3k = -1;
	for (let i = 0; i < o9d; i++)
	{
		if (this.q8g[i] == '.')
		{
			j3k = i;
		}
	}
	if (j3k != -1)
	{
		this.q8g = this.q8g.substr(j3k + 1 , o9d);
	}
	return this.q8g.length != 0;
}

i8d()
{
	this.q8g = "";
	let h2p = '';
	let index = 0;
	let o9d = 0;
	while (true)
	{
		let n0c = 0;
		if (this.f0k < this.z0n)
		{
			n0c = this.s3l[this.f0k];
		}
		else
		{
			n0c = 0;
		}
		if (!n0c)
		{
			if (o9d)
			{
				break;
			}
			if (!this.b6n())
			{
				return false;
			}
			continue;
		}
		if (n0c == ';')
		{
			if (!this.b6n())
			{
				return false;
			}
			continue;
		}
		if (n0c == '(')
		{
			if (o9d)
			{
				break;
			}
			else
			{
				this.f0k++;
				this.q8g = b1s;
				return true;
			}
		}
		if (n0c == ')')
		{
			if (o9d)
			{
				break;
			}
			else
			{
				this.f0k++;
				this.q8g = m7w;
				return true;
			}
		}
		if (n0c == '{')
		{
			if (o9d)
			{
				break;
			}
			else
			{
				this.f0k++;
				this.q8g = x0k;
				return true;
			}
		}
		if (n0c == ' ' || n0c == '\r' || n0c == '\n')
		{
			if (o9d)
			{
				this.f0k++;
				break;
			}
			else
			{
				this.f0k++;
				continue;
			}
		}
		h2p += n0c;
		index++;
		o9d++;
		this.f0k++;
	}
	if (index)
	{
		this.q8g += h2p;
	}
	return this.q8g.length != 0;
}

a3l()
{
	let e6j = '';
	let h2p = '';
	let index = 0;
	let z7w = 0;
	while (true)
	{
		let n0c = 0;
		if (this.f0k < this.z0n)
		{
			n0c = this.s3l[this.f0k];
		}
		else
		{
			n0c = 0;
		}
		if (!n0c)
		{
			if (!this.b6n())
			{
				break;
			}
			if (index > 0)
			{
				h2p += ' '; 
				index++;
			}
			continue;
		}
		if (n0c == '{')
		{
			z7w++;
		}
		if (n0c == '}')
		{
			if (z7w)
			{
				z7w--;
			}
			else
			{
				this.f0k++;
				break;
			}
		}
		h2p += n0c;
		index++;
		this.f0k++;
	}
	if (index)
	{
		e6j += h2p;
	}
	return e6j.trim();
}

l2r()
{
	this.l3m = "";

	let w9b = 0;
	let o9d = this.s3l.length;
	for (let i = o9d - 1; i >= 0; i--)
	{
		if (this.s3l[i] == ']')
		{
			w9b = i;
			break;
		}
	}
	let index = 0;
	let d2s = false;
	let h2p = '';
	while (true)
	{
		let n0c = 0;
		if (this.f0k < this.z0n)
		{
			n0c = this.s3l[this.f0k];
		}
		else
		{
			n0c = 0;
		}
		if (!n0c)
		{
			if (!this.b6n())
			{
				break;
			}
			continue;
		}
		if (n0c == '\"')
		{
			d2s = true;
			this.f0k++;
			continue;
		}
		if (n0c == ']')
		{
			if (this.f0k == w9b)
			{
				this.f0k++;
				break;
			}
		}
		if (d2s)
		{
			h2p += n0c;
			index++;
		}
		this.f0k++;
	}
	if (index)
	{
		this.l3m += h2p;
	}
}

d1p()
{
	if (this.q8g.length == 0)
	{
		return false;
	}
	if (this.q8g[0] != '[')
	{
		return false;
	}
	
	let index = this.f0k;
	let j1b = false;
	while (index < this.z0n)
	{
		let n0c = this.s3l[index++];
		if (n0c == '\"' && this.s3l[index] == ']')
		{
			index++;
			j1b = true;
			continue;
		}
		if (n0c == '\r' || n0c == '\n')
		{
			break;
		}
		if (j1b)
		{
			j1b = false;
			break;
		}
	}
	return j1b;
}

u8h()
{
	
	if (this.h3x(s3e))
	{
		this.l2r();
		this.x9s.b2k = this.l3m;
		return;
	}
	if (this.h3x(c1m))
	{
		this.l2r();
		this.x9s.a7s = this.l3m;
		return;
	}
	if (this.h3x(y0l))
	{
		this.l2r();
		this.x9s.o2w = this.l3m;
		return;
	}
	if (this.h3x(y7t))
	{
		this.l2r();
		this.x9s.d9i = this.l3m;
		return;
	}
	if (this.h3x(j8x))
	{
		this.l2r();
		this.x9s.m5r = this.l3m;
		return;
	}
	if (this.h3x(h2u))
	{
		this.l2r();
		this.x9s.z5r = this.l3m;
		return;
	}
	if (this.h3x(x0z) || this.h3x(o4t))
	{
		this.l2r();
		this.x9s.w3c = this.l3m;
		return;
	}
	if (this.h3x(v6q))
	{
		this.l2r();
		this.x9s.f3h = this.l3m;
		return;
	}
	if (this.h3x(y7v))
	{
		this.l2r();
		this.x9s.d7e = this.l3m;
		return;
	}
	if (this.h3x(l0m))
	{
		this.l2r();
		this.x9s.x1c = this.l3m;
		return;
	}

	
	if (this.h3x(t3c))
	{
		this.l2r();
		this.x9s.r8m = this.l3m;
		return;
	}
	if (this.h3x(o7y))
	{
		this.l2r();
		this.x9s.h0c = this.l3m;
		return;
	}
	if (this.h3x(h0k))
	{
		this.l2r();
		this.x9s.f6t = this.l3m;
		return;
	}
	if (this.h3x(i3w))
	{
		this.l2r();
		this.x9s.z8v = this.l3m;
		return;
	}
	if (this.h3x(o3y))
	{
		this.l2r();
		this.x9s.e6n = this.l3m;
		return;
	}
	if (this.h3x(k5w))
	{
		this.l2r();
		this.x9s.a8x = this.l3m;
		return;
	}
	if (this.h3x(s0g) || this.h3x(c7f))
	{
		this.l2r();
		this.x9s.b6j = this.l3m;
		return;
	}
	if (this.h3x(d1f))
	{
		this.l2r();
		this.x9s.g7l = this.l3m;
		return;
	}
	if (this.h3x(n2c))
	{
		this.l2r();
		this.x9s.o0j = this.l3m;
		return;
	}
	if (this.h3x(s8s))
	{
		this.l2r();
		this.x9s.c7g = this.l3m;
		return;
	}

	
	if (this.h3x(p2k))
	{
		this.l2r();
		this.x9s.m5g = this.l3m;
		return;
	}
	if (this.h3x(q4j))
	{
		this.l2r();
		this.x9s.u0m = this.l3m;
		return;
	}
	if (this.h3x(y5q))
	{
		this.l2r();
		this.x9s.k2y = this.l3m;
		return;
	}
	if (this.h3x(b8a))
	{
		this.l2r();
		this.x9s.z5n = this.l3m;
		return;
	}
	if (this.h3x(q2f))
	{
		this.l2r();
		this.x9s.x0n = this.l3m;
		return;
	}
	if (this.h3x(x4t))
	{
		this.l2r();
		this.x9s.f3r = this.l3m;
		return;
	}
	if (this.h3x(y8w))
	{
		this.l2r();
		this.x9s.z7a = this.l3m;
		return;
	}
	if (this.h3x(q3k))
	{
		this.l2r();
		this.x9s.w4z = this.l3m;
		return;
	}
	if (this.h3x(w0s))
	{
		this.l2r();
		this.x9s.m1q = this.l3m;
		return;
	}
	if (this.h3x(g0l))
	{
		this.l2r();
		this.x9s.b2a = this.l3m;
		return;
	}
	if (this.h3x(o1u))
	{
		this.l2r();
		this.x9s.e4a = this.l3m;
		return;
	}
	if (this.h3x(w5o))
	{
		this.l2r();
		this.x9s.g8w = this.l3m;
		return;
	}
	if (this.h3x(b8l))
	{
		this.l2r();
		this.x9s.i8l = this.l3m;
		return;
	}

	
	if (this.h3x(g3c))
	{
		this.l2r();
		this.x9s.r8x = this.l3m;
		return;
	}

	
	if (this.h3x(e4p))
	{
		this.l2r();
		this.x9s.b5x = this.l3m;
		return;
	}
	if (this.h3x(t2a))
	{
		this.l2r();
		this.x9s.b5x = this.l3m;
		return;
	}
	if (this.h3x(c8c))
	{
		this.l2r();
		this.x9s.k8l = this.l3m;
		return;
	}
	if (this.h3x(r4h))
	{
		this.l2r();
		this.x9s.h2y = this.l3m;
		return;
	}
	if (this.h3x(r2j))
	{
		this.l2r();
		this.x9s.h2y = this.l3m;
		return;
	}
	if (this.h3x(l1p))
	{
		this.l2r();
		this.x9s.k0m = this.l3m;
		return;
	}
	if (this.h3x(l1l))
	{
		this.l2r();
		this.x9s.z4l = this.l3m;
		return;
	}
	if (this.h3x(i0v))
	{
		this.l2r();
		this.x9s.b9j = this.l3m;
		return;
	}

	
	if (this.h3x(v9v))
	{
		this.l2r();
		this.x9s.v8g = this.l3m;
		return;
	}

	
	if (this.h3x(x5z))
	{
		this.l2r();
		this.x9s.c6i = this.l3m;
		return;
	}
	if (this.h3x(g3j))
	{
		this.l2r();
		this.x9s.f5i = this.l3m;
		return;
	}
	if (this.h3x(b0f))
	{
		this.l2r();
		this.x9s.c3h = this.l3m;
		return;
	}
	if (this.h3x(u6b))
	{
		this.l2r();
		this.x9s.t0m = this.l3m;
		return;
	}

	
	if (this.h3x(p1x))
	{
		this.l2r();
		this.x9s.l5q = this.l3m;
		return;
	}

	
	if (this.h3x(h2e))
	{
		this.l2r();
		return;
	}
	if (this.h3x(q3z))
	{
		this.l2r();
		if (this.l3m.length == 0 || this.l3m == "\x3f")
		{
			return;
		}
		this.a3c = true;
		this.r5o = this.l3m;
		return;
	}
	if (this.h3x(n2j))
	{
		this.l2r();
		this.i6a = c6q(this.l3m, 0);
		return;
	}
  
 	if (this.h3x(k3v))
	{
		this.l2r();
		this.x9s.k3r = this.l3m;
		return;
	}

}

s2q(s6r)
{
	let d4u = new p0x();
	let e6j = s6r.substr(6, s6r.length - 6);
	let i1x = e6j.split("\x2c");
	for (const s of i1x)
	{
		if (s.length < 5)
		{
			continue;
		}
		let u1z = e8v(s.substr(1, 2));
		let s5v = e8v(s.substr(3, 2));
		if (s[0] == 'R')
		{
			let y6v = i7u(u1z, s5v, y4s.t4z);
			d4u.add(y6v);
		}
		else if (s[0] == 'G')
		{
			let y6v = i7u(u1z, s5v, y4s.r3c);
			d4u.add(y6v);
		}
		else if (s[0] == 'Y')
		{
			let y6v = i7u(u1z, s5v, y4s.i1s);
			d4u.add(y6v);
		}
	}
	return d4u;
}

c8j(s6r)
{
	let g2e = new s8u();
	let e6j = s6r.substr(6, s6r.length - 6);
	let i1x = e6j.split("\x2c");
	for (const s of i1x)
	{
		if (s.length < 3)
		{
			continue;
		}
 		let w0g = e8v(s.substr(1, 2));
		if (s[0] == 'R')
		{
      let e5j = g6q(w0g, u0r.z5i);
			g2e.add(e5j);
		}
		else if (s[0] == 'G')
		{
      let e5j = g6q(w0g, u0r.a9q);
			g2e.add(e5j);
		}
		else if (s[0] == 'Y')
		{
      let e5j = g6q(w0g, u0r.p8a);
			g2e.add(e5j);
		}
	}
	return g2e;
}

s7q(s6r)
{
	let e6j = s6r.substr(6, s6r.length - 6);
	let j3k = e6j.indexOf("\x5d");
	if (j3k != -1)
	{
		let q2d = new b2q();
		let q1x = c6q(e6j.substr(0, j3k), 0);
		q2d.b3p(q1x);
		return q2d;
	}
	else
	{
		return new b2q();
	}
}


k3h(s6r, m4r)
{
	if (
		s6r.startsWith("\x5b\x25\x63\x61\x6c") ||
    s6r.startsWith("\x5b\x25\x63\x73\x62") ||
		s6r.startsWith("\x5b\x25\x63\x73\x6c") ||
		s6r.startsWith("\x5b\x25\x6d\x64\x6c") ||
		s6r.startsWith("\x5b\x25\x65\x76\x70") ||
		s6r.startsWith("\x5b\x25\x65\x76\x61\x6c") ||
		s6r.startsWith("\x5b\x25\x65\x6d\x74") ||
		s6r.startsWith("\x5b\x25\x74\x71\x75") ||
		s6r.startsWith("\x5b\x25\x74\x71\x75") ||
		s6r.startsWith("\x5b\x25\x70\x77\x73") ||
		s6r.startsWith("\x5b\x25\x70\x74\x68") ||
		s6r.startsWith("\x5b\x25\x65\x6f\x67"))
	{
		let u2w = 0;
		{
     	let e5g = s6r.indexOf("\x5b\x25\x63\x61\x6c");
			if (e5g != -1)
			{
        let f7u = s6r.indexOf("\x5d", e5g);
				if (f7u != -1)
				{
     			let m2b = s6r.substring(e5g, f7u + 1);
					m4r.l8b = this.s2q(m2b).t9a();
					if (f7u > u2w) u2w = f7u;
				}
			}
		}
		{
     	let e5g = s6r.indexOf("\x5b\x25\x63\x73\x62");
   		if (e5g != -1)
			{
        let f7u = s6r.indexOf("\x5d", e5g);
				if (f7u != -1)
				{
          let g7b = s6r.substring(e5g, f7u + 1);
					m4r.j7s = this.c8j(g7b).t9a();
					if (f7u > u2w) u2w = f7u;
				}
			}
		}
		{
      let e5g = s6r.indexOf("\x5b\x25\x63\x73\x6c");
			if (e5g != -1)
			{
        let f7u = s6r.indexOf("\x5d", e5g);
				if (f7u != -1)
				{
          let g7b = s6r.substring(e5g, f7u + 1);
					m4r.j7s = this.c8j(g7b).t9a();
					if (f7u > u2w) u2w = f7u;
				}
			}
		}
		{
      let e5g = s6r.indexOf("\x5b\x25\x6d\x64\x6c");
			if (e5g != -1)
			{
        let f7u = s6r.indexOf("\x5d", e5g);
				if (f7u != -1)
				{
          let z5b = s6r.substring(e5g, f7u + 1);
					m4r.q2d = this.s7q(z5b).t9a();
					if (f7u > u2w) u2w = f7u;
				}
			}
		}
		{
      let e5g = s6r.indexOf("\x5b\x25\x65\x76\x70");
			if (e5g != -1)
			{
        let f7u = s6r.indexOf("\x5d", e5g);
				if (f7u != -1)
				{
					if (f7u > u2w) u2w = f7u;
				}
			}
		}
		{
      let e5g = s6r.indexOf("\x5b\x25\x65\x76\x61\x6c");
			if (e5g != -1)
			{
        let f7u = s6r.indexOf("\x5d", e5g);
				if (f7u != -1)
				{
					if (f7u > u2w) u2w = f7u;
				}
			}
		}
		{
      let e5g = s6r.indexOf("\x5b\x25\x65\x6d\x74");
			if (e5g = -1)
			{
        let f7u = s6r.indexOf("\x5d", e5g);
				if (f7u != -1)
				{
					if (f7u > u2w) u2w = f7u;
				}
			}
		}
		{
      let e5g = s6r.indexOf("\x5b\x25\x74\x71\x75");
			if (e5g != -1)
			{
        let f7u = s6r.indexOf("\x5d", e5g);
				if (f7u != -1)
				{
					if (f7u > u2w) u2w = f7u;
				}
			}
		}
		{
      let e5g = s6r.indexOf("\x5b\x25\x70\x77\x73");
			if (e5g != -1)
			{
        let f7u = s6r.indexOf("\x5d", e5g);
				if (f7u != -1)
				{
          m4r.a7m = true;
					if (f7u > u2w) u2w = f7u;
				}
			}
		}
		{
      let e5g = s6r.indexOf("\x5b\x25\x70\x74\x68");
			if (e5g != -1)
			{
        let f7u = s6r.indexOf("\x5d", e5g);
				if (f7u != -1)
				{
          m4r.w8h = true;
					if (f7u > u2w) u2w = f7u;
				}
			}
		}
		{
      let e5g = s6r.indexOf("\x5b\x25\x65\x6f\x67");
			if (e5g != -1)
			{
        let f7u = s6r.indexOf("\x5d", e5g);
				if (f7u != -1)
				{
					m4r.r2x = true; 
					if (f7u > u2w) u2w = f7u;
				}
			}
		}
    m4r.i2i = s6r.substring(u2w + 1);
	}
	else
	{
		m4r.i2i = s6r;
	}
}

}

class u8j
{

constructor()
{
  this.k1u = 0;
	this.f0j = new k9r();
	this.b8v = new u9y();
}

t9a()
{
	let k7j = new u8j();
  k7j.k1u = this.k1u;
	k7j.f0j = this.f0j.t9a();
	k7j.b8v = this.b8v.t9a();
	return k7j;
}

}

class k9r
{

constructor()
{
	this.b2k = '';
	this.a7s = '';
	this.o2w = '';
	this.d9i = '';
	this.m5r = '';
	this.z5r = '';
	this.w3c = '';
	this.f3h = '';
	this.d7e = '';
  this.x1c = '';
	this.r8m = '';
	this.h0c = '';
	this.f6t = '';
	this.z8v = '';
	this.e6n = '';
	this.a8x = '';
	this.b6j = '';
	this.g7l = '';
	this.o0j = '';
  this.c7g = '';
	this.m5g = '';
	this.u0m = '';
	this.k2y = '';
	this.z5n = '';
	this.x0n = '';
	this.f3r = '';
	this.z7a = '';
	this.w4z = '';
	this.m1q = '';
	this.b2a = '';
	this.e4a = '';
	this.g8w = '';
	this.i8l = '';
	this.r8x = '';
	this.b5x = '';
	this.k8l = '';
	this.h2y = '';
	this.k0m = '';
	this.z4l = '';
	this.b9j = '';
	this.v8g = '';
	this.c6i = '';
	this.f5i = '';
	this.c3h = '';
	this.t0m = '';
	this.l5q = '';
  this.k3r = '';
}

t9a()
{
	let k6l = new k9r();

	k6l.b2k = this.b2k;
	k6l.a7s = this.a7s;
	k6l.o2w = this.o2w;
	k6l.d9i = this.d9i;
	k6l.m5r = this.m5r;
	k6l.z5r = this.z5r;
	k6l.w3c = this.w3c;
	k6l.f3h = this.f3h;
	k6l.d7e = this.d7e;
	k6l.x1c = this.x1c;

	k6l.r8m = this.r8m;
	k6l.h0c = this.h0c;
	k6l.f6t = this.f6t;
	k6l.z8v = this.z8v;
	k6l.e6n = this.e6n;
	k6l.a8x = this.a8x;
	k6l.b6j = this.b6j;
	k6l.g7l = this.g7l;
	k6l.o0j = this.o0j;
	k6l.c7g = this.c7g;

	k6l.m5g = this.m5g;
	k6l.u0m = this.u0m;
	k6l.k2y = this.k2y;
	k6l.z5n = this.z5n;
	k6l.x0n = this.x0n;
	k6l.f3r = this.f3r;
	k6l.z7a = this.z7a;
	k6l.w4z = this.w4z;
	k6l.m1q = this.m1q;
	k6l.b2a = this.b2a;
	k6l.e4a = this.e4a;
	k6l.g8w = this.g8w;
	k6l.i8l = this.i8l;

	k6l.r8x = this.r8x;

	k6l.b5x = this.b5x;
	k6l.k8l = this.k8l;
	k6l.h2y = this.h2y;
	k6l.k0m = this.k0m;
	k6l.z4l = this.z4l;
	k6l.b9j = this.b9j;

	k6l.v8g = this.v8g;

	k6l.c6i = this.c6i;
	k6l.f5i = this.f5i;
	k6l.c3h = this.c3h;
	k6l.t0m = this.t0m;

	k6l.l5q = this.l5q;
 	k6l.k3r = this.k3r;

	return k6l;
}

}


const o6y =
[
		[ y9t.b4x, 				  									"",											            "", 																	"",   ""    ],
		[ y9t.q9d, 										  "\x41\x66\x67\x68\x61\x6e\x69\x73\x74\x61\x6e",											"\x41\x66\x67\x68\x61\x6e\x69\x73\x74\x61\x6e", 												"\x61\x66", "\x41\x46\x47" ],
		[ y9t.w2s, 									 	"\x41\x6c\x61\x6e\x64\x49\x73\x6c\x61\x6e\x64\x73",										  "\x41\x6c\x61\x6e\x64", 															"\x61\x78", "\x41\x4c\x41" ],
		[ y9t.l6j,  											 	"\x41\x6c\x62\x61\x6e\x69\x61",													"\x41\x6c\x62\x61\x6e\x69\x61", 														"\x61\x6c", "\x41\x4c\x42" ],
		[ y9t.t0h,  											 	"\x41\x6c\x67\x65\x72\x69\x61",													"\x41\x6c\x67\x65\x72\x69\x61", 														"\x64\x7a", "\x44\x5a\x41" ],
		[ y9t.i4x,  								 	"\x41\x6d\x65\x72\x69\x63\x61\x6e\x53\x61\x6d\x6f\x61",										"\x41\x6d\x65\x72\x69\x63\x61\x6e\x20\x53\x61\x6d\x6f\x61", 										"\x61\x73", "\x41\x53\x4d" ],
		[ y9t.l9e,  											 	"\x41\x6e\x64\x6f\x72\x72\x61",													"\x41\x6e\x64\x6f\x72\x72\x61", 														"\x61\x64", "\x41\x4e\x44" ],
		[ y9t.k1m,                           "\x41\x6e\x67\x6f\x6c\x61",													  "\x41\x6e\x67\x6f\x6c\x61", 														"\x61\x6f", "\x41\x47\x4f" ],
		[ y9t.o1o,  											  "\x41\x6e\x67\x75\x69\x6c\x6c\x61",												  "\x41\x6e\x67\x75\x69\x6c\x6c\x61", 													"\x61\x69", "\x41\x49\x41" ],
		[ y9t.s0a,  										  "\x41\x6e\x74\x61\x72\x63\x74\x69\x63\x61",											  "\x41\x6e\x74\x61\x72\x63\x74\x69\x63\x61", 												"\x61\x71", "\x41\x54\x41" ],
		[ y9t.x2s,  								  "\x41\x6e\x74\x69\x67\x75\x61\x42\x61\x72\x62\x75\x64\x61",									  "\x41\x6e\x74\x69\x67\x75\x61\x20\x26\x20\x42\x61\x72\x62\x75\x64\x61", 									"\x61\x67", "\x41\x54\x47" ],
		[ y9t.n3z,  										 	"\x41\x72\x67\x65\x6e\x74\x69\x6e\x61",												"\x41\x72\x67\x65\x6e\x74\x69\x6e\x61", 													"\x61\x72", "\x41\x52\x47" ],
		[ y9t.x1o,  											 	"\x41\x72\x6d\x65\x6e\x69\x61",													"\x41\x72\x6d\x65\x6e\x69\x61",														"\x61\x6d", "\x41\x52\x4d" ],
		[ y9t.w7z,  												 	"\x41\x72\x75\x62\x61",														"\x41\x72\x75\x62\x61",															"\x61\x77", "\x41\x42\x57" ],
		[ y9t.o6r,  										 	"\x41\x75\x73\x74\x72\x61\x6c\x69\x61",												"\x41\x75\x73\x74\x72\x61\x6c\x69\x61",													"\x61\x75", "\x41\x55\x53" ],
		[ y9t.w0e,  											 	"\x41\x75\x73\x74\x72\x69\x61",													"\x41\x75\x73\x74\x72\x69\x61",											 			"\x61\x74", "\x41\x55\x54" ],
		[ y9t.m0c,  										  "\x41\x7a\x65\x72\x62\x61\x69\x6a\x61\x6e",											  "\x41\x7a\x65\x72\x62\x61\x69\x6a\x61\x6e",													"\x61\x7a", "\x41\x5a\x45" ],
		[ y9t.x7j,  											 	"\x42\x61\x68\x61\x6d\x61\x73",													"\x42\x61\x68\x61\x6d\x61\x73",														"\x62\x73", "\x42\x48\x53" ],
		[ y9t.g4g,  											 	"\x42\x61\x68\x72\x61\x69\x6e",													"\x42\x61\x68\x72\x61\x69\x6e",														"\x62\x68", "\x42\x48\x52" ],
		[ y9t.s8d,  										  "\x42\x61\x6e\x67\x6c\x61\x64\x65\x73\x68",											  "\x42\x61\x6e\x67\x6c\x61\x64\x65\x73\x68",													"\x62\x64", "\x42\x47\x44" ],
		[ y9t.x0l,  											  "\x42\x61\x72\x62\x61\x64\x6f\x73",												  "\x42\x61\x72\x62\x61\x64\x6f\x73",														"\x62\x62", "\x42\x52\x42" ],
		[ y9t.v8b,  								 	"\x42\x61\x73\x71\x75\x65\x43\x6f\x75\x6e\x74\x72\x79",	 									"\x42\x61\x73\x71\x75\x65\x20\x43\x6f\x75\x6e\x74\x72\x79",     								"\x78\x31", "\x58\x58\x31" ], 
		[ y9t.b9b,  											 	"\x42\x65\x6c\x61\x72\x75\x73",													"\x42\x65\x6c\x61\x72\x75\x73",														"\x62\x79", "\x42\x4c\x52" ],
		[ y9t.x5y,  											 	"\x42\x65\x6c\x67\x69\x75\x6d",													"\x42\x65\x6c\x67\x69\x75\x6d",														"\x62\x65", "\x42\x45\x4c" ],
		[ y9t.h8g,  												  "\x42\x65\x6c\x69\x7a\x65",													  "\x42\x65\x6c\x69\x7a\x65",															"\x62\x7a", "\x42\x4c\x5a" ],
		[ y9t.z2q,  												 	"\x42\x65\x6e\x69\x6e",														"\x42\x65\x6e\x69\x6e",															"\x62\x6a", "\x42\x45\x4e" ],
		[ y9t.s3g,  											 	"\x42\x65\x72\x6d\x75\x64\x61",													"\x42\x65\x72\x6d\x75\x64\x61",														"\x62\x6d", "\x42\x4d\x55" ],
		[ y9t.p1o,  												  "\x42\x68\x75\x74\x61\x6e",													  "\x42\x68\x75\x74\x61\x6e",															"\x62\x74", "\x42\x54\x4e" ],
		[ y9t.n4q,  												"\x42\x6f\x6c\x69\x76\x69\x61",													"\x42\x6f\x6c\x69\x76\x69\x61",														"\x62\x6f", "\x42\x4f\x4c" ],
		[ y9t.g6e,  						  "\x42\x6f\x73\x6e\x69\x61\x48\x65\x72\x7a\x65\x67\x6f\x76\x69\x6e\x61",       				  "\x42\x6f\x73\x6e\x69\x61\x20\x26\x20\x48\x65\x72\x7a\x65\x67\x6f\x76\x69\x6e\x61", 							"\x62\x61", "\x42\x49\x48" ], 
		[ y9t.f8p,  											  "\x42\x6f\x74\x73\x77\x61\x6e\x61",                      	  "\x42\x6f\x74\x73\x77\x61\x6e\x61",														"\x62\x77", "\x42\x57\x41" ],
		[ y9t.a5n,  									  "\x42\x6f\x75\x76\x65\x74\x49\x73\x6c\x61\x6e\x64",                 		"\x42\x6f\x75\x76\x65\x74",															"\x62\x76", "\x42\x56\x54" ],
		[ y9t.r3r,  												  "\x42\x72\x61\x7a\x69\x6c",                        	  "\x42\x72\x61\x7a\x69\x6c",															"\x62\x72", "\x42\x52\x41" ],
		[ y9t.w3n,  	 	"\x42\x72\x69\x74\x69\x73\x68\x49\x6e\x64\x69\x61\x6e\x4f\x63\x65\x61\x6e\x54\x65\x72\x72\x69\x74\x6f\x72\x79",			"\x42\x72\x69\x74\x69\x73\x68\x20\x49\x6e\x64\x69\x61\x6e\x20\x4f\x63\x65\x61\x6e\x20\x54\x65\x72\x72\x69\x74\x6f\x72\x79", 		"\x69\x6f", "\x49\x4f\x54" ],
		[ y9t.u7i, 							 	"\x42\x72\x75\x6e\x65\x69\x44\x61\x72\x75\x73\x73\x61\x6c\x61\x6d",								  "\x42\x72\x75\x6e\x65\x69",															"\x62\x6e", "\x42\x52\x4e" ], 
		[ y9t.m6z,  											  "\x42\x75\x6c\x67\x61\x72\x69\x61",												  "\x42\x75\x6c\x67\x61\x72\x69\x61", 													"\x62\x67", "\x42\x47\x52" ],
		[ y9t.l5w, 										  "\x42\x75\x72\x6b\x69\x6e\x61\x46\x61\x73\x6f",											"\x42\x75\x72\x6b\x69\x6e\x61\x20\x46\x61\x73\x6f",												"\x62\x66", "\x42\x46\x41" ],
		[ y9t.d0j,  											 	"\x42\x75\x72\x75\x6e\x64\x69",													"\x42\x75\x72\x75\x6e\x64\x69",														"\x62\x69", "\x42\x44\x49" ],
		[ y9t.h3k,  											  "\x43\x61\x6d\x62\x6f\x64\x69\x61",												  "\x43\x61\x6d\x62\x6f\x64\x6a\x61",														"\x6b\x68", "\x4b\x48\x4d" ],
		[ y9t.k5k,  											  "\x43\x61\x6d\x65\x72\x6f\x6f\x6e",												  "\x43\x61\x6d\x65\x72\x6f\x6f\x6e",														"\x63\x6d", "\x43\x4d\x52" ],
		[ y9t.r9b,  												  "\x43\x61\x6e\x61\x64\x61",													  "\x43\x61\x6e\x61\x64\x61",															"\x63\x61", "\x43\x41\x4e" ],
		[ y9t.b3v,  										  "\x43\x61\x70\x65\x56\x65\x72\x64\x65",												"\x43\x61\x70\x65\x20\x56\x65\x72\x64\x65",													"\x63\x76", "\x43\x50\x56" ], 
		[ y9t.i8w,  										  "\x43\x61\x74\x61\x6c\x6f\x6e\x69\x61",												"\x43\x61\x74\x61\x6c\x6f\x6e\x69\x61",													"\x78\x32", "\x58\x58\x32" ], 
		[ y9t.a3i,  								  "\x43\x61\x79\x6d\x61\x6e\x49\x73\x6c\x61\x6e\x64\x73",										"\x43\x61\x79\x6d\x61\x6e\x20\x49\x73\x6c\x61\x6e\x64\x73",											"\x6b\x79", "\x43\x59\x4d" ],
		[ y9t.o2o,  				  "\x43\x65\x6e\x74\x72\x61\x6c\x41\x66\x72\x69\x63\x61\x6e\x52\x65\x70\x75\x62\x6c\x69\x63",					  "\x43\x65\x6e\x74\x72\x61\x6c\x20\x41\x66\x72\x69\x63\x61\x6e\x20\x52\x65\x70\x75\x62\x6c\x69\x63",						"\x63\x66", "\x43\x41\x46" ],
		[ y9t.m2g,  													  "\x43\x68\x61\x64",														  "\x43\x68\x61\x64",																"\x74\x64", "\x54\x43\x44" ],
		[ y9t.n8u,  												 	"\x43\x68\x69\x6c\x65",														"\x43\x68\x69\x6c\x65",															"\x63\x6c", "\x43\x48\x4c" ],
		[ y9t.p2x,  												 	"\x43\x68\x69\x6e\x61",														"\x43\x68\x69\x6e\x61",															"\x63\x6e", "\x43\x48\x4e" ],
		[ y9t.u0j,  							 	"\x43\x68\x72\x69\x73\x74\x6d\x61\x73\x49\x73\x6c\x61\x6e\x64",									"\x43\x68\x72\x69\x73\x74\x6d\x61\x73",													"\x63\x78", "\x43\x58\x52" ],
		[ y9t.c5x,  					 	"\x43\x6f\x63\x6f\x73\x4b\x65\x65\x6c\x69\x6e\x67\x49\x73\x6c\x61\x6e\x64\x73",							"\x43\x6f\x63\x6f\x73\x20\x28\x4b\x65\x65\x6c\x69\x6e\x67\x29",										"\x63\x63", "\x43\x43\x4b" ], 
		[ y9t.r4g,  											  "\x43\x6f\x6c\x6f\x6d\x62\x69\x61",												  "\x43\x6f\x6c\x6f\x6d\x62\x69\x61",														"\x63\x6f", "\x43\x4f\x4c" ],
		[ y9t.y2c,  											 	"\x43\x6f\x6d\x6f\x72\x6f\x73",													"\x43\x6f\x6d\x6f\x72\x6f\x73",														"\x6b\x6d", "\x43\x4f\x4d" ],
		[ y9t.c3o,  												 	"\x43\x6f\x6e\x67\x6f",														"\x43\x6f\x6e\x67\x6f\x2d\x42\x72\x61\x7a\x7a\x61\x76\x69\x6c\x6c\x65", 						    	"\x63\x67", "\x43\x4f\x47" ],
		[ y9t.c6k,  			 	"\x43\x6f\x6e\x67\x6f\x44\x65\x6d\x6f\x63\x72\x61\x74\x69\x63\x52\x65\x70\x75\x62\x6c\x69\x63",					"\x43\x6f\x6e\x67\x6f\x2d\x4b\x69\x6e\x73\x68\x61\x73\x61\x28\x5a\x61\x69\x72\x65\x29",						  "\x63\x64", "\x43\x4f\x44" ],
		[ y9t.e1c,  									 	"\x43\x6f\x6f\x6b\x49\x73\x6c\x61\x6e\x64\x73",											"\x43\x6f\x6f\x6b\x20\x49\x73\x6c\x61\x6e\x64\x73",											 	"\x63\x6b", "\x43\x4f\x4b" ],
		[ y9t.i2z,  											"\x43\x6f\x73\x74\x61\x52\x69\x63\x61",												"\x43\x6f\x73\x74\x61\x20\x52\x69\x63\x61",												 	"\x63\x72", "\x43\x52\x49" ],
		[ y9t.f3z,  												"\x43\x72\x6f\x61\x74\x69\x61",													"\x43\x72\x6f\x61\x74\x69\x61",														"\x68\x72", "\x48\x52\x56" ],
		[ y9t.x9z,  													  "\x43\x75\x62\x61",														  "\x43\x75\x62\x61",															 	"\x63\x75", "\x43\x55\x42" ],
		[ y9t.p1c,  												"\x43\x75\x72\x61\x63\x61\x6f",													"\x43\x75\x72\x61\x63\x61\x6f",											  		"\x63\x77", "\x43\x55\x57" ],
		[ y9t.u9u,  												  "\x43\x79\x70\x72\x75\x73",													  "\x43\x79\x70\x72\x75\x73",														 	"\x63\x79", "\x43\x59\x50" ],
		[ y9t.w1j,  									      "\x43\x7a\x65\x63\x68\x69\x61",										      "\x43\x7a\x65\x63\x68\x20\x52\x65\x70\x75\x62\x6c\x69\x63", 										"\x63\x7a", "\x43\x5a\x45" ],
		[ y9t.t2j,  										  "\x43\x6f\x74\x65\x49\x76\x6f\x69\x72\x65",	   					 				  "\x43\x6f\x74\x65\x20\x64\x27\x49\x76\x6f\x69\x72\x65",											"\x63\x69", "\x43\x49\x56" ],
		[ y9t.e6y,  												"\x44\x65\x6e\x6d\x61\x72\x6b",													"\x44\x65\x6e\x6d\x61\x72\x6b",													  "\x64\x6b", "\x44\x4e\x4b" ],
		[ y9t.t2p,  											  "\x44\x6a\x69\x62\x6f\x75\x74\x69",												  "\x44\x6a\x69\x62\x6f\x75\x74\x69",													 	"\x64\x6a", "\x44\x4a\x49" ],
		[ y9t.j7c,  											  "\x44\x6f\x6d\x69\x6e\x69\x63\x61",												  "\x44\x6f\x6d\x69\x6e\x69\x63\x61",													 	"\x64\x6d", "\x44\x4d\x41" ],
		[ y9t.e0b,  							"\x44\x6f\x6d\x69\x6e\x69\x63\x61\x6e\x52\x65\x70\x75\x62\x6c\x69\x63",								"\x44\x6f\x6d\x69\x6e\x69\x63\x61\x6e\x20\x52\x65\x70\x75\x62\x6c\x69\x63",								 	"\x64\x6f", "\x44\x4f\x4d" ],
		[ y9t.h5y,  												"\x45\x63\x75\x61\x64\x6f\x72",													"\x45\x63\x75\x61\x64\x6f\x72",													 	"\x65\x63", "\x45\x43\x55" ],
		[ y9t.n5i,  													"\x45\x67\x79\x70\x74",														"\x45\x67\x79\x70\x74", 														 	"\x65\x67", "\x45\x47\x59" ],
		[ y9t.m5d,  										  "\x45\x6c\x53\x61\x6c\x76\x61\x64\x6f\x72",											  "\x45\x6c\x20\x53\x61\x6c\x76\x61\x64\x6f\x72",												"\x73\x76", "\x53\x4c\x56" ],
		[ y9t.q9i,  												"\x45\x6e\x67\x6c\x61\x6e\x64",													"\x45\x6e\x67\x6c\x61\x6e\x64",														"\x78\x33", "\x47\x42\x52" ],
		[ y9t.o4a,  							  "\x45\x71\x75\x61\x74\x6f\x72\x69\x61\x6c\x47\x75\x69\x6e\x65\x61",								  "\x45\x71\x75\x61\x74\x6f\x72\x69\x61\x6c\x20\x47\x75\x69\x6e\x65\x61",									"\x67\x71", "\x47\x4e\x51" ], 
		[ y9t.v2x,  												"\x45\x72\x69\x74\x72\x65\x61",													"\x45\x72\x69\x74\x72\x65\x61",														"\x65\x72", "\x45\x52\x49" ],
		[ y9t.x1s,  												"\x45\x73\x74\x6f\x6e\x69\x61",													"\x45\x73\x74\x6f\x6e\x69\x61",														"\x65\x65", "\x45\x53\x54" ],
		[ y9t.s1f,  											  "\x45\x74\x68\x69\x6f\x70\x69\x61",												  "\x45\x74\x68\x69\x6f\x70\x69\x61",													 	"\x65\x74", "\x45\x54\x48" ],
		[ y9t.m0s,  								"\x46\x61\x6c\x6b\x6c\x61\x6e\x64\x49\x73\x6c\x61\x6e\x64\x73",									"\x45\x6e\x67\x6c\x61\x6e\x64",														"\x66\x6b", "\x46\x4c\x4b" ], 
		[ y9t.l0u,  									  "\x46\x61\x72\x6f\x65\x49\x73\x6c\x61\x6e\x64\x73",										  "\x46\x61\x72\x6f\x65\x73",														 	"\x66\x6f", "\x46\x52\x4f" ],
		[ y9t.z1u,  													  "\x46\x69\x6a\x69",														  "\x46\x69\x6a\x69",															 	"\x66\x6a", "\x46\x4a\x49" ],
		[ y9t.l0t,  												"\x46\x69\x6e\x6c\x61\x6e\x64",													"\x46\x69\x6e\x6c\x61\x6e\x64",														"\x66\x69", "\x46\x49\x4e" ],
		[ y9t.g6l,  												  "\x46\x72\x61\x6e\x63\x65",													  "\x46\x72\x61\x6e\x63\x65",														 	"\x66\x72", "\x46\x52\x41" ],
		[ y9t.m8e,  									  "\x46\x72\x65\x6e\x63\x68\x47\x75\x69\x61\x6e\x61",										  "\x47\x75\x79\x61\x6e\x61", 														"\x67\x66", "\x47\x55\x46" ], 
		[ y9t.s4g,  								"\x46\x72\x65\x6e\x63\x68\x50\x6f\x6c\x79\x6e\x65\x73\x69\x61",									"\x54\x61\x68\x69\x74\x69\x28\x46\x72\x65\x6e\x63\x68\x20\x50\x6f\x6c\x69\x6e\x65\x73\x69\x61\x29", 					"\x70\x66", "\x50\x59\x46" ], 
		[ y9t.z1c,  			"\x46\x72\x65\x6e\x63\x68\x53\x6f\x75\x74\x68\x65\x72\x6e\x54\x65\x72\x72\x69\x74\x6f\x72\x69\x65\x73",				"\x46\x72\x65\x6e\x63\x68\x20\x53\x6f\x75\x74\x68\x65\x72\x6e\x20\x61\x6e\x64\x20\x41\x6e\x74\x61\x72\x63\x74\x69\x63\x20\x4c\x61\x6e\x64\x73","\x74\x66", "\x41\x54\x46" ],
		[ y9t.y6w,  													"\x47\x61\x62\x6f\x6e",														"\x47\x61\x62\x6f\x6e",															"\x67\x61", "\x47\x41\x42" ], 
		[ y9t.a5v,  												  "\x47\x61\x6d\x62\x69\x61",													  "\x47\x61\x6d\x62\x69\x61",															"\x67\x6d", "\x47\x4d\x42" ],
		[ y9t.w4b,  												"\x47\x65\x6f\x72\x67\x69\x61",													"\x47\x65\x6f\x72\x67\x69\x61",														"\x67\x65", "\x47\x45\x4f" ],
		[ y9t.d0h,  												"\x47\x65\x72\x6d\x61\x6e\x79",													"\x47\x65\x72\x6d\x61\x6e\x79",														"\x64\x65", "\x44\x45\x55" ],
		[ y9t.k9o, 													  "\x47\x68\x61\x6e\x61",														"\x47\x68\x61\x6e\x61",															"\x67\x68", "\x47\x48\x41" ],
		[ y9t.x2e,  											"\x47\x69\x62\x72\x61\x6c\x74\x61\x72",												"\x47\x69\x62\x72\x61\x6c\x74\x61\x72",													"\x67\x69", "\x47\x49\x42" ],
		[ y9t.j8s,  												  "\x47\x72\x65\x65\x63\x65",													  "\x47\x72\x65\x65\x63\x65",															"\x67\x72", "\x47\x52\x43" ],
		[ y9t.n1z,  											"\x47\x72\x65\x65\x6e\x6c\x61\x6e\x64",												"\x47\x72\x65\x65\x6e\x6c\x61\x6e\x64",													"\x67\x6c", "\x47\x52\x4c" ],
		[ y9t.w6p,  												"\x47\x72\x65\x6e\x61\x64\x61",													"\x47\x72\x65\x6e\x61\x64\x61",														"\x67\x64", "\x47\x52\x44" ],
		[ y9t.o6s,  										  "\x47\x75\x61\x64\x65\x6c\x6f\x75\x70\x65",											  "\x47\x75\x61\x64\x65\x6c\x6f\x75\x70\x65",													"\x67\x70", "\x47\x4c\x50" ],
		[ y9t.n4d,  													  "\x47\x75\x61\x6d",														  "\x47\x75\x61\x6d",																"\x67\x75", "\x47\x55\x4d" ],
		[ y9t.c7t,  											"\x47\x75\x61\x74\x65\x6d\x61\x6c\x61",												"\x47\x75\x61\x74\x65\x6d\x61\x6c\x61",													"\x67\x74", "\x47\x54\x4d" ],
		[ y9t.y5j,  											  "\x47\x75\x65\x72\x6e\x73\x65\x79",												  "\x47\x75\x65\x72\x6e\x73\x65\x79",														"\x67\x67", "\x47\x47\x59" ], 
		[ y9t.u5g,  												  "\x47\x75\x69\x6e\x65\x61",													  "\x47\x75\x69\x6e\x65\x61",															"\x67\x6e", "\x47\x49\x4e" ],
		[ y9t.g2w,  									  "\x47\x75\x69\x6e\x65\x61\x42\x69\x73\x73\x61\x75",										  "\x47\x75\x69\x6e\x65\x61\x2d\x42\x69\x73\x73\x61\x75",											"\x67\x77", "\x47\x4e\x42" ],
		[ y9t.z7n,  												  "\x47\x75\x79\x61\x6e\x61",													  "\x47\x75\x79\x61\x6e\x61",															"\x67\x79", "\x47\x55\x59" ],
		[ y9t.g2u,  													"\x48\x61\x69\x74\x69",														"\x48\x61\x69\x74\x69",															"\x68\x74", "\x48\x54\x49" ],
		[ y9t.r6a, 			"\x48\x65\x61\x72\x64\x49\x73\x6c\x61\x6e\x64\x4d\x63\x44\x6f\x6e\x61\x6c\x64\x49\x73\x6c\x61\x6e\x64\x73", 			"\x41\x75\x73\x74\x72\x61\x6c\x69\x61",   									  		"\x68\x6d", "\x48\x4d\x44" ],
		[ y9t.y3q,  			 	                "\x56\x61\x74\x69\x63\x61\x6e",	  			                "\x56\x61\x74\x69\x63\x61\x6e\x20\x43\x69\x74\x79", 											"\x76\x61", "\x56\x41\x54" ],
		[ y9t.p4l,  											  "\x48\x6f\x6e\x64\x75\x72\x61\x73",												  "\x48\x6f\x6e\x64\x75\x72\x61\x73",														"\x68\x6e", "\x48\x4e\x44" ],
		[ y9t.c8h,  											  "\x48\x6f\x6e\x67\x4b\x6f\x6e\x67",												  "\x48\x6f\x6e\x67\x20\x4b\x6f\x6e\x67",													"\x68\x6b", "\x48\x4b\x47" ],
		[ y9t.b7k,  											 	"\x48\x75\x6e\x67\x61\x72\x79",													"\x48\x75\x6e\x67\x61\x72\x79",														"\x68\x75", "\x48\x55\x4e" ],
		[ y9t.w0u,  											 	"\x49\x63\x65\x6c\x61\x6e\x64",													"\x49\x63\x65\x6c\x61\x6e\x64",														"\x69\x73", "\x49\x53\x4c" ],
		[ y9t.j4v,  												 	"\x49\x6e\x64\x69\x61",														"\x49\x6e\x64\x69\x61",															"\x69\x6e", "\x49\x4e\x44" ],
		[ y9t.u3h,  										 	"\x49\x6e\x64\x6f\x6e\x65\x73\x69\x61",												"\x49\x6e\x64\x6f\x6e\x65\x73\x69\x61",													"\x69\x64", "\x49\x44\x4e" ],
		[ y9t.n7b,  													  "\x49\x72\x61\x6e",														  "\x49\x72\x61\x6e",																"\x69\x72", "\x49\x52\x4e" ],
		[ y9t.n9a,  													  "\x49\x72\x61\x71",														  "\x49\x72\x61\x71",																"\x69\x71", "\x49\x52\x51" ],
		[ y9t.c1i,  											 	"\x49\x72\x65\x6c\x61\x6e\x64",													"\x49\x72\x65\x6c\x61\x6e\x64",														"\x69\x65", "\x49\x52\x4c" ],
		[ y9t.y9k,  										 	"\x49\x73\x6c\x65\x4f\x66\x4d\x61\x6e",												"\x49\x73\x6c\x65\x20\x6f\x66\x20\x4d\x61\x6e",												"\x69\x6d", "\x49\x4d\x4e" ],
		[ y9t.u8w,  												  "\x49\x73\x72\x61\x65\x6c",													  "\x49\x73\x72\x61\x65\x6c",															"\x69\x6c", "\x49\x53\x52" ],
		[ y9t.q7n,  												 	"\x49\x74\x61\x6c\x79",														"\x49\x74\x61\x6c\x79",															"\x69\x74", "\x49\x54\x41" ],
		[ y9t.v4z,  											 	"\x4a\x61\x6d\x61\x69\x63\x61",													"\x4a\x61\x6d\x61\x69\x63\x61",														"\x6a\x6d", "\x4a\x41\x4d" ],
		[ y9t.a5j,  											  "\x4a\x61\x6e\x4d\x61\x79\x65\x6e",								  			  "\x4e\x6f\x72\x77\x61\x79", 														"\x78\x34", "\x58\x58\x34" ], 
		[ y9t.z1t,  												 	"\x4a\x61\x70\x61\x6e",														"\x4a\x61\x70\x61\x6e",															"\x6a\x70", "\x4a\x50\x4e" ],
		[ y9t.p0z,  												  "\x4a\x65\x72\x73\x65\x79",													  "\x4a\x65\x72\x73\x65\x79",															"\x6a\x65", "\x4a\x45\x59" ],
		[ y9t.a7p,  												  "\x4a\x6f\x72\x64\x61\x6e",													  "\x4a\x6f\x72\x64\x61\x6e",															"\x6a\x6f", "\x4a\x4f\x52" ],
		[ y9t.r5t,  										  "\x4b\x61\x7a\x61\x6b\x68\x73\x74\x61\x6e",											  "\x4b\x61\x7a\x61\x6b\x68\x73\x74\x61\x6e",													"\x6b\x7a", "\x4b\x41\x5a" ],
		[ y9t.e0p,  												 	"\x4b\x65\x6e\x79\x61",														"\x4b\x65\x6e\x79\x61",															"\x6b\x65", "\x4b\x45\x4e" ],
		[ y9t.k9d,  											  "\x4b\x69\x72\x69\x62\x61\x74\x69",												  "\x4b\x69\x72\x69\x62\x61\x74\x69",														"\x6b\x69", "\x4b\x49\x52" ],
		[ y9t.z6x,  										  "\x4b\x6f\x72\x65\x61\x4e\x6f\x72\x74\x68",											  "\x4e\x6f\x72\x74\x68\x20\x4b\x6f\x72\x65\x61",												"\x6b\x70", "\x50\x52\x4b" ], 
		[ y9t.e0m,  										  "\x4b\x6f\x72\x65\x61\x53\x6f\x75\x74\x68",	 	  								  "\x53\x6f\x75\x74\x68\x20\x4b\x6f\x72\x65\x61", 												"\x6b\x72", "\x4b\x4f\x52" ], 
		[ y9t.l0b,  												  "\x4b\x6f\x73\x6f\x76\x6f",													  "\x4b\x6f\x73\x6f\x76\x6f",															"\x78\x35", "\x52\x4b\x53" ],
		[ y9t.x9o,  												  "\x4b\x75\x77\x61\x69\x74",													  "\x4b\x75\x77\x61\x69\x74",															"\x6b\x77", "\x4b\x57\x54" ],
		[ y9t.m2z,  										  "\x4b\x79\x72\x67\x79\x7a\x73\x74\x61\x6e",											  "\x4b\x79\x72\x67\x79\x7a\x73\x74\x61\x6e",													"\x6b\x67", "\x4b\x47\x5a" ],
		[ y9t.e4d,  													  "\x4c\x61\x6f\x73",														  "\x4c\x61\x6f\x73",																"\x6c\x61", "\x4c\x41\x4f" ],
		[ y9t.y0w, 	 											 	"\x4c\x61\x74\x76\x69\x61",													  "\x4c\x61\x74\x76\x69\x61",															"\x6c\x76", "\x4c\x56\x41" ],
		[ y9t.y1o,  											 	"\x4c\x65\x62\x61\x6e\x6f\x6e",													"\x4c\x65\x62\x61\x6e\x6f\x6e",														"\x6c\x62", "\x4c\x42\x4e" ],
		[ y9t.d4w, 												  "\x4c\x65\x73\x6f\x74\x68\x6f",													"\x4c\x65\x73\x6f\x74\x68\x6f",														"\x6c\x73", "\x4c\x53\x4f" ],
		[ y9t.e7b,  											 	"\x4c\x69\x62\x65\x72\x69\x61",													"\x4c\x69\x62\x65\x72\x69\x61",														"\x6c\x72", "\x4c\x42\x52" ],
		[ y9t.k5f,  												 	"\x4c\x69\x62\x79\x61",														"\x4c\x69\x62\x79\x61",															"\x6c\x79", "\x4c\x42\x59" ],
		[ y9t.l2s,  								 	"\x4c\x69\x65\x63\x68\x74\x65\x6e\x73\x74\x65\x69\x6e",										"\x4c\x69\x65\x63\x68\x74\x65\x6e\x73\x74\x65\x69\x6e",											"\x6c\x69", "\x4c\x49\x45" ],
		[ y9t.a7h,  										 	"\x4c\x69\x74\x68\x75\x61\x6e\x69\x61",												"\x4c\x69\x74\x68\x75\x61\x6e\x69\x61",													"\x6c\x74", "\x4c\x54\x55" ],
		[ y9t.w5s,  										  "\x4c\x75\x78\x65\x6d\x62\x6f\x75\x72\x67",											  "\x4c\x75\x78\x65\x6d\x62\x6f\x75\x72\x67",													"\x6c\x75", "\x4c\x55\x58" ],
		[ y9t.macau,  												 	"\x4d\x61\x63\x61\x75",														"\x4d\x61\x63\x61\x75",															"\x6d\x6f", "\x4d\x41\x43" ],
		[ y9t.d9r,  	  					 	  "\x4e\x6f\x72\x74\x68\x4d\x61\x63\x65\x64\x6f\x6e\x69\x61",	   							  "\x4d\x61\x63\x65\x64\x6f\x6e\x69\x61",													"\x6d\x6b", "\x4d\x4b\x44" ],
		[ y9t.r4p,  										  "\x4d\x61\x64\x61\x67\x61\x73\x63\x61\x72",											  "\x4d\x61\x64\x61\x67\x61\x73\x63\x61\x72",													"\x6d\x67", "\x4d\x44\x47" ],
		[ y9t.o4x,  												  "\x4d\x61\x6c\x61\x77\x69",													  "\x4d\x61\x6c\x61\x77\x69",															"\x6d\x77", "\x4d\x57\x49" ],
		[ y9t.d0x,  											  "\x4d\x61\x6c\x61\x79\x73\x69\x61",												  "\x4d\x61\x6c\x61\x79\x73\x69\x61",														"\x6d\x79", "\x4d\x59\x53" ],
		[ y9t.x9q,  											  "\x4d\x61\x6c\x64\x69\x76\x65\x73",												  "\x4d\x61\x6c\x64\x69\x76\x65\x73",														"\x6d\x76", "\x4d\x44\x56" ],
		[ y9t.l5j, 													 	"\x4d\x61\x6c\x69",														  "\x4d\x61\x6c\x69",																"\x6d\x6c", "\x4d\x4c\x49" ],
		[ y9t.r0m,  												 	"\x4d\x61\x6c\x74\x61",														"\x4d\x61\x6c\x74\x61",															"\x6d\x74", "\x4d\x4c\x54" ],
		[ y9t.k8x,  							 	"\x4d\x61\x72\x73\x68\x61\x6c\x6c\x49\x73\x6c\x61\x6e\x64\x73",									"\x4d\x61\x72\x73\x68\x61\x6c\x6c\x20\x49\x73\x6c\x61\x6e\x64\x73",										"\x6d\x68", "\x4d\x48\x4c" ],
		[ y9t.o7l,  										  "\x4d\x61\x72\x74\x69\x6e\x69\x71\x75\x65",											  "\x4d\x61\x72\x74\x69\x6e\x69\x71\x75\x65",													"\x6d\x71", "\x4d\x54\x51" ],
		[ y9t.g2y,  										  "\x4d\x61\x75\x72\x69\x74\x61\x6e\x69\x61",											  "\x4d\x61\x75\x72\x69\x74\x61\x6e\x69\x61",													"\x6d\x72", "\x4d\x52\x54" ],
		[ y9t.w7x,  										 	"\x4d\x61\x75\x72\x69\x74\x69\x75\x73",												"\x4d\x61\x75\x72\x69\x74\x69\x75\x73",													"\x6d\x75", "\x4d\x55\x53" ],
		[ y9t.q7l,  											  "\x4d\x61\x79\x6f\x74\x74\x65",													"\x4d\x61\x79\x6f\x74\x74\x65",														"\x79\x74", "\x4d\x59\x54" ],
		[ y9t.z3b,  												  "\x4d\x65\x78\x69\x63\x6f",													  "\x4d\x65\x78\x69\x63\x6f",															"\x6d\x78", "\x4d\x45\x58" ],
		[ y9t.h7u,  										  "\x4d\x69\x63\x72\x6f\x6e\x65\x73\x69\x61",											  "\x4d\x69\x63\x72\x6f\x6e\x65\x73\x69\x61",													"\x66\x6d", "\x46\x53\x4d" ],
		[ y9t.b4k,  											 	"\x4d\x6f\x6c\x64\x6f\x76\x61",													"\x4d\x6f\x6c\x64\x6f\x76\x61",														"\x6d\x64", "\x4d\x44\x41" ],
		[ y9t.f9c,  												  "\x4d\x6f\x6e\x61\x63\x6f",													  "\x4d\x6f\x6e\x61\x63\x6f",															"\x6d\x63", "\x4d\x43\x4f" ],
		[ y9t.j6z,  											  "\x4d\x6f\x6e\x67\x6f\x6c\x69\x61",												  "\x4d\x6f\x6e\x67\x6f\x6c\x69\x61",														"\x6d\x6e", "\x4d\x4e\x47" ],
		[ y9t.p8u,  										  "\x4d\x6f\x6e\x74\x65\x6e\x65\x67\x72\x6f",											  "\x4d\x6f\x6e\x74\x65\x6e\x65\x67\x72\x6f",													"\x6d\x65", "\x4d\x4e\x45" ],
		[ y9t.j8n,  										  "\x4d\x6f\x6e\x74\x73\x65\x72\x72\x61\x74",											  "\x4d\x6f\x6e\x74\x73\x65\x72\x72\x61\x74",													"\x6d\x73", "\x4d\x53\x52" ],
		[ y9t.i8r,  												"\x4d\x6f\x72\x6f\x63\x63\x6f",													"\x4d\x6f\x72\x6f\x63\x63\x6f",														"\x6d\x61", "\x4d\x41\x52" ],
		[ y9t.j7b,  										  "\x4d\x6f\x7a\x61\x6d\x62\x69\x71\x75\x65",											  "\x4d\x6f\x7a\x61\x6d\x62\x69\x71\x75\x65",													"\x6d\x7a", "\x4d\x4f\x5a" ],
		[ y9t.u3v, 												  "\x4d\x79\x61\x6e\x6d\x61\x72",													"\x4d\x79\x61\x6e\x6d\x61\x72\x28\x42\x75\x72\x6d\x61\x29", 										"\x6d\x6d", "\x4d\x4d\x52" ],
		[ y9t.z3c,  												"\x4e\x61\x6d\x69\x62\x69\x61",													"\x4e\x61\x6d\x69\x62\x69\x61",														"\x6e\x61", "\x4e\x41\x4d" ],
		[ y9t.v9m,  													"\x4e\x61\x75\x72\x75",														"\x4e\x61\x75\x72\x75",															"\x6e\x72", "\x4e\x52\x55" ],
		[ y9t.a0e,  													"\x4e\x65\x70\x61\x6c",														"\x4e\x65\x70\x61\x6c",															"\x6e\x70", "\x4e\x50\x4c" ],
		[ y9t.n2h,  										"\x54\x68\x65\x4e\x65\x74\x68\x65\x72\x6c\x61\x6e\x64\x73",	  							  "\x4e\x65\x74\x68\x65\x72\x6c\x61\x6e\x64\x73",												"\x6e\x6c", "\x4e\x4c\x44" ],
		[ y9t.c7n, 						  "\x4e\x65\x74\x68\x65\x72\x6c\x61\x6e\x64\x73\x41\x6e\x74\x69\x6c\x6c\x65\x73",							"\x4e\x65\x74\x68\x65\x72\x6c\x61\x6e\x64\x73\x20\x41\x6e\x74\x69\x6c\x6c\x65\x73",								"\x61\x6e", "\x41\x4e\x54" ],
		[ y9t.i5o,  									  "\x4e\x65\x77\x43\x61\x6c\x65\x64\x6f\x6e\x69\x61",										  "\x4e\x65\x77\x20\x43\x61\x6c\x65\x64\x6f\x6e\x69\x61",											"\x6e\x63", "\x4e\x43\x4c" ],
		[ y9t.h3c,  										  "\x4e\x65\x77\x5a\x65\x61\x6c\x61\x6e\x64",											  "\x4e\x65\x77\x20\x5a\x65\x61\x6c\x61\x6e\x64",												"\x6e\x7a", "\x4e\x5a\x4c" ],
		[ y9t.i7j,  											"\x4e\x69\x63\x61\x72\x61\x67\x75\x61",												"\x4e\x69\x63\x61\x72\x61\x67\x75\x61",													"\x6e\x69", "\x4e\x49\x43" ],
		[ y9t.f4c,  													"\x4e\x69\x67\x65\x72",														"\x4e\x69\x67\x65\x72",															"\x6e\x65", "\x4e\x45\x52" ],
		[ y9t.w9f,  												"\x4e\x69\x67\x65\x72\x69\x61",													"\x4e\x69\x67\x65\x72\x69\x61",														"\x6e\x67", "\x4e\x47\x41" ],
		[ y9t.z0h,  													  "\x4e\x69\x75\x65",														  "\x4e\x69\x75\x65",																"\x6e\x75", "\x4e\x49\x55" ],
		[ y9t.i9c,  									"\x4e\x6f\x72\x66\x6f\x6c\x6b\x49\x73\x6c\x61\x6e\x64",										"\x4e\x6f\x72\x66\x6f\x6c\x6b", 														"\x6e\x66", "\x4e\x46\x4b" ],
		[ y9t.d3e,  								"\x4e\x6f\x72\x74\x68\x65\x72\x6e\x49\x72\x65\x6c\x61\x6e\x64",									"\x4e\x6f\x72\x74\x68\x65\x72\x6e\x20\x49\x72\x65\x6c\x61\x6e\x64",										"\x78\x36", "\x47\x42\x52" ], 
		[ y9t.f0g,  				  "\x4e\x6f\x72\x74\x68\x65\x72\x6e\x4d\x61\x72\x69\x61\x6e\x61\x49\x73\x6c\x61\x6e\x64\x73",					  "\x4e\x6f\x72\x74\x68\x65\x72\x6e\x20\x4d\x61\x72\x69\x61\x6e\x61",										"\x6d\x70", "\x4d\x4e\x50" ],
		[ y9t.u2o,  												  "\x4e\x6f\x72\x77\x61\x79",													  "\x4e\x6f\x72\x77\x61\x79",															"\x6e\x6f", "\x4e\x4f\x52" ],
		[ y9t.q1s,  													  "\x4f\x6d\x61\x6e",														  "\x4f\x6d\x61\x6e",																"\x6f\x6d", "\x4f\x4d\x4e" ],
		[ y9t.j7v,  											  "\x50\x61\x6b\x69\x73\x74\x61\x6e",												  "\x50\x61\x6b\x69\x73\x74\x61\x6e",														"\x70\x6b", "\x50\x41\x4b" ],
		[ y9t.q9x,  													"\x50\x61\x6c\x61\x75",														"\x50\x61\x6c\x61\x75",															"\x70\x77", "\x50\x4c\x57" ],
		[ y9t.u4f,  											"\x50\x61\x6c\x65\x73\x74\x69\x6e\x65",												"\x50\x61\x6c\x65\x73\x74\x69\x6e\x65",													"\x70\x73", "\x50\x53\x45" ],
		[ y9t.d7j,  												  "\x50\x61\x6e\x61\x6d\x61",													  "\x50\x61\x6e\x61\x6d\x61",															"\x70\x61", "\x50\x41\x4e" ],
		[ y9t.r8j,  								  "\x50\x61\x70\x75\x61\x4e\x65\x77\x47\x75\x69\x6e\x65\x61",									  "\x50\x61\x70\x75\x61\x20\x4e\x65\x77\x20\x47\x75\x69\x6e\x65\x61",										"\x70\x67", "\x50\x4e\x47" ],
		[ y9t.e2z,  											  "\x50\x61\x72\x61\x67\x75\x61\x79",												  "\x50\x61\x72\x61\x67\x75\x61\x79",														"\x70\x79", "\x50\x52\x59" ],
		[ y9t.y3m,  													  "\x50\x65\x72\x75",														  "\x50\x65\x72\x75",																"\x70\x65", "\x50\x45\x52" ],
		[ y9t.u2j,  										"\x50\x68\x69\x6c\x69\x70\x70\x69\x6e\x65\x73",											"\x50\x68\x69\x6c\x69\x70\x70\x69\x6e\x65\x73",												"\x70\x68", "\x50\x48\x4c" ],
		[ y9t.u0w,  											  "\x50\x69\x74\x63\x61\x69\x72\x6e",												  "\x50\x69\x74\x63\x61\x69\x72\x6e",														"\x70\x6e", "\x50\x43\x4e" ],
		[ y9t.j3u,  												  "\x50\x6f\x6c\x61\x6e\x64",													  "\x50\x6f\x6c\x61\x6e\x64",															"\x70\x6c", "\x50\x4f\x4c" ],
		[ y9t.m0l,  											  "\x50\x6f\x72\x74\x75\x67\x61\x6c",												  "\x50\x6f\x72\x74\x75\x67\x61\x6c",														"\x70\x74", "\x50\x52\x54" ],
		[ y9t.k1w,  										  "\x50\x75\x65\x72\x74\x6f\x52\x69\x63\x6f",											  "\x50\x75\x65\x72\x74\x6f\x20\x52\x69\x63\x6f",												"\x70\x72", "\x50\x52\x49" ],
		[ y9t.o1z,  													"\x51\x61\x74\x61\x72",														"\x51\x61\x74\x61\x72",															"\x71\x61", "\x51\x41\x54" ],
		[ y9t.z7m,  												"\x52\x65\x75\x6e\x69\x6f\x6e",													"\x52\x65\x75\x6e\x69\x6f\x6e",														"\x72\x65", "\x52\x45\x55" ],
		[ y9t.t3j,  												"\x52\x6f\x6d\x61\x6e\x69\x61",													"\x52\x6f\x6d\x61\x6e\x69\x61",														"\x72\x6f", "\x52\x4f\x55" ],
		[ y9t.j2e,  												  "\x52\x75\x73\x73\x69\x61",													  "\x52\x75\x73\x73\x69\x61\x6e\x20\x46\x65\x64\x65\x72\x61\x74\x69\x6f\x6e", 								"\x72\x75", "\x52\x55\x53" ],
		[ y9t.p0n,  												  "\x52\x77\x61\x6e\x64\x61",													  "\x52\x77\x61\x6e\x64\x61",															"\x72\x77", "\x52\x57\x41" ],
		[ y9t.l5k,  								"\x53\x61\x69\x6e\x74\x42\x61\x72\x74\x68\x65\x6c\x65\x6d\x79",									"\x53\x61\x69\x6e\x74\x20\x42\x61\x72\x74\x68\x65\x6c\x65\x6d\x79", 									"\x62\x6c", "\x42\x4c\x4d" ],
		[ y9t.f2g,  										"\x53\x61\x69\x6e\x74\x48\x65\x6c\x65\x6e\x61",											"\x53\x61\x69\x6e\x74\x20\x48\x65\x6c\x65\x6e\x61", 											"\x73\x68", "\x53\x48\x4e" ], 
		[ y9t.h3o,  								"\x53\x61\x69\x6e\x74\x4b\x69\x74\x74\x73\x4e\x65\x76\x69\x73",									"\x53\x74\x20\x4b\x69\x74\x74\x73\x20\x26\x20\x4e\x65\x76\x69\x73", 									"\x6b\x6e", "\x4b\x4e\x41" ], 
		[ y9t.y5t, 											"\x53\x61\x69\x6e\x74\x4c\x75\x63\x69\x61",											  "\x53\x61\x69\x6e\x74\x20\x4c\x75\x63\x69\x61", 												"\x6c\x63", "\x4c\x43\x41" ], 
		[ y9t.y9o,  					"\x53\x61\x69\x6e\x74\x4d\x61\x72\x74\x69\x6e\x46\x72\x65\x6e\x63\x68\x50\x61\x72\x74",  					"\x53\x61\x69\x6e\x74\x20\x4d\x61\x72\x74\x69\x6e", 											"\x6d\x66", "\x4d\x41\x46" ],
		[ y9t.m4a,  						"\x53\x61\x69\x6e\x74\x50\x69\x65\x72\x72\x65\x4d\x69\x71\x75\x65\x6c\x6f\x6e",							"\x53\x61\x69\x6e\x74\x20\x50\x69\x65\x72\x72\x65\x20\x61\x6e\x64\x20\x4d\x69\x71\x75\x65\x6c\x6f\x6e", 					"\x70\x6d", "\x53\x50\x4d" ], 
		[ y9t.z2a,  				  "\x53\x61\x69\x6e\x74\x56\x69\x6e\x63\x65\x6e\x74\x47\x72\x65\x6e\x61\x64\x69\x6e\x65\x73",					  "\x53\x74\x20\x56\x69\x6e\x63\x65\x6e\x74\x20\x26\x20\x74\x68\x65\x20\x47\x72\x65\x6e\x61\x64\x69\x6e\x65\x73", 				"\x76\x63", "\x56\x43\x54" ], 
		[ y9t.g8c,  													"\x53\x61\x6d\x6f\x61",														"\x53\x61\x6d\x6f\x61",															"\x77\x73", "\x57\x53\x4d" ],
		[ y9t.m4j,  											"\x53\x61\x6e\x4d\x61\x72\x69\x6e\x6f",												"\x53\x61\x6e\x20\x4d\x61\x72\x69\x6e\x6f",													"\x73\x6d", "\x53\x4d\x52" ],
		[ y9t.t9c,  								"\x53\x61\x6f\x54\x6f\x6d\x65\x50\x72\x69\x6e\x63\x69\x70\x65",									"\x53\x61\x6f\x20\x54\x6f\x6d\x65\x20\x26\x20\x50\x72\x69\x6e\x63\x69\x70\x65", 								"\x73\x74", "\x53\x54\x50" ],
		[ y9t.p5f,  										"\x53\x61\x75\x64\x69\x41\x72\x61\x62\x69\x61",											"\x53\x61\x75\x64\x69\x20\x41\x72\x61\x62\x69\x61", 											"\x73\x61", "\x53\x41\x55" ],
		[ y9t.l0y,  											  "\x53\x63\x6f\x74\x6c\x61\x6e\x64",												  "\x53\x63\x6f\x74\x6c\x61\x6e\x64",														"\x78\x37", "\x47\x42\x52" ],
		[ y9t.j6b,  												"\x53\x65\x6e\x65\x67\x61\x6c",													"\x53\x65\x6e\x65\x67\x61\x6c",														"\x73\x6e", "\x53\x45\x4e" ],
		[ y9t.t3y,  												  "\x53\x65\x72\x62\x69\x61",													  "\x53\x65\x72\x62\x69\x61\x28\x59\x75\x67\x6f\x73\x6c\x61\x76\x69\x61\x29", 								"\x72\x73", "\x53\x52\x42" ],
		[ y9t.n4b,  										  "\x53\x65\x79\x63\x68\x65\x6c\x6c\x65\x73",											  "\x53\x65\x79\x63\x68\x65\x6c\x6c\x65\x73",													"\x73\x63", "\x53\x59\x43" ],
		[ y9t.m6w,  									  "\x53\x69\x65\x72\x72\x61\x4c\x65\x6f\x6e\x65",											"\x53\x69\x65\x72\x72\x61\x20\x4c\x65\x6f\x6e\x65",												"\x73\x6c", "\x53\x4c\x45" ],
		[ y9t.m8i,  										 	"\x53\x69\x6e\x67\x61\x70\x6f\x72\x65",												"\x53\x69\x6e\x67\x61\x70\x6f\x72\x65",													"\x73\x67", "\x53\x47\x50" ],
		[ y9t.z6e,						  "\x53\x69\x6e\x74\x4d\x61\x61\x72\x74\x65\x6e\x44\x75\x74\x63\x68\x50\x61\x72\x74",  					  "\x53\x69\x6e\x74\x20\x4d\x61\x61\x72\x74\x65\x6e",												"\x73\x78", "\x53\x58\x4d" ],
		[ y9t.y4v,  											  "\x53\x6c\x6f\x76\x61\x6b\x69\x61",												  "\x53\x6c\x6f\x76\x61\x6b\x69\x61",														"\x73\x6b", "\x53\x56\x4b" ],
		[ y9t.p3e,  											  "\x53\x6c\x6f\x76\x65\x6e\x69\x61",												  "\x53\x6c\x6f\x76\x65\x6e\x69\x61",														"\x73\x69", "\x53\x56\x4e" ],
		[ y9t.r7r,  								  "\x53\x6f\x6c\x6f\x6d\x6f\x6e\x49\x73\x6c\x61\x6e\x64\x73",									  "\x53\x6f\x6c\x6f\x6d\x6f\x6e\x20\x49\x73\x6c\x61\x6e\x64\x73", 										"\x73\x62", "\x53\x4c\x42" ],
		[ y9t.q6h,  											 	"\x53\x6f\x6d\x61\x6c\x69\x61",													"\x53\x6f\x6d\x61\x6c\x69\x61",														"\x73\x6f", "\x53\x4f\x4d" ],
		[ y9t.z4c,  									 	"\x53\x6f\x75\x74\x68\x41\x66\x72\x69\x63\x61",											"\x53\x6f\x75\x74\x68\x20\x41\x66\x72\x69\x63\x61",												"\x7a\x61", "\x5a\x41\x46" ],
		[ y9t.p5u, "\x53\x6f\x75\x74\x68\x47\x65\x6f\x72\x67\x69\x61\x53\x6f\x75\x74\x68\x53\x61\x6e\x64\x77\x69\x63\x68\x49\x73\x6c\x61\x6e\x64\x73", "\x53\x6f\x75\x74\x68\x20\x47\x65\x6f\x72\x67\x69\x61\x20\x61\x6e\x64\x20\x53\x6f\x75\x74\x68\x20\x53\x61\x6e\x64\x77\x69\x63\x68", 	"\x67\x73", "\x53\x47\x53" ],
		[ y9t.w5l,  										  "\x53\x6f\x75\x74\x68\x53\x75\x64\x61\x6e",											  "\x53\x6f\x75\x74\x68\x65\x72\x6e\x20\x53\x75\x64\x61\x6e", 										"\x73\x73", "\x53\x53\x44" ],
		[ y9t.q8k,  									 	"\x53\x6f\x76\x69\x65\x74\x55\x6e\x69\x6f\x6e",											"\x53\x6f\x76\x69\x65\x74\x20\x55\x6e\x69\x6f\x6e", 			 								"\x73\x75", "\x55\x52\x53" ],
		[ y9t.q3j, 	 												  "\x53\x70\x61\x69\x6e",														"\x53\x70\x61\x69\x6e",															"\x65\x73", "\x45\x53\x50" ],
		[ y9t.i3u,  											  "\x53\x72\x69\x4c\x61\x6e\x6b\x61",												  "\x53\x72\x69\x20\x4c\x61\x6e\x6b\x61",													"\x6c\x6b", "\x4c\x4b\x41" ],
		[ y9t.r1n,  												 	"\x53\x75\x64\x61\x6e",														"\x53\x75\x64\x61\x6e",															"\x73\x64", "\x53\x44\x4e" ],
		[ y9t.o6p,  											  "\x53\x75\x72\x69\x6e\x61\x6d\x65",												  "\x53\x75\x72\x69\x6e\x61\x6d\x65",														"\x73\x72", "\x53\x55\x52" ], 
		[ y9t.b7r,  											  "\x53\x76\x61\x6c\x62\x61\x72\x64",												  "\x4e\x6f\x72\x77\x61\x79", 														"\x73\x6a", "\x53\x4a\x4d" ], 
		[ y9t.z0a,  										 	"\x53\x77\x61\x7a\x69\x6c\x61\x6e\x64",												"\x53\x77\x61\x7a\x69\x6c\x61\x6e\x64",													"\x73\x7a", "\x53\x57\x5a" ],
		[ y9t.u4z,  												  "\x53\x77\x65\x64\x65\x6e",													  "\x53\x77\x65\x64\x65\x6e",															"\x73\x65", "\x53\x57\x45" ],
		[ y9t.d6o,  									 	"\x53\x77\x69\x74\x7a\x65\x72\x6c\x61\x6e\x64",											"\x53\x77\x69\x74\x7a\x65\x72\x6c\x61\x6e\x64",												"\x63\x68", "\x43\x48\x45" ],
		[ y9t.u7g,  												 	"\x53\x79\x72\x69\x61",														"\x53\x79\x72\x69\x61",															"\x73\x79", "\x53\x59\x52" ],
		[ y9t.c5t,  												  "\x54\x61\x69\x77\x61\x6e",													  "\x54\x61\x69\x77\x61\x6e",															"\x74\x77", "\x54\x57\x4e" ],
		[ y9t.c3u,  										  "\x54\x61\x6a\x69\x6b\x69\x73\x74\x61\x6e",											  "\x54\x61\x6a\x69\x6b\x69\x73\x74\x61\x6e",													"\x74\x6a", "\x54\x4a\x4b" ],
		[ y9t.c1l,  											  "\x54\x61\x6e\x7a\x61\x6e\x69\x61",												  "\x54\x61\x6e\x7a\x61\x6e\x69\x61",														"\x74\x7a", "\x54\x5a\x41" ],
		[ y9t.u4a, 											  "\x54\x68\x61\x69\x6c\x61\x6e\x64",												  "\x54\x68\x61\x69\x6c\x61\x6e\x64",														"\x74\x68", "\x54\x48\x41" ],
		[ y9t.q0q,  										  "\x54\x69\x6d\x6f\x72\x4c\x65\x73\x74\x65",	  									  "\x54\x69\x6d\x6f\x72\x2d\x4c\x65\x73\x74\x65", 												"\x74\x6c", "\x54\x4c\x53" ], 
		[ y9t.g5c, 													 	"\x54\x6f\x67\x6f",														  "\x54\x6f\x67\x6f",																"\x74\x67", "\x54\x47\x4f" ],
		[ y9t.b9r,  											 	"\x54\x6f\x6b\x65\x6c\x61\x75",													"\x54\x6f\x6b\x65\x6c\x61\x75",														"\x74\x6b", "\x54\x4b\x4c" ], 
		[ y9t.i1w,  												 	"\x54\x6f\x6e\x67\x61",														"\x54\x6f\x6e\x67\x61",															"\x74\x6f", "\x54\x4f\x4e" ],
		[ y9t.c2n,  								  "\x54\x72\x69\x6e\x69\x64\x61\x64\x54\x6f\x62\x61\x67\x6f",									  "\x54\x72\x69\x6e\x69\x64\x61\x64\x20\x26\x20\x54\x6f\x62\x61\x67\x6f", 									"\x74\x74", "\x54\x54\x4f" ],
		[ y9t.h3v,  												"\x54\x75\x6e\x69\x73\x69\x61",													"\x54\x75\x6e\x69\x73\x69\x61",														"\x74\x6e", "\x54\x55\x4e" ],
		[ y9t.v6e,  												  "\x54\x75\x72\x6b\x65\x79",													  "\x54\x75\x72\x6b\x65\x79",															"\x74\x72", "\x54\x55\x52" ],
		[ y9t.d9b,  									  "\x54\x75\x72\x6b\x6d\x65\x6e\x69\x73\x74\x61\x6e",										  "\x54\x75\x72\x6b\x6d\x65\x6e\x69\x73\x74\x61\x6e",												"\x74\x6d", "\x54\x4b\x4d" ],
		[ y9t.r7w,  						  "\x54\x75\x72\x6b\x73\x43\x61\x69\x63\x6f\x73\x49\x73\x6c\x61\x6e\x64\x73",							  "\x54\x75\x72\x6b\x73\x20\x61\x6e\x64\x20\x43\x61\x69\x63\x6f\x73\x20\x49\x73\x6c\x61\x6e\x64\x73", 					"\x74\x63", "\x54\x43\x41" ],
		[ y9t.k8j,  												  "\x54\x75\x76\x61\x6c\x75",													  "\x54\x75\x76\x61\x6c\x75", 														"\x74\x76", "\x54\x55\x56" ],
		[ y9t.o8j,  												  "\x55\x67\x61\x6e\x64\x61",													  "\x55\x67\x61\x6e\x64\x61",															"\x75\x67", "\x55\x47\x41" ],
		[ y9t.v2o,  											  "\x55\x6b\x72\x61\x69\x6e\x65",													"\x55\x6b\x72\x61\x69\x6e\x65",														"\x75\x61", "\x55\x4b\x52" ],
		[ y9t.r4i,  						  "\x55\x6e\x69\x74\x65\x64\x41\x72\x61\x62\x45\x6d\x69\x72\x61\x74\x65\x73",							  "\x55\x6e\x69\x74\x65\x64\x20\x41\x72\x61\x62\x20\x45\x6d\x69\x72\x61\x74\x65\x73",								"\x61\x65", "\x41\x52\x45" ],
		[ y9t.v5p,  									"\x55\x6e\x69\x74\x65\x64\x4b\x69\x6e\x67\x64\x6f\x6d",										"\x55\x6e\x69\x74\x65\x64\x20\x4b\x69\x6e\x67\x64\x6f\x6d\x28\x47\x72\x65\x61\x74\x20\x42\x72\x69\x74\x61\x69\x6e\x29", 			"\x67\x62", "\x47\x42\x52" ], 
		[ y9t.b3w,  									  "\x55\x6e\x69\x74\x65\x64\x53\x74\x61\x74\x65\x73",										  "\x55\x6e\x69\x74\x65\x64\x20\x53\x74\x61\x74\x65\x73\x20\x6f\x66\x20\x41\x6d\x65\x72\x69\x63\x61", 					"\x75\x73", "\x55\x53\x41" ],
		[ y9t.y2w, "\x55\x6e\x69\x74\x65\x64\x53\x74\x61\x74\x65\x73\x4d\x69\x6e\x6f\x72\x4f\x75\x74\x6c\x79\x69\x6e\x67\x49\x73\x6c\x61\x6e\x64\x73", "\x55\x6e\x69\x74\x65\x64\x20\x53\x74\x61\x74\x65\x73\x20\x6f\x66\x20\x41\x6d\x65\x72\x69\x63\x61",						"\x75\x6d", "\x55\x4d\x49" ],
		[ y9t.f9a,  										 		"\x55\x72\x75\x67\x75\x61\x79",													"\x55\x72\x75\x67\x75\x61\x79",														"\x75\x79", "\x55\x52\x59" ],
		[ y9t.t9m,  									 	  "\x55\x7a\x62\x65\x6b\x69\x73\x74\x61\x6e",											  "\x55\x7a\x62\x65\x6b\x69\x73\x74\x61\x6e",													"\x75\x7a", "\x55\x5a\x42" ],
		[ y9t.z8c,  										 		"\x56\x61\x6e\x75\x61\x74\x75",													"\x56\x61\x6e\x75\x61\x74\x75",														"\x76\x75", "\x56\x55\x54" ],
		[ y9t.r7t,  											"\x56\x65\x6e\x65\x7a\x75\x65\x6c\x61",												"\x56\x65\x6e\x65\x7a\x75\x65\x6c\x61",													"\x76\x65", "\x56\x45\x4e" ],
		[ y9t.b8s,  												"\x56\x69\x65\x74\x6e\x61\x6d",													"\x56\x69\x65\x74\x20\x4e\x61\x6d",														"\x76\x6e", "\x56\x4e\x4d" ],
		[ y9t.c0x,  					  "\x56\x69\x72\x67\x69\x6e\x49\x73\x6c\x61\x6e\x64\x73\x42\x72\x69\x74\x69\x73\x68",       			"\x56\x69\x72\x67\x69\x6e\x20\x49\x73\x6c\x61\x6e\x64\x73\x20\x42\x72\x69\x74\x69\x73\x68", 						"\x76\x67", "\x56\x47\x42" ],
		[ y9t.b3d,  								"\x56\x69\x72\x67\x69\x6e\x49\x73\x6c\x61\x6e\x64\x73\x55\x53",	  							"\x56\x69\x72\x67\x69\x6e\x20\x49\x73\x6c\x61\x6e\x64\x73\x20\x55\x53", 									"\x76\x69", "\x56\x49\x52" ],
		[ y9t.h1b,  													"\x57\x61\x6c\x65\x73",														"\x57\x61\x6c\x65\x73",															"\x78\x38", "\x47\x42\x52" ],
		[ y9t.d6v,  									  "\x57\x61\x6c\x6c\x69\x73\x46\x75\x74\x75\x6e\x61",										  "\x57\x61\x6c\x6c\x69\x73\x20\x61\x6e\x64\x20\x46\x75\x74\x75\x6e\x61",									"\x77\x66", "\x57\x4c\x46" ],
		[ y9t.z9b,  									"\x57\x65\x73\x74\x65\x72\x6e\x53\x61\x68\x61\x72\x61",										"\x57\x65\x73\x74\x65\x72\x6e\x20\x53\x61\x68\x61\x72\x61",											"\x65\x68", "\x45\x53\x48" ],
		[ y9t.o5l,  											 		"\x59\x65\x6d\x65\x6e",														"\x59\x65\x6d\x65\x6e",															"\x79\x65", "\x59\x45\x4d" ],
		[ y9t.o9a,  											 		"\x5a\x61\x69\x72\x65",														"",																		"\x7a\x72", "\x5a\x52\x4e" ], 
		[ y9t.i2b,  											 	  "\x5a\x61\x6d\x62\x69\x61",													  "\x5a\x61\x6d\x62\x69\x61",															"\x7a\x6d", "\x5a\x4d\x42" ],
		[ y9t.x5s,  										 	  "\x5a\x69\x6d\x62\x61\x62\x77\x65",												  "\x5a\x69\x6d\x62\x61\x62\x77\x65",														"\x7a\x77", "\x5a\x57\x45" ],
];

function z9t(r0t)
{
	return o6y[r0t][2];
}

function p0k(r0t)
{
	return o6y[r0t][4];
}

function f3e(n3r)
{
	for (const r0t of o6y)
	{
		if (r0t[4] == n3r)
		{
			return r0t[0];
		}
	}
	return y9t.b4x;
}

function o9o(z9n)
{
	for (const r0t of o6y)
	{
		if (r0t[3] == z9n)
		{
			return r0t[0];
		}
	}
	return y9t.b4x;
}
class a1u
{

constructor()
{
	this.s6r = '';
}

d3t(e6j)
{
	this.s6r += e6j;
}

c0z(e6j)
{
	this.s6r += e6j + '\n';
}

p2m()
{
	this.s6r += '\n';
}

}




function c6q(g9t, y3z)
{
	let q1x = Number(g9t);
	if (isNaN(q1x))
	{
		return y3z;
	}
	else
	{
		return q1x;
	}
}
