const	chess = false; 

const o8u =
{
	i3f   : 0,
	k9k   : 1,
	i9a   : 2,
	a1p   : 3,
	k2v       : 4,
};

const v8z =
{
	o5v        : 0,
	u6y        : 1,
};

const	sq_1 = 0;
const k9w = 1;
const r6y = 2;
const v8n = 3;
const g8e = 4;
const a7i = 5;
const c6b = 6;
const c2h = 7;
const i4u = 8;
const o8m = 9;
const r7i = 10;
const h5g = 11;
const y3a = 12;
const m5m = 13;
const j3j = 14;
const s3f = 15;
const a8o = 16;
const u4e = 17;
const q9u = 18;
const t3i = 19;
const h6j = 20;
const j0q = 21;
const t4a = 22;
const d6p = 23;
const k8c = 24;
const j3q = 25;
const c3b = 26;
const x3i = 27;
const t0h = 28;
const q8y = 29;
const t8r = 30;
const z5u = 31;
const m5a = 32;
const o6a = 33;
const f0e = 34;
const w7i = 35;
const f4p = 36;
const y3r = 37;
const d9d = 38;
const p0j = 39;
const q4y = 40;
const g1q = 41;
const x5g = 42;
const y7c = 43;
const l9i = 44;
const v1u = 45;
const a1l = 46;
const e4x = 47;
const o8c = 48;
const b6f = 49;
const z4p = 50;

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
const n1d = 1;
const n4s = 2;
const k5x = 3;
const c5s = 4;
const t2c = 5;
const a2m = 6;
const h7p = 7;
const d8b = 8;
const u2v = 9;
const y4e = 10;

const c4f        = 10;
const e7n       = 50;
const t5z      = 20;

const a5z =
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
	o8u.i3f,  
	o8u.i3f,  
	o8u.i3f,  
	o8u.i3f,  
	o8u.i3f,  
	o8u.i3f,  
	o8u.i3f,  
	o8u.i3f,  
	o8u.i3f,  
	o8u.i3f,  
	o8u.i3f,  
	o8u.i3f,  
	o8u.i3f,  
	o8u.i3f,  
	o8u.i3f,  
	o8u.i3f,  
	o8u.i3f,  
	o8u.i3f,  
	o8u.i3f,  
	o8u.i3f,  
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
	sq_1,  k9w,  r6y,  v8n,  g8e,
	a7i,  c6b,  c2h,  i4u,  o8m,
	r7i, h5g, y3a, m5m, j3j,
	s3f, a8o, u4e, q9u, t3i,
	h6j, j0q, t4a, d6p, k8c,
	j3q, c3b, x3i, t0h, q8y,
	t8r, z5u, m5a, o6a, f0e,
	w7i, f4p, y3r, d9d, p0j,
	q4y, g1q, x5g, y7c, l9i,
	v1u, a1l, e4x, o8c, b6f,
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
  n1d,
  n4s,
  k5x,
  c5s,
  t2c,
  a2m,
  h7p,
  d8b,
  u2v,
];

function u0g(y3f)
{
	return y3f == o8u.i9a ||
    y3f == o8u.a1p;
}

function y7j(y3f)
{
	return y3f == o8u.i3f ||
    y3f == o8u.k9k;
}

function b6j(y3f)
{
	return y3f == o8u.i3f || y3f == o8u.i9a;
}

function r2e(y3f)
{
	return y3f == o8u.k9k || y3f == o8u.a1p;
}

