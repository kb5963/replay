const	chess = false; 

const o8u =
{
	j4d   : 0,
	u6l   : 1,
	i9a   : 2,
	a1p   : 3,
	k2v       : 4,
};

const v8z =
{
	v8k        : 0,
	u6y        : 1,
};

const	sq_1 = 0;
const q9u = 1;
const t0h = 2;
const d9d = 3;
const o8c = 4;
const b6f = 5;
const a7i = 6;
const c6b = 7;
const c2h = 8;
const e5u = 9;
const o8m = 10;
const r7i = 11;
const h5g = 12;
const y3a = 13;
const m5m = 14;
const j3j = 15;
const s3f = 16;
const a8o = 17;
const u4e = 18;
const k9w = 19;
const t3i = 20;
const h6j = 21;
const j0q = 22;
const t4a = 23;
const d6p = 24;
const k8c = 25;
const j3q = 26;
const c3b = 27;
const x3i = 28;
const r6y = 29;
const q8y = 30;
const t8r = 31;
const z5u = 32;
const m5a = 33;
const o6a = 34;
const f0e = 35;
const w7i = 36;
const f4p = 37;
const y3r = 38;
const v8n = 39;
const p0j = 40;
const q4y = 41;
const g1q = 42;
const x5g = 43;
const y7c = 44;
const l9i = 45;
const v1u = 46;
const a1l = 47;
const e4x = 48;
const g8e = 49;
const i4u = 50;

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
const u2v = 1;
const n1d = 2;
const n4s = 3;
const k5x = 4;
const c5s = 5;
const t2c = 6;
const a2m = 7;
const h7p = 8;
const b6i = 9;
const d8b = 10;

const c4f        = 10;
const e7n       = 50;
const t5z      = 20;

const v2x =
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
	o8u.j4d,  
	o8u.j4d,  
	o8u.j4d,  
	o8u.j4d,  
	o8u.j4d,  
	o8u.j4d,  
	o8u.j4d,  
	o8u.j4d,  
	o8u.j4d,  
	o8u.j4d,  
	o8u.j4d,  
	o8u.j4d,  
	o8u.j4d,  
	o8u.j4d,  
	o8u.j4d,  
	o8u.j4d,  
	o8u.j4d,  
	o8u.j4d,  
	o8u.j4d,  
	o8u.j4d,  
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
	sq_1,  q9u,  t0h,  d9d,  o8c,
	b6f,  a7i,  c6b,  c2h,  e5u,
	o8m, r7i, h5g, y3a, m5m,
	j3j, s3f, a8o, u4e, k9w,
	t3i, h6j, j0q, t4a, d6p,
	k8c, j3q, c3b, x3i, r6y,
	q8y, t8r, z5u, m5a, o6a,
	f0e, w7i, f4p, y3r, v8n,
	p0j, q4y, g1q, x5g, y7c,
	l9i, v1u, a1l, e4x, g8e,
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
  u2v,
  n1d,
  n4s,
  k5x,
  c5s,
  t2c,
  a2m,
  h7p,
  b6i,
];

function j6e(q4x)
{
	return q4x == o8u.i9a ||
    q4x == o8u.a1p;
}

function c1n(q4x)
{
	return q4x == o8u.j4d ||
    q4x == o8u.u6l;
}

function w6d(q4x)
{
	return q4x == o8u.j4d || q4x == o8u.i9a;
}

function l1y(q4x)
{
	return q4x == o8u.u6l || q4x == o8u.a1p;
}

