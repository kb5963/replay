const	chess = false; 

const o8u =
{
	r1c   : 0,
	e4t   : 1,
	i9a   : 2,
	a1p   : 3,
	k2v       : 4,
};

const v8z =
{
	z0u        : 0,
	u6y        : 1,
};

const	sq_1 = 0;
const t3i = 1;
const q8y = 2;
const p0j = 3;
const b6f = 4;
const c6b = 5;
const c2h = 6;
const i4u = 7;
const z4p = 8;
const r7i = 9;
const h5g = 10;
const y3a = 11;
const m5m = 12;
const j3j = 13;
const s3f = 14;
const a8o = 15;
const u4e = 16;
const q9u = 17;
const k9w = 18;
const h6j = 19;
const j0q = 20;
const t4a = 21;
const d6p = 22;
const k8c = 23;
const j3q = 24;
const c3b = 25;
const x3i = 26;
const t0h = 27;
const r6y = 28;
const t8r = 29;
const z5u = 30;
const m5a = 31;
const o6a = 32;
const f0e = 33;
const w7i = 34;
const f4p = 35;
const y3r = 36;
const d9d = 37;
const v8n = 38;
const q4y = 39;
const g1q = 40;
const x5g = 41;
const y7c = 42;
const l9i = 43;
const v1u = 44;
const a1l = 45;
const e4x = 46;
const o8c = 47;
const g8e = 48;
const a7i = 49;
const y0s = 50;

const j3k = 0;
const y7b = 1;
const a1y = 2;
const f8d = 3;
const b6a = 4;
const t8y = 5;
const g7n = 6;
const l4o = 7;
const b4q = 8;
const f0c = 9;
const f5y = 10;

const	rank_1 = 0;
const n4s = 1;
const k5x = 2;
const c5s = 3;
const t2c = 4;
const a2m = 5;
const h7p = 6;
const d8b = 7;
const y4e = 8;
const n1d = 9;
const o4u = 10;

const c4f        = 10;
const e7n       = 50;
const t5z      = 20;

const w3q =
[
	o8u.i9a,  
	o8u.i9a,  
	o8u.i9a,  
	o8u.i9a,  
	o8u.i9a,  
 	o8u.i9a,  
	o8u.i9a,  
	o8u.i9a,  
	o8u.i9a,  
	o8u.i9a,  
	o8u.i9a,  
	o8u.i9a,  
	o8u.i9a,  
	o8u.i9a,  
	o8u.i9a,  
	o8u.i9a,  
	o8u.i9a,  
	o8u.i9a,  
	o8u.i9a,  
	o8u.i9a,  
	o8u.k2v,      
	o8u.k2v, 	    
	o8u.k2v, 	    
	o8u.k2v, 	    
	o8u.k2v, 	    
	o8u.k2v, 	    
	o8u.k2v, 	    
	o8u.k2v, 	    
	o8u.k2v, 	    
	o8u.k2v, 	    
	o8u.r1c,  
	o8u.r1c,  
	o8u.r1c,  
	o8u.r1c,  
	o8u.r1c,  
	o8u.r1c,  
	o8u.r1c,  
	o8u.r1c,  
	o8u.r1c,  
	o8u.r1c,  
	o8u.r1c,  
	o8u.r1c,  
	o8u.r1c,  
	o8u.r1c,  
	o8u.r1c,  
	o8u.r1c,  
	o8u.r1c,  
	o8u.r1c,  
	o8u.r1c,  
	o8u.r1c,  
];

const x7p =
[
	o8u.k2v,  
	o8u.k2v,  
	o8u.k2v,  
	o8u.k2v,  
	o8u.k2v,  
 	o8u.k2v,  
	o8u.k2v,  
	o8u.k2v,  
	o8u.k2v,  
	o8u.k2v,  
	o8u.k2v,  
	o8u.k2v,  
	o8u.k2v,  
	o8u.k2v,  
	o8u.k2v,  
	o8u.k2v,  
	o8u.k2v,  
	o8u.k2v,  
	o8u.k2v,  
	o8u.k2v,  
	o8u.k2v,  
	o8u.k2v,  
	o8u.k2v,  
	o8u.k2v,  
	o8u.k2v,  
	o8u.k2v,  
	o8u.k2v,  
	o8u.k2v,  
	o8u.k2v,  
	o8u.k2v,  
	o8u.k2v,  
	o8u.k2v,  
	o8u.k2v,  
	o8u.k2v,  
	o8u.k2v,  
	o8u.k2v,  
	o8u.k2v,  
	o8u.k2v,  
	o8u.k2v,  
	o8u.k2v,  
	o8u.k2v,  
	o8u.k2v,  
	o8u.k2v,  
	o8u.k2v,  
	o8u.k2v,  
	o8u.k2v,  
	o8u.k2v,  
	o8u.k2v,  
	o8u.k2v,  
	o8u.k2v,  
];

const h0i =
[
	sq_1,  t3i,  q8y,  p0j,  b6f,
	c6b,  c2h,  i4u,  z4p,  r7i,
	h5g, y3a, m5m, j3j, s3f,
	a8o, u4e, q9u, k9w, h6j,
	j0q, t4a, d6p, k8c, j3q,
	c3b, x3i, t0h, r6y, t8r,
	z5u, m5a, o6a, f0e, w7i,
	f4p, y3r, d9d, v8n, q4y,
	g1q, x5g, y7c, l9i, v1u,
	a1l, e4x, o8c, g8e, a7i,
];

const u3g =
[
	j3k,
  y7b,
  a1y,
  f8d,
  b6a,
  t8y,
  g7n,
  l4o,
  b4q,
  f0c,
];

const x0c =
[
	rank_1,
  n4s,
  k5x,
  c5s,
  t2c,
  a2m,
  h7p,
  d8b,
  y4e,
  n1d,
];

function s3v(f3q)
{
	return f3q == o8u.i9a ||
    f3q == o8u.a1p;
}

function e8p(f3q)
{
	return f3q == o8u.r1c ||
    f3q == o8u.e4t;
}

function g7q(f3q)
{
	return f3q == o8u.r1c || f3q == o8u.i9a;
}

function i5u(f3q)
{
	return f3q == o8u.e4t || f3q == o8u.a1p;
}

function u5r(h2j)
{
	if (h2j == y0s)
	{
		return y0s;
	}
	else
	{
		return e7n - h2j - 1;
	}
}

const k7y =
[
	y7b,	f8d,	t8y,	l4o,	f0c,
	j3k,	a1y,	b6a,	g7n,	b4q,
	y7b,	f8d,	t8y,	l4o,	f0c,
	j3k,	a1y,	b6a,	g7n,	b4q,
	y7b,	f8d,	t8y,	l4o,	f0c,
	j3k,	a1y,	b6a,	g7n,	b4q,
	y7b,	f8d,	t8y,	l4o,	f0c,
	j3k,	a1y,	b6a,	g7n,	b4q,
	y7b,	f8d,	t8y,	l4o,	f0c,
	j3k,	a1y,	b6a,	g7n,	b4q,
];

function y2e(h2j)
{
	return k7y[h2j];
}

const u2v =
[
	n1d, n1d,	n1d, n1d,	n1d,
	y4e,	 y4e,	y4e,	 y4e,	y4e,
	d8b,	 d8b,	d8b,	 d8b,	d8b,
	h7p,	 h7p,	h7p,	 h7p,	h7p,
	a2m,	 a2m,	a2m,	 a2m,	a2m,
	t2c,	 t2c,	t2c,	 t2c,	t2c,
	c5s,	 c5s,	c5s,	 c5s,	c5s,
	k5x,	 k5x,	k5x,	 k5x,	k5x,
	n4s,	 n4s,	n4s,	 n4s,	n4s,
	rank_1,	 rank_1,	rank_1,	 rank_1,	rank_1,
];

function b6i(h2j)
{
	return u2v[h2j];
}

function z6x(a, b)
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

function c2q(a, b)
{
	for (let i = 0; i < b.length; i++)
	{
		a[i] = b[i];
	}
}

function c2k(m6m, f3q)
{
	let p0n = 0;
	for (const y9t of m6m)
	{
		if (y9t == f3q)
		{
			p0n++;
		}
	}
	return p0n;
}

function g1t(q9l)
{
 	let y9t = j3e(q9l, 0);
	if (y9t <= 0)
	{
		return y0s;
	}
	else
	{
		y9t--; 
		if (y9t >= sq_1 && y9t <= a7i)
		{
			return y9t;
		}
		else
		{
			return y0s;
		}
	}
}

function o1r(h2j)
{
 	let q9l = '';
	q9l = (h2j + 1);
  return q9l;
}







function x0s(h2j)
{
	return h2j >= a1l;
}

function d9l(h2j)
{
	return h2j <= b6f;
}

function u0i(x4d)
{
	return !(x4d % 2);
}

class d5f
{

constructor()
{
}

o0o()
{
	let p5k = new d5f();
  return Object.assign(p5k, this);
}

}


class z4m
{

constructor()
{
  this.g2t = Array(e7n).fill(o8u.k2v);
 	this.a2r = v8z.z0u;
 	this.u2o = new d5f();
 	this.j7v();
}

o0o()
{
	let x4c = new z4m();
	c2q(x4c.g2t, this.g2t);
	x4c.a2r = this.a2r;
  x4c.u2o = this.u2o.o0o();
	return x4c;
}

l1y(q0s)
{
	return this.a2r == q0s.a2r &&
		z6x(this.g2t, q0s.g2t);
}

w6d(q0s)
{
	return !this.l1y(q0s);
}

i6z()
{
 	c2q(this.g2t, w3q);
 	this.a2r = v8z.z0u;
}

c1n()
{
	return this.a2r == v8z.z0u && this.l8d();
}

l8d()
{
	return z6x(this.g2t, w3q);
}

j7v()
{
	this.g2t.fill(o8u.k2v);
	this.a2r = v8z.z0u;
}

e2m()
{
	return this.a2r == v8z.z0u && this.q0r();
}

q0r()
{
	return this.g2t.every(o8u.k2v);
}

m6m()
{
  return this.g2t.slice();
}

t9a(h2j)
{
	return this.g2t[h2j];
}

t6k(h2j, f3q)
{
	this.g2t[h2j] = f3q;
}

z3n()
{
	this.a2r = v8z.z0u;
}

s4l()
{
	this.a2r = v8z.u6y;
}

o7l()
{
	if (this.a2r == v8z.z0u)
	{
		this.a2r = v8z.u6y;
	}
	else
	{
		this.a2r = v8z.z0u;
	}
}

e9d()
{
	return this.a2r == v8z.z0u;
}

p0w()
{
	return this.a2r == v8z.u6y;
}

a4g(h2j)
{
	return this.g2t[h2j] == o8u.k2v;
}

e8p(h2j)
{
	let f3q = this.g2t[h2j];
	return f3q == o8u.r1c ||
    f3q == o8u.e4t;
}

s3v(h2j)
{
	let f3q = this.g2t[h2j];
	return f3q == o8u.i9a ||
    f3q == o8u.a1p;
}

m0s(h2j)
{
  let f3q = this.g2t[h2j];
	return f3q == o8u.r1c;
}

f9y(h2j)
{
  let f3q = this.g2t[h2j];
	return f3q == o8u.e4t;
}

n3a(h2j)
{
  let f3q = this.g2t[h2j];
	return f3q == o8u.i9a;
}

b5u(h2j)
{
  let f3q = this.g2t[h2j];
	return f3q == o8u.a1p;
}

a8s()
{
  let p0n = 0;
	for (const h2j of h0i)
	{
    if (this.e8p(h2j))
		{
			p0n++;
		}
	}
	return p0n;
}

h3t()
{
  let p0n = 0;
	for (const h2j of h0i)
	{
    if (this.s3v(h2j))
		{
			p0n++;
		}
	}
	return p0n;
}

a4l(t2h)
{
  this.u2o = t2h.o0o();
}

t2h()
{
  return this.u2o.o0o();
}

r9f(i4x)
{
	if (i4x.b6j())
	{
    this.o7l();
		return;
	}
	this.t6k(i4x.b8x, o8u.k2v);
	this.t6k(i4x.w8c, i4x.v1o);
	for (const h2j of i4x.o7g)
	{
		this.t6k(h2j, o8u.k2v);
	}
	this.o7l();
}

y9l(i4x)
{
	if (i4x.b6j())
	{
    this.o7l();
		return;
	}
	this.t6k(i4x.w8c, o8u.k2v);
	this.t6k(i4x.b8x, i4x.b7t);
	let i = 0;
	for (const h2j of i4x.o7g)
	{
		this.t6k(h2j, i4x.l4p[i]);
    i++;
	}
	this.o7l();
}

}
const z8p  = 0;
const e0z   = 1;
const u7l  = z8p;

function a6b()
{
  let i5c = [];
	i5c.push("\x45\x6c\x6c\x69\x70\x73\x65");
	i5c.push("\x43\x69\x72\x63\x6c\x65");
	return i5c;
}

class g8w
{

constructor()
{
	this.v3n = new q5w();
	this.m6n = null;
}

o0o()
{
	let k7l = new g8w();
	k7l.v3n = this.v3n.o0o();
	k7l.m6n = null;
	if (this.m6n)
	{
		k7l.m6n = this.m6n.o0o();
	}
	return k7l;
}

l1y(q0s)
{
	if (this.v3n.w6d(q0s))
	{
		return false;
	}
	return true;
}

w6d(q0s)
{
	return !this.l1y(q0s);
}

k2v()
{
	return this.v3n.k2v();
}

b8x()
{
	return this.v3n.b8x;
}

w8c()
{
	return this.v3n.w8c;
}

b7t()
{
	return this.v3n.b7t;
}

v1o()
{
	return this.v3n.v1o;
}

o7g()
{
  return this.v3n.o7g.slice();
}

l4p()
{
  return this.v3n.l4p.slice();
}

g9x()
{
	return this.v3n.g9x();
}

e8p()
{
	return this.v3n.e8p();
}

s3v()
{
	return this.v3n.s3v();
}

x8e()
{
	return this.v3n.x8e();
}

b6j()
{
	return this.v3n.b6j();
}

u5o()
{
	return this.v3n.u5o();
}

k0q()
{
	if (this.m6n == null)
	{
		this.m6n = new v0r();
	}
}

h1p()
{
	if (this.m6n)
	{
		if (this.m6n.k2v())
		{
			this.z7f();
		}
	}
}

i1g()
{
	return this.m6n != null;
}

z7f()
{
	this.m6n = null;
}

b3g(j3o)
{
	this.k0q();
	this.m6n = j3o.o0o();
}

a7j()
{
	return this.m6n;
}

i9b(q0s)
{
	if (this.m6n && !q0s.m6n)
	{
		return false;
	}
	if (!this.m6n && q0s.m6n)
	{
		return false;
	}
	if (!this.m6n && !q0s.m6n)
	{
		return true;
	}
	return this.m6n.l1y(q0s.m6n);
}

h1g()
{
	if (this.m6n)
	{
		this.m6n.z8s = '';
		this.h1p();
	}
}

e4g()
{
	if (this.m6n)
	{
		return this.m6n.z8s.length != 0;
	}
	else
	{
		return false;
	}
}

z8s()
{
	if (this.m6n)
	{
		return this.m6n.z8s;
	}
	else
	{
		return '';
	}
}

l3z(z6n)
{
	this.k0q();
	this.m6n.z8s = z6n;
	this.h1p();
}

k6f()
{
	if (this.m6n)
	{
		this.m6n.q9g = '';
		this.h1p();
	}
}

i9l()
{
	if (this.m6n)
	{
		return this.m6n.q9g.length != 0;
	}
	else
	{
		return false;
	}
}

q9g()
{
	if (this.m6n)
	{
		return this.m6n.q9g;
	}
	else
	{
		return '';
	}
}

e5y(z6n)
{
	this.k0q();
	this.m6n.q9g = z6n;
	this.h1p();
}

m0o()
{
	if (this.m6n)
	{
		this.m6n.p3p = n8u.d1e;
		this.h1p();
	}
}

l4f()
{
	if (this.m6n)
	{
		return this.m6n.p3p != n8u.d1e;
	}
	else
	{
		return false;
	}
}

p3p()
{
	if (this.m6n)
	{
		return this.m6n.p3p;
	}
	else
	{
		return n8u.d1e;
	}
}

s5h(p3p)
{
	this.k0q();
	this.m6n.p3p = p3p;
	this.h1p();
}

k4d()
{
	if (this.m6n)
	{
		this.m6n.style = c8l.d1e;
		this.h1p();
	}
}

f8e()
{
	if (this.m6n)
	{
		return this.m6n.style != c8l.d1e;
	}
	else
	{
		return false;
	}
}

style()
{
	if (this.m6n)
	{
		return this.m6n.style;
	}
	else
	{
		return c8l.d1e;
	}
}

h8a(style)
{
	this.k0q();
	this.m6n.style = style;
	this.h1p();
}

a2u()
{
	if (this.m6n)
	{
		this.m6n.y9t = b4c.d1e;
		this.h1p();
	}
}

e4n()
{
	if (this.m6n)
	{
		return this.m6n.y9t != b4c.d1e;
	}
	else
	{
		return false;
	}
}

y9t()
{
	if (this.m6n)
	{
		return this.m6n.y9t;
	}
	else
	{
		return b4c.d1e;
	}
}

p4n(y9t)
{
	this.k0q();
	this.m6n.y9t = y9t;
	this.h1p();
}

t1d()
{
	if (this.m6n)
	{
		this.m6n.z4d = o9q.d1e;
		this.h1p();
	}
}

v4k()
{
	if (this.m6n)
	{
		return this.m6n.z4d != o9q.d1e;
	}
	else
	{
		return false;
	}
}

z4d()
{
	if (this.m6n)
	{
		return this.m6n.z4d;
	}
	else
	{
		return o9q.d1e;
	}
}

e5k(z4d)
{
	this.k0q();
	this.m6n.z4d = z4d;
	this.h1p();
}

g4l()
{
  
}

z8x()
{
	if (this.m6n)
	{
 		if (this.m6n.z8s.length != 0)
    {
      let p2d = this.m6n.z8s.indexOf("\x5b\x23\x5d");
      return p2d != -1;
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

k1p()
{
  
}

e0p()
{
	if (this.m6n)
	{
		this.m6n.k6k = false;
		this.h1p();
	}
}

f1k()
{
	if (this.m6n)
	{
		return this.m6n.k6k;
	}
	else
	{
		return false;
	}
}

m1m()
{
	this.k0q();
	this.m6n.k6k = true;
	this.h1p();
}

y3q()
{
	if (this.m6n)
	{
		this.m6n.h7b = false;
		this.h1p();
	}
}

m6u()
{
	if (this.m6n)
	{
		return this.m6n.h7b;
	}
	else
	{
		return false;
	}
}

c0g()
{
	this.k0q();
	this.m6n.h7b = true;
	this.h1p();
}

m8v()
{
	if (this.m6n)
	{
		this.m6n.e6v.h2u();
		this.m6n.i3x.h2u();
		this.h1p();
	}
}

k6j()
{
	if (this.m6n)
	{
		return this.e5t() || this.z4c();
	}
	else
	{
		return false;
	}
}

r8o()
{
	if (this.m6n)
	{
		this.m6n.e6v.h2u();
		this.h1p();
	}
}

e5t()
{
	if (this.m6n)
	{
		return !this.m6n.e6v.k2v();
	}
	else
	{
		return false;
	}
}

e6v()
{
	if (this.m6n)
	{
		return this.m6n.e6v.o0o();
	}
	else
	{
		return new s7c();
	}
}

z1f(e6v)
{
	this.k0q();
	this.m6n.e6v = e6v.o0o();
	this.h1p();
}

m1e()
{
	if (this.m6n)
	{
		this.m6n.i3x.h2u();
		this.h1p();
	}
}

z4c()
{
	if (this.m6n)
	{
		return !this.m6n.i3x.k2v();
	}
	else
	{
		return false;
	}
}

i3x()
{
	if (this.m6n)
	{
		return this.m6n.i3x.o0o();
	}
	else
	{
		return new x6l();
	}
}

h4h(i3x)
{
	this.k0q();
	this.m6n.i3x = i3x.o0o();
	this.h1p();
}

y9e()
{
	if (this.m6n)
	{
		this.m6n.b0e.i4c();
		this.h1p();
	}
}

v8d()
{
	if (this.m6n)
	{
		return this.m6n.b0e.g6i();
	}
	else
	{
		return false;
	}
}

b0e()
{
	if (this.m6n)
	{
		return this.m6n.b0e.o0o();
	}
	else
	{
		return new p6t();
	}
}

w8l(b0e)
{
	this.k0q();
	this.m6n.b0e = b0e.o0o();
	this.h1p();
}

s0o(z2g)
{
	this.v3n = z2g.o0o();
	this.m6n = null;
}

z2g()
{
	let u5j = new q5w();
  return Object.assign(u5j, this.v3n);
}

}

function l9h(z2g)
{
  let l3k = new g8w();
  l3k.s0o(z2g);
  return l3k;
}
class q5w
{

constructor()
{
	this.b8x = y0s;
	this.b7t = o8u.k2v;
	this.w8c = y0s;
	this.v1o = o8u.k2v;
	this.o7g = [];
	this.l4p = [];
	this.m4u = [];
}

o0o()
{
	let u5j = new q5w();
	u5j.b8x = this.b8x;
	u5j.b7t = this.b7t;
	u5j.w8c = this.w8c;
	u5j.v1o = this.v1o;
	u5j.o7g = this.o7g.slice();
	u5j.l4p = this.l4p.slice();
	u5j.m4u = this.m4u.slice();
	return u5j;
}

l1y(q0s)
{
	if (
		this.b8x != q0s.b8x ||
		this.b7t != q0s.b7t ||
		this.w8c != q0s.w8c ||
		this.v1o != q0s.v1o)
	{
		return false;
	}
	else
	{
		for (const h2j of this.o7g)
		{
			let c6v = q0s.o7g.find(function(u7n){ return u7n == h2j; });
			if (c6v === undefined)
			{
				return false;
			}
		}
		for (const f3q of this.l4p)
		{
			let c6v = q0s.l4p.find(function(u7n){ return u7n == f3q; });
			if (c6v === undefined)
			{
				return false;
			}
		}
		return true;
	}
}

w6d(q0s)
{
	return !this.l1y(q0s);
}

k2v()
{
	return this.b8x == y0s;
}

e8p()
{
 	return this.b7t == o8u.r1c ||
		this.b7t == o8u.e4t;
}

s3v()
{
 	return this.b7t == o8u.i9a ||
		this.b7t == o8u.a1p;
}

u5o()
{
  return this.o7g.length > 0;
}

x8e()
{
	return this.b7t != this.v1o;
}

b6j()
{
	return this.b8x == y0s;
}

z9l(h2j)
{
	let c6v = this.o7g.find(function(u7n){ return u7n == h2j; });
	return (c6v !== undefined);
}


a5b(b5c)
{
	for (const h2j of b5c)
	{
		let c6v = this.o7g.find(function(u7n){ return u7n == h2j; });
		if (c6v === undefined)
		{
			return false;
		}
	}
	return true;
}


y7d(h2j)
{
	let c6v = this.m4u.find(function(u7n){ return u7n == h2j; });
	return (c6v !== undefined);
}

h0g(b5c)
{
	for (const h2j of b5c)
	{
		let c6v = this.m4u.find(function(u7n){ return u7n == h2j; });
		if (c6v === undefined)
		{
			return false;
		}
	}
	return true;
}

g9x()
{
  return this.o7g.length;
}

}

const k0u =
[
	y0s, y0s,	y0s, y0s,	y0s, y0s, y0s, y0s,	y0s, y0s, y0s, y0s, y0s, y0s,
	y0s, y0s,	y0s, y0s, y0s, y0s,	y0s, y0s,	y0s, y0s,	y0s, y0s,	y0s, y0s,
	y0s, y0s,	y0s, sq_1,	y0s, t3i,	y0s, q8y,	y0s, p0j,	y0s, b6f,	y0s, y0s,
	y0s, y0s,	c6b,  y0s,	c2h,  y0s,	i4u,  y0s,	z4p,  y0s,	r7i, y0s,	y0s, y0s,
	y0s, y0s,	y0s, h5g,	y0s, y3a,	y0s, m5m,	y0s, j3j,	y0s, s3f,	y0s, y0s,
	y0s, y0s,	a8o, y0s,	u4e, y0s,	q9u, y0s,	k9w, y0s,	h6j, y0s,	y0s, y0s,
	y0s, y0s,	y0s, j0q,	y0s, t4a,	y0s, d6p,	y0s, k8c,	y0s, j3q,	y0s, y0s,
	y0s, y0s, c3b, y0s,	x3i, y0s,	t0h, y0s,	r6y, y0s,	t8r, y0s,	y0s, y0s,
	y0s, y0s,	y0s, z5u,	y0s, m5a,	y0s, o6a,	y0s, f0e,	y0s, w7i,	y0s, y0s,
	y0s, y0s,	f4p, y0s,	y3r, y0s,	d9d, y0s,	v8n, y0s,	q4y, y0s,	y0s, y0s,
	y0s, y0s,	y0s, g1q,	y0s, x5g,	y0s, y7c,	y0s, l9i,	y0s, v1u,	y0s, y0s,
	y0s, y0s,	a1l, y0s,	e4x, y0s,	o8c, y0s,	g8e, y0s,	a7i, y0s,	y0s, y0s,
	y0s, y0s,	y0s, y0s,	y0s, y0s,	y0s, y0s,	y0s, y0s,	y0s, y0s,	y0s, y0s,
	y0s, y0s,	y0s, y0s,	y0s, y0s,	y0s, y0s,	y0s, y0s,	y0s, y0s,	y0s, y0s,
];

const p2a =
[
	31,  33,  35,	 37,  39,
	44,	 46,	48,	 50,	52,
	59,	 61,	63,	 65,	67,
	72,	 74,	76,	 78,	80,
	87,	 89,	91,	 93,	95,
	100, 102,	104, 106,	108,
	115, 117, 119, 121, 123,
	128, 130, 132, 134, 136,
	143, 145,	147, 149,	151,
	156, 158, 160, 162, 164,
];

class w9y
{

constructor()
{
	this.r1o = [];
  this.l0p = Array(e7n).fill(y0s);
  this.y7s = Array(e7n).fill(y0s);
  this.k4u = Array(e7n).fill(o8u.k2v);
  this.g4q = Array(e7n).fill(false);
  this.g9p = 0;
	this.h7c = new z4m();
	this.z9w = 0;
	this.f3x = y0s;
	this.o2z = o8u.k2v;
	this.y6k = 0;
	this.l3n = 0;
	this.j6l = 0;
	this.t2o = 0;
	this.t6y = false;
}

n4j(j3g)
{
	this.h7c = j3g.o0o();
	this.g4q.fill(false);
  this.g9p = 0;
	let t0x = 14;
	if (this.h7c.e9d())
	{
		this.y6k = -(t0x + 1);
		this.l3n = -(t0x - 1);
		this.j6l = (t0x - 1);
		this.t2o = (t0x + 1);
	}
	else
	{
		this.y6k = (t0x + 1);
		this.l3n = (t0x - 1);
		this.j6l = -(t0x - 1);
		this.t2o = -(t0x + 1);
	}
}

m8n(b8x)
{
 	this.f3x = b8x;
	this.o2z = this.h7c.t9a(this.f3x);
	this.z9w = 0;
	if (
		(this.h7c.e9d() && this.o2z == o8u.r1c) ||
		(this.h7c.p0w() && this.o2z == o8u.i9a))
	{
		this.a0e(this.f3x);
	}
	else if (
		(this.h7c.e9d() && this.o2z == o8u.e4t) ||
		(this.h7c.p0w() && this.o2z == o8u.a1p))
	{
		this.s3w(this.f3x);
	}
}

a0e(h2j)
{
 	this.g8j(h2j, this.y6k);
	this.g8j(h2j, this.l3n);
}

g8j(b8x, u1y)
{
	let w8c = k0u[p2a[b8x] + u1y];
	if (w8c != y0s)
  {
    if (this.h7c.a4g(w8c))
  	{
	  	this.v9t(w8c);
  	}
  }
}

s3w(b8x)
{
	this.s0f(b8x, this.y6k);
	this.s0f(b8x, this.l3n);
	this.s0f(b8x, this.t2o);
	this.s0f(b8x, this.j6l);
}

s0f(b8x, u1y)
{
	let q3z = u1y;
	do
	{
		let w8c = k0u[p2a[b8x] + q3z];
		if (w8c == y0s)
    {
      break;
    }
    if (!this.h7c.a4g(w8c))
		{
			break;
		}
		this.v9t(w8c);
		q3z += u1y;
	} while (true);
}

f6e(b8x)
{
	this.f3x = b8x;
	this.o2z = this.h7c.t9a(this.f3x);
	this.z9w = 0;
	let f3q = this.h7c.t9a(this.f3x);
	if ((this.h7c.e9d() && this.o2z == o8u.r1c) ||
		(this.h7c.p0w() && this.o2z == o8u.i9a))
	{
		this.h7c.t6k(this.f3x, o8u.k2v);
		this.u4j(this.f3x);
	}
	else if (
		(this.h7c.e9d() && this.o2z == o8u.e4t) ||
		(this.h7c.p0w() && this.o2z == o8u.a1p))
	{
		this.h7c.t6k(this.f3x, o8u.k2v);
		this.d5l(this.f3x);
	}
	this.h7c.t6k(this.f3x, f3q);
}

u4j(b8x)
{
	let y7j = true;
	if (this.t0g(b8x, this.y6k))
	{
		y7j = false;
	}
	if (this.t0g(b8x, this.l3n))
	{
		y7j = false;
	}
	if (this.t0g(b8x, this.t2o))
	{
		y7j = false;
	}
	if (this.t0g(b8x, this.j6l))
	{
		y7j = false;
	}
	if (y7j)
	{
		this.f5p(b8x);
	}
}

t0g(b8x, u1y)
{
	let c8h = k0u[p2a[b8x] + u1y];
	if (c8h == y0s)
	{
		return false;
	}
	let w8c = k0u[p2a[b8x] + 2 * u1y];
	if (w8c == y0s)
	{
		return false;
	}
	if (!this.h7c.a4g(w8c))
	{
		return false;
	}
	if (this.g4q[c8h])
	{
		return false;
	}
	if (this.o2z == o8u.r1c)
	{
		if (!this.h7c.s3v(c8h))
		{
			return false;
		}
	}
	else
	{
		if (!this.h7c.e8p(c8h))
		{
			return false;
		}
	}
	this.l0p[this.z9w] = c8h;
	this.k4u[this.z9w] = this.h7c.t9a(c8h);
	this.y7s[this.z9w] = w8c;
	this.z9w++;
	let f3q = this.h7c.t9a(c8h);
	this.g4q[c8h] = true;
	this.u4j(w8c);
	this.g4q[c8h] = false;
	this.h7c.t6k(c8h, f3q);
	this.z9w--;
	return true;
}

d5l(b8x)
{
	let y7j = true;
	if (this.h6y(b8x, this.y6k))
	{
		y7j = false;
	}
	if (this.h6y(b8x, this.l3n))
	{
		y7j = false;
	}
	if (this.h6y(b8x, this.t2o))
	{
		y7j = false;
	}
	if (this.h6y(b8x, this.j6l))
	{
		y7j = false;
	}
	if (y7j)
	{
		this.f5p(b8x);
	}
}

h6y(s3a, u1y)
{
	let c8h = y0s;
	let q3z = u1y;
	do
	{
		c8h = k0u[p2a[s3a] + q3z];
		if (c8h == y0s)
		{
			return false;
		}
		if (this.g4q[c8h])
		{
			return false;
		}
		if (this.o2z == o8u.e4t)
		{
			if (this.h7c.s3v(c8h))
			{
				break;
			}
		}
		else
		{
			if (this.h7c.e8p(c8h))
			{
				break;
			}
		}
		if (!this.h7c.a4g(c8h))
		{
			return false;
		}
		q3z += u1y;
	} while (true);
	let q4s = false;
	do
	{
		q3z += u1y;
		let w8c = k0u[p2a[s3a] + q3z];
		if (w8c == y0s)
    {
      return q4s;
    }
    if (!this.h7c.a4g(w8c))
		{
			return q4s;
		}
		this.l0p[this.z9w] = c8h;
		this.k4u[this.z9w] = this.h7c.t9a(c8h);
		this.y7s[this.z9w] = w8c;
		this.z9w++;
		let q2q = this.h7c.t9a(c8h);
		this.g4q[c8h] = true;
		this.d5l(w8c);
		this.g4q[c8h] = false;
		this.h7c.t6k(c8h, q2q);
		this.z9w--;
		q4s = true;
	} while (true);
}

f5p(w8c)
{
	if (!this.z9w)
	{
		return;
	}
	if (this.z9w >= this.g9p)
	{
		if (this.z9w > this.g9p)
		{
      this.r1o.length = 0;
		}
		this.v9t(w8c);
	}
}

v9t(w8c)
{
	let i4x = new q5w();
	i4x.b8x = this.f3x;
	i4x.w8c = w8c;
	i4x.b7t = this.o2z;
	i4x.v1o = i4x.b7t;
	if (i4x.b7t == o8u.r1c)
	{
		if (d9l(i4x.w8c))
		{
			i4x.v1o = o8u.e4t;
		}
	}
	else if (i4x.b7t == o8u.i9a)
	{
		if (x0s(i4x.w8c))
		{
			i4x.v1o = o8u.a1p;
		}
	}
	for (let i = 0; i < this.z9w; i++)
	{
		i4x.o7g.push(this.l0p[i]);
		i4x.l4p.push(this.k4u[i]);
	}
	for (let i = 0; i < this.z9w - 1; i++)
	{
		i4x.m4u.push(this.y7s[i]);
	}

	if (this.t6y)
	{
		if (this.z9w >= 2)
		{
			let c6v = this.r1o.find(function(u7n)
			{
				if (u7n.l1y(i4x))
				{
					return true;
				}
			});
			if (c6v != undefined)
			{
				return;
			}
		}
	}
	this.g9p = i4x.g9x();
	this.r1o.push(i4x);
}

l3y(j3g, x1x)
{
	this.n4j(j3g);
	this.t6y = x1x;
	this.r1o.length = 0;

	for (const h2j of h0i)
	{
		this.f6e(h2j);
	}

	if (this.r1o.length === 0)
	{
		for (const h2j of h0i)
		{
			this.m8n(h2j);
		}
	}
	return this.r1o;
}

y6a(j3g)
{
	this.n4j(j3g);
	this.t6y = true;
	this.r1o.length = 0;

	for (const h2j of h0i)
	{
		this.f6e(h2j);
	}
	return this.r1o.length > 0;
}

g5o(j3g, c8h)
{
	this.n4j(j3g);
	this.t6y = true;
	this.r1o.length = 0;

	for (const h2j of h0i)
	{
		this.f6e(h2j);
	}
	for (const z2g of this.r1o)
	{
		if (z2g.z9l(c8h))
		{
			return true;
		}
	}
	return false;
}

m4u(j3g, i4x)
{
	this.n4j(j3g);
	this.t6y = true;
	this.r1o.length = 0;

	this.f6e(i4x.b8x);
	let t0e = [];
  let o7g = i4x.o7g;
	for (const c8h of o7g)
	{
		t0e.push(c8h);
	}
	for (const z2g of this.r1o)
	{
		if (z2g.w8c != i4x.w8c)
		{
			continue;
		}
		if (!z2g.a5b(t0e))
		{
			continue;
		}
		return z2g.m4u.slice();
	}
	return [];
}

j6e(j3g, i4x)
{
	this.n4j(j3g);
	this.t6y = true;
	this.r1o.length = 0;

	this.f6e(i4x.b8x);
	let a3k = 0;
	for (const z2g of this.r1o)
	{
		if (z2g.w8c == i4x.w8c)
		{
			a3k++;
		}
	}
	return a3k > 1;
}

} 


function a0g(j3g)
{
	let c9n = new w9y();
	return c9n.l3y(j3g, true);
}

function i5o(j3g, b8x)
{
	let c9n = new w9y();
	let q5m = c9n.l3y(j3g, true);
	let j8m = [];
	for (const z2g of q5m)
	{
		if (z2g.b8x == b8x)
		{
			j8m.push(z2g);
		}
	}
	return j8m;
}

function z6z(j3g, w8c)
{
	let c9n = new w9y();
	let q5m = c9n.l3y(j3g, true);
	let q3e = [];
	for (const z2g of q5m)
	{
		if (z2g.w8c == w8c)
		{
			q3e.push(z2g);
		}
	}
	return q3e;
}

function p7x(j3g, b8x, w8c)
{
	let c9n = new w9y();
	let q5m = c9n.l3y(j3g, true);
	let u1n = [];
	for (const z2g of q5m)
	{
		if (z2g.b8x == b8x && z2g.w8c == w8c)
		{
			u1n.push(z2g);
		}
	}
	return u1n;
}

function l3j(j3g, b8x, w8c, o7g)
{
	let c9n = new w9y();
	let q5m = c9n.l3y(j3g, true);
	let l3y = [];
	for (const z2g of q5m)
	{
		if (z2g.b8x != b8x)
		{
			continue;
		}
		if (z2g.w8c != w8c)
		{
			continue;
		}
		if (!z2g.z9l(o7g))
		{
			continue;
		}
		l3y.push(z2g);
	}
	return l3y;
}

function j3z(j3g, b8x, w8c, m4u)
{
	let c9n = new w9y();
	let q5m = c9n.l3y(j3g, false);
	let l3y = [];
	for (const z2g of q5m)
	{
		if (z2g.b8x != b8x)
		{
			continue;
		}
		if (z2g.w8c != w8c)
		{
			continue;
		}
		if (!z2g.h0g(m4u))
		{
			continue;
		}
		
		let f7o = false;
		for (const m of l3y)
		{
			if (m.l1y(i4x))
			{
				f7o = true;
				break;
			}
		}
		if (!f7o)
		{
			l3y.push(z2g);
		}
	}
	return l3y;
}

function f7p(j3g, i4x)
{
	let c9n = new w9y();
	return c9n.m4u(j3g, i4x);
}

function y6a(j3g)
{
	let c9n = new w9y();
	return c9n.y6a(j3g);
}

function g5o(j3g, c8h)
{
	let c9n = new w9y();
	return c9n.g5o(j3g, c8h);
}

function j6e(j3g, i4x)
{
	let c9n = new w9y();
	return c9n.j6e(j3g, i4x);
}

function m5x(j3g)
{
	let c9n = new w9y();
	if (c9n.y6a(j3g))
	{
		return false;
	}
	let e5i = j3g.o0o();
	e5i.o7l();
	return !c9n.y6a(e5i);
}

function a3q()
{
}
/* voor dammen niet nodig */
const i8o =
{
  d1e : 0,  
	q9c : 1,
	f2l : 2,
};

function b1e(j3g, i4x)
{
 	let q9l = '';
	if (i4x.k2v())
	{
		q9l += "\x2d\x2d";
	}
  else
  {
    q9l = o1r(i4x.b8x);
    if (i4x.o7g.length > 0)
    {
      q9l += 'x';
    }
    else
    {
      q9l += '-';
    }
    if (i4x.o7g.length > 2)
    {
      if (j6e(j3g, i4x))
      {
        let m4u = f7p(j3g, i4x);
        for (const h2j of m4u)
        {
          q9l += o1r(h2j);
          q9l += 'x';
        }
        q9l += o1r(i4x.w8c);
      }
      else
      {
        q9l += o1r(i4x.w8c);
      }
    }
    else
    {
      q9l += o1r(i4x.w8c);
    }
  }
	return q9l;
}


class p9o
{

constructor()
{
	this.height = 0;
	this.width = 0;
	this.e3h = 0;
}

}

function u4m(v5c,
  i2w,
  x2h,
  coordinate,
  coordinatesType,
  f1h,
  b1y,
  marginSize) 
{
 	let m6e = (coordinatesType == l8m.h7i ||
		coordinatesType == l8m.n2v ||
		coordinatesType == l8m.r3n);
	let b8h = (coordinatesType == l8m.h7i ||
		coordinatesType == l8m.n2v ||
		coordinatesType == l8m.l7z);
	let v4p =	(coordinatesType == l8m.h7i ||
		coordinatesType == l8m.r3n ||
		coordinatesType == l8m.d3j);
	let k8q = (coordinatesType == l8m.h7i ||
		coordinatesType == l8m.l7z ||
		coordinatesType == l8m.d3j);

	v5c.font = (coordinate.e3h).toString() + "\x70\x78\x20\x73\x65\x72\x69\x66";
	v5c.fillStyle = f1h;
  let z7a = coordinate.height;

	if (b8h)
	{
  	let p7t = 0;
		if (b1y)
		{
			p7t = e7n - c4f / 2;
		}
		else
		{
			p7t = c4f / 2 + 1;
		}
    for (let x4d = 0; x4d < c4f; x4d++)
		{
 			if (x4d % 2)
			{
				continue;
			}
			let g0y = v5c.measureText(p7t).width;
			let top = i2w.n8v + 1 + (x4d + 1) * x2h.w1j;
			top += (x2h.w1j - z7a) / 2 + z7a;
			let w5g = i2w.j6q - marginSize + (marginSize - g0y) / 2;
      v5c.fillText(p7t, w5g, top);
			if (b1y)
			{
				p7t -= c4f;
			}
			else
			{
				p7t += c4f;
			}
		}
	}

	if (v4p)
	{
		let p7t = 0;
		if (b1y)
		{
			p7t = e7n - c4f / 2 + 1;
		}
		else
		{
			p7t = c4f / 2;
		}
    for (let x4d = 0; x4d < c4f; x4d++)
		{
 			if (x4d % 2)
			{
				continue;
			}
      let g0y = v5c.measureText(p7t).width;
			let top = i2w.n8v + 1 + x4d * x2h.w1j;
			top += (x2h.w1j - z7a) / 2 + z7a;
			let w5g = i2w.j6q + i2w.f3w() +
        (marginSize - g0y) / 2;
      v5c.fillText(p7t, w5g, top);
			if (b1y)
			{
				p7t -= c4f;
			}
			else
			{
				p7t += c4f;
			}
		}
	}

	if (m6e)
	{
		let p7t = 0;
		if (b1y)
		{
			p7t = e7n;
		}
		else
		{
			p7t = 1;
		}
    for (let b8f = 0; b8f < c4f; b8f++)
		{
 			if (b8f % 2)
			{
				continue;
			}
			let left = i2w.j6q + 1 + (b8f + 1) * x2h.w1j;
      let g0y = v5c.measureText(p7t).width;
			let w5g = left + (x2h.w1j - g0y) / 2;
			let c7v = i2w.n8v - (marginSize - z7a) / 2 - 2;
      
      v5c.fillText(p7t, w5g, c7v);
			if (b1y)
			{
				p7t--;
			}
			else
			{
				p7t++;
			}
		}
	}

	if (k8q)
	{
		let p7t = 0;
		if (b1y)
		{
			p7t = c4f / 2;
		}
		else
		{
			p7t = e7n - c4f / 2 + 1;
		}
    for (let b8f = 0; b8f < c4f; b8f++)
		{
			if (b8f % 2)
			{
				continue;
			}
			let left = i2w.j6q + 1 + b8f * x2h.w1j;
      let g0y = v5c.measureText(p7t).width;
			let w5g = left + (x2h.w1j - g0y) / 2;
			let c7v = i2w.n8v + i2w.k4s() +
        (marginSize - z7a) / 2 + z7a - 2;
      
      v5c.fillText(p7t, w5g, c7v);
			if (b1y)
			{
				p7t--;
			}
			else
			{
				p7t++;
			}
		}
	}
}

function c0l(v5c, e3h)
{
	let i5k = new p9o();
	i5k.e3h = e3h;
	i5k.height = e3h;
	i5k.width = e3h;
	return i5k;
}
function a2a(v5c, rect, f3q)
{
 	v5c.lineWidth = "\x31";
  if (f3q == o8u.r1c || f3q == o8u.e4t)
  {
    v5c.fillStyle = "\x77\x68\x69\x74\x65";
    v5c.strokeStyle = "\x62\x6c\x61\x63\x6b";
  }
  else
  {
    v5c.fillStyle = "\x62\x6c\x61\x63\x6b";
    v5c.strokeStyle = "\x77\x68\x69\x74\x65";
  }
  let w7p = 80;
  let s0p = rect.f3w() + 1;
 	let k1s = ((0.19 * w7p) / 100) * s0p;
  let c8t = rect.j6q + s0p / 2;
  let g7d = (s0p / 4);
  let d5g = (s0p / 2.4);
	if (f3q == o8u.r1c || f3q == o8u.i9a)
	{
    let d6a = rect.n8v + s0p / 1.8;
    v5c.beginPath();
    v5c.ellipse(c8t, d6a, g7d, d5g, Math.PI / 2, 0, 2 * Math.PI);
    v5c.fill();
    v5c.stroke();
		d6a -= k1s;
    v5c.beginPath();
    v5c.ellipse(c8t, d6a, g7d, d5g, Math.PI / 2, 0, 2 * Math.PI);
    v5c.fill();
    v5c.stroke();
	}
	else if (f3q == o8u.e4t || f3q == o8u.a1p)
	{
    let d6a = rect.n8v + s0p / 1.55;
    v5c.beginPath();
    v5c.ellipse(c8t, d6a, g7d, d5g, Math.PI / 2, 0, 2 * Math.PI);
    v5c.fill();
    v5c.stroke();
		d6a -= k1s;
    v5c.beginPath();
    v5c.ellipse(c8t, d6a, g7d, d5g, Math.PI / 2, 0, 2 * Math.PI);
    v5c.fill();
    v5c.stroke();
		d6a -= k1s;
    v5c.beginPath();
    v5c.ellipse(c8t, d6a, g7d, d5g, Math.PI / 2, 0, 2 * Math.PI);
    v5c.fill();
    v5c.stroke();
	}
}

function t4u(v5c, rect, f3q)
{
 	v5c.lineWidth = "\x31";
  if (f3q == o8u.r1c || f3q == o8u.e4t)
  {
    v5c.fillStyle = "\x77\x68\x69\x74\x65";
    v5c.strokeStyle = "\x62\x6c\x61\x63\x6b";
  }
  else
  {
    v5c.fillStyle = "\x62\x6c\x61\x63\x6b";
    v5c.strokeStyle = "\x77\x68\x69\x74\x65";
  }

  let w7p = 80;
  let s0p = rect.f3w() + 1;
 	let k1s = ((0.19 * w7p) / 100) * s0p;
  let c8t = rect.j6q + s0p / 2;
  let g7d = (s0p / 4);
  let d5g = (s0p / 2.4);


  let d6a = rect.n8v + s0p / 2; 
  let a4p = s0p * 0.4;

  v5c.beginPath();
  v5c.arc(c8t, d6a, a4p, 0, Math.PI * 2);
  v5c.closePath();
  v5c.fill();
  v5c.stroke();

	if (i5u(f3q))
	{
		if (f3q == o8u.e4t)
		{
      v5c.fillStyle = "\x62\x6c\x61\x63\x6b";
      v5c.strokeStyle = "\x62\x6c\x61\x63\x6b";
		}
		else
		{
      v5c.fillStyle = "\x77\x68\x69\x74\x65";
      v5c.strokeStyle = "\x77\x68\x69\x74\x65";
		}
    a4p = s0p * 0.1;
    v5c.beginPath();
    v5c.arc(c8t, d6a, a4p, 0, Math.PI * 2);
    v5c.closePath();
    v5c.fill();
    v5c.stroke();
	}
}

function m2k(v5c, rect, f3q)
{
  if (f3q == o8u.k2v) return;
  if (z1t.w7y == 0)
  {
    a2a(v5c, rect, f3q);
  }
  else
  {
    t4u(v5c, rect, f3q);
  }
}


function g4i(w7y)
{
}
function r4l(u7n)
{
	let j3g = new z4m();
	let p2r = u7n.length;
	if (p2r < 6) 
	{
		return j3g;
	}
	if (u7n[0] != 'W' && u7n[0] != 'B')
	{
		return j3g;
	}
	if (u7n[0] == 'W')
	{
		j3g.z3n();
	}
	else if (u7n[0] == 'B')
	{
		j3g.s4l();
	}
	let h7h = u7n.indexOf("\x3a\x57");
	let u3o = u7n.indexOf("\x3a\x42");
	let m0v = u7n.indexOf("\x2e");
  if (m0v == -1)
	{
		m0v = u7n.length;
	}
	if (h7h == -1 || u3o == -1 || m0v <= u3o)
	{
		return j3g;
	}
	let w = u7n.substr(h7h + 2, u3o - (h7h + 2));
	let b = u7n.substr(u3o + 2, m0v - (u3o + 2));
	let t0f = w.split("\x2c");
	let o6e = b.split("\x2c");

	for (const s of t0f)
	{
		if (s.length)
		{
			if (s[0] == 'K')
			{
				if (s.length > 1)
				{
					let v4m = s.substr(1, 2);
					let h2j = j3e(v4m, 0);
					if (h2j)
					{
						j3g.t6k(h2j-1, o8u.e4t);
					}
				}
			}
			else
			{
				let h2j = j3e(s, 0);
				if (h2j)
				{
					j3g.t6k(h2j-1, o8u.r1c);
				}
			}
		}
	}
	for (const s of o6e)
	{
		if (s.length)
		{
			if (s[0] == 'K')
			{
				if (s.length > 1)
				{
					let v4m = s.substr(1, 2);
					let h2j = j3e(v4m, 0);
					if (h2j)
					{
						j3g.t6k(h2j-1, o8u.a1p);
					}
				}
			}
			else
			{
				let h2j = j3e(s, 0);
				if (h2j)
				{
					j3g.t6k(h2j-1, o8u.i9a);
				}
			}
		}
	}
	return j3g;
}

function m6l(j3g, f1j)
{
  let u2e = f1j.length;

 	
	if (f1j[0] == 'Z' || (u2e == 2 && f1j == "\x2d\x2d") || (u2e == 4 && f1j == "\x6e\x75\x6c\x6c"))
	{
		return new q5w();
	}

	let b5c = [];
	let i = 0;
	let p2r = f1j.length;
	while (i < p2r)
	{
		let v2x = i;
		let g3o = 0;
		let n4c = f1j[i];
		while (i < p2r && n4c != '-' && n4c != 'x' && n4c != ':')
		{
			i++;
			g3o++;
			if (i < p2r)
			{
				n4c = f1j[i];
			}
		}
		let j5j = f1j.substr(v2x, g3o);
    b5c.push(g1t(j5j));
		i++; 
	}
	let d4m = b5c.length;
	if (d4m < 2)
	{
		return false;
	}
	else if (d4m == 2)
	{
		let b8x = b5c[0];
		let w8c = b5c[1];
		let l3y = p7x(j3g, b8x, w8c);
		if (l3y.length == 1)
		{
			return l3y[0];
		}
		return false;
	}
	else
	{
		let b8x = b5c[0];
		let w8c = b5c[1];
		let o7g = [];
		for (let i = 2; i < d4m; i++)
		{
			o7g.push(b5c[i]);
		}
		let l3y = l3j(j3g, b8x, w8c, o7g);
		if (l3y.length == 1)
		{
			return l3y[0];
		}
		b8x = b5c[0];
		w8c = b5c[b5c.length - 1];
		let m4u = [];
		for (let i = 1; i < d4m - 1; i++)
		{
			m4u.push(b5c[i]);
		}
		l3y = j3z(j3g, b8x, w8c, m4u);
		if (l3y.length == 1)
		{
			return l3y[0];
		}
		return false;
	}
}

function e4r()
{
  let u5z = ["\x69\x6d\x61\x67\x65\x73\x2f\x62\x6f\x61\x72\x64\x2f\x42\x6f\x61\x72\x64\x42\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x2e\x70\x6e\x67",
    "\x69\x6d\x61\x67\x65\x73\x2f\x62\x6f\x61\x72\x64\x2f\x44\x61\x72\x6b\x53\x71\x75\x61\x72\x65\x2e\x70\x6e\x67",
    "\x69\x6d\x61\x67\x65\x73\x2f\x62\x6f\x61\x72\x64\x2f\x4c\x69\x67\x68\x74\x53\x71\x75\x61\x72\x65\x2e\x70\x6e\x67",
    "\x69\x6d\x61\x67\x65\x73\x2f\x62\x6f\x61\x72\x64\x2f\x4d\x61\x72\x67\x69\x6e\x2e\x70\x6e\x67"];
  return u5z;
}
function div(d1a, b8s)
{
  const o5c = d1a % b8s;
  const quot = Math.floor((d1a - o5c) / b8s);
  return { quot: quot, o5c: o5c };
}

function s6z(j3g, q9l)
{
	let i4x = new q5w();
	if (q9l.length < 4)
	{
		return i4x;
	}
	let f5e = q9l.slice(0, 2);
	let toString = q9l.slice(2, 4);
	i4x.b8x = g1t(f5e);
  i4x.b7t = j3g.t9a(i4x.b8x);
	i4x.w8c = g1t(toString);
	i4x.v1o = i4x.b7t;
	if (q9l.length == 5)
	{
		switch (q9l[4])
		{
			case 'q':
				i4x.v1o = j3g.e9d() ? o8u.whiteQueen : o8u.blackQueen;
				break;
			case 'r':
				i4x.v1o = j3g.e9d() ? o8u.whiteRook : o8u.blackRook;
				break;
			case 'b':
				i4x.v1o = j3g.e9d() ? o8u.whiteBishop : o8u.blackBishop;
				break;
			case 'n':
				i4x.v1o = j3g.e9d() ? o8u.whiteKnight : o8u.blackKnight;
				break;
		}
	}
	return i4x;
}

class e1q
{

constructor()
{
	let w3g = '';
	let y9t = '';
}

}

function h6c(q9l, w3g, e1i)
{
  let p5u = "\x20" + w3g + "\x20";
  let l8q = q9l.indexOf(p5u, 0);
	if (l8q >= 0)
	{
		let j0s = l8q + p5u.length;
		let m0t = 0;
		
		if (w3g == "\x70\x76")
		{
			m0t = q9l.indexOf("\x20\x73\x74\x72\x69\x6e\x67\x20", j0s);
		}
		else
		{
			m0t = q9l.indexOf("\x20", j0s);
		}
		if (m0t < 0)
		{
			m0t = q9l.length;
		}
    let y9t = q9l.slice(j0s, m0t).trim();
		e1i.set(w3g, y9t);
	}
}

const o3l =
{
	m8h        : 0,
	r3f      : 1,
};

class j0c
{

constructor()
{
	this.g0w = new g0e();
  this.t7e = null;
  this.h3d = new j6w();
  this.x4a = new f0w();
  this.w5o = false;
  this.b7w = false;
  this.i5e = false;
  this.a6h = false;
  this.z7d = false;
  this.p7h = new e5o();
	this.s1t = new n1y();
  this.z4w = null;
}

p3a(q4c)
{
  this.g0w = q4c.o0o();
  this.b3q();
  this.w5o = false;
 	for (const f1a of this.g0w.o5l.o5l)
	{
		if (f1a.w3g == "\x4d\x75\x6c\x74\x69\x50\x56")
		{
			this.w5o = (f1a.y9t != "\x31");
			break;
		}
	}

  this.x3p();
}

x3p()
{
  this.t7e = new Worker("\x2f\x73\x68\x61\x72\x65\x64\x67\x61\x6d\x65\x73\x2f\x6a\x73\x2f\x73\x74\x6f\x63\x6b\x66\x69\x73\x68\x2d\x31\x37\x2e\x31\x2d\x38\x65\x34\x64\x30\x34\x38\x2e\x6a\x73");
  this.t7e.z4w = (event) => {
    this.r3f(event);
  };
}

o5k()
{
	this.h3d.h2u();
	this.x4a.h2u();
	this.m8h("\x75\x63\x69");
}

j4a()
{
	if (!this.i5e)
	{
    return;
  }

  
	for (const f1a of this.g0w.o5l.o5l)
	{
		let q1p = "\x73\x65\x74\x6f\x70\x74\x69\x6f\x6e";
		q1p += "\x20\x6e\x61\x6d\x65\x20";
		q1p += f1a.w3g;
		q1p += "\x20\x76\x61\x6c\x75\x65\x20";
		q1p += f1a.y9t;
		this.m8h(q1p);
	}
  
  
  
  

	this.m8h("\x69\x73\x72\x65\x61\x64\x79");
	this.i5e = false;
}

m8h(m6y)
{
	this.a2h(m6y, o3l.m8h);
  this.t7e.postMessage(m6y);
}

r3f(event)
{
  
  
 	this.a2h(event.data, o3l.r3f);
	this.o3y(event.data);
}

o3y(q1p)
{
	let o2x = q1p.split(' ');
	if (o2x.length == 0) return;
	let m6y = o2x[0];

	if (m6y == "\x72\x65\x61\x64\x79\x6f\x6b")
	{
		this.b7w = true;
    if (this.z4w)
    {
      this.z4w({
        cmd: "\x72\x65\x61\x64\x79",
        data: {}
        });
    }
		return;
	}
	if (m6y == "\x62\x65\x73\x74\x6d\x6f\x76\x65")
	{
		this.v7m(q1p);
	}
	else if (m6y == "\x69\x64")
	{
		this.v5p(q1p);
	}
	else if (m6y == "\x69\x6e\x66\x6f")
	{
		this.k6r(q1p);
	}
	else if (m6y == "\x6f\x70\x74\x69\x6f\x6e")
	{
		this.r7w(q1p);
	}
	else if (m6y == "\x75\x63\x69\x6f\x6b")
	{
		this.z4a(q1p);
	}
}

v7m(q1p)
{
	this.a6h = false;
  if (this.z7d)
  {
    this.z7d = false;
    this.v9u();
  }
}

v5p(q1p)
{
 	let q9l = q1p;
	let o2x = q9l.split("\x20");
	if (o2x.length < 3) return;

  const word1 = o2x.shift();
  const word2 = o2x.shift();
  const y9t = o2x.join(' ');

	if (word2 == "\x6e\x61\x6d\x65")
	{
		this.h3d.w3g = y9t;
	}
	else if (word2 == "\x61\x75\x74\x68\x6f\x72")
	{
		this.h3d.q2p = y9t;
	}
}

k6r(q1p)
{
	let q9l = q1p;
	let e1i = new Map();
	h6c(q9l, "\x64\x65\x70\x74\x68", e1i);
 	h6c(q9l, "\x73\x65\x6c\x64\x65\x70\x74\x68", e1i);
	h6c(q9l, "\x70\x76", e1i);
	h6c(q9l, "\x6e\x70\x73", e1i);
	h6c(q9l, "\x6e\x6f\x64\x65\x73", e1i);
	h6c(q9l, "\x73\x63\x6f\x72\x65\x20\x63\x70", e1i);
	h6c(q9l, "\x73\x63\x6f\x72\x65\x20\x6d\x61\x74\x65", e1i);
	h6c(q9l, "\x74\x69\x6d\x65", e1i);
	h6c(q9l, "\x63\x75\x72\x72\x6d\x6f\x76\x65", e1i);
	h6c(q9l, "\x63\x75\x72\x72\x6d\x6f\x76\x65\x6e\x75\x6d\x62\x65\x72", e1i);
 	h6c(q9l, "\x6d\x75\x6c\x74\x69\x70\x76", e1i);

  if (e1i.has("\x70\x76") && e1i.has("\x64\x65\x70\x74\x68"))
  {
		this.y1y(e1i);
    if (this.z4w)
    {
      this.z4w({
        cmd: "\x70\x76",
        data: {}
        });
    }

		return;
  }

  if (e1i.has("\x63\x75\x72\x72\x6d\x6f\x76\x65") && e1i.has("\x63\x75\x72\x72\x6d\x6f\x76\x65\x6e\x75\x6d\x62\x65\x72"))
	{
		this.t5h(e1i);
    if (this.z4w)
    {
      this.z4w({
        cmd: "\x63\x6d",
        data: {}
        });
    }
		return;
	}
}

r7w(q1p)
{
	let f1a = new o8k();
	let q9l = q1p;

	let m5g = "\x20\x6e\x61\x6d\x65\x20";
  let i1q = q9l.indexOf(m5g, 0);
	if (i1q < 0) return;
	let z1o = i1q + m5g.length;

	let d4y = "\x20\x74\x79\x70\x65\x20";
	let t9h = q9l.indexOf(d4y, 0);
	if (t9h < 0) return;
	let t2m = t9h;

	let u3a = t9h + d4y.length;
	let o6w = q9l.indexOf("\x20", u3a);
	if (o6w < 0) o6w = q9l.length + 1;

	f1a.w3g = q9l.slice(z1o, t2m);
	f1a.type = q9l.slice(u3a, o6w);

	if (f1a.type == "\x63\x68\x65\x63\x6b")
	{
		f1a.type = "\x62\x6f\x6f\x6c";
	}
	else if (f1a.type == "\x63\x6f\x6d\x62\x6f")
	{
		f1a.type = "\x65\x6e\x75\x6d";
	}

	let a2l = "\x20\x64\x65\x66\x61\x75\x6c\x74\x20";
	let i0p = q9l.indexOf(a2l, 0);
	if (i0p >= 0)
	{
		let g5u = i0p + a2l.length;
		let i6b = q9l.indexOf("\x20", g5u);
		if (i6b < 0) i6b = q9l.length + 1;
		f1a.y9t = q9l.slice(g5u, i6b);
		if (f1a.y9t == "\x3c\x65\x6d\x70\x74\x79\x3e")
		{
			f1a.y9t = "";
		}
	}
	if (f1a.type == "\x73\x70\x69\x6e")
	{
		let r7j = "\x20\x6d\x69\x6e\x20";
		let a3e = q9l.indexOf(r7j, 0);
		if (a3e >= 0)
		{
			let t1i = a3e + r7j.length;
			let z8f = q9l.indexOf("\x20", t1i);
			if (z8f < 0) z8f = q9l.length + 1;
			f1a.min = q9l.slice(t1i, z8f).trim();
		}
		let v2y = "\x20\x6d\x61\x78\x20";
		let o6t = q9l.indexOf(v2y, 0);
		if (o6t >= 0)
		{
			let s1p = o6t + v2y.length;
			let c7p = q9l.indexOf("\x20", s1p);
			if (c7p < 0) c7p = q9l.length + 1;
			f1a.max = q9l.slice(s1p, c7p).trim();
		}
	}
	else if (f1a.type == "\x65\x6e\x75\x6d")
	{
		let w3r = 0;
		while (true)
		{
			let o2w = "\x20\x76\x61\x72\x20";
			let g0q = q9l.indexOf(o2w, w3r);
			if (g0q < 0) break;
			let o1w = g0q + o2w.length;
			let j9o = q9l.indexOf("\x20\x76\x61\x72\x20", g0q + 5);
			if (j9o < 0) j9o = q9l.length + 1;
			if (f1a.values.length != 0)
			{
				f1a.values += "\x20";
			}
			f1a.values += q9l.slice(o1w, j9o).trim();
			w3r = j9o;
		}
	}
	this.x4a.o5l.push(f1a);
}

z4a(q1p)
{
	this.i5e = true;
  this.j4a();
}


g0r()
{
	if (this.t7e)
  {
    this.m8h("\x71\x75\x69\x74");
    this.t7e.terminate();
    this.t7e = null;
  }
}








n4a()
{
}

k1n(t4y)
{
	if (this.b7w)
	{
  	this.a2h('setInput', o3l.m8h);
		this.p7h = t4y.o0o();
    if (this.a6h)
    {
      this.z7d = true;
      this.m8h('stop');
    }
    else
    {
      this.v9u();
    }
	}
}

v9u()
{
  this.s1t = new n1y();
  this.s1t.j3g = this.p7h.a6k();
  this.s1t.d4k = this.p7h.d4k();
	this.s1t.p2m = this.w5o;
  this.a6h = true;
  if (this.z4w)
  {
    this.z4w({
      cmd: "\x67\x6f",
      data: {}
      });
  }

  let q1p = "\x70\x6f\x73\x69\x74\x69\x6f\x6e\x20\x66\x65\x6e";
  q1p += "\x20";
	let s5o = positionToPortableFen(this.p7h.a6k());
	q1p += s5o;
	this.m8h(q1p);
	if (this.p7h.y3z == s5b)
	{
		q1p = "\x67\x6f\x20\x69\x6e\x66\x69\x6e\x69\x74\x65";
		this.m8h(q1p);
	}
	else
	{
		q1p = "\x67\x6f\x20\x6d\x6f\x76\x65\x74\x69\x6d\x65\x20";
		q1p += this.p7h.y3z;
		this.m8h(q1p);
	}
}

b3q()
{
}

a2h(q9l, u1y)
{
	if (!this.g0w.l3h) return;
 	if (u1y == o3l.r3f)
	{
    console.log("\x46\x72\x6f\x6d\x20\x65\x6e\x67\x69\x6e\x65\x3a", q9l);
	}
	else
	{
    console.log("\x54\x6f\x20\x65\x6e\x67\x69\x6e\x65\x3a", q9l);
	}
}

y1y(e1i)
{
  let b7l = e1i.get("\x64\x65\x70\x74\x68");
  let j8h = e1i.get("\x6d\x75\x6c\x74\x69\x70\x76");

	let c3a = new v1a();
	c3a.t7s = b7l;

	if (e1i.has("\x73\x65\x6c\x64\x65\x70\x74\x68"))
	{
		c3a.y5w = e1i.get("\x73\x65\x6c\x64\x65\x70\x74\x68");
	}

 	if (e1i.has("\x6e\x70\x73"))
	{
    let u7c = e1i.get("\x6e\x70\x73");
		let j0j = j3e(u7c, 0);
		let i7t = j0j / 1000;
		if (i7t)
		{
			c3a.j1l = i7t + "\x20\x6b\x4e\x2f\x73";
		}
	}

	let c5x = 0.0;
  if (e1i.has("\x73\x63\x6f\x72\x65\x20\x63\x70"))
	{
    let h0u = e1i.get("\x73\x63\x6f\x72\x65\x20\x63\x70");
		c5x = parseFloat(h0u);
		c5x = c5x / 100.0;
		if (c5x > 9.99)
		{
			c5x = 9.99;
		}
		if (c5x < -9.99)
		{
			c5x = -9.99;
		}
		if (this.s1t.j3g.p0w())
		{
			c5x = -c5x;
		}
		c3a.c5x = c5x;
	}
  if (e1i.has("\x73\x63\x6f\x72\x65\x20\x6d\x61\x74\x65"))
	{
    let g9j = e1i.get("\x73\x63\x6f\x72\x65\x20\x6d\x61\x74\x65");
		let x4h = j3e(g9j, 0);
		if (this.s1t.j3g.p0w())
		{
			x4h = -x4h;
		}
		c3a.x4h = x4h;
		if (x4h > 0)
		{
			c5x = 9.99;
		}
		if (x4h < 0)
		{
			c5x = -9.99;
		}
		c3a.c5x = c5x;
	}

  if (e1i.has("\x74\x69\x6d\x65"))
	{
    let m6x = e1i.get("\x74\x69\x6d\x65");
		let t6x = j3e(m6x, 0);
		let o8o = t6x / 1000;
		let m = div(o8o, 60);
		let e4p = m.o5c;
    e4p = Math.a8d(e4p);
		let h = div(m.quot, 60);
		let r7y = h.o5c;
		let f7g = h.quot;
    const pad = (num) => String(num).padStart(2, '0');
    const p4h = `${pad(f7g)}:${pad(r7y)}:${pad(e4p)}`;
    c3a.p4h = p4h;
	}

  let z1e = e1i.get("\x70\x76");
	let l9z = z1e.split("\x20");

	let l3y = new e5q();
	let d4k = this.s1t.d4k;
	l3y.c1i(this.s1t.j3g, d4k);
	let x6h = l3y.y5m();
	let z1j = this.s1t.j3g.o0o();
	for (const s of l9z)
	{
		if (s.length == 0)
		{
			continue;
		}
		let w7u = s6z(z1j, s);
		let q5m = a0g(z1j);
		let f7o = false;
		for (const z2g of q5m)
		{
			if (z2g.w8c == w7u.w8c &&
				z2g.b8x == w7u.b8x &&
				z2g.v1o == w7u.v1o)
			{
				z1j.r9f(z2g);
				let i4x = l9h(z2g);
				l3y.v9t(x6h, i4x);
				f7o = true;
				break;
			}
		}
    if (!f7o) break;
	}
	if (!l3y.n9r())
	{
    console.log("\x70\x61\x72\x73\x65\x20\x6d\x6f\x76\x65\x73\x20\x61\x61\x6e\x74\x61\x6c\x3a\x20\x6c\x65\x65\x67\x21");
		return;
	}
  console.log("\x70\x61\x72\x73\x65\x20\x6d\x6f\x76\x65\x73\x20\x61\x61\x6e\x74\x61\x6c\x3a\x20" + l3y.n9r());
	c3a.l3y = l3y;

 	if (this.w5o)
	{
		if (j8h == 1)
		{
			this.s1t.x8y = c3a;
		}
		if (j8h > this.s1t.x7m.length)
		{
			this.s1t.x7m.push(c3a);
		}
		else
		{
			this.s1t.x7m[j8h-1] = c3a;
		}
	}
	else
	{
		this.s1t.x7m.push(c3a);
		this.s1t.x8y = c3a;
	}
}

t5h(e1i)
{
  let a9n = e1i.get("\x63\x75\x72\x72\x6d\x6f\x76\x65");
  let u4p = e1i.get("\x63\x75\x72\x72\x6d\x6f\x76\x65\x6e\x75\x6d\x62\x65\x72"); 
	this.s1t.k4o = j3e(u4p, 0);
	let q5m = a0g(this.s1t.j3g);
	this.s1t.d1j = q5m.length;
	let w7u = s6z(this.s1t.j3g, a9n);
	for (const z2g of q5m)
	{
		if (z2g.w8c == w7u.w8c &&
			z2g.b8x == w7u.b8x &&
			z2g.v1o == w7u.v1o)
		{
			this.s1t.g6k = z2g;
			break;
		}
	}
}

e6h()
{
	return this.s1t.o0o();
}

q4c()
{
	return this.g0w.o0o();
}

}

class j6w
{

constructor()
{
	this.w3g = '';
	this.q2p = '';
	this.t9q = '';
	this.v0e = '';
}

o0o()
{
  return Object.assign(new j6w(), this);
}

h2u()
{
	this.w3g = '';
	this.q2p = '';
	this.t9q = '';
	this.v0e = '';
}

}


const s5b = 10000000;

class e5o
{

constructor()
{
	this.l3y = new e5q();
	this.y3z = s5b;
  this.z5l = 0;
	this.h7w = 0;
}

o0o()
{
	let l1d = new e5o();
  l1d.l3y = this.l3y.o0o();
  l1d.y3z = this.y3z;
  l1d.z5l = this.z5l;
  l1d.h7w = this.h7w;
	return l1d;
}

d4k()
{
	return this.l3y.k5r(this.l3y.q7d());
}

a6k()
{
	return this.l3y.s2i();
}

}


class g0e
{

constructor()
{
	this.y5s = '';
	this.u2n = new j6w();
	this.o5l = new f0w();
	this.t9b = new f0w();
	this.l3h = true;
	this.c1g = true;
}

o0o()
{
	let b4a = new g0e();
	b4a.y5s = this.y5s;
	b4a.u2n = this.u2n.o0o();
	b4a.o5l = this.o5l.o0o();
	b4a.t9b = this.t9b.o0o();
	b4a.l3h = this.l3h;
	b4a.c1g = this.c1g;
	return b4a;
}


}


function v0o(c5x)
{
  if (Math.abs(c5x) < 0.005)
  {
    return "\x30\x2e\x30\x30";
  }
  else
  {
     const formatted = c5x.toFixed(2);
     return c5x > 0 ? `+${formatted}` : formatted;
  }
}

class v1a
{

constructor()
{
	this.c5x = 0.0;
	this.x4h = false;
	this.t7s = '';
	this.y5w = '';
	this.p4h = '';
	this.j1l = '';
	this.l3y = new e5q();
}

o0o()
{
	let i1k = new v1a();
  i1k.c5x = this.c5x;
  i1k.x4h = this.x4h;
  i1k.t7s = this.t7s;
  i1k.y5w = this.y5w;
  i1k.p4h = this.p4h;
  i1k.j1l = this.j1l;
  i1k.l3y = this.l3y.o0o();
	return i1k;
}

b8l()
{
	if (this.x4h)
	{
		return "\x23" + this.x4h;
	}
	else
	{
		return v0o(this.c5x);
	}
}

w4y()
{
	let i1u = scoreToMoveValue(this.c5x);
	let w3c = moveValueToEvalString(i1u);
	return w3c;
}

}

class n1y
{

constructor()
{
	this.j3g = new z4m();
	this.d4k = 1;
	this.p8w = false;
	this.p3c = false;
	this.p2m = false;
	this.x7m = [];
	this.x8y = new v1a();
	this.g6k = new q5w();
	this.k4o = 0;
	this.d1j = 0;
}

o0o()
{
	let p9r = new n1y();
  p9r.j3g = this.j3g.o0o();
  p9r.d4k = this.d4k;
  p9r.p8w = this.p8w;
  p9r.p3c = this.p3c;
  p9r.p2m = this.p2m;
  p9r.x7m = this.x7m.slice();
  p9r.x8y = this.x8y.o0o();
  p9r.g6k = this.g6k.o0o();
  p9r.k4o = this.k4o;
  p9r.d1j = this.d1j;
	return p9r;
}

o4r()
{
	return this.x8y.l3y.n9r() > 0;
}

d9a()
{
	let p2d = this.x8y.l3y.y5m();
	this.x8y.l3y.r9f(p2d);
	return p2d.i4x.z2g();
}

}


class o8k
{
  constructor(type = '', w3g = '', y9t = '', min = '', max = '', values = '')
  {
    this.type = type;
    this.w3g = w3g;
    this.y9t = y9t;
    this.min = min;
    this.max = max;
    this.values = values;
  }

  o0o()
  {
    return Object.assign(new o8k(), this);
  }
}

class f0w
{
  constructor()
  {
    this.o5l = [];
  }

  o0o()
  {
    let v9e = new f0w();
    v9e.o5l = this.o5l.map(p => p.o0o());
    return v9e;
  }

  h2u()
  {
    this.o5l.length = 0;
  }

  addBool(w3g, y9t)
  {
    this.o5l.push(new o8k("\x62\x6f\x6f\x6c", w3g, y9t));
  }

  addInteger(w3g, y9t)
  {
    this.o5l.push(new o8k("\x69\x6e\x74", w3g, y9t));
  }

  addSpin(w3g, y9t, min, max)
  {
    this.o5l.push(new o8k("\x73\x70\x69\x6e", w3g, y9t, min, max));
  }

  addString(w3g, y9t)
  {
    this.o5l.push(new o8k("\x73\x74\x72\x69\x6e\x67", w3g, y9t));
  }

  addEnum(w3g, y9t, values)
  {
    this.o5l.push(new o8k("\x65\x6e\x75\x6d", w3g, y9t, '', '', values));
  }

  addButton(w3g)
  {
    this.o5l.push(new o8k("button", w3g, w3g));
  }

  p4n(w3g, y9t)
  {
    for (let f1a of this.o5l)
    {
      if (f1a.w3g === w3g)
      {
        f1a.y9t = y9t;
      }
    }
  }
}
class b5n
{

constructor()
{
	this.w3g = '';
}

o0o()
{
	let e9r = new b5n();
	e9r.w3g = this.w3g;
	return e9r;
}

k2v()
{
	return this.w3g.length == 0;
}

t4q()
{
	return this.w3g;
}

}


const y2m =
{
	d1e : 0,
	y1b : 1,
	c7i: 2,
	b5p: 3,
	m6r: 4,
	e3c: 5,
	y9c: 6,
	l7b: 7,
	o8n: 8,
	l7l: 9,
	e6b: 10,
	s0u: 11,
	u2h: 12,
	p3n: 13,
	f9i: 14,
	d4j: 15,
	x7e: 16,
	q5b: 17,
	z4v: 18,
	h5x: 19,
	l5o: 20,
	d9n: 21,
	o3k: 22,
	w3v: 23,
	x8m: 24,
	r4n: 25,
	d8i: 26,
	v7x: 27,
	s9q: 28,
	b6d: 29,
	c9t: 30,
	q1h: 31,
	x2z: 32,
	s8i: 33,
	l7v: 34,
	w3b: 35,
	q4j: 36,
	g2o: 37,
	y7u: 38,
	g6o: 39,
	x5m: 40,
	q2h: 41,
	c7g: 42,
	p4u: 43,
	e6r: 44,
	v3g: 45,
	e6q: 46,
	u0f: 47,
	w0h: 48,
	g5q: 49,
	n7y: 50,
	s4e: 51,
	d7o: 52,
	y0x: 53,
	h8r: 54,
	z7g: 55,
	z5g: 56,
	u5v: 57,
	q0q: 58,
	b2c: 59,
	r1a: 60,
	y2h: 61,
	y1l: 62,
	d5m: 63,
	j5l: 64,
	q6v: 65,
	n5i: 66,
	a4i: 67,
	r8x: 68,
	c4b: 69,
	v9y: 70,
	j3x: 71,
	v4n: 72,
	p3e: 73,
	r4z: 74,
	i8p: 75,
	d1l: 76,
	h5y: 77,
	m7r: 78,
	x1e: 79,
	c6i: 80,
	b7j: 81,
	h6r: 82,
	s0k: 83,
	q7i: 84,
	d1t: 85,
	s6k: 86,
	b3y: 87,
	i2x: 88,
	o4f: 89,
	v8q: 90,
	w2b: 91,
	b0q: 92,
	h1h: 93,
	y5p: 94,
	y6m: 95,
	y3p: 96,
	c9m: 97,
	f1m: 98,
	k1k: 99,
	f8s: 100,
	d1o: 101,
	u0d: 102,
	v4x: 103,
	u0c: 104,
	s1s: 105,
	l9m: 106,
	g0f: 107,
	g5t: 108,
	s4j: 109,
	t9j: 110,
	g5b: 111,
	w9g: 112,
	y4l: 113,
	d6j: 114,
	m1q: 115,
	d9x: 116,
	a3z: 117,
	q4r: 118,
	r8s: 119,
	w2h: 120,
	q7u: 121,
	x0v: 122,
	m4a: 123,
	g6r: 124,
	p0i: 125,
	z8c: 126,
	c9s: 127,
	h7r: 128,
	x1r: 129,
	e6g: 130,
	z3y: 131,
	y8a: 132,
	z7q: 133,
	j8j: 134,
	r3k: 135,
	x6w: 136,
	r1l: 137,
	n1f: 138,
	r9x: 139,
	g7h: 140,
	r9e: 141,
	n6r: 142,
	k2b: 143,
	b7x: 144,
	g2e: 145,
	d8j: 146,
	l7a: 147,
	g8o: 148,
	x3o: 149,
	o5h: 150,
	o2k: 151,
	r9w: 152,
	v0g: 153,
	e2n: 154,
	m9n: 155,
	w3m: 156,
	j7x: 157,
	w2v: 158,
	y1k: 159,
	z0x: 160,
	u9j: 161,
	g3z: 162,
	y2p: 163,
	v8t: 164,
	i4f: 165,
	b9j: 166,
	y8v: 167,
	k1h: 168,
	a3h: 169,
	s2x: 170,
	n0o: 171,
	t9d: 172,
	d0x: 173,
	t6j: 174,
	a9g: 175,
	u9r: 176,
	e2y: 177,
	y1o: 178,
	c8c: 179,
	q4x: 180,
	y3f: 181,
	z1q: 182,
	w3d: 183,
	i7j: 184,
	r9g: 185,
	n2o: 186,
	o0h: 187,
	m7j: 188,
	v4e: 189,
	c5t: 190,
	v1h: 191,
	c7h: 192,
	k0h: 193,
	p8b: 194,
	f6h: 195,
	e8s: 196,
	h0t: 197,
	v7w: 198,
	y6x: 199,
	m5q: 200,
	r7z: 201,
	f2f: 202,
	b2e: 203,
	c3o: 204,
	m0f: 205,
	q6r: 206,
	d1g: 207,
	h9k: 208,
	e0v: 209,
	r0f: 210,
	u6b: 211,
	p2p: 212,
	o4t: 213,
	g5e: 214,
	c0u: 215,
	s3y: 216,
	o3w: 217,
	z4b: 218,
	t3h: 219,
	h1z: 220,
	w1d: 221,
	z0m: 222,
	p0y: 223,
	p7b: 224,
	v2o: 225,
	z5n: 226,
	k6b: 227,
	x9v: 228,
	y6q: 229,
	q8c: 230,
	l0e: 231,
	l3u: 232,
	q8f: 233,
	x5x: 234,
	v4y: 235,
	b0f: 236,
	p8k: 237,
	i1x: 238,
	l6d: 239,
	q6y: 240,
	h3h: 241,
	e0h: 242,
	s8u: 243,
	k2t: 244,
	q1t: 245,
	j9x: 246,
	l3p: 247,
	r1k: 248,
	n4q: 249,
	t3l: 250,
	u5u: 251,
	y8z: 252,
	m5l: 253,
	g7i: 254,
	q4p: 255,
	c8y: 256,
	i6p: 257,
	e1e: 258,
	l7f: 259
};


const e1k = 0;
const q0d = 500;

function c4p(q9l)
{
	if (q9l.length != 3)
	{
		return 0;
	}
	let y7p = q9l[0];
	let b3p = q9l[1];
	let n7t = q9l[2];

	let p5i = 0;
	if (y7p == 'A' || y7p == 'a') p5i = 0;
	else if (y7p == 'B' || y7p == 'b') p5i = 1;
	else if (y7p == 'C' || y7p == 'c') p5i = 2;
	else if (y7p == 'D' || y7p == 'd') p5i = 3;
	else if (y7p == 'E' || y7p == 'e') p5i = 4;
	else return 0;
	if (isNaN(b3p) || isNaN(n7t))
	{
		return 0;
	}
	return p5i * 100 + j3e(q9l.substr(1, 2), 0) + 1;
}

function r6q(q2o)
{
	if (q2o)
	{
		let div = Math.trunc((q2o - 1) / 100);
		let o5c = (q2o - 1) % 100;
		let c8w = 'A';
		if (div == 0) c8w = 'A';
		else if (div == 1) c8w = 'B';
		else if (div == 2) c8w = 'C';
		else if (div == 3) c8w = 'D';
		else if (div == 4) c8w = 'E';
		return c8w + o5c.toString().padStart(2, '0');
	}
	else
	{
		return "";
	}
}
class b2s
{

constructor()
{
	this.u4v = 0;
	this.q1l = 0;
	this.a8g = 0;
}

o0o()
{
	let h5b = new b2s();
	h5b.x4l = this.u4v;
	h5b.l6c = this.q1l;
	h5b.o6x = this.a8g;
	return h5b;
}

k2v()
{
	return this.a8g == 0 && this.q1l == 0 && this.u4v == 0;
}

u9c()
{
	let o6x = this.a8g.toString().padStart(4, '0');
	let l6c = this.q1l.toString().padStart(2, '0');
	let x4l = this.u4v.toString().padStart(2, '0');
	return o6x + l6c + x4l;
}

z5w(j2m, q9l)
{
	let p2r = q9l.length;
	if (!p2r)
	{
		this.a8g = 0;
		this.q1l = 0;
		this.u4v = 0;
	}
	else if (j2m == "\x64\x64\x2d\x6d\x6d\x2d\x79\x79\x79\x79" || j2m == "\x64\x64\x2e\x6d\x6d\x2e\x79\x79\x79\x79")
	{
  	if (p2r == 4)
		{
      this.a8g = j3e(q9l.substr(1, 4), 0);
		}
		else if (p2r == 10)
		{
			this.u4v = j3e(q9l.substr(0, 2), 0);
			this.q1l = j3e(q9l.substr(3, 2), 0);
			this.a8g = j3e(q9l.substr(6, 4), 0);
		}
	}
	else if (j2m == "\x79\x79\x79\x79\x2d\x6d\x6d\x2d\x64\x64" || j2m == "\x79\x79\x79\x79\x2e\x6d\x6d\x2e\x64\x64")
	{
  	if (p2r == 4)
		{
      this.a8g = j3e(q9l.substr(1, 4), 0);
		}
		else if (p2r == 10)
		{
			this.u4v = j3e(q9l.substr(8, 2), 0);
			this.q1l = j3e(q9l.substr(5, 2), 0);
			this.a8g = j3e(q9l.substr(0, 4), 0);
		}
	}
	else if (j2m == "\x64\x64\x2d\x6d\x6d\x2d\x79\x79" || j2m == "\x64\x64\x2e\x6d\x6d\x2e\x79\x79")
	{
		if (p2r == 8)
		{
			this.u4v = j3e(q9l.substr(0, 2), 0);
			this.q1l = j3e(q9l.substr(3, 2), 0);
			this.a8g = j3e(q9l.substr(6, 2), 0) + 2000;
		}
	}
}

toString(j2m)
{
	let q9l = '';
	if (this.k2v())
	{
	}
	else if (j2m == "\x6c\x69\x73\x74")
	{
		let o6x = this.a8g.toString().padStart(4, '0');
		let l6c = this.q1l.toString().padStart(2, '0');
		let x4l = this.u4v.toString().padStart(2, '0');
		if (this.u4v)
		{
			q9l = x4l + "\x2d" + l6c + "\x2d" + o6x;
		}
		else if (this.q1l)
		{
			q9l = l6c + "\x2d" + o6x;
		}
		else if (this.a8g)
		{
			q9l = o6x;
		}
	}
	else if (j2m == "\x64\x64\x2d\x6d\x6d\x2d\x79\x79\x79\x79")
	{
		let o6x = this.a8g.toString().padStart(4, '0');
		let l6c = this.q1l.toString().padStart(2, '0');
		let x4l = this.u4v.toString().padStart(2, '0');
		q9l = x4l + "\x2d" + l6c + "\x2d" + o6x;
	}
	else if (j2m == "\x64\x64\x2e\x6d\x6d\x2e\x79\x79\x79\x79")
	{
		let o6x = this.a8g.toString().padStart(4, '0');
		let l6c = this.q1l.toString().padStart(2, '0');
		let x4l = this.u4v.toString().padStart(2, '0');
		q9l = x4l + "\x2e" + l6c + "\x2e" + o6x;
	}
	else if (j2m == "\x79\x79\x79\x79\x2d\x6d\x6d\x2d\x64\x64")
	{
		let o6x = this.a8g.toString().padStart(4, '0');
		let l6c = this.q1l.toString().padStart(2, '0');
		let x4l = this.u4v.toString().padStart(2, '0');
		q9l = o6x + "\x2d" + l6c + "\x2d" + x4l;
	}
	else if (j2m == "\x79\x79\x79\x79\x2e\x6d\x6d\x2e\x64\x64")
	{
		let o6x = this.a8g.toString().padStart(4, '0');
		let l6c = this.q1l.toString().padStart(2, '0');
		let x4l = this.u4v.toString().padStart(2, '0');
		q9l = o6x + "\x2e" + l6c + "\x2e" + x4l;
	}
	else if (j2m == "\x79\x79\x79\x79\x6d\x6d\x64\x64")
	{
		let o6x = this.a8g.toString().padStart(4, '0');
		let l6c = this.q1l.toString().padStart(2, '0');
		let x4l = this.u4v.toString().padStart(2, '0');
		q9l = o6x + l6c + x4l;
	}
	else if (j2m == "\x79\x79\x79\x79")
	{
		let o6x = this.a8g.toString().padStart(4, '0');
		q9l = o6x;
	}
	return q9l;
}

}

class p6z
{

constructor()
{
	this.n9f = new d0k();
	this.t8b = new l8c();
	this.n8g = 0;
	this.p0p = 0;
	this.g9g = "";
  this.v0e = y2m.d1e;
}

o0o()
{
	let i2z = new p6z();
	i2z.n9f = this.n9f.o0o();
	i2z.t8b = this.t8b.o0o();
	i2z.n8g = this.n8g;
	i2z.p0p = this.p0p;
	i2z.g9g = this.g9g;
  i2z.v0e = this.v0e;
	return i2z;
}

k2v()
{
	return this.n9f.k2v() &&
		this.t8b.k2v() &&
		this.n8g == 0 &&
		this.p0p == 0 &&
		this.g9g == "" &&
 		this.v0e == y2m.d1e;
}

}


class m3k
{

constructor()
{
	this.z0u = new p6z();
	this.u6y = new p6z();
	this.l6i = new v3a();
	this.p0d = new b5n();
	this.i9k = new o7f();
	this.g9g = new o0y();
	this.u9c = new b2s();
	this.n4t = o9d.d1e;
	this.q2o = 0;
	this.a8d = 0;
	this.b6m = 0;
	this.u7h = new s5d();
  this.u2n = new c6g();
}

o0o()
{
	let i0g = new m3k();
	i0g.z0u = this.z0u.o0o();
	i0g.u6y = this.u6y.o0o();
	i0g.l6i = this.l6i.o0o();
	i0g.p0d = this.p0d.o0o();
	i0g.i9k = this.i9k.o0o();
	i0g.g9g = this.g9g.o0o();
	i0g.u9c = this.u9c.o0o();
	i0g.n4t = this.n4t;
	i0g.q2o = this.q2o;
	i0g.a8d = this.a8d;
	i0g.b6m = this.b6m;
	i0g.u7h = this.u7h.o0o();
  i0g.u2n = this.u2n.o0o();
	return i0g;
}

k2v()
{
	return this.z0u.k2v() &&
		this.u6y.k2v() &&
		this.l6i.k2v() &&
		this.p0d.k2v() &&
		this.i9k.k2v() &&
		this.g9g.k2v() &&
		this.u9c.k2v() &&
		this.n4t == o9d.d1e &&
		this.q2o == 0 &&
		this.a8d == 0 &&
		this.b6m == 0 &&
		this.u7h.k2v();
}

c1b()
{
	let q9l = '';
	if (this.b6m)
	{
		q9l = this.a8d.toString() + "\x2e" + this.b6m.toString();
	}
	else if (this.a8d)
	{
		q9l = this.a8d.toString();
	}
	return q9l;
}

}


class c6g
{

constructor()
{
	this.d5c = '';
}

o0o()
{
	let o2c = new c6g();
	o2c.d5c = this.d5c;
	return o2c;
}

toString()
{
  return this.d5c;
}

}


class o0y
{

constructor()
{
	this.g9g = '';
}

o0o()
{
	let j0m = new o0y();
	j0m.g9g = this.g9g;
	return j0m;
}

k2v()
{
	return this.g9g.length == 0;
}

t4q()
{
	return this.g9g;
}

}


class d0k
{

constructor()
{
	this.v2d = '';
	this.a6d = '';
}

o0o()
{
	let e5f = new d0k();
	e5f.v2d = this.v2d;
	e5f.a6d = this.a6d;
	return e5f;
}

k2v()
{
	return this.a6d.length == 0 &&
		this.v2d.length == 0;
}

w3g()
{
	if (!this.a6d.length == 0 && !this.v2d.length == 0)
	{
		return this.a6d + "\x2c" + this.v2d;
	}
	else if (this.a6d.length == 0 && this.v2d.length == 0)
	{
		return "";
	}
	else if (this.v2d.length == 0)
	{
		return this.a6d;
	}
	else
	{
		return this.v2d;
	}
}

k7f()
{
	return this.w3g().replace(/,/g, "\x20");
}

c9p()
{
	return this.k9g(1).replace(/,/g, "\x20");
}

k9g(z9k)
{
	if (this.a6d.length == 0)
	{
		if (this.v2d.length == 0 || z9k < 1)
		{
			return "";
		}
		else
		{
			return this.v2d.substring(0, z9k);
		}
	}
	else
	{
		if (this.v2d.length == 0 || z9k < 1)
		{
			return this.a6d;
		}
		else
		{
			return this.a6d + "\x2c" + this.v2d.substring(0, z9k);
		}
	}
}

k2y(c5f)
{
	let q9l = c5f.trim();
	let p2d = q9l.lastIndexOf("\x2c");
	if (p2d != -1)
	{
		this.a6d = q9l.substr(0, p2d).trim();
		this.v2d = q9l.substr(p2d+1, q9l.length).trim();
		if (this.v2d.length != 0)
		{
			if (this.v2d.charAt(0).toLowerCase() == this.v2d.charAt(0))
			{
				this.a6d += "\x2c";
				this.a6d += this.v2d;
				this.v2d = "";
			}
		}
	}
	else
	{
		this.a6d = q9l;
		this.v2d = "";
	}
}

t4q()
{
	return this.w3g();
}

}

const o9d =
{
	d1e : 0,
	q8u : 1,
	k6l : 2,
	y8o : 3,
	i3f : 4,
	u6l : 5,
	l6h : 6,
	o9f : 7,
	h5s : 8,
	e7o : 9,
	o0g : 10,
	i8a : 11,
	k5j : 12,
	x5f : 13,
	y6r : 14,
	x7q : 15
};


function i8u(n4t)
{
	switch (n4t)
	{
		case o9d.q8u:
			return "\x32\x2d\x30";
		case o9d.y8o:
			return "\x31\x2d\x31";
		case o9d.k6l:
			return "\x30\x2d\x32";
		default:
			return "";
	}
}
const k2e =
{
	e8e : 0,
	g3i : 1,
	t3g : 2
};

const e9p =
[
	[ k2e.e8e,   "\x48\x69\x67\x68" ],
	[ k2e.g3i, "\x4d\x69\x64\x64\x6c\x65" ],
	[ k2e.t3g,    "\x4c\x6f\x77" ]
];

class o7f
{

constructor()
{
	this.g9g = '';
	this.z3f = '';
	this.k6w = new b2s();
	this.c1s = new b2s();
	this.x5s = 0;
	this.j8l = k2e.e8e;
}

o0o()
{
	let q8a = new o7f();
	q8a.g9g = this.g9g;
	q8a.z3f = this.z3f;
	q8a.k6w = this.k6w.o0o();
	q8a.c1s = this.c1s.o0o();
	q8a.x5s = this.x5s;
	q8a.j8l = this.j8l;
	return q8a;
}

k2v()
{
	return this.g9g.length == 0 &&
		this.z3f.length == 0 &&
		this.k6w.k2v() &&
		this.c1s.k2v() &&
		this.x5s == 0 &&
		this.j8l == k2e.e8e;
}

t4q()
{
	let q9l = this.g9g;
	if (this.z3f.length)
	{
		if (q9l.length)
		{
			q9l += "\x20";
		}
		q9l += this.z3f;
	}
	return q9l;
}

}


const d1q =
{
	b9q : 0,
	c7c : 1,
	x8l : 2,
	n3y : 3,
	k7p : 4,
	j4c : 5,
	r0s : 6,
	v0a : 7,
	u2w : 8,
	d6e : 9,
	c4v : 10,
	d5o : 11,
	b9d : 12,
	j3i : 13,
	k5h : 14,
	k8u : 15
};

class s5d
{

constructor()
{
	this.y9t = 0;
}

d7c(y9t)
{
	this.y9t = y9t;
}

o0o()
{
	let f7j = new s5d();
	f7j.y9t = this.y9t;
	return f7j;
}

k2v()
{
	return this.y9t == 0;
}

g6i()
{
	return this.y9t != 0;
}

d1e()
{
	return this.y9t == 0;
}

g3o()
{
	let p0n = 0;
	for (let i = 0; i < 16; i++)
	{
		if (this.p4p(i))
		{
			p0n++;
		}
	}
	return p0n;
}

i4c()
{
	this.y9t = 0;
}

set(n9a, z3x)
{
	if (z3x)
	{
		this.y9t |= (1 << n9a);
	}
	else
	{
		this.y9t &= ~(1 << n9a);
	}
}

p4p(n9a)
{
	return (this.y9t & (1 << n9a)) != 0;
}

g6m()
{
	return this.y9t;
}

}

function l1n(o6x)
{
	return o6x.toString().padStart(4, '0');
}

class l8c
{

constructor()
{
	this.w3g = '';
	this.p4e = 0;
	this.o6x = 0;
	this.r3t = false;
	this.v0e = y2m.d1e;
}

o0o()
{
	let t8l = new l8c();
	t8l.w3g = this.w3g;
	t8l.p4e = this.p4e;
	t8l.o6x = this.o6x;
	t8l.r3t = this.r3t;
	t8l.v0e = this.v0e;
	return t8l;
}

k2v()
{
	return this.w3g.length == 0 &&
		this.p4e == 0 &&
		this.o6x == 0 &&
		this.r3t == false &&
		this.v0e == y2m.d1e;
}

v2k()
{
	let q9l = this.w3g;
	if (this.p4e)
	{
		if (q9l.length)
		{
			q9l += "\x20";
		}
		q9l += this.p4e;
	}
	return q9l;
}

t4q()
{
	let q9l = this.w3g;
	if (this.p4e)
	{
		if (q9l.length)
		{
			q9l += "\x20";
		}
		q9l += this.p4e;
	}
	if (q9l.length)
	{
		q9l += "\x20";
	}
	q9l += this.s4y();
	return q9l;
}


s5z()
{
	let q9l = this.w3g;
	if (this.p4e > 1)
	{
		q9l += "\x20";
		q9l += this.p4e;
	}
	return q9l;
}

s4y()
{
	let q9l = '';
	if (this.r3t)
	{
		let j6a = l1n(this.o6x);
		let a1z = l1n(this.o6x + 1);
		let k7i = j6a + "\x2f" + a1z.substr(2, 2);
		q9l = k7i;
	}
	else
	{
		q9l = l1n(this.o6x);
	}
	return q9l;
}

}

class y5u
{

constructor()
{
	this.f7g = 0;
	this.r7y = 0;
	this.e4p = 0;

}

}

function y8e(q9l, f6y, p0p)
{
	p0p.f7g = 0;
	p0p.r7y = 0;
	p0p.e4p = 0;

	let p2r = q9l.length;
	if (!p2r || q9l == "\x3f")
	{
		return;
	}
	let i = 0;
	for (; i < p2r; i++)
	{
		if (!isNaN(q9l[i]))
		{
			break;
		}
	}
	let i0y = '';
	for (; i < p2r; i++)
	{
		if (isNaN(q9l[i]))
		{
			break;
		}
		i0y += q9l[i].toString();
	}
	for (; i < p2r; i++)
	{
		if (!isNaN(q9l[i]))
		{
			break;
		}
	}
	let d6z = '';
	for (; i < p2r; i++)
	{
		if (isNaN(q9l[i]))
		{
			break;
		}
		d6z += q9l[i].toString();
	}
	for (; i < p2r; i++)
	{
		if (!isNaN(q9l[i]))
		{
			break;
		}
	}
	let i9e = '';
	for (; i < p2r; i++)
	{
		if (isNaN(q9l[i]))
		{
			break;
		}
		i9e += q9l[i].toString();
	}
	let x9l = j3e(i0y, 0);
	let c2m = j3e(d6z, 0);
	let s4k = j3e(i9e, 0);
	if (
		x9l < 0 || x9l > f6y ||
		c2m < 0 || c2m > 59 ||
		s4k < 0 || s4k > 59)
	{
		x9l = 0;
		c2m = 0;
		s4k = 0;
	}
	p0p.f7g = x9l;
	p0p.r7y = c2m;
	p0p.e4p = s4k;
}

function l6w(q9l)
{
	if (q9l.length == 0)
	{
		return 0;
	}
	else
	{
		let p0p = new y5u();
		y8e(q9l, 9, p0p);
		return p0p.f7g * 60 + p0p.r7y;
	}
}


const f4v =
{
	d1e : 0,
	x1i : 1,
	z2e : 2,
	l6i : 3,
	e6u : 4,
	g9c : 5,
	q8e : 6,
	c9x : 7
};

const a6c =
[
	[ f4v.d1e, 			 	""                   ],
	[ f4v.x1i,  		 	"\x53\x69\x6e\x67\x6c\x65\x47\x61\x6d\x65"         ],
	[ f4v.z2e,  		 	"\x4d\x61\x74\x63\x68"              ],
	[ f4v.l6i,  "\x52\x6f\x75\x6e\x64\x52\x6f\x62\x69\x6e"         ],
	[ f4v.e6u,   		"\x53\x77\x69\x73\x73\x53\x79\x73\x74\x65\x6d"        ],
	[ f4v.g9c,    "\x4b\x6e\x6f\x63\x6b\x6f\x75\x74"           ],
	[ f4v.q8e,"\x53\x69\x6d\x75\x6c"              ],
	[ f4v.c9x,"\x53\x63\x68\x65\x76\x65\x6e\x69\x6e\x67\x65\x6e\x53\x79\x73\x74\x65\x6d" ]
];

class v3a
{

constructor()
{
	this.g9g = '';
	this.a9d = '';
	this.g5c = new b2s();
	this.h9j = new b2s();
	this.o8m = f0j.q9c;
	this.z5s = 0;
	this.v0e = y2m.d1e;
	this.type = f4v.d1e;
	this.k7a = 0;
	this.d2s = false;
	this.e5e = false;
	this.r0m = false;
	this.f0k = false;
}

o0o()
{
	let j0p = new v3a();
	j0p.g9g = this.g9g;
	j0p.a9d = this.a9d;
	j0p.g5c = this.g5c.o0o();
	j0p.h9j = this.h9j.o0o();
	j0p.o8m = this.o8m;
	j0p.z5s = this.z5s;
	j0p.v0e = this.v0e;
	j0p.type = this.type;
	j0p.k7a = this.k7a;
	j0p.d2s = this.d2s;
	j0p.e5e = this.e5e;
	j0p.r0m = this.r0m;
	j0p.f0k = this.f0k;
	return j0p;
}

k2v()
{
	return this.g9g.length == 0 &&
		this.a9d.length == 0 &&
		this.g5c.k2v() &&
		this.h9j.k2v() &&
		this.o8m == f0j.q9c &&
		this.z5s == 0 &&
		this.v0e == y2m.d1e &&
		this.type == f4v.d1e &&
		!this.k7a &&
		!this.d2s &&
		!this.e5e &&
		!this.r0m &&
		!this.f0k;
}

t4q()
{
	let q9l = this.g9g;
	if (this.a9d.length)
	{
		if (q9l.length)
		{
			q9l += "\x20";
		}
		q9l += this.a9d;
	}
	if (q9l.length)
	{
		q9l += "\x20";
	}
	let o6x = this.g5c.o6x.toString().padStart(4, '0');
	q9l += o6x;
	return q9l;
}

}



const f0j =
{
	q9c : 0,
	q8l : 1,
	w3w : 2,
	h0o : 3
};

const l3r =
[
	[ f0j.q9c, "\x4e\x6f\x72\x6d\x61\x6c" ],
	[ f0j.q8l,  "\x52\x61\x70\x69\x64"  ],
	[ f0j.w3w,  "\x42\x6c\x69\x74\x7a"  ],
	[ f0j.h0o,   "\x43\x6f\x72\x72"   ]
];

function s3u(o8m)
{
	return l3r[o8m][1];
}

function j3r()
{
	let t7l = [];
	for (const o8m of l3r)
	{
		t7l.push(o8m[1]);
	}
	return t7l;
}

class v0r
{

constructor()
{
	this.z8s = '';
	this.q9g = '';
	this.p3p = n8u.d1e;
	this.style = c8l.d1e;
	this.y9t = b4c.d1e;
	this.b0e = new p6t();
	this.e6v = new s7c();
	this.i3x = new x6l();
	this.z4d = o9q.d1e;
	this.k6k = false;
	this.k0v = false;
  this.h7b = false;
}

o0o()
{
	let q0n = new v0r();
	q0n.z8s = this.z8s;
	q0n.q9g = this.q9g;
	q0n.p3p = this.p3p;
	q0n.style = this.style;
	q0n.y9t = this.y9t;
	q0n.b0e = this.b0e.o0o();
	q0n.e6v = this.e6v.o0o();
	q0n.i3x = this.i3x.o0o();
	q0n.z4d = this.z4d;
	q0n.k6k = this.k6k;
	q0n.k0v = this.k0v;
 	q0n.h7b = this.h7b;
	return q0n;
}

k2v()
{
	return this.z8s.length == 0 &&
		this.q9g.length == 0 &&
		this.p3p == n8u.d1e &&
		this.style == c8l.d1e &&
		this.y9t == b4c.d1e &&
		this.b0e.k2v() &&
		this.e6v.k2v() &&
		this.i3x.k2v() &&
		this.z4d == o9q.d1e &&
		this.k6k == false &&
		this.k0v == false &&
 		this.h7b == false;
}

}

const o9q =
{
	d1e : 0,
	t0j : 1,
	g3i : 2,
	r6z : 3
};

const f1z =
{
	n4l : 0,
	t6e : 1,
	v1d : 2,
	x6r : 3,
	r6w : 4,
	j0v : 5,
	z0r : 6,
	x7q : 7,
	c3f : 8,
	u1e : 9,
	o1c : 10,
	w8t : 11,
	p3c : 12,
	q2j : 13,
	j8u : 14,
	l4i : 15
};

class p6t
{

constructor()
{
	this.y9t = 0;
}

d7c(y9t)
{
	this.y9t = y9t;
}

o0o()
{
	let y0q = new p6t();
	y0q.y9t = this.y9t;
	return y0q;
}

k2v()
{
	return this.y9t == 0;
}

g6i()
{
	return this.y9t != 0;
}

d1e()
{
	return this.y9t == 0;
}

g3o()
{
	let p0n = 0;
	for (let i = 0; i < 16; i++)
	{
		if (this.p4p(i))
		{
			p0n++;
		}
	}
	return p0n;
}

i4c()
{
	this.y9t = 0;
}

set(n9a, z3x)
{
	if (z3x)
	{
		this.y9t |= (1 << n9a);
	}
	else
	{
		this.y9t &= ~(1 << n9a);
	}
}

p4p(n9a)
{
	return (this.y9t & (1 << n9a)) != 0;
}

g6m()
{
	return this.y9t;
}

}

const n8u =
{
	d1e : 0,
	d7w : 1,
	s4n : 2,
	o5v : 3,
	c6m : 4,
	e4m : 5,
	s9h : 6
};

const v3w =
[
	[ n8u.d1e,     		  ""   ],
	[ n8u.d7w,       		  "\x52\x52" ],
	[ n8u.s4n, 		  "\x26\x23\x38\x39\x37\x39\x3b"  ],
	[ n8u.o5v, 		  "\x26\x23\x38\x38\x30\x34\x3b"  ],
	[ n8u.c6m,  "\x3d"  ],
	[ n8u.e4m,   "\x26\x23\x39\x36\x35\x31\x3b"  ],
	[ n8u.s9h,  "\x26\x23\x39\x36\x36\x31\x3b"  ]
];

function u1r(p3p)
{
	return v3w[p3p][1];
}


const c8l =
{
	d1e : 0,
	p5g : 1,
	y7x : 2,
	g2p : 3,
	g7c : 4,
	r9v : 5,
	u3z : 6,
	s8n : 7,
	g5y : 8
};

const b4h =
[
	[ c8l.d1e,     		"" 	 ],
	[ c8l.p5g,       	"\x21"  ],
	[ c8l.y7x, 					"\x3f"  ],
	[ c8l.g2p,	"\x21\x3f" ],
	[ c8l.g7c,	 		"\x3f\x21" ],
	[ c8l.r9v,  	"\x21\x21" ],
	[ c8l.u3z, 			"\x3f\x3f" ],
	[ c8l.s8n, 		"\x26\x23\x38\x38\x35\x37\x3b"  ],
	[ c8l.g5y, 		"\x26\x23\x39\x37\x32\x33\x3b"  ]
];

function j0t(style)
{
	return b4h[style][1];
}


class q3c
{

constructor()
{
	this.i4x = new g8w();
	this.j4i = null;
	this.f6n = null;
	this.i7y = null;
	this.l5e = null;
  this.p4e = 0; 
}

q0e(i4x)
{
	this.i4x = i4x.o0o();
}

s0o(j3g, p1d, t4s, r4g)
{
	this.i4x.s0o(j3g, p1d, t4s, r4g);
}

}

class w6u
{

constructor()
{
	this.f7i = null;
	this.i4x = null;
}

l1y(q0s)
{
	return this.f7i == q0s.f7i;
}

w6d(q0s)
{
	return !this.l1y(q0s);
}

o0o()
{
	let u8v = new w6u();
  u8v.f7i = this.f7i;
  u8v.i4x = this.i4x;
	return u8v;
}

}


class e5q
{

constructor()
{
	this.v6m = new z4m();
 	this.y1n = null;
	this.q9x = 1;
	this.v6m.i6z();
  this.m1r = new v0r();
}

o0s(q0s)
{
	this.c1i(q0s.v6m, q0s.q9x);
	this.m1r = q0s.m1r.o0o();
	this.y1n = this.b6q(q0s.y1n);
}

o0o()
{
	let w5n = new e5q();
	w5n.o0s(this);
	return w5n;
}

c1i(x1z, o7x)
{
	this.v6m = x1z.o0o();
	this.q9x = o7x;
	this.m1r = new v0r();
	this.y1n = null;
}

o7x()
{
	return this.q9x;
}

x1z()
{
	return this.v6m.o0o();
}


q7d()
{
	let p2d = this.y5m();
	this.v6b(p2d);
	return p2d;
}


s2i()
{
	let v6b = this.q7d();
	return this.j3g(v6b);
}


k5r(p2d)
{
  let f3u = this.r5k(p2d) + 1;
	if (f3u)
	{
		return this.q9x +
			Math.floor((f3u - 1 + this.v6m.p0w()) / 2);
	}
	else
	{
		return this.q9x;
	}
}

r5k(p2d)
{
	let f3u = 0;
	if (!p2d.f7i)
	{
		return 0;
	}
	let p7w = p2d.f7i;
	while (1)
	{
		f3u++;
		if (!p7w.f6n)
		{
			let o5o = p7w;
			while (o5o.i7y)
			{
				o5o = o5o.i7y;
			}
			if (!o5o.f6n)
			{
				break;
			}
		}
		if (p7w.f6n)
		{
			p7w = p7w.f6n;
		}
		else
		{
			let o5o = p7w;
			while (o5o.i7y)
			{
				o5o = o5o.i7y;
			}
			p7w = o5o.f6n;
		}
	}
	return f3u;
}


n9r()
{
	let h2n = 0;
	let h4t = this.y1n;
	while (h4t)
	{
		h2n++;
		h4t = h4t.j4i;
	}
	return h2n;
}

e7m()
{
	return this.y1n != null;
}

u0g(p2d)
{
	return p2d.l1y(this.y5m());
}

m9k(p2d)
{
	if (p2d.f7i)
	{
		return p2d.f7i.j4i == null;
	}
	else if (this.y1n)
	{
		return false;
	}
	else
	{
		return true;
	}
}

y9l(p2d)
{
	if (!this.u0g(p2d))
	{
		if (p2d.f7i.f6n)
		{
			p2d.f7i = p2d.f7i.f6n;
			p2d.i4x = p2d.f7i.i4x;
		}
		else
		{
			let p7w = p2d.f7i;
			while (p7w.i7y)
			{
				p7w = p7w.i7y;
			}
			p7w = p7w.f6n;
			p2d.f7i = p7w;
      if (p2d.f7i)
      {
  			p2d.i4x = p2d.f7i.i4x;
      }
      else
      {
        p2d.i4x = null;
      }
		}
	}
}

r9f(p2d)
{
	if (!this.m9k(p2d))
	{
		p2d.f7i = this.u4i(p2d);
		p2d.i4x = p2d.f7i.i4x;
	}
}

z0a(p2d, f0f)
{
	let f7z = this.h8y(p2d);
	if (f0f < 0 || f0f >= f7z)
	{
		return;
	}
	let o5o = this.u4i(p2d);
	let i = 0;
	while (i != f0f)
	{
		i++;
		o5o = o5o.l5e;
	}
	p2d.f7i = o5o;
	p2d.i4x = p2d.f7i.i4x;
}

d4k(p2d)
{
	if (!p2d.f7i)
	{
		return this.q9x;
	}
	let f3u = this.r5k(p2d);
	if (f3u)
	{
		return this.q9x +
      Math.floor((f3u - 1 + this.v6m.p0w()) / 2);
	}
	else
	{
		return this.q9x;
	}
}

y5m()
{
	let p2d = new w6u();
	p2d.f7i = null;
	p2d.i4x = null;
	return p2d;
}

v6b(p2d)
{
	if (!this.m9k(p2d))
	{
		let p7w = this.u4i(p2d);
		while (true)
		{
			if (!p7w.j4i)
			{
				break;
			}
			p7w = p7w.j4i;
		}
		p2d.f7i = p7w;
		p2d.i4x = p2d.f7i.i4x;
	}
}

v5g(d0w)
{
	let p2d = this.y5m();
	if (d0w > 0)
	{
    this.d0w = 0;
		this.z1m(p2d, d0w);
		return p2d;
	}
	else
	{
		return p2d;
	}
}

z1m(p2d, d0w)
{
	while (true)
	{
		if (this.m9k(p2d))
		{
			return false;
		}
		let f7z = this.h8y(p2d);
		if (f7z > 1)
		{
			let l2x = p2d.o0o();
			for (let i = 1; i < f7z; i++)
			{
				this.z0a(p2d, i);
				this.d0w++;
				if (this.d0w == d0w)
				{
					return true;
				}
				if (this.z1m(p2d, d0w))
				{
					return true;
				}
        p2d.f7i = l2x.f7i;
        p2d.i4x = l2x.i4x;
			}
		}
		this.r9f(p2d);
		this.d0w++;
		if (this.d0w == d0w)
		{
			return true;
		}
	}
}

a9r(p2d)
{
	if (!p2d.f7i)
	{
		return 0;
	}
	else
	{
		return p2d.f7i.p4e;
	}
}

j0e(p2d)
{
	let l3y = [];
 	if (!p2d.f7i)
  {
		return l3y;
	}
	let p7w = p2d.f7i;
	while (1)
	{
		l3y.push(p7w);
		if (!p7w.f6n)
		{
			let o5o = p7w;
			while (o5o.i7y)
			{
				o5o = o5o.i7y;
			}
			if (!o5o.f6n)
			{
				break;
			}
		}
		if (p7w.f6n)
		{
			p7w = p7w.f6n;
		}
		else
		{
			let o5o = p7w;
			while (o5o.i7y)
			{
				o5o = o5o.i7y;
			}
			p7w = o5o.f6n;
		}
	}
	return l3y.reverse();
}

b6n(p2d)
{
	let l3y = this.j0e(p2d);
	let f7z = this.h8y(p2d);
	if (f7z == 0)
	{
		return l3y;
	}
	let j9d = this.f2x(p2d, 0);
	while (j9d)
	{
		l3y.push(j9d);
		j9d = j9d.j4i;
	}
	return l3y;
}

h8y(p2d)
{
	let j9d = this.u4i(p2d);
	if (!j9d)
	{
		return 0;
	}
	let f7z = 1;
	while (j9d.l5e)
	{
		f7z++;
		j9d = j9d.l5e;
	}
	return f7z;
}

u2j(p2d, v8b)
{
	if (this.u0g(p2d))
	{
		this.y1n = v8b;
		p2d.f7i = v8b;
		p2d.i4x = p2d.f7i.i4x;
	}
	else
	{
		p2d.f7i.j4i = v8b;
		v8b.f6n = p2d.f7i;
		p2d.f7i = v8b;
		p2d.i4x = p2d.f7i.i4x;
	}
}

b7y(p2d, v8b)
{
	let o5o = this.u4i(p2d);
	while (o5o.l5e)
	{
		o5o = o5o.l5e;
	}
	o5o.l5e = v8b;
	v8b.i7y = o5o;

	p2d.f7i = v8b;
	p2d.i4x = p2d.f7i.i4x;
}

v9t(p2d, i4x)
{
	let v8b = new q3c();
 	v8b.q0e(i4x);
	if (this.m9k(p2d))
	{
		this.u2j(p2d, v8b);
	}
	else
	{
		this.b7y(p2d, v8b);
	}
}


t3s(p2d, l3y)
{
	for (const i4x of l3y)
	{
		this.v9t(p2d, i4x);
	}
}


o6h(p2d)
{
	let o5o = this.f2x(p2d, 1);
	if (!o5o)
	{
		return false;
	}
	while (o5o)
	{
		let h4t = o5o.j4i;
		while (h4t)
		{
			if (h4t.l5e)
			{
				return false;
			}
			h4t = h4t.j4i;
		}
		o5o = o5o.l5e;
	}
	return true;
}

h0b()
{
	let h4t = this.y1n;
	while (h4t)
	{
		if (h4t.l5e)
		{
			return true;
		}
		h4t = h4t.j4i;
	}
	return false;
}

i1g()
{
	if (!this.m1r.k2v())
	{
		return true;
	}
	if (this.h0b())
	{
		return true;
	}
	let h4t = this.y1n;
	while (h4t)
	{
		if (h4t.i4x.i1g())
		{
			return true;
		}
		h4t = h4t.j4i;
	}
	return false;
}

u4i(p2d)
{
	if (p2d.f7i)
	{
		return p2d.f7i.j4i;
	}
	return this.y1n;
}

f2x(p2d, f0f)
{
	let i = 0;
	let o5o = this.u4i(p2d);
	while (o5o && i != f0f)
	{
		o5o = o5o.l5e;
		i++;
	}
	return o5o;
}

b6q(o5o)
{
	let f7n = o5o;
	let g2k = null;
	let v8b = null;
	let e9k = null;
	while (f7n)
	{
		v8b = new q3c();
		v8b.q0e(f7n.i4x);
		if (g2k)
		{
			g2k.j4i = v8b;
			v8b.f6n = g2k;
		}
		else
		{
			e9k = v8b;
		}
		g2k = v8b;
		if (f7n.l5e && !f7n.i7y)
		{
			let o5x = f7n.l5e;
			let h7a = g2k;
			while (o5x)
			{
				let l8b = this.b6q(o5x);
				h7a.l5e = l8b;
				l8b.i7y = h7a;
				h7a = l8b;
				o5x = o5x.l5e;
			}
		}
		f7n = f7n.j4i;
	}
	return e9k;
}

m9w()
{
	return this.m1r;
}

u4x()
{
	return this.m1r.z8s;
}

a1f(z6n)
{
	this.m1r.z8s = z6n;
}

v0j()
{
	return !this.m1r.e6v.k2v();
}

m7d(e6v)
{
	this.m1r.e6v = e6v.o0o();
}

t9y()
{
	return this.m1r.e6v;
}

o7o()
{
	return !this.m1r.i3x.k2v();
}

l7d(i3x)
{
	this.m1r.i3x = i3x.o0o();
}

n4b()
{
	return this.m1r.i3x;
}

j5x()
{
	return !this.m1r.b0e.k2v();
}

c8d(b0e)
{
	this.m1r.b0e = b0e.o0o();
}

d6x()
{
	return this.m1r.b0e;
}

r2t(d0w)
{
  if (d0w == 0)
  {
    return true;
  }
	let h4t = this.y1n;
	while (h4t)
	{
    if (h4t.p4e == d0w)
    {
      return true;
    }
		h4t = h4t.j4i;
	}
	return false;
}

i3m()
{
	let p2d = this.y5m();
	this.d0w = 0;
	this.k0b(p2d);
}

k0b(p2d)
{
	while (true)
	{
		if (this.m9k(p2d))
		{
			return;
		}
		let f7z = this.h8y(p2d);
		if (f7z > 1)
		{
			let l2x = p2d.o0o();
			for (let i = 1; i < f7z; i++)
			{
				this.z0a(p2d, i);
				this.d0w++;
        p2d.f7i.p4e = this.d0w;
				this.k0b(p2d);
        p2d.f7i = l2x.f7i;
        p2d.i4x = l2x.i4x;
			}
		}
		this.r9f(p2d);
  	this.d0w++;
    p2d.f7i.p4e = this.d0w;
	}
}

j3g(p2d)
{
	let j3g = this.v6m.o0o();
	if (!p2d.f7i)
	{
		return j3g;
	}
	let l3y = this.l3c(p2d);
  for (const i4x of l3y)
	{
		j3g.r9f(i4x.z2g());
	}
	return j3g;
}

l3c(p2d)
{
	let l3y = [];
 	if (!p2d.f7i)
  {
		return l3y;
	}
	let p7w = p2d.f7i;
	while (1)
	{
		l3y.push(p7w.i4x);
		if (!p7w.f6n)
		{
			let o5o = p7w;
			while (o5o.i7y)
			{
				o5o = o5o.i7y;
			}
			if (!o5o.f6n)
			{
				break;
			}
		}
		if (p7w.f6n)
		{
			p7w = p7w.f6n;
		}
		else
		{
			let o5o = p7w;
			while (o5o.i7y)
			{
				o5o = o5o.i7y;
			}
			p7w = o5o.f6n;
		}
	}
	return l3y.reverse();
}


w0v()
{
	this.m1r = new v0r();
	this.y1n = null; 
  
}


h1j()
{
	let l3y = [];
	let h4t = this.y1n;
	while (h4t)
	{
		l3y.push(h4t.i4x);
		h4t = h4t.j4i;
	}
	return l3y;
}


}

const b4c =
{
	d1e : 0,
	i3f : 1,
	u6l : 2,
	l6h : 3,
	o9f : 4,
	h5s : 5,
	e7o : 6,
	o0g : 7,
	i8a : 8,
	k5j : 9,
	x5f : 10,
	y6r : 11,
	x7q : 12,
	x1h : 13,
	c7a : 14,
	x6r : 15
};

const s5c =
[
	[ b4c.d1e,     						  ""    ],
	[ b4c.i3f,        "\x2b\x26\x23\x38\x32\x31\x31\x3b" ],
	[ b4c.u6l, 						"\x26\x23\x31\x37\x37\x3b" ],
	[ b4c.l6h,		"\x26\x23\x31\x30\x38\x36\x36\x3b"  ],
	[ b4c.o9f, 							"\x3d"   ],
	[ b4c.h5s,  							"\x26\x23\x38\x37\x33\x34\x3b" ],
	[ b4c.e7o,  	"\x26\x23\x31\x30\x38\x36\x35\x3b"],
	[ b4c.o0g, 						"\x26\x23\x38\x37\x32\x33\x3b" ],
	[ b4c.i8a, 				"\x26\x23\x38\x32\x31\x31\x3b\x2b"],
	[ b4c.k5j,						"\x26\x23\x38\x37\x37\x33\x3b" ],
	[ b4c.x5f, 						"\x26\x23\x38\x36\x34\x36\x3b" ],
	[ b4c.y6r,  						"\x26\x23\x38\x35\x39\x33\x3b" ],
	[ b4c.x7q, 								"\x26\x23\x38\x35\x39\x34\x3b" ],
	[ b4c.x1h, 					"\x26\x23\x38\x38\x35\x33\x3b" ],
	[ b4c.c7a,		"\x26\x23\x31\x30\x32\x32\x37\x3b"],
	[ b4c.x6r, 								"\x4e"   ]
];

function h2v(y9t)
{
	return s5c[y9t][1];
}


const b4f =
{
	x2d : 0,
	x2e : 1,
	m2w : 2
};

const u9g =
{
	d1e : 0,
	n7v : 1,
	m5p : 2,
	z5p : 3,
	f1i : 4,
	p3p : 5,
	q9g : 6,
	z8s : 7,
	o4h : 8,
	b0e : 9,
	k6k : 10,
	k0v : 11
};

/*
TO DO
- Aanpassen voor tekst after van c2d daar kan dia inzitten (zie c++)
- Vette tekst en niet vette n7v testen bij wel/niet MultiPV
*/
class c9o
{

constructor()
{
	this.x9e = new z1b();
  this.i3h = true;
  this.f8o = false;
  this.r5n = true;
  this.s1m = true;
  this.b2b = b4f.x2d;
  this.p2m = false;
  this.l4r = true;
 	this.j4b = true;
 	this.c9q = -1;
  this.w7l = false;
  this.l2s = false;
	this.k8r = false;
	this.d4a = true;
  this.m6n = false;
  this.x8h = false;
  this.n1m = 0;
	this.g9u = true;
  this.b6o = null;
 	this.k7h = u9g.d1e;
}

q4u(l3y)
{
	this.b6o = l3y;
 	let y5m = this.b6o.y5m();
	let x1z = this.b6o.x1z();
	this.k7h = u9g.d1e;
	this.d4a = true;
	this.l2s = false;
	this.k8r = false;
	this.w7l = false;
	this.m6n = this.b6o.i1g();
	this.g9u = true;
	this.n1m = 0;

	if (this.p2m)
	{
		this.w5c(u9g.m5p);
		this.e5j();
	}
	else
	{
    
    if (this.b2b == b4f.x2e ||
      (this.b2b == b4f.m2w && !x1z.c1n()))
    {
      if (this.s1m)
      {
        this.u2k(y5m, x1z, n1m);
        this.d4a = true;
      }
    }

    this.w5c((this.m6n && !this.h7b) ? u9g.n7v : u9g.m5p);
    this.z5b(this.m6n);
    this.v9t(y5m, "");
    this.e1w(y5m, this.b6o.m9w().z8s);

    if (this.b6o.e7m())
    {
      this.f4c();
    }
   	this.w5c(u9g.d1e);
   	this.u6t();
  }
}

e5j()
{
	let p2d = this.b6o.y5m();
	let h8y = this.b6o.h8y(p2d);
	for (let i = 0; i < h8y; i++)
	{
    this.x9e.c3l('<div class="variation-row">');
		p2d = this.b6o.y5m();
  	let j3g = this.b6o.x1z();
	  let d4k = this.b6o.o7x();
		this.b6o.z0a(p2d, i);
		this.d4a = true;
		let j7z = true;
		let i4x = p2d.i4x;
		let q9g = i4x.q9g();
		if (q9g.length)
		{
			this.o5m(p2d, q9g);
		}
		this.w5c(u9g.m5p);
		do
		{
			if (j7z)
			{
				p2d.i4x.k6f();
			}
			this.a2e(p2d, j3g, d4k);
			if (j7z)
			{
				p2d.i4x.e5y(q9g);
				j7z = false;
			}
			if (this.b6o.m9k(p2d))
			{
				break;
			}
			j3g.r9f(p2d.i4x);
			if (j3g.e9d())
			{
				d4k++;
			}
			this.b6o.r9f(p2d);
		} while (true);
    this.x9e.c3l('<div');
	}
}

f4c()
{
  let q9s = 0;
 	let p2d = this.b6o.y5m();
	let j3g = this.b6o.x1z();
  let d4k = this.b6o.o7x();

	let b3m = 100000;
	if (this.c9q == 0)
	{
		return;
	}
	if (this.c9q != -1)
	{
		b3m = this.c9q;
	}
	let e8v = d4k + b3m - 1;
	this.d4a = true;
	while (true)
	{
		let h8y = this.b6o.h8y(p2d);
		while (d4k <= e8v && !this.b6o.m9k(p2d))
		{
      this.b6o.r9f(p2d);
    	this.w5c((this.m6n && !this.h7b) ? u9g.n7v : u9g.m5p);
			this.a2e(p2d, j3g, d4k);
			j3g.r9f(p2d.i4x.z2g());
 			if (j3g.e9d())
			{
				d4k++;
			}
			if (this.j4b && h8y > 1)
			{
				break;
			}
			h8y = this.b6o.h8y(p2d);
		}
		if (!h8y || d4k > e8v)
		{
			return;
		}
    j3g.y9l(p2d.i4x.z2g());
		if (j3g.p0w())
		{
			d4k--;
		}
    this.b6o.y9l(p2d);
		for (let i = 1; i < h8y; i++)
		{
      q9s++;
      let s2n = "<span class=\"tdline\" data-level=\"";
      s2n += q9s.toString();
      s2n += "\">";
      this.x9e.c3l(s2n);
			this.q2f(u9g.z5p);
			this.v1n("\x5b", true);
			let p3p = '';
      this.v7y(p2d, j3g, d4k, i, p3p, q9s);
			this.w5c(u9g.z5p);
			this.v1n("\x5d", true);
      this.x9e.c3l("\x3c\x2f\x73\x70\x61\x6e\x3e");
      q9s--;
     	this.w5c((this.m6n && !this.h7b) ? u9g.n7v : u9g.m5p);
		}
		this.q2f(this.k7h);
    this.b6o.r9f(p2d);
    j3g.r9f(p2d.i4x.z2g());
		if (j3g.e9d())
		{
			d4k++;
		}
		this.d4a = true;
	}
}

a2e(p2d, j3g, d4k)
{
	if (this.b6o.u0g(p2d))
	{
		return;
	}
 	let i4x = p2d.i4x;

	let q9l = '';
  let m9a = false;
  if (this.i3h)
	{
		if (i4x.s3v())
		{
			if (!this.b6o.u0g(p2d))
			{
        let k1u = p2d.o0o();
        this.b6o.y9l(k1u);
        if (k1u.i4x)
        {
  				if (k1u.i4x.e4g())
	  			{
		  			m9a = true;
			  	}
        }
			}
		}
  }
	if (this.l2s)
	{
		q9l = "\x28";
		this.l2s = false;
		if (this.i3h && i4x.i9l())
		{
			this.v1n("\x28", true);
			let b2u = this.k7h;
			this.o5m(p2d, i4x.q9g());
			this.w5c(b2u);
			q9l = "";
      m9a = true;
		}
	}
	else
	{
		if (this.i3h && i4x.i9l())
		{
  	  let b2u = this.k7h;
	  	this.o5m(p2d, i4x.q9g());
		  this.w5c(b2u);
      m9a = true;
    }
	}
	if (i4x.l4f())
	{
		q9l += u1r(i4x.p3p());
	}
	let j4d = i4x.e8p();
	if (j4d)
	{
    q9l += d4k;
		q9l += '.';
	}
	else
	{
		if (this.d4a || m9a)
		{
 			q9l += d4k;
			q9l += "\x2e\x2e\x2e";
		}
	}
	q9l += b1e(j3g, i4x.z2g(), false);
	if (i4x.f8e())
	{
		q9l += j0t(i4x.style());
	}
	if (i4x.e4n())
	{
		q9l += h2v(i4x.y9t());
	}
	if (i4x.m6u())
	{
		q9l += "\x20\x45\x6e\x64\x20\x4f\x66\x20\x47\x61\x6d\x65";
  }
	if (this.k8r || this.w7l)
	{
		if (this.b6o.m9k(p2d) && (!this.i3h || !i4x.e4g()))
		{
			if (this.k8r)
			{
				q9l += "\x29";
				this.k8r = false;
			}
			else
			{
				q9l += "\x3b";
				this.w7l = false;
			}
		}
	}
	this.v9t(p2d, q9l);
	this.d4a = false;

	if (i4x.z8x())
	{
		let z8s = i4x.z8s();
    let e7q = z8s.indexOf("\x5b\x23\x5d");
		let o9b = z8s.substring(0, e7q);
	  let c5p = z8s.substring(e7q + 3);
		if (o9b.length)
		{
			this.e1w(p2d, o9b);
		}
		this.n1m++;
		if (this.s1m)
		{
			this.q2f(u9g.d1e);
      this.u2k(p2d, j3g, this.n1m);
			this.d4a = true;
		}
		if (c5p.length)
		{
			this.e1w(p2d, c5p);
		}
	}
	else
	{
		this.e1w(p2d, i4x.z8s());
	}

  if (i4x.m6u())
	{
    this.x9e.i5y("\x3c\x64\x69\x76\x3e\x26\x6e\x62\x73\x70\x3b\x3c\x2f\x64\x69\x76\x3e"); 
   	this.u6t();
 	  this.z5b(false); 
 	  this.x8h = true;
	}
}

w5c(x8t)
{
	if (x8t != this.k7h)
	{
		this.y3t();
		this.k7h = x8t;
		this.n8j();
	}
}

n8j()
{
}

y3t()
{
	this.k7h = u9g.d1e;
}

q2f(x8t)
{
	this.y3t();
	this.k7h = u9g.d1e;
  
  
  
  
  this.x9e.i5y("\x3c\x62\x72\x3e"); 
	if (x8t != u9g.d1e)
	{
		this.k7h = x8t;
		this.n8j();
	}
}

u2k(p2d, j3g, p4e)
{
  this.g9u = true;
	let s2n = "<span class=\"tddia\" movenr=\"";
  s2n += this.b6o.a9r(p2d).toString();
	s2n += "\">",
	this.x9e.c3l(s2n);
	this.x9e.c3l("\x3c\x63\x61\x6e\x76\x61\x73\x3e\x3c\x2f\x63\x61\x6e\x76\x61\x73\x3e");
	this.x9e.c3l("\x3c\x2f\x73\x70\x61\x6e\x3e");
	this.d4a = true;
}

b0h(p2d, z6n)
{
  this.z5q(p2d);
	this.h7n(z6n);
  this.c3z();
}

v7y(p2g, r5b, d4k, f0f, p3p, q9s)
{
  let p2d = p2g.o0o();
  let j3g = r5b.o0o();

	if (p3p.length)
	{
		this.w5c(u9g.p3p);
		let o9y = p3p;
		o9y += "\x29";
    let s2n = "<span class=\"tdprefix\">";
    this.x9e.c3l(s2n);
  	this.v1n(o9y);
    this.x9e.c3l("\x3c\x2f\x73\x70\x61\x6e\x3e");
	}
	let h8y = 0;
	let a3k = 1;
  this.b6o.z0a(p2d, f0f);
	this.d4a = true;
	do
	{
		this.w5c(u9g.z5p);
		this.a2e(p2d, j3g, d4k);
		if (h8y > 1)
		{
      this.b6o.y9l(p2d);
      this.g4d(p2d, j3g, d4k);
      this.b6o.r9f(p2d);
			this.d4a = true;
		}
		j3g.r9f(p2d.i4x.z2g());
		if (j3g.e9d())
		{
			d4k++;
		}
		h8y = this.b6o.h8y(p2d);
		if (h8y == 0)
		{
			break;
		}
		if (h8y > 1)
		{
			if (!this.b6o.o6h(p2d))
			{
				break;
			}
		}
    this.b6o.r9f(p2d);
		a3k++;
	} while (true);

	if (this.b6o.m9k(p2d))
	{
		return;
	}

	let r7l = p3p.length;
	let o9y = '';
	let q7f = 1;
	for (let i = 0; i < h8y; i++)
	{
		if (r7l == 0)
		{
      o9y = String.fromCharCode('A'.charCodeAt() + q7f - 1);
		}
		else if (r7l == 1)
		{
      o9y = p3p;
      o9y += q7f;
		}
		else if (r7l == 2)
		{
      o9y = p3p;
      o9y += String.fromCharCode('a'.charCodeAt() + q7f - 1);
		}
		else
		{
      o9y = p3p;
      o9y += q7f;
		}

    let s2n = "<span class=\"tdline\" data-level=\"";
    s2n += q9s.toString();
    s2n += "\">";
    this.x9e.c3l(s2n);
  	this.q2f(this.k7h);
    this.v7y(p2d, j3g, d4k, i, o9y, q9s);
    this.x9e.c3l("\x3c\x2f\x73\x70\x61\x6e\x3e");
		q7f++;
	}
}

g4d(p2g, r5b, d4k)
{
  let p2d = p2g.o0o();
  let j3g = r5b.o0o();

	this.w5c(u9g.f1i);
	this.l2s = true;
	this.w7l = false;
	let h8y = this.b6o.h8y(p2d);
	for (let i = 1; i < h8y; i++)
	{
		if (i == h8y - 1)
		{
			this.k8r = true;
		}
		if (i < h8y - 1)
		{
			this.w7l = true;
		}
    this.u5f(p2d, j3g, d4k, i);
		if (this.w7l)
		{
			this.w5c(u9g.f1i);
			this.v1n("\x3b", false);
			this.w7l = false;
		}
	}
	this.w5c(u9g.f1i);
	if (this.k8r)
	{
		this.v1n("\x29", false);
		this.k8r = false;
	}
}

u5f(p2g, r5b, d4k, f0f)
{
  let p2d = p2g.o0o();
  let j3g = r5b.o0o();

  this.b6o.z0a(p2d, f0f);
	let a3k = 0;
	this.d4a = true;
	do
	{
		a3k++;
		this.w5c(u9g.f1i);
		this.a2e(p2d, j3g, d4k);
		if (this.b6o.m9k(p2d))
		{
			break;
		}
		j3g.r9f(p2d.i4x.z2g());
		if (j3g.e9d())
		{
			d4k++;
		}
    this.b6o.r9f(p2d);
	} while (true);
}

v9t(p2d, q9l)
{
	if (q9l.length)
	{
 		this.b5z(p2d, q9l);
	}
	else
	{
		if (this.l4r)
    {
      this.b5z(p2d, "\x5b\x2e\x2e\x2e\x5d");
    }
	}
	if (p2d.i4x)
	{
		if (p2d.i4x.e5t() || p2d.i4x.z4c())
		{
			this.w9i(p2d, u9g.o4h);
		}
		if (p2d.i4x.z8x())
		{
		}
		if (p2d.i4x.f1k())
		{
			this.w9i(p2d, u9g.k6k);
		}
		if (p2d.i4x.v8d())
		{
			this.w9i(p2d, u9g.b0e);
		}
	}
	else
	{
		if (this.b6o.v0j() || this.b6o.o7o())
		{
			this.w9i(p2d, u9g.o4h);
		}
		if (this.b6o.j5x())
		{
		 	this.w9i(p2d, u9g.b0e);
		}
	}
}

v1n(q9l, i9p)
{
	if (q9l.length == 0)
	{
		return;
	}
	if (!this.g9u && i9p)
	{
		this.x9e.i5y("\x20");
	}
	this.x9e.i5y(q9l);
	this.g9u = false;
}

o5m(p2d, q9g)
{
	if (this.i3h && q9g.length)
	{
		this.w5c(u9g.q9g);
		this.b0h(p2d, q9g);
	}
}

e1w(p2d, z8s)
{
	if (this.i3h && z8s.length)
	{
		this.w5c(u9g.z8s);
		this.b0h(p2d, z8s);
	}
}

h7n(z6n)
{
  let q7o = z6n;
  let w5x = q7o.replaceAll("\x3c\x62\x72\x3e\x3c\x62\x72\x3e", "\x3c\x62\x72\x3e");
  let d1x = w5x.replaceAll("\x3c\x62\x72\x3e\x3c\x62\x72\x3e", "\x3c\x62\x72\x3e");
  let l5v = d1x.replaceAll("\x3c\x62\x72\x3e", "\x3c\x64\x69\x76\x3e\x26\x6e\x62\x73\x70\x3b\x3c\x2f\x64\x69\x76\x3e");
  let s = l5v;
  this.x9e.i5y(s);
}

b5z(p2d, q9l)
{
	if (q9l.length == 0)
	{
		return;
	}
	if (!this.g9u)
	{
		this.x9e.i5y("\x20");
	}
  let a0x = '';
  if (p2d.i4x)
  {
  	if (p2d.i4x.v4k())
	  {
		  if (p2d.i4x.z4d() == o9q.t0j)
  		{
	  		a0x = "\x74\x64\x6d\x6f\x76\x65\x2d\x63\x72\x69\x74\x2d\x6f\x70\x65\x6e\x69\x6e\x67";
		  }
  		else if (p2d.i4x.z4d() == o9q.g3i)
	  	{
		  	a0x = "\x74\x64\x6d\x6f\x76\x65\x2d\x63\x72\x69\x74\x2d\x6d\x69\x64\x64\x6c\x65";
  		}
	  	else if (p2d.i4x.z4d() == o9q.r6z)
		  {
  			a0x = "\x74\x64\x6d\x6f\x76\x65\x2d\x63\x72\x69\x74\x2d\x65\x6e\x64";
	  	}
  	}
  }
	let b3t = "<span class=\"";
	if (a0x.length == 0)
	{
		b3t += "tdmove\" movenr=\"";
	}
	else
	{
		b3t += "\x74\x64\x6d\x6f\x76\x65\x20" + a0x + "\" movenr=\"";
	}
  b3t += this.b6o.a9r(p2d).toString();
  b3t += "\"";
	b3t += "\x3e",
	b3t += q9l;
	b3t += "\x3c\x2f\x73\x70\x61\x6e\x3e";

	this.x9e.c3l(b3t);
	this.g9u = false;
}

w9i(p2d, x8t)
{
  if (x8t == u9g.o4h)
  {
    this.h3l(p2d);
  }
  else if (x8t == u9g.b0e)
  {
    this.x9g(p2d);
  }
}

h3l(p2d)
{
	let s2n = "<span class=\"tdcolors\" movenr=\"";
  s2n += this.b6o.a9r(p2d).toString();
	s2n += "\">",
	this.x9e.c3l(s2n);
	this.x9e.c3l("\x3c\x2f\x73\x70\x61\x6e\x3e");
}

x9g(p2d)
{
	let s2n = "<span class=\"tdmedal\" movenr=\"";
  s2n += this.b6o.a9r(p2d).toString();
	s2n += "\">",
	this.x9e.c3l(s2n);
	this.x9e.c3l("\x3c\x63\x61\x6e\x76\x61\x73\x3e\x3c\x2f\x63\x61\x6e\x76\x61\x73\x3e");
	this.x9e.c3l("\x3c\x2f\x73\x70\x61\x6e\x3e");
}

z5b(r8e)
{
 	let s2n = "<span class=\"tdline\"";
	if (r8e)
	{
		s2n += " data-commented=\"1\"";
	}
	s2n += " data-level=\"0\">";
	this.x9e.i5y(s2n);
}

u6t()
{
  this.x9e.c3l("\x3c\x2f\x73\x70\x61\x6e\x3e");
}

z5q(p2d)
{
  let c4m = "\x74\x64\x63\x6f\x6d\x6d\x65\x6e\x74";
  if (this.f8o)
  {
    c4m += "\x20\x69\x73\x2d\x62\x6f\x6c\x64";
  }
  let s2n = "<span class=\"" + c4m + "\" movenr=\"";
  s2n += this.b6o.a9r(p2d).toString();
  s2n += "\">";
  this.x9e.i5y(s2n);
}

c3z()
{
  this.x9e.c3l("\x3c\x2f\x73\x70\x61\x6e\x3e");
}

g7b(y9t)
{
  this.l4r = y9t;
}

y7q(y9t)
{
  this.f8o = y9t;
}

n4z(y9t)
{
  this.r5n = y9t;
}

n5g(y9t)
{
  this.p2m = y9t;
}

} 
const c3j =
{
	x7q : 1,
	u1e : 2,
	x1d : 3
};

class k7q
{

constructor()
{
	this.b8x = 0;
	this.w8c = 0;
	this.type = c3j.x7q;
}

o0o()
{
	let p9c = new k7q();
	p9c.b8x = this.b8x;
	p9c.w8c = this.w8c;
	p9c.type = this.type;
	return p9c;
}

}

function a0s(b8x, w8c, type)
{
	let s = new k7q();
	s.b8x = b8x;
	s.w8c = w8c;
	s.type = type;
	return s;
}
class s7c
{

constructor()
{
	this.q1s = [];
}

o0o()
{
	let i1a = new s7c();
	for (const f3z of this.q1s)
	{
		i1a.add(f3z.o0o());
	}
	return i1a;
}

h2u()
{
	this.q1s.length = 0;
}

k2v()
{
	return this.q1s.length == 0;
}

s7n()
{
	return this.q1s.length;
}

add(f3z)
{
	let a7d = f3z.o0o();
	this.q1s.push(a7d);
}

}

const c7m =
{
	v8k : 0,
	i0c : 1,
	s7l : 2
};

class r3c
{

constructor()
{
	this.h2j = 0;
	this.type = c7m.v8k;
}

o0o()
{
	let i2u = new r3c();
	i2u.h2j = this.h2j;
	i2u.type = this.type;
	return i2u;
}

}

function c7t(h2j, type)
{
	let t5v = new r3c();
	t5v.h2j = h2j;
	t5v.type = type;
	return t5v;
}

class x6l
{

constructor()
{
	this.a7c = [];
}

o0o()
{
	let t9p = new x6l();
	for (const n3h of this.a7c)
	{
		t9p.add(n3h.o0o());
	}
	return t9p;
}

h2u()
{
	this.a7c.length = 0;
}

k2v()
{
	return this.a7c.length == 0;
}

s7n()
{
	return this.a7c.length;
}

add(l8r)
{
	let r1g = l8r.o0o();
	this.a7c.push(r1g);
}

}

const h7x =
{
	f4x    : 0,
	l0o  : 1,
	j1s  : 2,
	e2l    : 3,
  y7k   : 4,
	k0m    : 5,
};


function q0w(f3q)
{
	let q9l = '';
	switch (f3q)
	{
		case h7x.f4x:
			q9l = "\x50";
			break;
		case h7x.l0o:
			q9l = "\x4e";
			break;
		case h7x.j1s:
			q9l = "\x42";
			break;
		case h7x.e2l:
			q9l = "\x52";
			break;
		case h7x.y7k:
			q9l = "\x51";
			break;
		case h7x.king:
			q9l = "\x4b";
			break;
	}
	return q9l;
}

class i0b
{

constructor()
{
  this.d7r = 0;
	this.g0g = new m3k();
	this.l3y = new e5q();
}

o0o()
{
	let a6t = new i0b();
  a6t.d7r = this.d7r;
	a6t.g0g = this.g0g.o0o();
	a6t.l3y = this.l3y.o0o();
	return a6t;
}

}

const q6z = 	 		"\x23\x37\x42\x38\x32\x39\x35";
const z0k =			"\x23\x39\x46\x39\x46\x39\x46";
const x9b = 			    "\x23\x37\x42\x38\x32\x39\x35";
const c9b = 		  "\x23\x46\x46\x46\x46\x46\x46";
const i8y =       "\x23\x44\x30\x42\x31\x39\x34";

const g6s	   = "\x23\x45\x31\x33\x31\x32\x39";
const k3c	 = "\x23\x33\x38\x39\x43\x31\x33";
const o5b = "\x23\x45\x32\x42\x36\x32\x38";

const j8c	 = "\x23\x45\x31\x33\x31\x32\x39";
const w2y	 = "\x23\x33\x38\x39\x43\x31\x33";
const s3s	   = "\x23\x45\x32\x42\x36\x32\x38";

class s0a
{

constructor()
{
	this.k3d = null;
	this.y6y = false;
	this.g9i = null;
	this.e8c = null;
	this.l6p = null;
	this.c0k = 0;
	this.b0l = 0;
	this.f7a = 0;
	this.x7c = 0;
	this.s7w = 0;
	this.q0o = 0;
	this.x2h = new j6p();
	this.j3g = new z4m();
	this.e6v = new s7c();
	this.i3x = new x6l();
  this.s6s = new q5w();
  this.w2k = true;
	this.d0p = true;
	this.w7e = true;
	this.b1y = false;
	this.k7u = q6z;
	this.x5b = z0k;
	this.f1h = w3l;
	this.p8d = u7f;
	this.a4b = u7f;
	this.u9e = e0w;
	this.a9w = true;
	this.c0b = y0s;
	this.r4h = y0s;
	this.o3z = false;
	this.v0m = [];
	this.u8s = 0;
}

c1e(k3d)
{
	this.k3d = k3d;
}

q8i(x2h)
{
	this.x2h = x2h;
	this.f7a = x2h.f7a();
	this.x7c = x2h.f7a();

	this.c0k = (this.k3d.width - this.f7a) / 2;
	let top = (this.k3d.height - this.x7c) * 0.25;
	if (top > 0 && top < 16) top = 16;
	this.b0l = top;
	this.s7w = this.c0k + this.f7a - 1;
	this.q0o = this.b0l + this.x7c - 1;
	this.y6y = false;
	this.c6a();
}

c1i(j3g)
{
	this.j3g = j3g.o0o();
	this.e6v.h2u();
	this.i3x.h2u();
}

z1f(e6v)
{
	this.e6v = e6v.o0o();
}

h4h(i3x)
{
	this.i3x = i3x.o0o();
}

b5v(i4x)
{
  this.s6s = i4x.o0o();
}

h2p(b1y)
{
	this.b1y = b1y;
}

h2l()
{
	this.b1y = !this.b1y;
}

y8o()
{
	if (!this.k3d) return;
	if (this.f7a <= 0 || this.x7c <= 0)
	{
		return;
	}
	this.v9s();
}

f0a()
{
	let a1j = this.x2h.a1j;
	if (this.y6y)
	{
		return;
	}
	this.y6y = true;
	if (a1j == k5t.e3i)
	{
  	this.g9i = j2k.c0f("\x69\x6d\x61\x67\x65\x73\x2f\x62\x6f\x61\x72\x64\x2f\x4c\x69\x67\x68\x74\x53\x71\x75\x61\x72\x65");
  	this.e8c = j2k.c0f("\x69\x6d\x61\x67\x65\x73\x2f\x62\x6f\x61\x72\x64\x2f\x44\x61\x72\x6b\x53\x71\x75\x61\x72\x65");
		this.l6p = j2k.c0f("\x69\x6d\x61\x67\x65\x73\x2f\x62\x6f\x61\x72\x64\x2f\x4d\x61\x72\x67\x69\x6e");
	}
}

c6a()
{
	this.f0a();
	let a1j = this.x2h.a1j;
	if (a1j == k5t.e3i)
	{
		this.a9w = false;
		this.d0p = false;
		this.w7e = false;
		this.f1h = "\x23\x46\x46\x46\x46\x39\x37";
		this.p8d = "\x23\x39\x42\x32\x45\x33\x31";
		this.a4b = l3x;
	}
}

v9s()
{
	this.c6a();
	if (this.x2h.a1j == k5t.e3i)
	{
		let l7o = j2k.c0f("\x69\x6d\x61\x67\x65\x73\x2f\x62\x6f\x61\x72\x64\x2f\x42\x6f\x61\x72\x64\x42\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64");
		this.g8f(new k0x(0, 0, this.k3d.width, this.k3d.height), l7o);
	}
	this.f2e();  
	this.q7h(); 
	this.j4o(); 
  if (chess)
  {
	  this.j6t();
  }
  else
  {
	  this.z4u();
  	this.w1k();
  }
  
  this.f2t();
 	this.z6v();
 	this.p9h();
 	this.h3i();
	this.u4m(); 
	this.d6n();      
}

f2e()
{
	let m6w = this.b0l;
	let j9z = this.c0k;
	let q3r = this.s7w;
	let w4r = this.q0o;
	let t2a = this.x2h.m2p;
	this.s2p(new k0x(j9z, m6w, q3r, m6w+t2a-1), this.p8d);
	this.s2p(new k0x(j9z, w4r-t2a+1, q3r, w4r), this.a4b);
	this.s2p(new k0x(j9z, m6w, j9z+t2a-1, w4r), this.p8d);
	this.s2p(new k0x(q3r-t2a+1, m6w, q3r, w4r), this.a4b);
}

q7h()
{
	let m2p = this.x2h.m2p;
	let m2b = this.x2h.m2b;
	if (!m2b)
	{
		return;
	}
	if (this.a9w || !this.l6p)
	{
		this.c9e(this.u9e);
	}
	else
	{
		let left = this.c0k + m2p;
		let top = this.b0l + m2p;
		let w2j = this.s7w - m2p;
		let f7k = this.b0l + m2p + m2b - 1;
		this.g8f(new k0x(left, top, w2j, f7k), this.l6p);

		left = this.c0k + m2p;
		top = this.b0l + m2p;
		w2j = this.c0k + m2p + m2b - 1;
		f7k = this.q0o - m2p;
		this.g8f(new k0x(left, top, w2j, f7k), this.l6p);

		left = this.c0k + m2p;
		top = this.q0o - m2p - m2b + 1;
		w2j = this.s7w - m2p;
		f7k = this.q0o - m2p;
		this.g8f(new k0x(left, top, w2j, f7k), this.l6p);

		left = this.s7w - m2p - m2b + 1;
		top = this.b0l + m2p;
		w2j = this.s7w - m2p;
		f7k = this.q0o - m2p;
		this.g8f(new k0x(left, top, w2j, f7k), this.l6p);
	}
}

c9e()
{
	let m2p = this.x2h.m2p;
	let m2b = this.x2h.m2b;
	if (!m2b)
	{
		return;
	}

	let left = this.c0k + m2p;
	let top = this.b0l + m2p;
	let w2j = this.s7w - m2p;
	let f7k = this.b0l + m2p + m2b - 1;
	this.s2p(new k0x(left, top, w2j, f7k), this.u9e);

	left = this.c0k + m2p;
	top = this.b0l + m2p;
	w2j = this.c0k + m2p + m2b - 1;
	f7k = this.q0o - m2p;
	this.s2p(new k0x(left, top, w2j, f7k), this.u9e);

	left = this.c0k + m2p;
	top = this.q0o - m2p - m2b + 1;
	w2j = this.s7w - m2p;
	f7k = this.q0o - m2p;
	this.s2p(new k0x(left, top, w2j, f7k), this.u9e);

	left = this.s7w - m2p - m2b + 1;
	top = this.b0l + m2p;
	w2j = this.s7w - m2p;
	f7k = this.q0o - m2p;
	this.s2p(new k0x(left, top, w2j, f7k), this.u9e);
}

d6n()
{
	if (this.x2h.j5y)
	{
  	if (!this.x2h.m2b)
  	{
	  	return;
  	}
		let x3x = "\x23\x30\x30\x30\x30\x30\x30";
		if (this.j3g.e9d())
		{
			x3x = "\x23\x45\x44\x44\x37\x39\x30";
		}
		else
		{
			x3x = "\x23\x30\x30\x30\x30\x30\x30";
		}
		let rect = this.y0v();
		let v5c = this.m3w();
		v5c.beginPath();
		v5c.fillStyle = x3x;
		let a4p = rect.f3w() * 0.40;
		v5c.arc(rect.j6q + rect.f3w()/2 - 1, rect.n8v + rect.k4s()/2 - 1,
			a4p, 0, 2 * Math.PI);
		v5c.fill();
	}
}

j4o()
{
	let j4r = l3x;
	let m2p = this.x2h.m2p;
	let m2b = this.x2h.m2b;
	let t2a = this.x2h.t2a;
	let m6w = this.b0l + m2p + m2b;
	let j9z = this.c0k + m2p + m2b;
	let q3r = this.s7w - m2p - m2b;
	let w4r = this.q0o - m2p - m2b;
	this.s2p(new k0x(j9z, m6w, q3r, m6w+t2a-1), j4r);
	this.s2p(new k0x(j9z, w4r-t2a+1, q3r, w4r), j4r);
	this.s2p(new k0x(j9z, m6w, j9z+t2a-1, w4r), j4r);
	this.s2p(new k0x(q3r-t2a+1, m6w, q3r, w4r), j4r);
}

m3w()
{
	return this.k3d.getContext('2d');
}

u4s(rect, x3x)
{
	let v5c = this.m3w();
	v5c.beginPath();
	v5c.lineWidth = "\x31";
	v5c.strokeStyle = x3x;
	v5c.rect(rect.j6q, rect.n8v, rect.f3w(), rect.k4s());
	v5c.stroke();
}

s2p(rect, x3x)
{
	let v5c = this.m3w();
	v5c.fillStyle = x3x;
	v5c.fillRect(rect.j6q, rect.n8v, rect.f3w(), rect.k4s());
}

g8f(rect, img)
{
	let v5c = this.m3w();
	let j0g = v5c.createPattern(img, 'repeat');
	v5c.fillStyle = j0g;
	v5c.fillRect(rect.j6q, rect.n8v, rect.f3w(), rect.k4s());
}

x5d(rect, img)
{
	let v5c = this.m3w();
	let j0g = v5c.createPattern(img, 'no-repeat');
	v5c.fillStyle = j0g;
	v5c.fillRect(rect.j6q, rect.n8v, rect.f3w(), rect.k4s());
}

q2r(h2j)
{
	let b8f = f5y;
	let x4d = o4u;
	if (this.b1y)
	{
		b8f = y2e(u5r(h2j));
		x4d = b6i(u5r(h2j));
	}
	else
	{
		b8f = y2e(h2j);
		x4d = b6i(h2j);
	}
	if (u0i(x4d))
	{
		b8f++;
	}
	else
	{
		b8f--;
	}
	return this.v5x(x4d, b8f);
}

z4u()
{
	for (const h2j of h0i)
	{
		this.v7p(h2j);
	}
}

v7p(h2j)
{
	this.q6i(this.q2r(h2j), h2j);
}

q6i(rect, h2j)
{
	let c0f = this.g9i;
	if (this.w7e)
	{
		this.g3r(rect, this.x5b);
		return;
	}
	if (!c0f)
	{
		this.g3r(rect, this.x5b);
		return;
	}

	let u2m = c0f.width;
	let r5f = c0f.height;
	let u9n = this.x2h.w1j;
	if (u2m < u9n || r5f < u9n)
	{
		this.x5d(rect, c0f);
		return;
	}

	let x3y = Math.trunc(u2m / this.x2h.w1j);
	let c1d = Math.trunc(r5f / this.x2h.w1j);
	if (x3y == 0)
	{
		x3y = 1;
	}
	if (c1d == 0)
	{
		c1d = 1;
	}

	let f2w = Math.trunc((h2j) / x3y);
	let t8e = (h2j) % x3y;
	let y = Math.trunc(f2w / c1d);
	f2w = f2w % c1d;

  let c0x = new k0x();
	c0x.j6q = t8e * this.x2h.w1j;
	c0x.n8v = f2w * this.x2h.w1j;
	c0x.o0c = (t8e + 1) * this.x2h.w1j - 1;
	c0x.d7v = (f2w + 1) * this.x2h.w1j - 1;
	let v5c = this.m3w();
	a0m(v5c, rect, c0f, c0x);
}

j0h(h2j)
{
	let b8f = f5y;
	let x4d = o4u;
	if (this.b1y)
	{
		b8f = y2e(u5r(h2j));
		x4d = b6i(u5r(h2j));
	}
	else
	{
		b8f = y2e(h2j);
		x4d = b6i(h2j);
	}
	return this.v5x(x4d, b8f);
}

w1k()
{
	for (const h2j of h0i)
	{
		this.o3n(h2j);
	}
}

o3n(h2j)
{
	this.l2c(this.j0h(h2j), h2j);
}

l2c(rect, h2j)
{
	let c0f = this.e8c;
	if (this.d0p)
	{
		this.g3r(rect, this.k7u);
		return;
	}
	if (!c0f)
	{
		this.g3r(rect, this.k7u);
		return;
	}

	let u2m = c0f.width;
	let r5f = c0f.height;
	let u9n = this.x2h.w1j;
	if (u2m < u9n || r5f < u9n)
	{
		this.x5d(rect, c0f);
		return;
	}

	let x3y = Math.trunc(u2m / this.x2h.w1j);
	let c1d = Math.trunc(r5f / this.x2h.w1j);
	if (x3y == 0)
	{
		x3y = 1;
	}
	if (c1d == 0)
	{
		c1d = 1;
	}

	let f2w = Math.trunc((h2j) / x3y);
	let t8e = (h2j) % x3y;
	let y = Math.trunc(f2w / c1d);
	f2w = f2w % c1d;

  let c0x = new k0x();
	c0x.j6q = t8e * this.x2h.w1j;
	c0x.n8v = f2w * this.x2h.w1j;
	c0x.o0c = (t8e + 1) * this.x2h.w1j - 1;
	c0x.d7v = (f2w + 1) * this.x2h.w1j - 1;
	let v5c = this.m3w();
	a0m(v5c, rect, c0f, c0x);
}

v5x(x4d, b8f)
{
	let m2p = this.x2h.m2p;
	let m2b = this.x2h.m2b;
	let t2a = this.x2h.t2a;
	let w1j = this.x2h.w1j;
	let rect = new k0x();
	rect.j6q = this.c0k + m2p + m2b +	t2a + (b8f) * w1j;
	rect.o0c = rect.j6q + w1j - 1;
	rect.n8v = this.b0l + m2p + m2b +	t2a + (c4f - x4d - 1) * w1j;
	rect.d7v = rect.n8v + w1j - 1;
	return rect;
}

w9z(h2j)
{
	let b8f = f5y;
	let x4d = o4u;
	if (this.b1y)
	{
		b8f = y2e(u5r(h2j));
		x4d = b6i(u5r(h2j));
	}
	else
	{
		b8f = y2e(h2j);
		x4d = b6i(h2j);
	}
	return this.v5x(x4d, b8f);
}

j6t()
{
	for (const h2j of h0i)
	{
		this.e1f(h2j);
	}
}

e1f(h2j)
{
	this.j2t(this.w9z(h2j), h2j);
}

j2t(rect, h2j)
{
	let j6o = isDarkSquare(h2j);
	let c0f = this.g9i;
	if (j6o)
	{
		c0f = this.e8c;
	}
	if (j6o)
	{
		if (this.d0p)
		{
			this.g3r(rect, this.k7u);
			return;
		}
		if (!c0f)
		{
			this.g3r(rect, this.k7u);
			return;
		}
	}
	else
	{
		if (this.w7e)
		{
			this.g3r(rect, this.x5b);
			return;
		}
		if (!c0f)
		{
			this.g3r(rect, this.x5b);
			return;
		}
	}

 	let u2m = c0f.width;
	let r5f = c0f.height;
	let u9n = this.x2h.w1j;
	if (u2m < u9n || r5f < u9n)
	{
		this.x5d(rect, c0f);
		return;
	}
	let x3y = Math.trunc(u2m / this.x2h.w1j);
	let c1d = Math.trunc(r5f / this.x2h.w1j);
	if (x3y == 0)
	{
		x3y = 1;
	}
	if (c1d == 0)
	{
		c1d = 1;
	}

	let f2w = Math.trunc((h2j) / x3y);
	let t8e = (h2j) % x3y;
	let y = Math.trunc(f2w / c1d);
	f2w = f2w % c1d;

  let c0x = new k0x();
	c0x.j6q = t8e * this.x2h.w1j;
	c0x.n8v = f2w * this.x2h.w1j;
	c0x.o0c = (t8e + 1) * this.x2h.w1j - 1;
	c0x.d7v = (f2w + 1) * this.x2h.w1j - 1;
	let v5c = this.m3w();
	a0m(v5c, rect, c0f, c0x);
}

g3r(rect, x3x)
{
	this.s2p(rect, x3x);
}

p9h()
{
	for (const h2j of h0i)
	{
		this.e3t(h2j);
	}
}

a5z(b8x, w8c, c8h)
{
	this.c0b = b8x;
	this.r4h = w8c;
	this.o3z = c8h;

	this.v0m.length = 0;
 	let j7l = this.w9z(b8x);
  let s6b = this.w9z(w8c);
	let s0p = this.x2h.w1j;

	let q6q = 32;
	if (s0p < 32)
	{
		q6q = s0p;
	}

  
	if (false)
	{
    
    
		let i6o = new x9h(j7l.j6q + s0p / 2, j7l.n8v + s0p / 2);
		let u4f = new x9h(s6b.j6q + s0p / 2, s6b.n8v + s0p / 2);
		let h7o = Math.abs(i6o.X - u4f.X);
		let a5m = Math.abs(i6o.Y - u4f.Y);
		let x8d = Math.atan2(u4f.X - i6o.X, i6o.Y - u4f.Y);
		let g7d = Math.sqrt(h7o*h7o + a5m*a5m) / 2;
		u4f.X = i6o.X + g7d * 2;
		u4f.Y = i6o.Y;
		let i6i = new x9h(i6o.X + g7d, i6o.Y);
		let m0x = Math.PI / q6q;
		let d5g = s0p * 0.40;
		let f6u = Math.PI;
		let q3y = (s6b.j6q > j7l.j6q && s6b.n8v < j7l.n8v) ||
			(s6b.j6q < j7l.j6q && s6b.n8v > j7l.n8v);
		for (let i = 1; i < q6q; i++)
		{
			let u4s = new k0x();
			if (q3y)
			{
				f6u -= m0x;
			}
			else
			{
				f6u += m0x;
			}
			let m7i = Math.cos(f6u);
			let v4r = Math.sin(f6u);
			let x1l = new x9h(i6i.X + g7d * m7i,
				i6i.Y - d5g * v4r);
			this.v0m.push(e9m(x1l, i6o, x8d - Math.PI / 2));
		}
	}
	else
	{
		let i6o = new x9h(j7l.j6q + s0p / 2, j7l.n8v + s0p / 2);
		let u4f = new x9h(s6b.j6q + s0p / 2, s6b.n8v + s0p / 2);
		let m9b = (u4f.X - i6o.X) / q6q;
		let g4w = (u4f.Y - i6o.Y) / q6q;
		for (let i = 1; i < q6q; i++)
		{
			this.v0m.push(new x9h(i6o.X + i * m9b, i6o.Y + i * g4w));
		}
	}
	this.v0m.push(new x9h(s6b.j6q + s0p / 2, s6b.n8v + s0p / 2));
	this.u8s = 0;
}

j2x()
{
	this.c0b = y0s;
	this.r4h = y0s;
}

l2q()
{
	this.y8o(); 

	let a6q = this.v0m[this.u8s];
	let w1j = this.x2h.w1j;
	let u4s = new k0x();
	u4s.j6q = a6q.X - w1j / 2;
	u4s.n8v = a6q.Y - w1j / 2;
	u4s.j3a(w1j);
	u4s.u2s(w1j);
 	let v5c = this.m3w();
	m2k(v5c, u4s, this.j3g.t9a(this.c0b));

	this.u8s++;
	if (this.u8s >= this.v0m.length)
	{
		let f3q = this.j3g.t9a(this.c0b);
		this.j3g.t6k(this.c0b, o8u.k2v);
		this.j3g.t6k(this.r4h, f3q);
		this.j2x();
		return true;
	}
	else
	{
		return false;
	}
}

e3t(h2j)
{
	if (h2j == this.c0b)
	{
		return;
	}
	let n1u = this.w9z(h2j);
 	let v5c = this.m3w();
	m2k(v5c, n1u, this.j3g.t9a(h2j));
}

u4m()
{
	if (!this.x2h.c5v)
	{
    return;
  }

 	let t2a = this.x2h.t2a;
	let m2p = this.x2h.m2p;
	let m2b = this.x2h.m2b;
	let w1j = this.x2h.w1j;

	let i2w = new k0x();
	i2w.j6q = this.c0k + m2p + m2b;
	i2w.n8v = this.b0l + m2p + m2b;
	i2w.j3a(c4f * w1j + 2 * t2a);
	i2w.u2s(c4f * w1j + 2 * t2a);

 	let v5c = this.m3w();
  let i5k = c0l(v5c, m2b-8);

  u4m(v5c,
    i2w,
    this.x2h,
    i5k,
    l8m.l7z,
    this.f1h,
    this.b1y,
    m2b);
}

z6g(h2j, x3x)
{
	let rect = this.w9z(h2j);
	let v5c = this.m3w();
  v5c.save();
  v5c.globalAlpha = 0.25; 
	v5c.fillStyle = x3x;
	v5c.fillRect(rect.j6q, rect.n8v, rect.f3w(), rect.k4s());
  v5c.restore();
}

f2t()
{
	if (this.w2k)
	{
		if (!this.s6s.k2v())
		{
      let x3x = "\x23\x38\x30\x30\x30\x38\x30"; 
			this.z6g(this.s6s.b8x, x3x);
			this.z6g(this.s6s.w8c, x3x);
		}
  }
}

z6v()
{
	for (const n3h of this.i3x.a7c)
	{
		this.n9q(n3h);
	}
}

n9q(n3h)
{
	let rect = this.w9z(n3h.h2j);
	let s9w = '';
	switch (n3h.type)
	{
		case c7m.v8k:
			s9w = g6s;
			break;
		case c7m.i0c:
			s9w = k3c;
			break;
		case c7m.s7l:
			s9w = o5b;
			break;
	}
	let s0p = this.f7a / 10;
	let v5c = this.m3w();
  /* dit is met roundrect
  o4z(rect, 5);
	v5c.lineWidth = s0p / 15;
	v5c.strokeStyle = s9w;
	n8n(v5c, rect.j6q, rect.n8v, rect.f3w(), rect.k4s(), 10);
  */
  
  v5c.save();
  v5c.globalAlpha = 0.7; 
	v5c.fillStyle = s9w;
	v5c.fillRect(rect.j6q, rect.n8v, rect.f3w(), rect.k4s());
  v5c.restore();
}

h3i()
{
	for (const f3z of this.e6v.q1s)
	{
		this.w7r(f3z);
	}
}

w7r(f3z)
{
	let b8x = f3z.b8x;
	let w8c = f3z.w8c;
	let h1d = f3z.type;

	let j7l = this.w9z(b8x);
	let s6b = this.w9z(w8c);

	let z8i = j7l.j6q + j7l.f3w()/2;
	let l4d = j7l.n8v + j7l.k4s()/2;
	let s9u = new x9h(z8i, l4d);

	let h5p = s6b.j6q + s6b.f3w()/2;
	let u3j = s6b.n8v + s6b.k4s()/2;

	let x7z = (h5p-z8i)*(h5p-z8i) + (u3j-l4d)*(u3j-l4d);
	let p3t = Math.sqrt(x7z);

	let t7q = (this.j3g.a4g(b8x)) ? 0 : j7l.f3w() / 4;
	p3t -= t7q;
	let m5c = (this.j3g.a4g(w8c)) ? 0 : j7l.f3w() / 4;
	p3t -= m5c;

	let g9a = 5;
	let c6j = 5 * g9a;
	let g1b = 7 * g9a;

	let d7u = z8i + t7q;
	let g5w = l4d;

	let w6j = d7u + p3t - 1;
	let b6v = l4d;

	let s8a = w6j - g1b;
	let i4b = l4d;

	let x8d = Math.atan2((h5p - z8i), (l4d - u3j));

  
	let t7b = [];
  let n3k = 10; 
	t7b.push(new x9h(s8a, i4b));
	t7b.push(new x9h(s8a - n3k, i4b - c6j));
	t7b.push(new x9h(w6j, b6v));
	t7b.push(new x9h(s8a - n3k, i4b + c6j));
	t7b.push(new x9h(s8a, b6v));
	let c4d = [];
	for (let i = 0; i <= 4; i++)
	{
		c4d.push(e9m(t7b[i], s9u, x8d - Math.PI / 2));
	}

	let v5c = this.m3w();
  v5c.save();
  v5c.globalAlpha = 0.7;

 	let n4u = '';
	switch (h1d)
	{
		case c3j.x7q:
			n4u = j8c;
			break;
		case c3j.u1e:
			n4u = w2y;
			break;
		case c3j.x1d:
			n4u = s3s;
			break;
	}
 	v5c.fillStyle = n4u;
  v5c.strokeStyle = n4u;
	v5c.beginPath();
	v5c.moveTo(c4d[0].X, c4d[0].Y);
	for (let i = 1; i <= 4; i++)
	{
		v5c.lineTo(c4d[i].X, c4d[i].Y);
	}
	v5c.closePath();
	v5c.fill();

  
	t7b.length = 0;
	t7b.push(new x9h(d7u, g5w - g9a));
	t7b.push(new x9h(d7u, g5w + g9a));
	t7b.push(new x9h(s8a, g5w + g9a));
	t7b.push(new x9h(s8a, g5w - g9a));
	c4d.length = 0;
	for (let i = 0; i <= 3; i++)
	{
		c4d.push(e9m(t7b[i], s9u, x8d - Math.PI / 2));
	}
	if (z8i == h5p)
	{
		if (c4d[0].Y != c4d[1].Y)
		{
			c4d[0].Y = c4d[1].Y;
		}
		if (c4d[2].Y != c4d[3].Y)
		{
			c4d[2].Y = c4d[3].Y;
		}
	}
	if (l4d == u3j)
	{
		if (c4d[0].X != c4d[1].X)
		{
			c4d[0].X = c4d[1].X;
		}
		if (c4d[2].X != c4d[3].X)
		{
			c4d[2].X = c4d[3].X;
		}
	}
	v5c.beginPath();
	v5c.moveTo(c4d[0].X, c4d[0].Y);
	for (let i = 1; i <= 3; i++)
	{
		v5c.lineTo(c4d[i].X, c4d[i].Y);
	}
	v5c.closePath();
	v5c.fill();
  v5c.restore();
}

y0v()
{
	let m2p = this.x2h.m2p;
	let m2b = this.x2h.m2b;
	let s0p = this.x2h.w1j;
	let rect = new k0x();
	rect.j6q = this.s7w - m2p - m2b + 1;
	rect.n8v = this.q0o - m2p - m2b;
	rect.d7v = this.q0o;
	rect.o0c = this.s7w - 1;
	return rect;
}

}

const l8k = 14;

const k5t =
{
	e3i : 0
};

const l6y =
{
	e3i : 0
};

const p9u =
{
	d1e : 0,
	o8d : 1,
};

const l8m =
{
	h7i: 0,
	n2v: 1,
	l7z: 2,
	r3n: 3,
	d3j: 4,
};

class j6p
{

constructor()
{
	this.a1j = k5t.e3i;
	this.w7y = 1; 
	this.m2p = 0;
	this.m2b = l8k;
	this.t2a = 2;
	this.w1j = 32;
	this.e6o = 20;
	this.c5v = true;
	this.x0l = p9u.o8d;
	this.j5y = true;
}

o0o()
{
	let o2d = new j6p();
	o2d.a1j = this.a1j;
	o2d.w7y = this.w7y;
	o2d.m2p = this.m2p;
	o2d.m2b = this.m2b;
	o2d.t2a = this.t2a;
	o2d.w1j = this.w1j;
	o2d.e6o = this.e6o;
	o2d.c5v = this.c5v;
	o2d.x0l = this.x0l;
	o2d.j5y = this.j5y;
	return o2d;
}

f7a()
{
	return this.w1j * c4f + 2 * (this.m2p + this.m2b + this.t2a);
}

q8j(rect)
{
	let w = rect.f3w();
	let h = rect.k4s();
	let c3d = 0;
	if (w < h)
	{
		c3d = w;
	}
	else
	{
		c3d = h;
	}
	if (this.m2b)
	{
		for (this.w1j = 2; this.w1j < 1000; this.w1j++)
		{
			this.m2b = (this.w1j / 100) * this.e6o;
			if (this.m2b < l8k)
			{
				this.m2b = l8k;
			}
			let s7n = 2 * (this.m2p + this.m2b + this.t2a) + c4f * this.w1j;
			if (s7n > c3d)
			{
				break;
			}
		}
		this.w1j--;
		this.m2b = (this.w1j / 100) * this.e6o;
		if (this.m2b < l8k)
		{
			this.m2b = l8k;
		}
	}
	else
	{
		for (this.w1j = 2; this.w1j < 1000; this.w1j++)
		{
			let s7n = 2 * (this.m2p + this.t2a) + c4f * this.w1j;
			if (s7n > c3d)
			{
				break;
			}
		}
		this.w1j--;
	}
	return this.f7a();
}

}


class e1x
{

constructor()
{
	this.x1z = new z4m();
	this.t1j = new z4m();
	this.e6v = new s7c();
	this.i3x = new x6l();
	this.j4i = new q5w();
 	this.f6n = new q5w();
	this.k5r = 0;
	this.r6v = false;
	this.x9d = false;
	this.a3k = 0;
	this.r5k = 0;
	this.o1c = '';
}

}

const c2w =
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

function o4z(rect, q3z)
{
	rect.j6q += q3z;
	rect.o0c -= q3z;
	if (rect.j6q > rect.o0c)
	{
		rect.j6q = rect.o0c;
	}
	rect.n8v += q3z;
	rect.d7v -= q3z;
	if (rect.n8v > rect.d7v)
	{
		rect.n8v = rect.d7v;
	}
}

function a0m(a7e, s0h, d6s, c0x)
{
	a7e.drawImage(d6s, c0x.j6q, c0x.n8v, c0x.f3w(), c0x.k4s(),
		s0h.j6q, s0h.n8v, s0h.f3w(), s0h.k4s());
}

function n8n(v5c, x, y, width, height, a4p)
{
	v5c.beginPath();
	v5c.moveTo(x, y + a4p);
	v5c.lineTo(x, y + height - a4p);
	v5c.arcTo(x, y + height, x + a4p, y + height, a4p);
	v5c.lineTo(x + width - a4p, y + height);
	v5c.arcTo(x + width, y + height, x + width, y + height-a4p, a4p);
	v5c.lineTo(x + width, y + a4p);
	v5c.arcTo(x + width, y, x + width - a4p, y, a4p);
	v5c.lineTo(x + a4p, y);
	v5c.arcTo(x, y, x, y + a4p, a4p);
	v5c.stroke();
}

function e9m(p6s, s9u, d9s)
{
	let p = new x9h();
	p.X = (Math.cos(d9s) * (p6s.X - s9u.X)) - (Math.sin(d9s) * (p6s.Y - s9u.Y)) + s9u.X;
	p.Y = (Math.sin(d9s) * (p6s.X - s9u.X)) + (Math.cos(d9s) * (p6s.Y - s9u.Y)) + s9u.Y;
	return p;
}

function t1a(v5c, rect, b0e)
{
	let left = rect.j6q;
	let top = rect.n8v;
	let w2j = rect.o0c;
	let f7k = rect.d7v;

	v5c.fillStyle = i8h;
	v5c.fillRect(rect.j6q, rect.n8v, rect.f3w(), rect.k4s());

	if (b0e.d1e())
	{
		return;
	}

	let y7g = b0e.g3o();
	let u2y = 0;
	if (y7g > 8)
	{
		u2y = (w2j - left) / 8;
	}
	else
	{
		u2y = (w2j - left) / y7g;
	}
	let w0o = left - u2y;
	let n4n = top;
	let g3s = w0o + u2y;
	let b5h = 0;
	if (y7g > 8)
	{
		b5h = (f7k - top + 1) / 2;
	}
	else
	{
		b5h = f7k - top + 1;
	}

	let d3y = top + b5h - 1;
	let n5e = 0;
	for (let i = 0; i < 16; i++)
	{
		if (b0e.p4p(i))
		{
			w0o += u2y;
			g3s += u2y;
			if (n5e == 7 || n5e == 15 ||
				(n5e < 8 && n5e == y7g - 1))
			{
				g3s = w2j;
			}
			if (n5e == 8)
			{
				w0o = left;
				g3s = w0o + u2y;
				n4n = top + b5h;
				d3y = f7k;
			}
			let a0u = new k0x(w0o, n4n, g3s, d3y);
			v5c.fillStyle = c2w[i];
			v5c.fillRect(a0u.j6q, a0u.n8v, a0u.f3w(), a0u.k4s());
			n5e++;
		}
	}
}




class i7n
{

constructor()
{
	this.w3g = '';
	this.c0f = null;
}

}

class l3a
{

constructor()
{
	this.t2l = [];
}

add(img)
{
	let v3c = new i7n();
	v3c.w3g = img.u2n;
	v3c.c0f = img;
	this.t2l.push(v3c);
}

c0f(w3g)
{
	for (const m3f of this.t2l)
	{
		if (m3f.w3g.toLowerCase() == w3g.toLowerCase())
		{
			return m3f.c0f;
		}
	}
	return null;
}

}
const b0y 				= "\x23\x30\x30\x46\x46\x46\x46";
const l3x 			= "\x23\x30\x30\x30\x30\x30\x30";
const e0w 				= "\x23\x30\x30\x30\x30\x46\x46";
const p0m 			= "\x23\x46\x46\x46\x42\x46\x30";
const o1h 			= "\x23\x38\x30\x38\x30\x38\x30";
const s1v 		= "\x23\x46\x46\x30\x30\x46\x46";
const h2w 				= "\x23\x38\x30\x38\x30\x38\x30";
const x3b 			= "\x23\x30\x30\x38\x30\x30\x30";
const t0a 				= "\x23\x30\x30\x46\x46\x30\x30";
const g9z 			= "\x23\x43\x30\x43\x30\x43\x30";
const e6x 			= "\x23\x38\x30\x30\x30\x30\x30";
const b9b 		= "\x23\x41\x30\x41\x30\x41\x34";
const g4o 	= "\x23\x43\x30\x44\x43\x43\x30";
const m7e 				= "\x23\x30\x30\x30\x30\x38\x30";
const e6m 			= "\x23\x38\x30\x38\x30\x30\x30";
const b0x 			= "\x23\x38\x30\x30\x30\x38\x30";
const i8h 				= "\x23\x46\x46\x30\x30\x30\x30";
const t5u 			= "\x23\x43\x30\x43\x30\x43\x30";
const t6r 		= "\x23\x41\x36\x43\x41\x46\x30";
const w7n 				= "\x23\x30\x30\x38\x30\x30\x30";
const u7f 			= "\x23\x46\x46\x46\x46\x46\x46";
const w3l 			= "\x23\x46\x46\x46\x46\x30\x30";

class x9h
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

o0o()
{
	let o7c = new x9h();
	o7c.j6q = this.X;
	o7c.n8v = this.Y;
	return o7c;
}

}

class k0x
{

constructor(left, top, w2j, f7k)
{
	if (left === undefined)
	{
		this.j6q = 0;
		this.n8v = 0;
		this.o0c = 0;
		this.d7v = 0;
	}
	else
	{
		this.j6q = left;
		this.n8v = top;
		this.o0c = w2j;
		this.d7v = f7k;
	}
}

o0o()
{
	let j4v = new k0x();
	j4v.j6q = this.j6q;
	j4v.n8v = this.n8v;
	j4v.o0c = this.o0c;
	j4v.d7v = this.d7v;
	return j4v;
}

f3w()
{
	return this.o0c - this.j6q + 1;
}

o4v()
{
	return this.o0c - this.j6q + 1;
}

j3a(width)
{
	this.o0c = this.j6q + width - 1;
}

k4s()
{
	return this.d7v - this.n8v + 1;
}

z7h()
{
	return this.d7v - this.n8v + 1;
}

u2s(height)
{
	this.d7v = this.n8v + height - 1;
}

l7y()
{
	this.j6q++;
	this.n8v++;
	this.o0c--;
	this.d7v--;
}

u4d(a6q)
{
	return a6q.X >= this.j6q &&
		a6q.X <= this.o0c &&
		a6q.Y >= this.n8v &&
		a6q.Y <= this.d7v;
}


}

class b2l
{

constructor(y2n)
{
	this.y2n = y2n;
	this.s4h = new z4m();
	this.m6m = new s0a();
	this.z8u = null;
	this.x2h = new j6p();
	this.e6y = true;
}

l4h()
{
	let d8g = window.devicePixelRatio;

	this.m6m.k3d.width = this.z8u.clientWidth * d8g;
	this.m6m.k3d.height = this.z8u.clientHeight * d8g;

	let g1j = 32 * d8g;
	let d3r = 32 * d8g;
	let p3w = this.m6m.k3d.width - g1j;
	let g4b = this.m6m.k3d.height - d3r;
	let c8n = g4b < p3w ? g4b : p3w;
	if (c8n < 128)
	{
		c8n = 128;
	}
	let rect = new k0x();
	rect.j6q = 0;
	rect.n8v = 0;
	rect.j3a(c8n);
	rect.u2s(c8n);
	this.x2h.m2b = c8n * 0.02;
  if (this.x2h.m2b < l8k)
  {
    this.x2h.m2b = l8k;
  }
	c8n = this.x2h.q8j(rect);
 	this.m6m.q8i(this.x2h);
	this.m6m.y8o();
}

h2l()
{
	this.m6m.h2l();
	this.m6m.y8o();
}

f1c()
{
	this.x2h.c5v = !this.x2h.c5v;
	this.m6m.q8i(this.x2h);
	this.m6m.y8o();
}

e7g()
{
	this.m6m.q8i(this.x2h);
	this.m6m.y8o();
}

u5m(a1m)
{
	this.s4h = a1m.t1j.o0o();
	this.m6m.c1i(this.s4h);
	this.m6m.z1f(a1m.e6v);
	this.m6m.h4h(a1m.i3x);
  
 	this.m6m.b5v(a1m.f6n);
	this.m6m.y8o();

	if (this.e6y)
	{
		o9x('playBackward' + this.y2n, a1m.r6v);
		o9x('goToBegin'+ this.y2n, a1m.r6v);
		o9x('playForward' + this.y2n, a1m.x9d);
		o9x('goToEnd' + this.y2n, a1m.x9d);
		o9x('autoPlay' + this.y2n, a1m.x9d);
	}
	else
	{
		o9x('goToBegin' + this.y2n, a1m.r6v);
		o9x('goToEnd' + this.y2n, a1m.x9d);
	}
}

c1i(j3g)
{
	let a1m = new e1x();
	a1m.t1j = j3g.o0o();
	this.c1i(a1m);
}

q8i(x2h)
{
  this.x2h = x2h.o0o();
}

}

const h2g =
{
	x7f       : 0,
	z0p        : 1,
};

class w3p
{

constructor(y2n)
{
	this.y2n = y2n;
 	this.l4n = new e5q();
 	this.q4k = new u9p(y2n);
  this.q4k.l4r = false;
  this.q4k.i8l = true;
  this.q4k.f8o = true;
  this.q4k.r5n = false;
  this.l5h = null;
  this.g0w = new g0e();
  this.a1v = new e5o();
 	this.b9l = new n1y();
	this.t4w = new z4m();
	this.k2o = new z4m();
	this.p2y = 0;
	this.h3c = [];
	this.l2o = false;
 	this.h5r = false;
 	this.o1x = false;
 	this.b9h = false;
  this.n7n = h2g.x7f;
  this.b8r = document.getElementById("\x74\x68\x72\x65\x61\x74"+this.y2n);
 	this.b8r.onclick = this.a7n.bind(this);
  this.k1e();
  this.c2e = document.getElementById("\x65\x6e\x67\x69\x6e\x65\x53\x65\x74\x74\x69\x6e\x67\x73"+this.y2n);
}

z4y(q4c)
{
  this.l5h = new j0c();
  this.l5h.z4w = (event) => {
    this.t5q(event);
  };
  this.l5h.p3a(q4c);
  this.l5h.o5k();
}

c8k()
{
	this.g0w = this.l5h.q4c();
	this.b9l = new n1y();
  /*
	showName();
	MovePanel->Caption = "";
	ScorePanel->Caption = "";
	DepthPanel->Caption = "";
	NodesPanel->Caption = "";
  */
	this.l4n.c1i(this.b9l.j3g,
    this.b9l.d4k);
	this.x5k();
 	this.l4s();
  this.k1e();
}

c1i(x1z, o7x, l3y, e7m)
{
	this.k2o = x1z.o0o();
	this.p2y = o7x;
	this.h3c = l3y.slice(); 
	this.l2o = e7m;
	this.l4s();
}

l4s()
{
	if (!this.l5h) return;
	if (this.h5r) return;

	if (this.o1x)
	{
		let l3y = new e5q();
		l3y.c1i(this.k2o, this.p2y);
		let y5m = l3y.y5m();
		l3y.t3s(y5m, this.h3c);
		let h8h = l3y.s2i();
		let d7m = l3y.k5r(l3y.q7d());
		if (h8h.p0w())
		{
			d7m++;
		}
		let i2m = h8h;
		i2m.o7l();
		this.a1v = new e5o();
    this.a1v.l3y.c1i(i2m, d7m);
		this.t4w = i2m;
  }
  else
  {
 		this.a1v.l3y.c1i(this.k2o, this.p2y);
		let y5m = this.a1v.l3y.y5m();
		this.a1v.l3y.t3s(y5m, this.h3c);
		this.t4w = this.a1v.l3y.s2i();
  }
  if (o4l === 10) 
  {
    this.a1v.y3z = s5b;
  }
  else
  {
    this.a1v.y3z = x3e(o4l);
  }

  this.l5h.n4a();
	this.b9h = false;
  let l3y = a0g(this.t4w);
  if (l3y.length == 0)
  {
  	this.l5h.k1n(this.a1v);
		return;
  }
  else
  {
  	this.l5h.k1n(this.a1v);
		return;
  }
}

v8w()
{
	this.b9l = this.l5h.e6h();
  /*
	showScore();
	showDepth();
	showNodes();
	showCM();
  */
	this.l4n.c1i(this.b9l.j3g,
    this.b9l.d4k);
	this.x5k();
}

p0b()
{
	this.b9l = this.l5h.e6h();
	
}


i4g()
{
	this.b9l = this.l5h.e6h();
  
	
	
	
  
	this.x5k();
}

x5k()
{
	let x0u = this.b9l.x8y.l3y.o0o();
  x0u.c1i(this.b9l.j3g, this.b9l.d4k);

  if (this.b9l.p2m)
  {
    for (let q1p of this.b9l.x7m)
    {
      let l3y = q1p.l3y.h1j();
      let p2d = x0u.y5m();
      let d4k = 0;
      for (let i4x of l3y)
      {
        if (d4k == 0)
        {
					let w1q = q1p.b8l() +
						"\x2f" + q1p.t7s;
					i4x.e5y(w1q);
        }
        x0u.v9t(p2d, i4x);
        d4k++;
      }
    }
  }
  else
  {
    if (this.b9l.x7m.length !== 0)
    {
      let q1p = this.b9l.x7m[this.b9l.x7m.length - 1];
      let l3y = q1p.l3y.h1j();
      let p2d = x0u.y5m();
      let d4k = 0;
      for (let i4x of l3y)
      {
				if (d4k == 0)
				{
					let w1q = q1p.b8l() +
						"\x2f" + q1p.t7s;
					i4x.e5y(w1q);
				}
        x0u.v9t(p2d, i4x);
        d4k++;
      }
    }
  }
  this.l4n = x0u.o0o();
  this.q4k.p2m = this.b9l.p2m;
  this.q4k.u6i(this.l4n, 0);
}

t5q(event)
{
  const {cmd, data} = event;
  if (cmd === 'ready')
  {
    this.c8k()
  }
  else if (cmd === 'go')
  {
    this.v8w()
  }
  else if (cmd === 'cm')
  {
    this.p0b();
  }
  else if (cmd === 'pv')
  {
    this.i4g();
  }
}

s7m()
{
	if (this.l5h)
	{
    this.l5h.z4w = null;
    this.l5h.g0r();
		this.l5h = null;
		this.b9l = new n1y();
  	this.l4n.c1i(this.b9l.j3g,
      this.b9l.d4k);
  	this.x5k();
    this.o1x = false;
    this.k1e();
  }
}

h9g()
{
	return (this.l5h != null);
}

u2b()
{
  return (this.engineMode === h2g.z0p);
}

a7n()
{
	if (this.l5h && !this.u2b())
	{
		this.o1x = !this.o1x;
		this.k1e();
		this.l4s();
	}
}

k1e()
{
	if (this.l5h)
	{
    this.b8r.disabled = false;
    this.b8r.classList.remove('threat-inactive');
		if (this.o1x)
		{
      this.b8r.classList.remove('threat-off');
      this.b8r.classList.add('threat-on');
		}
		else
		{
      this.b8r.classList.remove('threat-on');
      this.b8r.classList.add('threat-off');
		}
	}
	else
	{
    this.b8r.disabled = true;
    this.b8r.classList.add('threat-inactive');
    this.b8r.classList.remove('threat-on');
    this.b8r.classList.add('threat-off');
	}
}

}

class r3w
{

constructor(y2n)
{
	this.y2n = y2n;
  this.k3x = null;
	this.p3r = new m3k();
}

e6j(p3r)
{
	this.p3r = p3r.o0o();
	this.j0x();
}

j0x()
{
	let u7w = this.p3r.z0u.n9f.k7f();
	let r3s = this.p3r.u6y.n9f.k7f();

	let r2w = '';
	if (u7w.length && this.p3r.z0u.n8g)
	{
		r2w = this.p3r.z0u.n8g.toString();
	}
	let e4e = '';
	if (u7w.length && this.p3r.z0u.g9g.length)
	{
		e4e = this.p3r.z0u.g9g.toString();
	}

	let n6a = '';
	if (r3s.length && this.p3r.u6y.n8g)
	{
		n6a = this.p3r.u6y.n8g.toString();
	}
	let x9n = '';
	if (r3s.length && this.p3r.u6y.g9g.length)
	{
		x9n = this.p3r.u6y.g9g.toString();
	}

	let v6z = this.p3r.z0u.n9f.k9g(1);
	let n0j = this.p3r.u6y.n9f.k9g(1);

	let x6m = '';
	let z8a = '';
	if (!this.p3r.z0u.t8b.k2v() &&
		!this.p3r.u6y.t8b.k2v())
	{
		x6m = this.p3r.z0u.t8b.v2k();
		z8a = this.p3r.u6y.t8b.v2k();
	}

	let e6z = i8u(this.p3r.n4t);
	let l6i = this.p3r.l6i.g9g;
	if (!this.p3r.l6i.g5c.k2v())
	{
		l6i += "\x20";
		l6i += this.p3r.l6i.g5c.o6x.toString();
	}
	let k1w = '';
	if (!this.p3r.u9c.k2v())
	{
		k1w = this.p3r.u9c.toString("\x64\x64\x2d\x6d\x6d\x2d\x79\x79\x79\x79");
	}
	let p0d = '';
	if (!this.p3r.p0d.k2v())
	{
		p0d = '</br>' + '[' + this.p3r.p0d.w3g + ']';
	}

	let t1z = document.getElementById("\x6e\x6f\x74\x61\x2d\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72"+this.y2n);
	let q2u = t1z.clientHeight;
	let j4k = 200;

  let index = this.y2n;
  let a9d = this.p3r.l6i.a9d;

	let b8p = true;
	if (this.k3x.clientWidth >= 374 && q2u >= j4k)
	{
    let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable scroll\">";
    s +=      "\x3c\x74\x72\x3e";
    s +=        "<td class=\"playerPortrait\" colspan=\"3\" rowspan=\"2\">";
    
    s += 				"\x3c\x2f\x74\x64\x3e";
		s +=        "<td class=\"playerWhite\" colspan=\"8\">";
    s +=          "<span class=\"player\">" + u7w + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s += 					"<span class=\"rating\">" + r2w + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "\x3c\x62\x72\x3e";
		s += 				  "<span class=\"team\">" + x6m + "\x3c\x2f\x73\x70\x61\x6e\x3e";
		s +=        "\x3c\x2f\x74\x64\x3e";
    s += 		  	"<td class=\"result\" colspan=\"2\">";
    s +=          "\x3c\x73\x70\x61\x6e\x3e" + e6z + "\x3c\x2f\x73\x70\x61\x6e\x3e";
		s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"playerBlack\" colspan=\"8\">";
    s +=          "<span class=\"player\">" + r3s + "\x3c\x2f\x73\x70\x61\x6e\x3e";
		s +=          "<span class=\"rating\">" + n6a + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "\x3c\x62\x72\x3e";
    s +=          "<span class=\"team\">" + z8a + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
		s +=        "<td class=\"playerPortrait\" colspan=\"3\" rowspan=\"2\">";
    
		s +=        "\x3c\x2f\x74\x64\x3e";
    s +=      "\x3c\x2f\x74\x72\x3e";
    s +=      "\x3c\x74\x72\x3e";
		s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
		s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
		s +=          "\x3c\x73\x70\x61\x6e\x3e" + e4e + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"tournamentData\" colspan=\"12\">";
    s +=          "<span class=\"tournamentTitle\">" + l6i + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "\x3c\x62\x72\x3e";
    s +=          "<span class=\"tournamentPlace\">" + a9d + "\x3c\x2f\x73\x70\x61\x6e\x3e";
		s +=          "<span class=\"gameDate\">" + k1w + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "<span class=\"annotator\">" + p0d + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
		s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "\x3c\x73\x70\x61\x6e\x3e" + x9n + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
		s +=        "<td class=\"flagBlack\" colspan=\"2\">";
		s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
		s +=        "\x3c\x2f\x74\x64\x3e";
		s +=      "\x3c\x2f\x74\x72\x3e";
		s +=    "\x3c\x2f\x74\x61\x62\x6c\x65\x3e";
		this.k3x.innerHTML = s;

		
		
		let s2u = Math.trunc(this.k3x.clientWidth / 10);
		if (s2u < 24) s2u = 24;
    
		
		
		
		
		
		
	}
	else if (this.k3x.clientWidth >= 300 && q2u >= j4k)
	{
		
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "\x3c\x74\x72\x3e";
    s +=        "<td class=\"playerWhite\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + v6z + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "<span class=\"rating\">" + r2w + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "\x3c\x62\x72\x3e";
		s += 				  "<span class=\"team\">" + x6m + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"result\" colspan=\"2\">";
    s +=          "\x3c\x73\x70\x61\x6e\x3e" + e6z + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"playerBlack\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + n0j + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "<span class=\"rating\">" + n6a + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "\x3c\x62\x72\x3e";
    s +=          "<span class=\"team\">" + z8a + "\x3c\x2f\x73\x70\x61\x6e\x3e";
		s +=        "\x3c\x2f\x74\x64\x3e";
    s +=      "\x3c\x2f\x74\x72\x3e";
    s +=      "\x3c\x74\x72\x3e";
    s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "\x3c\x73\x70\x61\x6e\x3e" + e4e + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
		s +=        "<td class=\"tournamentData\" colspan=\"14\">";
    s +=          "<span class=\"tournamentTitle\">" + l6i + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "<span class=\"tournamentPlace\">" + "\x3c\x2f\x62\x72\x3e" + a9d + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "<span class=\"gameDate\">" + k1w + "\x3c\x2f\x73\x70\x61\x6e\x3e";
		s +=          "<span class=\"annotator\">" + p0d + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "\x3c\x73\x70\x61\x6e\x3e" + x9n + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"flagBlack\" colspan=\"2\">";
    s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=      "\x3c\x2f\x74\x72\x3e";
    s +=    "\x3c\x2f\x74\x61\x62\x6c\x65\x3e";
		this.k3x.innerHTML = s;
	}
	else if (this.k3x.clientWidth >= 280)
	{
		
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "\x3c\x74\x72\x3e";
    s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"playerWhite\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + v6z + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "<span class=\"rating\">" + r2w + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"result\" colspan=\"2\">";
    s +=          "\x3c\x73\x70\x61\x6e\x3e" + e6z + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"playerBlack\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + n0j + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "<span class=\"rating\">" + n6a + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"flagBlack\" colspan=\"2\">";
    s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=      "\x3c\x2f\x74\x72\x3e";
    s +=    "\x3c\x2f\x74\x61\x62\x6c\x65\x3e";
		this.k3x.innerHTML = s;
	}
	else
	{
		
		b8p = false; 
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "\x3c\x74\x72\x3e";
    s +=        "<td class=\"playerWhite\" width=\"45%\">";
    s +=          "<span class=\"player\">" + v6z + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"result\" width=\"10%\">";
    s +=          "\x3c\x73\x70\x61\x6e\x3e" + e6z + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"playerBlack\" width=\"45%\">";
    s +=          "<span class=\"player\">" + n0j + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=      "\x3c\x2f\x74\x72\x3e";
    s +=    "\x3c\x2f\x74\x61\x62\x6c\x65\x3e";
		this.k3x.innerHTML = s;
	}

	if (b8p)
	{
		let m6c = 16;
		if (this.k3x.clientWidth < 400)
		{
			m6c = 16;
		}
		else if (this.k3x.clientWidth < 500)
		{
			m6c = 24;
		}
		else
		{
			m6c = 32;
		}
    if (this.p3r.z0u.v0e != y2m.d1e)
    {
  		let v2w = document.getElementById("\x77\x68\x69\x74\x65\x50\x6c\x61\x79\x65\x72\x4e\x61\x74\x69\x6f\x6e"+this.y2n);
	  	v2w.src = "\x69\x6d\x61\x67\x65\x73\x2f\x66\x6c\x61\x67\x73\x2f" + m6c.toString() +"\x2f" + a0b(this.p3r.z0u.v0e) + "\x2e\x70\x6e\x67";
		  v2w.height = m6c;
  		v2w.width = m6c;
    }
    if (this.p3r.u6y.v0e != y2m.d1e)
    {
  		let n4d = document.getElementById("\x62\x6c\x61\x63\x6b\x50\x6c\x61\x79\x65\x72\x4e\x61\x74\x69\x6f\x6e"+this.y2n);
	  	n4d.src = "\x69\x6d\x61\x67\x65\x73\x2f\x66\x6c\x61\x67\x73\x2f" + m6c.toString() + "\x2f" + a0b(this.p3r.u6y.v0e) + "\x2e\x70\x6e\x67";
		  n4d.height = m6c;
  		n4d.width = m6c;
    }
	}
}

}

class j0n
{

constructor(y2n)
{
	this.y2n = y2n;
	this.p3r = new m3k();
	this.d5n = new b2l(y2n);
	this.j7i = new l4v(y2n);
	this.j7i.q4k.l3w = this; 
	this.o1a = new r7g();
  this.l9f = new w3p(y2n);
}

h2l()
{
	this.d5n.h2l();
}

f1c()
{
	this.d5n.f1c();
}

e7g()
{
	this.d5n.e7g();
	this.j7i.q4k.e7g();
}

g4e(w2r, j5a, d0w, x1i)
{
	this.s3z(x1i, d0w);
}

s3z(x1i, d0w)
{
	this.p3r = x1i.g0g.o0o();
	this.e6j();
	this.j7i.q4k.u6i(x1i.l3y, d0w);
}

e6j()
{
	this.j7i.t2u.e6j(this.p3r);
}

r5r(a1m)
{
	this.d5n.u5m(a1m);
  this.w3s();
}

u0k()
{
	if (this.o1a.c4n())
	{
		this.o1a.t8m();
    this.v9u();
	}
	else
	{
		if (!this.j7i.q4k.m9k())
		{
      
			this.o1a.l3w = this; 
			this.o1a.v2x();
			this.j7i.q4k.y1r();
		}
	}
}

a3y(q4c)
{
	this.l9f.z4y(q4c);
}

r6e()
{
	this.l9f.s7m();
}

x8q()
{
	return this.l9f.h9g();
}

w3s()
{
  if (!this.o1a.c4n())
  {
    this.v9u();
  }
}

v9u()
{
	this.l9f.c1i(
		this.j7i.q4k.x1z(),
		this.j7i.q4k.o7x(),
		this.j7i.q4k.l3c(),
		this.j7i.q4k.e7m());
}

}

const t9u =
{
	a9q : 0,
	d4r : 1,
	g6v : 2,
	s6h : 3,
	z7x : 4,
 	n5a : 5,
	n4t : 6,
	l3y : 7,
	o6x : 8,
	event : 9,
	a8d : 10
};

const j5w =
{
	d1e : 0,
	r6n : 1,
	j1c : 2
};

let g6w = 0;
let r0d = 0;
let q6p = 0;
let y2s = 0;
let p9i = 0;
let d0h = 0;
let y9a = 0;
let o9z = 0;

let j1c = false;

function a7h(f, s)
{
	let z2m = f.g0g.z0u.n9f.w3g();
	let t4o = s.g0g.z0u.n9f.w3g();
	if (z2m < t4o)
	{
		return j1c ? -1 : 1;
	}
	if (z2m > t4o)
	{
		return j1c ? 1 : -1;
	}
	z2m = f.g0g.u6y.n9f.w3g();
	t4o = s.g0g.u6y.n9f.w3g();
	if (z2m < t4o)
	{
		return -1;
	}
	if (z2m > t4o)
	{
		return 1;
	}
	return 0;
}

function w8u(f, s)
{
	let z2m = f.g0g.u6y.n9f.w3g();
	let t4o = s.g0g.u6y.n9f.w3g();
	if (z2m < t4o)
	{
		return j1c ? -1 : 1;
	}
	if (z2m > t4o)
	{
		return j1c ? 1 : -1;
	}
	z2m = f.g0g.z0u.n9f.w3g();
	t4o = s.g0g.z0u.n9f.w3g();
	if (z2m < t4o)
	{
		return -1;
	}
	if (z2m > t4o)
	{
		return 1;
	}
	return 0;
}

function y1i(f, s)
{
	let y0l = f.g0g.z0u.n8g - s.g0g.z0u.n8g;
	if (j1c)
	{
		y0l = -y0l;
	}
	if (y0l < 0) return -1;
	if (y0l > 0) return 1;
	y0l = f.g0g.u6y.n8g - s.g0g.u6y.n8g;
	if (j1c)
	{
		y0l = -y0l;
	}
	if (y0l < 0) return -1;
	if (y0l > 0) return 1;
	return a7h(f, s);
}

function v8u(f, s)
{
	let y0l = f.g0g.u6y.n8g - s.g0g.u6y.n8g;
	if (j1c)
	{
		y0l = -y0l;
	}
	if (y0l < 0) return -1;
	if (y0l > 0) return 1;
	y0l = f.g0g.z0u.n8g - s.g0g.z0u.n8g;
	if (j1c)
	{
		y0l = -y0l;
	}
	if (y0l < 0) return -1;
	if (y0l > 0) return 1;
	return a7h(f, s);
}

function f2g(f, s)
{
	let y0l = f.g0g.z0u.v0e - s.g0g.z0u.v0e;
	if (j1c)
	{
		y0l = -y0l;
	}
	if (y0l < 0) return -1;
	if (y0l > 0) return 1;
	y0l = f.g0g.u6y.v0e - s.g0g.u6y.v0e;
	if (j1c)
	{
		y0l = -y0l;
	}
	if (y0l < 0) return -1;
	if (y0l > 0) return 1;
	return a7h(f, s);
}

function k9v(f, s)
{
	let y0l = f.g0g.u6y.v0e - s.g0g.u6y.v0e;
	if (j1c)
	{
		y0l = -y0l;
	}
	if (y0l < 0) return -1;
	if (y0l > 0) return 1;
	y0l = f.g0g.z0u.v0e - s.g0g.z0u.v0e;
	if (j1c)
	{
		y0l = -y0l;
	}
	if (y0l < 0) return -1;
	if (y0l > 0) return 1;
	return a7h(f, s);
}

function v0d(f, s)
{
	let y0l = f.g0g.n4t - s.g0g.n4t;
	if (j1c)
	{
		y0l = -y0l;
	}
	if (y0l < 0) return -1;
	if (y0l > 0) return 1;
	return a7h(f, s);
}

function o5y(f, s)
{
	let y0l = s.g0g.u9c.u9c() - f.g0g.u9c.u9c();
	if (j1c)
	{
		y0l = -y0l;
	}
	if (y0l < 0) return -1;
	if (y0l > 0) return 1;
	return a7h(f, s);
}

function s7x(f, s)
{
	let a0h = f.g0g.l6i.g9g;
	let c8o = s.g0g.l6i.g9g;
	if (a0h < c8o)
	{
		return j1c ? -1 : 1;
	}
	if (a0h > c8o)
	{
		return j1c ? 1 : -1;
	}
	let y0l = f.g0g.l6i.g5c.u9c() - s.g0g.l6i.g5c.u9c();
	if (j1c)
	{
		y0l = -y0l;
	}
	if (y0l < 0) return -1;
	if (y0l > 0) return 1;
	y0l = f.g0g.a8d - s.g0g.a8d;
	if (y0l < 0) return -1;
	if (y0l > 0) return 1;
	y0l = f.g0g.b6m - s.g0g.b6m;
	if (y0l < 0) return -1;
	if (y0l > 0) return 1;
	return a7h(f, s);
}

function k6i(f, s)
{
	let y0l = s.g0g.a8d - f.g0g.a8d;
	if (j1c)
	{
		y0l = -y0l;
	}
	if (y0l < 0) return -1;
	if (y0l > 0) return 1;
	y0l = s.g0g.b6m - f.g0g.b6m;
	if (j1c)
	{
		y0l = -y0l;
	}
	if (y0l < 0) return -1;
	if (y0l > 0) return 1;
	return a7h(f, s);
}

function p5j(f, s)
{
	let y0l = s.d7r - f.d7r;
	if (j1c)
	{
		y0l = -y0l;
	}
	if (y0l < 0) return -1;
	if (y0l > 0) return 1;
	return a7h(f, s);
}

class b2a
{

constructor(y2n)
{
	this.y2n = y2n;
	this.e5b = [];
	this.p5a = null;
	this.l4z = null;
	this.j5b = null;
	this.y4a = [];
	this.e9x = [];
	this.t4r = -1;
	this.d7h = j5w.d1e;
	this.f9a = 0;
  this.n2g = null;
}

j4a()
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
	this.j5b.innerHTML = s;
	this.y4a = this.j5b.getElementsByTagName("\x54\x48");
	let y2n = this.y2n;

 	this.y4a[t9u.a9q].onclick = this.q0u.bind(this);
	this.y4a[t9u.d4r].onclick = this.r6f.bind(this);
  this.y4a[t9u.g6v].onclick = this.f6o.bind(this);
	this.y4a[t9u.s6h].onclick = this.q0u.bind(this);
	this.y4a[t9u.z7x].onclick = this.d9i.bind(this);
  this.y4a[t9u.n5a].onclick = this.p6n.bind(this);
	this.y4a[t9u.n4t].onclick = this.f7y.bind(this);
	this.y4a[t9u.l3y].onclick = this.y0m.bind(this);
	this.y4a[t9u.o6x].onclick = this.e3m.bind(this);
	this.y4a[t9u.event].onclick = this.k5l.bind(this);
	this.y4a[t9u.a8d].onclick = this.s4t.bind(this);
}

h7l(e5b)
{
	this.e5b = e5b;
	this.l4h();
}

d6i()
{
	this.q7a("\x67\x72\x69\x64\x2d\x70\x6c\x61\x79\x65\x72");
	this.q7a("\x67\x72\x69\x64\x2d\x72\x61\x74\x69\x6e\x67");
 	this.q7a("\x67\x72\x69\x64\x2d\x66\x6c\x61\x67");
	this.q7a("\x67\x72\x69\x64\x2d\x72\x65\x73\x75\x6c\x74");
	this.q7a("\x67\x72\x69\x64\x2d\x6d\x6f\x76\x65\x73");
	this.q7a("\x67\x72\x69\x64\x2d\x79\x65\x61\x72");
	this.q7a("\x67\x72\x69\x64\x2d\x65\x76\x65\x6e\x74");
	this.q7a("\x67\x72\x69\x64\x2d\x72\x6f\x75\x6e\x64");
}

h0p()
{
	this.u7k("\x67\x72\x69\x64\x2d\x70\x6c\x61\x79\x65\x72", g6w);
	this.u7k("\x67\x72\x69\x64\x2d\x72\x61\x74\x69\x6e\x67", r0d);
 	this.u7k("\x67\x72\x69\x64\x2d\x66\x6c\x61\x67", o9z);
	this.u7k("\x67\x72\x69\x64\x2d\x72\x65\x73\x75\x6c\x74", q6p);
	this.u7k("\x67\x72\x69\x64\x2d\x6d\x6f\x76\x65\x73", y2s);
	this.u7k("\x67\x72\x69\x64\x2d\x79\x65\x61\x72", p9i);
	this.u7k("\x67\x72\x69\x64\x2d\x65\x76\x65\x6e\x74", d0h);
	this.u7k("\x67\x72\x69\x64\x2d\x72\x6f\x75\x6e\x64", y9a);

}

q7a(r3m)
{
	let q5a = this.p5a.getElementsByClassName(r3m);
	for (let i = 0; i < q5a.length; i++) {
		q5a[i].style.display = "\x6e\x6f\x6e\x65";
	}
}

l2z(r3m)
{
	let q5a = this.p5a.getElementsByClassName(r3m);
	for (let i = 0; i < q5a.length; i++) {
		q5a[i].style.display = "\x74\x61\x62\x6c\x65\x2d\x63\x65\x6c\x6c";
	}
}

u7k(r3m, width)
{
	let q5a = this.p5a.getElementsByClassName(r3m);
	for (let i = 0; i < q5a.length; i++) {
		q5a[i].style.width = (width) + "\x70\x78";
	}
}

l4h()
{
	this.f9a = this.p5a.clientWidth;
	this.f9a -= 17;
	if (this.f9a < 100)
	{
		this.f9a = 100;
	}
	g6w = 200;
	r0d = 52;
	q6p = 34;
	y2s = 50;
	p9i = 52;
	d0h = 200;
	y9a = 50;
  o9z = 30;

 
	let v5r = document.getElementsByClassName("\x74\x64\x72\x65\x70\x6c\x61\x79")[0];
	if (v5r.clientWidth <= l6q)
	{
		let s7u = 0.7;
		g6w *= s7u;
		r0d *= s7u;
		q6p *= s7u;
		y2s *= s7u;
		p9i *= s7u;
		d0h *= s7u;
		y9a *= s7u;
	}
	this.l2r();
}

p2k()
{
	this.d6i();
	this.h0p();

  let g5g = 2.8;
  let p9b = 2.8;
  let j0l = 17;
	if (this.f9a <= 400)
	{
		this.l2z("\x67\x72\x69\x64\x2d\x70\x6c\x61\x79\x65\x72");
		this.l2z("\x67\x72\x69\x64\x2d\x72\x65\x73\x75\x6c\x74");
    this.l2z("\x67\x72\x69\x64\x2d\x79\x65\x61\x72");
		this.l2z("\x67\x72\x69\x64\x2d\x65\x76\x65\x6e\x74");
    let h6o = 5 * (g5g + p9b);
		let p8a = q6p + p9i;
		let s5a = Math.trunc((this.f9a - p8a - h6o - j0l) / 3);
		this.u7k("\x67\x72\x69\x64\x2d\x70\x6c\x61\x79\x65\x72", s5a);
		this.u7k("\x67\x72\x69\x64\x2d\x65\x76\x65\x6e\x74", s5a);
	}
	else if (this.f9a <= 580)
	{
		this.l2z("\x67\x72\x69\x64\x2d\x70\x6c\x61\x79\x65\x72");
		this.l2z("\x67\x72\x69\x64\x2d\x72\x61\x74\x69\x6e\x67");
		this.l2z("\x67\x72\x69\x64\x2d\x72\x65\x73\x75\x6c\x74");
		this.l2z("\x67\x72\x69\x64\x2d\x79\x65\x61\x72");
		this.l2z("\x67\x72\x69\x64\x2d\x65\x76\x65\x6e\x74");
    let h6o = 7 * (g5g + p9b);
		let p8a = 2 * r0d + q6p + p9i;
		let s5a = Math.trunc((this.f9a - p8a - h6o - j0l) / 3);
		this.u7k("\x67\x72\x69\x64\x2d\x70\x6c\x61\x79\x65\x72", s5a);
		this.u7k("\x67\x72\x69\x64\x2d\x65\x76\x65\x6e\x74", s5a);
	}
	else
	{
		this.l2z("\x67\x72\x69\x64\x2d\x70\x6c\x61\x79\x65\x72");
		this.l2z("\x67\x72\x69\x64\x2d\x72\x61\x74\x69\x6e\x67");
    this.l2z("\x67\x72\x69\x64\x2d\x66\x6c\x61\x67");
		this.l2z("\x67\x72\x69\x64\x2d\x72\x65\x73\x75\x6c\x74");
		this.l2z("\x67\x72\x69\x64\x2d\x6d\x6f\x76\x65\x73");
		this.l2z("\x67\x72\x69\x64\x2d\x79\x65\x61\x72");
		this.l2z("\x67\x72\x69\x64\x2d\x65\x76\x65\x6e\x74");
		this.l2z("\x67\x72\x69\x64\x2d\x72\x6f\x75\x6e\x64");
    let h6o = 11 * (g5g + p9b);
		let p8a = 2 * r0d + 2 * o9z + q6p + y2s + p9i + y9a;
		let s5a = Math.trunc((this.f9a - p8a - h6o - j0l) / 3);
		this.u7k("\x67\x72\x69\x64\x2d\x70\x6c\x61\x79\x65\x72", s5a);
		this.u7k("\x67\x72\x69\x64\x2d\x65\x76\x65\x6e\x74", s5a);
	}
}

l2r()
{
	let m6c = 16;
	let s = '';
  s += "<tbody id=\"gameList" + this.y2n + "\">"; 
	for (const x1i of this.e5b)
	{
		s += "<tr class=\"grid-row\">";
		s += "<td class=\"grid-cell grid-player\">";
		s += x1i.g0g.z0u.n9f.c9p();
		s += "\x3c\x2f\x74\x64\x3e";
		s += "<td class=\"grid-cell grid-rating\">";
		if (x1i.g0g.z0u.n8g)
		{
			s += x1i.g0g.z0u.n8g;
		}
		s += "\x3c\x2f\x74\x64\x3e";
   	s += "<td class=\"grid-cell grid-flag\">";
		if (x1i.g0g.z0u.v0e != y2m.d1e)
		{
      let t1c = "\x69\x6d\x61\x67\x65\x73\x2f\x66\x6c\x61\x67\x73\x2f" + m6c.toString() + "\x2f" + a0b(x1i.g0g.z0u.v0e) + "\x2e\x70\x6e\x67";
  		s += "\x3c\x73\x70\x61\x6e\x3e";
      s += "<img src=\"";
      s += t1c;
      s += "\" height=\"16\"";
      s += "\x3e";
   		s += "\x3c\x2f\x73\x70\x61\x6e\x3e";
		}
		s += "\x3c\x2f\x74\x64\x3e";
		s += "<td class=\"grid-cell grid-player\">";
		s += x1i.g0g.u6y.n9f.c9p();
		s += "\x3c\x2f\x74\x64\x3e";
		s += "<td class=\"grid-cell grid-rating\">";
		if (x1i.g0g.u6y.n8g)
		{
			s += x1i.g0g.u6y.n8g;
		}
		s += "\x3c\x2f\x74\x64\x3e";
		s += "<td class=\"grid-cell grid-flag\">";
		if (x1i.g0g.u6y.v0e != y2m.d1e)
		{
      let t1c = "\x69\x6d\x61\x67\x65\x73\x2f\x66\x6c\x61\x67\x73\x2f" + m6c.toString() + "\x2f" + a0b(x1i.g0g.u6y.v0e) + "\x2e\x70\x6e\x67";
  		s += "\x3c\x73\x70\x61\x6e\x3e";
      s += "<img src=\"";
      s += t1c;
      s += "\" height=\"16\"";
      s += "\x3e";
   		s += "\x3c\x2f\x73\x70\x61\x6e\x3e";
		}
		s += "\x3c\x2f\x74\x64\x3e";
		s += "<td class=\"grid-cell grid-result\">";
		s += i8u(x1i.g0g.n4t);
		s += "\x3c\x2f\x74\x64\x3e";
		s += "<td class=\"grid-cell grid-moves\">";
		s += x1i.d7r;
		s += "\x3c\x2f\x74\x64\x3e";
		s += "<td class=\"grid-cell grid-year\">";
		s += x1i.g0g.u9c.toString("\x79\x79\x79\x79");
		s += "\x3c\x2f\x74\x64\x3e";
		s += "<td class=\"grid-cell grid-event\">";
		s += x1i.g0g.l6i.g9g;
		s += "\x3c\x2f\x74\x64\x3e";
		s += "<td class=\"grid-cell grid-round\">";
		s += x1i.g0g.c1b();
		s += "\x3c\x2f\x74\x64\x3e";
		s += "\x3c\x2f\x74\x72\x3e";
	}
  s += "\x3c\x2f\x74\x62\x6f\x64\x79\x3e";
	this.l4z.innerHTML = s;

  let r8u = document.getElementById('gameList' + this.y2n);
  r8u.addEventListener('click', this.h1t.bind(this));

	this.p2k();
}

b1f(r5v)
{
	if (r5v != this.t4r)
	{
		this.t4r = r5v;
		this.d7h = j5w.r6n;
	}
	else
	{
		if (this.d7h == j5w.d1e)
		{
			this.d7h = j5w.r6n;
		}
		else if (this.d7h == j5w.r6n)
		{
			this.d7h = j5w.j1c;
		}
		else if (this.d7h == j5w.j1c)
		{
			this.d7h = j5w.r6n;
		}
	}
	j1c = (this.d7h == j5w.j1c);

	for (const w5k of this.y4a)
	{
		let s = w5k.c4m;
		let a4f = s.replace("\x20\x67\x72\x69\x64\x2d\x68\x65\x61\x64\x65\x72\x2d\x73\x6f\x72\x74\x20\x67\x72\x69\x64\x2d\x68\x65\x61\x64\x65\x72\x2d\x73\x6f\x72\x74\x2d\x64\x65\x73\x63", "");
		let x6d = a4f.replace("\x20\x67\x72\x69\x64\x2d\x68\x65\x61\x64\x65\x72\x2d\x73\x6f\x72\x74\x20\x67\x72\x69\x64\x2d\x68\x65\x61\x64\x65\x72\x2d\x73\x6f\x72\x74\x2d\x61\x73\x63", "");
		w5k.c4m = x6d;
	}
	let g5p = this.y4a[this.t4r];
	if (this.d7h == j5w.j1c)
	{
		g5p.c4m = g5p.c4m + "\x20\x67\x72\x69\x64\x2d\x68\x65\x61\x64\x65\x72\x2d\x73\x6f\x72\x74\x20\x67\x72\x69\x64\x2d\x68\x65\x61\x64\x65\x72\x2d\x73\x6f\x72\x74\x2d\x64\x65\x73\x63";
	}
	else
	{
		g5p.c4m = g5p.c4m + "\x20\x67\x72\x69\x64\x2d\x68\x65\x61\x64\x65\x72\x2d\x73\x6f\x72\x74\x20\x67\x72\x69\x64\x2d\x68\x65\x61\x64\x65\x72\x2d\x73\x6f\x72\x74\x2d\x61\x73\x63";
	}
}

q0u(event)
{
	this.b1f(t9u.a9q);
	this.e5b.sort(a7h);
	this.l2r();
}

r6f(event)
{
	this.b1f(t9u.d4r);
	this.e5b.sort(y1i);
	this.l2r();
}

f6o(event)
{
	this.b1f(t9u.g6v);
	this.e5b.sort(f2g);
	this.l2r();
}

b3k(event)
{
	this.b1f(t9u.s6h);
	this.e5b.sort(w8u);
	this.l2r();
}

d9i(event)
{
	this.b1f(t9u.z7x);
	this.e5b.sort(v8u);
	this.l2r();
}

p6n(event)
{
	this.b1f(t9u.n5a);
	this.e5b.sort(k9v);
	this.l2r();
}

f7y(event)
{
	this.b1f(t9u.n4t);
	this.e5b.sort(v0d);
	this.l2r();
}

e3m(event)
{
	this.b1f(t9u.o6x);
	this.e5b.sort(o5y);
	this.l2r();
}

k5l(event)
{
	this.b1f(t9u.event);
	this.e5b.sort(s7x);
	this.l2r();
}

s4t(event)
{
	this.b1f(t9u.a8d);
	this.e5b.sort(k6i);
	this.l2r();
}

y0m(event)
{
	this.b1f(t9u.l3y);
	this.e5b.sort(p5j);
	this.l2r();
}

h1t(event)
{
  const clickedRow = event.target.closest('tr');
  if (!clickedRow) return;
  const index = clickedRow.rowIndex;
  if (this.n2g)
  {
    this.n2g(this, index);
  }
}

}

/*
TO DO:
Hover op eval/depth: laat bordje ziet met slotstand.
*/
class s3i
{

constructor()
{
	this.j3g = new z4m();
	this.z1j = new z4m();
	this.c8h = false;
	this.q3k = 0;
	this.g9x = 0;
	this.b5c = [];
}

}

var tooltip = null;

class u9p
{

constructor(y2n)
{
	this.y2n = y2n;
	this.b6o = new e5q();
	this.l3w = null;
	this.a2y = new s3i();
	this.t0s = null;
	this.t1o = [];
	this.c9y = [];
  this.f8a = [];
  this.s5m = [];
	this.y1u = -1;
	this.x2h = new j6p();
  this.m7s = null;
	this.f0i = true;
	this.c0j = false;
	this.x0d = [];
	this.q7n = 0;
  this.l4r = true;
  this.i8l = false;
	this.f8o = false;
	this.r5n = true;
  this.p2m = false;
}

u6i(l3m, d0w)
{
	this.b6o = l3m.o0o();
  this.b6o.i3m();
	this.m7s = this.b6o.v5g(d0w);
	this.g4e();
}

b3a(u6v)
{
  this.q5v(this.f8a[u6v]);
}

g4e()
{
	this.d2t();
	this.y1r();
  this.k6q(this.b6o.a9r(this.m7s));
}

d2t()
{
	let t9z = new c9o();
  t9z.g7b(this.l4r);
	t9z.n5g(this.p2m);
  /*
	t9z.setOneLine(this.p2m);
  */
	t9z.y7q(this.f8o);
	t9z.n4z(this.r5n);
	t9z.q4u(this.b6o);

  this.t0s.innerHTML = t9z.x9e.z6n;
  this.t1o = this.t0s.getElementsByClassName("\x74\x64\x6d\x6f\x76\x65");
  this.c9y = this.t0s.getElementsByClassName("\x74\x64\x63\x6f\x6d\x6d\x65\x6e\x74");

	this.m3d("\x74\x64\x6d\x6f\x76\x65");
	this.m3d("\x74\x64\x63\x6f\x6d\x6d\x65\x6e\x74");
	this.m3d("\x74\x64\x64\x69\x61");
	this.m3d("\x74\x64\x6d\x65\x64\x61\x6c");
  this.m3d("\x74\x64\x63\x6f\x6c\x6f\x72\x73");

  this.c6n("\x74\x64\x6d\x6f\x76\x65");

	this.n8h();
	this.t1a();
}

m3d(l8h)
{
	let y2n = this.y2n;
	let u7h = this.t0s.getElementsByClassName(l8h);
	for (const n9a of u7h)
	{
    let d0w = n9a.getAttribute('movenr');
    n9a.onclick = this.g3w.bind(this, d0w);
	}
}

c6n(l8h)
{
	let y2n = this.y2n;
	let u7h = this.t0s.getElementsByClassName(l8h);
	for (const n9a of u7h)
	{
    let d0w = n9a.getAttribute('movenr');
    n9a.onmouseover = this.v5h.bind(this, d0w);
    n9a.onmouseleave = this.u0y.bind(this, d0w);
	}
}

e7g()
{
	this.n8h();
}

n8h()
{
	let h5w = this.t0s.getElementsByClassName("\x74\x64\x64\x69\x61");
	for (const d6h of h5w)
	{
		let m6m = new s0a();
		m6m.k3d = d6h.getElementsByTagName("\x63\x61\x6e\x76\x61\x73")[0];
		let c8n = this.x2h.f7a();
		m6m.k3d.width = c8n;
		m6m.k3d.height = c8n;
		m6m.q8i(this.x2h);
		let p2d = this.b6o.v5g(d6h.getAttribute('movenr'));
    m6m.c1i(this.b6o.j3g(p2d));
    if (p2d.i4x)
    {
  		m6m.z1f(p2d.i4x.e6v());
	  	m6m.h4h(p2d.i4x.i3x());
    }
    else
    {
   		m6m.z1f(this.b6o.t9y());
	  	m6m.h4h(this.b6o.n4b());
    }
		m6m.y8o();
	}
}

t1a()
{
	let f3t = this.t0s.getElementsByClassName("\x74\x64\x6d\x65\x64\x61\x6c");
	for (const o4s of f3t)
	{
		let k3d = o4s.getElementsByTagName("\x63\x61\x6e\x76\x61\x73")[0];
		k3d.width = 40;
		k3d.height = 16;
		let v5c = k3d.getContext('2d');
		let rect = new k0x();
		rect.j3a(40);
		rect.u2s(16);
		let p2d = this.b6o.v5g(o4s.getAttribute('movenr'));
    if (p2d.i4x)
    {
  		t1a(v5c, rect, p2d.i4x.b0e());
    }
    else
    {
  		t1a(v5c, rect, this.b6o.d6x());
    }
	}
}

y1r()
{
	let a1m = new e1x();
	a1m.x1z = this.b6o.x1z();
  a1m.t1j = this.b6o.j3g(this.m7s);
  if (this.u0g())
  {
    a1m.e6v = this.b6o.t9y();
	  a1m.i3x = this.b6o.n4b();
  }
  else
  {
  	a1m.e6v = this.m7s.i4x.e6v();
	  a1m.i3x = this.m7s.i4x.i3x();
  }
  
	if (this.m9k())
	{
		a1m.j4i = new q5w();
	}
	else
	{
    let t7o = this.m7s.o0o();
		this.b6o.r9f(t7o);
		a1m.j4i = t7o.i4x.z2g().o0o();
	}
  
 	if (!this.u0g())
	{
		a1m.f6n = this.m7s.i4x.z2g();
	}
	a1m.k5r = this.k5r();
	a1m.r6v = this.r6v();
	a1m.x9d = this.x9d();
	a1m.a3k = 0; 
  a1m.r5k = this.b6o.r5k(this.m7s);
	if (this.l3w)
	{
		this.l3w.r5r(a1m);
	}
}

m6o(p7t)
{
	this.m7s = this.b6o.v5g(p7t);
	this.y1r();
}

z5m(b0s)
{
	switch (b0s)
	{
		case c2u:
		case x5i:
		case b8t:
			this.x0b();
			break;
		case r3o:
		case w4t:
		case g6j:
			this.n8y();
			break;
		case v9v:
		case e9u:
		case g5x:
			this.e2e();
			break;
		case e0y:
		case c1t:
		case q7j:
			this.d1y();
			break;
		case x2n:
			break;
		case g1r:
			break;
	}
}

h1q()
{
  if (this.m7s.f7i)
  {
    this.k6q(this.m7s.f7i.p4e);
  }
  else
  {
    this.k6q(0);
  }
}

d2d()
{
	this.h1q();
	this.y1r();
}

r6v()
{
	return !this.u0g();
}

u0g()
{
	return this.b6o.u0g(this.m7s);
}

m9k()
{
	return this.b6o.m9k(this.m7s);
}

k5r()
{
	return this.b6o.k5r(this.m7s);
}

j4i(f0f)
{
	if (this.m9k())
	{
		return null;
	}
	else
	{
    let t7o = this.m7s.o0o();
		this.b6o.z0a(t7o, f0f);
		return t7o.i4x;
	}
}

n8y()
{
	if (this.r6v())
	{
		this.b6o.y9l(this.m7s);
		this.d2d();
	}
}

x9d()
{
	return !this.m9k();
}

x0b()
{
	if (this.x9d())
	{
		this.e5p(0);
	}
}

e5p(index)
{
	let f7z = this.b6o.h8y(this.m7s);
	if (index >= 0 && index < f7z)
	{
		this.b6o.z0a(this.m7s, index);
		this.d2d();
	}
}

d1y()
{
	if (this.x9d())
	{
		this.b6o.v6b(this.m7s);
		this.d2d();
	}
}

e2e()
{
	if (this.r6v())
	{
		this.m7s = this.b6o.y5m();
		this.d2d();
	}
}

t0l()
{
	if (this.f0i)
	{
		this.b4j();
	}
	else
	{
		this.z2z();
	}
}

i1t()
{
	if (this.c0j)
	{
		this.c0j = false;
		this.l3w.d5n.m6m.j2x();
		this.y1r();
	}
	else
	{
		this.y1r();
	}
}


z2z()
{
	if (this.m9k())
	{
		this.y1r();
		return;
	}
  if (chess)
  {
  	this.e5p(0);
    return;
  }

  
 	let i4x = this.j4i(0);
  if (!i4x.g9x())
 	{
  	this.e5p(0);
	  return;
 	}

  
	let y3x = false;
	if (!this.a2y.c8h)
	{
		y3x = true;
	}
	else
	{
		y3x = false;
		if (this.a2y.q3k < this.a2y.g9x)
		{
			if (this.a2y.z1j.w6d(this.a2y.j3g))
			{
				y3x = true;
			}
		}
	}
	if (y3x)
	{
		this.a2y.j3g = this.b6o.j3g(this.m7s);
		this.a2y.z1j = this.b6o.j3g(this.m7s);
		this.a2y.c8h = true;
		this.a2y.q3k = 0;
		this.a2y.b5c.length = 0;
		this.a2y.b5c.push(i4x.b8x()); 
		this.a2y.g9x = i4x.g9x();
		if (this.a2y.g9x > 1)
		{
			let e7e = f7p(this.a2y.z1j, i4x.z2g());
			for (let i = 0; i < this.a2y.g9x - 1; i++)
			{
				this.a2y.b5c.push(e7e[i]);
			}
		}
		this.a2y.b5c.push(i4x.t4s());
	}
	if (this.a2y.q3k < this.a2y.g9x)
	{
		let b7t = i4x.b7t();
		let p1d = this.a2y.b5c[this.a2y.q3k];
		let t4s = this.a2y.b5c[this.a2y.q3k + 1];
		this.a2y.z1j.t6k(p1d, o8u.k2v);
		this.a2y.z1j.t6k(t4s, b7t);
		this.a2y.j3g = this.a2y.z1j.o0o();
		this.a2y.q3k++;
		let a1m = new e1x();
		a1m.t1j = this.a2y.z1j.o0o();
		a1m.r6v = this.r6v();
		a1m.x9d = this.x9d();
		if (this.l3w)
		{
			this.l3w.r5r(a1m);
		}
	}
	else
	{
		this.a2y.c8h = false;
		this.e5p(0);
	}
}



b4j()
{
	if (this.c0j)
	{
		let t1e = this.l3w.d5n.m6m.l2q();
		if (t1e)
		{
			if (this.q7n < this.x0d.length - 1)
			{
				this.l3w.d5n.m6m.a5z(this.x0d[this.q7n],
					this.x0d[this.q7n+1], true);
				this.q7n++;
			}
			else
			{
				this.c0j = false;
				this.e5p(0);
			}
		}
		return;
	}

	if (this.m9k())
	{
		this.y1r();
		return;
	}

	this.x0d.length = 0;
	let i4x = this.j4i(0);
	let g9x = i4x.g9x();
	if (g9x == 0)
	{
		this.x0d.push(i4x.b8x()); 
		this.x0d.push(i4x.w8c());
	}
	else
	{
		this.x0d.push(i4x.b8x());
		if (g9x > 1)
		{
      let j3g = this.b6o.j3g(this.m7s);
      let e7e = f7p(j3g, i4x.z2g());
			for (let i = 0; i < g9x - 1; i++)
			{
				this.x0d.push(e7e[i]);
			}
		}
		this.x0d.push(i4x.w8c());
	}

	this.l3w.d5n.m6m.a5z(this.x0d[0],
		this.x0d[1], g9x > 0);
	this.q7n = 1;
	this.c0j = true;
}

f5x(g7g)
{
	for (const m of this.t1o)
	{
		if (m.getAttribute('movenr') == g7g)
		{
			return m;
		}
	}
	return null;
}

u9m(g7g)
{
	let h0e = [];
	for (const w2m of this.c9y)
	{
		if (w2m.getAttribute('movenr') == g7g)
		{
			h0e.push(w2m);
		}
	}
	return h0e;
}

q5v(i4k)
{
	let r7x = i4k.offsetTop;
	let z8j = i4k.scrollHeight;

	let n2u = this.t0s.offsetTop;
	let a5l = this.t0s.scrollTop;
	let t3d = this.t0s.clientHeight;
	let i2y = this.t0s.scrollHeight;
	let y0y = r7x - n2u;
	if (y0y >= a5l && y0y + z8j <= a5l + t3d - 1)
	{
		
	}
	else
	{
		
		let top = y0y - (t3d / 2);
		if (top < 0) top = 0;
		this.t0s.scrollTop = top;
	}
}

q8v(o5o, z2k)
{
	let h4t = o5o;
	while (h4t.i7y)
	{
		h4t = h4t.i7y;
	}
 	while (h4t)
	{
    if (this.b6o.r2t(h4t.p4e) == false)
    {
 	  	let i4k = this.f5x(h4t.p4e);
  	  if (i4k)
 		  {
  		  i4k.classList.add(z2k);
 	  	}
    }
    h4t = h4t.l5e;
  }
}

k6q(d0w)
{
  
 	for (const i4x of this.t1o)
	{
 		i4x.classList.remove('tdcurline');
    i4x.classList.remove('tdcurnode1');
	}
 	for (const w2m of this.c9y)
	{
 		w2m.classList.remove('tdcurline');
	}

  
	if (this.y1u >= 0)
	{
		let i4k = this.f5x(this.y1u);
		if (i4k)
		{
			i4k.classList.remove('tdcurmove');
		}
	}

  
  let e9k = true;
  let j0j = this.b6o.b6n(this.m7s);
 	for (const o5o of j0j)
	{
    if (o5o.i7y && e9k)
		{
		  this.q8v(o5o, 'tdcurnode1');
      e9k = false;
    }
    else
    {
      if (this.b6o.r2t(o5o.p4e) == false)
      {
   	  	let q7w = this.f5x(o5o.p4e);
	  	  if (q7w)
  		  {
	  		  q7w.classList.add('tdcurline');
  	  	}
      }
    }
	}

  
	let i4k = this.f5x(d0w);
	if (i4k)
	{
    i4k.classList.remove('tdcurline');
		i4k.classList.add('tdcurmove');
		this.q5v(i4k);
	}
	this.y1u = d0w;
}

e1j()
{
	let i4x = this.f5x(this.y1u);
	if (!i4x) return;
	let k4i = i4x.offsetTop;
	let x1c = null;
	let m9d = -1;
	for (const m of this.t1o)
	{
		if (m.offsetTop < k4i)
		{
			if (m.offsetTop > m9d)
			{
				x1c = m;
				m9d = m.offsetTop;
			}
		}
		else
		{
			break;
		}
	}
	if (x1c)
	{
		this.t2z(x1c.getAttribute('movenr'));
	}
	else
	{
		if (this.t1o.length)
		{
			this.t2z(this.t1o[0].getAttribute('movenr'));
		}
	}
}

l9v()
{
	let i4x = this.f5x(this.y1u);
	if (!i4x)
	{
		this.x0b();
		return;
	}
	let k4i = i4x.offsetTop;
	for (const m of this.t1o)
	{
		if (m.offsetTop > k4i)
		{
			this.t2z(m.getAttribute('movenr'));
			return;
		}
	}
	if (this.t1o.length)
	{
		this.t2z(this.t1o[this.t1o.length - 1].getAttribute('movenr'));
	}
}

t2z(p7t)
{
  
  
  
  
  if (this.m7s.f7i)
  {
    if (this.m7s.f7i.p4e == p7t)
    {
      return;
    }
  }
  else
  {
    if (p7t == 0)
    {
      return;
    }
  }
	
  this.m6o(p7t);
  this.k6q(p7t);
	
}

a9r()
{
	return this.b6o.a9r(this.m7s);
}

q8i(x2h)
{
  this.x2h = x2h.o0o();
	this.x2h.m2p = 0;
	this.x2h.m2b = 0;
	this.x2h.w1j = 32;
  this.x2h.t2a = 2;
 	this.x2h.c5v = false;
}

x1z()
{
	return this.b6o.x1z();
}

o7x()
{
	return this.b6o.o7x();
}

l3c()
{
	return this.b6o.l3c(this.m7s);
}

e7m()
{
	return this.b6o.e7m();
}

g3w(d0w, event)
{
  this.t2z(d0w);
}

v5h(d0w, event)
{
  if (!this.i8l) return;

  if (!tooltip)
  {
    tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    document.body.appendChild(tooltip);
  }

  const n9a = event.currentTarget; 
  const rect = n9a.getBoundingClientRect();
  console.log(`k0x.j6q: ${rect.left}`);
  console.log(`k0x.n8v: ${rect.top}`);
  let l2t = rect.left;
  let w5j = rect.top + rect.height;

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
	let m3e = this.x2h.f7a();

  if (l2t + m3e > viewportWidth)
  {
    l2t = viewportWidth - m3e - 5;
  }
  if (l2t < 5)
  {
    l2t = 5;
  }
  if (w5j + m3e > viewportHeight)
  {
    w5j = viewportHeight - m3e - 5;
  }
  if (w5j < 5)
  {
    w5j = 5;
  }

  let p2d = this.b6o.v5g(d0w);
  let j3g = this.b6o.j3g(p2d);
  tooltip.innerHTML = this.i0i(j3g);

  tooltip.style.left = `${l2t}px`;
  tooltip.style.top = `${w5j}px`;
  tooltip.classList.add('visible');
}

u0y(d0w, event)
{
  if (!this.i8l) return;
  tooltip.classList.remove('visible');
}

i0i(j3g)
{
  let m6m = new s0a();
  const tempCanvas = document.createElement('canvas');
	m6m.k3d = tempCanvas;
	let c8n = this.x2h.f7a();
	m6m.k3d.width = c8n;
	m6m.k3d.height = c8n;
	m6m.q8i(this.x2h);
  m6m.c1i(j3g);
  m6m.y8o();
  const imageDataURL = tempCanvas.toDataURL('image/png');
  return `<img src="\x24\x7b\x69\x6d\x61\x67\x65\x44\x61\x74\x61\x55\x52\x4c\x7d" alt="\x43\x68\x65\x73\x73\x20\x50\x6f\x73\x69\x74\x69\x6f\x6e" width="\x24\x7b\x62\x6f\x61\x72\x64\x53\x69\x7a\x65\x7d" height="\x24\x7b\x62\x6f\x61\x72\x64\x53\x69\x7a\x65\x7d">`;
}

}

class l5s
{

constructor()
{
	this.e3h = 15;
  this.f2o = true;
 	this.b7c = true;
}

o0o()
{
  return Object.assign(new l5s(), this);
}

}
class l4v
{

constructor(y2n)
{
  this.t2u = new r3w(y2n);
  this.q4k = new u9p(y2n);
}

}

class r7g
{

constructor()
{
	this.d7b = false;
	this.l3w = null;
	this.p1n = null;
	this.a1t = 6;
	this.c0p = null;
	this.w4z = null;
	this.h4o = null;
	this.j6s = null;
	this.w6a = null;
	this.q8g = false;
}

v2x()
{
	this.d7b = false;
	this.m1p();
	this.c0p.classList.replace('autoPlay', 'autoStop');
	this.j6s.style.display = 'none';
	this.w6a.style.display = 'none';
	this.w4z.style.display = 'inline-block';
	this.h4o.style.display = 'inline-block';
	this.p0r();
	this.l3w.d5n.e6y = false;
}

t8m()
{
	if (this.p1n)
	{
		clearInterval(this.p1n);
		this.p1n = null;
		this.c0p.classList.replace('autoStop', 'autoPlay');
		this.j6s.style.display = 'inline-block';
		this.w6a.style.display = 'inline-block';
		this.w4z.style.display = 'none';
		this.h4o.style.display = 'none';
		this.l3w.d5n.e6y = true; 
		this.l3w.j7i.q4k.i1t();
	}
}

m1p()
{
	let y2n = this.l3w.y2n;
	this.p1n = setInterval(function(){ m7p(y2n); },
		this.l3w.j7i.q4k.f0i ? this.a1t * 2 : this.a1t * 100);
}

c4n()
{
	return this.p1n != null;
}

r6v()
{
	return !this.l3w.j7i.q4k.u0g();
}

x9d()
{
	return !this.l3w.j7i.q4k.m9k();
}

a5f()
{
	if (this.q8g)
	{
		return;
	}
	else
	{
		this.q8g = true;
	}
	if (!this.x9d())
	{
		this.t8m();
	}
	else
	{
		this.l3w.j7i.q4k.t0l();
	}
	this.q8g = false;
}

q2s()
{
	if (this.p1n)
	{
		if (this.a1t < 50)
		{
			this.a1t++;
			clearInterval(this.p1n);
			this.m1p();
			this.p0r();
		}
	}
}

i0z()
{
	if (this.p1n)
	{
		if (this.a1t > 1)
		{
			this.a1t--;
			clearInterval(this.p1n);
			this.m1p();
			this.p0r();
		}
	}
}

p0r()
{
	y3m(this.w4z, this.a1t < 50);
	y3m(this.h4o, this.a1t > 1);
}

}

let v9m = null;
let q3z = 0;
let k0g = null;

class b9s
{

constructor()
{
	this.index = 0;
	this.j6b = '';
	this.v5r = null;
	this.c5z = false;
	this.l3w = null;
	this.z9p = null;
  this.e5b = [];
	this.z1d = 0;
  this.z4x = 0;

	this.u4b = null;
	this.c2d = null;
	this.left = null;
	this.d4v = null;
	this.f0d = null;
	this.u5a = null;
	this.y7m = null;
	this.z8u = null;
	this.m4z = null;
	this.o0n = null;
	this.p6f = null;
 	this.p7l = null;
 	this.g0c = null;
	this.e3o = null;
	this.j6s = null;
	this.w4z = null;
	this.c0p = null;
	this.w6a = null;
	this.h4o = null;
	this.r3g = null;
 	this.h5j = null;
  this.k8g = null;
	this.m8o = null;
  this.c2e = null;
	this.u3t = null;
	this.y5o = null;
	this.p5a = null;
	this.l1i = null;
	this.r4r = null;
	this.d8l = null;
  this.m1l = null;
  this.r5q = null;
	this.f5c = null;
	this.w2j = null;
	this.k6a = null;
	this.d8s = null;
	this.w1p = null;

	this.g9l = null;
	this.o0q = null;
	this.t3v = null;
	this.h7d = null;

  this.z9z = null;
	this.d0n = null;
	this.a1e = null;
  this.f6t = null;

  this.t1y = null;

  
  this.settingsDialog = null;
  this.o1q = null;
  this.r0q = null;
  this.i3l = null;
  this.q7y = null;
  this.e2q = null;

  
}

l0g(index, v5r, j6b)
{
	this.index = index;
	this.v5r = v5r;
	this.j6b = j6b;
	v5r.innerHTML = '';
	v5r.u2n = "\x72\x65\x70\x6c\x61\x79";

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

  v5r.innerHTML = s;

	this.u4b = document.getElementById("\x72\x6f\x6f\x74\x50\x61\x72\x65\x6e\x74"+index);
	this.c2d = document.getElementById("\x72\x6f\x6f\x74"+index);
	this.left = document.getElementById("left"+index);
	this.d4v = document.getElementById("\x6c\x65\x66\x74\x43\x6f\x6e\x74\x61\x69\x6e\x65\x72"+index);
	this.f0d = document.getElementById("\x6c\x65\x66\x74\x4e\x65\x73\x74"+index);
	this.u5a = document.getElementById("\x6c\x65\x66\x74\x4e\x6f\x72\x74\x68"+index);
	this.y7m = document.getElementById("\x62\x6f\x61\x72\x64\x48\x6f\x6c\x64\x65\x72"+index);
	this.z8u = document.getElementById("\x62\x6f\x61\x72\x64\x50\x61\x6e\x65\x6c"+index);
	this.m4z = document.getElementById("\x62\x6f\x61\x72\x64\x43\x61\x6e\x76\x61\x73"+index);
	this.o0n = document.getElementById("\x62\x65\x6c\x6f\x77\x42\x6f\x61\x72\x64"+index);
	this.p6f = document.getElementById("\x72\x65\x70\x6c\x61\x79\x50\x61\x6e\x65\x6c"+index);
 	this.p7l = document.getElementById("\x67\x6f\x54\x6f\x50\x72\x65\x76\x69\x6f\x75\x73"+index);
 	this.g0c = document.getElementById("\x67\x6f\x54\x6f\x4e\x65\x78\x74"+index);
	this.e3o = document.getElementById("\x67\x6f\x54\x6f\x42\x65\x67\x69\x6e"+index);
	this.j6s = document.getElementById("\x70\x6c\x61\x79\x42\x61\x63\x6b\x77\x61\x72\x64"+index);
	this.w4z = document.getElementById("\x70\x6c\x61\x79\x53\x6c\x6f\x77\x65\x72"+index);
	this.c0p = document.getElementById("\x61\x75\x74\x6f\x50\x6c\x61\x79"+index);
	this.w6a = document.getElementById("\x70\x6c\x61\x79\x46\x6f\x72\x77\x61\x72\x64"+index);
	this.h4o = document.getElementById("\x70\x6c\x61\x79\x46\x61\x73\x74\x65\x72"+index);
	this.r3g = document.getElementById("\x67\x6f\x54\x6f\x45\x6e\x64"+index);
  this.h5j = document.getElementById("\x66\x6c\x69\x70\x42\x6f\x61\x72\x64"+index);
  this.k8g = document.getElementById("\x64\x6f\x77\x6e\x6c\x6f\x61\x64"+index);
	this.m8o = document.getElementById("\x73\x68\x6f\x77\x47\x61\x6d\x65\x4c\x69\x73\x74"+index);
  this.c2e = document.getElementById("\x73\x65\x74\x74\x69\x6e\x67\x73"+index);
	this.u3t = document.getElementById("\x6c\x65\x66\x74\x53\x6f\x75\x74\x68"+index);
	this.y5o = document.getElementById("\x6c\x65\x66\x74\x53\x6f\x75\x74\x68\x4e\x65\x73\x74"+index);
	this.p5a = document.getElementById("\x6c\x69\x73\x74\x50\x61\x72\x65\x6e\x74"+index);
	this.l1i = document.getElementById("\x6c\x69\x73\x74\x48\x65\x61\x64\x65\x72"+index);
	this.r4r = document.getElementById("\x6c\x69\x73\x74\x48\x65\x61\x64\x65\x72\x54\x61\x62\x6c\x65"+index);
	this.d8l = document.getElementById("\x6c\x69\x73\x74\x42\x6f\x64\x79"+index);
  this.m1l = document.getElementById("\x6c\x69\x73\x74\x2d\x62\x75\x74\x74\x6f\x6e\x2d\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72"+index);
  this.r5q = document.getElementById("\x68\x69\x64\x65\x47\x61\x6d\x65\x4c\x69\x73\x74"+index);
	this.f5c = document.getElementById("\x67\x61\x6d\x65\x4c\x69\x73\x74"+index);
	this.w2j = document.getElementById("\x72\x69\x67\x68\x74"+index);
	this.k6a = document.getElementById("\x72\x69\x67\x68\x74\x4e\x65\x73\x74"+index);
	this.d8s = document.getElementById("\x72\x69\x67\x68\x74\x4e\x6f\x72\x74\x68"+index);
	this.w1p = document.getElementById("\x72\x69\x67\x68\x74\x53\x6f\x75\x74\x68"+index);

  
  if (!chess)
  {
    this.d8s.style.height = "\x31\x30\x30\x25";
   	this.w1p.style.display = 'none';
  }

	this.g9l = document.getElementById("\x6e\x6f\x74\x61\x2d\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72"+index);
  this.g9l.style.e3h = y9m.e3h + 'px';
	this.o0q = document.getElementById("\x6e\x6f\x74\x61\x2d\x68\x65\x61\x64\x65\x72\x2d\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72"+index);
	this.t3v = document.getElementById("\x68\x65\x61\x64\x65\x72\x50\x61\x6e\x65\x6c"+index);
	this.h7d = document.getElementById("\x6d\x6f\x76\x65\x73\x50\x61\x6e\x65\x6c"+index);

	this.z9z = document.getElementById("\x65\x6e\x6f\x74\x61\x2d\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72"+index);
  this.z9z.style.e3h = y9m.e3h + 'px';
	this.d0n = document.getElementById("\x65\x6e\x6f\x74\x61\x2d\x68\x65\x61\x64\x65\x72\x2d\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72"+index);
	this.a1e = document.getElementById("\x65\x68\x65\x61\x64\x65\x72\x50\x61\x6e\x65\x6c"+index);
	this.f6t = document.getElementById("\x65\x6d\x6f\x76\x65\x73\x50\x61\x6e\x65\x6c"+index);

  this.t1y = document.getElementById("\x73\x74\x61\x72\x74\x45\x6e\x67\x69\x6e\x65"+index);
}

j4a()
{
	this.v5r.style.display = 'block';
	this.w4z.style.display = 'none';
	this.h4o.style.display = 'none';
	this.p5a.style.display = 'none';

	this.c5z = false;
	if (this.v5r.clientWidth <= l6q)
	{
		this.y2r();
		this.c5z = true;
	}
	else
	{
		this.v7r();
		this.d7i();
	}
  this.n7e();
	let y2n = this.index;

	this.e3o.onclick = this.q0z.bind(this);
	this.j6s.onclick = this.n8y.bind(this);
	this.w4z.onclick = this.q2s.bind(this);
	this.c0p.onclick = this.s3e.bind(this);
	this.h4o.onclick = this.i0z.bind(this);
	this.w6a.onclick = this.x0b.bind(this);
	this.r3g.onclick = this.w5u.bind(this);
  this.p7l.onclick = this.h0q.bind(this);
  this.g0c.onclick = this.u0j.bind(this);
  this.h5j.onclick = this.h2l.bind(this);
 	this.k8g.onclick = this.a3c.bind(this);
	this.m8o.onclick = this.c4e.bind(this);
 	this.r5q.onclick = this.d2r.bind(this);

  this.c2e.addEventListener('click', async () => {
    await this.onSettingsClick();
  });

 	this.t1y.onchange = this.z0h.bind(this);

	this.l3w = new j0n(this.index);
	this.l3w.d5n.m6m.c1e(this.m4z);
	this.l3w.d5n.z8u = this.z8u;
  this.l3w.d5n.q8i(z1t);
	this.l3w.j7i.t2u.k3x = this.t3v;
	this.l3w.j7i.q4k.t0s = this.h7d;
  this.l3w.j7i.q4k.q8i(z1t);
	this.l3w.o1a.c0p = this.c0p;
	this.l3w.o1a.w4z = this.w4z;
	this.l3w.o1a.h4o = this.h4o;
	this.l3w.o1a.j6s = this.j6s;
	this.l3w.o1a.w6a = this.w6a;
 	this.l3w.l9f.q4k.t0s = this.f6t;
  this.l3w.l9f.q4k.q8i(z1t);

  this.l3w.l9f.c2e.addEventListener('click', async () => {
    await this.onEngineSettingsClick();
  });

	this.z9p = new b2a(this.index);
	this.z9p.p5a = this.p5a;
	this.z9p.l4z = this.f5c;
	this.z9p.j5b = this.r4r;
	this.z9p.j4a();
	this.z9p.h7l(this.e5b);
  this.z9p.n2g = (f5c, index) => {
    this.g3j(f5c, index);
  };
	if (this.z9p.e5b.length)
	{
		this.g4e(0, 0);
	}
	else
	{
		let x1i = new i0b();
		this.l3w.g4e(null, 1, 0, x1i);
	}
}

g6q(j6b)
{
	this.j6b = j6b;
 	let x7m = this.j6b.split('\n');
	let p8t = 0;
	for (const q1p of x7m)
	{
		if (q1p.startsWith("[Event \""))
		{
			let y6n = p8t;
      let i8b = x7m.length;
   		let g1e = x7m.slice(y6n, i8b);
  		let i2k = new o1s(g1e);
	  	this.z9p.e5b[this.z1d] = i2k.p8x();
      break;
    }
    p8t++;
	}
  this.g4e(0, 0);
}

n7e()
{
	let x7m = this.j6b.split('\n');
	let q6c = [];
	let p8t = 0;
	for (const q1p of x7m)
	{
		if (q1p.startsWith("[Event \""))
		{
			q6c.push(p8t);
		}
		p8t++;
	}
	let i = 0;
	this.e5b = [];
	for (const a6x of q6c)
	{
		let y6n = a6x;
		let i8b = 0;
		if (i < q6c.length - 1)
		{
			i8b = q6c[i + 1];
		}
		else
		{
			i8b = x7m.length;
		}
		let g1e = x7m.slice(y6n, i8b);
		let i2k = new o1s(g1e);
		let x1i = i2k.p8x();
		this.e5b.push(x1i);
		i++;
	}
}

s4a()
{
	if (this.c5z || this.c2d.clientHeight <= l6q)
	{
		this.v5r.style.j9z = "\x30\x70\x78";
		this.v5r.style.q3r = "\x30\x70\x78";
		this.v5r.style.width = "\x31\x30\x30\x25";
		this.v5r.style.height = "\x38\x38\x76\x68";
	}
	else
	{
		this.v5r.style.j9z = "\x31\x70\x78\x20\x73\x6f\x6c\x69\x64\x20\x67\x72\x61\x79";
		this.v5r.style.q3r = "\x31\x70\x78\x20\x73\x6f\x6c\x69\x64\x20\x67\x72\x61\x79";
		this.v5r.style.height = "\x38\x38\x76\x68";
	}
}

o9l()
{
	this.s4a();

	this.left.style.width = "\x31\x30\x30\x25";

	let x6s = this.u5a.getBoundingClientRect();
	this.u3t.style.top = (x6s.height) + "\x70\x78";
	this.d7i();

	this.l5d();
	this.v7r();
	this.h2o();
	this.j7f();
  this.i0h()
}

c3m()
{
	this.s4a();

	let n7s = this.c2d.getBoundingClientRect();
	this.left.style.width = (n7s.width * 0.50) + "\x70\x78";
	let v7j = this.left.getBoundingClientRect();

	let x6s = this.u5a.getBoundingClientRect();
	this.u3t.style.top = (x6s.height) + "\x70\x78";
	this.d7i();

	this.w2j.style.left = (v7j.width) + "\x70\x78";
	this.w2j.style.width = (n7s.width - v7j.width) + "\x70\x78";

	this.l5d();
	this.v7r();
	this.h2o();
	this.j7f();
  this.i0h()
}

v7r()
{
}

b5w()
{
  this.u5a.style.height = '100%';
	this.d8s.appendChild(this.g9l);
 	this.w1p.appendChild(this.z9z);
  this.g9l.style.height = '100%';
  this.z9z.style.height = '100%';
	this.w2j.style.display = 'block';
}

y2r()
{
  this.u5a.style.height = '70%';
	this.y5o.appendChild(this.g9l);
  this.y5o.appendChild(this.z9z);
  this.g9l.style.height = '50%';
  this.z9z.style.height = '50%';
	this.w2j.style.display = 'none';
}

c4e(event)
{
	this.p5a.style.display = 'block';
  let v4u = this.p5a.clientHeight - this.l1i.clientHeight - this.m1l.clientHeight;
  this.d8l.style.height = v4u + "\x70\x78";
	this.h2o();
}

d2r(event)
{
 	this.p5a.style.display = 'none';
}

j7f()
{
	this.l3w.j7i.t2u.j0x();
}

i0h()
{
}

h2o()
{
  this.z9p.l4h();
}

l5d()
{
	let x6s = this.u5a.getBoundingClientRect();
	let o6r = this.o0n.getBoundingClientRect();
	this.y7m.style.height = (x6s.height - o6r.height - 1) + "\x70\x78";
	this.l3w.d5n.l4h();
}

d7i()
{
	let s2l = this.f0d.getBoundingClientRect();
	let x6s = this.u5a.getBoundingClientRect();
	let w5e = s2l.height - x6s.height;
	if (w5e < 0) w5e = 0;
	this.u3t.style.height = w5e + "\x70\x78";
}

i6d()
{
  o9x('goToPrevious'+this.index, this.z1d > 0);
  o9x('goToNext'+this.index, this.z1d < this.z9p.e5b.length - 1);
}

m5i(e)
{
	this.l3w.d5n.m6m.mouseDown(e);
}

b3r(e)
{
	this.l3w.d5n.m6m.mouseMove(e);
}

a5e(e)
{
	this.l3w.d5n.m6m.mouseUp(e);
}

x7v(e)
{
	this.l3w.d5n.m6m.touchStart(e);
}

r1u(e)
{
	this.l3w.d5n.m6m.touchMove(e);
}

x3t(e)
{
	this.l3w.d5n.m6m.touchEnd(e);
}

q2s(event)
{
	this.l3w.o1a.q2s();
}

i0z(event)
{
	this.l3w.o1a.i0z();
}

n8y(event)
{
	this.l3w.o1a.t8m();
	this.l3w.j7i.q4k.n8y();
}

x0b(event)
{
	this.l3w.o1a.t8m();
	this.l3w.j7i.q4k.x0b();
}

q0z(event)
{
	this.l3w.o1a.t8m();
	this.l3w.j7i.q4k.e2e();
}

w5u(event)
{
	this.l3w.o1a.t8m();
	this.l3w.j7i.q4k.d1y();
}

s3e(event)
{
	this.l3w.u0k();
}

z7m()
{
 	if (this.z9p.e5b.length)
  {
    this.g4e(0, 0);
  }
}

h0q(event)
{
 	if (this.z1d > 0)
  {
    this.g4e(this.z1d - 1, 0);
  }
}

u0j(event)
{
  if (this.z1d < this.z9p.e5b.length - 1)
  {
    this.g4e(this.z1d + 1, 0);
  }
}

l5k()
{
	if (this.z9p.e5b.length)
  {
    this.z1d = this.z9p.e5b.length - 1;
    this.g4e(this.z9p.e5b.length - 1, 0);
	}
}

g4e(z1d, d0w)
{
  if (z1d >= 0 && z1d <= this.z9p.e5b.length - 1)
  {
    this.z1d = z1d;
  	this.l3w.g4e(null, 1, d0w, this.z9p.e5b[this.z1d]);
  }
  this.i6d();
}

h2l(event)
{
	this.l3w.h2l();
}

f1c()
{
	this.l3w.f1c();
}

f4i()
{
	if (this.v5r.clientWidth <= l6q)
	{
		if (this.c5z)
		{
			this.o9l();
		}
		else
		{
			this.y2r();
			this.c5z = true;
			this.o9l();
		}
	}
	else
	{
		if (!this.c5z)
		{
			this.c3m();
		}
		else
		{
			this.b5w();
			this.c5z = false;
			this.c3m();
		}
	}
}

g3j(f5c, index)
{
	this.g4e(index, 0);
  this.d2r();
}

a3c(event)
{
  const a = document.createElement("\x61");
  a.style.display = "\x6e\x6f\x6e\x65";
  document.body.appendChild(a);
  let i = 0;
  while (i < this.j6b.length - 1)
  {
    if (this.j6b[i] == '[')
    {
        break;
    }
    i++;
  }
  let j6b = this.j6b.substring(i);
  a.href = window.URL.createObjectURL(new Blob([j6b], { type: "\x74\x65\x78\x74\x2f\x70\x6c\x61\x69\x6e" }));
  a.setAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64", "\x67\x61\x6d\x65\x73\x2e\x70\x67\x6e");
  a.click();
  window.URL.revokeObjectURL(a.href);
  document.body.removeChild(a);
}

z0h(event)
{
  if (chess)
  {
    if (this.l3w.x8q())
    {
      this.r6e();
    }
    else
    {
      this.a3y();
    }
  }
}

r6e()
{
  this.l3w.r6e();
}

a3y()
{
  let q4c = new g0e();
  q4c.u2n.w3g = "\x53\x74\x6f\x63\x6b\x66\x69\x73\x68";
  const o5l = q4c.o5l;
  o5l.addInteger("\x4d\x75\x6c\x74\x69\x50\x56", i7v);
  o5l.addInteger("\x54\x68\x72\x65\x61\x64\x73", x0j);
  o5l.addInteger("\x48\x61\x73\x68",    p6h(o4i));
  this.l3w.a3y(q4c);
}

i6g()
{
  this.l3w.d5n.q8i(z1t);
  this.l3w.d5n.l4h();
  this.l3w.j7i.q4k.q8i(z1t);
  this.l3w.j7i.q4k.d2t();
  this.l3w.l9f.q4k.q8i(z1t);
  this.l3w.l9f.q4k.d2t();
  let g9l = document.getElementById("\x6e\x6f\x74\x61\x2d\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72"+this.index);
  g9l.style.e3h = y9m.e3h + 'px';
  let o7v = document.getElementById("\x65\x6e\x6f\x74\x61\x2d\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72"+this.index);
  o7v.style.e3h = y9m.e3h + 'px';
}

a1b()
{
  if (this.l3w.x8q())
  {
    this.r6e();
    this.a3y();
  }
}

async onSettingsClick()
{
  const dialog = new i1m();
  const { n4t } = await dialog.show();

  if (n4t === dialog.e0l)
  {
    this.i6g();
  }
}

async onEngineSettingsClick()
{
  const dialog = new m1c();
  const { n4t } = await dialog.show();

  if (n4t === dialog.e0l)
  {
    this.a1b();
  }
}

}

class i1m
{

constructor()
{
  this.e0l = 1;
  this.k9b = 0;

  this.dialog = document.getElementById("settingsDialog");
  if (!this.dialog)
  {
    this.buildDialog();
  }
  this.dialog = document.getElementById("settingsDialog");

  this.o1q = this.dialog.querySelector(".piece-select");
  this.r0q = this.dialog.querySelector(".coordinates-checkbox");
  this.i3l = this.dialog.querySelector(".font-select");
  this.q7y = this.dialog.querySelector(".ok-button");
  this.e2q = this.dialog.querySelector(".cancel-button");

  this.q7y.onclick = this.okSettings.bind(this);
 	this.e2q.onclick = this.cancelSettings.bind(this);
}

buildDialog()
{
  const i5c = a6b();
  const s = `
    <dialog u2n="settingsDialog" class="settingsDialog">
      <h2>Settings</h2>

    <div class="\x73\x65\x74\x74\x69\x6e\x67\x73\x2d\x72\x6f\x77">
      <span class="\x6c\x61\x62\x65\x6c\x2d\x74\x65\x78\x74">Pieces:</span>
      <select class="\x70\x69\x65\x63\x65\x53\x65\x6c\x65\x63\x74\x20\x70\x69\x65\x63\x65\x2d\x73\x65\x6c\x65\x63\x74">
        ${i5c.map((f3q, i) => `
        <option y9t="\x24\x7b\x69\x7d">${f3q}</option>
        `).join('')}
      </select>
      </div>

    <div class="\x73\x65\x74\x74\x69\x6e\x67\x73\x2d\x72\x6f\x77">
      <span class="\x6c\x61\x62\x65\x6c\x2d\x74\x65\x78\x74">Coordinates:</span>
      <t4y type="\x63\x68\x65\x63\x6b\x62\x6f\x78" class="\x63\x6f\x6f\x72\x64\x69\x6e\x61\x74\x65\x73\x2d\x63\x68\x65\x63\x6b\x62\x6f\x78">
    </div>

    <div class="\x73\x65\x74\x74\x69\x6e\x67\x73\x2d\x72\x6f\x77">
      <span class="\x6c\x61\x62\x65\x6c\x2d\x74\x65\x78\x74">Notation font s7n:</span>
      <select class="\x6d\x6f\x76\x65\x73\x46\x6f\x6e\x74\x53\x69\x7a\x65\x53\x65\x6c\x65\x63\x74\x20\x66\x6f\x6e\x74\x2d\x73\x65\x6c\x65\x63\x74">
        <option y9t="\x31\x32">Small</option>
        <option y9t="\x31\x35">Default</option>
        <option y9t="\x31\x38">Medium</option>
        <option y9t="\x32\x32">Large</option>
      </select>
      </div>

      <form method="dialog">
        <button y9t="\x6f\x6b" class="\x73\x65\x74\x74\x69\x6e\x67\x73\x42\x75\x74\x74\x6f\x6e\x20\x6f\x6b\x2d\x62\x75\x74\x74\x6f\x6e">OK</button>
        <button y9t="\x63\x61\x6e\x63\x65\x6c" class="\x73\x65\x74\x74\x69\x6e\x67\x73\x42\x75\x74\x74\x6f\x6e\x20\x63\x61\x6e\x63\x65\x6c\x2d\x62\x75\x74\x74\x6f\x6e">Cancel</button>
      </form>
    </dialog>
  `;

  document.body.insertAdjacentHTML('beforeend', s);
}

okSettings(event)
{
  z1t.w7y = this.o1q.y9t;
  localStorage.setItem(x2v, z1t.w7y);
  g4i(z1t.w7y);
  z1t.c5v = this.r0q.checked;
  localStorage.setItem(p9p, z1t.c5v.toString());
  y9m.e3h = this.i3l.y9t;
  localStorage.setItem(r2o, y9m.e3h);
  this.dialog.close('ok');
}

cancelSettings(event)
{
  this.dialog.close('cancel');
}

async show()
{
  i4z = true;

  this.o1q.y9t = z1t.w7y;
  this.r0q.checked = z1t.c5v;
  this.i3l.y9t = y9m.e3h;

  const n4t = await new Promise((resolve) => {
    this.dialog.onclose = () => {
       resolve(this.dialog.returnValue === 'ok' ? this.e0l : this.k9b);
    };
    this.dialog.showModal();
  });

  i4z = false;
  return { n4t };
}

}

function x3e(s6n)
{
  const y9t = parseInt(s6n);
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
  return timeMap[y9t] || 2000; 
}

function p6h(s6n)
{
  const y9t = parseInt(s6n);
  const memoryMap = {
    1: 16,
    2: 32,
    3: 64,
    4: 128,
    5: 256,
    6: 512
  };
  return memoryMap[y9t] || 16;
}

class m1c
{

constructor()
{
  this.e0l = 1;
  this.k9b = 0;

  this.dialog = document.getElementById("engineSettingsDialog");
  if (!this.dialog)
  {
    this.buildDialog();
  }
  this.dialog = document.getElementById("engineSettingsDialog");

  this.k7c = this.dialog.querySelector(".searchTime-slider");

  this.c0y = this.dialog.querySelector(".searchTime-value");
  this.m3j = this.dialog.querySelector(".multiPV-slider");
  this.h8n = this.dialog.querySelector(".multiPV-value");
  this.g2x = this.dialog.querySelector(".threads-slider");
  this.b6h = this.dialog.querySelector(".threads-value");
  this.k0p = this.dialog.querySelector(".memory-slider");
  this.u5i = this.dialog.querySelector(".memory-value");
  this.q7y = this.dialog.querySelector(".ok-button");
  this.e2q = this.dialog.querySelector(".cancel-button");

  this.q7y.onclick = this.okSettings.bind(this);
 	this.e2q.onclick = this.cancelSettings.bind(this);

  this.k7c.addEventListener('input', this.n9s.bind(this));
  this.m3j.addEventListener('input', this.y0a.bind(this));

  this.g2x.addEventListener('input', this.p5d.bind(this));

  this.k0p.addEventListener('input', this.a7p.bind(this));

}

buildDialog() {
  const s = `
    <dialog u2n="engineSettingsDialog" class="settingsDialog">
      <h2>j0c Settings</h2>

      <div class="\x73\x65\x74\x74\x69\x6e\x67\x73\x2d\x72\x6f\x77">
        <span class="\x6c\x61\x62\x65\x6c\x2d\x74\x65\x78\x74">Search p0p</span>
        <t4y type="\x72\x61\x6e\x67\x65" class="\x73\x69\x6d\x70\x6c\x65\x2d\x73\x6c\x69\x64\x65\x72\x20\x73\x65\x61\x72\x63\x68\x54\x69\x6d\x65\x2d\x73\x6c\x69\x64\x65\x72" min="\x31" max="\x31\x30" u8s="\x31" y9t="\x31">
        <span class="\x76\x61\x6c\x75\x65\x2d\x64\x69\x73\x70\x6c\x61\x79\x2d\x73\x69\x6d\x70\x6c\x65\x20\x73\x65\x61\x72\x63\x68\x54\x69\x6d\x65\x2d\x76\x61\x6c\x75\x65">1s</span>
      </div>

      <div class="\x73\x65\x74\x74\x69\x6e\x67\x73\x2d\x72\x6f\x77">
        <span class="\x6c\x61\x62\x65\x6c\x2d\x74\x65\x78\x74">Multiple x7m</span>
        <t4y type="\x72\x61\x6e\x67\x65" class="\x73\x69\x6d\x70\x6c\x65\x2d\x73\x6c\x69\x64\x65\x72\x20\x6d\x75\x6c\x74\x69\x50\x56\x2d\x73\x6c\x69\x64\x65\x72" min="\x31" max="\x35" u8s="\x31" y9t="\x31">
        <span class="\x76\x61\x6c\x75\x65\x2d\x64\x69\x73\x70\x6c\x61\x79\x2d\x73\x69\x6d\x70\x6c\x65\x20\x6d\x75\x6c\x74\x69\x50\x56\x2d\x76\x61\x6c\x75\x65">1</span>
      </div>

      <div class="\x73\x65\x74\x74\x69\x6e\x67\x73\x2d\x72\x6f\x77">
        <span class="\x6c\x61\x62\x65\x6c\x2d\x74\x65\x78\x74">Threads</span>
        <t4y type="\x72\x61\x6e\x67\x65" class="\x73\x69\x6d\x70\x6c\x65\x2d\x73\x6c\x69\x64\x65\x72\x20\x74\x68\x72\x65\x61\x64\x73\x2d\x73\x6c\x69\x64\x65\x72" min="\x31" max="\x33\x32" u8s="\x31" y9t="\x31">
        <span class="\x76\x61\x6c\x75\x65\x2d\x64\x69\x73\x70\x6c\x61\x79\x2d\x73\x69\x6d\x70\x6c\x65\x20\x74\x68\x72\x65\x61\x64\x73\x2d\x76\x61\x6c\x75\x65">1</span>
      </div>

      <div class="\x73\x65\x74\x74\x69\x6e\x67\x73\x2d\x72\x6f\x77">
        <span class="\x6c\x61\x62\x65\x6c\x2d\x74\x65\x78\x74">Memory</span>
        <t4y type="\x72\x61\x6e\x67\x65" class="\x73\x69\x6d\x70\x6c\x65\x2d\x73\x6c\x69\x64\x65\x72\x20\x6d\x65\x6d\x6f\x72\x79\x2d\x73\x6c\x69\x64\x65\x72" min="\x31" max="\x36" u8s="\x31" y9t="\x31">
        <span class="\x76\x61\x6c\x75\x65\x2d\x64\x69\x73\x70\x6c\x61\x79\x2d\x73\x69\x6d\x70\x6c\x65\x20\x6d\x65\x6d\x6f\x72\x79\x2d\x76\x61\x6c\x75\x65">16MB</span>
      </div>

      <form method="dialog">
        <button y9t="\x6f\x6b" class="\x73\x65\x74\x74\x69\x6e\x67\x73\x42\x75\x74\x74\x6f\x6e\x20\x6f\x6b\x2d\x62\x75\x74\x74\x6f\x6e">OK</button>
        <button y9t="\x63\x61\x6e\x63\x65\x6c" class="\x73\x65\x74\x74\x69\x6e\x67\x73\x42\x75\x74\x74\x6f\x6e\x20\x63\x61\x6e\x63\x65\x6c\x2d\x62\x75\x74\x74\x6f\x6e">Cancel</button>
      </form>

    </dialog>
  `;

  document.body.insertAdjacentHTML('beforeend', s);
}

okSettings(event)

{
  o4l = parseInt(this.k7c.y9t);
  i7v = parseInt(this.m3j.y9t);
  x0j = parseInt(this.g2x.y9t);
  o4i = parseInt(this.k0p.y9t);
  localStorage.setItem(t2b, o4l);
  localStorage.setItem(o2p, i7v);
  localStorage.setItem(p4g, x0j);
  localStorage.setItem(o6j, o4i);
  this.dialog.close('ok');
}

cancelSettings(event)
{
  this.dialog.close('cancel');
}

n9s()
{
  const y9t = parseInt(this.k7c.y9t);
  let displayValue;

  switch (y9t)
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
  this.c0y.textContent = displayValue;
}

y0a()
{
  const y9t = this.m3j.y9t;
  this.h8n.textContent = `${y9t}`;
}


p5d()
{
  const y9t = this.g2x.y9t;
  this.b6h.textContent = `${y9t}`;
}


a7p()

{
  const y9t = parseInt(this.k0p.y9t);
  let displayValue;

  switch (y9t)
  {
    case 1: displayValue = "\x31\x36\x4d\x42"; break;
    case 2: displayValue = "\x33\x32\x4d\x42"; break;
    case 3: displayValue = "\x36\x34\x4d\x42"; break;
    case 4: displayValue = "\x31\x32\x38\x4d\x42"; break;
    case 5: displayValue = "\x32\x35\x36\x4d\x42"; break;
    case 6: displayValue = "\x35\x31\x32\x4d\x42"; break;
    default: displayValue = "";
  }

  this.u5i.textContent = displayValue;
}

async show()
{
  i4z = true;

  this.k7c.y9t = o4l;
  this.m3j.y9t = i7v;
  this.g2x.y9t = x0j;
  this.k0p.y9t = o4i;

  this.n9s();
  this.y0a();
  this.p5d();
  this.a7p();

  const n4t = await new Promise((resolve) => {
    this.dialog.onclose = () => {
       resolve(this.dialog.returnValue === 'ok' ? this.e0l : this.k9b);
    };
    this.dialog.showModal();
  });

  i4z = false;
  return { n4t };
}

}

const q5f = 38;
const z7o = 40;
const r3o = 37;
const w4t = 37;
const g6j = 52;
const c2u = 39;
const x5i = 39;
const b8t = 54;
const v9v = 36;
const e9u = 36;
const g5x = 55;
const e0y = 35;
const c1t = 35;
const q7j = 49;
const h4r = 187;
const d0f = 107;
const u3u = 61;
const h1o = 42;
const c9v = 170;
const g1r = 8;
const x2n = 13;
let k7z = false;
let i4z = false;

const l6q = 767;
let s9v = [];
let l1o = -1;
let j2k = new l3a();

let z1t = new j6p();
let y9m = new l5s();
let o4l = 1;
let i7v = 1;
let x0j = 1;
let o4i = 1;

window.onload = function()
{
  x4s();
  a3q();
  y5i();
};

document.onkeydown = z3s;

function z3s(e)
{
  if (e.b0s === "\x45\x73\x63\x61\x70\x65")
  {
    return;
  }

  if (i4z)
  {
    
    e.preventDefault();
    return;
  }

	let g8i = e || window.event;
	let b0s = g8i.keyCode;

	if (k7z) return;
	k7z = true;

	if (l1o == -1) return;

	if (e.ctrlKey)
	{
		if (b0s == 66) 
		{
				s9v[l1o].h2l();
				e.preventDefault();
				
				
				
		}
		k7z = false;
		return;
	}
	if (b0s)
	{
		
		k6e(b0s);
		e.preventDefault(); 
		
	}
	k7z = false;
}

function m7p(y2n)
{
	s9v[y2n].l3w.o1a.a5f();
}

function k6e(b0s)
{
	if (l1o == -1) return;

	if (b0s == q5f)
	{
		s9v[l1o].l3w.j7i.q4k.e1j();
	}
	else if (b0s == z7o)
	{
		s9v[l1o].l3w.j7i.q4k.l9v();
	}
	else if (b0s == r3o || b0s == w4t || b0s == g6j ||
	b0s == c2u || b0s == x5i || b0s == b8t ||
	b0s == v9v || b0s == e9u ||
	b0s == e0y || b0s == c1t)
	{
		s9v[l1o].l3w.j7i.q4k.z5m(b0s);
	}
	else if (b0s == h4r || b0s == d0f || b0s == u3u)
	{
		s9v[l1o].doFlipBoard();
	}
}

function v5q(e1l, e5s)
{
	let k2x = e1l.length;
	let g3o = 0;

	function check(n)
	{
		if (n == k2x)
		{
			e5s();
		}
	}

	for (let i = 0; i < e1l.length; ++i)
	{
    let w5y = e1l[i];
		let img = document.createElement("img");
		img.u2n = e1l[i].replace("\x2e\x62\x6d\x70", "").replace("\x2e\x67\x69\x66", "").replace("\x2e\x6a\x70\x67", "").replace("\x2e\x70\x6e\x67", "").replace("\x2e\x73\x76\x67", "");
		j2k.add(img);
		img.addEventListener("\x6c\x6f\x61\x64", function()
		{
			g3o++;
			check(g3o);
		});
		img.src = w5y;
	}
}

function x4s()
{
 	v5q(e4r(), j7e);
  
  
}

function f4i()
{
	for (const s9p of s9v)
	{
		s9p.f4i();
	}
}

function j7e()
{
	let p3l = document.getElementsByClassName("\x74\x64\x72\x65\x70\x6c\x61\x79");
	for (const v5r of p3l)
	{
		let s9p = new b9s();
		s9p.l0g(s9v.length, v5r, v5r.innerHTML);
		s9p.j4a();
		s9v.push(s9p);
	}
	if (s9v.length)
	{
		l1o = 0;
	}
	window.addEventListener("\x72\x65\x73\x69\x7a\x65", f4i);
	f4i();
}

function o9x(w3g, h9e)
{
	let button = document.getElementById(w3g);
	if (h9e)
	{
		button.classList.remove('replayButtonDisabled');
	}
	else
	{
		button.classList.add('replayButtonDisabled');
	}
}

function y3m(button, h9e)
{
	if (h9e)
	{
		button.classList.remove('replayButtonDisabled');
	}
	else
	{
		button.classList.add('replayButtonDisabled');
	}
}

const p9p = 'Coordinates';
const x2v = 'Pieces';
const r2o = 'MovesFontSize';
const t2b = 'SearchTime';
const o2p = 'MultiPV';
const p4g = 'Threads';
const o6j = 'Memory';

function y5i()
{
  const coordinatesValue = localStorage.getItem(p9p);
  if (coordinatesValue === null)
  {
    z1t.c5v = true;
  }
  else
  {
    z1t.c5v = (coordinatesValue === 'true');
  }

  const piecesValue = localStorage.getItem(x2v);
  if (piecesValue === null)
  {
    z1t.w7y = 0;
  }
  else
  {
    z1t.w7y = piecesValue;
  }
  g4i(z1t.w7y);

  const movesFontSizeValue = localStorage.getItem(r2o);
  if (movesFontSizeValue === null)
  {
    y9m.e3h = 15;
  }
  else
  {
    y9m.e3h = movesFontSizeValue;
  }

  
  const searchTime = localStorage.getItem(t2b);
  if (searchTime === null)
  {
    o4l = 10; 
  }
  else
  {
    o4l = searchTime;
  }
  const p2m = localStorage.getItem(o2p);
  if (p2m === null)
  {
    i7v = 1;
  }
  else
  {
    i7v = p2m;
  }
  const threads = localStorage.getItem(p4g);
  if (threads === null)
  {
    const logicalThreads = navigator.hardwareConcurrency || 4;
    const defaultThreads = Math.max(1, logicalThreads - 1);
    x0j = defaultThreads;
  }
  else
  {
    x0j = threads;
  }
  const memory = localStorage.getItem(o6j);
  if (memory === null)
  {
    o4i = 4; 
  }
  else
  {
    o4i = memory;
  }
}
const y5a =
[
	[ f4v.d1e, 			  	""      ],
	[ f4v.x1i,  		 		"\x67\x61\x6d\x65"  ],
	[ f4v.z2e,    		 	"\x6d\x61\x74\x63\x68" ],
	[ f4v.l6i,  	"\x74\x6f\x75\x72\x6e" ],
	[ f4v.e6u,   			"\x73\x77\x69\x73\x73" ],
	[ f4v.g9c,    	"\x6b\x2e\x6f\x2e"  ],
	[ f4v.q8e,	"\x73\x69\x6d\x75\x6c" ],
	[ f4v.c9x,	"\x73\x63\x68\x65\x76" ]
];

const v8e =
[
	[ f0j.q9c, ""        ],
	[ f0j.q8l,  "\x28\x72\x61\x70\x69\x64\x29" ],
	[ f0j.w3w,  "\x28\x62\x6c\x69\x74\x7a\x29" ],
	[ f0j.h0o,   "\x28\x63\x6f\x72\x72\x29"  ]
];

const h8d =
[
	[ n8u.d1e,     		 ""     ],
	[ n8u.d7w,       		 "\x24\x31\x34\x35" ],
	[ n8u.s4n, 		 "\x24\x31\x34\x32" ],
	[ n8u.o5v, 		 "\x24\x31\x34\x33" ],
	[ n8u.c6m, "\x24\x31\x34\x34" ],
	[ n8u.e4m,  "\x24\x31\x34\x30" ],
	[ n8u.s9h, "\x24\x31\x34\x31" ]
];

const v5z =
[
	[ c8l.d1e,     		""   ],
	[ c8l.p5g,       	"\x24\x31" ],
	[ c8l.y7x, 			  	"\x24\x32" ],
	[ c8l.g2p,	"\x24\x35" ],
	[ c8l.g7c, 		  "\x24\x36" ],
	[ c8l.r9v,  	"\x24\x33" ],
	[ c8l.u3z, 		  "\x24\x34" ],
	[ c8l.s8n, 		"\x24\x32\x32" ],
	[ c8l.g5y, 		"\x24\x38" ]
];

const r3v =
[
	[ b4c.d1e,     						""     ],
	[ b4c.i3f,      "\x24\x31\x38"  ],
	[ b4c.u6l, 					"\x24\x31\x36"  ],
	[ b4c.l6h,	"\x24\x31\x34"  ],
	[ b4c.o9f, 						"\x24\x31\x31"  ],
	[ b4c.h5s,  						"\x24\x31\x33"  ],
	[ b4c.e7o,  "\x24\x31\x35"  ],
	[ b4c.o0g, 					"\x24\x31\x37"  ],
	[ b4c.i8a, 			"\x24\x31\x39"  ],
	[ b4c.k5j,					"\x24\x34\x34"  ],
	[ b4c.x5f, 					"\x24\x31\x33\x32" ],
	[ b4c.y6r,  					"\x24\x33\x36"  ],
	[ b4c.x7q, 							"\x24\x34\x30"  ],
	[ b4c.x1h, 			  "\x24\x31\x33\x38" ],
	[ b4c.c7a,	"\x24\x33\x32"  ],
	[ b4c.x6r, 							"\x24\x31\x34\x36" ]
];

const l5t =
[
	[ o9q.d1e,     		""     ],
	[ o9q.t0j,     "\x24\x35\x31"  ],
	[ o9q.g3i, 			"\x24\x35\x32"  ],
	[ o9q.r6z,	    		"\x24\x35\x33"  ]
];

const c2f =
[
	[ k2e.e8e, 			 	""       ],
	[ k2e.g3i,   		"\x6d\x69\x64\x64\x6c\x65" ],
	[ k2e.t3g,   	   	 	"\x6c\x6f\x77"    ]
];


function b7o(o8m)
{
	return v8e[o8m][1];
}

function j9h(z3p)
{
	for (const o8m of v8e)
	{
		if (o8m[1] == z3p)
		{
			return o8m[0];
		}
	}
	return f0j.q9c;
}

function y7r(type)
{
	return y5a[type][1];
}

function x3c(z3p)
{
	for (const q1j of y5a)
	{
		if (q1j[1] == z3p)
		{
			return q1j[0];
		}
	}
	return f4v.d1e;
}

function z0t(p3p)
{
	return h8d[p3p][1];
}

function v3t(z3p)
{
	for (const p3p of h8d)
	{
		if (p3p[1] == z3p)
		{
			return p3p[0];
		}
	}
	return n8u.d1e;
}

function m9t(style)
{
	return v5z[style][1];
}

function k2h(z3p)
{
	for (const style of v5z)
	{
		if (style[1] == z3p)
		{
			return style[0];
		}
	}
	return c8l.d1e;
}

function n6p(y9t)
{
	return r3v[y9t][1];
}

function z7p(z3p)
{
	for (const y9t of r3v)
	{
		if (y9t[1] == z3p)
		{
			return y9t[0];
		}
	}
	return b4c.d1e;
}

function e2r(z4d)
{
	return l5t[z4d][1];
}

function u5b(z3p)
{
	for (const i9f of l5t)
	{
		if (i9f[1] == z3p)
		{
			return i9f[0];
		}
	}
	return o9q.d1e;
}

function v6u(z3p)
{
	return z3p.length == 0 ||
		z3p == "\x3f" ||
		z3p == "\x2d" ||
		z3p == "\x2a" ||
		z3p == "\x3f\x3f\x3f\x3f\x2e\x3f\x3f\x2e\x3f\x3f";
}

function q1o(z3p)
{
	if (v6u(z3p))
	{
		return "";
	}
	else
	{
		return z3p.trim();
	}
}

function f8m(z3p, s7r)
{
	if (v6u(z3p))
	{
		return s7r;
	}
	else
	{
		return j3e(z3p, s7r);
	}
}

function e9c(y9t)
{
	return y9t ? y9t.toString() : "";
}

function e0q(j8l)
{
	return c2f[j8l][1];
}

function l4l(z3p)
{
	for (const j8l of c2f)
	{
		if (j8l[1] == z3p)
		{
			return j8l[0];
		}
	}
	return k2e.e8e;
}

function s4u(r7y)
{
	if (!r7y)
	{
		return "";
	}
	else
	{
		let div = Math.trunc(r7y / 60);
		let o5c = r7y % 60;
		return div.toString() + "\x2e" + o5c.toString().padStart(2, '0');
	}
}

function v1x(n4t)
{
	switch (n4t)
	{
		case o9d.q8u:
			return "\x31\x2d\x30";
		case o9d.y8o:
			return "\x31\x2f\x32\x2d\x31\x2f\x32";
		case o9d.k6l:
			return "\x30\x2d\x31";
		default:
			return "\x2a";
	}
}

function t5j(n8g)
{
	if (n8g > 0 && n8g <= 9999)
	{
		return n8g.toString().padStart(4, '0');
	}
	else
	{
		return "\x2d";
	}
}

function f0l(u9c)
{
	if (u9c.k2v())
	{
		return "\x3f\x3f\x3f\x3f\x2e\x3f\x3f\x2e\x3f\x3f";
	}
	let z3p = '';
	if (u9c.o6x)
	{
		z3p = u9c.o6x.toString().padStart(4, '0');
	}
	else
	{
		z3p = "\x3f\x3f\x3f\x3f";
	}
	z3p += "\x2e";
	if (u9c.l6c)
	{
		let m6h = u9c.l6c.toString().padStart(2, '0');
		z3p += m6h;
	}
	else
	{
		z3p += "\x3f\x3f";
	}
	z3p += "\x2e";
	if (u9c.x4l)
	{
		let y0n = u9c.x4l.toString().padStart(2, '0');;
		z3p += y0n;
	}
	else
	{
		z3p += "\x3f\x3f";
	}
	return z3p;
}

function j4q(q9l)
{
	if (v6u(q9l))
	{
		return new b2s();
	}
	else
	{
		let u9c = new b2s();
		u9c.z5w("\x79\x79\x79\x79\x2e\x6d\x6d\x2e\x64\x64", q9l);
		return u9c;
	}
}

function o7a(q9l, l6i)
{
	l6i.d2s = (q9l.indexOf("\x74\x65\x61\x6d") != -1);
	l6i.type = f4v.d1e;
	for (const q1j of y5a)
	{
		if (q9l.indexOf(q1j[1]) != -1)
		{
			l6i.type = q1j[0];
			break;
		}
	}
	l6i.o8m = f0j.q9c;
	for (const o8m of v8e)
	{
		if (q9l.indexOf(o8m[1]) != -1)
		{
			l6i.o8m = o8m[0];
			break;
		}
	}
}

function b6b(q9l, p3r)
{
	p3r.a8d = 0;
	p3r.b6m = 0;
	let p2d = q9l.indexOf("\x2e");
	if (p2d != -1)
	{
		let a1r = q9l.substr(0, p2d);
		p3r.a8d = j3e(a1r, 0);
		let v7h = q9l.substr(p2d + 1, q9l.length);
		p2d = v7h.indexOf("\x2e");
		if (p2d != -1)
		{
			a1r = v7h.substr(0, p2d);
			p3r.b6m = j3e(a1r, 0);
		}
		else
		{
			p3r.b6m = j3e(v7h, 0);
		}
	}
	else
	{
		p3r.a8d = j3e(q9l, 0);
	}
}

function x0a(p3r)
{
	let q9l = '';
	if (p3r.b6m)
	{
		q9l = p3r.a8d.toString() + "\x2e" + p3r.b6m.toString();
	}
	else if (p3r.a8d)
	{
		q9l = p3r.a8d.toString();
	}
	return q9l;
}

function b0a(q9l)
{
	if (q9l == "\x32\x2d\x30" || q9l == "\x32\x30" || q9l == "\x31\x2d\x30" || q9l == "\x31\x30")
	{
		return o9d.q8u;
	}
	else if (q9l == "\x31\x2d\x31" || q9l == "\x31\x31" || q9l == "\x31\x2f\x32\x2d\x31\x2f\x32" ||
		q9l == "\x31\x2f\x32\x31\x2f\x32" || q9l == "\x30\x2e\x35\x2d\x30\x2e\x35")
	{
		return o9d.y8o;
	}
	else if (q9l == "\x30\x2d\x32" || q9l == "\x30\x32" || q9l == "\x30\x2d\x31" || q9l == "\x30\x31")
	{
		return o9d.k6l;
	}
	else
	{
		return o9d.d1e;
	}
}

function o6c(q9l)
{
	return j3e(q9l, 0);
}

function j3m(q9l)
{
	return c4p(q9l);
}

function h6d(q9l)
{
	return l6w(q9l);
}

function f5s(y9t)
{
	return y9t ? "\x31" : "";
}

function n4w(q9l)
{
	return q9l == "\x31";
}

function a7k(p6u)
{
	let p3r = new m3k();

	
	p3r.z0u.n9f.k2y(q1o(p6u.a9q));
	if (!v6u(p6u.j8o))
	{
		p3r.z0u.t8b.w3g = q1o(p6u.j8o);
		p3r.z0u.t8b.p4e = f8m(p6u.c4t, 0);
		if (!v6u(p6u.a8l))
		{
			let u9c = j4q(p6u.a8l);
			p3r.z0u.t8b.o6x = u9c.o6x;
		}
		p3r.z0u.t8b.r3t = n4w(p6u.j8e);
		p3r.z0u.t8b.v0e = n7a(q1o(p6u.k9q));
	}
	p3r.z0u.n8g = o6c(q1o(p6u.d4r));
	p3r.z0u.p0p = h6d(q1o(p6u.a2j));
	p3r.z0u.g9g = q1o(p6u.f7r);
	p3r.z0u.v0e = s0y(q1o(p6u.k9k));

	
	p3r.u6y.n9f.k2y(q1o(p6u.s6h));
	if (!v6u(p6u.n5l))
	{
		p3r.u6y.t8b.w3g = q1o(p6u.n5l);
		p3r.u6y.t8b.p4e = f8m(p6u.t6q, 0);
		if (!v6u(p6u.v9n))
		{
			let u9c = j4q(p6u.v9n);
			p3r.u6y.t8b.o6x = u9c.o6x;
		}
		p3r.u6y.t8b.r3t = n4w(p6u.d4q);
		p3r.u6y.t8b.v0e = n7a(q1o(p6u.i8g));
	}
	p3r.u6y.n8g = o6c(q1o(p6u.z7x));
	p3r.u6y.p0p = h6d(q1o(p6u.z3v));
	p3r.u6y.g9g = q1o(p6u.g8m);
	p3r.u6y.v0e = s0y(q1o(p6u.u4n));

	
	p3r.l6i.g9g = q1o(p6u.q5u);
	p3r.l6i.a9d = q1o(p6u.q6f);
	p3r.l6i.g5c = j4q(p6u.n1v);
	p3r.l6i.h9j = j4q(p6u.e2f);

	o7a(q1o(p6u.q1j), p3r.l6i);
	
	
	
	let g5h = j9h(p6u.g5h);
	if (g5h != f0j.q9c)
	{
		p3r.l6i.o8m = g5h;
	}
	p3r.l6i.v0e = n7a(q1o(p6u.x2m));
	p3r.l6i.z5s = f8m(p6u.m9x, 0);
	let q1j = x3c(p6u.q1j);
	if (q1j != f4v.d1e)
	{
		p3r.l6i.type= q1j;
	}
	p3r.l6i.k7a = f8m(p6u.f5u, 0);
	p3r.l6i.d2s = n4w(p6u.m1d);
	p3r.l6i.e5e = n4w(p6u.i2q);
	p3r.l6i.r0m = n4w(p6u.b1x);
	p3r.l6i.f0k = n4w(p6u.h5t);

	
	p3r.p0d.w3g = q1o(p6u.p0d);

	
	p3r.i9k.g9g = q1o(p6u.f8g);
	p3r.i9k.z3f = q1o(p6u.w8i);
	p3r.i9k.k6w = j4q(p6u.v3d);
	p3r.i9k.x5s = f8m(p6u.w2o, 0);
	p3r.i9k.c1s = j4q(p6u.h1v);
	p3r.i9k.j8l = l4l(p6u.r9j);

	
	p3r.g9g.g9g = q1o(p6u.g9g);

	
	p3r.u9c = j4q(p6u.u9c);
	p3r.n4t = b0a(q1o(p6u.n4t));
	p3r.q2o = j3m(q1o(p6u.q2o));
	b6b(q1o(p6u.a8d), p3r);

	
	let u7h = f8m(p6u.u7h, 0);
	p3r.u7h.d7c(u7h);

  
  p3r.u2n.d5c = p6u.d5c;

	return p3r;
}

function d3x(p3r)
{
	let p6u = new l6g();

	
	p6u.a9q = p3r.z0u.n9f.w3g();
	if (p3r.z0u.t8b.w3g.length)
	{
		p6u.j8o = p3r.z0u.t8b.w3g;
		if (p3r.z0u.t8b.p4e)
		{
			p6u.c4t = p3r.z0u.t8b.p4e;
		}
		if (p3r.z0u.t8b.o6x)
		{
			let s2z = new b2s();
			s2z.o6x = p3r.z0u.t8b.o6x;
			p6u.a8l = f0l(s2z);
		}
		if (p3r.z0u.t8b.r3t)
		{
			p6u.j8e = f5s(p3r.z0u.t8b.r3t);
		}
		if (p3r.z0u.t8b.v0e != y2m.d1e)
		{
			p6u.k9q = e6a(p3r.z0u.t8b.v0e);
		}
	}
	p6u.d4r = t5j(p3r.z0u.n8g);
	p6u.a2j = s4u(p3r.z0u.p0p);
	p6u.f7r = p3r.z0u.g9g;

	
	p6u.s6h = p3r.u6y.n9f.w3g();
	if (p3r.u6y.t8b.w3g.length)
	{
		p6u.n5l = p3r.u6y.t8b.w3g;
		if (p3r.u6y.t8b.p4e)
		{
			p6u.t6q = p3r.u6y.t8b.p4e;
		}
		if (p3r.u6y.t8b.o6x)
		{
			let d4o = new b2s();
			d4o.o6x = p3r.u6y.t8b.o6x;
			p6u.v9n = f0l(d4o);
		}
		if (p3r.u6y.t8b.r3t)
		{
			p6u.d4q = f5s(p3r.u6y.t8b.r3t);
		}
		if (p3r.u6y.t8b.v0e != y2m.d1e)
		{
			p6u.i8g = e6a(p3r.u6y.t8b.v0e);
		}
	}
	p6u.z7x = t5j(p3r.u6y.n8g);
	p6u.z3v = s4u(p3r.u6y.p0p);
	p6u.g8m = p3r.u6y.g9g;

	
	p6u.q5u = p3r.l6i.g9g;
	p6u.q6f = p3r.l6i.a9d;
	p6u.n1v = f0l(p3r.l6i.g5c);
	p6u.e2f = f0l(p3r.l6i.h9j);
	p6u.g5h = b7o(p3r.l6i.o8m);
	p6u.m9x = e9c(p3r.l6i.z5s);
	p6u.x2m = e6a(p3r.l6i.v0e);
	p6u.q1j = y7r(p3r.l6i.type);
	p6u.f5u = e9c(p3r.l6i.k7a);
	p6u.m1d = f5s(p3r.l6i.d2s);
	p6u.i2q = f5s(p3r.l6i.e5e);
	p6u.b1x = f5s(p3r.l6i.r0m);
	p6u.h5t = f5s(p3r.l6i.f0k);

	
	p6u.p0d = p3r.p0d.w3g;

	
	p6u.f8g = p3r.i9k.g9g;
	p6u.w8i = p3r.i9k.z3f;
	p6u.v3d = f0l(p3r.i9k.k6w);
	p6u.w2o = e9c(p3r.i9k.x5s);
	p6u.h1v = f0l(p3r.i9k.c1s);
	p6u.r9j = e0q(p3r.i9k.j8l);

	
	p6u.g9g = p3r.g9g.g9g;

	
	p6u.u9c = f0l(p3r.u9c);
	p6u.n4t = v1x(p3r.n4t);
	p6u.q2o = r6q(p3r.q2o);
	p6u.a8d = x0a(p3r);

	
	p6u.u7h = e9c(p3r.u7h.g6m());

	return p6u;
}

const g3u  					= "\x57\x68\x69\x74\x65";
const f9j					= "\x57\x68\x69\x74\x65\x54\x65\x61\x6d";
const k7k 				= "\x57\x68\x69\x74\x65\x54\x65\x61\x6d\x4e\x75\x6d\x62\x65\x72";
const m8s 					= "\x57\x68\x69\x74\x65\x54\x65\x61\x6d\x59\x65\x61\x72";
const j9b 				= "\x57\x68\x69\x74\x65\x54\x65\x61\x6d\x53\x65\x61\x73\x6f\x6e";
const p6q 			= "\x57\x68\x69\x74\x65\x54\x65\x61\x6d\x43\x6f\x75\x6e\x74\x72\x79";
const m1u 						= "\x57\x68\x69\x74\x65\x52\x61\x74\x69\x6e\x67";
const x9m 							= "\x57\x68\x69\x74\x65\x54\x69\x6d\x65";
const e2c 							= "\x57\x68\x69\x74\x65\x45\x6c\x6f";
const l1s  						= "\x57\x68\x69\x74\x65\x54\x69\x74\x6c\x65";
const g1s						= "\x57\x68\x69\x74\x65\x43\x6f\x75\x6e\x74\x72\x79";

const d2p						= "\x42\x6c\x61\x63\x6b";
const r0w					= "\x42\x6c\x61\x63\x6b\x54\x65\x61\x6d";
const t3z 				= "\x42\x6c\x61\x63\x6b\x54\x65\x61\x6d\x4e\x75\x6d\x62\x65\x72";
const c8e 					= "\x42\x6c\x61\x63\x6b\x54\x65\x61\x6d\x59\x65\x61\x72";
const k8e 				= "\x42\x6c\x61\x63\x6b\x54\x65\x61\x6d\x53\x65\x61\x73\x6f\x6e";
const a9s 			= "\x42\x6c\x61\x63\x6b\x54\x65\x61\x6d\x43\x6f\x75\x6e\x74\x72\x79";
const j8a 						= "\x42\x6c\x61\x63\x6b\x52\x61\x74\x69\x6e\x67";
const s6y 							= "\x42\x6c\x61\x63\x6b\x54\x69\x6d\x65";
const m1g 							= "\x42\x6c\x61\x63\x6b\x45\x6c\x6f";
const r8h  						= "\x42\x6c\x61\x63\x6b\x54\x69\x74\x6c\x65";
const t5r						= "\x42\x6c\x61\x63\x6b\x43\x6f\x75\x6e\x74\x72\x79";

const m4t 				= "\x45\x76\x65\x6e\x74";
const d4p				= "\x53\x69\x74\x65";
const w0m 			 	= "\x45\x76\x65\x6e\x74\x44\x61\x74\x65";
const g1d 		 	= "\x45\x76\x65\x6e\x74\x45\x6e\x64\x44\x61\x74\x65";
const h9n 			 	= "\x45\x76\x65\x6e\x74\x53\x70\x65\x65\x64";
const e4y 	 	= "\x45\x76\x65\x6e\x74\x43\x61\x74\x65\x67\x6f\x72\x79";
const l0j 		 	= "\x45\x76\x65\x6e\x74\x43\x6f\x75\x6e\x74\x72\x79";
const c3c 			 	= "\x45\x76\x65\x6e\x74\x54\x79\x70\x65";
const s3l 		 	= "\x45\x76\x65\x6e\x74\x52\x6f\x75\x6e\x64\x73";
const m0l 			 	= "\x45\x76\x65\x6e\x74\x54\x65\x61\x6d\x73";
const p2h		 	= "\x45\x76\x65\x6e\x74\x43\x6f\x6d\x70\x6c\x65\x74\x65";
const l6s 	= "\x45\x76\x65\x6e\x74\x54\x68\x72\x65\x65\x50\x6f\x69\x6e\x74\x73";
const i6l	= "\x45\x76\x65\x6e\x74\x42\x6f\x61\x72\x64\x50\x6f\x69\x6e\x74\x73";

const h0f 							= "\x41\x6e\x6e\x6f\x74\x61\x74\x6f\x72";

const i1y 				 		= "\x53\x6f\x75\x72\x63\x65\x54\x69\x74\x6c\x65";
const t8c 				 		= "\x50\x75\x62\x6c\x69\x63\x61\x74\x69\x6f\x6e";
const q8r		 		= "\x53\x6f\x75\x72\x63\x65\x50\x75\x62\x6c\x69\x73\x68\x65\x72";
const u4a		 		= "\x50\x75\x62\x6c\x69\x63\x61\x74\x69\x6f\x6e\x44\x61\x74\x65";
const s4r 				 		= "\x53\x6f\x75\x72\x63\x65\x44\x61\x74\x65";
const y8y 		= "\x53\x6f\x75\x72\x63\x65\x56\x65\x72\x73\x69\x6f\x6e\x4e\x75\x6d\x62\x65\x72";
const k3q 	 		= "\x53\x6f\x75\x72\x63\x65\x56\x65\x72\x73\x69\x6f\x6e\x44\x61\x74\x65";
const s1a 			 		= "\x53\x6f\x75\x72\x63\x65\x51\x75\x61\x6c\x69\x74\x79";

const m8c 					 		    = "\x54\x69\x74\x6c\x65";

const q9a 							 		= "\x44\x61\x74\x65";
const t3o 								= "\x52\x65\x73\x75\x6c\x74";
const v5t 										= "\x45\x43\x4f";
const x8g 									= "\x52\x6f\x75\x6e\x64";

const v0l			 							= "\x54\x61\x67\x73";

const y8l 									= "\x53\x65\x74\x75\x70";
const p4t 										= "\x46\x45\x4e";
const c2b 							= "\x50\x6c\x79\x43\x6f\x75\x6e\x74";

const x7d      							= "\x47\x55\x49\x44";

const r5y = "\x28";
const t8a   = "\x29";
const y1t    = "\x7b";

class x7l
{

constructor()
{
  this.j3b = new s7c();
  this.a7a = new x6l();
  this.b0e = new p6t();
  this.r6w = false;
  this.k6k = false;
  this.h7b = false;
  this.q9k = '';
}

}

class o1s
{

constructor(x7m)
{
	this.p3f = new l6g();
	this.z6a = x7m;
	this.l1h = 0;
	this.w5z = '';
	this.i4m = 0;
	this.r5w = 0;
	this.o3o = '';
	this.r4y = 0;
	this.z3w = false;
	this.z7r = '';
	this.h1s = '';
	this.b6o = null;
	this.v6m = new z4m();
	this.c4c = '';
	this.n1z = false;
 	this.w7k = false;
	this.n5j = false;
}

p8x()
{
  this.r4y = 0;
	let x1i = new i0b();
	this.b6o = x1i.l3y;
	try
	{
		this.w1u();
	}
	catch (err)
	{
	}
	x1i.g0g = a7k(this.p3f);
  x1i.d7r = this.r4y;
	return x1i;
}

w1u()
{
	this.z3w = false;
	this.b1i();
	if (this.z3w)
	{
		this.x1z = r4l(this.h1s);
		this.b6o.c1i(this.x1z, 1);
	}
 	this.d1c();
}

m9g()
{
	if (this.z6a.length == 0)
	{
		return false;
	}
	if (this.l1h >= this.z6a.length)
	{
		return false;
	}
	else
	{
		this.w5z = this.z6a[this.l1h];
		this.i4m = this.w5z.length;
		this.r5w = 0;
		this.l1h++;
		return true;
	}
}

b1i()
{
	this.n5j = false;
	this.w7k = false;
	while (true)
	{
		if (!this.m9g())
		{
			return;
		}
		this.p8l();
		if (!this.r2e())
		{
			return;
		}
		this.r7n();
	}
}


l8u(n8s)
{
	let q9l = this.o3o.substr(1, this.o3o.length - 1);
	return q9l.toUpperCase() === n8s.toUpperCase();
}

d1c()
{
 	if (this.o3o.length == 0) return;
	this.n1z = false;

	while (this.o3o[0] == '{')
	{
		let z6n = this.p4i();
    let e5u = new x7l();
		this.e7x(z6n, e5u);
    if (!e5u.j3b.k2v())
		{
			this.b6o.m7d(e5u.j3b);
		}
 		if (!e5u.a7a.k2v())
		{
			this.b6o.l7d(e5u.a7a);
		}
		if (!e5u.b0e.k2v())
		{
			this.b6o.c8d(e5u.b0e);
		}
 		z6n = e5u.q9k.trim();
    if (z6n.length)
    {
      
      
      if (z6n.startsWith("\x5b\x25\x61") && z6n.length > 7)
      {
        z6n = z6n.substr(7, z6n.length).trim();
      }
      let u4x = this.b6o.u4x();
      if (u4x.length)
      {
        u4x += ' ';
      }
      u4x += z6n;
      this.b6o.a1f(u4x);
		}
		this.p8l();
		if (this.o3o.length == 0)
		{
			return;
		}
	}
	this.l8a(this.b6o.y5m(), this.b6o.x1z());
}

l8a(p2g, r5b)
{
  let p2d = p2g.o0o();
  let j3g = r5b.o0o();

	let d5e = null;
 	let t2h = new d5f();

	do
	{
		if (this.o3o == r5y)
		{
			if (!d5e)
			{
				throw "\x65\x72\x72\x6f\x72";
			}
			if (!this.p8l())
			{
				throw "\x65\x72\x72\x6f\x72";
			}

 			j3g.y9l(p2d.i4x.z2g());
			j3g.a4l(t2h);
			this.b6o.y9l(p2d); 
      this.l8a(p2d, j3g);
			this.b6o.r9f(p2d); 
			j3g.r9f(p2d.i4x.z2g());

			while (this.p8l())
			{
				if (this.o3o != r5y)
				{
					break;
				}
				if (!this.p8l())
				{
					throw "\x65\x72\x72\x6f\x72";
				}
        j3g.y9l(p2d.i4x.z2g());
				j3g.a4l(t2h);
				this.b6o.y9l(p2d); 
				this.l8a(p2d, j3g);
				this.b6o.r9f(p2d);  
				j3g.r9f(p2d.i4x.z2g());
			}
		}

		if (this.o3o == t8a)
		{
			break;
		}

		if (
			this.o3o == "\x31\x2d\x30" ||
			this.o3o == "\x32\x2d\x30" ||
			this.o3o == "\x30\x2d\x31" ||
			this.o3o == "\x30\x2d\x32" ||
			this.o3o == "\x31\x2f\x32\x2d\x31\x2f\x32" ||
			this.o3o == "\x31\x2d\x31" ||
			this.o3o == "\x2a" ||
			this.o3o == "\x2a\x2a" ||
			this.o3o == "\x2d\x2a" ||
			this.o3o == "\x31\x2d\x30\x2a" ||
			this.o3o == "\x32\x2d\x30\x2a" ||
			this.o3o == "\x30\x2d\x31\x2a" ||
			this.o3o == "\x30\x2d\x32\x2a" ||
			this.o3o == "\x31\x2f\x32\x2d\x31\x2f\x32\x2a" ||
			this.o3o == "\x31\x2d\x31\x2a" ||
			this.o3o == "\x32\x2d\x30\x30\x2a" ||
			this.o3o == "\x30\x30\x2d\x32\x2a")
			break;

		if (this.o3o[0] == '$')
		{
			if (!d5e)
			{
				throw "\x65\x72\x72\x6f\x72";
			}
			let p3p = v3t(this.o3o);
			if (p3p != n8u.d1e)
			{
				d5e.s5h(p3p);
				continue;
			}
			let style = k2h(this.o3o);
			if (style != c8l.d1e)
			{
				d5e.h8a(style);
				continue;
			}
			let y9t = z7p(this.o3o);
			if (y9t != b4c.d1e)
			{
				d5e.p4n(y9t);
				continue;
			}
			let z4d = u5b(this.o3o);
			if (z4d != o9q.d1e)
			{
				d5e.e5k(z4d);
				continue;
			}
			continue;
		}
		if (this.o3o[0] == '{')
		{
			let z6n = this.p4i();
      let e5u = new x7l();
  		this.e7x(z6n, e5u);
      if (!e5u.j3b.k2v())
      {
		  	if (d5e)
			  {
				  d5e.z1f(e5u.j3b);
				}
			}
   		if (!e5u.a7a.k2v())
      {
				if (d5e)
				{
					d5e.h4h(e5u.a7a);
				}
			}
   		if (!e5u.b0e.k2v())
      {
				if (d5e)
				{
					d5e.w8l(e5u.b0e);
				}
			}
      if (e5u.k6k)
      {
				if (d5e)
				{
					d5e.m1m();
				}
			}
      if (e5u.h7b)
      {
				if (d5e)
				{
					d5e.c0g();
				}
			}
   		z6n = e5u.q9k.trim();
      if (!z6n.length)
      {
        continue;
      }
			if (d5e)
			{
        let z8s = d5e.z8s();
        if (z8s.length)
        {
          z8s += ' ';
        }
        z8s += z6n;
				d5e.l3z(z8s);
			}
			else
			{
        if (this.c4c.length)
        {
   				this.c4c += ' ';
        }
				this.c4c += z6n;
				this.n1z = true;
			}
			continue;
		}
		if (!this.g3t())
		{
			continue;
		}
		let s6s = false;
		if (this.o3o[this.o3o.length] == '*')
		{
			this.o3o = this.o3o.substr(0, this.o3o.length - 1);
			s6s = true;
		}
 		let q2l = this.b6s(this.o3o);
    let z2g = m6l(j3g, this.o3o);
 		t2h = j3g.t2h();
		j3g.r9f(z2g);
		let i4x = l9h(z2g);
    i4x.h8a(q2l);
    this.b6o.v9t(p2d, i4x);
		d5e = p2d.i4x;
		if (this.n1z)
		{
			d5e.e5y(this.c4c);
			this.n1z = false;
      this.c4c = '';
		}
		if (s6s)
		{
			break;
		}
	} while (this.p8l());
}

b6s(q9l)
{
	if (q9l.endsWith("\x3f\x3f"))
	{
		q9l = q9l.subString(0, q9l.length-2);
		return c8l.u3z;
	}
	else if (q9l.endsWith("\x21\x21"))
	{
		q9l = q9l.subString(0, q9l.length-2);
		return c8l.r9v;
	}
	else if (q9l.endsWith("\x3f\x21"))
	{
		q9l = q9l.subString(0, q9l.length-2);
		return c8l.g7c;
	}
	else if (q9l.endsWith("\x21\x3f"))
	{
		q9l = q9l.subString(0, q9l.length-2);
		return c8l.g2p;
	}
	else if (q9l.endsWith("\x3f"))
	{
		q9l = q9l.subString(0, q9l.length-1);
		return c8l.y7x;
	}
	else if (q9l.endsWith("\x21"))
	{
		q9l = q9l.subString(0, q9l.length-1);
		return c8l.p5g;
	}
	else
	{
		return c8l.d1e;
	}
}

g3t()
{
	let p2r = this.o3o.length;
	let p2d = -1;
	for (let i = 0; i < p2r; i++)
	{
		if (this.o3o[i] == '.')
		{
			p2d = i;
		}
	}
	if (p2d != -1)
	{
		this.o3o = this.o3o.substr(p2d + 1 , p2r);
	}
	return this.o3o.length != 0;
}

p8l()
{
	this.o3o = "";
	let x7z = '';
	let index = 0;
	let p2r = 0;
	while (true)
	{
		let n4c = 0;
		if (this.r5w < this.i4m)
		{
			n4c = this.w5z[this.r5w];
		}
		else
		{
			n4c = 0;
		}
		if (!n4c)
		{
			if (p2r)
			{
				break;
			}
			if (!this.m9g())
			{
				return false;
			}
			continue;
		}
		if (n4c == ';')
		{
			if (!this.m9g())
			{
				return false;
			}
			continue;
		}
		if (n4c == '(')
		{
			if (p2r)
			{
				break;
			}
			else
			{
				this.r5w++;
				this.o3o = r5y;
				return true;
			}
		}
		if (n4c == ')')
		{
			if (p2r)
			{
				break;
			}
			else
			{
				this.r5w++;
				this.o3o = t8a;
				return true;
			}
		}
		if (n4c == '{')
		{
			if (p2r)
			{
				break;
			}
			else
			{
				this.r5w++;
				this.o3o = y1t;
				return true;
			}
		}
		if (n4c == ' ' || n4c == '\r' || n4c == '\n')
		{
			if (p2r)
			{
				this.r5w++;
				break;
			}
			else
			{
				this.r5w++;
				continue;
			}
		}
		x7z += n4c;
		index++;
		p2r++;
		this.r5w++;
	}
	if (index)
	{
		this.o3o += x7z;
	}
	return this.o3o.length != 0;
}

p4i()
{
	let q9l = '';
	let x7z = '';
	let index = 0;
	let u9l = 0;
	while (true)
	{
		let n4c = 0;
		if (this.r5w < this.i4m)
		{
			n4c = this.w5z[this.r5w];
		}
		else
		{
			n4c = 0;
		}
		if (!n4c)
		{
			if (!this.m9g())
			{
				break;
			}
			if (index > 0)
			{
				x7z += ' '; 
				index++;
			}
			continue;
		}
		if (n4c == '{')
		{
			u9l++;
		}
		if (n4c == '}')
		{
			if (u9l)
			{
				u9l--;
			}
			else
			{
				this.r5w++;
				break;
			}
		}
		x7z += n4c;
		index++;
		this.r5w++;
	}
	if (index)
	{
		q9l += x7z;
	}
	return q9l.trim();
}

x4w()
{
	this.z7r = "";

	let u9t = 0;
	let p2r = this.w5z.length;
	for (let i = p2r - 1; i >= 0; i--)
	{
		if (this.w5z[i] == ']')
		{
			u9t = i;
			break;
		}
	}
	let index = 0;
	let c6v = false;
	let x7z = '';
	while (true)
	{
		let n4c = 0;
		if (this.r5w < this.i4m)
		{
			n4c = this.w5z[this.r5w];
		}
		else
		{
			n4c = 0;
		}
		if (!n4c)
		{
			if (!this.m9g())
			{
				break;
			}
			continue;
		}
		if (n4c == '\"')
		{
			c6v = true;
			this.r5w++;
			continue;
		}
		if (n4c == ']')
		{
			if (this.r5w == u9t)
			{
				this.r5w++;
				break;
			}
		}
		if (c6v)
		{
			x7z += n4c;
			index++;
		}
		this.r5w++;
	}
	if (index)
	{
		this.z7r += x7z;
	}
}

r2e()
{
	if (this.o3o.length == 0)
	{
		return false;
	}
	if (this.o3o[0] != '[')
	{
		return false;
	}
	
	let index = this.r5w;
	let u8e = false;
	while (index < this.i4m)
	{
		let n4c = this.w5z[index++];
		if (n4c == '\"' && this.w5z[index] == ']')
		{
			index++;
			u8e = true;
			continue;
		}
		if (n4c == '\r' || n4c == '\n')
		{
			break;
		}
		if (u8e)
		{
			u8e = false;
			break;
		}
	}
	return u8e;
}

r7n()
{
	
	if (this.l8u(g3u))
	{
		this.x4w();
		this.p3f.a9q = this.z7r;
		return;
	}
	if (this.l8u(f9j))
	{
		this.x4w();
		this.p3f.j8o = this.z7r;
		return;
	}
	if (this.l8u(k7k))
	{
		this.x4w();
		this.p3f.c4t = this.z7r;
		return;
	}
	if (this.l8u(m8s))
	{
		this.x4w();
		this.p3f.a8l = this.z7r;
		return;
	}
	if (this.l8u(j9b))
	{
		this.x4w();
		this.p3f.j8e = this.z7r;
		return;
	}
	if (this.l8u(p6q))
	{
		this.x4w();
		this.p3f.k9q = this.z7r;
		return;
	}
	if (this.l8u(e2c) || this.l8u(m1u))
	{
		this.x4w();
		this.p3f.d4r = this.z7r;
		return;
	}
	if (this.l8u(x9m))
	{
		this.x4w();
		this.p3f.a2j = this.z7r;
		return;
	}
	if (this.l8u(l1s))
	{
		this.x4w();
		this.p3f.f7r = this.z7r;
		return;
	}
	if (this.l8u(g1s))
	{
		this.x4w();
		this.p3f.k9k = this.z7r;
		return;
	}

	
	if (this.l8u(d2p))
	{
		this.x4w();
		this.p3f.s6h = this.z7r;
		return;
	}
	if (this.l8u(r0w))
	{
		this.x4w();
		this.p3f.n5l = this.z7r;
		return;
	}
	if (this.l8u(t3z))
	{
		this.x4w();
		this.p3f.t6q = this.z7r;
		return;
	}
	if (this.l8u(c8e))
	{
		this.x4w();
		this.p3f.v9n = this.z7r;
		return;
	}
	if (this.l8u(k8e))
	{
		this.x4w();
		this.p3f.d4q = this.z7r;
		return;
	}
	if (this.l8u(a9s))
	{
		this.x4w();
		this.p3f.i8g = this.z7r;
		return;
	}
	if (this.l8u(m1g) || this.l8u(j8a))
	{
		this.x4w();
		this.p3f.z7x = this.z7r;
		return;
	}
	if (this.l8u(s6y))
	{
		this.x4w();
		this.p3f.z3v = this.z7r;
		return;
	}
	if (this.l8u(r8h))
	{
		this.x4w();
		this.p3f.g8m = this.z7r;
		return;
	}
	if (this.l8u(t5r))
	{
		this.x4w();
		this.p3f.u4n = this.z7r;
		return;
	}

	
	if (this.l8u(m4t))
	{
		this.x4w();
		this.p3f.q5u = this.z7r;
		return;
	}
	if (this.l8u(d4p))
	{
		this.x4w();
		this.p3f.q6f = this.z7r;
		return;
	}
	if (this.l8u(w0m))
	{
		this.x4w();
		this.p3f.n1v = this.z7r;
		return;
	}
	if (this.l8u(g1d))
	{
		this.x4w();
		this.p3f.e2f = this.z7r;
		return;
	}
	if (this.l8u(h9n))
	{
		this.x4w();
		this.p3f.g5h = this.z7r;
		return;
	}
	if (this.l8u(e4y))
	{
		this.x4w();
		this.p3f.m9x = this.z7r;
		return;
	}
	if (this.l8u(l0j))
	{
		this.x4w();
		this.p3f.x2m = this.z7r;
		return;
	}
	if (this.l8u(c3c))
	{
		this.x4w();
		this.p3f.q1j = this.z7r;
		return;
	}
	if (this.l8u(s3l))
	{
		this.x4w();
		this.p3f.f5u = this.z7r;
		return;
	}
	if (this.l8u(m0l))
	{
		this.x4w();
		this.p3f.m1d = this.z7r;
		return;
	}
	if (this.l8u(p2h))
	{
		this.x4w();
		this.p3f.i2q = this.z7r;
		return;
	}
	if (this.l8u(l6s))
	{
		this.x4w();
		this.p3f.b1x = this.z7r;
		return;
	}
	if (this.l8u(i6l))
	{
		this.x4w();
		this.p3f.h5t = this.z7r;
		return;
	}

	
	if (this.l8u(h0f))
	{
		this.x4w();
		this.p3f.p0d = this.z7r;
		return;
	}

	
	if (this.l8u(i1y))
	{
		this.x4w();
		this.p3f.f8g = this.z7r;
		return;
	}
	if (this.l8u(t8c))
	{
		this.x4w();
		this.p3f.f8g = this.z7r;
		return;
	}
	if (this.l8u(q8r))
	{
		this.x4w();
		this.p3f.w8i = this.z7r;
		return;
	}
	if (this.l8u(s4r))
	{
		this.x4w();
		this.p3f.v3d = this.z7r;
		return;
	}
	if (this.l8u(u4a))
	{
		this.x4w();
		this.p3f.v3d = this.z7r;
		return;
	}
	if (this.l8u(y8y))
	{
		this.x4w();
		this.p3f.w2o = this.z7r;
		return;
	}
	if (this.l8u(k3q))
	{
		this.x4w();
		this.p3f.h1v = this.z7r;
		return;
	}
	if (this.l8u(s1a))
	{
		this.x4w();
		this.p3f.r9j = this.z7r;
		return;
	}

	
	if (this.l8u(m8c))
	{
		this.x4w();
		this.p3f.g9g = this.z7r;
		return;
	}

	
	if (this.l8u(q9a))
	{
		this.x4w();
		this.p3f.u9c = this.z7r;
		return;
	}
	if (this.l8u(t3o))
	{
		this.x4w();
		this.p3f.n4t = this.z7r;
		return;
	}
	if (this.l8u(v5t))
	{
		this.x4w();
		this.p3f.q2o = this.z7r;
		return;
	}
	if (this.l8u(x8g))
	{
		this.x4w();
		this.p3f.a8d = this.z7r;
		return;
	}

	
	if (this.l8u(v0l))
	{
		this.x4w();
		this.p3f.u7h = this.z7r;
		return;
	}

	
	if (this.l8u(y8l))
	{
		this.x4w();
		return;
	}
	if (this.l8u(p4t))
	{
		this.x4w();
		if (this.z7r.length == 0 || this.z7r == "\x3f")
		{
			return;
		}
		this.z3w = true;
		this.h1s = this.z7r;
		return;
	}
	if (this.l8u(c2b))
	{
		this.x4w();
		this.r4y = j3e(this.z7r, 0);
		return;
	}
  
 	if (this.l8u(x7d))
	{
		this.x4w();
		this.p3f.d5c = this.z7r;
		return;
	}

}

t2f(z6n)
{
	let e6v = new s7c();
	let q9l = z6n.substr(6, z6n.length - 6);
	let l9z = q9l.split("\x2c");
	for (const s of l9z)
	{
		if (s.length < 5)
		{
			continue;
		}
		let b8x = g1t(s.substr(1, 2));
		let w8c = g1t(s.substr(3, 2));
		if (s[0] == 'R')
		{
			let f3z = a0s(b8x, w8c, c3j.x7q);
			e6v.add(f3z);
		}
		else if (s[0] == 'G')
		{
			let f3z = a0s(b8x, w8c, c3j.u1e);
			e6v.add(f3z);
		}
		else if (s[0] == 'Y')
		{
			let f3z = a0s(b8x, w8c, c3j.x1d);
			e6v.add(f3z);
		}
	}
	return e6v;
}

j4t(z6n)
{
	let i3x = new x6l();
	let q9l = z6n.substr(6, z6n.length - 6);
	let l9z = q9l.split("\x2c");
	for (const s of l9z)
	{
		if (s.length < 3)
		{
			continue;
		}
 		let h2j = g1t(s.substr(1, 2));
		if (s[0] == 'R')
		{
      let n3h = c7t(h2j, c7m.v8k);
			i3x.add(n3h);
		}
		else if (s[0] == 'G')
		{
      let n3h = c7t(h2j, c7m.i0c);
			i3x.add(n3h);
		}
		else if (s[0] == 'Y')
		{
      let n3h = c7t(h2j, c7m.s7l);
			i3x.add(n3h);
		}
	}
	return i3x;
}

d2w(z6n)
{
	let q9l = z6n.substr(6, z6n.length - 6);
	let p2d = q9l.indexOf("\x5d");
	if (p2d != -1)
	{
		let b0e = new p6t();
		let y9t = j3e(q9l.substr(0, p2d), 0);
		b0e.d7c(y9t);
		return b0e;
	}
	else
	{
		return new p6t();
	}
}


e7x(z6n, e5u)
{
	if (
		z6n.startsWith("\x5b\x25\x63\x61\x6c") ||
    z6n.startsWith("\x5b\x25\x63\x73\x62") ||
		z6n.startsWith("\x5b\x25\x63\x73\x6c") ||
		z6n.startsWith("\x5b\x25\x6d\x64\x6c") ||
		z6n.startsWith("\x5b\x25\x65\x76\x70") ||
		z6n.startsWith("\x5b\x25\x65\x76\x61\x6c") ||
		z6n.startsWith("\x5b\x25\x65\x6d\x74") ||
		z6n.startsWith("\x5b\x25\x74\x71\x75") ||
		z6n.startsWith("\x5b\x25\x74\x71\x75") ||
		z6n.startsWith("\x5b\x25\x70\x77\x73") ||
		z6n.startsWith("\x5b\x25\x70\x74\x68") ||
		z6n.startsWith("\x5b\x25\x65\x6f\x67"))
	{
		let o3j = 0;
		{
     	let w4g = z6n.indexOf("\x5b\x25\x63\x61\x6c");
			if (w4g != -1)
			{
        let v6b = z6n.indexOf("\x5d", w4g);
				if (v6b != -1)
				{
     			let z2d = z6n.substring(w4g, v6b + 1);
					e5u.j3b = this.t2f(z2d).o0o();
					if (v6b > o3j) o3j = v6b;
				}
			}
		}
		{
     	let w4g = z6n.indexOf("\x5b\x25\x63\x73\x62");
   		if (w4g != -1)
			{
        let v6b = z6n.indexOf("\x5d", w4g);
				if (v6b != -1)
				{
          let s6p = z6n.substring(w4g, v6b + 1);
					e5u.a7a = this.j4t(s6p).o0o();
					if (v6b > o3j) o3j = v6b;
				}
			}
		}
		{
      let w4g = z6n.indexOf("\x5b\x25\x63\x73\x6c");
			if (w4g != -1)
			{
        let v6b = z6n.indexOf("\x5d", w4g);
				if (v6b != -1)
				{
          let s6p = z6n.substring(w4g, v6b + 1);
					e5u.a7a = this.j4t(s6p).o0o();
					if (v6b > o3j) o3j = v6b;
				}
			}
		}
		{
      let w4g = z6n.indexOf("\x5b\x25\x6d\x64\x6c");
			if (w4g != -1)
			{
        let v6b = z6n.indexOf("\x5d", w4g);
				if (v6b != -1)
				{
          let q7b = z6n.substring(w4g, v6b + 1);
					e5u.b0e = this.d2w(q7b).o0o();
					if (v6b > o3j) o3j = v6b;
				}
			}
		}
		{
      let w4g = z6n.indexOf("\x5b\x25\x65\x76\x70");
			if (w4g != -1)
			{
        let v6b = z6n.indexOf("\x5d", w4g);
				if (v6b != -1)
				{
					if (v6b > o3j) o3j = v6b;
				}
			}
		}
		{
      let w4g = z6n.indexOf("\x5b\x25\x65\x76\x61\x6c");
			if (w4g != -1)
			{
        let v6b = z6n.indexOf("\x5d", w4g);
				if (v6b != -1)
				{
					if (v6b > o3j) o3j = v6b;
				}
			}
		}
		{
      let w4g = z6n.indexOf("\x5b\x25\x65\x6d\x74");
			if (w4g = -1)
			{
        let v6b = z6n.indexOf("\x5d", w4g);
				if (v6b != -1)
				{
					if (v6b > o3j) o3j = v6b;
				}
			}
		}
		{
      let w4g = z6n.indexOf("\x5b\x25\x74\x71\x75");
			if (w4g != -1)
			{
        let v6b = z6n.indexOf("\x5d", w4g);
				if (v6b != -1)
				{
					if (v6b > o3j) o3j = v6b;
				}
			}
		}
		{
      let w4g = z6n.indexOf("\x5b\x25\x70\x77\x73");
			if (w4g != -1)
			{
        let v6b = z6n.indexOf("\x5d", w4g);
				if (v6b != -1)
				{
          e5u.r6w = true;
					if (v6b > o3j) o3j = v6b;
				}
			}
		}
		{
      let w4g = z6n.indexOf("\x5b\x25\x70\x74\x68");
			if (w4g != -1)
			{
        let v6b = z6n.indexOf("\x5d", w4g);
				if (v6b != -1)
				{
          e5u.k6k = true;
					if (v6b > o3j) o3j = v6b;
				}
			}
		}
		{
      let w4g = z6n.indexOf("\x5b\x25\x65\x6f\x67");
			if (w4g != -1)
			{
        let v6b = z6n.indexOf("\x5d", w4g);
				if (v6b != -1)
				{
					e5u.h7b = true; 
					if (v6b > o3j) o3j = v6b;
				}
			}
		}
    e5u.q9k = z6n.substring(o3j + 1);
	}
	else
	{
		e5u.q9k = z6n;
	}
}

}

class i6u
{

constructor()
{
  this.d7r = 0;
	this.g0g = new l6g();
	this.l3y = new e5q();
}

o0o()
{
	let q8t = new i6u();
  q8t.d7r = this.d7r;
	q8t.g0g = this.g0g.o0o();
	q8t.l3y = this.l3y.o0o();
	return q8t;
}

}

class l6g
{

constructor()
{
	this.a9q = '';
	this.j8o = '';
	this.c4t = '';
	this.a8l = '';
	this.j8e = '';
	this.k9q = '';
	this.d4r = '';
	this.a2j = '';
	this.f7r = '';
  this.k9k = '';
	this.s6h = '';
	this.n5l = '';
	this.t6q = '';
	this.v9n = '';
	this.d4q = '';
	this.i8g = '';
	this.z7x = '';
	this.z3v = '';
	this.g8m = '';
  this.u4n = '';
	this.q5u = '';
	this.q6f = '';
	this.n1v = '';
	this.e2f = '';
	this.g5h = '';
	this.m9x = '';
	this.x2m = '';
	this.q1j = '';
	this.f5u = '';
	this.m1d = '';
	this.i2q = '';
	this.b1x = '';
	this.h5t = '';
	this.p0d = '';
	this.f8g = '';
	this.w8i = '';
	this.v3d = '';
	this.w2o = '';
	this.h1v = '';
	this.r9j = '';
	this.g9g = '';
	this.u9c = '';
	this.n4t = '';
	this.q2o = '';
	this.a8d = '';
	this.u7h = '';
  this.d5c = '';
}

o0o()
{
	let q0t = new l6g();

	q0t.a9q = this.a9q;
	q0t.j8o = this.j8o;
	q0t.c4t = this.c4t;
	q0t.a8l = this.a8l;
	q0t.j8e = this.j8e;
	q0t.k9q = this.k9q;
	q0t.d4r = this.d4r;
	q0t.a2j = this.a2j;
	q0t.f7r = this.f7r;
	q0t.k9k = this.k9k;

	q0t.s6h = this.s6h;
	q0t.n5l = this.n5l;
	q0t.t6q = this.t6q;
	q0t.v9n = this.v9n;
	q0t.d4q = this.d4q;
	q0t.i8g = this.i8g;
	q0t.z7x = this.z7x;
	q0t.z3v = this.z3v;
	q0t.g8m = this.g8m;
	q0t.u4n = this.u4n;

	q0t.q5u = this.q5u;
	q0t.q6f = this.q6f;
	q0t.n1v = this.n1v;
	q0t.e2f = this.e2f;
	q0t.g5h = this.g5h;
	q0t.m9x = this.m9x;
	q0t.x2m = this.x2m;
	q0t.q1j = this.q1j;
	q0t.f5u = this.f5u;
	q0t.m1d = this.m1d;
	q0t.i2q = this.i2q;
	q0t.b1x = this.b1x;
	q0t.h5t = this.h5t;

	q0t.p0d = this.p0d;

	q0t.f8g = this.f8g;
	q0t.w8i = this.w8i;
	q0t.v3d = this.v3d;
	q0t.w2o = this.w2o;
	q0t.h1v = this.h1v;
	q0t.r9j = this.r9j;

	q0t.g9g = this.g9g;

	q0t.u9c = this.u9c;
	q0t.n4t = this.n4t;
	q0t.q2o = this.q2o;
	q0t.a8d = this.a8d;

	q0t.u7h = this.u7h;
 	q0t.d5c = this.d5c;

	return q0t;
}

}


const x2b =
[
		[ y2m.d1e, 				  									"",											            "", 																	"",   ""    ],
		[ y2m.y1b, 										  "\x41\x66\x67\x68\x61\x6e\x69\x73\x74\x61\x6e",											"\x41\x66\x67\x68\x61\x6e\x69\x73\x74\x61\x6e", 												"\x61\x66", "\x41\x46\x47" ],
		[ y2m.c7i, 									 	"\x41\x6c\x61\x6e\x64\x49\x73\x6c\x61\x6e\x64\x73",										  "\x41\x6c\x61\x6e\x64", 															"\x61\x78", "\x41\x4c\x41" ],
		[ y2m.b5p,  											 	"\x41\x6c\x62\x61\x6e\x69\x61",													"\x41\x6c\x62\x61\x6e\x69\x61", 														"\x61\x6c", "\x41\x4c\x42" ],
		[ y2m.m6r,  											 	"\x41\x6c\x67\x65\x72\x69\x61",													"\x41\x6c\x67\x65\x72\x69\x61", 														"\x64\x7a", "\x44\x5a\x41" ],
		[ y2m.e3c,  								 	"\x41\x6d\x65\x72\x69\x63\x61\x6e\x53\x61\x6d\x6f\x61",										"\x41\x6d\x65\x72\x69\x63\x61\x6e\x20\x53\x61\x6d\x6f\x61", 										"\x61\x73", "\x41\x53\x4d" ],
		[ y2m.y9c,  											 	"\x41\x6e\x64\x6f\x72\x72\x61",													"\x41\x6e\x64\x6f\x72\x72\x61", 														"\x61\x64", "\x41\x4e\x44" ],
		[ y2m.l7b,                           "\x41\x6e\x67\x6f\x6c\x61",													  "\x41\x6e\x67\x6f\x6c\x61", 														"\x61\x6f", "\x41\x47\x4f" ],
		[ y2m.o8n,  											  "\x41\x6e\x67\x75\x69\x6c\x6c\x61",												  "\x41\x6e\x67\x75\x69\x6c\x6c\x61", 													"\x61\x69", "\x41\x49\x41" ],
		[ y2m.l7l,  										  "\x41\x6e\x74\x61\x72\x63\x74\x69\x63\x61",											  "\x41\x6e\x74\x61\x72\x63\x74\x69\x63\x61", 												"\x61\x71", "\x41\x54\x41" ],
		[ y2m.e6b,  								  "\x41\x6e\x74\x69\x67\x75\x61\x42\x61\x72\x62\x75\x64\x61",									  "\x41\x6e\x74\x69\x67\x75\x61\x20\x26\x20\x42\x61\x72\x62\x75\x64\x61", 									"\x61\x67", "\x41\x54\x47" ],
		[ y2m.s0u,  										 	"\x41\x72\x67\x65\x6e\x74\x69\x6e\x61",												"\x41\x72\x67\x65\x6e\x74\x69\x6e\x61", 													"\x61\x72", "\x41\x52\x47" ],
		[ y2m.u2h,  											 	"\x41\x72\x6d\x65\x6e\x69\x61",													"\x41\x72\x6d\x65\x6e\x69\x61",														"\x61\x6d", "\x41\x52\x4d" ],
		[ y2m.p3n,  												 	"\x41\x72\x75\x62\x61",														"\x41\x72\x75\x62\x61",															"\x61\x77", "\x41\x42\x57" ],
		[ y2m.f9i,  										 	"\x41\x75\x73\x74\x72\x61\x6c\x69\x61",												"\x41\x75\x73\x74\x72\x61\x6c\x69\x61",													"\x61\x75", "\x41\x55\x53" ],
		[ y2m.d4j,  											 	"\x41\x75\x73\x74\x72\x69\x61",													"\x41\x75\x73\x74\x72\x69\x61",											 			"\x61\x74", "\x41\x55\x54" ],
		[ y2m.x7e,  										  "\x41\x7a\x65\x72\x62\x61\x69\x6a\x61\x6e",											  "\x41\x7a\x65\x72\x62\x61\x69\x6a\x61\x6e",													"\x61\x7a", "\x41\x5a\x45" ],
		[ y2m.q5b,  											 	"\x42\x61\x68\x61\x6d\x61\x73",													"\x42\x61\x68\x61\x6d\x61\x73",														"\x62\x73", "\x42\x48\x53" ],
		[ y2m.z4v,  											 	"\x42\x61\x68\x72\x61\x69\x6e",													"\x42\x61\x68\x72\x61\x69\x6e",														"\x62\x68", "\x42\x48\x52" ],
		[ y2m.h5x,  										  "\x42\x61\x6e\x67\x6c\x61\x64\x65\x73\x68",											  "\x42\x61\x6e\x67\x6c\x61\x64\x65\x73\x68",													"\x62\x64", "\x42\x47\x44" ],
		[ y2m.l5o,  											  "\x42\x61\x72\x62\x61\x64\x6f\x73",												  "\x42\x61\x72\x62\x61\x64\x6f\x73",														"\x62\x62", "\x42\x52\x42" ],
		[ y2m.d9n,  								 	"\x42\x61\x73\x71\x75\x65\x43\x6f\x75\x6e\x74\x72\x79",	 									"\x42\x61\x73\x71\x75\x65\x20\x43\x6f\x75\x6e\x74\x72\x79",     								"\x78\x31", "\x58\x58\x31" ], 
		[ y2m.o3k,  											 	"\x42\x65\x6c\x61\x72\x75\x73",													"\x42\x65\x6c\x61\x72\x75\x73",														"\x62\x79", "\x42\x4c\x52" ],
		[ y2m.w3v,  											 	"\x42\x65\x6c\x67\x69\x75\x6d",													"\x42\x65\x6c\x67\x69\x75\x6d",														"\x62\x65", "\x42\x45\x4c" ],
		[ y2m.x8m,  												  "\x42\x65\x6c\x69\x7a\x65",													  "\x42\x65\x6c\x69\x7a\x65",															"\x62\x7a", "\x42\x4c\x5a" ],
		[ y2m.r4n,  												 	"\x42\x65\x6e\x69\x6e",														"\x42\x65\x6e\x69\x6e",															"\x62\x6a", "\x42\x45\x4e" ],
		[ y2m.d8i,  											 	"\x42\x65\x72\x6d\x75\x64\x61",													"\x42\x65\x72\x6d\x75\x64\x61",														"\x62\x6d", "\x42\x4d\x55" ],
		[ y2m.v7x,  												  "\x42\x68\x75\x74\x61\x6e",													  "\x42\x68\x75\x74\x61\x6e",															"\x62\x74", "\x42\x54\x4e" ],
		[ y2m.s9q,  												"\x42\x6f\x6c\x69\x76\x69\x61",													"\x42\x6f\x6c\x69\x76\x69\x61",														"\x62\x6f", "\x42\x4f\x4c" ],
		[ y2m.b6d,  						  "\x42\x6f\x73\x6e\x69\x61\x48\x65\x72\x7a\x65\x67\x6f\x76\x69\x6e\x61",       				  "\x42\x6f\x73\x6e\x69\x61\x20\x26\x20\x48\x65\x72\x7a\x65\x67\x6f\x76\x69\x6e\x61", 							"\x62\x61", "\x42\x49\x48" ], 
		[ y2m.c9t,  											  "\x42\x6f\x74\x73\x77\x61\x6e\x61",                      	  "\x42\x6f\x74\x73\x77\x61\x6e\x61",														"\x62\x77", "\x42\x57\x41" ],
		[ y2m.q1h,  									  "\x42\x6f\x75\x76\x65\x74\x49\x73\x6c\x61\x6e\x64",                 		"\x42\x6f\x75\x76\x65\x74",															"\x62\x76", "\x42\x56\x54" ],
		[ y2m.x2z,  												  "\x42\x72\x61\x7a\x69\x6c",                        	  "\x42\x72\x61\x7a\x69\x6c",															"\x62\x72", "\x42\x52\x41" ],
		[ y2m.s8i,  	 	"\x42\x72\x69\x74\x69\x73\x68\x49\x6e\x64\x69\x61\x6e\x4f\x63\x65\x61\x6e\x54\x65\x72\x72\x69\x74\x6f\x72\x79",			"\x42\x72\x69\x74\x69\x73\x68\x20\x49\x6e\x64\x69\x61\x6e\x20\x4f\x63\x65\x61\x6e\x20\x54\x65\x72\x72\x69\x74\x6f\x72\x79", 		"\x69\x6f", "\x49\x4f\x54" ],
		[ y2m.l7v, 							 	"\x42\x72\x75\x6e\x65\x69\x44\x61\x72\x75\x73\x73\x61\x6c\x61\x6d",								  "\x42\x72\x75\x6e\x65\x69",															"\x62\x6e", "\x42\x52\x4e" ], 
		[ y2m.w3b,  											  "\x42\x75\x6c\x67\x61\x72\x69\x61",												  "\x42\x75\x6c\x67\x61\x72\x69\x61", 													"\x62\x67", "\x42\x47\x52" ],
		[ y2m.q4j, 										  "\x42\x75\x72\x6b\x69\x6e\x61\x46\x61\x73\x6f",											"\x42\x75\x72\x6b\x69\x6e\x61\x20\x46\x61\x73\x6f",												"\x62\x66", "\x42\x46\x41" ],
		[ y2m.g2o,  											 	"\x42\x75\x72\x75\x6e\x64\x69",													"\x42\x75\x72\x75\x6e\x64\x69",														"\x62\x69", "\x42\x44\x49" ],
		[ y2m.y7u,  											  "\x43\x61\x6d\x62\x6f\x64\x69\x61",												  "\x43\x61\x6d\x62\x6f\x64\x6a\x61",														"\x6b\x68", "\x4b\x48\x4d" ],
		[ y2m.g6o,  											  "\x43\x61\x6d\x65\x72\x6f\x6f\x6e",												  "\x43\x61\x6d\x65\x72\x6f\x6f\x6e",														"\x63\x6d", "\x43\x4d\x52" ],
		[ y2m.x5m,  												  "\x43\x61\x6e\x61\x64\x61",													  "\x43\x61\x6e\x61\x64\x61",															"\x63\x61", "\x43\x41\x4e" ],
		[ y2m.q2h,  										  "\x43\x61\x70\x65\x56\x65\x72\x64\x65",												"\x43\x61\x70\x65\x20\x56\x65\x72\x64\x65",													"\x63\x76", "\x43\x50\x56" ], 
		[ y2m.c7g,  										  "\x43\x61\x74\x61\x6c\x6f\x6e\x69\x61",												"\x43\x61\x74\x61\x6c\x6f\x6e\x69\x61",													"\x78\x32", "\x58\x58\x32" ], 
		[ y2m.p4u,  								  "\x43\x61\x79\x6d\x61\x6e\x49\x73\x6c\x61\x6e\x64\x73",										"\x43\x61\x79\x6d\x61\x6e\x20\x49\x73\x6c\x61\x6e\x64\x73",											"\x6b\x79", "\x43\x59\x4d" ],
		[ y2m.e6r,  				  "\x43\x65\x6e\x74\x72\x61\x6c\x41\x66\x72\x69\x63\x61\x6e\x52\x65\x70\x75\x62\x6c\x69\x63",					  "\x43\x65\x6e\x74\x72\x61\x6c\x20\x41\x66\x72\x69\x63\x61\x6e\x20\x52\x65\x70\x75\x62\x6c\x69\x63",						"\x63\x66", "\x43\x41\x46" ],
		[ y2m.v3g,  													  "\x43\x68\x61\x64",														  "\x43\x68\x61\x64",																"\x74\x64", "\x54\x43\x44" ],
		[ y2m.e6q,  												 	"\x43\x68\x69\x6c\x65",														"\x43\x68\x69\x6c\x65",															"\x63\x6c", "\x43\x48\x4c" ],
		[ y2m.u0f,  												 	"\x43\x68\x69\x6e\x61",														"\x43\x68\x69\x6e\x61",															"\x63\x6e", "\x43\x48\x4e" ],
		[ y2m.w0h,  							 	"\x43\x68\x72\x69\x73\x74\x6d\x61\x73\x49\x73\x6c\x61\x6e\x64",									"\x43\x68\x72\x69\x73\x74\x6d\x61\x73",													"\x63\x78", "\x43\x58\x52" ],
		[ y2m.g5q,  					 	"\x43\x6f\x63\x6f\x73\x4b\x65\x65\x6c\x69\x6e\x67\x49\x73\x6c\x61\x6e\x64\x73",							"\x43\x6f\x63\x6f\x73\x20\x28\x4b\x65\x65\x6c\x69\x6e\x67\x29",										"\x63\x63", "\x43\x43\x4b" ], 
		[ y2m.n7y,  											  "\x43\x6f\x6c\x6f\x6d\x62\x69\x61",												  "\x43\x6f\x6c\x6f\x6d\x62\x69\x61",														"\x63\x6f", "\x43\x4f\x4c" ],
		[ y2m.s4e,  											 	"\x43\x6f\x6d\x6f\x72\x6f\x73",													"\x43\x6f\x6d\x6f\x72\x6f\x73",														"\x6b\x6d", "\x43\x4f\x4d" ],
		[ y2m.d7o,  												 	"\x43\x6f\x6e\x67\x6f",														"\x43\x6f\x6e\x67\x6f\x2d\x42\x72\x61\x7a\x7a\x61\x76\x69\x6c\x6c\x65", 						    	"\x63\x67", "\x43\x4f\x47" ],
		[ y2m.y0x,  			 	"\x43\x6f\x6e\x67\x6f\x44\x65\x6d\x6f\x63\x72\x61\x74\x69\x63\x52\x65\x70\x75\x62\x6c\x69\x63",					"\x43\x6f\x6e\x67\x6f\x2d\x4b\x69\x6e\x73\x68\x61\x73\x61\x28\x5a\x61\x69\x72\x65\x29",						  "\x63\x64", "\x43\x4f\x44" ],
		[ y2m.h8r,  									 	"\x43\x6f\x6f\x6b\x49\x73\x6c\x61\x6e\x64\x73",											"\x43\x6f\x6f\x6b\x20\x49\x73\x6c\x61\x6e\x64\x73",											 	"\x63\x6b", "\x43\x4f\x4b" ],
		[ y2m.z7g,  											"\x43\x6f\x73\x74\x61\x52\x69\x63\x61",												"\x43\x6f\x73\x74\x61\x20\x52\x69\x63\x61",												 	"\x63\x72", "\x43\x52\x49" ],
		[ y2m.z5g,  												"\x43\x72\x6f\x61\x74\x69\x61",													"\x43\x72\x6f\x61\x74\x69\x61",														"\x68\x72", "\x48\x52\x56" ],
		[ y2m.u5v,  													  "\x43\x75\x62\x61",														  "\x43\x75\x62\x61",															 	"\x63\x75", "\x43\x55\x42" ],
		[ y2m.q0q,  												"\x43\x75\x72\x61\x63\x61\x6f",													"\x43\x75\x72\x61\x63\x61\x6f",											  		"\x63\x77", "\x43\x55\x57" ],
		[ y2m.b2c,  												  "\x43\x79\x70\x72\x75\x73",													  "\x43\x79\x70\x72\x75\x73",														 	"\x63\x79", "\x43\x59\x50" ],
		[ y2m.r1a,  									      "\x43\x7a\x65\x63\x68\x69\x61",										      "\x43\x7a\x65\x63\x68\x20\x52\x65\x70\x75\x62\x6c\x69\x63", 										"\x63\x7a", "\x43\x5a\x45" ],
		[ y2m.y2h,  										  "\x43\x6f\x74\x65\x49\x76\x6f\x69\x72\x65",	   					 				  "\x43\x6f\x74\x65\x20\x64\x27\x49\x76\x6f\x69\x72\x65",											"\x63\x69", "\x43\x49\x56" ],
		[ y2m.y1l,  												"\x44\x65\x6e\x6d\x61\x72\x6b",													"\x44\x65\x6e\x6d\x61\x72\x6b",													  "\x64\x6b", "\x44\x4e\x4b" ],
		[ y2m.d5m,  											  "\x44\x6a\x69\x62\x6f\x75\x74\x69",												  "\x44\x6a\x69\x62\x6f\x75\x74\x69",													 	"\x64\x6a", "\x44\x4a\x49" ],
		[ y2m.j5l,  											  "\x44\x6f\x6d\x69\x6e\x69\x63\x61",												  "\x44\x6f\x6d\x69\x6e\x69\x63\x61",													 	"\x64\x6d", "\x44\x4d\x41" ],
		[ y2m.q6v,  							"\x44\x6f\x6d\x69\x6e\x69\x63\x61\x6e\x52\x65\x70\x75\x62\x6c\x69\x63",								"\x44\x6f\x6d\x69\x6e\x69\x63\x61\x6e\x20\x52\x65\x70\x75\x62\x6c\x69\x63",								 	"\x64\x6f", "\x44\x4f\x4d" ],
		[ y2m.n5i,  												"\x45\x63\x75\x61\x64\x6f\x72",													"\x45\x63\x75\x61\x64\x6f\x72",													 	"\x65\x63", "\x45\x43\x55" ],
		[ y2m.a4i,  													"\x45\x67\x79\x70\x74",														"\x45\x67\x79\x70\x74", 														 	"\x65\x67", "\x45\x47\x59" ],
		[ y2m.r8x,  										  "\x45\x6c\x53\x61\x6c\x76\x61\x64\x6f\x72",											  "\x45\x6c\x20\x53\x61\x6c\x76\x61\x64\x6f\x72",												"\x73\x76", "\x53\x4c\x56" ],
		[ y2m.c4b,  												"\x45\x6e\x67\x6c\x61\x6e\x64",													"\x45\x6e\x67\x6c\x61\x6e\x64",														"\x78\x33", "\x47\x42\x52" ],
		[ y2m.v9y,  							  "\x45\x71\x75\x61\x74\x6f\x72\x69\x61\x6c\x47\x75\x69\x6e\x65\x61",								  "\x45\x71\x75\x61\x74\x6f\x72\x69\x61\x6c\x20\x47\x75\x69\x6e\x65\x61",									"\x67\x71", "\x47\x4e\x51" ], 
		[ y2m.j3x,  												"\x45\x72\x69\x74\x72\x65\x61",													"\x45\x72\x69\x74\x72\x65\x61",														"\x65\x72", "\x45\x52\x49" ],
		[ y2m.v4n,  												"\x45\x73\x74\x6f\x6e\x69\x61",													"\x45\x73\x74\x6f\x6e\x69\x61",														"\x65\x65", "\x45\x53\x54" ],
		[ y2m.p3e,  											  "\x45\x74\x68\x69\x6f\x70\x69\x61",												  "\x45\x74\x68\x69\x6f\x70\x69\x61",													 	"\x65\x74", "\x45\x54\x48" ],
		[ y2m.r4z,  								"\x46\x61\x6c\x6b\x6c\x61\x6e\x64\x49\x73\x6c\x61\x6e\x64\x73",									"\x45\x6e\x67\x6c\x61\x6e\x64",														"\x66\x6b", "\x46\x4c\x4b" ], 
		[ y2m.i8p,  									  "\x46\x61\x72\x6f\x65\x49\x73\x6c\x61\x6e\x64\x73",										  "\x46\x61\x72\x6f\x65\x73",														 	"\x66\x6f", "\x46\x52\x4f" ],
		[ y2m.d1l,  													  "\x46\x69\x6a\x69",														  "\x46\x69\x6a\x69",															 	"\x66\x6a", "\x46\x4a\x49" ],
		[ y2m.h5y,  												"\x46\x69\x6e\x6c\x61\x6e\x64",													"\x46\x69\x6e\x6c\x61\x6e\x64",														"\x66\x69", "\x46\x49\x4e" ],
		[ y2m.m7r,  												  "\x46\x72\x61\x6e\x63\x65",													  "\x46\x72\x61\x6e\x63\x65",														 	"\x66\x72", "\x46\x52\x41" ],
		[ y2m.x1e,  									  "\x46\x72\x65\x6e\x63\x68\x47\x75\x69\x61\x6e\x61",										  "\x47\x75\x79\x61\x6e\x61", 														"\x67\x66", "\x47\x55\x46" ], 
		[ y2m.c6i,  								"\x46\x72\x65\x6e\x63\x68\x50\x6f\x6c\x79\x6e\x65\x73\x69\x61",									"\x54\x61\x68\x69\x74\x69\x28\x46\x72\x65\x6e\x63\x68\x20\x50\x6f\x6c\x69\x6e\x65\x73\x69\x61\x29", 					"\x70\x66", "\x50\x59\x46" ], 
		[ y2m.b7j,  			"\x46\x72\x65\x6e\x63\x68\x53\x6f\x75\x74\x68\x65\x72\x6e\x54\x65\x72\x72\x69\x74\x6f\x72\x69\x65\x73",				"\x46\x72\x65\x6e\x63\x68\x20\x53\x6f\x75\x74\x68\x65\x72\x6e\x20\x61\x6e\x64\x20\x41\x6e\x74\x61\x72\x63\x74\x69\x63\x20\x4c\x61\x6e\x64\x73","\x74\x66", "\x41\x54\x46" ],
		[ y2m.h6r,  													"\x47\x61\x62\x6f\x6e",														"\x47\x61\x62\x6f\x6e",															"\x67\x61", "\x47\x41\x42" ], 
		[ y2m.s0k,  												  "\x47\x61\x6d\x62\x69\x61",													  "\x47\x61\x6d\x62\x69\x61",															"\x67\x6d", "\x47\x4d\x42" ],
		[ y2m.q7i,  												"\x47\x65\x6f\x72\x67\x69\x61",													"\x47\x65\x6f\x72\x67\x69\x61",														"\x67\x65", "\x47\x45\x4f" ],
		[ y2m.d1t,  												"\x47\x65\x72\x6d\x61\x6e\x79",													"\x47\x65\x72\x6d\x61\x6e\x79",														"\x64\x65", "\x44\x45\x55" ],
		[ y2m.s6k, 													  "\x47\x68\x61\x6e\x61",														"\x47\x68\x61\x6e\x61",															"\x67\x68", "\x47\x48\x41" ],
		[ y2m.b3y,  											"\x47\x69\x62\x72\x61\x6c\x74\x61\x72",												"\x47\x69\x62\x72\x61\x6c\x74\x61\x72",													"\x67\x69", "\x47\x49\x42" ],
		[ y2m.i2x,  												  "\x47\x72\x65\x65\x63\x65",													  "\x47\x72\x65\x65\x63\x65",															"\x67\x72", "\x47\x52\x43" ],
		[ y2m.o4f,  											"\x47\x72\x65\x65\x6e\x6c\x61\x6e\x64",												"\x47\x72\x65\x65\x6e\x6c\x61\x6e\x64",													"\x67\x6c", "\x47\x52\x4c" ],
		[ y2m.v8q,  												"\x47\x72\x65\x6e\x61\x64\x61",													"\x47\x72\x65\x6e\x61\x64\x61",														"\x67\x64", "\x47\x52\x44" ],
		[ y2m.w2b,  										  "\x47\x75\x61\x64\x65\x6c\x6f\x75\x70\x65",											  "\x47\x75\x61\x64\x65\x6c\x6f\x75\x70\x65",													"\x67\x70", "\x47\x4c\x50" ],
		[ y2m.b0q,  													  "\x47\x75\x61\x6d",														  "\x47\x75\x61\x6d",																"\x67\x75", "\x47\x55\x4d" ],
		[ y2m.h1h,  											"\x47\x75\x61\x74\x65\x6d\x61\x6c\x61",												"\x47\x75\x61\x74\x65\x6d\x61\x6c\x61",													"\x67\x74", "\x47\x54\x4d" ],
		[ y2m.y5p,  											  "\x47\x75\x65\x72\x6e\x73\x65\x79",												  "\x47\x75\x65\x72\x6e\x73\x65\x79",														"\x67\x67", "\x47\x47\x59" ], 
		[ y2m.y6m,  												  "\x47\x75\x69\x6e\x65\x61",													  "\x47\x75\x69\x6e\x65\x61",															"\x67\x6e", "\x47\x49\x4e" ],
		[ y2m.y3p,  									  "\x47\x75\x69\x6e\x65\x61\x42\x69\x73\x73\x61\x75",										  "\x47\x75\x69\x6e\x65\x61\x2d\x42\x69\x73\x73\x61\x75",											"\x67\x77", "\x47\x4e\x42" ],
		[ y2m.c9m,  												  "\x47\x75\x79\x61\x6e\x61",													  "\x47\x75\x79\x61\x6e\x61",															"\x67\x79", "\x47\x55\x59" ],
		[ y2m.f1m,  													"\x48\x61\x69\x74\x69",														"\x48\x61\x69\x74\x69",															"\x68\x74", "\x48\x54\x49" ],
		[ y2m.k1k, 			"\x48\x65\x61\x72\x64\x49\x73\x6c\x61\x6e\x64\x4d\x63\x44\x6f\x6e\x61\x6c\x64\x49\x73\x6c\x61\x6e\x64\x73", 			"\x41\x75\x73\x74\x72\x61\x6c\x69\x61",   									  		"\x68\x6d", "\x48\x4d\x44" ],
		[ y2m.f8s,  			 	                "\x56\x61\x74\x69\x63\x61\x6e",	  			                "\x56\x61\x74\x69\x63\x61\x6e\x20\x43\x69\x74\x79", 											"\x76\x61", "\x56\x41\x54" ],
		[ y2m.d1o,  											  "\x48\x6f\x6e\x64\x75\x72\x61\x73",												  "\x48\x6f\x6e\x64\x75\x72\x61\x73",														"\x68\x6e", "\x48\x4e\x44" ],
		[ y2m.u0d,  											  "\x48\x6f\x6e\x67\x4b\x6f\x6e\x67",												  "\x48\x6f\x6e\x67\x20\x4b\x6f\x6e\x67",													"\x68\x6b", "\x48\x4b\x47" ],
		[ y2m.v4x,  											 	"\x48\x75\x6e\x67\x61\x72\x79",													"\x48\x75\x6e\x67\x61\x72\x79",														"\x68\x75", "\x48\x55\x4e" ],
		[ y2m.u0c,  											 	"\x49\x63\x65\x6c\x61\x6e\x64",													"\x49\x63\x65\x6c\x61\x6e\x64",														"\x69\x73", "\x49\x53\x4c" ],
		[ y2m.s1s,  												 	"\x49\x6e\x64\x69\x61",														"\x49\x6e\x64\x69\x61",															"\x69\x6e", "\x49\x4e\x44" ],
		[ y2m.l9m,  										 	"\x49\x6e\x64\x6f\x6e\x65\x73\x69\x61",												"\x49\x6e\x64\x6f\x6e\x65\x73\x69\x61",													"\x69\x64", "\x49\x44\x4e" ],
		[ y2m.g0f,  													  "\x49\x72\x61\x6e",														  "\x49\x72\x61\x6e",																"\x69\x72", "\x49\x52\x4e" ],
		[ y2m.g5t,  													  "\x49\x72\x61\x71",														  "\x49\x72\x61\x71",																"\x69\x71", "\x49\x52\x51" ],
		[ y2m.s4j,  											 	"\x49\x72\x65\x6c\x61\x6e\x64",													"\x49\x72\x65\x6c\x61\x6e\x64",														"\x69\x65", "\x49\x52\x4c" ],
		[ y2m.t9j,  										 	"\x49\x73\x6c\x65\x4f\x66\x4d\x61\x6e",												"\x49\x73\x6c\x65\x20\x6f\x66\x20\x4d\x61\x6e",												"\x69\x6d", "\x49\x4d\x4e" ],
		[ y2m.g5b,  												  "\x49\x73\x72\x61\x65\x6c",													  "\x49\x73\x72\x61\x65\x6c",															"\x69\x6c", "\x49\x53\x52" ],
		[ y2m.w9g,  												 	"\x49\x74\x61\x6c\x79",														"\x49\x74\x61\x6c\x79",															"\x69\x74", "\x49\x54\x41" ],
		[ y2m.y4l,  											 	"\x4a\x61\x6d\x61\x69\x63\x61",													"\x4a\x61\x6d\x61\x69\x63\x61",														"\x6a\x6d", "\x4a\x41\x4d" ],
		[ y2m.d6j,  											  "\x4a\x61\x6e\x4d\x61\x79\x65\x6e",								  			  "\x4e\x6f\x72\x77\x61\x79", 														"\x78\x34", "\x58\x58\x34" ], 
		[ y2m.m1q,  												 	"\x4a\x61\x70\x61\x6e",														"\x4a\x61\x70\x61\x6e",															"\x6a\x70", "\x4a\x50\x4e" ],
		[ y2m.d9x,  												  "\x4a\x65\x72\x73\x65\x79",													  "\x4a\x65\x72\x73\x65\x79",															"\x6a\x65", "\x4a\x45\x59" ],
		[ y2m.a3z,  												  "\x4a\x6f\x72\x64\x61\x6e",													  "\x4a\x6f\x72\x64\x61\x6e",															"\x6a\x6f", "\x4a\x4f\x52" ],
		[ y2m.q4r,  										  "\x4b\x61\x7a\x61\x6b\x68\x73\x74\x61\x6e",											  "\x4b\x61\x7a\x61\x6b\x68\x73\x74\x61\x6e",													"\x6b\x7a", "\x4b\x41\x5a" ],
		[ y2m.r8s,  												 	"\x4b\x65\x6e\x79\x61",														"\x4b\x65\x6e\x79\x61",															"\x6b\x65", "\x4b\x45\x4e" ],
		[ y2m.w2h,  											  "\x4b\x69\x72\x69\x62\x61\x74\x69",												  "\x4b\x69\x72\x69\x62\x61\x74\x69",														"\x6b\x69", "\x4b\x49\x52" ],
		[ y2m.q7u,  										  "\x4b\x6f\x72\x65\x61\x4e\x6f\x72\x74\x68",											  "\x4e\x6f\x72\x74\x68\x20\x4b\x6f\x72\x65\x61",												"\x6b\x70", "\x50\x52\x4b" ], 
		[ y2m.x0v,  										  "\x4b\x6f\x72\x65\x61\x53\x6f\x75\x74\x68",	 	  								  "\x53\x6f\x75\x74\x68\x20\x4b\x6f\x72\x65\x61", 												"\x6b\x72", "\x4b\x4f\x52" ], 
		[ y2m.m4a,  												  "\x4b\x6f\x73\x6f\x76\x6f",													  "\x4b\x6f\x73\x6f\x76\x6f",															"\x78\x35", "\x52\x4b\x53" ],
		[ y2m.g6r,  												  "\x4b\x75\x77\x61\x69\x74",													  "\x4b\x75\x77\x61\x69\x74",															"\x6b\x77", "\x4b\x57\x54" ],
		[ y2m.p0i,  										  "\x4b\x79\x72\x67\x79\x7a\x73\x74\x61\x6e",											  "\x4b\x79\x72\x67\x79\x7a\x73\x74\x61\x6e",													"\x6b\x67", "\x4b\x47\x5a" ],
		[ y2m.z8c,  													  "\x4c\x61\x6f\x73",														  "\x4c\x61\x6f\x73",																"\x6c\x61", "\x4c\x41\x4f" ],
		[ y2m.c9s, 	 											 	"\x4c\x61\x74\x76\x69\x61",													  "\x4c\x61\x74\x76\x69\x61",															"\x6c\x76", "\x4c\x56\x41" ],
		[ y2m.h7r,  											 	"\x4c\x65\x62\x61\x6e\x6f\x6e",													"\x4c\x65\x62\x61\x6e\x6f\x6e",														"\x6c\x62", "\x4c\x42\x4e" ],
		[ y2m.x1r, 												  "\x4c\x65\x73\x6f\x74\x68\x6f",													"\x4c\x65\x73\x6f\x74\x68\x6f",														"\x6c\x73", "\x4c\x53\x4f" ],
		[ y2m.e6g,  											 	"\x4c\x69\x62\x65\x72\x69\x61",													"\x4c\x69\x62\x65\x72\x69\x61",														"\x6c\x72", "\x4c\x42\x52" ],
		[ y2m.z3y,  												 	"\x4c\x69\x62\x79\x61",														"\x4c\x69\x62\x79\x61",															"\x6c\x79", "\x4c\x42\x59" ],
		[ y2m.y8a,  								 	"\x4c\x69\x65\x63\x68\x74\x65\x6e\x73\x74\x65\x69\x6e",										"\x4c\x69\x65\x63\x68\x74\x65\x6e\x73\x74\x65\x69\x6e",											"\x6c\x69", "\x4c\x49\x45" ],
		[ y2m.z7q,  										 	"\x4c\x69\x74\x68\x75\x61\x6e\x69\x61",												"\x4c\x69\x74\x68\x75\x61\x6e\x69\x61",													"\x6c\x74", "\x4c\x54\x55" ],
		[ y2m.j8j,  										  "\x4c\x75\x78\x65\x6d\x62\x6f\x75\x72\x67",											  "\x4c\x75\x78\x65\x6d\x62\x6f\x75\x72\x67",													"\x6c\x75", "\x4c\x55\x58" ],
		[ y2m.macau,  												 	"\x4d\x61\x63\x61\x75",														"\x4d\x61\x63\x61\x75",															"\x6d\x6f", "\x4d\x41\x43" ],
		[ y2m.x6w,  	  					 	  "\x4e\x6f\x72\x74\x68\x4d\x61\x63\x65\x64\x6f\x6e\x69\x61",	   							  "\x4d\x61\x63\x65\x64\x6f\x6e\x69\x61",													"\x6d\x6b", "\x4d\x4b\x44" ],
		[ y2m.r1l,  										  "\x4d\x61\x64\x61\x67\x61\x73\x63\x61\x72",											  "\x4d\x61\x64\x61\x67\x61\x73\x63\x61\x72",													"\x6d\x67", "\x4d\x44\x47" ],
		[ y2m.n1f,  												  "\x4d\x61\x6c\x61\x77\x69",													  "\x4d\x61\x6c\x61\x77\x69",															"\x6d\x77", "\x4d\x57\x49" ],
		[ y2m.r9x,  											  "\x4d\x61\x6c\x61\x79\x73\x69\x61",												  "\x4d\x61\x6c\x61\x79\x73\x69\x61",														"\x6d\x79", "\x4d\x59\x53" ],
		[ y2m.g7h,  											  "\x4d\x61\x6c\x64\x69\x76\x65\x73",												  "\x4d\x61\x6c\x64\x69\x76\x65\x73",														"\x6d\x76", "\x4d\x44\x56" ],
		[ y2m.r9e, 													 	"\x4d\x61\x6c\x69",														  "\x4d\x61\x6c\x69",																"\x6d\x6c", "\x4d\x4c\x49" ],
		[ y2m.n6r,  												 	"\x4d\x61\x6c\x74\x61",														"\x4d\x61\x6c\x74\x61",															"\x6d\x74", "\x4d\x4c\x54" ],
		[ y2m.k2b,  							 	"\x4d\x61\x72\x73\x68\x61\x6c\x6c\x49\x73\x6c\x61\x6e\x64\x73",									"\x4d\x61\x72\x73\x68\x61\x6c\x6c\x20\x49\x73\x6c\x61\x6e\x64\x73",										"\x6d\x68", "\x4d\x48\x4c" ],
		[ y2m.b7x,  										  "\x4d\x61\x72\x74\x69\x6e\x69\x71\x75\x65",											  "\x4d\x61\x72\x74\x69\x6e\x69\x71\x75\x65",													"\x6d\x71", "\x4d\x54\x51" ],
		[ y2m.g2e,  										  "\x4d\x61\x75\x72\x69\x74\x61\x6e\x69\x61",											  "\x4d\x61\x75\x72\x69\x74\x61\x6e\x69\x61",													"\x6d\x72", "\x4d\x52\x54" ],
		[ y2m.d8j,  										 	"\x4d\x61\x75\x72\x69\x74\x69\x75\x73",												"\x4d\x61\x75\x72\x69\x74\x69\x75\x73",													"\x6d\x75", "\x4d\x55\x53" ],
		[ y2m.l7a,  											  "\x4d\x61\x79\x6f\x74\x74\x65",													"\x4d\x61\x79\x6f\x74\x74\x65",														"\x79\x74", "\x4d\x59\x54" ],
		[ y2m.g8o,  												  "\x4d\x65\x78\x69\x63\x6f",													  "\x4d\x65\x78\x69\x63\x6f",															"\x6d\x78", "\x4d\x45\x58" ],
		[ y2m.x3o,  										  "\x4d\x69\x63\x72\x6f\x6e\x65\x73\x69\x61",											  "\x4d\x69\x63\x72\x6f\x6e\x65\x73\x69\x61",													"\x66\x6d", "\x46\x53\x4d" ],
		[ y2m.o5h,  											 	"\x4d\x6f\x6c\x64\x6f\x76\x61",													"\x4d\x6f\x6c\x64\x6f\x76\x61",														"\x6d\x64", "\x4d\x44\x41" ],
		[ y2m.o2k,  												  "\x4d\x6f\x6e\x61\x63\x6f",													  "\x4d\x6f\x6e\x61\x63\x6f",															"\x6d\x63", "\x4d\x43\x4f" ],
		[ y2m.r9w,  											  "\x4d\x6f\x6e\x67\x6f\x6c\x69\x61",												  "\x4d\x6f\x6e\x67\x6f\x6c\x69\x61",														"\x6d\x6e", "\x4d\x4e\x47" ],
		[ y2m.v0g,  										  "\x4d\x6f\x6e\x74\x65\x6e\x65\x67\x72\x6f",											  "\x4d\x6f\x6e\x74\x65\x6e\x65\x67\x72\x6f",													"\x6d\x65", "\x4d\x4e\x45" ],
		[ y2m.e2n,  										  "\x4d\x6f\x6e\x74\x73\x65\x72\x72\x61\x74",											  "\x4d\x6f\x6e\x74\x73\x65\x72\x72\x61\x74",													"\x6d\x73", "\x4d\x53\x52" ],
		[ y2m.m9n,  												"\x4d\x6f\x72\x6f\x63\x63\x6f",													"\x4d\x6f\x72\x6f\x63\x63\x6f",														"\x6d\x61", "\x4d\x41\x52" ],
		[ y2m.w3m,  										  "\x4d\x6f\x7a\x61\x6d\x62\x69\x71\x75\x65",											  "\x4d\x6f\x7a\x61\x6d\x62\x69\x71\x75\x65",													"\x6d\x7a", "\x4d\x4f\x5a" ],
		[ y2m.j7x, 												  "\x4d\x79\x61\x6e\x6d\x61\x72",													"\x4d\x79\x61\x6e\x6d\x61\x72\x28\x42\x75\x72\x6d\x61\x29", 										"\x6d\x6d", "\x4d\x4d\x52" ],
		[ y2m.w2v,  												"\x4e\x61\x6d\x69\x62\x69\x61",													"\x4e\x61\x6d\x69\x62\x69\x61",														"\x6e\x61", "\x4e\x41\x4d" ],
		[ y2m.y1k,  													"\x4e\x61\x75\x72\x75",														"\x4e\x61\x75\x72\x75",															"\x6e\x72", "\x4e\x52\x55" ],
		[ y2m.z0x,  													"\x4e\x65\x70\x61\x6c",														"\x4e\x65\x70\x61\x6c",															"\x6e\x70", "\x4e\x50\x4c" ],
		[ y2m.u9j,  										"\x54\x68\x65\x4e\x65\x74\x68\x65\x72\x6c\x61\x6e\x64\x73",	  							  "\x4e\x65\x74\x68\x65\x72\x6c\x61\x6e\x64\x73",												"\x6e\x6c", "\x4e\x4c\x44" ],
		[ y2m.g3z, 						  "\x4e\x65\x74\x68\x65\x72\x6c\x61\x6e\x64\x73\x41\x6e\x74\x69\x6c\x6c\x65\x73",							"\x4e\x65\x74\x68\x65\x72\x6c\x61\x6e\x64\x73\x20\x41\x6e\x74\x69\x6c\x6c\x65\x73",								"\x61\x6e", "\x41\x4e\x54" ],
		[ y2m.y2p,  									  "\x4e\x65\x77\x43\x61\x6c\x65\x64\x6f\x6e\x69\x61",										  "\x4e\x65\x77\x20\x43\x61\x6c\x65\x64\x6f\x6e\x69\x61",											"\x6e\x63", "\x4e\x43\x4c" ],
		[ y2m.v8t,  										  "\x4e\x65\x77\x5a\x65\x61\x6c\x61\x6e\x64",											  "\x4e\x65\x77\x20\x5a\x65\x61\x6c\x61\x6e\x64",												"\x6e\x7a", "\x4e\x5a\x4c" ],
		[ y2m.i4f,  											"\x4e\x69\x63\x61\x72\x61\x67\x75\x61",												"\x4e\x69\x63\x61\x72\x61\x67\x75\x61",													"\x6e\x69", "\x4e\x49\x43" ],
		[ y2m.b9j,  													"\x4e\x69\x67\x65\x72",														"\x4e\x69\x67\x65\x72",															"\x6e\x65", "\x4e\x45\x52" ],
		[ y2m.y8v,  												"\x4e\x69\x67\x65\x72\x69\x61",													"\x4e\x69\x67\x65\x72\x69\x61",														"\x6e\x67", "\x4e\x47\x41" ],
		[ y2m.k1h,  													  "\x4e\x69\x75\x65",														  "\x4e\x69\x75\x65",																"\x6e\x75", "\x4e\x49\x55" ],
		[ y2m.a3h,  									"\x4e\x6f\x72\x66\x6f\x6c\x6b\x49\x73\x6c\x61\x6e\x64",										"\x4e\x6f\x72\x66\x6f\x6c\x6b", 														"\x6e\x66", "\x4e\x46\x4b" ],
		[ y2m.s2x,  								"\x4e\x6f\x72\x74\x68\x65\x72\x6e\x49\x72\x65\x6c\x61\x6e\x64",									"\x4e\x6f\x72\x74\x68\x65\x72\x6e\x20\x49\x72\x65\x6c\x61\x6e\x64",										"\x78\x36", "\x47\x42\x52" ], 
		[ y2m.n0o,  				  "\x4e\x6f\x72\x74\x68\x65\x72\x6e\x4d\x61\x72\x69\x61\x6e\x61\x49\x73\x6c\x61\x6e\x64\x73",					  "\x4e\x6f\x72\x74\x68\x65\x72\x6e\x20\x4d\x61\x72\x69\x61\x6e\x61",										"\x6d\x70", "\x4d\x4e\x50" ],
		[ y2m.t9d,  												  "\x4e\x6f\x72\x77\x61\x79",													  "\x4e\x6f\x72\x77\x61\x79",															"\x6e\x6f", "\x4e\x4f\x52" ],
		[ y2m.d0x,  													  "\x4f\x6d\x61\x6e",														  "\x4f\x6d\x61\x6e",																"\x6f\x6d", "\x4f\x4d\x4e" ],
		[ y2m.t6j,  											  "\x50\x61\x6b\x69\x73\x74\x61\x6e",												  "\x50\x61\x6b\x69\x73\x74\x61\x6e",														"\x70\x6b", "\x50\x41\x4b" ],
		[ y2m.a9g,  													"\x50\x61\x6c\x61\x75",														"\x50\x61\x6c\x61\x75",															"\x70\x77", "\x50\x4c\x57" ],
		[ y2m.u9r,  											"\x50\x61\x6c\x65\x73\x74\x69\x6e\x65",												"\x50\x61\x6c\x65\x73\x74\x69\x6e\x65",													"\x70\x73", "\x50\x53\x45" ],
		[ y2m.e2y,  												  "\x50\x61\x6e\x61\x6d\x61",													  "\x50\x61\x6e\x61\x6d\x61",															"\x70\x61", "\x50\x41\x4e" ],
		[ y2m.y1o,  								  "\x50\x61\x70\x75\x61\x4e\x65\x77\x47\x75\x69\x6e\x65\x61",									  "\x50\x61\x70\x75\x61\x20\x4e\x65\x77\x20\x47\x75\x69\x6e\x65\x61",										"\x70\x67", "\x50\x4e\x47" ],
		[ y2m.c8c,  											  "\x50\x61\x72\x61\x67\x75\x61\x79",												  "\x50\x61\x72\x61\x67\x75\x61\x79",														"\x70\x79", "\x50\x52\x59" ],
		[ y2m.q4x,  													  "\x50\x65\x72\x75",														  "\x50\x65\x72\x75",																"\x70\x65", "\x50\x45\x52" ],
		[ y2m.y3f,  										"\x50\x68\x69\x6c\x69\x70\x70\x69\x6e\x65\x73",											"\x50\x68\x69\x6c\x69\x70\x70\x69\x6e\x65\x73",												"\x70\x68", "\x50\x48\x4c" ],
		[ y2m.z1q,  											  "\x50\x69\x74\x63\x61\x69\x72\x6e",												  "\x50\x69\x74\x63\x61\x69\x72\x6e",														"\x70\x6e", "\x50\x43\x4e" ],
		[ y2m.w3d,  												  "\x50\x6f\x6c\x61\x6e\x64",													  "\x50\x6f\x6c\x61\x6e\x64",															"\x70\x6c", "\x50\x4f\x4c" ],
		[ y2m.i7j,  											  "\x50\x6f\x72\x74\x75\x67\x61\x6c",												  "\x50\x6f\x72\x74\x75\x67\x61\x6c",														"\x70\x74", "\x50\x52\x54" ],
		[ y2m.r9g,  										  "\x50\x75\x65\x72\x74\x6f\x52\x69\x63\x6f",											  "\x50\x75\x65\x72\x74\x6f\x20\x52\x69\x63\x6f",												"\x70\x72", "\x50\x52\x49" ],
		[ y2m.n2o,  													"\x51\x61\x74\x61\x72",														"\x51\x61\x74\x61\x72",															"\x71\x61", "\x51\x41\x54" ],
		[ y2m.o0h,  												"\x52\x65\x75\x6e\x69\x6f\x6e",													"\x52\x65\x75\x6e\x69\x6f\x6e",														"\x72\x65", "\x52\x45\x55" ],
		[ y2m.m7j,  												"\x52\x6f\x6d\x61\x6e\x69\x61",													"\x52\x6f\x6d\x61\x6e\x69\x61",														"\x72\x6f", "\x52\x4f\x55" ],
		[ y2m.v4e,  												  "\x52\x75\x73\x73\x69\x61",													  "\x52\x75\x73\x73\x69\x61\x6e\x20\x46\x65\x64\x65\x72\x61\x74\x69\x6f\x6e", 								"\x72\x75", "\x52\x55\x53" ],
		[ y2m.c5t,  												  "\x52\x77\x61\x6e\x64\x61",													  "\x52\x77\x61\x6e\x64\x61",															"\x72\x77", "\x52\x57\x41" ],
		[ y2m.v1h,  								"\x53\x61\x69\x6e\x74\x42\x61\x72\x74\x68\x65\x6c\x65\x6d\x79",									"\x53\x61\x69\x6e\x74\x20\x42\x61\x72\x74\x68\x65\x6c\x65\x6d\x79", 									"\x62\x6c", "\x42\x4c\x4d" ],
		[ y2m.c7h,  										"\x53\x61\x69\x6e\x74\x48\x65\x6c\x65\x6e\x61",											"\x53\x61\x69\x6e\x74\x20\x48\x65\x6c\x65\x6e\x61", 											"\x73\x68", "\x53\x48\x4e" ], 
		[ y2m.k0h,  								"\x53\x61\x69\x6e\x74\x4b\x69\x74\x74\x73\x4e\x65\x76\x69\x73",									"\x53\x74\x20\x4b\x69\x74\x74\x73\x20\x26\x20\x4e\x65\x76\x69\x73", 									"\x6b\x6e", "\x4b\x4e\x41" ], 
		[ y2m.p8b, 											"\x53\x61\x69\x6e\x74\x4c\x75\x63\x69\x61",											  "\x53\x61\x69\x6e\x74\x20\x4c\x75\x63\x69\x61", 												"\x6c\x63", "\x4c\x43\x41" ], 
		[ y2m.f6h,  					"\x53\x61\x69\x6e\x74\x4d\x61\x72\x74\x69\x6e\x46\x72\x65\x6e\x63\x68\x50\x61\x72\x74",  					"\x53\x61\x69\x6e\x74\x20\x4d\x61\x72\x74\x69\x6e", 											"\x6d\x66", "\x4d\x41\x46" ],
		[ y2m.e8s,  						"\x53\x61\x69\x6e\x74\x50\x69\x65\x72\x72\x65\x4d\x69\x71\x75\x65\x6c\x6f\x6e",							"\x53\x61\x69\x6e\x74\x20\x50\x69\x65\x72\x72\x65\x20\x61\x6e\x64\x20\x4d\x69\x71\x75\x65\x6c\x6f\x6e", 					"\x70\x6d", "\x53\x50\x4d" ], 
		[ y2m.h0t,  				  "\x53\x61\x69\x6e\x74\x56\x69\x6e\x63\x65\x6e\x74\x47\x72\x65\x6e\x61\x64\x69\x6e\x65\x73",					  "\x53\x74\x20\x56\x69\x6e\x63\x65\x6e\x74\x20\x26\x20\x74\x68\x65\x20\x47\x72\x65\x6e\x61\x64\x69\x6e\x65\x73", 				"\x76\x63", "\x56\x43\x54" ], 
		[ y2m.v7w,  													"\x53\x61\x6d\x6f\x61",														"\x53\x61\x6d\x6f\x61",															"\x77\x73", "\x57\x53\x4d" ],
		[ y2m.y6x,  											"\x53\x61\x6e\x4d\x61\x72\x69\x6e\x6f",												"\x53\x61\x6e\x20\x4d\x61\x72\x69\x6e\x6f",													"\x73\x6d", "\x53\x4d\x52" ],
		[ y2m.m5q,  								"\x53\x61\x6f\x54\x6f\x6d\x65\x50\x72\x69\x6e\x63\x69\x70\x65",									"\x53\x61\x6f\x20\x54\x6f\x6d\x65\x20\x26\x20\x50\x72\x69\x6e\x63\x69\x70\x65", 								"\x73\x74", "\x53\x54\x50" ],
		[ y2m.r7z,  										"\x53\x61\x75\x64\x69\x41\x72\x61\x62\x69\x61",											"\x53\x61\x75\x64\x69\x20\x41\x72\x61\x62\x69\x61", 											"\x73\x61", "\x53\x41\x55" ],
		[ y2m.f2f,  											  "\x53\x63\x6f\x74\x6c\x61\x6e\x64",												  "\x53\x63\x6f\x74\x6c\x61\x6e\x64",														"\x78\x37", "\x47\x42\x52" ],
		[ y2m.b2e,  												"\x53\x65\x6e\x65\x67\x61\x6c",													"\x53\x65\x6e\x65\x67\x61\x6c",														"\x73\x6e", "\x53\x45\x4e" ],
		[ y2m.c3o,  												  "\x53\x65\x72\x62\x69\x61",													  "\x53\x65\x72\x62\x69\x61\x28\x59\x75\x67\x6f\x73\x6c\x61\x76\x69\x61\x29", 								"\x72\x73", "\x53\x52\x42" ],
		[ y2m.m0f,  										  "\x53\x65\x79\x63\x68\x65\x6c\x6c\x65\x73",											  "\x53\x65\x79\x63\x68\x65\x6c\x6c\x65\x73",													"\x73\x63", "\x53\x59\x43" ],
		[ y2m.q6r,  									  "\x53\x69\x65\x72\x72\x61\x4c\x65\x6f\x6e\x65",											"\x53\x69\x65\x72\x72\x61\x20\x4c\x65\x6f\x6e\x65",												"\x73\x6c", "\x53\x4c\x45" ],
		[ y2m.d1g,  										 	"\x53\x69\x6e\x67\x61\x70\x6f\x72\x65",												"\x53\x69\x6e\x67\x61\x70\x6f\x72\x65",													"\x73\x67", "\x53\x47\x50" ],
		[ y2m.h9k,						  "\x53\x69\x6e\x74\x4d\x61\x61\x72\x74\x65\x6e\x44\x75\x74\x63\x68\x50\x61\x72\x74",  					  "\x53\x69\x6e\x74\x20\x4d\x61\x61\x72\x74\x65\x6e",												"\x73\x78", "\x53\x58\x4d" ],
		[ y2m.e0v,  											  "\x53\x6c\x6f\x76\x61\x6b\x69\x61",												  "\x53\x6c\x6f\x76\x61\x6b\x69\x61",														"\x73\x6b", "\x53\x56\x4b" ],
		[ y2m.r0f,  											  "\x53\x6c\x6f\x76\x65\x6e\x69\x61",												  "\x53\x6c\x6f\x76\x65\x6e\x69\x61",														"\x73\x69", "\x53\x56\x4e" ],
		[ y2m.u6b,  								  "\x53\x6f\x6c\x6f\x6d\x6f\x6e\x49\x73\x6c\x61\x6e\x64\x73",									  "\x53\x6f\x6c\x6f\x6d\x6f\x6e\x20\x49\x73\x6c\x61\x6e\x64\x73", 										"\x73\x62", "\x53\x4c\x42" ],
		[ y2m.p2p,  											 	"\x53\x6f\x6d\x61\x6c\x69\x61",													"\x53\x6f\x6d\x61\x6c\x69\x61",														"\x73\x6f", "\x53\x4f\x4d" ],
		[ y2m.o4t,  									 	"\x53\x6f\x75\x74\x68\x41\x66\x72\x69\x63\x61",											"\x53\x6f\x75\x74\x68\x20\x41\x66\x72\x69\x63\x61",												"\x7a\x61", "\x5a\x41\x46" ],
		[ y2m.g5e, "\x53\x6f\x75\x74\x68\x47\x65\x6f\x72\x67\x69\x61\x53\x6f\x75\x74\x68\x53\x61\x6e\x64\x77\x69\x63\x68\x49\x73\x6c\x61\x6e\x64\x73", "\x53\x6f\x75\x74\x68\x20\x47\x65\x6f\x72\x67\x69\x61\x20\x61\x6e\x64\x20\x53\x6f\x75\x74\x68\x20\x53\x61\x6e\x64\x77\x69\x63\x68", 	"\x67\x73", "\x53\x47\x53" ],
		[ y2m.c0u,  										  "\x53\x6f\x75\x74\x68\x53\x75\x64\x61\x6e",											  "\x53\x6f\x75\x74\x68\x65\x72\x6e\x20\x53\x75\x64\x61\x6e", 										"\x73\x73", "\x53\x53\x44" ],
		[ y2m.s3y,  									 	"\x53\x6f\x76\x69\x65\x74\x55\x6e\x69\x6f\x6e",											"\x53\x6f\x76\x69\x65\x74\x20\x55\x6e\x69\x6f\x6e", 			 								"\x73\x75", "\x55\x52\x53" ],
		[ y2m.o3w, 	 												  "\x53\x70\x61\x69\x6e",														"\x53\x70\x61\x69\x6e",															"\x65\x73", "\x45\x53\x50" ],
		[ y2m.z4b,  											  "\x53\x72\x69\x4c\x61\x6e\x6b\x61",												  "\x53\x72\x69\x20\x4c\x61\x6e\x6b\x61",													"\x6c\x6b", "\x4c\x4b\x41" ],
		[ y2m.t3h,  												 	"\x53\x75\x64\x61\x6e",														"\x53\x75\x64\x61\x6e",															"\x73\x64", "\x53\x44\x4e" ],
		[ y2m.h1z,  											  "\x53\x75\x72\x69\x6e\x61\x6d\x65",												  "\x53\x75\x72\x69\x6e\x61\x6d\x65",														"\x73\x72", "\x53\x55\x52" ], 
		[ y2m.w1d,  											  "\x53\x76\x61\x6c\x62\x61\x72\x64",												  "\x4e\x6f\x72\x77\x61\x79", 														"\x73\x6a", "\x53\x4a\x4d" ], 
		[ y2m.z0m,  										 	"\x53\x77\x61\x7a\x69\x6c\x61\x6e\x64",												"\x53\x77\x61\x7a\x69\x6c\x61\x6e\x64",													"\x73\x7a", "\x53\x57\x5a" ],
		[ y2m.p0y,  												  "\x53\x77\x65\x64\x65\x6e",													  "\x53\x77\x65\x64\x65\x6e",															"\x73\x65", "\x53\x57\x45" ],
		[ y2m.p7b,  									 	"\x53\x77\x69\x74\x7a\x65\x72\x6c\x61\x6e\x64",											"\x53\x77\x69\x74\x7a\x65\x72\x6c\x61\x6e\x64",												"\x63\x68", "\x43\x48\x45" ],
		[ y2m.v2o,  												 	"\x53\x79\x72\x69\x61",														"\x53\x79\x72\x69\x61",															"\x73\x79", "\x53\x59\x52" ],
		[ y2m.z5n,  												  "\x54\x61\x69\x77\x61\x6e",													  "\x54\x61\x69\x77\x61\x6e",															"\x74\x77", "\x54\x57\x4e" ],
		[ y2m.k6b,  										  "\x54\x61\x6a\x69\x6b\x69\x73\x74\x61\x6e",											  "\x54\x61\x6a\x69\x6b\x69\x73\x74\x61\x6e",													"\x74\x6a", "\x54\x4a\x4b" ],
		[ y2m.x9v,  											  "\x54\x61\x6e\x7a\x61\x6e\x69\x61",												  "\x54\x61\x6e\x7a\x61\x6e\x69\x61",														"\x74\x7a", "\x54\x5a\x41" ],
		[ y2m.y6q, 											  "\x54\x68\x61\x69\x6c\x61\x6e\x64",												  "\x54\x68\x61\x69\x6c\x61\x6e\x64",														"\x74\x68", "\x54\x48\x41" ],
		[ y2m.q8c,  										  "\x54\x69\x6d\x6f\x72\x4c\x65\x73\x74\x65",	  									  "\x54\x69\x6d\x6f\x72\x2d\x4c\x65\x73\x74\x65", 												"\x74\x6c", "\x54\x4c\x53" ], 
		[ y2m.l0e, 													 	"\x54\x6f\x67\x6f",														  "\x54\x6f\x67\x6f",																"\x74\x67", "\x54\x47\x4f" ],
		[ y2m.l3u,  											 	"\x54\x6f\x6b\x65\x6c\x61\x75",													"\x54\x6f\x6b\x65\x6c\x61\x75",														"\x74\x6b", "\x54\x4b\x4c" ], 
		[ y2m.q8f,  												 	"\x54\x6f\x6e\x67\x61",														"\x54\x6f\x6e\x67\x61",															"\x74\x6f", "\x54\x4f\x4e" ],
		[ y2m.x5x,  								  "\x54\x72\x69\x6e\x69\x64\x61\x64\x54\x6f\x62\x61\x67\x6f",									  "\x54\x72\x69\x6e\x69\x64\x61\x64\x20\x26\x20\x54\x6f\x62\x61\x67\x6f", 									"\x74\x74", "\x54\x54\x4f" ],
		[ y2m.v4y,  												"\x54\x75\x6e\x69\x73\x69\x61",													"\x54\x75\x6e\x69\x73\x69\x61",														"\x74\x6e", "\x54\x55\x4e" ],
		[ y2m.b0f,  												  "\x54\x75\x72\x6b\x65\x79",													  "\x54\x75\x72\x6b\x65\x79",															"\x74\x72", "\x54\x55\x52" ],
		[ y2m.p8k,  									  "\x54\x75\x72\x6b\x6d\x65\x6e\x69\x73\x74\x61\x6e",										  "\x54\x75\x72\x6b\x6d\x65\x6e\x69\x73\x74\x61\x6e",												"\x74\x6d", "\x54\x4b\x4d" ],
		[ y2m.i1x,  						  "\x54\x75\x72\x6b\x73\x43\x61\x69\x63\x6f\x73\x49\x73\x6c\x61\x6e\x64\x73",							  "\x54\x75\x72\x6b\x73\x20\x61\x6e\x64\x20\x43\x61\x69\x63\x6f\x73\x20\x49\x73\x6c\x61\x6e\x64\x73", 					"\x74\x63", "\x54\x43\x41" ],
		[ y2m.l6d,  												  "\x54\x75\x76\x61\x6c\x75",													  "\x54\x75\x76\x61\x6c\x75", 														"\x74\x76", "\x54\x55\x56" ],
		[ y2m.q6y,  												  "\x55\x67\x61\x6e\x64\x61",													  "\x55\x67\x61\x6e\x64\x61",															"\x75\x67", "\x55\x47\x41" ],
		[ y2m.h3h,  											  "\x55\x6b\x72\x61\x69\x6e\x65",													"\x55\x6b\x72\x61\x69\x6e\x65",														"\x75\x61", "\x55\x4b\x52" ],
		[ y2m.e0h,  						  "\x55\x6e\x69\x74\x65\x64\x41\x72\x61\x62\x45\x6d\x69\x72\x61\x74\x65\x73",							  "\x55\x6e\x69\x74\x65\x64\x20\x41\x72\x61\x62\x20\x45\x6d\x69\x72\x61\x74\x65\x73",								"\x61\x65", "\x41\x52\x45" ],
		[ y2m.s8u,  									"\x55\x6e\x69\x74\x65\x64\x4b\x69\x6e\x67\x64\x6f\x6d",										"\x55\x6e\x69\x74\x65\x64\x20\x4b\x69\x6e\x67\x64\x6f\x6d\x28\x47\x72\x65\x61\x74\x20\x42\x72\x69\x74\x61\x69\x6e\x29", 			"\x67\x62", "\x47\x42\x52" ], 
		[ y2m.k2t,  									  "\x55\x6e\x69\x74\x65\x64\x53\x74\x61\x74\x65\x73",										  "\x55\x6e\x69\x74\x65\x64\x20\x53\x74\x61\x74\x65\x73\x20\x6f\x66\x20\x41\x6d\x65\x72\x69\x63\x61", 					"\x75\x73", "\x55\x53\x41" ],
		[ y2m.q1t, "\x55\x6e\x69\x74\x65\x64\x53\x74\x61\x74\x65\x73\x4d\x69\x6e\x6f\x72\x4f\x75\x74\x6c\x79\x69\x6e\x67\x49\x73\x6c\x61\x6e\x64\x73", "\x55\x6e\x69\x74\x65\x64\x20\x53\x74\x61\x74\x65\x73\x20\x6f\x66\x20\x41\x6d\x65\x72\x69\x63\x61",						"\x75\x6d", "\x55\x4d\x49" ],
		[ y2m.j9x,  										 		"\x55\x72\x75\x67\x75\x61\x79",													"\x55\x72\x75\x67\x75\x61\x79",														"\x75\x79", "\x55\x52\x59" ],
		[ y2m.l3p,  									 	  "\x55\x7a\x62\x65\x6b\x69\x73\x74\x61\x6e",											  "\x55\x7a\x62\x65\x6b\x69\x73\x74\x61\x6e",													"\x75\x7a", "\x55\x5a\x42" ],
		[ y2m.r1k,  										 		"\x56\x61\x6e\x75\x61\x74\x75",													"\x56\x61\x6e\x75\x61\x74\x75",														"\x76\x75", "\x56\x55\x54" ],
		[ y2m.n4q,  											"\x56\x65\x6e\x65\x7a\x75\x65\x6c\x61",												"\x56\x65\x6e\x65\x7a\x75\x65\x6c\x61",													"\x76\x65", "\x56\x45\x4e" ],
		[ y2m.t3l,  												"\x56\x69\x65\x74\x6e\x61\x6d",													"\x56\x69\x65\x74\x20\x4e\x61\x6d",														"\x76\x6e", "\x56\x4e\x4d" ],
		[ y2m.u5u,  					  "\x56\x69\x72\x67\x69\x6e\x49\x73\x6c\x61\x6e\x64\x73\x42\x72\x69\x74\x69\x73\x68",       			"\x56\x69\x72\x67\x69\x6e\x20\x49\x73\x6c\x61\x6e\x64\x73\x20\x42\x72\x69\x74\x69\x73\x68", 						"\x76\x67", "\x56\x47\x42" ],
		[ y2m.y8z,  								"\x56\x69\x72\x67\x69\x6e\x49\x73\x6c\x61\x6e\x64\x73\x55\x53",	  							"\x56\x69\x72\x67\x69\x6e\x20\x49\x73\x6c\x61\x6e\x64\x73\x20\x55\x53", 									"\x76\x69", "\x56\x49\x52" ],
		[ y2m.m5l,  													"\x57\x61\x6c\x65\x73",														"\x57\x61\x6c\x65\x73",															"\x78\x38", "\x47\x42\x52" ],
		[ y2m.g7i,  									  "\x57\x61\x6c\x6c\x69\x73\x46\x75\x74\x75\x6e\x61",										  "\x57\x61\x6c\x6c\x69\x73\x20\x61\x6e\x64\x20\x46\x75\x74\x75\x6e\x61",									"\x77\x66", "\x57\x4c\x46" ],
		[ y2m.q4p,  									"\x57\x65\x73\x74\x65\x72\x6e\x53\x61\x68\x61\x72\x61",										"\x57\x65\x73\x74\x65\x72\x6e\x20\x53\x61\x68\x61\x72\x61",											"\x65\x68", "\x45\x53\x48" ],
		[ y2m.c8y,  											 		"\x59\x65\x6d\x65\x6e",														"\x59\x65\x6d\x65\x6e",															"\x79\x65", "\x59\x45\x4d" ],
		[ y2m.i6p,  											 		"\x5a\x61\x69\x72\x65",														"",																		"\x7a\x72", "\x5a\x52\x4e" ], 
		[ y2m.e1e,  											 	  "\x5a\x61\x6d\x62\x69\x61",													  "\x5a\x61\x6d\x62\x69\x61",															"\x7a\x6d", "\x5a\x4d\x42" ],
		[ y2m.l7f,  										 	  "\x5a\x69\x6d\x62\x61\x62\x77\x65",												  "\x5a\x69\x6d\x62\x61\x62\x77\x65",														"\x7a\x77", "\x5a\x57\x45" ],
];

function a0b(v0e)
{
	return x2b[v0e][2];
}

function e6a(v0e)
{
	return x2b[v0e][4];
}

function n7a(i2f)
{
	for (const v0e of x2b)
	{
		if (v0e[4] == i2f)
		{
			return v0e[0];
		}
	}
	return y2m.d1e;
}

function s0y(f1x)
{
	for (const v0e of x2b)
	{
		if (v0e[3] == f1x)
		{
			return v0e[0];
		}
	}
	return y2m.d1e;
}
class z1b
{

constructor()
{
	this.z6n = '';
}

i5y(q9l)
{
	this.z6n += q9l;
}

c3l(q9l)
{
	this.z6n += q9l + '\n';
}

a8u()
{
	this.z6n += '\n';
}

}




function j3e(h1b, l2i)
{
	let y9t = Number(h1b);
	if (isNaN(y9t))
	{
		return l2i;
	}
	else
	{
		return y9t;
	}
}