function r7y(y0s)
{
	if (y0s == z4p)
	{
		return z4p;
	}
	else
	{
		return e7n - y0s - 1;
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

function y2e(y0s)
{
	return k7y[y0s];
}

const b6i =
[
	u2v, u2v,	u2v, u2v,	u2v,
	d8b,	 d8b,	d8b,	 d8b,	d8b,
	h7p,	 h7p,	h7p,	 h7p,	h7p,
	a2m,	 a2m,	a2m,	 a2m,	a2m,
	t2c,	 t2c,	t2c,	 t2c,	t2c,
	c5s,	 c5s,	c5s,	 c5s,	c5s,
	k5x,	 k5x,	k5x,	 k5x,	k5x,
	n4s,	 n4s,	n4s,	 n4s,	n4s,
	n1d,	 n1d,	n1d,	 n1d,	n1d,
	rank_1,	 rank_1,	rank_1,	 rank_1,	rank_1,
];

function x4d(y0s)
{
	return b6i[y0s];
}

function p0w(a, b)
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

function a3k(m6m, y3f)
{
	let p0n = 0;
	for (const value of m6m)
	{
		if (value == y3f)
		{
			p0n++;
		}
	}
	return p0n;
}

function g1t(x9e)
{
 	let value = j3e(x9e, 0);
	if (value <= 0)
	{
		return z4p;
	}
	else
	{
		value--; 
		if (value >= sq_1 && value <= b6f)
		{
			return value;
		}
		else
		{
			return z4p;
		}
	}
}

function s0p(y0s)
{
 	let x9e = '';
	x9e = (y0s + 1);
  return x9e;
}







function n3a(y0s)
{
	return y0s >= v1u;
}

function m0s(y0s)
{
	return y0s <= g8e;
}

function l4s(d5g)
{
	return !(d5g % 2);
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
 	this.i1x = v8z.o5v;
 	this.t2h = new d5f();
 	this.x4w();
}

o0o()
{
	let x4c = new z4m();
	c2q(x4c.g2t, this.g2t);
	x4c.i1x = this.i1x;
  x4c.t2h = this.t2h.o0o();
	return x4c;
}

m9k(u9n)
{
	return this.i1x == u9n.i1x &&
		p0w(this.g2t, u9n.g2t);
}

r2t(u9n)
{
	return !this.m9k(u9n);
}

g7b()
{
 	c2q(this.g2t, a5z);
 	this.i1x = v8z.o5v;
}

l8d()
{
	return this.i1x == v8z.o5v && this.m5x();
}

m5x()
{
	return p0w(this.g2t, a5z);
}

x4w()
{
	this.g2t.fill(o8u.k2v);
	this.i1x = v8z.o5v;
}

q0r()
{
	return this.i1x == v8z.o5v && this.a4g();
}

a4g()
{
	return this.g2t.every(o8u.k2v);
}

m6m()
{
  return this.g2t.slice();
}

t9a(y0s)
{
	return this.g2t[y0s];
}

b1f(y0s, y3f)
{
	this.g2t[y0s] = y3f;
}

p2k()
{
	this.i1x = v8z.o5v;
}

e5y()
{
	this.i1x = v8z.u6y;
}

o7l()
{
	if (this.i1x == v8z.o5v)
	{
		this.i1x = v8z.u6y;
	}
	else
	{
		this.i1x = v8z.o5v;
	}
}

d9l()
{
	return this.i1x == v8z.o5v;
}

x0s()
{
	return this.i1x == v8z.u6y;
}

i4z(y0s)
{
	return this.g2t[y0s] == o8u.k2v;
}

y7j(y0s)
{
	let y3f = this.g2t[y0s];
	return y3f == o8u.i3f ||
    y3f == o8u.k9k;
}

u0g(y0s)
{
	let y3f = this.g2t[y0s];
	return y3f == o8u.i9a ||
    y3f == o8u.a1p;
}

f9y(y0s)
{
  let y3f = this.g2t[y0s];
	return y3f == o8u.i3f;
}

e8p(y0s)
{
  let y3f = this.g2t[y0s];
	return y3f == o8u.k9k;
}

b5u(y0s)
{
  let y3f = this.g2t[y0s];
	return y3f == o8u.i9a;
}

s3v(y0s)
{
  let y3f = this.g2t[y0s];
	return y3f == o8u.a1p;
}

h8y()
{
  let p0n = 0;
	for (const y0s of h0i)
	{
    if (this.y7j(y0s))
		{
			p0n++;
		}
	}
	return p0n;
}

p4e()
{
  let p0n = 0;
	for (const y0s of h0i)
	{
    if (this.u0g(y0s))
		{
			p0n++;
		}
	}
	return p0n;
}

i6z(u0i)
{
  this.t2h = u0i.o0o();
}

u0i()
{
  return this.t2h.o0o();
}

r9f(v5h)
{
	if (v5h.w6d())
	{
    this.o7l();
		return;
	}
	this.b1f(v5h.b8x, o8u.k2v);
	this.b1f(v5h.s4k, v5h.y0v);
	for (const y0s of v5h.o7g)
	{
		this.b1f(y0s, o8u.k2v);
	}
	this.o7l();
}

y9l(v5h)
{
	if (v5h.w6d())
	{
    this.o7l();
		return;
	}
	this.b1f(v5h.s4k, o8u.k2v);
	this.b1f(v5h.b8x, v5h.b7t);
	let i = 0;
	for (const y0s of v5h.o7g)
	{
		this.b1f(y0s, v5h.l4p[i]);
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
	this.h2v = new q5w();
	this.m6n = null;
}

o0o()
{
	let k7l = new g8w();
	k7l.h2v = this.h2v.o0o();
	k7l.m6n = null;
	if (this.m6n)
	{
		k7l.m6n = this.m6n.o0o();
	}
	return k7l;
}

m9k(u9n)
{
	if (this.h2v.r2t(u9n))
	{
		return false;
	}
	return true;
}

r2t(u9n)
{
	return !this.m9k(u9n);
}

k2v()
{
	return this.h2v.k2v();
}

b8x()
{
	return this.h2v.b8x;
}

s4k()
{
	return this.h2v.s4k;
}

b7t()
{
	return this.h2v.b7t;
}

y0v()
{
	return this.h2v.y0v;
}

o7g()
{
  return this.h2v.o7g.slice();
}

l4p()
{
  return this.h2v.l4p.slice();
}

h3t()
{
	return this.h2v.h3t();
}

y7j()
{
	return this.h2v.y7j();
}

u0g()
{
	return this.h2v.u0g();
}

c5z()
{
	return this.h2v.c5z();
}

w6d()
{
	return this.h2v.w6d();
}

z6x()
{
	return this.h2v.z6x();
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

u7k(y2p)
{
	this.k0q();
	this.m6n = y2p.o0o();
}

a7j()
{
	return this.m6n;
}

i9b(u9n)
{
	if (this.m6n && !u9n.m6n)
	{
		return false;
	}
	if (!this.m6n && u9n.m6n)
	{
		return false;
	}
	if (!this.m6n && !u9n.m6n)
	{
		return true;
	}
	return this.m6n.m9k(u9n.m6n);
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

c3o(t0e)
{
	this.k0q();
	this.m6n.z8s = t0e;
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

z1f(t0e)
{
	this.k0q();
	this.m6n.q9g = t0e;
	this.h1p();
}

m0o()
{
	if (this.m6n)
	{
		this.m6n.h7c = n8u.u7c;
		this.h1p();
	}
}

l4f()
{
	if (this.m6n)
	{
		return this.m6n.h7c != n8u.u7c;
	}
	else
	{
		return false;
	}
}

h7c()
{
	if (this.m6n)
	{
		return this.m6n.h7c;
	}
	else
	{
		return n8u.u7c;
	}
}

u5m(h7c)
{
	this.k0q();
	this.m6n.h7c = h7c;
	this.h1p();
}

k4d()
{
	if (this.m6n)
	{
		this.m6n.style = c8l.u7c;
		this.h1p();
	}
}

f8e()
{
	if (this.m6n)
	{
		return this.m6n.style != c8l.u7c;
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
		return c8l.u7c;
	}
}

a4l(style)
{
	this.k0q();
	this.m6n.style = style;
	this.h1p();
}

a2u()
{
	if (this.m6n)
	{
		this.m6n.value = b4c.u7c;
		this.h1p();
	}
}

e4n()
{
	if (this.m6n)
	{
		return this.m6n.value != b4c.u7c;
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
		return b4c.u7c;
	}
}

d7c(value)
{
	this.k0q();
	this.m6n.value = value;
	this.h1p();
}

t1d()
{
	if (this.m6n)
	{
		this.m6n.z4d = o9q.u7c;
		this.h1p();
	}
}

v4k()
{
	if (this.m6n)
	{
		return this.m6n.z4d != o9q.u7c;
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
		return o9q.u7c;
	}
}

b3g(z4d)
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
      let i7j = this.m6n.z8s.indexOf("[#]");
      return i7j != -1;
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

z5w()
{
  
}

e0p()
{
	if (this.m6n)
	{
		this.m6n.q0w = false;
		this.h1p();
	}
}

f1k()
{
	if (this.m6n)
	{
		return this.m6n.q0w;
	}
	else
	{
		return false;
	}
}

t6k()
{
	this.k0q();
	this.m6n.q0w = true;
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

j7v()
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
		this.m6n.s6p.h2u();
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

l3z(e6v)
{
	this.k0q();
	this.m6n.e6v = e6v.o0o();
	this.h1p();
}

m1e()
{
	if (this.m6n)
	{
		this.m6n.s6p.h2u();
		this.h1p();
	}
}

z4c()
{
	if (this.m6n)
	{
		return !this.m6n.s6p.k2v();
	}
	else
	{
		return false;
	}
}

s6p()
{
	if (this.m6n)
	{
		return this.m6n.s6p.o0o();
	}
	else
	{
		return new x6l();
	}
}

b5v(s6p)
{
	this.k0q();
	this.m6n.s6p = s6p.o0o();
	this.h1p();
}

y9e()
{
	if (this.m6n)
	{
		this.m6n.u2y.p3l();
		this.h1p();
	}
}

v8d()
{
	if (this.m6n)
	{
		return this.m6n.u2y.g6i();
	}
	else
	{
		return false;
	}
}

u2y()
{
	if (this.m6n)
	{
		return this.m6n.u2y.o0o();
	}
	else
	{
		return new p6t();
	}
}

h4h(u2y)
{
	this.k0q();
	this.m6n.u2y = u2y.o0o();
	this.h1p();
}

h7l(z2g)
{
	this.h2v = z2g.o0o();
	this.m6n = null;
}

z2g()
{
	let u5j = new q5w();
  return Object.assign(u5j, this.h2v);
}

}

function l9h(z2g)
{
  let l3k = new g8w();
  l3k.h7l(z2g);
  return l3k;
}
class q5w
{

constructor()
{
	this.b8x = z4p;
	this.b7t = o8u.k2v;
	this.s4k = z4p;
	this.y0v = o8u.k2v;
	this.o7g = [];
	this.l4p = [];
	this.m4u = [];
}

o0o()
{
	let u5j = new q5w();
	u5j.b8x = this.b8x;
	u5j.b7t = this.b7t;
	u5j.s4k = this.s4k;
	u5j.y0v = this.y0v;
	u5j.o7g = this.o7g.slice();
	u5j.l4p = this.l4p.slice();
	u5j.m4u = this.m4u.slice();
	return u5j;
}

m9k(u9n)
{
	if (
		this.b8x != u9n.b8x ||
		this.b7t != u9n.b7t ||
		this.s4k != u9n.s4k ||
		this.y0v != u9n.y0v)
	{
		return false;
	}
	else
	{
		for (const y0s of this.o7g)
		{
			let c6v = u9n.o7g.find(function(u7n){ return u7n == y0s; });
			if (c6v === undefined)
			{
				return false;
			}
		}
		for (const y3f of this.l4p)
		{
			let c6v = u9n.l4p.find(function(u7n){ return u7n == y3f; });
			if (c6v === undefined)
			{
				return false;
			}
		}
		return true;
	}
}

r2t(u9n)
{
	return !this.m9k(u9n);
}

k2v()
{
	return this.b8x == z4p;
}

y7j()
{
 	return this.b7t == o8u.i3f ||
		this.b7t == o8u.k9k;
}

u0g()
{
 	return this.b7t == o8u.i9a ||
		this.b7t == o8u.a1p;
}

z6x()
{
  return this.o7g.length > 0;
}

c5z()
{
	return this.b7t != this.y0v;
}

w6d()
{
	return this.b8x == z4p;
}

z9l(y0s)
{
	let c6v = this.o7g.find(function(u7n){ return u7n == y0s; });
	return (c6v !== undefined);
}


a5b(w1j)
{
	for (const y0s of w1j)
	{
		let c6v = this.o7g.find(function(u7n){ return u7n == y0s; });
		if (c6v === undefined)
		{
			return false;
		}
	}
	return true;
}


y7d(y0s)
{
	let c6v = this.m4u.find(function(u7n){ return u7n == y0s; });
	return (c6v !== undefined);
}

h0g(w1j)
{
	for (const y0s of w1j)
	{
		let c6v = this.m4u.find(function(u7n){ return u7n == y0s; });
		if (c6v === undefined)
		{
			return false;
		}
	}
	return true;
}

h3t()
{
  return this.o7g.length;
}

}

const k0u =
[
	z4p, z4p,	z4p, z4p,	z4p, z4p, z4p, z4p,	z4p, z4p, z4p, z4p, z4p, z4p,
	z4p, z4p,	z4p, z4p, z4p, z4p,	z4p, z4p,	z4p, z4p,	z4p, z4p,	z4p, z4p,
	z4p, z4p,	z4p, sq_1,	z4p, k9w,	z4p, r6y,	z4p, v8n,	z4p, g8e,	z4p, z4p,
	z4p, z4p,	a7i,  z4p,	c6b,  z4p,	c2h,  z4p,	i4u,  z4p,	o8m, z4p,	z4p, z4p,
	z4p, z4p,	z4p, r7i,	z4p, h5g,	z4p, y3a,	z4p, m5m,	z4p, j3j,	z4p, z4p,
	z4p, z4p,	s3f, z4p,	a8o, z4p,	u4e, z4p,	q9u, z4p,	t3i, z4p,	z4p, z4p,
	z4p, z4p,	z4p, h6j,	z4p, j0q,	z4p, t4a,	z4p, d6p,	z4p, k8c,	z4p, z4p,
	z4p, z4p, j3q, z4p,	c3b, z4p,	x3i, z4p,	t0h, z4p,	q8y, z4p,	z4p, z4p,
	z4p, z4p,	z4p, t8r,	z4p, z5u,	z4p, m5a,	z4p, o6a,	z4p, f0e,	z4p, z4p,
	z4p, z4p,	w7i, z4p,	f4p, z4p,	y3r, z4p,	d9d, z4p,	p0j, z4p,	z4p, z4p,
	z4p, z4p,	z4p, q4y,	z4p, g1q,	z4p, x5g,	z4p, y7c,	z4p, l9i,	z4p, z4p,
	z4p, z4p,	v1u, z4p,	a1l, z4p,	e4x, z4p,	o8c, z4p,	b6f, z4p,	z4p, z4p,
	z4p, z4p,	z4p, z4p,	z4p, z4p,	z4p, z4p,	z4p, z4p,	z4p, z4p,	z4p, z4p,
	z4p, z4p,	z4p, z4p,	z4p, z4p,	z4p, z4p,	z4p, z4p,	z4p, z4p,	z4p, z4p,
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
  this.l0p = Array(e7n).fill(z4p);
  this.y7s = Array(e7n).fill(z4p);
  this.k4u = Array(e7n).fill(o8u.k2v);
  this.g4q = Array(e7n).fill(false);
  this.d8j = 0;
	this.a1m = new z4m();
	this.g9x = 0;
	this.f3x = z4p;
	this.o2z = o8u.k2v;
	this.x6w = 0;
	this.q9c = 0;
	this.c0u = 0;
	this.o4t = 0;
	this.x1x = false;
}

n4j(h1s)
{
	this.a1m = h1s.o0o();
	this.g4q.fill(false);
  this.d8j = 0;
	let t0x = 14;
	if (this.a1m.d9l())
	{
		this.x6w = -(t0x + 1);
		this.q9c = -(t0x - 1);
		this.c0u = (t0x - 1);
		this.o4t = (t0x + 1);
	}
	else
	{
		this.x6w = (t0x + 1);
		this.q9c = (t0x - 1);
		this.c0u = -(t0x - 1);
		this.o4t = -(t0x + 1);
	}
}

m8n(b8x)
{
 	this.f3x = b8x;
	this.o2z = this.a1m.t9a(this.f3x);
	this.g9x = 0;
	if (
		(this.a1m.d9l() && this.o2z == o8u.i3f) ||
		(this.a1m.x0s() && this.o2z == o8u.i9a))
	{
		this.a0e(this.f3x);
	}
	else if (
		(this.a1m.d9l() && this.o2z == o8u.k9k) ||
		(this.a1m.x0s() && this.o2z == o8u.a1p))
	{
		this.s3w(this.f3x);
	}
}

a0e(y0s)
{
 	this.g8j(y0s, this.x6w);
	this.g8j(y0s, this.q9c);
}

g8j(b8x, u1y)
{
	let s4k = k0u[p2a[b8x] + u1y];
	if (s4k != z4p)
  {
    if (this.a1m.i4z(s4k))
  	{
	  	this.v9t(s4k);
  	}
  }
}

s3w(b8x)
{
	this.s0f(b8x, this.x6w);
	this.s0f(b8x, this.q9c);
	this.s0f(b8x, this.o4t);
	this.s0f(b8x, this.c0u);
}

s0f(b8x, u1y)
{
	let q3z = u1y;
	do
	{
		let s4k = k0u[p2a[b8x] + q3z];
		if (s4k == z4p)
    {
      break;
    }
    if (!this.a1m.i4z(s4k))
		{
			break;
		}
		this.v9t(s4k);
		q3z += u1y;
	} while (true);
}

f6e(b8x)
{
	this.f3x = b8x;
	this.o2z = this.a1m.t9a(this.f3x);
	this.g9x = 0;
	let y3f = this.a1m.t9a(this.f3x);
	if ((this.a1m.d9l() && this.o2z == o8u.i3f) ||
		(this.a1m.x0s() && this.o2z == o8u.i9a))
	{
		this.a1m.b1f(this.f3x, o8u.k2v);
		this.u4j(this.f3x);
	}
	else if (
		(this.a1m.d9l() && this.o2z == o8u.k9k) ||
		(this.a1m.x0s() && this.o2z == o8u.a1p))
	{
		this.a1m.b1f(this.f3x, o8u.k2v);
		this.d5l(this.f3x);
	}
	this.a1m.b1f(this.f3x, y3f);
}

u4j(b8x)
{
	let c1n = true;
	if (this.t0g(b8x, this.x6w))
	{
		c1n = false;
	}
	if (this.t0g(b8x, this.q9c))
	{
		c1n = false;
	}
	if (this.t0g(b8x, this.o4t))
	{
		c1n = false;
	}
	if (this.t0g(b8x, this.c0u))
	{
		c1n = false;
	}
	if (c1n)
	{
		this.f5p(b8x);
	}
}

t0g(b8x, u1y)
{
	let c8h = k0u[p2a[b8x] + u1y];
	if (c8h == z4p)
	{
		return false;
	}
	let s4k = k0u[p2a[b8x] + 2 * u1y];
	if (s4k == z4p)
	{
		return false;
	}
	if (!this.a1m.i4z(s4k))
	{
		return false;
	}
	if (this.g4q[c8h])
	{
		return false;
	}
	if (this.o2z == o8u.i3f)
	{
		if (!this.a1m.u0g(c8h))
		{
			return false;
		}
	}
	else
	{
		if (!this.a1m.y7j(c8h))
		{
			return false;
		}
	}
	this.l0p[this.g9x] = c8h;
	this.k4u[this.g9x] = this.a1m.t9a(c8h);
	this.y7s[this.g9x] = s4k;
	this.g9x++;
	let y3f = this.a1m.t9a(c8h);
	this.g4q[c8h] = true;
	this.u4j(s4k);
	this.g4q[c8h] = false;
	this.a1m.b1f(c8h, y3f);
	this.g9x--;
	return true;
}

d5l(b8x)
{
	let c1n = true;
	if (this.h6y(b8x, this.x6w))
	{
		c1n = false;
	}
	if (this.h6y(b8x, this.q9c))
	{
		c1n = false;
	}
	if (this.h6y(b8x, this.o4t))
	{
		c1n = false;
	}
	if (this.h6y(b8x, this.c0u))
	{
		c1n = false;
	}
	if (c1n)
	{
		this.f5p(b8x);
	}
}

h6y(s3a, u1y)
{
	let c8h = z4p;
	let q3z = u1y;
	do
	{
		c8h = k0u[p2a[s3a] + q3z];
		if (c8h == z4p)
		{
			return false;
		}
		if (this.g4q[c8h])
		{
			return false;
		}
		if (this.o2z == o8u.k9k)
		{
			if (this.a1m.u0g(c8h))
			{
				break;
			}
		}
		else
		{
			if (this.a1m.y7j(c8h))
			{
				break;
			}
		}
		if (!this.a1m.i4z(c8h))
		{
			return false;
		}
		q3z += u1y;
	} while (true);
	let n4a = false;
	do
	{
		q3z += u1y;
		let s4k = k0u[p2a[s3a] + q3z];
		if (s4k == z4p)
    {
      return n4a;
    }
    if (!this.a1m.i4z(s4k))
		{
			return n4a;
		}
		this.l0p[this.g9x] = c8h;
		this.k4u[this.g9x] = this.a1m.t9a(c8h);
		this.y7s[this.g9x] = s4k;
		this.g9x++;
		let k7i = this.a1m.t9a(c8h);
		this.g4q[c8h] = true;
		this.d5l(s4k);
		this.g4q[c8h] = false;
		this.a1m.b1f(c8h, k7i);
		this.g9x--;
		n4a = true;
	} while (true);
}

f5p(s4k)
{
	if (!this.g9x)
	{
		return;
	}
	if (this.g9x >= this.d8j)
	{
		if (this.g9x > this.d8j)
		{
      this.r1o.length = 0;
		}
		this.v9t(s4k);
	}
}

v9t(s4k)
{
	let v5h = new q5w();
	v5h.b8x = this.f3x;
	v5h.s4k = s4k;
	v5h.b7t = this.o2z;
	v5h.y0v = v5h.b7t;
	if (v5h.b7t == o8u.i3f)
	{
		if (m0s(v5h.s4k))
		{
			v5h.y0v = o8u.k9k;
		}
	}
	else if (v5h.b7t == o8u.i9a)
	{
		if (n3a(v5h.s4k))
		{
			v5h.y0v = o8u.a1p;
		}
	}
	for (let i = 0; i < this.g9x; i++)
	{
		v5h.o7g.push(this.l0p[i]);
		v5h.l4p.push(this.k4u[i]);
	}
	for (let i = 0; i < this.g9x - 1; i++)
	{
		v5h.m4u.push(this.y7s[i]);
	}

	if (this.x1x)
	{
		if (this.g9x >= 2)
		{
			let c6v = this.r1o.find(function(u7n)
			{
				if (u7n.m9k(v5h))
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
	this.d8j = v5h.h3t();
	this.r1o.push(v5h);
}

g7g(h1s, h5s)
{
	this.n4j(h1s);
	this.x1x = h5s;
	this.r1o.length = 0;

	for (const y0s of h0i)
	{
		this.f6e(y0s);
	}

	if (this.r1o.length === 0)
	{
		for (const y0s of h0i)
		{
			this.m8n(y0s);
		}
	}
	return this.r1o;
}

y6a(h1s)
{
	this.n4j(h1s);
	this.x1x = true;
	this.r1o.length = 0;

	for (const y0s of h0i)
	{
		this.f6e(y0s);
	}
	return this.r1o.length > 0;
}

g5o(h1s, c8h)
{
	this.n4j(h1s);
	this.x1x = true;
	this.r1o.length = 0;

	for (const y0s of h0i)
	{
		this.f6e(y0s);
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

m4u(h1s, v5h)
{
	this.n4j(h1s);
	this.x1x = true;
	this.r1o.length = 0;

	this.f6e(v5h.b8x);
	let p4p = [];
  let o7g = v5h.o7g;
	for (const c8h of o7g)
	{
		p4p.push(c8h);
	}
	for (const z2g of this.r1o)
	{
		if (z2g.s4k != v5h.s4k)
		{
			continue;
		}
		if (!z2g.a5b(p4p))
		{
			continue;
		}
		return z2g.m4u.slice();
	}
	return [];
}

s4j(h1s, v5h)
{
	this.n4j(h1s);
	this.x1x = true;
	this.r1o.length = 0;

	this.f6e(v5h.b8x);
	let y7g = 0;
	for (const z2g of this.r1o)
	{
		if (z2g.s4k == v5h.s4k)
		{
			y7g++;
		}
	}
	return y7g > 1;
}

} 


function a0g(h1s)
{
	let c9n = new w9y();
	return c9n.g7g(h1s, true);
}

function i5o(h1s, b8x)
{
	let c9n = new w9y();
	let q5m = c9n.g7g(h1s, true);
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

function z6z(h1s, s4k)
{
	let c9n = new w9y();
	let q5m = c9n.g7g(h1s, true);
	let q3e = [];
	for (const z2g of q5m)
	{
		if (z2g.s4k == s4k)
		{
			q3e.push(z2g);
		}
	}
	return q3e;
}

function p7x(h1s, b8x, s4k)
{
	let c9n = new w9y();
	let q5m = c9n.g7g(h1s, true);
	let u1n = [];
	for (const z2g of q5m)
	{
		if (z2g.b8x == b8x && z2g.s4k == s4k)
		{
			u1n.push(z2g);
		}
	}
	return u1n;
}

function l3j(h1s, b8x, s4k, o7g)
{
	let c9n = new w9y();
	let q5m = c9n.g7g(h1s, true);
	let g7g = [];
	for (const z2g of q5m)
	{
		if (z2g.b8x != b8x)
		{
			continue;
		}
		if (z2g.s4k != s4k)
		{
			continue;
		}
		if (!z2g.z9l(o7g))
		{
			continue;
		}
		g7g.push(z2g);
	}
	return g7g;
}

function j3z(h1s, b8x, s4k, m4u)
{
	let c9n = new w9y();
	let q5m = c9n.g7g(h1s, false);
	let g7g = [];
	for (const z2g of q5m)
	{
		if (z2g.b8x != b8x)
		{
			continue;
		}
		if (z2g.s4k != s4k)
		{
			continue;
		}
		if (!z2g.h0g(m4u))
		{
			continue;
		}
		
		let f7o = false;
		for (const m of g7g)
		{
			if (m.m9k(v5h))
			{
				f7o = true;
				break;
			}
		}
		if (!f7o)
		{
			g7g.push(z2g);
		}
	}
	return g7g;
}

function f7p(h1s, v5h)
{
	let c9n = new w9y();
	return c9n.m4u(h1s, v5h);
}

function y6a(h1s)
{
	let c9n = new w9y();
	return c9n.y6a(h1s);
}

function g5o(h1s, c8h)
{
	let c9n = new w9y();
	return c9n.g5o(h1s, c8h);
}

function s4j(h1s, v5h)
{
	let c9n = new w9y();
	return c9n.s4j(h1s, v5h);
}

function c4n(h1s)
{
	let c9n = new w9y();
	if (c9n.y6a(h1s))
	{
		return false;
	}
	let e5i = h1s.o0o();
	e5i.o7l();
	return !c9n.y6a(e5i);
}

function a3q()
{
}
/* voor dammen niet nodig */
const i8o =
{
  u7c : 0,  
	a3h : 1,
	x9g : 2,
};

function j0t(h1s, v5h)
{
 	let x9e = '';
	if (v5h.k2v())
	{
		x9e += "--";
	}
  else
  {
    x9e = s0p(v5h.b8x);
    if (v5h.o7g.length > 0)
    {
      x9e += 'x';
    }
    else
    {
      x9e += '-';
    }
    if (v5h.o7g.length > 2)
    {
      if (s4j(h1s, v5h))
      {
        let m4u = f7p(h1s, v5h);
        for (const y0s of m4u)
        {
          x9e += s0p(y0s);
          x9e += 'x';
        }
        x9e += s0p(v5h.s4k);
      }
      else
      {
        x9e += s0p(v5h.s4k);
      }
    }
    else
    {
      x9e += s0p(v5h.s4k);
    }
  }
	return x9e;
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
 	let w5j = (coordinatesType == l8m.h7i ||
		coordinatesType == l8m.m6e ||
		coordinatesType == l8m.n2v);
	let d4v = (coordinatesType == l8m.h7i ||
		coordinatesType == l8m.m6e ||
		coordinatesType == l8m.l7z);
	let w2j =	(coordinatesType == l8m.h7i ||
		coordinatesType == l8m.n2v ||
		coordinatesType == l8m.d3j);
	let k8q = (coordinatesType == l8m.h7i ||
		coordinatesType == l8m.l7z ||
		coordinatesType == l8m.d3j);

	v5c.font = (coordinate.e3h).toString() + "px serif";
	v5c.fillStyle = f1h;
  let o9b = coordinate.height;

	if (d4v)
	{
  	let x6r = 0;
		if (b1y)
		{
			x6r = e7n - c4f / 2;
		}
		else
		{
			x6r = c4f / 2 + 1;
		}
    for (let d5g = 0; d5g < c4f; d5g++)
		{
 			if (d5g % 2)
			{
				continue;
			}
			let c7v = v5c.measureText(x6r).width;
			let top = i2w.n8v + 1 + (d5g + 1) * x2h.o1r;
			top += (x2h.o1r - o9b) / 2 + o9b;
			let z7a = i2w.j6q - marginSize + (marginSize - c7v) / 2;
      v5c.fillText(x6r, z7a, top);
			if (b1y)
			{
				x6r -= c4f;
			}
			else
			{
				x6r += c4f;
			}
		}
	}

	if (w2j)
	{
		let x6r = 0;
		if (b1y)
		{
			x6r = e7n - c4f / 2 + 1;
		}
		else
		{
			x6r = c4f / 2;
		}
    for (let d5g = 0; d5g < c4f; d5g++)
		{
 			if (d5g % 2)
			{
				continue;
			}
      let c7v = v5c.measureText(x6r).width;
			let top = i2w.n8v + 1 + d5g * x2h.o1r;
			top += (x2h.o1r - o9b) / 2 + o9b;
			let z7a = i2w.j6q + i2w.f3w() +
        (marginSize - c7v) / 2;
      v5c.fillText(x6r, z7a, top);
			if (b1y)
			{
				x6r -= c4f;
			}
			else
			{
				x6r += c4f;
			}
		}
	}

	if (w5j)
	{
		let x6r = 0;
		if (b1y)
		{
			x6r = e7n;
		}
		else
		{
			x6r = 1;
		}
    for (let b8f = 0; b8f < c4f; b8f++)
		{
 			if (b8f % 2)
			{
				continue;
			}
			let left = i2w.j6q + 1 + (b8f + 1) * x2h.o1r;
      let c7v = v5c.measureText(x6r).width;
			let z7a = left + (x2h.o1r - c7v) / 2;
			let w5g = i2w.n8v - (marginSize - o9b) / 2 - 2;
      
      v5c.fillText(x6r, z7a, w5g);
			if (b1y)
			{
				x6r--;
			}
			else
			{
				x6r++;
			}
		}
	}

	if (k8q)
	{
		let x6r = 0;
		if (b1y)
		{
			x6r = c4f / 2;
		}
		else
		{
			x6r = e7n - c4f / 2 + 1;
		}
    for (let b8f = 0; b8f < c4f; b8f++)
		{
			if (b8f % 2)
			{
				continue;
			}
			let left = i2w.j6q + 1 + b8f * x2h.o1r;
      let c7v = v5c.measureText(x6r).width;
			let z7a = left + (x2h.o1r - c7v) / 2;
			let w5g = i2w.n8v + i2w.k4s() +
        (marginSize - o9b) / 2 + o9b - 2;
      
      v5c.fillText(x6r, z7a, w5g);
			if (b1y)
			{
				x6r--;
			}
			else
			{
				x6r++;
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
function a2a(v5c, rect, y3f)
{
 	v5c.lineWidth = "1";
  if (y3f == o8u.i3f || y3f == o8u.k9k)
  {
    v5c.fillStyle = "white";
    v5c.strokeStyle = "black";
  }
  else
  {
    v5c.fillStyle = "black";
    v5c.strokeStyle = "white";
  }
  let w8t = 80;
  let h2j = rect.f3w() + 1;
 	let h2n = ((0.19 * w8t) / 100) * h2j;
  let i6i = rect.j6q + h2j / 2;
  let a4p = (h2j / 4);
  let g7d = (h2j / 2.4);
	if (y3f == o8u.i3f || y3f == o8u.i9a)
	{
    let c8t = rect.n8v + h2j / 1.8;
    v5c.beginPath();
    v5c.ellipse(i6i, c8t, a4p, g7d, Math.PI / 2, 0, 2 * Math.PI);
    v5c.fill();
    v5c.stroke();
		c8t -= h2n;
    v5c.beginPath();
    v5c.ellipse(i6i, c8t, a4p, g7d, Math.PI / 2, 0, 2 * Math.PI);
    v5c.fill();
    v5c.stroke();
	}
	else if (y3f == o8u.k9k || y3f == o8u.a1p)
	{
    let c8t = rect.n8v + h2j / 1.55;
    v5c.beginPath();
    v5c.ellipse(i6i, c8t, a4p, g7d, Math.PI / 2, 0, 2 * Math.PI);
    v5c.fill();
    v5c.stroke();
		c8t -= h2n;
    v5c.beginPath();
    v5c.ellipse(i6i, c8t, a4p, g7d, Math.PI / 2, 0, 2 * Math.PI);
    v5c.fill();
    v5c.stroke();
		c8t -= h2n;
    v5c.beginPath();
    v5c.ellipse(i6i, c8t, a4p, g7d, Math.PI / 2, 0, 2 * Math.PI);
    v5c.fill();
    v5c.stroke();
	}
}

function t4u(v5c, rect, y3f)
{
 	v5c.lineWidth = "1";
  if (y3f == o8u.i3f || y3f == o8u.k9k)
  {
    v5c.fillStyle = "white";
    v5c.strokeStyle = "black";
  }
  else
  {
    v5c.fillStyle = "black";
    v5c.strokeStyle = "white";
  }

  let w8t = 80;
  let h2j = rect.f3w() + 1;
 	let h2n = ((0.19 * w8t) / 100) * h2j;
  let i6i = rect.j6q + h2j / 2;
  let a4p = (h2j / 4);
  let g7d = (h2j / 2.4);


  let c8t = rect.n8v + h2j / 2; 
  let m0x = h2j * 0.4;

  v5c.beginPath();
  v5c.arc(i6i, c8t, m0x, 0, Math.PI * 2);
  v5c.closePath();
  v5c.fill();
  v5c.stroke();

	if (r2e(y3f))
	{
		if (y3f == o8u.k9k)
		{
      v5c.fillStyle = "black";
      v5c.strokeStyle = "black";
		}
		else
		{
      v5c.fillStyle = "white";
      v5c.strokeStyle = "white";
		}
    m0x = h2j * 0.1;
    v5c.beginPath();
    v5c.arc(i6i, c8t, m0x, 0, Math.PI * 2);
    v5c.closePath();
    v5c.fill();
    v5c.stroke();
	}
}

function m2k(v5c, rect, y3f)
{
  if (y3f == o8u.k2v) return;
  if (z1t.o1q == 0)
  {
    a2a(v5c, rect, y3f);
  }
  else
  {
    t4u(v5c, rect, y3f);
  }
}


function g4i(o1q)
{
}
function o7a(u7n)
{
	let h1s = new z4m();
	let y5o = u7n.length;
	if (y5o < 6) 
	{
		return h1s;
	}
	if (u7n[0] != 'W' && u7n[0] != 'B')
	{
		return h1s;
	}
	if (u7n[0] == 'W')
	{
		h1s.p2k();
	}
	else if (u7n[0] == 'B')
	{
		h1s.e5y();
	}
	let k5o = u7n.indexOf(":W");
	let u3o = u7n.indexOf(":B");
	let m0v = u7n.indexOf(".");
  if (m0v == -1)
	{
		m0v = u7n.length;
	}
	if (k5o == -1 || u3o == -1 || m0v <= u3o)
	{
		return h1s;
	}
	let w = u7n.substr(k5o + 2, u3o - (k5o + 2));
	let b = u7n.substr(u3o + 2, m0v - (u3o + 2));
	let v6z = w.split(",");
	let o6e = b.split(",");

	for (const s of v6z)
	{
		if (s.length)
		{
			if (s[0] == 'K')
			{
				if (s.length > 1)
				{
					let s7n = s.substr(1, 2);
					let y0s = j3e(s7n, 0);
					if (y0s)
					{
						h1s.b1f(y0s-1, o8u.k9k);
					}
				}
			}
			else
			{
				let y0s = j3e(s, 0);
				if (y0s)
				{
					h1s.b1f(y0s-1, o8u.i3f);
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
					let s7n = s.substr(1, 2);
					let y0s = j3e(s7n, 0);
					if (y0s)
					{
						h1s.b1f(y0s-1, o8u.a1p);
					}
				}
			}
			else
			{
				let y0s = j3e(s, 0);
				if (y0s)
				{
					h1s.b1f(y0s-1, o8u.i9a);
				}
			}
		}
	}
	return h1s;
}

function f8m(h1s, f1j)
{
  let v4m = f1j.length;

 	
	if (f1j[0] == 'Z' || (v4m == 2 && f1j == "--") || (v4m == 4 && f1j == "null"))
	{
		return new q5w();
	}

	let w1j = [];
	let i = 0;
	let y5o = f1j.length;
	while (i < y5o)
	{
		let e3i = i;
		let g3o = 0;
		let n4c = f1j[i];
		while (i < y5o && n4c != '-' && n4c != 'x' && n4c != ':')
		{
			i++;
			g3o++;
			if (i < y5o)
			{
				n4c = f1j[i];
			}
		}
		let i9e = f1j.substr(e3i, g3o);
    w1j.push(g1t(i9e));
		i++; 
	}
	let c2k = w1j.length;
	if (c2k < 2)
	{
		return false;
	}
	else if (c2k == 2)
	{
		let b8x = w1j[0];
		let s4k = w1j[1];
		let g7g = p7x(h1s, b8x, s4k);
		if (g7g.length == 1)
		{
			return g7g[0];
		}
		return false;
	}
	else
	{
		let b8x = w1j[0];
		let s4k = w1j[1];
		let o7g = [];
		for (let i = 2; i < c2k; i++)
		{
			o7g.push(w1j[i]);
		}
		let g7g = l3j(h1s, b8x, s4k, o7g);
		if (g7g.length == 1)
		{
			return g7g[0];
		}
		b8x = w1j[0];
		s4k = w1j[w1j.length - 1];
		let m4u = [];
		for (let i = 1; i < c2k - 1; i++)
		{
			m4u.push(w1j[i]);
		}
		g7g = j3z(h1s, b8x, s4k, m4u);
		if (g7g.length == 1)
		{
			return g7g[0];
		}
		return false;
	}
}

function e4r()
{
  let u5z = ["images/board/BoardBackground.png",
    "images/board/DarkSquare.png",
    "images/board/LightSquare.png",
    "images/board/Margin.png"];
  return u5z;
}
function div(d1a, b8s)
{
  const y0y = d1a % b8s;
  const quot = Math.floor((d1a - y0y) / b8s);
  return { quot: quot, y0y: y0y };
}

function d2w(h1s, x9e)
{
	let v5h = new q5w();
	if (x9e.length < 4)
	{
		return v5h;
	}
	let f5e = x9e.slice(0, 2);
	let toString = x9e.slice(2, 4);
	v5h.b8x = g1t(f5e);
  v5h.b7t = h1s.t9a(v5h.b8x);
	v5h.s4k = g1t(toString);
	v5h.y0v = v5h.b7t;
	if (x9e.length == 5)
	{
		switch (x9e[4])
		{
			case 'q':
				v5h.y0v = h1s.d9l() ? o8u.whiteQueen : o8u.blackQueen;
				break;
			case 'r':
				v5h.y0v = h1s.d9l() ? o8u.whiteRook : o8u.blackRook;
				break;
			case 'b':
				v5h.y0v = h1s.d9l() ? o8u.whiteBishop : o8u.blackBishop;
				break;
			case 'n':
				v5h.y0v = h1s.d9l() ? o8u.whiteKnight : o8u.blackKnight;
				break;
		}
	}
	return v5h;
}

class e1q
{

constructor()
{
	let j7x = '';
	let value = '';
}

}

function h6c(x9e, j7x, a4t)
{
  let l8q = " " + j7x + " ";
  let f1a = x9e.indexOf(l8q, 0);
	if (f1a >= 0)
	{
		let j0s = f1a + l8q.length;
		let m0t = 0;
		
		if (j7x == "pv")
		{
			m0t = x9e.indexOf(" string ", j0s);
		}
		else
		{
			m0t = x9e.indexOf(" ", j0s);
		}
		if (m0t < 0)
		{
			m0t = x9e.length;
		}
    let value = x9e.slice(j0s, m0t).trim();
		a4t.set(j7x, value);
	}
}

const o3l =
{
	w8c        : 0,
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
  this.h8n = false;
  this.m9g = false;
  this.i1u = false;
  this.a6k = false;
  this.b2e = false;
  this.t4w = new e5o();
	this.e6h = new n1y();
  this.g5y = null;
}

p3a(q4c)
{
  this.g0w = q4c.o0o();
  this.b3q();
  this.h8n = false;
 	for (const c8c of this.g0w.p5u.p5u)
	{
		if (c8c.j7x == "MultiPV")
		{
			this.h8n = (c8c.value != "1");
			break;
		}
	}

  this.x3p();
}

x3p()
{
  this.t7e = new Worker("/sharedgames/js/stockfish-17.1-8e4d048.js");
  this.t7e.g5y = (event) => {
    this.r3f(event);
  };
}

o5k()
{
	this.h3d.h2u();
	this.x4a.h2u();
	this.w8c("uci");
}

j4a()
{
	if (!this.i1u)
	{
    return;
  }

  
	for (const c8c of this.g0w.p5u.p5u)
	{
		let x5b = "setoption";
		x5b += " name ";
		x5b += c8c.j7x;
		x5b += " value ";
		x5b += c8c.value;
		this.w8c(x5b);
	}
  
  
  
  

	this.w8c("isready");
	this.i1u = false;
}

w8c(m6y)
{
	this.c3z(m6y, o3l.w8c);
  this.t7e.postMessage(m6y);
}

r3f(event)
{
  
  
 	this.c3z(event.data, o3l.r3f);
	this.o3y(event.data);
}

o3y(x5b)
{
	let e4m = x5b.split(' ');
	if (e4m.length == 0) return;
	let m6y = e4m[0];

	if (m6y == "readyok")
	{
		this.m9g = true;
    if (this.g5y)
    {
      this.g5y({
        cmd: "ready",
        data: {}
        });
    }
		return;
	}
	if (m6y == "bestmove")
	{
		this.v7m(x5b);
	}
	else if (m6y == "id")
	{
		this.v5p(x5b);
	}
	else if (m6y == "info")
	{
		this.k6r(x5b);
	}
	else if (m6y == "option")
	{
		this.r7w(x5b);
	}
	else if (m6y == "uciok")
	{
		this.z4a(x5b);
	}
}

v7m(x5b)
{
	this.a6k = false;
  if (this.b2e)
  {
    this.b2e = false;
    this.z7d();
  }
}

v5p(x5b)
{
 	let x9e = x5b;
	let e4m = x9e.split(" ");
	if (e4m.length < 3) return;

  const word1 = e4m.shift();
  const word2 = e4m.shift();
  const value = e4m.join(' ');

	if (word2 == "name")
	{
		this.h3d.j7x = value;
	}
	else if (word2 == "author")
	{
		this.h3d.q2p = value;
	}
}

k6r(x5b)
{
	let x9e = x5b;
	let a4t = new Map();
	h6c(x9e, "depth", a4t);
 	h6c(x9e, "seldepth", a4t);
	h6c(x9e, "pv", a4t);
	h6c(x9e, "nps", a4t);
	h6c(x9e, "nodes", a4t);
	h6c(x9e, "score cp", a4t);
	h6c(x9e, "score mate", a4t);
	h6c(x9e, "time", a4t);
	h6c(x9e, "currmove", a4t);
	h6c(x9e, "currmovenumber", a4t);
 	h6c(x9e, "multipv", a4t);

  if (a4t.has("pv") && a4t.has("depth"))
  {
		this.t5h(a4t);
    if (this.g5y)
    {
      this.g5y({
        cmd: "pv",
        data: {}
        });
    }

		return;
  }

  if (a4t.has("currmove") && a4t.has("currmovenumber"))
	{
		this.r7n(a4t);
    if (this.g5y)
    {
      this.g5y({
        cmd: "cm",
        data: {}
        });
    }
		return;
	}
}

r7w(x5b)
{
	let c8c = new o8k();
	let x9e = x5b;

	let i1q = " name ";
  let w3g = x9e.indexOf(i1q, 0);
	if (w3g < 0) return;
	let z1o = w3g + i1q.length;

	let t9h = " type ";
	let l6d = x9e.indexOf(t9h, 0);
	if (l6d < 0) return;
	let t2m = l6d;

	let u3a = l6d + t9h.length;
	let o6w = x9e.indexOf(" ", u3a);
	if (o6w < 0) o6w = x9e.length + 1;

	c8c.j7x = x9e.slice(z1o, t2m);
	c8c.type = x9e.slice(u3a, o6w);

	if (c8c.type == "check")
	{
		c8c.type = "bool";
	}
	else if (c8c.type == "combo")
	{
		c8c.type = "enum";
	}

	let a2l = " default ";
	let i0p = x9e.indexOf(a2l, 0);
	if (i0p >= 0)
	{
		let g5u = i0p + a2l.length;
		let i6b = x9e.indexOf(" ", g5u);
		if (i6b < 0) i6b = x9e.length + 1;
		c8c.value = x9e.slice(g5u, i6b);
		if (c8c.value == "<empty>")
		{
			c8c.value = "";
		}
	}
	if (c8c.type == "spin")
	{
		let a3e = " min ";
		let j4k = x9e.indexOf(a3e, 0);
		if (j4k >= 0)
		{
			let t1i = j4k + a3e.length;
			let z8f = x9e.indexOf(" ", t1i);
			if (z8f < 0) z8f = x9e.length + 1;
			c8c.min = x9e.slice(t1i, z8f).trim();
		}
		let o6t = " max ";
		let q0d = x9e.indexOf(o6t, 0);
		if (q0d >= 0)
		{
			let s1p = q0d + o6t.length;
			let c7p = x9e.indexOf(" ", s1p);
			if (c7p < 0) c7p = x9e.length + 1;
			c8c.max = x9e.slice(s1p, c7p).trim();
		}
	}
	else if (c8c.type == "enum")
	{
		let w3r = 0;
		while (true)
		{
			let o5x = " var ";
			let r1k = x9e.indexOf(o5x, w3r);
			if (r1k < 0) break;
			let o1w = r1k + o5x.length;
			let j9o = x9e.indexOf(" var ", r1k + 5);
			if (j9o < 0) j9o = x9e.length + 1;
			if (c8c.values.length != 0)
			{
				c8c.values += " ";
			}
			c8c.values += x9e.slice(o1w, j9o).trim();
			w3r = j9o;
		}
	}
	this.x4a.p5u.push(c8c);
}

z4a(x5b)
{
	this.i1u = true;
  this.j4a();
}


h1z()
{
	if (this.t7e)
  {
    this.w8c("quit");
    this.t7e.terminate();
    this.t7e = null;
  }
}








q6p()
{
}

s0o(input)
{
	if (this.m9g)
	{
  	this.c3z('setInput', o3l.w8c);
		this.t4w = input.o0o();
    if (this.a6k)
    {
      this.b2e = true;
      this.w8c('stop');
    }
    else
    {
      this.z7d();
    }
	}
}

z7d()
{
  this.e6h = new n1y();
  this.e6h.h1s = this.t4w.s4h();
  this.e6h.j8h = this.t4w.j8h();
	this.e6h.e0l = this.h8n;
  this.a6k = true;
  if (this.g5y)
  {
    this.g5y({
      cmd: "go",
      data: {}
      });
  }

  let x5b = "position fen";
  x5b += " ";
	let s5o = positionToPortableFen(this.t4w.s4h());
	x5b += s5o;
	this.w8c(x5b);
	if (this.t4w.o8o == s5b)
	{
		x5b = "go infinite";
		this.w8c(x5b);
	}
	else
	{
		x5b = "go movetime ";
		x5b += this.t4w.o8o;
		this.w8c(x5b);
	}
}

b3q()
{
}

c3z(x9e, u1y)
{
	if (!this.g0w.h5r) return;
 	if (u1y == o3l.r3f)
	{
    console.log("From engine:", x9e);
	}
	else
	{
    console.log("To engine:", x9e);
	}
}

t5h(a4t)
{
  let b7l = a4t.get("depth");
  let a2y = a4t.get("multipv");

	let j3o = new v1a();
	j3o.t7s = b7l;

	if (a4t.has("seldepth"))
	{
		j3o.e9x = a4t.get("seldepth");
	}

 	if (a4t.has("nps"))
	{
    let j1l = a4t.get("nps");
		let f7i = j3e(j1l, 0);
		let z3s = f7i / 1000;
		if (z3s)
		{
			j3o.j0j = z3s + " kN/s";
		}
	}

	let c9x = 0.0;
  if (a4t.has("score cp"))
	{
    let b8l = a4t.get("score cp");
		c9x = parseFloat(b8l);
		c9x = c9x / 100.0;
		if (c9x > 9.99)
		{
			c9x = 9.99;
		}
		if (c9x < -9.99)
		{
			c9x = -9.99;
		}
		if (this.e6h.h1s.x0s())
		{
			c9x = -c9x;
		}
		j3o.c9x = c9x;
	}
  if (a4t.has("score mate"))
	{
    let x4h = a4t.get("score mate");
		let z2e = j3e(x4h, 0);
		if (this.e6h.h1s.x0s())
		{
			z2e = -z2e;
		}
		j3o.z2e = z2e;
		if (z2e > 0)
		{
			c9x = 9.99;
		}
		if (z2e < 0)
		{
			c9x = -9.99;
		}
		j3o.c9x = c9x;
	}

  if (a4t.has("time"))
	{
    let s4u = a4t.get("time");
		let d6a = j3e(s4u, 0);
		let p0p = d6a / 1000;
		let m = div(p0p, 60);
		let s4y = m.y0y;
    s4y = Math.e9m(s4y);
		let h = div(m.quot, 60);
		let r7j = h.y0y;
		let f7g = h.quot;
    const pad = (num) => String(num).padStart(2, '0');
    const x1h = `${pad(f7g)}:${pad(r7j)}:${pad(s4y)}`;
    j3o.x1h = x1h;
	}

  let r9g = a4t.get("pv");
	let l6w = r9g.split(" ");

	let g7g = new e5q();
	let j8h = this.e6h.j8h;
	g7g.m1m(this.e6h.h1s, j8h);
	let g5b = g7g.y5m();
	let z1j = this.e6h.h1s.o0o();
	for (const s of l6w)
	{
		if (s.length == 0)
		{
			continue;
		}
		let y8e = d2w(z1j, s);
		let q5m = a0g(z1j);
		let f7o = false;
		for (const z2g of q5m)
		{
			if (z2g.s4k == y8e.s4k &&
				z2g.b8x == y8e.b8x &&
				z2g.y0v == y8e.y0v)
			{
				z1j.r9f(z2g);
				let v5h = l9h(z2g);
				g7g.v9t(g5b, v5h);
				f7o = true;
				break;
			}
		}
    if (!f7o) break;
	}
	if (!g7g.h1j())
	{
    console.log("parse moves aantal: leeg!");
		return;
	}
  console.log("parse moves aantal: " + g7g.h1j());
	j3o.g7g = g7g;

 	if (this.h8n)
	{
		if (a2y == 1)
		{
			this.e6h.x8y = j3o;
		}
		if (a2y > this.e6h.w5z.length)
		{
			this.e6h.w5z.push(j3o);
		}
		else
		{
			this.e6h.w5z[a2y-1] = j3o;
		}
	}
	else
	{
		this.e6h.w5z.push(j3o);
		this.e6h.x8y = j3o;
	}
}

r7n(a4t)
{
  let a9n = a4t.get("currmove");
  let u4p = a4t.get("currmovenumber"); 
	this.e6h.k4o = j3e(u4p, 0);
	let q5m = a0g(this.e6h.h1s);
	this.e6h.d1j = q5m.length;
	let y8e = d2w(this.e6h.h1s, a9n);
	for (const z2g of q5m)
	{
		if (z2g.s4k == y8e.s4k &&
			z2g.b8x == y8e.b8x &&
			z2g.y0v == y8e.y0v)
		{
			this.e6h.g6k = z2g;
			break;
		}
	}
}

p8a()
{
	return this.e6h.o0o();
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
	this.j7x = '';
	this.q2p = '';
	this.f8s = '';
	this.v0e = '';
}

o0o()
{
  return Object.assign(new j6w(), this);
}

h2u()
{
	this.j7x = '';
	this.q2p = '';
	this.f8s = '';
	this.v0e = '';
}

}


const s5b = 10000000;

class e5o
{

constructor()
{
	this.g7g = new e5q();
	this.o8o = s5b;
  this.z5l = 0;
	this.i3l = 0;
}

o0o()
{
	let l1d = new e5o();
  l1d.g7g = this.g7g.o0o();
  l1d.o8o = this.o8o;
  l1d.z5l = this.z5l;
  l1d.i3l = this.i3l;
	return l1d;
}

j8h()
{
	return this.g7g.j4i(this.g7g.q7d());
}

s4h()
{
	return this.g7g.s2i();
}

}


class g0e
{

constructor()
{
	this.y5s = '';
	this.u2n = new j6w();
	this.p5u = new f0w();
	this.t9b = new f0w();
	this.h5r = true;
	this.c1g = true;
}

o0o()
{
	let b4a = new g0e();
	b4a.y5s = this.y5s;
	b4a.u2n = this.u2n.o0o();
	b4a.p5u = this.p5u.o0o();
	b4a.t9b = this.t9b.o0o();
	b4a.h5r = this.h5r;
	b4a.c1g = this.c1g;
	return b4a;
}


}


function v0o(c9x)
{
  if (Math.abs(c9x) < 0.005)
  {
    return "0.00";
  }
  else
  {
     const formatted = c9x.toFixed(2);
     return c9x > 0 ? `+${formatted}` : formatted;
  }
}

class v1a
{

constructor()
{
	this.c9x = 0.0;
	this.z2e = false;
	this.t7s = '';
	this.e9x = '';
	this.x1h = '';
	this.j0j = '';
	this.g7g = new e5q();
}

o0o()
{
	let i1k = new v1a();
  i1k.c9x = this.c9x;
  i1k.z2e = this.z2e;
  i1k.t7s = this.t7s;
  i1k.e9x = this.e9x;
  i1k.x1h = this.x1h;
  i1k.j0j = this.j0j;
  i1k.g7g = this.g7g.o0o();
	return i1k;
}

w4y()
{
	if (this.z2e)
	{
		return "#" + this.z2e;
	}
	else
	{
		return v0o(this.c9x);
	}
}

c5x()
{
	let u5u = scoreToMoveValue(this.c9x);
	let l3p = moveValueToEvalString(u5u);
	return l3p;
}

}

class n1y
{

constructor()
{
	this.h1s = new z4m();
	this.j8h = 1;
	this.b6h = false;
	this.p3c = false;
	this.e0l = false;
	this.w5z = [];
	this.x8y = new v1a();
	this.g6k = new q5w();
	this.k4o = 0;
	this.d1j = 0;
}

o0o()
{
	let p9r = new n1y();
  p9r.h1s = this.h1s.o0o();
  p9r.j8h = this.j8h;
  p9r.b6h = this.b6h;
  p9r.p3c = this.p3c;
  p9r.e0l = this.e0l;
  p9r.w5z = this.w5z.slice();
  p9r.x8y = this.x8y.o0o();
  p9r.g6k = this.g6k.o0o();
  p9r.k4o = this.k4o;
  p9r.d1j = this.d1j;
	return p9r;
}

o4r()
{
	return this.x8y.g7g.h1j() > 0;
}

d9a()
{
	let i7j = this.x8y.g7g.y5m();
	this.x8y.g7g.r9f(i7j);
	return i7j.v5h.z2g();
}

}


class o8k
{
  constructor(type = '', j7x = '', value = '', min = '', max = '', values = '')
  {
    this.type = type;
    this.j7x = j7x;
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
    this.p5u = [];
  }

  o0o()
  {
    let v9e = new f0w();
    v9e.p5u = this.p5u.map(p => p.o0o());
    return v9e;
  }

  h2u()
  {
    this.p5u.length = 0;
  }

  addBool(j7x, value)
  {
    this.p5u.push(new o8k("bool", j7x, value));
  }

  addInteger(j7x, value)
  {
    this.p5u.push(new o8k("int", j7x, value));
  }

  addSpin(j7x, value, min, max)
  {
    this.p5u.push(new o8k("spin", j7x, value, min, max));
  }

  addString(j7x, value)
  {
    this.p5u.push(new o8k("string", j7x, value));
  }

  addEnum(j7x, value, values)
  {
    this.p5u.push(new o8k("enum", j7x, value, '', '', values));
  }

  addButton(j7x)
  {
    this.p5u.push(new o8k("button", j7x, j7x));
  }

  d7c(j7x, value)
  {
    for (let c8c of this.p5u)
    {
      if (c8c.j7x === j7x)
      {
        c8c.value = value;
      }
    }
  }
}
class b5n
{

constructor()
{
	this.j7x = '';
}

o0o()
{
	let e9r = new b5n();
	e9r.j7x = this.j7x;
	return e9r;
}

k2v()
{
	return this.j7x.length == 0;
}

t4q()
{
	return this.j7x;
}

}


const y2m =
{
	u7c : 0,
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
	f0f: 100,
	d1o: 101,
	u0d: 102,
	v4x: 103,
	u0c: 104,
	s1s: 105,
	l9m: 106,
	g2p: 107,
	g0f: 108,
	g5t: 109,
	e9d: 110,
	i2f: 111,
	x6h: 112,
	w9g: 113,
	y4l: 114,
	d6j: 115,
	m1q: 116,
	d9x: 117,
	a3z: 118,
	q4r: 119,
	i7t: 120,
	g9c: 121,
	q7u: 122,
	x0v: 123,
	m4a: 124,
	g6r: 125,
	p0i: 126,
	o3j: 127,
	c9s: 128,
	p2r: 129,
	c8w: 130,
	e6g: 131,
	z3y: 132,
	f9a: 133,
	t3g: 134,
	d8q: 135,
	l3n: 136,
	r3k: 137,
	q5v: 138,
	n1f: 139,
	r9x: 140,
	g7h: 141,
	r9e: 142,
	a7c: 143,
	k2b: 144,
	o1c: 145,
	g2e: 146,
	f6y: 147,
	u5i: 148,
	g8o: 149,
	v1d: 150,
	o5h: 151,
	o2k: 152,
	r9w: 153,
	q1l: 154,
	e2n: 155,
	b6o: 156,
	w5o: 157,
	k7f: 158,
	w2v: 159,
	x3y: 160,
	z0x: 161,
	u9j: 162,
	r1g: 163,
	l8b: 164,
	l5e: 165,
	i4f: 166,
	b9j: 167,
	y8v: 168,
	d1e: 169,
	y6k: 170,
	s2x: 171,
	n0o: 172,
	q7y: 173,
	e1i: 174,
	t6j: 175,
	a9g: 176,
	u9r: 177,
	e2y: 178,
	y1o: 179,
	l1s: 180,
	q4x: 181,
	w7y: 182,
	t7b: 183,
	l6q: 184,
	z3f: 185,
	z1e: 186,
	q4s: 187,
	w1p: 188,
	d7w: 189,
	v4e: 190,
	c3f: 191,
	v1h: 192,
	c7h: 193,
	k0h: 194,
	p8b: 195,
	f6h: 196,
	e8s: 197,
	h0t: 198,
	v7w: 199,
	y6x: 200,
	m5q: 201,
	h0u: 202,
	y5w: 203,
	v9u: 204,
	m2w: 205,
	s7m: 206,
	v4r: 207,
	m5p: 208,
	s6n: 209,
	e0v: 210,
	a9w: 211,
	u6b: 212,
	w2o: 213,
	t2o: 214,
	g5e: 215,
	j6l: 216,
	i9p: 217,
	b5c: 218,
	b6m: 219,
	t3h: 220,
	b9h: 221,
	a7n: 222,
	z0m: 223,
	e6u: 224,
	p7b: 225,
	g9a: 226,
	z5n: 227,
	x8d: 228,
	g0y: 229,
	a5f: 230,
	g6m: 231,
	l0e: 232,
	l3u: 233,
	y7r: 234,
	x5x: 235,
	v4y: 236,
	b0f: 237,
	p8k: 238,
	a2r: 239,
	d4y: 240,
	q6y: 241,
	t6y: 242,
	e0h: 243,
	s8u: 244,
	k2t: 245,
	p5d: 246,
	l4i: 247,
	y9t: 248,
	j4b: 249,
	g4b: 250,
	d3r: 251,
	t3l: 252,
	t1f: 253,
	i5e: 254,
	v8k: 255,
	p9i: 256,
	a8g: 257,
	c8y: 258,
	i6p: 259
};


const t6x = 0;
const g9p = 500;

function j5j(x9e)
{
	if (x9e.length != 3)
	{
		return 0;
	}
	let y7p = x9e[0];
	let b3p = x9e[1];
	let n7t = x9e[2];

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
	return p5i * 100 + j3e(x9e.substr(1, 2), 0) + 1;
}

function r6q(q2o)
{
	if (q2o)
	{
		let div = Math.trunc((q2o - 1) / 100);
		let y0y = (q2o - 1) % 100;
		let q8p = 'A';
		if (div == 0) q8p = 'A';
		else if (div == 1) q8p = 'B';
		else if (div == 2) q8p = 'C';
		else if (div == 3) q8p = 'D';
		else if (div == 4) q8p = 'E';
		return q8p + y0y.toString().padStart(2, '0');
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
	this.l6c = 0;
	this.o6x = 0;
}

o0o()
{
	let h5b = new b2s();
	h5b.x4l = this.u4v;
	h5b.v0g = this.l6c;
	h5b.b6v = this.o6x;
	return h5b;
}

k2v()
{
	return this.o6x == 0 && this.l6c == 0 && this.u4v == 0;
}

u9c()
{
	let b6v = this.o6x.toString().padStart(4, '0');
	let v0g = this.l6c.toString().padStart(2, '0');
	let x4l = this.u4v.toString().padStart(2, '0');
	return b6v + v0g + x4l;
}

w5c(j2m, x9e)
{
	let y5o = x9e.length;
	if (!y5o)
	{
		this.o6x = 0;
		this.l6c = 0;
		this.u4v = 0;
	}
	else if (j2m == "dd-mm-yyyy" || j2m == "dd.mm.yyyy")
	{
  	if (y5o == 4)
		{
      this.o6x = j3e(x9e.substr(1, 4), 0);
		}
		else if (y5o == 10)
		{
			this.u4v = j3e(x9e.substr(0, 2), 0);
			this.l6c = j3e(x9e.substr(3, 2), 0);
			this.o6x = j3e(x9e.substr(6, 4), 0);
		}
	}
	else if (j2m == "yyyy-mm-dd" || j2m == "yyyy.mm.dd")
	{
  	if (y5o == 4)
		{
      this.o6x = j3e(x9e.substr(1, 4), 0);
		}
		else if (y5o == 10)
		{
			this.u4v = j3e(x9e.substr(8, 2), 0);
			this.l6c = j3e(x9e.substr(5, 2), 0);
			this.o6x = j3e(x9e.substr(0, 4), 0);
		}
	}
	else if (j2m == "dd-mm-yy" || j2m == "dd.mm.yy")
	{
		if (y5o == 8)
		{
			this.u4v = j3e(x9e.substr(0, 2), 0);
			this.l6c = j3e(x9e.substr(3, 2), 0);
			this.o6x = j3e(x9e.substr(6, 2), 0) + 2000;
		}
	}
}

toString(j2m)
{
	let x9e = '';
	if (this.k2v())
	{
	}
	else if (j2m == "list")
	{
		let b6v = this.o6x.toString().padStart(4, '0');
		let v0g = this.l6c.toString().padStart(2, '0');
		let x4l = this.u4v.toString().padStart(2, '0');
		if (this.u4v)
		{
			x9e = x4l + "-" + v0g + "-" + b6v;
		}
		else if (this.l6c)
		{
			x9e = v0g + "-" + b6v;
		}
		else if (this.o6x)
		{
			x9e = b6v;
		}
	}
	else if (j2m == "dd-mm-yyyy")
	{
		let b6v = this.o6x.toString().padStart(4, '0');
		let v0g = this.l6c.toString().padStart(2, '0');
		let x4l = this.u4v.toString().padStart(2, '0');
		x9e = x4l + "-" + v0g + "-" + b6v;
	}
	else if (j2m == "dd.mm.yyyy")
	{
		let b6v = this.o6x.toString().padStart(4, '0');
		let v0g = this.l6c.toString().padStart(2, '0');
		let x4l = this.u4v.toString().padStart(2, '0');
		x9e = x4l + "." + v0g + "." + b6v;
	}
	else if (j2m == "yyyy-mm-dd")
	{
		let b6v = this.o6x.toString().padStart(4, '0');
		let v0g = this.l6c.toString().padStart(2, '0');
		let x4l = this.u4v.toString().padStart(2, '0');
		x9e = b6v + "-" + v0g + "-" + x4l;
	}
	else if (j2m == "yyyy.mm.dd")
	{
		let b6v = this.o6x.toString().padStart(4, '0');
		let v0g = this.l6c.toString().padStart(2, '0');
		let x4l = this.u4v.toString().padStart(2, '0');
		x9e = b6v + "." + v0g + "." + x4l;
	}
	else if (j2m == "yyyymmdd")
	{
		let b6v = this.o6x.toString().padStart(4, '0');
		let v0g = this.l6c.toString().padStart(2, '0');
		let x4l = this.u4v.toString().padStart(2, '0');
		x9e = b6v + v0g + x4l;
	}
	else if (j2m == "yyyy")
	{
		let b6v = this.o6x.toString().padStart(4, '0');
		x9e = b6v;
	}
	return x9e;
}

}

class p6z
{

constructor()
{
	this.w4z = new d0k();
	this.x9v = new l8c();
	this.q8l = 0;
	this.r0m = 0;
	this.q8c = "";
  this.v0e = y2m.u7c;
}

o0o()
{
	let i2z = new p6z();
	i2z.w4z = this.w4z.o0o();
	i2z.x9v = this.x9v.o0o();
	i2z.q8l = this.q8l;
	i2z.r0m = this.r0m;
	i2z.q8c = this.q8c;
  i2z.v0e = this.v0e;
	return i2z;
}

k2v()
{
	return this.w4z.k2v() &&
		this.x9v.k2v() &&
		this.q8l == 0 &&
		this.r0m == 0 &&
		this.q8c == "" &&
 		this.v0e == y2m.u7c;
}

}


class m3k
{

constructor()
{
	this.o5v = new p6z();
	this.u6y = new p6z();
	this.q7o = new v3a();
	this.p0d = new b5n();
	this.e3m = new o7f();
	this.q8c = new o0y();
	this.u9c = new b2s();
	this.s5a = o9d.u7c;
	this.q2o = 0;
	this.e9m = 0;
	this.o9y = 0;
	this.l8h = new s5d();
  this.u2n = new c6g();
}

o0o()
{
	let i0g = new m3k();
	i0g.o5v = this.o5v.o0o();
	i0g.u6y = this.u6y.o0o();
	i0g.q7o = this.q7o.o0o();
	i0g.p0d = this.p0d.o0o();
	i0g.e3m = this.e3m.o0o();
	i0g.q8c = this.q8c.o0o();
	i0g.u9c = this.u9c.o0o();
	i0g.s5a = this.s5a;
	i0g.q2o = this.q2o;
	i0g.e9m = this.e9m;
	i0g.o9y = this.o9y;
	i0g.l8h = this.l8h.o0o();
  i0g.u2n = this.u2n.o0o();
	return i0g;
}

k2v()
{
	return this.o5v.k2v() &&
		this.u6y.k2v() &&
		this.q7o.k2v() &&
		this.p0d.k2v() &&
		this.e3m.k2v() &&
		this.q8c.k2v() &&
		this.u9c.k2v() &&
		this.s5a == o9d.u7c &&
		this.q2o == 0 &&
		this.e9m == 0 &&
		this.o9y == 0 &&
		this.l8h.k2v();
}

a8d()
{
	let x9e = '';
	if (this.o9y)
	{
		x9e = this.e9m.toString() + "." + this.o9y.toString();
	}
	else if (this.e9m)
	{
		x9e = this.e9m.toString();
	}
	return x9e;
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
	this.q8c = '';
}

o0o()
{
	let j0m = new o0y();
	j0m.q8c = this.q8c;
	return j0m;
}

k2v()
{
	return this.q8c.length == 0;
}

t4q()
{
	return this.q8c;
}

}


class d0k
{

constructor()
{
	this.v2d = '';
	this.e8v = '';
}

o0o()
{
	let e5f = new d0k();
	e5f.v2d = this.v2d;
	e5f.e8v = this.e8v;
	return e5f;
}

k2v()
{
	return this.e8v.length == 0 &&
		this.v2d.length == 0;
}

j7x()
{
	if (!this.e8v.length == 0 && !this.v2d.length == 0)
	{
		return this.e8v + "," + this.v2d;
	}
	else if (this.e8v.length == 0 && this.v2d.length == 0)
	{
		return "";
	}
	else if (this.v2d.length == 0)
	{
		return this.e8v;
	}
	else
	{
		return this.v2d;
	}
}

m5g()
{
	return this.j7x().replace(/,/g, " ");
}

k9g()
{
	return this.f1i(1).replace(/,/g, " ");
}

f1i(z9k)
{
	if (this.e8v.length == 0)
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
			return this.e8v;
		}
		else
		{
			return this.e8v + "," + this.v2d.substring(0, z9k);
		}
	}
}

n5g(c5f)
{
	let x9e = c5f.trim();
	let i7j = x9e.lastIndexOf(",");
	if (i7j != -1)
	{
		this.e8v = x9e.substr(0, i7j).trim();
		this.v2d = x9e.substr(i7j+1, x9e.length).trim();
		if (this.v2d.length != 0)
		{
			if (this.v2d.charAt(0).toLowerCase() == this.v2d.charAt(0))
			{
				this.e8v += ",";
				this.e8v += this.v2d;
				this.v2d = "";
			}
		}
	}
	else
	{
		this.e8v = x9e;
		this.v2d = "";
	}
}

t4q()
{
	return this.j7x();
}

}

const o9d =
{
	u7c : 0,
	f7r : 1,
	k6l : 2,
	y8o : 3,
	e4t : 4,
	q4p : 5,
	r2w : 6,
	o9f : 7,
	h3h : 8,
	e7o : 9,
	o0g : 10,
	i8a : 11,
	k5j : 12,
	x5f : 13,
	y6r : 14,
	x7q : 15
};


function v1x(s5a)
{
	switch (s5a)
	{
		case o9d.f7r:
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
	x3o : 1,
	l3h : 2
};

const e9p =
[
	[ k2e.e8e,   "High" ],
	[ k2e.x3o, "Middle" ],
	[ k2e.l3h,    "Low" ]
];

class o7f
{

constructor()
{
	this.q8c = '';
	this.k6w = '';
	this.j0g = new b2s();
	this.n4q = new b2s();
	this.t9q = 0;
	this.n2o = k2e.e8e;
}

o0o()
{
	let q8a = new o7f();
	q8a.q8c = this.q8c;
	q8a.k6w = this.k6w;
	q8a.j0g = this.j0g.o0o();
	q8a.n4q = this.n4q.o0o();
	q8a.t9q = this.t9q;
	q8a.n2o = this.n2o;
	return q8a;
}

k2v()
{
	return this.q8c.length == 0 &&
		this.k6w.length == 0 &&
		this.j0g.k2v() &&
		this.n4q.k2v() &&
		this.t9q == 0 &&
		this.n2o == k2e.e8e;
}

t4q()
{
	let x9e = this.q8c;
	if (this.k6w.length)
	{
		if (x9e.length)
		{
			x9e += " ";
		}
		x9e += this.k6w;
	}
	return x9e;
}

}


const d1q =
{
	n9a : 0,
	b9q : 1,
	c7c : 2,
	x8l : 3,
	n3y : 4,
	k7p : 5,
	j4c : 6,
	r0s : 7,
	v0a : 8,
	u2w : 9,
	d6e : 10,
	c4v : 11,
	d5o : 12,
	b9d : 13,
	j3i : 14,
	k5h : 15
};

class s5d
{

constructor()
{
	this.value = 0;
}

k1e(value)
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

u7c()
{
	return this.value == 0;
}

g3o()
{
	let p0n = 0;
	for (let i = 0; i < 16; i++)
	{
		if (this.q2q(i))
		{
			p0n++;
		}
	}
	return p0n;
}

p3l()
{
	this.value = 0;
}

set(z0r, d0x)
{
	if (d0x)
	{
		this.value |= (1 << z0r);
	}
	else
	{
		this.value &= ~(1 << z0r);
	}
}

q2q(z0r)
{
	return (this.value & (1 << z0r)) != 0;
}

t4s()
{
	return this.value;
}

}

function l1n(b6v)
{
	return b6v.toString().padStart(4, '0');
}

class l8c
{

constructor()
{
	this.j7x = '';
	this.f7z = 0;
	this.b6v = 0;
	this.c0y = false;
	this.v0e = y2m.u7c;
}

o0o()
{
	let t8l = new l8c();
	t8l.j7x = this.j7x;
	t8l.f7z = this.f7z;
	t8l.b6v = this.b6v;
	t8l.c0y = this.c0y;
	t8l.v0e = this.v0e;
	return t8l;
}

k2v()
{
	return this.j7x.length == 0 &&
		this.f7z == 0 &&
		this.b6v == 0 &&
		this.c0y == false &&
		this.v0e == y2m.u7c;
}

v2k()
{
	let x9e = this.j7x;
	if (this.f7z)
	{
		if (x9e.length)
		{
			x9e += " ";
		}
		x9e += this.f7z;
	}
	return x9e;
}

t4q()
{
	let x9e = this.j7x;
	if (this.f7z)
	{
		if (x9e.length)
		{
			x9e += " ";
		}
		x9e += this.f7z;
	}
	if (x9e.length)
	{
		x9e += " ";
	}
	x9e += this.r3t();
	return x9e;
}


t8b()
{
	let x9e = this.j7x;
	if (this.f7z > 1)
	{
		x9e += " ";
		x9e += this.f7z;
	}
	return x9e;
}

r3t()
{
	let x9e = '';
	if (this.c0y)
	{
		let x7z = l1n(this.b6v);
		let j6a = l1n(this.b6v + 1);
		let a1z = x7z + "/" + j6a.substr(2, 2);
		x9e = a1z;
	}
	else
	{
		x9e = l1n(this.b6v);
	}
	return x9e;
}

}

class y5u
{

constructor()
{
	this.f7g = 0;
	this.r7j = 0;
	this.s4y = 0;

}

}

function e7x(x9e, s2u, r0m)
{
	r0m.f7g = 0;
	r0m.r7j = 0;
	r0m.s4y = 0;

	let y5o = x9e.length;
	if (!y5o || x9e == "?")
	{
		return;
	}
	let i = 0;
	for (; i < y5o; i++)
	{
		if (!isNaN(x9e[i]))
		{
			break;
		}
	}
	let q9l = '';
	for (; i < y5o; i++)
	{
		if (isNaN(x9e[i]))
		{
			break;
		}
		q9l += x9e[i].toString();
	}
	for (; i < y5o; i++)
	{
		if (!isNaN(x9e[i]))
		{
			break;
		}
	}
	let i0y = '';
	for (; i < y5o; i++)
	{
		if (isNaN(x9e[i]))
		{
			break;
		}
		i0y += x9e[i].toString();
	}
	for (; i < y5o; i++)
	{
		if (!isNaN(x9e[i]))
		{
			break;
		}
	}
	let d6z = '';
	for (; i < y5o; i++)
	{
		if (isNaN(x9e[i]))
		{
			break;
		}
		d6z += x9e[i].toString();
	}
	let g9g = j3e(q9l, 0);
	let x9l = j3e(i0y, 0);
	let c2m = j3e(d6z, 0);
	if (
		g9g < 0 || g9g > s2u ||
		x9l < 0 || x9l > 59 ||
		c2m < 0 || c2m > 59)
	{
		g9g = 0;
		x9l = 0;
		c2m = 0;
	}
	r0m.f7g = g9g;
	r0m.r7j = x9l;
	r0m.s4y = c2m;
}

function c4p(x9e)
{
	if (x9e.length == 0)
	{
		return 0;
	}
	else
	{
		let r0m = new y5u();
		e7x(x9e, 9, r0m);
		return r0m.f7g * 60 + r0m.r7j;
	}
}


const f4v =
{
	u7c : 0,
	x1i : 1,
	b7x : 2,
	q7o : 3,
	p0y : 4,
	l0o : 5,
	q6r : 6,
	a1j : 7
};

const a6c =
[
	[ f4v.u7c, 			 	""                   ],
	[ f4v.x1i,  		 	"SingleGame"         ],
	[ f4v.b7x,  		 	"Match"              ],
	[ f4v.q7o,  "RoundRobin"         ],
	[ f4v.p0y,   		"SwissSystem"        ],
	[ f4v.l0o,    "Knockout"           ],
	[ f4v.q6r,"Simul"              ],
	[ f4v.a1j,"ScheveningenSystem" ]
];

class v3a
{

constructor()
{
	this.q8c = '';
	this.s9u = '';
	this.w3q = new b2s();
	this.h9j = new b2s();
	this.e5u = f0j.a3h;
	this.z5s = 0;
	this.v0e = y2m.u7c;
	this.type = f4v.u7c;
	this.n8n = 0;
	this.s5z = false;
	this.e5e = false;
	this.o1x = false;
	this.f0k = false;
}

o0o()
{
	let j0p = new v3a();
	j0p.q8c = this.q8c;
	j0p.s9u = this.s9u;
	j0p.w3q = this.w3q.o0o();
	j0p.h9j = this.h9j.o0o();
	j0p.e5u = this.e5u;
	j0p.z5s = this.z5s;
	j0p.v0e = this.v0e;
	j0p.type = this.type;
	j0p.n8n = this.n8n;
	j0p.s5z = this.s5z;
	j0p.e5e = this.e5e;
	j0p.o1x = this.o1x;
	j0p.f0k = this.f0k;
	return j0p;
}

k2v()
{
	return this.q8c.length == 0 &&
		this.s9u.length == 0 &&
		this.w3q.k2v() &&
		this.h9j.k2v() &&
		this.e5u == f0j.a3h &&
		this.z5s == 0 &&
		this.v0e == y2m.u7c &&
		this.type == f4v.u7c &&
		!this.n8n &&
		!this.s5z &&
		!this.e5e &&
		!this.o1x &&
		!this.f0k;
}

t4q()
{
	let x9e = this.q8c;
	if (this.s9u.length)
	{
		if (x9e.length)
		{
			x9e += " ";
		}
		x9e += this.s9u;
	}
	if (x9e.length)
	{
		x9e += " ";
	}
	let b6v = this.w3q.b6v.toString().padStart(4, '0');
	x9e += b6v;
	return x9e;
}

}



const f0j =
{
	a3h : 0,
	o4u : 1,
	w3w : 2,
	h0o : 3
};

const l3r =
[
	[ f0j.a3h, "Normal" ],
	[ f0j.o4u,  "Rapid"  ],
	[ f0j.w3w,  "Blitz"  ],
	[ f0j.h0o,   "Corr"   ]
];

function h0q(e5u)
{
	return l3r[e5u][1];
}

function s3u()
{
	let s5m = [];
	for (const e5u of l3r)
	{
		s5m.push(e5u[1]);
	}
	return s5m;
}

class v0r
{

constructor()
{
	this.z8s = '';
	this.q9g = '';
	this.h7c = n8u.u7c;
	this.style = c8l.u7c;
	this.value = b4c.u7c;
	this.u2y = new p6t();
	this.e6v = new s7c();
	this.s6p = new x6l();
	this.z4d = o9q.u7c;
	this.q0w = false;
	this.k0v = false;
  this.h7b = false;
}

o0o()
{
	let q0n = new v0r();
	q0n.z8s = this.z8s;
	q0n.q9g = this.q9g;
	q0n.h7c = this.h7c;
	q0n.style = this.style;
	q0n.value = this.value;
	q0n.u2y = this.u2y.o0o();
	q0n.e6v = this.e6v.o0o();
	q0n.s6p = this.s6p.o0o();
	q0n.z4d = this.z4d;
	q0n.q0w = this.q0w;
	q0n.k0v = this.k0v;
 	q0n.h7b = this.h7b;
	return q0n;
}

k2v()
{
	return this.z8s.length == 0 &&
		this.q9g.length == 0 &&
		this.h7c == n8u.u7c &&
		this.style == c8l.u7c &&
		this.value == b4c.u7c &&
		this.u2y.k2v() &&
		this.e6v.k2v() &&
		this.s6p.k2v() &&
		this.z4d == o9q.u7c &&
		this.q0w == false &&
		this.k0v == false &&
 		this.h7b == false;
}

}

const o9q =
{
	u7c : 0,
	l2s : 1,
	x3o : 2,
	r6z : 3
};

const f1z =
{
	n4l : 0,
	t6e : 1,
	u5r : 2,
	t9z : 3,
	f4x : 4,
	j8u : 5,
	q2j : 6,
	x7q : 7,
	c8o : 8,
	u1e : 9,
	g9j : 10,
	k6k : 11,
	p3c : 12,
	r8u : 13,
	h1b : 14,
	j9x : 15
};

class p6t
{

constructor()
{
	this.value = 0;
}

k1e(value)
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

u7c()
{
	return this.value == 0;
}

g3o()
{
	let p0n = 0;
	for (let i = 0; i < 16; i++)
	{
		if (this.q2q(i))
		{
			p0n++;
		}
	}
	return p0n;
}

p3l()
{
	this.value = 0;
}

set(z0r, d0x)
{
	if (d0x)
	{
		this.value |= (1 << z0r);
	}
	else
	{
		this.value &= ~(1 << z0r);
	}
}

q2q(z0r)
{
	return (this.value & (1 << z0r)) != 0;
}

t4s()
{
	return this.value;
}

}

const n8u =
{
	u7c : 0,
	f2w : 1,
	s4n : 2,
	g7i : 3,
	c6m : 4,
	e4e : 5,
	s9h : 6
};

const v3w =
[
	[ n8u.u7c,     		  ""   ],
	[ n8u.f2w,       		  "RR" ],
	[ n8u.s4n, 		  "&#8979;"  ],
	[ n8u.g7i, 		  "&#8804;"  ],
	[ n8u.c6m,  "="  ],
	[ n8u.e4e,   "&#9651;"  ],
	[ n8u.s9h,  "&#9661;"  ]
];

function z0t(h7c)
{
	return v3w[h7c][1];
}


const c8l =
{
	u7c : 0,
	p5g : 1,
	y7x : 2,
	e9c : 3,
	g7c : 4,
	r9v : 5,
	u3z : 6,
	e1e : 7,
	n2g : 8
};

const b4h =
[
	[ c8l.u7c,     		"" 	 ],
	[ c8l.p5g,       	"!"  ],
	[ c8l.y7x, 					"?"  ],
	[ c8l.e9c,	"!?" ],
	[ c8l.g7c,	 		"?!" ],
	[ c8l.r9v,  	"!!" ],
	[ c8l.u3z, 			"??" ],
	[ c8l.e1e, 		"&#8857;"  ],
	[ c8l.n2g, 		"&#9723;"  ]
];

function m9t(style)
{
	return b4h[style][1];
}


class q3c
{

constructor()
{
	this.v5h = new g8w();
	this.v8t = null;
	this.r7l = null;
	this.k1u = null;
	this.t7o = null;
  this.f7z = 0; 
}

w8l(v5h)
{
	this.v5h = v5h.o0o();
}

h7l(h1s, p1d, y2r, r4g)
{
	this.v5h.h7l(h1s, p1d, y2r, r4g);
}

}

class w6u
{

constructor()
{
	this.f2x = null;
	this.v5h = null;
}

m9k(u9n)
{
	return this.f2x == u9n.f2x;
}

r2t(u9n)
{
	return !this.m9k(u9n);
}

o0o()
{
	let u8v = new w6u();
  u8v.f2x = this.f2x;
  u8v.v5h = this.v5h;
	return u8v;
}

}


class e5q
{

constructor()
{
	this.v6m = new z4m();
 	this.d6x = null;
	this.q9x = 1;
	this.v6m.g7b();
  this.m9w = new v0r();
}

o0s(u9n)
{
	this.m1m(u9n.v6m, u9n.q9x);
	this.m9w = u9n.m9w.o0o();
	this.d6x = this.b6q(u9n.d6x);
}

o0o()
{
	let w5n = new e5q();
	w5n.o0s(this);
	return w5n;
}

m1m(x1z, o7x)
{
	this.v6m = x1z.o0o();
	this.q9x = o7x;
	this.m9w = new v0r();
	this.d6x = null;
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
	let i7j = this.y5m();
	this.v6b(i7j);
	return i7j;
}


s2i()
{
	let v6b = this.q7d();
	return this.h1s(v6b);
}


j4i(i7j)
{
  let t0s = this.z0p(i7j) + 1;
	if (t0s)
	{
		return this.q9x +
			Math.floor((t0s - 1 + this.v6m.x0s()) / 2);
	}
	else
	{
		return this.q9x;
	}
}

z0p(i7j)
{
	let t0s = 0;
	if (!i7j.f2x)
	{
		return 0;
	}
	let f6n = i7j.f2x;
	while (1)
	{
		t0s++;
		if (!f6n.r7l)
		{
			let k1h = f6n;
			while (k1h.k1u)
			{
				k1h = k1h.k1u;
			}
			if (!k1h.r7l)
			{
				break;
			}
		}
		if (f6n.r7l)
		{
			f6n = f6n.r7l;
		}
		else
		{
			let k1h = f6n;
			while (k1h.k1u)
			{
				k1h = k1h.k1u;
			}
			f6n = k1h.r7l;
		}
	}
	return t0s;
}


h1j()
{
	let a8s = 0;
	let h4t = this.d6x;
	while (h4t)
	{
		a8s++;
		h4t = h4t.v8t;
	}
	return a8s;
}

e7m()
{
	return this.d6x != null;
}

j6e(i7j)
{
	return i7j.m9k(this.y5m());
}

e2m(i7j)
{
	if (i7j.f2x)
	{
		return i7j.f2x.v8t == null;
	}
	else if (this.d6x)
	{
		return false;
	}
	else
	{
		return true;
	}
}

y9l(i7j)
{
	if (!this.j6e(i7j))
	{
		if (i7j.f2x.r7l)
		{
			i7j.f2x = i7j.f2x.r7l;
			i7j.v5h = i7j.f2x.v5h;
		}
		else
		{
			let f6n = i7j.f2x;
			while (f6n.k1u)
			{
				f6n = f6n.k1u;
			}
			f6n = f6n.r7l;
			i7j.f2x = f6n;
      if (i7j.f2x)
      {
  			i7j.v5h = i7j.f2x.v5h;
      }
      else
      {
        i7j.v5h = null;
      }
		}
	}
}

r9f(i7j)
{
	if (!this.e2m(i7j))
	{
		i7j.f2x = this.d0w(i7j);
		i7j.v5h = i7j.f2x.v5h;
	}
}

z0a(i7j, o2w)
{
	let c1d = this.d4m(i7j);
	if (o2w < 0 || o2w >= c1d)
	{
		return;
	}
	let k1h = this.d0w(i7j);
	let i = 0;
	while (i != o2w)
	{
		i++;
		k1h = k1h.t7o;
	}
	i7j.f2x = k1h;
	i7j.v5h = i7j.f2x.v5h;
}

j8h(i7j)
{
	if (!i7j.f2x)
	{
		return this.q9x;
	}
	let t0s = this.z0p(i7j);
	if (t0s)
	{
		return this.q9x +
      Math.floor((t0s - 1 + this.v6m.x0s()) / 2);
	}
	else
	{
		return this.q9x;
	}
}

y5m()
{
	let i7j = new w6u();
	i7j.f2x = null;
	i7j.v5h = null;
	return i7j;
}

v6b(i7j)
{
	if (!this.e2m(i7j))
	{
		let f6n = this.d0w(i7j);
		while (true)
		{
			if (!f6n.v8t)
			{
				break;
			}
			f6n = f6n.v8t;
		}
		i7j.f2x = f6n;
		i7j.v5h = i7j.f2x.v5h;
	}
}

v5g(z2k)
{
	let i7j = this.y5m();
	if (z2k > 0)
	{
    this.z2k = 0;
		this.z1m(i7j, z2k);
		return i7j;
	}
	else
	{
		return i7j;
	}
}

z1m(i7j, z2k)
{
	while (true)
	{
		if (this.e2m(i7j))
		{
			return false;
		}
		let c1d = this.d4m(i7j);
		if (c1d > 1)
		{
			let l2x = i7j.o0o();
			for (let i = 1; i < c1d; i++)
			{
				this.z0a(i7j, i);
				this.z2k++;
				if (this.z2k == z2k)
				{
					return true;
				}
				if (this.z1m(i7j, z2k))
				{
					return true;
				}
        i7j.f2x = l2x.f2x;
        i7j.v5h = l2x.v5h;
			}
		}
		this.r9f(i7j);
		this.z2k++;
		if (this.z2k == z2k)
		{
			return true;
		}
	}
}

a9r(i7j)
{
	if (!i7j.f2x)
	{
		return 0;
	}
	else
	{
		return i7j.f2x.f7z;
	}
}

l3c(i7j)
{
	let g7g = [];
 	if (!i7j.f2x)
  {
		return g7g;
	}
	let f6n = i7j.f2x;
	while (1)
	{
		g7g.push(f6n);
		if (!f6n.r7l)
		{
			let k1h = f6n;
			while (k1h.k1u)
			{
				k1h = k1h.k1u;
			}
			if (!k1h.r7l)
			{
				break;
			}
		}
		if (f6n.r7l)
		{
			f6n = f6n.r7l;
		}
		else
		{
			let k1h = f6n;
			while (k1h.k1u)
			{
				k1h = k1h.k1u;
			}
			f6n = k1h.r7l;
		}
	}
	return g7g.reverse();
}

i7y(i7j)
{
	let g7g = this.l3c(i7j);
	let c1d = this.d4m(i7j);
	if (c1d == 0)
	{
		return g7g;
	}
	let k5r = this.u4i(i7j, 0);
	while (k5r)
	{
		g7g.push(k5r);
		k5r = k5r.v8t;
	}
	return g7g;
}

d4m(i7j)
{
	let k5r = this.d0w(i7j);
	if (!k5r)
	{
		return 0;
	}
	let c1d = 1;
	while (k5r.t7o)
	{
		c1d++;
		k5r = k5r.t7o;
	}
	return c1d;
}

u2j(i7j, t5v)
{
	if (this.j6e(i7j))
	{
		this.d6x = t5v;
		i7j.f2x = t5v;
		i7j.v5h = i7j.f2x.v5h;
	}
	else
	{
		i7j.f2x.v8t = t5v;
		t5v.r7l = i7j.f2x;
		i7j.f2x = t5v;
		i7j.v5h = i7j.f2x.v5h;
	}
}

b7y(i7j, t5v)
{
	let k1h = this.d0w(i7j);
	while (k1h.t7o)
	{
		k1h = k1h.t7o;
	}
	k1h.t7o = t5v;
	t5v.k1u = k1h;

	i7j.f2x = t5v;
	i7j.v5h = i7j.f2x.v5h;
}

v9t(i7j, v5h)
{
	let t5v = new q3c();
 	t5v.w8l(v5h);
	if (this.e2m(i7j))
	{
		this.u2j(i7j, t5v);
	}
	else
	{
		this.b7y(i7j, t5v);
	}
}


t3s(i7j, g7g)
{
	for (const v5h of g7g)
	{
		this.v9t(i7j, v5h);
	}
}


o6h(i7j)
{
	let k1h = this.u4i(i7j, 1);
	if (!k1h)
	{
		return false;
	}
	while (k1h)
	{
		let h4t = k1h.v8t;
		while (h4t)
		{
			if (h4t.t7o)
			{
				return false;
			}
			h4t = h4t.v8t;
		}
		k1h = k1h.t7o;
	}
	return true;
}

h0b()
{
	let h4t = this.d6x;
	while (h4t)
	{
		if (h4t.t7o)
		{
			return true;
		}
		h4t = h4t.v8t;
	}
	return false;
}

i1g()
{
	if (!this.m9w.k2v())
	{
		return true;
	}
	if (this.h0b())
	{
		return true;
	}
	let h4t = this.d6x;
	while (h4t)
	{
		if (h4t.v5h.i1g())
		{
			return true;
		}
		h4t = h4t.v8t;
	}
	return false;
}

d0w(i7j)
{
	if (i7j.f2x)
	{
		return i7j.f2x.v8t;
	}
	return this.d6x;
}

u4i(i7j, o2w)
{
	let i = 0;
	let k1h = this.d0w(i7j);
	while (k1h && i != o2w)
	{
		k1h = k1h.t7o;
		i++;
	}
	return k1h;
}

b6q(k1h)
{
	let j0l = k1h;
	let g2k = null;
	let t5v = null;
	let e9k = null;
	while (j0l)
	{
		t5v = new q3c();
		t5v.w8l(j0l.v5h);
		if (g2k)
		{
			g2k.v8t = t5v;
			t5v.r7l = g2k;
		}
		else
		{
			e9k = t5v;
		}
		g2k = t5v;
		if (j0l.t7o && !j0l.k1u)
		{
			let w3c = j0l.t7o;
			let h7a = g2k;
			while (w3c)
			{
				let v8b = this.b6q(w3c);
				h7a.t7o = v8b;
				v8b.k1u = h7a;
				h7a = v8b;
				w3c = w3c.t7o;
			}
		}
		j0l = j0l.v8t;
	}
	return e9k;
}

t9y()
{
	return this.m9w;
}

n7s()
{
	return this.m9w.z8s;
}

c8d(t0e)
{
	this.m9w.z8s = t0e;
}

v0j()
{
	return !this.m9w.e6v.k2v();
}

m1p(e6v)
{
	this.m9w.e6v = e6v.o0o();
}

c2d()
{
	return this.m9w.e6v;
}

o7o()
{
	return !this.m9w.s6p.k2v();
}

m7d(s6p)
{
	this.m9w.s6p = s6p.o0o();
}

m1r()
{
	return this.m9w.s6p;
}

j5x()
{
	return !this.m9w.u2y.k2v();
}

l7d(u2y)
{
	this.m9w.u2y = u2y.o0o();
}

n4b()
{
	return this.m9w.u2y;
}

i5u(z2k)
{
  if (z2k == 0)
  {
    return true;
  }
	let h4t = this.d6x;
	while (h4t)
	{
    if (h4t.f7z == z2k)
    {
      return true;
    }
		h4t = h4t.v8t;
	}
	return false;
}

i3m()
{
	let i7j = this.y5m();
	this.z2k = 0;
	this.k0b(i7j);
}

k0b(i7j)
{
	while (true)
	{
		if (this.e2m(i7j))
		{
			return;
		}
		let c1d = this.d4m(i7j);
		if (c1d > 1)
		{
			let l2x = i7j.o0o();
			for (let i = 1; i < c1d; i++)
			{
				this.z0a(i7j, i);
				this.z2k++;
        i7j.f2x.f7z = this.z2k;
				this.k0b(i7j);
        i7j.f2x = l2x.f2x;
        i7j.v5h = l2x.v5h;
			}
		}
		this.r9f(i7j);
  	this.z2k++;
    i7j.f2x.f7z = this.z2k;
	}
}

h1s(i7j)
{
	let h1s = this.v6m.o0o();
	if (!i7j.f2x)
	{
		return h1s;
	}
	let g7g = this.b6n(i7j);
  for (const v5h of g7g)
	{
		h1s.r9f(v5h.z2g());
	}
	return h1s;
}

b6n(i7j)
{
	let g7g = [];
 	if (!i7j.f2x)
  {
		return g7g;
	}
	let f6n = i7j.f2x;
	while (1)
	{
		g7g.push(f6n.v5h);
		if (!f6n.r7l)
		{
			let k1h = f6n;
			while (k1h.k1u)
			{
				k1h = k1h.k1u;
			}
			if (!k1h.r7l)
			{
				break;
			}
		}
		if (f6n.r7l)
		{
			f6n = f6n.r7l;
		}
		else
		{
			let k1h = f6n;
			while (k1h.k1u)
			{
				k1h = k1h.k1u;
			}
			f6n = k1h.r7l;
		}
	}
	return g7g.reverse();
}


w0v()
{
	this.m9w = new v0r();
	this.d6x = null; 
  
}


n7v()
{
	let g7g = [];
	let h4t = this.d6x;
	while (h4t)
	{
		g7g.push(h4t.v5h);
		h4t = h4t.v8t;
	}
	return g7g;
}


}

const b4c =
{
	u7c : 0,
	e4t : 1,
	q4p : 2,
	r2w : 3,
	o9f : 4,
	h3h : 5,
	e7o : 6,
	o0g : 7,
	i8a : 8,
	k5j : 9,
	x5f : 10,
	y6r : 11,
	x7q : 12,
	y3z : 13,
	c7a : 14,
	t9z : 15
};

const s5c =
[
	[ b4c.u7c,     						  ""    ],
	[ b4c.e4t,        "+&#8211;" ],
	[ b4c.q4p, 						"&#177;" ],
	[ b4c.r2w,		"&#10866;"  ],
	[ b4c.o9f, 							"="   ],
	[ b4c.h3h,  							"&#8734;" ],
	[ b4c.e7o,  	"&#10865;"],
	[ b4c.o0g, 						"&#8723;" ],
	[ b4c.i8a, 				"&#8211;+"],
	[ b4c.k5j,						"&#8773;" ],
	[ b4c.x5f, 						"&#8646;" ],
	[ b4c.y6r,  						"&#8593;" ],
	[ b4c.x7q, 								"&#8594;" ],
	[ b4c.y3z, 					"&#8853;" ],
	[ b4c.c7a,		"&#10227;"],
	[ b4c.t9z, 								"N"   ]
];

function n6p(value)
{
	return s5c[value][1];
}


const b4f =
{
	g3z : 0,
	x2e : 1,
	c2e : 2
};

const u9g =
{
	u7c : 0,
	r1l : 1,
	d1g : 2,
	i0c : 3,
	m0f : 4,
	h7c : 5,
	q9g : 6,
	z8s : 7,
	o4h : 8,
	u2y : 9,
	q0w : 10,
	k0v : 11
};

/*
TO DO
- Aanpassen voor tekst after van e2l daar kan dia inzitten (zie c++)
- Vette tekst en niet vette r1l testen bij wel/niet MultiPV
*/
class c9o
{

constructor()
{
	this.j0v = new z1b();
  this.i3h = true;
  this.f8o = false;
  this.r5n = true;
  this.s1m = true;
  this.b2b = b4f.g3z;
  this.e0l = false;
  this.y1r = true;
 	this.q7f = true;
 	this.b3m = -1;
  this.w7l = false;
  this.z4w = false;
	this.k8r = false;
	this.d4a = true;
  this.m6n = false;
  this.x8h = false;
  this.n1m = 0;
	this.g9u = true;
  this.y2s = null;
 	this.x8t = u9g.u7c;
}

o3o(g7g)
{
	this.y2s = g7g;
 	let y5m = this.y2s.y5m();
	let x1z = this.y2s.x1z();
	this.x8t = u9g.u7c;
	this.d4a = true;
	this.z4w = false;
	this.k8r = false;
	this.w7l = false;
	this.m6n = this.y2s.i1g();
	this.g9u = true;
	this.n1m = 0;

	if (this.e0l)
	{
		this.e5k(u9g.d1g);
		this.a2e();
	}
	else
	{
    
    if (this.b2b == b4f.x2e ||
      (this.b2b == b4f.c2e && !x1z.l8d()))
    {
      if (this.s1m)
      {
        this.u2k(y5m, x1z, n1m);
        this.d4a = true;
      }
    }

    this.e5k((this.m6n && !this.h7b) ? u9g.r1l : u9g.d1g);
    this.g4d(this.m6n);
    this.v9t(y5m, "");
    this.o2x(y5m, this.y2s.t9y().z8s);

    if (this.y2s.e7m())
    {
      this.a2h();
    }
   	this.e5k(u9g.u7c);
   	this.o5m();
  }
}

a2e()
{
	let i7j = this.y2s.y5m();
	let d4m = this.y2s.d4m(i7j);
	for (let i = 0; i < d4m; i++)
	{
    this.j0v.c3l('<div class="variation-row">');
		i7j = this.y2s.y5m();
  	let h1s = this.y2s.x1z();
	  let j8h = this.y2s.o7x();
		this.y2s.z0a(i7j, i);
		this.d4a = true;
		let j7z = true;
		let v5h = i7j.v5h;
		let q9g = v5h.q9g();
		if (q9g.length)
		{
			this.q4u(i7j, q9g);
		}
		this.e5k(u9g.d1g);
		do
		{
			if (j7z)
			{
				i7j.v5h.k6f();
			}
			this.u6t(i7j, h1s, j8h);
			if (j7z)
			{
				i7j.v5h.z1f(q9g);
				j7z = false;
			}
			if (this.y2s.e2m(i7j))
			{
				break;
			}
			h1s.r9f(i7j.v5h);
			if (h1s.d9l())
			{
				j8h++;
			}
			this.y2s.r9f(i7j);
		} while (true);
    this.j0v.c3l('<div');
	}
}

a2h()
{
  let q9s = 0;
 	let i7j = this.y2s.y5m();
	let h1s = this.y2s.x1z();
  let j8h = this.y2s.o7x();

	let q1t = 100000;
	if (this.b3m == 0)
	{
		return;
	}
	if (this.b3m != -1)
	{
		q1t = this.b3m;
	}
	let s6s = j8h + q1t - 1;
	this.d4a = true;
	while (true)
	{
		let d4m = this.y2s.d4m(i7j);
		while (j8h <= s6s && !this.y2s.e2m(i7j))
		{
      this.y2s.r9f(i7j);
    	this.e5k((this.m6n && !this.h7b) ? u9g.r1l : u9g.d1g);
			this.u6t(i7j, h1s, j8h);
			h1s.r9f(i7j.v5h.z2g());
 			if (h1s.d9l())
			{
				j8h++;
			}
			if (this.q7f && d4m > 1)
			{
				break;
			}
			d4m = this.y2s.d4m(i7j);
		}
		if (!d4m || j8h > s6s)
		{
			return;
		}
    h1s.y9l(i7j.v5h.z2g());
		if (h1s.x0s())
		{
			j8h--;
		}
    this.y2s.y9l(i7j);
		for (let i = 1; i < d4m; i++)
		{
      q9s++;
      let o3w = "<span class=\"tdline\" data-level=\"";
      o3w += q9s.toString();
      o3w += "\">";
      this.j0v.c3l(o3w);
			this.q2f(u9g.i0c);
			this.v1n("[", true);
			let h7c = '';
      this.z5q(i7j, h1s, j8h, i, h7c, q9s);
			this.e5k(u9g.i0c);
			this.v1n("]", true);
      this.j0v.c3l("</span>");
      q9s--;
     	this.e5k((this.m6n && !this.h7b) ? u9g.r1l : u9g.d1g);
		}
		this.q2f(this.x8t);
    this.y2s.r9f(i7j);
    h1s.r9f(i7j.v5h.z2g());
		if (h1s.d9l())
		{
			j8h++;
		}
		this.d4a = true;
	}
}

u6t(i7j, h1s, j8h)
{
	if (this.y2s.j6e(i7j))
	{
		return;
	}
 	let v5h = i7j.v5h;

	let x9e = '';
  let m9a = false;
  if (this.i3h)
	{
		if (v5h.u0g())
		{
			if (!this.y2s.j6e(i7j))
			{
        let p7w = i7j.o0o();
        this.y2s.y9l(p7w);
        if (p7w.v5h)
        {
  				if (p7w.v5h.e4g())
	  			{
		  			m9a = true;
			  	}
        }
			}
		}
  }
	if (this.z4w)
	{
		x9e = "(";
		this.z4w = false;
		if (this.i3h && v5h.i9l())
		{
			this.v1n("(", true);
			let b2u = this.x8t;
			this.q4u(i7j, v5h.q9g());
			this.e5k(b2u);
			x9e = "";
      m9a = true;
		}
	}
	else
	{
		if (this.i3h && v5h.i9l())
		{
  	  let b2u = this.x8t;
	  	this.q4u(i7j, v5h.q9g());
		  this.e5k(b2u);
      m9a = true;
    }
	}
	if (v5h.l4f())
	{
		x9e += z0t(v5h.h7c());
	}
	let g6v = v5h.y7j();
	if (g6v)
	{
    x9e += j8h;
		x9e += '.';
	}
	else
	{
		if (this.d4a || m9a)
		{
 			x9e += j8h;
			x9e += "...";
		}
	}
	x9e += j0t(h1s, v5h.z2g(), false);
	if (v5h.f8e())
	{
		x9e += m9t(v5h.style());
	}
	if (v5h.e4n())
	{
		x9e += n6p(v5h.value());
	}
	if (v5h.m6u())
	{
		x9e += " End Of Game";
  }
	if (this.k8r || this.w7l)
	{
		if (this.y2s.e2m(i7j) && (!this.i3h || !v5h.e4g()))
		{
			if (this.k8r)
			{
				x9e += ")";
				this.k8r = false;
			}
			else
			{
				x9e += ";";
				this.w7l = false;
			}
		}
	}
	this.v9t(i7j, x9e);
	this.d4a = false;

	if (v5h.z8x())
	{
		let z8s = v5h.z8s();
    let e7q = z8s.indexOf("[#]");
		let c5p = z8s.substring(0, e7q);
	  let z6n = z8s.substring(e7q + 3);
		if (c5p.length)
		{
			this.o2x(i7j, c5p);
		}
		this.n1m++;
		if (this.s1m)
		{
			this.q2f(u9g.u7c);
      this.u2k(i7j, h1s, this.n1m);
			this.d4a = true;
		}
		if (z6n.length)
		{
			this.o2x(i7j, z6n);
		}
	}
	else
	{
		this.o2x(i7j, v5h.z8s());
	}

  if (v5h.m6u())
	{
    this.j0v.i5y("<div>&nbsp;</div>"); 
   	this.o5m();
 	  this.g4d(false); 
 	  this.x8h = true;
	}
}

e5k(n2u)
{
	if (n2u != this.x8t)
	{
		this.y3t();
		this.x8t = n2u;
		this.n8j();
	}
}

n8j()
{
}

y3t()
{
	this.x8t = u9g.u7c;
}

q2f(n2u)
{
	this.y3t();
	this.x8t = u9g.u7c;
  
  
  
  
  this.j0v.i5y("<br>"); 
	if (n2u != u9g.u7c)
	{
		this.x8t = n2u;
		this.n8j();
	}
}

u2k(i7j, h1s, f7z)
{
  this.g9u = true;
	let o3w = "<span class=\"tddia\" movenr=\"";
  o3w += this.y2s.a9r(i7j).toString();
	o3w += "\">",
	this.j0v.c3l(o3w);
	this.j0v.c3l("<canvas></canvas>");
	this.j0v.c3l("</span>");
	this.d4a = true;
}

z5b(i7j, t0e)
{
  this.u5f(i7j);
	this.h7n(t0e);
  this.e1w();
}

z5q(p2d, j3g, j8h, o2w, h7c, q9s)
{
  let i7j = p2d.o0o();
  let h1s = j3g.o0o();

	if (h7c.length)
	{
		this.e5k(u9g.h7c);
		let z5p = h7c;
		z5p += ")";
    let o3w = "<span class=\"tdprefix\">";
    this.j0v.c3l(o3w);
  	this.v1n(z5p);
    this.j0v.c3l("</span>");
	}
	let d4m = 0;
	let y7g = 1;
  this.y2s.z0a(i7j, o2w);
	this.d4a = true;
	do
	{
		this.e5k(u9g.i0c);
		this.u6t(i7j, h1s, j8h);
		if (d4m > 1)
		{
      this.y2s.y9l(i7j);
      this.e5j(i7j, h1s, j8h);
      this.y2s.r9f(i7j);
			this.d4a = true;
		}
		h1s.r9f(i7j.v5h.z2g());
		if (h1s.d9l())
		{
			j8h++;
		}
		d4m = this.y2s.d4m(i7j);
		if (d4m == 0)
		{
			break;
		}
		if (d4m > 1)
		{
			if (!this.y2s.o6h(i7j))
			{
				break;
			}
		}
    this.y2s.r9f(i7j);
		y7g++;
	} while (true);

	if (this.y2s.e2m(i7j))
	{
		return;
	}

	let p3p = h7c.length;
	let z5p = '';
	let g0q = 1;
	for (let i = 0; i < d4m; i++)
	{
		if (p3p == 0)
		{
      z5p = String.fromCharCode('A'.charCodeAt() + g0q - 1);
		}
		else if (p3p == 1)
		{
      z5p = h7c;
      z5p += g0q;
		}
		else if (p3p == 2)
		{
      z5p = h7c;
      z5p += String.fromCharCode('a'.charCodeAt() + g0q - 1);
		}
		else
		{
      z5p = h7c;
      z5p += g0q;
		}

    let o3w = "<span class=\"tdline\" data-level=\"";
    o3w += q9s.toString();
    o3w += "\">";
    this.j0v.c3l(o3w);
  	this.q2f(this.x8t);
    this.z5q(i7j, h1s, j8h, i, z5p, q9s);
    this.j0v.c3l("</span>");
		g0q++;
	}
}

e5j(p2d, j3g, j8h)
{
  let i7j = p2d.o0o();
  let h1s = j3g.o0o();

	this.e5k(u9g.m0f);
	this.z4w = true;
	this.w7l = false;
	let d4m = this.y2s.d4m(i7j);
	for (let i = 1; i < d4m; i++)
	{
		if (i == d4m - 1)
		{
			this.k8r = true;
		}
		if (i < d4m - 1)
		{
			this.w7l = true;
		}
    this.f4c(i7j, h1s, j8h, i);
		if (this.w7l)
		{
			this.e5k(u9g.m0f);
			this.v1n(";", false);
			this.w7l = false;
		}
	}
	this.e5k(u9g.m0f);
	if (this.k8r)
	{
		this.v1n(")", false);
		this.k8r = false;
	}
}

f4c(p2d, j3g, j8h, o2w)
{
  let i7j = p2d.o0o();
  let h1s = j3g.o0o();

  this.y2s.z0a(i7j, o2w);
	let y7g = 0;
	this.d4a = true;
	do
	{
		y7g++;
		this.e5k(u9g.m0f);
		this.u6t(i7j, h1s, j8h);
		if (this.y2s.e2m(i7j))
		{
			break;
		}
		h1s.r9f(i7j.v5h.z2g());
		if (h1s.d9l())
		{
			j8h++;
		}
    this.y2s.r9f(i7j);
	} while (true);
}

v9t(i7j, x9e)
{
	if (x9e.length)
	{
 		this.b5z(i7j, x9e);
	}
	else
	{
		if (this.y1r)
    {
      this.b5z(i7j, "[...]");
    }
	}
	if (i7j.v5h)
	{
		if (i7j.v5h.e5t() || i7j.v5h.z4c())
		{
			this.w9i(i7j, u9g.o4h);
		}
		if (i7j.v5h.z8x())
		{
		}
		if (i7j.v5h.f1k())
		{
			this.w9i(i7j, u9g.q0w);
		}
		if (i7j.v5h.v8d())
		{
			this.w9i(i7j, u9g.u2y);
		}
	}
	else
	{
		if (this.y2s.v0j() || this.y2s.o7o())
		{
			this.w9i(i7j, u9g.o4h);
		}
		if (this.y2s.j5x())
		{
		 	this.w9i(i7j, u9g.u2y);
		}
	}
}

v1n(x9e, s3y)
{
	if (x9e.length == 0)
	{
		return;
	}
	if (!this.g9u && s3y)
	{
		this.j0v.i5y(" ");
	}
	this.j0v.i5y(x9e);
	this.g9u = false;
}

q4u(i7j, q9g)
{
	if (this.i3h && q9g.length)
	{
		this.e5k(u9g.q9g);
		this.z5b(i7j, q9g);
	}
}

o2x(i7j, z8s)
{
	if (this.i3h && z8s.length)
	{
		this.e5k(u9g.z8s);
		this.z5b(i7j, z8s);
	}
}

h7n(t0e)
{
  let h6o = t0e;
  let v2o = h6o.replaceAll("<br><br>", "<br>");
  let w5x = v2o.replaceAll("<br><br>", "<br>");
  let d1x = w5x.replaceAll("<br>", "<div>&nbsp;</div>");
  let s = d1x;
  this.j0v.i5y(s);
}

b5z(i7j, x9e)
{
	if (x9e.length == 0)
	{
		return;
	}
	if (!this.g9u)
	{
		this.j0v.i5y(" ");
	}
  let i4x = '';
  if (i7j.v5h)
  {
  	if (i7j.v5h.v4k())
	  {
		  if (i7j.v5h.z4d() == o9q.l2s)
  		{
	  		i4x = "tdmove-crit-opening";
		  }
  		else if (i7j.v5h.z4d() == o9q.x3o)
	  	{
		  	i4x = "tdmove-crit-middle";
  		}
	  	else if (i7j.v5h.z4d() == o9q.r6z)
		  {
  			i4x = "tdmove-crit-end";
	  	}
  	}
  }
	let b3t = "<span class=\"";
	if (i4x.length == 0)
	{
		b3t += "tdmove\" movenr=\"";
	}
	else
	{
		b3t += "tdmove " + i4x + "\" movenr=\"";
	}
  b3t += this.y2s.a9r(i7j).toString();
  b3t += "\"";
	b3t += ">",
	b3t += x9e;
	b3t += "</span>";

	this.j0v.c3l(b3t);
	this.g9u = false;
}

w9i(i7j, n2u)
{
  if (n2u == u9g.o4h)
  {
    this.j0e(i7j);
  }
  else if (n2u == u9g.u2y)
  {
    this.h3l(i7j);
  }
}

j0e(i7j)
{
	let o3w = "<span class=\"tdcolors\" movenr=\"";
  o3w += this.y2s.a9r(i7j).toString();
	o3w += "\">",
	this.j0v.c3l(o3w);
	this.j0v.c3l("</span>");
}

h3l(i7j)
{
	let o3w = "<span class=\"tdmedal\" movenr=\"";
  o3w += this.y2s.a9r(i7j).toString();
	o3w += "\">",
	this.j0v.c3l(o3w);
	this.j0v.c3l("<canvas></canvas>");
	this.j0v.c3l("</span>");
}

g4d(r8e)
{
 	let o3w = "<span class=\"tdline\"";
	if (r8e)
	{
		o3w += " data-commented=\"1\"";
	}
	o3w += " data-level=\"0\">";
	this.j0v.i5y(o3w);
}

o5m()
{
  this.j0v.c3l("</span>");
}

u5f(i7j)
{
  let c4m = "tdcomment";
  if (this.f8o)
  {
    c4m += " is-bold";
  }
  let o3w = "<span class=\"" + c4m + "\" movenr=\"";
  o3w += this.y2s.a9r(i7j).toString();
  o3w += "\">";
  this.j0v.i5y(o3w);
}

e1w()
{
  this.j0v.c3l("</span>");
}

c6a(value)
{
  this.y1r = value;
}

n4z(value)
{
  this.f8o = value;
}

q8i(value)
{
  this.r5n = value;
}

q0e(value)
{
  this.e0l = value;
}

} 
const c3j =
{
	x7q : 1,
	u1e : 2,
	a9d : 3
};

class k7q
{

constructor()
{
	this.b8x = 0;
	this.s4k = 0;
	this.type = c3j.x7q;
}

o0o()
{
	let p9c = new k7q();
	p9c.b8x = this.b8x;
	p9c.s4k = this.s4k;
	p9c.type = this.type;
	return p9c;
}

}

function a0s(b8x, s4k, type)
{
	let s = new k7q();
	s.b8x = b8x;
	s.s4k = s4k;
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

h9k()
{
	return this.q1s.length;
}

add(f3z)
{
	let x2d = f3z.o0o();
	this.q1s.push(x2d);
}

}

const c7m =
{
	m5l : 0,
	b6s : 1,
	w7u : 2
};

class r3c
{

constructor()
{
	this.y0s = 0;
	this.type = c7m.m5l;
}

o0o()
{
	let i2u = new r3c();
	i2u.y0s = this.y0s;
	i2u.type = this.type;
	return i2u;
}

}

function c7t(y0s, type)
{
	let c3a = new r3c();
	c3a.y0s = y0s;
	c3a.type = type;
	return c3a;
}

class x6l
{

constructor()
{
	this.i3x = [];
}

o0o()
{
	let t9p = new x6l();
	for (const m2b of this.i3x)
	{
		t9p.add(m2b.o0o());
	}
	return t9p;
}

h2u()
{
	this.i3x.length = 0;
}

k2v()
{
	return this.i3x.length == 0;
}

h9k()
{
	return this.i3x.length;
}

add(l8r)
{
	let a7d = l8r.o0o();
	this.i3x.push(a7d);
}

}

const h7x =
{
	s7l    : 0,
	w2h  : 1,
	j1s  : 2,
	m7j    : 3,
  e0q   : 4,
	z6a    : 5,
};


function f3q(y3f)
{
	let x9e = '';
	switch (y3f)
	{
		case h7x.s7l:
			x9e = "P";
			break;
		case h7x.w2h:
			x9e = "N";
			break;
		case h7x.j1s:
			x9e = "B";
			break;
		case h7x.m7j:
			x9e = "R";
			break;
		case h7x.e0q:
			x9e = "Q";
			break;
		case h7x.king:
			x9e = "K";
			break;
	}
	return x9e;
}

class i0b
{

constructor()
{
  this.r5k = 0;
	this.g0g = new m3k();
	this.g7g = new e5q();
}

o0o()
{
	let a6t = new i0b();
  a6t.r5k = this.r5k;
	a6t.g0g = this.g0g.o0o();
	a6t.g7g = this.g7g.o0o();
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
	this.y8a = null;
	this.e8c = null;
	this.n6r = null;
	this.c0k = 0;
	this.b0l = 0;
	this.f7a = 0;
	this.x7c = 0;
	this.s7w = 0;
	this.q0o = 0;
	this.x2h = new j6p();
	this.h1s = new z4m();
	this.e6v = new s7c();
	this.s6p = new x6l();
  this.i8b = new q5w();
  this.e6j = true;
	this.s9w = true;
	this.d0p = true;
	this.b1y = false;
	this.k7u = q6z;
	this.g9i = z0k;
	this.f1h = w3l;
	this.b8h = u7f;
	this.v4p = u7f;
	this.l6p = e0w;
	this.w7e = true;
	this.c0b = z4p;
	this.r4h = z4p;
	this.o3z = false;
	this.v0m = [];
	this.u2o = 0;
}

y3m(k3d)
{
	this.k3d = k3d;
}

s4l(x2h)
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
	this.a1f();
}

m1m(h1s)
{
	this.h1s = h1s.o0o();
	this.e6v.h2u();
	this.s6p.h2u();
}

l3z(e6v)
{
	this.e6v = e6v.o0o();
}

b5v(s6p)
{
	this.s6p = s6p.o0o();
}

k1n(v5h)
{
  this.i8b = v5h.o0o();
}

c0g(b1y)
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
	let d8g = this.x2h.d8g;
	if (this.y6y)
	{
		return;
	}
	this.y6y = true;
	if (d8g == k5t.z4b)
	{
  	this.y8a = j2k.c0f("images/board/LightSquare");
  	this.e8c = j2k.c0f("images/board/DarkSquare");
		this.n6r = j2k.c0f("images/board/Margin");
	}
}

a1f()
{
	this.f0a();
	let d8g = this.x2h.d8g;
	if (d8g == k5t.z4b)
	{
		this.w7e = false;
		this.s9w = false;
		this.d0p = false;
		this.f1h = "#FFFF97";
		this.b8h = "#9B2E31";
		this.v4p = l3x;
	}
}

v9s()
{
	this.a1f();
	if (this.x2h.d8g == k5t.z4b)
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
	this.s2p(new k0x(j9z, m6w, q3r, m6w+t2a-1), this.b8h);
	this.s2p(new k0x(j9z, w4r-t2a+1, q3r, w4r), this.v4p);
	this.s2p(new k0x(j9z, m6w, j9z+t2a-1, w4r), this.b8h);
	this.s2p(new k0x(q3r-t2a+1, m6w, q3r, w4r), this.v4p);
}

q7h()
{
	let m2p = this.x2h.m2p;
	let e6o = this.x2h.e6o;
	if (!e6o)
	{
		return;
	}
	if (this.w7e || !this.n6r)
	{
		this.c9e(this.l6p);
	}
	else
	{
		let left = this.c0k + m2p;
		let top = this.b0l + m2p;
		let o0h = this.s7w - m2p;
		let f7k = this.b0l + m2p + e6o - 1;
		this.g8f(new k0x(left, top, o0h, f7k), this.n6r);

		left = this.c0k + m2p;
		top = this.b0l + m2p;
		o0h = this.c0k + m2p + e6o - 1;
		f7k = this.q0o - m2p;
		this.g8f(new k0x(left, top, o0h, f7k), this.n6r);

		left = this.c0k + m2p;
		top = this.q0o - m2p - e6o + 1;
		o0h = this.s7w - m2p;
		f7k = this.q0o - m2p;
		this.g8f(new k0x(left, top, o0h, f7k), this.n6r);

		left = this.s7w - m2p - e6o + 1;
		top = this.b0l + m2p;
		o0h = this.s7w - m2p;
		f7k = this.q0o - m2p;
		this.g8f(new k0x(left, top, o0h, f7k), this.n6r);
	}
}

c9e()
{
	let m2p = this.x2h.m2p;
	let e6o = this.x2h.e6o;
	if (!e6o)
	{
		return;
	}

	let left = this.c0k + m2p;
	let top = this.b0l + m2p;
	let o0h = this.s7w - m2p;
	let f7k = this.b0l + m2p + e6o - 1;
	this.s2p(new k0x(left, top, o0h, f7k), this.l6p);

	left = this.c0k + m2p;
	top = this.b0l + m2p;
	o0h = this.c0k + m2p + e6o - 1;
	f7k = this.q0o - m2p;
	this.s2p(new k0x(left, top, o0h, f7k), this.l6p);

	left = this.c0k + m2p;
	top = this.q0o - m2p - e6o + 1;
	o0h = this.s7w - m2p;
	f7k = this.q0o - m2p;
	this.s2p(new k0x(left, top, o0h, f7k), this.l6p);

	left = this.s7w - m2p - e6o + 1;
	top = this.b0l + m2p;
	o0h = this.s7w - m2p;
	f7k = this.q0o - m2p;
	this.s2p(new k0x(left, top, o0h, f7k), this.l6p);
}

d6n()
{
	if (this.x2h.b7c)
	{
  	if (!this.x2h.e6o)
  	{
	  	return;
  	}
		let x3x = "#000000";
		if (this.h1s.d9l())
		{
			x3x = "#EDD790";
		}
		else
		{
			x3x = "#000000";
		}
		let rect = this.b5w();
		let v5c = this.m3w();
		v5c.beginPath();
		v5c.fillStyle = x3x;
		let m0x = rect.f3w() * 0.40;
		v5c.arc(rect.j6q + rect.f3w()/2 - 1, rect.n8v + rect.k4s()/2 - 1,
			m0x, 0, 2 * Math.PI);
		v5c.fill();
	}
}

j4o()
{
	let j4r = l3x;
	let m2p = this.x2h.m2p;
	let e6o = this.x2h.e6o;
	let t2a = this.x2h.t2a;
	let m6w = this.b0l + m2p + e6o;
	let j9z = this.c0k + m2p + e6o;
	let q3r = this.s7w - m2p - e6o;
	let w4r = this.q0o - m2p - e6o;
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
	let f2l = v5c.createPattern(img, 'repeat');
	v5c.fillStyle = f2l;
	v5c.fillRect(rect.j6q, rect.n8v, rect.f3w(), rect.k4s());
}

x5d(rect, img)
{
	let v5c = this.m3w();
	let f2l = v5c.createPattern(img, 'no-repeat');
	v5c.fillStyle = f2l;
	v5c.fillRect(rect.j6q, rect.n8v, rect.f3w(), rect.k4s());
}

q2r(y0s)
{
	let b8f = f5y;
	let d5g = y4e;
	if (this.b1y)
	{
		b8f = y2e(r7y(y0s));
		d5g = x4d(r7y(y0s));
	}
	else
	{
		b8f = y2e(y0s);
		d5g = x4d(y0s);
	}
	if (l4s(d5g))
	{
		b8f++;
	}
	else
	{
		b8f--;
	}
	return this.v5x(d5g, b8f);
}

z4u()
{
	for (const y0s of h0i)
	{
		this.v7p(y0s);
	}
}

v7p(y0s)
{
	this.q6i(this.q2r(y0s), y0s);
}

q6i(rect, y0s)
{
	let c0f = this.y8a;
	if (this.d0p)
	{
		this.g3r(rect, this.g9i);
		return;
	}
	if (!c0f)
	{
		this.g3r(rect, this.g9i);
		return;
	}

	let u2m = c0f.width;
	let r5f = c0f.height;
	let c3d = this.x2h.o1r;
	if (u2m < c3d || r5f < c3d)
	{
		this.x5d(rect, c0f);
		return;
	}

	let y1k = Math.trunc(u2m / this.x2h.o1r);
	let p7t = Math.trunc(r5f / this.x2h.o1r);
	if (y1k == 0)
	{
		y1k = 1;
	}
	if (p7t == 0)
	{
		p7t = 1;
	}

	let k7a = Math.trunc((y0s) / y1k);
	let t8e = (y0s) % y1k;
	let y = Math.trunc(k7a / p7t);
	k7a = k7a % p7t;

  let r9j = new k0x();
	r9j.j6q = t8e * this.x2h.o1r;
	r9j.n8v = k7a * this.x2h.o1r;
	r9j.o0c = (t8e + 1) * this.x2h.o1r - 1;
	r9j.d7v = (k7a + 1) * this.x2h.o1r - 1;
	let v5c = this.m3w();
	a0m(v5c, rect, c0f, r9j);
}

j0h(y0s)
{
	let b8f = f5y;
	let d5g = y4e;
	if (this.b1y)
	{
		b8f = y2e(r7y(y0s));
		d5g = x4d(r7y(y0s));
	}
	else
	{
		b8f = y2e(y0s);
		d5g = x4d(y0s);
	}
	return this.v5x(d5g, b8f);
}

w1k()
{
	for (const y0s of h0i)
	{
		this.o3n(y0s);
	}
}

o3n(y0s)
{
	this.l2c(this.j0h(y0s), y0s);
}

l2c(rect, y0s)
{
	let c0f = this.e8c;
	if (this.s9w)
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
	let c3d = this.x2h.o1r;
	if (u2m < c3d || r5f < c3d)
	{
		this.x5d(rect, c0f);
		return;
	}

	let y1k = Math.trunc(u2m / this.x2h.o1r);
	let p7t = Math.trunc(r5f / this.x2h.o1r);
	if (y1k == 0)
	{
		y1k = 1;
	}
	if (p7t == 0)
	{
		p7t = 1;
	}

	let k7a = Math.trunc((y0s) / y1k);
	let t8e = (y0s) % y1k;
	let y = Math.trunc(k7a / p7t);
	k7a = k7a % p7t;

  let r9j = new k0x();
	r9j.j6q = t8e * this.x2h.o1r;
	r9j.n8v = k7a * this.x2h.o1r;
	r9j.o0c = (t8e + 1) * this.x2h.o1r - 1;
	r9j.d7v = (k7a + 1) * this.x2h.o1r - 1;
	let v5c = this.m3w();
	a0m(v5c, rect, c0f, r9j);
}

v5x(d5g, b8f)
{
	let m2p = this.x2h.m2p;
	let e6o = this.x2h.e6o;
	let t2a = this.x2h.t2a;
	let o1r = this.x2h.o1r;
	let rect = new k0x();
	rect.j6q = this.c0k + m2p + e6o +	t2a + (b8f) * o1r;
	rect.o0c = rect.j6q + o1r - 1;
	rect.n8v = this.b0l + m2p + e6o +	t2a + (c4f - d5g - 1) * o1r;
	rect.d7v = rect.n8v + o1r - 1;
	return rect;
}

w9z(y0s)
{
	let b8f = f5y;
	let d5g = y4e;
	if (this.b1y)
	{
		b8f = y2e(r7y(y0s));
		d5g = x4d(r7y(y0s));
	}
	else
	{
		b8f = y2e(y0s);
		d5g = x4d(y0s);
	}
	return this.v5x(d5g, b8f);
}

j6t()
{
	for (const y0s of h0i)
	{
		this.e1f(y0s);
	}
}

e1f(y0s)
{
	this.j2t(this.w9z(y0s), y0s);
}

j2t(rect, y0s)
{
	let l8u = isDarkSquare(y0s);
	let c0f = this.y8a;
	if (l8u)
	{
		c0f = this.e8c;
	}
	if (l8u)
	{
		if (this.s9w)
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
		if (this.d0p)
		{
			this.g3r(rect, this.g9i);
			return;
		}
		if (!c0f)
		{
			this.g3r(rect, this.g9i);
			return;
		}
	}

 	let u2m = c0f.width;
	let r5f = c0f.height;
	let c3d = this.x2h.o1r;
	if (u2m < c3d || r5f < c3d)
	{
		this.x5d(rect, c0f);
		return;
	}
	let y1k = Math.trunc(u2m / this.x2h.o1r);
	let p7t = Math.trunc(r5f / this.x2h.o1r);
	if (y1k == 0)
	{
		y1k = 1;
	}
	if (p7t == 0)
	{
		p7t = 1;
	}

	let k7a = Math.trunc((y0s) / y1k);
	let t8e = (y0s) % y1k;
	let y = Math.trunc(k7a / p7t);
	k7a = k7a % p7t;

  let r9j = new k0x();
	r9j.j6q = t8e * this.x2h.o1r;
	r9j.n8v = k7a * this.x2h.o1r;
	r9j.o0c = (t8e + 1) * this.x2h.o1r - 1;
	r9j.d7v = (k7a + 1) * this.x2h.o1r - 1;
	let v5c = this.m3w();
	a0m(v5c, rect, c0f, r9j);
}

g3r(rect, x3x)
{
	this.s2p(rect, x3x);
}

p9h()
{
	for (const y0s of h0i)
	{
		this.e3t(y0s);
	}
}

v2x(b8x, s4k, c8h)
{
	this.c0b = b8x;
	this.r4h = s4k;
	this.o3z = c8h;

	this.v0m.length = 0;
 	let j7l = this.w9z(b8x);
  let s6b = this.w9z(s4k);
	let h2j = this.x2h.o1r;

	let u8s = 32;
	if (h2j < 32)
	{
		u8s = h2j;
	}

  
	if (false)
	{
    
    
		let i6o = new x9h(j7l.j6q + h2j / 2, j7l.n8v + h2j / 2);
		let u4f = new x9h(s6b.j6q + h2j / 2, s6b.n8v + h2j / 2);
		let h7o = Math.abs(i6o.X - u4f.X);
		let a5m = Math.abs(i6o.Y - u4f.Y);
		let k6b = Math.atan2(u4f.X - i6o.X, i6o.Y - u4f.Y);
		let a4p = Math.sqrt(h7o*h7o + a5m*a5m) / 2;
		u4f.X = i6o.X + a4p * 2;
		u4f.Y = i6o.Y;
		let g3i = new x9h(i6o.X + a4p, i6o.Y);
		let f6u = Math.PI / u8s;
		let g7d = h2j * 0.40;
		let y7k = Math.PI;
		let q3y = (s6b.j6q > j7l.j6q && s6b.n8v < j7l.n8v) ||
			(s6b.j6q < j7l.j6q && s6b.n8v > j7l.n8v);
		for (let i = 1; i < u8s; i++)
		{
			let u4s = new k0x();
			if (q3y)
			{
				y7k -= f6u;
			}
			else
			{
				y7k += f6u;
			}
			let m7i = Math.cos(y7k);
			let q8e = Math.sin(y7k);
			let t0j = new x9h(g3i.X + a4p * m7i,
				g3i.Y - g7d * q8e);
			this.v0m.push(u4x(t0j, i6o, k6b - Math.PI / 2));
		}
	}
	else
	{
		let i6o = new x9h(j7l.j6q + h2j / 2, j7l.n8v + h2j / 2);
		let u4f = new x9h(s6b.j6q + h2j / 2, s6b.n8v + h2j / 2);
		let m9b = (u4f.X - i6o.X) / u8s;
		let g4w = (u4f.Y - i6o.Y) / u8s;
		for (let i = 1; i < u8s; i++)
		{
			this.v0m.push(new x9h(i6o.X + i * m9b, i6o.Y + i * g4w));
		}
	}
	this.v0m.push(new x9h(s6b.j6q + h2j / 2, s6b.n8v + h2j / 2));
	this.u2o = 0;
}

t8m()
{
	this.c0b = z4p;
	this.r4h = z4p;
}

l2q()
{
	this.y8o(); 

	let r4y = this.v0m[this.u2o];
	let o1r = this.x2h.o1r;
	let u4s = new k0x();
	u4s.j6q = r4y.X - o1r / 2;
	u4s.n8v = r4y.Y - o1r / 2;
	u4s.j3a(o1r);
	u4s.u2s(o1r);
 	let v5c = this.m3w();
	m2k(v5c, u4s, this.h1s.t9a(this.c0b));

	this.u2o++;
	if (this.u2o >= this.v0m.length)
	{
		let y3f = this.h1s.t9a(this.c0b);
		this.h1s.b1f(this.c0b, o8u.k2v);
		this.h1s.b1f(this.r4h, y3f);
		this.t8m();
		return true;
	}
	else
	{
		return false;
	}
}

e3t(y0s)
{
	if (y0s == this.c0b)
	{
		return;
	}
	let n1u = this.w9z(y0s);
 	let v5c = this.m3w();
	m2k(v5c, n1u, this.h1s.t9a(y0s));
}

u4m()
{
	if (!this.x2h.c5v)
	{
    return;
  }

 	let t2a = this.x2h.t2a;
	let m2p = this.x2h.m2p;
	let e6o = this.x2h.e6o;
	let o1r = this.x2h.o1r;

	let i2w = new k0x();
	i2w.j6q = this.c0k + m2p + e6o;
	i2w.n8v = this.b0l + m2p + e6o;
	i2w.j3a(c4f * o1r + 2 * t2a);
	i2w.u2s(c4f * o1r + 2 * t2a);

 	let v5c = this.m3w();
  let i5k = c0l(v5c, e6o-8);

  u4m(v5c,
    i2w,
    this.x2h,
    i5k,
    l8m.l7z,
    this.f1h,
    this.b1y,
    e6o);
}

z6g(y0s, x3x)
{
	let rect = this.w9z(y0s);
	let v5c = this.m3w();
  v5c.save();
  v5c.globalAlpha = 0.25; 
	v5c.fillStyle = x3x;
	v5c.fillRect(rect.j6q, rect.n8v, rect.f3w(), rect.k4s());
  v5c.restore();
}

f2t()
{
	if (this.e6j)
	{
		if (!this.i8b.k2v())
		{
      let x3x = "#800080"; 
			this.z6g(this.i8b.b8x, x3x);
			this.z6g(this.i8b.s4k, x3x);
		}
  }
}

z6v()
{
	for (const m2b of this.s6p.i3x)
	{
		this.n9q(m2b);
	}
}

n9q(m2b)
{
	let rect = this.w9z(m2b.y0s);
	let m6h = '';
	switch (m2b.type)
	{
		case c7m.m5l:
			m6h = g6s;
			break;
		case c7m.b6s:
			m6h = k3c;
			break;
		case c7m.w7u:
			m6h = o5b;
			break;
	}
	let h2j = this.f7a / 10;
	let v5c = this.m3w();
  /* dit is met roundrect
  i8l(rect, 5);
	v5c.lineWidth = h2j / 15;
	v5c.strokeStyle = m6h;
	y9a(v5c, rect.j6q, rect.n8v, rect.f3w(), rect.k4s(), 10);
  */
  
  v5c.save();
  v5c.globalAlpha = 0.7; 
	v5c.fillStyle = m6h;
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
	let s4k = f3z.s4k;
	let h1d = f3z.type;

	let j7l = this.w9z(b8x);
	let s6b = this.w9z(s4k);

	let z8i = j7l.j6q + j7l.f3w()/2;
	let l4d = j7l.n8v + j7l.k4s()/2;
	let z1q = new x9h(z8i, l4d);

	let h5p = s6b.j6q + s6b.f3w()/2;
	let u3j = s6b.n8v + s6b.k4s()/2;

	let d2s = (h5p-z8i)*(h5p-z8i) + (u3j-l4d)*(u3j-l4d);
	let p3t = Math.sqrt(d2s);

	let t7q = (this.h1s.i4z(b8x)) ? 0 : j7l.f3w() / 4;
	p3t -= t7q;
	let m5c = (this.h1s.i4z(s4k)) ? 0 : j7l.f3w() / 4;
	p3t -= m5c;

	let u7h = 5;
	let c6j = 5 * u7h;
	let g1b = 7 * u7h;

	let b0h = z8i + t7q;
	let s8a = l4d;

	let p8i = b0h + p3t - 1;
	let a8r = l4d;

	let d7u = p8i - g1b;
	let g5w = l4d;

	let k6b = Math.atan2((h5p - z8i), (l4d - u3j));

  
	let a6q = [];
  let n3k = 10; 
	a6q.push(new x9h(d7u, g5w));
	a6q.push(new x9h(d7u - n3k, g5w - c6j));
	a6q.push(new x9h(p8i, a8r));
	a6q.push(new x9h(d7u - n3k, g5w + c6j));
	a6q.push(new x9h(d7u, a8r));
	let c4d = [];
	for (let i = 0; i <= 4; i++)
	{
		c4d.push(u4x(a6q[i], z1q, k6b - Math.PI / 2));
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
		case c3j.a9d:
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

  
	a6q.length = 0;
	a6q.push(new x9h(b0h, s8a - u7h));
	a6q.push(new x9h(b0h, s8a + u7h));
	a6q.push(new x9h(d7u, s8a + u7h));
	a6q.push(new x9h(d7u, s8a - u7h));
	c4d.length = 0;
	for (let i = 0; i <= 3; i++)
	{
		c4d.push(u4x(a6q[i], z1q, k6b - Math.PI / 2));
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

b5w()
{
	let m2p = this.x2h.m2p;
	let e6o = this.x2h.e6o;
	let h2j = this.x2h.o1r;
	let rect = new k0x();
	rect.j6q = this.s7w - m2p - e6o + 1;
	rect.n8v = this.q0o - m2p - e6o;
	rect.d7v = this.q0o;
	rect.o0c = this.s7w - 1;
	return rect;
}

}

const l8k = 14;

const k5t =
{
	z4b : 0
};

const l6y =
{
	z4b : 0
};

const p9u =
{
	u7c : 0,
	o8d : 1,
};

const l8m =
{
	h7i: 0,
	m6e: 1,
	l7z: 2,
	n2v: 3,
	d3j: 4,
};

class j6p
{

constructor()
{
	this.d8g = k5t.z4b;
	this.o1q = 1; 
	this.m2p = 0;
	this.e6o = l8k;
	this.t2a = 2;
	this.o1r = 32;
	this.u9e = 20;
	this.c5v = true;
	this.v5r = p9u.o8d;
	this.b7c = true;
}

o0o()
{
	let o2d = new j6p();
	o2d.d8g = this.d8g;
	o2d.o1q = this.o1q;
	o2d.m2p = this.m2p;
	o2d.e6o = this.e6o;
	o2d.t2a = this.t2a;
	o2d.o1r = this.o1r;
	o2d.u9e = this.u9e;
	o2d.c5v = this.c5v;
	o2d.v5r = this.v5r;
	o2d.b7c = this.b7c;
	return o2d;
}

f7a()
{
	return this.o1r * c4f + 2 * (this.m2p + this.e6o + this.t2a);
}

q8j(rect)
{
	let w = rect.f3w();
	let h = rect.k4s();
	let b7w = 0;
	if (w < h)
	{
		b7w = w;
	}
	else
	{
		b7w = h;
	}
	if (this.e6o)
	{
		for (this.o1r = 2; this.o1r < 1000; this.o1r++)
		{
			this.e6o = (this.o1r / 100) * this.u9e;
			if (this.e6o < l8k)
			{
				this.e6o = l8k;
			}
			let h9k = 2 * (this.m2p + this.e6o + this.t2a) + c4f * this.o1r;
			if (h9k > b7w)
			{
				break;
			}
		}
		this.o1r--;
		this.e6o = (this.o1r / 100) * this.u9e;
		if (this.e6o < l8k)
		{
			this.e6o = l8k;
		}
	}
	else
	{
		for (this.o1r = 2; this.o1r < 1000; this.o1r++)
		{
			let h9k = 2 * (this.m2p + this.t2a) + c4f * this.o1r;
			if (h9k > b7w)
			{
				break;
			}
		}
		this.o1r--;
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
	this.s6p = new x6l();
	this.v8t = new q5w();
 	this.r7l = new q5w();
	this.j4i = 0;
	this.r6v = false;
	this.x9d = false;
	this.y7g = 0;
	this.z0p = 0;
	this.g9j = '';
}

}

const d3y =
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

function i8l(rect, q3z)
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

function a0m(a7e, s0h, i9k, r9j)
{
	a7e.drawImage(i9k, r9j.j6q, r9j.n8v, r9j.f3w(), r9j.k4s(),
		s0h.j6q, s0h.n8v, s0h.f3w(), s0h.k4s());
}

function y9a(v5c, x, y, width, height, m0x)
{
	v5c.beginPath();
	v5c.moveTo(x, y + m0x);
	v5c.lineTo(x, y + height - m0x);
	v5c.arcTo(x, y + height, x + m0x, y + height, m0x);
	v5c.lineTo(x + width - m0x, y + height);
	v5c.arcTo(x + width, y + height, x + width, y + height-m0x, m0x);
	v5c.lineTo(x + width, y + m0x);
	v5c.arcTo(x + width, y, x + width - m0x, y, m0x);
	v5c.lineTo(x + m0x, y);
	v5c.arcTo(x, y, x, y + m0x, m0x);
	v5c.stroke();
}

function u4x(p6s, z1q, d9s)
{
	let p = new x9h();
	p.X = (Math.cos(d9s) * (p6s.X - z1q.X)) - (Math.sin(d9s) * (p6s.Y - z1q.Y)) + z1q.X;
	p.Y = (Math.sin(d9s) * (p6s.X - z1q.X)) + (Math.cos(d9s) * (p6s.Y - z1q.Y)) + z1q.Y;
	return p;
}

function t1a(v5c, rect, u2y)
{
	let left = rect.j6q;
	let top = rect.n8v;
	let o0h = rect.o0c;
	let f7k = rect.d7v;

	v5c.fillStyle = i8h;
	v5c.fillRect(rect.j6q, rect.n8v, rect.f3w(), rect.k4s());

	if (u2y.u7c())
	{
		return;
	}

	let z9w = u2y.g3o();
	let n4n = 0;
	if (z9w > 8)
	{
		n4n = (o0h - left) / 8;
	}
	else
	{
		n4n = (o0h - left) / z9w;
	}
	let b5h = left - n4n;
	let q7b = top;
	let a0u = b5h + n4n;
	let n5e = 0;
	if (z9w > 8)
	{
		n5e = (f7k - top + 1) / 2;
	}
	else
	{
		n5e = f7k - top + 1;
	}

	let l7a = top + n5e - 1;
	let c2w = 0;
	for (let i = 0; i < 16; i++)
	{
		if (u2y.q2q(i))
		{
			b5h += n4n;
			a0u += n4n;
			if (c2w == 7 || c2w == 15 ||
				(c2w < 8 && c2w == z9w - 1))
			{
				a0u = o0h;
			}
			if (c2w == 8)
			{
				b5h = left;
				a0u = b5h + n4n;
				q7b = top + n5e;
				l7a = f7k;
			}
			let w0o = new k0x(b5h, q7b, a0u, l7a);
			v5c.fillStyle = d3y[i];
			v5c.fillRect(w0o.j6q, w0o.n8v, w0o.f3w(), w0o.k4s());
			c2w++;
		}
	}
}




class i7n
{

constructor()
{
	this.j7x = '';
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
	v3c.j7x = img.u2n;
	v3c.c0f = img;
	this.t2l.push(v3c);
}

c0f(j7x)
{
	for (const m3f of this.t2l)
	{
		if (m3f.j7x.toLowerCase() == j7x.toLowerCase())
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

constructor(left, top, o0h, f7k)
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
		this.o0c = o0h;
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

u4d(r4y)
{
	return r4y.X >= this.j6q &&
		r4y.X <= this.o0c &&
		r4y.Y >= this.n8v &&
		r4y.Y <= this.d7v;
}


}

class b2l
{

constructor(y2n)
{
	this.y2n = y2n;
	this.y6q = new z4m();
	this.m6m = new s0a();
	this.z8u = null;
	this.x2h = new j6p();
	this.c9q = true;
}

l4h()
{
	let r7z = window.devicePixelRatio;

	this.m6m.k3d.width = this.z8u.clientWidth * r7z;
	this.m6m.k3d.height = this.z8u.clientHeight * r7z;

	let g1j = 32 * r7z;
	let x5s = 32 * r7z;
	let p3w = this.m6m.k3d.width - g1j;
	let c1s = this.m6m.k3d.height - x5s;
	let c8n = c1s < p3w ? c1s : p3w;
	if (c8n < 128)
	{
		c8n = 128;
	}
	let rect = new k0x();
	rect.j6q = 0;
	rect.n8v = 0;
	rect.j3a(c8n);
	rect.u2s(c8n);
	this.x2h.e6o = c8n * 0.02;
  if (this.x2h.e6o < l8k)
  {
    this.x2h.e6o = l8k;
  }
	c8n = this.x2h.q8j(rect);
 	this.m6m.s4l(this.x2h);
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
	this.m6m.s4l(this.x2h);
	this.m6m.y8o();
}

e7g()
{
	this.m6m.s4l(this.x2h);
	this.m6m.y8o();
}

c1i(w3s)
{
	this.y6q = w3s.t1j.o0o();
	this.m6m.m1m(this.y6q);
	this.m6m.l3z(w3s.e6v);
	this.m6m.b5v(w3s.s6p);
  
 	this.m6m.k1n(w3s.r7l);
	this.m6m.y8o();

	if (this.c9q)
	{
		s5h('playBackward' + this.y2n, w3s.r6v);
		s5h('goToBegin'+ this.y2n, w3s.r6v);
		s5h('playForward' + this.y2n, w3s.x9d);
		s5h('goToEnd' + this.y2n, w3s.x9d);
		s5h('autoPlay' + this.y2n, w3s.x9d);
	}
	else
	{
		s5h('goToBegin' + this.y2n, w3s.r6v);
		s5h('goToEnd' + this.y2n, w3s.x9d);
	}
}

m1m(h1s)
{
	let w3s = new e1x();
	w3s.t1j = h1s.o0o();
	this.m1m(w3s);
}

s4l(x2h)
{
  this.x2h = x2h.o0o();
}

}

const h2g =
{
	x7f       : 0,
	g6w        : 1,
};

class w3p
{

constructor(y2n)
{
	this.y2n = y2n;
 	this.l4n = new e5q();
 	this.m7s = new u9p(y2n);
  this.m7s.y1r = false;
  this.m7s.j5y = true;
  this.m7s.f8o = true;
  this.m7s.r5n = false;
  this.l5h = null;
  this.g0w = new g0e();
  this.a1v = new e5o();
 	this.b9l = new n1y();
	this.h3c = new z4m();
	this.p2y = new z4m();
	this.t4y = 0;
	this.l2o = [];
	this.k2o = false;
 	this.j3r = false;
 	this.i2m = false;
 	this.g0r = false;
  this.n7n = h2g.x7f;
  this.p8w = document.getElementById("threat"+this.y2n);
 	this.p8w.onclick = this.w1d.bind(this);
  this.h8a();
  this.p8l = document.getElementById("engineSettings"+this.y2n);
}

z4y(q4c)
{
  this.l5h = new j0c();
  this.l5h.g5y = (event) => {
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
	this.l4n.m1m(this.b9l.h1s,
    this.b9l.j8h);
	this.w2k();
 	this.w4g();
  this.h8a();
}

m1m(x1z, o7x, g7g, e7m)
{
	this.p2y = x1z.o0o();
	this.t4y = o7x;
	this.l2o = g7g.slice(); 
	this.k2o = e7m;
	this.w4g();
}

w4g()
{
	if (!this.l5h) return;
	if (this.j3r) return;

	if (this.i2m)
	{
		let g7g = new e5q();
		g7g.m1m(this.p2y, this.t4y);
		let y5m = g7g.y5m();
		g7g.t3s(y5m, this.l2o);
		let h8h = g7g.s2i();
		let b8r = g7g.j4i(g7g.q7d());
		if (h8h.x0s())
		{
			b8r++;
		}
		let d7m = h8h;
		d7m.o7l();
		this.a1v = new e5o();
    this.a1v.g7g.m1m(d7m, b8r);
		this.h3c = d7m;
  }
  else
  {
 		this.a1v.g7g.m1m(this.p2y, this.t4y);
		let y5m = this.a1v.g7g.y5m();
		this.a1v.g7g.t3s(y5m, this.l2o);
		this.h3c = this.a1v.g7g.s2i();
  }
  if (o4l === 10) 
  {
    this.a1v.o8o = s5b;
  }
  else
  {
    this.a1v.o8o = x3e(o4l);
  }

  this.l5h.q6p();
	this.g0r = false;
  let g7g = a0g(this.h3c);
  if (g7g.length == 0)
  {
  	this.l5h.s0o(this.a1v);
		return;
  }
  else
  {
  	this.l5h.s0o(this.a1v);
		return;
  }
}

v8w()
{
	this.b9l = this.l5h.p8a();
  /*
	showScore();
	showDepth();
	showNodes();
	showCM();
  */
	this.l4n.m1m(this.b9l.h1s,
    this.b9l.j8h);
	this.w2k();
}

p0b()
{
	this.b9l = this.l5h.p8a();
	
}


i4g()
{
	this.b9l = this.l5h.p8a();
  
	
	
	
  
	this.w2k();
}

w2k()
{
	let x0u = this.b9l.x8y.g7g.o0o();
  x0u.m1m(this.b9l.h1s, this.b9l.j8h);

  if (this.b9l.e0l)
  {
    for (let x5b of this.b9l.w5z)
    {
      let g7g = x5b.g7g.n7v();
      let i7j = x0u.y5m();
      let j8h = 0;
      for (let v5h of g7g)
      {
        if (j8h == 0)
        {
					let w1q = x5b.w4y() +
						"/" + x5b.t7s;
					v5h.z1f(w1q);
        }
        x0u.v9t(i7j, v5h);
        j8h++;
      }
    }
  }
  else
  {
    if (this.b9l.w5z.length !== 0)
    {
      let x5b = this.b9l.w5z[this.b9l.w5z.length - 1];
      let g7g = x5b.g7g.n7v();
      let i7j = x0u.y5m();
      let j8h = 0;
      for (let v5h of g7g)
      {
				if (j8h == 0)
				{
					let w1q = x5b.w4y() +
						"/" + x5b.t7s;
					v5h.z1f(w1q);
				}
        x0u.v9t(i7j, v5h);
        j8h++;
      }
    }
  }
  this.l4n = x0u.o0o();
  this.m7s.e0l = this.b9l.e0l;
  this.m7s.k2y(this.l4n, 0);
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

o4z()
{
	if (this.l5h)
	{
    this.l5h.g5y = null;
    this.l5h.h1z();
		this.l5h = null;
		this.b9l = new n1y();
  	this.l4n.m1m(this.b9l.h1s,
      this.b9l.j8h);
  	this.w2k();
    this.i2m = false;
    this.h8a();
  }
}

h9g()
{
	return (this.l5h != null);
}

g7q()
{
  return (this.engineMode === h2g.g6w);
}

w1d()
{
	if (this.l5h && !this.g7q())
	{
		this.i2m = !this.i2m;
		this.h8a();
		this.w4g();
	}
}

h8a()
{
	if (this.l5h)
	{
    this.p8w.disabled = false;
    this.p8w.classList.remove('threat-inactive');
		if (this.i2m)
		{
      this.p8w.classList.remove('threat-off');
      this.p8w.classList.add('threat-on');
		}
		else
		{
      this.p8w.classList.remove('threat-on');
      this.p8w.classList.add('threat-off');
		}
	}
	else
	{
    this.p8w.disabled = true;
    this.p8w.classList.add('threat-inactive');
    this.p8w.classList.remove('threat-on');
    this.p8w.classList.add('threat-off');
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

l2r(p3r)
{
	this.p3r = p3r.o0o();
	this.j0x();
}

j0x()
{
	let j4d = this.p3r.o5v.w4z.m5g();
	let r3s = this.p3r.u6y.w4z.m5g();

	let h7h = '';
	if (j4d.length && this.p3r.o5v.q8l)
	{
		h7h = this.p3r.o5v.q8l.toString();
	}
	let a2j = '';
	if (j4d.length && this.p3r.o5v.q8c.length)
	{
		a2j = this.p3r.o5v.q8c.toString();
	}

	let n6a = '';
	if (r3s.length && this.p3r.u6y.q8l)
	{
		n6a = this.p3r.u6y.q8l.toString();
	}
	let x9n = '';
	if (r3s.length && this.p3r.u6y.q8c.length)
	{
		x9n = this.p3r.u6y.q8c.toString();
	}

	let d4r = this.p3r.o5v.w4z.f1i(1);
	let n0j = this.p3r.u6y.w4z.f1i(1);

	let l6h = '';
	let z8a = '';
	if (!this.p3r.o5v.x9v.k2v() &&
		!this.p3r.u6y.x9v.k2v())
	{
		l6h = this.p3r.o5v.x9v.v2k();
		z8a = this.p3r.u6y.x9v.v2k();
	}

	let n4t = v1x(this.p3r.s5a);
	let q7o = this.p3r.q7o.q8c;
	if (!this.p3r.q7o.w3q.k2v())
	{
		q7o += " ";
		q7o += this.p3r.q7o.w3q.b6v.toString();
	}
	let k1w = '';
	if (!this.p3r.u9c.k2v())
	{
		k1w = this.p3r.u9c.toString("dd-mm-yyyy");
	}
	let p0d = '';
	if (!this.p3r.p0d.k2v())
	{
		p0d = '</br>' + '[' + this.p3r.p0d.j7x + ']';
	}

	let t9d = document.getElementById("nota-container"+this.y2n);
	let t1z = t9d.clientHeight;
	let e1k = 200;

  let index = this.y2n;
  let s9u = this.p3r.q7o.s9u;

	let b8p = true;
	if (this.k3x.clientWidth >= 374 && t1z >= e1k)
	{
    let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable scroll\">";
    s +=      "<tr>";
    s +=        "<td class=\"playerPortrait\" colspan=\"3\" rowspan=\"2\">";
    
    s += 				"</td>";
		s +=        "<td class=\"playerWhite\" colspan=\"8\">";
    s +=          "<span class=\"player\">" + j4d + "</span>";
    s += 					"<span class=\"rating\">" + h7h + "</span>";
    s +=          "<br>";
		s += 				  "<span class=\"team\">" + l6h + "</span>";
		s +=        "</td>";
    s += 		  	"<td class=\"result\" colspan=\"2\">";
    s +=          "<span>" + n4t + "</span>";
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
		s +=          "<span>" + a2j + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"tournamentData\" colspan=\"12\">";
    s +=          "<span class=\"tournamentTitle\">" + q7o + "</span>";
    s +=          "<br>";
    s +=          "<span class=\"tournamentPlace\">" + s9u + "</span>";
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

		
		
		let v2y = Math.trunc(this.k3x.clientWidth / 10);
		if (v2y < 24) v2y = 24;
    
		
		
		
		
		
		
	}
	else if (this.k3x.clientWidth >= 300 && t1z >= e1k)
	{
		
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "<tr>";
    s +=        "<td class=\"playerWhite\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + d4r + "</span>";
    s +=          "<span class=\"rating\">" + h7h + "</span>";
    s +=          "<br>";
		s += 				  "<span class=\"team\">" + l6h + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"result\" colspan=\"2\">";
    s +=          "<span>" + n4t + "</span>";
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
    s +=          "<span>" + a2j + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"tournamentData\" colspan=\"14\">";
    s +=          "<span class=\"tournamentTitle\">" + q7o + "</span>";
    s +=          "<span class=\"tournamentPlace\">" + "</br>" + s9u + "</span>";
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
    s +=          "<span class=\"player\">" + d4r + "</span>";
    s +=          "<span class=\"rating\">" + h7h + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"result\" colspan=\"2\">";
    s +=          "<span>" + n4t + "</span>";
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
    s +=          "<span class=\"player\">" + d4r + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"result\" width=\"10%\">";
    s +=          "<span>" + n4t + "</span>";
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
    if (this.p3r.o5v.v0e != y2m.u7c)
    {
  		let a9q = document.getElementById("whitePlayerNation"+this.y2n);
	  	a9q.src = "images/flags/" + m6c.toString() +"/" + a0b(this.p3r.o5v.v0e) + ".png";
		  a9q.height = m6c;
  		a9q.width = m6c;
    }
    if (this.p3r.u6y.v0e != y2m.u7c)
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
	this.k7h = new l4v(y2n);
	this.k7h.m7s.l3w = this; 
	this.m7p = new r7g();
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
	this.k7h.m7s.e7g();
}

h1q(w2r, j5a, z2k, x1i)
{
	this.h2p(x1i, z2k);
}

h2p(x1i, z2k)
{
	this.p3r = x1i.g0g.o0o();
	this.l2r();
	this.k7h.m7s.k2y(x1i.g7g, z2k);
}

l2r()
{
	this.k7h.t2u.l2r(this.p3r);
}

j7i(w3s)
{
	this.d5n.c1i(w3s);
  this.r5b();
}

z2z()
{
	if (this.m7p.x8e())
	{
		this.m7p.q6q();
    this.z7d();
	}
	else
	{
		if (!this.k7h.m7s.e2m())
		{
      
			this.m7p.l3w = this; 
			this.m7p.e3i();
			this.k7h.m7s.d2t();
		}
	}
}

a3y(q4c)
{
	this.l9f.z4y(q4c);
}

r6e()
{
	this.l9f.o4z();
}

x8q()
{
	return this.l9f.h9g();
}

r5b()
{
  if (!this.m7p.x8e())
  {
    this.z7d();
  }
}

z7d()
{
	this.l9f.m1m(
		this.k7h.m7s.x1z(),
		this.k7h.m7s.o7x(),
		this.k7h.m7s.b6n(),
		this.k7h.m7s.e7m());
}

}

const t9u =
{
	u7w : 0,
	v2w : 1,
	u6l : 2,
	s6h : 3,
	z7x : 4,
 	n5a : 5,
	s5a : 6,
	g7g : 7,
	b6v : 8,
	event : 9,
	e9m : 10
};

const j5w =
{
	u7c : 0,
	r6n : 1,
	j1c : 2
};

let n9f = 0;
let t5j = 0;
let i8u = 0;
let q4k = 0;
let i4b = 0;
let d0h = 0;
let x0a = 0;
let o9z = 0;

let j1c = false;

function a7h(f, s)
{
	let z2m = f.g0g.o5v.w4z.j7x();
	let x6d = s.g0g.o5v.w4z.j7x();
	if (z2m < x6d)
	{
		return j1c ? -1 : 1;
	}
	if (z2m > x6d)
	{
		return j1c ? 1 : -1;
	}
	z2m = f.g0g.u6y.w4z.j7x();
	x6d = s.g0g.u6y.w4z.j7x();
	if (z2m < x6d)
	{
		return -1;
	}
	if (z2m > x6d)
	{
		return 1;
	}
	return 0;
}

function w8u(f, s)
{
	let z2m = f.g0g.u6y.w4z.j7x();
	let x6d = s.g0g.u6y.w4z.j7x();
	if (z2m < x6d)
	{
		return j1c ? -1 : 1;
	}
	if (z2m > x6d)
	{
		return j1c ? 1 : -1;
	}
	z2m = f.g0g.o5v.w4z.j7x();
	x6d = s.g0g.o5v.w4z.j7x();
	if (z2m < x6d)
	{
		return -1;
	}
	if (z2m > x6d)
	{
		return 1;
	}
	return 0;
}

function y1i(f, s)
{
	let y0l = f.g0g.o5v.q8l - s.g0g.o5v.q8l;
	if (j1c)
	{
		y0l = -y0l;
	}
	if (y0l < 0) return -1;
	if (y0l > 0) return 1;
	y0l = f.g0g.u6y.q8l - s.g0g.u6y.q8l;
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
	let y0l = f.g0g.u6y.q8l - s.g0g.u6y.q8l;
	if (j1c)
	{
		y0l = -y0l;
	}
	if (y0l < 0) return -1;
	if (y0l > 0) return 1;
	y0l = f.g0g.o5v.q8l - s.g0g.o5v.q8l;
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
	let y0l = f.g0g.o5v.v0e - s.g0g.o5v.v0e;
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
	y0l = f.g0g.o5v.v0e - s.g0g.o5v.v0e;
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
	let y0l = f.g0g.s5a - s.g0g.s5a;
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
	let a0h = f.g0g.q7o.q8c;
	let t4o = s.g0g.q7o.q8c;
	if (a0h < t4o)
	{
		return j1c ? -1 : 1;
	}
	if (a0h > t4o)
	{
		return j1c ? 1 : -1;
	}
	let y0l = f.g0g.q7o.w3q.u9c() - s.g0g.q7o.w3q.u9c();
	if (j1c)
	{
		y0l = -y0l;
	}
	if (y0l < 0) return -1;
	if (y0l > 0) return 1;
	y0l = f.g0g.e9m - s.g0g.e9m;
	if (y0l < 0) return -1;
	if (y0l > 0) return 1;
	y0l = f.g0g.o9y - s.g0g.o9y;
	if (y0l < 0) return -1;
	if (y0l > 0) return 1;
	return a7h(f, s);
}

function k6i(f, s)
{
	let y0l = s.g0g.e9m - f.g0g.e9m;
	if (j1c)
	{
		y0l = -y0l;
	}
	if (y0l < 0) return -1;
	if (y0l > 0) return 1;
	y0l = s.g0g.o9y - f.g0g.o9y;
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
	let y0l = s.r5k - f.r5k;
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
	this.r4r = null;
	this.p5a = null;
	this.j5b = null;
	this.y4a = [];
	this.r5v = [];
	this.k5l = -1;
	this.y0m = j5w.u7c;
	this.l4z = 0;
  this.z3x = null;
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
	s += "</tr>";
	this.j5b.innerHTML = s;
	this.y4a = this.j5b.getElementsByTagName("TH");
	let y2n = this.y2n;

 	this.y4a[t9u.u7w].onclick = this.f6o.bind(this);
	this.y4a[t9u.v2w].onclick = this.q0u.bind(this);
  this.y4a[t9u.u6l].onclick = this.s4t.bind(this);
	this.y4a[t9u.s6h].onclick = this.f6o.bind(this);
	this.y4a[t9u.z7x].onclick = this.b3k.bind(this);
  this.y4a[t9u.n5a].onclick = this.p2p.bind(this);
	this.y4a[t9u.s5a].onclick = this.d7h.bind(this);
	this.y4a[t9u.g7g].onclick = this.t4r.bind(this);
	this.y4a[t9u.b6v].onclick = this.r6f.bind(this);
	this.y4a[t9u.event].onclick = this.d9i.bind(this);
	this.y4a[t9u.e9m].onclick = this.f7y.bind(this);
}

s3z(e5b)
{
	this.e5b = e5b;
	this.l4h();
}

i4c()
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

y3x()
{
	this.c1e("grid-player", n9f);
	this.c1e("grid-rating", t5j);
 	this.c1e("grid-flag", o9z);
	this.c1e("grid-result", i8u);
	this.c1e("grid-moves", q4k);
	this.c1e("grid-year", i4b);
	this.c1e("grid-event", d0h);
	this.c1e("grid-round", x0a);

}

q7a(r3m)
{
	let q5a = this.r4r.getElementsByClassName(r3m);
	for (let i = 0; i < q5a.length; i++) {
		q5a[i].style.display = "none";
	}
}

c9p(r3m)
{
	let q5a = this.r4r.getElementsByClassName(r3m);
	for (let i = 0; i < q5a.length; i++) {
		q5a[i].style.display = "table-cell";
	}
}

c1e(r3m, width)
{
	let q5a = this.r4r.getElementsByClassName(r3m);
	for (let i = 0; i < q5a.length; i++) {
		q5a[i].style.width = (width) + "px";
	}
}

l4h()
{
	this.l4z = this.r4r.clientWidth;
	this.l4z -= 17;
	if (this.l4z < 100)
	{
		this.l4z = 100;
	}
	n9f = 200;
	t5j = 52;
	i8u = 34;
	q4k = 50;
	i4b = 52;
	d0h = 200;
	x0a = 50;
  o9z = 30;

 
	let i0i = document.getElementsByClassName("tdreplay")[0];
	if (i0i.clientWidth <= y5a)
	{
		let r0f = 0.7;
		n9f *= r0f;
		t5j *= r0f;
		i8u *= r0f;
		q4k *= r0f;
		i4b *= r0f;
		d0h *= r0f;
		x0a *= r0f;
	}
	this.m8o();
}

p4n()
{
	this.i4c();
	this.y3x();

  let x6s = 2.8;
  let d8s = 2.8;
  let f2f = 17;
	if (this.l4z <= 400)
	{
		this.c9p("grid-player");
		this.c9p("grid-result");
    this.c9p("grid-year");
		this.c9p("grid-event");
    let k2x = 5 * (x6s + d8s);
		let x1l = i8u + i4b;
		let s4a = Math.trunc((this.l4z - x1l - k2x - f2f) / 3);
		this.c1e("grid-player", s4a);
		this.c1e("grid-event", s4a);
	}
	else if (this.l4z <= 580)
	{
		this.c9p("grid-player");
		this.c9p("grid-rating");
		this.c9p("grid-result");
		this.c9p("grid-year");
		this.c9p("grid-event");
    let k2x = 7 * (x6s + d8s);
		let x1l = 2 * t5j + i8u + i4b;
		let s4a = Math.trunc((this.l4z - x1l - k2x - f2f) / 3);
		this.c1e("grid-player", s4a);
		this.c1e("grid-event", s4a);
	}
	else
	{
		this.c9p("grid-player");
		this.c9p("grid-rating");
    this.c9p("grid-flag");
		this.c9p("grid-result");
		this.c9p("grid-moves");
		this.c9p("grid-year");
		this.c9p("grid-event");
		this.c9p("grid-round");
    let k2x = 11 * (x6s + d8s);
		let x1l = 2 * t5j + 2 * o9z + i8u + q4k + i4b + x0a;
		let s4a = Math.trunc((this.l4z - x1l - k2x - f2f) / 3);
		this.c1e("grid-player", s4a);
		this.c1e("grid-event", s4a);
	}
}

m8o()
{
	let m6c = 16;
	let s = '';
  s += "<tbody id=\"gameList" + this.y2n + "\">"; 
	for (const x1i of this.e5b)
	{
		s += "<tr class=\"grid-row\">";
		s += "<td class=\"grid-cell grid-player\">";
		s += x1i.g0g.o5v.w4z.k9g();
		s += "</td>";
		s += "<td class=\"grid-cell grid-rating\">";
		if (x1i.g0g.o5v.q8l)
		{
			s += x1i.g0g.o5v.q8l;
		}
		s += "</td>";
   	s += "<td class=\"grid-cell grid-flag\">";
		if (x1i.g0g.o5v.v0e != y2m.u7c)
		{
      let t1c = "images/flags/" + m6c.toString() + "/" + a0b(x1i.g0g.o5v.v0e) + ".png";
  		s += "<span>";
      s += "<img src=\"";
      s += t1c;
      s += "\" height=\"16\"";
      s += ">";
   		s += "</span>";
		}
		s += "</td>";
		s += "<td class=\"grid-cell grid-player\">";
		s += x1i.g0g.u6y.w4z.k9g();
		s += "</td>";
		s += "<td class=\"grid-cell grid-rating\">";
		if (x1i.g0g.u6y.q8l)
		{
			s += x1i.g0g.u6y.q8l;
		}
		s += "</td>";
		s += "<td class=\"grid-cell grid-flag\">";
		if (x1i.g0g.u6y.v0e != y2m.u7c)
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
		s += v1x(x1i.g0g.s5a);
		s += "</td>";
		s += "<td class=\"grid-cell grid-moves\">";
		s += x1i.r5k;
		s += "</td>";
		s += "<td class=\"grid-cell grid-year\">";
		s += x1i.g0g.u9c.toString("yyyy");
		s += "</td>";
		s += "<td class=\"grid-cell grid-event\">";
		s += x1i.g0g.q7o.q8c;
		s += "</td>";
		s += "<td class=\"grid-cell grid-round\">";
		s += x1i.g0g.a8d();
		s += "</td>";
		s += "</tr>";
	}
  s += "</tbody>";
	this.p5a.innerHTML = s;

  let l5v = document.getElementById('gameList' + this.y2n);
  l5v.addEventListener('click', this.h1t.bind(this));

	this.p4n();
}

u6i(e4p)
{
	if (e4p != this.k5l)
	{
		this.k5l = e4p;
		this.y0m = j5w.r6n;
	}
	else
	{
		if (this.y0m == j5w.u7c)
		{
			this.y0m = j5w.r6n;
		}
		else if (this.y0m == j5w.r6n)
		{
			this.y0m = j5w.j1c;
		}
		else if (this.y0m == j5w.j1c)
		{
			this.y0m = j5w.r6n;
		}
	}
	j1c = (this.y0m == j5w.j1c);

	for (const w5k of this.y4a)
	{
		let s = w5k.c4m;
		let u6z = s.replace(" grid-header-sort grid-header-sort-desc", "");
		let a4f = u6z.replace(" grid-header-sort grid-header-sort-asc", "");
		w5k.c4m = a4f;
	}
	let g5p = this.y4a[this.k5l];
	if (this.y0m == j5w.j1c)
	{
		g5p.c4m = g5p.c4m + " grid-header-sort grid-header-sort-desc";
	}
	else
	{
		g5p.c4m = g5p.c4m + " grid-header-sort grid-header-sort-asc";
	}
}

f6o(event)
{
	this.u6i(t9u.u7w);
	this.e5b.sort(a7h);
	this.m8o();
}

q0u(event)
{
	this.u6i(t9u.v2w);
	this.e5b.sort(y1i);
	this.m8o();
}

s4t(event)
{
	this.u6i(t9u.u6l);
	this.e5b.sort(f2g);
	this.m8o();
}

p6n(event)
{
	this.u6i(t9u.s6h);
	this.e5b.sort(w8u);
	this.m8o();
}

b3k(event)
{
	this.u6i(t9u.z7x);
	this.e5b.sort(v8u);
	this.m8o();
}

p2p(event)
{
	this.u6i(t9u.n5a);
	this.e5b.sort(k9v);
	this.m8o();
}

d7h(event)
{
	this.u6i(t9u.s5a);
	this.e5b.sort(v0d);
	this.m8o();
}

r6f(event)
{
	this.u6i(t9u.b6v);
	this.e5b.sort(o5y);
	this.m8o();
}

d9i(event)
{
	this.u6i(t9u.event);
	this.e5b.sort(s7x);
	this.m8o();
}

f7y(event)
{
	this.u6i(t9u.e9m);
	this.e5b.sort(k6i);
	this.m8o();
}

t4r(event)
{
	this.u6i(t9u.g7g);
	this.e5b.sort(p5j);
	this.m8o();
}

h1t(event)
{
  const clickedRow = event.target.closest('tr');
  if (!clickedRow) return;
  const index = clickedRow.rowIndex;
  if (this.z3x)
  {
    this.z3x(this, index);
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
	this.h1s = new z4m();
	this.z1j = new z4m();
	this.c8h = false;
	this.q3k = 0;
	this.h3t = 0;
	this.w1j = [];
}

}

var tooltip = null;

class u9p
{

constructor(y2n)
{
	this.y2n = y2n;
	this.y2s = new e5q();
	this.l3w = null;
	this.t1o = new s3i();
	this.h7w = null;
	this.q7w = [];
	this.c9y = [];
  this.k0m = [];
  this.u6v = [];
	this.u9t = -1;
	this.x2h = new j6p();
  this.f3u = null;
	this.f0i = true;
	this.c0j = false;
	this.x0d = [];
	this.q7n = 0;
  this.y1r = true;
  this.j5y = false;
	this.f8o = false;
	this.r5n = true;
  this.e0l = false;
}

k2y(k4i, z2k)
{
	this.y2s = k4i.o0o();
  this.y2s.i3m();
	this.f3u = this.y2s.v5g(z2k);
	this.h1q();
}

n9r(f8a)
{
  this.b3a(this.k0m[f8a]);
}

h1q()
{
	this.d2d();
	this.d2t();
  this.k6q(this.y2s.a9r(this.f3u));
}

d2d()
{
	let r5r = new c9o();
  r5r.c6a(this.y1r);
	r5r.q0e(this.e0l);
  /*
	r5r.setOneLine(this.e0l);
  */
	r5r.n4z(this.f8o);
	r5r.q8i(this.r5n);
	r5r.o3o(this.y2s);

  this.h7w.innerHTML = r5r.j0v.t0e;
  this.q7w = this.h7w.getElementsByClassName("tdmove");
  this.c9y = this.h7w.getElementsByClassName("tdcomment");

	this.m3d("tdmove");
	this.m3d("tdcomment");
	this.m3d("tddia");
	this.m3d("tdmedal");
  this.m3d("tdcolors");

  this.c6n("tdmove");

	this.n8h();
	this.t1a();
}

m3d(k8u)
{
	let y2n = this.y2n;
	let l8h = this.h7w.getElementsByClassName(k8u);
	for (const z0r of l8h)
	{
    let z2k = z0r.getAttribute('movenr');
    z0r.onclick = this.g3w.bind(this, z2k);
	}
}

c6n(k8u)
{
	let y2n = this.y2n;
	let l8h = this.h7w.getElementsByClassName(k8u);
	for (const z0r of l8h)
	{
    let z2k = z0r.getAttribute('movenr');
    z0r.onmouseover = this.u0y.bind(this, z2k);
    z0r.onmouseleave = this.m9n.bind(this, z2k);
	}
}

e7g()
{
	this.n8h();
}

n8h()
{
	let h5w = this.h7w.getElementsByClassName("tddia");
	for (const d6h of h5w)
	{
		let m6m = new s0a();
		m6m.k3d = d6h.getElementsByTagName("canvas")[0];
		let c8n = this.x2h.f7a();
		m6m.k3d.width = c8n;
		m6m.k3d.height = c8n;
		m6m.s4l(this.x2h);
		let i7j = this.y2s.v5g(d6h.getAttribute('movenr'));
    m6m.m1m(this.y2s.h1s(i7j));
    if (i7j.v5h)
    {
  		m6m.l3z(i7j.v5h.e6v());
	  	m6m.b5v(i7j.v5h.s6p());
    }
    else
    {
   		m6m.l3z(this.y2s.c2d());
	  	m6m.b5v(this.y2s.m1r());
    }
		m6m.y8o();
	}
}

t1a()
{
	let o4s = this.h7w.getElementsByClassName("tdmedal");
	for (const g3s of o4s)
	{
		let k3d = g3s.getElementsByTagName("canvas")[0];
		k3d.width = 40;
		k3d.height = 16;
		let v5c = k3d.getContext('2d');
		let rect = new k0x();
		rect.j3a(40);
		rect.u2s(16);
		let i7j = this.y2s.v5g(g3s.getAttribute('movenr'));
    if (i7j.v5h)
    {
  		t1a(v5c, rect, i7j.v5h.u2y());
    }
    else
    {
  		t1a(v5c, rect, this.y2s.n4b());
    }
	}
}

d2t()
{
	let w3s = new e1x();
	w3s.x1z = this.y2s.x1z();
  w3s.t1j = this.y2s.h1s(this.f3u);
  if (this.j6e())
  {
    w3s.e6v = this.y2s.c2d();
	  w3s.s6p = this.y2s.m1r();
  }
  else
  {
  	w3s.e6v = this.f3u.v5h.e6v();
	  w3s.s6p = this.f3u.v5h.s6p();
  }
  
	if (this.e2m())
	{
		w3s.v8t = new q5w();
	}
	else
	{
    let j9d = this.f3u.o0o();
		this.y2s.r9f(j9d);
		w3s.v8t = j9d.v5h.z2g().o0o();
	}
  
 	if (!this.j6e())
	{
		w3s.r7l = this.f3u.v5h.z2g();
	}
	w3s.j4i = this.j4i();
	w3s.r6v = this.r6v();
	w3s.x9d = this.x9d();
	w3s.y7g = 0; 
  w3s.z0p = this.y2s.z0p(this.f3u);
	if (this.l3w)
	{
		this.l3w.j7i(w3s);
	}
}

a0x(x6r)
{
	this.f3u = this.y2s.v5g(x6r);
	this.d2t();
}

z5m(r8s)
{
	switch (r8s)
	{
		case c2u:
		case x5i:
		case b8t:
			this.h4o();
			break;
		case r3o:
		case w4t:
		case g6j:
			this.x1d();
			break;
		case v9v:
		case e9u:
		case g5x:
			this.e5p();
			break;
		case e0y:
		case c1t:
		case q7j:
			this.j6s();
			break;
		case x2n:
			break;
		case g1r:
			break;
	}
}

l2z()
{
  if (this.f3u.f2x)
  {
    this.k6q(this.f3u.f2x.f7z);
  }
  else
  {
    this.k6q(0);
  }
}

f2o()
{
	this.l2z();
	this.d2t();
}

r6v()
{
	return !this.j6e();
}

j6e()
{
	return this.y2s.j6e(this.f3u);
}

e2m()
{
	return this.y2s.e2m(this.f3u);
}

j4i()
{
	return this.y2s.j4i(this.f3u);
}

v8t(o2w)
{
	if (this.e2m())
	{
		return null;
	}
	else
	{
    let j9d = this.f3u.o0o();
		this.y2s.z0a(j9d, o2w);
		return j9d.v5h;
	}
}

x1d()
{
	if (this.r6v())
	{
		this.y2s.y9l(this.f3u);
		this.f2o();
	}
}

x9d()
{
	return !this.e2m();
}

h4o()
{
	if (this.x9d())
	{
		this.w6a(0);
	}
}

w6a(index)
{
	let c1d = this.y2s.d4m(this.f3u);
	if (index >= 0 && index < c1d)
	{
		this.y2s.z0a(this.f3u, index);
		this.f2o();
	}
}

j6s()
{
	if (this.x9d())
	{
		this.y2s.v6b(this.f3u);
		this.f2o();
	}
}

e5p()
{
	if (this.r6v())
	{
		this.f3u = this.y2s.y5m();
		this.f2o();
	}
}

x0l()
{
	if (this.f0i)
	{
		this.t0l();
	}
	else
	{
		this.b4j();
	}
}

j2x()
{
	if (this.c0j)
	{
		this.c0j = false;
		this.l3w.d5n.m6m.t8m();
		this.d2t();
	}
	else
	{
		this.d2t();
	}
}


b4j()
{
	if (this.e2m())
	{
		this.d2t();
		return;
	}
  if (chess)
  {
  	this.w6a(0);
    return;
  }

  
 	let v5h = this.v8t(0);
  if (!v5h.h3t())
 	{
  	this.w6a(0);
	  return;
 	}

  
	let d6i = false;
	if (!this.t1o.c8h)
	{
		d6i = true;
	}
	else
	{
		d6i = false;
		if (this.t1o.q3k < this.t1o.h3t)
		{
			if (this.t1o.z1j.r2t(this.t1o.h1s))
			{
				d6i = true;
			}
		}
	}
	if (d6i)
	{
		this.t1o.h1s = this.y2s.h1s(this.f3u);
		this.t1o.z1j = this.y2s.h1s(this.f3u);
		this.t1o.c8h = true;
		this.t1o.q3k = 0;
		this.t1o.w1j.length = 0;
		this.t1o.w1j.push(v5h.b8x()); 
		this.t1o.h3t = v5h.h3t();
		if (this.t1o.h3t > 1)
		{
			let e7e = f7p(this.t1o.z1j, v5h.z2g());
			for (let i = 0; i < this.t1o.h3t - 1; i++)
			{
				this.t1o.w1j.push(e7e[i]);
			}
		}
		this.t1o.w1j.push(v5h.y2r());
	}
	if (this.t1o.q3k < this.t1o.h3t)
	{
		let b7t = v5h.b7t();
		let p1d = this.t1o.w1j[this.t1o.q3k];
		let y2r = this.t1o.w1j[this.t1o.q3k + 1];
		this.t1o.z1j.b1f(p1d, o8u.k2v);
		this.t1o.z1j.b1f(y2r, b7t);
		this.t1o.h1s = this.t1o.z1j.o0o();
		this.t1o.q3k++;
		let w3s = new e1x();
		w3s.t1j = this.t1o.z1j.o0o();
		w3s.r6v = this.r6v();
		w3s.x9d = this.x9d();
		if (this.l3w)
		{
			this.l3w.j7i(w3s);
		}
	}
	else
	{
		this.t1o.c8h = false;
		this.w6a(0);
	}
}



t0l()
{
	if (this.c0j)
	{
		let t1e = this.l3w.d5n.m6m.l2q();
		if (t1e)
		{
			if (this.q7n < this.x0d.length - 1)
			{
				this.l3w.d5n.m6m.v2x(this.x0d[this.q7n],
					this.x0d[this.q7n+1], true);
				this.q7n++;
			}
			else
			{
				this.c0j = false;
				this.w6a(0);
			}
		}
		return;
	}

	if (this.e2m())
	{
		this.d2t();
		return;
	}

	this.x0d.length = 0;
	let v5h = this.v8t(0);
	let h3t = v5h.h3t();
	if (h3t == 0)
	{
		this.x0d.push(v5h.b8x()); 
		this.x0d.push(v5h.s4k());
	}
	else
	{
		this.x0d.push(v5h.b8x());
		if (h3t > 1)
		{
      let h1s = this.y2s.h1s(this.f3u);
      let e7e = f7p(h1s, v5h.z2g());
			for (let i = 0; i < h3t - 1; i++)
			{
				this.x0d.push(e7e[i]);
			}
		}
		this.x0d.push(v5h.s4k());
	}

	this.l3w.d5n.m6m.v2x(this.x0d[0],
		this.x0d[1], h3t > 0);
	this.q7n = 1;
	this.c0j = true;
}

f5x(v3n)
{
	for (const m of this.q7w)
	{
		if (m.getAttribute('movenr') == v3n)
		{
			return m;
		}
	}
	return null;
}

u9m(v3n)
{
	let h0e = [];
	for (const w2m of this.c9y)
	{
		if (w2m.getAttribute('movenr') == v3n)
		{
			h0e.push(w2m);
		}
	}
	return h0e;
}

b3a(i4k)
{
	let r7x = i4k.offsetTop;
	let z8j = i4k.scrollHeight;

	let a5l = this.h7w.offsetTop;
	let i2y = this.h7w.scrollTop;
	let q2u = this.h7w.clientHeight;
	let j7f = this.h7w.scrollHeight;
	let q0s = r7x - a5l;
	if (q0s >= i2y && q0s + z8j <= i2y + q2u - 1)
	{
		
	}
	else
	{
		
		let top = q0s - (q2u / 2);
		if (top < 0) top = 0;
		this.h7w.scrollTop = top;
	}
}

q8v(k1h, o5o)
{
	let h4t = k1h;
	while (h4t.k1u)
	{
		h4t = h4t.k1u;
	}
 	while (h4t)
	{
    if (this.y2s.i5u(h4t.f7z) == false)
    {
 	  	let i4k = this.f5x(h4t.f7z);
  	  if (i4k)
 		  {
  		  i4k.classList.add(o5o);
 	  	}
    }
    h4t = h4t.t7o;
  }
}

k6q(z2k)
{
  
 	for (const v5h of this.q7w)
	{
 		v5h.classList.remove('tdcurline');
    v5h.classList.remove('tdcurnode1');
	}
 	for (const w2m of this.c9y)
	{
 		w2m.classList.remove('tdcurline');
	}

  
	if (this.u9t >= 0)
	{
		let i4k = this.f5x(this.u9t);
		if (i4k)
		{
			i4k.classList.remove('tdcurmove');
		}
	}

  
  let e9k = true;
  let f7i = this.y2s.i7y(this.f3u);
 	for (const k1h of f7i)
	{
    if (k1h.k1u && e9k)
		{
		  this.q8v(k1h, 'tdcurnode1');
      e9k = false;
    }
    else
    {
      if (this.y2s.i5u(k1h.f7z) == false)
      {
   	  	let e2r = this.f5x(k1h.f7z);
	  	  if (e2r)
  		  {
	  		  e2r.classList.add('tdcurline');
  	  	}
      }
    }
	}

  
	let i4k = this.f5x(z2k);
	if (i4k)
	{
    i4k.classList.remove('tdcurline');
		i4k.classList.add('tdcurmove');
		this.b3a(i4k);
	}
	this.u9t = z2k;
}

e1j()
{
	let v5h = this.f5x(this.u9t);
	if (!v5h) return;
	let b1e = v5h.offsetTop;
	let x1c = null;
	let m9d = -1;
	for (const m of this.q7w)
	{
		if (m.offsetTop < b1e)
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
		if (this.q7w.length)
		{
			this.t2z(this.q7w[0].getAttribute('movenr'));
		}
	}
}

l9v()
{
	let v5h = this.f5x(this.u9t);
	if (!v5h)
	{
		this.h4o();
		return;
	}
	let b1e = v5h.offsetTop;
	for (const m of this.q7w)
	{
		if (m.offsetTop > b1e)
		{
			this.t2z(m.getAttribute('movenr'));
			return;
		}
	}
	if (this.q7w.length)
	{
		this.t2z(this.q7w[this.q7w.length - 1].getAttribute('movenr'));
	}
}

t2z(x6r)
{
  
  
  
  
  if (this.f3u.f2x)
  {
    if (this.f3u.f2x.f7z == x6r)
    {
      return;
    }
  }
  else
  {
    if (x6r == 0)
    {
      return;
    }
  }
	
  this.a0x(x6r);
  this.k6q(x6r);
	
}

a9r()
{
	return this.y2s.a9r(this.f3u);
}

s4l(x2h)
{
  this.x2h = x2h.o0o();
	this.x2h.m2p = 0;
	this.x2h.e6o = 0;
	this.x2h.o1r = 32;
  this.x2h.t2a = 2;
 	this.x2h.c5v = false;
}

x1z()
{
	return this.y2s.x1z();
}

o7x()
{
	return this.y2s.o7x();
}

b6n()
{
	return this.y2s.b6n(this.f3u);
}

e7m()
{
	return this.y2s.e7m();
}

g3w(z2k, event)
{
  this.t2z(z2k);
}

u0y(z2k, event)
{
  if (!this.j5y) return;

  if (!tooltip)
  {
    tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    document.body.appendChild(tooltip);
  }

  const z0r = event.currentTarget; 
  const rect = z0r.getBoundingClientRect();
  console.log(`k0x.j6q: ${rect.left}`);
  console.log(`k0x.n8v: ${rect.top}`);
  let m3e = rect.left;
  let l2t = rect.top + rect.height;

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
	let q8f = this.x2h.f7a();

  if (m3e + q8f > viewportWidth)
  {
    m3e = viewportWidth - q8f - 5;
  }
  if (m3e < 5)
  {
    m3e = 5;
  }
  if (l2t + q8f > viewportHeight)
  {
    l2t = viewportHeight - q8f - 5;
  }
  if (l2t < 5)
  {
    l2t = 5;
  }

  let i7j = this.y2s.v5g(z2k);
  let h1s = this.y2s.h1s(i7j);
  tooltip.innerHTML = this.q9k(h1s);

  tooltip.style.left = `${m3e}px`;
  tooltip.style.top = `${l2t}px`;
  tooltip.classList.add('visible');
}

m9n(z2k, event)
{
  if (!this.j5y) return;
  tooltip.classList.remove('visible');
}

q9k(h1s)
{
  let m6m = new s0a();
  const tempCanvas = document.createElement('canvas');
	m6m.k3d = tempCanvas;
	let c8n = this.x2h.f7a();
	m6m.k3d.width = c8n;
	m6m.k3d.height = c8n;
	m6m.s4l(this.x2h);
  m6m.m1m(h1s);
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
  this.x5k = true;
 	this.l4r = true;
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
  this.m7s = new u9p(y2n);
}

}

class r7g
{

constructor()
{
	this.v7r = false;
	this.l3w = null;
	this.u0k = null;
	this.a1t = 6;
	this.c0p = null;
	this.q2s = null;
	this.i0z = null;
	this.n8y = null;
	this.x0b = null;
	this.q8g = false;
}

e3i()
{
	this.v7r = false;
	this.o9x();
	this.c0p.classList.replace('autoPlay', 'autoStop');
	this.n8y.style.display = 'none';
	this.x0b.style.display = 'none';
	this.q2s.style.display = 'inline-block';
	this.i0z.style.display = 'inline-block';
	this.p0r();
	this.l3w.d5n.c9q = false;
}

q6q()
{
	if (this.u0k)
	{
		clearInterval(this.u0k);
		this.u0k = null;
		this.c0p.classList.replace('autoStop', 'autoPlay');
		this.n8y.style.display = 'inline-block';
		this.x0b.style.display = 'inline-block';
		this.q2s.style.display = 'none';
		this.i0z.style.display = 'none';
		this.l3w.d5n.c9q = true; 
		this.l3w.k7h.m7s.j2x();
	}
}

o9x()
{
	let y2n = this.l3w.y2n;
	this.u0k = setInterval(function(){ d7b(y2n); },
		this.l3w.k7h.m7s.f0i ? this.a1t * 2 : this.a1t * 100);
}

x8e()
{
	return this.u0k != null;
}

r6v()
{
	return !this.l3w.k7h.m7s.j6e();
}

x9d()
{
	return !this.l3w.k7h.m7s.e2m();
}

m6x()
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
		this.q6q();
	}
	else
	{
		this.l3w.k7h.m7s.x0l();
	}
	this.q8g = false;
}

e2e()
{
	if (this.u0k)
	{
		if (this.a1t < 50)
		{
			this.a1t++;
			clearInterval(this.u0k);
			this.o9x();
			this.p0r();
		}
	}
}

d1y()
{
	if (this.u0k)
	{
		if (this.a1t > 1)
		{
			this.a1t--;
			clearInterval(this.u0k);
			this.o9x();
			this.p0r();
		}
	}
}

p0r()
{
	y7q(this.q2s, this.a1t < 50);
	y7q(this.i0z, this.a1t > 1);
}

}

let v9m = null;
let q3z = 0;
let a6h = null;

class b9s
{

constructor()
{
	this.index = 0;
	this.r6w = '';
	this.i0i = null;
	this.v6u = false;
	this.l3w = null;
	this.z9p = null;
  this.e5b = [];
	this.z1d = 0;
  this.z4x = 0;

	this.y1n = null;
	this.e2l = null;
	this.left = null;
	this.u9l = null;
	this.p8d = null;
	this.s2l = null;
	this.y7m = null;
	this.z8u = null;
	this.m4z = null;
	this.o0n = null;
	this.p1n = null;
 	this.p7l = null;
 	this.g0c = null;
	this.e3o = null;
	this.n8y = null;
	this.q2s = null;
	this.c0p = null;
	this.x0b = null;
	this.i0z = null;
	this.r3g = null;
 	this.h5j = null;
  this.k8g = null;
	this.c4e = null;
  this.p8l = null;
	this.v7j = null;
	this.w5e = null;
	this.r4r = null;
	this.m1l = null;
	this.l1i = null;
	this.t7l = null;
  this.v4u = null;
  this.r5q = null;
	this.f5c = null;
	this.o0h = null;
	this.a4b = null;
	this.k6a = null;
	this.p9b = null;

	this.g9l = null;
	this.o0q = null;
	this.t3v = null;
	this.h7d = null;

  this.z9z = null;
	this.d0n = null;
	this.a1e = null;
  this.f6t = null;

  this.z0h = null;

  
  this.settingsDialog = null;
  this.w7p = null;
  this.r0q = null;
  this.l3y = null;
  this.k1s = null;
  this.e2q = null;

  
}

l0g(index, i0i, r6w)
{
	this.index = index;
	this.i0i = i0i;
	this.r6w = r6w;
	i0i.innerHTML = '';
	i0i.u2n = "replay";

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

  i0i.innerHTML = s;

	this.y1n = document.getElementById("rootParent"+index);
	this.e2l = document.getElementById("root"+index);
	this.left = document.getElementById("left"+index);
	this.u9l = document.getElementById("leftContainer"+index);
	this.p8d = document.getElementById("leftNest"+index);
	this.s2l = document.getElementById("leftNorth"+index);
	this.y7m = document.getElementById("boardHolder"+index);
	this.z8u = document.getElementById("boardPanel"+index);
	this.m4z = document.getElementById("boardCanvas"+index);
	this.o0n = document.getElementById("belowBoard"+index);
	this.p1n = document.getElementById("replayPanel"+index);
 	this.p7l = document.getElementById("goToPrevious"+index);
 	this.g0c = document.getElementById("goToNext"+index);
	this.e3o = document.getElementById("goToBegin"+index);
	this.n8y = document.getElementById("playBackward"+index);
	this.q2s = document.getElementById("playSlower"+index);
	this.c0p = document.getElementById("autoPlay"+index);
	this.x0b = document.getElementById("playForward"+index);
	this.i0z = document.getElementById("playFaster"+index);
	this.r3g = document.getElementById("goToEnd"+index);
  this.h5j = document.getElementById("flipBoard"+index);
  this.k8g = document.getElementById("download"+index);
	this.c4e = document.getElementById("showGameList"+index);
  this.p8l = document.getElementById("settings"+index);
	this.v7j = document.getElementById("leftSouth"+index);
	this.w5e = document.getElementById("leftSouthNest"+index);
	this.r4r = document.getElementById("listParent"+index);
	this.m1l = document.getElementById("listHeader"+index);
	this.l1i = document.getElementById("listHeaderTable"+index);
	this.t7l = document.getElementById("listBody"+index);
  this.v4u = document.getElementById("list-button-container"+index);
  this.r5q = document.getElementById("hideGameList"+index);
	this.f5c = document.getElementById("gameList"+index);
	this.o0h = document.getElementById("right"+index);
	this.a4b = document.getElementById("rightNest"+index);
	this.k6a = document.getElementById("rightNorth"+index);
	this.p9b = document.getElementById("rightSouth"+index);

  
  if (!chess)
  {
    this.k6a.style.height = "100%";
   	this.p9b.style.display = 'none';
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

  this.z0h = document.getElementById("startEngine"+index);
}

j4a()
{
	this.i0i.style.display = 'block';
	this.q2s.style.display = 'none';
	this.i0z.style.display = 'none';
	this.r4r.style.display = 'none';

	this.v6u = false;
	if (this.i0i.clientWidth <= y5a)
	{
		this.v1o();
		this.v6u = true;
	}
	else
	{
		this.p6f();
		this.c3m();
	}
  this.s6z();
	let y2n = this.index;

	this.e3o.onclick = this.q0z.bind(this);
	this.n8y.onclick = this.x1d.bind(this);
	this.q2s.onclick = this.e2e.bind(this);
	this.c0p.onclick = this.s3e.bind(this);
	this.i0z.onclick = this.d1y.bind(this);
	this.x0b.onclick = this.h4o.bind(this);
	this.r3g.onclick = this.w5u.bind(this);
  this.p7l.onclick = this.g6q.bind(this);
  this.g0c.onclick = this.l5k.bind(this);
  this.h5j.onclick = this.h2l.bind(this);
 	this.k8g.onclick = this.a3c.bind(this);
	this.c4e.onclick = this.g4e.bind(this);
 	this.r5q.onclick = this.d2r.bind(this);

  this.p8l.addEventListener('click', async () => {
    await this.onSettingsClick();
  });

 	this.z0h.onchange = this.g5c.bind(this);

	this.l3w = new j0n(this.index);
	this.l3w.d5n.m6m.y3m(this.m4z);
	this.l3w.d5n.z8u = this.z8u;
  this.l3w.d5n.s4l(z1t);
	this.l3w.k7h.t2u.k3x = this.t3v;
	this.l3w.k7h.m7s.h7w = this.h7d;
  this.l3w.k7h.m7s.s4l(z1t);
	this.l3w.m7p.c0p = this.c0p;
	this.l3w.m7p.q2s = this.q2s;
	this.l3w.m7p.i0z = this.i0z;
	this.l3w.m7p.n8y = this.n8y;
	this.l3w.m7p.x0b = this.x0b;
 	this.l3w.l9f.m7s.h7w = this.f6t;
  this.l3w.l9f.m7s.s4l(z1t);

  this.l3w.l9f.p8l.addEventListener('click', async () => {
    await this.onEngineSettingsClick();
  });

	this.z9p = new b2a(this.index);
	this.z9p.r4r = this.r4r;
	this.z9p.p5a = this.f5c;
	this.z9p.j5b = this.l1i;
	this.z9p.j4a();
	this.z9p.s3z(this.e5b);
  this.z9p.z3x = (f5c, index) => {
    this.g3j(f5c, index);
  };
	if (this.z9p.e5b.length)
	{
		this.h1q(0, 0);
	}
	else
	{
		let x1i = new i0b();
		this.l3w.h1q(null, 1, 0, x1i);
	}
}

u0j(r6w)
{
	this.r6w = r6w;
 	let w5z = this.r6w.split('\n');
	let i4m = 0;
	for (const x5b of w5z)
	{
		if (x5b.startsWith("[Event \""))
		{
			let y6n = i4m;
      let y1u = w5z.length;
   		let g1e = w5z.slice(y6n, y1u);
  		let w3d = new o1s(g1e);
	  	this.z9p.e5b[this.z1d] = w3d.p8x();
      break;
    }
    i4m++;
	}
  this.h1q(0, 0);
}

s6z()
{
	let w5z = this.r6w.split('\n');
	let q6c = [];
	let i4m = 0;
	for (const x5b of w5z)
	{
		if (x5b.startsWith("[Event \""))
		{
			q6c.push(i4m);
		}
		i4m++;
	}
	let i = 0;
	this.e5b = [];
	for (const a6x of q6c)
	{
		let y6n = a6x;
		let y1u = 0;
		if (i < q6c.length - 1)
		{
			y1u = q6c[i + 1];
		}
		else
		{
			y1u = w5z.length;
		}
		let g1e = w5z.slice(y6n, y1u);
		let w3d = new o1s(g1e);
		let x1i = w3d.p8x();
		this.e5b.push(x1i);
		i++;
	}
}

o9l()
{
	if (this.v6u || this.e2l.clientHeight <= y5a)
	{
		this.i0i.style.j9z = "0px";
		this.i0i.style.q3r = "0px";
		this.i0i.style.width = "100%";
		this.i0i.style.height = "88vh";
	}
	else
	{
		this.i0i.style.j9z = "1px solid gray";
		this.i0i.style.q3r = "1px solid gray";
		this.i0i.style.height = "88vh";
	}
}

d7i()
{
	this.o9l();

	this.left.style.width = "100%";

	let u5a = this.s2l.getBoundingClientRect();
	this.v7j.style.top = (u5a.height) + "px";
	this.c3m();

	this.l5d();
	this.p6f();
	this.h2o();
	this.t3d();
  this.i0h()
}

h0p()
{
	this.o9l();

	let u4b = this.e2l.getBoundingClientRect();
	this.left.style.width = (u4b.width * 0.50) + "px";
	let g5g = this.left.getBoundingClientRect();

	let u5a = this.s2l.getBoundingClientRect();
	this.v7j.style.top = (u5a.height) + "px";
	this.c3m();

	this.o0h.style.left = (g5g.width) + "px";
	this.o0h.style.width = (u4b.width - g5g.width) + "px";

	this.l5d();
	this.p6f();
	this.h2o();
	this.t3d();
  this.i0h()
}

p6f()
{
}

m8h()
{
  this.s2l.style.height = '100%';
	this.k6a.appendChild(this.g9l);
 	this.p9b.appendChild(this.z9z);
  this.g9l.style.height = '100%';
  this.z9z.style.height = '100%';
	this.o0h.style.display = 'block';
}

v1o()
{
  this.s2l.style.height = '70%';
	this.w5e.appendChild(this.g9l);
  this.w5e.appendChild(this.z9z);
  this.g9l.style.height = '50%';
  this.z9z.style.height = '50%';
	this.o0h.style.display = 'none';
}

g4e(event)
{
	this.r4r.style.display = 'block';
  let d8l = this.r4r.clientHeight - this.m1l.clientHeight - this.v4u.clientHeight;
  this.t7l.style.height = d8l + "px";
	this.h2o();
}

d2r(event)
{
 	this.r4r.style.display = 'none';
}

t3d()
{
	this.l3w.k7h.t2u.j0x();
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
	let u5a = this.s2l.getBoundingClientRect();
	let o6r = this.o0n.getBoundingClientRect();
	this.y7m.style.height = (u5a.height - o6r.height - 1) + "px";
	this.l3w.d5n.l4h();
}

c3m()
{
	let f0d = this.p8d.getBoundingClientRect();
	let u5a = this.s2l.getBoundingClientRect();
	let u3t = f0d.height - u5a.height;
	if (u3t < 0) u3t = 0;
	this.v7j.style.height = u3t + "px";
}

i6d()
{
  s5h('goToPrevious'+this.index, this.z1d > 0);
  s5h('goToNext'+this.index, this.z1d < this.z9p.e5b.length - 1);
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

e2e(event)
{
	this.l3w.m7p.e2e();
}

d1y(event)
{
	this.l3w.m7p.d1y();
}

x1d(event)
{
	this.l3w.m7p.q6q();
	this.l3w.k7h.m7s.x1d();
}

h4o(event)
{
	this.l3w.m7p.q6q();
	this.l3w.k7h.m7s.h4o();
}

q0z(event)
{
	this.l3w.m7p.q6q();
	this.l3w.k7h.m7s.e5p();
}

w5u(event)
{
	this.l3w.m7p.q6q();
	this.l3w.k7h.m7s.j6s();
}

s3e(event)
{
	this.l3w.z2z();
}

z7q()
{
 	if (this.z9p.e5b.length)
  {
    this.h1q(0, 0);
  }
}

g6q(event)
{
 	if (this.z1d > 0)
  {
    this.h1q(this.z1d - 1, 0);
  }
}

l5k(event)
{
  if (this.z1d < this.z9p.e5b.length - 1)
  {
    this.h1q(this.z1d + 1, 0);
  }
}

v5q()
{
	if (this.z9p.e5b.length)
  {
    this.z1d = this.z9p.e5b.length - 1;
    this.h1q(this.z9p.e5b.length - 1, 0);
	}
}

h1q(z1d, z2k)
{
  if (z1d >= 0 && z1d <= this.z9p.e5b.length - 1)
  {
    this.z1d = z1d;
  	this.l3w.h1q(null, 1, z2k, this.z9p.e5b[this.z1d]);
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
	if (this.i0i.clientWidth <= y5a)
	{
		if (this.v6u)
		{
			this.d7i();
		}
		else
		{
			this.v1o();
			this.v6u = true;
			this.d7i();
		}
	}
	else
	{
		if (!this.v6u)
		{
			this.h0p();
		}
		else
		{
			this.m8h();
			this.v6u = false;
			this.h0p();
		}
	}
}

g3j(f5c, index)
{
	this.h1q(index, 0);
  this.d2r();
}

a3c(event)
{
  const a = document.createElement("a");
  a.style.display = "none";
  document.body.appendChild(a);
  let i = 0;
  while (i < this.r6w.length - 1)
  {
    if (this.r6w[i] == '[')
    {
        break;
    }
    i++;
  }
  let r6w = this.r6w.substring(i);
  a.href = window.URL.createObjectURL(new Blob([r6w], { type: "text/plain" }));
  a.setAttribute("download", "games.pgn");
  a.click();
  window.URL.revokeObjectURL(a.href);
  document.body.removeChild(a);
}

g5c(event)
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
  q4c.u2n.j7x = "Stockfish";
  const p5u = q4c.p5u;
  p5u.addInteger("MultiPV", i7v);
  p5u.addInteger("Threads", x0j);
  p5u.addInteger("Hash",    p6h(o4i));
  this.l3w.a3y(q4c);
}

i6g()
{
  this.l3w.d5n.s4l(z1t);
  this.l3w.d5n.l4h();
  this.l3w.k7h.m7s.s4l(z1t);
  this.l3w.k7h.m7s.d2d();
  this.l3w.l9f.m7s.s4l(z1t);
  this.l3w.l9f.m7s.d2d();
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
  const { s5a } = await dialog.show();

  if (s5a === dialog.k9b)
  {
    this.i6g();
  }
}

async onEngineSettingsClick()
{
  const dialog = new m1c();
  const { s5a } = await dialog.show();

  if (s5a === dialog.k9b)
  {
    this.a1b();
  }
}

}

class i1m
{

constructor()
{
  this.k9b = 1;
  this.w3m = 0;

  this.dialog = document.getElementById("settingsDialog");
  if (!this.dialog)
  {
    this.buildDialog();
  }
  this.dialog = document.getElementById("settingsDialog");

  this.w7p = this.dialog.querySelector(".piece-select");
  this.r0q = this.dialog.querySelector(".coordinates-checkbox");
  this.l3y = this.dialog.querySelector(".font-select");
  this.k1s = this.dialog.querySelector(".ok-button");
  this.e2q = this.dialog.querySelector(".cancel-button");

  this.k1s.onclick = this.okSettings.bind(this);
 	this.e2q.onclick = this.cancelSettings.bind(this);
}

buildDialog()
{
  const i5c = a6b();
  const s = `
    <dialog u2n="settingsDialog" class="settingsDialog">
      <h2>Settings</h2>

    <div class="settings-row">
      <span class="label-text">Pieces:</span>
      <select class="pieceSelect piece-select">
        ${i5c.map((y3f, i) => `
        <option value="${i}">${y3f}</option>
        `).join('')}
      </select>
      </div>

    <div class="settings-row">
      <span class="label-text">Coordinates:</span>
      <input type="checkbox" class="coordinates-checkbox">
    </div>

    <div class="settings-row">
      <span class="label-text">Notation font h9k:</span>
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
  z1t.o1q = this.w7p.value;
  localStorage.setItem(x2v, z1t.o1q);
  g4i(z1t.o1q);
  z1t.c5v = this.r0q.checked;
  localStorage.setItem(p9p, z1t.c5v.toString());
  y9m.e3h = this.l3y.value;
  localStorage.setItem(r2o, y9m.e3h);
  this.dialog.close('ok');
}

cancelSettings(event)
{
  this.dialog.close('cancel');
}

async show()
{
  j6o = true;

  this.w7p.value = z1t.o1q;
  this.r0q.checked = z1t.c5v;
  this.l3y.value = y9m.e3h;

  const s5a = await new Promise((resolve) => {
    this.dialog.onclose = () => {
       resolve(this.dialog.returnValue === 'ok' ? this.k9b : this.w3m);
    };
    this.dialog.showModal();
  });

  j6o = false;
  return { s5a };
}

}

function x3e(u2e)
{
  const value = parseInt(u2e);
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

function p6h(u2e)
{
  const value = parseInt(u2e);
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
  this.k9b = 1;
  this.w3m = 0;

  this.dialog = document.getElementById("engineSettingsDialog");
  if (!this.dialog)
  {
    this.buildDialog();
  }
  this.dialog = document.getElementById("engineSettingsDialog");

  this.y0n = this.dialog.querySelector(".searchTime-slider");

  this.k7c = this.dialog.querySelector(".searchTime-value");
  this.p2m = this.dialog.querySelector(".multiPV-slider");
  this.m3j = this.dialog.querySelector(".multiPV-value");
  this.k0g = this.dialog.querySelector(".threads-slider");
  this.g2x = this.dialog.querySelector(".threads-value");
  this.b0e = this.dialog.querySelector(".memory-slider");
  this.k0p = this.dialog.querySelector(".memory-value");
  this.k1s = this.dialog.querySelector(".ok-button");
  this.e2q = this.dialog.querySelector(".cancel-button");

  this.k1s.onclick = this.okSettings.bind(this);
 	this.e2q.onclick = this.cancelSettings.bind(this);

  this.y0n.addEventListener('input', this.y0a.bind(this));
  this.p2m.addEventListener('input', this.a7p.bind(this));

  this.k0g.addEventListener('input', this.n9s.bind(this));

  this.b0e.addEventListener('input', this.e6y.bind(this));

}

buildDialog() {
  const s = `
    <dialog u2n="engineSettingsDialog" class="settingsDialog">
      <h2>j0c Settings</h2>

      <div class="settings-row">
        <span class="label-text">Search r0m</span>
        <input type="range" class="simple-slider searchTime-slider" min="1" max="10" u2o="1" value="1">
        <span class="value-display-simple searchTime-value">1s</span>
      </div>

      <div class="settings-row">
        <span class="label-text">Multiple w5z</span>
        <input type="range" class="simple-slider multiPV-slider" min="1" max="5" u2o="1" value="1">
        <span class="value-display-simple multiPV-value">1</span>
      </div>

      <div class="settings-row">
        <span class="label-text">Threads</span>
        <input type="range" class="simple-slider threads-slider" min="1" max="32" u2o="1" value="1">
        <span class="value-display-simple threads-value">1</span>
      </div>

      <div class="settings-row">
        <span class="label-text">Memory</span>
        <input type="range" class="simple-slider memory-slider" min="1" max="6" u2o="1" value="1">
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
  o4l = parseInt(this.y0n.value);
  i7v = parseInt(this.p2m.value);
  x0j = parseInt(this.k0g.value);
  o4i = parseInt(this.b0e.value);
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

y0a()
{
  const value = parseInt(this.y0n.value);
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
  this.k7c.textContent = displayValue;
}

a7p()
{
  const value = this.p2m.value;
  this.m3j.textContent = `${value}`;
}


n9s()
{
  const value = this.k0g.value;
  this.g2x.textContent = `${value}`;
}


e6y()

{
  const value = parseInt(this.b0e.value);
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

  this.k0p.textContent = displayValue;
}

async show()
{
  j6o = true;

  this.y0n.value = o4l;
  this.p2m.value = i7v;
  this.k0g.value = x0j;
  this.b0e.value = o4i;

  this.y0a();
  this.a7p();
  this.n9s();
  this.e6y();

  const s5a = await new Promise((resolve) => {
    this.dialog.onclose = () => {
       resolve(this.dialog.returnValue === 'ok' ? this.k9b : this.w3m);
    };
    this.dialog.showModal();
  });

  j6o = false;
  return { s5a };
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
let j6o = false;

const y5a = 767;
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

document.onkeydown = b0s;

function b0s(e)
{
  if (e.r8s === "Escape")
  {
    return;
  }

  if (j6o)
  {
    
    e.preventDefault();
    return;
  }

	let g8i = e || window.event;
	let r8s = g8i.keyCode;

	if (k7z) return;
	k7z = true;

	if (l1o == -1) return;

	if (e.ctrlKey)
	{
		if (r8s == 66) 
		{
				s9v[l1o].h2l();
				e.preventDefault();
				
				
				
		}
		k7z = false;
		return;
	}
	if (r8s)
	{
		
		k6e(r8s);
		e.preventDefault(); 
		
	}
	k7z = false;
}

function d7b(y2n)
{
	s9v[y2n].l3w.m7p.m6x();
}

function k6e(r8s)
{
	if (l1o == -1) return;

	if (r8s == q5f)
	{
		s9v[l1o].l3w.k7h.m7s.e1j();
	}
	else if (r8s == z7o)
	{
		s9v[l1o].l3w.k7h.m7s.l9v();
	}
	else if (r8s == r3o || r8s == w4t || r8s == g6j ||
	r8s == c2u || r8s == x5i || r8s == b8t ||
	r8s == v9v || r8s == e9u ||
	r8s == e0y || r8s == c1t)
	{
		s9v[l1o].l3w.k7h.m7s.z5m(r8s);
	}
	else if (r8s == h4r || r8s == d0f || r8s == u3u)
	{
		s9v[l1o].doFlipBoard();
	}
}

function z7m(e1l, e5s)
{
	let r3n = e1l.length;
	let g3o = 0;

	function check(n)
	{
		if (n == r3n)
		{
			e5s();
		}
	}

	for (let i = 0; i < e1l.length; ++i)
	{
    let w5y = e1l[i];
		let img = document.createElement("img");
		img.u2n = e1l[i].replace(".bmp", "").replace(".gif", "").replace(".jpg", "").replace(".png", "").replace(".svg", "");
		j2k.add(img);
		img.addEventListener("load", function()
		{
			g3o++;
			check(g3o);
		});
		img.src = w5y;
	}
}

function x4s()
{
 	z7m(e4r(), j7e);
  
  
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
	let o1a = document.getElementsByClassName("tdreplay");
	for (const i0i of o1a)
	{
		let s9p = new b9s();
		s9p.l0g(s9v.length, i0i, i0i.innerHTML);
		s9p.j4a();
		s9v.push(s9p);
	}
	if (s9v.length)
	{
		l1o = 0;
	}
	window.addEventListener("resize", f4i);
	f4i();
}

function s5h(j7x, h9e)
{
	let button = document.getElementById(j7x);
	if (h9e)
	{
		button.classList.remove('replayButtonDisabled');
	}
	else
	{
		button.classList.add('replayButtonDisabled');
	}
}

function y7q(button, h9e)
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
    z1t.o1q = 0;
  }
  else
  {
    z1t.o1q = piecesValue;
  }
  g4i(z1t.o1q);

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
  const e0l = localStorage.getItem(o2p);
  if (e0l === null)
  {
    i7v = 1;
  }
  else
  {
    i7v = e0l;
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
const v8e =
[
	[ f4v.u7c, 			  	""      ],
	[ f4v.x1i,  		 		"game"  ],
	[ f4v.b7x,    		 	"match" ],
	[ f4v.q7o,  	"tourn" ],
	[ f4v.p0y,   			"swiss" ],
	[ f4v.l0o,    	"k.o."  ],
	[ f4v.q6r,	"simul" ],
	[ f4v.a1j,	"schev" ]
];

const x3c =
[
	[ f0j.a3h, ""        ],
	[ f0j.o4u,  "(rapid)" ],
	[ f0j.w3w,  "(blitz)" ],
	[ f0j.h0o,   "(corr)"  ]
];

const l5t =
[
	[ n8u.u7c,     		 ""     ],
	[ n8u.f2w,       		 "$145" ],
	[ n8u.s4n, 		 "$142" ],
	[ n8u.g7i, 		 "$143" ],
	[ n8u.c6m, "$144" ],
	[ n8u.e4e,  "$140" ],
	[ n8u.s9h, "$141" ]
];

const h8d =
[
	[ c8l.u7c,     		""   ],
	[ c8l.p5g,       	"$1" ],
	[ c8l.y7x, 			  	"$2" ],
	[ c8l.e9c,	"$5" ],
	[ c8l.g7c, 		  "$6" ],
	[ c8l.r9v,  	"$3" ],
	[ c8l.u3z, 		  "$4" ],
	[ c8l.e1e, 		"$22" ],
	[ c8l.n2g, 		"$8" ]
];

const v5z =
[
	[ b4c.u7c,     						""     ],
	[ b4c.e4t,      "$18"  ],
	[ b4c.q4p, 					"$16"  ],
	[ b4c.r2w,	"$14"  ],
	[ b4c.o9f, 						"$11"  ],
	[ b4c.h3h,  						"$13"  ],
	[ b4c.e7o,  "$15"  ],
	[ b4c.o0g, 					"$17"  ],
	[ b4c.i8a, 			"$19"  ],
	[ b4c.k5j,					"$44"  ],
	[ b4c.x5f, 					"$132" ],
	[ b4c.y6r,  					"$36"  ],
	[ b4c.x7q, 							"$40"  ],
	[ b4c.y3z, 			  "$138" ],
	[ b4c.c7a,	"$32"  ],
	[ b4c.t9z, 							"$146" ]
];

const p3f =
[
	[ o9q.u7c,     		""     ],
	[ o9q.l2s,     "$51"  ],
	[ o9q.x3o, 			"$52"  ],
	[ o9q.r6z,	    		"$53"  ]
];

const r3v =
[
	[ k2e.e8e, 			 	""       ],
	[ k2e.x3o,   		"middle" ],
	[ k2e.l3h,   	   	 	"low"    ]
];


function g5h(e5u)
{
	return x3c[e5u][1];
}

function h6d(c2f)
{
	for (const e5u of x3c)
	{
		if (e5u[1] == c2f)
		{
			return e5u[0];
		}
	}
	return f0j.a3h;
}

function q1j(type)
{
	return v8e[type][1];
}

function j9h(c2f)
{
	for (const q5u of v8e)
	{
		if (q5u[1] == c2f)
		{
			return q5u[0];
		}
	}
	return f4v.u7c;
}

function d4k(h7c)
{
	return l5t[h7c][1];
}

function u5b(c2f)
{
	for (const h7c of l5t)
	{
		if (h7c[1] == c2f)
		{
			return h7c[0];
		}
	}
	return n8u.u7c;
}

function q2l(style)
{
	return h8d[style][1];
}

function v3t(c2f)
{
	for (const style of h8d)
	{
		if (style[1] == c2f)
		{
			return style[0];
		}
	}
	return c8l.u7c;
}

function l3m(value)
{
	return v5z[value][1];
}

function k2h(c2f)
{
	for (const value of v5z)
	{
		if (value[1] == c2f)
		{
			return value[0];
		}
	}
	return b4c.u7c;
}

function m6o(z4d)
{
	return p3f[z4d][1];
}

function m6l(c2f)
{
	for (const i9f of p3f)
	{
		if (i9f[1] == c2f)
		{
			return i9f[0];
		}
	}
	return o9q.u7c;
}

function u2b(c2f)
{
	return c2f.length == 0 ||
		c2f == "?" ||
		c2f == "-" ||
		c2f == "*" ||
		c2f == "????.??.??";
}

function b6b(c2f)
{
	if (u2b(c2f))
	{
		return "";
	}
	else
	{
		return c2f.trim();
	}
}

function a7k(c2f, s7r)
{
	if (u2b(c2f))
	{
		return s7r;
	}
	else
	{
		return j3e(c2f, s7r);
	}
}

function p7h(value)
{
	return value ? value.toString() : "";
}

function j8l(n2o)
{
	return r3v[n2o][1];
}

function z7p(c2f)
{
	for (const n2o of r3v)
	{
		if (n2o[1] == c2f)
		{
			return n2o[0];
		}
	}
	return k2e.e8e;
}

function p4h(r7j)
{
	if (!r7j)
	{
		return "";
	}
	else
	{
		let div = Math.trunc(r7j / 60);
		let y0y = r7j % 60;
		return div.toString() + "." + y0y.toString().padStart(2, '0');
	}
}

function e6z(s5a)
{
	switch (s5a)
	{
		case o9d.f7r:
			return "1-0";
		case o9d.y8o:
			return "1/2-1/2";
		case o9d.k6l:
			return "0-1";
		default:
			return "*";
	}
}

function n8g(q8l)
{
	if (q8l > 0 && q8l <= 9999)
	{
		return q8l.toString().padStart(4, '0');
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
	let c2f = '';
	if (u9c.b6v)
	{
		c2f = u9c.b6v.toString().padStart(4, '0');
	}
	else
	{
		c2f = "????";
	}
	c2f += ".";
	if (u9c.v0g)
	{
		let s7u = u9c.v0g.toString().padStart(2, '0');
		c2f += s7u;
	}
	else
	{
		c2f += "??";
	}
	c2f += ".";
	if (u9c.x4l)
	{
		let f7n = u9c.x4l.toString().padStart(2, '0');;
		c2f += f7n;
	}
	else
	{
		c2f += "??";
	}
	return c2f;
}

function n4w(x9e)
{
	if (u2b(x9e))
	{
		return new b2s();
	}
	else
	{
		let u9c = new b2s();
		u9c.w5c("yyyy.mm.dd", x9e);
		return u9c;
	}
}

function i2k(x9e, q7o)
{
	q7o.s5z = (x9e.indexOf("team") != -1);
	q7o.type = f4v.u7c;
	for (const q5u of v8e)
	{
		if (x9e.indexOf(q5u[1]) != -1)
		{
			q7o.type = q5u[0];
			break;
		}
	}
	q7o.e5u = f0j.a3h;
	for (const e5u of x3c)
	{
		if (x9e.indexOf(e5u[1]) != -1)
		{
			q7o.e5u = e5u[0];
			break;
		}
	}
}

function b0a(x9e, p3r)
{
	p3r.e9m = 0;
	p3r.o9y = 0;
	let i7j = x9e.indexOf(".");
	if (i7j != -1)
	{
		let a1r = x9e.substr(0, i7j);
		p3r.e9m = j3e(a1r, 0);
		let v7h = x9e.substr(i7j + 1, x9e.length);
		i7j = v7h.indexOf(".");
		if (i7j != -1)
		{
			a1r = v7h.substr(0, i7j);
			p3r.o9y = j3e(a1r, 0);
		}
		else
		{
			p3r.o9y = j3e(v7h, 0);
		}
	}
	else
	{
		p3r.e9m = j3e(x9e, 0);
	}
}

function c1b(p3r)
{
	let x9e = '';
	if (p3r.o9y)
	{
		x9e = p3r.e9m.toString() + "." + p3r.o9y.toString();
	}
	else if (p3r.e9m)
	{
		x9e = p3r.e9m.toString();
	}
	return x9e;
}

function o6c(x9e)
{
	if (x9e == "2-0" || x9e == "20" || x9e == "1-0" || x9e == "10")
	{
		return o9d.f7r;
	}
	else if (x9e == "1-1" || x9e == "11" || x9e == "1/2-1/2" ||
		x9e == "1/21/2" || x9e == "0.5-0.5")
	{
		return o9d.y8o;
	}
	else if (x9e == "0-2" || x9e == "02" || x9e == "0-1" || x9e == "01")
	{
		return o9d.k6l;
	}
	else
	{
		return o9d.u7c;
	}
}

function l4l(x9e)
{
	return j3e(x9e, 0);
}

function j4q(x9e)
{
	return j5j(x9e);
}

function q1o(x9e)
{
	return c4p(x9e);
}

function f5s(value)
{
	return value ? "1" : "";
}

function z3p(x9e)
{
	return x9e == "1";
}

function j3m(r4l)
{
	let p3r = new m3k();

	
	p3r.o5v.w4z.n5g(b6b(r4l.u7w));
	if (!u2b(r4l.k9q))
	{
		p3r.o5v.x9v.j7x = b6b(r4l.k9q);
		p3r.o5v.x9v.f7z = a7k(r4l.s2z, 0);
		if (!u2b(r4l.c4t))
		{
			let u9c = n4w(r4l.c4t);
			p3r.o5v.x9v.b6v = u9c.b6v;
		}
		p3r.o5v.x9v.c0y = z3p(r4l.j8o);
		p3r.o5v.x9v.v0e = n7a(b6b(r4l.t0f));
	}
	p3r.o5v.q8l = l4l(b6b(r4l.v2w));
	p3r.o5v.r0m = q1o(b6b(r4l.a8l));
	p3r.o5v.q8c = b6b(r4l.n5j);
	p3r.o5v.v0e = s0y(b6b(r4l.z0u));

	
	p3r.u6y.w4z.n5g(b6b(r4l.s6h));
	if (!u2b(r4l.n5l))
	{
		p3r.u6y.x9v.j7x = b6b(r4l.n5l);
		p3r.u6y.x9v.f7z = a7k(r4l.t6q, 0);
		if (!u2b(r4l.v9n))
		{
			let u9c = n4w(r4l.v9n);
			p3r.u6y.x9v.b6v = u9c.b6v;
		}
		p3r.u6y.x9v.c0y = z3p(r4l.d4q);
		p3r.u6y.x9v.v0e = n7a(b6b(r4l.i8g));
	}
	p3r.u6y.q8l = l4l(b6b(r4l.z7x));
	p3r.u6y.r0m = q1o(b6b(r4l.z3v));
	p3r.u6y.q8c = b6b(r4l.g8m);
	p3r.u6y.v0e = s0y(b6b(r4l.u4n));

	
	p3r.q7o.q8c = b6b(r4l.b1x);
	p3r.q7o.s9u = b6b(r4l.e2f);
	p3r.q7o.w3q = n4w(r4l.b7o);
	p3r.q7o.h9j = n4w(r4l.x2m);

	i2k(b6b(r4l.q5u), p3r.q7o);
	
	
	
	let f5u = h6d(r4l.f5u);
	if (f5u != f0j.a3h)
	{
		p3r.q7o.e5u = f5u;
	}
	p3r.q7o.v0e = n7a(b6b(r4l.i2q));
	p3r.q7o.z5s = a7k(r4l.h5t, 0);
	let q5u = j9h(r4l.q5u);
	if (q5u != f4v.u7c)
	{
		p3r.q7o.type= q5u;
	}
	p3r.q7o.n8n = a7k(r4l.q6f, 0);
	p3r.q7o.s5z = z3p(r4l.n1v);
	p3r.q7o.e5e = z3p(r4l.m9x);
	p3r.q7o.o1x = z3p(r4l.m1d);
	p3r.q7o.f0k = z3p(r4l.l6i);

	
	p3r.p0d.j7x = b6b(r4l.p0d);

	
	p3r.e3m.q8c = b6b(r4l.c0x);
	p3r.e3m.k6w = b6b(r4l.v3d);
	p3r.e3m.j0g = n4w(r4l.d6s);
	p3r.e3m.t9q = a7k(r4l.h1v, 0);
	p3r.e3m.n4q = n4w(r4l.f8g);
	p3r.e3m.n2o = z7p(r4l.w8i);

	
	p3r.q8c.q8c = b6b(r4l.q8c);

	
	p3r.u9c = n4w(r4l.u9c);
	p3r.s5a = o6c(b6b(r4l.s5a));
	p3r.q2o = j4q(b6b(r4l.q2o));
	b0a(b6b(r4l.e9m), p3r);

	
	let l8h = a7k(r4l.l8h, 0);
	p3r.l8h.k1e(l8h);

  
  p3r.u2n.d5c = r4l.d5c;

	return p3r;
}

function d3x(p3r)
{
	let r4l = new l6g();

	
	r4l.u7w = p3r.o5v.w4z.j7x();
	if (p3r.o5v.x9v.j7x.length)
	{
		r4l.k9q = p3r.o5v.x9v.j7x;
		if (p3r.o5v.x9v.f7z)
		{
			r4l.s2z = p3r.o5v.x9v.f7z;
		}
		if (p3r.o5v.x9v.b6v)
		{
			let x6m = new b2s();
			x6m.b6v = p3r.o5v.x9v.b6v;
			r4l.c4t = f0l(x6m);
		}
		if (p3r.o5v.x9v.c0y)
		{
			r4l.j8o = f5s(p3r.o5v.x9v.c0y);
		}
		if (p3r.o5v.x9v.v0e != y2m.u7c)
		{
			r4l.t0f = e6a(p3r.o5v.x9v.v0e);
		}
	}
	r4l.v2w = n8g(p3r.o5v.q8l);
	r4l.a8l = p4h(p3r.o5v.r0m);
	r4l.n5j = p3r.o5v.q8c;

	
	r4l.s6h = p3r.u6y.w4z.j7x();
	if (p3r.u6y.x9v.j7x.length)
	{
		r4l.n5l = p3r.u6y.x9v.j7x;
		if (p3r.u6y.x9v.f7z)
		{
			r4l.t6q = p3r.u6y.x9v.f7z;
		}
		if (p3r.u6y.x9v.b6v)
		{
			let d4o = new b2s();
			d4o.b6v = p3r.u6y.x9v.b6v;
			r4l.v9n = f0l(d4o);
		}
		if (p3r.u6y.x9v.c0y)
		{
			r4l.d4q = f5s(p3r.u6y.x9v.c0y);
		}
		if (p3r.u6y.x9v.v0e != y2m.u7c)
		{
			r4l.i8g = e6a(p3r.u6y.x9v.v0e);
		}
	}
	r4l.z7x = n8g(p3r.u6y.q8l);
	r4l.z3v = p4h(p3r.u6y.r0m);
	r4l.g8m = p3r.u6y.q8c;

	
	r4l.b1x = p3r.q7o.q8c;
	r4l.e2f = p3r.q7o.s9u;
	r4l.b7o = f0l(p3r.q7o.w3q);
	r4l.x2m = f0l(p3r.q7o.h9j);
	r4l.f5u = g5h(p3r.q7o.e5u);
	r4l.h5t = p7h(p3r.q7o.z5s);
	r4l.i2q = e6a(p3r.q7o.v0e);
	r4l.q5u = q1j(p3r.q7o.type);
	r4l.q6f = p7h(p3r.q7o.n8n);
	r4l.n1v = f5s(p3r.q7o.s5z);
	r4l.m9x = f5s(p3r.q7o.e5e);
	r4l.m1d = f5s(p3r.q7o.o1x);
	r4l.l6i = f5s(p3r.q7o.f0k);

	
	r4l.p0d = p3r.p0d.j7x;

	
	r4l.c0x = p3r.e3m.q8c;
	r4l.v3d = p3r.e3m.k6w;
	r4l.d6s = f0l(p3r.e3m.j0g);
	r4l.h1v = p7h(p3r.e3m.t9q);
	r4l.f8g = f0l(p3r.e3m.n4q);
	r4l.w8i = j8l(p3r.e3m.n2o);

	
	r4l.q8c = p3r.q8c.q8c;

	
	r4l.u9c = f0l(p3r.u9c);
	r4l.s5a = e6z(p3r.s5a);
	r4l.q2o = r6q(p3r.q2o);
	r4l.e9m = c1b(p3r);

	
	r4l.l8h = p7h(p3r.l8h.t4s());

	return r4l;
}

const e2c  					= "White";
const p6q					= "WhiteTeam";
const f9j 				= "WhiteTeamNumber";
const j9b 					= "WhiteTeamYear";
const k7k 				= "WhiteTeamSeason";
const m1u 			= "WhiteTeamCountry";
const g3u 						= "WhiteRating";
const m8s 							= "WhiteTime";
const g1s 							= "WhiteElo";
const x9m  						= "WhiteTitle";
const c3c						= "WhiteCountry";

const m1g						= "Black";
const a9s					= "BlackTeam";
const r0w 				= "BlackTeamNumber";
const k8e 					= "BlackTeamYear";
const t3z 				= "BlackTeamSeason";
const j8a 			= "BlackTeamCountry";
const d2p 						= "BlackRating";
const c8e 							= "BlackTime";
const t5r 							= "BlackElo";
const s6y  						= "BlackTitle";
const h0f						= "BlackCountry";

const l6s 				= "Event";
const g1d				= "Site";
const l0j 			 	= "EventDate";
const w0m 		 	= "EventEndDate";
const s3l 			 	= "EventSpeed";
const i6l 	 	= "EventCategory";
const p2h 		 	= "EventCountry";
const m4t 			 	= "EventType";
const d4p 		 	= "EventRounds";
const h9n 			 	= "EventTeams";
const e4y		 	= "EventComplete";
const m0l 	= "EventThreePoints";
const m8c	= "EventBoardPoints";

const j6b 							= "Annotator";

const s1a 				 		= "SourceTitle";
const c2b 				 		= "Publication";
const s4r		 		= "SourcePublisher";
const t8c		 		= "PublicationDate";
const y8l 				 		= "SourceDate";
const k3q 		= "SourceVersionNumber";
const i1y 	 		= "SourceVersionDate";
const q8r 			 		= "SourceQuality";

const v0l 					 		    = "Title";

const r8h 							 		= "Date";
const u4a 								= "Result";
const q9a 										= "ECO";
const t3o 									= "Round";

const y8y			 							= "Tags";

const x8g 									= "Setup";
const v5t 										= "FEN";
const x7d 							= "PlyCount";

const p4t      							= "GUID";

const r5y = "(";
const t8a   = ")";
const y1t    = "{";

class x7l
{

constructor()
{
  this.j3b = new s7c();
  this.n3h = new x6l();
  this.u2y = new p6t();
  this.f4x = false;
  this.q0w = false;
  this.h7b = false;
  this.o5c = '';
}

}

class o1s
{

constructor(w5z)
{
	this.p6u = new l6g();
	this.x7m = w5z;
	this.p8t = 0;
	this.l1h = '';
	this.r5w = 0;
	this.q1p = 0;
	this.q8u = '';
	this.d7r = 0;
	this.z3w = false;
	this.z7r = '';
	this.p2g = '';
	this.y2s = null;
	this.v6m = new z4m();
	this.c4c = '';
	this.n1z = false;
 	this.w7k = false;
	this.j8e = false;
}

p8x()
{
  this.d7r = 0;
	let x1i = new i0b();
	this.y2s = x1i.g7g;
	try
	{
		this.w1u();
	}
	catch (err)
	{
	}
	x1i.g0g = j3m(this.p6u);
  x1i.r5k = this.d7r;
	return x1i;
}

w1u()
{
	this.z3w = false;
	this.r0d();
	if (this.z3w)
	{
		this.x1z = o7a(this.p2g);
		this.y2s.m1m(this.x1z, 1);
	}
 	this.d1c();
}

b1i()
{
	if (this.x7m.length == 0)
	{
		return false;
	}
	if (this.p8t >= this.x7m.length)
	{
		return false;
	}
	else
	{
		this.l1h = this.x7m[this.p8t];
		this.r5w = this.l1h.length;
		this.q1p = 0;
		this.p8t++;
		return true;
	}
}

r0d()
{
	this.j8e = false;
	this.w7k = false;
	while (true)
	{
		if (!this.b1i())
		{
			return;
		}
		this.z3n();
		if (!this.l1y())
		{
			return;
		}
		this.t2f();
	}
}


u5o(n8s)
{
	let x9e = this.q8u.substr(1, this.q8u.length - 1);
	return x9e.toUpperCase() === n8s.toUpperCase();
}

d1c()
{
 	if (this.q8u.length == 0) return;
	this.n1z = false;

	while (this.q8u[0] == '{')
	{
		let t0e = this.p4i();
    let s2n = new x7l();
		this.n7e(t0e, s2n);
    if (!s2n.j3b.k2v())
		{
			this.y2s.m1p(s2n.j3b);
		}
 		if (!s2n.n3h.k2v())
		{
			this.y2s.m7d(s2n.n3h);
		}
		if (!s2n.u2y.k2v())
		{
			this.y2s.l7d(s2n.u2y);
		}
 		t0e = s2n.o5c.trim();
    if (t0e.length)
    {
      
      
      if (t0e.startsWith("[%a") && t0e.length > 7)
      {
        t0e = t0e.substr(7, t0e.length).trim();
      }
      let n7s = this.y2s.n7s();
      if (n7s.length)
      {
        n7s += ' ';
      }
      n7s += t0e;
      this.y2s.c8d(n7s);
		}
		this.z3n();
		if (this.q8u.length == 0)
		{
			return;
		}
	}
	this.l8a(this.y2s.y5m(), this.y2s.x1z());
}

l8a(p2d, j3g)
{
  let i7j = p2d.o0o();
  let h1s = j3g.o0o();

	let d5e = null;
 	let u0i = new d5f();

	do
	{
		if (this.q8u == r5y)
		{
			if (!d5e)
			{
				throw "error";
			}
			if (!this.z3n())
			{
				throw "error";
			}

 			h1s.y9l(i7j.v5h.z2g());
			h1s.i6z(u0i);
			this.y2s.y9l(i7j); 
      this.l8a(i7j, h1s);
			this.y2s.r9f(i7j); 
			h1s.r9f(i7j.v5h.z2g());

			while (this.z3n())
			{
				if (this.q8u != r5y)
				{
					break;
				}
				if (!this.z3n())
				{
					throw "error";
				}
        h1s.y9l(i7j.v5h.z2g());
				h1s.i6z(u0i);
				this.y2s.y9l(i7j); 
				this.l8a(i7j, h1s);
				this.y2s.r9f(i7j);  
				h1s.r9f(i7j.v5h.z2g());
			}
		}

		if (this.q8u == t8a)
		{
			break;
		}

		if (
			this.q8u == "1-0" ||
			this.q8u == "2-0" ||
			this.q8u == "0-1" ||
			this.q8u == "0-2" ||
			this.q8u == "1/2-1/2" ||
			this.q8u == "1-1" ||
			this.q8u == "*" ||
			this.q8u == "**" ||
			this.q8u == "-*" ||
			this.q8u == "1-0*" ||
			this.q8u == "2-0*" ||
			this.q8u == "0-1*" ||
			this.q8u == "0-2*" ||
			this.q8u == "1/2-1/2*" ||
			this.q8u == "1-1*" ||
			this.q8u == "2-00*" ||
			this.q8u == "00-2*")
			break;

		if (this.q8u[0] == '$')
		{
			if (!d5e)
			{
				throw "error";
			}
			let h7c = u5b(this.q8u);
			if (h7c != n8u.u7c)
			{
				d5e.u5m(h7c);
				continue;
			}
			let style = v3t(this.q8u);
			if (style != c8l.u7c)
			{
				d5e.a4l(style);
				continue;
			}
			let value = k2h(this.q8u);
			if (value != b4c.u7c)
			{
				d5e.d7c(value);
				continue;
			}
			let z4d = m6l(this.q8u);
			if (z4d != o9q.u7c)
			{
				d5e.b3g(z4d);
				continue;
			}
			continue;
		}
		if (this.q8u[0] == '{')
		{
			let t0e = this.p4i();
      let s2n = new x7l();
  		this.n7e(t0e, s2n);
      if (!s2n.j3b.k2v())
      {
		  	if (d5e)
			  {
				  d5e.l3z(s2n.j3b);
				}
			}
   		if (!s2n.n3h.k2v())
      {
				if (d5e)
				{
					d5e.b5v(s2n.n3h);
				}
			}
   		if (!s2n.u2y.k2v())
      {
				if (d5e)
				{
					d5e.h4h(s2n.u2y);
				}
			}
      if (s2n.q0w)
      {
				if (d5e)
				{
					d5e.t6k();
				}
			}
      if (s2n.h7b)
      {
				if (d5e)
				{
					d5e.j7v();
				}
			}
   		t0e = s2n.o5c.trim();
      if (!t0e.length)
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
        z8s += t0e;
				d5e.c3o(z8s);
			}
			else
			{
        if (this.c4c.length)
        {
   				this.c4c += ' ';
        }
				this.c4c += t0e;
				this.n1z = true;
			}
			continue;
		}
		if (!this.l9z())
		{
			continue;
		}
		let i8b = false;
		if (this.q8u[this.q8u.length] == '*')
		{
			this.q8u = this.q8u.substr(0, this.q8u.length - 1);
			i8b = true;
		}
 		let u1r = this.g3t(this.q8u);
    let z2g = f8m(h1s, this.q8u);
 		u0i = h1s.u0i();
		h1s.r9f(z2g);
		let v5h = l9h(z2g);
    v5h.a4l(u1r);
    this.y2s.v9t(i7j, v5h);
		d5e = i7j.v5h;
		if (this.n1z)
		{
			d5e.z1f(this.c4c);
			this.n1z = false;
      this.c4c = '';
		}
		if (i8b)
		{
			break;
		}
	} while (this.z3n());
}

g3t(x9e)
{
	if (x9e.endsWith("??"))
	{
		x9e = x9e.subString(0, x9e.length-2);
		return c8l.u3z;
	}
	else if (x9e.endsWith("!!"))
	{
		x9e = x9e.subString(0, x9e.length-2);
		return c8l.r9v;
	}
	else if (x9e.endsWith("?!"))
	{
		x9e = x9e.subString(0, x9e.length-2);
		return c8l.g7c;
	}
	else if (x9e.endsWith("!?"))
	{
		x9e = x9e.subString(0, x9e.length-2);
		return c8l.e9c;
	}
	else if (x9e.endsWith("?"))
	{
		x9e = x9e.subString(0, x9e.length-1);
		return c8l.y7x;
	}
	else if (x9e.endsWith("!"))
	{
		x9e = x9e.subString(0, x9e.length-1);
		return c8l.p5g;
	}
	else
	{
		return c8l.u7c;
	}
}

l9z()
{
	let y5o = this.q8u.length;
	let i7j = -1;
	for (let i = 0; i < y5o; i++)
	{
		if (this.q8u[i] == '.')
		{
			i7j = i;
		}
	}
	if (i7j != -1)
	{
		this.q8u = this.q8u.substr(i7j + 1 , y5o);
	}
	return this.q8u.length != 0;
}

z3n()
{
	this.q8u = "";
	let d2s = '';
	let index = 0;
	let y5o = 0;
	while (true)
	{
		let n4c = 0;
		if (this.q1p < this.r5w)
		{
			n4c = this.l1h[this.q1p];
		}
		else
		{
			n4c = 0;
		}
		if (!n4c)
		{
			if (y5o)
			{
				break;
			}
			if (!this.b1i())
			{
				return false;
			}
			continue;
		}
		if (n4c == ';')
		{
			if (!this.b1i())
			{
				return false;
			}
			continue;
		}
		if (n4c == '(')
		{
			if (y5o)
			{
				break;
			}
			else
			{
				this.q1p++;
				this.q8u = r5y;
				return true;
			}
		}
		if (n4c == ')')
		{
			if (y5o)
			{
				break;
			}
			else
			{
				this.q1p++;
				this.q8u = t8a;
				return true;
			}
		}
		if (n4c == '{')
		{
			if (y5o)
			{
				break;
			}
			else
			{
				this.q1p++;
				this.q8u = y1t;
				return true;
			}
		}
		if (n4c == ' ' || n4c == '\r' || n4c == '\n')
		{
			if (y5o)
			{
				this.q1p++;
				break;
			}
			else
			{
				this.q1p++;
				continue;
			}
		}
		d2s += n4c;
		index++;
		y5o++;
		this.q1p++;
	}
	if (index)
	{
		this.q8u += d2s;
	}
	return this.q8u.length != 0;
}

p4i()
{
	let x9e = '';
	let d2s = '';
	let index = 0;
	let h7r = 0;
	while (true)
	{
		let n4c = 0;
		if (this.q1p < this.r5w)
		{
			n4c = this.l1h[this.q1p];
		}
		else
		{
			n4c = 0;
		}
		if (!n4c)
		{
			if (!this.b1i())
			{
				break;
			}
			if (index > 0)
			{
				d2s += ' '; 
				index++;
			}
			continue;
		}
		if (n4c == '{')
		{
			h7r++;
		}
		if (n4c == '}')
		{
			if (h7r)
			{
				h7r--;
			}
			else
			{
				this.q1p++;
				break;
			}
		}
		d2s += n4c;
		index++;
		this.q1p++;
	}
	if (index)
	{
		x9e += d2s;
	}
	return x9e.trim();
}

k1p()
{
	this.z7r = "";

	let z8c = 0;
	let y5o = this.l1h.length;
	for (let i = y5o - 1; i >= 0; i--)
	{
		if (this.l1h[i] == ']')
		{
			z8c = i;
			break;
		}
	}
	let index = 0;
	let c6v = false;
	let d2s = '';
	while (true)
	{
		let n4c = 0;
		if (this.q1p < this.r5w)
		{
			n4c = this.l1h[this.q1p];
		}
		else
		{
			n4c = 0;
		}
		if (!n4c)
		{
			if (!this.b1i())
			{
				break;
			}
			continue;
		}
		if (n4c == '\"')
		{
			c6v = true;
			this.q1p++;
			continue;
		}
		if (n4c == ']')
		{
			if (this.q1p == z8c)
			{
				this.q1p++;
				break;
			}
		}
		if (c6v)
		{
			d2s += n4c;
			index++;
		}
		this.q1p++;
	}
	if (index)
	{
		this.z7r += d2s;
	}
}

l1y()
{
	if (this.q8u.length == 0)
	{
		return false;
	}
	if (this.q8u[0] != '[')
	{
		return false;
	}
	
	let index = this.q1p;
	let u8e = false;
	while (index < this.r5w)
	{
		let n4c = this.l1h[index++];
		if (n4c == '\"' && this.l1h[index] == ']')
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

t2f()
{
	
	if (this.u5o(e2c))
	{
		this.k1p();
		this.p6u.u7w = this.z7r;
		return;
	}
	if (this.u5o(p6q))
	{
		this.k1p();
		this.p6u.k9q = this.z7r;
		return;
	}
	if (this.u5o(f9j))
	{
		this.k1p();
		this.p6u.s2z = this.z7r;
		return;
	}
	if (this.u5o(j9b))
	{
		this.k1p();
		this.p6u.c4t = this.z7r;
		return;
	}
	if (this.u5o(k7k))
	{
		this.k1p();
		this.p6u.j8o = this.z7r;
		return;
	}
	if (this.u5o(m1u))
	{
		this.k1p();
		this.p6u.t0f = this.z7r;
		return;
	}
	if (this.u5o(g1s) || this.u5o(g3u))
	{
		this.k1p();
		this.p6u.v2w = this.z7r;
		return;
	}
	if (this.u5o(m8s))
	{
		this.k1p();
		this.p6u.a8l = this.z7r;
		return;
	}
	if (this.u5o(x9m))
	{
		this.k1p();
		this.p6u.n5j = this.z7r;
		return;
	}
	if (this.u5o(c3c))
	{
		this.k1p();
		this.p6u.z0u = this.z7r;
		return;
	}

	
	if (this.u5o(m1g))
	{
		this.k1p();
		this.p6u.s6h = this.z7r;
		return;
	}
	if (this.u5o(a9s))
	{
		this.k1p();
		this.p6u.n5l = this.z7r;
		return;
	}
	if (this.u5o(r0w))
	{
		this.k1p();
		this.p6u.t6q = this.z7r;
		return;
	}
	if (this.u5o(k8e))
	{
		this.k1p();
		this.p6u.v9n = this.z7r;
		return;
	}
	if (this.u5o(t3z))
	{
		this.k1p();
		this.p6u.d4q = this.z7r;
		return;
	}
	if (this.u5o(j8a))
	{
		this.k1p();
		this.p6u.i8g = this.z7r;
		return;
	}
	if (this.u5o(t5r) || this.u5o(d2p))
	{
		this.k1p();
		this.p6u.z7x = this.z7r;
		return;
	}
	if (this.u5o(c8e))
	{
		this.k1p();
		this.p6u.z3v = this.z7r;
		return;
	}
	if (this.u5o(s6y))
	{
		this.k1p();
		this.p6u.g8m = this.z7r;
		return;
	}
	if (this.u5o(h0f))
	{
		this.k1p();
		this.p6u.u4n = this.z7r;
		return;
	}

	
	if (this.u5o(l6s))
	{
		this.k1p();
		this.p6u.b1x = this.z7r;
		return;
	}
	if (this.u5o(g1d))
	{
		this.k1p();
		this.p6u.e2f = this.z7r;
		return;
	}
	if (this.u5o(l0j))
	{
		this.k1p();
		this.p6u.b7o = this.z7r;
		return;
	}
	if (this.u5o(w0m))
	{
		this.k1p();
		this.p6u.x2m = this.z7r;
		return;
	}
	if (this.u5o(s3l))
	{
		this.k1p();
		this.p6u.f5u = this.z7r;
		return;
	}
	if (this.u5o(i6l))
	{
		this.k1p();
		this.p6u.h5t = this.z7r;
		return;
	}
	if (this.u5o(p2h))
	{
		this.k1p();
		this.p6u.i2q = this.z7r;
		return;
	}
	if (this.u5o(m4t))
	{
		this.k1p();
		this.p6u.q5u = this.z7r;
		return;
	}
	if (this.u5o(d4p))
	{
		this.k1p();
		this.p6u.q6f = this.z7r;
		return;
	}
	if (this.u5o(h9n))
	{
		this.k1p();
		this.p6u.n1v = this.z7r;
		return;
	}
	if (this.u5o(e4y))
	{
		this.k1p();
		this.p6u.m9x = this.z7r;
		return;
	}
	if (this.u5o(m0l))
	{
		this.k1p();
		this.p6u.m1d = this.z7r;
		return;
	}
	if (this.u5o(m8c))
	{
		this.k1p();
		this.p6u.l6i = this.z7r;
		return;
	}

	
	if (this.u5o(j6b))
	{
		this.k1p();
		this.p6u.p0d = this.z7r;
		return;
	}

	
	if (this.u5o(s1a))
	{
		this.k1p();
		this.p6u.c0x = this.z7r;
		return;
	}
	if (this.u5o(c2b))
	{
		this.k1p();
		this.p6u.c0x = this.z7r;
		return;
	}
	if (this.u5o(s4r))
	{
		this.k1p();
		this.p6u.v3d = this.z7r;
		return;
	}
	if (this.u5o(y8l))
	{
		this.k1p();
		this.p6u.d6s = this.z7r;
		return;
	}
	if (this.u5o(t8c))
	{
		this.k1p();
		this.p6u.d6s = this.z7r;
		return;
	}
	if (this.u5o(k3q))
	{
		this.k1p();
		this.p6u.h1v = this.z7r;
		return;
	}
	if (this.u5o(i1y))
	{
		this.k1p();
		this.p6u.f8g = this.z7r;
		return;
	}
	if (this.u5o(q8r))
	{
		this.k1p();
		this.p6u.w8i = this.z7r;
		return;
	}

	
	if (this.u5o(v0l))
	{
		this.k1p();
		this.p6u.q8c = this.z7r;
		return;
	}

	
	if (this.u5o(r8h))
	{
		this.k1p();
		this.p6u.u9c = this.z7r;
		return;
	}
	if (this.u5o(u4a))
	{
		this.k1p();
		this.p6u.s5a = this.z7r;
		return;
	}
	if (this.u5o(q9a))
	{
		this.k1p();
		this.p6u.q2o = this.z7r;
		return;
	}
	if (this.u5o(t3o))
	{
		this.k1p();
		this.p6u.e9m = this.z7r;
		return;
	}

	
	if (this.u5o(y8y))
	{
		this.k1p();
		this.p6u.l8h = this.z7r;
		return;
	}

	
	if (this.u5o(x8g))
	{
		this.k1p();
		return;
	}
	if (this.u5o(v5t))
	{
		this.k1p();
		if (this.z7r.length == 0 || this.z7r == "?")
		{
			return;
		}
		this.z3w = true;
		this.p2g = this.z7r;
		return;
	}
	if (this.u5o(x7d))
	{
		this.k1p();
		this.d7r = j3e(this.z7r, 0);
		return;
	}
  
 	if (this.u5o(p4t))
	{
		this.k1p();
		this.p6u.d5c = this.z7r;
		return;
	}

}

o5l(t0e)
{
	let e6v = new s7c();
	let x9e = t0e.substr(6, t0e.length - 6);
	let l6w = x9e.split(",");
	for (const s of l6w)
	{
		if (s.length < 5)
		{
			continue;
		}
		let b8x = g1t(s.substr(1, 2));
		let s4k = g1t(s.substr(3, 2));
		if (s[0] == 'R')
		{
			let f3z = a0s(b8x, s4k, c3j.x7q);
			e6v.add(f3z);
		}
		else if (s[0] == 'G')
		{
			let f3z = a0s(b8x, s4k, c3j.u1e);
			e6v.add(f3z);
		}
		else if (s[0] == 'Y')
		{
			let f3z = a0s(b8x, s4k, c3j.a9d);
			e6v.add(f3z);
		}
	}
	return e6v;
}

y1y(t0e)
{
	let s6p = new x6l();
	let x9e = t0e.substr(6, t0e.length - 6);
	let l6w = x9e.split(",");
	for (const s of l6w)
	{
		if (s.length < 3)
		{
			continue;
		}
 		let y0s = g1t(s.substr(1, 2));
		if (s[0] == 'R')
		{
      let m2b = c7t(y0s, c7m.m5l);
			s6p.add(m2b);
		}
		else if (s[0] == 'G')
		{
      let m2b = c7t(y0s, c7m.b6s);
			s6p.add(m2b);
		}
		else if (s[0] == 'Y')
		{
      let m2b = c7t(y0s, c7m.w7u);
			s6p.add(m2b);
		}
	}
	return s6p;
}

j4t(t0e)
{
	let x9e = t0e.substr(6, t0e.length - 6);
	let i7j = x9e.indexOf("]");
	if (i7j != -1)
	{
		let u2y = new p6t();
		let value = j3e(x9e.substr(0, i7j), 0);
		u2y.k1e(value);
		return u2y;
	}
	else
	{
		return new p6t();
	}
}


n7e(t0e, s2n)
{
	if (
		t0e.startsWith("[%cal") ||
    t0e.startsWith("[%csb") ||
		t0e.startsWith("[%csl") ||
		t0e.startsWith("[%mdl") ||
		t0e.startsWith("[%evp") ||
		t0e.startsWith("[%eval") ||
		t0e.startsWith("[%emt") ||
		t0e.startsWith("[%tqu") ||
		t0e.startsWith("[%tqu") ||
		t0e.startsWith("[%pws") ||
		t0e.startsWith("[%pth") ||
		t0e.startsWith("[%eog"))
	{
		let a6d = 0;
		{
     	let t1y = t0e.indexOf("[%cal");
			if (t1y != -1)
			{
        let v6b = t0e.indexOf("]", t1y);
				if (v6b != -1)
				{
     			let z2d = t0e.substring(t1y, v6b + 1);
					s2n.j3b = this.o5l(z2d).o0o();
					if (v6b > a6d) a6d = v6b;
				}
			}
		}
		{
     	let t1y = t0e.indexOf("[%csb");
   		if (t1y != -1)
			{
        let v6b = t0e.indexOf("]", t1y);
				if (v6b != -1)
				{
          let a7a = t0e.substring(t1y, v6b + 1);
					s2n.n3h = this.y1y(a7a).o0o();
					if (v6b > a6d) a6d = v6b;
				}
			}
		}
		{
      let t1y = t0e.indexOf("[%csl");
			if (t1y != -1)
			{
        let v6b = t0e.indexOf("]", t1y);
				if (v6b != -1)
				{
          let a7a = t0e.substring(t1y, v6b + 1);
					s2n.n3h = this.y1y(a7a).o0o();
					if (v6b > a6d) a6d = v6b;
				}
			}
		}
		{
      let t1y = t0e.indexOf("[%mdl");
			if (t1y != -1)
			{
        let v6b = t0e.indexOf("]", t1y);
				if (v6b != -1)
				{
          let f3t = t0e.substring(t1y, v6b + 1);
					s2n.u2y = this.j4t(f3t).o0o();
					if (v6b > a6d) a6d = v6b;
				}
			}
		}
		{
      let t1y = t0e.indexOf("[%evp");
			if (t1y != -1)
			{
        let v6b = t0e.indexOf("]", t1y);
				if (v6b != -1)
				{
					if (v6b > a6d) a6d = v6b;
				}
			}
		}
		{
      let t1y = t0e.indexOf("[%eval");
			if (t1y != -1)
			{
        let v6b = t0e.indexOf("]", t1y);
				if (v6b != -1)
				{
					if (v6b > a6d) a6d = v6b;
				}
			}
		}
		{
      let t1y = t0e.indexOf("[%emt");
			if (t1y = -1)
			{
        let v6b = t0e.indexOf("]", t1y);
				if (v6b != -1)
				{
					if (v6b > a6d) a6d = v6b;
				}
			}
		}
		{
      let t1y = t0e.indexOf("[%tqu");
			if (t1y != -1)
			{
        let v6b = t0e.indexOf("]", t1y);
				if (v6b != -1)
				{
					if (v6b > a6d) a6d = v6b;
				}
			}
		}
		{
      let t1y = t0e.indexOf("[%pws");
			if (t1y != -1)
			{
        let v6b = t0e.indexOf("]", t1y);
				if (v6b != -1)
				{
          s2n.f4x = true;
					if (v6b > a6d) a6d = v6b;
				}
			}
		}
		{
      let t1y = t0e.indexOf("[%pth");
			if (t1y != -1)
			{
        let v6b = t0e.indexOf("]", t1y);
				if (v6b != -1)
				{
          s2n.q0w = true;
					if (v6b > a6d) a6d = v6b;
				}
			}
		}
		{
      let t1y = t0e.indexOf("[%eog");
			if (t1y != -1)
			{
        let v6b = t0e.indexOf("]", t1y);
				if (v6b != -1)
				{
					s2n.h7b = true; 
					if (v6b > a6d) a6d = v6b;
				}
			}
		}
    s2n.o5c = t0e.substring(a6d + 1);
	}
	else
	{
		s2n.o5c = t0e;
	}
}

}

class i6u
{

constructor()
{
  this.r5k = 0;
	this.g0g = new l6g();
	this.g7g = new e5q();
}

o0o()
{
	let q8t = new i6u();
  q8t.r5k = this.r5k;
	q8t.g0g = this.g0g.o0o();
	q8t.g7g = this.g7g.o0o();
	return q8t;
}

}

class l6g
{

constructor()
{
	this.u7w = '';
	this.k9q = '';
	this.s2z = '';
	this.c4t = '';
	this.j8o = '';
	this.t0f = '';
	this.v2w = '';
	this.a8l = '';
	this.n5j = '';
  this.z0u = '';
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
	this.b1x = '';
	this.e2f = '';
	this.b7o = '';
	this.x2m = '';
	this.f5u = '';
	this.h5t = '';
	this.i2q = '';
	this.q5u = '';
	this.q6f = '';
	this.n1v = '';
	this.m9x = '';
	this.m1d = '';
	this.l6i = '';
	this.p0d = '';
	this.c0x = '';
	this.v3d = '';
	this.d6s = '';
	this.h1v = '';
	this.f8g = '';
	this.w8i = '';
	this.q8c = '';
	this.u9c = '';
	this.s5a = '';
	this.q2o = '';
	this.e9m = '';
	this.l8h = '';
  this.d5c = '';
}

o0o()
{
	let q0t = new l6g();

	q0t.u7w = this.u7w;
	q0t.k9q = this.k9q;
	q0t.s2z = this.s2z;
	q0t.c4t = this.c4t;
	q0t.j8o = this.j8o;
	q0t.t0f = this.t0f;
	q0t.v2w = this.v2w;
	q0t.a8l = this.a8l;
	q0t.n5j = this.n5j;
	q0t.z0u = this.z0u;

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

	q0t.b1x = this.b1x;
	q0t.e2f = this.e2f;
	q0t.b7o = this.b7o;
	q0t.x2m = this.x2m;
	q0t.f5u = this.f5u;
	q0t.h5t = this.h5t;
	q0t.i2q = this.i2q;
	q0t.q5u = this.q5u;
	q0t.q6f = this.q6f;
	q0t.n1v = this.n1v;
	q0t.m9x = this.m9x;
	q0t.m1d = this.m1d;
	q0t.l6i = this.l6i;

	q0t.p0d = this.p0d;

	q0t.c0x = this.c0x;
	q0t.v3d = this.v3d;
	q0t.d6s = this.d6s;
	q0t.h1v = this.h1v;
	q0t.f8g = this.f8g;
	q0t.w8i = this.w8i;

	q0t.q8c = this.q8c;

	q0t.u9c = this.u9c;
	q0t.s5a = this.s5a;
	q0t.q2o = this.q2o;
	q0t.e9m = this.e9m;

	q0t.l8h = this.l8h;
 	q0t.d5c = this.d5c;

	return q0t;
}

}


const x2b =
[
		[ y2m.u7c, 				  									"",											            "", 																	"",   ""    ],
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
		[ y2m.f0f,  			 	                "Vatican",	  			                "Vatican City", 											"va", "VAT" ],
		[ y2m.d1o,  											  "Honduras",												  "Honduras",														"hn", "HND" ],
		[ y2m.u0d,  											  "HongKong",												  "Hong Kong",													"hk", "HKG" ],
		[ y2m.v4x,  											 	"Hungary",													"Hungary",														"hu", "HUN" ],
		[ y2m.u0c,  											 	"Iceland",													"Iceland",														"is", "ISL" ],
		[ y2m.s1s,  												 	"India",														"India",															"in", "IND" ],
		[ y2m.l9m,  										 	"Indonesia",												"Indonesia",													"id", "IDN" ],
		[ y2m.g2p,  													  "Iran",														  "Iran",																"ir", "IRN" ],
		[ y2m.g0f,  													  "Iraq",														  "Iraq",																"iq", "IRQ" ],
		[ y2m.g5t,  											 	"Ireland",													"Ireland",														"ie", "IRL" ],
		[ y2m.e9d,  										 	"IsleOfMan",												"Isle of Man",												"im", "IMN" ],
		[ y2m.i2f,  												  "Israel",													  "Israel",															"il", "ISR" ],
		[ y2m.x6h,  												 	"Italy",														"Italy",															"it", "ITA" ],
		[ y2m.w9g,  											 	"Jamaica",													"Jamaica",														"jm", "JAM" ],
		[ y2m.y4l,  											  "JanMayen",								  			  "Norway", 														"x4", "XX4" ], 
		[ y2m.d6j,  												 	"Japan",														"Japan",															"jp", "JPN" ],
		[ y2m.m1q,  												  "Jersey",													  "Jersey",															"je", "JEY" ],
		[ y2m.d9x,  												  "Jordan",													  "Jordan",															"jo", "JOR" ],
		[ y2m.a3z,  										  "Kazakhstan",											  "Kazakhstan",													"kz", "KAZ" ],
		[ y2m.q4r,  												 	"Kenya",														"Kenya",															"ke", "KEN" ],
		[ y2m.i7t,  											  "Kiribati",												  "Kiribati",														"ki", "KIR" ],
		[ y2m.g9c,  										  "KoreaNorth",											  "North Korea",												"kp", "PRK" ], 
		[ y2m.q7u,  										  "KoreaSouth",	 	  								  "South Korea", 												"kr", "KOR" ], 
		[ y2m.x0v,  												  "Kosovo",													  "Kosovo",															"x5", "RKS" ],
		[ y2m.m4a,  												  "Kuwait",													  "Kuwait",															"kw", "KWT" ],
		[ y2m.g6r,  										  "Kyrgyzstan",											  "Kyrgyzstan",													"kg", "KGZ" ],
		[ y2m.p0i,  													  "Laos",														  "Laos",																"la", "LAO" ],
		[ y2m.o3j, 	 											 	"Latvia",													  "Latvia",															"lv", "LVA" ],
		[ y2m.c9s,  											 	"Lebanon",													"Lebanon",														"lb", "LBN" ],
		[ y2m.p2r, 												  "Lesotho",													"Lesotho",														"ls", "LSO" ],
		[ y2m.c8w,  											 	"Liberia",													"Liberia",														"lr", "LBR" ],
		[ y2m.e6g,  												 	"Libya",														"Libya",															"ly", "LBY" ],
		[ y2m.z3y,  								 	"Liechtenstein",										"Liechtenstein",											"li", "LIE" ],
		[ y2m.f9a,  										 	"Lithuania",												"Lithuania",													"lt", "LTU" ],
		[ y2m.t3g,  										  "Luxembourg",											  "Luxembourg",													"lu", "LUX" ],
		[ y2m.macau,  												 	"Macau",														"Macau",															"mo", "MAC" ],
		[ y2m.l3n,  	  					 	  "NorthMacedonia",	   							  "Macedonia",													"mk", "MKD" ],
		[ y2m.r3k,  										  "Madagascar",											  "Madagascar",													"mg", "MDG" ],
		[ y2m.q5v,  												  "Malawi",													  "Malawi",															"mw", "MWI" ],
		[ y2m.n1f,  											  "Malaysia",												  "Malaysia",														"my", "MYS" ],
		[ y2m.r9x,  											  "Maldives",												  "Maldives",														"mv", "MDV" ],
		[ y2m.g7h, 													 	"Mali",														  "Mali",																"ml", "MLI" ],
		[ y2m.r9e,  												 	"Malta",														"Malta",															"mt", "MLT" ],
		[ y2m.a7c,  							 	"MarshallIslands",									"Marshall Islands",										"mh", "MHL" ],
		[ y2m.k2b,  										  "Martinique",											  "Martinique",													"mq", "MTQ" ],
		[ y2m.o1c,  										  "Mauritania",											  "Mauritania",													"mr", "MRT" ],
		[ y2m.g2e,  										 	"Mauritius",												"Mauritius",													"mu", "MUS" ],
		[ y2m.f6y,  											  "Mayotte",													"Mayotte",														"yt", "MYT" ],
		[ y2m.u5i,  												  "Mexico",													  "Mexico",															"mx", "MEX" ],
		[ y2m.g8o,  										  "Micronesia",											  "Micronesia",													"fm", "FSM" ],
		[ y2m.v1d,  											 	"Moldova",													"Moldova",														"md", "MDA" ],
		[ y2m.o5h,  												  "Monaco",													  "Monaco",															"mc", "MCO" ],
		[ y2m.o2k,  											  "Mongolia",												  "Mongolia",														"mn", "MNG" ],
		[ y2m.r9w,  										  "Montenegro",											  "Montenegro",													"me", "MNE" ],
		[ y2m.q1l,  										  "Montserrat",											  "Montserrat",													"ms", "MSR" ],
		[ y2m.e2n,  												"Morocco",													"Morocco",														"ma", "MAR" ],
		[ y2m.b6o,  										  "Mozambique",											  "Mozambique",													"mz", "MOZ" ],
		[ y2m.w5o, 												  "Myanmar",													"Myanmar(Burma)", 										"mm", "MMR" ],
		[ y2m.k7f,  												"Namibia",													"Namibia",														"na", "NAM" ],
		[ y2m.w2v,  													"Nauru",														"Nauru",															"nr", "NRU" ],
		[ y2m.x3y,  													"Nepal",														"Nepal",															"np", "NPL" ],
		[ y2m.z0x,  										"TheNetherlands",	  							  "Netherlands",												"nl", "NLD" ],
		[ y2m.u9j, 						  "NetherlandsAntilles",							"Netherlands Antilles",								"an", "ANT" ],
		[ y2m.r1g,  									  "NewCaledonia",										  "New Caledonia",											"nc", "NCL" ],
		[ y2m.l8b,  										  "NewZealand",											  "New Zealand",												"nz", "NZL" ],
		[ y2m.l5e,  											"Nicaragua",												"Nicaragua",													"ni", "NIC" ],
		[ y2m.i4f,  													"Niger",														"Niger",															"ne", "NER" ],
		[ y2m.b9j,  												"Nigeria",													"Nigeria",														"ng", "NGA" ],
		[ y2m.y8v,  													  "Niue",														  "Niue",																"nu", "NIU" ],
		[ y2m.d1e,  									"NorfolkIsland",										"Norfolk", 														"nf", "NFK" ],
		[ y2m.y6k,  								"NorthernIreland",									"Northern Ireland",										"x6", "GBR" ], 
		[ y2m.s2x,  				  "NorthernMarianaIslands",					  "Northern Mariana",										"mp", "MNP" ],
		[ y2m.n0o,  												  "Norway",													  "Norway",															"no", "NOR" ],
		[ y2m.q7y,  													  "Oman",														  "Oman",																"om", "OMN" ],
		[ y2m.e1i,  											  "Pakistan",												  "Pakistan",														"pk", "PAK" ],
		[ y2m.t6j,  													"Palau",														"Palau",															"pw", "PLW" ],
		[ y2m.a9g,  											"Palestine",												"Palestine",													"ps", "PSE" ],
		[ y2m.u9r,  												  "Panama",													  "Panama",															"pa", "PAN" ],
		[ y2m.e2y,  								  "PapuaNewGuinea",									  "Papua New Guinea",										"pg", "PNG" ],
		[ y2m.y1o,  											  "Paraguay",												  "Paraguay",														"py", "PRY" ],
		[ y2m.l1s,  													  "Peru",														  "Peru",																"pe", "PER" ],
		[ y2m.q4x,  										"Philippines",											"Philippines",												"ph", "PHL" ],
		[ y2m.w7y,  											  "Pitcairn",												  "Pitcairn",														"pn", "PCN" ],
		[ y2m.t7b,  												  "Poland",													  "Poland",															"pl", "POL" ],
		[ y2m.l6q,  											  "Portugal",												  "Portugal",														"pt", "PRT" ],
		[ y2m.z3f,  										  "PuertoRico",											  "Puerto Rico",												"pr", "PRI" ],
		[ y2m.z1e,  													"Qatar",														"Qatar",															"qa", "QAT" ],
		[ y2m.q4s,  												"Reunion",													"Reunion",														"re", "REU" ],
		[ y2m.w1p,  												"Romania",													"Romania",														"ro", "ROU" ],
		[ y2m.d7w,  												  "Russia",													  "Russian Federation", 								"ru", "RUS" ],
		[ y2m.v4e,  												  "Rwanda",													  "Rwanda",															"rw", "RWA" ],
		[ y2m.c3f,  								"SaintBarthelemy",									"Saint Barthelemy", 									"bl", "BLM" ],
		[ y2m.v1h,  										"SaintHelena",											"Saint Helena", 											"sh", "SHN" ], 
		[ y2m.c7h,  								"SaintKittsNevis",									"St Kitts & Nevis", 									"kn", "KNA" ], 
		[ y2m.k0h, 											"SaintLucia",											  "Saint Lucia", 												"lc", "LCA" ], 
		[ y2m.p8b,  					"SaintMartinFrenchPart",  					"Saint Martin", 											"mf", "MAF" ],
		[ y2m.f6h,  						"SaintPierreMiquelon",							"Saint Pierre and Miquelon", 					"pm", "SPM" ], 
		[ y2m.e8s,  				  "SaintVincentGrenadines",					  "St Vincent & the Grenadines", 				"vc", "VCT" ], 
		[ y2m.h0t,  													"Samoa",														"Samoa",															"ws", "WSM" ],
		[ y2m.v7w,  											"SanMarino",												"San Marino",													"sm", "SMR" ],
		[ y2m.y6x,  								"SaoTomePrincipe",									"Sao Tome & Principe", 								"st", "STP" ],
		[ y2m.m5q,  										"SaudiArabia",											"Saudi Arabia", 											"sa", "SAU" ],
		[ y2m.h0u,  											  "Scotland",												  "Scotland",														"x7", "GBR" ],
		[ y2m.y5w,  												"Senegal",													"Senegal",														"sn", "SEN" ],
		[ y2m.v9u,  												  "Serbia",													  "Serbia(Yugoslavia)", 								"rs", "SRB" ],
		[ y2m.m2w,  										  "Seychelles",											  "Seychelles",													"sc", "SYC" ],
		[ y2m.s7m,  									  "SierraLeone",											"Sierra Leone",												"sl", "SLE" ],
		[ y2m.v4r,  										 	"Singapore",												"Singapore",													"sg", "SGP" ],
		[ y2m.m5p,						  "SintMaartenDutchPart",  					  "Sint Maarten",												"sx", "SXM" ],
		[ y2m.s6n,  											  "Slovakia",												  "Slovakia",														"sk", "SVK" ],
		[ y2m.e0v,  											  "Slovenia",												  "Slovenia",														"si", "SVN" ],
		[ y2m.a9w,  								  "SolomonIslands",									  "Solomon Islands", 										"sb", "SLB" ],
		[ y2m.u6b,  											 	"Somalia",													"Somalia",														"so", "SOM" ],
		[ y2m.w2o,  									 	"SouthAfrica",											"South Africa",												"za", "ZAF" ],
		[ y2m.t2o, "SouthGeorgiaSouthSandwichIslands", "South Georgia and South Sandwich", 	"gs", "SGS" ],
		[ y2m.g5e,  										  "SouthSudan",											  "Southern Sudan", 										"ss", "SSD" ],
		[ y2m.j6l,  									 	"SovietUnion",											"Soviet Union", 			 								"su", "URS" ],
		[ y2m.i9p, 	 												  "Spain",														"Spain",															"es", "ESP" ],
		[ y2m.b5c,  											  "SriLanka",												  "Sri Lanka",													"lk", "LKA" ],
		[ y2m.b6m,  												 	"Sudan",														"Sudan",															"sd", "SDN" ],
		[ y2m.t3h,  											  "Suriname",												  "Suriname",														"sr", "SUR" ], 
		[ y2m.b9h,  											  "Svalbard",												  "Norway", 														"sj", "SJM" ], 
		[ y2m.a7n,  										 	"Swaziland",												"Swaziland",													"sz", "SWZ" ],
		[ y2m.z0m,  												  "Sweden",													  "Sweden",															"se", "SWE" ],
		[ y2m.e6u,  									 	"Switzerland",											"Switzerland",												"ch", "CHE" ],
		[ y2m.p7b,  												 	"Syria",														"Syria",															"sy", "SYR" ],
		[ y2m.g9a,  												  "Taiwan",													  "Taiwan",															"tw", "TWN" ],
		[ y2m.z5n,  										  "Tajikistan",											  "Tajikistan",													"tj", "TJK" ],
		[ y2m.x8d,  											  "Tanzania",												  "Tanzania",														"tz", "TZA" ],
		[ y2m.g0y, 											  "Thailand",												  "Thailand",														"th", "THA" ],
		[ y2m.a5f,  										  "TimorLeste",	  									  "Timor-Leste", 												"tl", "TLS" ], 
		[ y2m.g6m, 													 	"Togo",														  "Togo",																"tg", "TGO" ],
		[ y2m.l0e,  											 	"Tokelau",													"Tokelau",														"tk", "TKL" ], 
		[ y2m.l3u,  												 	"Tonga",														"Tonga",															"to", "TON" ],
		[ y2m.y7r,  								  "TrinidadTobago",									  "Trinidad & Tobago", 									"tt", "TTO" ],
		[ y2m.x5x,  												"Tunisia",													"Tunisia",														"tn", "TUN" ],
		[ y2m.v4y,  												  "Turkey",													  "Turkey",															"tr", "TUR" ],
		[ y2m.b0f,  									  "Turkmenistan",										  "Turkmenistan",												"tm", "TKM" ],
		[ y2m.p8k,  						  "TurksCaicosIslands",							  "Turks and Caicos Islands", 					"tc", "TCA" ],
		[ y2m.a2r,  												  "Tuvalu",													  "Tuvalu", 														"tv", "TUV" ],
		[ y2m.d4y,  												  "Uganda",													  "Uganda",															"ug", "UGA" ],
		[ y2m.q6y,  											  "Ukraine",													"Ukraine",														"ua", "UKR" ],
		[ y2m.t6y,  						  "UnitedArabEmirates",							  "United Arab Emirates",								"ae", "ARE" ],
		[ y2m.e0h,  									"UnitedKingdom",										"United Kingdom(Great Britain)", 			"gb", "GBR" ], 
		[ y2m.s8u,  									  "UnitedStates",										  "United States of America", 					"us", "USA" ],
		[ y2m.k2t, "UnitedStatesMinorOutlyingIslands", "United States of America",						"um", "UMI" ],
		[ y2m.p5d,  										 		"Uruguay",													"Uruguay",														"uy", "URY" ],
		[ y2m.l4i,  									 	  "Uzbekistan",											  "Uzbekistan",													"uz", "UZB" ],
		[ y2m.y9t,  										 		"Vanuatu",													"Vanuatu",														"vu", "VUT" ],
		[ y2m.j4b,  											"Venezuela",												"Venezuela",													"ve", "VEN" ],
		[ y2m.g4b,  												"Vietnam",													"Viet Nam",														"vn", "VNM" ],
		[ y2m.d3r,  					  "VirginIslandsBritish",       			"Virgin Islands British", 						"vg", "VGB" ],
		[ y2m.t3l,  								"VirginIslandsUS",	  							"Virgin Islands US", 									"vi", "VIR" ],
		[ y2m.t1f,  													"Wales",														"Wales",															"x8", "GBR" ],
		[ y2m.i5e,  									  "WallisFutuna",										  "Wallis and Futuna",									"wf", "WLF" ],
		[ y2m.v8k,  									"WesternSahara",										"Western Sahara",											"eh", "ESH" ],
		[ y2m.p9i,  											 		"Yemen",														"Yemen",															"ye", "YEM" ],
		[ y2m.a8g,  											 		"Zaire",														"",																		"zr", "ZRN" ], 
		[ y2m.c8y,  											 	  "Zambia",													  "Zambia",															"zm", "ZMB" ],
		[ y2m.i6p,  										 	  "Zimbabwe",												  "Zimbabwe",														"zw", "ZWE" ],
];

function a0b(v0e)
{
	return x2b[v0e][2];
}

function e6a(v0e)
{
	return x2b[v0e][4];
}

function n7a(f1x)
{
	for (const v0e of x2b)
	{
		if (v0e[4] == f1x)
		{
			return v0e[0];
		}
	}
	return y2m.u7c;
}

function s0y(t9j)
{
	for (const v0e of x2b)
	{
		if (v0e[3] == t9j)
		{
			return v0e[0];
		}
	}
	return y2m.u7c;
}
class z1b
{

constructor()
{
	this.t0e = '';
}

i5y(x9e)
{
	this.t0e += x9e;
}

c3l(x9e)
{
	this.t0e += x9e + '\n';
}

a8u()
{
	this.t0e += '\n';
}

}




function j3e(i1t, l2i)
{
	let value = Number(i1t);
	if (isNaN(value))
	{
		return l2i;
	}
	else
	{
		return value;
	}
}