function r7j(z4p)
{
	if (z4p == i4u)
	{
		return i4u;
	}
	else
	{
		return e7n - z4p - 1;
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

function y2e(z4p)
{
	return k7y[z4p];
}

const x4d =
[
	b6i, b6i,	b6i, b6i,	b6i,
	h7p,	 h7p,	h7p,	 h7p,	h7p,
	a2m,	 a2m,	a2m,	 a2m,	a2m,
	t2c,	 t2c,	t2c,	 t2c,	t2c,
	c5s,	 c5s,	c5s,	 c5s,	c5s,
	k5x,	 k5x,	k5x,	 k5x,	k5x,
	n4s,	 n4s,	n4s,	 n4s,	n4s,
	n1d,	 n1d,	n1d,	 n1d,	n1d,
	u2v,	 u2v,	u2v,	 u2v,	u2v,
	rank_1,	 rank_1,	rank_1,	 rank_1,	rank_1,
];

function d5g(z4p)
{
	return x4d[z4p];
}

function x0s(a, b)
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

function y7g(m6m, q4x)
{
	let p0n = 0;
	for (const value of m6m)
	{
		if (value == q4x)
		{
			p0n++;
		}
	}
	return p0n;
}

function g1t(j0v)
{
 	let value = j3e(j0v, 0);
	if (value <= 0)
	{
		return i4u;
	}
	else
	{
		value--; 
		if (value >= sq_1 && value <= g8e)
		{
			return value;
		}
		else
		{
			return i4u;
		}
	}
}

function h2j(z4p)
{
 	let j0v = '';
	j0v = (z4p + 1);
  return j0v;
}







function b5u(z4p)
{
	return z4p >= l9i;
}

function f9y(z4p)
{
	return z4p <= o8c;
}

function w4g(g7d)
{
	return !(g7d % 2);
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
 	this.p8k = v8z.v8k;
 	this.u0i = new d5f();
 	this.k1p();
}

o0o()
{
	let x4c = new z4m();
	c2q(x4c.g2t, this.g2t);
	x4c.p8k = this.p8k;
  x4c.u0i = this.u0i.o0o();
	return x4c;
}

e2m(c3d)
{
	return this.p8k == c3d.p8k &&
		x0s(this.g2t, c3d.g2t);
}

i5u(c3d)
{
	return !this.e2m(c3d);
}

c6a()
{
 	c2q(this.g2t, v2x);
 	this.p8k = v8z.v8k;
}

m5x()
{
	return this.p8k == v8z.v8k && this.c4n();
}

c4n()
{
	return x0s(this.g2t, v2x);
}

k1p()
{
	this.g2t.fill(o8u.k2v);
	this.p8k = v8z.v8k;
}

a4g()
{
	return this.p8k == v8z.v8k && this.i4z();
}

i4z()
{
	return this.g2t.every(o8u.k2v);
}

m6m()
{
  return this.g2t.slice();
}

t9a(z4p)
{
	return this.g2t[z4p];
}

u6i(z4p, q4x)
{
	this.g2t[z4p] = q4x;
}

p4n()
{
	this.p8k = v8z.v8k;
}

z1f()
{
	this.p8k = v8z.u6y;
}

o7l()
{
	if (this.p8k == v8z.v8k)
	{
		this.p8k = v8z.u6y;
	}
	else
	{
		this.p8k = v8z.v8k;
	}
}

m0s()
{
	return this.p8k == v8z.v8k;
}

n3a()
{
	return this.p8k == v8z.u6y;
}

j6o(z4p)
{
	return this.g2t[z4p] == o8u.k2v;
}

c1n(z4p)
{
	let q4x = this.g2t[z4p];
	return q4x == o8u.j4d ||
    q4x == o8u.u6l;
}

j6e(z4p)
{
	let q4x = this.g2t[z4p];
	return q4x == o8u.i9a ||
    q4x == o8u.a1p;
}

e8p(z4p)
{
  let q4x = this.g2t[z4p];
	return q4x == o8u.j4d;
}

y7j(z4p)
{
  let q4x = this.g2t[z4p];
	return q4x == o8u.u6l;
}

s3v(z4p)
{
  let q4x = this.g2t[z4p];
	return q4x == o8u.i9a;
}

u0g(z4p)
{
  let q4x = this.g2t[z4p];
	return q4x == o8u.a1p;
}

d4m()
{
  let p0n = 0;
	for (const z4p of h0i)
	{
    if (this.c1n(z4p))
		{
			p0n++;
		}
	}
	return p0n;
}

f7z()
{
  let p0n = 0;
	for (const z4p of h0i)
	{
    if (this.j6e(z4p))
		{
			p0n++;
		}
	}
	return p0n;
}

g7b(l4s)
{
  this.u0i = l4s.o0o();
}

l4s()
{
  return this.u0i.o0o();
}

r9f(u0y)
{
	if (u0y.r2t())
	{
    this.o7l();
		return;
	}
	this.u6i(u0y.b8x, o8u.k2v);
	this.u6i(u0y.c2m, u0y.b5w);
	for (const z4p of u0y.o7g)
	{
		this.u6i(z4p, o8u.k2v);
	}
	this.o7l();
}

y9l(u0y)
{
	if (u0y.r2t())
	{
    this.o7l();
		return;
	}
	this.u6i(u0y.c2m, o8u.k2v);
	this.u6i(u0y.b8x, u0y.b7t);
	let i = 0;
	for (const z4p of u0y.o7g)
	{
		this.u6i(z4p, u0y.l4p[i]);
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
	i5c.push("Ellipse");
	i5c.push("Circle");
	return i5c;
}

class g8w
{

constructor()
{
	this.n6p = new q5w();
	this.m6n = null;
}

o0o()
{
	let k7l = new g8w();
	k7l.n6p = this.n6p.o0o();
	k7l.m6n = null;
	if (this.m6n)
	{
		k7l.m6n = this.m6n.o0o();
	}
	return k7l;
}

e2m(c3d)
{
	if (this.n6p.i5u(c3d))
	{
		return false;
	}
	return true;
}

i5u(c3d)
{
	return !this.e2m(c3d);
}

k2v()
{
	return this.n6p.k2v();
}

b8x()
{
	return this.n6p.b8x;
}

c2m()
{
	return this.n6p.c2m;
}

b7t()
{
	return this.n6p.b7t;
}

b5w()
{
	return this.n6p.b5w;
}

o7g()
{
  return this.n6p.o7g.slice();
}

l4p()
{
  return this.n6p.l4p.slice();
}

p4e()
{
	return this.n6p.p4e();
}

c1n()
{
	return this.n6p.c1n();
}

j6e()
{
	return this.n6p.j6e();
}

v6u()
{
	return this.n6p.v6u();
}

r2t()
{
	return this.n6p.r2t();
}

p0w()
{
	return this.n6p.p0w();
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

c1e(r1g)
{
	this.k0q();
	this.m6n = r1g.o0o();
}

a7j()
{
	return this.m6n;
}

i9b(c3d)
{
	if (this.m6n && !c3d.m6n)
	{
		return false;
	}
	if (!this.m6n && c3d.m6n)
	{
		return false;
	}
	if (!this.m6n && !c3d.m6n)
	{
		return true;
	}
	return this.m6n.e2m(c3d.m6n);
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

v9u(p4p)
{
	this.k0q();
	this.m6n.z8s = p4p;
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

l3z(p4p)
{
	this.k0q();
	this.m6n.q9g = p4p;
	this.h1p();
}

m0o()
{
	if (this.m6n)
	{
		this.m6n.a1m = n8u.j1l;
		this.h1p();
	}
}

l4f()
{
	if (this.m6n)
	{
		return this.m6n.a1m != n8u.j1l;
	}
	else
	{
		return false;
	}
}

a1m()
{
	if (this.m6n)
	{
		return this.m6n.a1m;
	}
	else
	{
		return n8u.j1l;
	}
}

c1i(a1m)
{
	this.k0q();
	this.m6n.a1m = a1m;
	this.h1p();
}

k4d()
{
	if (this.m6n)
	{
		this.m6n.style = c8l.j1l;
		this.h1p();
	}
}

f8e()
{
	if (this.m6n)
	{
		return this.m6n.style != c8l.j1l;
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
		return c8l.j1l;
	}
}

i6z(style)
{
	this.k0q();
	this.m6n.style = style;
	this.h1p();
}

a2u()
{
	if (this.m6n)
	{
		this.m6n.value = b4c.j1l;
		this.h1p();
	}
}

e4n()
{
	if (this.m6n)
	{
		return this.m6n.value != b4c.j1l;
	}
	else
	{
		return false;
	}
}

value()
{
	if (this.m6n)
	{
		return this.m6n.value;
	}
	else
	{
		return b4c.j1l;
	}
}

k1e(value)
{
	this.k0q();
	this.m6n.value = value;
	this.h1p();
}

t1d()
{
	if (this.m6n)
	{
		this.m6n.z4d = o9q.j1l;
		this.h1p();
	}
}

v4k()
{
	if (this.m6n)
	{
		return this.m6n.z4d != o9q.j1l;
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
		return o9q.j1l;
	}
}

u7k(z4d)
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
      let l6q = this.m6n.z8s.indexOf("[#]");
      return l6q != -1;
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

w5c()
{
  
}

e0p()
{
	if (this.m6n)
	{
		this.m6n.f3q = false;
		this.h1p();
	}
}

f1k()
{
	if (this.m6n)
	{
		return this.m6n.f3q;
	}
	else
	{
		return false;
	}
}

b1f()
{
	this.k0q();
	this.m6n.f3q = true;
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

x4w()
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
		this.m6n.a7a.h2u();
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

c3o(e6v)
{
	this.k0q();
	this.m6n.e6v = e6v.o0o();
	this.h1p();
}

m1e()
{
	if (this.m6n)
	{
		this.m6n.a7a.h2u();
		this.h1p();
	}
}

z4c()
{
	if (this.m6n)
	{
		return !this.m6n.a7a.k2v();
	}
	else
	{
		return false;
	}
}

a7a()
{
	if (this.m6n)
	{
		return this.m6n.a7a.o0o();
	}
	else
	{
		return new x6l();
	}
}

k1n(a7a)
{
	this.k0q();
	this.m6n.a7a = a7a.o0o();
	this.h1p();
}

y9e()
{
	if (this.m6n)
	{
		this.m6n.n4n.o1a();
		this.h1p();
	}
}

v8d()
{
	if (this.m6n)
	{
		return this.m6n.n4n.g6i();
	}
	else
	{
		return false;
	}
}

n4n()
{
	if (this.m6n)
	{
		return this.m6n.n4n.o0o();
	}
	else
	{
		return new p6t();
	}
}

b5v(n4n)
{
	this.k0q();
	this.m6n.n4n = n4n.o0o();
	this.h1p();
}

s3z(z2g)
{
	this.n6p = z2g.o0o();
	this.m6n = null;
}

z2g()
{
	let u5j = new q5w();
  return Object.assign(u5j, this.n6p);
}

}

function l9h(z2g)
{
  let l3k = new g8w();
  l3k.s3z(z2g);
  return l3k;
}
class q5w
{

constructor()
{
	this.b8x = i4u;
	this.b7t = o8u.k2v;
	this.c2m = i4u;
	this.b5w = o8u.k2v;
	this.o7g = [];
	this.l4p = [];
	this.m4u = [];
}

o0o()
{
	let u5j = new q5w();
	u5j.b8x = this.b8x;
	u5j.b7t = this.b7t;
	u5j.c2m = this.c2m;
	u5j.b5w = this.b5w;
	u5j.o7g = this.o7g.slice();
	u5j.l4p = this.l4p.slice();
	u5j.m4u = this.m4u.slice();
	return u5j;
}

e2m(c3d)
{
	if (
		this.b8x != c3d.b8x ||
		this.b7t != c3d.b7t ||
		this.c2m != c3d.c2m ||
		this.b5w != c3d.b5w)
	{
		return false;
	}
	else
	{
		for (const z4p of this.o7g)
		{
			let c6v = c3d.o7g.find(function(u7n){ return u7n == z4p; });
			if (c6v === undefined)
			{
				return false;
			}
		}
		for (const q4x of this.l4p)
		{
			let c6v = c3d.l4p.find(function(u7n){ return u7n == q4x; });
			if (c6v === undefined)
			{
				return false;
			}
		}
		return true;
	}
}

i5u(c3d)
{
	return !this.e2m(c3d);
}

k2v()
{
	return this.b8x == i4u;
}

c1n()
{
 	return this.b7t == o8u.j4d ||
		this.b7t == o8u.u6l;
}

j6e()
{
 	return this.b7t == o8u.i9a ||
		this.b7t == o8u.a1p;
}

p0w()
{
  return this.o7g.length > 0;
}

v6u()
{
	return this.b7t != this.b5w;
}

r2t()
{
	return this.b8x == i4u;
}

z9l(z4p)
{
	let c6v = this.o7g.find(function(u7n){ return u7n == z4p; });
	return (c6v !== undefined);
}


a5b(o1r)
{
	for (const z4p of o1r)
	{
		let c6v = this.o7g.find(function(u7n){ return u7n == z4p; });
		if (c6v === undefined)
		{
			return false;
		}
	}
	return true;
}


y7d(z4p)
{
	let c6v = this.m4u.find(function(u7n){ return u7n == z4p; });
	return (c6v !== undefined);
}

h0g(o1r)
{
	for (const z4p of o1r)
	{
		let c6v = this.m4u.find(function(u7n){ return u7n == z4p; });
		if (c6v === undefined)
		{
			return false;
		}
	}
	return true;
}

p4e()
{
  return this.o7g.length;
}

}

const k0u =
[
	i4u, i4u,	i4u, i4u,	i4u, i4u, i4u, i4u,	i4u, i4u, i4u, i4u, i4u, i4u,
	i4u, i4u,	i4u, i4u, i4u, i4u,	i4u, i4u,	i4u, i4u,	i4u, i4u,	i4u, i4u,
	i4u, i4u,	i4u, sq_1,	i4u, q9u,	i4u, t0h,	i4u, d9d,	i4u, o8c,	i4u, i4u,
	i4u, i4u,	b6f,  i4u,	a7i,  i4u,	c6b,  i4u,	c2h,  i4u,	e5u, i4u,	i4u, i4u,
	i4u, i4u,	i4u, o8m,	i4u, r7i,	i4u, h5g,	i4u, y3a,	i4u, m5m,	i4u, i4u,
	i4u, i4u,	j3j, i4u,	s3f, i4u,	a8o, i4u,	u4e, i4u,	k9w, i4u,	i4u, i4u,
	i4u, i4u,	i4u, t3i,	i4u, h6j,	i4u, j0q,	i4u, t4a,	i4u, d6p,	i4u, i4u,
	i4u, i4u, k8c, i4u,	j3q, i4u,	c3b, i4u,	x3i, i4u,	r6y, i4u,	i4u, i4u,
	i4u, i4u,	i4u, q8y,	i4u, t8r,	i4u, z5u,	i4u, m5a,	i4u, o6a,	i4u, i4u,
	i4u, i4u,	f0e, i4u,	w7i, i4u,	f4p, i4u,	y3r, i4u,	v8n, i4u,	i4u, i4u,
	i4u, i4u,	i4u, p0j,	i4u, q4y,	i4u, g1q,	i4u, x5g,	i4u, y7c,	i4u, i4u,
	i4u, i4u,	l9i, i4u,	v1u, i4u,	a1l, i4u,	e4x, i4u,	g8e, i4u,	i4u, i4u,
	i4u, i4u,	i4u, i4u,	i4u, i4u,	i4u, i4u,	i4u, i4u,	i4u, i4u,	i4u, i4u,
	i4u, i4u,	i4u, i4u,	i4u, i4u,	i4u, i4u,	i4u, i4u,	i4u, i4u,	i4u, i4u,
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
  this.l0p = Array(e7n).fill(i4u);
  this.y7s = Array(e7n).fill(i4u);
  this.k4u = Array(e7n).fill(o8u.k2v);
  this.g4q = Array(e7n).fill(false);
  this.g2e = 0;
	this.w3s = new z4m();
	this.h3t = 0;
	this.f3x = i4u;
	this.o2z = o8u.k2v;
	this.l3n = 0;
	this.a3h = 0;
	this.g5e = 0;
	this.w2o = 0;
	this.h5s = false;
}

g4i(p2g)
{
	this.w3s = p2g.o0o();
	this.g4q.fill(false);
  this.g2e = 0;
	let t0x = 14;
	if (this.w3s.m0s())
	{
		this.l3n = -(t0x + 1);
		this.a3h = -(t0x - 1);
		this.g5e = (t0x - 1);
		this.w2o = (t0x + 1);
	}
	else
	{
		this.l3n = (t0x + 1);
		this.a3h = (t0x - 1);
		this.g5e = -(t0x - 1);
		this.w2o = -(t0x + 1);
	}
}

m8n(b8x)
{
 	this.f3x = b8x;
	this.o2z = this.w3s.t9a(this.f3x);
	this.h3t = 0;
	if (
		(this.w3s.m0s() && this.o2z == o8u.j4d) ||
		(this.w3s.n3a() && this.o2z == o8u.i9a))
	{
		this.a0e(this.f3x);
	}
	else if (
		(this.w3s.m0s() && this.o2z == o8u.u6l) ||
		(this.w3s.n3a() && this.o2z == o8u.a1p))
	{
		this.s3w(this.f3x);
	}
}

a0e(z4p)
{
 	this.g8j(z4p, this.l3n);
	this.g8j(z4p, this.a3h);
}

g8j(b8x, u1y)
{
	let c2m = k0u[p2a[b8x] + u1y];
	if (c2m != i4u)
  {
    if (this.w3s.j6o(c2m))
  	{
	  	this.v9t(c2m);
  	}
  }
}

s3w(b8x)
{
	this.s0f(b8x, this.l3n);
	this.s0f(b8x, this.a3h);
	this.s0f(b8x, this.w2o);
	this.s0f(b8x, this.g5e);
}

s0f(b8x, u1y)
{
	let q3z = u1y;
	do
	{
		let c2m = k0u[p2a[b8x] + q3z];
		if (c2m == i4u)
    {
      break;
    }
    if (!this.w3s.j6o(c2m))
		{
			break;
		}
		this.v9t(c2m);
		q3z += u1y;
	} while (true);
}

f6e(b8x)
{
	this.f3x = b8x;
	this.o2z = this.w3s.t9a(this.f3x);
	this.h3t = 0;
	let q4x = this.w3s.t9a(this.f3x);
	if ((this.w3s.m0s() && this.o2z == o8u.j4d) ||
		(this.w3s.n3a() && this.o2z == o8u.i9a))
	{
		this.w3s.u6i(this.f3x, o8u.k2v);
		this.u4j(this.f3x);
	}
	else if (
		(this.w3s.m0s() && this.o2z == o8u.u6l) ||
		(this.w3s.n3a() && this.o2z == o8u.a1p))
	{
		this.w3s.u6i(this.f3x, o8u.k2v);
		this.d5l(this.f3x);
	}
	this.w3s.u6i(this.f3x, q4x);
}

u4j(b8x)
{
	let l8d = true;
	if (this.t0g(b8x, this.l3n))
	{
		l8d = false;
	}
	if (this.t0g(b8x, this.a3h))
	{
		l8d = false;
	}
	if (this.t0g(b8x, this.w2o))
	{
		l8d = false;
	}
	if (this.t0g(b8x, this.g5e))
	{
		l8d = false;
	}
	if (l8d)
	{
		this.f5p(b8x);
	}
}

t0g(b8x, u1y)
{
	let c8h = k0u[p2a[b8x] + u1y];
	if (c8h == i4u)
	{
		return false;
	}
	let c2m = k0u[p2a[b8x] + 2 * u1y];
	if (c2m == i4u)
	{
		return false;
	}
	if (!this.w3s.j6o(c2m))
	{
		return false;
	}
	if (this.g4q[c8h])
	{
		return false;
	}
	if (this.o2z == o8u.j4d)
	{
		if (!this.w3s.j6e(c8h))
		{
			return false;
		}
	}
	else
	{
		if (!this.w3s.c1n(c8h))
		{
			return false;
		}
	}
	this.l0p[this.h3t] = c8h;
	this.k4u[this.h3t] = this.w3s.t9a(c8h);
	this.y7s[this.h3t] = c2m;
	this.h3t++;
	let q4x = this.w3s.t9a(c8h);
	this.g4q[c8h] = true;
	this.u4j(c2m);
	this.g4q[c8h] = false;
	this.w3s.u6i(c8h, q4x);
	this.h3t--;
	return true;
}

d5l(b8x)
{
	let l8d = true;
	if (this.h6y(b8x, this.l3n))
	{
		l8d = false;
	}
	if (this.h6y(b8x, this.a3h))
	{
		l8d = false;
	}
	if (this.h6y(b8x, this.w2o))
	{
		l8d = false;
	}
	if (this.h6y(b8x, this.g5e))
	{
		l8d = false;
	}
	if (l8d)
	{
		this.f5p(b8x);
	}
}

h6y(s3a, u1y)
{
	let c8h = i4u;
	let q3z = u1y;
	do
	{
		c8h = k0u[p2a[s3a] + q3z];
		if (c8h == i4u)
		{
			return false;
		}
		if (this.g4q[c8h])
		{
			return false;
		}
		if (this.o2z == o8u.u6l)
		{
			if (this.w3s.j6e(c8h))
			{
				break;
			}
		}
		else
		{
			if (this.w3s.c1n(c8h))
			{
				break;
			}
		}
		if (!this.w3s.j6o(c8h))
		{
			return false;
		}
		q3z += u1y;
	} while (true);
	let q6p = false;
	do
	{
		q3z += u1y;
		let c2m = k0u[p2a[s3a] + q3z];
		if (c2m == i4u)
    {
      return q6p;
    }
    if (!this.w3s.j6o(c2m))
		{
			return q6p;
		}
		this.l0p[this.h3t] = c8h;
		this.k4u[this.h3t] = this.w3s.t9a(c8h);
		this.y7s[this.h3t] = c2m;
		this.h3t++;
		let a1z = this.w3s.t9a(c8h);
		this.g4q[c8h] = true;
		this.d5l(c2m);
		this.g4q[c8h] = false;
		this.w3s.u6i(c8h, a1z);
		this.h3t--;
		q6p = true;
	} while (true);
}

f5p(c2m)
{
	if (!this.h3t)
	{
		return;
	}
	if (this.h3t >= this.g2e)
	{
		if (this.h3t > this.g2e)
		{
      this.r1o.length = 0;
		}
		this.v9t(c2m);
	}
}

v9t(c2m)
{
	let u0y = new q5w();
	u0y.b8x = this.f3x;
	u0y.c2m = c2m;
	u0y.b7t = this.o2z;
	u0y.b5w = u0y.b7t;
	if (u0y.b7t == o8u.j4d)
	{
		if (f9y(u0y.c2m))
		{
			u0y.b5w = o8u.u6l;
		}
	}
	else if (u0y.b7t == o8u.i9a)
	{
		if (b5u(u0y.c2m))
		{
			u0y.b5w = o8u.a1p;
		}
	}
	for (let i = 0; i < this.h3t; i++)
	{
		u0y.o7g.push(this.l0p[i]);
		u0y.l4p.push(this.k4u[i]);
	}
	for (let i = 0; i < this.h3t - 1; i++)
	{
		u0y.m4u.push(this.y7s[i]);
	}

	if (this.h5s)
	{
		if (this.h3t >= 2)
		{
			let c6v = this.r1o.find(function(u7n)
			{
				if (u7n.e2m(u0y))
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
	this.g2e = u0y.p4e();
	this.r1o.push(u0y);
}

v3n(p2g, h3h)
{
	this.g4i(p2g);
	this.h5s = h3h;
	this.r1o.length = 0;

	for (const z4p of h0i)
	{
		this.f6e(z4p);
	}

	if (this.r1o.length === 0)
	{
		for (const z4p of h0i)
		{
			this.m8n(z4p);
		}
	}
	return this.r1o;
}

y6a(p2g)
{
	this.g4i(p2g);
	this.h5s = true;
	this.r1o.length = 0;

	for (const z4p of h0i)
	{
		this.f6e(z4p);
	}
	return this.r1o.length > 0;
}

g5o(p2g, c8h)
{
	this.g4i(p2g);
	this.h5s = true;
	this.r1o.length = 0;

	for (const z4p of h0i)
	{
		this.f6e(z4p);
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

m4u(p2g, u0y)
{
	this.g4i(p2g);
	this.h5s = true;
	this.r1o.length = 0;

	this.f6e(u0y.b8x);
	let q2q = [];
  let o7g = u0y.o7g;
	for (const c8h of o7g)
	{
		q2q.push(c8h);
	}
	for (const z2g of this.r1o)
	{
		if (z2g.c2m != u0y.c2m)
		{
			continue;
		}
		if (!z2g.a5b(q2q))
		{
			continue;
		}
		return z2g.m4u.slice();
	}
	return [];
}

g5t(p2g, u0y)
{
	this.g4i(p2g);
	this.h5s = true;
	this.r1o.length = 0;

	this.f6e(u0y.b8x);
	let z9w = 0;
	for (const z2g of this.r1o)
	{
		if (z2g.c2m == u0y.c2m)
		{
			z9w++;
		}
	}
	return z9w > 1;
}

} 


function a0g(p2g)
{
	let c9n = new w9y();
	return c9n.v3n(p2g, true);
}

function i5o(p2g, b8x)
{
	let c9n = new w9y();
	let q5m = c9n.v3n(p2g, true);
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

function z6z(p2g, c2m)
{
	let c9n = new w9y();
	let q5m = c9n.v3n(p2g, true);
	let q3e = [];
	for (const z2g of q5m)
	{
		if (z2g.c2m == c2m)
		{
			q3e.push(z2g);
		}
	}
	return q3e;
}

function p7x(p2g, b8x, c2m)
{
	let c9n = new w9y();
	let q5m = c9n.v3n(p2g, true);
	let u1n = [];
	for (const z2g of q5m)
	{
		if (z2g.b8x == b8x && z2g.c2m == c2m)
		{
			u1n.push(z2g);
		}
	}
	return u1n;
}

function l3j(p2g, b8x, c2m, o7g)
{
	let c9n = new w9y();
	let q5m = c9n.v3n(p2g, true);
	let v3n = [];
	for (const z2g of q5m)
	{
		if (z2g.b8x != b8x)
		{
			continue;
		}
		if (z2g.c2m != c2m)
		{
			continue;
		}
		if (!z2g.z9l(o7g))
		{
			continue;
		}
		v3n.push(z2g);
	}
	return v3n;
}

function j3z(p2g, b8x, c2m, m4u)
{
	let c9n = new w9y();
	let q5m = c9n.v3n(p2g, false);
	let v3n = [];
	for (const z2g of q5m)
	{
		if (z2g.b8x != b8x)
		{
			continue;
		}
		if (z2g.c2m != c2m)
		{
			continue;
		}
		if (!z2g.h0g(m4u))
		{
			continue;
		}
		
		let f7o = false;
		for (const m of v3n)
		{
			if (m.e2m(u0y))
			{
				f7o = true;
				break;
			}
		}
		if (!f7o)
		{
			v3n.push(z2g);
		}
	}
	return v3n;
}

function f7p(p2g, u0y)
{
	let c9n = new w9y();
	return c9n.m4u(p2g, u0y);
}

function y6a(p2g)
{
	let c9n = new w9y();
	return c9n.y6a(p2g);
}

function g5o(p2g, c8h)
{
	let c9n = new w9y();
	return c9n.g5o(p2g, c8h);
}

function g5t(p2g, u0y)
{
	let c9n = new w9y();
	return c9n.g5t(p2g, u0y);
}

function x8e(p2g)
{
	let c9n = new w9y();
	if (c9n.y6a(p2g))
	{
		return false;
	}
	let e5i = p2g.o0o();
	e5i.o7l();
	return !c9n.y6a(e5i);
}

function b3q()
{
}
/* voor dammen niet nodig */
const i8o =
{
  j1l : 0,  
	d1e : 1,
	h3l : 2,
};

function m9t(p2g, u0y)
{
 	let j0v = '';
	if (u0y.k2v())
	{
		j0v += "--";
	}
  else
  {
    j0v = h2j(u0y.b8x);
    if (u0y.o7g.length > 0)
    {
      j0v += 'x';
    }
    else
    {
      j0v += '-';
    }
    if (u0y.o7g.length > 2)
    {
      if (g5t(p2g, u0y))
      {
        let m4u = f7p(p2g, u0y);
        for (const z4p of m4u)
        {
          j0v += h2j(z4p);
          j0v += 'x';
        }
        j0v += h2j(u0y.c2m);
      }
      else
      {
        j0v += h2j(u0y.c2m);
      }
    }
    else
    {
      j0v += h2j(u0y.c2m);
    }
  }
	return j0v;
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
 	let l2t = (coordinatesType == l8m.h7i ||
		coordinatesType == l8m.w5j ||
		coordinatesType == l8m.m6e);
	let u9l = (coordinatesType == l8m.h7i ||
		coordinatesType == l8m.w5j ||
		coordinatesType == l8m.l7z);
	let o0h =	(coordinatesType == l8m.h7i ||
		coordinatesType == l8m.m6e ||
		coordinatesType == l8m.d3j);
	let k8q = (coordinatesType == l8m.h7i ||
		coordinatesType == l8m.l7z ||
		coordinatesType == l8m.d3j);

	v5c.font = (coordinate.e3h).toString() + "px serif";
	v5c.fillStyle = f1h;
  let c5p = coordinate.height;

	if (u9l)
	{
  	let t9z = 0;
		if (b1y)
		{
			t9z = e7n - c4f / 2;
		}
		else
		{
			t9z = c4f / 2 + 1;
		}
    for (let g7d = 0; g7d < c4f; g7d++)
		{
 			if (g7d % 2)
			{
				continue;
			}
			let w5g = v5c.measureText(t9z).width;
			let top = i2w.n8v + 1 + (g7d + 1) * x2h.s0p;
			top += (x2h.s0p - c5p) / 2 + c5p;
			let o9b = i2w.j6q - marginSize + (marginSize - w5g) / 2;
      v5c.fillText(t9z, o9b, top);
			if (b1y)
			{
				t9z -= c4f;
			}
			else
			{
				t9z += c4f;
			}
		}
	}

	if (o0h)
	{
		let t9z = 0;
		if (b1y)
		{
			t9z = e7n - c4f / 2 + 1;
		}
		else
		{
			t9z = c4f / 2;
		}
    for (let g7d = 0; g7d < c4f; g7d++)
		{
 			if (g7d % 2)
			{
				continue;
			}
      let w5g = v5c.measureText(t9z).width;
			let top = i2w.n8v + 1 + g7d * x2h.s0p;
			top += (x2h.s0p - c5p) / 2 + c5p;
			let o9b = i2w.j6q + i2w.f3w() +
        (marginSize - w5g) / 2;
      v5c.fillText(t9z, o9b, top);
			if (b1y)
			{
				t9z -= c4f;
			}
			else
			{
				t9z += c4f;
			}
		}
	}

	if (l2t)
	{
		let t9z = 0;
		if (b1y)
		{
			t9z = e7n;
		}
		else
		{
			t9z = 1;
		}
    for (let b8f = 0; b8f < c4f; b8f++)
		{
 			if (b8f % 2)
			{
				continue;
			}
			let left = i2w.j6q + 1 + (b8f + 1) * x2h.s0p;
      let w5g = v5c.measureText(t9z).width;
			let o9b = left + (x2h.s0p - w5g) / 2;
			let z7a = i2w.n8v - (marginSize - c5p) / 2 - 2;
      
      v5c.fillText(t9z, o9b, z7a);
			if (b1y)
			{
				t9z--;
			}
			else
			{
				t9z++;
			}
		}
	}

	if (k8q)
	{
		let t9z = 0;
		if (b1y)
		{
			t9z = c4f / 2;
		}
		else
		{
			t9z = e7n - c4f / 2 + 1;
		}
    for (let b8f = 0; b8f < c4f; b8f++)
		{
			if (b8f % 2)
			{
				continue;
			}
			let left = i2w.j6q + 1 + b8f * x2h.s0p;
      let w5g = v5c.measureText(t9z).width;
			let o9b = left + (x2h.s0p - w5g) / 2;
			let z7a = i2w.n8v + i2w.k4s() +
        (marginSize - c5p) / 2 + c5p - 2;
      
      v5c.fillText(t9z, o9b, z7a);
			if (b1y)
			{
				t9z--;
			}
			else
			{
				t9z++;
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
function a2a(v5c, rect, q4x)
{
 	v5c.lineWidth = "1";
  if (q4x == o8u.j4d || q4x == o8u.u6l)
  {
    v5c.fillStyle = "white";
    v5c.strokeStyle = "black";
  }
  else
  {
    v5c.fillStyle = "black";
    v5c.strokeStyle = "white";
  }
  let k6k = 80;
  let y0s = rect.f3w() + 1;
 	let a8s = ((0.19 * k6k) / 100) * y0s;
  let g3i = rect.j6q + y0s / 2;
  let m0x = (y0s / 4);
  let a4p = (y0s / 2.4);
	if (q4x == o8u.j4d || q4x == o8u.i9a)
	{
    let i6i = rect.n8v + y0s / 1.8;
    v5c.beginPath();
    v5c.ellipse(g3i, i6i, m0x, a4p, Math.PI / 2, 0, 2 * Math.PI);
    v5c.fill();
    v5c.stroke();
		i6i -= a8s;
    v5c.beginPath();
    v5c.ellipse(g3i, i6i, m0x, a4p, Math.PI / 2, 0, 2 * Math.PI);
    v5c.fill();
    v5c.stroke();
	}
	else if (q4x == o8u.u6l || q4x == o8u.a1p)
	{
    let i6i = rect.n8v + y0s / 1.55;
    v5c.beginPath();
    v5c.ellipse(g3i, i6i, m0x, a4p, Math.PI / 2, 0, 2 * Math.PI);
    v5c.fill();
    v5c.stroke();
		i6i -= a8s;
    v5c.beginPath();
    v5c.ellipse(g3i, i6i, m0x, a4p, Math.PI / 2, 0, 2 * Math.PI);
    v5c.fill();
    v5c.stroke();
		i6i -= a8s;
    v5c.beginPath();
    v5c.ellipse(g3i, i6i, m0x, a4p, Math.PI / 2, 0, 2 * Math.PI);
    v5c.fill();
    v5c.stroke();
	}
}

function t4u(v5c, rect, q4x)
{
 	v5c.lineWidth = "1";
  if (q4x == o8u.j4d || q4x == o8u.u6l)
  {
    v5c.fillStyle = "white";
    v5c.strokeStyle = "black";
  }
  else
  {
    v5c.fillStyle = "black";
    v5c.strokeStyle = "white";
  }

  let k6k = 80;
  let y0s = rect.f3w() + 1;
 	let a8s = ((0.19 * k6k) / 100) * y0s;
  let g3i = rect.j6q + y0s / 2;
  let m0x = (y0s / 4);
  let a4p = (y0s / 2.4);


  let i6i = rect.n8v + y0s / 2; 
  let f6u = y0s * 0.4;

  v5c.beginPath();
  v5c.arc(g3i, i6i, f6u, 0, Math.PI * 2);
  v5c.closePath();
  v5c.fill();
  v5c.stroke();

	if (l1y(q4x))
	{
		if (q4x == o8u.u6l)
		{
      v5c.fillStyle = "black";
      v5c.strokeStyle = "black";
		}
		else
		{
      v5c.fillStyle = "white";
      v5c.strokeStyle = "white";
		}
    f6u = y0s * 0.1;
    v5c.beginPath();
    v5c.arc(g3i, i6i, f6u, 0, Math.PI * 2);
    v5c.closePath();
    v5c.fill();
    v5c.stroke();
	}
}

function m2k(v5c, rect, q4x)
{
  if (q4x == o8u.k2v) return;
  if (z1t.w7p == 0)
  {
    a2a(v5c, rect, q4x);
  }
  else
  {
    t4u(v5c, rect, q4x);
  }
}


function a3q(w7p)
{
}
function i2k(u7n)
{
	let p2g = new z4m();
	let w5e = u7n.length;
	if (w5e < 6) 
	{
		return p2g;
	}
	if (u7n[0] != 'W' && u7n[0] != 'B')
	{
		return p2g;
	}
	if (u7n[0] == 'W')
	{
		p2g.p4n();
	}
	else if (u7n[0] == 'B')
	{
		p2g.z1f();
	}
	let a9q = u7n.indexOf(":W");
	let u3o = u7n.indexOf(":B");
	let m0v = u7n.indexOf(".");
  if (m0v == -1)
	{
		m0v = u7n.length;
	}
	if (a9q == -1 || u3o == -1 || m0v <= u3o)
	{
		return p2g;
	}
	let w = u7n.substr(a9q + 2, u3o - (a9q + 2));
	let b = u7n.substr(u3o + 2, m0v - (u3o + 2));
	let r2w = w.split(",");
	let o6e = b.split(",");

	for (const s of r2w)
	{
		if (s.length)
		{
			if (s[0] == 'K')
			{
				if (s.length > 1)
				{
					let h9k = s.substr(1, 2);
					let z4p = j3e(h9k, 0);
					if (z4p)
					{
						p2g.u6i(z4p-1, o8u.u6l);
					}
				}
			}
			else
			{
				let z4p = j3e(s, 0);
				if (z4p)
				{
					p2g.u6i(z4p-1, o8u.j4d);
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
					let h9k = s.substr(1, 2);
					let z4p = j3e(h9k, 0);
					if (z4p)
					{
						p2g.u6i(z4p-1, o8u.a1p);
					}
				}
			}
			else
			{
				let z4p = j3e(s, 0);
				if (z4p)
				{
					p2g.u6i(z4p-1, o8u.i9a);
				}
			}
		}
	}
	return p2g;
}

function a7k(p2g, f1j)
{
  let s7n = f1j.length;

 	
	if (f1j[0] == 'Z' || (s7n == 2 && f1j == "--") || (s7n == 4 && f1j == "null"))
	{
		return new q5w();
	}

	let o1r = [];
	let i = 0;
	let w5e = f1j.length;
	while (i < w5e)
	{
		let z4b = i;
		let g3o = 0;
		let n4c = f1j[i];
		while (i < w5e && n4c != '-' && n4c != 'x' && n4c != ':')
		{
			i++;
			g3o++;
			if (i < w5e)
			{
				n4c = f1j[i];
			}
		}
		let d6z = f1j.substr(z4b, g3o);
    o1r.push(g1t(d6z));
		i++; 
	}
	let a3k = o1r.length;
	if (a3k < 2)
	{
		return false;
	}
	else if (a3k == 2)
	{
		let b8x = o1r[0];
		let c2m = o1r[1];
		let v3n = p7x(p2g, b8x, c2m);
		if (v3n.length == 1)
		{
			return v3n[0];
		}
		return false;
	}
	else
	{
		let b8x = o1r[0];
		let c2m = o1r[1];
		let o7g = [];
		for (let i = 2; i < a3k; i++)
		{
			o7g.push(o1r[i]);
		}
		let v3n = l3j(p2g, b8x, c2m, o7g);
		if (v3n.length == 1)
		{
			return v3n[0];
		}
		b8x = o1r[0];
		c2m = o1r[o1r.length - 1];
		let m4u = [];
		for (let i = 1; i < a3k - 1; i++)
		{
			m4u.push(o1r[i]);
		}
		v3n = j3z(p2g, b8x, c2m, m4u);
		if (v3n.length == 1)
		{
			return v3n[0];
		}
		return false;
	}
}

function e4r()
{
  let e1l = ["images/board/BoardBackground.png",
    "images/board/DarkSquare.png",
    "images/board/LightSquare.png",
    "images/board/Margin.png"];
  return e1l;
}
function div(d1a, b8s)
{
  const q0s = d1a % b8s;
  const quot = Math.floor((d1a - q0s) / b8s);
  return { quot: quot, q0s: q0s };
}

function j4t(p2g, j0v)
{
	let u0y = new q5w();
	if (j0v.length < 4)
	{
		return u0y;
	}
	let f5e = j0v.slice(0, 2);
	let toString = j0v.slice(2, 4);
	u0y.b8x = g1t(f5e);
  u0y.b7t = p2g.t9a(u0y.b8x);
	u0y.c2m = g1t(toString);
	u0y.b5w = u0y.b7t;
	if (j0v.length == 5)
	{
		switch (j0v[4])
		{
			case 'q':
				u0y.b5w = p2g.m0s() ? o8u.whiteQueen : o8u.blackQueen;
				break;
			case 'r':
				u0y.b5w = p2g.m0s() ? o8u.whiteRook : o8u.blackRook;
				break;
			case 'b':
				u0y.b5w = p2g.m0s() ? o8u.whiteBishop : o8u.blackBishop;
				break;
			case 'n':
				u0y.b5w = p2g.m0s() ? o8u.whiteKnight : o8u.blackKnight;
				break;
		}
	}
	return u0y;
}

class e1q
{

constructor()
{
	let w5o = '';
	let value = '';
}

}

function h6c(j0v, w5o, s1t)
{
  let f1a = " " + w5o + " ";
  let c8c = j0v.indexOf(f1a, 0);
	if (c8c >= 0)
	{
		let j0s = c8c + f1a.length;
		let m0t = 0;
		
		if (w5o == "pv")
		{
			m0t = j0v.indexOf(" string ", j0s);
		}
		else
		{
			m0t = j0v.indexOf(" ", j0s);
		}
		if (m0t < 0)
		{
			m0t = j0v.length;
		}
    let value = j0v.slice(j0s, m0t).trim();
		s1t.set(w5o, value);
	}
}

const o3l =
{
	s4k        : 0,
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
  this.m3j = false;
  this.b1i = false;
  this.y8z = false;
  this.s4h = false;
  this.y5w = false;
  this.h3c = new e5o();
	this.p8a = new n1y();
  this.n2g = null;
}

p3a(q4c)
{
  this.g0w = q4c.o0o();
  this.f0a();
  this.m3j = false;
 	for (const y1o of this.g0w.l8q.l8q)
	{
		if (y1o.w5o == "MultiPV")
		{
			this.m3j = (y1o.value != "1");
			break;
		}
	}

  this.x3p();
}

x3p()
{
  this.t7e = new Worker("/sharedgames/js/stockfish-17.1-8e4d048.js");
  this.t7e.n2g = (event) => {
    this.r3f(event);
  };
}

o5k()
{
	this.h3d.h2u();
	this.x4a.h2u();
	this.s4k("uci");
}

a9n()
{
	if (!this.y8z)
	{
    return;
  }

  
	for (const y1o of this.g0w.l8q.l8q)
	{
		let g9i = "setoption";
		g9i += " name ";
		g9i += y1o.w5o;
		g9i += " value ";
		g9i += y1o.value;
		this.s4k(g9i);
	}
  
  
  
  

	this.s4k("isready");
	this.y8z = false;
}

s4k(m6y)
{
	this.o5m(m6y, o3l.s4k);
  this.t7e.postMessage(m6y);
}

r3f(event)
{
  
  
 	this.o5m(event.data, o3l.r3f);
	this.o3y(event.data);
}

o3y(g9i)
{
	let q8u = g9i.split(' ');
	if (q8u.length == 0) return;
	let m6y = q8u[0];

	if (m6y == "readyok")
	{
		this.b1i = true;
    if (this.n2g)
    {
      this.n2g({
        cmd: "ready",
        data: {}
        });
    }
		return;
	}
	if (m6y == "bestmove")
	{
		this.v7m(g9i);
	}
	else if (m6y == "id")
	{
		this.v5p(g9i);
	}
	else if (m6y == "info")
	{
		this.k6r(g9i);
	}
	else if (m6y == "option")
	{
		this.r7w(g9i);
	}
	else if (m6y == "uciok")
	{
		this.z4a(g9i);
	}
}

v7m(g9i)
{
	this.s4h = false;
  if (this.y5w)
  {
    this.y5w = false;
    this.b2e();
  }
}

v5p(g9i)
{
 	let j0v = g9i;
	let q8u = j0v.split(" ");
	if (q8u.length < 3) return;

  const word1 = q8u.shift();
  const word2 = q8u.shift();
  const value = q8u.join(' ');

	if (word2 == "name")
	{
		this.h3d.w5o = value;
	}
	else if (word2 == "author")
	{
		this.h3d.q2p = value;
	}
}

k6r(g9i)
{
	let j0v = g9i;
	let s1t = new Map();
	h6c(j0v, "depth", s1t);
 	h6c(j0v, "seldepth", s1t);
	h6c(j0v, "pv", s1t);
	h6c(j0v, "nps", s1t);
	h6c(j0v, "nodes", s1t);
	h6c(j0v, "score cp", s1t);
	h6c(j0v, "score mate", s1t);
	h6c(j0v, "time", s1t);
	h6c(j0v, "currmove", s1t);
	h6c(j0v, "currmovenumber", s1t);
 	h6c(j0v, "multipv", s1t);

  if (s1t.has("pv") && s1t.has("depth"))
  {
		this.r7n(s1t);
    if (this.n2g)
    {
      this.n2g({
        cmd: "pv",
        data: {}
        });
    }

		return;
  }

  if (s1t.has("currmove") && s1t.has("currmovenumber"))
	{
		this.t2f(s1t);
    if (this.n2g)
    {
      this.n2g({
        cmd: "cm",
        data: {}
        });
    }
		return;
	}
}

r7w(g9i)
{
	let y1o = new o8k();
	let j0v = g9i;

	let w3g = " name ";
  let j7x = j0v.indexOf(w3g, 0);
	if (j7x < 0) return;
	let z1o = j7x + w3g.length;

	let l6d = " type ";
	let a2r = j0v.indexOf(l6d, 0);
	if (a2r < 0) return;
	let t2m = a2r;

	let u3a = a2r + l6d.length;
	let o6w = j0v.indexOf(" ", u3a);
	if (o6w < 0) o6w = j0v.length + 1;

	y1o.w5o = j0v.slice(z1o, t2m);
	y1o.type = j0v.slice(u3a, o6w);

	if (y1o.type == "check")
	{
		y1o.type = "bool";
	}
	else if (y1o.type == "combo")
	{
		y1o.type = "enum";
	}

	let a2l = " default ";
	let i0p = j0v.indexOf(a2l, 0);
	if (i0p >= 0)
	{
		let g5u = i0p + a2l.length;
		let i6b = j0v.indexOf(" ", g5u);
		if (i6b < 0) i6b = j0v.length + 1;
		y1o.value = j0v.slice(g5u, i6b);
		if (y1o.value == "<empty>")
		{
			y1o.value = "";
		}
	}
	if (y1o.type == "spin")
	{
		let j4k = " min ";
		let e1k = j0v.indexOf(j4k, 0);
		if (e1k >= 0)
		{
			let t1i = e1k + j4k.length;
			let z8f = j0v.indexOf(" ", t1i);
			if (z8f < 0) z8f = j0v.length + 1;
			y1o.min = j0v.slice(t1i, z8f).trim();
		}
		let q0d = " max ";
		let g9p = j0v.indexOf(q0d, 0);
		if (g9p >= 0)
		{
			let s1p = g9p + q0d.length;
			let c7p = j0v.indexOf(" ", s1p);
			if (c7p < 0) c7p = j0v.length + 1;
			y1o.max = j0v.slice(s1p, c7p).trim();
		}
	}
	else if (y1o.type == "enum")
	{
		let w3r = 0;
		while (true)
		{
			let r1k = " var ";
			let w3c = j0v.indexOf(r1k, w3r);
			if (w3c < 0) break;
			let o1w = w3c + r1k.length;
			let j9o = j0v.indexOf(" var ", w3c + 5);
			if (j9o < 0) j9o = j0v.length + 1;
			if (y1o.values.length != 0)
			{
				y1o.values += " ";
			}
			y1o.values += j0v.slice(o1w, j9o).trim();
			w3r = j9o;
		}
	}
	this.x4a.l8q.push(y1o);
}

z4a(g9i)
{
	this.y8z = true;
  this.a9n();
}


t3h()
{
	if (this.t7e)
  {
    this.s4k("quit");
    this.t7e.terminate();
    this.t7e = null;
  }
}








i8u()
{
}

h7l(input)
{
	if (this.b1i)
	{
  	this.o5m('setInput', o3l.s4k);
		this.h3c = input.o0o();
    if (this.s4h)
    {
      this.y5w = true;
      this.s4k('stop');
    }
    else
    {
      this.b2e();
    }
	}
}

b2e()
{
  this.p8a = new n1y();
  this.p8a.p2g = this.h3c.y6q();
  this.p8a.a2y = this.h3c.a2y();
	this.p8a.k9b = this.m3j;
  this.s4h = true;
  if (this.n2g)
  {
    this.n2g({
      cmd: "go",
      data: {}
      });
  }

  let g9i = "position fen";
  g9i += " ";
	let s5o = positionToPortableFen(this.h3c.y6q());
	g9i += s5o;
	this.s4k(g9i);
	if (this.h3c.p0p == x7f)
	{
		g9i = "go infinite";
		this.s4k(g9i);
	}
	else
	{
		g9i = "go movetime ";
		g9i += this.h3c.p0p;
		this.s4k(g9i);
	}
}

f0a()
{
}

o5m(j0v, u1y)
{
	if (!this.g0w.j3r) return;
 	if (u1y == o3l.r3f)
	{
    console.log("From engine:", j0v);
	}
	else
	{
    console.log("To engine:", j0v);
	}
}

r7n(s1t)
{
  let b7l = s1t.get("depth");
  let t1o = s1t.get("multipv");

	let y2p = new v1a();
	y2p.t7s = b7l;

	if (s1t.has("seldepth"))
	{
		y2p.r5v = s1t.get("seldepth");
	}

 	if (s1t.has("nps"))
	{
    let j0j = s1t.get("nps");
		let f2x = j3e(j0j, 0);
		let b0s = f2x / 1000;
		if (b0s)
		{
			y2p.f7i = b0s + " kN/s";
		}
	}

	let a1j = 0.0;
  if (s1t.has("score cp"))
	{
    let w4y = s1t.get("score cp");
		a1j = parseFloat(w4y);
		a1j = a1j / 100.0;
		if (a1j > 9.99)
		{
			a1j = 9.99;
		}
		if (a1j < -9.99)
		{
			a1j = -9.99;
		}
		if (this.p8a.p2g.n3a())
		{
			a1j = -a1j;
		}
		y2p.a1j = a1j;
	}
  if (s1t.has("score mate"))
	{
    let z2e = s1t.get("score mate");
		let b7x = j3e(z2e, 0);
		if (this.p8a.p2g.n3a())
		{
			b7x = -b7x;
		}
		y2p.b7x = b7x;
		if (b7x > 0)
		{
			a1j = 9.99;
		}
		if (b7x < 0)
		{
			a1j = -9.99;
		}
		y2p.a1j = a1j;
	}

  if (s1t.has("time"))
	{
    let p4h = s1t.get("time");
		let c8t = j3e(p4h, 0);
		let r0m = c8t / 1000;
		let m = div(r0m, 60);
		let r3t = m.q0s;
    r3t = Math.u4x(r3t);
		let h = div(m.quot, 60);
		let a3e = h.q0s;
		let f7g = h.quot;
    const pad = (num) => String(num).padStart(2, '0');
    const y3z = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    y2p.y3z = y3z;
	}

  let z3f = s1t.get("pv");
	let c4p = z3f.split(" ");

	let v3n = new e5q();
	let a2y = this.p8a.a2y;
	v3n.t6k(this.p8a.p2g, a2y);
	let i2f = v3n.y5m();
	let z1j = this.p8a.p2g.o0o();
	for (const s of c4p)
	{
		if (s.length == 0)
		{
			continue;
		}
		let e7x = j4t(z1j, s);
		let q5m = a0g(z1j);
		let f7o = false;
		for (const z2g of q5m)
		{
			if (z2g.c2m == e7x.c2m &&
				z2g.b8x == e7x.b8x &&
				z2g.b5w == e7x.b5w)
			{
				z1j.r9f(z2g);
				let u0y = l9h(z2g);
				v3n.v9t(i2f, u0y);
				f7o = true;
				break;
			}
		}
    if (!f7o) break;
	}
	if (!v3n.n7v())
	{
    console.log("parse moves aantal: leeg!");
		return;
	}
  console.log("parse moves aantal: " + v3n.n7v());
	y2p.v3n = v3n;

 	if (this.m3j)
	{
		if (t1o == 1)
		{
			this.p8a.x8y = y2p;
		}
		if (t1o > this.p8a.l1h.length)
		{
			this.p8a.l1h.push(y2p);
		}
		else
		{
			this.p8a.l1h[t1o-1] = y2p;
		}
	}
	else
	{
		this.p8a.l1h.push(y2p);
		this.p8a.x8y = y2p;
	}
}

t2f(s1t)
{
  let u4p = s1t.get("currmove");
  let w1q = s1t.get("currmovenumber"); 
	this.p8a.k4o = j3e(w1q, 0);
	let q5m = a0g(this.p8a.p2g);
	this.p8a.d1j = q5m.length;
	let e7x = j4t(this.p8a.p2g, u4p);
	for (const z2g of q5m)
	{
		if (z2g.c2m == e7x.c2m &&
			z2g.b8x == e7x.b8x &&
			z2g.b5w == e7x.b5w)
		{
			this.p8a.g6k = z2g;
			break;
		}
	}
}

x1l()
{
	return this.p8a.o0o();
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
	this.w5o = '';
	this.q2p = '';
	this.j4b = '';
	this.v0e = '';
}

o0o()
{
  return Object.assign(new j6w(), this);
}

h2u()
{
	this.w5o = '';
	this.q2p = '';
	this.j4b = '';
	this.v0e = '';
}

}


const x7f = 10000000;

class e5o
{

constructor()
{
	this.v3n = new e5q();
	this.p0p = x7f;
  this.z5l = 0;
	this.l3y = 0;
}

o0o()
{
	let l1d = new e5o();
  l1d.v3n = this.v3n.o0o();
  l1d.p0p = this.p0p;
  l1d.z5l = this.z5l;
  l1d.l3y = this.l3y;
	return l1d;
}

a2y()
{
	return this.v3n.v8t(this.v3n.q7d());
}

y6q()
{
	return this.v3n.s2i();
}

}


class g0e
{

constructor()
{
	this.y5s = '';
	this.id = new j6w();
	this.l8q = new f0w();
	this.t9b = new f0w();
	this.j3r = true;
	this.c1g = true;
}

o0o()
{
	let b4a = new g0e();
	b4a.y5s = this.y5s;
	b4a.id = this.id.o0o();
	b4a.l8q = this.l8q.o0o();
	b4a.t9b = this.t9b.o0o();
	b4a.j3r = this.j3r;
	b4a.c1g = this.c1g;
	return b4a;
}


}


function v0o(a1j)
{
  if (Math.abs(a1j) < 0.005)
  {
    return "0.00";
  }
  else
  {
     const formatted = a1j.toFixed(2);
     return a1j > 0 ? `+${formatted}` : formatted;
  }
}

class v1a
{

constructor()
{
	this.a1j = 0.0;
	this.b7x = false;
	this.t7s = '';
	this.r5v = '';
	this.y3z = '';
	this.f7i = '';
	this.v3n = new e5q();
}

o0o()
{
	let i1k = new v1a();
  i1k.a1j = this.a1j;
  i1k.b7x = this.b7x;
  i1k.t7s = this.t7s;
  i1k.r5v = this.r5v;
  i1k.y3z = this.y3z;
  i1k.f7i = this.f7i;
  i1k.v3n = this.v3n.o0o();
	return i1k;
}

c5x()
{
	if (this.b7x)
	{
		return "#" + this.b7x;
	}
	else
	{
		return v0o(this.a1j);
	}
}

c9x()
{
	let t3l = scoreToMoveValue(this.a1j);
	let l4i = moveValueToEvalString(t3l);
	return l4i;
}

}

class n1y
{

constructor()
{
	this.p2g = new z4m();
	this.a2y = 1;
	this.g2x = false;
	this.p3c = false;
	this.k9b = false;
	this.l1h = [];
	this.x8y = new v1a();
	this.g6k = new q5w();
	this.k4o = 0;
	this.d1j = 0;
}

o0o()
{
	let p9r = new n1y();
  p9r.p2g = this.p2g.o0o();
  p9r.a2y = this.a2y;
  p9r.g2x = this.g2x;
  p9r.p3c = this.p3c;
  p9r.k9b = this.k9b;
  p9r.l1h = this.l1h.slice();
  p9r.x8y = this.x8y.o0o();
  p9r.g6k = this.g6k.o0o();
  p9r.k4o = this.k4o;
  p9r.d1j = this.d1j;
	return p9r;
}

o4r()
{
	return this.x8y.v3n.n7v() > 0;
}

d9a()
{
	let l6q = this.x8y.v3n.y5m();
	this.x8y.v3n.r9f(l6q);
	return l6q.u0y.z2g();
}

}


class o8k
{
  constructor(type = '', w5o = '', value = '', min = '', max = '', values = '')
  {
    this.type = type;
    this.w5o = w5o;
    this.value = value;
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
    this.l8q = [];
  }

  o0o()
  {
    let v9e = new f0w();
    v9e.l8q = this.l8q.map(p => p.o0o());
    return v9e;
  }

  h2u()
  {
    this.l8q.length = 0;
  }

  addBool(w5o, value)
  {
    this.l8q.push(new o8k("bool", w5o, value));
  }

  addInteger(w5o, value)
  {
    this.l8q.push(new o8k("int", w5o, value));
  }

  addSpin(w5o, value, min, max)
  {
    this.l8q.push(new o8k("spin", w5o, value, min, max));
  }

  addString(w5o, value)
  {
    this.l8q.push(new o8k("string", w5o, value));
  }

  addEnum(w5o, value, values)
  {
    this.l8q.push(new o8k("enum", w5o, value, '', '', values));
  }

  addButton(w5o)
  {
    this.l8q.push(new o8k("button", w5o, w5o));
  }

  k1e(w5o, value)
  {
    for (let y1o of this.l8q)
    {
      if (y1o.w5o === w5o)
      {
        y1o.value = value;
      }
    }
  }
}
class b5n
{

constructor()
{
	this.w5o = '';
}

o0o()
{
	let e9r = new b5n();
	e9r.w5o = this.w5o;
	return e9r;
}

k2v()
{
	return this.w5o.length == 0;
}

t4q()
{
	return this.w5o;
}

}


const y2m =
{
	j1l : 0,
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
	q7f: 100,
	d1o: 101,
	u0d: 102,
	v4x: 103,
	u0c: 104,
	q8g: 105,
	s1s: 106,
	e9c: 107,
	g2p: 108,
	g0f: 109,
	d9l: 110,
	f1x: 111,
	g5b: 112,
	x6h: 113,
	w9g: 114,
	y4l: 115,
	d6j: 116,
	m1q: 117,
	d9x: 118,
	a3z: 119,
	z3s: 120,
	l0o: 121,
	g9c: 122,
	q7u: 123,
	x0v: 124,
	m4a: 125,
	g6r: 126,
	a6d: 127,
	o3j: 128,
	y5o: 129,
	q8p: 130,
	c8w: 131,
	e6g: 132,
	l4z: 133,
	l3h: 134,
	j8j: 135,
	q9c: 136,
	d8q: 137,
	b3a: 138,
	q5v: 139,
	n1f: 140,
	r9x: 141,
	g7h: 142,
	i3x: 143,
	a7c: 144,
	g9j: 145,
	o1c: 146,
	s2u: 147,
	k0p: 148,
	u5i: 149,
	u5r: 150,
	v1d: 151,
	o5h: 152,
	o2k: 153,
	l6c: 154,
	q1l: 155,
	y2s: 156,
	h8n: 157,
	m5g: 158,
	k7f: 159,
	y1k: 160,
	x3y: 161,
	z0x: 162,
	a7d: 163,
	v8b: 164,
	t7o: 165,
	l5e: 166,
	i4f: 167,
	b9j: 168,
	u7c: 169,
	x6w: 170,
	y6k: 171,
	s2x: 172,
	k1s: 173,
	a4t: 174,
	e1i: 175,
	t6j: 176,
	a9g: 177,
	u9r: 178,
	e2y: 179,
	x9m: 180,
	l1s: 181,
	o1q: 182,
	a6q: 183,
	y5a: 184,
	k6w: 185,
	r9g: 186,
	n4a: 187,
	p9b: 188,
	f2w: 189,
	d7w: 190,
	c8o: 191,
	c3f: 192,
	v1h: 193,
	c7h: 194,
	k0h: 195,
	p8b: 196,
	f6h: 197,
	e8s: 198,
	h0t: 199,
	v7w: 200,
	y6x: 201,
	b8l: 202,
	e9x: 203,
	z7d: 204,
	c2e: 205,
	o4z: 206,
	q8e: 207,
	d1g: 208,
	u2e: 209,
	s6n: 210,
	w7e: 211,
	a9w: 212,
	h1v: 213,
	o4t: 214,
	t2o: 215,
	c0u: 216,
	s3y: 217,
	w1j: 218,
	o9y: 219,
	b6m: 220,
	g0r: 221,
	w1d: 222,
	a7n: 223,
	p0y: 224,
	e6u: 225,
	u7h: 226,
	g9a: 227,
	k6b: 228,
	c7v: 229,
	m6x: 230,
	t4s: 231,
	g6m: 232,
	l0e: 233,
	q1j: 234,
	y7r: 235,
	x5x: 236,
	v4y: 237,
	b0f: 238,
	i1x: 239,
	t9h: 240,
	d4y: 241,
	x1x: 242,
	t6y: 243,
	e0h: 244,
	s8u: 245,
	n9s: 246,
	j9x: 247,
	l3p: 248,
	f0f: 249,
	x5s: 250,
	g4b: 251,
	d3r: 252,
	i1u: 253,
	t1f: 254,
	g7i: 255,
	o6x: 256,
	p9i: 257,
	a8g: 258,
	c8y: 259
};


const d6a = 0;
const d8j = 500;

function i9e(j0v)
{
	if (j0v.length != 3)
	{
		return 0;
	}
	let y7p = j0v[0];
	let b3p = j0v[1];
	let n7t = j0v[2];

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
	return p5i * 100 + j3e(j0v.substr(1, 2), 0) + 1;
}

function r6q(q2o)
{
	if (q2o)
	{
		let div = Math.trunc((q2o - 1) / 100);
		let q0s = (q2o - 1) % 100;
		let z0e = 'A';
		if (div == 0) z0e = 'A';
		else if (div == 1) z0e = 'B';
		else if (div == 2) z0e = 'C';
		else if (div == 3) z0e = 'D';
		else if (div == 4) z0e = 'E';
		return z0e + q0s.toString().padStart(2, '0');
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
	this.v0g = 0;
	this.i4b = 0;
}

o0o()
{
	let h5b = new b2s();
	h5b.x4l = this.u4v;
	h5b.r9w = this.v0g;
	h5b.g5w = this.i4b;
	return h5b;
}

k2v()
{
	return this.i4b == 0 && this.v0g == 0 && this.u4v == 0;
}

u9c()
{
	let g5w = this.i4b.toString().padStart(4, '0');
	let r9w = this.v0g.toString().padStart(2, '0');
	let x4l = this.u4v.toString().padStart(2, '0');
	return g5w + r9w + x4l;
}

e5k(j2m, j0v)
{
	let w5e = j0v.length;
	if (!w5e)
	{
		this.i4b = 0;
		this.v0g = 0;
		this.u4v = 0;
	}
	else if (j2m == "dd-mm-yyyy" || j2m == "dd.mm.yyyy")
	{
  	if (w5e == 4)
		{
      this.i4b = j3e(j0v.substr(1, 4), 0);
		}
		else if (w5e == 10)
		{
			this.u4v = j3e(j0v.substr(0, 2), 0);
			this.v0g = j3e(j0v.substr(3, 2), 0);
			this.i4b = j3e(j0v.substr(6, 4), 0);
		}
	}
	else if (j2m == "yyyy-mm-dd" || j2m == "yyyy.mm.dd")
	{
  	if (w5e == 4)
		{
      this.i4b = j3e(j0v.substr(1, 4), 0);
		}
		else if (w5e == 10)
		{
			this.u4v = j3e(j0v.substr(8, 2), 0);
			this.v0g = j3e(j0v.substr(5, 2), 0);
			this.i4b = j3e(j0v.substr(0, 4), 0);
		}
	}
	else if (j2m == "dd-mm-yy" || j2m == "dd.mm.yy")
	{
		if (w5e == 8)
		{
			this.u4v = j3e(j0v.substr(0, 2), 0);
			this.v0g = j3e(j0v.substr(3, 2), 0);
			this.i4b = j3e(j0v.substr(6, 2), 0) + 2000;
		}
	}
}

toString(j2m)
{
	let j0v = '';
	if (this.k2v())
	{
	}
	else if (j2m == "list")
	{
		let g5w = this.i4b.toString().padStart(4, '0');
		let r9w = this.v0g.toString().padStart(2, '0');
		let x4l = this.u4v.toString().padStart(2, '0');
		if (this.u4v)
		{
			j0v = x4l + "-" + r9w + "-" + g5w;
		}
		else if (this.v0g)
		{
			j0v = r9w + "-" + g5w;
		}
		else if (this.i4b)
		{
			j0v = g5w;
		}
	}
	else if (j2m == "dd-mm-yyyy")
	{
		let g5w = this.i4b.toString().padStart(4, '0');
		let r9w = this.v0g.toString().padStart(2, '0');
		let x4l = this.u4v.toString().padStart(2, '0');
		j0v = x4l + "-" + r9w + "-" + g5w;
	}
	else if (j2m == "dd.mm.yyyy")
	{
		let g5w = this.i4b.toString().padStart(4, '0');
		let r9w = this.v0g.toString().padStart(2, '0');
		let x4l = this.u4v.toString().padStart(2, '0');
		j0v = x4l + "." + r9w + "." + g5w;
	}
	else if (j2m == "yyyy-mm-dd")
	{
		let g5w = this.i4b.toString().padStart(4, '0');
		let r9w = this.v0g.toString().padStart(2, '0');
		let x4l = this.u4v.toString().padStart(2, '0');
		j0v = g5w + "-" + r9w + "-" + x4l;
	}
	else if (j2m == "yyyy.mm.dd")
	{
		let g5w = this.i4b.toString().padStart(4, '0');
		let r9w = this.v0g.toString().padStart(2, '0');
		let x4l = this.u4v.toString().padStart(2, '0');
		j0v = g5w + "." + r9w + "." + x4l;
	}
	else if (j2m == "yyyymmdd")
	{
		let g5w = this.i4b.toString().padStart(4, '0');
		let r9w = this.v0g.toString().padStart(2, '0');
		let x4l = this.u4v.toString().padStart(2, '0');
		j0v = g5w + r9w + x4l;
	}
	else if (j2m == "yyyy")
	{
		let g5w = this.i4b.toString().padStart(4, '0');
		j0v = g5w;
	}
	return j0v;
}

}

class p6z
{

constructor()
{
	this.q2s = new d0k();
	this.x8d = new l8c();
	this.o4u = 0;
	this.o1x = 0;
	this.a5f = "";
  this.v0e = y2m.j1l;
}

o0o()
{
	let i2z = new p6z();
	i2z.q2s = this.q2s.o0o();
	i2z.x8d = this.x8d.o0o();
	i2z.o4u = this.o4u;
	i2z.o1x = this.o1x;
	i2z.a5f = this.a5f;
  i2z.v0e = this.v0e;
	return i2z;
}

k2v()
{
	return this.q2s.k2v() &&
		this.x8d.k2v() &&
		this.o4u == 0 &&
		this.o1x == 0 &&
		this.a5f == "" &&
 		this.v0e == y2m.j1l;
}

}


class m3k
{

constructor()
{
	this.v8k = new p6z();
	this.u6y = new p6z();
	this.h6o = new v3a();
	this.p0d = new b5n();
	this.r6f = new o7f();
	this.a5f = new o0y();
	this.u9c = new b2s();
	this.s4a = o9d.j1l;
	this.q2o = 0;
	this.u4x = 0;
	this.z5p = 0;
	this.k8u = new s5d();
  this.id = new c6g();
}

o0o()
{
	let i0g = new m3k();
	i0g.v8k = this.v8k.o0o();
	i0g.u6y = this.u6y.o0o();
	i0g.h6o = this.h6o.o0o();
	i0g.p0d = this.p0d.o0o();
	i0g.r6f = this.r6f.o0o();
	i0g.a5f = this.a5f.o0o();
	i0g.u9c = this.u9c.o0o();
	i0g.s4a = this.s4a;
	i0g.q2o = this.q2o;
	i0g.u4x = this.u4x;
	i0g.z5p = this.z5p;
	i0g.k8u = this.k8u.o0o();
  i0g.id = this.id.o0o();
	return i0g;
}

k2v()
{
	return this.v8k.k2v() &&
		this.u6y.k2v() &&
		this.h6o.k2v() &&
		this.p0d.k2v() &&
		this.r6f.k2v() &&
		this.a5f.k2v() &&
		this.u9c.k2v() &&
		this.s4a == o9d.j1l &&
		this.q2o == 0 &&
		this.u4x == 0 &&
		this.z5p == 0 &&
		this.k8u.k2v();
}

e9m()
{
	let j0v = '';
	if (this.z5p)
	{
		j0v = this.u4x.toString() + "." + this.z5p.toString();
	}
	else if (this.u4x)
	{
		j0v = this.u4x.toString();
	}
	return j0v;
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
	this.a5f = '';
}

o0o()
{
	let j0m = new o0y();
	j0m.a5f = this.a5f;
	return j0m;
}

k2v()
{
	return this.a5f.length == 0;
}

t4q()
{
	return this.a5f;
}

}


class d0k
{

constructor()
{
	this.v2d = '';
	this.s6s = '';
}

o0o()
{
	let e5f = new d0k();
	e5f.v2d = this.v2d;
	e5f.s6s = this.s6s;
	return e5f;
}

k2v()
{
	return this.s6s.length == 0 &&
		this.v2d.length == 0;
}

w5o()
{
	if (!this.s6s.length == 0 && !this.v2d.length == 0)
	{
		return this.s6s + "," + this.v2d;
	}
	else if (this.s6s.length == 0 && this.v2d.length == 0)
	{
		return "";
	}
	else if (this.v2d.length == 0)
	{
		return this.s6s;
	}
	else
	{
		return this.v2d;
	}
}

i1q()
{
	return this.w5o().replace(/,/g, " ");
}

f1i()
{
	return this.m0f(1).replace(/,/g, " ");
}

m0f(z9k)
{
	if (this.s6s.length == 0)
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
			return this.s6s;
		}
		else
		{
			return this.s6s + "," + this.v2d.substring(0, z9k);
		}
	}
}

q0e(c5f)
{
	let j0v = c5f.trim();
	let l6q = j0v.lastIndexOf(",");
	if (l6q != -1)
	{
		this.s6s = j0v.substr(0, l6q).trim();
		this.v2d = j0v.substr(l6q+1, j0v.length).trim();
		if (this.v2d.length != 0)
		{
			if (this.v2d.charAt(0).toLowerCase() == this.v2d.charAt(0))
			{
				this.s6s += ",";
				this.s6s += this.v2d;
				this.v2d = "";
			}
		}
	}
	else
	{
		this.s6s = j0v;
		this.v2d = "";
	}
}

t4q()
{
	return this.w5o();
}

}

const o9d =
{
	j1l : 0,
	a2j : 1,
	k6l : 2,
	y8o : 3,
	g6v : 4,
	o5v : 5,
	d4r : 6,
	o9f : 7,
	q6y : 8,
	e7o : 9,
	o0g : 10,
	i8a : 11,
	k5j : 12,
	x5f : 13,
	p6s : 14,
	x7q : 15
};


function e6z(s4a)
{
	switch (s4a)
	{
		case o9d.a2j:
			return "2-0";
		case o9d.y8o:
			return "1-1";
		case o9d.k6l:
			return "0-2";
		default:
			return "";
	}
}
const k2e =
{
	e8e : 0,
	g8o : 1,
	h5r : 2
};

const e9p =
[
	[ k2e.e8e,   "High" ],
	[ k2e.g8o, "Middle" ],
	[ k2e.h5r,    "Low" ]
];

class o7f
{

constructor()
{
	this.a5f = '';
	this.j0g = '';
	this.f2l = new b2s();
	this.f8s = new b2s();
	this.n4q = 0;
	this.z1e = k2e.e8e;
}

o0o()
{
	let q8a = new o7f();
	q8a.a5f = this.a5f;
	q8a.j0g = this.j0g;
	q8a.f2l = this.f2l.o0o();
	q8a.f8s = this.f8s.o0o();
	q8a.n4q = this.n4q;
	q8a.z1e = this.z1e;
	return q8a;
}

k2v()
{
	return this.a5f.length == 0 &&
		this.j0g.length == 0 &&
		this.f2l.k2v() &&
		this.f8s.k2v() &&
		this.n4q == 0 &&
		this.z1e == k2e.e8e;
}

t4q()
{
	let j0v = this.a5f;
	if (this.j0g.length)
	{
		if (j0v.length)
		{
			j0v += " ";
		}
		j0v += this.j0g;
	}
	return j0v;
}

}


const d1q =
{
	z0r : 0,
	n9a : 1,
	b9q : 2,
	c7c : 3,
	x8l : 4,
	n3y : 5,
	k7p : 6,
	j4c : 7,
	r0s : 8,
	v0a : 9,
	u2w : 10,
	d6e : 11,
	c4v : 12,
	d5o : 13,
	b9d : 14,
	j3i : 15
};

class s5d
{

constructor()
{
	this.value = 0;
}

h8a(value)
{
	this.value = value;
}

o0o()
{
	let f7j = new s5d();
	f7j.value = this.value;
	return f7j;
}

k2v()
{
	return this.value == 0;
}

g6i()
{
	return this.value != 0;
}

j1l()
{
	return this.value == 0;
}

g3o()
{
	let p0n = 0;
	for (let i = 0; i < 16; i++)
	{
		if (this.k7i(i))
		{
			p0n++;
		}
	}
	return p0n;
}

o1a()
{
	this.value = 0;
}

set(q2j, q7y)
{
	if (q7y)
	{
		this.value |= (1 << q2j);
	}
	else
	{
		this.value &= ~(1 << q2j);
	}
}

k7i(q2j)
{
	return (this.value & (1 << q2j)) != 0;
}

y2r()
{
	return this.value;
}

}

function l1n(g5w)
{
	return g5w.toString().padStart(4, '0');
}

class l8c
{

constructor()
{
	this.w5o = '';
	this.c1d = 0;
	this.g5w = 0;
	this.k7c = false;
	this.v0e = y2m.j1l;
}

o0o()
{
	let t8l = new l8c();
	t8l.w5o = this.w5o;
	t8l.c1d = this.c1d;
	t8l.g5w = this.g5w;
	t8l.k7c = this.k7c;
	t8l.v0e = this.v0e;
	return t8l;
}

k2v()
{
	return this.w5o.length == 0 &&
		this.c1d == 0 &&
		this.g5w == 0 &&
		this.k7c == false &&
		this.v0e == y2m.j1l;
}

v2k()
{
	let j0v = this.w5o;
	if (this.c1d)
	{
		if (j0v.length)
		{
			j0v += " ";
		}
		j0v += this.c1d;
	}
	return j0v;
}

t4q()
{
	let j0v = this.w5o;
	if (this.c1d)
	{
		if (j0v.length)
		{
			j0v += " ";
		}
		j0v += this.c1d;
	}
	if (j0v.length)
	{
		j0v += " ";
	}
	j0v += this.c0y();
	return j0v;
}


x9v()
{
	let j0v = this.w5o;
	if (this.c1d > 1)
	{
		j0v += " ";
		j0v += this.c1d;
	}
	return j0v;
}

c0y()
{
	let j0v = '';
	if (this.k7c)
	{
		let d2s = l1n(this.g5w);
		let x7z = l1n(this.g5w + 1);
		let j6a = d2s + "/" + x7z.substr(2, 2);
		j0v = j6a;
	}
	else
	{
		j0v = l1n(this.g5w);
	}
	return j0v;
}

}

class y5u
{

constructor()
{
	this.f7g = 0;
	this.a3e = 0;
	this.r3t = 0;

}

}

function n7e(j0v, v2y, o1x)
{
	o1x.f7g = 0;
	o1x.a3e = 0;
	o1x.r3t = 0;

	let w5e = j0v.length;
	if (!w5e || j0v == "?")
	{
		return;
	}
	let i = 0;
	for (; i < w5e; i++)
	{
		if (!isNaN(j0v[i]))
		{
			break;
		}
	}
	let x9e = '';
	for (; i < w5e; i++)
	{
		if (isNaN(j0v[i]))
		{
			break;
		}
		x9e += j0v[i].toString();
	}
	for (; i < w5e; i++)
	{
		if (!isNaN(j0v[i]))
		{
			break;
		}
	}
	let q9l = '';
	for (; i < w5e; i++)
	{
		if (isNaN(j0v[i]))
		{
			break;
		}
		q9l += j0v[i].toString();
	}
	for (; i < w5e; i++)
	{
		if (!isNaN(j0v[i]))
		{
			break;
		}
	}
	let i0y = '';
	for (; i < w5e; i++)
	{
		if (isNaN(j0v[i]))
		{
			break;
		}
		i0y += j0v[i].toString();
	}
	let q8c = j3e(x9e, 0);
	let g9g = j3e(q9l, 0);
	let x9l = j3e(i0y, 0);
	if (
		q8c < 0 || q8c > v2y ||
		g9g < 0 || g9g > 59 ||
		x9l < 0 || x9l > 59)
	{
		q8c = 0;
		g9g = 0;
		x9l = 0;
	}
	o1x.f7g = q8c;
	o1x.a3e = g9g;
	o1x.r3t = x9l;
}

function j5j(j0v)
{
	if (j0v.length == 0)
	{
		return 0;
	}
	else
	{
		let o1x = new y5u();
		n7e(j0v, 9, o1x);
		return o1x.f7g * 60 + o1x.a3e;
	}
}


const f4v =
{
	j1l : 0,
	x1i : 1,
	k2b : 2,
	h6o : 3,
	z0m : 4,
	w2h : 5,
	s7m : 6,
	d8g : 7
};

const a6c =
[
	[ f4v.j1l, 			 	""                   ],
	[ f4v.x1i,  		 	"SingleGame"         ],
	[ f4v.k2b,  		 	"Match"              ],
	[ f4v.h6o,  "RoundRobin"         ],
	[ f4v.z0m,   		"SwissSystem"        ],
	[ f4v.w2h,    "Knockout"           ],
	[ f4v.s7m,"Simul"              ],
	[ f4v.d8g,"ScheveningenSystem" ]
];

class v3a
{

constructor()
{
	this.a5f = '';
	this.z1q = '';
	this.a5z = new b2s();
	this.h9j = new b2s();
	this.s2n = f0j.d1e;
	this.z5s = 0;
	this.v0e = y2m.j1l;
	this.type = f4v.j1l;
	this.y9a = 0;
	this.t8b = false;
	this.e5e = false;
	this.i2m = false;
	this.f0k = false;
}

o0o()
{
	let j0p = new v3a();
	j0p.a5f = this.a5f;
	j0p.z1q = this.z1q;
	j0p.a5z = this.a5z.o0o();
	j0p.h9j = this.h9j.o0o();
	j0p.s2n = this.s2n;
	j0p.z5s = this.z5s;
	j0p.v0e = this.v0e;
	j0p.type = this.type;
	j0p.y9a = this.y9a;
	j0p.t8b = this.t8b;
	j0p.e5e = this.e5e;
	j0p.i2m = this.i2m;
	j0p.f0k = this.f0k;
	return j0p;
}

k2v()
{
	return this.a5f.length == 0 &&
		this.z1q.length == 0 &&
		this.a5z.k2v() &&
		this.h9j.k2v() &&
		this.s2n == f0j.d1e &&
		this.z5s == 0 &&
		this.v0e == y2m.j1l &&
		this.type == f4v.j1l &&
		!this.y9a &&
		!this.t8b &&
		!this.e5e &&
		!this.i2m &&
		!this.f0k;
}

t4q()
{
	let j0v = this.a5f;
	if (this.z1q.length)
	{
		if (j0v.length)
		{
			j0v += " ";
		}
		j0v += this.z1q;
	}
	if (j0v.length)
	{
		j0v += " ";
	}
	let g5w = this.a5z.g5w.toString().padStart(4, '0');
	j0v += g5w;
	return j0v;
}

}



const f0j =
{
	d1e : 0,
	y4e : 1,
	w3w : 2,
	h0o : 3
};

const l3r =
[
	[ f0j.d1e, "Normal" ],
	[ f0j.y4e,  "Rapid"  ],
	[ f0j.w3w,  "Blitz"  ],
	[ f0j.h0o,   "Corr"   ]
];

function g6q(s2n)
{
	return l3r[s2n][1];
}

function h0q()
{
	let u6v = [];
	for (const s2n of l3r)
	{
		u6v.push(s2n[1]);
	}
	return u6v;
}

class v0r
{

constructor()
{
	this.z8s = '';
	this.q9g = '';
	this.a1m = n8u.j1l;
	this.style = c8l.j1l;
	this.value = b4c.j1l;
	this.n4n = new p6t();
	this.e6v = new s7c();
	this.a7a = new x6l();
	this.z4d = o9q.j1l;
	this.f3q = false;
	this.k0v = false;
  this.h7b = false;
}

o0o()
{
	let q0n = new v0r();
	q0n.z8s = this.z8s;
	q0n.q9g = this.q9g;
	q0n.a1m = this.a1m;
	q0n.style = this.style;
	q0n.value = this.value;
	q0n.n4n = this.n4n.o0o();
	q0n.e6v = this.e6v.o0o();
	q0n.a7a = this.a7a.o0o();
	q0n.z4d = this.z4d;
	q0n.f3q = this.f3q;
	q0n.k0v = this.k0v;
 	q0n.h7b = this.h7b;
	return q0n;
}

k2v()
{
	return this.z8s.length == 0 &&
		this.q9g.length == 0 &&
		this.a1m == n8u.j1l &&
		this.style == c8l.j1l &&
		this.value == b4c.j1l &&
		this.n4n.k2v() &&
		this.e6v.k2v() &&
		this.a7a.k2v() &&
		this.z4d == o9q.j1l &&
		this.f3q == false &&
		this.k0v == false &&
 		this.h7b == false;
}

}

const o9q =
{
	j1l : 0,
	z4w : 1,
	g8o : 2,
	r6z : 3
};

const f1z =
{
	n4l : 0,
	t6e : 1,
	r7y : 2,
	r5r : 3,
	s7l : 4,
	h1b : 5,
	r8u : 6,
	x7q : 7,
	t4o : 8,
	u1e : 9,
	x4h : 10,
	q0w : 11,
	p3c : 12,
	l5v : 13,
	i1t : 14,
	p5d : 15
};

class p6t
{

constructor()
{
	this.value = 0;
}

h8a(value)
{
	this.value = value;
}

o0o()
{
	let y0q = new p6t();
	y0q.value = this.value;
	return y0q;
}

k2v()
{
	return this.value == 0;
}

g6i()
{
	return this.value != 0;
}

j1l()
{
	return this.value == 0;
}

g3o()
{
	let p0n = 0;
	for (let i = 0; i < 16; i++)
	{
		if (this.k7i(i))
		{
			p0n++;
		}
	}
	return p0n;
}

o1a()
{
	this.value = 0;
}

set(q2j, q7y)
{
	if (q7y)
	{
		this.value |= (1 << q2j);
	}
	else
	{
		this.value &= ~(1 << q2j);
	}
}

k7i(q2j)
{
	return (this.value & (1 << q2j)) != 0;
}

y2r()
{
	return this.value;
}

}

const n8u =
{
	j1l : 0,
	k7a : 1,
	s4n : 2,
	m5l : 3,
	c6m : 4,
	f7r : 5,
	s9h : 6
};

const v3w =
[
	[ n8u.j1l,     		  ""   ],
	[ n8u.k7a,       		  "RR" ],
	[ n8u.s4n, 		  "&#8979;"  ],
	[ n8u.m5l, 		  "&#8804;"  ],
	[ n8u.c6m,  "="  ],
	[ n8u.f7r,   "&#9651;"  ],
	[ n8u.s9h,  "&#9661;"  ]
];

function d4k(a1m)
{
	return v3w[a1m][1];
}


const c8l =
{
	j1l : 0,
	p5g : 1,
	y7x : 2,
	p7h : 3,
	g7c : 4,
	r9v : 5,
	u3z : 6,
	i6p : 7,
	z3x : 8
};

const b4h =
[
	[ c8l.j1l,     		"" 	 ],
	[ c8l.p5g,       	"!"  ],
	[ c8l.y7x, 					"?"  ],
	[ c8l.p7h,	"!?" ],
	[ c8l.g7c,	 		"?!" ],
	[ c8l.r9v,  	"!!" ],
	[ c8l.u3z, 			"??" ],
	[ c8l.i6p, 		"&#8857;"  ],
	[ c8l.z3x, 		"&#9723;"  ]
];

function q2l(style)
{
	return b4h[style][1];
}


class q3c
{

constructor()
{
	this.u0y = new g8w();
	this.l8b = null;
	this.p3p = null;
	this.p7w = null;
	this.j9d = null;
  this.c1d = 0; 
}

h4h(u0y)
{
	this.u0y = u0y.o0o();
}

s3z(p2g, p1d, v1o, r4g)
{
	this.u0y.s3z(p2g, p1d, v1o, r4g);
}

}

class w6u
{

constructor()
{
	this.u4i = null;
	this.u0y = null;
}

e2m(c3d)
{
	return this.u4i == c3d.u4i;
}

i5u(c3d)
{
	return !this.e2m(c3d);
}

o0o()
{
	let u8v = new w6u();
  u8v.u4i = this.u4i;
  u8v.u0y = this.u0y;
	return u8v;
}

}


class e5q
{

constructor()
{
	this.v6m = new z4m();
 	this.n4b = null;
	this.q9x = 1;
	this.v6m.c6a();
  this.t9y = new v0r();
}

n4j(c3d)
{
	this.t6k(c3d.v6m, c3d.q9x);
	this.t9y = c3d.t9y.o0o();
	this.n4b = this.b6q(c3d.n4b);
}

o0o()
{
	let w5n = new e5q();
	w5n.n4j(this);
	return w5n;
}

t6k(x1z, o7x)
{
	this.v6m = x1z.o0o();
	this.q9x = o7x;
	this.t9y = new v0r();
	this.n4b = null;
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
	let l6q = this.y5m();
	this.v6b(l6q);
	return l6q;
}


s2i()
{
	let v6b = this.q7d();
	return this.p2g(v6b);
}


v8t(l6q)
{
  let h7w = this.g6w(l6q) + 1;
	if (h7w)
	{
		return this.q9x +
			Math.floor((h7w - 1 + this.v6m.n3a()) / 2);
	}
	else
	{
		return this.q9x;
	}
}

g6w(l6q)
{
	let h7w = 0;
	if (!l6q.u4i)
	{
		return 0;
	}
	let r7l = l6q.u4i;
	while (1)
	{
		h7w++;
		if (!r7l.p3p)
		{
			let y8v = r7l;
			while (y8v.p7w)
			{
				y8v = y8v.p7w;
			}
			if (!y8v.p3p)
			{
				break;
			}
		}
		if (r7l.p3p)
		{
			r7l = r7l.p3p;
		}
		else
		{
			let y8v = r7l;
			while (y8v.p7w)
			{
				y8v = y8v.p7w;
			}
			r7l = y8v.p3p;
		}
	}
	return h7w;
}


n7v()
{
	let h8y = 0;
	let h4t = this.n4b;
	while (h4t)
	{
		h8y++;
		h4t = h4t.l8b;
	}
	return h8y;
}

e7m()
{
	return this.n4b != null;
}

s4j(l6q)
{
	return l6q.e2m(this.y5m());
}

q0r(l6q)
{
	if (l6q.u4i)
	{
		return l6q.u4i.l8b == null;
	}
	else if (this.n4b)
	{
		return false;
	}
	else
	{
		return true;
	}
}

y9l(l6q)
{
	if (!this.s4j(l6q))
	{
		if (l6q.u4i.p3p)
		{
			l6q.u4i = l6q.u4i.p3p;
			l6q.u0y = l6q.u4i.u0y;
		}
		else
		{
			let r7l = l6q.u4i;
			while (r7l.p7w)
			{
				r7l = r7l.p7w;
			}
			r7l = r7l.p3p;
			l6q.u4i = r7l;
      if (l6q.u4i)
      {
  			l6q.u0y = l6q.u4i.u0y;
      }
      else
      {
        l6q.u0y = null;
      }
		}
	}
}

r9f(l6q)
{
	if (!this.q0r(l6q))
	{
		l6q.u4i = this.z2k(l6q);
		l6q.u0y = l6q.u4i.u0y;
	}
}

z0a(l6q, g0q)
{
	let p7t = this.c2k(l6q);
	if (g0q < 0 || g0q >= p7t)
	{
		return;
	}
	let y8v = this.z2k(l6q);
	let i = 0;
	while (i != g0q)
	{
		i++;
		y8v = y8v.j9d;
	}
	l6q.u4i = y8v;
	l6q.u0y = l6q.u4i.u0y;
}

a2y(l6q)
{
	if (!l6q.u4i)
	{
		return this.q9x;
	}
	let h7w = this.g6w(l6q);
	if (h7w)
	{
		return this.q9x +
      Math.floor((h7w - 1 + this.v6m.n3a()) / 2);
	}
	else
	{
		return this.q9x;
	}
}

y5m()
{
	let l6q = new w6u();
	l6q.u4i = null;
	l6q.u0y = null;
	return l6q;
}

v6b(l6q)
{
	if (!this.q0r(l6q))
	{
		let r7l = this.z2k(l6q);
		while (true)
		{
			if (!r7l.l8b)
			{
				break;
			}
			r7l = r7l.l8b;
		}
		l6q.u4i = r7l;
		l6q.u0y = l6q.u4i.u0y;
	}
}

v5g(o5o)
{
	let l6q = this.y5m();
	if (o5o > 0)
	{
    this.o5o = 0;
		this.z1m(l6q, o5o);
		return l6q;
	}
	else
	{
		return l6q;
	}
}

z1m(l6q, o5o)
{
	while (true)
	{
		if (this.q0r(l6q))
		{
			return false;
		}
		let p7t = this.c2k(l6q);
		if (p7t > 1)
		{
			let l2x = l6q.o0o();
			for (let i = 1; i < p7t; i++)
			{
				this.z0a(l6q, i);
				this.o5o++;
				if (this.o5o == o5o)
				{
					return true;
				}
				if (this.z1m(l6q, o5o))
				{
					return true;
				}
        l6q.u4i = l2x.u4i;
        l6q.u0y = l2x.u0y;
			}
		}
		this.r9f(l6q);
		this.o5o++;
		if (this.o5o == o5o)
		{
			return true;
		}
	}
}

a9r(l6q)
{
	if (!l6q.u4i)
	{
		return 0;
	}
	else
	{
		return l6q.u4i.c1d;
	}
}

b6n(l6q)
{
	let v3n = [];
 	if (!l6q.u4i)
  {
		return v3n;
	}
	let r7l = l6q.u4i;
	while (1)
	{
		v3n.push(r7l);
		if (!r7l.p3p)
		{
			let y8v = r7l;
			while (y8v.p7w)
			{
				y8v = y8v.p7w;
			}
			if (!y8v.p3p)
			{
				break;
			}
		}
		if (r7l.p3p)
		{
			r7l = r7l.p3p;
		}
		else
		{
			let y8v = r7l;
			while (y8v.p7w)
			{
				y8v = y8v.p7w;
			}
			r7l = y8v.p3p;
		}
	}
	return v3n.reverse();
}

k1u(l6q)
{
	let v3n = this.b6n(l6q);
	let p7t = this.c2k(l6q);
	if (p7t == 0)
	{
		return v3n;
	}
	let j4i = this.d0w(l6q, 0);
	while (j4i)
	{
		v3n.push(j4i);
		j4i = j4i.l8b;
	}
	return v3n;
}

c2k(l6q)
{
	let j4i = this.z2k(l6q);
	if (!j4i)
	{
		return 0;
	}
	let p7t = 1;
	while (j4i.j9d)
	{
		p7t++;
		j4i = j4i.j9d;
	}
	return p7t;
}

u2j(l6q, c3a)
{
	if (this.s4j(l6q))
	{
		this.n4b = c3a;
		l6q.u4i = c3a;
		l6q.u0y = l6q.u4i.u0y;
	}
	else
	{
		l6q.u4i.l8b = c3a;
		c3a.p3p = l6q.u4i;
		l6q.u4i = c3a;
		l6q.u0y = l6q.u4i.u0y;
	}
}

b7y(l6q, c3a)
{
	let y8v = this.z2k(l6q);
	while (y8v.j9d)
	{
		y8v = y8v.j9d;
	}
	y8v.j9d = c3a;
	c3a.p7w = y8v;

	l6q.u4i = c3a;
	l6q.u0y = l6q.u4i.u0y;
}

v9t(l6q, u0y)
{
	let c3a = new q3c();
 	c3a.h4h(u0y);
	if (this.q0r(l6q))
	{
		this.u2j(l6q, c3a);
	}
	else
	{
		this.b7y(l6q, c3a);
	}
}


t3s(l6q, v3n)
{
	for (const u0y of v3n)
	{
		this.v9t(l6q, u0y);
	}
}


o6h(l6q)
{
	let y8v = this.d0w(l6q, 1);
	if (!y8v)
	{
		return false;
	}
	while (y8v)
	{
		let h4t = y8v.l8b;
		while (h4t)
		{
			if (h4t.j9d)
			{
				return false;
			}
			h4t = h4t.l8b;
		}
		y8v = y8v.j9d;
	}
	return true;
}

h0b()
{
	let h4t = this.n4b;
	while (h4t)
	{
		if (h4t.j9d)
		{
			return true;
		}
		h4t = h4t.l8b;
	}
	return false;
}

i1g()
{
	if (!this.t9y.k2v())
	{
		return true;
	}
	if (this.h0b())
	{
		return true;
	}
	let h4t = this.n4b;
	while (h4t)
	{
		if (h4t.u0y.i1g())
		{
			return true;
		}
		h4t = h4t.l8b;
	}
	return false;
}

z2k(l6q)
{
	if (l6q.u4i)
	{
		return l6q.u4i.l8b;
	}
	return this.n4b;
}

d0w(l6q, g0q)
{
	let i = 0;
	let y8v = this.z2k(l6q);
	while (y8v && i != g0q)
	{
		y8v = y8v.j9d;
		i++;
	}
	return y8v;
}

b6q(y8v)
{
	let f2f = y8v;
	let g2k = null;
	let c3a = null;
	let e9k = null;
	while (f2f)
	{
		c3a = new q3c();
		c3a.h4h(f2f.u0y);
		if (g2k)
		{
			g2k.l8b = c3a;
			c3a.p3p = g2k;
		}
		else
		{
			e9k = c3a;
		}
		g2k = c3a;
		if (f2f.j9d && !f2f.p7w)
		{
			let y9t = f2f.j9d;
			let h7a = g2k;
			while (y9t)
			{
				let t5v = this.b6q(y9t);
				h7a.j9d = t5v;
				t5v.p7w = h7a;
				h7a = t5v;
				y9t = y9t.j9d;
			}
		}
		f2f = f2f.l8b;
	}
	return e9k;
}

c2d()
{
	return this.t9y;
}

u4b()
{
	return this.t9y.z8s;
}

l7d(p4p)
{
	this.t9y.z8s = p4p;
}

v0j()
{
	return !this.t9y.e6v.k2v();
}

o9x(e6v)
{
	this.t9y.e6v = e6v.o0o();
}

e2l()
{
	return this.t9y.e6v;
}

o7o()
{
	return !this.t9y.a7a.k2v();
}

m1p(a7a)
{
	this.t9y.a7a = a7a.o0o();
}

m9w()
{
	return this.t9y.a7a;
}

j5x()
{
	return !this.t9y.n4n.k2v();
}

m7d(n4n)
{
	this.t9y.n4n = n4n.o0o();
}

m1r()
{
	return this.t9y.n4n;
}

r2e(o5o)
{
  if (o5o == 0)
  {
    return true;
  }
	let h4t = this.n4b;
	while (h4t)
	{
    if (h4t.c1d == o5o)
    {
      return true;
    }
		h4t = h4t.l8b;
	}
	return false;
}

i3m()
{
	let l6q = this.y5m();
	this.o5o = 0;
	this.k0b(l6q);
}

k0b(l6q)
{
	while (true)
	{
		if (this.q0r(l6q))
		{
			return;
		}
		let p7t = this.c2k(l6q);
		if (p7t > 1)
		{
			let l2x = l6q.o0o();
			for (let i = 1; i < p7t; i++)
			{
				this.z0a(l6q, i);
				this.o5o++;
        l6q.u4i.c1d = this.o5o;
				this.k0b(l6q);
        l6q.u4i = l2x.u4i;
        l6q.u0y = l2x.u0y;
			}
		}
		this.r9f(l6q);
  	this.o5o++;
    l6q.u4i.c1d = this.o5o;
	}
}

p2g(l6q)
{
	let p2g = this.v6m.o0o();
	if (!l6q.u4i)
	{
		return p2g;
	}
	let v3n = this.i7y(l6q);
  for (const u0y of v3n)
	{
		p2g.r9f(u0y.z2g());
	}
	return p2g;
}

i7y(l6q)
{
	let v3n = [];
 	if (!l6q.u4i)
  {
		return v3n;
	}
	let r7l = l6q.u4i;
	while (1)
	{
		v3n.push(r7l.u0y);
		if (!r7l.p3p)
		{
			let y8v = r7l;
			while (y8v.p7w)
			{
				y8v = y8v.p7w;
			}
			if (!y8v.p3p)
			{
				break;
			}
		}
		if (r7l.p3p)
		{
			r7l = r7l.p3p;
		}
		else
		{
			let y8v = r7l;
			while (y8v.p7w)
			{
				y8v = y8v.p7w;
			}
			r7l = y8v.p3p;
		}
	}
	return v3n.reverse();
}


w0v()
{
	this.t9y = new v0r();
	this.n4b = null; 
  
}


r1l()
{
	let v3n = [];
	let h4t = this.n4b;
	while (h4t)
	{
		v3n.push(h4t.u0y);
		h4t = h4t.l8b;
	}
	return v3n;
}


}

const b4c =
{
	j1l : 0,
	g6v : 1,
	o5v : 2,
	d4r : 3,
	o9f : 4,
	q6y : 5,
	e7o : 6,
	o0g : 7,
	i8a : 8,
	k5j : 9,
	x5f : 10,
	p6s : 11,
	x7q : 12,
	o8o : 13,
	c7a : 14,
	r5r : 15
};

const s5c =
[
	[ b4c.j1l,     						  ""    ],
	[ b4c.g6v,        "+&#8211;" ],
	[ b4c.o5v, 						"&#177;" ],
	[ b4c.d4r,		"&#10866;"  ],
	[ b4c.o9f, 							"="   ],
	[ b4c.q6y,  							"&#8734;" ],
	[ b4c.e7o,  	"&#10865;"],
	[ b4c.o0g, 						"&#8723;" ],
	[ b4c.i8a, 				"&#8211;+"],
	[ b4c.k5j,						"&#8773;" ],
	[ b4c.x5f, 						"&#8646;" ],
	[ b4c.p6s,  						"&#8593;" ],
	[ b4c.x7q, 								"&#8594;" ],
	[ b4c.o8o, 					"&#8853;" ],
	[ b4c.c7a,		"&#10227;"],
	[ b4c.r5r, 								"N"   ]
];

function l3m(value)
{
	return s5c[value][1];
}


const b4f =
{
	u9j : 0,
	x2e : 1,
	p8l : 2
};

const u9g =
{
	j1l : 0,
	r3k : 1,
	v4r : 2,
	b6s : 3,
	m2w : 4,
	a1m : 5,
	q9g : 6,
	z8s : 7,
	o4h : 8,
	n4n : 9,
	f3q : 10,
	k0v : 11
};

/*
TO DO
- Aanpassen voor tekst after van m7j daar kan dia inzitten (zie c++)
- Vette tekst en niet vette r3k testen bij wel/niet MultiPV
*/
class c9o
{

constructor()
{
	this.j8u = new z1b();
  this.i3h = true;
  this.f8o = false;
  this.r5n = true;
  this.s1m = true;
  this.b2b = b4f.u9j;
  this.k9b = false;
  this.d2t = true;
 	this.o2w = true;
 	this.q1t = -1;
  this.w7l = false;
  this.g5y = false;
	this.k8r = false;
	this.d4a = true;
  this.m6n = false;
  this.x8h = false;
  this.n1m = 0;
	this.g9u = true;
  this.q4k = null;
 	this.n2u = u9g.j1l;
}

e4m(v3n)
{
	this.q4k = v3n;
 	let y5m = this.q4k.y5m();
	let x1z = this.q4k.x1z();
	this.n2u = u9g.j1l;
	this.d4a = true;
	this.g5y = false;
	this.k8r = false;
	this.w7l = false;
	this.m6n = this.q4k.i1g();
	this.g9u = true;
	this.n1m = 0;

	if (this.k9b)
	{
		this.b3g(u9g.v4r);
		this.a2h();
	}
	else
	{
    
    if (this.b2b == b4f.x2e ||
      (this.b2b == b4f.p8l && !x1z.m5x()))
    {
      if (this.s1m)
      {
        this.u2k(y5m, x1z, n1m);
        this.d4a = true;
      }
    }

    this.b3g((this.m6n && !this.h7b) ? u9g.r3k : u9g.v4r);
    this.u5f(this.m6n);
    this.v9t(y5m, "");
    this.o3o(y5m, this.q4k.c2d().z8s);

    if (this.q4k.e7m())
    {
      this.u6t();
    }
   	this.b3g(u9g.j1l);
   	this.e1w();
  }
}

a2h()
{
	let l6q = this.q4k.y5m();
	let c2k = this.q4k.c2k(l6q);
	for (let i = 0; i < c2k; i++)
	{
    this.j8u.c3l('<div class="variation-row">');
		l6q = this.q4k.y5m();
  	let p2g = this.q4k.x1z();
	  let a2y = this.q4k.o7x();
		this.q4k.z0a(l6q, i);
		this.d4a = true;
		let j7z = true;
		let u0y = l6q.u0y;
		let q9g = u0y.q9g();
		if (q9g.length)
		{
			this.o2x(l6q, q9g);
		}
		this.b3g(u9g.v4r);
		do
		{
			if (j7z)
			{
				l6q.u0y.k6f();
			}
			this.c3z(l6q, p2g, a2y);
			if (j7z)
			{
				l6q.u0y.l3z(q9g);
				j7z = false;
			}
			if (this.q4k.q0r(l6q))
			{
				break;
			}
			p2g.r9f(l6q.u0y);
			if (p2g.m0s())
			{
				a2y++;
			}
			this.q4k.r9f(l6q);
		} while (true);
    this.j8u.c3l('<div');
	}
}

u6t()
{
  let q9s = 0;
 	let l6q = this.q4k.y5m();
	let p2g = this.q4k.x1z();
  let a2y = this.q4k.o7x();

	let k2t = 100000;
	if (this.q1t == 0)
	{
		return;
	}
	if (this.q1t != -1)
	{
		k2t = this.q1t;
	}
	let i8b = a2y + k2t - 1;
	this.d4a = true;
	while (true)
	{
		let c2k = this.q4k.c2k(l6q);
		while (a2y <= i8b && !this.q4k.q0r(l6q))
		{
      this.q4k.r9f(l6q);
    	this.b3g((this.m6n && !this.h7b) ? u9g.r3k : u9g.v4r);
			this.c3z(l6q, p2g, a2y);
			p2g.r9f(l6q.u0y.z2g());
 			if (p2g.m0s())
			{
				a2y++;
			}
			if (this.o2w && c2k > 1)
			{
				break;
			}
			c2k = this.q4k.c2k(l6q);
		}
		if (!c2k || a2y > i8b)
		{
			return;
		}
    p2g.y9l(l6q.u0y.z2g());
		if (p2g.n3a())
		{
			a2y--;
		}
    this.q4k.y9l(l6q);
		for (let i = 1; i < c2k; i++)
		{
      q9s++;
      let i9p = "<span class=\"tdline\" data-level=\"";
      i9p += q9s.toString();
      i9p += "\">";
      this.j8u.c3l(i9p);
			this.q2f(u9g.b6s);
			this.v1n("[", true);
			let a1m = '';
      this.g4d(l6q, p2g, a2y, i, a1m, q9s);
			this.b3g(u9g.b6s);
			this.v1n("]", true);
      this.j8u.c3l("</span>");
      q9s--;
     	this.b3g((this.m6n && !this.h7b) ? u9g.r3k : u9g.v4r);
		}
		this.q2f(this.n2u);
    this.q4k.r9f(l6q);
    p2g.r9f(l6q.u0y.z2g());
		if (p2g.m0s())
		{
			a2y++;
		}
		this.d4a = true;
	}
}

c3z(l6q, p2g, a2y)
{
	if (this.q4k.s4j(l6q))
	{
		return;
	}
 	let u0y = l6q.u0y;

	let j0v = '';
  let m9a = false;
  if (this.i3h)
	{
		if (u0y.j6e())
		{
			if (!this.q4k.s4j(l6q))
			{
        let f6n = l6q.o0o();
        this.q4k.y9l(f6n);
        if (f6n.u0y)
        {
  				if (f6n.u0y.e4g())
	  			{
		  			m9a = true;
			  	}
        }
			}
		}
  }
	if (this.g5y)
	{
		j0v = "(";
		this.g5y = false;
		if (this.i3h && u0y.i9l())
		{
			this.v1n("(", true);
			let b2u = this.n2u;
			this.o2x(l6q, u0y.q9g());
			this.b3g(b2u);
			j0v = "";
      m9a = true;
		}
	}
	else
	{
		if (this.i3h && u0y.i9l())
		{
  	  let b2u = this.n2u;
	  	this.o2x(l6q, u0y.q9g());
		  this.b3g(b2u);
      m9a = true;
    }
	}
	if (u0y.l4f())
	{
		j0v += d4k(u0y.a1m());
	}
	let k9k = u0y.c1n();
	if (k9k)
	{
    j0v += a2y;
		j0v += '.';
	}
	else
	{
		if (this.d4a || m9a)
		{
 			j0v += a2y;
			j0v += "...";
		}
	}
	j0v += m9t(p2g, u0y.z2g(), false);
	if (u0y.f8e())
	{
		j0v += q2l(u0y.style());
	}
	if (u0y.e4n())
	{
		j0v += l3m(u0y.value());
	}
	if (u0y.m6u())
	{
		j0v += " End Of Game";
  }
	if (this.k8r || this.w7l)
	{
		if (this.q4k.q0r(l6q) && (!this.i3h || !u0y.e4g()))
		{
			if (this.k8r)
			{
				j0v += ")";
				this.k8r = false;
			}
			else
			{
				j0v += ";";
				this.w7l = false;
			}
		}
	}
	this.v9t(l6q, j0v);
	this.d4a = false;

	if (u0y.z8x())
	{
		let z8s = u0y.z8s();
    let e7q = z8s.indexOf("[#]");
		let z6n = z8s.substring(0, e7q);
	  let t0e = z8s.substring(e7q + 3);
		if (z6n.length)
		{
			this.o3o(l6q, z6n);
		}
		this.n1m++;
		if (this.s1m)
		{
			this.q2f(u9g.j1l);
      this.u2k(l6q, p2g, this.n1m);
			this.d4a = true;
		}
		if (t0e.length)
		{
			this.o3o(l6q, t0e);
		}
	}
	else
	{
		this.o3o(l6q, u0y.z8s());
	}

  if (u0y.m6u())
	{
    this.j8u.i5y("<div>&nbsp;</div>"); 
   	this.e1w();
 	  this.u5f(false); 
 	  this.x8h = true;
	}
}

b3g(a5l)
{
	if (a5l != this.n2u)
	{
		this.y3t();
		this.n2u = a5l;
		this.n8j();
	}
}

n8j()
{
}

y3t()
{
	this.n2u = u9g.j1l;
}

q2f(a5l)
{
	this.y3t();
	this.n2u = u9g.j1l;
  
  
  
  
  this.j8u.i5y("<br>"); 
	if (a5l != u9g.j1l)
	{
		this.n2u = a5l;
		this.n8j();
	}
}

u2k(l6q, p2g, c1d)
{
  this.g9u = true;
	let i9p = "<span class=\"tddia\" movenr=\"";
  i9p += this.q4k.a9r(l6q).toString();
	i9p += "\">",
	this.j8u.c3l(i9p);
	this.j8u.c3l("<canvas></canvas>");
	this.j8u.c3l("</span>");
	this.d4a = true;
}

z5q(l6q, p4p)
{
  this.e5j(l6q);
	this.h7n(p4p);
  this.q4u();
}

g4d(i7j, h1s, a2y, g0q, a1m, q9s)
{
  let l6q = i7j.o0o();
  let p2g = h1s.o0o();

	if (a1m.length)
	{
		this.b3g(u9g.a1m);
		let i0c = a1m;
		i0c += ")";
    let i9p = "<span class=\"tdprefix\">";
    this.j8u.c3l(i9p);
  	this.v1n(i0c);
    this.j8u.c3l("</span>");
	}
	let c2k = 0;
	let z9w = 1;
  this.q4k.z0a(l6q, g0q);
	this.d4a = true;
	do
	{
		this.b3g(u9g.b6s);
		this.c3z(l6q, p2g, a2y);
		if (c2k > 1)
		{
      this.q4k.y9l(l6q);
      this.f4c(l6q, p2g, a2y);
      this.q4k.r9f(l6q);
			this.d4a = true;
		}
		p2g.r9f(l6q.u0y.z2g());
		if (p2g.m0s())
		{
			a2y++;
		}
		c2k = this.q4k.c2k(l6q);
		if (c2k == 0)
		{
			break;
		}
		if (c2k > 1)
		{
			if (!this.q4k.o6h(l6q))
			{
				break;
			}
		}
    this.q4k.r9f(l6q);
		z9w++;
	} while (true);

	if (this.q4k.q0r(l6q))
	{
		return;
	}

	let h7c = a1m.length;
	let i0c = '';
	let o5x = 1;
	for (let i = 0; i < c2k; i++)
	{
		if (h7c == 0)
		{
      i0c = String.fromCharCode('A'.charCodeAt() + o5x - 1);
		}
		else if (h7c == 1)
		{
      i0c = a1m;
      i0c += o5x;
		}
		else if (h7c == 2)
		{
      i0c = a1m;
      i0c += String.fromCharCode('a'.charCodeAt() + o5x - 1);
		}
		else
		{
      i0c = a1m;
      i0c += o5x;
		}

    let i9p = "<span class=\"tdline\" data-level=\"";
    i9p += q9s.toString();
    i9p += "\">";
    this.j8u.c3l(i9p);
  	this.q2f(this.n2u);
    this.g4d(l6q, p2g, a2y, i, i0c, q9s);
    this.j8u.c3l("</span>");
		o5x++;
	}
}

f4c(i7j, h1s, a2y)
{
  let l6q = i7j.o0o();
  let p2g = h1s.o0o();

	this.b3g(u9g.m2w);
	this.g5y = true;
	this.w7l = false;
	let c2k = this.q4k.c2k(l6q);
	for (let i = 1; i < c2k; i++)
	{
		if (i == c2k - 1)
		{
			this.k8r = true;
		}
		if (i < c2k - 1)
		{
			this.w7l = true;
		}
    this.a2e(l6q, p2g, a2y, i);
		if (this.w7l)
		{
			this.b3g(u9g.m2w);
			this.v1n(";", false);
			this.w7l = false;
		}
	}
	this.b3g(u9g.m2w);
	if (this.k8r)
	{
		this.v1n(")", false);
		this.k8r = false;
	}
}

a2e(i7j, h1s, a2y, g0q)
{
  let l6q = i7j.o0o();
  let p2g = h1s.o0o();

  this.q4k.z0a(l6q, g0q);
	let z9w = 0;
	this.d4a = true;
	do
	{
		z9w++;
		this.b3g(u9g.m2w);
		this.c3z(l6q, p2g, a2y);
		if (this.q4k.q0r(l6q))
		{
			break;
		}
		p2g.r9f(l6q.u0y.z2g());
		if (p2g.m0s())
		{
			a2y++;
		}
    this.q4k.r9f(l6q);
	} while (true);
}

v9t(l6q, j0v)
{
	if (j0v.length)
	{
 		this.b5z(l6q, j0v);
	}
	else
	{
		if (this.d2t)
    {
      this.b5z(l6q, "[...]");
    }
	}
	if (l6q.u0y)
	{
		if (l6q.u0y.e5t() || l6q.u0y.z4c())
		{
			this.w9i(l6q, u9g.o4h);
		}
		if (l6q.u0y.z8x())
		{
		}
		if (l6q.u0y.f1k())
		{
			this.w9i(l6q, u9g.f3q);
		}
		if (l6q.u0y.v8d())
		{
			this.w9i(l6q, u9g.n4n);
		}
	}
	else
	{
		if (this.q4k.v0j() || this.q4k.o7o())
		{
			this.w9i(l6q, u9g.o4h);
		}
		if (this.q4k.j5x())
		{
		 	this.w9i(l6q, u9g.n4n);
		}
	}
}

v1n(j0v, j6l)
{
	if (j0v.length == 0)
	{
		return;
	}
	if (!this.g9u && j6l)
	{
		this.j8u.i5y(" ");
	}
	this.j8u.i5y(j0v);
	this.g9u = false;
}

o2x(l6q, q9g)
{
	if (this.i3h && q9g.length)
	{
		this.b3g(u9g.q9g);
		this.z5q(l6q, q9g);
	}
}

o3o(l6q, z8s)
{
	if (this.i3h && z8s.length)
	{
		this.b3g(u9g.z8s);
		this.z5q(l6q, z8s);
	}
}

h7n(p4p)
{
  let k2x = p4p;
  let p7b = k2x.replaceAll("<br><br>", "<br>");
  let v2o = p7b.replaceAll("<br><br>", "<br>");
  let w5x = v2o.replaceAll("<br>", "<div>&nbsp;</div>");
  let s = w5x;
  this.j8u.i5y(s);
}

b5z(l6q, j0v)
{
	if (j0v.length == 0)
	{
		return;
	}
	if (!this.g9u)
	{
		this.j8u.i5y(" ");
	}
  let v5h = '';
  if (l6q.u0y)
  {
  	if (l6q.u0y.v4k())
	  {
		  if (l6q.u0y.z4d() == o9q.z4w)
  		{
	  		v5h = "tdmove-crit-opening";
		  }
  		else if (l6q.u0y.z4d() == o9q.g8o)
	  	{
		  	v5h = "tdmove-crit-middle";
  		}
	  	else if (l6q.u0y.z4d() == o9q.r6z)
		  {
  			v5h = "tdmove-crit-end";
	  	}
  	}
  }
	let b3t = "<span class=\"";
	if (v5h.length == 0)
	{
		b3t += "tdmove\" movenr=\"";
	}
	else
	{
		b3t += "tdmove " + v5h + "\" movenr=\"";
	}
  b3t += this.q4k.a9r(l6q).toString();
  b3t += "\"";
	b3t += ">",
	b3t += j0v;
	b3t += "</span>";

	this.j8u.c3l(b3t);
	this.g9u = false;
}

w9i(l6q, a5l)
{
  if (a5l == u9g.o4h)
  {
    this.l3c(l6q);
  }
  else if (a5l == u9g.n4n)
  {
    this.j0e(l6q);
  }
}

l3c(l6q)
{
	let i9p = "<span class=\"tdcolors\" movenr=\"";
  i9p += this.q4k.a9r(l6q).toString();
	i9p += "\">",
	this.j8u.c3l(i9p);
	this.j8u.c3l("</span>");
}

j0e(l6q)
{
	let i9p = "<span class=\"tdmedal\" movenr=\"";
  i9p += this.q4k.a9r(l6q).toString();
	i9p += "\">",
	this.j8u.c3l(i9p);
	this.j8u.c3l("<canvas></canvas>");
	this.j8u.c3l("</span>");
}

u5f(r8e)
{
 	let i9p = "<span class=\"tdline\"";
	if (r8e)
	{
		i9p += " data-commented=\"1\"";
	}
	i9p += " data-level=\"0\">";
	this.j8u.i5y(i9p);
}

e1w()
{
  this.j8u.c3l("</span>");
}

e5j(l6q)
{
  let c4m = "tdcomment";
  if (this.f8o)
  {
    c4m += " is-bold";
  }
  let i9p = "<span class=\"" + c4m + "\" movenr=\"";
  i9p += this.q4k.a9r(l6q).toString();
  i9p += "\">";
  this.j8u.i5y(i9p);
}

q4u()
{
  this.j8u.c3l("</span>");
}

a1f(value)
{
  this.d2t = value;
}

q8i(value)
{
  this.f8o = value;
}

s4l(value)
{
  this.r5n = value;
}

w8l(value)
{
  this.k9b = value;
}

} 
const c3j =
{
	x7q : 1,
	u1e : 2,
	s9u : 3
};

class k7q
{

constructor()
{
	this.b8x = 0;
	this.c2m = 0;
	this.type = c3j.x7q;
}

o0o()
{
	let p9c = new k7q();
	p9c.b8x = this.b8x;
	p9c.c2m = this.c2m;
	p9c.type = this.type;
	return p9c;
}

}

function a0s(b8x, c2m, type)
{
	let s = new k7q();
	s.b8x = b8x;
	s.c2m = c2m;
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

m5p()
{
	return this.q1s.length;
}

add(f3z)
{
	let g3z = f3z.o0o();
	this.q1s.push(g3z);
}

}

const c7m =
{
	i5e : 0,
	g3t : 1,
	y8e : 2
};

class r3c
{

constructor()
{
	this.z4p = 0;
	this.type = c7m.i5e;
}

o0o()
{
	let i2u = new r3c();
	i2u.z4p = this.z4p;
	i2u.type = this.type;
	return i2u;
}

}

function c7t(z4p, type)
{
	let j3o = new r3c();
	j3o.z4p = z4p;
	j3o.type = type;
	return j3o;
}

class x6l
{

constructor()
{
	this.s6p = [];
}

o0o()
{
	let t9p = new x6l();
	for (const e6o of this.s6p)
	{
		t9p.add(e6o.o0o());
	}
	return t9p;
}

h2u()
{
	this.s6p.length = 0;
}

k2v()
{
	return this.s6p.length == 0;
}

m5p()
{
	return this.s6p.length;
}

add(l8r)
{
	let x2d = l8r.o0o();
	this.s6p.push(x2d);
}

}

const h7x =
{
	w7u    : 0,
	i7t  : 1,
	j1s  : 2,
	w1p    : 3,
  j8l   : 4,
	x7m    : 5,
};


function y3f(q4x)
{
	let j0v = '';
	switch (q4x)
	{
		case h7x.w7u:
			j0v = "P";
			break;
		case h7x.i7t:
			j0v = "N";
			break;
		case h7x.j1s:
			j0v = "B";
			break;
		case h7x.w1p:
			j0v = "R";
			break;
		case h7x.j8l:
			j0v = "Q";
			break;
		case h7x.king:
			j0v = "K";
			break;
	}
	return j0v;
}

class i0b
{

constructor()
{
  this.z0p = 0;
	this.g0g = new m3k();
	this.v3n = new e5q();
}

o0o()
{
	let a6t = new i0b();
  a6t.z0p = this.z0p;
	a6t.g0g = this.g0g.o0o();
	a6t.v3n = this.v3n.o0o();
	return a6t;
}

}

const q6z = 	 		"#7B8295";
const z0k =			"#9F9F9F";
const x9b = 			    "#7B8295";
const c9b = 		  "#FFFFFF";
const i8y =       "#D0B194";

const g6s	   = "#E13129";
const k3c	 = "#389C13";
const o5b = "#E2B628";

const j8c	 = "#E13129";
const w2y	 = "#389C13";
const s3s	   = "#E2B628";

class s0a
{

constructor()
{
	this.k3d = null;
	this.y6y = false;
	this.z3y = null;
	this.e8c = null;
	this.r9e = null;
	this.c0k = 0;
	this.b0l = 0;
	this.f7a = 0;
	this.x7c = 0;
	this.s7w = 0;
	this.q0o = 0;
	this.x2h = new j6p();
	this.p2g = new z4m();
	this.e6v = new s7c();
	this.a7a = new x6l();
  this.y1u = new q5w();
  this.l2r = true;
	this.m6h = true;
	this.s9w = true;
	this.b1y = false;
	this.k7u = q6z;
	this.y8a = z0k;
	this.f1h = w3l;
	this.d4v = u7f;
	this.w2j = u7f;
	this.n6r = e0w;
	this.d0p = true;
	this.c0b = i4u;
	this.r4h = i4u;
	this.o3z = false;
	this.v0m = [];
	this.t2h = 0;
}

y7q(k3d)
{
	this.k3d = k3d;
}

e5y(x2h)
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
	this.c8d();
}

t6k(p2g)
{
	this.p2g = p2g.o0o();
	this.e6v.h2u();
	this.a7a.h2u();
}

c3o(e6v)
{
	this.e6v = e6v.o0o();
}

k1n(a7a)
{
	this.a7a = a7a.o0o();
}

s0o(u0y)
{
  this.y1u = u0y.o0o();
}

j7v(b1y)
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

j4a()
{
	let r7z = this.x2h.r7z;
	if (this.y6y)
	{
		return;
	}
	this.y6y = true;
	if (r7z == k5t.b5c)
	{
  	this.z3y = j2k.c0f("images/board/LightSquare");
  	this.e8c = j2k.c0f("images/board/DarkSquare");
		this.r9e = j2k.c0f("images/board/Margin");
	}
}

c8d()
{
	this.j4a();
	let r7z = this.x2h.r7z;
	if (r7z == k5t.b5c)
	{
		this.d0p = false;
		this.m6h = false;
		this.s9w = false;
		this.f1h = "#FFFF97";
		this.d4v = "#9B2E31";
		this.w2j = l3x;
	}
}

v9s()
{
	this.c8d();
	if (this.x2h.r7z == k5t.b5c)
	{
		let l7o = j2k.c0f("images/board/BoardBackground");
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
	this.s2p(new k0x(j9z, m6w, q3r, m6w+t2a-1), this.d4v);
	this.s2p(new k0x(j9z, w4r-t2a+1, q3r, w4r), this.w2j);
	this.s2p(new k0x(j9z, m6w, j9z+t2a-1, w4r), this.d4v);
	this.s2p(new k0x(q3r-t2a+1, m6w, q3r, w4r), this.w2j);
}

q7h()
{
	let m2p = this.x2h.m2p;
	let u9e = this.x2h.u9e;
	if (!u9e)
	{
		return;
	}
	if (this.d0p || !this.r9e)
	{
		this.c9e(this.n6r);
	}
	else
	{
		let left = this.c0k + m2p;
		let top = this.b0l + m2p;
		let q4s = this.s7w - m2p;
		let f7k = this.b0l + m2p + u9e - 1;
		this.g8f(new k0x(left, top, q4s, f7k), this.r9e);

		left = this.c0k + m2p;
		top = this.b0l + m2p;
		q4s = this.c0k + m2p + u9e - 1;
		f7k = this.q0o - m2p;
		this.g8f(new k0x(left, top, q4s, f7k), this.r9e);

		left = this.c0k + m2p;
		top = this.q0o - m2p - u9e + 1;
		q4s = this.s7w - m2p;
		f7k = this.q0o - m2p;
		this.g8f(new k0x(left, top, q4s, f7k), this.r9e);

		left = this.s7w - m2p - u9e + 1;
		top = this.b0l + m2p;
		q4s = this.s7w - m2p;
		f7k = this.q0o - m2p;
		this.g8f(new k0x(left, top, q4s, f7k), this.r9e);
	}
}

c9e()
{
	let m2p = this.x2h.m2p;
	let u9e = this.x2h.u9e;
	if (!u9e)
	{
		return;
	}

	let left = this.c0k + m2p;
	let top = this.b0l + m2p;
	let q4s = this.s7w - m2p;
	let f7k = this.b0l + m2p + u9e - 1;
	this.s2p(new k0x(left, top, q4s, f7k), this.n6r);

	left = this.c0k + m2p;
	top = this.b0l + m2p;
	q4s = this.c0k + m2p + u9e - 1;
	f7k = this.q0o - m2p;
	this.s2p(new k0x(left, top, q4s, f7k), this.n6r);

	left = this.c0k + m2p;
	top = this.q0o - m2p - u9e + 1;
	q4s = this.s7w - m2p;
	f7k = this.q0o - m2p;
	this.s2p(new k0x(left, top, q4s, f7k), this.n6r);

	left = this.s7w - m2p - u9e + 1;
	top = this.b0l + m2p;
	q4s = this.s7w - m2p;
	f7k = this.q0o - m2p;
	this.s2p(new k0x(left, top, q4s, f7k), this.n6r);
}

d6n()
{
	if (this.x2h.l4r)
	{
  	if (!this.x2h.u9e)
  	{
	  	return;
  	}
		let x3x = "#000000";
		if (this.p2g.m0s())
		{
			x3x = "#EDD790";
		}
		else
		{
			x3x = "#000000";
		}
		let rect = this.m8h();
		let v5c = this.m3w();
		v5c.beginPath();
		v5c.fillStyle = x3x;
		let f6u = rect.f3w() * 0.40;
		v5c.arc(rect.j6q + rect.f3w()/2 - 1, rect.n8v + rect.k4s()/2 - 1,
			f6u, 0, 2 * Math.PI);
		v5c.fill();
	}
}

j4o()
{
	let j4r = l3x;
	let m2p = this.x2h.m2p;
	let u9e = this.x2h.u9e;
	let t2a = this.x2h.t2a;
	let m6w = this.b0l + m2p + u9e;
	let j9z = this.c0k + m2p + u9e;
	let q3r = this.s7w - m2p - u9e;
	let w4r = this.q0o - m2p - u9e;
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
	v5c.lineWidth = "1";
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
	let x9g = v5c.createPattern(img, 'repeat');
	v5c.fillStyle = x9g;
	v5c.fillRect(rect.j6q, rect.n8v, rect.f3w(), rect.k4s());
}

x5d(rect, img)
{
	let v5c = this.m3w();
	let x9g = v5c.createPattern(img, 'no-repeat');
	v5c.fillStyle = x9g;
	v5c.fillRect(rect.j6q, rect.n8v, rect.f3w(), rect.k4s());
}

q2r(z4p)
{
	let b8f = f5y;
	let g7d = d8b;
	if (this.b1y)
	{
		b8f = y2e(r7j(z4p));
		g7d = d5g(r7j(z4p));
	}
	else
	{
		b8f = y2e(z4p);
		g7d = d5g(z4p);
	}
	if (w4g(g7d))
	{
		b8f++;
	}
	else
	{
		b8f--;
	}
	return this.v5x(g7d, b8f);
}

z4u()
{
	for (const z4p of h0i)
	{
		this.v7p(z4p);
	}
}

v7p(z4p)
{
	this.q6i(this.q2r(z4p), z4p);
}

q6i(rect, z4p)
{
	let c0f = this.z3y;
	if (this.s9w)
	{
		this.g3r(rect, this.y8a);
		return;
	}
	if (!c0f)
	{
		this.g3r(rect, this.y8a);
		return;
	}

	let u2m = c0f.width;
	let r5f = c0f.height;
	let b7w = this.x2h.s0p;
	if (u2m < b7w || r5f < b7w)
	{
		this.x5d(rect, c0f);
		return;
	}

	let w2v = Math.trunc(u2m / this.x2h.s0p);
	let x6r = Math.trunc(r5f / this.x2h.s0p);
	if (w2v == 0)
	{
		w2v = 1;
	}
	if (x6r == 0)
	{
		x6r = 1;
	}

	let n8n = Math.trunc((z4p) / w2v);
	let t8e = (z4p) % w2v;
	let y = Math.trunc(n8n / x6r);
	n8n = n8n % x6r;

  let w8i = new k0x();
	w8i.j6q = t8e * this.x2h.s0p;
	w8i.n8v = n8n * this.x2h.s0p;
	w8i.o0c = (t8e + 1) * this.x2h.s0p - 1;
	w8i.d7v = (n8n + 1) * this.x2h.s0p - 1;
	let v5c = this.m3w();
	a0m(v5c, rect, c0f, w8i);
}

j0h(z4p)
{
	let b8f = f5y;
	let g7d = d8b;
	if (this.b1y)
	{
		b8f = y2e(r7j(z4p));
		g7d = d5g(r7j(z4p));
	}
	else
	{
		b8f = y2e(z4p);
		g7d = d5g(z4p);
	}
	return this.v5x(g7d, b8f);
}

w1k()
{
	for (const z4p of h0i)
	{
		this.o3n(z4p);
	}
}

o3n(z4p)
{
	this.l2c(this.j0h(z4p), z4p);
}

l2c(rect, z4p)
{
	let c0f = this.e8c;
	if (this.m6h)
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
	let b7w = this.x2h.s0p;
	if (u2m < b7w || r5f < b7w)
	{
		this.x5d(rect, c0f);
		return;
	}

	let w2v = Math.trunc(u2m / this.x2h.s0p);
	let x6r = Math.trunc(r5f / this.x2h.s0p);
	if (w2v == 0)
	{
		w2v = 1;
	}
	if (x6r == 0)
	{
		x6r = 1;
	}

	let n8n = Math.trunc((z4p) / w2v);
	let t8e = (z4p) % w2v;
	let y = Math.trunc(n8n / x6r);
	n8n = n8n % x6r;

  let w8i = new k0x();
	w8i.j6q = t8e * this.x2h.s0p;
	w8i.n8v = n8n * this.x2h.s0p;
	w8i.o0c = (t8e + 1) * this.x2h.s0p - 1;
	w8i.d7v = (n8n + 1) * this.x2h.s0p - 1;
	let v5c = this.m3w();
	a0m(v5c, rect, c0f, w8i);
}

v5x(g7d, b8f)
{
	let m2p = this.x2h.m2p;
	let u9e = this.x2h.u9e;
	let t2a = this.x2h.t2a;
	let s0p = this.x2h.s0p;
	let rect = new k0x();
	rect.j6q = this.c0k + m2p + u9e +	t2a + (b8f) * s0p;
	rect.o0c = rect.j6q + s0p - 1;
	rect.n8v = this.b0l + m2p + u9e +	t2a + (c4f - g7d - 1) * s0p;
	rect.d7v = rect.n8v + s0p - 1;
	return rect;
}

w9z(z4p)
{
	let b8f = f5y;
	let g7d = d8b;
	if (this.b1y)
	{
		b8f = y2e(r7j(z4p));
		g7d = d5g(r7j(z4p));
	}
	else
	{
		b8f = y2e(z4p);
		g7d = d5g(z4p);
	}
	return this.v5x(g7d, b8f);
}

j6t()
{
	for (const z4p of h0i)
	{
		this.e1f(z4p);
	}
}

e1f(z4p)
{
	this.j2t(this.w9z(z4p), z4p);
}

j2t(rect, z4p)
{
	let u5o = isDarkSquare(z4p);
	let c0f = this.z3y;
	if (u5o)
	{
		c0f = this.e8c;
	}
	if (u5o)
	{
		if (this.m6h)
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
		if (this.s9w)
		{
			this.g3r(rect, this.y8a);
			return;
		}
		if (!c0f)
		{
			this.g3r(rect, this.y8a);
			return;
		}
	}

 	let u2m = c0f.width;
	let r5f = c0f.height;
	let b7w = this.x2h.s0p;
	if (u2m < b7w || r5f < b7w)
	{
		this.x5d(rect, c0f);
		return;
	}
	let w2v = Math.trunc(u2m / this.x2h.s0p);
	let x6r = Math.trunc(r5f / this.x2h.s0p);
	if (w2v == 0)
	{
		w2v = 1;
	}
	if (x6r == 0)
	{
		x6r = 1;
	}

	let n8n = Math.trunc((z4p) / w2v);
	let t8e = (z4p) % w2v;
	let y = Math.trunc(n8n / x6r);
	n8n = n8n % x6r;

  let w8i = new k0x();
	w8i.j6q = t8e * this.x2h.s0p;
	w8i.n8v = n8n * this.x2h.s0p;
	w8i.o0c = (t8e + 1) * this.x2h.s0p - 1;
	w8i.d7v = (n8n + 1) * this.x2h.s0p - 1;
	let v5c = this.m3w();
	a0m(v5c, rect, c0f, w8i);
}

g3r(rect, x3x)
{
	this.s2p(rect, x3x);
}

p9h()
{
	for (const z4p of h0i)
	{
		this.e3t(z4p);
	}
}

e3i(b8x, c2m, c8h)
{
	this.c0b = b8x;
	this.r4h = c2m;
	this.o3z = c8h;

	this.v0m.length = 0;
 	let j7l = this.w9z(b8x);
  let s6b = this.w9z(c2m);
	let y0s = this.x2h.s0p;

	let u2o = 32;
	if (y0s < 32)
	{
		u2o = y0s;
	}

  
	if (false)
	{
    
    
		let i6o = new x9h(j7l.j6q + y0s / 2, j7l.n8v + y0s / 2);
		let u4f = new x9h(s6b.j6q + y0s / 2, s6b.n8v + y0s / 2);
		let h7o = Math.abs(i6o.X - u4f.X);
		let a5m = Math.abs(i6o.Y - u4f.Y);
		let z5n = Math.atan2(u4f.X - i6o.X, i6o.Y - u4f.Y);
		let m0x = Math.sqrt(h7o*h7o + a5m*a5m) / 2;
		u4f.X = i6o.X + m0x * 2;
		u4f.Y = i6o.Y;
		let x3o = new x9h(i6o.X + m0x, i6o.Y);
		let y7k = Math.PI / u2o;
		let a4p = y0s * 0.40;
		let e0q = Math.PI;
		let q3y = (s6b.j6q > j7l.j6q && s6b.n8v < j7l.n8v) ||
			(s6b.j6q < j7l.j6q && s6b.n8v > j7l.n8v);
		for (let i = 1; i < u2o; i++)
		{
			let u4s = new k0x();
			if (q3y)
			{
				e0q -= y7k;
			}
			else
			{
				e0q += y7k;
			}
			let m7i = Math.cos(e0q);
			let q6r = Math.sin(e0q);
			let l2s = new x9h(x3o.X + m0x * m7i,
				x3o.Y - a4p * q6r);
			this.v0m.push(n7s(l2s, i6o, z5n - Math.PI / 2));
		}
	}
	else
	{
		let i6o = new x9h(j7l.j6q + y0s / 2, j7l.n8v + y0s / 2);
		let u4f = new x9h(s6b.j6q + y0s / 2, s6b.n8v + y0s / 2);
		let m9b = (u4f.X - i6o.X) / u2o;
		let g4w = (u4f.Y - i6o.Y) / u2o;
		for (let i = 1; i < u2o; i++)
		{
			this.v0m.push(new x9h(i6o.X + i * m9b, i6o.Y + i * g4w));
		}
	}
	this.v0m.push(new x9h(s6b.j6q + y0s / 2, s6b.n8v + y0s / 2));
	this.t2h = 0;
}

q6q()
{
	this.c0b = i4u;
	this.r4h = i4u;
}

l2q()
{
	this.y8o(); 

	let d7r = this.v0m[this.t2h];
	let s0p = this.x2h.s0p;
	let u4s = new k0x();
	u4s.j6q = d7r.X - s0p / 2;
	u4s.n8v = d7r.Y - s0p / 2;
	u4s.j3a(s0p);
	u4s.u2s(s0p);
 	let v5c = this.m3w();
	m2k(v5c, u4s, this.p2g.t9a(this.c0b));

	this.t2h++;
	if (this.t2h >= this.v0m.length)
	{
		let q4x = this.p2g.t9a(this.c0b);
		this.p2g.u6i(this.c0b, o8u.k2v);
		this.p2g.u6i(this.r4h, q4x);
		this.q6q();
		return true;
	}
	else
	{
		return false;
	}
}

e3t(z4p)
{
	if (z4p == this.c0b)
	{
		return;
	}
	let n1u = this.w9z(z4p);
 	let v5c = this.m3w();
	m2k(v5c, n1u, this.p2g.t9a(z4p));
}

u4m()
{
	if (!this.x2h.c5v)
	{
    return;
  }

 	let t2a = this.x2h.t2a;
	let m2p = this.x2h.m2p;
	let u9e = this.x2h.u9e;
	let s0p = this.x2h.s0p;

	let i2w = new k0x();
	i2w.j6q = this.c0k + m2p + u9e;
	i2w.n8v = this.b0l + m2p + u9e;
	i2w.j3a(c4f * s0p + 2 * t2a);
	i2w.u2s(c4f * s0p + 2 * t2a);

 	let v5c = this.m3w();
  let i5k = c0l(v5c, u9e-8);

  u4m(v5c,
    i2w,
    this.x2h,
    i5k,
    l8m.l7z,
    this.f1h,
    this.b1y,
    u9e);
}

z6g(z4p, x3x)
{
	let rect = this.w9z(z4p);
	let v5c = this.m3w();
  v5c.save();
  v5c.globalAlpha = 0.25; 
	v5c.fillStyle = x3x;
	v5c.fillRect(rect.j6q, rect.n8v, rect.f3w(), rect.k4s());
  v5c.restore();
}

f2t()
{
	if (this.l2r)
	{
		if (!this.y1u.k2v())
		{
      let x3x = "#800080"; 
			this.z6g(this.y1u.b8x, x3x);
			this.z6g(this.y1u.c2m, x3x);
		}
  }
}

z6v()
{
	for (const e6o of this.a7a.s6p)
	{
		this.n9q(e6o);
	}
}

n9q(e6o)
{
	let rect = this.w9z(e6o.z4p);
	let s7u = '';
	switch (e6o.type)
	{
		case c7m.i5e:
			s7u = g6s;
			break;
		case c7m.g3t:
			s7u = k3c;
			break;
		case c7m.y8e:
			s7u = o5b;
			break;
	}
	let y0s = this.f7a / 10;
	let v5c = this.m3w();
  /* dit is met roundrect
  j5y(rect, 5);
	v5c.lineWidth = y0s / 15;
	v5c.strokeStyle = s7u;
	x0a(v5c, rect.j6q, rect.n8v, rect.f3w(), rect.k4s(), 10);
  */
  
  v5c.save();
  v5c.globalAlpha = 0.7; 
	v5c.fillStyle = s7u;
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
	let c2m = f3z.c2m;
	let h1d = f3z.type;

	let j7l = this.w9z(b8x);
	let s6b = this.w9z(c2m);

	let z8i = j7l.j6q + j7l.f3w()/2;
	let l4d = j7l.n8v + j7l.k4s()/2;
	let w7y = new x9h(z8i, l4d);

	let h5p = s6b.j6q + s6b.f3w()/2;
	let u3j = s6b.n8v + s6b.k4s()/2;

	let s5z = (h5p-z8i)*(h5p-z8i) + (u3j-l4d)*(u3j-l4d);
	let p3t = Math.sqrt(s5z);

	let t7q = (this.p2g.j6o(b8x)) ? 0 : j7l.f3w() / 4;
	p3t -= t7q;
	let m5c = (this.p2g.j6o(c2m)) ? 0 : j7l.f3w() / 4;
	p3t -= m5c;

	let l8h = 5;
	let c6j = 5 * l8h;
	let g1b = 7 * l8h;

	let v7y = z8i + t7q;
	let w6j = l4d;

	let b0h = v7y + p3t - 1;
	let s8a = l4d;

	let p8i = b0h - g1b;
	let a8r = l4d;

	let z5n = Math.atan2((h5p - z8i), (l4d - u3j));

  
	let r4y = [];
  let n3k = 10; 
	r4y.push(new x9h(p8i, a8r));
	r4y.push(new x9h(p8i - n3k, a8r - c6j));
	r4y.push(new x9h(b0h, s8a));
	r4y.push(new x9h(p8i - n3k, a8r + c6j));
	r4y.push(new x9h(p8i, s8a));
	let c4d = [];
	for (let i = 0; i <= 4; i++)
	{
		c4d.push(n7s(r4y[i], w7y, z5n - Math.PI / 2));
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
		case c3j.s9u:
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

  
	r4y.length = 0;
	r4y.push(new x9h(v7y, w6j - l8h));
	r4y.push(new x9h(v7y, w6j + l8h));
	r4y.push(new x9h(p8i, w6j + l8h));
	r4y.push(new x9h(p8i, w6j - l8h));
	c4d.length = 0;
	for (let i = 0; i <= 3; i++)
	{
		c4d.push(n7s(r4y[i], w7y, z5n - Math.PI / 2));
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

m8h()
{
	let m2p = this.x2h.m2p;
	let u9e = this.x2h.u9e;
	let y0s = this.x2h.s0p;
	let rect = new k0x();
	rect.j6q = this.s7w - m2p - u9e + 1;
	rect.n8v = this.q0o - m2p - u9e;
	rect.d7v = this.q0o;
	rect.o0c = this.s7w - 1;
	return rect;
}

}

const l8k = 14;

const k5t =
{
	b5c : 0
};

const l6y =
{
	b5c : 0
};

const p9u =
{
	j1l : 0,
	o8d : 1,
};

const l8m =
{
	h7i: 0,
	w5j: 1,
	l7z: 2,
	m6e: 3,
	d3j: 4,
};

class j6p
{

constructor()
{
	this.r7z = k5t.b5c;
	this.w7p = 1; 
	this.m2p = 0;
	this.u9e = l8k;
	this.t2a = 2;
	this.s0p = 32;
	this.l6p = 20;
	this.c5v = true;
	this.i0i = p9u.o8d;
	this.l4r = true;
}

o0o()
{
	let o2d = new j6p();
	o2d.r7z = this.r7z;
	o2d.w7p = this.w7p;
	o2d.m2p = this.m2p;
	o2d.u9e = this.u9e;
	o2d.t2a = this.t2a;
	o2d.s0p = this.s0p;
	o2d.l6p = this.l6p;
	o2d.c5v = this.c5v;
	o2d.i0i = this.i0i;
	o2d.l4r = this.l4r;
	return o2d;
}

f7a()
{
	return this.s0p * c4f + 2 * (this.m2p + this.u9e + this.t2a);
}

q8j(rect)
{
	let w = rect.f3w();
	let h = rect.k4s();
	let m9g = 0;
	if (w < h)
	{
		m9g = w;
	}
	else
	{
		m9g = h;
	}
	if (this.u9e)
	{
		for (this.s0p = 2; this.s0p < 1000; this.s0p++)
		{
			this.u9e = (this.s0p / 100) * this.l6p;
			if (this.u9e < l8k)
			{
				this.u9e = l8k;
			}
			let m5p = 2 * (this.m2p + this.u9e + this.t2a) + c4f * this.s0p;
			if (m5p > m9g)
			{
				break;
			}
		}
		this.s0p--;
		this.u9e = (this.s0p / 100) * this.l6p;
		if (this.u9e < l8k)
		{
			this.u9e = l8k;
		}
	}
	else
	{
		for (this.s0p = 2; this.s0p < 1000; this.s0p++)
		{
			let m5p = 2 * (this.m2p + this.t2a) + c4f * this.s0p;
			if (m5p > m9g)
			{
				break;
			}
		}
		this.s0p--;
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
	this.a7a = new x6l();
	this.l8b = new q5w();
 	this.p3p = new q5w();
	this.v8t = 0;
	this.r6v = false;
	this.x9d = false;
	this.z9w = 0;
	this.g6w = 0;
	this.x4h = '';
}

}

const l7a =
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

function j5y(rect, q3z)
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

function a0m(a7e, s0h, e3m, w8i)
{
	a7e.drawImage(e3m, w8i.j6q, w8i.n8v, w8i.f3w(), w8i.k4s(),
		s0h.j6q, s0h.n8v, s0h.f3w(), s0h.k4s());
}

function x0a(v5c, x, y, width, height, f6u)
{
	v5c.beginPath();
	v5c.moveTo(x, y + f6u);
	v5c.lineTo(x, y + height - f6u);
	v5c.arcTo(x, y + height, x + f6u, y + height, f6u);
	v5c.lineTo(x + width - f6u, y + height);
	v5c.arcTo(x + width, y + height, x + width, y + height-f6u, f6u);
	v5c.lineTo(x + width, y + f6u);
	v5c.arcTo(x + width, y, x + width - f6u, y, f6u);
	v5c.lineTo(x + f6u, y);
	v5c.arcTo(x, y, x, y + f6u, f6u);
	v5c.stroke();
}

function n7s(y5i, w7y, d9s)
{
	let p = new x9h();
	p.X = (Math.cos(d9s) * (y5i.X - w7y.X)) - (Math.sin(d9s) * (y5i.Y - w7y.Y)) + w7y.X;
	p.Y = (Math.sin(d9s) * (y5i.X - w7y.X)) + (Math.cos(d9s) * (y5i.Y - w7y.Y)) + w7y.Y;
	return p;
}

function t1a(v5c, rect, n4n)
{
	let left = rect.j6q;
	let top = rect.n8v;
	let q4s = rect.o0c;
	let f7k = rect.d7v;

	v5c.fillStyle = i8h;
	v5c.fillRect(rect.j6q, rect.n8v, rect.f3w(), rect.k4s());

	if (n4n.j1l())
	{
		return;
	}

	let g9x = n4n.g3o();
	let q7b = 0;
	if (g9x > 8)
	{
		q7b = (q4s - left) / 8;
	}
	else
	{
		q7b = (q4s - left) / g9x;
	}
	let n5e = left - q7b;
	let f3t = top;
	let w0o = n5e + q7b;
	let c2w = 0;
	if (g9x > 8)
	{
		c2w = (f7k - top + 1) / 2;
	}
	else
	{
		c2w = f7k - top + 1;
	}

	let f6y = top + c2w - 1;
	let d3y = 0;
	for (let i = 0; i < 16; i++)
	{
		if (n4n.k7i(i))
		{
			n5e += q7b;
			w0o += q7b;
			if (d3y == 7 || d3y == 15 ||
				(d3y < 8 && d3y == g9x - 1))
			{
				w0o = q4s;
			}
			if (d3y == 8)
			{
				n5e = left;
				w0o = n5e + q7b;
				f3t = top + c2w;
				f6y = f7k;
			}
			let b5h = new k0x(n5e, f3t, w0o, f6y);
			v5c.fillStyle = l7a[i];
			v5c.fillRect(b5h.j6q, b5h.n8v, b5h.f3w(), b5h.k4s());
			d3y++;
		}
	}
}




class i7n
{

constructor()
{
	this.w5o = '';
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
	v3c.w5o = img.id;
	v3c.c0f = img;
	this.t2l.push(v3c);
}

c0f(w5o)
{
	for (const m3f of this.t2l)
	{
		if (m3f.w5o.toLowerCase() == w5o.toLowerCase())
		{
			return m3f.c0f;
		}
	}
	return null;
}

}
const b0y 				= "#00FFFF";
const l3x 			= "#000000";
const e0w 				= "#0000FF";
const p0m 			= "#FFFBF0";
const o1h 			= "#808080";
const s1v 		= "#FF00FF";
const h2w 				= "#808080";
const x3b 			= "#008000";
const t0a 				= "#00FF00";
const g9z 			= "#C0C0C0";
const e6x 			= "#800000";
const b9b 		= "#A0A0A4";
const g4o 	= "#C0DCC0";
const m7e 				= "#000080";
const e6m 			= "#808000";
const b0x 			= "#800080";
const i8h 				= "#FF0000";
const t5u 			= "#C0C0C0";
const t6r 		= "#A6CAF0";
const w7n 				= "#008000";
const u7f 			= "#FFFFFF";
const w3l 			= "#FFFF00";

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

constructor(left, top, q4s, f7k)
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
		this.o0c = q4s;
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

u4d(d7r)
{
	return d7r.X >= this.j6q &&
		d7r.X <= this.o0c &&
		d7r.Y >= this.n8v &&
		d7r.Y <= this.d7v;
}


}

class b2l
{

constructor(y2n)
{
	this.y2n = y2n;
	this.g0y = new z4m();
	this.m6m = new s0a();
	this.z8u = null;
	this.x2h = new j6p();
	this.b3m = true;
}

l4h()
{
	let m5q = window.devicePixelRatio;

	this.m6m.k3d.width = this.z8u.clientWidth * m5q;
	this.m6m.k3d.height = this.z8u.clientHeight * m5q;

	let g1j = 32 * m5q;
	let c1s = 32 * m5q;
	let p3w = this.m6m.k3d.width - g1j;
	let t9q = this.m6m.k3d.height - c1s;
	let c8n = t9q < p3w ? t9q : p3w;
	if (c8n < 128)
	{
		c8n = 128;
	}
	let rect = new k0x();
	rect.j6q = 0;
	rect.n8v = 0;
	rect.j3a(c8n);
	rect.u2s(c8n);
	this.x2h.u9e = c8n * 0.02;
  if (this.x2h.u9e < l8k)
  {
    this.x2h.u9e = l8k;
  }
	c8n = this.x2h.q8j(rect);
 	this.m6m.e5y(this.x2h);
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
	this.m6m.e5y(this.x2h);
	this.m6m.y8o();
}

e7g()
{
	this.m6m.e5y(this.x2h);
	this.m6m.y8o();
}

m1m(r5b)
{
	this.g0y = r5b.t1j.o0o();
	this.m6m.t6k(this.g0y);
	this.m6m.c3o(r5b.e6v);
	this.m6m.k1n(r5b.a7a);
  
 	this.m6m.s0o(r5b.p3p);
	this.m6m.y8o();

	if (this.b3m)
	{
		u5m('playBackward' + this.y2n, r5b.r6v);
		u5m('goToBegin'+ this.y2n, r5b.r6v);
		u5m('playForward' + this.y2n, r5b.x9d);
		u5m('goToEnd' + this.y2n, r5b.x9d);
		u5m('autoPlay' + this.y2n, r5b.x9d);
	}
	else
	{
		u5m('goToBegin' + this.y2n, r5b.r6v);
		u5m('goToEnd' + this.y2n, r5b.x9d);
	}
}

t6k(p2g)
{
	let r5b = new e1x();
	r5b.t1j = p2g.o0o();
	this.t6k(r5b);
}

e5y(x2h)
{
  this.x2h = x2h.o0o();
}

}

const h2g =
{
	l9m       : 0,
	n9f        : 1,
};

class w3p
{

constructor(y2n)
{
	this.y2n = y2n;
 	this.l4n = new e5q();
 	this.f3u = new u9p(y2n);
  this.f3u.d2t = false;
  this.f3u.b7c = true;
  this.f3u.f8o = true;
  this.f3u.r5n = false;
  this.l5h = null;
  this.g0w = new g0e();
  this.a1v = new e5o();
 	this.b9l = new n1y();
	this.l2o = new z4m();
	this.t4y = new z4m();
	this.y6r = 0;
	this.k2o = [];
	this.p2y = false;
 	this.s3u = false;
 	this.d7m = false;
 	this.h1z = false;
  this.n7n = h2g.l9m;
  this.b6h = document.getElementById("threat"+this.y2n);
 	this.b6h.onclick = this.b9h.bind(this);
  this.a4l();
  this.z3n = document.getElementById("engineSettings"+this.y2n);
}

z4y(q4c)
{
  this.l5h = new j0c();
  this.l5h.n2g = (event) => {
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
	this.l4n.t6k(this.b9l.p2g,
    this.b9l.a2y);
	this.e6j();
 	this.t1y();
  this.a4l();
}

t6k(x1z, o7x, v3n, e7m)
{
	this.t4y = x1z.o0o();
	this.y6r = o7x;
	this.k2o = v3n.slice(); 
	this.p2y = e7m;
	this.t1y();
}

t1y()
{
	if (!this.l5h) return;
	if (this.s3u) return;

	if (this.d7m)
	{
		let v3n = new e5q();
		v3n.t6k(this.t4y, this.y6r);
		let y5m = v3n.y5m();
		v3n.t3s(y5m, this.k2o);
		let h8h = v3n.s2i();
		let p8w = v3n.v8t(v3n.q7d());
		if (h8h.n3a())
		{
			p8w++;
		}
		let b8r = h8h;
		b8r.o7l();
		this.a1v = new e5o();
    this.a1v.v3n.t6k(b8r, p8w);
		this.l2o = b8r;
  }
  else
  {
 		this.a1v.v3n.t6k(this.t4y, this.y6r);
		let y5m = this.a1v.v3n.y5m();
		this.a1v.v3n.t3s(y5m, this.k2o);
		this.l2o = this.a1v.v3n.s2i();
  }
  if (o4l === 10) 
  {
    this.a1v.p0p = x7f;
  }
  else
  {
    this.a1v.p0p = x3e(o4l);
  }

  this.l5h.i8u();
	this.h1z = false;
  let v3n = a0g(this.l2o);
  if (v3n.length == 0)
  {
  	this.l5h.h7l(this.a1v);
		return;
  }
  else
  {
  	this.l5h.h7l(this.a1v);
		return;
  }
}

v8w()
{
	this.b9l = this.l5h.x1l();
  /*
	showScore();
	showDepth();
	showNodes();
	showCM();
  */
	this.l4n.t6k(this.b9l.p2g,
    this.b9l.a2y);
	this.e6j();
}

p0b()
{
	this.b9l = this.l5h.x1l();
	
}


i4g()
{
	this.b9l = this.l5h.x1l();
  
	
	
	
  
	this.e6j();
}

e6j()
{
	let x0u = this.b9l.x8y.v3n.o0o();
  x0u.t6k(this.b9l.p2g, this.b9l.a2y);

  if (this.b9l.k9b)
  {
    for (let g9i of this.b9l.l1h)
    {
      let v3n = g9i.v3n.r1l();
      let l6q = x0u.y5m();
      let a2y = 0;
      for (let u0y of v3n)
      {
        if (a2y == 0)
        {
					let s5b = g9i.c5x() +
						"/" + g9i.t7s;
					u0y.l3z(s5b);
        }
        x0u.v9t(l6q, u0y);
        a2y++;
      }
    }
  }
  else
  {
    if (this.b9l.l1h.length !== 0)
    {
      let g9i = this.b9l.l1h[this.b9l.l1h.length - 1];
      let v3n = g9i.v3n.r1l();
      let l6q = x0u.y5m();
      let a2y = 0;
      for (let u0y of v3n)
      {
				if (a2y == 0)
				{
					let s5b = g9i.c5x() +
						"/" + g9i.t7s;
					u0y.l3z(s5b);
				}
        x0u.v9t(l6q, u0y);
        a2y++;
      }
    }
  }
  this.l4n = x0u.o0o();
  this.f3u.k9b = this.b9l.k9b;
  this.f3u.n5g(this.l4n, 0);
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

i8l()
{
	if (this.l5h)
	{
    this.l5h.n2g = null;
    this.l5h.t3h();
		this.l5h = null;
		this.b9l = new n1y();
  	this.l4n.t6k(this.b9l.p2g,
      this.b9l.a2y);
  	this.e6j();
    this.d7m = false;
    this.a4l();
  }
}

h9g()
{
	return (this.l5h != null);
}

b6j()
{
  return (this.engineMode === h2g.n9f);
}

b9h()
{
	if (this.l5h && !this.b6j())
	{
		this.d7m = !this.d7m;
		this.a4l();
		this.t1y();
	}
}

a4l()
{
	if (this.l5h)
	{
    this.b6h.disabled = false;
    this.b6h.classList.remove('threat-inactive');
		if (this.d7m)
		{
      this.b6h.classList.remove('threat-off');
      this.b6h.classList.add('threat-on');
		}
		else
		{
      this.b6h.classList.remove('threat-on');
      this.b6h.classList.add('threat-off');
		}
	}
	else
	{
    this.b6h.disabled = true;
    this.b6h.classList.add('threat-inactive');
    this.b6h.classList.remove('threat-on');
    this.b6h.classList.add('threat-off');
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

m8o(p3r)
{
	this.p3r = p3r.o0o();
	this.j0x();
}

j0x()
{
	let e4t = this.p3r.v8k.q2s.i1q();
	let r3s = this.p3r.u6y.q2s.i1q();

	let v2w = '';
	if (e4t.length && this.p3r.v8k.o4u)
	{
		v2w = this.p3r.v8k.o4u.toString();
	}
	let n5j = '';
	if (e4t.length && this.p3r.v8k.a5f.length)
	{
		n5j = this.p3r.v8k.a5f.toString();
	}

	let n6a = '';
	if (r3s.length && this.p3r.u6y.o4u)
	{
		n6a = this.p3r.u6y.o4u.toString();
	}
	let x9n = '';
	if (r3s.length && this.p3r.u6y.a5f.length)
	{
		x9n = this.p3r.u6y.a5f.toString();
	}

	let h7h = this.p3r.v8k.q2s.m0f(1);
	let n0j = this.p3r.u6y.q2s.m0f(1);

	let v6z = '';
	let z8a = '';
	if (!this.p3r.v8k.x8d.k2v() &&
		!this.p3r.u6y.x8d.k2v())
	{
		v6z = this.p3r.v8k.x8d.v2k();
		z8a = this.p3r.u6y.x8d.v2k();
	}

	let s5a = e6z(this.p3r.s4a);
	let h6o = this.p3r.h6o.a5f;
	if (!this.p3r.h6o.a5z.k2v())
	{
		h6o += " ";
		h6o += this.p3r.h6o.a5z.g5w.toString();
	}
	let k1w = '';
	if (!this.p3r.u9c.k2v())
	{
		k1w = this.p3r.u9c.toString("dd-mm-yyyy");
	}
	let p0d = '';
	if (!this.p3r.p0d.k2v())
	{
		p0d = '</br>' + '[' + this.p3r.p0d.w5o + ']';
	}

	let n0o = document.getElementById("nota-container"+this.y2n);
	let t9d = n0o.clientHeight;
	let t6x = 200;

  let index = this.y2n;
  let z1q = this.p3r.h6o.z1q;

	let b8p = true;
	if (this.k3x.clientWidth >= 374 && t9d >= t6x)
	{
    let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable scroll\">";
    s +=      "<tr>";
    s +=        "<td class=\"playerPortrait\" colspan=\"3\" rowspan=\"2\">";
    
    s += 				"</td>";
		s +=        "<td class=\"playerWhite\" colspan=\"8\">";
    s +=          "<span class=\"player\">" + e4t + "</span>";
    s += 					"<span class=\"rating\">" + v2w + "</span>";
    s +=          "<br>";
		s += 				  "<span class=\"team\">" + v6z + "</span>";
		s +=        "</td>";
    s += 		  	"<td class=\"result\" colspan=\"2\">";
    s +=          "<span>" + s5a + "</span>";
		s +=        "</td>";
    s +=        "<td class=\"playerBlack\" colspan=\"8\">";
    s +=          "<span class=\"player\">" + r3s + "</span>";
		s +=          "<span class=\"rating\">" + n6a + "</span>";
    s +=          "<br>";
    s +=          "<span class=\"team\">" + z8a + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"playerPortrait\" colspan=\"3\" rowspan=\"2\">";
    
		s +=        "</td>";
    s +=      "</tr>";
    s +=      "<tr>";
		s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
		s +=        "</td>";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
		s +=          "<span>" + n5j + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"tournamentData\" colspan=\"12\">";
    s +=          "<span class=\"tournamentTitle\">" + h6o + "</span>";
    s +=          "<br>";
    s +=          "<span class=\"tournamentPlace\">" + z1q + "</span>";
		s +=          "<span class=\"gameDate\">" + k1w + "</span>";
    s +=          "<span class=\"annotator\">" + p0d + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "<span>" + x9n + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"flagBlack\" colspan=\"2\">";
		s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
		s +=        "</td>";
		s +=      "</tr>";
		s +=    "</table>";
		this.k3x.innerHTML = s;

		
		
		let o6t = Math.trunc(this.k3x.clientWidth / 10);
		if (o6t < 24) o6t = 24;
    
		
		
		
		
		
		
	}
	else if (this.k3x.clientWidth >= 300 && t9d >= t6x)
	{
		
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "<tr>";
    s +=        "<td class=\"playerWhite\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + h7h + "</span>";
    s +=          "<span class=\"rating\">" + v2w + "</span>";
    s +=          "<br>";
		s += 				  "<span class=\"team\">" + v6z + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"result\" colspan=\"2\">";
    s +=          "<span>" + s5a + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"playerBlack\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + n0j + "</span>";
    s +=          "<span class=\"rating\">" + n6a + "</span>";
    s +=          "<br>";
    s +=          "<span class=\"team\">" + z8a + "</span>";
		s +=        "</td>";
    s +=      "</tr>";
    s +=      "<tr>";
    s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "<span>" + n5j + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"tournamentData\" colspan=\"14\">";
    s +=          "<span class=\"tournamentTitle\">" + h6o + "</span>";
    s +=          "<span class=\"tournamentPlace\">" + "</br>" + z1q + "</span>";
    s +=          "<span class=\"gameDate\">" + k1w + "</span>";
		s +=          "<span class=\"annotator\">" + p0d + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "<span>" + x9n + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"flagBlack\" colspan=\"2\">";
    s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=      "</tr>";
    s +=    "</table>";
		this.k3x.innerHTML = s;
	}
	else if (this.k3x.clientWidth >= 280)
	{
		
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "<tr>";
    s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=        "<td class=\"playerWhite\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + h7h + "</span>";
    s +=          "<span class=\"rating\">" + v2w + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"result\" colspan=\"2\">";
    s +=          "<span>" + s5a + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"playerBlack\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + n0j + "</span>";
    s +=          "<span class=\"rating\">" + n6a + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"flagBlack\" colspan=\"2\">";
    s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=      "</tr>";
    s +=    "</table>";
		this.k3x.innerHTML = s;
	}
	else
	{
		
		b8p = false; 
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "<tr>";
    s +=        "<td class=\"playerWhite\" width=\"45%\">";
    s +=          "<span class=\"player\">" + h7h + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"result\" width=\"10%\">";
    s +=          "<span>" + s5a + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"playerBlack\" width=\"45%\">";
    s +=          "<span class=\"player\">" + n0j + "</span>";
    s +=        "</td>";
    s +=      "</tr>";
    s +=    "</table>";
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
    if (this.p3r.v8k.v0e != y2m.j1l)
    {
  		let r1c = document.getElementById("whitePlayerNation"+this.y2n);
	  	r1c.src = "images/flags/" + m6c.toString() +"/" + a0b(this.p3r.v8k.v0e) + ".png";
		  r1c.height = m6c;
  		r1c.width = m6c;
    }
    if (this.p3r.u6y.v0e != y2m.j1l)
    {
  		let n4d = document.getElementById("blackPlayerNation"+this.y2n);
	  	n4d.src = "images/flags/" + m6c.toString() + "/" + a0b(this.p3r.u6y.v0e) + ".png";
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
	this.x8t = new l4v(y2n);
	this.x8t.f3u.l3w = this; 
	this.d7b = new r7g();
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
	this.x8t.f3u.e7g();
}

l2z(w2r, j5a, o5o, x1i)
{
	this.c0g(x1i, o5o);
}

c0g(x1i, o5o)
{
	this.p3r = x1i.g0g.o0o();
	this.m8o();
	this.x8t.f3u.n5g(x1i.v3n, o5o);
}

m8o()
{
	this.x8t.t2u.m8o(this.p3r);
}

k7h(r5b)
{
	this.d5n.m1m(r5b);
  this.j3g();
}

b4j()
{
	if (this.d7b.c5z())
	{
		this.d7b.u8s();
    this.b2e();
	}
	else
	{
		if (!this.x8t.f3u.q0r())
		{
      
			this.d7b.l3w = this; 
			this.d7b.z4b();
			this.x8t.f3u.d2d();
		}
	}
}

a3y(q4c)
{
	this.l9f.z4y(q4c);
}

r6e()
{
	this.l9f.i8l();
}

x8q()
{
	return this.l9f.h9g();
}

j3g()
{
  if (!this.d7b.c5z())
  {
    this.b2e();
  }
}

b2e()
{
	this.l9f.t6k(
		this.x8t.f3u.x1z(),
		this.x8t.f3u.o7x(),
		this.x8t.f3u.i7y(),
		this.x8t.f3u.e7m());
}

}

const t9u =
{
	i3f : 0,
	k5o : 1,
	z0u : 2,
	s6h : 3,
	z7x : 4,
 	n5a : 5,
	s4a : 6,
	v3n : 7,
	g5w : 8,
	event : 9,
	u4x : 10
};

const j5w =
{
	j1l : 0,
	r6n : 1,
	j1c : 2
};

let w4z = 0;
let n8g = 0;
let v1x = 0;
let m7s = 0;
let b6v = 0;
let d0h = 0;
let c1b = 0;
let o9z = 0;

let j1c = false;

function a7h(f, s)
{
	let z2m = f.g0g.v8k.q2s.w5o();
	let a4f = s.g0g.v8k.q2s.w5o();
	if (z2m < a4f)
	{
		return j1c ? -1 : 1;
	}
	if (z2m > a4f)
	{
		return j1c ? 1 : -1;
	}
	z2m = f.g0g.u6y.q2s.w5o();
	a4f = s.g0g.u6y.q2s.w5o();
	if (z2m < a4f)
	{
		return -1;
	}
	if (z2m > a4f)
	{
		return 1;
	}
	return 0;
}

function w8u(f, s)
{
	let z2m = f.g0g.u6y.q2s.w5o();
	let a4f = s.g0g.u6y.q2s.w5o();
	if (z2m < a4f)
	{
		return j1c ? -1 : 1;
	}
	if (z2m > a4f)
	{
		return j1c ? 1 : -1;
	}
	z2m = f.g0g.v8k.q2s.w5o();
	a4f = s.g0g.v8k.q2s.w5o();
	if (z2m < a4f)
	{
		return -1;
	}
	if (z2m > a4f)
	{
		return 1;
	}
	return 0;
}

function y1i(f, s)
{
	let y0l = f.g0g.v8k.o4u - s.g0g.v8k.o4u;
	if (j1c)
	{
		y0l = -y0l;
	}
	if (y0l < 0) return -1;
	if (y0l > 0) return 1;
	y0l = f.g0g.u6y.o4u - s.g0g.u6y.o4u;
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
	let y0l = f.g0g.u6y.o4u - s.g0g.u6y.o4u;
	if (j1c)
	{
		y0l = -y0l;
	}
	if (y0l < 0) return -1;
	if (y0l > 0) return 1;
	y0l = f.g0g.v8k.o4u - s.g0g.v8k.o4u;
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
	let y0l = f.g0g.v8k.v0e - s.g0g.v8k.v0e;
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
	y0l = f.g0g.v8k.v0e - s.g0g.v8k.v0e;
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
	let y0l = f.g0g.s4a - s.g0g.s4a;
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
	let a0h = f.g0g.h6o.a5f;
	let x6d = s.g0g.h6o.a5f;
	if (a0h < x6d)
	{
		return j1c ? -1 : 1;
	}
	if (a0h > x6d)
	{
		return j1c ? 1 : -1;
	}
	let y0l = f.g0g.h6o.a5z.u9c() - s.g0g.h6o.a5z.u9c();
	if (j1c)
	{
		y0l = -y0l;
	}
	if (y0l < 0) return -1;
	if (y0l > 0) return 1;
	y0l = f.g0g.u4x - s.g0g.u4x;
	if (y0l < 0) return -1;
	if (y0l > 0) return 1;
	y0l = f.g0g.z5p - s.g0g.z5p;
	if (y0l < 0) return -1;
	if (y0l > 0) return 1;
	return a7h(f, s);
}

function k6i(f, s)
{
	let y0l = s.g0g.u4x - f.g0g.u4x;
	if (j1c)
	{
		y0l = -y0l;
	}
	if (y0l < 0) return -1;
	if (y0l > 0) return 1;
	y0l = s.g0g.z5p - f.g0g.z5p;
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
	let y0l = s.z0p - f.z0p;
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
	this.l1i = null;
	this.r4r = null;
	this.j5b = null;
	this.y4a = [];
	this.e4p = [];
	this.d9i = -1;
	this.t4r = j5w.j1l;
	this.p5a = 0;
  this.d0x = null;
}

a9n()
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
	this.j5b.innerHTML = s;
	this.y4a = this.j5b.getElementsByTagName("TH");
	let y2n = this.y2n;

 	this.y4a[t9u.i3f].onclick = this.s4t.bind(this);
	this.y4a[t9u.k5o].onclick = this.f6o.bind(this);
  this.y4a[t9u.z0u].onclick = this.f7y.bind(this);
	this.y4a[t9u.s6h].onclick = this.s4t.bind(this);
	this.y4a[t9u.z7x].onclick = this.p6n.bind(this);
  this.y4a[t9u.n5a].onclick = this.u6b.bind(this);
	this.y4a[t9u.s4a].onclick = this.y0m.bind(this);
	this.y4a[t9u.v3n].onclick = this.k5l.bind(this);
	this.y4a[t9u.g5w].onclick = this.q0u.bind(this);
	this.y4a[t9u.event].onclick = this.b3k.bind(this);
	this.y4a[t9u.u4x].onclick = this.d7h.bind(this);
}

h2p(e5b)
{
	this.e5b = e5b;
	this.l4h();
}

p3l()
{
	this.q7a("grid-player");
	this.q7a("grid-rating");
 	this.q7a("grid-flag");
	this.q7a("grid-result");
	this.q7a("grid-moves");
	this.q7a("grid-year");
	this.q7a("grid-event");
	this.q7a("grid-round");
}

d6i()
{
	this.y3m("grid-player", w4z);
	this.y3m("grid-rating", n8g);
 	this.y3m("grid-flag", o9z);
	this.y3m("grid-result", v1x);
	this.y3m("grid-moves", m7s);
	this.y3m("grid-year", b6v);
	this.y3m("grid-event", d0h);
	this.y3m("grid-round", c1b);

}

q7a(r3m)
{
	let q5a = this.l1i.getElementsByClassName(r3m);
	for (let i = 0; i < q5a.length; i++) {
		q5a[i].style.display = "none";
	}
}

k9g(r3m)
{
	let q5a = this.l1i.getElementsByClassName(r3m);
	for (let i = 0; i < q5a.length; i++) {
		q5a[i].style.display = "table-cell";
	}
}

y3m(r3m, width)
{
	let q5a = this.l1i.getElementsByClassName(r3m);
	for (let i = 0; i < q5a.length; i++) {
		q5a[i].style.width = (width) + "px";
	}
}

l4h()
{
	this.p5a = this.l1i.clientWidth;
	this.p5a -= 17;
	if (this.p5a < 100)
	{
		this.p5a = 100;
	}
	w4z = 200;
	n8g = 52;
	v1x = 34;
	m7s = 50;
	b6v = 52;
	d0h = 200;
	c1b = 50;
  o9z = 30;

 
	let q9k = document.getElementsByClassName("tdreplay")[0];
	if (q9k.clientWidth <= v8e)
	{
		let e0v = 0.7;
		w4z *= e0v;
		n8g *= e0v;
		v1x *= e0v;
		m7s *= e0v;
		b6v *= e0v;
		d0h *= e0v;
		c1b *= e0v;
	}
	this.c4e();
}

d7c()
{
	this.p3l();
	this.d6i();

  let u5a = 2.8;
  let k6a = 2.8;
  let h0u = 17;
	if (this.p5a <= 400)
	{
		this.k9g("grid-player");
		this.k9g("grid-result");
    this.k9g("grid-year");
		this.k9g("grid-event");
    let r3n = 5 * (u5a + k6a);
		let t0j = v1x + b6v;
		let o9l = Math.trunc((this.p5a - t0j - r3n - h0u) / 3);
		this.y3m("grid-player", o9l);
		this.y3m("grid-event", o9l);
	}
	else if (this.p5a <= 580)
	{
		this.k9g("grid-player");
		this.k9g("grid-rating");
		this.k9g("grid-result");
		this.k9g("grid-year");
		this.k9g("grid-event");
    let r3n = 7 * (u5a + k6a);
		let t0j = 2 * n8g + v1x + b6v;
		let o9l = Math.trunc((this.p5a - t0j - r3n - h0u) / 3);
		this.y3m("grid-player", o9l);
		this.y3m("grid-event", o9l);
	}
	else
	{
		this.k9g("grid-player");
		this.k9g("grid-rating");
    this.k9g("grid-flag");
		this.k9g("grid-result");
		this.k9g("grid-moves");
		this.k9g("grid-year");
		this.k9g("grid-event");
		this.k9g("grid-round");
    let r3n = 11 * (u5a + k6a);
		let t0j = 2 * n8g + 2 * o9z + v1x + m7s + b6v + c1b;
		let o9l = Math.trunc((this.p5a - t0j - r3n - h0u) / 3);
		this.y3m("grid-player", o9l);
		this.y3m("grid-event", o9l);
	}
}

c4e()
{
	let m6c = 16;
	let s = '';
  s += "<tbody id=\"gameList" + this.y2n + "\">"; 
	for (const x1i of this.e5b)
	{
		s += "<tr class=\"grid-row\">";
		s += "<td class=\"grid-cell grid-player\">";
		s += x1i.g0g.v8k.q2s.f1i();
		s += "</td>";
		s += "<td class=\"grid-cell grid-rating\">";
		if (x1i.g0g.v8k.o4u)
		{
			s += x1i.g0g.v8k.o4u;
		}
		s += "</td>";
   	s += "<td class=\"grid-cell grid-flag\">";
		if (x1i.g0g.v8k.v0e != y2m.j1l)
		{
      let t1c = "images/flags/" + m6c.toString() + "/" + a0b(x1i.g0g.v8k.v0e) + ".png";
  		s += "<span>";
      s += "<img src=\"";
      s += t1c;
      s += "\" height=\"16\"";
      s += ">";
   		s += "</span>";
		}
		s += "</td>";
		s += "<td class=\"grid-cell grid-player\">";
		s += x1i.g0g.u6y.q2s.f1i();
		s += "</td>";
		s += "<td class=\"grid-cell grid-rating\">";
		if (x1i.g0g.u6y.o4u)
		{
			s += x1i.g0g.u6y.o4u;
		}
		s += "</td>";
		s += "<td class=\"grid-cell grid-flag\">";
		if (x1i.g0g.u6y.v0e != y2m.j1l)
		{
      let t1c = "images/flags/" + m6c.toString() + "/" + a0b(x1i.g0g.u6y.v0e) + ".png";
  		s += "<span>";
      s += "<img src=\"";
      s += t1c;
      s += "\" height=\"16\"";
      s += ">";
   		s += "</span>";
		}
		s += "</td>";
		s += "<td class=\"grid-cell grid-result\">";
		s += e6z(x1i.g0g.s4a);
		s += "</td>";
		s += "<td class=\"grid-cell grid-moves\">";
		s += x1i.z0p;
		s += "</td>";
		s += "<td class=\"grid-cell grid-year\">";
		s += x1i.g0g.u9c.toString("yyyy");
		s += "</td>";
		s += "<td class=\"grid-cell grid-event\">";
		s += x1i.g0g.h6o.a5f;
		s += "</td>";
		s += "<td class=\"grid-cell grid-round\">";
		s += x1i.g0g.e9m();
		s += "</td>";
		s += "</tr>";
	}
  s += "</tbody>";
	this.r4r.innerHTML = s;

  let d1x = document.getElementById('gameList' + this.y2n);
  d1x.addEventListener('click', this.h1t.bind(this));

	this.d7c();
}

k2y(s4y)
{
	if (s4y != this.d9i)
	{
		this.d9i = s4y;
		this.t4r = j5w.r6n;
	}
	else
	{
		if (this.t4r == j5w.j1l)
		{
			this.t4r = j5w.r6n;
		}
		else if (this.t4r == j5w.r6n)
		{
			this.t4r = j5w.j1c;
		}
		else if (this.t4r == j5w.j1c)
		{
			this.t4r = j5w.r6n;
		}
	}
	j1c = (this.t4r == j5w.j1c);

	for (const w5k of this.y4a)
	{
		let s = w5k.c4m;
		let c5t = s.replace(" grid-header-sort grid-header-sort-desc", "");
		let u6z = c5t.replace(" grid-header-sort grid-header-sort-asc", "");
		w5k.c4m = u6z;
	}
	let g5p = this.y4a[this.d9i];
	if (this.t4r == j5w.j1c)
	{
		g5p.c4m = g5p.c4m + " grid-header-sort grid-header-sort-desc";
	}
	else
	{
		g5p.c4m = g5p.c4m + " grid-header-sort grid-header-sort-asc";
	}
}

s4t(event)
{
	this.k2y(t9u.i3f);
	this.e5b.sort(a7h);
	this.c4e();
}

f6o(event)
{
	this.k2y(t9u.k5o);
	this.e5b.sort(y1i);
	this.c4e();
}

f7y(event)
{
	this.k2y(t9u.z0u);
	this.e5b.sort(f2g);
	this.c4e();
}

p2p(event)
{
	this.k2y(t9u.s6h);
	this.e5b.sort(w8u);
	this.c4e();
}

p6n(event)
{
	this.k2y(t9u.z7x);
	this.e5b.sort(v8u);
	this.c4e();
}

u6b(event)
{
	this.k2y(t9u.n5a);
	this.e5b.sort(k9v);
	this.c4e();
}

y0m(event)
{
	this.k2y(t9u.s4a);
	this.e5b.sort(v0d);
	this.c4e();
}

q0u(event)
{
	this.k2y(t9u.g5w);
	this.e5b.sort(o5y);
	this.c4e();
}

b3k(event)
{
	this.k2y(t9u.event);
	this.e5b.sort(s7x);
	this.c4e();
}

d7h(event)
{
	this.k2y(t9u.u4x);
	this.e5b.sort(k6i);
	this.c4e();
}

k5l(event)
{
	this.k2y(t9u.v3n);
	this.e5b.sort(p5j);
	this.c4e();
}

h1t(event)
{
  const clickedRow = event.target.closest('tr');
  if (!clickedRow) return;
  const index = clickedRow.rowIndex;
  if (this.d0x)
  {
    this.d0x(this, index);
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
	this.p2g = new z4m();
	this.z1j = new z4m();
	this.c8h = false;
	this.q3k = 0;
	this.p4e = 0;
	this.o1r = [];
}

}

var tooltip = null;

class u9p
{

constructor(y2n)
{
	this.y2n = y2n;
	this.q4k = new e5q();
	this.l3w = null;
	this.q7w = new s3i();
	this.i3l = null;
	this.e2r = [];
	this.c9y = [];
  this.z6a = [];
  this.f8a = [];
	this.z8c = -1;
	this.x2h = new j6p();
  this.t0s = null;
	this.f0i = true;
	this.c0j = false;
	this.x0d = [];
	this.q7n = 0;
  this.d2t = true;
  this.b7c = false;
	this.f8o = false;
	this.r5n = true;
  this.k9b = false;
}

n5g(b1e, o5o)
{
	this.q4k = b1e.o0o();
  this.q4k.i3m();
	this.t0s = this.q4k.v5g(o5o);
	this.l2z();
}

h1j(k0m)
{
  this.n9r(this.z6a[k0m]);
}

l2z()
{
	this.f2o();
	this.d2d();
  this.k6q(this.q4k.a9r(this.t0s));
}

f2o()
{
	let j7i = new c9o();
  j7i.a1f(this.d2t);
	j7i.w8l(this.k9b);
  /*
	j7i.setOneLine(this.k9b);
  */
	j7i.q8i(this.f8o);
	j7i.s4l(this.r5n);
	j7i.e4m(this.q4k);

  this.i3l.innerHTML = j7i.j8u.p4p;
  this.e2r = this.i3l.getElementsByClassName("tdmove");
  this.c9y = this.i3l.getElementsByClassName("tdcomment");

	this.m3d("tdmove");
	this.m3d("tdcomment");
	this.m3d("tddia");
	this.m3d("tdmedal");
  this.m3d("tdcolors");

  this.c6n("tdmove");

	this.n8h();
	this.t1a();
}

m3d(k5h)
{
	let y2n = this.y2n;
	let k8u = this.i3l.getElementsByClassName(k5h);
	for (const q2j of k8u)
	{
    let o5o = q2j.getAttribute('movenr');
    q2j.onclick = this.g3w.bind(this, o5o);
	}
}

c6n(k5h)
{
	let y2n = this.y2n;
	let k8u = this.i3l.getElementsByClassName(k5h);
	for (const q2j of k8u)
	{
    let o5o = q2j.getAttribute('movenr');
    q2j.onmouseover = this.m9n.bind(this, o5o);
    q2j.onmouseleave = this.e2n.bind(this, o5o);
	}
}

e7g()
{
	this.n8h();
}

n8h()
{
	let h5w = this.i3l.getElementsByClassName("tddia");
	for (const d6h of h5w)
	{
		let m6m = new s0a();
		m6m.k3d = d6h.getElementsByTagName("canvas")[0];
		let c8n = this.x2h.f7a();
		m6m.k3d.width = c8n;
		m6m.k3d.height = c8n;
		m6m.e5y(this.x2h);
		let l6q = this.q4k.v5g(d6h.getAttribute('movenr'));
    m6m.t6k(this.q4k.p2g(l6q));
    if (l6q.u0y)
    {
  		m6m.c3o(l6q.u0y.e6v());
	  	m6m.k1n(l6q.u0y.a7a());
    }
    else
    {
   		m6m.c3o(this.q4k.e2l());
	  	m6m.k1n(this.q4k.m9w());
    }
		m6m.y8o();
	}
}

t1a()
{
	let g3s = this.i3l.getElementsByClassName("tdmedal");
	for (const a0u of g3s)
	{
		let k3d = a0u.getElementsByTagName("canvas")[0];
		k3d.width = 40;
		k3d.height = 16;
		let v5c = k3d.getContext('2d');
		let rect = new k0x();
		rect.j3a(40);
		rect.u2s(16);
		let l6q = this.q4k.v5g(a0u.getAttribute('movenr'));
    if (l6q.u0y)
    {
  		t1a(v5c, rect, l6q.u0y.n4n());
    }
    else
    {
  		t1a(v5c, rect, this.q4k.m1r());
    }
	}
}

d2d()
{
	let r5b = new e1x();
	r5b.x1z = this.q4k.x1z();
  r5b.t1j = this.q4k.p2g(this.t0s);
  if (this.s4j())
  {
    r5b.e6v = this.q4k.e2l();
	  r5b.a7a = this.q4k.m9w();
  }
  else
  {
  	r5b.e6v = this.t0s.u0y.e6v();
	  r5b.a7a = this.t0s.u0y.a7a();
  }
  
	if (this.q0r())
	{
		r5b.l8b = new q5w();
	}
	else
	{
    let k5r = this.t0s.o0o();
		this.q4k.r9f(k5r);
		r5b.l8b = k5r.u0y.z2g().o0o();
	}
  
 	if (!this.s4j())
	{
		r5b.p3p = this.t0s.u0y.z2g();
	}
	r5b.v8t = this.v8t();
	r5b.r6v = this.r6v();
	r5b.x9d = this.x9d();
	r5b.z9w = 0; 
  r5b.g6w = this.q4k.g6w(this.t0s);
	if (this.l3w)
	{
		this.l3w.k7h(r5b);
	}
}

i4x(t9z)
{
	this.t0s = this.q4k.v5g(t9z);
	this.d2d();
}

z5m(q4r)
{
	switch (q4r)
	{
		case c2u:
		case x5i:
		case b8t:
			this.i0z();
			break;
		case r3o:
		case w4t:
		case g6j:
			this.a9d();
			break;
		case v9v:
		case e9u:
		case g5x:
			this.w6a();
			break;
		case e0y:
		case c1t:
		case q7j:
			this.n8y();
			break;
		case x2n:
			break;
		case g1r:
			break;
	}
}

c9p()
{
  if (this.t0s.u4i)
  {
    this.k6q(this.t0s.u4i.c1d);
  }
  else
  {
    this.k6q(0);
  }
}

x5k()
{
	this.c9p();
	this.d2d();
}

r6v()
{
	return !this.s4j();
}

s4j()
{
	return this.q4k.s4j(this.t0s);
}

q0r()
{
	return this.q4k.q0r(this.t0s);
}

v8t()
{
	return this.q4k.v8t(this.t0s);
}

l8b(g0q)
{
	if (this.q0r())
	{
		return null;
	}
	else
	{
    let k5r = this.t0s.o0o();
		this.q4k.z0a(k5r, g0q);
		return k5r.u0y;
	}
}

a9d()
{
	if (this.r6v())
	{
		this.q4k.y9l(this.t0s);
		this.x5k();
	}
}

x9d()
{
	return !this.q0r();
}

i0z()
{
	if (this.x9d())
	{
		this.x0b(0);
	}
}

x0b(index)
{
	let p7t = this.q4k.c2k(this.t0s);
	if (index >= 0 && index < p7t)
	{
		this.q4k.z0a(this.t0s, index);
		this.x5k();
	}
}

n8y()
{
	if (this.x9d())
	{
		this.q4k.v6b(this.t0s);
		this.x5k();
	}
}

w6a()
{
	if (this.r6v())
	{
		this.t0s = this.q4k.y5m();
		this.x5k();
	}
}

v5r()
{
	if (this.f0i)
	{
		this.x0l();
	}
	else
	{
		this.t0l();
	}
}

t8m()
{
	if (this.c0j)
	{
		this.c0j = false;
		this.l3w.d5n.m6m.q6q();
		this.d2d();
	}
	else
	{
		this.d2d();
	}
}


t0l()
{
	if (this.q0r())
	{
		this.d2d();
		return;
	}
  if (chess)
  {
  	this.x0b(0);
    return;
  }

  
 	let u0y = this.l8b(0);
  if (!u0y.p4e())
 	{
  	this.x0b(0);
	  return;
 	}

  
	let i4c = false;
	if (!this.q7w.c8h)
	{
		i4c = true;
	}
	else
	{
		i4c = false;
		if (this.q7w.q3k < this.q7w.p4e)
		{
			if (this.q7w.z1j.i5u(this.q7w.p2g))
			{
				i4c = true;
			}
		}
	}
	if (i4c)
	{
		this.q7w.p2g = this.q4k.p2g(this.t0s);
		this.q7w.z1j = this.q4k.p2g(this.t0s);
		this.q7w.c8h = true;
		this.q7w.q3k = 0;
		this.q7w.o1r.length = 0;
		this.q7w.o1r.push(u0y.b8x()); 
		this.q7w.p4e = u0y.p4e();
		if (this.q7w.p4e > 1)
		{
			let e7e = f7p(this.q7w.z1j, u0y.z2g());
			for (let i = 0; i < this.q7w.p4e - 1; i++)
			{
				this.q7w.o1r.push(e7e[i]);
			}
		}
		this.q7w.o1r.push(u0y.v1o());
	}
	if (this.q7w.q3k < this.q7w.p4e)
	{
		let b7t = u0y.b7t();
		let p1d = this.q7w.o1r[this.q7w.q3k];
		let v1o = this.q7w.o1r[this.q7w.q3k + 1];
		this.q7w.z1j.u6i(p1d, o8u.k2v);
		this.q7w.z1j.u6i(v1o, b7t);
		this.q7w.p2g = this.q7w.z1j.o0o();
		this.q7w.q3k++;
		let r5b = new e1x();
		r5b.t1j = this.q7w.z1j.o0o();
		r5b.r6v = this.r6v();
		r5b.x9d = this.x9d();
		if (this.l3w)
		{
			this.l3w.k7h(r5b);
		}
	}
	else
	{
		this.q7w.c8h = false;
		this.x0b(0);
	}
}



x0l()
{
	if (this.c0j)
	{
		let t1e = this.l3w.d5n.m6m.l2q();
		if (t1e)
		{
			if (this.q7n < this.x0d.length - 1)
			{
				this.l3w.d5n.m6m.e3i(this.x0d[this.q7n],
					this.x0d[this.q7n+1], true);
				this.q7n++;
			}
			else
			{
				this.c0j = false;
				this.x0b(0);
			}
		}
		return;
	}

	if (this.q0r())
	{
		this.d2d();
		return;
	}

	this.x0d.length = 0;
	let u0y = this.l8b(0);
	let p4e = u0y.p4e();
	if (p4e == 0)
	{
		this.x0d.push(u0y.b8x()); 
		this.x0d.push(u0y.c2m());
	}
	else
	{
		this.x0d.push(u0y.b8x());
		if (p4e > 1)
		{
      let p2g = this.q4k.p2g(this.t0s);
      let e7e = f7p(p2g, u0y.z2g());
			for (let i = 0; i < p4e - 1; i++)
			{
				this.x0d.push(e7e[i]);
			}
		}
		this.x0d.push(u0y.c2m());
	}

	this.l3w.d5n.m6m.e3i(this.x0d[0],
		this.x0d[1], p4e > 0);
	this.q7n = 1;
	this.c0j = true;
}

f5x(h2v)
{
	for (const m of this.e2r)
	{
		if (m.getAttribute('movenr') == h2v)
		{
			return m;
		}
	}
	return null;
}

u9m(h2v)
{
	let h0e = [];
	for (const w2m of this.c9y)
	{
		if (w2m.getAttribute('movenr') == h2v)
		{
			h0e.push(w2m);
		}
	}
	return h0e;
}

n9r(i4k)
{
	let r7x = i4k.offsetTop;
	let z8j = i4k.scrollHeight;

	let i2y = this.i3l.offsetTop;
	let j7f = this.i3l.scrollTop;
	let t1z = this.i3l.clientHeight;
	let t3d = this.i3l.scrollHeight;
	let u9n = r7x - i2y;
	if (u9n >= j7f && u9n + z8j <= j7f + t1z - 1)
	{
		
	}
	else
	{
		
		let top = u9n - (t1z / 2);
		if (top < 0) top = 0;
		this.i3l.scrollTop = top;
	}
}

q8v(y8v, k1h)
{
	let h4t = y8v;
	while (h4t.p7w)
	{
		h4t = h4t.p7w;
	}
 	while (h4t)
	{
    if (this.q4k.r2e(h4t.c1d) == false)
    {
 	  	let i4k = this.f5x(h4t.c1d);
  	  if (i4k)
 		  {
  		  i4k.classList.add(k1h);
 	  	}
    }
    h4t = h4t.j9d;
  }
}

k6q(o5o)
{
  
 	for (const u0y of this.e2r)
	{
 		u0y.classList.remove('tdcurline');
    u0y.classList.remove('tdcurnode1');
	}
 	for (const w2m of this.c9y)
	{
 		w2m.classList.remove('tdcurline');
	}

  
	if (this.z8c >= 0)
	{
		let i4k = this.f5x(this.z8c);
		if (i4k)
		{
			i4k.classList.remove('tdcurmove');
		}
	}

  
  let e9k = true;
  let f2x = this.q4k.k1u(this.t0s);
 	for (const y8v of f2x)
	{
    if (y8v.p7w && e9k)
		{
		  this.q8v(y8v, 'tdcurnode1');
      e9k = false;
    }
    else
    {
      if (this.q4k.r2e(y8v.c1d) == false)
      {
   	  	let m6o = this.f5x(y8v.c1d);
	  	  if (m6o)
  		  {
	  		  m6o.classList.add('tdcurline');
  	  	}
      }
    }
	}

  
	let i4k = this.f5x(o5o);
	if (i4k)
	{
    i4k.classList.remove('tdcurline');
		i4k.classList.add('tdcurmove');
		this.n9r(i4k);
	}
	this.z8c = o5o;
}

e1j()
{
	let u0y = this.f5x(this.z8c);
	if (!u0y) return;
	let j0t = u0y.offsetTop;
	let x1c = null;
	let m9d = -1;
	for (const m of this.e2r)
	{
		if (m.offsetTop < j0t)
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
		if (this.e2r.length)
		{
			this.t2z(this.e2r[0].getAttribute('movenr'));
		}
	}
}

l9v()
{
	let u0y = this.f5x(this.z8c);
	if (!u0y)
	{
		this.i0z();
		return;
	}
	let j0t = u0y.offsetTop;
	for (const m of this.e2r)
	{
		if (m.offsetTop > j0t)
		{
			this.t2z(m.getAttribute('movenr'));
			return;
		}
	}
	if (this.e2r.length)
	{
		this.t2z(this.e2r[this.e2r.length - 1].getAttribute('movenr'));
	}
}

t2z(t9z)
{
  
  
  
  
  if (this.t0s.u4i)
  {
    if (this.t0s.u4i.c1d == t9z)
    {
      return;
    }
  }
  else
  {
    if (t9z == 0)
    {
      return;
    }
  }
	
  this.i4x(t9z);
  this.k6q(t9z);
	
}

a9r()
{
	return this.q4k.a9r(this.t0s);
}

e5y(x2h)
{
  this.x2h = x2h.o0o();
	this.x2h.m2p = 0;
	this.x2h.u9e = 0;
	this.x2h.s0p = 32;
  this.x2h.t2a = 2;
 	this.x2h.c5v = false;
}

x1z()
{
	return this.q4k.x1z();
}

o7x()
{
	return this.q4k.o7x();
}

i7y()
{
	return this.q4k.i7y(this.t0s);
}

e7m()
{
	return this.q4k.e7m();
}

g3w(o5o, event)
{
  this.t2z(o5o);
}

m9n(o5o, event)
{
  if (!this.b7c) return;

  if (!tooltip)
  {
    tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    document.body.appendChild(tooltip);
  }

  const q2j = event.currentTarget; 
  const rect = q2j.getBoundingClientRect();
  console.log(`Rect.Left: ${rect.left}`);
  console.log(`Rect.Top: ${rect.top}`);
  let q8f = rect.left;
  let m3e = rect.top + rect.height;

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
	let l3u = this.x2h.f7a();

  if (q8f + l3u > viewportWidth)
  {
    q8f = viewportWidth - l3u - 5;
  }
  if (q8f < 5)
  {
    q8f = 5;
  }
  if (m3e + l3u > viewportHeight)
  {
    m3e = viewportHeight - l3u - 5;
  }
  if (m3e < 5)
  {
    m3e = 5;
  }

  let l6q = this.q4k.v5g(o5o);
  let p2g = this.q4k.p2g(l6q);
  tooltip.innerHTML = this.o5c(p2g);

  tooltip.style.left = `${tooltipX}px`;
  tooltip.style.top = `${tooltipY}px`;
  tooltip.classList.add('visible');
}

e2n(o5o, event)
{
  if (!this.b7c) return;
  tooltip.classList.remove('visible');
}

o5c(p2g)
{
  let m6m = new s0a();
  const tempCanvas = document.createElement('canvas');
	m6m.k3d = tempCanvas;
	let c8n = this.x2h.f7a();
	m6m.k3d.width = c8n;
	m6m.k3d.height = c8n;
	m6m.e5y(this.x2h);
  m6m.t6k(p2g);
  m6m.y8o();
  const imageDataURL = tempCanvas.toDataURL('image/png');
  return `<img src="${imageDataURL}" alt="Chess Position" width="${boardSize}" height="${boardSize}">`;
}

}

class l5s
{

constructor()
{
	this.e3h = 15;
  this.w2k = true;
 	this.y1r = true;
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
  this.f3u = new u9p(y2n);
}

}

class r7g
{

constructor()
{
	this.p6f = false;
	this.l3w = null;
	this.z2z = null;
	this.a1t = 6;
	this.c0p = null;
	this.e2e = null;
	this.d1y = null;
	this.x1d = null;
	this.h4o = null;
	this.u5z = false;
}

z4b()
{
	this.p6f = false;
	this.s5h();
	this.c0p.classList.replace('autoPlay', 'autoStop');
	this.x1d.style.display = 'none';
	this.h4o.style.display = 'none';
	this.e2e.style.display = 'inline-block';
	this.d1y.style.display = 'inline-block';
	this.p0r();
	this.l3w.d5n.b3m = false;
}

u8s()
{
	if (this.z2z)
	{
		clearInterval(this.z2z);
		this.z2z = null;
		this.c0p.classList.replace('autoStop', 'autoPlay');
		this.x1d.style.display = 'inline-block';
		this.h4o.style.display = 'inline-block';
		this.e2e.style.display = 'none';
		this.d1y.style.display = 'none';
		this.l3w.d5n.b3m = true; 
		this.l3w.x8t.f3u.t8m();
	}
}

s5h()
{
	let y2n = this.l3w.y2n;
	this.z2z = setInterval(function(){ v7r(y2n); },
		this.l3w.x8t.f3u.f0i ? this.a1t * 2 : this.a1t * 100);
}

c5z()
{
	return this.z2z != null;
}

r6v()
{
	return !this.l3w.x8t.f3u.s4j();
}

x9d()
{
	return !this.l3w.x8t.f3u.q0r();
}

s4u()
{
	if (this.u5z)
	{
		return;
	}
	else
	{
		this.u5z = true;
	}
	if (!this.x9d())
	{
		this.u8s();
	}
	else
	{
		this.l3w.x8t.f3u.v5r();
	}
	this.u5z = false;
}

e5p()
{
	if (this.z2z)
	{
		if (this.a1t < 50)
		{
			this.a1t++;
			clearInterval(this.z2z);
			this.s5h();
			this.p0r();
		}
	}
}

j6s()
{
	if (this.z2z)
	{
		if (this.a1t > 1)
		{
			this.a1t--;
			clearInterval(this.z2z);
			this.s5h();
			this.p0r();
		}
	}
}

p0r()
{
	n4z(this.e2e, this.a1t < 50);
	n4z(this.d1y, this.a1t > 1);
}

}

let v9m = null;
let q3z = 0;
let a6k = null;

class b9s
{

constructor()
{
	this.index = 0;
	this.f4x = '';
	this.q9k = null;
	this.u2b = false;
	this.l3w = null;
	this.z9p = null;
  this.e5b = [];
	this.z1d = 0;
  this.z4x = 0;

	this.d6x = null;
	this.m7j = null;
	this.left = null;
	this.h7r = null;
	this.b8h = null;
	this.f0d = null;
	this.y7m = null;
	this.z8u = null;
	this.m4z = null;
	this.o0n = null;
	this.u0k = null;
 	this.p7l = null;
 	this.g0c = null;
	this.e3o = null;
	this.x1d = null;
	this.e2e = null;
	this.c0p = null;
	this.h4o = null;
	this.d1y = null;
	this.r3g = null;
 	this.h5j = null;
  this.k8g = null;
	this.g4e = null;
  this.z3n = null;
	this.g5g = null;
	this.u3t = null;
	this.l1i = null;
	this.v4u = null;
	this.m1l = null;
	this.s5m = null;
  this.d8l = null;
  this.r5q = null;
	this.f5c = null;
	this.q4s = null;
	this.v4p = null;
	this.a4b = null;
	this.d8s = null;

	this.g9l = null;
	this.o0q = null;
	this.t3v = null;
	this.h7d = null;

  this.z9z = null;
	this.d0n = null;
	this.a1e = null;
  this.f6t = null;

  this.g5c = null;

  
  this.settingsDialog = null;
  this.w8t = null;
  this.r0q = null;
  this.g7g = null;
  this.h2n = null;
  this.e2q = null;

  
}

l0g(index, q9k, f4x)
{
	this.index = index;
	this.q9k = q9k;
	this.f4x = f4x;
	q9k.innerHTML = '';
	q9k.id = "replay";

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

  q9k.innerHTML = s;

	this.d6x = document.getElementById("rootParent"+index);
	this.m7j = document.getElementById("root"+index);
	this.left = document.getElementById("left"+index);
	this.h7r = document.getElementById("leftContainer"+index);
	this.b8h = document.getElementById("leftNest"+index);
	this.f0d = document.getElementById("leftNorth"+index);
	this.y7m = document.getElementById("boardHolder"+index);
	this.z8u = document.getElementById("boardPanel"+index);
	this.m4z = document.getElementById("boardCanvas"+index);
	this.o0n = document.getElementById("belowBoard"+index);
	this.u0k = document.getElementById("replayPanel"+index);
 	this.p7l = document.getElementById("goToPrevious"+index);
 	this.g0c = document.getElementById("goToNext"+index);
	this.e3o = document.getElementById("goToBegin"+index);
	this.x1d = document.getElementById("playBackward"+index);
	this.e2e = document.getElementById("playSlower"+index);
	this.c0p = document.getElementById("autoPlay"+index);
	this.h4o = document.getElementById("playForward"+index);
	this.d1y = document.getElementById("playFaster"+index);
	this.r3g = document.getElementById("goToEnd"+index);
  this.h5j = document.getElementById("flipBoard"+index);
  this.k8g = document.getElementById("download"+index);
	this.g4e = document.getElementById("showGameList"+index);
  this.z3n = document.getElementById("settings"+index);
	this.g5g = document.getElementById("leftSouth"+index);
	this.u3t = document.getElementById("leftSouthNest"+index);
	this.l1i = document.getElementById("listParent"+index);
	this.v4u = document.getElementById("listHeader"+index);
	this.m1l = document.getElementById("listHeaderTable"+index);
	this.s5m = document.getElementById("listBody"+index);
  this.d8l = document.getElementById("list-button-container"+index);
  this.r5q = document.getElementById("hideGameList"+index);
	this.f5c = document.getElementById("gameList"+index);
	this.q4s = document.getElementById("right"+index);
	this.v4p = document.getElementById("rightNest"+index);
	this.a4b = document.getElementById("rightNorth"+index);
	this.d8s = document.getElementById("rightSouth"+index);

  
  if (!chess)
  {
    this.a4b.style.height = "100%";
   	this.d8s.style.display = 'none';
  }

	this.g9l = document.getElementById("nota-container"+index);
  this.g9l.style.e3h = y9m.e3h + 'px';
	this.o0q = document.getElementById("nota-header-container"+index);
	this.t3v = document.getElementById("headerPanel"+index);
	this.h7d = document.getElementById("movesPanel"+index);

	this.z9z = document.getElementById("enota-container"+index);
  this.z9z.style.e3h = y9m.e3h + 'px';
	this.d0n = document.getElementById("enota-header-container"+index);
	this.a1e = document.getElementById("eheaderPanel"+index);
	this.f6t = document.getElementById("emovesPanel"+index);

  this.g5c = document.getElementById("startEngine"+index);
}

a9n()
{
	this.q9k.style.display = 'block';
	this.e2e.style.display = 'none';
	this.d1y.style.display = 'none';
	this.l1i.style.display = 'none';

	this.u2b = false;
	if (this.q9k.clientWidth <= v8e)
	{
		this.y0v();
		this.u2b = true;
	}
	else
	{
		this.p1n();
		this.h0p();
	}
  this.d2w();
	let y2n = this.index;

	this.e3o.onclick = this.q0z.bind(this);
	this.x1d.onclick = this.a9d.bind(this);
	this.e2e.onclick = this.e5p.bind(this);
	this.c0p.onclick = this.s3e.bind(this);
	this.d1y.onclick = this.j6s.bind(this);
	this.h4o.onclick = this.i0z.bind(this);
	this.r3g.onclick = this.w5u.bind(this);
  this.p7l.onclick = this.u0j.bind(this);
  this.g0c.onclick = this.v5q.bind(this);
  this.h5j.onclick = this.h2l.bind(this);
 	this.k8g.onclick = this.a3c.bind(this);
	this.g4e.onclick = this.h1q.bind(this);
 	this.r5q.onclick = this.d2r.bind(this);

  this.z3n.addEventListener('click', async () => {
    await this.onSettingsClick();
  });

 	this.g5c.onchange = this.w3q.bind(this);

	this.l3w = new j0n(this.index);
	this.l3w.d5n.m6m.y7q(this.m4z);
	this.l3w.d5n.z8u = this.z8u;
  this.l3w.d5n.e5y(z1t);
	this.l3w.x8t.t2u.k3x = this.t3v;
	this.l3w.x8t.f3u.i3l = this.h7d;
  this.l3w.x8t.f3u.e5y(z1t);
	this.l3w.d7b.c0p = this.c0p;
	this.l3w.d7b.e2e = this.e2e;
	this.l3w.d7b.d1y = this.d1y;
	this.l3w.d7b.x1d = this.x1d;
	this.l3w.d7b.h4o = this.h4o;
 	this.l3w.l9f.f3u.i3l = this.f6t;
  this.l3w.l9f.f3u.e5y(z1t);

  this.l3w.l9f.z3n.addEventListener('click', async () => {
    await this.onEngineSettingsClick();
  });

	this.z9p = new b2a(this.index);
	this.z9p.l1i = this.l1i;
	this.z9p.r4r = this.f5c;
	this.z9p.j5b = this.m1l;
	this.z9p.a9n();
	this.z9p.h2p(this.e5b);
  this.z9p.d0x = (f5c, index) => {
    this.g3j(f5c, index);
  };
	if (this.z9p.e5b.length)
	{
		this.l2z(0, 0);
	}
	else
	{
		let x1i = new i0b();
		this.l3w.l2z(null, 1, 0, x1i);
	}
}

l5k(f4x)
{
	this.f4x = f4x;
 	let l1h = this.f4x.split('\n');
	let r5w = 0;
	for (const g9i of l1h)
	{
		if (g9i.startsWith("[Event \""))
		{
			let y6n = r5w;
      let u9t = l1h.length;
   		let g1e = l1h.slice(y6n, u9t);
  		let t7b = new o1s(g1e);
	  	this.z9p.e5b[this.z1d] = t7b.p8x();
      break;
    }
    r5w++;
	}
  this.l2z(0, 0);
}

d2w()
{
	let l1h = this.f4x.split('\n');
	let q6c = [];
	let r5w = 0;
	for (const g9i of l1h)
	{
		if (g9i.startsWith("[Event \""))
		{
			q6c.push(r5w);
		}
		r5w++;
	}
	let i = 0;
	this.e5b = [];
	for (const a6x of q6c)
	{
		let y6n = a6x;
		let u9t = 0;
		if (i < q6c.length - 1)
		{
			u9t = q6c[i + 1];
		}
		else
		{
			u9t = l1h.length;
		}
		let g1e = l1h.slice(y6n, u9t);
		let t7b = new o1s(g1e);
		let x1i = t7b.p8x();
		this.e5b.push(x1i);
		i++;
	}
}

d7i()
{
	if (this.u2b || this.m7j.clientHeight <= v8e)
	{
		this.q9k.style.j9z = "0px";
		this.q9k.style.q3r = "0px";
		this.q9k.style.width = "100%";
		this.q9k.style.height = "88vh";
	}
	else
	{
		this.q9k.style.j9z = "1px solid gray";
		this.q9k.style.q3r = "1px solid gray";
		this.q9k.style.height = "88vh";
	}
}

c3m()
{
	this.d7i();

	this.left.style.width = "100%";

	let s2l = this.f0d.getBoundingClientRect();
	this.g5g.style.top = (s2l.height) + "px";
	this.h0p();

	this.l5d();
	this.p1n();
	this.h2o();
	this.q2u();
  this.i0h()
}

y3x()
{
	this.d7i();

	let y1n = this.m7j.getBoundingClientRect();
	this.left.style.width = (y1n.width * 0.50) + "px";
	let x6s = this.left.getBoundingClientRect();

	let s2l = this.f0d.getBoundingClientRect();
	this.g5g.style.top = (s2l.height) + "px";
	this.h0p();

	this.q4s.style.left = (x6s.width) + "px";
	this.q4s.style.width = (y1n.width - x6s.width) + "px";

	this.l5d();
	this.p1n();
	this.h2o();
	this.q2u();
  this.i0h()
}

p1n()
{
}

w8c()
{
  this.f0d.style.height = '100%';
	this.a4b.appendChild(this.g9l);
 	this.d8s.appendChild(this.z9z);
  this.g9l.style.height = '100%';
  this.z9z.style.height = '100%';
	this.q4s.style.display = 'block';
}

y0v()
{
  this.f0d.style.height = '70%';
	this.u3t.appendChild(this.g9l);
  this.u3t.appendChild(this.z9z);
  this.g9l.style.height = '50%';
  this.z9z.style.height = '50%';
	this.q4s.style.display = 'none';
}

h1q(event)
{
	this.l1i.style.display = 'block';
  let t7l = this.l1i.clientHeight - this.v4u.clientHeight - this.d8l.clientHeight;
  this.s5m.style.height = t7l + "px";
	this.h2o();
}

d2r(event)
{
 	this.l1i.style.display = 'none';
}

q2u()
{
	this.l3w.x8t.t2u.j0x();
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
	let s2l = this.f0d.getBoundingClientRect();
	let o6r = this.o0n.getBoundingClientRect();
	this.y7m.style.height = (s2l.height - o6r.height - 1) + "px";
	this.l3w.d5n.l4h();
}

h0p()
{
	let p8d = this.b8h.getBoundingClientRect();
	let s2l = this.f0d.getBoundingClientRect();
	let v7j = p8d.height - s2l.height;
	if (v7j < 0) v7j = 0;
	this.g5g.style.height = v7j + "px";
}

i6d()
{
  u5m('goToPrevious'+this.index, this.z1d > 0);
  u5m('goToNext'+this.index, this.z1d < this.z9p.e5b.length - 1);
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

e5p(event)
{
	this.l3w.d7b.e5p();
}

j6s(event)
{
	this.l3w.d7b.j6s();
}

a9d(event)
{
	this.l3w.d7b.u8s();
	this.l3w.x8t.f3u.a9d();
}

i0z(event)
{
	this.l3w.d7b.u8s();
	this.l3w.x8t.f3u.i0z();
}

q0z(event)
{
	this.l3w.d7b.u8s();
	this.l3w.x8t.f3u.w6a();
}

w5u(event)
{
	this.l3w.d7b.u8s();
	this.l3w.x8t.f3u.n8y();
}

s3e(event)
{
	this.l3w.b4j();
}

f9a()
{
 	if (this.z9p.e5b.length)
  {
    this.l2z(0, 0);
  }
}

u0j(event)
{
 	if (this.z1d > 0)
  {
    this.l2z(this.z1d - 1, 0);
  }
}

v5q(event)
{
  if (this.z1d < this.z9p.e5b.length - 1)
  {
    this.l2z(this.z1d + 1, 0);
  }
}

z7m()
{
	if (this.z9p.e5b.length)
  {
    this.z1d = this.z9p.e5b.length - 1;
    this.l2z(this.z9p.e5b.length - 1, 0);
	}
}

l2z(z1d, o5o)
{
  if (z1d >= 0 && z1d <= this.z9p.e5b.length - 1)
  {
    this.z1d = z1d;
  	this.l3w.l2z(null, 1, o5o, this.z9p.e5b[this.z1d]);
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
	if (this.q9k.clientWidth <= v8e)
	{
		if (this.u2b)
		{
			this.c3m();
		}
		else
		{
			this.y0v();
			this.u2b = true;
			this.c3m();
		}
	}
	else
	{
		if (!this.u2b)
		{
			this.y3x();
		}
		else
		{
			this.w8c();
			this.u2b = false;
			this.y3x();
		}
	}
}

g3j(f5c, index)
{
	this.l2z(index, 0);
  this.d2r();
}

a3c(event)
{
  const a = document.createElement("a");
  a.style.display = "none";
  document.body.appendChild(a);
  let i = 0;
  while (i < this.f4x.length - 1)
  {
    if (this.f4x[i] == '[')
    {
        break;
    }
    i++;
  }
  let f4x = this.f4x.substring(i);
  a.href = window.URL.createObjectURL(new Blob([f4x], { type: "text/plain" }));
  a.setAttribute("download", "games.pgn");
  a.click();
  window.URL.revokeObjectURL(a.href);
  document.body.removeChild(a);
}

w3q(event)
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
  q4c.id.w5o = "Stockfish";
  const l8q = q4c.l8q;
  l8q.addInteger("MultiPV", i7v);
  l8q.addInteger("Threads", x0j);
  l8q.addInteger("Hash",    p6h(o4i));
  this.l3w.a3y(q4c);
}

i6g()
{
  this.l3w.d5n.e5y(z1t);
  this.l3w.d5n.l4h();
  this.l3w.x8t.f3u.e5y(z1t);
  this.l3w.x8t.f3u.f2o();
  this.l3w.l9f.f3u.e5y(z1t);
  this.l3w.l9f.f3u.f2o();
  let g9l = document.getElementById("nota-container"+this.index);
  g9l.style.e3h = y9m.e3h + 'px';
  let o7v = document.getElementById("enota-container"+this.index);
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
  const { s4a } = await dialog.show();

  if (s4a === dialog.w3m)
  {
    this.i6g();
  }
}

async onEngineSettingsClick()
{
  const dialog = new m1c();
  const { s4a } = await dialog.show();

  if (s4a === dialog.w3m)
  {
    this.a1b();
  }
}

}

class i1m
{

constructor()
{
  this.w3m = 1;
  this.b6o = 0;

  this.dialog = document.getElementById("settingsDialog");
  if (!this.dialog)
  {
    this.buildDialog();
  }
  this.dialog = document.getElementById("settingsDialog");

  this.w8t = this.dialog.querySelector(".piece-select");
  this.r0q = this.dialog.querySelector(".coordinates-checkbox");
  this.g7g = this.dialog.querySelector(".font-select");
  this.h2n = this.dialog.querySelector(".ok-button");
  this.e2q = this.dialog.querySelector(".cancel-button");

  this.h2n.onclick = this.okSettings.bind(this);
 	this.e2q.onclick = this.cancelSettings.bind(this);
}

buildDialog()
{
  const i5c = a6b();
  const s = `
    <dialog id="settingsDialog" class="settingsDialog">
      <h2>Settings</h2>

      <div class="settings-row">
        <span class="label-text">Pieces:</span>
        <select class="pieceSelect piece-select">
          ${i5c.map((q4x, i) => '<option value="' + i + '">' + q4x + '</option>').join('')}
        </select>
      </div>

      <div class="settings-row">
        <span class="label-text">Coordinates:</span>
        <input type="checkbox" class="coordinates-checkbox">
      </div>

      <div class="settings-row">
        <span class="label-text">Notation font m5p:</span>
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

okSettings(event)
{
  z1t.w7p = this.w8t.value;
  localStorage.setItem(x2v, z1t.w7p);
  a3q(z1t.w7p);
  z1t.c5v = this.r0q.checked;
  localStorage.setItem(p9p, z1t.c5v.toString());
  y9m.e3h = this.g7g.value;
  localStorage.setItem(r2o, y9m.e3h);
  this.dialog.close('ok');
}

cancelSettings(event)
{
  this.dialog.close('cancel');
}

async show()
{
  l8u = true;

  this.w8t.value = z1t.w7p;
  this.r0q.checked = z1t.c5v;
  this.g7g.value = y9m.e3h;

  const s4a = await new Promise((resolve) => {
    this.dialog.onclose = () => {
       resolve(this.dialog.returnValue === 'ok' ? this.w3m : this.b6o);
    };
    this.dialog.showModal();
  });

  l8u = false;
  return { s4a };
}

}

function x3e(v4m)
{
  const value = parseInt(v4m);
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

function p6h(v4m)
{
  const value = parseInt(v4m);
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

class m1c
{

constructor()
{
  this.w3m = 1;
  this.b6o = 0;

  this.dialog = document.getElementById("engineSettingsDialog");
  if (!this.dialog)
  {
    this.buildDialog();
  }
  this.dialog = document.getElementById("engineSettingsDialog");

  this.f7n = this.dialog.querySelector(".searchTime-slider");

  this.y0n = this.dialog.querySelector(".searchTime-value");
  this.e0l = this.dialog.querySelector(".multiPV-slider");
  this.p2m = this.dialog.querySelector(".multiPV-value");
  this.a6h = this.dialog.querySelector(".threads-slider");
  this.k0g = this.dialog.querySelector(".threads-value");
  this.u2y = this.dialog.querySelector(".memory-slider");
  this.b0e = this.dialog.querySelector(".memory-value");
  this.h2n = this.dialog.querySelector(".ok-button");
  this.e2q = this.dialog.querySelector(".cancel-button");

  this.h2n.onclick = this.okSettings.bind(this);
 	this.e2q.onclick = this.cancelSettings.bind(this);

  this.f7n.addEventListener('input', this.a7p.bind(this));
  this.e0l.addEventListener('input', this.e6y.bind(this));

  this.a6h.addEventListener('input', this.y0a.bind(this));

  this.u2y.addEventListener('input', this.c9q.bind(this));

}

buildDialog() {
  const s = `
    <dialog id="engineSettingsDialog" class="settingsDialog">
      <h2>j0c Settings</h2>

      <div class="settings-row">
        <span class="label-text">Search o1x</span>
        <input type="range" class="simple-slider searchTime-slider" min="1" max="10" t2h="1" value="1">
        <span class="value-display-simple searchTime-value">1s</span>
      </div>

      <div class="settings-row">
        <span class="label-text">Multiple l1h</span>
        <input type="range" class="simple-slider multiPV-slider" min="1" max="5" t2h="1" value="1">
        <span class="value-display-simple multiPV-value">1</span>
      </div>

      <div class="settings-row">
        <span class="label-text">Threads</span>
        <input type="range" class="simple-slider threads-slider" min="1" max="32" t2h="1" value="1">
        <span class="value-display-simple threads-value">1</span>
      </div>

      <div class="settings-row">
        <span class="label-text">Memory</span>
        <input type="range" class="simple-slider memory-slider" min="1" max="6" t2h="1" value="1">
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

okSettings(event)

{
  o4l = parseInt(this.f7n.value);
  i7v = parseInt(this.e0l.value);
  x0j = parseInt(this.a6h.value);
  o4i = parseInt(this.u2y.value);
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

a7p()
{
  const value = parseInt(this.f7n.value);
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
  this.y0n.textContent = displayValue;
}

e6y()
{
  const value = this.e0l.value;
  this.p2m.textContent = `${value}`;
}


y0a()
{
  const value = this.a6h.value;
  this.k0g.textContent = `${value}`;
}


c9q()

{
  const value = parseInt(this.u2y.value);
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

  this.b0e.textContent = displayValue;
}

async show()
{
  l8u = true;

  this.f7n.value = o4l;
  this.e0l.value = i7v;
  this.a6h.value = x0j;
  this.u2y.value = o4i;

  this.a7p();
  this.e6y();
  this.y0a();
  this.c9q();

  const s4a = await new Promise((resolve) => {
    this.dialog.onclose = () => {
       resolve(this.dialog.returnValue === 'ok' ? this.w3m : this.b6o);
    };
    this.dialog.showModal();
  });

  l8u = false;
  return { s4a };
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
let l8u = false;

const v8e = 767;
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
  b3q();
  o0s();
};

document.onkeydown = r8s;

function r8s(e)
{
  if (e.q4r === "Escape")
  {
    return;
  }

  if (l8u)
  {
    
    e.preventDefault();
    return;
  }

	let g8i = e || window.event;
	let q4r = g8i.keyCode;

	if (k7z) return;
	k7z = true;

	if (l1o == -1) return;

	if (e.ctrlKey)
	{
		if (q4r == 66) 
		{
				s9v[l1o].h2l();
				e.preventDefault();
				
				
				
		}
		k7z = false;
		return;
	}
	if (q4r)
	{
		
		k6e(q4r);
		e.preventDefault(); 
		
	}
	k7z = false;
}

function v7r(y2n)
{
	s9v[y2n].l3w.d7b.s4u();
}

function k6e(q4r)
{
	if (l1o == -1) return;

	if (q4r == q5f)
	{
		s9v[l1o].l3w.x8t.f3u.e1j();
	}
	else if (q4r == z7o)
	{
		s9v[l1o].l3w.x8t.f3u.l9v();
	}
	else if (q4r == r3o || q4r == w4t || q4r == g6j ||
	q4r == c2u || q4r == x5i || q4r == b8t ||
	q4r == v9v || q4r == e9u ||
	q4r == e0y || q4r == c1t)
	{
		s9v[l1o].l3w.x8t.f3u.z5m(q4r);
	}
	else if (q4r == h4r || q4r == d0f || q4r == u3u)
	{
		s9v[l1o].doFlipBoard();
	}
}

function z7q(w5y, e5s)
{
	let n2v = w5y.length;
	let g3o = 0;

	function check(n)
	{
		if (n == n2v)
		{
			e5s();
		}
	}

	for (let i = 0; i < w5y.length; ++i)
	{
    let c5y = w5y[i];
		let img = document.createElement("img");
		img.id = w5y[i].replace(".bmp", "").replace(".gif", "").replace(".jpg", "").replace(".png", "").replace(".svg", "");
		j2k.add(img);
		img.addEventListener("load", function()
		{
			g3o++;
			check(g3o);
		});
		img.src = c5y;
	}
}

function x4s()
{
 	z7q(e4r(), j7e);
  
  
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
	let m7p = document.getElementsByClassName("tdreplay");
	for (const q9k of m7p)
	{
		let s9p = new b9s();
		s9p.l0g(s9v.length, q9k, q9k.innerHTML);
		s9p.a9n();
		s9v.push(s9p);
	}
	if (s9v.length)
	{
		l1o = 0;
	}
	window.addEventListener("resize", f4i);
	f4i();
}

function u5m(w5o, h9e)
{
	let button = document.getElementById(w5o);
	if (h9e)
	{
		button.classList.remove('replayButtonDisabled');
	}
	else
	{
		button.classList.add('replayButtonDisabled');
	}
}

function n4z(button, h9e)
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

function o0s()
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
    z1t.w7p = 0;
  }
  else
  {
    z1t.w7p = piecesValue;
  }
  a3q(z1t.w7p);

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
  const k9b = localStorage.getItem(o2p);
  if (k9b === null)
  {
    i7v = 1;
  }
  else
  {
    i7v = k9b;
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
const x3c =
[
	[ f4v.j1l, 			  	""      ],
	[ f4v.x1i,  		 		"game"  ],
	[ f4v.k2b,    		 	"match" ],
	[ f4v.h6o,  	"tourn" ],
	[ f4v.z0m,   			"swiss" ],
	[ f4v.w2h,    	"k.o."  ],
	[ f4v.s7m,	"simul" ],
	[ f4v.d8g,	"schev" ]
];

const j9h =
[
	[ f0j.d1e, ""        ],
	[ f0j.y4e,  "(rapid)" ],
	[ f0j.w3w,  "(blitz)" ],
	[ f0j.h0o,   "(corr)"  ]
];

const p3f =
[
	[ n8u.j1l,     		 ""     ],
	[ n8u.k7a,       		 "$145" ],
	[ n8u.s4n, 		 "$142" ],
	[ n8u.m5l, 		 "$143" ],
	[ n8u.c6m, "$144" ],
	[ n8u.f7r,  "$140" ],
	[ n8u.s9h, "$141" ]
];

const l5t =
[
	[ c8l.j1l,     		""   ],
	[ c8l.p5g,       	"$1" ],
	[ c8l.y7x, 			  	"$2" ],
	[ c8l.p7h,	"$5" ],
	[ c8l.g7c, 		  "$6" ],
	[ c8l.r9v,  	"$3" ],
	[ c8l.u3z, 		  "$4" ],
	[ c8l.i6p, 		"$22" ],
	[ c8l.z3x, 		"$8" ]
];

const h8d =
[
	[ b4c.j1l,     						""     ],
	[ b4c.g6v,      "$18"  ],
	[ b4c.o5v, 					"$16"  ],
	[ b4c.d4r,	"$14"  ],
	[ b4c.o9f, 						"$11"  ],
	[ b4c.q6y,  						"$13"  ],
	[ b4c.e7o,  "$15"  ],
	[ b4c.o0g, 					"$17"  ],
	[ b4c.i8a, 			"$19"  ],
	[ b4c.k5j,					"$44"  ],
	[ b4c.x5f, 					"$132" ],
	[ b4c.p6s,  					"$36"  ],
	[ b4c.x7q, 							"$40"  ],
	[ b4c.o8o, 			  "$138" ],
	[ b4c.c7a,	"$32"  ],
	[ b4c.r5r, 							"$146" ]
];

const p6u =
[
	[ o9q.j1l,     		""     ],
	[ o9q.z4w,     "$51"  ],
	[ o9q.g8o, 			"$52"  ],
	[ o9q.r6z,	    		"$53"  ]
];

const v5z =
[
	[ k2e.e8e, 			 	""       ],
	[ k2e.g8o,   		"middle" ],
	[ k2e.h5r,   	   	 	"low"    ]
];


function f5u(s2n)
{
	return j9h[s2n][1];
}

function q1o(r3v)
{
	for (const s2n of j9h)
	{
		if (s2n[1] == r3v)
		{
			return s2n[0];
		}
	}
	return f0j.d1e;
}

function q5u(type)
{
	return x3c[type][1];
}

function h6d(r3v)
{
	for (const b1x of x3c)
	{
		if (b1x[1] == r3v)
		{
			return b1x[0];
		}
	}
	return f4v.j1l;
}

function j8h(a1m)
{
	return p3f[a1m][1];
}

function m6l(r3v)
{
	for (const a1m of p3f)
	{
		if (a1m[1] == r3v)
		{
			return a1m[0];
		}
	}
	return n8u.j1l;
}

function u1r(style)
{
	return l5t[style][1];
}

function u5b(r3v)
{
	for (const style of l5t)
	{
		if (style[1] == r3v)
		{
			return style[0];
		}
	}
	return c8l.j1l;
}

function k4i(value)
{
	return h8d[value][1];
}

function v3t(r3v)
{
	for (const value of h8d)
	{
		if (value[1] == r3v)
		{
			return value[0];
		}
	}
	return b4c.j1l;
}

function a0x(z4d)
{
	return p6u[z4d][1];
}

function f8m(r3v)
{
	for (const i9f of p6u)
	{
		if (i9f[1] == r3v)
		{
			return i9f[0];
		}
	}
	return o9q.j1l;
}

function g7q(r3v)
{
	return r3v.length == 0 ||
		r3v == "?" ||
		r3v == "-" ||
		r3v == "*" ||
		r3v == "????.??.??";
}

function b0a(r3v)
{
	if (g7q(r3v))
	{
		return "";
	}
	else
	{
		return r3v.trim();
	}
}

function j3m(r3v, s7r)
{
	if (g7q(r3v))
	{
		return s7r;
	}
	else
	{
		return j3e(r3v, s7r);
	}
}

function t4w(value)
{
	return value ? value.toString() : "";
}

function n2o(z1e)
{
	return v5z[z1e][1];
}

function k2h(r3v)
{
	for (const z1e of v5z)
	{
		if (z1e[1] == r3v)
		{
			return z1e[0];
		}
	}
	return k2e.e8e;
}

function x1h(a3e)
{
	if (!a3e)
	{
		return "";
	}
	else
	{
		let div = Math.trunc(a3e / 60);
		let q0s = a3e % 60;
		return div.toString() + "." + q0s.toString().padStart(2, '0');
	}
}

function n4t(s4a)
{
	switch (s4a)
	{
		case o9d.a2j:
			return "1-0";
		case o9d.y8o:
			return "1/2-1/2";
		case o9d.k6l:
			return "0-1";
		default:
			return "*";
	}
}

function q8l(o4u)
{
	if (o4u > 0 && o4u <= 9999)
	{
		return o4u.toString().padStart(4, '0');
	}
	else
	{
		return "-";
	}
}

function f0l(u9c)
{
	if (u9c.k2v())
	{
		return "????.??.??";
	}
	let r3v = '';
	if (u9c.g5w)
	{
		r3v = u9c.g5w.toString().padStart(4, '0');
	}
	else
	{
		r3v = "????";
	}
	r3v += ".";
	if (u9c.r9w)
	{
		let r0f = u9c.r9w.toString().padStart(2, '0');
		r3v += r0f;
	}
	else
	{
		r3v += "??";
	}
	r3v += ".";
	if (u9c.x4l)
	{
		let j0l = u9c.x4l.toString().padStart(2, '0');;
		r3v += j0l;
	}
	else
	{
		r3v += "??";
	}
	return r3v;
}

function z3p(j0v)
{
	if (g7q(j0v))
	{
		return new b2s();
	}
	else
	{
		let u9c = new b2s();
		u9c.e5k("yyyy.mm.dd", j0v);
		return u9c;
	}
}

function w3d(j0v, h6o)
{
	h6o.t8b = (j0v.indexOf("team") != -1);
	h6o.type = f4v.j1l;
	for (const b1x of x3c)
	{
		if (j0v.indexOf(b1x[1]) != -1)
		{
			h6o.type = b1x[0];
			break;
		}
	}
	h6o.s2n = f0j.d1e;
	for (const s2n of j9h)
	{
		if (j0v.indexOf(s2n[1]) != -1)
		{
			h6o.s2n = s2n[0];
			break;
		}
	}
}

function o6c(j0v, p3r)
{
	p3r.u4x = 0;
	p3r.z5p = 0;
	let l6q = j0v.indexOf(".");
	if (l6q != -1)
	{
		let a1r = j0v.substr(0, l6q);
		p3r.u4x = j3e(a1r, 0);
		let v7h = j0v.substr(l6q + 1, j0v.length);
		l6q = v7h.indexOf(".");
		if (l6q != -1)
		{
			a1r = v7h.substr(0, l6q);
			p3r.z5p = j3e(a1r, 0);
		}
		else
		{
			p3r.z5p = j3e(v7h, 0);
		}
	}
	else
	{
		p3r.u4x = j3e(j0v, 0);
	}
}

function a8d(p3r)
{
	let j0v = '';
	if (p3r.z5p)
	{
		j0v = p3r.u4x.toString() + "." + p3r.z5p.toString();
	}
	else if (p3r.u4x)
	{
		j0v = p3r.u4x.toString();
	}
	return j0v;
}

function l4l(j0v)
{
	if (j0v == "2-0" || j0v == "20" || j0v == "1-0" || j0v == "10")
	{
		return o9d.a2j;
	}
	else if (j0v == "1-1" || j0v == "11" || j0v == "1/2-1/2" ||
		j0v == "1/21/2" || j0v == "0.5-0.5")
	{
		return o9d.y8o;
	}
	else if (j0v == "0-2" || j0v == "02" || j0v == "0-1" || j0v == "01")
	{
		return o9d.k6l;
	}
	else
	{
		return o9d.j1l;
	}
}

function z7p(j0v)
{
	return j3e(j0v, 0);
}

function n4w(j0v)
{
	return i9e(j0v);
}

function b6b(j0v)
{
	return j5j(j0v);
}

function f5s(value)
{
	return value ? "1" : "";
}

function c2f(j0v)
{
	return j0v == "1";
}

function j4q(o7a)
{
	let p3r = new m3k();

	
	p3r.v8k.q2s.q0e(b0a(o7a.i3f));
	if (!g7q(o7a.x6m))
	{
		p3r.v8k.x8d.w5o = b0a(o7a.x6m);
		p3r.v8k.x8d.c1d = j3m(o7a.k9q, 0);
		if (!g7q(o7a.j8o))
		{
			let u9c = z3p(o7a.j8o);
			p3r.v8k.x8d.g5w = u9c.g5w;
		}
		p3r.v8k.x8d.k7c = c2f(o7a.s2z);
		p3r.v8k.x8d.v0e = n7a(b0a(o7a.l6h));
	}
	p3r.v8k.o4u = z7p(b0a(o7a.k5o));
	p3r.v8k.o1x = b6b(b0a(o7a.j8e));
	p3r.v8k.a5f = b0a(o7a.a8l);
	p3r.v8k.v0e = s0y(b0a(o7a.q4p));

	
	p3r.u6y.q2s.q0e(b0a(o7a.s6h));
	if (!g7q(o7a.n5l))
	{
		p3r.u6y.x8d.w5o = b0a(o7a.n5l);
		p3r.u6y.x8d.c1d = j3m(o7a.t6q, 0);
		if (!g7q(o7a.v9n))
		{
			let u9c = z3p(o7a.v9n);
			p3r.u6y.x8d.g5w = u9c.g5w;
		}
		p3r.u6y.x8d.k7c = c2f(o7a.d4q);
		p3r.u6y.x8d.v0e = n7a(b0a(o7a.i8g));
	}
	p3r.u6y.o4u = z7p(b0a(o7a.z7x));
	p3r.u6y.o1x = b6b(b0a(o7a.z3v));
	p3r.u6y.a5f = b0a(o7a.g8m);
	p3r.u6y.v0e = s0y(b0a(o7a.u4n));

	
	p3r.h6o.a5f = b0a(o7a.m1d);
	p3r.h6o.z1q = b0a(o7a.x2m);
	p3r.h6o.a5z = z3p(o7a.g5h);
	p3r.h6o.h9j = z3p(o7a.i2q);

	w3d(b0a(o7a.b1x), p3r.h6o);
	
	
	
	let q6f = q1o(o7a.q6f);
	if (q6f != f0j.d1e)
	{
		p3r.h6o.s2n = q6f;
	}
	p3r.h6o.v0e = n7a(b0a(o7a.m9x));
	p3r.h6o.z5s = j3m(o7a.l6i, 0);
	let b1x = h6d(o7a.b1x);
	if (b1x != f4v.j1l)
	{
		p3r.h6o.type= b1x;
	}
	p3r.h6o.y9a = j3m(o7a.e2f, 0);
	p3r.h6o.t8b = c2f(o7a.b7o);
	p3r.h6o.e5e = c2f(o7a.h5t);
	p3r.h6o.i2m = c2f(o7a.n1v);
	p3r.h6o.f0k = c2f(o7a.q7o);

	
	p3r.p0d.w5o = b0a(o7a.p0d);

	
	p3r.r6f.a5f = b0a(o7a.r9j);
	p3r.r6f.j0g = b0a(o7a.d6s);
	p3r.r6f.f2l = z3p(o7a.i9k);
	p3r.r6f.n4q = j3m(o7a.f8g, 0);
	p3r.r6f.f8s = z3p(o7a.c0x);
	p3r.r6f.z1e = k2h(o7a.v3d);

	
	p3r.a5f.a5f = b0a(o7a.a5f);

	
	p3r.u9c = z3p(o7a.u9c);
	p3r.s4a = l4l(b0a(o7a.s4a));
	p3r.q2o = n4w(b0a(o7a.q2o));
	o6c(b0a(o7a.u4x), p3r);

	
	let k8u = j3m(o7a.k8u, 0);
	p3r.k8u.h8a(k8u);

  
  p3r.id.d5c = o7a.d5c;

	return p3r;
}

function d3x(p3r)
{
	let o7a = new l6g();

	
	o7a.i3f = p3r.v8k.q2s.w5o();
	if (p3r.v8k.x8d.w5o.length)
	{
		o7a.x6m = p3r.v8k.x8d.w5o;
		if (p3r.v8k.x8d.c1d)
		{
			o7a.k9q = p3r.v8k.x8d.c1d;
		}
		if (p3r.v8k.x8d.g5w)
		{
			let t0f = new b2s();
			t0f.g5w = p3r.v8k.x8d.g5w;
			o7a.j8o = f0l(t0f);
		}
		if (p3r.v8k.x8d.k7c)
		{
			o7a.s2z = f5s(p3r.v8k.x8d.k7c);
		}
		if (p3r.v8k.x8d.v0e != y2m.j1l)
		{
			o7a.l6h = e6a(p3r.v8k.x8d.v0e);
		}
	}
	o7a.k5o = q8l(p3r.v8k.o4u);
	o7a.j8e = x1h(p3r.v8k.o1x);
	o7a.a8l = p3r.v8k.a5f;

	
	o7a.s6h = p3r.u6y.q2s.w5o();
	if (p3r.u6y.x8d.w5o.length)
	{
		o7a.n5l = p3r.u6y.x8d.w5o;
		if (p3r.u6y.x8d.c1d)
		{
			o7a.t6q = p3r.u6y.x8d.c1d;
		}
		if (p3r.u6y.x8d.g5w)
		{
			let d4o = new b2s();
			d4o.g5w = p3r.u6y.x8d.g5w;
			o7a.v9n = f0l(d4o);
		}
		if (p3r.u6y.x8d.k7c)
		{
			o7a.d4q = f5s(p3r.u6y.x8d.k7c);
		}
		if (p3r.u6y.x8d.v0e != y2m.j1l)
		{
			o7a.i8g = e6a(p3r.u6y.x8d.v0e);
		}
	}
	o7a.z7x = q8l(p3r.u6y.o4u);
	o7a.z3v = x1h(p3r.u6y.o1x);
	o7a.g8m = p3r.u6y.a5f;

	
	o7a.m1d = p3r.h6o.a5f;
	o7a.x2m = p3r.h6o.z1q;
	o7a.g5h = f0l(p3r.h6o.a5z);
	o7a.i2q = f0l(p3r.h6o.h9j);
	o7a.q6f = f5u(p3r.h6o.s2n);
	o7a.l6i = t4w(p3r.h6o.z5s);
	o7a.m9x = e6a(p3r.h6o.v0e);
	o7a.b1x = q5u(p3r.h6o.type);
	o7a.e2f = t4w(p3r.h6o.y9a);
	o7a.b7o = f5s(p3r.h6o.t8b);
	o7a.h5t = f5s(p3r.h6o.e5e);
	o7a.n1v = f5s(p3r.h6o.i2m);
	o7a.q7o = f5s(p3r.h6o.f0k);

	
	o7a.p0d = p3r.p0d.w5o;

	
	o7a.r9j = p3r.r6f.a5f;
	o7a.d6s = p3r.r6f.j0g;
	o7a.i9k = f0l(p3r.r6f.f2l);
	o7a.f8g = t4w(p3r.r6f.n4q);
	o7a.c0x = f0l(p3r.r6f.f8s);
	o7a.v3d = n2o(p3r.r6f.z1e);

	
	o7a.a5f = p3r.a5f.a5f;

	
	o7a.u9c = f0l(p3r.u9c);
	o7a.s4a = n4t(p3r.s4a);
	o7a.q2o = r6q(p3r.q2o);
	o7a.u4x = a8d(p3r);

	
	o7a.k8u = t4w(p3r.k8u.y2r());

	return o7a;
}

const g1s  					= "White";
const m1u					= "WhiteTeam";
const p6q 				= "WhiteTeamNumber";
const k7k 					= "WhiteTeamYear";
const f9j 				= "WhiteTeamSeason";
const g3u 			= "WhiteTeamCountry";
const e2c 						= "WhiteRating";
const j9b 							= "WhiteTime";
const c3c 							= "WhiteElo";
const m8s  						= "WhiteTitle";
const m4t						= "WhiteCountry";

const t5r						= "Black";
const j8a					= "BlackTeam";
const a9s 				= "BlackTeamNumber";
const t3z 					= "BlackTeamYear";
const r0w 				= "BlackTeamSeason";
const d2p 			= "BlackTeamCountry";
const m1g 						= "BlackRating";
const k8e 							= "BlackTime";
const h0f 							= "BlackElo";
const c8e  						= "BlackTitle";
const j6b						= "BlackCountry";

const m0l 				= "Event";
const w0m				= "Site";
const p2h 			 	= "EventDate";
const l0j 		 	= "EventEndDate";
const d4p 			 	= "EventSpeed";
const m8c 	 	= "EventCategory";
const e4y 		 	= "EventCountry";
const l6s 			 	= "EventType";
const g1d 		 	= "EventRounds";
const s3l 			 	= "EventTeams";
const i6l		 	= "EventComplete";
const h9n 	= "EventThreePoints";
const v0l	= "EventBoardPoints";

const r6w 							= "Annotator";

const q8r 				 		= "SourceTitle";
const x7d 				 		= "Publication";
const y8l		 		= "SourcePublisher";
const c2b		 		= "PublicationDate";
const x8g 				 		= "SourceDate";
const i1y 		= "SourceVersionNumber";
const s1a 	 		= "SourceVersionDate";
const s4r 			 		= "SourceQuality";

const y8y 					 		    = "Title";

const s6y 							 		= "Date";
const t8c 								= "Result";
const r8h 										= "ECO";
const u4a 									= "Round";

const k3q			 							= "Tags";

const t3o 									= "Setup";
const q9a 										= "FEN";
const p4t 							= "PlyCount";

const v5t      							= "GUID";

const r5y = "(";
const t8a   = ")";
const y1t    = "{";

class x7l
{

constructor()
{
  this.j3b = new s7c();
  this.m2b = new x6l();
  this.n4n = new p6t();
  this.s7l = false;
  this.f3q = false;
  this.h7b = false;
  this.y0y = '';
}

}

class o1s
{

constructor(l1h)
{
	this.r4l = new l6g();
	this.w5z = l1h;
	this.i4m = 0;
	this.p8t = '';
	this.q1p = 0;
	this.x5b = 0;
	this.e4e = '';
	this.r5k = 0;
	this.z3w = false;
	this.z7r = '';
	this.p2d = '';
	this.q4k = null;
	this.v6m = new z4m();
	this.c4c = '';
	this.n1z = false;
 	this.w7k = false;
	this.c4t = false;
}

p8x()
{
  this.r5k = 0;
	let x1i = new i0b();
	this.q4k = x1i.v3n;
	try
	{
		this.w1u();
	}
	catch (err)
	{
	}
	x1i.g0g = j4q(this.r4l);
  x1i.z0p = this.r5k;
	return x1i;
}

w1u()
{
	this.z3w = false;
	this.t5j();
	if (this.z3w)
	{
		this.x1z = i2k(this.p2d);
		this.q4k.t6k(this.x1z, 1);
	}
 	this.d1c();
}

r0d()
{
	if (this.w5z.length == 0)
	{
		return false;
	}
	if (this.i4m >= this.w5z.length)
	{
		return false;
	}
	else
	{
		this.p8t = this.w5z[this.i4m];
		this.q1p = this.p8t.length;
		this.x5b = 0;
		this.i4m++;
		return true;
	}
}

t5j()
{
	this.c4t = false;
	this.w7k = false;
	while (true)
	{
		if (!this.r0d())
		{
			return;
		}
		this.p2k();
		if (!this.m9k())
		{
			return;
		}
		this.o5l();
	}
}


z6x(n8s)
{
	let j0v = this.e4e.substr(1, this.e4e.length - 1);
	return j0v.toUpperCase() === n8s.toUpperCase();
}

d1c()
{
 	if (this.e4e.length == 0) return;
	this.n1z = false;

	while (this.e4e[0] == '{')
	{
		let p4p = this.p4i();
    let o3w = new x7l();
		this.s6z(p4p, o3w);
    if (!o3w.j3b.k2v())
		{
			this.q4k.o9x(o3w.j3b);
		}
 		if (!o3w.m2b.k2v())
		{
			this.q4k.m1p(o3w.m2b);
		}
		if (!o3w.n4n.k2v())
		{
			this.q4k.m7d(o3w.n4n);
		}
 		p4p = o3w.y0y.trim();
    if (p4p.length)
    {
      
      
      if (p4p.startsWith("[%a") && p4p.length > 7)
      {
        p4p = p4p.substr(7, p4p.length).trim();
      }
      let u4b = this.q4k.u4b();
      if (u4b.length)
      {
        u4b += ' ';
      }
      u4b += p4p;
      this.q4k.l7d(u4b);
		}
		this.p2k();
		if (this.e4e.length == 0)
		{
			return;
		}
	}
	this.l8a(this.q4k.y5m(), this.q4k.x1z());
}

l8a(i7j, h1s)
{
  let l6q = i7j.o0o();
  let p2g = h1s.o0o();

	let d5e = null;
 	let l4s = new d5f();

	do
	{
		if (this.e4e == r5y)
		{
			if (!d5e)
			{
				throw "error";
			}
			if (!this.p2k())
			{
				throw "error";
			}

 			p2g.y9l(l6q.u0y.z2g());
			p2g.g7b(l4s);
			this.q4k.y9l(l6q); 
      this.l8a(l6q, p2g);
			this.q4k.r9f(l6q); 
			p2g.r9f(l6q.u0y.z2g());

			while (this.p2k())
			{
				if (this.e4e != r5y)
				{
					break;
				}
				if (!this.p2k())
				{
					throw "error";
				}
        p2g.y9l(l6q.u0y.z2g());
				p2g.g7b(l4s);
				this.q4k.y9l(l6q); 
				this.l8a(l6q, p2g);
				this.q4k.r9f(l6q);  
				p2g.r9f(l6q.u0y.z2g());
			}
		}

		if (this.e4e == t8a)
		{
			break;
		}

		if (
			this.e4e == "1-0" ||
			this.e4e == "2-0" ||
			this.e4e == "0-1" ||
			this.e4e == "0-2" ||
			this.e4e == "1/2-1/2" ||
			this.e4e == "1-1" ||
			this.e4e == "*" ||
			this.e4e == "**" ||
			this.e4e == "-*" ||
			this.e4e == "1-0*" ||
			this.e4e == "2-0*" ||
			this.e4e == "0-1*" ||
			this.e4e == "0-2*" ||
			this.e4e == "1/2-1/2*" ||
			this.e4e == "1-1*" ||
			this.e4e == "2-00*" ||
			this.e4e == "00-2*")
			break;

		if (this.e4e[0] == '$')
		{
			if (!d5e)
			{
				throw "error";
			}
			let a1m = m6l(this.e4e);
			if (a1m != n8u.j1l)
			{
				d5e.c1i(a1m);
				continue;
			}
			let style = u5b(this.e4e);
			if (style != c8l.j1l)
			{
				d5e.i6z(style);
				continue;
			}
			let value = v3t(this.e4e);
			if (value != b4c.j1l)
			{
				d5e.k1e(value);
				continue;
			}
			let z4d = f8m(this.e4e);
			if (z4d != o9q.j1l)
			{
				d5e.u7k(z4d);
				continue;
			}
			continue;
		}
		if (this.e4e[0] == '{')
		{
			let p4p = this.p4i();
      let o3w = new x7l();
  		this.s6z(p4p, o3w);
      if (!o3w.j3b.k2v())
      {
		  	if (d5e)
			  {
				  d5e.c3o(o3w.j3b);
				}
			}
   		if (!o3w.m2b.k2v())
      {
				if (d5e)
				{
					d5e.k1n(o3w.m2b);
				}
			}
   		if (!o3w.n4n.k2v())
      {
				if (d5e)
				{
					d5e.b5v(o3w.n4n);
				}
			}
      if (o3w.f3q)
      {
				if (d5e)
				{
					d5e.b1f();
				}
			}
      if (o3w.h7b)
      {
				if (d5e)
				{
					d5e.x4w();
				}
			}
   		p4p = o3w.y0y.trim();
      if (!p4p.length)
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
        z8s += p4p;
				d5e.v9u(z8s);
			}
			else
			{
        if (this.c4c.length)
        {
   				this.c4c += ' ';
        }
				this.c4c += p4p;
				this.n1z = true;
			}
			continue;
		}
		if (!this.l6w())
		{
			continue;
		}
		let y1u = false;
		if (this.e4e[this.e4e.length] == '*')
		{
			this.e4e = this.e4e.substr(0, this.e4e.length - 1);
			y1u = true;
		}
 		let z0t = this.l9z(this.e4e);
    let z2g = a7k(p2g, this.e4e);
 		l4s = p2g.l4s();
		p2g.r9f(z2g);
		let u0y = l9h(z2g);
    u0y.i6z(z0t);
    this.q4k.v9t(l6q, u0y);
		d5e = l6q.u0y;
		if (this.n1z)
		{
			d5e.l3z(this.c4c);
			this.n1z = false;
      this.c4c = '';
		}
		if (y1u)
		{
			break;
		}
	} while (this.p2k());
}

l9z(j0v)
{
	if (j0v.endsWith("??"))
	{
		j0v = j0v.subString(0, j0v.length-2);
		return c8l.u3z;
	}
	else if (j0v.endsWith("!!"))
	{
		j0v = j0v.subString(0, j0v.length-2);
		return c8l.r9v;
	}
	else if (j0v.endsWith("?!"))
	{
		j0v = j0v.subString(0, j0v.length-2);
		return c8l.g7c;
	}
	else if (j0v.endsWith("!?"))
	{
		j0v = j0v.subString(0, j0v.length-2);
		return c8l.p7h;
	}
	else if (j0v.endsWith("?"))
	{
		j0v = j0v.subString(0, j0v.length-1);
		return c8l.y7x;
	}
	else if (j0v.endsWith("!"))
	{
		j0v = j0v.subString(0, j0v.length-1);
		return c8l.p5g;
	}
	else
	{
		return c8l.j1l;
	}
}

l6w()
{
	let w5e = this.e4e.length;
	let l6q = -1;
	for (let i = 0; i < w5e; i++)
	{
		if (this.e4e[i] == '.')
		{
			l6q = i;
		}
	}
	if (l6q != -1)
	{
		this.e4e = this.e4e.substr(l6q + 1 , w5e);
	}
	return this.e4e.length != 0;
}

p2k()
{
	this.e4e = "";
	let s5z = '';
	let index = 0;
	let w5e = 0;
	while (true)
	{
		let n4c = 0;
		if (this.x5b < this.q1p)
		{
			n4c = this.p8t[this.x5b];
		}
		else
		{
			n4c = 0;
		}
		if (!n4c)
		{
			if (w5e)
			{
				break;
			}
			if (!this.r0d())
			{
				return false;
			}
			continue;
		}
		if (n4c == ';')
		{
			if (!this.r0d())
			{
				return false;
			}
			continue;
		}
		if (n4c == '(')
		{
			if (w5e)
			{
				break;
			}
			else
			{
				this.x5b++;
				this.e4e = r5y;
				return true;
			}
		}
		if (n4c == ')')
		{
			if (w5e)
			{
				break;
			}
			else
			{
				this.x5b++;
				this.e4e = t8a;
				return true;
			}
		}
		if (n4c == '{')
		{
			if (w5e)
			{
				break;
			}
			else
			{
				this.x5b++;
				this.e4e = y1t;
				return true;
			}
		}
		if (n4c == ' ' || n4c == '\r' || n4c == '\n')
		{
			if (w5e)
			{
				this.x5b++;
				break;
			}
			else
			{
				this.x5b++;
				continue;
			}
		}
		s5z += n4c;
		index++;
		w5e++;
		this.x5b++;
	}
	if (index)
	{
		this.e4e += s5z;
	}
	return this.e4e.length != 0;
}

p4i()
{
	let j0v = '';
	let s5z = '';
	let index = 0;
	let c9s = 0;
	while (true)
	{
		let n4c = 0;
		if (this.x5b < this.q1p)
		{
			n4c = this.p8t[this.x5b];
		}
		else
		{
			n4c = 0;
		}
		if (!n4c)
		{
			if (!this.r0d())
			{
				break;
			}
			if (index > 0)
			{
				s5z += ' '; 
				index++;
			}
			continue;
		}
		if (n4c == '{')
		{
			c9s++;
		}
		if (n4c == '}')
		{
			if (c9s)
			{
				c9s--;
			}
			else
			{
				this.x5b++;
				break;
			}
		}
		s5z += n4c;
		index++;
		this.x5b++;
	}
	if (index)
	{
		j0v += s5z;
	}
	return j0v.trim();
}

z5w()
{
	this.z7r = "";

	let p0i = 0;
	let w5e = this.p8t.length;
	for (let i = w5e - 1; i >= 0; i--)
	{
		if (this.p8t[i] == ']')
		{
			p0i = i;
			break;
		}
	}
	let index = 0;
	let c6v = false;
	let s5z = '';
	while (true)
	{
		let n4c = 0;
		if (this.x5b < this.q1p)
		{
			n4c = this.p8t[this.x5b];
		}
		else
		{
			n4c = 0;
		}
		if (!n4c)
		{
			if (!this.r0d())
			{
				break;
			}
			continue;
		}
		if (n4c == '\"')
		{
			c6v = true;
			this.x5b++;
			continue;
		}
		if (n4c == ']')
		{
			if (this.x5b == p0i)
			{
				this.x5b++;
				break;
			}
		}
		if (c6v)
		{
			s5z += n4c;
			index++;
		}
		this.x5b++;
	}
	if (index)
	{
		this.z7r += s5z;
	}
}

m9k()
{
	if (this.e4e.length == 0)
	{
		return false;
	}
	if (this.e4e[0] != '[')
	{
		return false;
	}
	
	let index = this.x5b;
	let u8e = false;
	while (index < this.q1p)
	{
		let n4c = this.p8t[index++];
		if (n4c == '\"' && this.p8t[index] == ']')
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

o5l()
{
	
	if (this.z6x(g1s))
	{
		this.z5w();
		this.r4l.i3f = this.z7r;
		return;
	}
	if (this.z6x(m1u))
	{
		this.z5w();
		this.r4l.x6m = this.z7r;
		return;
	}
	if (this.z6x(p6q))
	{
		this.z5w();
		this.r4l.k9q = this.z7r;
		return;
	}
	if (this.z6x(k7k))
	{
		this.z5w();
		this.r4l.j8o = this.z7r;
		return;
	}
	if (this.z6x(f9j))
	{
		this.z5w();
		this.r4l.s2z = this.z7r;
		return;
	}
	if (this.z6x(g3u))
	{
		this.z5w();
		this.r4l.l6h = this.z7r;
		return;
	}
	if (this.z6x(c3c) || this.z6x(e2c))
	{
		this.z5w();
		this.r4l.k5o = this.z7r;
		return;
	}
	if (this.z6x(j9b))
	{
		this.z5w();
		this.r4l.j8e = this.z7r;
		return;
	}
	if (this.z6x(m8s))
	{
		this.z5w();
		this.r4l.a8l = this.z7r;
		return;
	}
	if (this.z6x(m4t))
	{
		this.z5w();
		this.r4l.q4p = this.z7r;
		return;
	}

	
	if (this.z6x(t5r))
	{
		this.z5w();
		this.r4l.s6h = this.z7r;
		return;
	}
	if (this.z6x(j8a))
	{
		this.z5w();
		this.r4l.n5l = this.z7r;
		return;
	}
	if (this.z6x(a9s))
	{
		this.z5w();
		this.r4l.t6q = this.z7r;
		return;
	}
	if (this.z6x(t3z))
	{
		this.z5w();
		this.r4l.v9n = this.z7r;
		return;
	}
	if (this.z6x(r0w))
	{
		this.z5w();
		this.r4l.d4q = this.z7r;
		return;
	}
	if (this.z6x(d2p))
	{
		this.z5w();
		this.r4l.i8g = this.z7r;
		return;
	}
	if (this.z6x(h0f) || this.z6x(m1g))
	{
		this.z5w();
		this.r4l.z7x = this.z7r;
		return;
	}
	if (this.z6x(k8e))
	{
		this.z5w();
		this.r4l.z3v = this.z7r;
		return;
	}
	if (this.z6x(c8e))
	{
		this.z5w();
		this.r4l.g8m = this.z7r;
		return;
	}
	if (this.z6x(j6b))
	{
		this.z5w();
		this.r4l.u4n = this.z7r;
		return;
	}

	
	if (this.z6x(m0l))
	{
		this.z5w();
		this.r4l.m1d = this.z7r;
		return;
	}
	if (this.z6x(w0m))
	{
		this.z5w();
		this.r4l.x2m = this.z7r;
		return;
	}
	if (this.z6x(p2h))
	{
		this.z5w();
		this.r4l.g5h = this.z7r;
		return;
	}
	if (this.z6x(l0j))
	{
		this.z5w();
		this.r4l.i2q = this.z7r;
		return;
	}
	if (this.z6x(d4p))
	{
		this.z5w();
		this.r4l.q6f = this.z7r;
		return;
	}
	if (this.z6x(m8c))
	{
		this.z5w();
		this.r4l.l6i = this.z7r;
		return;
	}
	if (this.z6x(e4y))
	{
		this.z5w();
		this.r4l.m9x = this.z7r;
		return;
	}
	if (this.z6x(l6s))
	{
		this.z5w();
		this.r4l.b1x = this.z7r;
		return;
	}
	if (this.z6x(g1d))
	{
		this.z5w();
		this.r4l.e2f = this.z7r;
		return;
	}
	if (this.z6x(s3l))
	{
		this.z5w();
		this.r4l.b7o = this.z7r;
		return;
	}
	if (this.z6x(i6l))
	{
		this.z5w();
		this.r4l.h5t = this.z7r;
		return;
	}
	if (this.z6x(h9n))
	{
		this.z5w();
		this.r4l.n1v = this.z7r;
		return;
	}
	if (this.z6x(v0l))
	{
		this.z5w();
		this.r4l.q7o = this.z7r;
		return;
	}

	
	if (this.z6x(r6w))
	{
		this.z5w();
		this.r4l.p0d = this.z7r;
		return;
	}

	
	if (this.z6x(q8r))
	{
		this.z5w();
		this.r4l.r9j = this.z7r;
		return;
	}
	if (this.z6x(x7d))
	{
		this.z5w();
		this.r4l.r9j = this.z7r;
		return;
	}
	if (this.z6x(y8l))
	{
		this.z5w();
		this.r4l.d6s = this.z7r;
		return;
	}
	if (this.z6x(x8g))
	{
		this.z5w();
		this.r4l.i9k = this.z7r;
		return;
	}
	if (this.z6x(c2b))
	{
		this.z5w();
		this.r4l.i9k = this.z7r;
		return;
	}
	if (this.z6x(i1y))
	{
		this.z5w();
		this.r4l.f8g = this.z7r;
		return;
	}
	if (this.z6x(s1a))
	{
		this.z5w();
		this.r4l.c0x = this.z7r;
		return;
	}
	if (this.z6x(s4r))
	{
		this.z5w();
		this.r4l.v3d = this.z7r;
		return;
	}

	
	if (this.z6x(y8y))
	{
		this.z5w();
		this.r4l.a5f = this.z7r;
		return;
	}

	
	if (this.z6x(s6y))
	{
		this.z5w();
		this.r4l.u9c = this.z7r;
		return;
	}
	if (this.z6x(t8c))
	{
		this.z5w();
		this.r4l.s4a = this.z7r;
		return;
	}
	if (this.z6x(r8h))
	{
		this.z5w();
		this.r4l.q2o = this.z7r;
		return;
	}
	if (this.z6x(u4a))
	{
		this.z5w();
		this.r4l.u4x = this.z7r;
		return;
	}

	
	if (this.z6x(k3q))
	{
		this.z5w();
		this.r4l.k8u = this.z7r;
		return;
	}

	
	if (this.z6x(t3o))
	{
		this.z5w();
		return;
	}
	if (this.z6x(q9a))
	{
		this.z5w();
		if (this.z7r.length == 0 || this.z7r == "?")
		{
			return;
		}
		this.z3w = true;
		this.p2d = this.z7r;
		return;
	}
	if (this.z6x(p4t))
	{
		this.z5w();
		this.r5k = j3e(this.z7r, 0);
		return;
	}
  
 	if (this.z6x(v5t))
	{
		this.z5w();
		this.r4l.d5c = this.z7r;
		return;
	}

}

p5u(p4p)
{
	let e6v = new s7c();
	let j0v = p4p.substr(6, p4p.length - 6);
	let c4p = j0v.split(",");
	for (const s of c4p)
	{
		if (s.length < 5)
		{
			continue;
		}
		let b8x = g1t(s.substr(1, 2));
		let c2m = g1t(s.substr(3, 2));
		if (s[0] == 'R')
		{
			let f3z = a0s(b8x, c2m, c3j.x7q);
			e6v.add(f3z);
		}
		else if (s[0] == 'G')
		{
			let f3z = a0s(b8x, c2m, c3j.u1e);
			e6v.add(f3z);
		}
		else if (s[0] == 'Y')
		{
			let f3z = a0s(b8x, c2m, c3j.s9u);
			e6v.add(f3z);
		}
	}
	return e6v;
}

t5h(p4p)
{
	let a7a = new x6l();
	let j0v = p4p.substr(6, p4p.length - 6);
	let c4p = j0v.split(",");
	for (const s of c4p)
	{
		if (s.length < 3)
		{
			continue;
		}
 		let z4p = g1t(s.substr(1, 2));
		if (s[0] == 'R')
		{
      let e6o = c7t(z4p, c7m.i5e);
			a7a.add(e6o);
		}
		else if (s[0] == 'G')
		{
      let e6o = c7t(z4p, c7m.g3t);
			a7a.add(e6o);
		}
		else if (s[0] == 'Y')
		{
      let e6o = c7t(z4p, c7m.y8e);
			a7a.add(e6o);
		}
	}
	return a7a;
}

y1y(p4p)
{
	let j0v = p4p.substr(6, p4p.length - 6);
	let l6q = j0v.indexOf("]");
	if (l6q != -1)
	{
		let n4n = new p6t();
		let value = j3e(j0v.substr(0, l6q), 0);
		n4n.h8a(value);
		return n4n;
	}
	else
	{
		return new p6t();
	}
}


s6z(p4p, o3w)
{
	if (
		p4p.startsWith("[%cal") ||
    p4p.startsWith("[%csb") ||
		p4p.startsWith("[%csl") ||
		p4p.startsWith("[%mdl") ||
		p4p.startsWith("[%evp") ||
		p4p.startsWith("[%eval") ||
		p4p.startsWith("[%emt") ||
		p4p.startsWith("[%tqu") ||
		p4p.startsWith("[%tqu") ||
		p4p.startsWith("[%pws") ||
		p4p.startsWith("[%pth") ||
		p4p.startsWith("[%eog"))
	{
		let e8v = 0;
		{
     	let z0h = p4p.indexOf("[%cal");
			if (z0h != -1)
			{
        let v6b = p4p.indexOf("]", z0h);
				if (v6b != -1)
				{
     			let z2d = p4p.substring(z0h, v6b + 1);
					o3w.j3b = this.p5u(z2d).o0o();
					if (v6b > e8v) e8v = v6b;
				}
			}
		}
		{
     	let z0h = p4p.indexOf("[%csb");
   		if (z0h != -1)
			{
        let v6b = p4p.indexOf("]", z0h);
				if (v6b != -1)
				{
          let n3h = p4p.substring(z0h, v6b + 1);
					o3w.m2b = this.t5h(n3h).o0o();
					if (v6b > e8v) e8v = v6b;
				}
			}
		}
		{
      let z0h = p4p.indexOf("[%csl");
			if (z0h != -1)
			{
        let v6b = p4p.indexOf("]", z0h);
				if (v6b != -1)
				{
          let n3h = p4p.substring(z0h, v6b + 1);
					o3w.m2b = this.t5h(n3h).o0o();
					if (v6b > e8v) e8v = v6b;
				}
			}
		}
		{
      let z0h = p4p.indexOf("[%mdl");
			if (z0h != -1)
			{
        let v6b = p4p.indexOf("]", z0h);
				if (v6b != -1)
				{
          let o4s = p4p.substring(z0h, v6b + 1);
					o3w.n4n = this.y1y(o4s).o0o();
					if (v6b > e8v) e8v = v6b;
				}
			}
		}
		{
      let z0h = p4p.indexOf("[%evp");
			if (z0h != -1)
			{
        let v6b = p4p.indexOf("]", z0h);
				if (v6b != -1)
				{
					if (v6b > e8v) e8v = v6b;
				}
			}
		}
		{
      let z0h = p4p.indexOf("[%eval");
			if (z0h != -1)
			{
        let v6b = p4p.indexOf("]", z0h);
				if (v6b != -1)
				{
					if (v6b > e8v) e8v = v6b;
				}
			}
		}
		{
      let z0h = p4p.indexOf("[%emt");
			if (z0h = -1)
			{
        let v6b = p4p.indexOf("]", z0h);
				if (v6b != -1)
				{
					if (v6b > e8v) e8v = v6b;
				}
			}
		}
		{
      let z0h = p4p.indexOf("[%tqu");
			if (z0h != -1)
			{
        let v6b = p4p.indexOf("]", z0h);
				if (v6b != -1)
				{
					if (v6b > e8v) e8v = v6b;
				}
			}
		}
		{
      let z0h = p4p.indexOf("[%pws");
			if (z0h != -1)
			{
        let v6b = p4p.indexOf("]", z0h);
				if (v6b != -1)
				{
          o3w.s7l = true;
					if (v6b > e8v) e8v = v6b;
				}
			}
		}
		{
      let z0h = p4p.indexOf("[%pth");
			if (z0h != -1)
			{
        let v6b = p4p.indexOf("]", z0h);
				if (v6b != -1)
				{
          o3w.f3q = true;
					if (v6b > e8v) e8v = v6b;
				}
			}
		}
		{
      let z0h = p4p.indexOf("[%eog");
			if (z0h != -1)
			{
        let v6b = p4p.indexOf("]", z0h);
				if (v6b != -1)
				{
					o3w.h7b = true; 
					if (v6b > e8v) e8v = v6b;
				}
			}
		}
    o3w.y0y = p4p.substring(e8v + 1);
	}
	else
	{
		o3w.y0y = p4p;
	}
}

}

class i6u
{

constructor()
{
  this.z0p = 0;
	this.g0g = new l6g();
	this.v3n = new e5q();
}

o0o()
{
	let q8t = new i6u();
  q8t.z0p = this.z0p;
	q8t.g0g = this.g0g.o0o();
	q8t.v3n = this.v3n.o0o();
	return q8t;
}

}

class l6g
{

constructor()
{
	this.i3f = '';
	this.x6m = '';
	this.k9q = '';
	this.j8o = '';
	this.s2z = '';
	this.l6h = '';
	this.k5o = '';
	this.j8e = '';
	this.a8l = '';
  this.q4p = '';
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
	this.m1d = '';
	this.x2m = '';
	this.g5h = '';
	this.i2q = '';
	this.q6f = '';
	this.l6i = '';
	this.m9x = '';
	this.b1x = '';
	this.e2f = '';
	this.b7o = '';
	this.h5t = '';
	this.n1v = '';
	this.q7o = '';
	this.p0d = '';
	this.r9j = '';
	this.d6s = '';
	this.i9k = '';
	this.f8g = '';
	this.c0x = '';
	this.v3d = '';
	this.a5f = '';
	this.u9c = '';
	this.s4a = '';
	this.q2o = '';
	this.u4x = '';
	this.k8u = '';
  this.d5c = '';
}

o0o()
{
	let q0t = new l6g();

	q0t.i3f = this.i3f;
	q0t.x6m = this.x6m;
	q0t.k9q = this.k9q;
	q0t.j8o = this.j8o;
	q0t.s2z = this.s2z;
	q0t.l6h = this.l6h;
	q0t.k5o = this.k5o;
	q0t.j8e = this.j8e;
	q0t.a8l = this.a8l;
	q0t.q4p = this.q4p;

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

	q0t.m1d = this.m1d;
	q0t.x2m = this.x2m;
	q0t.g5h = this.g5h;
	q0t.i2q = this.i2q;
	q0t.q6f = this.q6f;
	q0t.l6i = this.l6i;
	q0t.m9x = this.m9x;
	q0t.b1x = this.b1x;
	q0t.e2f = this.e2f;
	q0t.b7o = this.b7o;
	q0t.h5t = this.h5t;
	q0t.n1v = this.n1v;
	q0t.q7o = this.q7o;

	q0t.p0d = this.p0d;

	q0t.r9j = this.r9j;
	q0t.d6s = this.d6s;
	q0t.i9k = this.i9k;
	q0t.f8g = this.f8g;
	q0t.c0x = this.c0x;
	q0t.v3d = this.v3d;

	q0t.a5f = this.a5f;

	q0t.u9c = this.u9c;
	q0t.s4a = this.s4a;
	q0t.q2o = this.q2o;
	q0t.u4x = this.u4x;

	q0t.k8u = this.k8u;
 	q0t.d5c = this.d5c;

	return q0t;
}

}


const x2b =
[
		[ y2m.j1l, 				  									"",											            "", 																	"",   ""    ],
		[ y2m.y1b, 										  "Afghanistan",											"Afghanistan", 												"af", "AFG" ],
		[ y2m.c7i, 									 	"AlandIslands",										  "Aland", 															"ax", "ALA" ],
		[ y2m.b5p,  											 	"Albania",													"Albania", 														"al", "ALB" ],
		[ y2m.m6r,  											 	"Algeria",													"Algeria", 														"dz", "DZA" ],
		[ y2m.e3c,  								 	"AmericanSamoa",										"American Samoa", 										"as", "ASM" ],
		[ y2m.y9c,  											 	"Andorra",													"Andorra", 														"ad", "AND" ],
		[ y2m.l7b,                           "Angola",													  "Angola", 														"ao", "AGO" ],
		[ y2m.o8n,  											  "Anguilla",												  "Anguilla", 													"ai", "AIA" ],
		[ y2m.l7l,  										  "Antarctica",											  "Antarctica", 												"aq", "ATA" ],
		[ y2m.e6b,  								  "AntiguaBarbuda",									  "Antigua & Barbuda", 									"ag", "ATG" ],
		[ y2m.s0u,  										 	"Argentina",												"Argentina", 													"ar", "ARG" ],
		[ y2m.u2h,  											 	"Armenia",													"Armenia",														"am", "ARM" ],
		[ y2m.p3n,  												 	"Aruba",														"Aruba",															"aw", "ABW" ],
		[ y2m.f9i,  										 	"Australia",												"Australia",													"au", "AUS" ],
		[ y2m.d4j,  											 	"Austria",													"Austria",											 			"at", "AUT" ],
		[ y2m.x7e,  										  "Azerbaijan",											  "Azerbaijan",													"az", "AZE" ],
		[ y2m.q5b,  											 	"Bahamas",													"Bahamas",														"bs", "BHS" ],
		[ y2m.z4v,  											 	"Bahrain",													"Bahrain",														"bh", "BHR" ],
		[ y2m.h5x,  										  "Bangladesh",											  "Bangladesh",													"bd", "BGD" ],
		[ y2m.l5o,  											  "Barbados",												  "Barbados",														"bb", "BRB" ],
		[ y2m.d9n,  								 	"BasqueCountry",	 									"Basque Country",     								"x1", "XX1" ], 
		[ y2m.o3k,  											 	"Belarus",													"Belarus",														"by", "BLR" ],
		[ y2m.w3v,  											 	"Belgium",													"Belgium",														"be", "BEL" ],
		[ y2m.x8m,  												  "Belize",													  "Belize",															"bz", "BLZ" ],
		[ y2m.r4n,  												 	"Benin",														"Benin",															"bj", "BEN" ],
		[ y2m.d8i,  											 	"Bermuda",													"Bermuda",														"bm", "BMU" ],
		[ y2m.v7x,  												  "Bhutan",													  "Bhutan",															"bt", "BTN" ],
		[ y2m.s9q,  												"Bolivia",													"Bolivia",														"bo", "BOL" ],
		[ y2m.b6d,  						  "BosniaHerzegovina",       				  "Bosnia & Herzegovina", 							"ba", "BIH" ], 
		[ y2m.c9t,  											  "Botswana",                      	  "Botswana",														"bw", "BWA" ],
		[ y2m.q1h,  									  "BouvetIsland",                 		"Bouvet",															"bv", "BVT" ],
		[ y2m.x2z,  												  "Brazil",                        	  "Brazil",															"br", "BRA" ],
		[ y2m.s8i,  	 	"BritishIndianOceanTerritory",			"British Indian Ocean Territory", 		"io", "IOT" ],
		[ y2m.l7v, 							 	"BruneiDarussalam",								  "Brunei",															"bn", "BRN" ], 
		[ y2m.w3b,  											  "Bulgaria",												  "Bulgaria", 													"bg", "BGR" ],
		[ y2m.q4j, 										  "BurkinaFaso",											"Burkina Faso",												"bf", "BFA" ],
		[ y2m.g2o,  											 	"Burundi",													"Burundi",														"bi", "BDI" ],
		[ y2m.y7u,  											  "Cambodia",												  "Cambodja",														"kh", "KHM" ],
		[ y2m.g6o,  											  "Cameroon",												  "Cameroon",														"cm", "CMR" ],
		[ y2m.x5m,  												  "Canada",													  "Canada",															"ca", "CAN" ],
		[ y2m.q2h,  										  "CapeVerde",												"Cape Verde",													"cv", "CPV" ], 
		[ y2m.c7g,  										  "Catalonia",												"Catalonia",													"x2", "XX2" ], 
		[ y2m.p4u,  								  "CaymanIslands",										"Cayman Islands",											"ky", "CYM" ],
		[ y2m.e6r,  				  "CentralAfricanRepublic",					  "Central African Republic",						"cf", "CAF" ],
		[ y2m.v3g,  													  "Chad",														  "Chad",																"td", "TCD" ],
		[ y2m.e6q,  												 	"Chile",														"Chile",															"cl", "CHL" ],
		[ y2m.u0f,  												 	"China",														"China",															"cn", "CHN" ],
		[ y2m.w0h,  							 	"ChristmasIsland",									"Christmas",													"cx", "CXR" ],
		[ y2m.g5q,  					 	"CocosKeelingIslands",							"Cocos (Keeling)",										"cc", "CCK" ], 
		[ y2m.n7y,  											  "Colombia",												  "Colombia",														"co", "COL" ],
		[ y2m.s4e,  											 	"Comoros",													"Comoros",														"km", "COM" ],
		[ y2m.d7o,  												 	"Congo",														"Congo-Brazzaville", 						    	"cg", "COG" ],
		[ y2m.y0x,  			 	"CongoDemocraticRepublic",					"Congo-Kinshasa(Zaire)",						  "cd", "COD" ],
		[ y2m.h8r,  									 	"CookIslands",											"Cook Islands",											 	"ck", "COK" ],
		[ y2m.z7g,  											"CostaRica",												"Costa Rica",												 	"cr", "CRI" ],
		[ y2m.z5g,  												"Croatia",													"Croatia",														"hr", "HRV" ],
		[ y2m.u5v,  													  "Cuba",														  "Cuba",															 	"cu", "CUB" ],
		[ y2m.q0q,  												"Curacao",													"Curacao",											  		"cw", "CUW" ],
		[ y2m.b2c,  												  "Cyprus",													  "Cyprus",														 	"cy", "CYP" ],
		[ y2m.r1a,  									      "Czechia",										      "Czech Republic", 										"cz", "CZE" ],
		[ y2m.y2h,  										  "CoteIvoire",	   					 				  "Cote d'Ivoire",											"ci", "CIV" ],
		[ y2m.y1l,  												"Denmark",													"Denmark",													  "dk", "DNK" ],
		[ y2m.d5m,  											  "Djibouti",												  "Djibouti",													 	"dj", "DJI" ],
		[ y2m.j5l,  											  "Dominica",												  "Dominica",													 	"dm", "DMA" ],
		[ y2m.q6v,  							"DominicanRepublic",								"Dominican Republic",								 	"do", "DOM" ],
		[ y2m.n5i,  												"Ecuador",													"Ecuador",													 	"ec", "ECU" ],
		[ y2m.a4i,  													"Egypt",														"Egypt", 														 	"eg", "EGY" ],
		[ y2m.r8x,  										  "ElSalvador",											  "El Salvador",												"sv", "SLV" ],
		[ y2m.c4b,  												"England",													"England",														"x3", "GBR" ],
		[ y2m.v9y,  							  "EquatorialGuinea",								  "Equatorial Guinea",									"gq", "GNQ" ], 
		[ y2m.j3x,  												"Eritrea",													"Eritrea",														"er", "ERI" ],
		[ y2m.v4n,  												"Estonia",													"Estonia",														"ee", "EST" ],
		[ y2m.p3e,  											  "Ethiopia",												  "Ethiopia",													 	"et", "ETH" ],
		[ y2m.r4z,  								"FalklandIslands",									"England",														"fk", "FLK" ], 
		[ y2m.i8p,  									  "FaroeIslands",										  "Faroes",														 	"fo", "FRO" ],
		[ y2m.d1l,  													  "Fiji",														  "Fiji",															 	"fj", "FJI" ],
		[ y2m.h5y,  												"Finland",													"Finland",														"fi", "FIN" ],
		[ y2m.m7r,  												  "France",													  "France",														 	"fr", "FRA" ],
		[ y2m.x1e,  									  "FrenchGuiana",										  "Guyana", 														"gf", "GUF" ], 
		[ y2m.c6i,  								"FrenchPolynesia",									"Tahiti(French Polinesia)", 					"pf", "PYF" ], 
		[ y2m.b7j,  			"FrenchSouthernTerritories",				"French Southern and Antarctic Lands","tf", "ATF" ],
		[ y2m.h6r,  													"Gabon",														"Gabon",															"ga", "GAB" ], 
		[ y2m.s0k,  												  "Gambia",													  "Gambia",															"gm", "GMB" ],
		[ y2m.q7i,  												"Georgia",													"Georgia",														"ge", "GEO" ],
		[ y2m.d1t,  												"Germany",													"Germany",														"de", "DEU" ],
		[ y2m.s6k, 													  "Ghana",														"Ghana",															"gh", "GHA" ],
		[ y2m.b3y,  											"Gibraltar",												"Gibraltar",													"gi", "GIB" ],
		[ y2m.i2x,  												  "Greece",													  "Greece",															"gr", "GRC" ],
		[ y2m.o4f,  											"Greenland",												"Greenland",													"gl", "GRL" ],
		[ y2m.v8q,  												"Grenada",													"Grenada",														"gd", "GRD" ],
		[ y2m.w2b,  										  "Guadeloupe",											  "Guadeloupe",													"gp", "GLP" ],
		[ y2m.b0q,  													  "Guam",														  "Guam",																"gu", "GUM" ],
		[ y2m.h1h,  											"Guatemala",												"Guatemala",													"gt", "GTM" ],
		[ y2m.y5p,  											  "Guernsey",												  "Guernsey",														"gg", "GGY" ], 
		[ y2m.y6m,  												  "Guinea",													  "Guinea",															"gn", "GIN" ],
		[ y2m.y3p,  									  "GuineaBissau",										  "Guinea-Bissau",											"gw", "GNB" ],
		[ y2m.c9m,  												  "Guyana",													  "Guyana",															"gy", "GUY" ],
		[ y2m.f1m,  													"Haiti",														"Haiti",															"ht", "HTI" ],
		[ y2m.k1k, 			"HeardIslandMcDonaldIslands", 			"Australia",   									  		"hm", "HMD" ],
		[ y2m.q7f,  			 	                "Vatican",	  			                "Vatican City", 											"va", "VAT" ],
		[ y2m.d1o,  											  "Honduras",												  "Honduras",														"hn", "HND" ],
		[ y2m.u0d,  											  "HongKong",												  "Hong Kong",													"hk", "HKG" ],
		[ y2m.v4x,  											 	"Hungary",													"Hungary",														"hu", "HUN" ],
		[ y2m.u0c,  											 	"Iceland",													"Iceland",														"is", "ISL" ],
		[ y2m.q8g,  												 	"India",														"India",															"in", "IND" ],
		[ y2m.s1s,  										 	"Indonesia",												"Indonesia",													"id", "IDN" ],
		[ y2m.e9c,  													  "Iran",														  "Iran",																"ir", "IRN" ],
		[ y2m.g2p,  													  "Iraq",														  "Iraq",																"iq", "IRQ" ],
		[ y2m.g0f,  											 	"Ireland",													"Ireland",														"ie", "IRL" ],
		[ y2m.d9l,  										 	"IsleOfMan",												"Isle of Man",												"im", "IMN" ],
		[ y2m.f1x,  												  "Israel",													  "Israel",															"il", "ISR" ],
		[ y2m.g5b,  												 	"Italy",														"Italy",															"it", "ITA" ],
		[ y2m.x6h,  											 	"Jamaica",													"Jamaica",														"jm", "JAM" ],
		[ y2m.w9g,  											  "JanMayen",								  			  "Norway", 														"x4", "XX4" ], 
		[ y2m.y4l,  												 	"Japan",														"Japan",															"jp", "JPN" ],
		[ y2m.d6j,  												  "Jersey",													  "Jersey",															"je", "JEY" ],
		[ y2m.m1q,  												  "Jordan",													  "Jordan",															"jo", "JOR" ],
		[ y2m.d9x,  										  "Kazakhstan",											  "Kazakhstan",													"kz", "KAZ" ],
		[ y2m.a3z,  												 	"Kenya",														"Kenya",															"ke", "KEN" ],
		[ y2m.z3s,  											  "Kiribati",												  "Kiribati",														"ki", "KIR" ],
		[ y2m.l0o,  										  "KoreaNorth",											  "North Korea",												"kp", "PRK" ], 
		[ y2m.g9c,  										  "KoreaSouth",	 	  								  "South Korea", 												"kr", "KOR" ], 
		[ y2m.q7u,  												  "Kosovo",													  "Kosovo",															"x5", "RKS" ],
		[ y2m.x0v,  												  "Kuwait",													  "Kuwait",															"kw", "KWT" ],
		[ y2m.m4a,  										  "Kyrgyzstan",											  "Kyrgyzstan",													"kg", "KGZ" ],
		[ y2m.g6r,  													  "Laos",														  "Laos",																"la", "LAO" ],
		[ y2m.a6d, 	 											 	"Latvia",													  "Latvia",															"lv", "LVA" ],
		[ y2m.o3j,  											 	"Lebanon",													"Lebanon",														"lb", "LBN" ],
		[ y2m.y5o, 												  "Lesotho",													"Lesotho",														"ls", "LSO" ],
		[ y2m.q8p,  											 	"Liberia",													"Liberia",														"lr", "LBR" ],
		[ y2m.c8w,  												 	"Libya",														"Libya",															"ly", "LBY" ],
		[ y2m.e6g,  								 	"Liechtenstein",										"Liechtenstein",											"li", "LIE" ],
		[ y2m.l4z,  										 	"Lithuania",												"Lithuania",													"lt", "LTU" ],
		[ y2m.l3h,  										  "Luxembourg",											  "Luxembourg",													"lu", "LUX" ],
		[ y2m.macau,  												 	"Macau",														"Macau",															"mo", "MAC" ],
		[ y2m.q9c,  	  					 	  "NorthMacedonia",	   							  "Macedonia",													"mk", "MKD" ],
		[ y2m.d8q,  										  "Madagascar",											  "Madagascar",													"mg", "MDG" ],
		[ y2m.b3a,  												  "Malawi",													  "Malawi",															"mw", "MWI" ],
		[ y2m.q5v,  											  "Malaysia",												  "Malaysia",														"my", "MYS" ],
		[ y2m.n1f,  											  "Maldives",												  "Maldives",														"mv", "MDV" ],
		[ y2m.r9x, 													 	"Mali",														  "Mali",																"ml", "MLI" ],
		[ y2m.g7h,  												 	"Malta",														"Malta",															"mt", "MLT" ],
		[ y2m.i3x,  							 	"MarshallIslands",									"Marshall Islands",										"mh", "MHL" ],
		[ y2m.a7c,  										  "Martinique",											  "Martinique",													"mq", "MTQ" ],
		[ y2m.g9j,  										  "Mauritania",											  "Mauritania",													"mr", "MRT" ],
		[ y2m.o1c,  										 	"Mauritius",												"Mauritius",													"mu", "MUS" ],
		[ y2m.s2u,  											  "Mayotte",													"Mayotte",														"yt", "MYT" ],
		[ y2m.k0p,  												  "Mexico",													  "Mexico",															"mx", "MEX" ],
		[ y2m.u5i,  										  "Micronesia",											  "Micronesia",													"fm", "FSM" ],
		[ y2m.u5r,  											 	"Moldova",													"Moldova",														"md", "MDA" ],
		[ y2m.v1d,  												  "Monaco",													  "Monaco",															"mc", "MCO" ],
		[ y2m.o5h,  											  "Mongolia",												  "Mongolia",														"mn", "MNG" ],
		[ y2m.o2k,  										  "Montenegro",											  "Montenegro",													"me", "MNE" ],
		[ y2m.l6c,  										  "Montserrat",											  "Montserrat",													"ms", "MSR" ],
		[ y2m.q1l,  												"Morocco",													"Morocco",														"ma", "MAR" ],
		[ y2m.y2s,  										  "Mozambique",											  "Mozambique",													"mz", "MOZ" ],
		[ y2m.h8n, 												  "Myanmar",													"Myanmar(Burma)", 										"mm", "MMR" ],
		[ y2m.m5g,  												"Namibia",													"Namibia",														"na", "NAM" ],
		[ y2m.k7f,  													"Nauru",														"Nauru",															"nr", "NRU" ],
		[ y2m.y1k,  													"Nepal",														"Nepal",															"np", "NPL" ],
		[ y2m.x3y,  										"TheNetherlands",	  							  "Netherlands",												"nl", "NLD" ],
		[ y2m.z0x, 						  "NetherlandsAntilles",							"Netherlands Antilles",								"an", "ANT" ],
		[ y2m.a7d,  									  "NewCaledonia",										  "New Caledonia",											"nc", "NCL" ],
		[ y2m.v8b,  										  "NewZealand",											  "New Zealand",												"nz", "NZL" ],
		[ y2m.t7o,  											"Nicaragua",												"Nicaragua",													"ni", "NIC" ],
		[ y2m.l5e,  													"Niger",														"Niger",															"ne", "NER" ],
		[ y2m.i4f,  												"Nigeria",													"Nigeria",														"ng", "NGA" ],
		[ y2m.b9j,  													  "Niue",														  "Niue",																"nu", "NIU" ],
		[ y2m.u7c,  									"NorfolkIsland",										"Norfolk", 														"nf", "NFK" ],
		[ y2m.x6w,  								"NorthernIreland",									"Northern Ireland",										"x6", "GBR" ], 
		[ y2m.y6k,  				  "NorthernMarianaIslands",					  "Northern Mariana",										"mp", "MNP" ],
		[ y2m.s2x,  												  "Norway",													  "Norway",															"no", "NOR" ],
		[ y2m.k1s,  													  "Oman",														  "Oman",																"om", "OMN" ],
		[ y2m.a4t,  											  "Pakistan",												  "Pakistan",														"pk", "PAK" ],
		[ y2m.e1i,  													"Palau",														"Palau",															"pw", "PLW" ],
		[ y2m.t6j,  											"Palestine",												"Palestine",													"ps", "PSE" ],
		[ y2m.a9g,  												  "Panama",													  "Panama",															"pa", "PAN" ],
		[ y2m.u9r,  								  "PapuaNewGuinea",									  "Papua New Guinea",										"pg", "PNG" ],
		[ y2m.e2y,  											  "Paraguay",												  "Paraguay",														"py", "PRY" ],
		[ y2m.x9m,  													  "Peru",														  "Peru",																"pe", "PER" ],
		[ y2m.l1s,  										"Philippines",											"Philippines",												"ph", "PHL" ],
		[ y2m.o1q,  											  "Pitcairn",												  "Pitcairn",														"pn", "PCN" ],
		[ y2m.a6q,  												  "Poland",													  "Poland",															"pl", "POL" ],
		[ y2m.y5a,  											  "Portugal",												  "Portugal",														"pt", "PRT" ],
		[ y2m.k6w,  										  "PuertoRico",											  "Puerto Rico",												"pr", "PRI" ],
		[ y2m.r9g,  													"Qatar",														"Qatar",															"qa", "QAT" ],
		[ y2m.n4a,  												"Reunion",													"Reunion",														"re", "REU" ],
		[ y2m.p9b,  												"Romania",													"Romania",														"ro", "ROU" ],
		[ y2m.f2w,  												  "Russia",													  "Russian Federation", 								"ru", "RUS" ],
		[ y2m.d7w,  												  "Rwanda",													  "Rwanda",															"rw", "RWA" ],
		[ y2m.c8o,  								"SaintBarthelemy",									"Saint Barthelemy", 									"bl", "BLM" ],
		[ y2m.c3f,  										"SaintHelena",											"Saint Helena", 											"sh", "SHN" ], 
		[ y2m.v1h,  								"SaintKittsNevis",									"St Kitts & Nevis", 									"kn", "KNA" ], 
		[ y2m.c7h, 											"SaintLucia",											  "Saint Lucia", 												"lc", "LCA" ], 
		[ y2m.k0h,  					"SaintMartinFrenchPart",  					"Saint Martin", 											"mf", "MAF" ],
		[ y2m.p8b,  						"SaintPierreMiquelon",							"Saint Pierre and Miquelon", 					"pm", "SPM" ], 
		[ y2m.f6h,  				  "SaintVincentGrenadines",					  "St Vincent & the Grenadines", 				"vc", "VCT" ], 
		[ y2m.e8s,  													"Samoa",														"Samoa",															"ws", "WSM" ],
		[ y2m.h0t,  											"SanMarino",												"San Marino",													"sm", "SMR" ],
		[ y2m.v7w,  								"SaoTomePrincipe",									"Sao Tome & Principe", 								"st", "STP" ],
		[ y2m.y6x,  										"SaudiArabia",											"Saudi Arabia", 											"sa", "SAU" ],
		[ y2m.b8l,  											  "Scotland",												  "Scotland",														"x7", "GBR" ],
		[ y2m.e9x,  												"Senegal",													"Senegal",														"sn", "SEN" ],
		[ y2m.z7d,  												  "Serbia",													  "Serbia(Yugoslavia)", 								"rs", "SRB" ],
		[ y2m.c2e,  										  "Seychelles",											  "Seychelles",													"sc", "SYC" ],
		[ y2m.o4z,  									  "SierraLeone",											"Sierra Leone",												"sl", "SLE" ],
		[ y2m.q8e,  										 	"Singapore",												"Singapore",													"sg", "SGP" ],
		[ y2m.d1g,						  "SintMaartenDutchPart",  					  "Sint Maarten",												"sx", "SXM" ],
		[ y2m.u2e,  											  "Slovakia",												  "Slovakia",														"sk", "SVK" ],
		[ y2m.s6n,  											  "Slovenia",												  "Slovenia",														"si", "SVN" ],
		[ y2m.w7e,  								  "SolomonIslands",									  "Solomon Islands", 										"sb", "SLB" ],
		[ y2m.a9w,  											 	"Somalia",													"Somalia",														"so", "SOM" ],
		[ y2m.h1v,  									 	"SouthAfrica",											"South Africa",												"za", "ZAF" ],
		[ y2m.o4t, "SouthGeorgiaSouthSandwichIslands", "South Georgia and South Sandwich", 	"gs", "SGS" ],
		[ y2m.t2o,  										  "SouthSudan",											  "Southern Sudan", 										"ss", "SSD" ],
		[ y2m.c0u,  									 	"SovietUnion",											"Soviet Union", 			 								"su", "URS" ],
		[ y2m.s3y, 	 												  "Spain",														"Spain",															"es", "ESP" ],
		[ y2m.w1j,  											  "SriLanka",												  "Sri Lanka",													"lk", "LKA" ],
		[ y2m.o9y,  												 	"Sudan",														"Sudan",															"sd", "SDN" ],
		[ y2m.b6m,  											  "Suriname",												  "Suriname",														"sr", "SUR" ], 
		[ y2m.g0r,  											  "Svalbard",												  "Norway", 														"sj", "SJM" ], 
		[ y2m.w1d,  										 	"Swaziland",												"Swaziland",													"sz", "SWZ" ],
		[ y2m.a7n,  												  "Sweden",													  "Sweden",															"se", "SWE" ],
		[ y2m.p0y,  									 	"Switzerland",											"Switzerland",												"ch", "CHE" ],
		[ y2m.e6u,  												 	"Syria",														"Syria",															"sy", "SYR" ],
		[ y2m.u7h,  												  "Taiwan",													  "Taiwan",															"tw", "TWN" ],
		[ y2m.g9a,  										  "Tajikistan",											  "Tajikistan",													"tj", "TJK" ],
		[ y2m.k6b,  											  "Tanzania",												  "Tanzania",														"tz", "TZA" ],
		[ y2m.c7v, 											  "Thailand",												  "Thailand",														"th", "THA" ],
		[ y2m.m6x,  										  "TimorLeste",	  									  "Timor-Leste", 												"tl", "TLS" ], 
		[ y2m.t4s, 													 	"Togo",														  "Togo",																"tg", "TGO" ],
		[ y2m.g6m,  											 	"Tokelau",													"Tokelau",														"tk", "TKL" ], 
		[ y2m.l0e,  												 	"Tonga",														"Tonga",															"to", "TON" ],
		[ y2m.q1j,  								  "TrinidadTobago",									  "Trinidad & Tobago", 									"tt", "TTO" ],
		[ y2m.y7r,  												"Tunisia",													"Tunisia",														"tn", "TUN" ],
		[ y2m.x5x,  												  "Turkey",													  "Turkey",															"tr", "TUR" ],
		[ y2m.v4y,  									  "Turkmenistan",										  "Turkmenistan",												"tm", "TKM" ],
		[ y2m.b0f,  						  "TurksCaicosIslands",							  "Turks and Caicos Islands", 					"tc", "TCA" ],
		[ y2m.i1x,  												  "Tuvalu",													  "Tuvalu", 														"tv", "TUV" ],
		[ y2m.t9h,  												  "Uganda",													  "Uganda",															"ug", "UGA" ],
		[ y2m.d4y,  											  "Ukraine",													"Ukraine",														"ua", "UKR" ],
		[ y2m.x1x,  						  "UnitedArabEmirates",							  "United Arab Emirates",								"ae", "ARE" ],
		[ y2m.t6y,  									"UnitedKingdom",										"United Kingdom(Great Britain)", 			"gb", "GBR" ], 
		[ y2m.e0h,  									  "UnitedStates",										  "United States of America", 					"us", "USA" ],
		[ y2m.s8u, "UnitedStatesMinorOutlyingIslands", "United States of America",						"um", "UMI" ],
		[ y2m.n9s,  										 		"Uruguay",													"Uruguay",														"uy", "URY" ],
		[ y2m.j9x,  									 	  "Uzbekistan",											  "Uzbekistan",													"uz", "UZB" ],
		[ y2m.l3p,  										 		"Vanuatu",													"Vanuatu",														"vu", "VUT" ],
		[ y2m.f0f,  											"Venezuela",												"Venezuela",													"ve", "VEN" ],
		[ y2m.x5s,  												"Vietnam",													"Viet Nam",														"vn", "VNM" ],
		[ y2m.g4b,  					  "VirginIslandsBritish",       			"Virgin Islands British", 						"vg", "VGB" ],
		[ y2m.d3r,  								"VirginIslandsUS",	  							"Virgin Islands US", 									"vi", "VIR" ],
		[ y2m.i1u,  													"Wales",														"Wales",															"x8", "GBR" ],
		[ y2m.t1f,  									  "WallisFutuna",										  "Wallis and Futuna",									"wf", "WLF" ],
		[ y2m.g7i,  									"WesternSahara",										"Western Sahara",											"eh", "ESH" ],
		[ y2m.o6x,  											 		"Yemen",														"Yemen",															"ye", "YEM" ],
		[ y2m.p9i,  											 		"Zaire",														"",																		"zr", "ZRN" ], 
		[ y2m.a8g,  											 	  "Zambia",													  "Zambia",															"zm", "ZMB" ],
		[ y2m.c8y,  										 	  "Zimbabwe",												  "Zimbabwe",														"zw", "ZWE" ],
];

function a0b(v0e)
{
	return x2b[v0e][2];
}

function e6a(v0e)
{
	return x2b[v0e][4];
}

function n7a(t9j)
{
	for (const v0e of x2b)
	{
		if (v0e[4] == t9j)
		{
			return v0e[0];
		}
	}
	return y2m.j1l;
}

function s0y(e9d)
{
	for (const v0e of x2b)
	{
		if (v0e[3] == e9d)
		{
			return v0e[0];
		}
	}
	return y2m.j1l;
}
class z1b
{

constructor()
{
	this.p4p = '';
}

i5y(j0v)
{
	this.p4p += j0v;
}

c3l(j0v)
{
	this.p4p += j0v + '\n';
}

a8u()
{
	this.p4p += '\n';
}

}




function j3e(j2x, l2i)
{
	let value = Number(j2x);
	if (isNaN(value))
	{
		return l2i;
	}
	else
	{
		return value;
	}
}
