const	chess = true; 

const x2v =
{
	u3i    : 0,
	j8g  : 1,
	j7b  : 2,
	t7u    : 3,
  u0n   : 4,
	u7u    : 5,
	v9n    : 6,
	n5l  : 7,
	u3o  : 8,
	u3z    : 9,
	x9n   : 10,
	e7o    : 11,
	v9y        : 12,
};

const i1m =
{
	h9i        : 0,
	d7t        : 1,
};

const	a1 = 0;
const y7x = 1;
const e6r = 2;
const e7q = 3;
const a1e = 4;
const x1e = 5;
const a9r = 6;
const b6j = 7;
const	a2 = 8;
const q5b = 9;
const n4c = 10;
const d6h = 11;
const h3d = 12;
const c6i = 13;
const x3e = 14;
const g7q = 15;
const	a3 = 16;
const z4v = 17;
const y7p = 18;
const h5w = 19;
const a1v = 20;
const b7j = 21;
const p4i = 22;
const u2b = 23;
const	a4 = 24;
const o9f = 25;
const b3p = 26;
const k0v = 27;
const q4c = 28;
const b8x = 29;
const s6k = 30;
const v6u = 31;
const	a5 = 32;
const h5x = 33;
const n7t = 34;
const b2b = 35;
const g0w = 36;
const r3f = 37;
const b3y = 38;
const c5z = 39;
const	a6 = 40;
const l5o = 41;
const v3g = 42;
const n1m = 43;
const n7n = 44;
const b7t = 45;
const z1t = 46;
const x8e = 47;
const	a7 = 48;
const d9n = 49;
const h1p = 50;
const s1m = 51;
const x0u = 52;
const o2z = 53;
const o4i = 54;
const c4n = 55;
const	a8 = 56;
const a1r = 57;
const e6q = 58;
const y0l = 59;
const f6t = 60;
const p1d = 61;
const i7v = 62;
const m5x = 63;
const l6i = 64;

const f5c = 0;
const h2o = 1;
const z9p = 2;
const l3k = 3;
const h7d = 4;
const g9l = 5;
const o0q = 6;
const j5a = 7;
const l3r = 8;

const	rank_1 = 0;
const x5k = 1;
const f2o = 2;
const d2d = 3;
const d2t = 4;
const y1r = 5;
const l4r = 6;
const b7c = 7;
const j5y = 8;

const c4f        = 8;
const k2e       = 64;
const t5z      = 16;

const n1v =
[
	x2v.t7u,    
  x2v.j8g,  
  x2v.j7b,  
  x2v.u0n,   
  x2v.u7u,    
  x2v.j7b,  
  x2v.j8g,  
  x2v.t7u,    
	x2v.u3i,    
  x2v.u3i,    
  x2v.u3i,    
  x2v.u3i,    
  x2v.u3i,    
  x2v.u3i,    
  x2v.u3i,    
  x2v.u3i,    
	x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
	x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
	x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
	x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
	x2v.v9n,    
  x2v.v9n,    
  x2v.v9n,    
  x2v.v9n,    
  x2v.v9n,    
  x2v.v9n,    
  x2v.v9n,    
  x2v.v9n,    
	x2v.u3z,    
  x2v.n5l,  
  x2v.u3o,  
  x2v.x9n,   
  x2v.e7o,    
  x2v.u3o,  
  x2v.n5l,  
  x2v.u3z,    
];

const c6m =
[
	x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
	x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
	x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
	x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
	x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
	x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
	x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
	x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
  x2v.v9y,        
];

const b6d =
[
	a1, y7x, e6r, e7q, a1e, x1e, a9r, b6j,
	a2, q5b, n4c, d6h, h3d, c6i, x3e, g7q,
	a3, z4v, y7p, h5w, a1v, b7j, p4i, u2b,
	a4, o9f, b3p, k0v, q4c, b8x, s6k, v6u,
	a5, h5x, n7t, b2b, g0w, r3f, b3y, c5z,
	a6, l5o, v3g, n1m, n7n, b7t, z1t, x8e,
	a7, d9n, h1p, s1m, x0u, o2z, o4i, c4n,
	a8, a1r, e6q, y0l, f6t, p1d, i7v, m5x,
];

const v5x =
[
	f5c,
  h2o,
  z9p,
  l3k,
  h7d,
  g9l,
  o0q,
  j5a,
];

const f5s =
[
	rank_1,
  x5k,
  f2o,
  d2d,
  d2t,
  y1r,
  l4r,
  b7c,
];

function g9p(c1b)
{
	return c1b == x2v.v9n ||
		c1b == x2v.n5l ||
    c1b == x2v.u3o ||
    c1b == x2v.u3z ||
    c1b == x2v.x9n ||
    c1b == x2v.e7o;
}

function m9n(c1b)
{
	return c1b == x2v.u3i ||
		c1b == x2v.j8g ||
    c1b == x2v.j7b ||
    c1b == x2v.t7u ||
    c1b == x2v.u0n ||
    c1b == x2v.u7u;
}

function r7y(c1b)
{
	return c1b == x2v.u3i || c1b == x2v.v9n;
}

function d6a(c1b)
{
	return c1b == x2v.j8g || c1b == x2v.n5l;
}

function d8j(c1b)
{
	return c1b == x2v.j7b || c1b == x2v.u3o;
}

function l6c(c1b)
{
	return c1b == x2v.t7u || c1b == x2v.u3z;
}

function r9w(c1b)
{
	return c1b == x2v.u0n || c1b == x2v.x9n;
}

function c8t(c1b)
{
	return c1b == x2v.u7u || c1b == x2v.e7o;
}

function k8e(h5t)
{
	if (h5t == l6i)
	{
		return l6i;
	}
	else
	{
		return k2e - h5t - 1;
	}
}

const z1d =
[
	f5c, h2o, z9p, l3k, h7d, g9l, o0q, j5a,
	f5c, h2o, z9p, l3k, h7d, g9l, o0q, j5a,
	f5c, h2o, z9p, l3k, h7d, g9l, o0q, j5a,
	f5c, h2o, z9p, l3k, h7d, g9l, o0q, j5a,
	f5c, h2o, z9p, l3k, h7d, g9l, o0q, j5a,
	f5c, h2o, z9p, l3k, h7d, g9l, o0q, j5a,
	f5c, h2o, z9p, l3k, h7d, g9l, o0q, j5a,
	f5c, h2o, z9p, l3k, h7d, g9l, o0q, j5a,
];

function t2u(h5t)
{
	return z1d[h5t];
}

const e6j =
[
	rank_1, rank_1, rank_1, rank_1, rank_1, rank_1, rank_1, rank_1,
	x5k, x5k, x5k, x5k, x5k, x5k, x5k, x5k,
	f2o, f2o, f2o, f2o, f2o, f2o, f2o, f2o,
	d2d, d2d, d2d, d2d, d2d, d2d, d2d, d2d,
	d2t, d2t, d2t, d2t, d2t, d2t, d2t, d2t,
	y1r, y1r, y1r, y1r, y1r, y1r, y1r, y1r,
	l4r, l4r, l4r, l4r, l4r, l4r, l4r, l4r,
	b7c, b7c, b7c, b7c, b7c, b7c, b7c, b7c,
];

function l2r(h5t)
{
	return e6j[h5t];
}

function b5h(a, b)
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

function f7j(a, b)
{
	for (let i = 0; i < b.length; i++)
	{
		a[i] = b[i];
	}
}

function k1u(l5d, c1b)
{
	let u4v = 0;
	for (const value of l5d)
	{
		if (value == c1b)
		{
			u4v++;
		}
	}
	return u4v;
}

var stringToSquareMapInited = false;
const q1t = new Map();
function f9a()
{
  q1t.set("a1", a1);
  q1t.set("a2", a2);
  q1t.set("a3", a3);
  q1t.set("a4", a4);
  q1t.set("a5", a5);
  q1t.set("a6", a6);
  q1t.set("a7", a7);
  q1t.set("a8", a8);
  q1t.set("b1", y7x);
  q1t.set("b2", q5b);
  q1t.set("b3", z4v);
  q1t.set("b4", o9f);
  q1t.set("b5", h5x);
  q1t.set("b6", l5o);
  q1t.set("b7", d9n);
  q1t.set("b8", a1r);
  q1t.set("c1", e6r);
  q1t.set("c2", n4c);
  q1t.set("c3", y7p);
  q1t.set("c4", b3p);
  q1t.set("c5", n7t);
  q1t.set("c6", v3g);
  q1t.set("c7", h1p);
  q1t.set("c8", e6q);
  q1t.set("d1", e7q);
  q1t.set("d2", d6h);
  q1t.set("d3", h5w);
  q1t.set("d4", k0v);
  q1t.set("d5", b2b);
  q1t.set("d6", n1m);
  q1t.set("d7", s1m);
  q1t.set("d8", y0l);
  q1t.set("e1", a1e);
  q1t.set("e2", h3d);
  q1t.set("e3", a1v);
  q1t.set("e4", q4c);
  q1t.set("e5", g0w);
  q1t.set("e6", n7n);
  q1t.set("e7", x0u);
  q1t.set("e8", f6t);
  q1t.set("f1", x1e);
  q1t.set("f2", c6i);
  q1t.set("f3", b7j);
  q1t.set("f4", b8x);
  q1t.set("f5", r3f);
  q1t.set("f6", b7t);
  q1t.set("f7", o2z);
  q1t.set("f8", p1d);
  q1t.set("g1", a9r);
  q1t.set("g2", x3e);
  q1t.set("g3", p4i);
  q1t.set("g4", s6k);
  q1t.set("g5", b3y);
  q1t.set("g6", z1t);
  q1t.set("g7", o4i);
  q1t.set("g8", i7v);
  q1t.set("h1", b6j);
  q1t.set("h2", g7q);
  q1t.set("h3", u2b);
  q1t.set("h4", v6u);
  q1t.set("h5", c5z);
  q1t.set("h6", x8e);
  q1t.set("h7", c4n);
  q1t.set("h8", m5x);
}

function d9s(x1x)
{
  if (!stringToSquareMapInited)
  {
    f9a();
    stringToSquareMapInited = true;
  }
  if (q1t.has(x1x))
  {
    return q1t.get(x1x);
  }
  else
  {
		return l6i;
  }
}

function i2q(h5t)
{
  return y9c[h5t];
}

const n1h  = a9r;
const l4t  = x1e;
const q0l = e6r;
const s9z = e7q;
const z8a  = i7v;
const d4o  = p1d;
const w3w = e6q;
const y3t = y0l;

const y9c =
[
	"a1",	"b1",	"c1",	"d1",	"e1", "f1", "g1", "h1",
	"a2",	"b2",	"c2",	"d2",	"e2", "f2", "g2", "h2",
	"a3",	"b3",	"c3",	"d3",	"e3", "f3", "g3", "h3",
	"a4",	"b4",	"c4",	"d4",	"e4", "f4", "g4", "h4",
	"a5",	"b5",	"c5",	"d5",	"e5", "f5", "g5", "h5",
	"a6",	"b6",	"c6",	"d6",	"e6", "f6", "g6", "h6",
	"a7",	"b7",	"c7",	"d7",	"e7", "f7", "g7", "h7",
	"a8",	"b8",	"c8",	"d8",	"e8", "f8", "g8", "h8",
];

const m8o =
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

const p3r =
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




const h7o =
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

function n4n(h5t)
{
	return h7o[h5t];
}



















function g4l(w3l)
{
  if (w3l == '1')
  {
    return rank_1;
  }
  else if (w3l == '2')
  {
    return x5k;
  }
  else if (w3l == '3')
  {
    return f2o;
  }
  else if (w3l == '4')
  {
    return d2d;
  }
  else if (w3l == '5')
  {
    return d2t;
  }
  else if (w3l == '6')
  {
    return y1r;
  }
  else if (w3l == '7')
  {
    return l4r;
  }
  else if (w3l == '8')
  {
    return b7c;
  }
	else
	{
		return j5y;
	}
}

function t1d(w3l)
{
  if (w3l == 'a')
  {
    return f5c;
  }
  else if (w3l == 'b')
  {
    return h2o;
  }
  else if (w3l == 'c')
  {
    return z9p;
  }
  else if (w3l == 'd')
  {
    return l3k;
  }
  else if (w3l == 'e')
  {
    return h7d;
  }
  else if (w3l == 'f')
  {
    return g9l;
  }
  else if (w3l == 'g')
  {
    return o0q;
  }
  else if (w3l == 'h')
  {
    return j5a;
  }
  else
	{
		return l3r;
	}
}

function g1e(g3j)
{
  return p3r[g3j];
}

function w2k(c4e)
{
  return m8o[c4e];
}


class d5f
{

constructor()
{
	this.m8v = false;
	this.g6f = a1e;
	this.z7x = f6t;
	this.l4x = b6j;
	this.c6z = a1;
	this.i8g = m5x;
	this.q2f = a8;
	this.e3b = false;
	this.y4g = false;
	this.o6e = false;
	this.k6l = false;
	this.p3e = l6i;
}

a0s()
{
	let y2h = new d5f();
  return Object.assign(y2h, this);
}

}


class g8w
{

constructor()
{
  this.s8i = Array(k2e).fill(x2v.v9y);
 	this.q5n = i1m.h9i;
 	this.b0f = new d5f();
 	this.j0v();
}

a0s()
{
	let g6k = new g8w();
	f7j(g6k.s8i, this.s8i);
	g6k.q5n = this.q5n;
  g6k.b0f = this.b0f.a0s();
  g6k.whiteKing_ = this.whiteKing_;
	g6k.blackKing_ = this.blackKing_;
	return g6k;
}

g3i(v4m)
{
	return this.q5n == v4m.q5n &&
		b5h(this.s8i, v4m.s8i);
}

a3e(v4m)
{
	return !this.g3i(v4m);
}

d1x()
{
 	f7j(this.s8i, n1v);
 	this.q5n = i1m.h9i;
  this.b0f.m8v = false;
	this.b0f.g6f = a1e;
	this.b0f.z7x = f6t;
	this.b0f.l4x = b6j;
	this.b0f.c6z = a1;
	this.b0f.i8g = m5x;
	this.b0f.q2f = a8;
	this.b0f.p3e = l6i;
	this.b0f.e3b = true;
	this.b0f.y4g = true;
	this.b0f.o6e = true;
	this.b0f.k6l = true;
 	this.whiteKing_ = a1e;
	this.blackKing_ = f6t;
}

e2n()
{
	return this.q5n == i1m.h9i && this.q1l();
}

q1l()
{
	return b5h(this.s8i, n1v);
}

j0v()
{
	this.s8i.fill(x2v.v9y);
	this.q5n = i1m.h9i;
	this.b0f.m8v = false;
	this.b0f.g6f = a1e;
	this.b0f.z7x = f6t;
	this.b0f.l4x = b6j;
	this.b0f.c6z = a1;
	this.b0f.i8g = m5x;
	this.b0f.q2f = a8;
	this.b0f.p3e = l6i;
	this.b0f.e3b = false;
	this.b0f.y4g = false;
	this.b0f.o6e = false;
	this.b0f.k6l = false;
  this.whiteKing_ = l6i;
  this.blackKing_ = l6i;
}

u5i()
{
	return this.q5n == i1m.h9i && this.k0p();
}

k0p()
{
	return this.s8i.every(x2v.v9y);
}

l5d()
{
  return this.s8i.slice();
}

q2p(h5t)
{
	return this.s8i[h5t];
}

b6m(h5t, c1b)
{
	if (this.s8i[h5t] == x2v.u7u)
	{
		this.whiteKing_ = l6i;
	}
	else if (this.s8i[h5t] == x2v.e7o)
	{
		this.blackKing_ = l6i;
	}
	if (c1b == x2v.u7u)
	{
		this.whiteKing_ = h5t;
	}
	else if (c1b == x2v.e7o)
	{
		this.blackKing_ = h5t;
	}
	this.s8i[h5t] = c1b;
}

c7c()
{
	this.q5n = i1m.h9i;
}

t1y()
{
	this.q5n = i1m.d7t;
}

p7x()
{
	if (this.q5n == i1m.h9i)
	{
		this.q5n = i1m.d7t;
	}
	else
	{
		this.q5n = i1m.h9i;
	}
}

a2y()
{
	return this.q5n == i1m.h9i;
}

n5e()
{
	return this.q5n == i1m.d7t;
}

b0e(h5t)
{
	return this.s8i[h5t] == x2v.v9y;
}

m9n(h5t)
{
	let c1b = this.s8i[h5t];
	return c1b == x2v.u3i ||
		c1b == x2v.j8g ||
    c1b == x2v.j7b ||
    c1b == x2v.t7u ||
    c1b == x2v.u0n ||
    c1b == x2v.u7u;
}

g9p(h5t)
{
	let c1b = this.s8i[h5t];
	return c1b == x2v.v9n ||
		c1b == x2v.n5l ||
    c1b == x2v.u3o ||
    c1b == x2v.u3z ||
    c1b == x2v.x9n ||
    c1b == x2v.e7o;
}

m6o(h5t)
{
  let c1b = this.s8i[h5t];
	return c1b == x2v.u3i;
}

a0x(h5t)
{
  let c1b = this.s8i[h5t];
	return c1b == x2v.j8g;
}

u0y(h5t)
{
  let c1b = this.s8i[h5t];
	return c1b == x2v.j7b;
}

t1o(h5t)
{
  let c1b = this.s8i[h5t];
	return c1b == x2v.t7u;
}

e2r(h5t)
{
  let c1b = this.s8i[h5t];
	return c1b == x2v.u0n;
}

v5h(h5t)
{
  let c1b = this.s8i[h5t];
	return c1b == x2v.u7u;
}

f6y(h5t)
{
  let c1b = this.s8i[h5t];
	return c1b == x2v.v9n;
}

s2u(h5t)
{
  let c1b = this.s8i[h5t];
	return c1b == x2v.n5l;
}

q0d(h5t)
{
  let c1b = this.s8i[h5t];
	return c1b == x2v.u3o;
}

c2w(h5t)
{
  let c1b = this.s8i[h5t];
	return c1b == x2v.u3z;
}

l7a(h5t)
{
  let c1b = this.s8i[h5t];
	return c1b == x2v.x9n;
}

o6t(h5t)
{
  let c1b = this.s8i[h5t];
	return c1b == x2v.e7o;
}

b6n()
{
  let u4v = 0;
	for (const h5t of b6d)
	{
    if (this.m9n(h5t))
		{
			u4v++;
		}
	}
	return u4v;
}

h7c()
{
  let u4v = 0;
	for (const h5t of b6d)
	{
    if (this.g9p(h5t))
		{
			u4v++;
		}
	}
	return u4v;
}

l5v(v4y)
{
  this.b0f = v4y.a0s();
}

v4y()
{
  return this.b0f.a0s();
}

a0e(x8g)
{
 	this.b0f.p3e = l6i; 
	if (x8g.r7j())
	{
		this.p7x();
		return;
	}
	if (x8g.m9n())
	{
		if (x8g.w0o())
		{
			this.s8i[x8g.g4o] = x2v.v9y;
			if (x8g.m7e == x2v.u3z)
			{
				if (x8g.g4o == this.b0f.q2f)
				{
					this.b0f.k6l = false;
				}
				else if (x8g.g4o == this.b0f.i8g)
				{
					this.b0f.o6e = false;
				}
			}
		}
		this.s8i[x8g.a7j] = x2v.v9y;
		this.s8i[x8g.g5w] = x8g.a8g;
		if (x8g.a0b == x2v.u3i)
		{
			if ((x8g.g5w - x8g.a7j) == 16)
			{
				this.b0f.p3e = (x8g.a7j + 8);
			}
		}
		else if (x8g.a0b == x2v.t7u)
		{
			if (x8g.a7j == this.b0f.c6z)
			{
				this.b0f.y4g = false;
			}
			else if (x8g.a7j == this.b0f.l4x)
			{
				this.b0f.e3b = false;
			}
		}
		else if (x8g.a0b == x2v.u7u)
		{
			if (x8g.a0u())
			{
				if (x8g.g5w == q0l)
				{
					
					if (this.b0f.c6z != x8g.g5w)
					{
						this.s8i[this.b0f.c6z] = x2v.v9y;
					}
					this.s8i[s9z] = x2v.t7u;
				}
				else if (x8g.g5w == n1h)
				{
					
					if (this.b0f.l4x != x8g.g5w)
					{
						this.s8i[this.b0f.l4x] = x2v.v9y;
					}
					this.s8i[l4t] = x2v.t7u;
				}
			}
			this.b0f.y4g = false;
			this.b0f.e3b = false;
			this.whiteKing_ = x8g.g5w;
		}
	}
	else
	{
		if (x8g.w0o())
		{
			this.s8i[x8g.g4o] = x2v.v9y;
			if (x8g.m7e == x2v.t7u)
			{
				if (x8g.g4o == this.b0f.c6z)
				{
					this.b0f.y4g = false;
				}
				else if (x8g.g4o == this.b0f.l4x)
				{
					this.b0f.e3b = false;
				}
			}
		}
		this.s8i[x8g.a7j] = x2v.v9y;
		this.s8i[x8g.g5w] = x8g.a8g;
		if (x8g.a0b == x2v.v9n)
		{
			if ((x8g.g5w - x8g.a7j) == -16)
			{
				this.b0f.p3e = (x8g.a7j - 8);
			}
		}
		else if (x8g.a0b == x2v.u3z)
		{
			if (x8g.a7j == this.b0f.q2f)
			{
				this.b0f.k6l = false;
			}
			else if (x8g.a7j == this.b0f.i8g)
			{
				this.b0f.o6e = false;
			}
		}
		else if (x8g.a0b == x2v.e7o)
		{
			if (x8g.a0u())
			{
				if (x8g.g5w == w3w)
				{
					
					if (this.b0f.q2f != x8g.g5w)
					{
						this.s8i[this.b0f.q2f] = x2v.v9y;
					}
					this.s8i[y3t] = x2v.u3z;
				}
				else if (x8g.g5w == z8a)
				{
					
					if (this.b0f.i8g != x8g.g5w)
					{
						this.s8i[this.b0f.i8g] = x2v.v9y;
					}
					this.s8i[d4o] = x2v.u3z;
				}
			}
			this.b0f.k6l = false;
			this.b0f.o6e = false;
			this.blackKing_ = x8g.g5w;
		}
	}
	this.p7x();
}

g5u(x8g)
{
 	if (x8g.r7j())
	{
		this.p7x();
		return;
	}
	if (x8g.m9n())
	{
		this.s8i[x8g.g5w] = x2v.v9y;
		this.s8i[x8g.a7j] = x8g.a0b;
		if (x8g.a0b == x2v.u7u)
		{
			if (x8g.a0u())
			{
				if (x8g.g5w == q0l)
				{
					
					if (s9z != x8g.a7j)
					{
						this.s8i[s9z] = x2v.v9y;
					}
					this.s8i[this.b0f.c6z] = x2v.t7u;
				}
				else if (x8g.g5w == n1h)
				{
					
					if (l4t != x8g.a7j)
					{
						this.s8i[l4t] = x2v.v9y;
					}
					this.s8i[this.b0f.l4x] = x2v.t7u;
				}
			}
			this.whiteKing_ = x8g.a7j;
		}
		if (x8g.w0o())
		{
			this.s8i[x8g.g4o] = x8g.m7e;
		}
	}
	else
	{
		this.s8i[x8g.g5w] = x2v.v9y;
		this.s8i[x8g.a7j] = x8g.a0b;
		if (x8g.a0b == x2v.e7o)
		{
			if (x8g.a0u())
			{
				if (x8g.g5w == w3w)
				{
					
					if (y3t != x8g.a7j)
					{
						this.s8i[y3t] = x2v.v9y;
					}
					this.s8i[this.b0f.q2f] = x2v.u3z;
				}
				else if (x8g.g5w == z8a)
				{
					
					if (d4o != x8g.a7j)
					{
						this.s8i[d4o] = x2v.v9y;
					}
					this.s8i[this.b0f.i8g] = x2v.u3z;
				}
			}
			this.blackKing_ = x8g.a7j;
		}
		if (x8g.w0o())
		{
			this.s8i[x8g.g4o] = x8g.m7e;
		}
	}
	this.p7x();
}

u7u()
{
  return this.whiteKing_;
}

e7o()
{
  return this.blackKing_;
}

i4x()
{
	return this.b0f.e3b;
}

q7w()
{
	return this.b0f.y4g;
}

v2y()
{
	return this.b0f.o6e;
}

d3y()
{
	return this.b0f.k6l;
}

g6f()
{
  return this.b0f.g6f;
}

z7x()
{
  return this.b0f.z7x;
}

l4x()
{
  return this.b0f.l4x;
}

c6z()
{
  return this.b0f.c6z;
}

i8g()
{
  return this.b0f.i8g;
}

q2f()
{
  return this.b0f.q2f;
}

p3e()
{
  return this.b0f.p3e;
}

o4s()
{
	return this.b0f.m8v;
}

}
const e0z = 0;
const z8p   = 1;
const u7l  = e0z;

function v4x()
{
  let f8o = [];
	f8o.push("CBurnettt (Lichess)");
	f8o.push("Merida (Lichess)");
	return f8o;
}

class b2a
{

constructor()
{
	this.m0l = new j0n();
	this.b4a = null;
}

a0s()
{
	let z5g = new b2a();
	z5g.m0l = this.m0l.a0s();
	z5g.b4a = null;
	if (this.b4a)
	{
		z5g.b4a = this.b4a.a0s();
	}
	return z5g;
}

g3i(v4m)
{
	if (this.m0l.a3e(v4m))
	{
		return false;
	}
	return true;
}

a3e(v4m)
{
	return !this.g3i(v4m);
}

v9y()
{
	return this.m0l.v9y();
}

a7j()
{
	return this.m0l.a7j;
}

g5w()
{
	return this.m0l.g5w;
}

a0b()
{
	return this.m0l.a0b;
}

a8g()
{
	return this.m0l.a8g;
}

g4o()
{
	return this.m0l.g4o;
}

m7e()
{
	return this.m0l.m7e;
}

p3p()
{
	return this.m0l.p3p();
}

m9n()
{
	return this.m0l.m9n();
}

g9p()
{
	return this.m0l.g9p();
}

o2k()
{
	return this.m0l.o2k();
}

r7j()
{
	return this.m0l.r7j();
}

w0o()
{
	return this.m0l.w0o();
}

t9b()
{
	if (this.b4a == null)
	{
		this.b4a = new v0r();
	}
}

y3q()
{
	if (this.b4a)
	{
		if (this.b4a.v9y())
		{
			this.s4e();
		}
	}
}

w9g()
{
	return this.b4a != null;
}

s4e()
{
	this.b4a = null;
}

q6q(x0b)
{
	this.t9b();
	this.b4a = x0b.a0s();
}

u2n()
{
	return this.b4a;
}

e3h(v4m)
{
	if (this.b4a && !v4m.b4a)
	{
		return false;
	}
	if (!this.b4a && v4m.b4a)
	{
		return false;
	}
	if (!this.b4a && !v4m.b4a)
	{
		return true;
	}
	return this.b4a.g3i(v4m.b4a);
}

c9y()
{
	if (this.b4a)
	{
		this.b4a.b5p = '';
		this.y3q();
	}
}

t9j()
{
	if (this.b4a)
	{
		return this.b4a.b5p.length != 0;
	}
	else
	{
		return false;
	}
}

b5p()
{
	if (this.b4a)
	{
		return this.b4a.b5p;
	}
	else
	{
		return '';
	}
}

w3q(j8o)
{
	this.t9b();
	this.b4a.b5p = j8o;
	this.y3q();
}

m6n()
{
	if (this.b4a)
	{
		this.b4a.x1z = '';
		this.y3q();
	}
}

i2f()
{
	if (this.b4a)
	{
		return this.b4a.x1z.length != 0;
	}
	else
	{
		return false;
	}
}

x1z()
{
	if (this.b4a)
	{
		return this.b4a.x1z;
	}
	else
	{
		return '';
	}
}

z0h(j8o)
{
	this.t9b();
	this.b4a.x1z = j8o;
	this.y3q();
}

f2g()
{
	if (this.b4a)
	{
		this.b4a.b1f = f1z.c2f;
		this.y3q();
	}
}

l0o()
{
	if (this.b4a)
	{
		return this.b4a.b1f != f1z.c2f;
	}
	else
	{
		return false;
	}
}

b1f()
{
	if (this.b4a)
	{
		return this.b4a.b1f;
	}
	else
	{
		return f1z.c2f;
	}
}

b9h(b1f)
{
	this.t9b();
	this.b4a.b1f = b1f;
	this.y3q();
}

a7h()
{
	if (this.b4a)
	{
		this.b4a.style = n8u.c2f;
		this.y3q();
	}
}

g6r()
{
	if (this.b4a)
	{
		return this.b4a.style != n8u.c2f;
	}
	else
	{
		return false;
	}
}

style()
{
	if (this.b4a)
	{
		return this.b4a.style;
	}
	else
	{
		return n8u.c2f;
	}
}

r8u(style)
{
	this.t9b();
	this.b4a.style = style;
	this.y3q();
}

y1i()
{
	if (this.b4a)
	{
		this.b4a.value = w6u.c2f;
		this.y3q();
	}
}

p0i()
{
	if (this.b4a)
	{
		return this.b4a.value != w6u.c2f;
	}
	else
	{
		return false;
	}
}

value()
{
	if (this.b4a)
	{
		return this.b4a.value;
	}
	else
	{
		return w6u.c2f;
	}
}

n9a(value)
{
	this.t9b();
	this.b4a.value = value;
	this.y3q();
}

k9v()
{
	if (this.b4a)
	{
		this.b4a.a2l = o2p.c2f;
		this.y3q();
	}
}

y4l()
{
	if (this.b4a)
	{
		return this.b4a.a2l != o2p.c2f;
	}
	else
	{
		return false;
	}
}

a2l()
{
	if (this.b4a)
	{
		return this.b4a.a2l;
	}
	else
	{
		return o2p.c2f;
	}
}

t8m(a2l)
{
	this.t9b();
	this.b4a.a2l = a2l;
	this.y3q();
}

w8u()
{
  
}

d6j()
{
	if (this.b4a)
	{
 		if (this.b4a.b5p.length != 0)
    {
      let s0o = this.b4a.b5p.indexOf("[#]");
      return s0o != -1;
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

h1b()
{
  
}

k6i()
{
	if (this.b4a)
	{
		this.b4a.y9a = false;
		this.y3q();
	}
}

w2h()
{
	if (this.b4a)
	{
		return this.b4a.y9a;
	}
	else
	{
		return false;
	}
}

t3h()
{
	this.t9b();
	this.b4a.y9a = true;
	this.y3q();
}

v8u()
{
	if (this.b4a)
	{
		this.b4a.s5o = false;
		this.y3q();
	}
}

m1q()
{
	if (this.b4a)
	{
		return this.b4a.s5o;
	}
	else
	{
		return false;
	}
}

x9e()
{
	this.t9b();
	this.b4a.s5o = true;
	this.y3q();
}

s7x()
{
	if (this.b4a)
	{
		this.b4a.m3d.w2m();
		this.b4a.l2s.w2m();
		this.y3q();
	}
}

q4r()
{
	if (this.b4a)
	{
		return this.f1x() || this.b0s();
	}
	else
	{
		return false;
	}
}

r8e()
{
	if (this.b4a)
	{
		this.b4a.m3d.w2m();
		this.y3q();
	}
}

f1x()
{
	if (this.b4a)
	{
		return !this.b4a.m3d.v9y();
	}
	else
	{
		return false;
	}
}

m3d()
{
	if (this.b4a)
	{
		return this.b4a.m3d.a0s();
	}
	else
	{
		return new s7c();
	}
}

g5c(m3d)
{
	this.t9b();
	this.b4a.m3d = m3d.a0s();
	this.y3q();
}

p5j()
{
	if (this.b4a)
	{
		this.b4a.l2s.w2m();
		this.y3q();
	}
}

b0s()
{
	if (this.b4a)
	{
		return !this.b4a.l2s.v9y();
	}
	else
	{
		return false;
	}
}

l2s()
{
	if (this.b4a)
	{
		return this.b4a.l2s.a0s();
	}
	else
	{
		return new x6l();
	}
}

l6w(l2s)
{
	this.t9b();
	this.b4a.l2s = l2s.a0s();
	this.y3q();
}

v0d()
{
	if (this.b4a)
	{
		this.b4a.w7u.y0m();
		this.y3q();
	}
}

z3s()
{
	if (this.b4a)
	{
		return this.b4a.w7u.a1b();
	}
	else
	{
		return false;
	}
}

w7u()
{
	if (this.b4a)
	{
		return this.b4a.w7u.a0s();
	}
	else
	{
		return new s3i();
	}
}

l9z(w7u)
{
	this.t9b();
	this.b4a.w7u = w7u.a0s();
	this.y3q();
}

i9e(h9g)
{
	this.m0l = h9g.a0s();
	this.b4a = null;
}

h9g()
{
	let z4d = new j0n();
  return Object.assign(z4d, this.m0l);
}

}

function l4p(h9g)
{
  let p7l = new b2a();
  p7l.i9e(h9g);
  return p7l;
}
class j0n
{

constructor()
{
	this.a7j = l6i;
	this.a0b = x2v.v9y;
	this.g5w = l6i;
	this.a8g = x2v.v9y;
	this.g4o = l6i;
	this.e6x = x2v.v9y;
	this.type = q3c.c2f;
}

a0s()
{
	let z4d = new j0n();
	z4d.a7j = this.a7j;
	z4d.a0b = this.a0b;
	z4d.g5w = this.g5w;
	z4d.a8g = this.a8g;
	z4d.g4o = this.g4o;
	z4d.m7e = this.m7e;
	z4d.type = this.type;
	return z4d;
}

g3i(v4m)
{
	if (
		this.a7j != v4m.a7j ||
		this.a0b != v4m.a0b ||
		this.g5w != v4m.g5w ||
		this.a8g != v4m.a8g ||
		this.g4o != v4m.g4o ||
		this.m7e != v4m.m7e ||
    this.type != v4m.type)
	{
		return false;
	}
	else
	{
		return true;
	}
}

a3e(v4m)
{
	return !this.g3i(v4m);
}

v9y()
{
	return this.type == q3c.c2f;
}

m9n()
{
	return this.a0b == x2v.u3i ||
		this.a0b == x2v.j8g ||
    this.a0b == x2v.j7b ||
    this.a0b == x2v.t7u ||
    this.a0b == x2v.u0n ||
    this.a0b == x2v.u7u;
}

g9p()
{
	return this.a0b == x2v.v9n ||
		this.a0b == x2v.n5l ||
    this.a0b == x2v.u3o ||
    this.a0b == x2v.u3z ||
    this.a0b == x2v.x9n ||
    this.a0b == x2v.e7o;
}

w0o()
{
	return this.g4o != l6i;
}

o2k()
{
	return this.a0b != this.a8g;
}

g8o()
{
  return this.type == q3c.j3x;
}

r7j()
{
	return this.type == q3c.c2f;
}

a0u()
{
	return this.type == q3c.e6m;
}

p3p()
{
	if (this.w0o())
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

function d8g(l5d, h9g)
{
	if (h9g.type == q3c.n4w)
	{
		l5d[h9g.g5w] = l5d[h9g.a7j];
		l5d[h9g.a7j] = x2v.v9y;
	}
	else if (h9g.type == q3c.j3x)
	{
		let g4o = (h9g.g5w - 8);
		l5d[g4o] = x2v.v9y;
		l5d[h9g.g5w] = x2v.u3i;
		l5d[h9g.a7j] = x2v.v9y;
	}
	else if (h9g.type == q3c.h8a)
	{
		l5d[h9g.g5w] = x2v.u0n;
		l5d[h9g.a7j] = x2v.v9y;
	}
	else if (h9g.type == q3c.k1e)
	{
		l5d[h9g.g5w] = x2v.t7u;
		l5d[h9g.a7j] = x2v.v9y;
	}
	else if (h9g.type == q3c.c6a)
	{
		l5d[h9g.g5w] = x2v.j7b;
		l5d[h9g.a7j] = x2v.v9y;
	}
	else if (h9g.type == q3c.i6z)
	{
		l5d[h9g.g5w] = x2v.j8g;
		l5d[h9g.a7j] = x2v.v9y;
	}
}

function c3f(l5d, h9g)
{
	if (h9g.type == q3c.n4w)
	{
		l5d[h9g.g5w] = l5d[h9g.a7j];
		l5d[h9g.a7j] = x2v.v9y;
	}
	else if (h9g.type == q3c.j3x)
	{
		let g4o = (h9g.g5w + 8);
		l5d[g4o] = x2v.v9y;
		l5d[h9g.g5w] = x2v.v9n;
		l5d[h9g.a7j] = x2v.v9y;
	}
	else if (h9g.type == q3c.h8a)
	{
		l5d[h9g.g5w] = x2v.x9n;
		l5d[h9g.a7j] = x2v.v9y;
	}
	else if (h9g.type == q3c.k1e)
	{
		l5d[h9g.g5w] = x2v.u3z;
		l5d[h9g.a7j] = x2v.v9y;
	}
	else if (h9g.type == q3c.c6a)
	{
		l5d[h9g.g5w] = x2v.u3o;
		l5d[h9g.a7j] = x2v.v9y;
	}
	else if (h9g.type == q3c.i6z)
	{
		l5d[h9g.g5w] = x2v.n5l;
		l5d[h9g.a7j] = x2v.v9y;
	}
}

function a1j(l5d, h9g)
{
	if (h9g.g5w == q0l)
	{
		l5d[h9g.g5w] = x2v.u7u;
		l5d[h9g.a7j] = x2v.v9y;
		l5d[a1] = x2v.v9y; 
		l5d[s9z] = x2v.t7u;
	}
	else
	{
		l5d[h9g.g5w] = x2v.u7u;
		l5d[h9g.a7j] = x2v.v9y;
		l5d[b6j] = x2v.v9y; 
		l5d[l4t] = x2v.t7u;
	}
}

function v1h(l5d, h9g)
{
	if (h9g.g5w == w3w)
	{
		l5d[h9g.g5w] = x2v.e7o;
		l5d[h9g.a7j] = x2v.v9y;
		l5d[a8] = x2v.v9y; 
		l5d[y3t] = x2v.u3z;
	}
	else
	{
		l5d[h9g.g5w] = x2v.e7o;
		l5d[h9g.a7j] = x2v.v9y;
		l5d[m5x] = x2v.v9y; 
		l5d[d4o] = x2v.u3z;
	}
}

function r7z(l5d, h9g, v4y)
{
	if (h9g.g5w == q0l)
	{
		l5d[h9g.g5w] = x2v.u7u;
		l5d[h9g.a7j] = x2v.v9y;
		if (v4y.c6z != h9g.g5w)
		{
			l5d[v4y.c6z] = x2v.v9y;
		}
		l5d[s9z] = x2v.t7u;
	}
	else if (h9g.g5w == n1h)
	{
		l5d[h9g.g5w] = x2v.u7u;
		l5d[h9g.a7j] = x2v.v9y;
		if (v4y.l4x != h9g.g5w)
		{
			l5d[v4y.l4x] = x2v.v9y;
		}
		l5d[l4t] = x2v.t7u;
	}
}

function c8o(l5d, h9g, v4y)
{
	if (h9g.g5w == w3w)
	{
		l5d[h9g.g5w] = x2v.e7o;
		l5d[h9g.a7j] = x2v.v9y;
		if (v4y.q2f != h9g.g5w)
		{
			l5d[v4y.q2f] = x2v.v9y;
		}
		l5d[y3t] = x2v.u3z;
	}
	else if (h9g.g5w == z8a)
	{
		l5d[h9g.g5w] = x2v.e7o;
		l5d[h9g.a7j] = x2v.v9y;
		if (v4y.i8g != h9g.g5w)
		{
			l5d[v4y.i8g] = x2v.v9y;
		}
		l5d[d4o] = x2v.u3z;
	}
}

function e1k(h4h, h9g)
{
	let t0s = h4h.u7u();
	if (t0s == l6i) return true;
	if (h9g.a0b == x2v.u7u)
	{
		t0s = h9g.g5w;
	}
	let l5d = h4h.l5d();
	if (h9g.type == q3c.e6m)
	{
		if (h4h.o4s())
		{
			r7z(l5d, h9g, h4h.v4y());
		}
		else
		{
			a1j(l5d, h9g);
		}
	}
	else
	{
		d8g(l5d, h9g);
	}
	return !r3k(l5d, t0s);
}

function t6x(h4h, h9g)
{
	let t0s = h4h.e7o();
	if (t0s == l6i) return true;
	if (h9g.a0b == x2v.e7o)
	{
		t0s = h9g.g5w;
	}
	let l5d = h4h.l5d();
	if (h9g.type == q3c.e6m)
	{
		if (h4h.o4s())
		{
			c8o(l5d, h9g, h4h.v4y());
		}
		else
		{
			v1h(l5d, h9g);
		}
	}
	else
	{
		c3f(l5d, h9g);
	}
	return !e6o(l5d, t0s);
}

function k3x(m4t, h4h, a7j)
{
	if (l2r(a7j) == b7c)
	{
		return;
	}
	j5b(m4t, h4h, a7j);
	let g5w = northWestSquare[a7j];
	if (g5w != l6i)
	{
		g0g(m4t, h4h, a7j, g5w);
	}
	g5w = northEastSquare[a7j];
	if (g5w != l6i)
	{
		g0g(m4t, h4h, a7j, g5w);
	}
}

function r7w(m4t, h4h, a7j)
{
	if (l2r(a7j) == rank_1)
	{
		return;
	}
	z4a(m4t, h4h, a7j);
	let g5w = southEastSquare[a7j];
	if (g5w != l6i)
	{
		k6r(m4t, h4h, a7j, g5w);
	}
	g5w = southWestSquare[a7j];
	if (g5w != l6i)
	{
		k6r(m4t, h4h, a7j, g5w);
	}
}

function j5b(m4t, h4h, a7j)
{
	let g5w = (a7j + j4q);
	if (h4h.b0e(g5w))
	{
		if (l2r(a7j) == l4r)
		{
			y1b(m4t, h4h, a7j, g5w);
		}
		else
		{
			v9t(m4t, h4h, a7j, g5w, q3c.n4w);
			if (l2r(a7j) == x5k)
			{
				let g5w = (a7j + j4q + j4q);
				if (h4h.b0e(g5w))
				{
					v9t(m4t, h4h, a7j, g5w, q3c.n4w);
				}
			}
		}
	}
}

function z4a(m4t, h4h, a7j)
{
	let g5w = (a7j + v1o);
	if (h4h.b0e(g5w))
	{
		if (l2r(a7j) == x5k)
		{
			c1g(m4t, h4h, a7j, g5w);
		}
		else
		{
			v9t(m4t, h4h, a7j, g5w, q3c.n4w);
			if (l2r(a7j) == l4r)
			{
				let g5w = (a7j + v1o + v1o);
				if (h4h.b0e(g5w))
				{
					v9t(m4t, h4h, a7j, g5w, q3c.n4w);
				}
			}
		}
	}
}

function g0g(m4t, h4h, a7j, g5w)
{
	if (!h4h.g9p(g5w))
	{
		return;
	}
	if (l2r(a7j) == l4r)
	{
		q8j(m4t, h4h, a7j, g5w);
	}
	else
	{
		f5p(m4t, h4h, a7j, g5w, q3c.n4w);
	}
}

function k6r(m4t, h4h, a7j, g5w)
{
	if (!h4h.m9n(g5w))
	{
		return;
	}
	if (l2r(a7j) == x5k)
	{
		v5s(m4t, h4h, a7j, g5w);
	}
	else
	{
		f5p(m4t, h4h, a7j, g5w, q3c.n4w);
	}
}

function g1b(m4t, h4h, a7j, e1e)
{
	for (const g5w of e1e)
	{
		if (h4h.b0e(g5w))
		{
			v9t(m4t, h4h, a7j, g5w, q3c.n4w);
		}
		else if (h4h.g9p(g5w))
		{
			f5p(m4t, h4h, a7j, g5w, q3c.n4w);
		}
	}
}

function t5q(m4t, h4h, a7j, e1e)
{
	for (const g5w of e1e)
	{
		if (h4h.b0e(g5w))
		{
			v9t(m4t, h4h, a7j, g5w, q3c.n4w);
		}
		else if (h4h.m9n(g5w))
		{
			f5p(m4t, h4h, a7j, g5w, q3c.n4w);
		}
	}
}

function n8s(m4t, h4h, a7j)
{
	g1b(m4t, h4h, a7j, knightSquares[a7j]);
}

function v7m(m4t, h4h, a7j)
{
	t5q(m4t, h4h, a7j, knightSquares[a7j]);
}

function o7o(m4t, h4h, a7j)
{
	c6j(m4t, h4h, a7j, northEastSquares[a7j]);
	c6j(m4t, h4h, a7j, southEastSquares[a7j]);
	c6j(m4t, h4h, a7j, southWestSquares[a7j]);
	c6j(m4t, h4h, a7j, northWestSquares[a7j]);
}

function d5c(m4t, h4h, a7j)
{
	v5p(m4t, h4h, a7j, northEastSquares[a7j]);
	v5p(m4t, h4h, a7j, southEastSquares[a7j]);
	v5p(m4t, h4h, a7j, southWestSquares[a7j]);
	v5p(m4t, h4h, a7j, northWestSquares[a7j]);
}

function k1k(m4t, h4h, a7j)
{
	c6j(m4t, h4h, a7j, northSquares[a7j]);
	c6j(m4t, h4h, a7j, eastSquares[a7j]);
	c6j(m4t, h4h, a7j, southSquares[a7j]);
	c6j(m4t, h4h, a7j, westSquares[a7j]);
}

function i9l(m4t, h4h, a7j)
{
	v5p(m4t, h4h, a7j, northSquares[a7j]);
	v5p(m4t, h4h, a7j, eastSquares[a7j]);
	v5p(m4t, h4h, a7j, southSquares[a7j]);
	v5p(m4t, h4h, a7j, westSquares[a7j]);
}

function w5k(m4t, h4h, a7j)
{
	c6j(m4t, h4h, a7j, northSquares[a7j]);
	c6j(m4t, h4h, a7j, northEastSquares[a7j]);
	c6j(m4t, h4h, a7j, eastSquares[a7j]);
	c6j(m4t, h4h, a7j, southEastSquares[a7j]);
	c6j(m4t, h4h, a7j, southSquares[a7j]);
	c6j(m4t, h4h, a7j, southWestSquares[a7j]);
	c6j(m4t, h4h, a7j, westSquares[a7j]);
	c6j(m4t, h4h, a7j, northWestSquares[a7j]);
}

function e4g(m4t, h4h, a7j)
{
	v5p(m4t, h4h, a7j, northSquares[a7j]);
	v5p(m4t, h4h, a7j, northEastSquares[a7j]);
	v5p(m4t, h4h, a7j, eastSquares[a7j]);
	v5p(m4t, h4h, a7j, southEastSquares[a7j]);
	v5p(m4t, h4h, a7j, southSquares[a7j]);
	v5p(m4t, h4h, a7j, southWestSquares[a7j]);
	v5p(m4t, h4h, a7j, westSquares[a7j]);
	v5p(m4t, h4h, a7j, northWestSquares[a7j]);
}

function f8e(m4t, h4h, a7j)
{
	e4n(m4t, h4h, a7j, kingSquares[a7j]);
}

function c9m(m4t, h4h, a7j)
{
	s7i(m4t, h4h, a7j, kingSquares[a7j]);
}

function c6j(m4t, h4h, a7j, e1e)
{
	for (const g5w of e1e)
	{
		if (h4h.b0e(g5w))
		{
			v9t(m4t, h4h, a7j, g5w, q3c.n4w);
		}
		else if (h4h.m9n(g5w))
		{
			break;
		}
		else
		{
			f5p(m4t, h4h, a7j, g5w, q3c.n4w);
			break;
		}
	}
}

function v5p(m4t, h4h, a7j, e1e)
{
	for (const g5w of e1e)
	{
		if (h4h.b0e(g5w))
		{
			v9t(m4t, h4h, a7j, g5w, q3c.n4w);
		}
		else if (h4h.g9p(g5w))
		{
			break;
		}
		else
		{
			f5p(m4t, h4h, a7j, g5w, q3c.n4w);
			break;
		}
	}
}

function e4n(m4t, h4h, a7j, e1e)
{
	for (const g5w of e1e)
	{
		if (h4h.b0e(g5w))
		{
			v9t(m4t, h4h, a7j, g5w, q3c.n4w);
		}
		else if (h4h.g9p(g5w))
		{
			f5p(m4t, h4h, a7j, g5w, q3c.n4w);
		}
	}
}

function s7i(m4t, h4h, a7j, e1e)
{
	for (const g5w of e1e)
	{
		if (h4h.b0e(g5w))
		{
			v9t(m4t, h4h, a7j, g5w, q3c.n4w);
		}
		else if (h4h.m9n(g5w))
		{
			f5p(m4t, h4h, a7j, g5w, q3c.n4w);
		}
	}
}

function p5i(left, w2o)
{
	let e2f = [];
	if (left > w2o)
	{
    let v6z = left;
    left = w2o;
    w2o = v6z;
	}
	for (let i = left + 1; i < w2o; i++)
	{
		e2f.push(i);
	}
	return e2f;
}

function h0g(m4t, h4h)
{
	if (!h4h.v5h(h4h.g6f()))
	{
		return;
	}
	if (!h4h.t1o(h4h.c6z()))
	{
		return;
	}
	let s2n = p5i(h4h.c6z(), s9z);
  for (const h5t of s2n)
	{
		if (h5t != h4h.g6f())
		{
			if (!h4h.b0e(h5t))
			{
				return;
			}
		}
	}
	let h7w = p5i(h4h.g6f(), q0l);
  for (const h5t of h7w)
	{
		if (h5t != h4h.c6z())
		{
			if (!h4h.b0e(h5t))
			{
				return;
			}
		}
	}
  for (const h5t of h7w)
	{
		if (d8q(h4h, h5t))
		{
			return;
		}
	}
	if (d8q(h4h, h4h.g6f()))
	{
		return;
	}
	if (h4h.g6f() != q0l)
	{
		if (!h4h.b0e(q0l))
		{
			if (q0l != h4h.c6z())
			{
				return;
			}
		}
	}
	if (h4h.c6z() != s9z)
	{
		if (!h4h.b0e(s9z))
		{
			if (s9z != h4h.g6f())
			{
				return;
			}
		}
	}
	v9t(m4t, h4h, h4h.g6f(), q0l, q3c.e6m);
}

function y7d(m4t, h4h)
{
	if (!h4h.v5h(h4h.g6f()))
	{
		return;
	}
	if (!h4h.t1o(h4h.l4x()))
	{
		return;
	}
	let s2n = p5i(h4h.l4x(), l4t);
  for (const h5t of s2n)
	{
		if (h5t != h4h.g6f())
		{
			if (!h4h.b0e(h5t))
			{
				return;
			}
		}
	}
	let h7w = p5i(h4h.g6f(), n1h);
  for (const h5t of h7w)
	{
		if (h5t != h4h.l4x())
		{
			if (!h4h.b0e(h5t))
			{
				return;
			}
		}
	}
  for (const h5t of h7w)
	{
		if (d8q(h4h, h5t))
		{
			return;
		}
	}
	if (d8q(h4h, h4h.g6f()))
	{
		return;
	}
	if (h4h.g6f() != n1h)
	{
		if (!h4h.b0e(n1h))
		{
			if (n1h != h4h.l4x())
			{
				return;
			}
		}
	}
	if (h4h.l4x() != l4t)
	{
		if (!h4h.b0e(l4t))
		{
			if (l4t != h4h.g6f())
			{
				return;
			}
		}
	}
	v9t(m4t, h4h, h4h.g6f(), n1h, q3c.e6m);
}

function n1z(m4t, h4h)
{
	if (!h4h.o6t(h4h.z7x()))
	{
		return;
	}
	if (!h4h.c2w(h4h.i8g()))
	{
		return;
	}
	let s2n = p5i(h4h.i8g(), d4o);
  for (const h5t of s2n)
	{
		if (h5t != h4h.z7x())
		{
			if (!h4h.b0e(h5t))
			{
				return;
			}
		}
	}
	let h7w = p5i(h4h.z7x(), z8a);
  for (const h5t of h7w)
	{
		if (h5t != h4h.i8g())
		{
			if (!h4h.b0e(h5t))
			{
				return;
			}
		}
	}
  for (const h5t of h7w)
	{
		if (u9e(h4h, h5t))
		{
			return;
		}
	}
	if (u9e(h4h, h4h.z7x()))
	{
		return;
	}
	if (h4h.z7x() != z8a)
	{
		if (!h4h.b0e(z8a))
		{
			if (z8a != h4h.i8g())
			{
				return;
			}
		}
	}
	if (h4h.i8g() != d4o)
	{
		if (!h4h.b0e(d4o))
		{
			if (d4o != h4h.z7x())
			{
				return;
			}
		}
	}
	v9t(m4t, h4h, h4h.z7x(), z8a, q3c.e6m);
}

function o4r(m4t, h4h)
{
	if (!h4h.o6t(h4h.z7x()))
	{
		return;
	}
	if (!h4h.c2w(h4h.q2f()))
	{
		return;
	}
	let s2n = p5i(h4h.q2f(), y3t);
  for (const h5t of s2n)
	{
		if (h5t != h4h.z7x())
		{
			if (!h4h.b0e(h5t))
			{
				return;
			}
		}
	}
	let h7w = p5i(h4h.z7x(), w3w);
  for (const h5t of h7w)
	{
		if (h5t != h4h.q2f())
		{
			if (!h4h.b0e(h5t))
			{
				return;
			}
		}
	}
  for (const h5t of h7w)
	{
		if (u9e(h4h, h5t))
		{
			return;
		}
	}
	if (u9e(h4h, h4h.z7x()))
	{
		return;
	}
	if (h4h.z7x() != w3w)
	{
		if (!h4h.b0e(w3w))
		{
			if (w3w != h4h.q2f())
			{
				return;
			}
		}
	}
	if (h4h.q2f() != y3t)
	{
		if (!h4h.b0e(y3t))
		{
			if (y3t != h4h.z7x())
			{
				return;
			}
		}
	}
	v9t(m4t, h4h, h4h.z7x(), w3w, q3c.e6m);
}

function l4f(m4t, h4h)
{
	if (!h4h.v5h(h4h.g6f()))
	{
		return;
	}
	if (!h4h.t1o(h4h.c6z()))
	{
		return;
	}
	if (!h4h.b0e(y7x))
	{
		return;
	}
	if (!h4h.b0e(e6r))
	{
		return;
	}
	if (!h4h.b0e(e7q))
	{
		return;
	}
	if (d8q(h4h, h4h.g6f()))
	{
		return;
	}
	if (d8q(h4h, e7q))
	{
		return;
	}
	v9t(m4t, h4h, h4h.g6f(), q0l, q3c.e6m);
}

function f1k(m4t, h4h)
{
	if (!h4h.v5h(h4h.g6f()))
	{
		return;
	}
	if (!h4h.t1o(h4h.l4x()))
	{
		return;
	}
	if (!h4h.b0e(x1e))
	{
		return;
	}
	if (!h4h.b0e(a9r))
	{
		return;
	}
	if (d8q(h4h, h4h.g6f()))
	{
		return;
	}
	if (d8q(h4h, x1e))
	{
		return;
	}
	v9t(m4t, h4h, h4h.g6f(), n1h, q3c.e6m);
}

function e7m(m4t, h4h)
{
	if (!h4h.o6t(h4h.z7x()))
	{
		return;
	}
	if (!h4h.c2w(h4h.q2f()))
	{
		return;
	}
	if (!h4h.b0e(a1r))
	{
		return;
	}
	if (!h4h.b0e(e6q))
	{
		return;
	}
	if (!h4h.b0e(y0l))
	{
		return;
	}
	if (u9e(h4h, h4h.z7x()))
	{
		return;
	}
	if (u9e(h4h, y0l))
	{
		return;
	}
	v9t(m4t, h4h, h4h.z7x(), w3w, q3c.e6m);
}

function v8d(m4t, h4h)
{
	if (!h4h.o6t(h4h.z7x()))
	{
		return;
	}
	if (!h4h.c2w(h4h.i8g()))
	{
		return;
	}
	if (!h4h.b0e(p1d))
	{
		return;
	}
	if (!h4h.b0e(i7v))
	{
		return;
	}
	if (u9e(h4h, h4h.z7x()))
	{
		return;
	}
	if (u9e(h4h, p1d))
	{
		return;
	}
	v9t(m4t, h4h, h4h.z7x(), z8a, q3c.e6m);
}

function y4a(m4t, h4h)
{
	if (h4h.o4s())
	{
		h0g(m4t, h4h);
	}
	else
	{
		l4f(m4t, h4h);
	}
}

function h0b(m4t, h4h)
{
	if (h4h.o4s())
	{
		y7d(m4t, h4h);
	}
	else
	{
		f1k(m4t, h4h);
	}
}

function j5x(m4t, h4h)
{
	if (h4h.q7w())
	{
		y4a(m4t, h4h);
	}
	if (h4h.i4x())
	{
		h0b(m4t, h4h);
	}
}

function e5t(m4t, h4h)
{
	if (h4h.o4s())
	{
		o4r(m4t, h4h);
	}
	else
	{
		e7m(m4t, h4h);
	}
}

function f1m(m4t, h4h)
{
	if (h4h.o4s())
	{
		n1z(m4t, h4h);
	}
	else
	{
		v8d(m4t, h4h);
	}
}

function y6m(m4t, h4h)
{
	if (h4h.d3y())
	{
		e5t(m4t, h4h);
	}
	if (h4h.v2y())
	{
		f1m(m4t, h4h);
	}
}

function o6h(m4t, h4h)
{
	if (h4h.p3e() == l6i)
	{
		return;
	}
	if (l2r(h4h.p3e()) != y1r)
	{
		return;
	}
	if (!h4h.b0e(h4h.p3e()))
	{
		return;
	}
	let v4n = (h4h.p3e() + 8);
	if (!h4h.b0e(v4n))
	{
		return;
	}
	let a6x = (h4h.p3e() - 8);
	if (!h4h.f6y(a6x))
	{
		return;
	}
	let k7i = westSquare[a6x];
	if (k7i != l6i)
	{
		if (h4h.m6o(k7i))
		{
			u2j(m4t, h4h, k7i, x2v.u3i, h4h.p3e(),
				x2v.u3i, a6x, x2v.v9n, q3c.j3x);
		}
	}
	k7i = eastSquare[a6x];
	if (k7i != l6i)
	{
		if (h4h.m6o(k7i))
		{
			u2j(m4t, h4h, k7i, x2v.u3i, h4h.p3e(),
				x2v.u3i, a6x, x2v.v9n, q3c.j3x);
		}
	}
}

function y3p(m4t, h4h)
{
	if (h4h.p3e() == l6i)
	{
		return;
	}
	if (l2r(h4h.p3e()) != f2o)
	{
		return;
	}
	if (!h4h.b0e(h4h.p3e()))
	{
		return;
	}
	let v4n = (h4h.p3e() - 8);
	if (!h4h.b0e(v4n))
	{
		return;
	}
	let a6x = (h4h.p3e() + 8);
	if (!h4h.m6o(a6x))
	{
		return;
	}
	let k7i = westSquare[a6x];
	if (k7i != l6i)
	{
		if (h4h.f6y(k7i))
		{
			u2j(m4t, h4h, k7i, x2v.v9n, h4h.p3e(),
				x2v.v9n, a6x, x2v.u3i, q3c.j3x);
		}
	}
	k7i = eastSquare[a6x];
	if (k7i != l6i)
	{
		if (h4h.f6y(k7i))
		{
			u2j(m4t, h4h, k7i, x2v.v9n, h4h.p3e(),
				x2v.v9n, a6x, x2v.u3i, q3c.j3x);
		}
	}
}

function u2j(m4t, h4h, a7j, a0b, g5w, a8g, g4o, m7e, type)
{
  let x8g = new j0n();
	x8g.a7j = a7j;
	x8g.a0b = a0b;
	x8g.g5w = g5w;
	x8g.a8g = a8g;
	x8g.g4o = g4o;
	x8g.m7e = m7e;
	x8g.type = type;
	if (m9n(a0b))
	{
		if (e1k(h4h, x8g))
		{
			m4t.push(x8g);
		}
	}
	else
	{
		if (t6x(h4h, x8g))
		{
			m4t.push(x8g);
		}
	}
}

function v9t(m4t, h4h, a7j, g5w, type)
{
	let c1b = h4h.q2p(a7j);
	u2j(m4t, h4h, a7j, c1b, g5w, c1b, l6i, x2v.v9y, type);
}

function f5p(m4t, h4h, a7j, g5w, type)
{
	let c1b = h4h.q2p(a7j);
	let m7e = h4h.q2p(g5w);
	u2j(m4t, h4h, a7j, c1b, g5w, c1b, g5w, m7e, type);
}

function y1b(m4t, h4h, a7j, g5w)
{
	u2j(m4t, h4h, a7j, x2v.u3i, g5w, x2v.j8g, l6i, x2v.v9y, q3c.i6z);
	u2j(m4t, h4h, a7j, x2v.u3i, g5w, x2v.j7b, l6i, x2v.v9y, q3c.c6a);
	u2j(m4t, h4h, a7j, x2v.u3i, g5w, x2v.t7u, l6i, x2v.v9y, q3c.k1e);
	u2j(m4t, h4h, a7j, x2v.u3i, g5w, x2v.u0n, l6i, x2v.v9y, q3c.h8a);
}

function c1g(m4t, h4h, a7j, g5w)
{
	u2j(m4t, h4h, a7j, x2v.v9n, g5w, x2v.n5l, l6i, x2v.v9y, q3c.i6z);
	u2j(m4t, h4h, a7j, x2v.v9n, g5w, x2v.u3o, l6i, x2v.v9y, q3c.c6a);
	u2j(m4t, h4h, a7j, x2v.v9n, g5w, x2v.u3z, l6i, x2v.v9y, q3c.k1e);
	u2j(m4t, h4h, a7j, x2v.v9n, g5w, x2v.x9n, l6i, x2v.v9y, q3c.h8a);
}

function q8j(m4t, h4h, a7j, g5w)
{
	let m7e = h4h.q2p(g5w);
	u2j(m4t, h4h, a7j, x2v.u3i, g5w, x2v.j8g, g5w, m7e, q3c.i6z);
	u2j(m4t, h4h, a7j, x2v.u3i, g5w, x2v.j7b, g5w, m7e, q3c.c6a);
	u2j(m4t, h4h, a7j, x2v.u3i, g5w, x2v.t7u, g5w, m7e, q3c.k1e);
	u2j(m4t, h4h, a7j, x2v.u3i, g5w, x2v.u0n, g5w, m7e, q3c.h8a);
}

function v5s(m4t, h4h, a7j, g5w)
{
	let m7e = h4h.q2p(g5w);
	u2j(m4t, h4h, a7j, x2v.v9n, g5w, x2v.n5l, g5w, m7e, q3c.i6z);
	u2j(m4t, h4h, a7j, x2v.v9n, g5w, x2v.u3o, g5w, m7e, q3c.c6a);
	u2j(m4t, h4h, a7j, x2v.v9n, g5w, x2v.u3z, g5w, m7e, q3c.k1e);
	u2j(m4t, h4h, a7j, x2v.v9n, g5w, x2v.x9n, g5w, m7e, q3c.h8a);
}

function j0x(m4t, h4h, g5w)
{
	let a7j = (g5w - j4q);
	if (h4h.m6o(a7j))
	{
		if (l2r(a7j) == l4r)
		{
			y1b(m4t, h4h, a7j, g5w);
		}
		else
		{
			v9t(m4t, h4h, a7j, g5w, q3c.n4w);
		}
	}
	else
	{
		if (h4h.b0e(a7j))
		{
			if (l2r(g5w) == d2d)
			{
				a7j = (g5w - j4q - j4q);
				if (h4h.m6o(a7j))
				{
					v9t(m4t, h4h, a7j, g5w, q3c.n4w);
				}
			}
		}
	}

	if (h4h.g9p(g5w))
	{
		let a7j = southWestSquare[g5w];
		if (a7j != l6i)
		{
			if (h4h.m6o(a7j))
			{
				if (l2r(a7j) == l4r)
				{
					q8j(m4t, h4h, a7j, g5w);
				}
				else
				{
					f5p(m4t, h4h, a7j, g5w, q3c.n4w);
				}
			}
		}
		a7j = southEastSquare[g5w];
		if (a7j != l6i)
		{
			if (h4h.m6o(a7j))
			{
				if (l2r(a7j) == l4r)
				{
					q8j(m4t, h4h, a7j, g5w);
				}
				else
				{
					f5p(m4t, h4h, a7j, g5w, q3c.n4w);
				}
			}
		}
	}

	if (h4h.p3e() == g5w)
	{
		let v4n = (h4h.p3e() + 8);
		if (!h4h.b0e(v4n))
		{
			return;
		}
		let a6x = (h4h.p3e() - 8);
		if (!h4h.f6y(a6x))
		{
			return;
		}
		let k7i = westSquare[a6x];
		if (k7i != l6i)
		{
			if (h4h.m6o(k7i))
			{
				u2j(m4t, h4h, k7i, x2v.u3i, h4h.p3e(),
					x2v.u3i, a6x, x2v.v9n, q3c.j3x);
			}
		}
		k7i = eastSquare[a6x];
		if (k7i != l6i)
		{
			if (h4h.m6o(k7i))
			{
				u2j(m4t, h4h, k7i, x2v.u3i, h4h.p3e(),
					x2v.u3i, a6x, x2v.v9n, q3c.j3x);
			}
		}
	}
}

function h1t(m4t, h4h, g5w)
{
	let a7j = (g5w - v1o);
	if (h4h.f6y(a7j))
	{
		if (l2r(a7j) == x5k)
		{
			c1g(m4t, h4h, a7j, g5w);
		}
		else
		{
			v9t(m4t, h4h, a7j, g5w, q3c.n4w);
		}
	}
	else
	{
		if (h4h.b0e(a7j))
		{
			if (l2r(g5w) == d2t)
			{
				a7j = (g5w - v1o - v1o);
				if (h4h.f6y(a7j))
				{
					v9t(m4t, h4h, a7j, g5w, q3c.n4w);
				}
			}
		}
	}

	if (h4h.m9n(g5w))
	{
		let a7j = northWestSquare[g5w];
		if (a7j != l6i)
		{
			if (h4h.f6y(a7j))
			{
				if (l2r(a7j) == x5k)
				{
					v5s(m4t, h4h, a7j, g5w);
				}
				else
				{
					f5p(m4t, h4h, a7j, g5w, q3c.n4w);
				}
			}
		}
		a7j = northEastSquare[g5w];
		if (a7j != l6i)
		{
			if (h4h.f6y(a7j))
			{
				if (l2r(a7j) == x5k)
				{
					v5s(m4t, h4h, a7j, g5w);
				}
				else
				{
					f5p(m4t, h4h, a7j, g5w, q3c.n4w);
				}
			}
		}
	}

	if (h4h.p3e() == g5w)
	{
		let v4n = (h4h.p3e() - 8);
		if (!h4h.b0e(v4n))
		{
			return;
		}
		let a6x = (h4h.p3e() + 8);
		if (!h4h.m6o(a6x))
		{
			return;
		}
		let k7i = westSquare[a6x];
		if (k7i != l6i)
		{
			if (h4h.f6y(k7i))
			{
				u2j(m4t, h4h, k7i, x2v.v9n, h4h.p3e(),
					x2v.v9n, a6x, x2v.u3i, q3c.j3x);
			}
		}
		k7i = eastSquare[a6x];
		if (k7i != l6i)
		{
			if (h4h.f6y(k7i))
			{
				u2j(m4t, h4h, k7i, x2v.v9n, h4h.p3e(),
					x2v.v9n, a6x, x2v.u3i, q3c.j3x);
			}
		}
	}
}

function z8x(m4t, h4h, g5w, c1b)
{
	m6u(m4t, h4h, g5w, knightSquares[g5w], c1b);
}

function y5p(m4t, h4h, g5w, c1b)
{
	k6j(m4t, h4h, g5w, northEastSquares[g5w], c1b);
	k6j(m4t, h4h, g5w, southEastSquares[g5w], c1b);
	k6j(m4t, h4h, g5w, southWestSquares[g5w], c1b);
	k6j(m4t, h4h, g5w, northWestSquares[g5w], c1b);
}

function z4c(m4t, h4h, g5w, c1b)
{
	k6j(m4t, h4h, g5w, northSquares[g5w], c1b);
	k6j(m4t, h4h, g5w, eastSquares[g5w], c1b);
	k6j(m4t, h4h, g5w, southSquares[g5w], c1b);
	k6j(m4t, h4h, g5w, westSquares[g5w], c1b);
}

function x8q(m4t, h4h, g5w, c1b)
{
	k6j(m4t, h4h, g5w, northSquares[g5w], c1b);
	k6j(m4t, h4h, g5w, northEastSquares[g5w], c1b);
	k6j(m4t, h4h, g5w, eastSquares[g5w], c1b);
	k6j(m4t, h4h, g5w, southEastSquares[g5w], c1b);
	k6j(m4t, h4h, g5w, southSquares[g5w], c1b);
	k6j(m4t, h4h, g5w, southWestSquares[g5w], c1b);
	k6j(m4t, h4h, g5w, westSquares[g5w], c1b);
	k6j(m4t, h4h, g5w, northWestSquares[g5w], c1b);
}

function i1g(m4t, h4h, g5w, c1b)
{
	v4k(m4t, h4h, g5w, kingSquares[g5w], c1b);
}

function k6j(m4t, h4h, g5w, e6a, c1b)
{
  for (const a7j of e6a)
	{
		if (h4h.q2p(a7j) == c1b)
		{
			if (h4h.b0e(g5w))
			{
				v9t(m4t, h4h, a7j, g5w, q3c.n4w);
			}
			else
			{
				f5p(m4t, h4h, a7j, g5w, q3c.n4w);
			}
			break;
		}
		else
		{
			if (!h4h.b0e(a7j))
			{
				break;
			}
		}
	}
}

function v4k(m4t, h4h, g5w, e6a, c1b)
{
  for (const a7j of e6a)
	{
		if (h4h.q2p(a7j) == c1b)
		{
			if (h4h.b0e(g5w))
			{
				v9t(m4t, h4h, a7j, g5w, q3c.n4w);
				break;
			}
			else
			{
				f5p(m4t, h4h, a7j, g5w, q3c.n4w);
				break;
			}
		}
	}
}

function m6u(m4t, h4h, g5w, e6a, c1b)
{
  for (const a7j of e6a)
	{
		if (h4h.q2p(a7j) == c1b)
		{
			if (h4h.b0e(g5w))
			{
				v9t(m4t, h4h, a7j, g5w, q3c.n4w);
				
			}
			else
			{
				f5p(m4t, h4h, a7j, g5w, q3c.n4w);
				
			}
		}
	}
}

function n3h(l5d, e1e)
{
  for (const g5w of e1e)
	{
		if (l5d[g5w] != x2v.v9y)
		{
			if (g9p(l5d[g5w]))
			{
				return false;
			}
			else
			{
				if (l5d[g5w] == x2v.j7b || l5d[g5w] == x2v.u0n)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function o1c(l5d, e1e)
{
  for (const g5w of e1e)
	{
		if (l5d[g5w] != x2v.v9y)
		{
			if (g9p(l5d[g5w]))
			{
				return false;
			}
			else
			{
				if (l5d[g5w] == x2v.t7u || l5d[g5w] == x2v.u0n)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function s6p(l5d, e1e)
{
  for (const g5w of e1e)
	{
		if (l5d[g5w] != x2v.v9y)
		{
			if (g9p(l5d[g5w]))
			{
				return false;
			}
			else
			{
				if (l5d[g5w] == x2v.t7u || l5d[g5w] == x2v.u0n)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function x4h(l5d, g5w)
{
	if (g5w == l6i)
	{
		return false;
	}
	if (l5d[g5w] == x2v.u3i)
	{
		return true;
	}
	return false;
}

function b7x(l5d, e1e)
{
  for (const g5w of e1e)
	{
		if (l5d[g5w] == x2v.j8g)
		{
			return true;
		}
	}
	return false;
}

function a7c(l5d, e1e)
{
  for (const g5w of e1e)
	{
		if (l5d[g5w] == x2v.u7u)
		{
			return true;
		}
	}
	return false;
}

function n7v(l5d, e1e)
{
  for (const g5w of e1e)
	{
		if (l5d[g5w] != x2v.v9y)
		{
			if (m9n(l5d[g5w]))
			{
				return false;
			}
			else
			{
				if (l5d[g5w] == x2v.u3o || l5d[g5w] == x2v.x9n)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function l6p(l5d, e1e)
{
  for (const g5w of e1e)
	{
		if (l5d[g5w] != x2v.v9y)
		{
			if (m9n(l5d[g5w]))
			{
				return false;
			}
			else
			{
				if (l5d[g5w] == x2v.u3z || l5d[g5w] == x2v.x9n)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function n9r(l5d, e1e)
{
  for (const g5w of e1e)
	{
		if (l5d[g5w] != x2v.v9y)
		{
			if (m9n(l5d[g5w]))
			{
				return false;
			}
			else
			{
				if (l5d[g5w] == x2v.u3z || l5d[g5w] == x2v.x9n)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function r9e(l5d, g5w)
{
	if (g5w == l6i)
	{
		return false;
	}
	if (l5d[g5w] == x2v.v9n)
	{
		return true;
	}
	return false;
}

function r9x(l5d, e1e)
{
  for (const g5w of e1e)
	{
		if (l5d[g5w] == x2v.n5l)
		{
			return true;
		}
	}
	return false;
}

function q5v(l5d,  e1e)
{
  for (const g5w of e1e)
	{
		if (l5d[g5w] == x2v.e7o)
		{
			return true;
		}
	}
	return false;
}

function m2b(h4h, e1e, c0p)
{
  for (const g5w of e1e)
	{
		if (!h4h.b0e(g5w))
		{
			if (h4h.g9p(g5w))
			{
				return false;
			}
			else
			{
				if (h4h.u0y(g5w) || h4h.e2r(g5w))
				{
					c0p = g5w;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function r1l(h4h, e1e, c0p)
{
  for (const g5w of e1e)
	{
		if (!h4h.b0e(g5w))
		{
			if (h4h.m9n(g5w))
			{
				return false;
			}
			else
			{
				if (h4h.q0d(g5w) || h4h.l7a(g5w))
				{
					c0p = g5w;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function g9j(h4h, e1e, c0p)
{
  for (const g5w of e1e)
	{
		if (!h4h.b0e(g5w))
		{
			if (h4h.g9p(g5w))
			{
				return false;
			}
			else
			{
				if (h4h.t1o(g5w) || h4h.e2r(g5w))
				{
					c0p = g5w;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function n6r(h4h, e1e, c0p)
{
  for (const g5w of e1e)
	{
		if (!h4h.b0e(g5w))
		{
			if (h4h.m9n(g5w))
			{
				return false;
			}
			else
			{
				if (h4h.c2w(g5w) || h4h.l7a(g5w))
				{
					c0p = g5w;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function a7a(h4h, e1e, c0p)
{
  for (const g5w of e1e)
	{
		if (!h4h.b0e(g5w))
		{
			if (h4h.g9p(g5w))
			{
				return false;
			}
			else
			{
				if (h4h.t1o(g5w) || h4h.e2r(g5w))
				{
					c0p = g5w;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function h1j(h4h, e1e, c0p)
{
  for (const g5w of e1e)
	{
		if (!h4h.b0e(g5w))
		{
			if (h4h.m9n(g5w))
			{
				return false;
			}
			else
			{
				if (h4h.c2w(g5w) || h4h.l7a(g5w))
				{
					c0p = g5w;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function z2e(h4h, g5w)
{
	if (g5w == l6i)
	{
		return false;
	}
	if (h4h.m6o(g5w))
	{
		return true;
	}
	return false;
}

function g7h(h4h, g5w)
{
	if (g5w == l6i)
	{
		return false;
	}
	if (h4h.f6y(g5w))
	{
		return true;
	}
	return false;
}

function k2b(h4h, e1e, c0p)
{
  for (const g5w of e1e)
	{
		if (h4h.a0x(g5w))
		{
			c0p = g5w;
			return true;
		}
	}
	return false;
}



function n1f(h4h, e1e, c0p)
{
  for (const g5w of e1e)
	{
		if (h4h.s2u(g5w))
		{
			c0p = g5w;
			return true;
		}
	}
	return false;
}

function i3x(h4h, e1e, c0p)
{
  for (const g5w of e1e)
	{
		if (h4h.v5h(g5w))
		{
			c0p = g5w;
			return true;
		}
	}
	return false;
}

function b3a(h4h, e1e, c0p)
{
  for (const g5w of e1e)
	{
		if (h4h.o6t(g5w))
		{
			c0p = g5w;
			return true;
		}
	}
	return false;
}

function e6o(l5d, h5t)
{
	if (n3h(l5d, northEastSquares[h5t])) return true;
	if (n3h(l5d, southEastSquares[h5t])) return true;
	if (n3h(l5d, southWestSquares[h5t])) return true;
	if (n3h(l5d, northWestSquares[h5t])) return true;
	if (o1c(l5d, northSquares[h5t])) return true;
	if (s6p(l5d, eastSquares[h5t])) return true;
	if (o1c(l5d, southSquares[h5t])) return true;
	if (s6p(l5d, westSquares[h5t])) return true;
	if (x4h(l5d, southEastSquare[h5t])) return true;
	if (x4h(l5d, southWestSquare[h5t])) return true;
	if (b7x(l5d, knightSquares[h5t])) return true;
	if (a7c(l5d, kingSquares[h5t])) return true;
	return false;
}

function r3k(l5d, h5t)
{
	if (n7v(l5d, northEastSquares[h5t])) return true;
	if (n7v(l5d, southEastSquares[h5t])) return true;
	if (n7v(l5d, southWestSquares[h5t])) return true;
	if (n7v(l5d, northWestSquares[h5t])) return true;
	if (l6p(l5d, northSquares[h5t])) return true;
	if (n9r(l5d, eastSquares[h5t])) return true;
	if (l6p(l5d, southSquares[h5t])) return true;
	if (n9r(l5d, westSquares[h5t])) return true;
	if (r9e(l5d, northEastSquare[h5t])) return true;
	if (r9e(l5d, northWestSquare[h5t])) return true;
	if (r9x(l5d, knightSquares[h5t])) return true;
	if (q5v(l5d, kingSquares[h5t])) return true;
	return false;
}

function u9e(h4h, h5t)
{
	let c0p = l6i;
	if (m2b(h4h, northEastSquares[h5t], c0p)) return true;
	if (m2b(h4h, southEastSquares[h5t], c0p)) return true;
	if (m2b(h4h, southWestSquares[h5t], c0p)) return true;
	if (m2b(h4h, northWestSquares[h5t], c0p)) return true;
	if (g9j(h4h, northSquares[h5t], c0p)) return true;
	if (a7a(h4h, eastSquares[h5t], c0p)) return true;
	if (g9j(h4h, southSquares[h5t], c0p)) return true;
	if (a7a(h4h, westSquares[h5t], c0p)) return true;
	if (z2e(h4h, southEastSquare[h5t])) return true;
	if (z2e(h4h, southWestSquare[h5t])) return true;
	if (k2b(h4h, knightSquares[h5t], c0p)) return true;
	if (i3x(h4h, kingSquares[h5t], c0p)) return true;
	return false;
}

function d8q(h4h, h5t)
{
	let c0p = l6i;
	if (r1l(h4h, northEastSquares[h5t], c0p)) return true;
	if (r1l(h4h, southEastSquares[h5t], c0p)) return true;
	if (r1l(h4h, southWestSquares[h5t], c0p)) return true;
	if (r1l(h4h, northWestSquares[h5t], c0p)) return true;
	if (n6r(h4h, northSquares[h5t], c0p)) return true;
	if (h1j(h4h, eastSquares[h5t], c0p)) return true;
	if (n6r(h4h, southSquares[h5t], c0p)) return true;
	if (h1j(h4h, westSquares[h5t], c0p)) return true;
	if (g7h(h4h, northEastSquare[h5t])) return true;
	if (g7h(h4h, northWestSquare[h5t])) return true;
	if (n1f(h4h, knightSquares[h5t], c0p)) return true;
	if (b3a(h4h, kingSquares[h5t], c0p)) return true;
	return false;
}

function l1i()
{
	if (moveGeneratorInited) return;
	moveGeneratorInited = true;
 	for (const h5t of b6d)
	{
 		if (l2r(h5t) <= l4r && t2u(h5t) <= o0q)
		{
			let g5w = h5t + j3m;
			northEastSquare.push(g5w);
		}
		else
		{
			northEastSquare.push(l6i);
		}
		if (t2u(h5t) <= o0q)
		{
			let g5w = h5t + z9z;
			eastSquare.push(g5w);
		}
		else
		{
			eastSquare.push(l6i);
		}
		if (l2r(h5t) >= x5k && t2u(h5t) <= o0q)
		{
			let g5w = h5t + t4s;
			southEastSquare.push(g5w);
		}
		else
		{
			southEastSquare.push(l6i);
		}
		if (l2r(h5t) >= x5k && t2u(h5t) >= h2o)
		{
			let g5w = h5t + l2t;
			southWestSquare.push(g5w);
		}
		else
		{
			southWestSquare.push(l6i);
		}
		if (t2u(h5t) >= h2o)
		{
			let g5w = h5t + j5c;
			westSquare.push(g5w);
		}
		else
		{
			westSquare.push(l6i);
		}
		if (l2r(h5t) <= l4r && t2u(h5t) >= h2o)
		{
			let g5w = h5t + v3t;
			northWestSquare.push(g5w);
		}
		else
		{
			northWestSquare.push(l6i);
		}
	}

  for (const h5t of b6d)
	{
  	northSquares.push(j4a(h5t));
		northEastSquares.push(a9n(h5t));
		eastSquares.push(w5y(h5t));
		southEastSquares.push(g4i(h5t));
		southSquares.push(n4j(h5t));
		southWestSquares.push(o0s(h5t));
		westSquares.push(p6s(h5t));
		northWestSquares.push(f0a(h5t));
		kingSquares.push(l9m(h5t));
		knightSquares.push(x7f(h5t));
	}
}

function m9d(h4h)
{
	let m4t = [];

	if (h4h.a2y())
	{
		let b6n = h4h.b6n();
    for (const h5t of b6d)
		{
			if (!b6n) break;
			if (h4h.m9n(h5t))
			{
				switch (h4h.q2p(h5t))
				{
					case x2v.u3i:
						k3x(m4t, h4h, h5t);
						b6n--;
						break;
					case x2v.j8g:
						n8s(m4t, h4h, h5t);
						b6n--;
						break;
					case x2v.j7b:
						o7o(m4t, h4h, h5t);
						b6n--;
						break;
					case x2v.t7u:
						k1k(m4t, h4h, h5t);
						b6n--;
						break;
					case x2v.u0n:
						w5k(m4t, h4h, h5t);
						b6n--;
						break;
					case x2v.u7u:
						f8e(m4t, h4h, h5t);
						b6n--;
						break;
					default:
						break;
				}
			}
		}
		o6h(m4t, h4h);
		j5x(m4t, h4h);
	}
	else
	{
		let h7c = h4h.h7c();
    for (const h5t of b6d)
		{
			if (!h7c) break;
			if (h4h.g9p(h5t))
			{
				switch (h4h.q2p(h5t))
				{
					case x2v.v9n:
						r7w(m4t, h4h, h5t);
						h7c--;
						break;
					case x2v.n5l:
						v7m(m4t, h4h, h5t);
						h7c--;
						break;
					case x2v.u3o:
						d5c(m4t, h4h, h5t);
						h7c--;
						break;
					case x2v.u3z:
						i9l(m4t, h4h, h5t);
						h7c--;
						break;
					case x2v.x9n:
						e4g(m4t, h4h, h5t);
						h7c--;
						break;
					case x2v.e7o:
						c9m(m4t, h4h, h5t);
						h7c--;
						break;
					default:
						break;
				}
			}
		}
		y3p(m4t, h4h);
		y6m(m4t, h4h);
	}

	return m4t;
}

function y5u(h4h, i6p)
{
	let m4t = [];

	if (h4h.a2y())
	{
		if (!h4h.m9n(i6p))
		{
			j0x(m4t, h4h, i6p);
		}
	}
	else
	{
		if (!h4h.g9p(i6p))
		{
			h1t(m4t, h4h, i6p);
		}
	}

	return m4t;
}

function x1c(h4h, i6p)
{
	let m4t = [];

	if (h4h.a2y())
	{
		if (!h4h.m9n(i6p))
		{
			z8x(m4t, h4h, i6p, x2v.j8g);
		}
	}
	else
	{
		if (!h4h.g9p(i6p))
		{
			z8x(m4t, h4h, i6p, x2v.n5l);
		}
	}

	return m4t;
}

function d2r(h4h, i6p)
{
	let m4t = [];

	if (h4h.a2y())
	{
		if (!h4h.m9n(i6p))
		{
			y5p(m4t, h4h, i6p, x2v.j7b);
		}
	}
	else
	{
		if (!h4h.g9p(i6p))
		{
			y5p(m4t, h4h, i6p, x2v.u3o);
		}
	}

	return m4t;
}

function p3w(h4h, i6p)
{
	let m4t = [];

	if (h4h.a2y())
	{
		if (!h4h.m9n(i6p))
		{
			z4c(m4t, h4h, i6p, x2v.t7u);
		}
	}
	else
	{
		if (!h4h.g9p(i6p))
		{
			z4c(m4t, h4h, i6p, x2v.u3z);
		}
	}

	return m4t;
}

function d1o(h4h, i6p)
{
	let m4t = [];

	if (h4h.a2y())
	{
		if (!h4h.m9n(i6p))
		{
			x8q(m4t, h4h, i6p, x2v.u0n);
		}
	}
	else
	{
		if (!h4h.g9p(i6p))
		{
			x8q(m4t, h4h, i6p, x2v.x9n);
		}
	}

	return m4t;
}

function k6q(h4h, i6p)
{
	let m4t = [];

	let t0s = l6i;
	if (h4h.a2y())
	{
		t0s = h4h.u7u();
	}
	else
	{
		t0s = h4h.e7o();
	}

	if (t0s == l6i)
	{
		return m4t;
	}

	if (h4h.a2y())
	{
		f8e(m4t, h4h, t0s);
		j5x(m4t, h4h);
	}
	else
	{
		c9m(m4t, h4h, t0s);
		y6m(m4t, h4h);
	}

	return m4t;
}

function q8v(h4h, i6p)
{
	let m4t = [];

	let t0s = l6i;
	if (h4h.a2y())
	{
		t0s = h4h.u7u();
	}
	else
	{
		t0s = h4h.e7o();
	}

	if (t0s == l6i)
	{
		return m4t;
	}

	if (h4h.a2y())
	{
		if (!h4h.m9n(i6p))
		{
			i1g(m4t, h4h, i6p, x2v.u7u);
		}
	}
	else
	{
		if (!h4h.g9p(i6p))
		{
			i1g(m4t, h4h, i6p, x2v.e7o);
		}
	}

	return m4t;
}

function u0d(h4h)
{
	let m4t = [];

	if (h4h.a2y())
	{
		if (!h4h.v5h(h4h.g6f()))
		{
			return m4t;
		}
		if (!h4h.q7w())
		{
			return m4t;
		}
		y4a(m4t, h4h);
		return m4t;
	}
	else
	{
		if (!h4h.o6t(h4h.z7x()))
		{
			return m4t;
		}
		if (!h4h.d3y())
		{
			return m4t;
		}
		e5t(m4t, h4h);
		return m4t;
	}
}

function f7o(h4h)
{
	let m4t = [];

	if (h4h.a2y())
	{
		if (!h4h.v5h(h4h.g6f()))
		{
			return m4t;
		}
		if (!h4h.i4x())
		{
			return m4t;
		}
		h0b(m4t, h4h);
		return m4t;
	}
	else
	{
		if (!h4h.o6t(h4h.z7x()))
		{
			return m4t;
		}
		if (!h4h.v2y())
		{
			return m4t;
		}
		f1m(m4t, h4h);
		return m4t;
	}
}

function g3s(h4h)
{
	if (h4h.a2y())
	{
		if (h4h.u7u() != l6i)
		{
			return d8q(h4h, h4h.u7u());
		}
	}
	else
	{
		if (h4h.e7o() != l6i)
		{
			return u9e(h4h, h4h.e7o());
		}
	}
	return false;
}




function r5q(h4h, a7j)
{
	let b8p = m9d(h4h);
	let z9l = [];
  for (const h9g of b8p)
	{
		if (h9g.a7j == a7j)
		{
			z9l.push(h9g);
		}
	}
	return z9l;
}

function g1j(h4h, g5w)
{
	let b8p = m9d(h4h);
	let v0j = [];
  for (const h9g of b8p)
	{
		if (h9g.g5w == g5w)
		{
			v0j.push(h9g);
		}
	}
	return v0j;
}

function e8e(h4h, a7j, g5w)
{
	let b8p = m9d(h4h);
	let a5b = [];
  for (const h9g of b8p)
	{
		if (h9g.a7j == a7j && h9g.g5w == g5w)
		{
			a5b.push(h9g);
		}
	}
	return a5b;
}

function k4u(h4h, a7j, g5w, type)
{
	let x8g = new j0n();
	if (type == q3c.null)
	{
		return x8g;
	}

	x8g.a7j = a7j;
	x8g.g5w = g5w;
	x8g.type = type;
	if (type == q3c.n4w)
	{
		if (h4h.q2p(x8g.g5w) != x2v.v9y)
		{
			x8g.g4o = x8g.g5w;
			x8g.m7e = h4h.q2p(x8g.g5w);
		}
		x8g.a0b = h4h.q2p(x8g.a7j);
		x8g.a8g = x8g.a0b;
	}
	else if (type == q3c.e6m)
	{
		x8g.a0b = h4h.q2p(x8g.a7j);
		x8g.a8g = x8g.a0b;
	}
	else if (type == q3c.j3x)
	{
		x8g.a0b = h4h.q2p(x8g.a7j);
		x8g.a8g = x8g.a0b;
		if (m9n(x8g.a0b))
		{
			x8g.g4o = (x8g.g5w - 8);
			x8g.m7e = x2v.v9n;
		}
		else
		{
			x8g.g4o = (x8g.g5w + 8);
			x8g.m7e = x2v.u3i;
		}
	}
	else if (type == q3c.h8a)
	{
		if (h4h.q2p(x8g.g5w) != x2v.v9y)
		{
			x8g.g4o = x8g.g5w;
			x8g.m7e = h4h.q2p(x8g.g5w);
		}
		x8g.a0b = h4h.q2p(x8g.a7j);
		if (m9n(x8g.a0b))
		{
			x8g.a8g = x2v.u0n;
		}
		else
		{
			x8g.a8g = x2v.x9n;
		}
	}
	else if (type == q3c.k1e)
	{
		if (h4h.q2p(x8g.g5w) != x2v.v9y)
		{
			x8g.g4o = x8g.g5w;
			x8g.m7e = h4h.q2p(x8g.g5w);
		}
		x8g.a0b = h4h.q2p(x8g.a7j);
		if (m9n(x8g.a0b))
		{
			x8g.a8g = x2v.t7u;
		}
		else
		{
			x8g.a8g = x2v.u3z;
		}
	}
	else if (type == q3c.c6a)
	{
		if (h4h.q2p(x8g.g5w) != x2v.v9y)
		{
			x8g.g4o = x8g.g5w;
			x8g.m7e = h4h.q2p(x8g.g5w);
		}
		x8g.a0b = h4h.q2p(x8g.a7j);
		if (m9n(x8g.a0b))
		{
			x8g.a8g = x2v.j7b;
		}
		else
		{
			x8g.a8g = x2v.u3o;
		}
	}
	else if (type == q3c.i6z)
	{
		if (h4h.q2p(x8g.g5w) != x2v.v9y)
		{
			x8g.g4o = x8g.g5w;
			x8g.m7e = h4h.q2p(x8g.g5w);
		}
		x8g.a0b = h4h.q2p(x8g.a7j);
		if (m9n(x8g.a0b))
		{
			x8g.a8g = x2v.j8g;
		}
		else
		{
			x8g.a8g = x2v.n5l;
		}
	}
	return x8g;
}

function k4u(l5d, a7j, g5w, type)
{
	let x8g = new j0n();
	if (type == q3c.null)
	{
		return x8g;
	}

	x8g.a7j = a7j;
	x8g.g5w = g5w;
	x8g.type = type;
	if (type == q3c.n4w)
	{
		if (l5d[x8g.g5w] != x2v.v9y)
		{
			x8g.g4o = x8g.g5w;
			x8g.m7e = l5d[x8g.g5w];
		}
		x8g.a0b = l5d[x8g.a7j];
		x8g.a8g = x8g.a0b;
	}
	else if (type == q3c.e6m)
	{
		x8g.a0b = l5d[x8g.a7j];
		x8g.a8g = x8g.a0b;
	}
	else if (type == q3c.j3x)
	{
		x8g.a0b = l5d[x8g.a7j];
		x8g.a8g = x8g.a0b;
		if (m9n(x8g.a0b))
		{
			x8g.g4o = (x8g.g5w - 8);
			x8g.m7e = x2v.v9n;
		}
		else
		{
			x8g.g4o = (x8g.g5w + 8);
			x8g.m7e = x2v.u3i;
		}
	}
	else if (type == q3c.h8a)
	{
		if (l5d[x8g.g5w] != x2v.v9y)
		{
			x8g.g4o = x8g.g5w;
			x8g.m7e = l5d[x8g.g5w];
		}
		x8g.a0b = l5d[x8g.a7j];
		if (m9n(x8g.a0b))
		{
			x8g.a8g = x2v.u0n;
		}
		else
		{
			x8g.a8g = x2v.x9n;
		}
	}
	else if (type == q3c.k1e)
	{
		if (l5d[x8g.g5w] != x2v.v9y)
		{
			x8g.g4o = x8g.g5w;
			x8g.m7e = l5d[x8g.g5w];
		}
		x8g.a0b = l5d[x8g.a7j];
		if (m9n(x8g.a0b))
		{
			x8g.a8g = x2v.t7u;
		}
		else
		{
			x8g.a8g = x2v.u3z;
		}
	}
	else if (type == q3c.c6a)
	{
		if (l5d[x8g.g5w] != x2v.v9y)
		{
			x8g.g4o = x8g.g5w;
			x8g.m7e = l5d[x8g.g5w];
		}
		x8g.a0b = l5d[x8g.a7j];
		if (m9n(x8g.a0b))
		{
			x8g.a8g = x2v.j7b;
		}
		else
		{
			x8g.a8g = x2v.u3o;
		}
	}
	else if (type == q3c.i6z)
	{
		if (l5d[x8g.g5w] != x2v.v9y)
		{
			x8g.g4o = x8g.g5w;
			x8g.m7e = l5d[x8g.g5w];
		}
		x8g.a0b = l5d[x8g.a7j];
		if (m9n(x8g.a0b))
		{
			x8g.a8g = x2v.j8g;
		}
		else
		{
			x8g.a8g = x2v.n5l;
		}
	}
	return x8g;
}

const j4q 						=   8; 
const v1o 						=  -8; 
const z9z 	      			=   1; 
const j5c 	      			=  -1; 
const m6l 		=  17; 
const a7k 		=  10; 
const j3m 				=   9; 
const k2h 		=   6; 
const u5b 		=  15; 
const v3t 				=   7; 
const q8f 		= -17; 
const w5j 		= -10; 
const l2t 				=  -9; 
const g6m 		=  -6; 
const l3u 		= -15; 
const t4s 				=  -7; 

function j4a(h5t)
{
	let e2f = [];
	let p8k = j4q;
	let g5w = h5t;
	while (l2r(g5w) <= l4r)
	{
		g5w = g5w + p8k;
		e2f.push(g5w);
	}
	return e2f;
}

function a9n(h5t)
{
	let e2f = [];
	let p8k = j3m;
	let g5w = h5t;
	while (l2r(g5w) <= l4r && t2u(g5w) <= o0q)
	{
		g5w = g5w + p8k;
		e2f.push(g5w);
	}
	return e2f;
}

function w5y(h5t)
{
	let e2f = [];
	let p8k = z9z;
	let g5w = h5t;
	while (t2u(g5w) <= o0q)
	{
		g5w = g5w + p8k;
		e2f.push(g5w);
	}
	return e2f;
}

function g4i(h5t)
{
	let e2f = [];
	let p8k = t4s;
	let g5w = h5t;
	while (l2r(g5w) >= x5k && t2u(g5w) <= o0q)
	{
		g5w = g5w + p8k;
		e2f.push(g5w);
	}
	return e2f;
}

function n4j(h5t)
{
	let e2f = [];
	let p8k = v1o;
	let g5w = h5t;
	while (l2r(g5w) >= x5k)
	{
		g5w = g5w + p8k;
		e2f.push(g5w);
	}
	return e2f;
}

function o0s(h5t)
{
	let e2f = [];
	let p8k = l2t;
	let g5w = h5t;
	while (l2r(g5w) >= x5k && t2u(g5w) >= h2o)
	{
		g5w = g5w + p8k;
		e2f.push(g5w);
	}
	return e2f;
}

function p6s(h5t)
{
	let e2f = [];
	let p8k = j5c;
	let g5w = h5t;
	while (t2u(g5w) >= h2o)
	{
		g5w = g5w + p8k;
		e2f.push(g5w);
	}
	return e2f;
}

function f0a(h5t)
{
	let e2f = [];
	let p8k = v3t;
	let g5w = h5t;
	while (l2r(g5w) <= l4r && t2u(g5w) >= h2o)
	{
		g5w = g5w + p8k;
		e2f.push(g5w);
	}
	return e2f;
}

function x7f(h5t)
{
	let e2f = [];
	if (l2r(h5t) <= y1r && t2u(h5t) <= o0q)
	{
		let g5w = h5t + m6l;
		e2f.push(g5w);
	}
	if (l2r(h5t) <= l4r && t2u(h5t) <= g9l)
	{
		let g5w = h5t + a7k;
		e2f.push(g5w);
	}
	if (l2r(h5t) >= x5k && t2u(h5t) <= g9l)
	{
		let g5w = h5t + g6m;
		e2f.push(g5w);
	}
	if (l2r(h5t) >= f2o && t2u(h5t) <= o0q)
	{
		let g5w = h5t + l3u;
		e2f.push(g5w);
	}
	if (l2r(h5t) >= f2o && t2u(h5t) >= h2o)
	{
		let g5w = h5t + q8f;
		e2f.push(g5w);
	}
	if (l2r(h5t) >= x5k && t2u(h5t) >= z9p)
	{
		let g5w = h5t + w5j;
		e2f.push(g5w);
	}
	if (l2r(h5t) <= l4r && t2u(h5t) >= z9p)
	{
		g5w = h5t + k2h;
		e2f.push(g5w);
	}
	if (l2r(h5t) <= y1r && t2u(h5t) >= h2o)
	{
		let g5w = h5t + u5b;
		e2f.push(g5w);
	}
	return e2f;
}

function l9m(h5t)
{
	let e2f = [];
	if (l2r(h5t) <= l4r)
	{
		let g5w = h5t + j4q;
		e2f.push(g5w);
	}
	if (l2r(h5t) <= l4r && t2u(h5t) <= o0q)
	{
		let g5w = h5t + j3m;
		e2f.push(g5w);
	}
	if (t2u(h5t) <= o0q)
	{
		let g5w = h5t + z9z;
		e2f.push(g5w);
	}
	if (l2r(h5t) >= x5k && t2u(h5t) <= o0q)
	{
		let g5w = h5t + t4s;
		e2f.push(g5w);
	}
	if (l2r(h5t) >= x5k)
	{
		let g5w = h5t + v1o;
		e2f.push(g5w);
	}
	if (l2r(h5t) >= x5k && t2u(h5t) >= h2o)
	{
		let g5w = h5t + l2t;
		e2f.push(g5w);
	}
	if (t2u(h5t) >= h2o)
	{
		let g5w = h5t + j5c;
		e2f.push(g5w);
	}
	if (l2r(h5t) <= l4r && t2u(h5t) >= h2o)
	{
		let g5w = h5t + v3t;
		e2f.push(g5w);
	}
	return e2f;
}

const q3c =
{
  c2f : 0,  
	n4w : 1,
	e6m : 2,
	j3x : 3,
	i6z : 4,
	c6a : 5,
	k1e : 6,
	h8a : 7
};

function f2w(c1b)
{
	switch (c1b)
	{
		case x2v.u3i:
		case x2v.v9n:
			return e1q.b7w;
		case x2v.j8g:
		case x2v.n5l:
			return e1q.m7s;
		case x2v.j7b:
		case x2v.u3o:
			return e1q.u4n;
		case x2v.t7u:
		case x2v.u3z:
			return e1q.o3w;
		case x2v.u0n:
		case x2v.x9n:
			return e1q.f1i;
		case x2v.u7u:
		case x2v.e7o:
			return e1q.king;
		case x2v.v9y:
			return e1q.b7w;
	}
}

function w0m(h4h, x8g, d1l)
{
 	let x1x = '';
	if (x8g.v9y())
	{
		x1x += "--";
	}
	else if (r7y(x8g.a0b))
	{
    if (x8g.w0o())
    {
			let n7a = t2u(x8g.a7j);
			x1x = g1e(n7a) + "x" + i2q(x8g.g5w);
    }
    else
    {
 			x1x = i2q(x8g.g5w);
    }
		if (x8g.o2k())
		{
			x1x += "=";
			x1x += x0a(f2w(x8g.a8g));
		}
	}
	else if (x8g.a0b == x2v.u7u && x8g.a0u())
	{
		if (x8g.g5w == q0l)
		{
			x1x = "O-O-O";
		}
		else
		{
			x1x = "O-O";
		}
	}
	else if (x8g.a0b == x2v.e7o && x8g.a0u())
	{
		if (x8g.g5w == w3w)
		{
			x1x = "O-O-O";
		}
		else
		{
			x1x = "O-O";
		}
	}
	else
	{
		x1x = x0a(f2w(x8g.a0b));
    let b8p = [];
    if (m9n(x8g.a0b))
    {
      if (x8g.a0b == x2v.j8g)
      {
        b8p = x1c(h4h, x8g.g5w);
      }
      else if (x8g.a0b == x2v.j7b)
      {
        b8p = d2r(h4h, x8g.g5w);
      }
      else if (x8g.a0b == x2v.t7u)
      {
        b8p = p3w(h4h, x8g.g5w);
      }
      else if (x8g.a0b == x2v.u0n)
      {
        b8p = d1o(h4h, x8g.g5w);
      }
      else if (x8g.a0b == x2v.u7u)
      {
        b8p = q8v(h4h, x8g.g5w);
      }
    }
    else
    {
      if (x8g.a0b == x2v.n5l)
      {
        b8p = x1c(h4h, x8g.g5w);
      }
      else if (x8g.a0b == x2v.u3o)
      {
        b8p = d2r(h4h, x8g.g5w);
      }
      else if (x8g.a0b == x2v.u3z)
      {
        b8p = p3w(h4h, x8g.g5w);
      }
      else if (x8g.a0b == x2v.x9n)
      {
        b8p = d1o(h4h, x8g.g5w);
      }
      else if (x8g.a0b == x2v.e7o)
      {
        b8p = q8v(h4h, x8g.g5w);
      }
    }
    if (b8p.length > 1)
    {
      
      let x4l = 0;
      let n7a = t2u(x8g.a7j);
     	for (const h9g of b8p)
      {
        if (t2u(h9g.a7j) == n7a)
        {
          x4l++;
        }
      }
      if (x4l == 1)
      {
        
 				let n7a = t2u(x8g.a7j);
				x1x += g1e(n7a);
      }
      else
      {
        x4l = 0;
        let p8x = l2r(x8g.a7j);
       	for (const h9g of b8p)
        {
          if (l2r(h9g.a7j) == p8x)
          {
            x4l++;
          }
        }
        if (x4l == 1)
        {
          
          x1x += w2k(p8x);
        }
        else
        {
          
 					x1x += i2q(x8g.a7j);
        }
      }
    }
		if (x8g.w0o())
		{
       x1x += "x";
		}
		x1x += i2q(x8g.g5w);
	}
	if (!x8g.v9y())
	{
  	let a0g = h4h.a0s();
    a0g.a0e(x8g);
  	if (g3s(a0g))
	  {
  		let m4t = m9d(a0g);
	  	if (m4t.length == 0)
		  {
			  x1x += "#";
  		}
	  	else
		  {
			  x1x += "+";
  		}
	  }
	}
	return x1x;
}
class p9o
{

constructor()
{
	this.height = 0;
	this.width = 0;
	this.fontSize = 0;
}

}

function x7p(u1e,
  w4r,
  z5l,
  coordinate,
  coordinatesType,
  a0m,
  h6y,
  marginSize) 
{
 	let l7c = (coordinatesType == l8m.e3c ||
		coordinatesType == l8m.y2x ||
		coordinatesType == l8m.d3d);
	let z0x = (coordinatesType == l8m.e3c ||
		coordinatesType == l8m.y2x ||
		coordinatesType == l8m.x9d);
	let o4t =	(coordinatesType == l8m.e3c ||
		coordinatesType == l8m.d3d ||
		coordinatesType == l8m.x5m);
	let r6v = (coordinatesType == l8m.e3c ||
		coordinatesType == l8m.x9d ||
		coordinatesType == l8m.x5m);

	u1e.font = (coordinate.fontSize).toString() + "px serif";
	u1e.fillStyle = a0m;
  let a8l = coordinate.height;

	if (z0x)
	{
		let j3g = c4f;
		if (h6y)
		{
			j3g = 1;
		}
    for (let c4e = 0; c4e < c4f; c4e++)
		{
			let f7r = u1e.measureText(j3g).width;
			let top = w4r.s5d + 1 + c4e * z5l.x2m;
			top += (z5l.x2m - a8l) / 2 + a8l;
			let n5j = w4r.q5f - marginSize + (marginSize - f7r) / 2;
      u1e.fillText(j3g, n5j, top);
			if (h6y)
			{
				j3g++;
			}
			else
			{
				j3g--;
			}
		}
	}

	if (o4t)
	{
		let j3g = c4f;
		if (h6y)
		{
			j3g = 1;
		}
    for (let c4e = 0; c4e < c4f; c4e++)
		{
      let f7r = u1e.measureText(j3g).width;
			let top = w4r.s5d + 1 + c4e * z5l.x2m;
			top += (z5l.x2m - a8l) / 2 + a8l;
			let n5j = w4r.q5f + w4r.f4v() +
        (marginSize - f7r) / 2;
      u1e.fillText(j3g, n5j, top);
			if (h6y)
			{
				j3g++;
			}
			else
			{
				j3g--;
			}
		}
	}

	if (l7c)
	{
		let k1w = 'a';
		if (h6y)
		{
			k1w = 'h';
		}
    for (let g3j = 0; g3j < c4f; g3j++)
		{
			let z7f = k1w;
			let left = w4r.q5f + 1 + g3j * z5l.x2m;
      let f7r = u1e.measureText(z7f).width;
			let n5j = left + (z5l.x2m - f7r) / 2;
			let a2j = w4r.s5d - (marginSize - a8l) / 2 - 2;
      
      if (k1w == 'g')
      {
        a2j -= 2; 
      }
      u1e.fillText(z7f, n5j, a2j);
			if (h6y)
			{
        let k6f = k1w.charCodeAt(0);
        k6f--;
        k1w = String.fromCharCode(k6f);
			}
			else
			{
        let k6f = k1w.charCodeAt(0);
        k6f++;
        k1w = String.fromCharCode(k6f);
			}
		}
	}

	if (r6v)
	{
		let k1w = 'a';
		if (h6y)
		{
			k1w = 'h';
		}
    for (let g3j = 0; g3j < c4f; g3j++)
		{
			let z7f = k1w;
			let left = w4r.q5f + 1 + g3j * z5l.x2m;
      let f7r = u1e.measureText(z7f).width;
			let n5j = left + (z5l.x2m - f7r) / 2;
			let a2j = w4r.s5d + w4r.j5w() +
        (marginSize - a8l) / 2 + a8l - 2;
      
      if (k1w == 'g')
      {
        a2j -= 2; 
      }
      u1e.fillText(z7f, n5j, a2j);
			if (h6y)
			{
        let k6f = k1w.charCodeAt(0);
        k6f--;
        k1w = String.fromCharCode(k6f);
			}
			else
			{
        let k6f = k1w.charCodeAt(0);
        k6f++;
        k1w = String.fromCharCode(k6f);
			}
		}
	}
}

function u0f(u1e, fontSize)
{
	let q0t = new p9o();
	q0t.fontSize = fontSize;
	q0t.height = fontSize;
	q0t.width = fontSize;
	return q0t;
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

function m1l()
{
  whitePawnBitmap = r3s.m0v("images/pieces/Merida/wP");
 	whiteKnightBitmap = r3s.m0v("images/pieces/Merida/wN");
  whiteBishopBitmap = r3s.m0v("images/pieces/Merida/wB");
 	whiteRookBitmap = r3s.m0v("images/pieces/Merida/wR");
  whiteQueenBitmap = r3s.m0v("images/pieces/Merida/wQ");
 	whiteKingBitmap = r3s.m0v("images/pieces/Merida/wK");
  blackPawnBitmap = r3s.m0v("images/pieces/Merida/bP");
 	blackKnightBitmap = r3s.m0v("images/pieces/Merida/bN");
  blackBishopBitmap = r3s.m0v("images/pieces/Merida/bB");
 	blackRookBitmap = r3s.m0v("images/pieces/Merida/bR");
  blackQueenBitmap = r3s.m0v("images/pieces/Merida/bQ");
 	blackKingBitmap = r3s.m0v("images/pieces/Merida/bK");
}

function d8l()
{
  whitePawnBitmap = r3s.m0v("images/pieces/CBurnett/wP");
 	whiteKnightBitmap = r3s.m0v("images/pieces/CBurnett/wN");
  whiteBishopBitmap = r3s.m0v("images/pieces/CBurnett/wB");
 	whiteRookBitmap = r3s.m0v("images/pieces/CBurnett/wR");
  whiteQueenBitmap = r3s.m0v("images/pieces/CBurnett/wQ");
 	whiteKingBitmap = r3s.m0v("images/pieces/CBurnett/wK");
  blackPawnBitmap = r3s.m0v("images/pieces/CBurnett/bP");
 	blackKnightBitmap = r3s.m0v("images/pieces/CBurnett/bN");
  blackBishopBitmap = r3s.m0v("images/pieces/CBurnett/bB");
 	blackRookBitmap = r3s.m0v("images/pieces/CBurnett/bR");
  blackQueenBitmap = r3s.m0v("images/pieces/CBurnett/bQ");
 	blackKingBitmap = r3s.m0v("images/pieces/CBurnett/bK");
}

function r4r(d7w)
{
  if (d7w == 0)
  {
    d8l();
  }
  else
  {
    m1l();
  }
}

function b3q(c1b)
{
  switch (c1b)
	{
    case x2v.u3i:
      return whitePawnBitmap;
      break;
    case x2v.j8g:
      return whiteKnightBitmap;
      break;
    case x2v.j7b:
      return whiteBishopBitmap;
      break;
    case x2v.t7u:
      return whiteRookBitmap;
      break;
    case x2v.u0n:
      return whiteQueenBitmap;
      break;
    case x2v.u7u:
      return whiteKingBitmap;
      break;
    case x2v.v9n:
      return blackPawnBitmap;
      break;
    case x2v.n5l:
      return blackKnightBitmap;
      break;
    case x2v.u3o:
      return blackBishopBitmap;
      break;
    case x2v.u3z:
      return blackRookBitmap;
      break;
    case x2v.x9n:
      return blackQueenBitmap;
      break;
    case x2v.e7o:
      return blackKingBitmap;
      break;
    default:
      break
	}
  return null;
}

function v6b(u1e, rect, c1b)
{
  if (c1b == x2v.v9y) return;
	let m0v = b3q(c1b);
  u1e.drawImage(m0v, rect.q5f, rect.s5d, rect.f4v(), rect.j5w());
}
function r3t(s0k)
{
	let h4h = new g8w();
	let l8b = s0k.length;

 	let w0d = s0k.split(" ");
	if (w0d.length < 2)
	{
		return h4h;
	}

	let o6x = w0d[1];
	if (o6x.length)
	{
		if (o6x[0] == 'w')
		{
			h4h.c7c();
		}
		else if (o6x[0] == 'b')
		{
			h4h.t1y();
		}
	}

 	let i8l = w0d[0].split("/");
	if (i8l.length != 8)
	{
		return h4h;
	}
	let y7r = a8;
	for (const c4e of i8l)
	{
		let h5t = y7r;
		let l8b = c4e.length;
		for (let i = 0; i < l8b; i++)
		{
			if (h5t == y7r + 8)
			{
				return h4h; 
			}
			let x6s = true;
			switch (c4e[i])
			{
				case 'p':
					h4h.b6m(h5t, x2v.v9n);
					break;
				case 'n':
					h4h.b6m(h5t, x2v.n5l);
					break;
				case 'b':
					h4h.b6m(h5t, x2v.u3o);
					break;
				case 'r':
					h4h.b6m(h5t, x2v.u3z);
					break;
				case 'q':
					h4h.b6m(h5t, x2v.x9n);
					break;
				case 'k':
					h4h.b6m(h5t, x2v.e7o);
					break;
				case 'P':
					h4h.b6m(h5t, x2v.u3i);
					break;
				case 'N':
					h4h.b6m(h5t, x2v.j8g);
					break;
				case 'B':
					h4h.b6m(h5t, x2v.j7b);
					break;
				case 'R':
					h4h.b6m(h5t, x2v.t7u);
					break;
				case 'Q':
					h4h.b6m(h5t, x2v.u0n);
					break;
				case 'K':
					h4h.b6m(h5t, x2v.u7u);
					break;
				default:
					x6s = false;
					break;
			}
			if (x6s)
			{
				h5t = h5t + 1;
			}
			else
			{
				if (!isNaN(c4e[i]))
				{
					h5t = h5t + x7l(c4e[i], 0);
				}
			}
		}
		y7r = y7r - 8;
	}

 	if (w0d.length >= 3)
	{
		let c9t = new d5f(); 
		let b0x = w0d[2];
		if (b0x.length)
		{
			if (b0x[0] != '-')
			{
				let l8b = b0x.length;
				if (b0x[0] >= 'A' && b0x[0] <= 'H')
				{
 					c9t.m8v = true; 
          
					c9t.g6f = h4h.u7u();
					c9t.z7x = h4h.e7o();
					if (l8b == 4)
					{
						let x1x = b0x.charAt(0).toLowerCase();
						x1x += "1";
						c9t.l4x = d9s(x1x);
						if (h4h.t1o(c9t.l4x))
						{
							c9t.e3b = true;
						}
						x1x = b0x.charAt(1).toLowerCase();
						x1x += "1";
						c9t.c6z = d9s(x1x);
						if (h4h.t1o(c9t.c6z))
						{
							c9t.y4g = true;
						}
						x1x = b0x.charAt(2).toLowerCase();
						x1x += "8";
						c9t.i8g = d9s(x1x);
						if (h4h.c2w(c9t.i8g))
						{
							c9t.o6e = true;
						}
						x1x = b0x.charAt(3).toLowerCase();
						x1x += "8";
						c9t.q2f = d9s(x1x);
						if (h4h.c2w(c9t.q2f))
						{
							c9t.k6l = true;
						}
          }
				}
				else
				{
					for (let i = 0; i < l8b; i++)
					{
						switch (b0x[i])
						{
							case 'K':
								if (h4h.v5h(c9t.g6f) && h4h.t1o(c9t.l4x))
								{
									c9t.e3b = true;
								}
								break;
							case 'Q':
								if (h4h.v5h(c9t.g6f) && h4h.t1o(c9t.c6z))
								{
									c9t.y4g = true;
								}
								break;
							case 'k':
								if (h4h.o6t(c9t.z7x) && h4h.c2w(c9t.i8g))
								{
									c9t.o6e = true;
								}
								break;
							case 'q':
								if (h4h.o6t(c9t.z7x) && h4h.c2w(c9t.q2f))
								{
									c9t.k6l = true;
								}
								break;
						}
					}
				}
			}
		}
		if (w0d.length >= 4)
		{
			let b1y = w0d[3];
			if (b1y.length)
			{
				if (b1y[0] != '-')
				{
					c9t.p3e = d9s(b1y);
					if (l2r(c9t.p3e) == y1r)
					{
						let e4r = c9t.p3e + 8;
						let i6p = c9t.p3e - 8;
						if (!h4h.b0e(e4r) || !h4h.f6y(i6p))
						{
							c9t.p3e = l6i;
						}
					}
					else if (l2r(c9t.p3e) == f2o)
					{
						let e4r = c9t.p3e - 8;
						let i6p = c9t.p3e + 8;
						if (!h4h.b0e(e4r) || !h4h.m6o(i6p))
						{
							c9t.p3e = l6i;
						}
					}
					else
					{
						c9t.p3e = l6i;
					}
				}
			}
		}
		h4h.l5v(c9t);
	}
	return h4h;
}

function k2y(h4h)
{
	let s0k = '';
	let y7r = a8;
	for (let c4e = 7; c4e >= 0; c4e--)
	{
		let h5t = y7r;
		let r7l = 0;
		for (let g3j = 0; g3j < 8; g3j++)
		{
			if (h4h.b0e(h5t))
			{
				r7l++;
			}
			else
			{
				if (r7l)
				{
					s0k += r7l;
					r7l = 0;
				}
				switch (h4h.q2p(h5t))
				{
					case x2v.v9y:
						break;
					case x2v.u3i:
						s0k += 'P';
						break;
					case x2v.j8g:
						s0k += 'N';
						break;
					case x2v.j7b:
						s0k += 'B';
						break;
					case x2v.t7u:
						s0k += 'R';
						break;
					case x2v.u0n:
						s0k += 'Q';
						break;
					case x2v.u7u:
						s0k += 'K';
						break;
					case x2v.v9n:
						s0k += 'p';
						break;
					case x2v.n5l:
						s0k += 'n';
						break;
					case x2v.u3o:
						s0k += 'b';
						break;
					case x2v.u3z:
						s0k += 'r';
						break;
					case x2v.x9n:
						s0k += 'q';
						break;
					case x2v.e7o:
						s0k += 'k';
						break;
				}
			}
			h5t = h5t + 1;
		}
		if (r7l)
		{
			s0k += r7l;
		}
		y7r = (y7r - 8);
		if (c4e > 0)
		{
			s0k += "/";
		}
	}
	s0k += " ";
	if (h4h.a2y())
	{
		s0k += "w";
	}
	else
	{
		s0k += "b";
	}
	s0k += " ";
	let c9t = h4h.v4y();
	if (
		!c9t.e3b &&
		!c9t.y4g &&
		!c9t.o6e &&
		!c9t.k6l)
	{
		s0k += "-";
	}
	else
	{
		if (c9t.m8v)
		{
			if (c9t.e3b)
			{
				s0k += g1e(t2u(c9t.l4x)).toUpperCase();
			}
			if (c9t.y4g)
			{
				s0k += g1e(t2u(c9t.c6z)).toUpperCase();
			}
			if (c9t.o6e)
			{
				s0k += g1e(t2u(c9t.i8g)).toUpperCase();
			}
			if (c9t.k6l)
			{
				s0k += g1e(t2u(c9t.q2f)).toUpperCase();
			}
		}
		else
		{
			if (c9t.e3b)
			{
				s0k += "K";
			}
			if (c9t.y4g)
			{
				s0k += "Q";
			}
			if (c9t.o6e)
			{
				s0k += "k";
			}
			if (c9t.k6l)
			{
				s0k += "q";
			}
		}
	}
	s0k += " ";
	if (c9t.p3e == l6i)
	{
		s0k += "-";
	}
	else
	{
		s0k += i2q(c9t.p3e);
	}
	return s0k;
}

function q8i(h4h, d4j)
{
	
	

  let z7a = d4j.length;
	if (z7a < 2 || z7a > 7)
	{
		return false;
	}

	
	if (d4j[0] == 'Z' || (z7a == 2 && d4j == "--") || (z7a == 4 && d4j == "null"))
	{
		return new j0n();
	}

	
	let w3l = d4j[z7a-1];
	if (w3l == '+' || w3l == '#')
	{
		z7a--;
		if (z7a < 2)
		{
   		return false;
		}
	}

	
	if (d4j[0] == 'O' || d4j[0] == '0')
	{
		if (z7a == 3)
		{
			let b8p = f7o(h4h);
			if (b8p.length != 1)
			{
    		return false;
			}
			return b8p[0];
		}
		if (z7a == 5)
		{
			let b8p = u0d(h4h);
			if (b8p.length != 1)
			{
    		return false;
			}
			return b8p[0];
		}
 		return false;
	}

	
	let a1f = false;
	let a4l = x2v.v9y;
	if (d4j[z7a-2] == '=')
	{
		a1f = true;
		let g7b = d4j[z7a-1];
		if (g7b == 'N')
		{
			a4l = h4h.a2y() ? x2v.j8g : x2v.n5l;
		}
		else if (g7b == 'B')
		{
			a4l = h4h.a2y() ? x2v.j7b : x2v.u3o;
		}
		else if (g7b == 'R')
		{
			a4l = h4h.a2y() ? x2v.t7u : x2v.u3z;
		}
		else if (g7b == 'Q')
		{
			a4l = h4h.a2y() ? x2v.u0n : x2v.x9n;
		}
		else
		{
  		return false;
		}
		z7a -= 2;
		if (z7a < 2)
		{
  		return false;
		}
	}

 	
	let toString = '';
	toString += d4j[z7a-2];
	toString += d4j[z7a-1];
	let i6p = d9s(toString);
	if (i6p == l6i)
	{
		return false;
	}
	z7a -= 2;
	

 	if (a1f)
	{
		let b8p = y5u(h4h, i6p);
		if (b8p.length == 0)
		{
  		return false;
		}
		let k9q = [];
		for (const x8g of b8p)
		{
			if (x8g.a8g == a4l)
			{
				k9q.push(x8g);
			}
		}
		b8p = k9q;
		if (b8p.length == 1)
		{
			return b8p[0];
		}
		if (z7a == 0)
		{
			
			for (const h9g of b8p)
			{
				if (h9g.g4o == l6i)
				{
					return h9g;
				}
			}
  		return false;
		}
		if (z7a != 2)
		{
  		return false;
		}
		
		let w3l = d4j[0];
		if (w3l < 'a' || w3l > 'h')
		{
  		return false;
		}
		let n7a = t1d(w3l);
		for (const h9g of b8p)
		{
			if (t2u(h9g.a7j) == n7a)
			{
				return h9g;
			}
		}
		return false;
	}

	if (z7a == 0)
	{
  	
		let b8p = y5u(h4h, i6p);
		if (b8p.length != 1)
		{
  		return false;
		}
		return b8p[0];
	}

  
	let b7w = false;
	let b8p = [];
	let j8m = d4j[0];
	if (j8m == 'N')
	{
		b8p = x1c(h4h, i6p);
	}
	else if (j8m == 'B')
	{
		b8p = d2r(h4h, i6p);
	}
	else if (j8m == 'R')
	{
		b8p = p3w(h4h, i6p);
	}
	else if (j8m == 'Q')
	{
		b8p = d1o(h4h, i6p);
	}
	else if (j8m == 'K')
	{
		
		b8p = q8v(h4h, i6p);
	}
	else
	{
		b7w = true;
		b8p = y5u(h4h, i6p);
	}
	if (b8p.length == 0)
	{
		return false;
	}
	if (b8p.length == 1)
	{
		return b8p[0]; 
	}

	
	
	
	if (z7a < 2)
	{
		return false;
	}

 	if (b7w)
	{
		let w3l = d4j[0]; 
		if (w3l < 'a' || w3l > 'h')
		{
  	  return false;
		}
		let n7a = t1d(w3l);
		for (const h9g of b8p)
		{
			if (t2u(h9g.a7j) == n7a && h9g.g4o != l6i)
			{
				return h9g;
			}
		}
		return false;
	}

	

 	
	let g9z = false;
	if (d4j[z7a-1] == 'x')
	{
		g9z = true;
		z7a--;
	}
	else if (d4j[z7a-1] == '-') 
	{
		g9z = false;
		z7a--;
	}

	if (z7a < 2)
	{
		return false;
	}

 	if (z7a == 2)
	{
		
		let w3l = d4j[1]; 
		if (w3l >= 'a' && w3l <= 'h')
		{
			let n7a = t1d(w3l);
			let u6i  = 0;
      let o1k = null;
			for (const h9g of b8p)
			{
				if (t2u(h9g.a7j) == n7a)
				{
					o1k = h9g;
					u6i++;
				}
			}
      return u6i === 1 ? o1k : false;
		}
		if (w3l >= '1' && w3l <= '8')
		{
			let p8x = g4l(w3l);
			let u6i = 0;
      let o1k = null;
			for (const h9g of b8p)
			{
				if (l2r(h9g.a7j) == p8x)
				{
					o1k = h9g;
					u6i++;
				}
			}
      return u6i === 1 ? o1k : false;
		}
		return false;
	}

 	if (z7a == 3)
	{
		
		let p6h = '';
		p6h += d4j[1]; 
		p6h += d4j[2];
		let e4r = d9s(p6h);
		if (e4r == l6i)
		{
  		return false;
		}
		let u6i = 0;
    let o1k = null;
		for (const h9g of b8p)
		{
			if (h9g.a7j == e4r)
			{
				o1k = h9g;
				u6i++;
			}
		}
    return u6i === 1 ? o1k : false;
	}

	return false;
}

function q8g()
{
  let i4m = ["images/board/BoardBackground.png",
    "images/board/DarkSquare.png",
    "images/board/LightSquare.png",
    "images/board/Margin.png",
    "images/pieces/Merida/bB.svg",
    "images/pieces/Merida/bK.svg",
    "images/pieces/Merida/bN.svg",
    "images/pieces/Merida/bP.svg",
    "images/pieces/Merida/bQ.svg",
    "images/pieces/Merida/bR.svg",
    "images/pieces/Merida/wB.svg",
    "images/pieces/Merida/wK.svg",
    "images/pieces/Merida/wN.svg",
    "images/pieces/Merida/wP.svg",
    "images/pieces/Merida/wQ.svg",
    "images/pieces/Merida/wR.svg",
    "images/pieces/CBurnett/bB.svg",
    "images/pieces/CBurnett/bK.svg",
    "images/pieces/CBurnett/bN.svg",
    "images/pieces/CBurnett/bP.svg",
    "images/pieces/CBurnett/bQ.svg",
    "images/pieces/CBurnett/bR.svg",
    "images/pieces/CBurnett/wB.svg",
    "images/pieces/CBurnett/wK.svg",
    "images/pieces/CBurnett/wN.svg",
    "images/pieces/CBurnett/wP.svg",
    "images/pieces/CBurnett/wQ.svg",
    "images/pieces/CBurnett/wR.svg"];
  return i4m;
}
function div(j6t, d6n)
{
  const s6n = j6t % d6n;
  const quot = Math.floor((j6t - s6n) / d6n);
  return { quot: quot, s6n: s6n };
}

function q8l(h4h, x1x)
{
	let x8g = new j0n();
	if (x1x.length < 4)
	{
		return x8g;
	}
	let p6h = x1x.slice(0, 2);
	let toString = x1x.slice(2, 4);
	x8g.a7j = d9s(p6h);
  x8g.a0b = h4h.q2p(x8g.a7j);
	x8g.g5w = d9s(toString);
	x8g.a8g = x8g.a0b;
	if (x1x.length == 5)
	{
		switch (x1x[4])
		{
			case 'q':
				x8g.a8g = h4h.a2y() ? x2v.u0n : x2v.x9n;
				break;
			case 'r':
				x8g.a8g = h4h.a2y() ? x2v.t7u : x2v.u3z;
				break;
			case 'b':
				x8g.a8g = h4h.a2y() ? x2v.j7b : x2v.u3o;
				break;
			case 'n':
				x8g.a8g = h4h.a2y() ? x2v.j8g : x2v.n5l;
				break;
		}
	}
	return x8g;
}

class c9o
{

constructor()
{
	let k6k = '';
	let value = '';
}

}

function h7n(x1x, k6k, m0x)
{
  let k5x = " " + k6k + " ";
  let n4s = x1x.indexOf(k5x, 0);
	if (n4s >= 0)
	{
		let o3k = n4s + k5x.length;
		let b8f = 0;
		
		if (k6k == "pv")
		{
			b8f = x1x.indexOf(" string ", o3k);
		}
		else
		{
			b8f = x1x.indexOf(" ", o3k);
		}
		if (b8f < 0)
		{
			b8f = x1x.length;
		}
    let value = x1x.slice(o3k, b8f).trim();
		m0x.set(k6k, value);
	}
}

const v1a =
{
	b6v        : 0,
	s0y      : 1,
};

class Engine
{

constructor()
{
	this.h5y = new e5o();
  this.h5j = null;
  this.x5d = new j0c();
  this.y8o = new o8k();
  this.f3q = false;
  this.m5p = false;
  this.n4k = false;
  this.o3o = false;
  this.e3i = false;
  this.s3u = new j6w();
	this.y7k = new h2g();
  this.z3f = null;
}

l8a(t1e)
{
  this.h5y = t1e.a0s();
  this.v4u();
  this.f3q = false;
 	for (const n1d of this.h5y.c5s.c5s)
	{
		if (n1d.k6k == "MultiPV")
		{
			this.f3q = (n1d.value != "1");
			break;
		}
	}

  this.o7g();
}

/*
o7g()
{
  this.h5j = new Worker("engines/stockfish/stockfish-17.1-8e4d048.js");
  this.h5j.z3f = (event) => {
    this.s0y(event);
  };
}
*/



o7g() {
  var self = this;
  
  var folderUrl = "https://kb5963.github.io/my-web-files/engines/stockfish/";
  var engineJsUrl = "https://raw.githubusercontent.com/kb5963/my-web-files/main/engines/stockfish/stockfish-17.1-8e4d048.js";

  console.log("Fetching engine from RAW GitHub...");

  fetch(engineJsUrl)
    .then(function(response) {
      if (!response.ok) throw new Error("Fetch failed: " + response.status);
      return response.j8o();
    })
    .then(function(scriptText) {
      
      var wasmFix = "var Module = { locateFile: function(path) { return '" + folderUrl + "' + path; } }; \n";
      var blob = new Blob([wasmFix + scriptText], { type: 'application/javascript' });
      var blobUrl = URL.createObjectURL(blob);

      self.h5j = new Worker(blobUrl);
      self.h5j.z3f = function(e) { self.s0y(e); };

      console.log("Engine Blob created!");
    })
    .catch(function(err) {
      console.error("The fetch still failed. Try opening the RAW link in your browser first.", err);
    });
}

q8p()
{
	this.x5d.w2m();
	this.y8o.w2m();
	this.b6v("uci");
}

s5m()
{
	if (!this.n4k)
	{
    return;
  }

  
	for (const n1d of this.h5y.c5s.c5s)
	{
		let k1h = "setoption";
		k1h += " name ";
		k1h += n1d.k6k;
		k1h += " value ";
		k1h += n1d.value;
		this.b6v(k1h);
	}
  
  
  
  

	this.b6v("isready");
	this.n4k = false;
}


b6v(p5k) {
    this.d2a(p5k, v1a.b6v);
    
    if (this.h5j) {
        this.h5j.postMessage(p5k);
    } else {
        console.log("Engine still loading... command queued: " + p5k);
    }
}

/*
b6v(p5k)
{
	this.d2a(p5k, v1a.b6v);
  this.h5j.postMessage(p5k);
}
*/

s0y(event)
{
  
  
 	this.d2a(event.data, v1a.s0y);
	this.g7c(event.data);
}

g7c(k1h)
{
	let w0d = k1h.split(' ');
	if (w0d.length == 0) return;
	let p5k = w0d[0];

	if (p5k == "readyok")
	{
		this.m5p = true;
    if (this.z3f)
    {
      this.z3f({
        cmd: "ready",
        data: {}
        });
    }
		return;
	}
	if (p5k == "bestmove")
	{
		this.c1n(k1h);
	}
	else if (p5k == "id")
	{
		this.e8p(k1h);
	}
	else if (p5k == "info")
	{
		this.f9y(k1h);
	}
	else if (p5k == "option")
	{
		this.m0s(k1h);
	}
	else if (p5k == "uciok")
	{
		this.e9d(k1h);
	}
}

c1n(k1h)
{
	this.o3o = false;
  if (this.e3i)
  {
    this.e3i = false;
    this.v2x();
  }
}

e8p(k1h)
{
 	let x1x = k1h;
	let w0d = x1x.split(" ");
	if (w0d.length < 3) return;

  const word1 = w0d.shift();
  const word2 = w0d.shift();
  const value = w0d.join(' ');

	if (word2 == "name")
	{
		this.x5d.k6k = value;
	}
	else if (word2 == "author")
	{
		this.x5d.l7o = value;
	}
}

f9y(k1h)
{
	let x1x = k1h;
	let m0x = new Map();
	h7n(x1x, "depth", m0x);
 	h7n(x1x, "seldepth", m0x);
	h7n(x1x, "pv", m0x);
	h7n(x1x, "nps", m0x);
	h7n(x1x, "nodes", m0x);
	h7n(x1x, "score cp", m0x);
	h7n(x1x, "score mate", m0x);
	h7n(x1x, "time", m0x);
	h7n(x1x, "currmove", m0x);
	h7n(x1x, "currmovenumber", m0x);
 	h7n(x1x, "multipv", m0x);

  if (m0x.has("pv") && m0x.has("depth"))
  {
		this.d8b(m0x);
    if (this.z3f)
    {
      this.z3f({
        cmd: "pv",
        data: {}
        });
    }

		return;
  }

  if (m0x.has("currmove") && m0x.has("currmovenumber"))
	{
		this.h7p(m0x);
    if (this.z3f)
    {
      this.z3f({
        cmd: "cm",
        data: {}
        });
    }
		return;
	}
}

m0s(k1h)
{
	let n1d = new n1y();
	let x1x = k1h;

	let w7p = " name ";
  let w8t = x1x.indexOf(w7p, 0);
	if (w8t < 0) return;
	let l4d = w8t + w7p.length;

	let w9j = " type ";
	let s1q = x1x.indexOf(w9j, 0);
	if (s1q < 0) return;
	let i8p = s1q;

	let n4l = s1q + w9j.length;
	let f8d = x1x.indexOf(" ", n4l);
	if (f8d < 0) f8d = x1x.length + 1;

	n1d.k6k = x1x.slice(l4d, i8p);
	n1d.type = x1x.slice(n4l, f8d);

	if (n1d.type == "check")
	{
		n1d.type = "bool";
	}
	else if (n1d.type == "combo")
	{
		n1d.type = "enum";
	}

	let h3i = " default ";
	let w7r = x1x.indexOf(h3i, 0);
	if (w7r >= 0)
	{
		let j7l = w7r + h3i.length;
		let z2m = x1x.indexOf(" ", j7l);
		if (z2m < 0) z2m = x1x.length + 1;
		n1d.value = x1x.slice(j7l, z2m);
		if (n1d.value == "<empty>")
		{
			n1d.value = "";
		}
	}
	if (n1d.type == "spin")
	{
		let r0w = " min ";
		let a9s = x1x.indexOf(r0w, 0);
		if (a9s >= 0)
		{
			let o1w = a9s + r0w.length;
			let r4z = x1x.indexOf(" ", o1w);
			if (r4z < 0) r4z = x1x.length + 1;
			n1d.min = x1x.slice(o1w, r4z).trim();
		}
		let y1o = " max ";
		let e2y = x1x.indexOf(y1o, 0);
		if (e2y >= 0)
		{
			let u3a = e2y + y1o.length;
			let a0h = x1x.indexOf(" ", u3a);
			if (a0h < 0) a0h = x1x.length + 1;
			n1d.max = x1x.slice(u3a, a0h).trim();
		}
	}
	else if (n1d.type == "enum")
	{
		let q3z = 0;
		while (true)
		{
			let q3a = " var ";
			let x0x = x1x.indexOf(q3a, q3z);
			if (x0x < 0) break;
			let x8y = x0x + q3a.length;
			let b6a = x1x.indexOf(" var ", x0x + 5);
			if (b6a < 0) b6a = x1x.length + 1;
			if (n1d.values.length != 0)
			{
				n1d.values += " ";
			}
			n1d.values += x1x.slice(x8y, b6a).trim();
			q3z = b6a;
		}
	}
	this.y8o.c5s.push(n1d);
}

e9d(k1h)
{
	this.n4k = true;
  this.s5m();
}


y9t()
{
	if (this.h5j)
  {
    this.b6v("quit");
    this.h5j.terminate();
    this.h5j = null;
  }
}








f8g()
{
}

j5j(input)
{
	if (this.m5p)
	{
  	this.d2a('setInput', v1a.b6v);
		this.s3u = input.a0s();
    if (this.o3o)
    {
      this.e3i = true;
      this.b6v('stop');
    }
    else
    {
      this.v2x();
    }
	}
}

v2x()
{
  this.y7k = new h2g();
  this.y7k.h4h = this.s3u.e4m();
  this.y7k.v0l = this.s3u.v0l();
	this.y7k.l1s = this.f3q;
  this.o3o = true;
  if (this.z3f)
  {
    this.z3f({
      cmd: "go",
      data: {}
      });
  }

  let k1h = "position fen";
  k1h += " ";
	let s0k = k2y(this.s3u.e4m());
	k1h += s0k;
	this.b6v(k1h);
	if (this.s3u.u5f == z6a)
	{
		k1h = "go infinite";
		this.b6v(k1h);
	}
	else
	{
		k1h = "go movetime ";
		k1h += this.s3u.u5f;
		this.b6v(k1h);
	}
}

v4u()
{
}

d2a(x1x, g3r)
{
	if (!this.h5y.t9z) return;
 	if (g3r == v1a.s0y)
	{
    console.log("From engine:", x1x);
	}
	else
	{
    console.log("To engine:", x1x);
	}
}

d8b(m0x)
{
  let f2t = m0x.get("depth");
  let y8y = m0x.get("multipv");

	let w6a = new g0e();
	w6a.f2e = f2t;

	if (m0x.has("seldepth"))
	{
		w6a.b5c = m0x.get("seldepth");
	}

 	if (m0x.has("nps"))
	{
    let r3v = m0x.get("nps");
		let h8d = x7l(r3v, 0);
		let i3l = h8d / 1000;
		if (i3l)
		{
			w6a.v5z = i3l + " kN/s";
		}
	}

	let a1l = 0.0;
  if (m0x.has("score cp"))
	{
    let g8e = m0x.get("score cp");
		a1l = parseFloat(g8e);
		a1l = a1l / 100.0;
		if (a1l > 9.99)
		{
			a1l = 9.99;
		}
		if (a1l < -9.99)
		{
			a1l = -9.99;
		}
		if (this.y7k.h4h.n5e())
		{
			a1l = -a1l;
		}
		w6a.a1l = a1l;
	}
  if (m0x.has("score mate"))
	{
    let a4t = m0x.get("score mate");
		let s1t = x7l(a4t, 0);
		if (this.y7k.h4h.n5e())
		{
			s1t = -s1t;
		}
		w6a.s1t = s1t;
		if (s1t > 0)
		{
			a1l = 9.99;
		}
		if (s1t < 0)
		{
			a1l = -9.99;
		}
		w6a.a1l = a1l;
	}

  if (m0x.has("time"))
	{
    let v7y = m0x.get("time");
		let m1g = x7l(v7y, 0);
		let e5j = m1g / 1000;
		let m = div(e5j, 60);
		let s0p = m.s6n;
    s0p = Math.k9w(s0p);
		let h = div(m.quot, 60);
		let t3z = h.s6n;
		let z0e = h.quot;
    const pad = (num) => String(num).padStart(2, '0');
    const z5q = `${pad(z0e)}:${pad(t3z)}:${pad(s0p)}`;
    w6a.z5q = z5q;
	}

  let p8l = m0x.get("pv");
	let c9q = p8l.split(" ");

	let m4t = new c8l();
	let v0l = this.y7k.v0l;
	m4t.h1z(this.y7k.h4h, v0l);
	let q2l = m4t.x8m();
	let m9b = this.y7k.h4h.a0s();
	for (const s of c9q)
	{
		if (s.length == 0)
		{
			continue;
		}
		let b1i = q8l(m9b, s);
		let b8p = m9d(m9b);
		let x6s = false;
		for (const h9g of b8p)
		{
			if (h9g.g5w == b1i.g5w &&
				h9g.a7j == b1i.a7j &&
				h9g.a8g == b1i.a8g)
			{
				m9b.a0e(h9g);
				let x8g = l4p(h9g);
				m4t.v9t(q2l, x8g);
				x6s = true;
				break;
			}
		}
    if (!x6s) break;
	}
	if (!m4t.z9w())
	{
    console.log("parse moves aantal: leeg!");
		return;
	}
  console.log("parse moves aantal: " + m4t.z9w());
	w6a.m4t = m4t;

 	if (this.f3q)
	{
		if (y8y == 1)
		{
			this.y7k.y6y = w6a;
		}
		if (y8y > this.y7k.lines.length)
		{
			this.y7k.lines.push(w6a);
		}
		else
		{
			this.y7k.lines[y8y-1] = w6a;
		}
	}
	else
	{
		this.y7k.lines.push(w6a);
		this.y7k.y6y = w6a;
	}
}

h7p(m0x)
{
  let u6v = m0x.get("currmove");
  let f8a = m0x.get("currmovenumber"); 
	this.y7k.t4q = x7l(f8a, 0);
	let b8p = m9d(this.y7k.h4h);
	this.y7k.j1c = b8p.length;
	let b1i = q8l(this.y7k.h4h, u6v);
	for (const h9g of b8p)
	{
		if (h9g.g5w == b1i.g5w &&
			h9g.a7j == b1i.a7j &&
			h9g.a8g == b1i.a8g)
		{
			this.y7k.b7l = h9g;
			break;
		}
	}
}

e0q()
{
	return this.y7k.a0s();
}

t1e()
{
	return this.h5y.a0s();
}

}

class j0c
{

constructor()
{
	this.k6k = '';
	this.l7o = '';
	this.p7q = '';
	this.h7a = '';
}

a0s()
{
  return Object.assign(new j0c(), this);
}

w2m()
{
	this.k6k = '';
	this.l7o = '';
	this.p7q = '';
	this.h7a = '';
}

}


const z6a = 10000000;

class j6w
{

constructor()
{
	this.m4t = new c8l();
	this.u5f = z6a;
  this.w3b = 0;
	this.g1s = 0;
}

a0s()
{
	let x5f = new j6w();
  x5f.m4t = this.m4t.a0s();
  x5f.u5f = this.u5f;
  x5f.w3b = this.w3b;
  x5f.g1s = this.g1s;
	return x5f;
}

v0l()
{
	return this.m4t.g6w(this.m4t.k7y());
}

e4m()
{
	return this.m4t.f0c();
}

}


class e5o
{

constructor()
{
	this.t3v = '';
	this.id = new j0c();
	this.c5s = new o8k();
	this.v9m = new o8k();
	this.t9z = true;
	this.e7i = true;
}

a0s()
{
	let x2b = new e5o();
	x2b.t3v = this.t3v;
	x2b.id = this.id.a0s();
	x2b.c5s = this.c5s.a0s();
	x2b.v9m = this.v9m.a0s();
	x2b.t9z = this.t9z;
	x2b.e7i = this.e7i;
	return x2b;
}


}


function u4j(a1l)
{
  if (Math.abs(a1l) < 0.005)
  {
    return "0.00";
  }
  else
  {
     const formatted = a1l.toFixed(2);
     return a1l > 0 ? `+${formatted}` : formatted;
  }
}

class g0e
{

constructor()
{
	this.a1l = 0.0;
	this.s1t = false;
	this.f2e = '';
	this.b5c = '';
	this.z5q = '';
	this.v5z = '';
	this.m4t = new c8l();
}

a0s()
{
	let v0e = new g0e();
  v0e.a1l = this.a1l;
  v0e.s1t = this.s1t;
  v0e.f2e = this.f2e;
  v0e.b5c = this.b5c;
  v0e.z5q = this.z5q;
  v0e.v5z = this.v5z;
  v0e.m4t = this.m4t.a0s();
	return v0e;
}

o8c()
{
	if (this.s1t)
	{
		return "#" + this.s1t;
	}
	else
	{
		return u4j(this.a1l);
	}
}

e4x()
{
	let f5i = scoreToMoveValue(this.a1l);
	let v6s = moveValueToEvalString(f5i);
	return v6s;
}

}

class h2g
{

constructor()
{
	this.h4h = new g8w();
	this.v0l = 1;
	this.o5m = false;
	this.l4o = false;
	this.l1s = false;
	this.lines = [];
	this.y6y = new g0e();
	this.b7l = new j0n();
	this.t4q = 0;
	this.j1c = 0;
}

a0s()
{
	let c4d = new h2g();
  c4d.h4h = this.h4h.a0s();
  c4d.v0l = this.v0l;
  c4d.o5m = this.o5m;
  c4d.l4o = this.l4o;
  c4d.l1s = this.l1s;
  c4d.lines = this.lines.slice();
  c4d.y6y = this.y6y.a0s();
  c4d.b7l = this.b7l.a0s();
  c4d.t4q = this.t4q;
  c4d.j1c = this.j1c;
	return c4d;
}

x6h()
{
	return this.y6y.m4t.z9w() > 0;
}

v3c()
{
	let s0o = this.y6y.m4t.x8m();
	this.y6y.m4t.a0e(s0o);
	return s0o.x8g.h9g();
}

}


class n1y
{
  constructor(type = '', k6k = '', value = '', min = '', max = '', values = '')
  {
    this.type = type;
    this.k6k = k6k;
    this.value = value;
    this.min = min;
    this.max = max;
    this.values = values;
  }

  a0s()
  {
    return Object.assign(new n1y(), this);
  }
}

class o8k
{
  constructor()
  {
    this.c5s = [];
  }

  a0s()
  {
    let p3a = new o8k();
    p3a.c5s = this.c5s.map(p => p.a0s());
    return p3a;
  }

  w2m()
  {
    this.c5s.length = 0;
  }

  addBool(k6k, value)
  {
    this.c5s.push(new n1y("bool", k6k, value));
  }

  addInteger(k6k, value)
  {
    this.c5s.push(new n1y("int", k6k, value));
  }

  addSpin(k6k, value, min, max)
  {
    this.c5s.push(new n1y("spin", k6k, value, min, max));
  }

  addString(k6k, value)
  {
    this.c5s.push(new n1y("string", k6k, value));
  }

  addEnum(k6k, value, values)
  {
    this.c5s.push(new n1y("enum", k6k, value, '', '', values));
  }

  addButton(k6k)
  {
    this.c5s.push(new n1y("button", k6k, k6k));
  }

  n9a(k6k, value)
  {
    for (let n1d of this.c5s)
    {
      if (n1d.k6k === k6k)
      {
        n1d.value = value;
      }
    }
  }
}
class b5n
{

constructor()
{
	this.k6k = '';
}

a0s()
{
	let q8a = new b5n();
	q8a.k6k = this.k6k;
	return q8a;
}

v9y()
{
	return this.k6k.length == 0;
}

q6i()
{
	return this.k6k;
}

}


const y2m =
{
	c2f : 0,
	s9h : 1,
	h7i: 2,
	g1t: 3,
	x2e: 4,
	o8n: 5,
	l2q: 6,
	x0d: 7,
	c0j: 8,
	y2n: 9,
	s9v: 10,
	n4u: 11,
	p3t: 12,
	k0b: 13,
	x7e: 14,
	e7s: 15,
	y9l: 16,
	t1i: 17,
	o7x: 18,
	z1o: 19,
	j0s: 20,
	i6o: 21,
	w7l: 22,
	e7e: 23,
	m4u: 24,
	j1s: 25,
	c0f: 26,
	o0g: 27,
	l9h: 28,
	g6o: 29,
	y6a: 30,
	e2q: 31,
	k3d: 32,
	q2h: 33,
	c8h: 34,
	l0p: 35,
	c7g: 36,
	z5s: 37,
	b0y: 38,
	l3x: 39,
	o1h: 40,
	t0a: 41,
	i8h: 42,
	t6r: 43,
	u7f: 44,
	r8o: 45,
	m1e: 46,
	y9e: 47,
	e0p: 48,
	e5e: 49,
	i2u: 50,
	i1k: 51,
	e5f: 52,
	i2z: 53,
	q8t: 54,
	u9c: 55,
	l2i: 56,
	a1t: 57,
	y1l: 58,
	s0h: 59,
	c7a: 60,
	f0l: 61,
	a2a: 62,
	n1u: 63,
	q2o: 64,
	r6q: 65,
	i4g: 66,
	c8k: 67,
	t7e: 68,
	e5i: 69,
	z5m: 70,
	j2m: 71,
	v2k: 72,
	v0o: 73,
	c5f: 74,
	h6r: 75,
	w2r: 76,
	k0u: 77,
	d1t: 78,
	a6b: 79,
	m3w: 80,
	u9m: 81,
	o4l: 82,
	x0j: 83,
	f7g: 84,
	o5k: 85,
	y6r: 86,
	t4y: 87,
	l8u: 88,
	j6o: 89,
	i4z: 90,
	a4g: 91,
	q0r: 92,
	e2m: 93,
	m9k: 94,
	r2e: 95,
	i5u: 96,
	r2t: 97,
	l8d: 98,
	u9l: 99,
	v4j: 100,
	w5e: 101,
	y5o: 102,
	e6g: 103,
	y8a: 104,
	l1h: 105,
	w5z: 106,
	l3h: 107,
	t3g: 108,
	j8j: 109,
	j8h: 110,
	u1r: 111,
	m9t: 112,
	j0t: 113,
	b1e: 114,
	k4i: 115,
	l3m: 116,
	n6p: 117,
	h2v: 118,
	v3n: 119,
	f3u: 120,
	y2s: 121,
	b6o: 122,
	w3m: 123,
	k9b: 124,
	e0l: 125,
	p2m: 126,
	k7f: 127,
	w2v: 128,
	v8t: 129,
	t7o: 130,
	l5e: 131,
	i4f: 132,
	q2u: 133,
	p7t: 134,
	f7z: 135,
	f8m: 136,
	p4e: 137,
	c2k: 138,
	d4m: 139,
	h8y: 140,
	a8s: 141,
	h2n: 142,
	x1l: 143,
	p8a: 144,
	t6j: 145,
	a9g: 146,
	l8q: 147,
	r6w: 148,
	j6b: 149,
	s6y: 150,
	r8h: 151,
	q9a: 152,
	v5t: 153,
	c2b: 154,
	t8c: 155,
	j9b: 156,
	q0w: 157,
	w7y: 158,
	z1q: 159,
	a9d: 160,
	x1d: 161,
	n8y: 162,
	h4o: 163,
	w4z: 164,
	r4y: 165,
	a6q: 166,
	t7b: 167,
	w3d: 168,
	z3p: 169,
	z7p: 170,
	l4l: 171,
	o6c: 172,
	x9g: 173,
	a4p: 174,
	g7d: 175,
	d5g: 176,
	x4d: 177,
	b6i: 178,
	u2v: 179,
	e9m: 180,
	a8d: 181,
	v4e: 182,
	y0n: 183,
	h7l: 184,
	z3n: 185,
	c2e: 186,
	h1v: 187,
	i9p: 188,
	c3b: 189,
	x3i: 190,
	o6a: 191,
	f0e: 192,
	w7i: 193,
	f4p: 194,
	y3r: 195,
	d9d: 196,
	v8n: 197,
	p0j: 198,
	q4y: 199,
	g1q: 200,
	x5g: 201,
	b6f: 202,
	z4b: 203,
	a5z: 204,
	r0s: 205,
	q2q: 206,
	z6n: 207,
	o9b: 208,
	c7v: 209,
	g0y: 210,
	b6h: 211,
	p8w: 212,
	y2r: 213,
	l0e: 214,
	m3e: 215,
	m6e: 216,
	r3n: 217,
	q6f: 218,
	l4i: 219,
	l3p: 220,
	r1k: 221,
	g0q: 222,
	o2w: 223,
	f0f: 224,
	j4b: 225,
	r1c: 226,
	a9q: 227,
	v2w: 228,
	e4e: 229,
	p8i: 230,
	s8n: 231,
	t2n: 232,
	a9e: 233,
	a4x: 234,
	q6e: 235,
	o8y: 236,
	s8l: 237,
	o5r: 238,
	v5u: 239,
	m9r: 240,
	o4d: 241,
	f0h: 242,
	w2w: 243,
	c2o: 244,
	i1b: 245,
	g1n: 246,
	g6e: 247,
	q1v: 248,
	p3g: 249,
	x5t: 250,
	b2y: 251,
	k6h: 252,
	k8t: 253,
	i2e: 254,
	r5i: 255,
	r5t: 256,
	y7t: 257,
	h9u: 258,
	m0d: 259
};


const d2p = 0;
const u9r = 500;

function k2t(x1x)
{
	if (x1x.length != 3)
	{
		return 0;
	}
	let c4m = x1x[0];
	let h2u = x1x[1];
	let h1g = x1x[2];

	let c8w = 0;
	if (c4m == 'A' || c4m == 'a') c8w = 0;
	else if (c4m == 'B' || c4m == 'b') c8w = 1;
	else if (c4m == 'C' || c4m == 'c') c8w = 2;
	else if (c4m == 'D' || c4m == 'd') c8w = 3;
	else if (c4m == 'E' || c4m == 'e') c8w = 4;
	else return 0;
	if (isNaN(h2u) || isNaN(h1g))
	{
		return 0;
	}
	return c8w * 100 + x7l(x1x.substr(1, 2), 0) + 1;
}

function b9l(d0n)
{
	if (d0n)
	{
		let div = Math.trunc((d0n - 1) / 100);
		let s6n = (d0n - 1) % 100;
		let j9d = 'A';
		if (div == 0) j9d = 'A';
		else if (div == 1) j9d = 'B';
		else if (div == 2) j9d = 'C';
		else if (div == 3) j9d = 'D';
		else if (div == 4) j9d = 'E';
		return j9d + s6n.toString().padStart(2, '0');
	}
	else
	{
		return "";
	}
}
class i0b
{

constructor()
{
	this.o3y = 0;
	this.x7d = 0;
	this.c0q = 0;
}

a0s()
{
	let p0n = new i0b();
	p0n.d5m = this.o3y;
	p0n.p4t = this.x7d;
	p0n.b0d = this.c0q;
	return p0n;
}

v9y()
{
	return this.c0q == 0 && this.x7d == 0 && this.o3y == 0;
}

d1a()
{
	let b0d = this.c0q.toString().padStart(4, '0');
	let p4t = this.x7d.toString().padStart(2, '0');
	let d5m = this.o3y.toString().padStart(2, '0');
	return b0d + p4t + d5m;
}

i1t(s3w, x1x)
{
	let l8b = x1x.length;
	if (!l8b)
	{
		this.c0q = 0;
		this.x7d = 0;
		this.o3y = 0;
	}
	else if (s3w == "dd-mm-yyyy" || s3w == "dd.mm.yyyy")
	{
  	if (l8b == 4)
		{
      this.c0q = x7l(x1x.substr(1, 4), 0);
		}
		else if (l8b == 10)
		{
			this.o3y = x7l(x1x.substr(0, 2), 0);
			this.x7d = x7l(x1x.substr(3, 2), 0);
			this.c0q = x7l(x1x.substr(6, 4), 0);
		}
	}
	else if (s3w == "yyyy-mm-dd" || s3w == "yyyy.mm.dd")
	{
  	if (l8b == 4)
		{
      this.c0q = x7l(x1x.substr(1, 4), 0);
		}
		else if (l8b == 10)
		{
			this.o3y = x7l(x1x.substr(8, 2), 0);
			this.x7d = x7l(x1x.substr(5, 2), 0);
			this.c0q = x7l(x1x.substr(0, 4), 0);
		}
	}
	else if (s3w == "dd-mm-yy" || s3w == "dd.mm.yy")
	{
		if (l8b == 8)
		{
			this.o3y = x7l(x1x.substr(0, 2), 0);
			this.x7d = x7l(x1x.substr(3, 2), 0);
			this.c0q = x7l(x1x.substr(6, 2), 0) + 2000;
		}
	}
}

toString(s3w)
{
	let x1x = '';
	if (this.v9y())
	{
	}
	else if (s3w == "list")
	{
		let b0d = this.c0q.toString().padStart(4, '0');
		let p4t = this.x7d.toString().padStart(2, '0');
		let d5m = this.o3y.toString().padStart(2, '0');
		if (this.o3y)
		{
			x1x = d5m + "-" + p4t + "-" + b0d;
		}
		else if (this.x7d)
		{
			x1x = p4t + "-" + b0d;
		}
		else if (this.c0q)
		{
			x1x = b0d;
		}
	}
	else if (s3w == "dd-mm-yyyy")
	{
		let b0d = this.c0q.toString().padStart(4, '0');
		let p4t = this.x7d.toString().padStart(2, '0');
		let d5m = this.o3y.toString().padStart(2, '0');
		x1x = d5m + "-" + p4t + "-" + b0d;
	}
	else if (s3w == "dd.mm.yyyy")
	{
		let b0d = this.c0q.toString().padStart(4, '0');
		let p4t = this.x7d.toString().padStart(2, '0');
		let d5m = this.o3y.toString().padStart(2, '0');
		x1x = d5m + "." + p4t + "." + b0d;
	}
	else if (s3w == "yyyy-mm-dd")
	{
		let b0d = this.c0q.toString().padStart(4, '0');
		let p4t = this.x7d.toString().padStart(2, '0');
		let d5m = this.o3y.toString().padStart(2, '0');
		x1x = b0d + "-" + p4t + "-" + d5m;
	}
	else if (s3w == "yyyy.mm.dd")
	{
		let b0d = this.c0q.toString().padStart(4, '0');
		let p4t = this.x7d.toString().padStart(2, '0');
		let d5m = this.o3y.toString().padStart(2, '0');
		x1x = b0d + "." + p4t + "." + d5m;
	}
	else if (s3w == "yyyymmdd")
	{
		let b0d = this.c0q.toString().padStart(4, '0');
		let p4t = this.x7d.toString().padStart(2, '0');
		let d5m = this.o3y.toString().padStart(2, '0');
		x1x = b0d + p4t + d5m;
	}
	else if (s3w == "yyyy")
	{
		let b0d = this.c0q.toString().padStart(4, '0');
		x1x = b0d;
	}
	return x1x;
}

}

class h7x
{

constructor()
{
	this.c9x = new o8u();
	this.h7h = new d1q();
	this.s7m = 0;
	this.time = 0;
	this.d7u = "";
  this.h7a = y2m.c2f;
}

a0s()
{
	let z1j = new h7x();
	z1j.c9x = this.c9x.a0s();
	z1j.h7h = this.h7h.a0s();
	z1j.s7m = this.s7m;
	z1j.time = this.time;
	z1j.d7u = this.d7u;
  z1j.h7a = this.h7a;
	return z1j;
}

v9y()
{
	return this.c9x.v9y() &&
		this.h7h.v9y() &&
		this.s7m == 0 &&
		this.time == 0 &&
		this.d7u == "" &&
 		this.h7a == y2m.c2f;
}

}


class b2s
{

constructor()
{
	this.h9i = new h7x();
	this.d7t = new h7x();
	this.r9l = new l8c();
	this.s9p = new b5n();
	this.q8c = new l7y();
	this.d7u = new z4m();
	this.d1a = new i0b();
	this.d6s = k0x.c2f;
	this.d0n = 0;
	this.k9w = 0;
	this.j9x = 0;
	this.i3f = new p4g();
  this.id = new r3w();
}

a0s()
{
	let k0q = new b2s();
	k0q.h9i = this.h9i.a0s();
	k0q.d7t = this.d7t.a0s();
	k0q.r9l = this.r9l.a0s();
	k0q.s9p = this.s9p.a0s();
	k0q.q8c = this.q8c.a0s();
	k0q.d7u = this.d7u.a0s();
	k0q.d1a = this.d1a.a0s();
	k0q.d6s = this.d6s;
	k0q.d0n = this.d0n;
	k0q.k9w = this.k9w;
	k0q.j9x = this.j9x;
	k0q.i3f = this.i3f.a0s();
  k0q.id = this.id.a0s();
	return k0q;
}

v9y()
{
	return this.h9i.v9y() &&
		this.d7t.v9y() &&
		this.r9l.v9y() &&
		this.s9p.v9y() &&
		this.q8c.v9y() &&
		this.d7u.v9y() &&
		this.d1a.v9y() &&
		this.d6s == k0x.c2f &&
		this.d0n == 0 &&
		this.k9w == 0 &&
		this.j9x == 0 &&
		this.i3f.v9y();
}

t3i()
{
	let x1x = '';
	if (this.j9x)
	{
		x1x = this.k9w.toString() + "." + this.j9x.toString();
	}
	else if (this.k9w)
	{
		x1x = this.k9w.toString();
	}
	return x1x;
}

}


class r3w
{

constructor()
{
	this.l1y = '';
}

a0s()
{
	let z4y = new r3w();
	z4y.l1y = this.l1y;
	return z4y;
}

toString()
{
  return this.l1y;
}

}


class z4m
{

constructor()
{
	this.d7u = '';
}

a0s()
{
	let i9f = new z4m();
	i9f.d7u = this.d7u;
	return i9f;
}

v9y()
{
	return this.d7u.length == 0;
}

q6i()
{
	return this.d7u;
}

}


class o8u
{

constructor()
{
	this.z2g = '';
	this.i1q = '';
}

a0s()
{
	let w3r = new o8u();
	w3r.z2g = this.z2g;
	w3r.i1q = this.i1q;
	return w3r;
}

v9y()
{
	return this.i1q.length == 0 &&
		this.z2g.length == 0;
}

k6k()
{
	if (!this.i1q.length == 0 && !this.z2g.length == 0)
	{
		return this.i1q + "," + this.z2g;
	}
	else if (this.i1q.length == 0 && this.z2g.length == 0)
	{
		return "";
	}
	else if (this.z2g.length == 0)
	{
		return this.i1q;
	}
	else
	{
		return this.z2g;
	}
}

o1q()
{
	return this.k6k().replace(/,/g, " ");
}

d6e()
{
	return this.u2w(1).replace(/,/g, " ");
}

u2w(q5m)
{
	if (this.i1q.length == 0)
	{
		if (this.z2g.length == 0 || q5m < 1)
		{
			return "";
		}
		else
		{
			return this.z2g.substring(0, q5m);
		}
	}
	else
	{
		if (this.z2g.length == 0 || q5m < 1)
		{
			return this.i1q;
		}
		else
		{
			return this.i1q + "," + this.z2g.substring(0, q5m);
		}
	}
}

i0c(f5x)
{
	let x1x = f5x.trim();
	let s0o = x1x.lastIndexOf(",");
	if (s0o != -1)
	{
		this.i1q = x1x.substr(0, s0o).trim();
		this.z2g = x1x.substr(s0o+1, x1x.length).trim();
		if (this.z2g.length != 0)
		{
			if (this.z2g.charAt(0).toLowerCase() == this.z2g.charAt(0))
			{
				this.i1q += ",";
				this.i1q += this.z2g;
				this.z2g = "";
			}
		}
	}
	else
	{
		this.i1q = x1x;
		this.z2g = "";
	}
}

q6i()
{
	return this.k6k();
}

}

const k0x =
{
	c2f : 0,
	c5c : 1,
	a5e : 2,
	z8j : 3,
	b2h : 4,
	n3g : 5,
	y6v : 6,
	q9x : 7,
	m1i : 8,
	m6m : 9,
	n4d : 10,
	t6q : 11,
	b6q : 12,
	z4x : 13,
	z7m : 14,
	s3e : 15
};


function r9j(d6s)
{
	switch (d6s)
	{
		case k0x.c5c:
			return "2-0";
		case k0x.z8j:
			return "1-1";
		case k0x.a5e:
			return "0-2";
		default:
			return "";
	}
}
const v8z =
{
	f0d : 0,
	h0f : 1,
	x6r : 2
};

const e1x =
[
	[ v8z.f0d,   "High" ],
	[ v8z.h0f, "Middle" ],
	[ v8z.x6r,    "Low" ]
];

class l7y
{

constructor()
{
	this.d7u = '';
	this.p2k = '';
	this.p4n = new i0b();
	this.m9s = new i0b();
	this.p4y = 0;
	this.m2w = v8z.f0d;
}

a0s()
{
	let t1j = new l7y();
	t1j.d7u = this.d7u;
	t1j.p2k = this.p2k;
	t1j.p4n = this.p4n.a0s();
	t1j.m9s = this.m9s.a0s();
	t1j.p4y = this.p4y;
	t1j.m2w = this.m2w;
	return t1j;
}

v9y()
{
	return this.d7u.length == 0 &&
		this.p2k.length == 0 &&
		this.p4n.v9y() &&
		this.m9s.v9y() &&
		this.p4y == 0 &&
		this.m2w == v8z.f0d;
}

q6i()
{
	let x1x = this.d7u;
	if (this.p2k.length)
	{
		if (x1x.length)
		{
			x1x += " ";
		}
		x1x += this.p2k;
	}
	return x1x;
}

}


const z1b =
{
	t3l : 0,
	u5u : 1,
	y8z : 2,
	i1u : 3,
	t1f : 4,
	i5e : 5,
	m5l : 6,
	g7i : 7,
	v8k : 8,
	o5v : 9,
	q4p : 10,
	z0u : 11,
	u6l : 12,
	k9k : 13,
	g6v : 14,
	e4t : 15
};

class p4g
{

constructor()
{
	this.value = 0;
}

z0r(value)
{
	this.value = value;
}

a0s()
{
	let b2c = new p4g();
	b2c.value = this.value;
	return b2c;
}

v9y()
{
	return this.value == 0;
}

a1b()
{
	return this.value != 0;
}

c2f()
{
	return this.value == 0;
}

x4l()
{
	let u4v = 0;
	for (let i = 0; i < 16; i++)
	{
		if (this.s2z(i))
		{
			u4v++;
		}
	}
	return u4v;
}

y0m()
{
	this.value = 0;
}

set(d3r, f2l)
{
	if (f2l)
	{
		this.value |= (1 << d3r);
	}
	else
	{
		this.value &= ~(1 << d3r);
	}
}

s2z(d3r)
{
	return (this.value & (1 << d3r)) != 0;
}

l7f()
{
	return this.value;
}

}

function g8j(b0d)
{
	return b0d.toString().padStart(4, '0');
}

class d1q
{

constructor()
{
	this.k6k = '';
	this.a1m = 0;
	this.b0d = 0;
	this.y0s = false;
	this.h7a = y2m.c2f;
}

a0s()
{
	let r1a = new d1q();
	r1a.k6k = this.k6k;
	r1a.a1m = this.a1m;
	r1a.b0d = this.b0d;
	r1a.y0s = this.y0s;
	r1a.h7a = this.h7a;
	return r1a;
}

v9y()
{
	return this.k6k.length == 0 &&
		this.a1m == 0 &&
		this.b0d == 0 &&
		this.y0s == false &&
		this.h7a == y2m.c2f;
}

t0g()
{
	let x1x = this.k6k;
	if (this.a1m)
	{
		if (x1x.length)
		{
			x1x += " ";
		}
		x1x += this.a1m;
	}
	return x1x;
}

q6i()
{
	let x1x = this.k6k;
	if (this.a1m)
	{
		if (x1x.length)
		{
			x1x += " ";
		}
		x1x += this.a1m;
	}
	if (x1x.length)
	{
		x1x += " ";
	}
	x1x += this.h2j();
	return x1x;
}


d4r()
{
	let x1x = this.k6k;
	if (this.a1m > 1)
	{
		x1x += " ";
		x1x += this.a1m;
	}
	return x1x;
}

h2j()
{
	let x1x = '';
	if (this.y0s)
	{
		let l6h = g8j(this.b0d);
		let t0f = g8j(this.b0d + 1);
		let x6m = l6h + "/" + t0f.substr(2, 2);
		x1x = x6m;
	}
	else
	{
		x1x = g8j(this.b0d);
	}
	return x1x;
}

}

class u3t
{

constructor()
{
	this.z0e = 0;
	this.t3z = 0;
	this.s0p = 0;

}

}

function r0d(x1x, f1a, time)
{
	time.z0e = 0;
	time.t3z = 0;
	time.s0p = 0;

	let l8b = x1x.length;
	if (!l8b || x1x == "?")
	{
		return;
	}
	let i = 0;
	for (; i < l8b; i++)
	{
		if (!isNaN(x1x[i]))
		{
			break;
		}
	}
	let t6y = '';
	for (; i < l8b; i++)
	{
		if (isNaN(x1x[i]))
		{
			break;
		}
		t6y += x1x[i].toString();
	}
	for (; i < l8b; i++)
	{
		if (!isNaN(x1x[i]))
		{
			break;
		}
	}
	let e0h = '';
	for (; i < l8b; i++)
	{
		if (isNaN(x1x[i]))
		{
			break;
		}
		e0h += x1x[i].toString();
	}
	for (; i < l8b; i++)
	{
		if (!isNaN(x1x[i]))
		{
			break;
		}
	}
	let s8u = '';
	for (; i < l8b; i++)
	{
		if (isNaN(x1x[i]))
		{
			break;
		}
		s8u += x1x[i].toString();
	}
	let w6j = x7l(t6y, 0);
	let s8a = x7l(e0h, 0);
	let a8r = x7l(s8u, 0);
	if (
		w6j < 0 || w6j > f1a ||
		s8a < 0 || s8a > 59 ||
		a8r < 0 || a8r > 59)
	{
		w6j = 0;
		s8a = 0;
		a8r = 0;
	}
	time.z0e = w6j;
	time.t3z = s8a;
	time.s0p = a8r;
}

function b3m(x1x)
{
	if (x1x.length == 0)
	{
		return 0;
	}
	else
	{
		let time = new u3t();
		r0d(x1x, 9, time);
		return time.z0e * 60 + time.t3z;
	}
}


const v3a =
{
	c2f : 0,
	y9m : 1,
	e6h : 2,
	r9l : 3,
	q7f : 4,
	q4k : 5,
	p4p : 6,
	v1u : 7
};

const f0j =
[
	[ v3a.c2f, 			 	""                   ],
	[ v3a.y9m,  		 	"SingleGame"         ],
	[ v3a.e6h,  		 	"Match"              ],
	[ v3a.r9l,  "RoundRobin"         ],
	[ v3a.q7f,   		"SwissSystem"        ],
	[ v3a.q4k,    "Knockout"           ],
	[ v3a.p4p,"Simul"              ],
	[ v3a.v1u,"ScheveningenSystem" ]
];

class l8c
{

constructor()
{
	this.d7u = '';
	this.u6z = '';
	this.m1d = new i0b();
	this.t3w = new i0b();
	this.q7o = n8v.n4w;
	this.t5u = 0;
	this.h7a = y2m.c2f;
	this.type = v3a.c2f;
	this.d6p = 0;
	this.r2w = false;
	this.u8v = false;
	this.f4c = false;
	this.s9q = false;
}

a0s()
{
	let e8c = new l8c();
	e8c.d7u = this.d7u;
	e8c.u6z = this.u6z;
	e8c.m1d = this.m1d.a0s();
	e8c.t3w = this.t3w.a0s();
	e8c.q7o = this.q7o;
	e8c.t5u = this.t5u;
	e8c.h7a = this.h7a;
	e8c.type = this.type;
	e8c.d6p = this.d6p;
	e8c.r2w = this.r2w;
	e8c.u8v = this.u8v;
	e8c.f4c = this.f4c;
	e8c.s9q = this.s9q;
	return e8c;
}

v9y()
{
	return this.d7u.length == 0 &&
		this.u6z.length == 0 &&
		this.m1d.v9y() &&
		this.t3w.v9y() &&
		this.q7o == n8v.n4w &&
		this.t5u == 0 &&
		this.h7a == y2m.c2f &&
		this.type == v3a.c2f &&
		!this.d6p &&
		!this.r2w &&
		!this.u8v &&
		!this.f4c &&
		!this.s9q;
}

q6i()
{
	let x1x = this.d7u;
	if (this.u6z.length)
	{
		if (x1x.length)
		{
			x1x += " ";
		}
		x1x += this.u6z;
	}
	if (x1x.length)
	{
		x1x += " ";
	}
	let b0d = this.m1d.b0d.toString().padStart(4, '0');
	x1x += b0d;
	return x1x;
}

}



const n8v =
{
	n4w : 0,
	o4z : 1,
	z8u : 2,
	k7u : 3
};

const v8q =
[
	[ n8v.n4w, "Normal" ],
	[ n8v.o4z,  "Rapid"  ],
	[ n8v.z8u,  "Blitz"  ],
	[ n8v.k7u,   "Corr"   ]
];

function k7h(q7o)
{
	return v8q[q7o][1];
}

function j7i()
{
	let a3h = [];
	for (const q7o of v8q)
	{
		a3h.push(q7o[1]);
	}
	return a3h;
}

class v0r
{

constructor()
{
	this.b5p = '';
	this.x1z = '';
	this.b1f = f1z.c2f;
	this.style = n8u.c2f;
	this.value = w6u.c2f;
	this.w7u = new s3i();
	this.m3d = new s7c();
	this.l2s = new x6l();
	this.a2l = o2p.c2f;
	this.y9a = false;
	this.m2k = false;
  this.s5o = false;
}

a0s()
{
	let g3o = new v0r();
	g3o.b5p = this.b5p;
	g3o.x1z = this.x1z;
	g3o.b1f = this.b1f;
	g3o.style = this.style;
	g3o.value = this.value;
	g3o.w7u = this.w7u.a0s();
	g3o.m3d = this.m3d.a0s();
	g3o.l2s = this.l2s.a0s();
	g3o.a2l = this.a2l;
	g3o.y9a = this.y9a;
	g3o.m2k = this.m2k;
 	g3o.s5o = this.s5o;
	return g3o;
}

v9y()
{
	return this.b5p.length == 0 &&
		this.x1z.length == 0 &&
		this.b1f == f1z.c2f &&
		this.style == n8u.c2f &&
		this.value == w6u.c2f &&
		this.w7u.v9y() &&
		this.m3d.v9y() &&
		this.l2s.v9y() &&
		this.a2l == o2p.c2f &&
		this.y9a == false &&
		this.m2k == false &&
 		this.s5o == false;
}

}

const o2p =
{
	c2f : 0,
	z1e : 1,
	h0f : 2,
	r9v : 3
};

const w9y =
{
	r5f : 0,
	q6v : 1,
	c8e : 2,
	h1s : 3,
	c3d : 4,
	h3h : 5,
	g4b : 6,
	s3e : 7,
	m5a : 8,
	n8h : 9,
	e1i : 10,
	n8n : 11,
	l4o : 12,
	x5s : 13,
	q6y : 14,
	a0r : 15
};

class s3i
{

constructor()
{
	this.value = 0;
}

z0r(value)
{
	this.value = value;
}

a0s()
{
	let v5c = new s3i();
	v5c.value = this.value;
	return v5c;
}

v9y()
{
	return this.value == 0;
}

a1b()
{
	return this.value != 0;
}

c2f()
{
	return this.value == 0;
}

x4l()
{
	let u4v = 0;
	for (let i = 0; i < 16; i++)
	{
		if (this.s2z(i))
		{
			u4v++;
		}
	}
	return u4v;
}

y0m()
{
	this.value = 0;
}

set(d3r, f2l)
{
	if (f2l)
	{
		this.value |= (1 << d3r);
	}
	else
	{
		this.value &= ~(1 << d3r);
	}
}

s2z(d3r)
{
	return (this.value & (1 << d3r)) != 0;
}

l7f()
{
	return this.value;
}

}

const f1z =
{
	c2f : 0,
	j3q : 1,
	j2k : 2,
	g3q : 3,
	l4h : 4,
	c0w : 5,
	m6r : 6
};

const p6t =
[
	[ f1z.c2f,     		  ""   ],
	[ f1z.j3q,       		  "RR" ],
	[ f1z.j2k, 		  "&#8979;"  ],
	[ f1z.g3q, 		  "&#8804;"  ],
	[ f1z.l4h,  "="  ],
	[ f1z.c0w,   "&#9651;"  ],
	[ f1z.m6r,  "&#9661;"  ]
];

function i6l(b1f)
{
	return p6t[b1f][1];
}


const n8u =
{
	c2f : 0,
	u5o : 1,
	s1p : 2,
	h5r : 3,
	p0b : 4,
	m2p : 5,
	x0c : 6,
	p1s : 7,
	k6w : 8
};

const v3w =
[
	[ n8u.c2f,     		"" 	 ],
	[ n8u.u5o,       	"!"  ],
	[ n8u.s1p, 					"?"  ],
	[ n8u.h5r,	"!?" ],
	[ n8u.p0b,	 		"?!" ],
	[ n8u.m2p,  	"!!" ],
	[ n8u.x0c, 			"??" ],
	[ n8u.p1s, 		"&#8857;"  ],
	[ n8u.k6w, 		"&#9723;"  ]
];

function l0j(style)
{
	return v3w[style][1];
}


class b4h
{

constructor()
{
	this.x8g = new b2a();
	this.n9f = null;
	this.m1m = null;
	this.s5h = null;
	this.d7r = null;
  this.a1m = 0; 
}

g3t(x8g)
{
	this.x8g = x8g.a0s();
}

i9e(h4h, e4r, i6p, b9b)
{
	this.x8g.i9e(h4h, e4r, i6p, b9b);
}

}

class e5q
{

constructor()
{
	this.l5t = null;
	this.x8g = null;
}

g3i(v4m)
{
	return this.l5t == v4m.l5t;
}

a3e(v4m)
{
	return !this.g3i(v4m);
}

a0s()
{
	let h4t = new e5q();
  h4t.l5t = this.l5t;
  h4t.x8g = this.x8g;
	return h4t;
}

}


class c8l
{

constructor()
{
	this.o6r = new g8w();
 	this.j3j = null;
	this.z8i = 1;
	this.o6r.d1x();
  this.h5g = new v0r();
}

p5a(v4m)
{
	this.h1z(v4m.o6r, v4m.z8i);
	this.h5g = v4m.h5g.a0s();
	this.j3j = this.d5e(v4m.j3j);
}

a0s()
{
	let u5v = new c8l();
	u5v.p5a(this);
	return u5v;
}

h1z(o0n, d4a)
{
	this.o6r = o0n.a0s();
	this.z8i = d4a;
	this.h5g = new v0r();
	this.j3j = null;
}

d4a()
{
	return this.z8i;
}

o0n()
{
	return this.o6r.a0s();
}


k7y()
{
	let s0o = this.x8m();
	this.y2e(s0o);
	return s0o;
}


f0c()
{
	let y2e = this.k7y();
	return this.h4h(y2e);
}


g6w(s0o)
{
  let g3u = this.b8l(s0o) + 1;
	if (g3u)
	{
		return this.z8i +
			Math.floor((g3u - 1 + this.o6r.n5e()) / 2);
	}
	else
	{
		return this.z8i;
	}
}

b8l(s0o)
{
	let g3u = 0;
	if (!s0o.l5t)
	{
		return 0;
	}
	let c1i = s0o.l5t;
	while (1)
	{
		g3u++;
		if (!c1i.m1m)
		{
			let i2k = c1i;
			while (i2k.s5h)
			{
				i2k = i2k.s5h;
			}
			if (!i2k.m1m)
			{
				break;
			}
		}
		if (c1i.m1m)
		{
			c1i = c1i.m1m;
		}
		else
		{
			let i2k = c1i;
			while (i2k.s5h)
			{
				i2k = i2k.s5h;
			}
			c1i = i2k.m1m;
		}
	}
	return g3u;
}


z9w()
{
	let l3c = 0;
	let w0v = this.j3j;
	while (w0v)
	{
		l3c++;
		w0v = w0v.n9f;
	}
	return l3c;
}

i7t()
{
	return this.j3j != null;
}

g2e(s0o)
{
	return s0o.g3i(this.x8m());
}

x3o(s0o)
{
	if (s0o.l5t)
	{
		return s0o.l5t.n9f == null;
	}
	else if (this.j3j)
	{
		return false;
	}
	else
	{
		return true;
	}
}

g5u(s0o)
{
	if (!this.g2e(s0o))
	{
		if (s0o.l5t.m1m)
		{
			s0o.l5t = s0o.l5t.m1m;
			s0o.x8g = s0o.l5t.x8g;
		}
		else
		{
			let c1i = s0o.l5t;
			while (c1i.s5h)
			{
				c1i = c1i.s5h;
			}
			c1i = c1i.m1m;
			s0o.l5t = c1i;
      if (s0o.l5t)
      {
  			s0o.x8g = s0o.l5t.x8g;
      }
      else
      {
        s0o.x8g = null;
      }
		}
	}
}

a0e(s0o)
{
	if (!this.x3o(s0o))
	{
		s0o.l5t = this.p6u(s0o);
		s0o.x8g = s0o.l5t.x8g;
	}
}

m8n(s0o, g8v)
{
	let w3s = this.i7y(s0o);
	if (g8v < 0 || g8v >= w3s)
	{
		return;
	}
	let i2k = this.p6u(s0o);
	let i = 0;
	while (i != g8v)
	{
		i++;
		i2k = i2k.d7r;
	}
	s0o.l5t = i2k;
	s0o.x8g = s0o.l5t.x8g;
}

v0l(s0o)
{
	if (!s0o.l5t)
	{
		return this.z8i;
	}
	let g3u = this.b8l(s0o);
	if (g3u)
	{
		return this.z8i +
      Math.floor((g3u - 1 + this.o6r.n5e()) / 2);
	}
	else
	{
		return this.z8i;
	}
}

x8m()
{
	let s0o = new e5q();
	s0o.l5t = null;
	s0o.x8g = null;
	return s0o;
}

y2e(s0o)
{
	if (!this.x3o(s0o))
	{
		let c1i = this.p6u(s0o);
		while (true)
		{
			if (!c1i.n9f)
			{
				break;
			}
			c1i = c1i.n9f;
		}
		s0o.l5t = c1i;
		s0o.x8g = s0o.l5t.x8g;
	}
}

n3a(r4l)
{
	let s0o = this.x8m();
	if (r4l > 0)
	{
    this.r4l = 0;
		this.x0s(s0o, r4l);
		return s0o;
	}
	else
	{
		return s0o;
	}
}

x0s(s0o, r4l)
{
	while (true)
	{
		if (this.x3o(s0o))
		{
			return false;
		}
		let w3s = this.i7y(s0o);
		if (w3s > 1)
		{
			let c4c = s0o.a0s();
			for (let i = 1; i < w3s; i++)
			{
				this.m8n(s0o, i);
				this.r4l++;
				if (this.r4l == r4l)
				{
					return true;
				}
				if (this.x0s(s0o, r4l))
				{
					return true;
				}
        s0o.l5t = c4c.l5t;
        s0o.x8g = c4c.x8g;
			}
		}
		this.a0e(s0o);
		this.r4l++;
		if (this.r4l == r4l)
		{
			return true;
		}
	}
}

u4p(s0o)
{
	if (!s0o.l5t)
	{
		return 0;
	}
	else
	{
		return s0o.l5t.a1m;
	}
}

m7d(s0o)
{
	let m4t = [];
 	if (!s0o.l5t)
  {
		return m4t;
	}
	let c1i = s0o.l5t;
	while (1)
	{
		m4t.push(c1i);
		if (!c1i.m1m)
		{
			let i2k = c1i;
			while (i2k.s5h)
			{
				i2k = i2k.s5h;
			}
			if (!i2k.m1m)
			{
				break;
			}
		}
		if (c1i.m1m)
		{
			c1i = c1i.m1m;
		}
		else
		{
			let i2k = c1i;
			while (i2k.s5h)
			{
				i2k = i2k.s5h;
			}
			c1i = i2k.m1m;
		}
	}
	return m4t.reverse();
}

o9x(s0o)
{
	let m4t = this.m7d(s0o);
	let w3s = this.i7y(s0o);
	if (w3s == 0)
	{
		return m4t;
	}
	let z0p = this.p3f(s0o, 0);
	while (z0p)
	{
		m4t.push(z0p);
		z0p = z0p.n9f;
	}
	return m4t;
}

i7y(s0o)
{
	let z0p = this.p6u(s0o);
	if (!z0p)
	{
		return 0;
	}
	let w3s = 1;
	while (z0p.d7r)
	{
		w3s++;
		z0p = z0p.d7r;
	}
	return w3s;
}

b5z(s0o, e2e)
{
	if (this.g2e(s0o))
	{
		this.j3j = e2e;
		s0o.l5t = e2e;
		s0o.x8g = s0o.l5t.x8g;
	}
	else
	{
		s0o.l5t.n9f = e2e;
		e2e.m1m = s0o.l5t;
		s0o.l5t = e2e;
		s0o.x8g = s0o.l5t.x8g;
	}
}

v1n(s0o, e2e)
{
	let i2k = this.p6u(s0o);
	while (i2k.d7r)
	{
		i2k = i2k.d7r;
	}
	i2k.d7r = e2e;
	e2e.s5h = i2k;

	s0o.l5t = e2e;
	s0o.x8g = s0o.l5t.x8g;
}

v9t(s0o, x8g)
{
	let e2e = new b4h();
 	e2e.g3t(x8g);
	if (this.x3o(s0o))
	{
		this.b5z(s0o, e2e);
	}
	else
	{
		this.v1n(s0o, e2e);
	}
}


h6c(s0o, m4t)
{
	for (const x8g of m4t)
	{
		this.v9t(s0o, x8g);
	}
}


m4a(s0o)
{
	let i2k = this.p3f(s0o, 1);
	if (!i2k)
	{
		return false;
	}
	while (i2k)
	{
		let w0v = i2k.n9f;
		while (w0v)
		{
			if (w0v.d7r)
			{
				return false;
			}
			w0v = w0v.n9f;
		}
		i2k = i2k.d7r;
	}
	return true;
}

z8c()
{
	let w0v = this.j3j;
	while (w0v)
	{
		if (w0v.d7r)
		{
			return true;
		}
		w0v = w0v.n9f;
	}
	return false;
}

w9g()
{
	if (!this.h5g.v9y())
	{
		return true;
	}
	if (this.z8c())
	{
		return true;
	}
	let w0v = this.j3j;
	while (w0v)
	{
		if (w0v.x8g.w9g())
		{
			return true;
		}
		w0v = w0v.n9f;
	}
	return false;
}

p6u(s0o)
{
	if (s0o.l5t)
	{
		return s0o.l5t.n9f;
	}
	return this.j3j;
}

p3f(s0o, g8v)
{
	let i = 0;
	let i2k = this.p6u(s0o);
	while (i2k && i != g8v)
	{
		i2k = i2k.d7r;
		i++;
	}
	return i2k;
}

d5e(i2k)
{
	let c6b = i2k;
	let f4i = null;
	let e2e = null;
	let r1o = null;
	while (c6b)
	{
		e2e = new b4h();
		e2e.g3t(c6b.x8g);
		if (f4i)
		{
			f4i.n9f = e2e;
			e2e.m1m = f4i;
		}
		else
		{
			r1o = e2e;
		}
		f4i = e2e;
		if (c6b.d7r && !c6b.s5h)
		{
			let k8b = c6b.d7r;
			let j5l = f4i;
			while (k8b)
			{
				let q2s = this.d5e(k8b);
				j5l.d7r = q2s;
				q2s.s5h = j5l;
				j5l = q2s;
				k8b = k8b.d7r;
			}
		}
		c6b = c6b.n9f;
	}
	return r1o;
}

r7i()
{
	return this.h5g;
}

u4e()
{
	return this.h5g.b5p;
}

p7b(j8o)
{
	this.h5g.b5p = j8o;
}

g9c()
{
	return !this.h5g.m3d.v9y();
}

z0m(m3d)
{
	this.h5g.m3d = m3d.a0s();
}

o8m()
{
	return this.h5g.m3d;
}

q7u()
{
	return !this.h5g.l2s.v9y();
}

p0y(l2s)
{
	this.h5g.l2s = l2s.a0s();
}

y3a()
{
	return this.h5g.l2s;
}

x0v()
{
	return !this.h5g.w7u.v9y();
}

e6u(w7u)
{
	this.h5g.w7u = w7u.a0s();
}

m5m()
{
	return this.h5g.w7u;
}

j4k(r4l)
{
  if (r4l == 0)
  {
    return true;
  }
	let w0v = this.j3j;
	while (w0v)
	{
    if (w0v.a1m == r4l)
    {
      return true;
    }
		w0v = w0v.n9f;
	}
	return false;
}

t9a()
{
	let s0o = this.x8m();
	this.r4l = 0;
	this.x7q(s0o);
}

x7q(s0o)
{
	while (true)
	{
		if (this.x3o(s0o))
		{
			return;
		}
		let w3s = this.i7y(s0o);
		if (w3s > 1)
		{
			let c4c = s0o.a0s();
			for (let i = 1; i < w3s; i++)
			{
				this.m8n(s0o, i);
				this.r4l++;
        s0o.l5t.a1m = this.r4l;
				this.x7q(s0o);
        s0o.l5t = c4c.l5t;
        s0o.x8g = c4c.x8g;
			}
		}
		this.a0e(s0o);
  	this.r4l++;
    s0o.l5t.a1m = this.r4l;
	}
}

h4h(s0o)
{
	let h4h = this.o6r.a0s();
	if (!s0o.l5t)
	{
		return h4h;
	}
	let m4t = this.m1p(s0o);
  for (const x8g of m4t)
	{
		h4h.a0e(x8g.h9g());
	}
	return h4h;
}

m1p(s0o)
{
	let m4t = [];
 	if (!s0o.l5t)
  {
		return m4t;
	}
	let c1i = s0o.l5t;
	while (1)
	{
		m4t.push(c1i.x8g);
		if (!c1i.m1m)
		{
			let i2k = c1i;
			while (i2k.s5h)
			{
				i2k = i2k.s5h;
			}
			if (!i2k.m1m)
			{
				break;
			}
		}
		if (c1i.m1m)
		{
			c1i = c1i.m1m;
		}
		else
		{
			let i2k = c1i;
			while (i2k.s5h)
			{
				i2k = i2k.s5h;
			}
			c1i = i2k.m1m;
		}
	}
	return m4t.reverse();
}


u4m()
{
	this.h5g = new v0r();
	this.j3j = null; 
  
}


g9x()
{
	let m4t = [];
	let w0v = this.j3j;
	while (w0v)
	{
		m4t.push(w0v.x8g);
		w0v = w0v.n9f;
	}
	return m4t;
}


}

const w6u =
{
	c2f : 0,
	b2h : 1,
	n3g : 2,
	y6v : 3,
	q9x : 4,
	m1i : 5,
	m6m : 6,
	n4d : 7,
	t6q : 8,
	b6q : 9,
	z4x : 10,
	z7m : 11,
	s3e : 12,
	g4d : 13,
	n9q : 14,
	h1s : 15
};

const i8o =
[
	[ w6u.c2f,     						  ""    ],
	[ w6u.b2h,        "+&#8211;" ],
	[ w6u.n3g, 						"&#177;" ],
	[ w6u.y6v,		"&#10866;"  ],
	[ w6u.q9x, 							"="   ],
	[ w6u.m1i,  							"&#8734;" ],
	[ w6u.m6m,  	"&#10865;"],
	[ w6u.n4d, 						"&#8723;" ],
	[ w6u.t6q, 				"&#8211;+"],
	[ w6u.b6q,						"&#8773;" ],
	[ w6u.z4x, 						"&#8646;" ],
	[ w6u.z7m,  						"&#8593;" ],
	[ w6u.s3e, 								"&#8594;" ],
	[ w6u.g4d, 					"&#8853;" ],
	[ w6u.n9q,		"&#10227;"],
	[ w6u.h1s, 								"N"   ]
];

function h9n(value)
{
	return i8o[value][1];
}


const b4f =
{
	j6s : 0,
	l7b : 1,
	j4c : 2
};

const u9p =
{
	c2f : 0,
	h3t : 1,
	c5p : 2,
	n9s : 3,
	v0a : 4,
	b1f : 5,
	x1z : 6,
	b5p : 7,
	t9p : 8,
	w7u : 9,
	y9a : 10,
	m2k : 11
};

/*
TO DO
- Aanpassen voor tekst after van e5u daar kan dia inzitten (zie c++)
- Vette tekst en niet vette h3t testen bij wel/niet MultiPV
*/
class u9g
{

constructor()
{
	this.h5s = new e7n();
  this.g6i = true;
  this.x3p = false;
  this.l7v = true;
  this.z6g = true;
  this.p9h = b4f.j6s;
  this.l1s = false;
  this.t8b = true;
 	this.n3z = true;
 	this.a9o = -1;
  this.t2l = false;
  this.r9g = false;
	this.k5j = false;
	this.d9a = true;
  this.b4a = false;
  this.z3w = false;
  this.u4s = 0;
	this.t7q = true;
  this.k7k = null;
 	this.l6q = u9p.c2f;
}

v3i(m4t)
{
	this.k7k = m4t;
 	let x8m = this.k7k.x8m();
	let o0n = this.k7k.o0n();
	this.l6q = u9p.c2f;
	this.d9a = true;
	this.r9g = false;
	this.k5j = false;
	this.t2l = false;
	this.b4a = this.k7k.w9g();
	this.t7q = true;
	this.u4s = 0;

	if (this.l1s)
	{
		this.j2x(u9p.c5p);
		this.z9b();
	}
	else
	{
    
    if (this.p9h == b4f.l7b ||
      (this.p9h == b4f.j4c && !o0n.e2n()))
    {
      if (this.z6g)
      {
        this.u2k(x8m, o0n, u4s);
        this.d9a = true;
      }
    }

    this.j2x((this.b4a && !this.s5o) ? u9p.h3t : u9p.c5p);
    this.r2v(this.b4a);
    this.v9t(x8m, "");
    this.h3e(x8m, this.k7k.r7i().b5p);

    if (this.k7k.i7t())
    {
      this.m5e();
    }
   	this.j2x(u9p.c2f);
   	this.o1j();
  }
}

z9b()
{
	let s0o = this.k7k.x8m();
	let i7y = this.k7k.i7y(s0o);
	for (let i = 0; i < i7y; i++)
	{
    this.h5s.i5y('<div class="variation-row">');
		s0o = this.k7k.x8m();
  	let h4h = this.k7k.o0n();
	  let v0l = this.k7k.d4a();
		this.k7k.m8n(s0o, i);
		this.d9a = true;
		let p2a = true;
		let x8g = s0o.x8g;
		let x1z = x8g.x1z();
		if (x1z.length)
		{
			this.b3i(s0o, x1z);
		}
		this.j2x(u9p.c5p);
		do
		{
			if (p2a)
			{
				s0o.x8g.m6n();
			}
			this.s6e(s0o, h4h, v0l);
			if (p2a)
			{
				s0o.x8g.z0h(x1z);
				p2a = false;
			}
			if (this.k7k.x3o(s0o))
			{
				break;
			}
			h4h.a0e(s0o.x8g);
			if (h4h.a2y())
			{
				v0l++;
			}
			this.k7k.a0e(s0o);
		} while (true);
    this.h5s.i5y('<div');
	}
}

m5e()
{
  let a5m = 0;
 	let s0o = this.k7k.x8m();
	let h4h = this.k7k.o0n();
  let v0l = this.k7k.d4a();

	let g7p = 100000;
	if (this.a9o == 0)
	{
		return;
	}
	if (this.a9o != -1)
	{
		g7p = this.a9o;
	}
	let w3g = v0l + g7p - 1;
	this.d9a = true;
	while (true)
	{
		let i7y = this.k7k.i7y(s0o);
		while (v0l <= w3g && !this.k7k.x3o(s0o))
		{
      this.k7k.a0e(s0o);
    	this.j2x((this.b4a && !this.s5o) ? u9p.h3t : u9p.c5p);
			this.s6e(s0o, h4h, v0l);
			h4h.a0e(s0o.x8g.h9g());
 			if (h4h.a2y())
			{
				v0l++;
			}
			if (this.n3z && i7y > 1)
			{
				break;
			}
			i7y = this.k7k.i7y(s0o);
		}
		if (!i7y || v0l > w3g)
		{
			return;
		}
    h4h.g5u(s0o.x8g.h9g());
		if (h4h.n5e())
		{
			v0l--;
		}
    this.k7k.g5u(s0o);
		for (let i = 1; i < i7y; i++)
		{
      a5m++;
      let k2x = "<span class=\"tdline\" data-level=\"";
      k2x += a5m.toString();
      k2x += "\">";
      this.h5s.i5y(k2x);
			this.i5c(u9p.n9s);
			this.v7h("[", true);
			let b1f = '';
      this.k5e(s0o, h4h, v0l, i, b1f, a5m);
			this.j2x(u9p.n9s);
			this.v7h("]", true);
      this.h5s.i5y("</span>");
      a5m--;
     	this.j2x((this.b4a && !this.s5o) ? u9p.h3t : u9p.c5p);
		}
		this.i5c(this.l6q);
    this.k7k.a0e(s0o);
    h4h.a0e(s0o.x8g.h9g());
		if (h4h.a2y())
		{
			v0l++;
		}
		this.d9a = true;
	}
}

s6e(s0o, h4h, v0l)
{
	if (this.k7k.g2e(s0o))
	{
		return;
	}
 	let x8g = s0o.x8g;

	let x1x = '';
  let n5i = false;
  if (this.g6i)
	{
		if (x8g.g9p())
		{
			if (!this.k7k.g2e(s0o))
			{
        let u5m = s0o.a0s();
        this.k7k.g5u(u5m);
        if (u5m.x8g)
        {
  				if (u5m.x8g.t9j())
	  			{
		  			n5i = true;
			  	}
        }
			}
		}
  }
	if (this.r9g)
	{
		x1x = "(";
		this.r9g = false;
		if (this.g6i && x8g.i2f())
		{
			this.v7h("(", true);
			let s3a = this.l6q;
			this.b3i(s0o, x8g.x1z());
			this.j2x(s3a);
			x1x = "";
      n5i = true;
		}
	}
	else
	{
		if (this.g6i && x8g.i2f())
		{
  	  let s3a = this.l6q;
	  	this.b3i(s0o, x8g.x1z());
		  this.j2x(s3a);
      n5i = true;
    }
	}
	if (x8g.l0o())
	{
		x1x += i6l(x8g.b1f());
	}
	let d3z = x8g.m9n();
	if (d3z)
	{
    x1x += v0l;
		x1x += '.';
	}
	else
	{
		if (this.d9a || n5i)
		{
 			x1x += v0l;
			x1x += "...";
		}
	}
	x1x += w0m(h4h, x8g.h9g(), false);
	if (x8g.g6r())
	{
		x1x += l0j(x8g.style());
	}
	if (x8g.p0i())
	{
		x1x += h9n(x8g.value());
	}
	if (x8g.m1q())
	{
		x1x += " End Of Game";
  }
	if (this.k5j || this.t2l)
	{
		if (this.k7k.x3o(s0o) && (!this.g6i || !x8g.t9j()))
		{
			if (this.k5j)
			{
				x1x += ")";
				this.k5j = false;
			}
			else
			{
				x1x += ";";
				this.t2l = false;
			}
		}
	}
	this.v9t(s0o, x1x);
	this.d9a = false;

	if (x8g.d6j())
	{
		let b5p = x8g.b5p();
    let z6v = b5p.indexOf("[#]");
		let j8e = b5p.substring(0, z6v);
	  let c4t = b5p.substring(z6v + 3);
		if (j8e.length)
		{
			this.h3e(s0o, j8e);
		}
		this.u4s++;
		if (this.z6g)
		{
			this.i5c(u9p.c2f);
      this.u2k(s0o, h4h, this.u4s);
			this.d9a = true;
		}
		if (c4t.length)
		{
			this.h3e(s0o, c4t);
		}
	}
	else
	{
		this.h3e(s0o, x8g.b5p());
	}

  if (x8g.m1q())
	{
    this.h5s.a6c("<div>&nbsp;</div>"); 
   	this.o1j();
 	  this.r2v(false); 
 	  this.z3w = true;
	}
}

j2x(y5a)
{
	if (y5a != this.l6q)
	{
		this.f0k();
		this.l6q = y5a;
		this.x2h();
	}
}

x2h()
{
}

f0k()
{
	this.l6q = u9p.c2f;
}

i5c(y5a)
{
	this.f0k();
	this.l6q = u9p.c2f;
  
  
  
  
  this.h5s.a6c("<br>"); 
	if (y5a != u9p.c2f)
	{
		this.l6q = y5a;
		this.x2h();
	}
}

u2k(s0o, h4h, a1m)
{
  this.t7q = true;
	let k2x = "<span class=\"tddia\" movenr=\"";
  k2x += this.k7k.u4p(s0o).toString();
	k2x += "\">",
	this.h5s.i5y(k2x);
	this.h5s.i5y("<canvas></canvas>");
	this.h5s.i5y("</span>");
	this.d9a = true;
}

j8z(s0o, j8o)
{
  this.u2z(s0o);
	this.b7y(j8o);
  this.l6k();
}

k5e(k1n, w8l, v0l, g8v, b1f, a5m)
{
  let s0o = k1n.a0s();
  let h4h = w8l.a0s();

	if (b1f.length)
	{
		this.j2x(u9p.b1f);
		let p5d = b1f;
		p5d += ")";
    let k2x = "<span class=\"tdprefix\">";
    this.h5s.i5y(k2x);
  	this.v7h(p5d);
    this.h5s.i5y("</span>");
	}
	let i7y = 0;
	let p7w = 1;
  this.k7k.m8n(s0o, g8v);
	this.d9a = true;
	do
	{
		this.j2x(u9p.n9s);
		this.s6e(s0o, h4h, v0l);
		if (i7y > 1)
		{
      this.k7k.g5u(s0o);
      this.c7x(s0o, h4h, v0l);
      this.k7k.a0e(s0o);
			this.d9a = true;
		}
		h4h.a0e(s0o.x8g.h9g());
		if (h4h.a2y())
		{
			v0l++;
		}
		i7y = this.k7k.i7y(s0o);
		if (i7y == 0)
		{
			break;
		}
		if (i7y > 1)
		{
			if (!this.k7k.m4a(s0o))
			{
				break;
			}
		}
    this.k7k.a0e(s0o);
		p7w++;
	} while (true);

	if (this.k7k.x3o(s0o))
	{
		return;
	}

	let t6k = b1f.length;
	let p5d = '';
	let x4r = 1;
	for (let i = 0; i < i7y; i++)
	{
		if (t6k == 0)
		{
      p5d = String.fromCharCode('A'.charCodeAt() + x4r - 1);
		}
		else if (t6k == 1)
		{
      p5d = b1f;
      p5d += x4r;
		}
		else if (t6k == 2)
		{
      p5d = b1f;
      p5d += String.fromCharCode('a'.charCodeAt() + x4r - 1);
		}
		else
		{
      p5d = b1f;
      p5d += x4r;
		}

    let k2x = "<span class=\"tdline\" data-level=\"";
    k2x += a5m.toString();
    k2x += "\">";
    this.h5s.i5y(k2x);
  	this.i5c(this.l6q);
    this.k5e(s0o, h4h, v0l, i, p5d, a5m);
    this.h5s.i5y("</span>");
		x4r++;
	}
}

c7x(k1n, w8l, v0l)
{
  let s0o = k1n.a0s();
  let h4h = w8l.a0s();

	this.j2x(u9p.v0a);
	this.r9g = true;
	this.t2l = false;
	let i7y = this.k7k.i7y(s0o);
	for (let i = 1; i < i7y; i++)
	{
		if (i == i7y - 1)
		{
			this.k5j = true;
		}
		if (i < i7y - 1)
		{
			this.t2l = true;
		}
    this.s1b(s0o, h4h, v0l, i);
		if (this.t2l)
		{
			this.j2x(u9p.v0a);
			this.v7h(";", false);
			this.t2l = false;
		}
	}
	this.j2x(u9p.v0a);
	if (this.k5j)
	{
		this.v7h(")", false);
		this.k5j = false;
	}
}

s1b(k1n, w8l, v0l, g8v)
{
  let s0o = k1n.a0s();
  let h4h = w8l.a0s();

  this.k7k.m8n(s0o, g8v);
	let p7w = 0;
	this.d9a = true;
	do
	{
		p7w++;
		this.j2x(u9p.v0a);
		this.s6e(s0o, h4h, v0l);
		if (this.k7k.x3o(s0o))
		{
			break;
		}
		h4h.a0e(s0o.x8g.h9g());
		if (h4h.a2y())
		{
			v0l++;
		}
    this.k7k.a0e(s0o);
	} while (true);
}

v9t(s0o, x1x)
{
	if (x1x.length)
	{
 		this.t3s(s0o, x1x);
	}
	else
	{
		if (this.t8b)
    {
      this.t3s(s0o, "[...]");
    }
	}
	if (s0o.x8g)
	{
		if (s0o.x8g.f1x() || s0o.x8g.b0s())
		{
			this.w9i(s0o, u9p.t9p);
		}
		if (s0o.x8g.d6j())
		{
		}
		if (s0o.x8g.w2h())
		{
			this.w9i(s0o, u9p.y9a);
		}
		if (s0o.x8g.z3s())
		{
			this.w9i(s0o, u9p.w7u);
		}
	}
	else
	{
		if (this.k7k.g9c() || this.k7k.q7u())
		{
			this.w9i(s0o, u9p.t9p);
		}
		if (this.k7k.x0v())
		{
		 	this.w9i(s0o, u9p.w7u);
		}
	}
}

v7h(x1x, n2v)
{
	if (x1x.length == 0)
	{
		return;
	}
	if (!this.t7q && n2v)
	{
		this.h5s.a6c(" ");
	}
	this.h5s.a6c(x1x);
	this.t7q = false;
}

b3i(s0o, x1z)
{
	if (this.g6i && x1z.length)
	{
		this.j2x(u9p.x1z);
		this.j8z(s0o, x1z);
	}
}

h3e(s0o, b5p)
{
	if (this.g6i && b5p.length)
	{
		this.j2x(u9p.b5p);
		this.j8z(s0o, b5p);
	}
}

b7y(j8o)
{
  let o0v = j8o;
  let f8s = o0v.replaceAll("<br><br>", "<br>");
  let n4q = f8s.replaceAll("<br><br>", "<br>");
  let t9q = n4q.replaceAll("<br>", "<div>&nbsp;</div>");
  let s = t9q;
  this.h5s.a6c(s);
}

t3s(s0o, x1x)
{
	if (x1x.length == 0)
	{
		return;
	}
	if (!this.t7q)
	{
		this.h5s.a6c(" ");
	}
  let y8l = '';
  if (s0o.x8g)
  {
  	if (s0o.x8g.y4l())
	  {
		  if (s0o.x8g.a2l() == o2p.z1e)
  		{
	  		y8l = "tdmove-crit-opening";
		  }
  		else if (s0o.x8g.a2l() == o2p.h0f)
	  	{
		  	y8l = "tdmove-crit-middle";
  		}
	  	else if (s0o.x8g.a2l() == o2p.r9v)
		  {
  			y8l = "tdmove-crit-end";
	  	}
  	}
  }
	let s3v = "<span class=\"";
	if (y8l.length == 0)
	{
		s3v += "tdmove\" movenr=\"";
	}
	else
	{
		s3v += "tdmove " + y8l + "\" movenr=\"";
	}
  s3v += this.k7k.u4p(s0o).toString();
  s3v += "\"";
	s3v += ">",
	s3v += x1x;
	s3v += "</span>";

	this.h5s.i5y(s3v);
	this.t7q = false;
}

w9i(s0o, y5a)
{
  if (y5a == u9p.t9p)
  {
    this.l7d(s0o);
  }
  else if (y5a == u9p.w7u)
  {
    this.c8d(s0o);
  }
}

l7d(s0o)
{
	let k2x = "<span class=\"tdcolors\" movenr=\"";
  k2x += this.k7k.u4p(s0o).toString();
	k2x += "\">",
	this.h5s.i5y(k2x);
	this.h5s.i5y("</span>");
}

c8d(s0o)
{
	let k2x = "<span class=\"tdmedal\" movenr=\"";
  k2x += this.k7k.u4p(s0o).toString();
	k2x += "\">",
	this.h5s.i5y(k2x);
	this.h5s.i5y("<canvas></canvas>");
	this.h5s.i5y("</span>");
}

r2v(l1d)
{
 	let k2x = "<span class=\"tdline\"";
	if (l1d)
	{
		k2x += " data-commented=\"1\"";
	}
	k2x += " data-level=\"0\">";
	this.h5s.a6c(k2x);
}

o1j()
{
  this.h5s.i5y("</span>");
}

u2z(s0o)
{
  let m6y = "tdcomment";
  if (this.x3p)
  {
    m6y += " is-bold";
  }
  let k2x = "<span class=\"" + m6y + "\" movenr=\"";
  k2x += this.k7k.u4p(s0o).toString();
  k2x += "\">";
  this.h5s.a6c(k2x);
}

l6k()
{
  this.h5s.i5y("</span>");
}

w5x(value)
{
  this.t8b = value;
}

u0i(value)
{
  this.x3p = value;
}

l4s(value)
{
  this.l7v = value;
}

b6s(value)
{
  this.l1s = value;
}

} 
const c3j =
{
	s3e : 1,
	n8h : 2,
	a4f : 3
};

class k7q
{

constructor()
{
	this.a7j = 0;
	this.g5w = 0;
	this.type = c3j.s3e;
}

a0s()
{
	let t8l = new k7q();
	t8l.a7j = this.a7j;
	t8l.g5w = this.g5w;
	t8l.type = this.type;
	return t8l;
}

}

function w1u(a7j, g5w, type)
{
	let s = new k7q();
	s.a7j = a7j;
	s.g5w = g5w;
	s.type = type;
	return s;
}
class s7c
{

constructor()
{
	this.i3m = [];
}

a0s()
{
	let j0p = new s7c();
	for (const j3b of this.i3m)
	{
		j0p.add(j3b.a0s());
	}
	return j0p;
}

w2m()
{
	this.i3m.length = 0;
}

v9y()
{
	return this.i3m.length == 0;
}

size()
{
	return this.i3m.length;
}

add(j3b)
{
	let d1y = j3b.a0s();
	this.i3m.push(d1y);
}

}

const c7m =
{
	p2v : 0,
	y0a : 1,
	m9g : 2
};

class r3c
{

constructor()
{
	this.h5t = 0;
	this.type = c7m.p2v;
}

a0s()
{
	let h0o = new r3c();
	h0o.h5t = this.h5t;
	h0o.type = this.type;
	return h0o;
}

}

function s7r(h5t, type)
{
	let e5p = new r3c();
	e5p.h5t = h5t;
	e5p.type = type;
	return e5p;
}

class x6l
{

constructor()
{
	this.t0j = [];
}

a0s()
{
	let m7i = new x6l();
	for (const n2g of this.t0j)
	{
		m7i.add(n2g.a0s());
	}
	return m7i;
}

w2m()
{
	this.t0j.length = 0;
}

v9y()
{
	return this.t0j.length == 0;
}

size()
{
	return this.t0j.length;
}

add(x7v)
{
	let i0z = x7v.a0s();
	this.t0j.push(i0z);
}

}

const e1q =
{
	b7w    : 0,
	m7s  : 1,
	u4n  : 2,
	o3w    : 3,
  f1i   : 4,
	j0j    : 5,
};


function x0a(c1b)
{
	let x1x = '';
	switch (c1b)
	{
		case e1q.b7w:
			x1x = "P";
			break;
		case e1q.m7s:
			x1x = "N";
			break;
		case e1q.u4n:
			x1x = "B";
			break;
		case e1q.o3w:
			x1x = "R";
			break;
		case e1q.f1i:
			x1x = "Q";
			break;
		case e1q.king:
			x1x = "K";
			break;
	}
	return x1x;
}

class w3p
{

constructor()
{
  this.h0u = 0;
	this.s6s = new b2s();
	this.m4t = new c8l();
}

a0s()
{
	let c7t = new w3p();
  c7t.h0u = this.h0u;
	c7t.s6s = this.s6s.a0s();
	c7t.m4t = this.m4t.a0s();
	return c7t;
}

}

const r0q = 	 		"#7B8295";
const f1h =			"#9F9F9F";
const e9r = 			    "#7B8295";
const c5v = 		  "#FFFFFF";
const i5k =       "#D0B194";

const i1a	   = "#E13129";
const p9c	 = "#389C13";
const c2q = "#E2B628";

const y0x	 = "#E13129";
const d1c	 = "#389C13";
const h8r	   = "#E2B628";

class s0a
{

constructor()
{
	this.x3b = null;
	this.a1p = false;
	this.b9j = null;
	this.t0x = null;
	this.k1s = null;
	this.x3t = 0;
	this.f7k = 0;
	this.x2z = 0;
	this.h0i = 0;
	this.j9z = 0;
	this.s7w = 0;
	this.z5l = new j6p();
	this.h4h = new g8w();
	this.m3d = new s7c();
	this.l2s = new x6l();
  this.j7x = new j0n();
  this.u7h = true;
	this.a6h = true;
	this.k0g = true;
	this.h6y = false;
	this.u1y = r0q;
	this.y8v = f1h;
	this.a0m = r3m;
	this.u9j = o4h;
	this.t2o = o4h;
	this.q7y = a2u;
	this.g2x = true;
	this.p0d = l6i;
	this.e6b = l6i;
	this.i3h = false;
	this.l7l = [];
	this.p8k = 0;
}

u2o(x3b)
{
	this.x3b = x3b;
}

w4g(z5l)
{
	this.z5l = z5l;
	this.x2z = z5l.x2z();
	this.h0i = z5l.x2z();

	this.x3t = (this.x3b.width - this.x2z) / 2;
	let top = (this.x3b.height - this.h0i) * 0.25;
	if (top > 0 && top < 16) top = 16;
	this.f7k = top;
	this.j9z = this.x3t + this.x2z - 1;
	this.s7w = this.f7k + this.h0i - 1;
	this.a1p = false;
	this.v2o();
}

h1z(h4h)
{
	this.h4h = h4h.a0s();
	this.m3d.w2m();
	this.l2s.w2m();
}

g5c(m3d)
{
	this.m3d = m3d.a0s();
}

l6w(l2s)
{
	this.l2s = l2s.a0s();
}

c4p(x8g)
{
  this.j7x = x8g.a0s();
}

q9l(h6y)
{
	this.h6y = h6y;
}

f6e()
{
	this.h6y = !this.h6y;
}

z8j()
{
	if (!this.x3b) return;
	if (this.x2z <= 0 || this.h0i <= 0)
	{
		return;
	}
	this.u4f();
}

t7l()
{
	let l9i = this.z5l.l9i;
	if (this.a1p)
	{
		return;
	}
	this.a1p = true;
	if (l9i == k5t.f5u)
	{
  	this.b9j = r3s.m0v("images/board/LightSquare");
  	this.t0x = r3s.m0v("images/board/DarkSquare");
		this.k1s = r3s.m0v("images/board/Margin");
	}
}

v2o()
{
	this.t7l();
	let l9i = this.z5l.l9i;
	if (l9i == k5t.f5u)
	{
		this.g2x = false;
		this.a6h = false;
		this.k0g = false;
		this.a0m = "#FFFF97";
		this.u9j = "#9B2E31";
		this.t2o = k4d;
	}
}

u4f()
{
	this.v2o();
	if (this.z5l.l9i == k5t.f5u)
	{
		let q9g = r3s.m0v("images/board/BoardBackground");
		this.e5b(new u4d(0, 0, this.x3b.width, this.x3b.height), q9g);
	}
	this.r6z();  
	this.t2m(); 
	this.k2v(); 
  if (chess)
  {
	  this.h5p();
  }
  else
  {
	  this.z8f();
  	this.h9e();
  }
  
  this.h9j();
 	this.x8h();
 	this.q7d();
 	this.u7n();
	this.x7p(); 
	this.u3j();      
}

r6z()
{
	let e5s = this.f7k;
	let o8d = this.x3t;
	let c0l = this.j9z;
	let g2o = this.s7w;
	let y7u = this.z5l.q7i;
	this.d3x(new u4d(o8d, e5s, c0l, e5s+y7u-1), this.u9j);
	this.d3x(new u4d(o8d, g2o-y7u+1, c0l, g2o), this.t2o);
	this.d3x(new u4d(o8d, e5s, o8d+y7u-1, g2o), this.u9j);
	this.d3x(new u4d(c0l-y7u+1, e5s, c0l, g2o), this.t2o);
}

t2m()
{
	let q7i = this.z5l.q7i;
	let z3x = this.z5l.z3x;
	if (!z3x)
	{
		return;
	}
	if (this.g2x || !this.k1s)
	{
		this.s6b(this.q7y);
	}
	else
	{
		let left = this.x3t + q7i;
		let top = this.f7k + q7i;
		let w2o = this.j9z - q7i;
		let g5o = this.f7k + q7i + z3x - 1;
		this.e5b(new u4d(left, top, w2o, g5o), this.k1s);

		left = this.x3t + q7i;
		top = this.f7k + q7i;
		w2o = this.x3t + q7i + z3x - 1;
		g5o = this.s7w - q7i;
		this.e5b(new u4d(left, top, w2o, g5o), this.k1s);

		left = this.x3t + q7i;
		top = this.s7w - q7i - z3x + 1;
		w2o = this.j9z - q7i;
		g5o = this.s7w - q7i;
		this.e5b(new u4d(left, top, w2o, g5o), this.k1s);

		left = this.j9z - q7i - z3x + 1;
		top = this.f7k + q7i;
		w2o = this.j9z - q7i;
		g5o = this.s7w - q7i;
		this.e5b(new u4d(left, top, w2o, g5o), this.k1s);
	}
}

s6b()
{
	let q7i = this.z5l.q7i;
	let z3x = this.z5l.z3x;
	if (!z3x)
	{
		return;
	}

	let left = this.x3t + q7i;
	let top = this.f7k + q7i;
	let w2o = this.j9z - q7i;
	let g5o = this.f7k + q7i + z3x - 1;
	this.d3x(new u4d(left, top, w2o, g5o), this.q7y);

	left = this.x3t + q7i;
	top = this.f7k + q7i;
	w2o = this.x3t + q7i + z3x - 1;
	g5o = this.s7w - q7i;
	this.d3x(new u4d(left, top, w2o, g5o), this.q7y);

	left = this.x3t + q7i;
	top = this.s7w - q7i - z3x + 1;
	w2o = this.j9z - q7i;
	g5o = this.s7w - q7i;
	this.d3x(new u4d(left, top, w2o, g5o), this.q7y);

	left = this.j9z - q7i - z3x + 1;
	top = this.f7k + q7i;
	w2o = this.j9z - q7i;
	g5o = this.s7w - q7i;
	this.d3x(new u4d(left, top, w2o, g5o), this.q7y);
}

u3j()
{
	if (this.z5l.d2s)
	{
  	if (!this.z5l.z3x)
  	{
	  	return;
  	}
		let color = "#000000";
		if (this.h4h.a2y())
		{
			color = "#EDD790";
		}
		else
		{
			color = "#000000";
		}
		let rect = this.p9i();
		let u1e = this.q6n();
		u1e.beginPath();
		u1e.fillStyle = color;
		let l2z = rect.f4v() * 0.40;
		u1e.arc(rect.q5f + rect.f4v()/2 - 1, rect.s5d + rect.j5w()/2 - 1,
			l2z, 0, 2 * Math.PI);
		u1e.fill();
	}
}

k2v()
{
	let k7z = k4d;
	let q7i = this.z5l.q7i;
	let z3x = this.z5l.z3x;
	let y7u = this.z5l.y7u;
	let e5s = this.f7k + q7i + z3x;
	let o8d = this.x3t + q7i + z3x;
	let c0l = this.j9z - q7i - z3x;
	let g2o = this.s7w - q7i - z3x;
	this.d3x(new u4d(o8d, e5s, c0l, e5s+y7u-1), k7z);
	this.d3x(new u4d(o8d, g2o-y7u+1, c0l, g2o), k7z);
	this.d3x(new u4d(o8d, e5s, o8d+y7u-1, g2o), k7z);
	this.d3x(new u4d(c0l-y7u+1, e5s, c0l, g2o), k7z);
}

q6n()
{
	return this.x3b.getContext('2d');
}

h8h(rect, color)
{
	let u1e = this.q6n();
	u1e.beginPath();
	u1e.lineWidth = "1";
	u1e.strokeStyle = color;
	u1e.rect(rect.q5f, rect.s5d, rect.f4v(), rect.j5w());
	u1e.stroke();
}

d3x(rect, color)
{
	let u1e = this.q6n();
	u1e.fillStyle = color;
	u1e.fillRect(rect.q5f, rect.s5d, rect.f4v(), rect.j5w());
}

e5b(rect, img)
{
	let u1e = this.q6n();
	let d7c = u1e.createPattern(img, 'repeat');
	u1e.fillStyle = d7c;
	u1e.fillRect(rect.q5f, rect.s5d, rect.f4v(), rect.j5w());
}

l3w(rect, img)
{
	let u1e = this.q6n();
	let d7c = u1e.createPattern(img, 'no-repeat');
	u1e.fillStyle = d7c;
	u1e.fillRect(rect.q5f, rect.s5d, rect.f4v(), rect.j5w());
}

r1u(h5t)
{
	let g3j = l3r;
	let c4e = j5y;
	if (this.h6y)
	{
		g3j = t2u(k8e(h5t));
		c4e = l2r(k8e(h5t));
	}
	else
	{
		g3j = t2u(h5t);
		c4e = l2r(h5t);
	}
	if (startsWithDarkSquare(c4e))
	{
		g3j++;
	}
	else
	{
		g3j--;
	}
	return this.t2a(c4e, g3j);
}

z8f()
{
	for (const h5t of b6d)
	{
		this.i6b(h5t);
	}
}

i6b(h5t)
{
	this.c7p(this.r1u(h5t), h5t);
}

c7p(rect, h5t)
{
	let m0v = this.b9j;
	if (this.k0g)
	{
		this.m5c(rect, this.y8v);
		return;
	}
	if (!m0v)
	{
		this.m5c(rect, this.y8v);
		return;
	}

	let i9a = m0v.width;
	let n5a = m0v.height;
	let s7n = this.z5l.x2m;
	if (i9a < s7n || n5a < s7n)
	{
		this.l3w(rect, m0v);
		return;
	}

	let s9u = Math.trunc(i9a / this.z5l.x2m);
	let r5b = Math.trunc(n5a / this.z5l.x2m);
	if (s9u == 0)
	{
		s9u = 1;
	}
	if (r5b == 0)
	{
		r5b = 1;
	}

	let k8c = Math.trunc((h5t) / s9u);
	let d7o = (h5t) % s9u;
	let y = Math.trunc(k8c / r5b);
	k8c = k8c % r5b;

  let w8c = new u4d();
	w8c.q5f = d7o * this.z5l.x2m;
	w8c.s5d = k8c * this.z5l.x2m;
	w8c.r7g = (d7o + 1) * this.z5l.x2m - 1;
	w8c.d7v = (k8c + 1) * this.z5l.x2m - 1;
	let u1e = this.q6n();
	k4o(u1e, rect, m0v, w8c);
}

w9z(h5t)
{
	let g3j = l3r;
	let c4e = j5y;
	if (this.h6y)
	{
		g3j = t2u(k8e(h5t));
		c4e = l2r(k8e(h5t));
	}
	else
	{
		g3j = t2u(h5t);
		c4e = l2r(h5t);
	}
	return this.t2a(c4e, g3j);
}

h9e()
{
	for (const h5t of b6d)
	{
		this.p0r(h5t);
	}
}

p0r(h5t)
{
	this.i6d(this.w9z(h5t), h5t);
}

i6d(rect, h5t)
{
	let m0v = this.t0x;
	if (this.a6h)
	{
		this.m5c(rect, this.u1y);
		return;
	}
	if (!m0v)
	{
		this.m5c(rect, this.u1y);
		return;
	}

	let i9a = m0v.width;
	let n5a = m0v.height;
	let s7n = this.z5l.x2m;
	if (i9a < s7n || n5a < s7n)
	{
		this.l3w(rect, m0v);
		return;
	}

	let s9u = Math.trunc(i9a / this.z5l.x2m);
	let r5b = Math.trunc(n5a / this.z5l.x2m);
	if (s9u == 0)
	{
		s9u = 1;
	}
	if (r5b == 0)
	{
		r5b = 1;
	}

	let k8c = Math.trunc((h5t) / s9u);
	let d7o = (h5t) % s9u;
	let y = Math.trunc(k8c / r5b);
	k8c = k8c % r5b;

  let w8c = new u4d();
	w8c.q5f = d7o * this.z5l.x2m;
	w8c.s5d = k8c * this.z5l.x2m;
	w8c.r7g = (d7o + 1) * this.z5l.x2m - 1;
	w8c.d7v = (k8c + 1) * this.z5l.x2m - 1;
	let u1e = this.q6n();
	k4o(u1e, rect, m0v, w8c);
}

t2a(c4e, g3j)
{
	let q7i = this.z5l.q7i;
	let z3x = this.z5l.z3x;
	let y7u = this.z5l.y7u;
	let x2m = this.z5l.x2m;
	let rect = new u4d();
	rect.q5f = this.x3t + q7i + z3x +	y7u + (g3j) * x2m;
	rect.r7g = rect.q5f + x2m - 1;
	rect.s5d = this.f7k + q7i + z3x +	y7u + (c4f - c4e - 1) * x2m;
	rect.d7v = rect.s5d + x2m - 1;
	return rect;
}

m6w(h5t)
{
	let g3j = l3r;
	let c4e = j5y;
	if (this.h6y)
	{
		g3j = t2u(k8e(h5t));
		c4e = l2r(k8e(h5t));
	}
	else
	{
		g3j = t2u(h5t);
		c4e = l2r(h5t);
	}
	return this.t2a(c4e, g3j);
}

h5p()
{
	for (const h5t of b6d)
	{
		this.o6w(h5t);
	}
}

o6w(h5t)
{
	this.j9o(this.m6w(h5t), h5t);
}

j9o(rect, h5t)
{
	let q7b = n4n(h5t);
	let m0v = this.b9j;
	if (q7b)
	{
		m0v = this.t0x;
	}
	if (q7b)
	{
		if (this.a6h)
		{
			this.m5c(rect, this.u1y);
			return;
		}
		if (!m0v)
		{
			this.m5c(rect, this.u1y);
			return;
		}
	}
	else
	{
		if (this.k0g)
		{
			this.m5c(rect, this.y8v);
			return;
		}
		if (!m0v)
		{
			this.m5c(rect, this.y8v);
			return;
		}
	}

 	let i9a = m0v.width;
	let n5a = m0v.height;
	let s7n = this.z5l.x2m;
	if (i9a < s7n || n5a < s7n)
	{
		this.l3w(rect, m0v);
		return;
	}
	let s9u = Math.trunc(i9a / this.z5l.x2m);
	let r5b = Math.trunc(n5a / this.z5l.x2m);
	if (s9u == 0)
	{
		s9u = 1;
	}
	if (r5b == 0)
	{
		r5b = 1;
	}

	let k8c = Math.trunc((h5t) / s9u);
	let d7o = (h5t) % s9u;
	let y = Math.trunc(k8c / r5b);
	k8c = k8c % r5b;

  let w8c = new u4d();
	w8c.q5f = d7o * this.z5l.x2m;
	w8c.s5d = k8c * this.z5l.x2m;
	w8c.r7g = (d7o + 1) * this.z5l.x2m - 1;
	w8c.d7v = (k8c + 1) * this.z5l.x2m - 1;
	let u1e = this.q6n();
	k4o(u1e, rect, m0v, w8c);
}

m5c(rect, color)
{
	this.d3x(rect, color);
}

q7d()
{
	for (const h5t of b6d)
	{
		this.z7r(h5t);
	}
}

b7o(a7j, g5w, g9z)
{
	this.p0d = a7j;
	this.e6b = g5w;
	this.i3h = g9z;

	this.l7l.length = 0;
 	let r4n = this.m6w(a7j);
  let y7b = this.m6w(g5w);
	let m9x = this.z5l.x2m;

	let i1x = 32;
	if (m9x < 32)
	{
		i1x = m9x;
	}

  
	if (false)
	{
    
    
		let w3v = new d0k(r4n.q5f + m9x / 2, r4n.s5d + m9x / 2);
		let y5s = new d0k(y7b.q5f + m9x / 2, y7b.s5d + m9x / 2);
		let e1f = Math.abs(w3v.X - y5s.X);
		let j2t = Math.abs(w3v.Y - y5s.Y);
		let k5o = Math.atan2(y5s.X - w3v.X, w3v.Y - y5s.Y);
		let h1q = Math.sqrt(e1f*e1f + j2t*j2t) / 2;
		y5s.X = w3v.X + h1q * 2;
		y5s.Y = w3v.Y;
		let t5r = new d0k(w3v.X + h1q, w3v.Y);
		let c9p = Math.PI / i1x;
		let g4e = m9x * 0.40;
		let k9g = Math.PI;
		let z2d = (y7b.q5f > r4n.q5f && y7b.s5d < r4n.s5d) ||
			(y7b.q5f < r4n.q5f && y7b.s5d > r4n.s5d);
		for (let i = 1; i < i1x; i++)
		{
			let h8h = new u4d();
			if (z2d)
			{
				k9g -= c9p;
			}
			else
			{
				k9g += c9p;
			}
			let q9s = Math.cos(k9g);
			let t0e = Math.sin(k9g);
			let n2o = new d0k(t5r.X + h1q * q9s,
				t5r.Y - g4e * t0e);
			this.l7l.push(q9u(n2o, w3v, k5o - Math.PI / 2));
		}
	}
	else
	{
		let w3v = new d0k(r4n.q5f + m9x / 2, r4n.s5d + m9x / 2);
		let y5s = new d0k(y7b.q5f + m9x / 2, y7b.s5d + m9x / 2);
		let l2c = (y5s.X - w3v.X) / i1x;
		let w1k = (y5s.Y - w3v.Y) / i1x;
		for (let i = 1; i < i1x; i++)
		{
			this.l7l.push(new d0k(w3v.X + i * l2c, w3v.Y + i * w1k));
		}
	}
	this.l7l.push(new d0k(y7b.q5f + m9x / 2, y7b.s5d + m9x / 2));
	this.p8k = 0;
}

l6d()
{
	this.p0d = l6i;
	this.e6b = l6i;
}

f0i()
{
	this.z8j(); 

	let j0l = this.l7l[this.p8k];
	let x2m = this.z5l.x2m;
	let h8h = new u4d();
	h8h.q5f = j0l.X - x2m / 2;
	h8h.s5d = j0l.Y - x2m / 2;
	h8h.t2b(x2m);
	h8h.o0c(x2m);
 	let u1e = this.q6n();
	v6b(u1e, h8h, this.h4h.q2p(this.p0d));

	this.p8k++;
	if (this.p8k >= this.l7l.length)
	{
		let c1b = this.h4h.q2p(this.p0d);
		this.h4h.b6m(this.p0d, x2v.v9y);
		this.h4h.b6m(this.e6b, c1b);
		this.l6d();
		return true;
	}
	else
	{
		return false;
	}
}

z7r(h5t)
{
	if (h5t == this.p0d)
	{
		return;
	}
	let p3c = this.m6w(h5t);
 	let u1e = this.q6n();
	v6b(u1e, p3c, this.h4h.q2p(h5t));
}

x7p()
{
	if (!this.z5l.x4c)
	{
    return;
  }

 	let y7u = this.z5l.y7u;
	let q7i = this.z5l.q7i;
	let z3x = this.z5l.z3x;
	let x2m = this.z5l.x2m;

	let w4r = new u4d();
	w4r.q5f = this.x3t + q7i + z3x;
	w4r.s5d = this.f7k + q7i + z3x;
	w4r.t2b(c4f * x2m + 2 * y7u);
	w4r.o0c(c4f * x2m + 2 * y7u);

 	let u1e = this.q6n();
  let q0t = u0f(u1e, z3x-6);

  x7p(u1e,
    w4r,
    this.z5l,
    q0t,
    l8m.x9d,
    this.a0m,
    this.h6y,
    z3x);
}

s2i(h5t, color)
{
	let rect = this.m6w(h5t);
	let u1e = this.q6n();
  u1e.save();
  u1e.globalAlpha = 0.25; 
	u1e.fillStyle = color;
	u1e.fillRect(rect.q5f, rect.s5d, rect.f4v(), rect.j5w());
  u1e.restore();
}

h9j()
{
	if (this.u7h)
	{
		if (!this.j7x.v9y())
		{
      let color = "#800080"; 
			this.s2i(this.j7x.a7j, color);
			this.s2i(this.j7x.g5w, color);
		}
  }
}

x8h()
{
	for (const n2g of this.l2s.t0j)
	{
		this.h7b(n2g);
	}
}

h7b(n2g)
{
	let rect = this.m6w(n2g.h5t);
	let a6k = '';
	switch (n2g.type)
	{
		case c7m.p2v:
			a6k = i1a;
			break;
		case c7m.y0a:
			a6k = p9c;
			break;
		case c7m.m9g:
			a6k = c2q;
			break;
	}
	let m9x = this.x2z / 10;
	let u1e = this.q6n();
  /* dit is met roundrect
  j6a(rect, 5);
	u1e.lineWidth = m9x / 15;
	u1e.strokeStyle = a6k;
	t4a(u1e, rect.q5f, rect.s5d, rect.f4v(), rect.j5w(), 10);
  */
  
  u1e.save();
  u1e.globalAlpha = 0.7; 
	u1e.fillStyle = a6k;
	u1e.fillRect(rect.q5f, rect.s5d, rect.f4v(), rect.j5w());
  u1e.restore();
}

u7n()
{
	for (const j3b of this.m3d.i3m)
	{
		this.r7x(j3b);
	}
}

r7x(j3b)
{
	let a7j = j3b.a7j;
	let g5w = j3b.g5w;
	let r6n = j3b.type;

	let r4n = this.m6w(a7j);
	let y7b = this.m6w(g5w);

	let s4n = r4n.q5f + r4n.f4v()/2;
	let q3k = r4n.s5d + r4n.j5w()/2;
	let c5t = new d0k(s4n, q3k);

	let t8y = y7b.q5f + y7b.f4v()/2;
	let g7n = y7b.s5d + y7b.j5w()/2;

	let v6z = (t8y-s4n)*(t8y-s4n) + (g7n-q3k)*(g7n-q3k);
	let e6v = Math.sqrt(v6z);

	let d8i = (this.h4h.b0e(a7j)) ? 0 : r4n.f4v() / 4;
	e6v -= d8i;
	let a1y = (this.h4h.b0e(g5w)) ? 0 : r4n.f4v() / 4;
	e6v -= a1y;

	let u7w = 5;
	let i8b = 5 * u7w;
	let y1u = 7 * u7w;

	let r6t = s4n + d8i;
	let r3y = q3k;

	let a6i = r6t + e6v - 1;
	let z4e = q3k;

	let s8d = a6i - y1u;
	let o6q = q3k;

	let k5o = Math.atan2((t8y - s4n), (q3k - g7n));

  
	let f7n = [];
  let g9u = 10; 
	f7n.push(new d0k(s8d, o6q));
	f7n.push(new d0k(s8d - g9u, o6q - i8b));
	f7n.push(new d0k(a6i, z4e));
	f7n.push(new d0k(s8d - g9u, o6q + i8b));
	f7n.push(new d0k(s8d, z4e));
	let t6e = [];
	for (let i = 0; i <= 4; i++)
	{
		t6e.push(q9u(f7n[i], c5t, k5o - Math.PI / 2));
	}

	let u1e = this.q6n();
  u1e.save();
  u1e.globalAlpha = 0.7;

 	let h1d = '';
	switch (r6n)
	{
		case c3j.s3e:
			h1d = y0x;
			break;
		case c3j.n8h:
			h1d = d1c;
			break;
		case c3j.a4f:
			h1d = h8r;
			break;
	}
 	u1e.fillStyle = h1d;
  u1e.strokeStyle = h1d;
	u1e.beginPath();
	u1e.moveTo(t6e[0].X, t6e[0].Y);
	for (let i = 1; i <= 4; i++)
	{
		u1e.lineTo(t6e[i].X, t6e[i].Y);
	}
	u1e.closePath();
	u1e.fill();

  
	f7n.length = 0;
	f7n.push(new d0k(r6t, r3y - u7w));
	f7n.push(new d0k(r6t, r3y + u7w));
	f7n.push(new d0k(s8d, r3y + u7w));
	f7n.push(new d0k(s8d, r3y - u7w));
	t6e.length = 0;
	for (let i = 0; i <= 3; i++)
	{
		t6e.push(q9u(f7n[i], c5t, k5o - Math.PI / 2));
	}
	if (s4n == t8y)
	{
		if (t6e[0].Y != t6e[1].Y)
		{
			t6e[0].Y = t6e[1].Y;
		}
		if (t6e[2].Y != t6e[3].Y)
		{
			t6e[2].Y = t6e[3].Y;
		}
	}
	if (q3k == g7n)
	{
		if (t6e[0].X != t6e[1].X)
		{
			t6e[0].X = t6e[1].X;
		}
		if (t6e[2].X != t6e[3].X)
		{
			t6e[2].X = t6e[3].X;
		}
	}
	u1e.beginPath();
	u1e.moveTo(t6e[0].X, t6e[0].Y);
	for (let i = 1; i <= 3; i++)
	{
		u1e.lineTo(t6e[i].X, t6e[i].Y);
	}
	u1e.closePath();
	u1e.fill();
  u1e.restore();
}

p9i()
{
	let q7i = this.z5l.q7i;
	let z3x = this.z5l.z3x;
	let m9x = this.z5l.x2m;
	let rect = new u4d();
	rect.q5f = this.j9z - q7i - z3x + 1;
	rect.s5d = this.s7w - q7i - z3x;
	rect.d7v = this.s7w;
	rect.r7g = this.j9z - 1;
	return rect;
}

}

const o6j = 14;

const k5t =
{
	f5u : 0
};

const l6y =
{
	f5u : 0
};

const p9u =
{
	c2f : 0,
	q5a : 1,
};

const l8m =
{
	e3c: 0,
	y2x: 1,
	x9d: 2,
	d3d: 3,
	x5m: 4,
};

class j6p
{

constructor()
{
	this.l9i = k5t.f5u;
	this.d7w = 1; 
	this.q7i = 0;
	this.z3x = o6j;
	this.y7u = 2;
	this.x2m = 32;
	this.d0x = 20;
	this.x4c = true;
	this.m6h = p9u.q5a;
	this.d2s = true;
}

a0s()
{
	let z7g = new j6p();
	z7g.l9i = this.l9i;
	z7g.d7w = this.d7w;
	z7g.q7i = this.q7i;
	z7g.z3x = this.z3x;
	z7g.y7u = this.y7u;
	z7g.x2m = this.x2m;
	z7g.d0x = this.d0x;
	z7g.x4c = this.x4c;
	z7g.m6h = this.m6h;
	z7g.d2s = this.d2s;
	return z7g;
}

x2z()
{
	return this.x2m * c4f + 2 * (this.q7i + this.z3x + this.y7u);
}

z8s(rect)
{
	let w = rect.f4v();
	let h = rect.j5w();
	let h9k = 0;
	if (w < h)
	{
		h9k = w;
	}
	else
	{
		h9k = h;
	}
	if (this.z3x)
	{
		for (this.x2m = 2; this.x2m < 1000; this.x2m++)
		{
			this.z3x = (this.x2m / 100) * this.d0x;
			if (this.z3x < o6j)
			{
				this.z3x = o6j;
			}
			let size = 2 * (this.q7i + this.z3x + this.y7u) + c4f * this.x2m;
			if (size > h9k)
			{
				break;
			}
		}
		this.x2m--;
		this.z3x = (this.x2m / 100) * this.d0x;
		if (this.z3x < o6j)
		{
			this.z3x = o6j;
		}
	}
	else
	{
		for (this.x2m = 2; this.x2m < 1000; this.x2m++)
		{
			let size = 2 * (this.q7i + this.y7u) + c4f * this.x2m;
			if (size > h9k)
			{
				break;
			}
		}
		this.x2m--;
	}
	return this.x2z();
}

}


class i6u
{

constructor()
{
	this.o0n = new g8w();
	this.a7e = new g8w();
	this.m3d = new s7c();
	this.l2s = new x6l();
	this.n9f = new j0n();
 	this.m1m = new j0n();
	this.g6w = 0;
	this.e0w = false;
	this.p0m = false;
	this.p7w = 0;
	this.b8l = 0;
	this.e1i = '';
}

}

const o5l =
[
	"#F7C42B",  
	"#F327F3",  
	"#26BCBC",  
	"#2727F3",  
	"#298F8F",  
	"#94612A",  
	"#8D2727",  
	"#F4F428",  
	"#F22626",  
	"#F3F3F3",  
	"#8F298F",  
	"#28F428",  
	"#288E28",  
	"#272727",  
	"#919191",  
	"#28F4F4"   
];

function j6a(rect, o3n)
{
	rect.q5f += o3n;
	rect.r7g -= o3n;
	if (rect.q5f > rect.r7g)
	{
		rect.q5f = rect.r7g;
	}
	rect.s5d += o3n;
	rect.d7v -= o3n;
	if (rect.s5d > rect.d7v)
	{
		rect.s5d = rect.d7v;
	}
}

function k4o(z4u, q7h, g9g, w8c)
{
	z4u.drawImage(g9g, w8c.q5f, w8c.s5d, w8c.f4v(), w8c.j5w(),
		q7h.q5f, q7h.s5d, q7h.f4v(), q7h.j5w());
}

function t4a(u1e, x, y, width, height, l2z)
{
	u1e.beginPath();
	u1e.moveTo(x, y + l2z);
	u1e.lineTo(x, y + height - l2z);
	u1e.arcTo(x, y + height, x + l2z, y + height, l2z);
	u1e.lineTo(x + width - l2z, y + height);
	u1e.arcTo(x + width, y + height, x + width, y + height-l2z, l2z);
	u1e.lineTo(x + width, y + l2z);
	u1e.arcTo(x + width, y, x + width - l2z, y, l2z);
	u1e.lineTo(x + l2z, y);
	u1e.arcTo(x, y, x, y + l2z, l2z);
	u1e.stroke();
}

function q9u(z7q, c5t, q7n)
{
	let p = new d0k();
	p.X = (Math.cos(q7n) * (z7q.X - c5t.X)) - (Math.sin(q7n) * (z7q.Y - c5t.Y)) + c5t.X;
	p.Y = (Math.sin(q7n) * (z7q.X - c5t.X)) + (Math.cos(q7n) * (z7q.Y - c5t.Y)) + c5t.Y;
	return p;
}

function m0t(u1e, rect, w7u)
{
	let left = rect.q5f;
	let top = rect.s5d;
	let w2o = rect.r7g;
	let g5o = rect.d7v;

	u1e.fillStyle = k3c;
	u1e.fillRect(rect.q5f, rect.s5d, rect.f4v(), rect.j5w());

	if (w7u.c2f())
	{
		return;
	}

	let f6n = w7u.x4l();
	let y8e = 0;
	if (f6n > 8)
	{
		y8e = (w2o - left) / 8;
	}
	else
	{
		y8e = (w2o - left) / f6n;
	}
	let t5h = left - y8e;
	let e7x = top;
	let j4t = t5h + y8e;
	let r7n = 0;
	if (f6n > 8)
	{
		r7n = (g5o - top + 1) / 2;
	}
	else
	{
		r7n = g5o - top + 1;
	}

	let p5u = top + r7n - 1;
	let t2f = 0;
	for (let i = 0; i < 16; i++)
	{
		if (w7u.s2z(i))
		{
			t5h += y8e;
			j4t += y8e;
			if (t2f == 7 || t2f == 15 ||
				(t2f < 8 && t2f == f6n - 1))
			{
				j4t = w2o;
			}
			if (t2f == 8)
			{
				t5h = left;
				j4t = t5h + y8e;
				e7x = top + r7n;
				p5u = g5o;
			}
			let y1y = new u4d(t5h, e7x, j4t, p5u);
			u1e.fillStyle = o5l[i];
			u1e.fillRect(y1y.q5f, y1y.s5d, y1y.f4v(), y1y.j5w());
			t2f++;
		}
	}
}




class i7n
{

constructor()
{
	this.k6k = '';
	this.m0v = null;
}

}

class l3a
{

constructor()
{
	this.s6h = [];
}

add(img)
{
	let i8a = new i7n();
	i8a.k6k = img.id;
	i8a.m0v = img;
	this.s6h.push(i8a);
}

m0v(k6k)
{
	for (const i2w of this.s6h)
	{
		if (i2w.k6k.toLowerCase() == k6k.toLowerCase())
		{
			return i2w.m0v;
		}
	}
	return null;
}

}
const m0o 				= "#00FFFF";
const k4d 			= "#000000";
const a2u 				= "#0000FF";
const u8e 			= "#FFFBF0";
const k8r 			= "#808080";
const g5q 		= "#FF00FF";
const t8e 				= "#808080";
const j8c 			= "#008000";
const w2y 				= "#00FF00";
const s3s 			= "#C0C0C0";
const i8y 			= "#800000";
const c9b 		= "#A0A0A4";
const q6z 	= "#C0DCC0";
const z0k 				= "#000080";
const x9b 			= "#808000";
const o5b 			= "#800080";
const k3c 				= "#FF0000";
const g6s 			= "#C0C0C0";
const n7y 		= "#A6CAF0";
const x3x 				= "#008000";
const o4h 			= "#FFFFFF";
const r3m 			= "#FFFF00";

class d0k
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

a0s()
{
	let g5p = new d0k();
	g5p.q5f = this.X;
	g5p.s5d = this.Y;
	return g5p;
}

}

class u4d
{

constructor(left, top, w2o, g5o)
{
	if (left === undefined)
	{
		this.q5f = 0;
		this.s5d = 0;
		this.r7g = 0;
		this.d7v = 0;
	}
	else
	{
		this.q5f = left;
		this.s5d = top;
		this.r7g = w2o;
		this.d7v = g5o;
	}
}

a0s()
{
	let d1j = new u4d();
	d1j.q5f = this.q5f;
	d1j.s5d = this.s5d;
	d1j.r7g = this.r7g;
	d1j.d7v = this.d7v;
	return d1j;
}

f4v()
{
	return this.r7g - this.q5f + 1;
}

z7h()
{
	return this.r7g - this.q5f + 1;
}

t2b(width)
{
	this.r7g = this.q5f + width - 1;
}

j5w()
{
	return this.d7v - this.s5d + 1;
}

q5w()
{
	return this.d7v - this.s5d + 1;
}

o0c(height)
{
	this.d7v = this.s5d + height - 1;
}

j3a()
{
	this.q5f++;
	this.s5d++;
	this.r7g--;
	this.d7v--;
}

l6g(j0l)
{
	return j0l.X >= this.q5f &&
		j0l.X <= this.r7g &&
		j0l.Y >= this.s5d &&
		j0l.Y <= this.d7v;
}


}

class b2l
{

constructor(s0u)
{
	this.s0u = s0u;
	this.q8u = new g8w();
	this.l5d = new s0a();
	this.r5n = null;
	this.z5l = new j6p();
	this.w6q = true;
}

s0f()
{
	let y7c = window.devicePixelRatio;

	this.l5d.x3b.width = this.r5n.clientWidth * y7c;
	this.l5d.x3b.height = this.r5n.clientHeight * y7c;

	let x1r = 32 * y7c;
	let d6w = 32 * y7c;
	let p2r = this.l5d.x3b.width - x1r;
	let h7z = this.l5d.x3b.height - d6w;
	let q3r = h7z < p2r ? h7z : p2r;
	if (q3r < 128)
	{
		q3r = 128;
	}
	let rect = new u4d();
	rect.q5f = 0;
	rect.s5d = 0;
	rect.t2b(q3r);
	rect.o0c(q3r);
	this.z5l.z3x = q3r * 0.02;
  if (this.z5l.z3x < o6j)
  {
    this.z5l.z3x = o6j;
  }
	q3r = this.z5l.z8s(rect);
 	this.l5d.w4g(this.z5l);
	this.l5d.z8j();
}

f6e()
{
	this.l5d.f6e();
	this.l5d.z8j();
}

l3j()
{
	this.z5l.x4c = !this.z5l.x4c;
	this.l5d.w4g(this.z5l);
	this.l5d.z8j();
}

j3z()
{
	this.l5d.w4g(this.z5l);
	this.l5d.z8j();
}

g0r(n5g)
{
	this.q8u = n5g.a7e.a0s();
	this.l5d.h1z(this.q8u);
	this.l5d.g5c(n5g.m3d);
	this.l5d.l6w(n5g.l2s);
  
 	this.l5d.c4p(n5g.m1m);
	this.l5d.z8j();

	if (this.w6q)
	{
		w1d('playBackward' + this.s0u, n5g.e0w);
		w1d('goToBegin'+ this.s0u, n5g.e0w);
		w1d('playForward' + this.s0u, n5g.p0m);
		w1d('goToEnd' + this.s0u, n5g.p0m);
		w1d('autoPlay' + this.s0u, n5g.p0m);
	}
	else
	{
		w1d('goToBegin' + this.s0u, n5g.e0w);
		w1d('goToEnd' + this.s0u, n5g.p0m);
	}
}

h1z(h4h)
{
	let n5g = new i6u();
	n5g.a7e = h4h.a0s();
	this.h1z(n5g);
}

w4g(z5l)
{
  this.z5l = z5l.a0s();
}

}

const o3l =
{
	x7m       : 0,
	w4y        : 1,
};

class m1c
{

constructor(s0u)
{
	this.s0u = s0u;
 	this.z9k = new c8l();
 	this.p6q = new b4c(s0u);
  this.p6q.t8b = false;
  this.p6q.x7z = true;
  this.p6q.x3p = true;
  this.p6q.l7v = false;
  this.f1c = null;
  this.h5y = new e5o();
  this.g8f = new j6w();
 	this.t1c = new h2g();
	this.h0q = new g8w();
	this.l5k = new g8w();
	this.v5q = 0;
	this.g6q = [];
	this.u0j = false;
 	this.r5r = false;
 	this.a2e = false;
 	this.w3c = false;
  this.y6n = o3l.x7m;
  this.c3z = document.getElementById("threat"+this.s0u);
 	this.c3z.onclick = this.o5x.bind(this);
  this.q2j();
  this.n3y = document.getElementById("engineSettings"+this.s0u);
}

x4a(t1e)
{
  this.f1c = new Engine();
  this.f1c.z3f = (event) => {
    this.y7j(event);
  };
  this.f1c.l8a(t1e);
  this.f1c.q8p();
}

h2l()
{
	this.h5y = this.f1c.t1e();
	this.t1c = new h2g();
  /*
	showName();
	MovePanel->Caption = "";
	ScorePanel->Caption = "";
	DepthPanel->Caption = "";
	NodesPanel->Caption = "";
  */
	this.z9k.h1z(this.t1c.h4h,
    this.t1c.v0l);
	this.g9a();
 	this.x5x();
  this.q2j();
}

h1z(o0n, d4a, m4t, i7t)
{
	this.l5k = o0n.a0s();
	this.v5q = d4a;
	this.g6q = m4t.slice(); 
	this.u0j = i7t;
	this.x5x();
}

x5x()
{
	if (!this.f1c) return;
	if (this.r5r) return;

	if (this.a2e)
	{
		let m4t = new c8l();
		m4t.h1z(this.l5k, this.v5q);
		let x8m = m4t.x8m();
		m4t.h6c(x8m, this.g6q);
		let j3k = m4t.f0c();
		let u6t = m4t.g6w(m4t.k7y());
		if (j3k.n5e())
		{
			u6t++;
		}
		let a2h = j3k;
		a2h.p7x();
		this.g8f = new j6w();
    this.g8f.m4t.h1z(a2h, u6t);
		this.h0q = a2h;
  }
  else
  {
 		this.g8f.m4t.h1z(this.l5k, this.v5q);
		let x8m = this.g8f.m4t.x8m();
		this.g8f.m4t.h6c(x8m, this.g6q);
		this.h0q = this.g8f.m4t.f0c();
  }
  if (h3c === 10) 
  {
    this.g8f.u5f = z6a;
  }
  else
  {
    this.g8f.u5f = a3q(h3c);
  }

  this.f1c.f8g();
	this.w3c = false;
  let m4t = m9d(this.h0q);
  if (m4t.length == 0)
  {
  	this.f1c.j5j(this.g8f);
		return;
  }
  else
  {
  	this.f1c.j5j(this.g8f);
		return;
  }
}

f5y()
{
	this.t1c = this.f1c.e0q();
  /*
	showScore();
	showDepth();
	showNodes();
	showCM();
  */
	this.z9k.h1z(this.t1c.h4h,
    this.t1c.v0l);
	this.g9a();
}

b4q()
{
	this.t1c = this.f1c.e0q();
	
}


o9z()
{
	this.t1c = this.f1c.e0q();
  
	
	
	
  
	this.g9a();
}

g9a()
{
	let j7z = this.t1c.y6y.m4t.a0s();
  j7z.h1z(this.t1c.h4h, this.t1c.v0l);

  if (this.t1c.l1s)
  {
    for (let k1h of this.t1c.lines)
    {
      let m4t = k1h.m4t.g9x();
      let s0o = j7z.x8m();
      let v0l = 0;
      for (let x8g of m4t)
      {
        if (v0l == 0)
        {
					let k0m = k1h.o8c() +
						"/" + k1h.f2e;
					x8g.z0h(k0m);
        }
        j7z.v9t(s0o, x8g);
        v0l++;
      }
    }
  }
  else
  {
    if (this.t1c.lines.length !== 0)
    {
      let k1h = this.t1c.lines[this.t1c.lines.length - 1];
      let m4t = k1h.m4t.g9x();
      let s0o = j7z.x8m();
      let v0l = 0;
      for (let x8g of m4t)
      {
				if (v0l == 0)
				{
					let k0m = k1h.o8c() +
						"/" + k1h.f2e;
					x8g.z0h(k0m);
				}
        j7z.v9t(s0o, x8g);
        v0l++;
      }
    }
  }
  this.z9k = j7z.a0s();
  this.p6q.l1s = this.t1c.l1s;
  this.p6q.z5p(this.z9k, 0);
}

y7j(event)
{
  const {cmd, data} = event;
  if (cmd === 'ready')
  {
    this.h2l()
  }
  else if (cmd === 'go')
  {
    this.f5y()
  }
  else if (cmd === 'cm')
  {
    this.b4q();
  }
  else if (cmd === 'pv')
  {
    this.o9z();
  }
}

a1z()
{
	if (this.f1c)
	{
    this.f1c.z3f = null;
    this.f1c.y9t();
		this.f1c = null;
		this.t1c = new h2g();
  	this.z9k.h1z(this.t1c.h4h,
      this.t1c.v0l);
  	this.g9a();
    this.a2e = false;
    this.q2j();
  }
}

d9x()
{
	return (this.f1c != null);
}

u5r()
{
  return (this.engineMode === o3l.w4y);
}

o5x()
{
	if (this.f1c && !this.u5r())
	{
		this.a2e = !this.a2e;
		this.q2j();
		this.x5x();
	}
}

q2j()
{
	if (this.f1c)
	{
    this.c3z.disabled = false;
    this.c3z.classList.remove('threat-inactive');
		if (this.a2e)
		{
      this.c3z.classList.remove('threat-off');
      this.c3z.classList.add('threat-on');
		}
		else
		{
      this.c3z.classList.remove('threat-on');
      this.c3z.classList.add('threat-off');
		}
	}
	else
	{
    this.c3z.disabled = true;
    this.c3z.classList.add('threat-inactive');
    this.c3z.classList.remove('threat-on');
    this.c3z.classList.add('threat-off');
	}
}

}

class m3k
{

constructor(s0u)
{
	this.s0u = s0u;
  this.e8v = null;
	this.w5u = new b2s();
}

l8h(w5u)
{
	this.w5u = w5u.a0s();
	this.a6d();
}

a6d()
{
	let m6d = this.w5u.h9i.c9x.o1q();
	let d4q = this.w5u.d7t.c9x.o1q();

	let e8i = '';
	if (m6d.length && this.w5u.h9i.s7m)
	{
		e8i = this.w5u.h9i.s7m.toString();
	}
	let s4i = '';
	if (m6d.length && this.w5u.h9i.d7u.length)
	{
		s4i = this.w5u.h9i.d7u.toString();
	}

	let g4q = '';
	if (d4q.length && this.w5u.d7t.s7m)
	{
		g4q = this.w5u.d7t.s7m.toString();
	}
	let b3r = '';
	if (d4q.length && this.w5u.d7t.d7u.length)
	{
		b3r = this.w5u.d7t.d7u.toString();
	}

	let n8e = this.w5u.h9i.c9x.u2w(1);
	let m3f = this.w5u.d7t.c9x.u2w(1);

	let r7a = '';
	let q0o = '';
	if (!this.w5u.h9i.h7h.v9y() &&
		!this.w5u.d7t.h7h.v9y())
	{
		r7a = this.w5u.h9i.h7h.t0g();
		q0o = this.w5u.d7t.h7h.t0g();
	}

	let v3d = r9j(this.w5u.d6s);
	let r9l = this.w5u.r9l.d7u;
	if (!this.w5u.r9l.m1d.v9y())
	{
		r9l += " ";
		r9l += this.w5u.r9l.m1d.b0d.toString();
	}
	let e3o = '';
	if (!this.w5u.d1a.v9y())
	{
		e3o = this.w5u.d1a.toString("dd-mm-yyyy");
	}
	let s9p = '';
	if (!this.w5u.s9p.v9y())
	{
		s9p = '</br>' + '[' + this.w5u.s9p.k6k + ']';
	}

	let b0a = document.getElementById("nota-container"+this.s0u);
	let b6b = b0a.clientHeight;
	let j8a = 200;

  let index = this.s0u;
  let u6z = this.w5u.r9l.u6z;

	let a3z = true;
	if (this.e8v.clientWidth >= 374 && b6b >= j8a)
	{
    let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable scroll\">";
    s +=      "<tr>";
    s +=        "<td class=\"playerPortrait\" colspan=\"3\" rowspan=\"2\">";
    
    s += 				"</td>";
		s +=        "<td class=\"playerWhite\" colspan=\"8\">";
    s +=          "<span class=\"player\">" + m6d + "</span>";
    s += 					"<span class=\"rating\">" + e8i + "</span>";
    s +=          "<br>";
		s += 				  "<span class=\"team\">" + r7a + "</span>";
		s +=        "</td>";
    s += 		  	"<td class=\"result\" colspan=\"2\">";
    s +=          "<span>" + v3d + "</span>";
		s +=        "</td>";
    s +=        "<td class=\"playerBlack\" colspan=\"8\">";
    s +=          "<span class=\"player\">" + d4q + "</span>";
		s +=          "<span class=\"rating\">" + g4q + "</span>";
    s +=          "<br>";
    s +=          "<span class=\"team\">" + q0o + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"playerPortrait\" colspan=\"3\" rowspan=\"2\">";
    
		s +=        "</td>";
    s +=      "</tr>";
    s +=      "<tr>";
		s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
		s +=        "</td>";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
		s +=          "<span>" + s4i + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"tournamentData\" colspan=\"12\">";
    s +=          "<span class=\"tournamentTitle\">" + r9l + "</span>";
    s +=          "<br>";
    s +=          "<span class=\"tournamentPlace\">" + u6z + "</span>";
		s +=          "<span class=\"gameDate\">" + e3o + "</span>";
    s +=          "<span class=\"annotator\">" + s9p + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "<span>" + b3r + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"flagBlack\" colspan=\"2\">";
		s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
		s +=        "</td>";
		s +=      "</tr>";
		s +=    "</table>";
		this.e8v.innerHTML = s;

		
		
		let c8c = Math.trunc(this.e8v.clientWidth / 10);
		if (c8c < 24) c8c = 24;
    
		
		
		
		
		
		
	}
	else if (this.e8v.clientWidth >= 300 && b6b >= j8a)
	{
		
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "<tr>";
    s +=        "<td class=\"playerWhite\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + n8e + "</span>";
    s +=          "<span class=\"rating\">" + e8i + "</span>";
    s +=          "<br>";
		s += 				  "<span class=\"team\">" + r7a + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"result\" colspan=\"2\">";
    s +=          "<span>" + v3d + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"playerBlack\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + m3f + "</span>";
    s +=          "<span class=\"rating\">" + g4q + "</span>";
    s +=          "<br>";
    s +=          "<span class=\"team\">" + q0o + "</span>";
		s +=        "</td>";
    s +=      "</tr>";
    s +=      "<tr>";
    s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "<span>" + s4i + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"tournamentData\" colspan=\"14\">";
    s +=          "<span class=\"tournamentTitle\">" + r9l + "</span>";
    s +=          "<span class=\"tournamentPlace\">" + "</br>" + u6z + "</span>";
    s +=          "<span class=\"gameDate\">" + e3o + "</span>";
		s +=          "<span class=\"annotator\">" + s9p + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "<span>" + b3r + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"flagBlack\" colspan=\"2\">";
    s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=      "</tr>";
    s +=    "</table>";
		this.e8v.innerHTML = s;
	}
	else if (this.e8v.clientWidth >= 280)
	{
		
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "<tr>";
    s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=        "<td class=\"playerWhite\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + n8e + "</span>";
    s +=          "<span class=\"rating\">" + e8i + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"result\" colspan=\"2\">";
    s +=          "<span>" + v3d + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"playerBlack\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + m3f + "</span>";
    s +=          "<span class=\"rating\">" + g4q + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"flagBlack\" colspan=\"2\">";
    s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=      "</tr>";
    s +=    "</table>";
		this.e8v.innerHTML = s;
	}
	else
	{
		
		a3z = false; 
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "<tr>";
    s +=        "<td class=\"playerWhite\" width=\"45%\">";
    s +=          "<span class=\"player\">" + n8e + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"result\" width=\"10%\">";
    s +=          "<span>" + v3d + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"playerBlack\" width=\"45%\">";
    s +=          "<span class=\"player\">" + m3f + "</span>";
    s +=        "</td>";
    s +=      "</tr>";
    s +=    "</table>";
		this.e8v.innerHTML = s;
	}

	if (a3z)
	{
		let q3e = 16;
		if (this.e8v.clientWidth < 400)
		{
			q3e = 16;
		}
		else if (this.e8v.clientWidth < 500)
		{
			q3e = 24;
		}
		else
		{
			q3e = 32;
		}
    if (this.w5u.h9i.h7a != y2m.c2f)
    {
  		let f0z = document.getElementById("whitePlayerNation"+this.s0u);
	  	f0z.src = "images/flags/" + q3e.toString() +"/" + e1l(this.w5u.h9i.h7a) + ".png";
		  f0z.height = q3e;
  		f0z.width = q3e;
    }
    if (this.w5u.d7t.h7a != y2m.c2f)
    {
  		let g8m = document.getElementById("blackPlayerNation"+this.s0u);
	  	g8m.src = "images/flags/" + q3e.toString() + "/" + e1l(this.w5u.d7t.h7a) + ".png";
		  g8m.height = q3e;
  		g8m.width = q3e;
    }
	}
}

}

class o0y
{

constructor(s0u)
{
	this.s0u = s0u;
	this.w5u = new b2s();
	this.q1h = new b2l(s0u);
	this.i7j = new l5s(s0u);
	this.i7j.p6q.b0q = this; 
	this.k5l = new e9p();
  this.e7g = new m1c(s0u);
}

f6e()
{
	this.q1h.f6e();
}

l3j()
{
	this.q1h.l3j();
}

j3z()
{
	this.q1h.j3z();
	this.i7j.p6q.j3z();
}

b9d(l9v, o4f, r4l, y9m)
{
	this.i0y(y9m, r4l);
}

i0y(y9m, r4l)
{
	this.w5u = y9m.s6s.a0s();
	this.l8h();
	this.i7j.p6q.z5p(y9m.m4t, r4l);
}

l8h()
{
	this.i7j.t2z.l8h(this.w5u);
}

p2d(n5g)
{
	this.q1h.g0r(n5g);
  this.q0e();
}

a9w()
{
	if (this.k5l.v0g())
	{
		this.k5l.a2r();
    this.v2x();
	}
	else
	{
		if (!this.i7j.p6q.x3o())
		{
      
			this.k5l.b0q = this; 
			this.k5l.g5h();
			this.i7j.p6q.x9v();
		}
	}
}

a3y(t1e)
{
	this.e7g.x4a(t1e);
}

t4u()
{
	this.e7g.a1z();
}

r8s()
{
	return this.e7g.d9x();
}

q0e()
{
  if (!this.k5l.v0g())
  {
    this.v2x();
  }
}

v2x()
{
	this.e7g.h1z(
		this.i7j.p6q.o0n(),
		this.i7j.p6q.d4a(),
		this.i7j.p6q.m1p(),
		this.i7j.p6q.i7t());
}

}

const c6g =
{
	c1a : 0,
	k9u : 1,
	v8s : 2,
	w7k : 3,
	n8j : 4,
 	n0j : 5,
	d6s : 6,
	m4t : 7,
	b0d : 8,
	event : 9,
	k9w : 10
};

const k6e =
{
	c2f : 0,
	c6n : 1,
	v7p : 2
};

let c5x = 0;
let q8e = 0;
let c0x = 0;
let f9j = 0;
let d6q = 0;
let z0a = 0;
let j0q = 0;
let f7p = 0;

let v7p = false;

function k7l(f, s)
{
	let f5e = f.s6s.h9i.c9x.k6k();
	let t8r = s.s6s.h9i.c9x.k6k();
	if (f5e < t8r)
	{
		return v7p ? -1 : 1;
	}
	if (f5e > t8r)
	{
		return v7p ? 1 : -1;
	}
	f5e = f.s6s.d7t.c9x.k6k();
	t8r = s.s6s.d7t.c9x.k6k();
	if (f5e < t8r)
	{
		return -1;
	}
	if (f5e > t8r)
	{
		return 1;
	}
	return 0;
}

function v9e(f, s)
{
	let f5e = f.s6s.d7t.c9x.k6k();
	let t8r = s.s6s.d7t.c9x.k6k();
	if (f5e < t8r)
	{
		return v7p ? -1 : 1;
	}
	if (f5e > t8r)
	{
		return v7p ? 1 : -1;
	}
	f5e = f.s6s.h9i.c9x.k6k();
	t8r = s.s6s.h9i.c9x.k6k();
	if (f5e < t8r)
	{
		return -1;
	}
	if (f5e > t8r)
	{
		return 1;
	}
	return 0;
}

function y0q(f, s)
{
	let c9e = f.s6s.h9i.s7m - s.s6s.h9i.s7m;
	if (v7p)
	{
		c9e = -c9e;
	}
	if (c9e < 0) return -1;
	if (c9e > 0) return 1;
	c9e = f.s6s.d7t.s7m - s.s6s.d7t.s7m;
	if (v7p)
	{
		c9e = -c9e;
	}
	if (c9e < 0) return -1;
	if (c9e > 0) return 1;
	return k7l(f, s);
}

function o0o(f, s)
{
	let c9e = f.s6s.d7t.s7m - s.s6s.d7t.s7m;
	if (v7p)
	{
		c9e = -c9e;
	}
	if (c9e < 0) return -1;
	if (c9e > 0) return 1;
	c9e = f.s6s.h9i.s7m - s.s6s.h9i.s7m;
	if (v7p)
	{
		c9e = -c9e;
	}
	if (c9e < 0) return -1;
	if (c9e > 0) return 1;
	return k7l(f, s);
}

function u5j(f, s)
{
	let c9e = f.s6s.h9i.h7a - s.s6s.h9i.h7a;
	if (v7p)
	{
		c9e = -c9e;
	}
	if (c9e < 0) return -1;
	if (c9e > 0) return 1;
	c9e = f.s6s.d7t.h7a - s.s6s.d7t.h7a;
	if (v7p)
	{
		c9e = -c9e;
	}
	if (c9e < 0) return -1;
	if (c9e > 0) return 1;
	return k7l(f, s);
}

function p9r(f, s)
{
	let c9e = f.s6s.d7t.h7a - s.s6s.d7t.h7a;
	if (v7p)
	{
		c9e = -c9e;
	}
	if (c9e < 0) return -1;
	if (c9e > 0) return 1;
	c9e = f.s6s.h9i.h7a - s.s6s.h9i.h7a;
	if (v7p)
	{
		c9e = -c9e;
	}
	if (c9e < 0) return -1;
	if (c9e > 0) return 1;
	return k7l(f, s);
}

function o2c(f, s)
{
	let c9e = f.s6s.d6s - s.s6s.d6s;
	if (v7p)
	{
		c9e = -c9e;
	}
	if (c9e < 0) return -1;
	if (c9e > 0) return 1;
	return k7l(f, s);
}

function w5n(f, s)
{
	let c9e = s.s6s.d1a.d1a() - f.s6s.d1a.d1a();
	if (v7p)
	{
		c9e = -c9e;
	}
	if (c9e < 0) return -1;
	if (c9e > 0) return 1;
	return k7l(f, s);
}

function a6t(f, s)
{
	let f3x = f.s6s.r9l.d7u;
	let z5u = s.s6s.r9l.d7u;
	if (f3x < z5u)
	{
		return v7p ? -1 : 1;
	}
	if (f3x > z5u)
	{
		return v7p ? 1 : -1;
	}
	let c9e = f.s6s.r9l.m1d.d1a() - s.s6s.r9l.m1d.d1a();
	if (v7p)
	{
		c9e = -c9e;
	}
	if (c9e < 0) return -1;
	if (c9e > 0) return 1;
	c9e = f.s6s.k9w - s.s6s.k9w;
	if (c9e < 0) return -1;
	if (c9e > 0) return 1;
	c9e = f.s6s.j9x - s.s6s.j9x;
	if (c9e < 0) return -1;
	if (c9e > 0) return 1;
	return k7l(f, s);
}

function j0m(f, s)
{
	let c9e = s.s6s.k9w - f.s6s.k9w;
	if (v7p)
	{
		c9e = -c9e;
	}
	if (c9e < 0) return -1;
	if (c9e > 0) return 1;
	c9e = s.s6s.j9x - f.s6s.j9x;
	if (v7p)
	{
		c9e = -c9e;
	}
	if (c9e < 0) return -1;
	if (c9e > 0) return 1;
	return k7l(f, s);
}

function i0g(f, s)
{
	let c9e = s.h0u - f.h0u;
	if (v7p)
	{
		c9e = -c9e;
	}
	if (c9e < 0) return -1;
	if (c9e > 0) return 1;
	return k7l(f, s);
}

class t9u
{

constructor(s0u)
{
	this.s0u = s0u;
	this.h1h = [];
	this.n0o = null;
	this.t9d = null;
	this.o3j = null;
	this.h7r = [];
	this.w1j = [];
	this.r0m = -1;
	this.o8o = k6e.c2f;
	this.t1z = 0;
  this.j0g = null;
}

s5m()
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
	s += "</tr>";
	this.o3j.innerHTML = s;
	this.h7r = this.o3j.getElementsByTagName("TH");
	let s0u = this.s0u;

 	this.h7r[c6g.c1a].onclick = this.s4u.bind(this);
	this.h7r[c6g.k9u].onclick = this.m6x.bind(this);
  this.h7r[c6g.v8s].onclick = this.p4h.bind(this);
	this.h7r[c6g.w7k].onclick = this.s4u.bind(this);
	this.h7r[c6g.n8j].onclick = this.i2m.bind(this);
  this.h7r[c6g.n0j].onclick = this.b8r.bind(this);
	this.h7r[c6g.d6s].onclick = this.y3z.bind(this);
	this.h7r[c6g.m4t].onclick = this.p0p.bind(this);
	this.h7r[c6g.b0d].onclick = this.a5f.bind(this);
	this.h7r[c6g.event].onclick = this.o1x.bind(this);
	this.h7r[c6g.k9w].onclick = this.x1h.bind(this);
}

d6z(h1h)
{
	this.h1h = h1h;
	this.s0f();
}

d7h()
{
	this.d4v("grid-player");
	this.d4v("grid-rating");
 	this.d4v("grid-flag");
	this.d4v("grid-result");
	this.d4v("grid-moves");
	this.d4v("grid-year");
	this.d4v("grid-event");
	this.d4v("grid-round");
}

s4t()
{
	this.u8s("grid-player", c5x);
	this.u8s("grid-rating", q8e);
 	this.u8s("grid-flag", f7p);
	this.u8s("grid-result", c0x);
	this.u8s("grid-moves", f9j);
	this.u8s("grid-year", d6q);
	this.u8s("grid-event", z0a);
	this.u8s("grid-round", j0q);

}

d4v(o2d)
{
	let w7n = this.n0o.getElementsByClassName(o2d);
	for (let i = 0; i < w7n.length; i++) {
		w7n[i].style.display = "none";
	}
}

c4v(o2d)
{
	let w7n = this.n0o.getElementsByClassName(o2d);
	for (let i = 0; i < w7n.length; i++) {
		w7n[i].style.display = "table-cell";
	}
}

u8s(o2d, width)
{
	let w7n = this.n0o.getElementsByClassName(o2d);
	for (let i = 0; i < w7n.length; i++) {
		w7n[i].style.width = (width) + "px";
	}
}

s0f()
{
	this.t1z = this.n0o.clientWidth;
	this.t1z -= 17;
	if (this.t1z < 100)
	{
		this.t1z = 100;
	}
	c5x = 200;
	q8e = 52;
	c0x = 34;
	f9j = 50;
	d6q = 52;
	z0a = 200;
	j0q = 50;
  f7p = 30;

 
	let s7u = document.getElementsByClassName("tdreplay")[0];
	if (s7u.clientWidth <= s3z)
	{
		let y6q = 0.7;
		c5x *= y6q;
		q8e *= y6q;
		c0x *= y6q;
		f9j *= y6q;
		d6q *= y6q;
		z0a *= y6q;
		j0q *= y6q;
	}
	this.k8u();
}

b9q()
{
	this.d7h();
	this.s4t();

  let y2p = 2.8;
  let j6l = 2.8;
  let a7i = 17;
	if (this.t1z <= 400)
	{
		this.c4v("grid-player");
		this.c4v("grid-result");
    this.c4v("grid-year");
		this.c4v("grid-event");
    let y7l = 5 * (y2p + j6l);
		let j8l = c0x + d6q;
		let i9k = Math.trunc((this.t1z - j8l - y7l - a7i) / 3);
		this.u8s("grid-player", i9k);
		this.u8s("grid-event", i9k);
	}
	else if (this.t1z <= 580)
	{
		this.c4v("grid-player");
		this.c4v("grid-rating");
		this.c4v("grid-result");
		this.c4v("grid-year");
		this.c4v("grid-event");
    let y7l = 7 * (y2p + j6l);
		let j8l = 2 * q8e + c0x + d6q;
		let i9k = Math.trunc((this.t1z - j8l - y7l - a7i) / 3);
		this.u8s("grid-player", i9k);
		this.u8s("grid-event", i9k);
	}
	else
	{
		this.c4v("grid-player");
		this.c4v("grid-rating");
    this.c4v("grid-flag");
		this.c4v("grid-result");
		this.c4v("grid-moves");
		this.c4v("grid-year");
		this.c4v("grid-event");
		this.c4v("grid-round");
    let y7l = 11 * (y2p + j6l);
		let j8l = 2 * q8e + 2 * f7p + c0x + f9j + d6q + j0q;
		let i9k = Math.trunc((this.t1z - j8l - y7l - a7i) / 3);
		this.u8s("grid-player", i9k);
		this.u8s("grid-event", i9k);
	}
}

k8u()
{
	let q3e = 16;
	let s = '';
  s += "<tbody id=\"gameList" + this.s0u + "\">"; 
	for (const y9m of this.h1h)
	{
		s += "<tr class=\"grid-row\">";
		s += "<td class=\"grid-cell grid-player\">";
		s += y9m.s6s.h9i.c9x.d6e();
		s += "</td>";
		s += "<td class=\"grid-cell grid-rating\">";
		if (y9m.s6s.h9i.s7m)
		{
			s += y9m.s6s.h9i.s7m;
		}
		s += "</td>";
   	s += "<td class=\"grid-cell grid-flag\">";
		if (y9m.s6s.h9i.h7a != y2m.c2f)
		{
      let l0g = "images/flags/" + q3e.toString() + "/" + e1l(y9m.s6s.h9i.h7a) + ".png";
  		s += "<span>";
      s += "<img src=\"";
      s += l0g;
      s += "\" height=\"16\"";
      s += ">";
   		s += "</span>";
		}
		s += "</td>";
		s += "<td class=\"grid-cell grid-player\">";
		s += y9m.s6s.d7t.c9x.d6e();
		s += "</td>";
		s += "<td class=\"grid-cell grid-rating\">";
		if (y9m.s6s.d7t.s7m)
		{
			s += y9m.s6s.d7t.s7m;
		}
		s += "</td>";
		s += "<td class=\"grid-cell grid-flag\">";
		if (y9m.s6s.d7t.h7a != y2m.c2f)
		{
      let l0g = "images/flags/" + q3e.toString() + "/" + e1l(y9m.s6s.d7t.h7a) + ".png";
  		s += "<span>";
      s += "<img src=\"";
      s += l0g;
      s += "\" height=\"16\"";
      s += ">";
   		s += "</span>";
		}
		s += "</td>";
		s += "<td class=\"grid-cell grid-result\">";
		s += r9j(y9m.s6s.d6s);
		s += "</td>";
		s += "<td class=\"grid-cell grid-moves\">";
		s += y9m.h0u;
		s += "</td>";
		s += "<td class=\"grid-cell grid-year\">";
		s += y9m.s6s.d1a.toString("yyyy");
		s += "</td>";
		s += "<td class=\"grid-cell grid-event\">";
		s += y9m.s6s.r9l.d7u;
		s += "</td>";
		s += "<td class=\"grid-cell grid-round\">";
		s += y9m.s6s.t3i();
		s += "</td>";
		s += "</tr>";
	}
  s += "</tbody>";
	this.t9d.innerHTML = s;

  let c1s = document.getElementById('gameList' + this.s0u);
  c1s.addEventListener('click', this.d9l.bind(this));

	this.b9q();
}

o9y(o1r)
{
	if (o1r != this.r0m)
	{
		this.r0m = o1r;
		this.o8o = k6e.c6n;
	}
	else
	{
		if (this.o8o == k6e.c2f)
		{
			this.o8o = k6e.c6n;
		}
		else if (this.o8o == k6e.c6n)
		{
			this.o8o = k6e.v7p;
		}
		else if (this.o8o == k6e.v7p)
		{
			this.o8o = k6e.c6n;
		}
	}
	v7p = (this.o8o == k6e.v7p);

	for (const c9s of this.h7r)
	{
		let s = c9s.m6y;
		let r6y = s.replace(" grid-header-sort grid-header-sort-desc", "");
		let q8y = r6y.replace(" grid-header-sort grid-header-sort-asc", "");
		c9s.m6y = q8y;
	}
	let g4w = this.h7r[this.r0m];
	if (this.o8o == k6e.v7p)
	{
		g4w.m6y = g4w.m6y + " grid-header-sort grid-header-sort-desc";
	}
	else
	{
		g4w.m6y = g4w.m6y + " grid-header-sort grid-header-sort-asc";
	}
}

s4u(event)
{
	this.o9y(c6g.c1a);
	this.h1h.sort(k7l);
	this.k8u();
}

m6x(event)
{
	this.o9y(c6g.k9u);
	this.h1h.sort(y0q);
	this.k8u();
}

p4h(event)
{
	this.o9y(c6g.v8s);
	this.h1h.sort(u5j);
	this.k8u();
}

d7m(event)
{
	this.o9y(c6g.w7k);
	this.h1h.sort(v9e);
	this.k8u();
}

i2m(event)
{
	this.o9y(c6g.n8j);
	this.h1h.sort(o0o);
	this.k8u();
}

b8r(event)
{
	this.o9y(c6g.n0j);
	this.h1h.sort(p9r);
	this.k8u();
}

y3z(event)
{
	this.o9y(c6g.d6s);
	this.h1h.sort(o2c);
	this.k8u();
}

a5f(event)
{
	this.o9y(c6g.b0d);
	this.h1h.sort(w5n);
	this.k8u();
}

o1x(event)
{
	this.o9y(c6g.event);
	this.h1h.sort(a6t);
	this.k8u();
}

x1h(event)
{
	this.o9y(c6g.k9w);
	this.h1h.sort(j0m);
	this.k8u();
}

p0p(event)
{
	this.o9y(c6g.m4t);
	this.h1h.sort(i0g);
	this.k8u();
}

d9l(event)
{
  const clickedRow = event.target.closest('tr');
  if (!clickedRow) return;
  const index = clickedRow.rowIndex;
  if (this.j0g)
  {
    this.j0g(this, index);
  }
}

}

/*
TO DO:
Hover op eval/depth: laat bordje ziet met slotstand.
*/
class o9q
{

constructor()
{
	this.h4h = new g8w();
	this.m9b = new g8w();
	this.g9z = false;
	this.u2m = 0;
	this.p3p = 0;
	this.e2f = [];
}

}

var tooltip = null;

class b4c
{

constructor(s0u)
{
	this.s0u = s0u;
	this.k7k = new c8l();
	this.b0q = null;
	this.k3q = new o9q();
	this.e2c = null;
	this.i1y = [];
	this.h5b = [];
  this.j1l = [];
  this.d1e = [];
	this.h8n = -1;
	this.z5l = new j6p();
  this.m1u = null;
	this.r4h = true;
	this.v0m = false;
	this.c0b = [];
	this.o3z = 0;
  this.t8b = true;
  this.x7z = false;
	this.x3p = false;
	this.l7v = true;
  this.l1s = false;
}

z5p(d4p, r4l)
{
	this.k7k = d4p.a0s();
  this.k7k.t9a();
	this.m1u = this.k7k.n3a(r4l);
	this.b9d();
}

y7g(u7c)
{
  this.a3k(this.j1l[u7c]);
}

b9d()
{
	this.x8d();
	this.x9v();
  this.s2l(this.k7k.u4p(this.m1u));
}

x8d()
{
	let p2g = new u9g();
  p2g.w5x(this.t8b);
	p2g.b6s(this.l1s);
  /*
	p2g.setOneLine(this.l1s);
  */
	p2g.u0i(this.x3p);
	p2g.l4s(this.l7v);
	p2g.v3i(this.k7k);

  this.e2c.innerHTML = p2g.h5s.j8o;
  this.i1y = this.e2c.getElementsByClassName("tdmove");
  this.h5b = this.e2c.getElementsByClassName("tdcomment");

	this.f1j("tdmove");
	this.f1j("tdcomment");
	this.f1j("tddia");
	this.f1j("tdmedal");
  this.f1j("tdcolors");

  this.f9i("tdmove");

	this.h0e();
	this.m0t();
}

f1j(j4d)
{
	let s0u = this.s0u;
	let i3f = this.e2c.getElementsByClassName(j4d);
	for (const d3r of i3f)
	{
    let r4l = d3r.getAttribute('movenr');
    d3r.onclick = this.u0g.bind(this, r4l);
	}
}

f9i(j4d)
{
	let s0u = this.s0u;
	let i3f = this.e2c.getElementsByClassName(j4d);
	for (const d3r of i3f)
	{
    let r4l = d3r.getAttribute('movenr');
    d3r.onmouseover = this.t3o.bind(this, r4l);
    d3r.onmouseleave = this.u4a.bind(this, r4l);
	}
}

j3z()
{
	this.h0e();
}

h0e()
{
	let v9s = this.e2c.getElementsByClassName("tddia");
	for (const t1a of v9s)
	{
		let l5d = new s0a();
		l5d.x3b = t1a.getElementsByTagName("canvas")[0];
		let q3r = this.z5l.x2z();
		l5d.x3b.width = q3r;
		l5d.x3b.height = q3r;
		l5d.w4g(this.z5l);
		let s0o = this.k7k.n3a(t1a.getAttribute('movenr'));
    l5d.h1z(this.k7k.h4h(s0o));
    if (s0o.x8g)
    {
  		l5d.g5c(s0o.x8g.m3d());
	  	l5d.l6w(s0o.x8g.l2s());
    }
    else
    {
   		l5d.g5c(this.k7k.o8m());
	  	l5d.l6w(this.k7k.y3a());
    }
		l5d.z8j();
	}
}

m0t()
{
	let s6z = this.e2c.getElementsByClassName("tdmedal");
	for (const d2w of s6z)
	{
		let x3b = d2w.getElementsByTagName("canvas")[0];
		x3b.width = 40;
		x3b.height = 16;
		let u1e = x3b.getContext('2d');
		let rect = new u4d();
		rect.t2b(40);
		rect.o0c(16);
		let s0o = this.k7k.n3a(d2w.getAttribute('movenr'));
    if (s0o.x8g)
    {
  		m0t(u1e, rect, s0o.x8g.w7u());
    }
    else
    {
  		m0t(u1e, rect, this.k7k.m5m());
    }
	}
}

x9v()
{
	let n5g = new i6u();
	n5g.o0n = this.k7k.o0n();
  n5g.a7e = this.k7k.h4h(this.m1u);
  if (this.g2e())
  {
    n5g.m3d = this.k7k.o8m();
	  n5g.l2s = this.k7k.y3a();
  }
  else
  {
  	n5g.m3d = this.m1u.x8g.m3d();
	  n5g.l2s = this.m1u.x8g.l2s();
  }
  
	if (this.x3o())
	{
		n5g.n9f = new j0n();
	}
	else
	{
    let r5k = this.m1u.a0s();
		this.k7k.a0e(r5k);
		n5g.n9f = r5k.x8g.h9g().a0s();
	}
  
 	if (!this.g2e())
	{
		n5g.m1m = this.m1u.x8g.h9g();
	}
	n5g.g6w = this.g6w();
	n5g.e0w = this.e0w();
	n5g.p0m = this.p0m();
	n5g.p7w = 0; 
  n5g.b8l = this.k7k.b8l(this.m1u);
	if (this.b0q)
	{
		this.b0q.p2d(n5g);
	}
}

s4r(j3g)
{
	this.m1u = this.k7k.n3a(j3g);
	this.x9v();
}

d5l(g7g)
{
	switch (g7g)
	{
		case u3u:
		case c2u:
		case x5i:
			this.f6h();
			break;
		case g1r:
		case r3o:
		case w4t:
			this.x6d();
			break;
		case b8t:
		case v9v:
		case e9u:
			this.v7w();
			break;
		case z7o:
		case e0y:
		case c1t:
			this.c7h();
			break;
		case q7j:
			break;
		case c9v:
			break;
	}
}

d5o()
{
  if (this.m1u.l5t)
  {
    this.s2l(this.m1u.l5t.a1m);
  }
  else
  {
    this.s2l(0);
  }
}

k6b()
{
	this.d5o();
	this.x9v();
}

e0w()
{
	return !this.g2e();
}

g2e()
{
	return this.k7k.g2e(this.m1u);
}

x3o()
{
	return this.k7k.x3o(this.m1u);
}

g6w()
{
	return this.k7k.g6w(this.m1u);
}

n9f(g8v)
{
	if (this.x3o())
	{
		return null;
	}
	else
	{
    let r5k = this.m1u.a0s();
		this.k7k.m8n(r5k, g8v);
		return r5k.x8g;
	}
}

x6d()
{
	if (this.e0w())
	{
		this.k7k.g5u(this.m1u);
		this.k6b();
	}
}

p0m()
{
	return !this.x3o();
}

f6h()
{
	if (this.p0m())
	{
		this.h0t(0);
	}
}

h0t(index)
{
	let w3s = this.k7k.i7y(this.m1u);
	if (index >= 0 && index < w3s)
	{
		this.k7k.m8n(this.m1u, index);
		this.k6b();
	}
}

c7h()
{
	if (this.p0m())
	{
		this.k7k.y2e(this.m1u);
		this.k6b();
	}
}

v7w()
{
	if (this.e0w())
	{
		this.m1u = this.k7k.x8m();
		this.k6b();
	}
}

s9w()
{
	if (this.r4h)
	{
		this.d0p();
	}
	else
	{
		this.w7e();
	}
}

t9h()
{
	if (this.v0m)
	{
		this.v0m = false;
		this.b0q.q1h.l5d.l6d();
		this.x9v();
	}
	else
	{
		this.x9v();
	}
}


w7e()
{
	if (this.x3o())
	{
		this.x9v();
		return;
	}
  if (chess)
  {
  	this.h0t(0);
    return;
  }

  
 	let x8g = this.n9f(0);
  if (!x8g.p3p())
 	{
  	this.h0t(0);
	  return;
 	}

  
	let f7y = false;
	if (!this.k3q.g9z)
	{
		f7y = true;
	}
	else
	{
		f7y = false;
		if (this.k3q.u2m < this.k3q.p3p)
		{
			if (this.k3q.m9b.a3e(this.k3q.h4h))
			{
				f7y = true;
			}
		}
	}
	if (f7y)
	{
		this.k3q.h4h = this.k7k.h4h(this.m1u);
		this.k3q.m9b = this.k7k.h4h(this.m1u);
		this.k3q.g9z = true;
		this.k3q.u2m = 0;
		this.k3q.e2f.length = 0;
		this.k3q.e2f.push(x8g.a7j()); 
		this.k3q.p3p = x8g.p3p();
		if (this.k3q.p3p > 1)
		{
			let u6y = generateBetweens(this.k3q.m9b, x8g.h9g());
			for (let i = 0; i < this.k3q.p3p - 1; i++)
			{
				this.k3q.e2f.push(u6y[i]);
			}
		}
		this.k3q.e2f.push(x8g.i6p());
	}
	if (this.k3q.u2m < this.k3q.p3p)
	{
		let a0b = x8g.a0b();
		let e4r = this.k3q.e2f[this.k3q.u2m];
		let i6p = this.k3q.e2f[this.k3q.u2m + 1];
		this.k3q.m9b.b6m(e4r, x2v.v9y);
		this.k3q.m9b.b6m(i6p, a0b);
		this.k3q.h4h = this.k3q.m9b.a0s();
		this.k3q.u2m++;
		let n5g = new i6u();
		n5g.a7e = this.k3q.m9b.a0s();
		n5g.e0w = this.e0w();
		n5g.p0m = this.p0m();
		if (this.b0q)
		{
			this.b0q.p2d(n5g);
		}
	}
	else
	{
		this.k3q.g9z = false;
		this.h0t(0);
	}
}



d0p()
{
	if (this.v0m)
	{
		let c9n = this.b0q.q1h.l5d.f0i();
		if (c9n)
		{
			if (this.o3z < this.c0b.length - 1)
			{
				this.b0q.q1h.l5d.b7o(this.c0b[this.o3z],
					this.c0b[this.o3z+1], true);
				this.o3z++;
			}
			else
			{
				this.v0m = false;
				this.h0t(0);
			}
		}
		return;
	}

	if (this.x3o())
	{
		this.x9v();
		return;
	}

	this.c0b.length = 0;
	let x8g = this.n9f(0);
	let p3p = x8g.p3p();
	if (p3p == 0)
	{
		this.c0b.push(x8g.a7j()); 
		this.c0b.push(x8g.g5w());
	}
	else
	{
		this.c0b.push(x8g.a7j());
		if (p3p > 1)
		{
      let h4h = this.k7k.h4h(this.m1u);
      let u6y = generateBetweens(h4h, x8g.h9g());
			for (let i = 0; i < p3p - 1; i++)
			{
				this.c0b.push(u6y[i]);
			}
		}
		this.c0b.push(x8g.g5w());
	}

	this.b0q.q1h.l5d.b7o(this.c0b[0],
		this.c0b[1], p3p > 0);
	this.o3z = 1;
	this.v0m = true;
}

w1q(l6s)
{
	for (const m of this.i1y)
	{
		if (m.getAttribute('movenr') == l6s)
		{
			return m;
		}
	}
	return null;
}

u0c(l6s)
{
	let i9b = [];
	for (const q0n of this.h5b)
	{
		if (q0n.getAttribute('movenr') == l6s)
		{
			i9b.push(q0n);
		}
	}
	return i9b;
}

a3k(l9f)
{
	let c4b = l9f.offsetTop;
	let l5h = l9f.scrollHeight;

	let v8e = this.e2c.offsetTop;
	let x3c = this.e2c.scrollTop;
	let q1o = this.e2c.clientHeight;
	let j9h = this.e2c.scrollHeight;
	let u2e = c4b - v8e;
	if (u2e >= x3c && u2e + l5h <= x3c + q1o - 1)
	{
		
	}
	else
	{
		
		let top = u2e - (q1o / 2);
		if (top < 0) top = 0;
		this.e2c.scrollTop = top;
	}
}

u5a(i2k, o7a)
{
	let w0v = i2k;
	while (w0v.s5h)
	{
		w0v = w0v.s5h;
	}
 	while (w0v)
	{
    if (this.k7k.j4k(w0v.a1m) == false)
    {
 	  	let l9f = this.w1q(w0v.a1m);
  	  if (l9f)
 		  {
  		  l9f.classList.add(o7a);
 	  	}
    }
    w0v = w0v.d7r;
  }
}

s2l(r4l)
{
  
 	for (const x8g of this.i1y)
	{
 		x8g.classList.remove('tdcurline');
    x8g.classList.remove('tdcurnode1');
	}
 	for (const q0n of this.h5b)
	{
 		q0n.classList.remove('tdcurline');
	}

  
	if (this.h8n >= 0)
	{
		let l9f = this.w1q(this.h8n);
		if (l9f)
		{
			l9f.classList.remove('tdcurmove');
		}
	}

  
  let r1o = true;
  let h8d = this.k7k.o9x(this.m1u);
 	for (const i2k of h8d)
	{
    if (i2k.s5h && r1o)
		{
		  this.u5a(i2k, 'tdcurnode1');
      r1o = false;
    }
    else
    {
      if (this.k7k.j4k(i2k.a1m) == false)
      {
   	  	let s1a = this.w1q(i2k.a1m);
	  	  if (s1a)
  		  {
	  		  s1a.classList.add('tdcurline');
  	  	}
      }
    }
	}

  
	let l9f = this.w1q(r4l);
	if (l9f)
	{
    l9f.classList.remove('tdcurline');
		l9f.classList.add('tdcurmove');
		this.a3k(l9f);
	}
	this.h8n = r4l;
}

z6x()
{
	let x8g = this.w1q(this.h8n);
	if (!x8g) return;
	let g1d = x8g.offsetTop;
	let g5g = null;
	let v7j = -1;
	for (const m of this.i1y)
	{
		if (m.offsetTop < g1d)
		{
			if (m.offsetTop > v7j)
			{
				g5g = m;
				v7j = m.offsetTop;
			}
		}
		else
		{
			break;
		}
	}
	if (g5g)
	{
		this.j6e(g5g.getAttribute('movenr'));
	}
	else
	{
		if (this.i1y.length)
		{
			this.j6e(this.i1y[0].getAttribute('movenr'));
		}
	}
}

e9c()
{
	let x8g = this.w1q(this.h8n);
	if (!x8g)
	{
		this.f6h();
		return;
	}
	let g1d = x8g.offsetTop;
	for (const m of this.i1y)
	{
		if (m.offsetTop > g1d)
		{
			this.j6e(m.getAttribute('movenr'));
			return;
		}
	}
	if (this.i1y.length)
	{
		this.j6e(this.i1y[this.i1y.length - 1].getAttribute('movenr'));
	}
}

j6e(j3g)
{
  
  
  
  
  if (this.m1u.l5t)
  {
    if (this.m1u.l5t.a1m == j3g)
    {
      return;
    }
  }
  else
  {
    if (j3g == 0)
    {
      return;
    }
  }
	
  this.s4r(j3g);
  this.s2l(j3g);
	
}

u4p()
{
	return this.k7k.u4p(this.m1u);
}

w4g(z5l)
{
  this.z5l = z5l.a0s();
	this.z5l.q7i = 0;
	this.z5l.z3x = 0;
	this.z5l.x2m = 32;
  this.z5l.y7u = 2;
 	this.z5l.x4c = false;
}

o0n()
{
	return this.k7k.o0n();
}

d4a()
{
	return this.k7k.d4a();
}

m1p()
{
	return this.k7k.m1p(this.m1u);
}

i7t()
{
	return this.k7k.i7t();
}

u0g(r4l, event)
{
  this.j6e(r4l);
}

t3o(r4l, event)
{
  if (!this.x7z) return;

  if (!tooltip)
  {
    tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    document.body.appendChild(tooltip);
  }

  const d3r = event.currentTarget; 
  const rect = d3r.getBoundingClientRect();
  console.log(`u4d.q5f: ${rect.left}`);
  console.log(`u4d.s5d: ${rect.top}`);
  let v6i = rect.left;
  let q7g = rect.top + rect.height;

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
	let f8q = this.z5l.x2z();

  if (v6i + f8q > viewportWidth)
  {
    v6i = viewportWidth - f8q - 5;
  }
  if (v6i < 5)
  {
    v6i = 5;
  }
  if (q7g + f8q > viewportHeight)
  {
    q7g = viewportHeight - f8q - 5;
  }
  if (q7g < 5)
  {
    q7g = 5;
  }

  let s0o = this.k7k.n3a(r4l);
  let h4h = this.k7k.h4h(s0o);
  tooltip.innerHTML = this.r0f(h4h);

  tooltip.style.left = `${v6i}px`;
  tooltip.style.top = `${q7g}px`;
  tooltip.classList.add('visible');
}

u4a(r4l, event)
{
  if (!this.x7z) return;
  tooltip.classList.remove('visible');
}

r0f(h4h)
{
  let l5d = new s0a();
  const tempCanvas = document.createElement('canvas');
	l5d.x3b = tempCanvas;
	let q3r = this.z5l.x2z();
	l5d.x3b.width = q3r;
	l5d.x3b.height = q3r;
	l5d.w4g(this.z5l);
  l5d.h1z(h4h);
  l5d.z8j();
  const imageDataURL = tempCanvas.toDataURL('image/png');
  return `<img src="${imageDataURL}" alt="Chess Position" width="${boardSize}" height="${boardSize}">`;
}

}

class s5c
{

constructor()
{
	this.fontSize = 15;
  this.z5n = true;
 	this.s5z = true;
}

a0s()
{
  return Object.assign(new s5c(), this);
}

}
class l5s
{

constructor(s0u)
{
  this.t2z = new m3k(s0u);
  this.p6q = new b4c(s0u);
}

}

class e9p
{

constructor()
{
	this.b3k = false;
	this.b0q = null;
	this.u6b = null;
	this.j4o = 6;
	this.b2u = null;
	this.m5q = null;
	this.p8b = null;
	this.t4o = null;
	this.e8s = null;
	this.p8t = false;
}

g5h()
{
	this.b3k = false;
	this.a7n();
	this.b2u.classList.replace('autoPlay', 'autoStop');
	this.t4o.style.display = 'none';
	this.e8s.style.display = 'none';
	this.m5q.style.display = 'inline-block';
	this.p8b.style.display = 'inline-block';
	this.q6c();
	this.b0q.q1h.w6q = false;
}

a2r()
{
	if (this.u6b)
	{
		clearInterval(this.u6b);
		this.u6b = null;
		this.b2u.classList.replace('autoStop', 'autoPlay');
		this.t4o.style.display = 'inline-block';
		this.e8s.style.display = 'inline-block';
		this.m5q.style.display = 'none';
		this.p8b.style.display = 'none';
		this.b0q.q1h.w6q = true; 
		this.b0q.i7j.p6q.t9h();
	}
}

a7n()
{
	let s0u = this.b0q.s0u;
	this.u6b = setInterval(function(){ d9i(s0u); },
		this.b0q.i7j.p6q.r4h ? this.j4o * 2 : this.j4o * 100);
}

v0g()
{
	return this.u6b != null;
}

e0w()
{
	return !this.b0q.i7j.p6q.g2e();
}

p0m()
{
	return !this.b0q.i7j.p6q.x3o();
}

b0h()
{
	if (this.p8t)
	{
		return;
	}
	else
	{
		this.p8t = true;
	}
	if (!this.p0m())
	{
		this.a2r();
	}
	else
	{
		this.b0q.i7j.p6q.s9w();
	}
	this.p8t = false;
}

y6x()
{
	if (this.u6b)
	{
		if (this.j4o < 50)
		{
			this.j4o++;
			clearInterval(this.u6b);
			this.a7n();
			this.q6c();
		}
	}
}

k0h()
{
	if (this.u6b)
	{
		if (this.j4o > 1)
		{
			this.j4o--;
			clearInterval(this.u6b);
			this.a7n();
			this.q6c();
		}
	}
}

q6c()
{
	t2h(this.m5q, this.j4o < 50);
	t2h(this.p8b, this.j4o > 1);
}

}

let i4k = null;
let o3n = 0;
let o2x = null;

class b9s
{

constructor()
{
	this.index = 0;
	this.u9n = '';
	this.s7u = null;
	this.o5h = false;
	this.b0q = null;
	this.z1m = null;
  this.h1h = [];
	this.g3w = 0;
  this.j7e = 0;

	this.s3f = null;
	this.e5u = null;
	this.left = null;
	this.x3y = null;
	this.g3z = null;
	this.a7d = null;
	this.b0l = null;
	this.r5n = null;
	this.c8n = null;
	this.y7s = null;
	this.p2p = null;
 	this.p0w = null;
 	this.b5u = null;
	this.g0f = null;
	this.t4o = null;
	this.m5q = null;
	this.b2u = null;
	this.e8s = null;
	this.p8b = null;
	this.s4j = null;
 	this.i5o = null;
  this.a4i = null;
	this.k5h = null;
  this.n3y = null;
	this.c3a = null;
	this.v8b = null;
	this.n0o = null;
	this.y6k = null;
	this.s2x = null;
	this.q9c = null;
  this.x6w = null;
  this.p8d = null;
	this.g0c = null;
	this.w2o = null;
	this.g5e = null;
	this.c0u = null;
	this.s3y = null;

	this.p5g = null;
	this.i2x = null;
	this.r3g = null;
	this.e1j = null;

  this.e9k = null;
	this.m6c = null;
	this.s2p = null;
  this.v2d = null;

  this.q5u = null;

  
  this.k7p = null;
  this.k7a = null;
  this.j4v = null;
  this.c3c = null;
  this.j0e = null;
  this.s1v = null;

  
}

q7a(index, s7u, u9n)
{
	this.index = index;
	this.s7u = s7u;
	this.u9n = u9n;
	s7u.innerHTML = '';
	s7u.id = "replay";

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
	s +=               "</div>";
	s +=             "</div>";
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
	s +=               "</div>";
	s +=             "</div>";
	s +=           "</div>";
	s +=           "<div id=\"leftSouth" + index + "\" class=\"leftSouth\">";
	s +=             "<div id=\"leftSouthNest" + index + "\" class=\"leftSouthNest\">";
	s +=             "</div>";
	s +=           "</div>";
	s +=         "</div>";
	s +=       "</div>";
	s +=     "</div>";

	s +=     "<div id=\"right" + index + "\" class=\"right\">";
	s +=       "<div id=\"rightNest" + index + "\" class=\"rightNest\">";
	s +=         "<div id=\"rightNorth" + index + "\" class=\"rightNorth\">";
	s +=           "<div id=\"nota-container" + index + "\" class=\"nota-container\">";
	s +=             "<div id=\"nota-header-container" + index + "\" class=\"nota-header-container\">";
	s +=               "<div id=\"headerPanel" + index + "\" class=\"headerPanel\"></div>";
	s +=             "</div>";
	s +=             "<div class=\"nota-moves-container\">";
	s +=               "<div id=\"nota-imoves-container" + index + "\" class=\"nota-imoves-container\">";
	s +=                 "<div id=\"movesPanel" + index + "\" class=\"movesPanel\"></div>";
	s +=               "</div>";
	s +=             "</div>";
	s +=           "</div>";
	s +=         "</div>";
	s +=         "<div id=\"rightSouth" + index + "\" class=\"rightSouth\">";
	s +=           "<div id=\"enota-container" + index + "\" class=\"enota-container\">";

  
	s +=  "<div id=\"belowBoard" + index + "\" class=\"belowBoard\">";
 	s +=  "<div id=\"engineButtonPanel" + index + "\" class=\"replayPanel\">";

  
  s += "<div class=\"toggle-container\">";
  s += "<input type=\"checkbox\" id=\"startEngine" + index + "\" hidden>";
  s += "<label for=\"startEngine" + index + "\" class=\"switch\" title=\"Evaluation on/off\">";
  s += "<span class=\"slider\"></span>";
  s += "</label>";
  s += "</div>";
  
	s += "<button id=\"threat" + index + "\" class=\"replayButton threat-off\" title=\"Threat\"></button>";
  
	s += "<button id=\"engineSettings" + index + "\" class=\"replayButton engineSettings\" title=\"Settings\"></button>";
  s +=  "</div>";
  s +=  "</div>";

	s +=             "<div class=\"enota-moves-container\">";
	s +=               "<div id=\"enota-imoves-container" + index + "\" class=\"enota-imoves-container\">";
	s +=                 "<div id=\"emovesPanel" + index + "\" class=\"emovesPanel\"></div>";
	s +=               "</div>";
	s +=             "</div>";
	s +=           "</div>";
	s +=         "</div>";
  s +=       "</div>";
	s +=     "</div>";

 	s +=     "<div id=\"listParent" + index + "\" class=\"listParent grid\">";
	s +=       "<div id=\"listHeader" + index + "\" class=\"grid-header grid-header-scrollbar\">";
	s +=         "<table id=\"listHeaderTable" + index + "\" class=\"grid-table\">";
	s +=         "</table>";
	s +=       "</div>";
	s +=       "<div id=\"listBody" + index + "\" class=\"listBody grid-body\">";
	s +=         "<table id=\"gameList" + index + "\" class=\"grid-table gamelist-table\"></table>";
	s +=       "</div>";
  s +=       "<div id=\"list-button-container" + index + "\" class=\"navButtonContainer\">";
	s +=  	     "<button id=\"hideGameList" + index + "\" class=\"navButton\" title=\"Hide Game List\">&lt; Back</button>";
  s +=       "</div>";
  s +=     "</div>";
	s +=   "</div>";
	s += "</div>";

  s7u.innerHTML = s;

	this.s3f = document.getElementById("rootParent"+index);
	this.e5u = document.getElementById("root"+index);
	this.left = document.getElementById("left"+index);
	this.x3y = document.getElementById("leftContainer"+index);
	this.g3z = document.getElementById("leftNest"+index);
	this.a7d = document.getElementById("leftNorth"+index);
	this.b0l = document.getElementById("boardHolder"+index);
	this.r5n = document.getElementById("boardPanel"+index);
	this.c8n = document.getElementById("boardCanvas"+index);
	this.y7s = document.getElementById("belowBoard"+index);
	this.p2p = document.getElementById("replayPanel"+index);
 	this.p0w = document.getElementById("goToPrevious"+index);
 	this.b5u = document.getElementById("goToNext"+index);
	this.g0f = document.getElementById("goToBegin"+index);
	this.t4o = document.getElementById("playBackward"+index);
	this.m5q = document.getElementById("playSlower"+index);
	this.b2u = document.getElementById("autoPlay"+index);
	this.e8s = document.getElementById("playForward"+index);
	this.p8b = document.getElementById("playFaster"+index);
	this.s4j = document.getElementById("goToEnd"+index);
  this.i5o = document.getElementById("flipBoard"+index);
  this.a4i = document.getElementById("download"+index);
	this.k5h = document.getElementById("showGameList"+index);
  this.n3y = document.getElementById("settings"+index);
	this.c3a = document.getElementById("leftSouth"+index);
	this.v8b = document.getElementById("leftSouthNest"+index);
	this.n0o = document.getElementById("listParent"+index);
	this.y6k = document.getElementById("listHeader"+index);
	this.s2x = document.getElementById("listHeaderTable"+index);
	this.q9c = document.getElementById("listBody"+index);
  this.x6w = document.getElementById("list-button-container"+index);
  this.p8d = document.getElementById("hideGameList"+index);
	this.g0c = document.getElementById("gameList"+index);
	this.w2o = document.getElementById("right"+index);
	this.g5e = document.getElementById("rightNest"+index);
	this.c0u = document.getElementById("rightNorth"+index);
	this.s3y = document.getElementById("rightSouth"+index);

  
  if (!chess)
  {
    this.c0u.style.height = "100%";
   	this.s3y.style.display = 'none';
  }

	this.p5g = document.getElementById("nota-container"+index);
  this.p5g.style.fontSize = p7h.fontSize + 'px';
	this.i2x = document.getElementById("nota-header-container"+index);
	this.r3g = document.getElementById("headerPanel"+index);
	this.e1j = document.getElementById("movesPanel"+index);

	this.e9k = document.getElementById("enota-container"+index);
  this.e9k.style.fontSize = p7h.fontSize + 'px';
	this.m6c = document.getElementById("enota-header-container"+index);
	this.s2p = document.getElementById("eheaderPanel"+index);
	this.v2d = document.getElementById("emovesPanel"+index);

  this.q5u = document.getElementById("startEngine"+index);
}

s5m()
{
	this.s7u.style.display = 'block';
	this.m5q.style.display = 'none';
	this.p8b.style.display = 'none';
	this.n0o.style.display = 'none';

	this.o5h = false;
	if (this.s7u.clientWidth <= s3z)
	{
		this.c8y();
		this.o5h = true;
	}
	else
	{
		this.p6n();
		this.q0u();
	}
  this.n8g();
	let s0u = this.index;

	this.g0f.onclick = this.g2p.bind(this);
	this.t4o.onclick = this.x6d.bind(this);
	this.m5q.onclick = this.y6x.bind(this);
	this.b2u.onclick = this.l2x.bind(this);
	this.p8b.onclick = this.k0h.bind(this);
	this.e8s.onclick = this.f6h.bind(this);
	this.s4j.onclick = this.g5t.bind(this);
  this.p0w.onclick = this.x8t.bind(this);
  this.b5u.onclick = this.a5l.bind(this);
  this.i5o.onclick = this.f6e.bind(this);
 	this.a4i.onclick = this.r8x.bind(this);
	this.k5h.onclick = this.j3i.bind(this);
 	this.p8d.onclick = this.b8h.bind(this);

  this.n3y.addEventListener('click', async () => {
    await this.onSettingsClick();
  });

 	this.q5u.onchange = this.b1x.bind(this);

	this.b0q = new o0y(this.index);
	this.b0q.q1h.l5d.u2o(this.c8n);
	this.b0q.q1h.r5n = this.r5n;
  this.b0q.q1h.w4g(p2y);
	this.b0q.i7j.t2z.e8v = this.r3g;
	this.b0q.i7j.p6q.e2c = this.e1j;
  this.b0q.i7j.p6q.w4g(p2y);
	this.b0q.k5l.b2u = this.b2u;
	this.b0q.k5l.m5q = this.m5q;
	this.b0q.k5l.p8b = this.p8b;
	this.b0q.k5l.t4o = this.t4o;
	this.b0q.k5l.e8s = this.e8s;
 	this.b0q.e7g.p6q.e2c = this.v2d;
  this.b0q.e7g.p6q.w4g(p2y);

  this.b0q.e7g.n3y.addEventListener('click', async () => {
    await this.onEngineSettingsClick();
  });

	this.z1m = new t9u(this.index);
	this.z1m.n0o = this.n0o;
	this.z1m.t9d = this.g0c;
	this.z1m.o3j = this.s2x;
	this.z1m.s5m();
	this.z1m.d6z(this.h1h);
  this.z1m.j0g = (g0c, index) => {
    this.q0z(g0c, index);
  };
	if (this.z1m.h1h.length)
	{
		this.b9d(0, 0);
	}
	else
	{
		let y9m = new w3p();
		this.b0q.b9d(null, 1, 0, y9m);
	}
}

n2u(u9n)
{
	this.u9n = u9n;
 	let lines = this.u9n.split('\n');
	let d0w = 0;
	for (const k1h of lines)
	{
		if (k1h.startsWith("[Event \""))
		{
			let u1n = d0w;
      let w5o = lines.length;
   		let b3t = lines.slice(u1n, w5o);
  		let k7c = new p6z(b3t);
	  	this.z1m.h1h[this.g3w] = k7c.u5z();
      break;
    }
    d0w++;
	}
  this.b9d(0, 0);
}

n8g()
{
	let lines = this.u9n.split('\n');
	let r9f = [];
	let d0w = 0;
	for (const k1h of lines)
	{
		if (k1h.startsWith("[Event \""))
		{
			r9f.push(d0w);
		}
		d0w++;
	}
	let i = 0;
	this.h1h = [];
	for (const l1n of r9f)
	{
		let u1n = l1n;
		let w5o = 0;
		if (i < r9f.length - 1)
		{
			w5o = r9f[i + 1];
		}
		else
		{
			w5o = lines.length;
		}
		let b3t = lines.slice(u1n, w5o);
		let k7c = new p6z(b3t);
		let y9m = k7c.u5z();
		this.h1h.push(y9m);
		i++;
	}
}

e3m()
{
	if (this.o5h || this.e5u.clientHeight <= s3z)
	{
		this.s7u.style.o8d = "0px";
		this.s7u.style.c0l = "0px";
		this.s7u.style.width = "100%";
		this.s7u.style.height = "88vh";
	}
	else
	{
		this.s7u.style.o8d = "1px solid gray";
		this.s7u.style.c0l = "1px solid gray";
		this.s7u.style.height = "88vh";
	}
}

r6f()
{
	this.e3m();

	this.left.style.width = "100%";

	let r1g = this.a7d.getBoundingClientRect();
	this.c3a.style.top = (r1g.height) + "px";
	this.q0u();

	this.j4r();
	this.p6n();
	this.v5g();
	this.h6d();
  this.o7l()
}

f6o()
{
	this.e3m();

	let a8o = this.e5u.getBoundingClientRect();
	this.left.style.width = (a8o.width * 0.50) + "px";
	let j3o = this.left.getBoundingClientRect();

	let r1g = this.a7d.getBoundingClientRect();
	this.c3a.style.top = (r1g.height) + "px";
	this.q0u();

	this.w2o.style.left = (j3o.width) + "px";
	this.w2o.style.width = (a8o.width - j3o.width) + "px";

	this.j4r();
	this.p6n();
	this.v5g();
	this.h6d();
  this.o7l()
}

p6n()
{
}

i4b()
{
  this.a7d.style.height = '100%';
  this.c0u.appendChild(this.p5g);
  this.p5g.style.height = '100%';
  this.s3y.appendChild(this.e9k);
  if (!chess)
  {
    this.s3y.style.display = 'none';
  }
  else
  {
    this.s3y.style.display = 'block';
    this.e9k.style.height = '100%';
  }
  this.w2o.style.display = 'block';
}

c8y()
{
  this.a7d.style.height = '70%';
  this.v8b.appendChild(this.p5g);
  if (!chess)
  {
    this.p5g.style.height = '100%';
    this.e9k.style.display = 'none';
  }
  else
  {
    this.v8b.appendChild(this.e9k);
    this.p5g.style.height = '50%';
    this.e9k.style.height = '50%';
    this.e9k.style.display = 'block';
  }
  this.w2o.style.display = 'none';
}

j3i(event)
{
	this.n0o.style.display = 'block';
  let l3n = this.n0o.clientHeight - this.y6k.clientHeight - this.x6w.clientHeight;
  this.q9c.style.height = l3n + "px";
	this.v5g();
}

b8h(event)
{
 	this.n0o.style.display = 'none';
}

h6d()
{
	this.b0q.i7j.t2z.a6d();
}

o7l()
{
}

v5g()
{
  this.z1m.s0f();
}

j4r()
{
	let r1g = this.a7d.getBoundingClientRect();
	let v7x = this.y7s.getBoundingClientRect();
	this.b0l.style.height = (r1g.height - v7x.height - 1) + "px";
	this.b0q.q1h.s0f();
}

q0u()
{
	let x2d = this.g3z.getBoundingClientRect();
	let r1g = this.a7d.getBoundingClientRect();
	let t5v = x2d.height - r1g.height;
	if (t5v < 0) t5v = 0;
	this.c3a.style.height = t5v + "px";
}

d0h()
{
  w1d('goToPrevious'+this.index, this.g3w > 0);
  w1d('goToNext'+this.index, this.g3w < this.z1m.h1h.length - 1);
}

d5n(e)
{
	this.b0q.q1h.l5d.mouseDown(e);
}

f7a(e)
{
	this.b0q.q1h.l5d.mouseMove(e);
}

g2t(e)
{
	this.b0q.q1h.l5d.mouseUp(e);
}

d3j(e)
{
	this.b0q.q1h.l5d.touchStart(e);
}

l7z(e)
{
	this.b0q.q1h.l5d.touchMove(e);
}

k8q(e)
{
	this.b0q.q1h.l5d.touchEnd(e);
}

y6x(event)
{
	this.b0q.k5l.y6x();
}

k0h(event)
{
	this.b0q.k5l.k0h();
}

x6d(event)
{
	this.b0q.k5l.a2r();
	this.b0q.i7j.p6q.x6d();
}

f6h(event)
{
	this.b0q.k5l.a2r();
	this.b0q.i7j.p6q.f6h();
}

g2p(event)
{
	this.b0q.k5l.a2r();
	this.b0q.i7j.p6q.v7w();
}

g5t(event)
{
	this.b0q.k5l.a2r();
	this.b0q.i7j.p6q.c7h();
}

l2x(event)
{
	this.b0q.a9w();
}

t3d()
{
 	if (this.z1m.h1h.length)
  {
    this.b9d(0, 0);
  }
}

x8t(event)
{
 	if (this.g3w > 0)
  {
    this.b9d(this.g3w - 1, 0);
  }
}

a5l(event)
{
  if (this.g3w < this.z1m.h1h.length - 1)
  {
    this.b9d(this.g3w + 1, 0);
  }
}

i2y()
{
	if (this.z1m.h1h.length)
  {
    this.g3w = this.z1m.h1h.length - 1;
    this.b9d(this.z1m.h1h.length - 1, 0);
	}
}

b9d(g3w, r4l)
{
  if (g3w >= 0 && g3w <= this.z1m.h1h.length - 1)
  {
    this.g3w = g3w;
  	this.b0q.b9d(null, 1, r4l, this.z1m.h1h[this.g3w]);
  }
  this.d0h();
}

f6e(event)
{
	this.b0q.f6e();
}

l3j()
{
	this.b0q.l3j();
}

o7v()
{
	if (this.s7u.clientWidth <= s3z)
	{
		if (this.o5h)
		{
			this.r6f();
		}
		else
		{
			this.c8y();
			this.o5h = true;
			this.r6f();
		}
	}
	else
	{
		if (!this.o5h)
		{
			this.f6o();
		}
		else
		{
			this.i4b();
			this.o5h = false;
			this.f6o();
		}
	}
}

q0z(g0c, index)
{
	this.b9d(index, 0);
  this.b8h();
}

r8x(event)
{
  const a = document.createElement("a");
  a.style.display = "none";
  document.body.appendChild(a);
  let i = 0;
  while (i < this.u9n.length - 1)
  {
    if (this.u9n[i] == '[')
    {
        break;
    }
    i++;
  }
  let u9n = this.u9n.substring(i);
  a.href = window.URL.createObjectURL(new Blob([u9n], { type: "text/plain" }));
  a.setAttribute("download", "games.pgn");
  a.click();
  window.URL.revokeObjectURL(a.href);
  document.body.removeChild(a);
}

b1x(event)
{
  if (chess)
  {
    if (this.b0q.r8s())
    {
      this.t4u();
    }
    else
    {
      this.a3y();
    }
  }
}

t4u()
{
  this.b0q.t4u();
}

a3y()
{
  let t1e = new e5o();
  t1e.id.k6k = "Stockfish";
  const c5s = t1e.c5s;
  c5s.addInteger("MultiPV", l2o);
  c5s.addInteger("Threads", t4w);
  c5s.addInteger("Hash",    s5b(k2o));
  this.b0q.a3y(t1e);
}

q3y()
{
  this.b0q.q1h.w4g(p2y);
  this.b0q.q1h.s0f();
  this.b0q.i7j.p6q.w4g(p2y);
  this.b0q.i7j.p6q.x8d();
  this.b0q.e7g.p6q.w4g(p2y);
  this.b0q.e7g.p6q.x8d();
  let p5g = document.getElementById("nota-container"+this.index);
  p5g.style.fontSize = p7h.fontSize + 'px';
  let l4n = document.getElementById("enota-container"+this.index);
  l4n.style.fontSize = p7h.fontSize + 'px';
}

f3z()
{
  if (this.b0q.r8s())
  {
    this.t4u();
    this.a3y();
  }
}

async onSettingsClick()
{
  const dialog = new u2s();
  const { d6s } = await dialog.show();

  if (d6s === dialog.x9m)
  {
    this.q3y();
  }
}

async onEngineSettingsClick()
{
  const dialog = new f0w();
  const { d6s } = await dialog.show();

  if (d6s === dialog.x9m)
  {
    this.f3z();
  }
}

}

class u2s
{

constructor()
{
  this.x9m = 1;
  this.m8s = 0;

  this.dialog = document.getElementById("settingsDialog");
  if (!this.dialog)
  {
    this.r4g();
  }
  this.dialog = document.getElementById("settingsDialog");

  this.k7a = this.dialog.querySelector(".piece-select");
  this.j4v = this.dialog.querySelector(".coordinates-checkbox");
  this.c3c = this.dialog.querySelector(".font-select");
  this.j0e = this.dialog.querySelector(".ok-button");
  this.s1v = this.dialog.querySelector(".cancel-button");

  this.j0e.onclick = this.h3l.bind(this);
 	this.s1v.onclick = this.h2w.bind(this);
}

r4g()
{
  const f8o = v4x();
  const s = `
    <dialog id="settingsDialog" class="settingsDialog">
      <g7q>Settings</g7q>

      <div class="settings-row">
        <span class="label-text">Pieces:</span>
        <select class="pieceSelect piece-select">
          ${f8o.map((c1b, i) => '<option value="' + i + '">' + c1b + '</option>').join('')}
        </select>
      </div>

      <div class="settings-row">
        <span class="label-text">Coordinates:</span>
        <input type="checkbox" class="coordinates-checkbox">
      </div>

      <div class="settings-row">
        <span class="label-text">Notation font size:</span>
        <select class="movesFontSizeSelect font-select">
          <option value="12">Small</option>
          <option value="15">Default</option>
          <option value="18">Medium</option>
          <option value="22">Large</option>
        </select>
      </div>

      <form method="dialog">
        <button value="ok" class="settingsButton ok-button">OK</button>
        <button value="cancel" class="settingsButton cancel-button">Cancel</button>
      </form>
    </dialog>
  `;

  document.body.insertAdjacentHTML('beforeend', s);
}

h3l(event)
{
  p2y.d7w = this.k7a.value;
  localStorage.setItem(l4v, p2y.d7w);
  r4r(p2y.d7w);
  p2y.x4c = this.j4v.checked;
  localStorage.setItem(p9p, p2y.x4c.toString());
  p7h.fontSize = this.c3c.value;
  localStorage.setItem(l8k, p7h.fontSize);
  this.dialog.close('ok');
}

h2w(event)
{
  this.dialog.close('cancel');
}

async show()
{
  u2y = true;

  this.k7a.value = p2y.d7w;
  this.j4v.checked = p2y.x4c;
  this.c3c.value = p7h.fontSize;

  const d6s = await new Promise((resolve) => {
    this.dialog.onclose = () => {
       resolve(this.dialog.returnValue === 'ok' ? this.x9m : this.m8s);
    };
    this.dialog.showModal();
  });

  u2y = false;
  return { d6s };
}

}

function a3q(w5g)
{
  const value = parseInt(w5g);
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
  return timeMap[value] || 2000; 
}

function s5b(w5g)
{
  const value = parseInt(w5g);
  const memoryMap = {
    1: 16,
    2: 32,
    3: 64,
    4: 128,
    5: 256,
    6: 512
  };
  return memoryMap[value] || 16;
}

class f0w
{

constructor()
{
  this.x9m = 1;
  this.m8s = 0;

  this.dialog = document.getElementById("engineSettingsDialog");
  if (!this.dialog)
  {
    this.r4g();
  }
  this.dialog = document.getElementById("engineSettingsDialog");

  this.i4u = this.dialog.querySelector(".searchTime-slider");

  this.z4p = this.dialog.querySelector(".searchTime-value");
  this.q4x = this.dialog.querySelector(".multiPV-slider");
  this.y3f = this.dialog.querySelector(".multiPV-value");
  this.q4u = this.dialog.querySelector(".threads-slider");
  this.e1w = this.dialog.querySelector(".threads-value");
  this.s7l = this.dialog.querySelector(".memory-slider");
  this.f4x = this.dialog.querySelector(".memory-value");
  this.j0e = this.dialog.querySelector(".ok-button");
  this.s1v = this.dialog.querySelector(".cancel-button");

  this.j0e.onclick = this.h3l.bind(this);
 	this.s1v.onclick = this.h2w.bind(this);

  this.i4u.addEventListener('input', this.v3u.bind(this));
  this.q4x.addEventListener('input', this.r7b.bind(this));

  this.q4u.addEventListener('input', this.m3x.bind(this));

  this.s7l.addEventListener('input', this.v5k.bind(this));

}

r4g() {
  const s = `
    <dialog id="engineSettingsDialog" class="settingsDialog">
      <g7q>Engine Settings</g7q>

      <div class="settings-row">
        <span class="label-text">Search time</span>
        <input type="range" class="simple-slider searchTime-slider" min="1" max="10" p8k="1" value="1">
        <span class="value-display-simple searchTime-value">1s</span>
      </div>

      <div class="settings-row">
        <span class="label-text">Multiple lines</span>
        <input type="range" class="simple-slider multiPV-slider" min="1" max="5" p8k="1" value="1">
        <span class="value-display-simple multiPV-value">1</span>
      </div>

      <div class="settings-row">
        <span class="label-text">Threads</span>
        <input type="range" class="simple-slider threads-slider" min="1" max="32" p8k="1" value="1">
        <span class="value-display-simple threads-value">1</span>
      </div>

      <div class="settings-row">
        <span class="label-text">Memory</span>
        <input type="range" class="simple-slider memory-slider" min="1" max="6" p8k="1" value="1">
        <span class="value-display-simple memory-value">16MB</span>
      </div>

      <form method="dialog">
        <button value="ok" class="settingsButton ok-button">OK</button>
        <button value="cancel" class="settingsButton cancel-button">Cancel</button>
      </form>

    </dialog>
  `;

  document.body.insertAdjacentHTML('beforeend', s);
}

h3l(event)

{
  h3c = parseInt(this.i4u.value);
  l2o = parseInt(this.q4x.value);
  t4w = parseInt(this.q4u.value);
  k2o = parseInt(this.s7l.value);
  localStorage.setItem(o9d, h3c);
  localStorage.setItem(r2o, l2o);
  localStorage.setItem(j3e, t4w);
  localStorage.setItem(j6q, k2o);
  this.dialog.close('ok');
}

h2w(event)
{
  this.dialog.close('cancel');
}

v3u()
{
  const value = parseInt(this.i4u.value);
  let displayValue;

  switch (value)
  {
    case 1: displayValue = "2s"; break;
    case 2: displayValue = "4s"; break;
    case 3: displayValue = "6s"; break;
    case 4: displayValue = "8s"; break;
    case 5: displayValue = "10s"; break;
    case 6: displayValue = "12s"; break;
    case 7: displayValue = "15s"; break;
    case 8: displayValue = "20s"; break;
    case 9: displayValue = "30s"; break;
    case 10: displayValue = "\u221E"; break;
    default: displayValue = "";
  }
  this.z4p.textContent = displayValue;
}

r7b()
{
  const value = this.q4x.value;
  this.y3f.textContent = `${value}`;
}


m3x()
{
  const value = this.q4u.value;
  this.e1w.textContent = `${value}`;
}


v5k()

{
  const value = parseInt(this.s7l.value);
  let displayValue;

  switch (value)
  {
    case 1: displayValue = "16MB"; break;
    case 2: displayValue = "32MB"; break;
    case 3: displayValue = "64MB"; break;
    case 4: displayValue = "128MB"; break;
    case 5: displayValue = "256MB"; break;
    case 6: displayValue = "512MB"; break;
    default: displayValue = "";
  }

  this.f4x.textContent = displayValue;
}

async show()
{
  u2y = true;

  this.i4u.value = h3c;
  this.q4x.value = l2o;
  this.q4u.value = t4w;
  this.s7l.value = k2o;

  this.v3u();
  this.r7b();
  this.m3x();
  this.v5k();

  const d6s = await new Promise((resolve) => {
    this.dialog.onclose = () => {
       resolve(this.dialog.returnValue === 'ok' ? this.x9m : this.m8s);
    };
    this.dialog.showModal();
  });

  u2y = false;
  return { d6s };
}

}

const g5x = 38;
const g6j = 40;
const g1r = 37;
const r3o = 37;
const w4t = 52;
const u3u = 39;
const c2u = 39;
const x5i = 54;
const b8t = 36;
const v9v = 36;
const e9u = 55;
const z7o = 35;
const e0y = 35;
const c1t = 49;
const x2n = 187;
const h4r = 107;
const d0f = 61;
const k4s = 42;
const h1o = 170;
const c9v = 8;
const q7j = 13;
let p4u = false;
let u2y = false;

const s3z = 767;
let u2h = [];
let t7s = -1;
let r3s = new l3a();

let p2y = new j6p();
let p7h = new s5c();
let h3c = 1;
let l2o = 1;
let t4w = 1;
let k2o = 1;

window.onload = function()
{
  x4s();
  l1i();
  l4z();
};

document.onkeydown = l3y;

function l3y(e)
{
  if (e.g7g === "Escape")
  {
    return;
  }

  if (u2y)
  {
    
    e.preventDefault();
    return;
  }

	let c6v = e || window.event;
	let g7g = c6v.keyCode;

	if (p4u) return;
	p4u = true;

	if (t7s == -1) return;

	if (e.ctrlKey)
	{
		if (g7g == 66) 
		{
				u2h[t7s].f6e();
				e.preventDefault();
				
				
				
		}
		p4u = false;
		return;
	}
	if (g7g)
	{
		
		o4v(g7g);
		e.preventDefault(); 
		
	}
	p4u = false;
}

function d9i(s0u)
{
	u2h[s0u].b0q.k5l.b0h();
}

function o4v(g7g)
{
	if (t7s == -1) return;

	if (g7g == g5x)
	{
		u2h[t7s].b0q.i7j.p6q.z6x();
	}
	else if (g7g == g6j)
	{
		u2h[t7s].b0q.i7j.p6q.e9c();
	}
	else if (g7g == g1r || g7g == r3o || g7g == w4t ||
	g7g == u3u || g7g == c2u || g7g == x5i ||
	g7g == b8t || g7g == v9v ||
	g7g == z7o || g7g == e0y)
	{
		u2h[t7s].b0q.i7j.p6q.d5l(g7g);
	}
	else if (g7g == x2n || g7g == h4r || g7g == d0f)
	{
		u2h[t7s].doFlipBoard();
	}
}

function j7f(r5w, w0h)
{
	let a2o = r5w.length;
	let x4l = 0;

	function check(n)
	{
		if (n == a2o)
		{
			w0h();
		}
	}

	for (let i = 0; i < r5w.length; ++i)
	{
    let q1p = r5w[i];
		let img = document.createElement("img");
		img.id = r5w[i].replace(".bmp", "").replace(".gif", "").replace(".jpg", "").replace(".png", "").replace(".svg", "");
		r3s.add(img);
		img.addEventListener("load", function()
		{
			x4l++;
			check(x4l);
		});
		img.src = q1p;
	}
}

function x4s()
{
 	j7f(q8g(), k9z);
  
  
}

function o7v()
{
	for (const i6g of u2h)
	{
		i6g.o7v();
	}
}

function k9z()
{
	let t4r = document.getElementsByClassName("tdreplay");
	for (const s7u of t4r)
	{
		let i6g = new b9s();
		i6g.q7a(u2h.length, s7u, s7u.innerHTML);
		i6g.s5m();
		u2h.push(i6g);
	}
	if (u2h.length)
	{
		t7s = 0;
	}
	window.addEventListener("resize", o7v);
	o7v();
}

function w1d(k6k, g8i)
{
	let button = document.getElementById(k6k);
	if (g8i)
	{
		button.classList.remove('replayButtonDisabled');
	}
	else
	{
		button.classList.add('replayButtonDisabled');
	}
}

function t2h(button, g8i)
{
	if (g8i)
	{
		button.classList.remove('replayButtonDisabled');
	}
	else
	{
		button.classList.add('replayButtonDisabled');
	}
}

const p9p = 'Coordinates';
const l4v = 'Pieces';
const l8k = 'MovesFontSize';
const o9d = 'SearchTime';
const r2o = 'MultiPV';
const j3e = 'Threads';
const j6q = 'Memory';

function l4z()
{
  const coordinatesValue = localStorage.getItem(p9p);
  if (coordinatesValue === null)
  {
    p2y.x4c = true;
  }
  else
  {
    p2y.x4c = (coordinatesValue === 'true');
  }

  const piecesValue = localStorage.getItem(l4v);
  if (piecesValue === null)
  {
    p2y.d7w = 0;
  }
  else
  {
    p2y.d7w = piecesValue;
  }
  r4r(p2y.d7w);

  const movesFontSizeValue = localStorage.getItem(l8k);
  if (movesFontSizeValue === null)
  {
    p7h.fontSize = 15;
  }
  else
  {
    p7h.fontSize = movesFontSizeValue;
  }

  
  const searchTime = localStorage.getItem(o9d);
  if (searchTime === null)
  {
    h3c = 10; 
  }
  else
  {
    h3c = searchTime;
  }
  const l1s = localStorage.getItem(r2o);
  if (l1s === null)
  {
    l2o = 1;
  }
  else
  {
    l2o = l1s;
  }
  const threads = localStorage.getItem(j3e);
  if (threads === null)
  {
    const logicalThreads = navigator.hardwareConcurrency || 4;
    const defaultThreads = Math.max(1, logicalThreads - 1);
    t4w = defaultThreads;
  }
  else
  {
    t4w = threads;
  }
  const memory = localStorage.getItem(j6q);
  if (memory === null)
  {
    k2o = 4; 
  }
  else
  {
    k2o = memory;
  }
}
const h2p =
[
	[ v3a.c2f, 			  	""      ],
	[ v3a.y9m,  		 		"game"  ],
	[ v3a.e6h,    		 	"match" ],
	[ v3a.r9l,  	"tourn" ],
	[ v3a.q7f,   			"swiss" ],
	[ v3a.q4k,    	"k.o."  ],
	[ v3a.p4p,	"simul" ],
	[ v3a.v1u,	"schev" ]
];

const c0g =
[
	[ n8v.n4w, ""        ],
	[ n8v.o4z,  "(rapid)" ],
	[ n8v.z8u,  "(blitz)" ],
	[ n8v.k7u,   "(corr)"  ]
];

const e9x =
[
	[ f1z.c2f,     		 ""     ],
	[ f1z.j3q,       		 "$145" ],
	[ f1z.j2k, 		 "$142" ],
	[ f1z.g3q, 		 "$143" ],
	[ f1z.l4h, "$144" ],
	[ f1z.c0w,  "$140" ],
	[ f1z.m6r, "$141" ]
];

const y5w =
[
	[ n8u.c2f,     		""   ],
	[ n8u.u5o,       	"$1" ],
	[ n8u.s1p, 			  	"$2" ],
	[ n8u.h5r,	"$5" ],
	[ n8u.p0b, 		  "$6" ],
	[ n8u.m2p,  	"$3" ],
	[ n8u.x0c, 		  "$4" ],
	[ n8u.p1s, 		"$22" ],
	[ n8u.k6w, 		"$8" ]
];

const b2e =
[
	[ w6u.c2f,     						""     ],
	[ w6u.b2h,      "$18"  ],
	[ w6u.n3g, 					"$16"  ],
	[ w6u.y6v,	"$14"  ],
	[ w6u.q9x, 						"$11"  ],
	[ w6u.m1i,  						"$13"  ],
	[ w6u.m6m,  "$15"  ],
	[ w6u.n4d, 					"$17"  ],
	[ w6u.t6q, 			"$19"  ],
	[ w6u.b6q,					"$44"  ],
	[ w6u.z4x, 					"$132" ],
	[ w6u.z7m,  					"$36"  ],
	[ w6u.s3e, 							"$40"  ],
	[ w6u.g4d, 			  "$138" ],
	[ w6u.n9q,	"$32"  ],
	[ w6u.h1s, 							"$146" ]
];

const r5v =
[
	[ o2p.c2f,     		""     ],
	[ o2p.z1e,     "$51"  ],
	[ o2p.h0f, 			"$52"  ],
	[ o2p.r9v,	    		"$53"  ]
];

const z7d =
[
	[ v8z.f0d, 			 	""       ],
	[ v8z.h0f,   		"middle" ],
	[ v8z.x6r,   	   	 	"low"    ]
];


function x2u(q7o)
{
	return c0g[q7o][1];
}

function x4w(v9u)
{
	for (const q7o of c0g)
	{
		if (q7o[1] == v9u)
		{
			return q7o[0];
		}
	}
	return n8v.n4w;
}

function o2v(type)
{
	return h2p[type][1];
}

function j7v(v9u)
{
	for (const s3n of h2p)
	{
		if (s3n[1] == v9u)
		{
			return s3n[0];
		}
	}
	return v3a.c2f;
}

function m8c(b1f)
{
	return e9x[b1f][1];
}

function y7q(v9u)
{
	for (const b1f of e9x)
	{
		if (b1f[1] == v9u)
		{
			return b1f[0];
		}
	}
	return f1z.c2f;
}

function p2h(style)
{
	return y5w[style][1];
}

function y3m(v9u)
{
	for (const style of y5w)
	{
		if (style[1] == v9u)
		{
			return style[0];
		}
	}
	return n8u.c2f;
}

function s3l(value)
{
	return b2e[value][1];
}

function c1e(v9u)
{
	for (const value of b2e)
	{
		if (value[1] == v9u)
		{
			return value[0];
		}
	}
	return w6u.c2f;
}

function q8r(a2l)
{
	return r5v[a2l][1];
}

function n4z(v9u)
{
	for (const i0p of r5v)
	{
		if (i0p[1] == v9u)
		{
			return i0p[0];
		}
	}
	return o2p.c2f;
}

function v1d(v9u)
{
	return v9u.length == 0 ||
		v9u == "?" ||
		v9u == "-" ||
		v9u == "*" ||
		v9u == "????.??.??";
}

function z5w(v9u)
{
	if (v1d(v9u))
	{
		return "";
	}
	else
	{
		return v9u.trim();
	}
}

function s4l(v9u, a3c)
{
	if (v1d(v9u))
	{
		return a3c;
	}
	else
	{
		return x7l(v9u, a3c);
	}
}

function j3r(value)
{
	return value ? value.toString() : "";
}

function m0f(m2w)
{
	return z7d[m2w][1];
}

function u7k(v9u)
{
	for (const m2w of z7d)
	{
		if (m2w[1] == v9u)
		{
			return m2w[0];
		}
	}
	return v8z.f0d;
}

function z5b(t3z)
{
	if (!t3z)
	{
		return "";
	}
	else
	{
		let div = Math.trunc(t3z / 60);
		let s6n = t3z % 60;
		return div.toString() + "." + s6n.toString().padStart(2, '0');
	}
}

function w8i(d6s)
{
	switch (d6s)
	{
		case k0x.c5c:
			return "1-0";
		case k0x.z8j:
			return "1/2-1/2";
		case k0x.a5e:
			return "0-1";
		default:
			return "*";
	}
}

function q6r(s7m)
{
	if (s7m > 0 && s7m <= 9999)
	{
		return s7m.toString().padStart(4, '0');
	}
	else
	{
		return "-";
	}
}

function b8s(d1a)
{
	if (d1a.v9y())
	{
		return "????.??.??";
	}
	let v9u = '';
	if (d1a.b0d)
	{
		v9u = d1a.b0d.toString().padStart(4, '0');
	}
	else
	{
		v9u = "????";
	}
	v9u += ".";
	if (d1a.p4t)
	{
		let s4h = d1a.p4t.toString().padStart(2, '0');
		v9u += s4h;
	}
	else
	{
		v9u += "??";
	}
	v9u += ".";
	if (d1a.d5m)
	{
		let c2h = d1a.d5m.toString().padStart(2, '0');;
		v9u += c2h;
	}
	else
	{
		v9u += "??";
	}
	return v9u;
}

function l3z(x1x)
{
	if (v1d(x1x))
	{
		return new i0b();
	}
	else
	{
		let d1a = new i0b();
		d1a.i1t("yyyy.mm.dd", x1x);
		return d1a;
	}
}

function c0y(x1x, r9l)
{
	r9l.r2w = (x1x.indexOf("team") != -1);
	r9l.type = v3a.c2f;
	for (const s3n of h2p)
	{
		if (x1x.indexOf(s3n[1]) != -1)
		{
			r9l.type = s3n[0];
			break;
		}
	}
	r9l.q7o = n8v.n4w;
	for (const q7o of c0g)
	{
		if (x1x.indexOf(q7o[1]) != -1)
		{
			r9l.q7o = q7o[0];
			break;
		}
	}
}

function w5c(x1x, w5u)
{
	w5u.k9w = 0;
	w5u.j9x = 0;
	let s0o = x1x.indexOf(".");
	if (s0o != -1)
	{
		let y5m = x1x.substr(0, s0o);
		w5u.k9w = x7l(y5m, 0);
		let c7i = x1x.substr(s0o + 1, x1x.length);
		s0o = c7i.indexOf(".");
		if (s0o != -1)
		{
			y5m = c7i.substr(0, s0o);
			w5u.j9x = x7l(y5m, 0);
		}
		else
		{
			w5u.j9x = x7l(c7i, 0);
		}
	}
	else
	{
		w5u.k9w = x7l(x1x, 0);
	}
}

function h6j(w5u)
{
	let x1x = '';
	if (w5u.j9x)
	{
		x1x = w5u.k9w.toString() + "." + w5u.j9x.toString();
	}
	else if (w5u.k9w)
	{
		x1x = w5u.k9w.toString();
	}
	return x1x;
}

function e5k(x1x)
{
	if (x1x == "2-0" || x1x == "20" || x1x == "1-0" || x1x == "10")
	{
		return k0x.c5c;
	}
	else if (x1x == "1-1" || x1x == "11" || x1x == "1/2-1/2" ||
		x1x == "1/21/2" || x1x == "0.5-0.5")
	{
		return k0x.z8j;
	}
	else if (x1x == "0-2" || x1x == "02" || x1x == "0-1" || x1x == "01")
	{
		return k0x.a5e;
	}
	else
	{
		return k0x.c2f;
	}
}

function b3g(x1x)
{
	return x7l(x1x, 0);
}

function z1f(x1x)
{
	return k2t(x1x);
}

function k1p(x1x)
{
	return b3m(x1x);
}

function q4j(value)
{
	return value ? "1" : "";
}

function c3o(x1x)
{
	return x1x == "1";
}

function e5y(s4y)
{
	let w5u = new b2s();

	
	w5u.h9i.c9x.i0c(z5w(s4y.c1a));
	if (!v1d(s4y.l7q))
	{
		w5u.h9i.h7h.k6k = z5w(s4y.l7q);
		w5u.h9i.h7h.a1m = s4l(s4y.i6w, 0);
		if (!v1d(s4y.b3o))
		{
			let d1a = l3z(s4y.b3o);
			w5u.h9i.h7h.b0d = d1a.b0d;
		}
		w5u.h9i.h7h.y0s = c3o(s4y.r7r);
		w5u.h9i.h7h.h7a = c5y(z5w(s4y.r2q));
	}
	w5u.h9i.s7m = b3g(z5w(s4y.k9u));
	w5u.h9i.time = k1p(z5w(s4y.i7c));
	w5u.h9i.d7u = z5w(s4y.l5c);
	w5u.h9i.h7a = f3e(z5w(s4y.a0c));

	
	w5u.d7t.c9x.i0c(z5w(s4y.w7k));
	if (!v1d(s4y.u3g))
	{
		w5u.d7t.h7h.k6k = z5w(s4y.u3g);
		w5u.d7t.h7h.a1m = s4l(s4y.x7c, 0);
		if (!v1d(s4y.c0k))
		{
			let d1a = l3z(s4y.c0k);
			w5u.d7t.h7h.b0d = d1a.b0d;
		}
		w5u.d7t.h7h.y0s = c3o(s4y.y7m);
		w5u.d7t.h7h.h7a = c5y(z5w(s4y.m4z));
	}
	w5u.d7t.s7m = b3g(z5w(s4y.n8j));
	w5u.d7t.time = k1p(z5w(s4y.l8r));
	w5u.d7t.d7u = z5w(s4y.m5i);
	w5u.d7t.h7a = f3e(z5w(s4y.n6a));

	
	w5u.r9l.d7u = z5w(s4y.q0b);
	w5u.r9l.u6z = z5w(s4y.v5v);
	w5u.r9l.m1d = l3z(s4y.u8c);
	w5u.r9l.t3w = l3z(s4y.b1m);

	c0y(z5w(s4y.s3n), w5u.r9l);
	
	
	
	let c7f = x4w(s4y.c7f);
	if (c7f != n8v.n4w)
	{
		w5u.r9l.q7o = c7f;
	}
	w5u.r9l.h7a = c5y(z5w(s4y.r2j));
	w5u.r9l.t5u = s4l(s4y.j0w, 0);
	let s3n = j7v(s4y.s3n);
	if (s3n != v3a.c2f)
	{
		w5u.r9l.type= s3n;
	}
	w5u.r9l.d6p = s4l(s4y.w7c, 0);
	w5u.r9l.r2w = c3o(s4y.q5j);
	w5u.r9l.u8v = c3o(s4y.y5d);
	w5u.r9l.f4c = c3o(s4y.u0h);
	w5u.r9l.s9q = c3o(s4y.y3b);

	
	w5u.s9p.k6k = z5w(s4y.s9p);

	
	w5u.q8c.d7u = z5w(s4y.m8h);
	w5u.q8c.p2k = z5w(s4y.c2m);
	w5u.q8c.p4n = l3z(s4y.x9l);
	w5u.q8c.p4y = s4l(s4y.y0v, 0);
	w5u.q8c.m9s = l3z(s4y.b5w);
	w5u.q8c.m2w = u7k(s4y.s4k);

	
	w5u.d7u.d7u = z5w(s4y.d7u);

	
	w5u.d1a = l3z(s4y.d1a);
	w5u.d6s = e5k(z5w(s4y.d6s));
	w5u.d0n = z1f(z5w(s4y.d0n));
	w5c(z5w(s4y.k9w), w5u);

	
	let i3f = s4l(s4y.i3f, 0);
	w5u.i3f.z0r(i3f);

  
  w5u.id.l1y = s4y.l1y;

	return w5u;
}

function w2b(w5u)
{
	let s4y = new o1s();

	
	s4y.c1a = w5u.h9i.c9x.k6k();
	if (w5u.h9i.h7h.k6k.length)
	{
		s4y.l7q = w5u.h9i.h7h.k6k;
		if (w5u.h9i.h7h.a1m)
		{
			s4y.i6w = w5u.h9i.h7h.a1m;
		}
		if (w5u.h9i.h7h.b0d)
		{
			let k6c = new i0b();
			k6c.b0d = w5u.h9i.h7h.b0d;
			s4y.b3o = b8s(k6c);
		}
		if (w5u.h9i.h7h.y0s)
		{
			s4y.r7r = q4j(w5u.h9i.h7h.y0s);
		}
		if (w5u.h9i.h7h.h7a != y2m.c2f)
		{
			s4y.r2q = s1s(w5u.h9i.h7h.h7a);
		}
	}
	s4y.k9u = q6r(w5u.h9i.s7m);
	s4y.i7c = z5b(w5u.h9i.time);
	s4y.l5c = w5u.h9i.d7u;

	
	s4y.w7k = w5u.d7t.c9x.k6k();
	if (w5u.d7t.h7h.k6k.length)
	{
		s4y.u3g = w5u.d7t.h7h.k6k;
		if (w5u.d7t.h7h.a1m)
		{
			s4y.x7c = w5u.d7t.h7h.a1m;
		}
		if (w5u.d7t.h7h.b0d)
		{
			let j0h = new i0b();
			j0h.b0d = w5u.d7t.h7h.b0d;
			s4y.c0k = b8s(j0h);
		}
		if (w5u.d7t.h7h.y0s)
		{
			s4y.y7m = q4j(w5u.d7t.h7h.y0s);
		}
		if (w5u.d7t.h7h.h7a != y2m.c2f)
		{
			s4y.m4z = s1s(w5u.d7t.h7h.h7a);
		}
	}
	s4y.n8j = q6r(w5u.d7t.s7m);
	s4y.l8r = z5b(w5u.d7t.time);
	s4y.m5i = w5u.d7t.d7u;

	
	s4y.q0b = w5u.r9l.d7u;
	s4y.v5v = w5u.r9l.u6z;
	s4y.u8c = b8s(w5u.r9l.m1d);
	s4y.b1m = b8s(w5u.r9l.t3w);
	s4y.c7f = x2u(w5u.r9l.q7o);
	s4y.j0w = j3r(w5u.r9l.t5u);
	s4y.r2j = s1s(w5u.r9l.h7a);
	s4y.s3n = o2v(w5u.r9l.type);
	s4y.w7c = j3r(w5u.r9l.d6p);
	s4y.q5j = q4j(w5u.r9l.r2w);
	s4y.y5d = q4j(w5u.r9l.u8v);
	s4y.u0h = q4j(w5u.r9l.f4c);
	s4y.y3b = q4j(w5u.r9l.s9q);

	
	s4y.s9p = w5u.s9p.k6k;

	
	s4y.m8h = w5u.q8c.d7u;
	s4y.c2m = w5u.q8c.p2k;
	s4y.x9l = b8s(w5u.q8c.p4n);
	s4y.y0v = j3r(w5u.q8c.p4y);
	s4y.b5w = b8s(w5u.q8c.m9s);
	s4y.s4k = m0f(w5u.q8c.m2w);

	
	s4y.d7u = w5u.d7u.d7u;

	
	s4y.d1a = b8s(w5u.d1a);
	s4y.d6s = w8i(w5u.d6s);
	s4y.d0n = b9l(w5u.d0n);
	s4y.k9w = h6j(w5u);

	
	s4y.i3f = j3r(w5u.i3f.l7f());

	return s4y;
}

const t9y  					= "White";
const n4b					= "WhiteTeam";
const d6x 				= "WhiteTeamNumber";
const u4b 					= "WhiteTeamYear";
const y1n 				= "WhiteTeamSeason";
const m1r 			= "WhiteTeamCountry";
const m9w 						= "WhiteRating";
const n7s 							= "WhiteTime";
const c2d 							= "WhiteElo";
const u4x  						= "WhiteTitle";
const e2l						= "WhiteCountry";

const q9k						= "Black";
const x0l					= "BlackTeam";
const t0l 				= "BlackTeamNumber";
const z2z 					= "BlackTeamYear";
const b4j 				= "BlackTeamSeason";
const v5r 			= "BlackTeamCountry";
const i0i 						= "BlackRating";
const u0k 							= "BlackTime";
const o5c 							= "BlackElo";
const p1n  						= "BlackTitle";
const y0y						= "BlackCountry";

const w1p 				= "Event";
const v4p				= "Site";
const o0h 			 	= "EventDate";
const w2j 		 	= "EventEndDate";
const k6a 			 	= "EventSpeed";
const q6p 	 	= "EventCategory";
const q4s 		 	= "EventCountry";
const m7j 			 	= "EventType";
const a4b 		 	= "EventRounds";
const d8s 			 	= "EventTeams";
const n4a		 	= "EventComplete";
const p9b 	= "EventThreePoints";
const i8u	= "EventBoardPoints";

const q0s 							= "Annotator";

const s4a 				 		= "SourceTitle";
const p3l 				 		= "Publication";
const d7i		 		= "SourcePublisher";
const i4c		 		= "PublicationDate";
const c3m 				 		= "SourceDate";
const n4t 		= "SourceVersionNumber";
const s5a 	 		= "SourceVersionDate";
const o9l 			 		= "SourceQuality";

const v1x 					 		    = "Title";

const p6f 							 		= "Date";
const d6i 								= "Result";
const v7r 										= "ECO";
const y3x 									= "Round";

const e6z			 							= "Tags";

const h0p 									= "Setup";
const d7b 										= "FEN";
const o1a 							= "PlyCount";

const m7p      							= "GUID";

const r5y = "(";
const t8a   = ")";
const y1t    = "{";

class o7f
{

constructor()
{
  this.q1s = new s7c();
  this.g5y = new x6l();
  this.w7u = new s3i();
  this.c3d = false;
  this.y9a = false;
  this.s5o = false;
  this.e0v = '';
}

}

class p6z
{

constructor(lines)
{
	this.e4p = new o1s();
	this.f7i = lines;
	this.u4i = 0;
	this.f2x = '';
	this.z2k = 0;
	this.o5o = 0;
	this.v0h = '';
	this.f2f = 0;
	this.x1i = false;
	this.i0h = '';
	this.b5v = '';
	this.k7k = null;
	this.o6r = new g8w();
	this.v6m = '';
	this.g5b = false;
 	this.q2r = false;
	this.v0w = false;
}

u5z()
{
  this.f2f = 0;
	let y9m = new w3p();
	this.k7k = y9m.m4t;
	try
	{
		this.k8g();
	}
	catch (err)
	{
	}
	y9m.s6s = e5y(this.e4p);
  y9m.h0u = this.f2f;
	return y9m;
}

k8g()
{
	this.x1i = false;
	this.v4r();
	if (this.x1i)
	{
		this.o0n = r3t(this.b5v);
		this.k7k.h1z(this.o0n, 1);
	}
 	this.o7c();
}

d1g()
{
	if (this.f7i.length == 0)
	{
		return false;
	}
	if (this.u4i >= this.f7i.length)
	{
		return false;
	}
	else
	{
		this.f2x = this.f7i[this.u4i];
		this.z2k = this.f2x.length;
		this.o5o = 0;
		this.u4i++;
		return true;
	}
}

v4r()
{
	this.v0w = false;
	this.q2r = false;
	while (true)
	{
		if (!this.d1g())
		{
			return;
		}
		this.x8l();
		if (!this.i6i())
		{
			return;
		}
		this.a2m();
	}
}


f3t(u9t)
{
	let x1x = this.v0h.substr(1, this.v0h.length - 1);
	return x1x.toUpperCase() === u9t.toUpperCase();
}

o7c()
{
 	if (this.v0h.length == 0) return;
	this.g5b = false;

	while (this.v0h[0] == '{')
	{
		let j8o = this.y5i();
    let h6o = new o7f();
		this.t5j(j8o, h6o);
    if (!h6o.q1s.v9y())
		{
			this.k7k.z0m(h6o.q1s);
		}
 		if (!h6o.g5y.v9y())
		{
			this.k7k.p0y(h6o.g5y);
		}
		if (!h6o.w7u.v9y())
		{
			this.k7k.e6u(h6o.w7u);
		}
 		j8o = h6o.e0v.trim();
    if (j8o.length)
    {
      
      
      if (j8o.startsWith("[%a") && j8o.length > 7)
      {
        j8o = j8o.substr(7, j8o.length).trim();
      }
      let u4e = this.k7k.u4e();
      if (u4e.length)
      {
        u4e += ' ';
      }
      u4e += j8o;
      this.k7k.p7b(u4e);
		}
		this.x8l();
		if (this.v0h.length == 0)
		{
			return;
		}
	}
	this.m9a(this.k7k.x8m(), this.k7k.o0n());
}

m9a(k1n, w8l)
{
  let s0o = k1n.a0s();
  let h4h = w8l.a0s();

	let r6e = null;
 	let v4y = new d5f();

	do
	{
		if (this.v0h == r5y)
		{
			if (!r6e)
			{
				throw "error";
			}
			if (!this.x8l())
			{
				throw "error";
			}

 			h4h.g5u(s0o.x8g.h9g());
			h4h.l5v(v4y);
			this.k7k.g5u(s0o); 
      this.m9a(s0o, h4h);
			this.k7k.a0e(s0o); 
			h4h.a0e(s0o.x8g.h9g());

			while (this.x8l())
			{
				if (this.v0h != r5y)
				{
					break;
				}
				if (!this.x8l())
				{
					throw "error";
				}
        h4h.g5u(s0o.x8g.h9g());
				h4h.l5v(v4y);
				this.k7k.g5u(s0o); 
				this.m9a(s0o, h4h);
				this.k7k.a0e(s0o);  
				h4h.a0e(s0o.x8g.h9g());
			}
		}

		if (this.v0h == t8a)
		{
			break;
		}

		if (
			this.v0h == "1-0" ||
			this.v0h == "2-0" ||
			this.v0h == "0-1" ||
			this.v0h == "0-2" ||
			this.v0h == "1/2-1/2" ||
			this.v0h == "1-1" ||
			this.v0h == "*" ||
			this.v0h == "**" ||
			this.v0h == "-*" ||
			this.v0h == "1-0*" ||
			this.v0h == "2-0*" ||
			this.v0h == "0-1*" ||
			this.v0h == "0-2*" ||
			this.v0h == "1/2-1/2*" ||
			this.v0h == "1-1*" ||
			this.v0h == "2-00*" ||
			this.v0h == "00-2*")
			break;

		if (this.v0h[0] == '$')
		{
			if (!r6e)
			{
				throw "error";
			}
			let b1f = y7q(this.v0h);
			if (b1f != f1z.c2f)
			{
				r6e.b9h(b1f);
				continue;
			}
			let style = y3m(this.v0h);
			if (style != n8u.c2f)
			{
				r6e.r8u(style);
				continue;
			}
			let value = c1e(this.v0h);
			if (value != w6u.c2f)
			{
				r6e.n9a(value);
				continue;
			}
			let a2l = n4z(this.v0h);
			if (a2l != o2p.c2f)
			{
				r6e.t8m(a2l);
				continue;
			}
			continue;
		}
		if (this.v0h[0] == '{')
		{
			let j8o = this.y5i();
      let h6o = new o7f();
  		this.t5j(j8o, h6o);
      if (!h6o.q1s.v9y())
      {
		  	if (r6e)
			  {
				  r6e.g5c(h6o.q1s);
				}
			}
   		if (!h6o.g5y.v9y())
      {
				if (r6e)
				{
					r6e.l6w(h6o.g5y);
				}
			}
   		if (!h6o.w7u.v9y())
      {
				if (r6e)
				{
					r6e.l9z(h6o.w7u);
				}
			}
      if (h6o.y9a)
      {
				if (r6e)
				{
					r6e.t3h();
				}
			}
      if (h6o.s5o)
      {
				if (r6e)
				{
					r6e.x9e();
				}
			}
   		j8o = h6o.e0v.trim();
      if (!j8o.length)
      {
        continue;
      }
			if (r6e)
			{
        let b5p = r6e.b5p();
        if (b5p.length)
        {
          b5p += ' ';
        }
        b5p += j8o;
				r6e.w3q(b5p);
			}
			else
			{
        if (this.v6m.length)
        {
   				this.v6m += ' ';
        }
				this.v6m += j8o;
				this.g5b = true;
			}
			continue;
		}
		if (!this.e6y())
		{
			continue;
		}
		let j7x = false;
		if (this.v0h[this.v0h.length] == '*')
		{
			this.v0h = this.v0h.substr(0, this.v0h.length - 1);
			j7x = true;
		}
 		let e4y = this.a7p(this.v0h);
    let h9g = q8i(h4h, this.v0h);
 		v4y = h4h.v4y();
		h4h.a0e(h9g);
		let x8g = l4p(h9g);
    x8g.r8u(e4y);
    this.k7k.v9t(s0o, x8g);
		r6e = s0o.x8g;
		if (this.g5b)
		{
			r6e.z0h(this.v6m);
			this.g5b = false;
      this.v6m = '';
		}
		if (j7x)
		{
			break;
		}
	} while (this.x8l());
}

a7p(x1x)
{
	if (x1x.endsWith("??"))
	{
		x1x = x1x.subString(0, x1x.length-2);
		return n8u.x0c;
	}
	else if (x1x.endsWith("!!"))
	{
		x1x = x1x.subString(0, x1x.length-2);
		return n8u.m2p;
	}
	else if (x1x.endsWith("?!"))
	{
		x1x = x1x.subString(0, x1x.length-2);
		return n8u.p0b;
	}
	else if (x1x.endsWith("!?"))
	{
		x1x = x1x.subString(0, x1x.length-2);
		return n8u.h5r;
	}
	else if (x1x.endsWith("?"))
	{
		x1x = x1x.subString(0, x1x.length-1);
		return n8u.s1p;
	}
	else if (x1x.endsWith("!"))
	{
		x1x = x1x.subString(0, x1x.length-1);
		return n8u.u5o;
	}
	else
	{
		return n8u.c2f;
	}
}

e6y()
{
	let l8b = this.v0h.length;
	let s0o = -1;
	for (let i = 0; i < l8b; i++)
	{
		if (this.v0h[i] == '.')
		{
			s0o = i;
		}
	}
	if (s0o != -1)
	{
		this.v0h = this.v0h.substr(s0o + 1 , l8b);
	}
	return this.v0h.length != 0;
}

x8l()
{
	this.v0h = "";
	let v6z = '';
	let index = 0;
	let l8b = 0;
	while (true)
	{
		let w3l = 0;
		if (this.o5o < this.z2k)
		{
			w3l = this.f2x[this.o5o];
		}
		else
		{
			w3l = 0;
		}
		if (!w3l)
		{
			if (l8b)
			{
				break;
			}
			if (!this.d1g())
			{
				return false;
			}
			continue;
		}
		if (w3l == ';')
		{
			if (!this.d1g())
			{
				return false;
			}
			continue;
		}
		if (w3l == '(')
		{
			if (l8b)
			{
				break;
			}
			else
			{
				this.o5o++;
				this.v0h = r5y;
				return true;
			}
		}
		if (w3l == ')')
		{
			if (l8b)
			{
				break;
			}
			else
			{
				this.o5o++;
				this.v0h = t8a;
				return true;
			}
		}
		if (w3l == '{')
		{
			if (l8b)
			{
				break;
			}
			else
			{
				this.o5o++;
				this.v0h = y1t;
				return true;
			}
		}
		if (w3l == ' ' || w3l == '\r' || w3l == '\n')
		{
			if (l8b)
			{
				this.o5o++;
				break;
			}
			else
			{
				this.o5o++;
				continue;
			}
		}
		v6z += w3l;
		index++;
		l8b++;
		this.o5o++;
	}
	if (index)
	{
		this.v0h += v6z;
	}
	return this.v0h.length != 0;
}

y5i()
{
	let x1x = '';
	let v6z = '';
	let index = 0;
	let y1k = 0;
	while (true)
	{
		let w3l = 0;
		if (this.o5o < this.z2k)
		{
			w3l = this.f2x[this.o5o];
		}
		else
		{
			w3l = 0;
		}
		if (!w3l)
		{
			if (!this.d1g())
			{
				break;
			}
			if (index > 0)
			{
				v6z += ' '; 
				index++;
			}
			continue;
		}
		if (w3l == '{')
		{
			y1k++;
		}
		if (w3l == '}')
		{
			if (y1k)
			{
				y1k--;
			}
			else
			{
				this.o5o++;
				break;
			}
		}
		v6z += w3l;
		index++;
		this.o5o++;
	}
	if (index)
	{
		x1x += v6z;
	}
	return x1x.trim();
}

j8u()
{
	this.i0h = "";

	let m3j = 0;
	let l8b = this.f2x.length;
	for (let i = l8b - 1; i >= 0; i--)
	{
		if (this.f2x[i] == ']')
		{
			m3j = i;
			break;
		}
	}
	let index = 0;
	let z6z = false;
	let v6z = '';
	while (true)
	{
		let w3l = 0;
		if (this.o5o < this.z2k)
		{
			w3l = this.f2x[this.o5o];
		}
		else
		{
			w3l = 0;
		}
		if (!w3l)
		{
			if (!this.d1g())
			{
				break;
			}
			continue;
		}
		if (w3l == '\"')
		{
			z6z = true;
			this.o5o++;
			continue;
		}
		if (w3l == ']')
		{
			if (this.o5o == m3j)
			{
				this.o5o++;
				break;
			}
		}
		if (z6z)
		{
			v6z += w3l;
			index++;
		}
		this.o5o++;
	}
	if (index)
	{
		this.i0h += v6z;
	}
}

i6i()
{
	if (this.v0h.length == 0)
	{
		return false;
	}
	if (this.v0h[0] != '[')
	{
		return false;
	}
	
	let index = this.o5o;
	let o5y = false;
	while (index < this.z2k)
	{
		let w3l = this.f2x[index++];
		if (w3l == '\"' && this.f2x[index] == ']')
		{
			index++;
			o5y = true;
			continue;
		}
		if (w3l == '\r' || w3l == '\n')
		{
			break;
		}
		if (o5y)
		{
			o5y = false;
			break;
		}
	}
	return o5y;
}

a2m()
{
	
	if (this.f3t(t9y))
	{
		this.j8u();
		this.e4p.c1a = this.i0h;
		return;
	}
	if (this.f3t(n4b))
	{
		this.j8u();
		this.e4p.l7q = this.i0h;
		return;
	}
	if (this.f3t(d6x))
	{
		this.j8u();
		this.e4p.i6w = this.i0h;
		return;
	}
	if (this.f3t(u4b))
	{
		this.j8u();
		this.e4p.b3o = this.i0h;
		return;
	}
	if (this.f3t(y1n))
	{
		this.j8u();
		this.e4p.r7r = this.i0h;
		return;
	}
	if (this.f3t(m1r))
	{
		this.j8u();
		this.e4p.r2q = this.i0h;
		return;
	}
	if (this.f3t(c2d) || this.f3t(m9w))
	{
		this.j8u();
		this.e4p.k9u = this.i0h;
		return;
	}
	if (this.f3t(n7s))
	{
		this.j8u();
		this.e4p.i7c = this.i0h;
		return;
	}
	if (this.f3t(u4x))
	{
		this.j8u();
		this.e4p.l5c = this.i0h;
		return;
	}
	if (this.f3t(e2l))
	{
		this.j8u();
		this.e4p.a0c = this.i0h;
		return;
	}

	
	if (this.f3t(q9k))
	{
		this.j8u();
		this.e4p.w7k = this.i0h;
		return;
	}
	if (this.f3t(x0l))
	{
		this.j8u();
		this.e4p.u3g = this.i0h;
		return;
	}
	if (this.f3t(t0l))
	{
		this.j8u();
		this.e4p.x7c = this.i0h;
		return;
	}
	if (this.f3t(z2z))
	{
		this.j8u();
		this.e4p.c0k = this.i0h;
		return;
	}
	if (this.f3t(b4j))
	{
		this.j8u();
		this.e4p.y7m = this.i0h;
		return;
	}
	if (this.f3t(v5r))
	{
		this.j8u();
		this.e4p.m4z = this.i0h;
		return;
	}
	if (this.f3t(o5c) || this.f3t(i0i))
	{
		this.j8u();
		this.e4p.n8j = this.i0h;
		return;
	}
	if (this.f3t(u0k))
	{
		this.j8u();
		this.e4p.l8r = this.i0h;
		return;
	}
	if (this.f3t(p1n))
	{
		this.j8u();
		this.e4p.m5i = this.i0h;
		return;
	}
	if (this.f3t(y0y))
	{
		this.j8u();
		this.e4p.n6a = this.i0h;
		return;
	}

	
	if (this.f3t(w1p))
	{
		this.j8u();
		this.e4p.q0b = this.i0h;
		return;
	}
	if (this.f3t(v4p))
	{
		this.j8u();
		this.e4p.v5v = this.i0h;
		return;
	}
	if (this.f3t(o0h))
	{
		this.j8u();
		this.e4p.u8c = this.i0h;
		return;
	}
	if (this.f3t(w2j))
	{
		this.j8u();
		this.e4p.b1m = this.i0h;
		return;
	}
	if (this.f3t(k6a))
	{
		this.j8u();
		this.e4p.c7f = this.i0h;
		return;
	}
	if (this.f3t(q6p))
	{
		this.j8u();
		this.e4p.j0w = this.i0h;
		return;
	}
	if (this.f3t(q4s))
	{
		this.j8u();
		this.e4p.r2j = this.i0h;
		return;
	}
	if (this.f3t(m7j))
	{
		this.j8u();
		this.e4p.s3n = this.i0h;
		return;
	}
	if (this.f3t(a4b))
	{
		this.j8u();
		this.e4p.w7c = this.i0h;
		return;
	}
	if (this.f3t(d8s))
	{
		this.j8u();
		this.e4p.q5j = this.i0h;
		return;
	}
	if (this.f3t(n4a))
	{
		this.j8u();
		this.e4p.y5d = this.i0h;
		return;
	}
	if (this.f3t(p9b))
	{
		this.j8u();
		this.e4p.u0h = this.i0h;
		return;
	}
	if (this.f3t(i8u))
	{
		this.j8u();
		this.e4p.y3b = this.i0h;
		return;
	}

	
	if (this.f3t(q0s))
	{
		this.j8u();
		this.e4p.s9p = this.i0h;
		return;
	}

	
	if (this.f3t(s4a))
	{
		this.j8u();
		this.e4p.m8h = this.i0h;
		return;
	}
	if (this.f3t(p3l))
	{
		this.j8u();
		this.e4p.m8h = this.i0h;
		return;
	}
	if (this.f3t(d7i))
	{
		this.j8u();
		this.e4p.c2m = this.i0h;
		return;
	}
	if (this.f3t(c3m))
	{
		this.j8u();
		this.e4p.x9l = this.i0h;
		return;
	}
	if (this.f3t(i4c))
	{
		this.j8u();
		this.e4p.x9l = this.i0h;
		return;
	}
	if (this.f3t(n4t))
	{
		this.j8u();
		this.e4p.y0v = this.i0h;
		return;
	}
	if (this.f3t(s5a))
	{
		this.j8u();
		this.e4p.b5w = this.i0h;
		return;
	}
	if (this.f3t(o9l))
	{
		this.j8u();
		this.e4p.s4k = this.i0h;
		return;
	}

	
	if (this.f3t(v1x))
	{
		this.j8u();
		this.e4p.d7u = this.i0h;
		return;
	}

	
	if (this.f3t(p6f))
	{
		this.j8u();
		this.e4p.d1a = this.i0h;
		return;
	}
	if (this.f3t(d6i))
	{
		this.j8u();
		this.e4p.d6s = this.i0h;
		return;
	}
	if (this.f3t(v7r))
	{
		this.j8u();
		this.e4p.d0n = this.i0h;
		return;
	}
	if (this.f3t(y3x))
	{
		this.j8u();
		this.e4p.k9w = this.i0h;
		return;
	}

	
	if (this.f3t(e6z))
	{
		this.j8u();
		this.e4p.i3f = this.i0h;
		return;
	}

	
	if (this.f3t(h0p))
	{
		this.j8u();
		return;
	}
	if (this.f3t(d7b))
	{
		this.j8u();
		if (this.i0h.length == 0 || this.i0h == "?")
		{
			return;
		}
		this.x1i = true;
		this.b5v = this.i0h;
		return;
	}
	if (this.f3t(o1a))
	{
		this.j8u();
		this.f2f = x7l(this.i0h, 0);
		return;
	}
  
 	if (this.f3t(m7p))
	{
		this.j8u();
		this.e4p.l1y = this.i0h;
		return;
	}

}

t2c(j8o)
{
	let m3d = new s7c();
	let x1x = j8o.substr(6, j8o.length - 6);
	let c9q = x1x.split(",");
	for (const s of c9q)
	{
		if (s.length < 5)
		{
			continue;
		}
		let a7j = d9s(s.substr(1, 2));
		let g5w = d9s(s.substr(3, 2));
		if (s[0] == 'R')
		{
			let j3b = w1u(a7j, g5w, c3j.s3e);
			m3d.add(j3b);
		}
		else if (s[0] == 'G')
		{
			let j3b = w1u(a7j, g5w, c3j.n8h);
			m3d.add(j3b);
		}
		else if (s[0] == 'Y')
		{
			let j3b = w1u(a7j, g5w, c3j.a4f);
			m3d.add(j3b);
		}
	}
	return m3d;
}

y4e(j8o)
{
	let l2s = new x6l();
	let x1x = j8o.substr(6, j8o.length - 6);
	let c9q = x1x.split(",");
	for (const s of c9q)
	{
		if (s.length < 3)
		{
			continue;
		}
 		let h5t = d9s(s.substr(1, 2));
		if (s[0] == 'R')
		{
      let n2g = s7r(h5t, c7m.p2v);
			l2s.add(n2g);
		}
		else if (s[0] == 'G')
		{
      let n2g = s7r(h5t, c7m.y0a);
			l2s.add(n2g);
		}
		else if (s[0] == 'Y')
		{
      let n2g = s7r(h5t, c7m.m9g);
			l2s.add(n2g);
		}
	}
	return l2s;
}

o4u(j8o)
{
	let x1x = j8o.substr(6, j8o.length - 6);
	let s0o = x1x.indexOf("]");
	if (s0o != -1)
	{
		let w7u = new s3i();
		let value = x7l(x1x.substr(0, s0o), 0);
		w7u.z0r(value);
		return w7u;
	}
	else
	{
		return new s3i();
	}
}


t5j(j8o, h6o)
{
	if (
		j8o.startsWith("[%cal") ||
    j8o.startsWith("[%csb") ||
		j8o.startsWith("[%csl") ||
		j8o.startsWith("[%mdl") ||
		j8o.startsWith("[%evp") ||
		j8o.startsWith("[%eval") ||
		j8o.startsWith("[%emt") ||
		j8o.startsWith("[%tqu") ||
		j8o.startsWith("[%tqu") ||
		j8o.startsWith("[%pws") ||
		j8o.startsWith("[%pth") ||
		j8o.startsWith("[%eog"))
	{
		let m5g = 0;
		{
     	let q1j = j8o.indexOf("[%cal");
			if (q1j != -1)
			{
        let y2e = j8o.indexOf("]", q1j);
				if (y2e != -1)
				{
     			let p3n = j8o.substring(q1j, y2e + 1);
					h6o.q1s = this.t2c(p3n).a0s();
					if (y2e > m5g) m5g = y2e;
				}
			}
		}
		{
     	let q1j = j8o.indexOf("[%csb");
   		if (q1j != -1)
			{
        let y2e = j8o.indexOf("]", q1j);
				if (y2e != -1)
				{
          let z4w = j8o.substring(q1j, y2e + 1);
					h6o.g5y = this.y4e(z4w).a0s();
					if (y2e > m5g) m5g = y2e;
				}
			}
		}
		{
      let q1j = j8o.indexOf("[%csl");
			if (q1j != -1)
			{
        let y2e = j8o.indexOf("]", q1j);
				if (y2e != -1)
				{
          let z4w = j8o.substring(q1j, y2e + 1);
					h6o.g5y = this.y4e(z4w).a0s();
					if (y2e > m5g) m5g = y2e;
				}
			}
		}
		{
      let q1j = j8o.indexOf("[%mdl");
			if (q1j != -1)
			{
        let y2e = j8o.indexOf("]", q1j);
				if (y2e != -1)
				{
          let n7e = j8o.substring(q1j, y2e + 1);
					h6o.w7u = this.o4u(n7e).a0s();
					if (y2e > m5g) m5g = y2e;
				}
			}
		}
		{
      let q1j = j8o.indexOf("[%evp");
			if (q1j != -1)
			{
        let y2e = j8o.indexOf("]", q1j);
				if (y2e != -1)
				{
					if (y2e > m5g) m5g = y2e;
				}
			}
		}
		{
      let q1j = j8o.indexOf("[%eval");
			if (q1j != -1)
			{
        let y2e = j8o.indexOf("]", q1j);
				if (y2e != -1)
				{
					if (y2e > m5g) m5g = y2e;
				}
			}
		}
		{
      let q1j = j8o.indexOf("[%emt");
			if (q1j = -1)
			{
        let y2e = j8o.indexOf("]", q1j);
				if (y2e != -1)
				{
					if (y2e > m5g) m5g = y2e;
				}
			}
		}
		{
      let q1j = j8o.indexOf("[%tqu");
			if (q1j != -1)
			{
        let y2e = j8o.indexOf("]", q1j);
				if (y2e != -1)
				{
					if (y2e > m5g) m5g = y2e;
				}
			}
		}
		{
      let q1j = j8o.indexOf("[%pws");
			if (q1j != -1)
			{
        let y2e = j8o.indexOf("]", q1j);
				if (y2e != -1)
				{
          h6o.c3d = true;
					if (y2e > m5g) m5g = y2e;
				}
			}
		}
		{
      let q1j = j8o.indexOf("[%pth");
			if (q1j != -1)
			{
        let y2e = j8o.indexOf("]", q1j);
				if (y2e != -1)
				{
          h6o.y9a = true;
					if (y2e > m5g) m5g = y2e;
				}
			}
		}
		{
      let q1j = j8o.indexOf("[%eog");
			if (q1j != -1)
			{
        let y2e = j8o.indexOf("]", q1j);
				if (y2e != -1)
				{
					h6o.s5o = true; 
					if (y2e > m5g) m5g = y2e;
				}
			}
		}
    h6o.e0v = j8o.substring(m5g + 1);
	}
	else
	{
		h6o.e0v = j8o;
	}
}

}

class x9h
{

constructor()
{
  this.h0u = 0;
	this.s6s = new o1s();
	this.m4t = new c8l();
}

a0s()
{
	let q0q = new x9h();
  q0q.h0u = this.h0u;
	q0q.s6s = this.s6s.a0s();
	q0q.m4t = this.m4t.a0s();
	return q0q;
}

}

class o1s
{

constructor()
{
	this.c1a = '';
	this.l7q = '';
	this.i6w = '';
	this.b3o = '';
	this.r7r = '';
	this.r2q = '';
	this.k9u = '';
	this.i7c = '';
	this.l5c = '';
  this.a0c = '';
	this.w7k = '';
	this.u3g = '';
	this.x7c = '';
	this.c0k = '';
	this.y7m = '';
	this.m4z = '';
	this.n8j = '';
	this.l8r = '';
	this.m5i = '';
  this.n6a = '';
	this.q0b = '';
	this.v5v = '';
	this.u8c = '';
	this.b1m = '';
	this.c7f = '';
	this.j0w = '';
	this.r2j = '';
	this.s3n = '';
	this.w7c = '';
	this.q5j = '';
	this.y5d = '';
	this.u0h = '';
	this.y3b = '';
	this.s9p = '';
	this.m8h = '';
	this.c2m = '';
	this.x9l = '';
	this.y0v = '';
	this.b5w = '';
	this.s4k = '';
	this.d7u = '';
	this.d1a = '';
	this.d6s = '';
	this.d0n = '';
	this.k9w = '';
	this.i3f = '';
  this.l1y = '';
}

a0s()
{
	let l1o = new o1s();

	l1o.c1a = this.c1a;
	l1o.l7q = this.l7q;
	l1o.i6w = this.i6w;
	l1o.b3o = this.b3o;
	l1o.r7r = this.r7r;
	l1o.r2q = this.r2q;
	l1o.k9u = this.k9u;
	l1o.i7c = this.i7c;
	l1o.l5c = this.l5c;
	l1o.a0c = this.a0c;

	l1o.w7k = this.w7k;
	l1o.u3g = this.u3g;
	l1o.x7c = this.x7c;
	l1o.c0k = this.c0k;
	l1o.y7m = this.y7m;
	l1o.m4z = this.m4z;
	l1o.n8j = this.n8j;
	l1o.l8r = this.l8r;
	l1o.m5i = this.m5i;
	l1o.n6a = this.n6a;

	l1o.q0b = this.q0b;
	l1o.v5v = this.v5v;
	l1o.u8c = this.u8c;
	l1o.b1m = this.b1m;
	l1o.c7f = this.c7f;
	l1o.j0w = this.j0w;
	l1o.r2j = this.r2j;
	l1o.s3n = this.s3n;
	l1o.w7c = this.w7c;
	l1o.q5j = this.q5j;
	l1o.y5d = this.y5d;
	l1o.u0h = this.u0h;
	l1o.y3b = this.y3b;

	l1o.s9p = this.s9p;

	l1o.m8h = this.m8h;
	l1o.c2m = this.c2m;
	l1o.x9l = this.x9l;
	l1o.y0v = this.y0v;
	l1o.b5w = this.b5w;
	l1o.s4k = this.s4k;

	l1o.d7u = this.d7u;

	l1o.d1a = this.d1a;
	l1o.d6s = this.d6s;
	l1o.d0n = this.d0n;
	l1o.k9w = this.k9w;

	l1o.i3f = this.i3f;
 	l1o.l1y = this.l1y;

	return l1o;
}

}


const g2k =
[
		[ y2m.c2f, 				  									"",											            "", 																	"",   ""    ],
		[ y2m.s9h, 										  "Afghanistan",											"Afghanistan", 												"af", "AFG" ],
		[ y2m.h7i, 									 	"AlandIslands",										  "Aland", 															"ax", "ALA" ],
		[ y2m.g1t,  											 	"Albania",													"Albania", 														"al", "ALB" ],
		[ y2m.x2e,  											 	"Algeria",													"Algeria", 														"dz", "DZA" ],
		[ y2m.o8n,  								 	"AmericanSamoa",										"American Samoa", 										"as", "ASM" ],
		[ y2m.l2q,  											 	"Andorra",													"Andorra", 														"ad", "AND" ],
		[ y2m.x0d,                           "Angola",													  "Angola", 														"ao", "AGO" ],
		[ y2m.c0j,  											  "Anguilla",												  "Anguilla", 													"ai", "AIA" ],
		[ y2m.y2n,  										  "Antarctica",											  "Antarctica", 												"aq", "ATA" ],
		[ y2m.s9v,  								  "AntiguaBarbuda",									  "Antigua & Barbuda", 									"ag", "ATG" ],
		[ y2m.n4u,  										 	"Argentina",												"Argentina", 													"ar", "ARG" ],
		[ y2m.p3t,  											 	"Armenia",													"Armenia",														"am", "ARM" ],
		[ y2m.k0b,  												 	"Aruba",														"Aruba",															"aw", "ABW" ],
		[ y2m.x7e,  										 	"Australia",												"Australia",													"au", "AUS" ],
		[ y2m.e7s,  											 	"Austria",													"Austria",											 			"at", "AUT" ],
		[ y2m.y9l,  										  "Azerbaijan",											  "Azerbaijan",													"az", "AZE" ],
		[ y2m.t1i,  											 	"Bahamas",													"Bahamas",														"bs", "BHS" ],
		[ y2m.o7x,  											 	"Bahrain",													"Bahrain",														"bh", "BHR" ],
		[ y2m.z1o,  										  "Bangladesh",											  "Bangladesh",													"bd", "BGD" ],
		[ y2m.j0s,  											  "Barbados",												  "Barbados",														"bb", "BRB" ],
		[ y2m.i6o,  								 	"BasqueCountry",	 									"Basque Country",     								"x1", "XX1" ], 
		[ y2m.w7l,  											 	"Belarus",													"Belarus",														"by", "BLR" ],
		[ y2m.e7e,  											 	"Belgium",													"Belgium",														"be", "BEL" ],
		[ y2m.m4u,  												  "Belize",													  "Belize",															"bz", "BLZ" ],
		[ y2m.j1s,  												 	"Benin",														"Benin",															"bj", "BEN" ],
		[ y2m.c0f,  											 	"Bermuda",													"Bermuda",														"bm", "BMU" ],
		[ y2m.o0g,  												  "Bhutan",													  "Bhutan",															"bt", "BTN" ],
		[ y2m.l9h,  												"Bolivia",													"Bolivia",														"bo", "BOL" ],
		[ y2m.g6o,  						  "BosniaHerzegovina",       				  "Bosnia & Herzegovina", 							"ba", "BIH" ], 
		[ y2m.y6a,  											  "Botswana",                      	  "Botswana",														"bw", "BWA" ],
		[ y2m.e2q,  									  "BouvetIsland",                 		"Bouvet",															"bv", "BVT" ],
		[ y2m.k3d,  												  "Brazil",                        	  "Brazil",															"br", "BRA" ],
		[ y2m.q2h,  	 	"BritishIndianOceanTerritory",			"British Indian Ocean Territory", 		"io", "IOT" ],
		[ y2m.c8h, 							 	"BruneiDarussalam",								  "Brunei",															"bn", "BRN" ], 
		[ y2m.l0p,  											  "Bulgaria",												  "Bulgaria", 													"bg", "BGR" ],
		[ y2m.c7g, 										  "BurkinaFaso",											"Burkina Faso",												"bf", "BFA" ],
		[ y2m.z5s,  											 	"Burundi",													"Burundi",														"bi", "BDI" ],
		[ y2m.b0y,  											  "Cambodia",												  "Cambodja",														"kh", "KHM" ],
		[ y2m.l3x,  											  "Cameroon",												  "Cameroon",														"cm", "CMR" ],
		[ y2m.o1h,  												  "Canada",													  "Canada",															"ca", "CAN" ],
		[ y2m.t0a,  										  "CapeVerde",												"Cape Verde",													"cv", "CPV" ], 
		[ y2m.i8h,  										  "Catalonia",												"Catalonia",													"x2", "XX2" ], 
		[ y2m.t6r,  								  "CaymanIslands",										"Cayman Islands",											"ky", "CYM" ],
		[ y2m.u7f,  				  "CentralAfricanRepublic",					  "Central African Republic",						"cf", "CAF" ],
		[ y2m.r8o,  													  "Chad",														  "Chad",																"td", "TCD" ],
		[ y2m.m1e,  												 	"Chile",														"Chile",															"cl", "CHL" ],
		[ y2m.y9e,  												 	"China",														"China",															"cn", "CHN" ],
		[ y2m.e0p,  							 	"ChristmasIsland",									"Christmas",													"cx", "CXR" ],
		[ y2m.e5e,  					 	"CocosKeelingIslands",							"Cocos (Keeling)",										"cc", "CCK" ], 
		[ y2m.i2u,  											  "Colombia",												  "Colombia",														"co", "COL" ],
		[ y2m.i1k,  											 	"Comoros",													"Comoros",														"km", "COM" ],
		[ y2m.e5f,  												 	"Congo",														"Congo-Brazzaville", 						    	"cg", "COG" ],
		[ y2m.i2z,  			 	"CongoDemocraticRepublic",					"Congo-Kinshasa(Zaire)",						  "cd", "COD" ],
		[ y2m.q8t,  									 	"CookIslands",											"Cook Islands",											 	"ck", "COK" ],
		[ y2m.u9c,  											"CostaRica",												"Costa Rica",												 	"cr", "CRI" ],
		[ y2m.l2i,  												"Croatia",													"Croatia",														"hr", "HRV" ],
		[ y2m.a1t,  													  "Cuba",														  "Cuba",															 	"cu", "CUB" ],
		[ y2m.y1l,  												"Curacao",													"Curacao",											  		"cw", "CUW" ],
		[ y2m.s0h,  												  "Cyprus",													  "Cyprus",														 	"cy", "CYP" ],
		[ y2m.c7a,  									      "Czechia",										      "Czech Republic", 										"cz", "CZE" ],
		[ y2m.f0l,  										  "CoteIvoire",	   					 				  "Cote d'Ivoire",											"ci", "CIV" ],
		[ y2m.a2a,  												"Denmark",													"Denmark",													  "dk", "DNK" ],
		[ y2m.n1u,  											  "Djibouti",												  "Djibouti",													 	"dj", "DJI" ],
		[ y2m.q2o,  											  "Dominica",												  "Dominica",													 	"dm", "DMA" ],
		[ y2m.r6q,  							"DominicanRepublic",								"Dominican Republic",								 	"do", "DOM" ],
		[ y2m.i4g,  												"Ecuador",													"Ecuador",													 	"ec", "ECU" ],
		[ y2m.c8k,  													"Egypt",														"Egypt", 														 	"eg", "EGY" ],
		[ y2m.t7e,  										  "ElSalvador",											  "El Salvador",												"sv", "SLV" ],
		[ y2m.e5i,  												"England",													"England",														"x3", "GBR" ],
		[ y2m.z5m,  							  "EquatorialGuinea",								  "Equatorial Guinea",									"gq", "GNQ" ], 
		[ y2m.j2m,  												"Eritrea",													"Eritrea",														"er", "ERI" ],
		[ y2m.v2k,  												"Estonia",													"Estonia",														"ee", "EST" ],
		[ y2m.v0o,  											  "Ethiopia",												  "Ethiopia",													 	"et", "ETH" ],
		[ y2m.c5f,  								"FalklandIslands",									"England",														"fk", "FLK" ], 
		[ y2m.h6r,  									  "FaroeIslands",										  "Faroes",														 	"fo", "FRO" ],
		[ y2m.w2r,  													  "Fiji",														  "Fiji",															 	"fj", "FJI" ],
		[ y2m.k0u,  												"Finland",													"Finland",														"fi", "FIN" ],
		[ y2m.d1t,  												  "France",													  "France",														 	"fr", "FRA" ],
		[ y2m.a6b,  									  "FrenchGuiana",										  "Guyana", 														"gf", "GUF" ], 
		[ y2m.m3w,  								"FrenchPolynesia",									"Tahiti(French Polinesia)", 					"pf", "PYF" ], 
		[ y2m.u9m,  			"FrenchSouthernTerritories",				"French Southern and Antarctic Lands","tf", "ATF" ],
		[ y2m.o4l,  													"Gabon",														"Gabon",															"ga", "GAB" ], 
		[ y2m.x0j,  												  "Gambia",													  "Gambia",															"gm", "GMB" ],
		[ y2m.f7g,  												"Georgia",													"Georgia",														"ge", "GEO" ],
		[ y2m.o5k,  												"Germany",													"Germany",														"de", "DEU" ],
		[ y2m.y6r, 													  "Ghana",														"Ghana",															"gh", "GHA" ],
		[ y2m.t4y,  											"Gibraltar",												"Gibraltar",													"gi", "GIB" ],
		[ y2m.l8u,  												  "Greece",													  "Greece",															"gr", "GRC" ],
		[ y2m.j6o,  											"Greenland",												"Greenland",													"gl", "GRL" ],
		[ y2m.i4z,  												"Grenada",													"Grenada",														"gd", "GRD" ],
		[ y2m.a4g,  										  "Guadeloupe",											  "Guadeloupe",													"gp", "GLP" ],
		[ y2m.q0r,  													  "Guam",														  "Guam",																"gu", "GUM" ],
		[ y2m.e2m,  											"Guatemala",												"Guatemala",													"gt", "GTM" ],
		[ y2m.m9k,  											  "Guernsey",												  "Guernsey",														"gg", "GGY" ], 
		[ y2m.r2e,  												  "Guinea",													  "Guinea",															"gn", "GIN" ],
		[ y2m.i5u,  									  "GuineaBissau",										  "Guinea-Bissau",											"gw", "GNB" ],
		[ y2m.r2t,  												  "Guyana",													  "Guyana",															"gy", "GUY" ],
		[ y2m.l8d,  													"Haiti",														"Haiti",															"ht", "HTI" ],
		[ y2m.u9l, 			"HeardIslandMcDonaldIslands", 			"Australia",   									  		"hm", "HMD" ],
		[ y2m.v4j,  			 	                "Vatican",	  			                "Vatican City", 											"va", "VAT" ],
		[ y2m.w5e,  											  "Honduras",												  "Honduras",														"hn", "HND" ],
		[ y2m.y5o,  											  "HongKong",												  "Hong Kong",													"hk", "HKG" ],
		[ y2m.e6g,  											 	"Hungary",													"Hungary",														"hu", "HUN" ],
		[ y2m.y8a,  											 	"Iceland",													"Iceland",														"is", "ISL" ],
		[ y2m.l1h,  												 	"India",														"India",															"in", "IND" ],
		[ y2m.w5z,  										 	"Indonesia",												"Indonesia",													"id", "IDN" ],
		[ y2m.l3h,  													  "Iran",														  "Iran",																"ir", "IRN" ],
		[ y2m.t3g,  													  "Iraq",														  "Iraq",																"iq", "IRQ" ],
		[ y2m.j8j,  											 	"Ireland",													"Ireland",														"ie", "IRL" ],
		[ y2m.j8h,  										 	"IsleOfMan",												"Isle of Man",												"im", "IMN" ],
		[ y2m.u1r,  												  "Israel",													  "Israel",															"il", "ISR" ],
		[ y2m.m9t,  												 	"Italy",														"Italy",															"it", "ITA" ],
		[ y2m.j0t,  											 	"Jamaica",													"Jamaica",														"jm", "JAM" ],
		[ y2m.b1e,  											  "JanMayen",								  			  "Norway", 														"x4", "XX4" ], 
		[ y2m.k4i,  												 	"Japan",														"Japan",															"jp", "JPN" ],
		[ y2m.l3m,  												  "Jersey",													  "Jersey",															"je", "JEY" ],
		[ y2m.n6p,  												  "Jordan",													  "Jordan",															"jo", "JOR" ],
		[ y2m.h2v,  										  "Kazakhstan",											  "Kazakhstan",													"kz", "KAZ" ],
		[ y2m.v3n,  												 	"Kenya",														"Kenya",															"ke", "KEN" ],
		[ y2m.f3u,  											  "Kiribati",												  "Kiribati",														"ki", "KIR" ],
		[ y2m.y2s,  										  "KoreaNorth",											  "North Korea",												"kp", "PRK" ], 
		[ y2m.b6o,  										  "KoreaSouth",	 	  								  "South Korea", 												"kr", "KOR" ], 
		[ y2m.w3m,  												  "Kosovo",													  "Kosovo",															"x5", "RKS" ],
		[ y2m.k9b,  												  "Kuwait",													  "Kuwait",															"kw", "KWT" ],
		[ y2m.e0l,  										  "Kyrgyzstan",											  "Kyrgyzstan",													"kg", "KGZ" ],
		[ y2m.p2m,  													  "Laos",														  "Laos",																"la", "LAO" ],
		[ y2m.k7f, 	 											 	"Latvia",													  "Latvia",															"lv", "LVA" ],
		[ y2m.w2v,  											 	"Lebanon",													"Lebanon",														"lb", "LBN" ],
		[ y2m.v8t, 												  "Lesotho",													"Lesotho",														"ls", "LSO" ],
		[ y2m.t7o,  											 	"Liberia",													"Liberia",														"lr", "LBR" ],
		[ y2m.l5e,  												 	"Libya",														"Libya",															"ly", "LBY" ],
		[ y2m.i4f,  								 	"Liechtenstein",										"Liechtenstein",											"li", "LIE" ],
		[ y2m.q2u,  										 	"Lithuania",												"Lithuania",													"lt", "LTU" ],
		[ y2m.p7t,  										  "Luxembourg",											  "Luxembourg",													"lu", "LUX" ],
		[ y2m.macau,  												 	"Macau",														"Macau",															"mo", "MAC" ],
		[ y2m.f8m,  	  					 	  "NorthMacedonia",	   							  "Macedonia",													"mk", "MKD" ],
		[ y2m.p4e,  										  "Madagascar",											  "Madagascar",													"mg", "MDG" ],
		[ y2m.c2k,  												  "Malawi",													  "Malawi",															"mw", "MWI" ],
		[ y2m.d4m,  											  "Malaysia",												  "Malaysia",														"my", "MYS" ],
		[ y2m.h8y,  											  "Maldives",												  "Maldives",														"mv", "MDV" ],
		[ y2m.a8s, 													 	"Mali",														  "Mali",																"ml", "MLI" ],
		[ y2m.h2n,  												 	"Malta",														"Malta",															"mt", "MLT" ],
		[ y2m.x1l,  							 	"MarshallIslands",									"Marshall Islands",										"mh", "MHL" ],
		[ y2m.p8a,  										  "Martinique",											  "Martinique",													"mq", "MTQ" ],
		[ y2m.t6j,  										  "Mauritania",											  "Mauritania",													"mr", "MRT" ],
		[ y2m.a9g,  										 	"Mauritius",												"Mauritius",													"mu", "MUS" ],
		[ y2m.l8q,  											  "Mayotte",													"Mayotte",														"yt", "MYT" ],
		[ y2m.r6w,  												  "Mexico",													  "Mexico",															"mx", "MEX" ],
		[ y2m.j6b,  										  "Micronesia",											  "Micronesia",													"fm", "FSM" ],
		[ y2m.s6y,  											 	"Moldova",													"Moldova",														"md", "MDA" ],
		[ y2m.r8h,  												  "Monaco",													  "Monaco",															"mc", "MCO" ],
		[ y2m.q9a,  											  "Mongolia",												  "Mongolia",														"mn", "MNG" ],
		[ y2m.v5t,  										  "Montenegro",											  "Montenegro",													"me", "MNE" ],
		[ y2m.c2b,  										  "Montserrat",											  "Montserrat",													"ms", "MSR" ],
		[ y2m.t8c,  												"Morocco",													"Morocco",														"ma", "MAR" ],
		[ y2m.j9b,  										  "Mozambique",											  "Mozambique",													"mz", "MOZ" ],
		[ y2m.q0w, 												  "Myanmar",													"Myanmar(Burma)", 										"mm", "MMR" ],
		[ y2m.w7y,  												"Namibia",													"Namibia",														"na", "NAM" ],
		[ y2m.z1q,  													"Nauru",														"Nauru",															"nr", "NRU" ],
		[ y2m.a9d,  													"Nepal",														"Nepal",															"np", "NPL" ],
		[ y2m.x1d,  										"TheNetherlands",	  							  "Netherlands",												"nl", "NLD" ],
		[ y2m.n8y, 						  "NetherlandsAntilles",							"Netherlands Antilles",								"an", "ANT" ],
		[ y2m.h4o,  									  "NewCaledonia",										  "New Caledonia",											"nc", "NCL" ],
		[ y2m.w4z,  										  "NewZealand",											  "New Zealand",												"nz", "NZL" ],
		[ y2m.r4y,  											"Nicaragua",												"Nicaragua",													"ni", "NIC" ],
		[ y2m.a6q,  													"Niger",														"Niger",															"ne", "NER" ],
		[ y2m.t7b,  												"Nigeria",													"Nigeria",														"ng", "NGA" ],
		[ y2m.w3d,  													  "Niue",														  "Niue",																"nu", "NIU" ],
		[ y2m.z3p,  									"NorfolkIsland",										"Norfolk", 														"nf", "NFK" ],
		[ y2m.z7p,  								"NorthernIreland",									"Northern Ireland",										"x6", "GBR" ], 
		[ y2m.l4l,  				  "NorthernMarianaIslands",					  "Northern Mariana",										"mp", "MNP" ],
		[ y2m.o6c,  												  "Norway",													  "Norway",															"no", "NOR" ],
		[ y2m.x9g,  													  "Oman",														  "Oman",																"om", "OMN" ],
		[ y2m.a4p,  											  "Pakistan",												  "Pakistan",														"pk", "PAK" ],
		[ y2m.g7d,  													"Palau",														"Palau",															"pw", "PLW" ],
		[ y2m.d5g,  											"Palestine",												"Palestine",													"ps", "PSE" ],
		[ y2m.x4d,  												  "Panama",													  "Panama",															"pa", "PAN" ],
		[ y2m.b6i,  								  "PapuaNewGuinea",									  "Papua New Guinea",										"pg", "PNG" ],
		[ y2m.u2v,  											  "Paraguay",												  "Paraguay",														"py", "PRY" ],
		[ y2m.e9m,  													  "Peru",														  "Peru",																"pe", "PER" ],
		[ y2m.a8d,  										"Philippines",											"Philippines",												"ph", "PHL" ],
		[ y2m.v4e,  											  "Pitcairn",												  "Pitcairn",														"pn", "PCN" ],
		[ y2m.y0n,  												  "Poland",													  "Poland",															"pl", "POL" ],
		[ y2m.h7l,  											  "Portugal",												  "Portugal",														"pt", "PRT" ],
		[ y2m.z3n,  										  "PuertoRico",											  "Puerto Rico",												"pr", "PRI" ],
		[ y2m.c2e,  													"Qatar",														"Qatar",															"qa", "QAT" ],
		[ y2m.h1v,  												"Reunion",													"Reunion",														"re", "REU" ],
		[ y2m.i9p,  												"Romania",													"Romania",														"ro", "ROU" ],
		[ y2m.c3b,  												  "Russia",													  "Russian Federation", 								"ru", "RUS" ],
		[ y2m.x3i,  												  "Rwanda",													  "Rwanda",															"rw", "RWA" ],
		[ y2m.o6a,  								"SaintBarthelemy",									"Saint Barthelemy", 									"bl", "BLM" ],
		[ y2m.f0e,  										"SaintHelena",											"Saint Helena", 											"sh", "SHN" ], 
		[ y2m.w7i,  								"SaintKittsNevis",									"St Kitts & Nevis", 									"kn", "KNA" ], 
		[ y2m.f4p, 											"SaintLucia",											  "Saint Lucia", 												"lc", "LCA" ], 
		[ y2m.y3r,  					"SaintMartinFrenchPart",  					"Saint Martin", 											"mf", "MAF" ],
		[ y2m.d9d,  						"SaintPierreMiquelon",							"Saint Pierre and Miquelon", 					"pm", "SPM" ], 
		[ y2m.v8n,  				  "SaintVincentGrenadines",					  "St Vincent & the Grenadines", 				"vc", "VCT" ], 
		[ y2m.p0j,  													"Samoa",														"Samoa",															"ws", "WSM" ],
		[ y2m.q4y,  											"SanMarino",												"San Marino",													"sm", "SMR" ],
		[ y2m.g1q,  								"SaoTomePrincipe",									"Sao Tome & Principe", 								"st", "STP" ],
		[ y2m.x5g,  										"SaudiArabia",											"Saudi Arabia", 											"sa", "SAU" ],
		[ y2m.b6f,  											  "Scotland",												  "Scotland",														"x7", "GBR" ],
		[ y2m.z4b,  												"Senegal",													"Senegal",														"sn", "SEN" ],
		[ y2m.a5z,  												  "Serbia",													  "Serbia(Yugoslavia)", 								"rs", "SRB" ],
		[ y2m.r0s,  										  "Seychelles",											  "Seychelles",													"sc", "SYC" ],
		[ y2m.q2q,  									  "SierraLeone",											"Sierra Leone",												"sl", "SLE" ],
		[ y2m.z6n,  										 	"Singapore",												"Singapore",													"sg", "SGP" ],
		[ y2m.o9b,						  "SintMaartenDutchPart",  					  "Sint Maarten",												"sx", "SXM" ],
		[ y2m.c7v,  											  "Slovakia",												  "Slovakia",														"sk", "SVK" ],
		[ y2m.g0y,  											  "Slovenia",												  "Slovenia",														"si", "SVN" ],
		[ y2m.b6h,  								  "SolomonIslands",									  "Solomon Islands", 										"sb", "SLB" ],
		[ y2m.p8w,  											 	"Somalia",													"Somalia",														"so", "SOM" ],
		[ y2m.y2r,  									 	"SouthAfrica",											"South Africa",												"za", "ZAF" ],
		[ y2m.l0e, "SouthGeorgiaSouthSandwichIslands", "South Georgia and South Sandwich", 	"gs", "SGS" ],
		[ y2m.m3e,  										  "SouthSudan",											  "Southern Sudan", 										"ss", "SSD" ],
		[ y2m.m6e,  									 	"SovietUnion",											"Soviet Union", 			 								"su", "URS" ],
		[ y2m.r3n, 	 												  "Spain",														"Spain",															"es", "ESP" ],
		[ y2m.q6f,  											  "SriLanka",												  "Sri Lanka",													"lk", "LKA" ],
		[ y2m.l4i,  												 	"Sudan",														"Sudan",															"sd", "SDN" ],
		[ y2m.l3p,  											  "Suriname",												  "Suriname",														"sr", "SUR" ], 
		[ y2m.r1k,  											  "Svalbard",												  "Norway", 														"sj", "SJM" ], 
		[ y2m.g0q,  										 	"Swaziland",												"Swaziland",													"sz", "SWZ" ],
		[ y2m.o2w,  												  "Sweden",													  "Sweden",															"se", "SWE" ],
		[ y2m.f0f,  									 	"Switzerland",											"Switzerland",												"ch", "CHE" ],
		[ y2m.j4b,  												 	"Syria",														"Syria",															"sy", "SYR" ],
		[ y2m.r1c,  												  "Taiwan",													  "Taiwan",															"tw", "TWN" ],
		[ y2m.a9q,  										  "Tajikistan",											  "Tajikistan",													"tj", "TJK" ],
		[ y2m.v2w,  											  "Tanzania",												  "Tanzania",														"tz", "TZA" ],
		[ y2m.e4e, 											  "Thailand",												  "Thailand",														"th", "THA" ],
		[ y2m.p8i,  										  "TimorLeste",	  									  "Timor-Leste", 												"tl", "TLS" ], 
		[ y2m.s8n, 													 	"Togo",														  "Togo",																"tg", "TGO" ],
		[ y2m.t2n,  											 	"Tokelau",													"Tokelau",														"tk", "TKL" ], 
		[ y2m.a9e,  												 	"Tonga",														"Tonga",															"to", "TON" ],
		[ y2m.a4x,  								  "TrinidadTobago",									  "Trinidad & Tobago", 									"tt", "TTO" ],
		[ y2m.q6e,  												"Tunisia",													"Tunisia",														"tn", "TUN" ],
		[ y2m.o8y,  												  "Turkey",													  "Turkey",															"tr", "TUR" ],
		[ y2m.s8l,  									  "Turkmenistan",										  "Turkmenistan",												"tm", "TKM" ],
		[ y2m.o5r,  						  "TurksCaicosIslands",							  "Turks and Caicos Islands", 					"tc", "TCA" ],
		[ y2m.v5u,  												  "Tuvalu",													  "Tuvalu", 														"tv", "TUV" ],
		[ y2m.m9r,  												  "Uganda",													  "Uganda",															"ug", "UGA" ],
		[ y2m.o4d,  											  "Ukraine",													"Ukraine",														"ua", "UKR" ],
		[ y2m.f0h,  						  "UnitedArabEmirates",							  "United Arab Emirates",								"ae", "ARE" ],
		[ y2m.w2w,  									"UnitedKingdom",										"United Kingdom(Great Britain)", 			"gb", "GBR" ], 
		[ y2m.c2o,  									  "UnitedStates",										  "United States of America", 					"us", "USA" ],
		[ y2m.i1b, "UnitedStatesMinorOutlyingIslands", "United States of America",						"um", "UMI" ],
		[ y2m.g1n,  										 		"Uruguay",													"Uruguay",														"uy", "URY" ],
		[ y2m.g6e,  									 	  "Uzbekistan",											  "Uzbekistan",													"uz", "UZB" ],
		[ y2m.q1v,  										 		"Vanuatu",													"Vanuatu",														"vu", "VUT" ],
		[ y2m.p3g,  											"Venezuela",												"Venezuela",													"ve", "VEN" ],
		[ y2m.x5t,  												"Vietnam",													"Viet Nam",														"vn", "VNM" ],
		[ y2m.b2y,  					  "VirginIslandsBritish",       			"Virgin Islands British", 						"vg", "VGB" ],
		[ y2m.k6h,  								"VirginIslandsUS",	  							"Virgin Islands US", 									"vi", "VIR" ],
		[ y2m.k8t,  													"Wales",														"Wales",															"x8", "GBR" ],
		[ y2m.i2e,  									  "WallisFutuna",										  "Wallis and Futuna",									"wf", "WLF" ],
		[ y2m.r5i,  									"WesternSahara",										"Western Sahara",											"eh", "ESH" ],
		[ y2m.r5t,  											 		"Yemen",														"Yemen",															"ye", "YEM" ],
		[ y2m.y7t,  											 		"Zaire",														"",																		"zr", "ZRN" ], 
		[ y2m.h9u,  											 	  "Zambia",													  "Zambia",															"zm", "ZMB" ],
		[ y2m.m0d,  										 	  "Zimbabwe",												  "Zimbabwe",														"zw", "ZWE" ],
];

function e1l(h7a)
{
	return g2k[h7a][2];
}

function s1s(h7a)
{
	return g2k[h7a][4];
}

function c5y(z0t)
{
	for (const h7a of g2k)
	{
		if (h7a[4] == z0t)
		{
			return h7a[0];
		}
	}
	return y2m.c2f;
}

function f3e(d4k)
{
	for (const h7a of g2k)
	{
		if (h7a[3] == d4k)
		{
			return h7a[0];
		}
	}
	return y2m.c2f;
}
class e7n
{

constructor()
{
	this.j8o = '';
}

a6c(x1x)
{
	this.j8o += x1x;
}

i5y(x1x)
{
	this.j8o += x1x + '\n';
}

f3w()
{
	this.j8o += '\n';
}

}




function x7l(d4y, e3t)
{
	let value = Number(d4y);
	if (isNaN(value))
	{
		return e3t;
	}
	else
	{
		return value;
	}
}
