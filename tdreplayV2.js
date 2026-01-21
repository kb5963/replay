const	chess = false; 

const o8u =
{
	g6v   : 0,
	q4p   : 1,
	i9a   : 2,
	a1p   : 3,
	z7r       : 4,
};

const v8z =
{
	m5l        : 0,
	u6y        : 1,
};

const	sq_1 = 0;
const s3f = 1;
const j3q = 2;
const w7i = 3;
const v1u = 4;
const e4x = 5;
const o8c = 6;
const g8e = 7;
const b6f = 8;
const i9p = 9;
const o3w = 10;
const s2n = 11;
const e5u = 12;
const o8m = 13;
const r7i = 14;
const h5g = 15;
const y3a = 16;
const m5m = 17;
const j3j = 18;
const a8o = 19;
const u4e = 20;
const q9u = 21;
const k9w = 22;
const t3i = 23;
const h6j = 24;
const j0q = 25;
const t4a = 26;
const d6p = 27;
const k8c = 28;
const c3b = 29;
const x3i = 30;
const t0h = 31;
const r6y = 32;
const q8y = 33;
const t8r = 34;
const z5u = 35;
const m5a = 36;
const o6a = 37;
const f0e = 38;
const f4p = 39;
const y3r = 40;
const d9d = 41;
const v8n = 42;
const p0j = 43;
const q4y = 44;
const g1q = 45;
const x5g = 46;
const y7c = 47;
const l9i = 48;
const a1l = 49;
const a7i = 50;

const y2e = 0;
const j3k = 1;
const f0c = 2;
const y7b = 3;
const a1y = 4;
const f8d = 5;
const b6a = 6;
const t8y = 7;
const g7n = 8;
const k7y = 9;
const l4o = 10;

const	rank_1 = 0;
const d5g = 1;
const x4d = 2;
const b6i = 3;
const u2v = 4;
const n1d = 5;
const n4s = 6;
const k5x = 7;
const c5s = 8;
const g7d = 9;
const t2c = 10;

const c4f        = 10;
const e7n       = 50;
const t5z      = 20;

const b5c =
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
	o8u.z7r,      
	o8u.z7r, 	    
	o8u.z7r, 	    
	o8u.z7r, 	    
	o8u.z7r, 	    
	o8u.z7r, 	    
	o8u.z7r, 	    
	o8u.z7r, 	    
	o8u.z7r, 	    
	o8u.z7r, 	    
	o8u.g6v,  
	o8u.g6v,  
	o8u.g6v,  
	o8u.g6v,  
	o8u.g6v,  
	o8u.g6v,  
	o8u.g6v,  
	o8u.g6v,  
	o8u.g6v,  
	o8u.g6v,  
	o8u.g6v,  
	o8u.g6v,  
	o8u.g6v,  
	o8u.g6v,  
	o8u.g6v,  
	o8u.g6v,  
	o8u.g6v,  
	o8u.g6v,  
	o8u.g6v,  
	o8u.g6v,  
];

const h0e =
[
	o8u.z7r,  
	o8u.z7r,  
	o8u.z7r,  
	o8u.z7r,  
	o8u.z7r,  
 	o8u.z7r,  
	o8u.z7r,  
	o8u.z7r,  
	o8u.z7r,  
	o8u.z7r,  
	o8u.z7r,  
	o8u.z7r,  
	o8u.z7r,  
	o8u.z7r,  
	o8u.z7r,  
	o8u.z7r,  
	o8u.z7r,  
	o8u.z7r,  
	o8u.z7r,  
	o8u.z7r,  
	o8u.z7r,  
	o8u.z7r,  
	o8u.z7r,  
	o8u.z7r,  
	o8u.z7r,  
	o8u.z7r,  
	o8u.z7r,  
	o8u.z7r,  
	o8u.z7r,  
	o8u.z7r,  
	o8u.z7r,  
	o8u.z7r,  
	o8u.z7r,  
	o8u.z7r,  
	o8u.z7r,  
	o8u.z7r,  
	o8u.z7r,  
	o8u.z7r,  
	o8u.z7r,  
	o8u.z7r,  
	o8u.z7r,  
	o8u.z7r,  
	o8u.z7r,  
	o8u.z7r,  
	o8u.z7r,  
	o8u.z7r,  
	o8u.z7r,  
	o8u.z7r,  
	o8u.z7r,  
	o8u.z7r,  
];

const h0i =
[
	sq_1,  s3f,  j3q,  w7i,  v1u,
	e4x,  o8c,  g8e,  b6f,  i9p,
	o3w, s2n, e5u, o8m, r7i,
	h5g, y3a, m5m, j3j, a8o,
	u4e, q9u, k9w, t3i, h6j,
	j0q, t4a, d6p, k8c, c3b,
	x3i, t0h, r6y, q8y, t8r,
	z5u, m5a, o6a, f0e, f4p,
	y3r, d9d, v8n, p0j, q4y,
	g1q, x5g, y7c, l9i, a1l,
];

const u3g =
[
	y2e,
  j3k,
  f0c,
  y7b,
  a1y,
  f8d,
  b6a,
  t8y,
  g7n,
  k7y,
];

const x0c =
[
	rank_1,
  d5g,
  x4d,
  b6i,
  u2v,
  n1d,
  n4s,
  k5x,
  c5s,
  g7d,
];

function j6e(x9m)
{
	return x9m == o8u.i9a ||
    x9m == o8u.a1p;
}

function c1n(x9m)
{
	return x9m == o8u.g6v ||
    x9m == o8u.q4p;
}

function w6d(x9m)
{
	return x9m == o8u.g6v || x9m == o8u.i9a;
}

function l1y(x9m)
{
	return x9m == o8u.q4p || x9m == o8u.a1p;
}

function r7j(c6b)
{
	if (c6b == a7i)
	{
		return a7i;
	}
	else
	{
		return e7n - c6b - 1;
	}
}

const y5s =
[
	j3k,	y7b,	f8d,	t8y,	k7y,
	y2e,	f0c,	a1y,	b6a,	g7n,
	j3k,	y7b,	f8d,	t8y,	k7y,
	y2e,	f0c,	a1y,	b6a,	g7n,
	j3k,	y7b,	f8d,	t8y,	k7y,
	y2e,	f0c,	a1y,	b6a,	g7n,
	j3k,	y7b,	f8d,	t8y,	k7y,
	y2e,	f0c,	a1y,	b6a,	g7n,
	j3k,	y7b,	f8d,	t8y,	k7y,
	y2e,	f0c,	a1y,	b6a,	g7n,
];

function b8f(c6b)
{
	return y5s[c6b];
}

const a4p =
[
	g7d, g7d,	g7d, g7d,	g7d,
	c5s,	 c5s,	c5s,	 c5s,	c5s,
	k5x,	 k5x,	k5x,	 k5x,	k5x,
	n4s,	 n4s,	n4s,	 n4s,	n4s,
	n1d,	 n1d,	n1d,	 n1d,	n1d,
	u2v,	 u2v,	u2v,	 u2v,	u2v,
	b6i,	 b6i,	b6i,	 b6i,	b6i,
	x4d,	 x4d,	x4d,	 x4d,	x4d,
	d5g,	 d5g,	d5g,	 d5g,	d5g,
	rank_1,	 rank_1,	rank_1,	 rank_1,	rank_1,
];

function m0x(c6b)
{
	return a4p[c6b];
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

function f1h(a, b)
{
	for (let i = 0; i < b.length; i++)
	{
		a[i] = b[i];
	}
}

function z9w(m6m, x9m)
{
	let y2h = 0;
	for (const n9s of m6m)
	{
		if (n9s == x9m)
		{
			y2h++;
		}
	}
	return y2h;
}

function g1t(i1t)
{
 	let n9s = j3e(i1t, 0);
	if (n9s <= 0)
	{
		return a7i;
	}
	else
	{
		n9s--; 
		if (n9s >= sq_1 && n9s <= a1l)
		{
			return n9s;
		}
		else
		{
			return a7i;
		}
	}
}

function i4u(c6b)
{
 	let i1t = '';
	i1t = (c6b + 1);
  return i1t;
}







function b5u(c6b)
{
	return c6b >= g1q;
}

function f9y(c6b)
{
	return c6b <= v1u;
}

function g5c(f6u)
{
	return !(f6u % 2);
}

class d5f
{

constructor()
{
}

p9r()
{
	let t9p = new d5f();
  return Object.assign(t9p, this);
}

}


class z4m
{

constructor()
{
  this.g2t = Array(e7n).fill(o8u.z7r);
 	this.x5x = v8z.m5l;
 	this.t1y = new d5f();
 	this.e5k();
}

p9r()
{
	let q8t = new z4m();
	f1h(q8t.g2t, this.g2t);
	q8t.x5x = this.x5x;
  q8t.t1y = this.t1y.p9r();
	return q8t;
}

e2m(b1i)
{
	return this.x5x == b1i.x5x &&
		x0s(this.g2t, b1i.g2t);
}

i5u(b1i)
{
	return !this.e2m(b1i);
}

l7d()
{
 	f1h(this.g2t, b5c);
 	this.x5x = v8z.m5l;
}

m5x()
{
	return this.x5x == v8z.m5l && this.c4n();
}

c4n()
{
	return x0s(this.g2t, b5c);
}

e5k()
{
	this.g2t.fill(o8u.z7r);
	this.x5x = v8z.m5l;
}

a4g()
{
	return this.x5x == v8z.m5l && this.i4z();
}

i4z()
{
	return this.g2t.every(o8u.z7r);
}

m6m()
{
  return this.g2t.slice();
}

t9a(c6b)
{
	return this.g2t[c6b];
}

q0e(c6b, x9m)
{
	this.g2t[c6b] = x9m;
}

h8a()
{
	this.x5x = v8z.m5l;
}

v9u()
{
	this.x5x = v8z.u6y;
}

f1c()
{
	if (this.x5x == v8z.m5l)
	{
		this.x5x = v8z.u6y;
	}
	else
	{
		this.x5x = v8z.m5l;
	}
}

m0s()
{
	return this.x5x == v8z.m5l;
}

n3a()
{
	return this.x5x == v8z.u6y;
}

j6o(c6b)
{
	return this.g2t[c6b] == o8u.z7r;
}

c1n(c6b)
{
	let x9m = this.g2t[c6b];
	return x9m == o8u.g6v ||
    x9m == o8u.q4p;
}

j6e(c6b)
{
	let x9m = this.g2t[c6b];
	return x9m == o8u.i9a ||
    x9m == o8u.a1p;
}

e8p(c6b)
{
  let x9m = this.g2t[c6b];
	return x9m == o8u.g6v;
}

y7j(c6b)
{
  let x9m = this.g2t[c6b];
	return x9m == o8u.q4p;
}

s3v(c6b)
{
  let x9m = this.g2t[c6b];
	return x9m == o8u.i9a;
}

u0g(c6b)
{
  let x9m = this.g2t[c6b];
	return x9m == o8u.a1p;
}

c2k()
{
  let y2h = 0;
	for (const c6b of h0i)
	{
    if (this.c1n(c6b))
		{
			y2h++;
		}
	}
	return y2h;
}

c1d()
{
  let y2h = 0;
	for (const c6b of h0i)
	{
    if (this.j6e(c6b))
		{
			y2h++;
		}
	}
	return y2h;
}

c8d(z0h)
{
  this.t1y = z0h.p9r();
}

z0h()
{
  return this.t1y.p9r();
}

v0o(u0y)
{
	if (u0y.r2t())
	{
    this.f1c();
		return;
	}
	this.q0e(u0y.c6i, o8u.z7r);
	this.q0e(u0y.q8c, u0y.s4k);
	for (const c6b of u0y.r4g)
	{
		this.q0e(c6b, o8u.z7r);
	}
	this.f1c();
}

y9l(u0y)
{
	if (u0y.r2t())
	{
    this.f1c();
		return;
	}
	this.q0e(u0y.q8c, o8u.z7r);
	this.q0e(u0y.c6i, u0y.b8x);
	let i = 0;
	for (const c6b of u0y.r4g)
	{
		this.q0e(c6b, u0y.o7g[i]);
    i++;
	}
	this.f1c();
}

}
const z8p  = 0;
const e0z   = 1;
const u7l  = z8p;

function q7i()
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
	this.n6p = new q5w();
	this.r8e = null;
}

p9r()
{
	let j0m = new g8w();
	j0m.n6p = this.n6p.p9r();
	j0m.r8e = null;
	if (this.r8e)
	{
		j0m.r8e = this.r8e.p9r();
	}
	return j0m;
}

e2m(b1i)
{
	if (this.n6p.i5u(b1i))
	{
		return false;
	}
	return true;
}

i5u(b1i)
{
	return !this.e2m(b1i);
}

z7r()
{
	return this.n6p.z7r();
}

c6i()
{
	return this.n6p.c6i;
}

q8c()
{
	return this.n6p.q8c;
}

b8x()
{
	return this.n6p.b8x;
}

s4k()
{
	return this.n6p.s4k;
}

r4g()
{
  return this.n6p.r4g.slice();
}

o7g()
{
  return this.n6p.o7g.slice();
}

f7z()
{
	return this.n6p.f7z();
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

a0s()
{
	if (this.r8e == null)
	{
		this.r8e = new v0r();
	}
}

v3g()
{
	if (this.r8e)
	{
		if (this.r8e.z7r())
		{
			this.k6f();
		}
	}
}

z9l()
{
	return this.r8e != null;
}

k6f()
{
	this.r8e = null;
}

n4z(a7d)
{
	this.a0s();
	this.r8e = a7d.p9r();
}

m3w()
{
	return this.r8e;
}

c4b(b1i)
{
	if (this.r8e && !b1i.r8e)
	{
		return false;
	}
	if (!this.r8e && b1i.r8e)
	{
		return false;
	}
	if (!this.r8e && !b1i.r8e)
	{
		return true;
	}
	return this.r8e.e2m(b1i.r8e);
}

h2u()
{
	if (this.r8e)
	{
		this.r8e.z8s = '';
		this.v3g();
	}
}

h1t()
{
	if (this.r8e)
	{
		return this.r8e.z8s.length != 0;
	}
	else
	{
		return false;
	}
}

z8s()
{
	if (this.r8e)
	{
		return this.r8e.z8s;
	}
	else
	{
		return '';
	}
}

y5w(a1z)
{
	this.a0s();
	this.r8e.z8s = a1z;
	this.v3g();
}

r8o()
{
	if (this.r8e)
	{
		this.r8e.q9g = '';
		this.v3g();
	}
}

e4g()
{
	if (this.r8e)
	{
		return this.r8e.q9g.length != 0;
	}
	else
	{
		return false;
	}
}

q9g()
{
	if (this.r8e)
	{
		return this.r8e.q9g;
	}
	else
	{
		return '';
	}
}

z7d(a1z)
{
	this.a0s();
	this.r8e.q9g = a1z;
	this.v3g();
}

e0p()
{
	if (this.r8e)
	{
		this.r8e.j3g = n8u.j0j;
		this.v3g();
	}
}

e7m()
{
	if (this.r8e)
	{
		return this.r8e.j3g != n8u.j0j;
	}
	else
	{
		return false;
	}
}

j3g()
{
	if (this.r8e)
	{
		return this.r8e.j3g;
	}
	else
	{
		return n8u.j0j;
	}
}

b1f(j3g)
{
	this.a0s();
	this.r8e.j3g = j3g;
	this.v3g();
}

m0o()
{
	if (this.r8e)
	{
		this.r8e.style = c8l.j0j;
		this.v3g();
	}
}

j5x()
{
	if (this.r8e)
	{
		return this.r8e.style != c8l.j0j;
	}
	else
	{
		return false;
	}
}

style()
{
	if (this.r8e)
	{
		return this.r8e.style;
	}
	else
	{
		return c8l.j0j;
	}
}

a1f(style)
{
	this.a0s();
	this.r8e.style = style;
	this.v3g();
}

k4d()
{
	if (this.r8e)
	{
		this.r8e.n9s = b4c.j0j;
		this.v3g();
	}
}

o6h()
{
	if (this.r8e)
	{
		return this.r8e.n9s != b4c.j0j;
	}
	else
	{
		return false;
	}
}

n9s()
{
	if (this.r8e)
	{
		return this.r8e.n9s;
	}
	else
	{
		return b4c.j0j;
	}
}

i6z(n9s)
{
	this.a0s();
	this.r8e.n9s = n9s;
	this.v3g();
}

z7f()
{
	if (this.r8e)
	{
		this.r8e.z4y = o9q.j0j;
		this.v3g();
	}
}

a5b()
{
	if (this.r8e)
	{
		return this.r8e.z4y != o9q.j0j;
	}
	else
	{
		return false;
	}
}

z4y()
{
	if (this.r8e)
	{
		return this.r8e.z4y;
	}
	else
	{
		return o9q.j0j;
	}
}

y7q(z4y)
{
	this.a0s();
	this.r8e.z4y = z4y;
	this.v3g();
}

t1d()
{
  
}

i1g()
{
	if (this.r8e)
	{
 		if (this.r8e.z8s.length != 0)
    {
      let x3c = this.r8e.z8s.indexOf("\x5b\x23\x5d");
      return x3c != -1;
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

u7k()
{
  
}

y9e()
{
	if (this.r8e)
	{
		this.r8e.q4x = false;
		this.v3g();
	}
}

v8d()
{
	if (this.r8e)
	{
		return this.r8e.q4x;
	}
	else
	{
		return false;
	}
}

n5g()
{
	this.a0s();
	this.r8e.q4x = true;
	this.v3g();
}

g4l()
{
	if (this.r8e)
	{
		this.r8e.z8f = false;
		this.v3g();
	}
}

v4k()
{
	if (this.r8e)
	{
		return this.r8e.z8f;
	}
	else
	{
		return false;
	}
}

w5c()
{
	this.a0s();
	this.r8e.z8f = true;
	this.v3g();
}

y3q()
{
	if (this.r8e)
	{
		this.r8e.e6v.c4m();
		this.r8e.a7a.c4m();
		this.v3g();
	}
}

h9g()
{
	if (this.r8e)
	{
		return this.z4a() || this.k6j();
	}
	else
	{
		return false;
	}
}

h1g()
{
	if (this.r8e)
	{
		this.r8e.e6v.c4m();
		this.v3g();
	}
}

z4a()
{
	if (this.r8e)
	{
		return !this.r8e.e6v.z7r();
	}
	else
	{
		return false;
	}
}

e6v()
{
	if (this.r8e)
	{
		return this.r8e.e6v.p9r();
	}
	else
	{
		return new s7c();
	}
}

b2e(e6v)
{
	this.a0s();
	this.r8e.e6v = e6v.p9r();
	this.v3g();
}

m8v()
{
	if (this.r8e)
	{
		this.r8e.a7a.c4m();
		this.v3g();
	}
}

k6j()
{
	if (this.r8e)
	{
		return !this.r8e.a7a.z7r();
	}
	else
	{
		return false;
	}
}

a7a()
{
	if (this.r8e)
	{
		return this.r8e.a7a.p9r();
	}
	else
	{
		return new x6l();
	}
}

s3z(a7a)
{
	this.a0s();
	this.r8e.a7a = a7a.p9r();
	this.v3g();
}

m1e()
{
	if (this.r8e)
	{
		this.r8e.n4n.v7r();
		this.v3g();
	}
}

x8q()
{
	if (this.r8e)
	{
		return this.r8e.n4n.g6i();
	}
	else
	{
		return false;
	}
}

n4n()
{
	if (this.r8e)
	{
		return this.r8e.n4n.p9r();
	}
	else
	{
		return new p6t();
	}
}

h7l(n4n)
{
	this.a0s();
	this.r8e.n4n = n4n.p9r();
	this.v3g();
}

j7v(u1n)
{
	this.n6p = u1n.p9r();
	this.r8e = null;
}

u1n()
{
	let o2c = new q5w();
  return Object.assign(o2c, this.n6p);
}

}

function l9h(u1n)
{
  let h2o = new g8w();
  h2o.j7v(u1n);
  return h2o;
}
class q5w
{

constructor()
{
	this.c6i = a7i;
	this.b8x = o8u.z7r;
	this.q8c = a7i;
	this.s4k = o8u.z7r;
	this.r4g = [];
	this.o7g = [];
	this.m4u = [];
}

p9r()
{
	let o2c = new q5w();
	o2c.c6i = this.c6i;
	o2c.b8x = this.b8x;
	o2c.q8c = this.q8c;
	o2c.s4k = this.s4k;
	o2c.r4g = this.r4g.slice();
	o2c.o7g = this.o7g.slice();
	o2c.m4u = this.m4u.slice();
	return o2c;
}

e2m(b1i)
{
	if (
		this.c6i != b1i.c6i ||
		this.b8x != b1i.b8x ||
		this.q8c != b1i.q8c ||
		this.s4k != b1i.s4k)
	{
		return false;
	}
	else
	{
		for (const c6b of this.r4g)
		{
			let r9f = b1i.r4g.find(function(z8j){ return z8j == c6b; });
			if (r9f === undefined)
			{
				return false;
			}
		}
		for (const x9m of this.o7g)
		{
			let r9f = b1i.o7g.find(function(z8j){ return z8j == x9m; });
			if (r9f === undefined)
			{
				return false;
			}
		}
		return true;
	}
}

i5u(b1i)
{
	return !this.e2m(b1i);
}

z7r()
{
	return this.c6i == a7i;
}

c1n()
{
 	return this.b8x == o8u.g6v ||
		this.b8x == o8u.q4p;
}

j6e()
{
 	return this.b8x == o8u.i9a ||
		this.b8x == o8u.a1p;
}

p0w()
{
  return this.r4g.length > 0;
}

v6u()
{
	return this.b8x != this.s4k;
}

r2t()
{
	return this.c6i == a7i;
}

y7d(c6b)
{
	let r9f = this.r4g.find(function(z8j){ return z8j == c6b; });
	return (r9f !== undefined);
}


h0g(y0s)
{
	for (const c6b of y0s)
	{
		let r9f = this.r4g.find(function(z8j){ return z8j == c6b; });
		if (r9f === undefined)
		{
			return false;
		}
	}
	return true;
}


n1z(c6b)
{
	let r9f = this.m4u.find(function(z8j){ return z8j == c6b; });
	return (r9f !== undefined);
}

o4r(y0s)
{
	for (const c6b of y0s)
	{
		let r9f = this.m4u.find(function(z8j){ return z8j == c6b; });
		if (r9f === undefined)
		{
			return false;
		}
	}
	return true;
}

f7z()
{
  return this.r4g.length;
}

}

const e5b =
[
	a7i, a7i,	a7i, a7i,	a7i, a7i, a7i, a7i,	a7i, a7i, a7i, a7i, a7i, a7i,
	a7i, a7i,	a7i, a7i, a7i, a7i,	a7i, a7i,	a7i, a7i,	a7i, a7i,	a7i, a7i,
	a7i, a7i,	a7i, sq_1,	a7i, s3f,	a7i, j3q,	a7i, w7i,	a7i, v1u,	a7i, a7i,
	a7i, a7i,	e4x,  a7i,	o8c,  a7i,	g8e,  a7i,	b6f,  a7i,	i9p, a7i,	a7i, a7i,
	a7i, a7i,	a7i, o3w,	a7i, s2n,	a7i, e5u,	a7i, o8m,	a7i, r7i,	a7i, a7i,
	a7i, a7i,	h5g, a7i,	y3a, a7i,	m5m, a7i,	j3j, a7i,	a8o, a7i,	a7i, a7i,
	a7i, a7i,	a7i, u4e,	a7i, q9u,	a7i, k9w,	a7i, t3i,	a7i, h6j,	a7i, a7i,
	a7i, a7i, j0q, a7i,	t4a, a7i,	d6p, a7i,	k8c, a7i,	c3b, a7i,	a7i, a7i,
	a7i, a7i,	a7i, x3i,	a7i, t0h,	a7i, r6y,	a7i, q8y,	a7i, t8r,	a7i, a7i,
	a7i, a7i,	z5u, a7i,	m5a, a7i,	o6a, a7i,	f0e, a7i,	f4p, a7i,	a7i, a7i,
	a7i, a7i,	a7i, y3r,	a7i, d9d,	a7i, v8n,	a7i, p0j,	a7i, q4y,	a7i, a7i,
	a7i, a7i,	g1q, a7i,	x5g, a7i,	y7c, a7i,	l9i, a7i,	a1l, a7i,	a7i, a7i,
	a7i, a7i,	a7i, a7i,	a7i, a7i,	a7i, a7i,	a7i, a7i,	a7i, a7i,	a7i, a7i,
	a7i, a7i,	a7i, a7i,	a7i, a7i,	a7i, a7i,	a7i, a7i,	a7i, a7i,	a7i, a7i,
];

const j8m =
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
	this.z2g = [];
  this.k4u = Array(e7n).fill(a7i);
  this.y7s = Array(e7n).fill(a7i);
  this.l4p = Array(e7n).fill(o8u.z7r);
  this.g4q = Array(e7n).fill(false);
  this.g2e = 0;
	this.h1s = new z4m();
	this.p4e = 0;
	this.p1d = a7i;
	this.r3f = o8u.z7r;
	this.q9c = 0;
	this.d1e = 0;
	this.w2o = 0;
	this.c0x = 0;
	this.d4y = false;
}

a3q(l6q)
{
	this.h1s = l6q.p9r();
	this.g4q.fill(false);
  this.g2e = 0;
	let s1m = 14;
	if (this.h1s.m0s())
	{
		this.q9c = -(s1m + 1);
		this.d1e = -(s1m - 1);
		this.w2o = (s1m - 1);
		this.c0x = (s1m + 1);
	}
	else
	{
		this.q9c = (s1m + 1);
		this.d1e = (s1m - 1);
		this.w2o = -(s1m - 1);
		this.c0x = -(s1m + 1);
	}
}

a0e(c6i)
{
 	this.p1d = c6i;
	this.r3f = this.h1s.t9a(this.p1d);
	this.p4e = 0;
	if (
		(this.h1s.m0s() && this.r3f == o8u.g6v) ||
		(this.h1s.n3a() && this.r3f == o8u.i9a))
	{
		this.u4j(this.p1d);
	}
	else if (
		(this.h1s.m0s() && this.r3f == o8u.q4p) ||
		(this.h1s.n3a() && this.r3f == o8u.a1p))
	{
		this.d5l(this.p1d);
	}
}

u4j(c6b)
{
 	this.t0g(c6b, this.q9c);
	this.t0g(c6b, this.d1e);
}

t0g(c6i, y0l)
{
	let q8c = e5b[j8m[c6i] + y0l];
	if (q8c != a7i)
  {
    if (this.h1s.j6o(q8c))
  	{
	  	this.v9t(q8c);
  	}
  }
}

d5l(c6i)
{
	this.h6y(c6i, this.q9c);
	this.h6y(c6i, this.d1e);
	this.h6y(c6i, this.c0x);
	this.h6y(c6i, this.w2o);
}

h6y(c6i, y0l)
{
	let r6e = y0l;
	do
	{
		let q8c = e5b[j8m[c6i] + r6e];
		if (q8c == a7i)
    {
      break;
    }
    if (!this.h1s.j6o(q8c))
		{
			break;
		}
		this.v9t(q8c);
		r6e += y0l;
	} while (true);
}

l0g(c6i)
{
	this.p1d = c6i;
	this.r3f = this.h1s.t9a(this.p1d);
	this.p4e = 0;
	let x9m = this.h1s.t9a(this.p1d);
	if ((this.h1s.m0s() && this.r3f == o8u.g6v) ||
		(this.h1s.n3a() && this.r3f == o8u.i9a))
	{
		this.h1s.q0e(this.p1d, o8u.z7r);
		this.s3w(this.p1d);
	}
	else if (
		(this.h1s.m0s() && this.r3f == o8u.q4p) ||
		(this.h1s.n3a() && this.r3f == o8u.a1p))
	{
		this.h1s.q0e(this.p1d, o8u.z7r);
		this.p7x(this.p1d);
	}
	this.h1s.q0e(this.p1d, x9m);
}

s3w(c6i)
{
	let l8d = true;
	if (this.s0f(c6i, this.q9c))
	{
		l8d = false;
	}
	if (this.s0f(c6i, this.d1e))
	{
		l8d = false;
	}
	if (this.s0f(c6i, this.c0x))
	{
		l8d = false;
	}
	if (this.s0f(c6i, this.w2o))
	{
		l8d = false;
	}
	if (l8d)
	{
		this.f5p(c6i);
	}
}

s0f(c6i, y0l)
{
	let q2h = e5b[j8m[c6i] + y0l];
	if (q2h == a7i)
	{
		return false;
	}
	let q8c = e5b[j8m[c6i] + 2 * y0l];
	if (q8c == a7i)
	{
		return false;
	}
	if (!this.h1s.j6o(q8c))
	{
		return false;
	}
	if (this.g4q[q2h])
	{
		return false;
	}
	if (this.r3f == o8u.g6v)
	{
		if (!this.h1s.j6e(q2h))
		{
			return false;
		}
	}
	else
	{
		if (!this.h1s.c1n(q2h))
		{
			return false;
		}
	}
	this.k4u[this.p4e] = q2h;
	this.l4p[this.p4e] = this.h1s.t9a(q2h);
	this.y7s[this.p4e] = q8c;
	this.p4e++;
	let x9m = this.h1s.t9a(q2h);
	this.g4q[q2h] = true;
	this.s3w(q8c);
	this.g4q[q2h] = false;
	this.h1s.q0e(q2h, x9m);
	this.p4e--;
	return true;
}

p7x(c6i)
{
	let l8d = true;
	if (this.l3j(c6i, this.q9c))
	{
		l8d = false;
	}
	if (this.l3j(c6i, this.d1e))
	{
		l8d = false;
	}
	if (this.l3j(c6i, this.c0x))
	{
		l8d = false;
	}
	if (this.l3j(c6i, this.w2o))
	{
		l8d = false;
	}
	if (l8d)
	{
		this.f5p(c6i);
	}
}

l3j(s3a, y0l)
{
	let q2h = a7i;
	let r6e = y0l;
	do
	{
		q2h = e5b[j8m[s3a] + r6e];
		if (q2h == a7i)
		{
			return false;
		}
		if (this.g4q[q2h])
		{
			return false;
		}
		if (this.r3f == o8u.q4p)
		{
			if (this.h1s.j6e(q2h))
			{
				break;
			}
		}
		else
		{
			if (this.h1s.c1n(q2h))
			{
				break;
			}
		}
		if (!this.h1s.j6o(q2h))
		{
			return false;
		}
		r6e += y0l;
	} while (true);
	let e6z = false;
	do
	{
		r6e += y0l;
		let q8c = e5b[j8m[s3a] + r6e];
		if (q8c == a7i)
    {
      return e6z;
    }
    if (!this.h1s.j6o(q8c))
		{
			return e6z;
		}
		this.k4u[this.p4e] = q2h;
		this.l4p[this.p4e] = this.h1s.t9a(q2h);
		this.y7s[this.p4e] = q8c;
		this.p4e++;
		let d2s = this.h1s.t9a(q2h);
		this.g4q[q2h] = true;
		this.p7x(q8c);
		this.g4q[q2h] = false;
		this.h1s.q0e(q2h, d2s);
		this.p4e--;
		e6z = true;
	} while (true);
}

f5p(q8c)
{
	if (!this.p4e)
	{
		return;
	}
	if (this.p4e >= this.g2e)
	{
		if (this.p4e > this.g2e)
		{
      this.z2g.length = 0;
		}
		this.v9t(q8c);
	}
}

v9t(q8c)
{
	let u0y = new q5w();
	u0y.c6i = this.p1d;
	u0y.q8c = q8c;
	u0y.b8x = this.r3f;
	u0y.s4k = u0y.b8x;
	if (u0y.b8x == o8u.g6v)
	{
		if (f9y(u0y.q8c))
		{
			u0y.s4k = o8u.q4p;
		}
	}
	else if (u0y.b8x == o8u.i9a)
	{
		if (b5u(u0y.q8c))
		{
			u0y.s4k = o8u.a1p;
		}
	}
	for (let i = 0; i < this.p4e; i++)
	{
		u0y.r4g.push(this.k4u[i]);
		u0y.o7g.push(this.l4p[i]);
	}
	for (let i = 0; i < this.p4e - 1; i++)
	{
		u0y.m4u.push(this.y7s[i]);
	}

	if (this.d4y)
	{
		if (this.p4e >= 2)
		{
			let r9f = this.z2g.find(function(z8j)
			{
				if (z8j.e2m(u0y))
				{
					return true;
				}
			});
			if (r9f != undefined)
			{
				return;
			}
		}
	}
	this.g2e = u0y.f7z();
	this.z2g.push(u0y);
}

v3n(l6q, t9h)
{
	this.a3q(l6q);
	this.d4y = t9h;
	this.z2g.length = 0;

	for (const c6b of h0i)
	{
		this.l0g(c6b);
	}

	if (this.z2g.length === 0)
	{
		for (const c6b of h0i)
		{
			this.a0e(c6b);
		}
	}
	return this.z2g;
}

y6a(l6q)
{
	this.a3q(l6q);
	this.d4y = true;
	this.z2g.length = 0;

	for (const c6b of h0i)
	{
		this.l0g(c6b);
	}
	return this.z2g.length > 0;
}

g5o(l6q, q2h)
{
	this.a3q(l6q);
	this.d4y = true;
	this.z2g.length = 0;

	for (const c6b of h0i)
	{
		this.l0g(c6b);
	}
	for (const u1n of this.z2g)
	{
		if (u1n.y7d(q2h))
		{
			return true;
		}
	}
	return false;
}

m4u(l6q, u0y)
{
	this.a3q(l6q);
	this.d4y = true;
	this.z2g.length = 0;

	this.l0g(u0y.c6i);
	let j6a = [];
  let r4g = u0y.r4g;
	for (const q2h of r4g)
	{
		j6a.push(q2h);
	}
	for (const u1n of this.z2g)
	{
		if (u1n.q8c != u0y.q8c)
		{
			continue;
		}
		if (!u1n.h0g(j6a))
		{
			continue;
		}
		return u1n.m4u.slice();
	}
	return [];
}

g5t(l6q, u0y)
{
	this.a3q(l6q);
	this.d4y = true;
	this.z2g.length = 0;

	this.l0g(u0y.c6i);
	let g9x = 0;
	for (const u1n of this.z2g)
	{
		if (u1n.q8c == u0y.q8c)
		{
			g9x++;
		}
	}
	return g9x > 1;
}

} 


function g8j(l6q)
{
	let l3w = new w9y();
	return l3w.v3n(l6q, true);
}

function f7p(l6q, c6i)
{
	let l3w = new w9y();
	let p2a = l3w.v3n(l6q, true);
	let c9n = [];
	for (const u1n of p2a)
	{
		if (u1n.c6i == c6i)
		{
			c9n.push(u1n);
		}
	}
	return c9n;
}

function a0g(l6q, q8c)
{
	let l3w = new w9y();
	let p2a = l3w.v3n(l6q, true);
	let q5m = [];
	for (const u1n of p2a)
	{
		if (u1n.q8c == q8c)
		{
			q5m.push(u1n);
		}
	}
	return q5m;
}

function j3z(l6q, c6i, q8c)
{
	let l3w = new w9y();
	let p2a = l3w.v3n(l6q, true);
	let k0u = [];
	for (const u1n of p2a)
	{
		if (u1n.c6i == c6i && u1n.q8c == q8c)
		{
			k0u.push(u1n);
		}
	}
	return k0u;
}

function i5o(l6q, c6i, q8c, r4g)
{
	let l3w = new w9y();
	let p2a = l3w.v3n(l6q, true);
	let v3n = [];
	for (const u1n of p2a)
	{
		if (u1n.c6i != c6i)
		{
			continue;
		}
		if (u1n.q8c != q8c)
		{
			continue;
		}
		if (!u1n.y7d(r4g))
		{
			continue;
		}
		v3n.push(u1n);
	}
	return v3n;
}

function f6e(l6q, c6i, q8c, m4u)
{
	let l3w = new w9y();
	let p2a = l3w.v3n(l6q, false);
	let v3n = [];
	for (const u1n of p2a)
	{
		if (u1n.c6i != c6i)
		{
			continue;
		}
		if (u1n.q8c != q8c)
		{
			continue;
		}
		if (!u1n.o4r(m4u))
		{
			continue;
		}
		
		let k6q = false;
		for (const m of v3n)
		{
			if (m.e2m(u0y))
			{
				k6q = true;
				break;
			}
		}
		if (!k6q)
		{
			v3n.push(u1n);
		}
	}
	return v3n;
}

function q3e(l6q, u0y)
{
	let l3w = new w9y();
	return l3w.m4u(l6q, u0y);
}

function y6a(l6q)
{
	let l3w = new w9y();
	return l3w.y6a(l6q);
}

function g5o(l6q, q2h)
{
	let l3w = new w9y();
	return l3w.g5o(l6q, q2h);
}

function g5t(l6q, u0y)
{
	let l3w = new w9y();
	return l3w.g5t(l6q, u0y);
}

function x8e(l6q)
{
	let l3w = new w9y();
	if (l3w.y6a(l6q))
	{
		return false;
	}
	let e7g = l6q.p9r();
	e7g.f1c();
	return !l3w.y6a(e7g);
}

function f0a()
{
}
/* voor dammen niet nodig */
const i8o =
{
  j0j : 0,  
	u7c : 1,
	b6n : 2,
};

function m9t(l6q, u0y)
{
 	let i1t = '';
	if (u0y.z7r())
	{
		i1t += "\x2d\x2d";
	}
  else
  {
    i1t = i4u(u0y.c6i);
    if (u0y.r4g.length > 0)
    {
      i1t += 'x';
    }
    else
    {
      i1t += '-';
    }
    if (u0y.r4g.length > 2)
    {
      if (g5t(l6q, u0y))
      {
        let m4u = q3e(l6q, u0y);
        for (const c6b of m4u)
        {
          i1t += i4u(c6b);
          i1t += 'x';
        }
        i1t += i4u(u0y.q8c);
      }
      else
      {
        i1t += i4u(u0y.q8c);
      }
    }
    else
    {
      i1t += i4u(u0y.q8c);
    }
  }
	return i1t;
}


class p9o
{

constructor()
{
	this.height = 0;
	this.width = 0;
	this.o7l = 0;
}

}

function j4o(z4d,
  i2w,
  x2h,
  coordinate,
  coordinatesType,
  c5v,
  e5i,
  marginSize) 
{
 	let l3u = (coordinatesType == l8m.h7i ||
		coordinatesType == l8m.q8f ||
		coordinatesType == l8m.m3e);
	let u9l = (coordinatesType == l8m.h7i ||
		coordinatesType == l8m.q8f ||
		coordinatesType == l8m.l7z);
	let q6p =	(coordinatesType == l8m.h7i ||
		coordinatesType == l8m.m3e ||
		coordinatesType == l8m.d3j);
	let k8q = (coordinatesType == l8m.h7i ||
		coordinatesType == l8m.l7z ||
		coordinatesType == l8m.d3j);

	z4d.font = (coordinate.o7l).toString() + "\x70\x78\x20\x73\x65\x72\x69\x66";
	z4d.fillStyle = c5v;
  let p4p = coordinate.height;

	if (u9l)
	{
  	let r5r = 0;
		if (e5i)
		{
			r5r = e7n - c4f / 2;
		}
		else
		{
			r5r = c4f / 2 + 1;
		}
    for (let f6u = 0; f6u < c4f; f6u++)
		{
 			if (f6u % 2)
			{
				continue;
			}
			let c5p = z4d.measureText(r5r).width;
			let top = i2w.n8v + 1 + (f6u + 1) * x2h.z4p;
			top += (x2h.z4p - p4p) / 2 + p4p;
			let t0e = i2w.j6q - marginSize + (marginSize - c5p) / 2;
      z4d.fillText(r5r, t0e, top);
			if (e5i)
			{
				r5r -= c4f;
			}
			else
			{
				r5r += c4f;
			}
		}
	}

	if (q6p)
	{
		let r5r = 0;
		if (e5i)
		{
			r5r = e7n - c4f / 2 + 1;
		}
		else
		{
			r5r = c4f / 2;
		}
    for (let f6u = 0; f6u < c4f; f6u++)
		{
 			if (f6u % 2)
			{
				continue;
			}
      let c5p = z4d.measureText(r5r).width;
			let top = i2w.n8v + 1 + f6u * x2h.z4p;
			top += (x2h.z4p - p4p) / 2 + p4p;
			let t0e = i2w.j6q + i2w.f3w() +
        (marginSize - c5p) / 2;
      z4d.fillText(r5r, t0e, top);
			if (e5i)
			{
				r5r -= c4f;
			}
			else
			{
				r5r += c4f;
			}
		}
	}

	if (l3u)
	{
		let r5r = 0;
		if (e5i)
		{
			r5r = e7n;
		}
		else
		{
			r5r = 1;
		}
    for (let z3w = 0; z3w < c4f; z3w++)
		{
 			if (z3w % 2)
			{
				continue;
			}
			let left = i2w.j6q + 1 + (z3w + 1) * x2h.z4p;
      let c5p = z4d.measureText(r5r).width;
			let t0e = left + (x2h.z4p - c5p) / 2;
			let z6n = i2w.n8v - (marginSize - p4p) / 2 - 2;
      
      z4d.fillText(r5r, t0e, z6n);
			if (e5i)
			{
				r5r--;
			}
			else
			{
				r5r++;
			}
		}
	}

	if (k8q)
	{
		let r5r = 0;
		if (e5i)
		{
			r5r = c4f / 2;
		}
		else
		{
			r5r = e7n - c4f / 2 + 1;
		}
    for (let z3w = 0; z3w < c4f; z3w++)
		{
			if (z3w % 2)
			{
				continue;
			}
			let left = i2w.j6q + 1 + z3w * x2h.z4p;
      let c5p = z4d.measureText(r5r).width;
			let t0e = left + (x2h.z4p - c5p) / 2;
			let z6n = i2w.n8v + i2w.k4s() +
        (marginSize - p4p) / 2 + p4p - 2;
      
      z4d.fillText(r5r, t0e, z6n);
			if (e5i)
			{
				r5r--;
			}
			else
			{
				r5r++;
			}
		}
	}
}

function c0l(z4d, o7l)
{
	let h8r = new p9o();
	h8r.o7l = o7l;
	h8r.height = o7l;
	h8r.width = o7l;
	return h8r;
}
function l2c(z4d, rect, x9m)
{
 	z4d.lineWidth = "\x31";
  if (x9m == o8u.g6v || x9m == o8u.q4p)
  {
    z4d.fillStyle = "\x77\x68\x69\x74\x65";
    z4d.strokeStyle = "\x62\x6c\x61\x63\x6b";
  }
  else
  {
    z4d.fillStyle = "\x62\x6c\x61\x63\x6b";
    z4d.strokeStyle = "\x77\x68\x69\x74\x65";
  }
  let f3q = 80;
  let c2h = rect.f3w() + 1;
 	let h8y = ((0.19 * f3q) / 100) * c2h;
  let g3i = rect.j6q + c2h / 2;
  let e0q = (c2h / 4);
  let y7k = (c2h / 2.4);
	if (x9m == o8u.g6v || x9m == o8u.i9a)
	{
    let i6i = rect.n8v + c2h / 1.8;
    z4d.beginPath();
    z4d.ellipse(g3i, i6i, e0q, y7k, Math.PI / 2, 0, 2 * Math.PI);
    z4d.fill();
    z4d.stroke();
		i6i -= h8y;
    z4d.beginPath();
    z4d.ellipse(g3i, i6i, e0q, y7k, Math.PI / 2, 0, 2 * Math.PI);
    z4d.fill();
    z4d.stroke();
	}
	else if (x9m == o8u.q4p || x9m == o8u.a1p)
	{
    let i6i = rect.n8v + c2h / 1.55;
    z4d.beginPath();
    z4d.ellipse(g3i, i6i, e0q, y7k, Math.PI / 2, 0, 2 * Math.PI);
    z4d.fill();
    z4d.stroke();
		i6i -= h8y;
    z4d.beginPath();
    z4d.ellipse(g3i, i6i, e0q, y7k, Math.PI / 2, 0, 2 * Math.PI);
    z4d.fill();
    z4d.stroke();
		i6i -= h8y;
    z4d.beginPath();
    z4d.ellipse(g3i, i6i, e0q, y7k, Math.PI / 2, 0, 2 * Math.PI);
    z4d.fill();
    z4d.stroke();
	}
}

function n8h(z4d, rect, x9m)
{
 	z4d.lineWidth = "\x31";
  if (x9m == o8u.g6v || x9m == o8u.q4p)
  {
    z4d.fillStyle = "\x77\x68\x69\x74\x65";
    z4d.strokeStyle = "\x62\x6c\x61\x63\x6b";
  }
  else
  {
    z4d.fillStyle = "\x62\x6c\x61\x63\x6b";
    z4d.strokeStyle = "\x77\x68\x69\x74\x65";
  }

  let f3q = 80;
  let c2h = rect.f3w() + 1;
 	let h8y = ((0.19 * f3q) / 100) * c2h;
  let g3i = rect.j6q + c2h / 2;
  let e0q = (c2h / 4);
  let y7k = (c2h / 2.4);


  let i6i = rect.n8v + c2h / 2; 
  let j8l = c2h * 0.4;

  z4d.beginPath();
  z4d.arc(g3i, i6i, j8l, 0, Math.PI * 2);
  z4d.closePath();
  z4d.fill();
  z4d.stroke();

	if (l1y(x9m))
	{
		if (x9m == o8u.q4p)
		{
      z4d.fillStyle = "\x62\x6c\x61\x63\x6b";
      z4d.strokeStyle = "\x62\x6c\x61\x63\x6b";
		}
		else
		{
      z4d.fillStyle = "\x77\x68\x69\x74\x65";
      z4d.strokeStyle = "\x77\x68\x69\x74\x65";
		}
    j8l = c2h * 0.1;
    z4d.beginPath();
    z4d.arc(g3i, i6i, j8l, 0, Math.PI * 2);
    z4d.closePath();
    z4d.fill();
    z4d.stroke();
	}
}

function t1a(z4d, rect, x9m)
{
  if (x9m == o8u.z7r) return;
  if (s6k.q0w == 0)
  {
    l2c(z4d, rect, x9m);
  }
  else
  {
    n8h(z4d, rect, x9m);
  }
}


function b3q(q0w)
{
}
function a6q(z8j)
{
	let l6q = new z4m();
	let w5e = z8j.length;
	if (w5e < 6) 
	{
		return l6q;
	}
	if (z8j[0] != 'W' && z8j[0] != 'B')
	{
		return l6q;
	}
	if (z8j[0] == 'W')
	{
		l6q.h8a();
	}
	else if (z8j[0] == 'B')
	{
		l6q.v9u();
	}
	let u7w = z8j.indexOf("\x3a\x57");
	let u3o = z8j.indexOf("\x3a\x42");
	let m0v = z8j.indexOf("\x2e");
  if (m0v == -1)
	{
		m0v = z8j.length;
	}
	if (u7w == -1 || u3o == -1 || m0v <= u3o)
	{
		return l6q;
	}
	let w = z8j.substr(u7w + 2, u3o - (u7w + 2));
	let b = z8j.substr(u3o + 2, m0v - (u3o + 2));
	let h7h = w.split("\x2c");
	let o6e = b.split("\x2c");

	for (const s of h7h)
	{
		if (s.length)
		{
			if (s[0] == 'K')
			{
				if (s.length > 1)
				{
					let v4r = s.substr(1, 2);
					let c6b = j3e(v4r, 0);
					if (c6b)
					{
						l6q.q0e(c6b-1, o8u.q4p);
					}
				}
			}
			else
			{
				let c6b = j3e(s, 0);
				if (c6b)
				{
					l6q.q0e(c6b-1, o8u.g6v);
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
					let v4r = s.substr(1, 2);
					let c6b = j3e(v4r, 0);
					if (c6b)
					{
						l6q.q0e(c6b-1, o8u.a1p);
					}
				}
			}
			else
			{
				let c6b = j3e(s, 0);
				if (c6b)
				{
					l6q.q0e(c6b-1, o8u.i9a);
				}
			}
		}
	}
	return l6q;
}

function n4w(l6q, f1j)
{
  let d1g = f1j.length;

 	
	if (f1j[0] == 'Z' || (d1g == 2 && f1j == "\x2d\x2d") || (d1g == 4 && f1j == "\x6e\x75\x6c\x6c"))
	{
		return new q5w();
	}

	let y0s = [];
	let i = 0;
	let w5e = f1j.length;
	while (i < w5e)
	{
		let o1r = i;
		let z7g = 0;
		let e6r = f1j[i];
		while (i < w5e && e6r != '-' && e6r != 'x' && e6r != ':')
		{
			i++;
			z7g++;
			if (i < w5e)
			{
				e6r = f1j[i];
			}
		}
		let x9e = f1j.substr(o1r, z7g);
    y0s.push(g1t(x9e));
		i++; 
	}
	let y7g = y0s.length;
	if (y7g < 2)
	{
		return false;
	}
	else if (y7g == 2)
	{
		let c6i = y0s[0];
		let q8c = y0s[1];
		let v3n = j3z(l6q, c6i, q8c);
		if (v3n.length == 1)
		{
			return v3n[0];
		}
		return false;
	}
	else
	{
		let c6i = y0s[0];
		let q8c = y0s[1];
		let r4g = [];
		for (let i = 2; i < y7g; i++)
		{
			r4g.push(y0s[i]);
		}
		let v3n = i5o(l6q, c6i, q8c, r4g);
		if (v3n.length == 1)
		{
			return v3n[0];
		}
		c6i = y0s[0];
		q8c = y0s[y0s.length - 1];
		let m4u = [];
		for (let i = 1; i < y7g - 1; i++)
		{
			m4u.push(y0s[i]);
		}
		v3n = f6e(l6q, c6i, q8c, m4u);
		if (v3n.length == 1)
		{
			return v3n[0];
		}
		return false;
	}
}

function a0b()
{
  let w5y = ["\x69\x6d\x61\x67\x65\x73\x2f\x62\x6f\x61\x72\x64\x2f\x42\x6f\x61\x72\x64\x42\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x2e\x70\x6e\x67",
    "\x69\x6d\x61\x67\x65\x73\x2f\x62\x6f\x61\x72\x64\x2f\x44\x61\x72\x6b\x53\x71\x75\x61\x72\x65\x2e\x70\x6e\x67",
    "\x69\x6d\x61\x67\x65\x73\x2f\x62\x6f\x61\x72\x64\x2f\x4c\x69\x67\x68\x74\x53\x71\x75\x61\x72\x65\x2e\x70\x6e\x67",
    "\x69\x6d\x61\x67\x65\x73\x2f\x62\x6f\x61\x72\x64\x2f\x4d\x61\x72\x67\x69\x6e\x2e\x70\x6e\x67"];
  return w5y;
}
function div(h7o, a5m)
{
  const b7w = h7o % a5m;
  const quot = Math.floor((h7o - b7w) / a5m);
  return { quot: quot, b7w: b7w };
}

function t5h(l6q, i1t)
{
	let u0y = new q5w();
	if (i1t.length < 4)
	{
		return u0y;
	}
	let o2z = i1t.slice(0, 2);
	let toString = i1t.slice(2, 4);
	u0y.c6i = g1t(o2z);
  u0y.b8x = l6q.t9a(u0y.c6i);
	u0y.q8c = g1t(toString);
	u0y.s4k = u0y.b8x;
	if (i1t.length == 5)
	{
		switch (i1t[4])
		{
			case 'q':
				u0y.s4k = l6q.m0s() ? o8u.whiteQueen : o8u.blackQueen;
				break;
			case 'r':
				u0y.s4k = l6q.m0s() ? o8u.whiteRook : o8u.blackRook;
				break;
			case 'b':
				u0y.s4k = l6q.m0s() ? o8u.whiteBishop : o8u.blackBishop;
				break;
			case 'n':
				u0y.s4k = l6q.m0s() ? o8u.whiteKnight : o8u.blackKnight;
				break;
		}
	}
	return u0y;
}

class e1q
{

constructor()
{
	let h8n = '';
	let n9s = '';
}

}

function h6c(i1t, h8n, p8a)
{
  let y1o = "\x20" + h8n + "\x20";
  let e2y = i1t.indexOf(y1o, 0);
	if (e2y >= 0)
	{
		let j0s = e2y + y1o.length;
		let h7b = 0;
		
		if (h8n == "\x70\x76")
		{
			h7b = i1t.indexOf("\x20\x73\x74\x72\x69\x6e\x67\x20", j0s);
		}
		else
		{
			h7b = i1t.indexOf("\x20", j0s);
		}
		if (h7b < 0)
		{
			h7b = i1t.length;
		}
    let n9s = i1t.slice(j0s, h7b).trim();
		p8a.set(h8n, n9s);
	}
}

const o3l =
{
	g9g        : 0,
	b7j      : 1,
};

class j0c
{

constructor()
{
	this.a1v = new g0e();
  this.i4g = null;
  this.v8w = new j6w();
  this.s7r = new f0w();
  this.p2m = false;
  this.n8g = false;
  this.t3l = false;
  this.c7v = false;
  this.e4p = false;
  this.h3c = new e5o();
	this.t0j = new n1y();
  this.d0x = null;
}

v0e(h3d)
{
  this.a1v = h3d.p9r();
  this.j4a();
  this.p2m = false;
 	for (const u9r of this.a1v.c8c.c8c)
	{
		if (u9r.h8n == "\x4d\x75\x6c\x74\x69\x50\x56")
		{
			this.p2m = (u9r.n9s != "\x31");
			break;
		}
	}

  this.x3p();
}

x3p()
{
  this.i4g = new Worker("\x2f\x73\x68\x61\x72\x65\x64\x67\x61\x6d\x65\x73\x2f\x6a\x73\x2f\x73\x74\x6f\x63\x6b\x66\x69\x73\x68\x2d\x31\x37\x2e\x31\x2d\x38\x65\x34\x64\x30\x34\x38\x2e\x6a\x73");
  this.i4g.d0x = (event) => {
    this.b7j(event);
  };
}

g1j()
{
	this.v8w.c4m();
	this.s7r.c4m();
	this.g9g("\x75\x63\x69");
}

u4p()
{
	if (!this.t3l)
	{
    return;
  }

  
	for (const u9r of this.a1v.c8c.c8c)
	{
		let g9i = "\x73\x65\x74\x6f\x70\x74\x69\x6f\x6e";
		g9i += "\x20\x6e\x61\x6d\x65\x20";
		g9i += u9r.h8n;
		g9i += "\x20\x76\x61\x6c\x75\x65\x20";
		g9i += u9r.n9s;
		this.g9g(g9i);
	}
  
  
  
  

	this.g9g("\x69\x73\x72\x65\x61\x64\x79");
	this.t3l = false;
}

g9g(r3m)
{
	this.q4u(r3m, o3l.g9g);
  this.i4g.postMessage(r3m);
}

b7j(event)
{
  
  
 	this.q4u(event.data, o3l.b7j);
	this.b8s(event.data);
}

b8s(g9i)
{
	let f7r = g9i.split(' ');
	if (f7r.length == 0) return;
	let r3m = f7r[0];

	if (r3m == "\x72\x65\x61\x64\x79\x6f\x6b")
	{
		this.n8g = true;
    if (this.d0x)
    {
      this.d0x({
        cmd: "\x72\x65\x61\x64\x79",
        data: {}
        });
    }
		return;
	}
	if (r3m == "\x62\x65\x73\x74\x6d\x6f\x76\x65")
	{
		this.s7i(g9i);
	}
	else if (r3m == "\x69\x64")
	{
		this.v7m(g9i);
	}
	else if (r3m == "\x69\x6e\x66\x6f")
	{
		this.t5q(g9i);
	}
	else if (r3m == "\x6f\x70\x74\x69\x6f\x6e")
	{
		this.v5p(g9i);
	}
	else if (r3m == "\x75\x63\x69\x6f\x6b")
	{
		this.r7w(g9i);
	}
}

s7i(g9i)
{
	this.c7v = false;
  if (this.e4p)
  {
    this.e4p = false;
    this.r5v();
  }
}

v7m(g9i)
{
 	let i1t = g9i;
	let f7r = i1t.split("\x20");
	if (f7r.length < 3) return;

  const word1 = f7r.shift();
  const word2 = f7r.shift();
  const n9s = f7r.join(' ');

	if (word2 == "\x6e\x61\x6d\x65")
	{
		this.v8w.h8n = n9s;
	}
	else if (word2 == "\x61\x75\x74\x68\x6f\x72")
	{
		this.v8w.q2p = n9s;
	}
}

t5q(g9i)
{
	let i1t = g9i;
	let p8a = new Map();
	h6c(i1t, "\x64\x65\x70\x74\x68", p8a);
 	h6c(i1t, "\x73\x65\x6c\x64\x65\x70\x74\x68", p8a);
	h6c(i1t, "\x70\x76", p8a);
	h6c(i1t, "\x6e\x70\x73", p8a);
	h6c(i1t, "\x6e\x6f\x64\x65\x73", p8a);
	h6c(i1t, "\x73\x63\x6f\x72\x65\x20\x63\x70", p8a);
	h6c(i1t, "\x73\x63\x6f\x72\x65\x20\x6d\x61\x74\x65", p8a);
	h6c(i1t, "\x74\x69\x6d\x65", p8a);
	h6c(i1t, "\x63\x75\x72\x72\x6d\x6f\x76\x65", p8a);
	h6c(i1t, "\x63\x75\x72\x72\x6d\x6f\x76\x65\x6e\x75\x6d\x62\x65\x72", p8a);
 	h6c(i1t, "\x6d\x75\x6c\x74\x69\x70\x76", p8a);

  if (p8a.has("\x70\x76") && p8a.has("\x64\x65\x70\x74\x68"))
  {
		this.o5l(p8a);
    if (this.d0x)
    {
      this.d0x({
        cmd: "\x70\x76",
        data: {}
        });
    }

		return;
  }

  if (p8a.has("\x63\x75\x72\x72\x6d\x6f\x76\x65") && p8a.has("\x63\x75\x72\x72\x6d\x6f\x76\x65\x6e\x75\x6d\x62\x65\x72"))
	{
		this.p5u(p8a);
    if (this.d0x)
    {
      this.d0x({
        cmd: "\x63\x6d",
        data: {}
        });
    }
		return;
	}
}

v5p(g9i)
{
	let u9r = new o8k();
	let i1t = g9i;

	let j7x = "\x20\x6e\x61\x6d\x65\x20";
  let w5o = i1t.indexOf(j7x, 0);
	if (w5o < 0) return;
	let z1o = w5o + j7x.length;

	let p8k = "\x20\x74\x79\x70\x65\x20";
	let b0f = i1t.indexOf(p8k, 0);
	if (b0f < 0) return;
	let c7p = b0f;

	let u3a = b0f + p8k.length;
	let s6b = i1t.indexOf("\x20", u3a);
	if (s6b < 0) s6b = i1t.length + 1;

	u9r.h8n = i1t.slice(z1o, c7p);
	u9r.type = i1t.slice(u3a, s6b);

	if (u9r.type == "\x63\x68\x65\x63\x6b")
	{
		u9r.type = "\x62\x6f\x6f\x6c";
	}
	else if (u9r.type == "\x63\x6f\x6d\x62\x6f")
	{
		u9r.type = "\x65\x6e\x75\x6d";
	}

	let x4a = "\x20\x64\x65\x66\x61\x75\x6c\x74\x20";
	let t9b = i1t.indexOf(x4a, 0);
	if (t9b >= 0)
	{
		let g5u = t9b + x4a.length;
		let r6z = i1t.indexOf("\x20", g5u);
		if (r6z < 0) r6z = i1t.length + 1;
		u9r.n9s = i1t.slice(g5u, r6z);
		if (u9r.n9s == "\x3c\x65\x6d\x70\x74\x79\x3e")
		{
			u9r.n9s = "";
		}
	}
	if (u9r.type == "\x73\x70\x69\x6e")
	{
		let j4k = "\x20\x6d\x69\x6e\x20";
		let e1k = i1t.indexOf(j4k, 0);
		if (e1k >= 0)
		{
			let t1i = e1k + j4k.length;
			let i6b = i1t.indexOf("\x20", t1i);
			if (i6b < 0) i6b = i1t.length + 1;
			u9r.min = i1t.slice(t1i, i6b).trim();
		}
		let q0d = "\x20\x6d\x61\x78\x20";
		let g9p = i1t.indexOf(q0d, 0);
		if (g9p >= 0)
		{
			let s1p = g9p + q0d.length;
			let h9j = i1t.indexOf("\x20", s1p);
			if (h9j < 0) h9j = i1t.length + 1;
			u9r.max = i1t.slice(s1p, h9j).trim();
		}
	}
	else if (u9r.type == "\x65\x6e\x75\x6d")
	{
		let d5e = 0;
		while (true)
		{
			let y9t = "\x20\x76\x61\x72\x20";
			let l3p = i1t.indexOf(y9t, d5e);
			if (l3p < 0) break;
			let o1w = l3p + y9t.length;
			let m5c = i1t.indexOf("\x20\x76\x61\x72\x20", l3p + 5);
			if (m5c < 0) m5c = i1t.length + 1;
			if (u9r.values.length != 0)
			{
				u9r.values += "\x20";
			}
			u9r.values += i1t.slice(o1w, m5c).trim();
			d5e = m5c;
		}
	}
	this.s7r.c8c.push(u9r);
}

r7w(g9i)
{
	this.t3l = true;
  this.u4p();
}


z5p()
{
	if (this.i4g)
  {
    this.g9g("\x71\x75\x69\x74");
    this.i4g.terminate();
    this.i4g = null;
  }
}








n4t()
{
}

c0g(p6s)
{
	if (this.n8g)
	{
  	this.q4u('setInput', o3l.g9g);
		this.h3c = p6s.p9r();
    if (this.c7v)
    {
      this.e4p = true;
      this.g9g('stop');
    }
    else
    {
      this.r5v();
    }
	}
}

r5v()
{
  this.t0j = new n1y();
  this.t0j.l6q = this.h3c.w5g();
  this.t0j.a2y = this.h3c.a2y();
	this.t0j.w3m = this.p2m;
  this.c7v = true;
  if (this.d0x)
  {
    this.d0x({
      cmd: "\x67\x6f",
      data: {}
      });
  }

  let g9i = "\x70\x6f\x73\x69\x74\x69\x6f\x6e\x20\x66\x65\x6e";
  g9i += "\x20";
	let r4z = positionToPortableFen(this.h3c.w5g());
	g9i += r4z;
	this.g9g(g9i);
	if (this.h3c.i2m == l9m)
	{
		g9i = "\x67\x6f\x20\x69\x6e\x66\x69\x6e\x69\x74\x65";
		this.g9g(g9i);
	}
	else
	{
		g9i = "\x67\x6f\x20\x6d\x6f\x76\x65\x74\x69\x6d\x65\x20";
		g9i += this.h3c.i2m;
		this.g9g(g9i);
	}
}

j4a()
{
}

q4u(i1t, y0l)
{
	if (!this.a1v.j3r) return;
 	if (y0l == o3l.b7j)
	{
    console.log("\x46\x72\x6f\x6d\x20\x65\x6e\x67\x69\x6e\x65\x3a", i1t);
	}
	else
	{
    console.log("\x54\x6f\x20\x65\x6e\x67\x69\x6e\x65\x3a", i1t);
	}
}

o5l(p8a)
{
  let y1l = p8a.get("\x64\x65\x70\x74\x68");
  let t1o = p8a.get("\x6d\x75\x6c\x74\x69\x70\x76");

	let r1g = new v1a();
	r1g.g4w = y1l;

	if (p8a.has("\x73\x65\x6c\x64\x65\x70\x74\x68"))
	{
		r1g.r3t = p8a.get("\x73\x65\x6c\x64\x65\x70\x74\x68");
	}

 	if (p8a.has("\x6e\x70\x73"))
	{
    let f7i = p8a.get("\x6e\x70\x73");
		let u4i = j3e(f7i, 0);
		let b0s = u4i / 1000;
		if (b0s)
		{
			r1g.f2x = b0s + "\x20\x6b\x4e\x2f\x73";
		}
	}

	let m5q = 0.0;
  if (p8a.has("\x73\x63\x6f\x72\x65\x20\x63\x70"))
	{
    let a1j = p8a.get("\x73\x63\x6f\x72\x65\x20\x63\x70");
		m5q = parseFloat(a1j);
		m5q = m5q / 100.0;
		if (m5q > 9.99)
		{
			m5q = 9.99;
		}
		if (m5q < -9.99)
		{
			m5q = -9.99;
		}
		if (this.t0j.l6q.n3a())
		{
			m5q = -m5q;
		}
		r1g.m5q = m5q;
	}
  if (p8a.has("\x73\x63\x6f\x72\x65\x20\x6d\x61\x74\x65"))
	{
    let z2e = p8a.get("\x73\x63\x6f\x72\x65\x20\x6d\x61\x74\x65");
		let b7x = j3e(z2e, 0);
		if (this.t0j.l6q.n3a())
		{
			b7x = -b7x;
		}
		r1g.b7x = b7x;
		if (b7x > 0)
		{
			m5q = 9.99;
		}
		if (b7x < 0)
		{
			m5q = -9.99;
		}
		r1g.m5q = m5q;
	}

  if (p8a.has("\x74\x69\x6d\x65"))
	{
    let o8o = p8a.get("\x74\x69\x6d\x65");
		let c8t = j3e(o8o, 0);
		let d7m = c8t / 1000;
		let m = div(d7m, 60);
		let y0n = m.b7w;
    y0n = Math.y1n(y0n);
		let h = div(m.quot, 60);
		let a3e = h.b7w;
		let p3w = h.quot;
    const pad = (num) => String(num).padStart(2, '0');
    const r0m = `${pad(p3w)}:${pad(a3e)}:${pad(y0n)}`;
    r1g.r0m = r0m;
	}

  let f2l = p8a.get("\x70\x76");
	let d6z = f2l.split("\x20");

	let v3n = new e5q();
	let a2y = this.t0j.a2y;
	v3n.k2y(this.t0j.l6q, a2y);
	let i2f = v3n.y5m();
	let h4t = this.t0j.l6q.p9r();
	for (const s of d6z)
	{
		if (s.length == 0)
		{
			continue;
		}
		let s6z = t5h(h4t, s);
		let p2a = g8j(h4t);
		let k6q = false;
		for (const u1n of p2a)
		{
			if (u1n.q8c == s6z.q8c &&
				u1n.c6i == s6z.c6i &&
				u1n.s4k == s6z.s4k)
			{
				h4t.v0o(u1n);
				let u0y = l9h(u1n);
				v3n.v9t(i2f, u0y);
				k6q = true;
				break;
			}
		}
    if (!k6q) break;
	}
	if (!v3n.n7v())
	{
    console.log("\x70\x61\x72\x73\x65\x20\x6d\x6f\x76\x65\x73\x20\x61\x61\x6e\x74\x61\x6c\x3a\x20\x6c\x65\x65\x67\x21");
		return;
	}
  console.log("\x70\x61\x72\x73\x65\x20\x6d\x6f\x76\x65\x73\x20\x61\x61\x6e\x74\x61\x6c\x3a\x20" + v3n.n7v());
	r1g.v3n = v3n;

 	if (this.p2m)
	{
		if (t1o == 1)
		{
			this.t0j.x8y = r1g;
		}
		if (t1o > this.t0j.l1h.length)
		{
			this.t0j.l1h.push(r1g);
		}
		else
		{
			this.t0j.l1h[t1o-1] = r1g;
		}
	}
	else
	{
		this.t0j.l1h.push(r1g);
		this.t0j.x8y = r1g;
	}
}

p5u(p8a)
{
  let w1q = p8a.get("\x63\x75\x72\x72\x6d\x6f\x76\x65");
  let s5b = p8a.get("\x63\x75\x72\x72\x6d\x6f\x76\x65\x6e\x75\x6d\x62\x65\x72"); 
	this.t0j.g6k = j3e(s5b, 0);
	let p2a = g8j(this.t0j.l6q);
	this.t0j.l1o = p2a.length;
	let s6z = t5h(this.t0j.l6q, w1q);
	for (const u1n of p2a)
	{
		if (u1n.q8c == s6z.q8c &&
			u1n.c6i == s6z.c6i &&
			u1n.s4k == s6z.s4k)
		{
			this.t0j.q0q = u1n;
			break;
		}
	}
}

l2s()
{
	return this.t0j.p9r();
}

h3d()
{
	return this.a1v.p9r();
}

}

class j6w
{

constructor()
{
	this.h8n = '';
	this.q2p = '';
	this.q7f = '';
	this.x5f = '';
}

p9r()
{
  return Object.assign(new j6w(), this);
}

c4m()
{
	this.h8n = '';
	this.q2p = '';
	this.q7f = '';
	this.x5f = '';
}

}


const l9m = 10000000;

class e5o
{

constructor()
{
	this.v3n = new e5q();
	this.i2m = l9m;
  this.z5l = 0;
	this.g7g = 0;
}

p9r()
{
	let q0n = new e5o();
  q0n.v3n = this.v3n.p9r();
  q0n.i2m = this.i2m;
  q0n.z5l = this.z5l;
  q0n.g7g = this.g7g;
	return q0n;
}

a2y()
{
	return this.v3n.l8b(this.v3n.u4f());
}

w5g()
{
	return this.v3n.q7d();
}

}


class g0e
{

constructor()
{
	this.d1l = '';
	this.q6n = new j6w();
	this.c8c = new f0w();
	this.w1u = new f0w();
	this.j3r = true;
	this.c1g = true;
}

p9r()
{
	let h5b = new g0e();
	h5b.d1l = this.d1l;
	h5b.q6n = this.q6n.p9r();
	h5b.c8c = this.c8c.p9r();
	h5b.w1u = this.w1u.p9r();
	h5b.j3r = this.j3r;
	h5b.c1g = this.c1g;
	return h5b;
}


}


function j2m(m5q)
{
  if (Math.abs(m5q) < 0.005)
  {
    return "\x30\x2e\x30\x30";
  }
  else
  {
     const formatted = m5q.toFixed(2);
     return m5q > 0 ? `+${formatted}` : formatted;
  }
}

class v1a
{

constructor()
{
	this.m5q = 0.0;
	this.b7x = false;
	this.g4w = '';
	this.r3t = '';
	this.r0m = '';
	this.f2x = '';
	this.v3n = new e5q();
}

p9r()
{
	let l1d = new v1a();
  l1d.m5q = this.m5q;
  l1d.b7x = this.b7x;
  l1d.g4w = this.g4w;
  l1d.r3t = this.r3t;
  l1d.r0m = this.r0m;
  l1d.f2x = this.f2x;
  l1d.v3n = this.v3n.p9r();
	return l1d;
}

d8g()
{
	if (this.b7x)
	{
		return "\x23" + this.b7x;
	}
	else
	{
		return j2m(this.m5q);
	}
}

r7z()
{
	let g4b = scoreToMoveValue(this.m5q);
	let p5d = moveValueToEvalString(g4b);
	return p5d;
}

}

class n1y
{

constructor()
{
	this.l6q = new z4m();
	this.a2y = 1;
	this.a6k = false;
	this.h5p = false;
	this.w3m = false;
	this.l1h = [];
	this.x8y = new v1a();
	this.q0q = new q5w();
	this.g6k = 0;
	this.l1o = 0;
}

p9r()
{
	let b4a = new n1y();
  b4a.l6q = this.l6q.p9r();
  b4a.a2y = this.a2y;
  b4a.a6k = this.a6k;
  b4a.h5p = this.h5p;
  b4a.w3m = this.w3m;
  b4a.l1h = this.l1h.slice();
  b4a.x8y = this.x8y.p9r();
  b4a.q0q = this.q0q.p9r();
  b4a.g6k = this.g6k;
  b4a.l1o = this.l1o;
	return b4a;
}

i9l()
{
	return this.x8y.v3n.n7v() > 0;
}

d9a()
{
	let x3c = this.x8y.v3n.y5m();
	this.x8y.v3n.v0o(x3c);
	return x3c.u0y.u1n();
}

}


class o8k
{
  constructor(type = '', h8n = '', n9s = '', min = '', max = '', values = '')
  {
    this.type = type;
    this.h8n = h8n;
    this.n9s = n9s;
    this.min = min;
    this.max = max;
    this.values = values;
  }

  p9r()
  {
    return Object.assign(new o8k(), this);
  }
}

class f0w
{
  constructor()
  {
    this.c8c = [];
  }

  p9r()
  {
    let i1k = new f0w();
    i1k.c8c = this.c8c.map(p => p.p9r());
    return i1k;
  }

  c4m()
  {
    this.c8c.length = 0;
  }

  addBool(h8n, n9s)
  {
    this.c8c.push(new o8k("\x62\x6f\x6f\x6c", h8n, n9s));
  }

  addInteger(h8n, n9s)
  {
    this.c8c.push(new o8k("\x69\x6e\x74", h8n, n9s));
  }

  addSpin(h8n, n9s, min, max)
  {
    this.c8c.push(new o8k("\x73\x70\x69\x6e", h8n, n9s, min, max));
  }

  addString(h8n, n9s)
  {
    this.c8c.push(new o8k("\x73\x74\x72\x69\x6e\x67", h8n, n9s));
  }

  addEnum(h8n, n9s, values)
  {
    this.c8c.push(new o8k("\x65\x6e\x75\x6d", h8n, n9s, '', '', values));
  }

  addButton(h8n)
  {
    this.c8c.push(new o8k("\x62\x75\x74\x74\x6f\x6e", h8n, h8n));
  }

  i6z(h8n, n9s)
  {
    for (let u9r of this.c8c)
    {
      if (u9r.h8n === h8n)
      {
        u9r.n9s = n9s;
      }
    }
  }
}
class b5n
{

constructor()
{
	this.h8n = '';
}

p9r()
{
	let r0q = new b5n();
	r0q.h8n = this.h8n;
	return r0q;
}

z7r()
{
	return this.h8n.length == 0;
}

b7l()
{
	return this.h8n;
}

}


const y2m =
{
	j0j : 0,
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
	k3d: 41,
	l0p: 42,
	z5s: 43,
	q5a: 44,
	n7t: 45,
	h1p: 46,
	e6q: 47,
	u0f: 48,
	k8r: 49,
	g6s: 50,
	m6n: 51,
	e5e: 52,
	d7o: 53,
	d1c: 54,
	h0o: 55,
	i9f: 56,
	z5g: 57,
	z1j: 58,
	k4o: 59,
	t1j: 60,
	m7i: 61,
	m9b: 62,
	d1a: 63,
	j7e: 64,
	f4i: 65,
	q2o: 66,
	r6q: 67,
	n5i: 68,
	l9f: 69,
	i0h: 70,
	v9y: 71,
	c6m: 72,
	j3x: 73,
	z2m: 74,
	a0h: 75,
	s5o: 76,
	g8f: 77,
	c6v: 78,
	m2p: 79,
	m7r: 80,
	x1e: 81,
	f3x: 82,
	c5f: 83,
	m8n: 84,
	z6z: 85,
	x3e: 86,
	p4i: 87,
	e1j: 88,
	p5g: 89,
	i2x: 90,
	o4f: 91,
	v8q: 92,
	w2b: 93,
	b0q: 94,
	y5p: 95,
	d5c: 96,
	y6m: 97,
	c9m: 98,
	w5k: 99,
	g0q: 100,
	m9d: 101,
	y5u: 102,
	o5k: 103,
	v4x: 104,
	u5z: 105,
	q8g: 106,
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
	a3h: 136,
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
	q4k: 156,
	m3j: 157,
	i1q: 158,
	m5g: 159,
	w2v: 160,
	y1k: 161,
	x3y: 162,
	x2d: 163,
	t5v: 164,
	j9d: 165,
	t7o: 166,
	l5e: 167,
	i4f: 168,
	j1l: 169,
	l3n: 170,
	x6w: 171,
	y6k: 172,
	a8s: 173,
	e6h: 174,
	s1t: 175,
	a4t: 176,
	e1i: 177,
	t6j: 178,
	a9g: 179,
	j9b: 180,
	m8s: 181,
	k6k: 182,
	r5k: 183,
	j9h: 184,
	x9g: 185,
	j0g: 186,
	v1x: 187,
	a4b: 188,
	y9a: 189,
	n8n: 190,
	a4f: 191,
	x6d: 192,
	t4o: 193,
	c8o: 194,
	c3f: 195,
	v1h: 196,
	c7h: 197,
	k0h: 198,
	p8b: 199,
	f6h: 200,
	e8s: 201,
	c9x: 202,
	s4y: 203,
	e9x: 204,
	p2k: 205,
	b7c: 206,
	o4z: 207,
	q6r: 208,
	h9k: 209,
	s7n: 210,
	m6h: 211,
	s9w: 212,
	r9j: 213,
	f8g: 214,
	h1v: 215,
	o4t: 216,
	g5e: 217,
	h2j: 218,
	b6s: 219,
	i0c: 220,
	b6m: 221,
	h1z: 222,
	g0r: 223,
	w1d: 224,
	a7n: 225,
	k5h: 226,
	k8u: 227,
	u7h: 228,
	o9b: 229,
	x1h: 230,
	y0v: 231,
	v1o: 232,
	y2r: 233,
	m1d: 234,
	b1x: 235,
	q5u: 236,
	q1j: 237,
	y7r: 238,
	v4y: 239,
	i1x: 240,
	a2r: 241,
	q6y: 242,
	h3h: 243,
	h5s: 244,
	x1x: 245,
	e6y: 246,
	y0a: 247,
	j9x: 248,
	o2w: 249,
	t9q: 250,
	c1s: 251,
	x5s: 252,
	u5u: 253,
	y8z: 254,
	i5e: 255,
	b6v: 256,
	i4b: 257,
	o6x: 258,
	p9i: 259
};


const d6a = 0;
const d8j = 500;

function q9l(i1t)
{
	if (i1t.length != 3)
	{
		return 0;
	}
	let n4c = i1t[0];
	let y7p = i1t[1];
	let b3p = i1t[2];

	let f7g = 0;
	if (n4c == 'A' || n4c == 'a') f7g = 0;
	else if (n4c == 'B' || n4c == 'b') f7g = 1;
	else if (n4c == 'C' || n4c == 'c') f7g = 2;
	else if (n4c == 'D' || n4c == 'd') f7g = 3;
	else if (n4c == 'E' || n4c == 'e') f7g = 4;
	else return 0;
	if (isNaN(y7p) || isNaN(b3p))
	{
		return 0;
	}
	return f7g * 100 + j3e(i1t.substr(1, 2), 0) + 1;
}

function o7v(k9z)
{
	if (k9z)
	{
		let div = Math.trunc((k9z - 1) / 100);
		let b7w = (k9z - 1) % 100;
		let z0e = 'A';
		if (div == 0) z0e = 'A';
		else if (div == 1) z0e = 'B';
		else if (div == 2) z0e = 'C';
		else if (div == 3) z0e = 'D';
		else if (div == 4) z0e = 'E';
		return z0e + b7w.toString().padStart(2, '0');
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
	this.f0l = 0;
	this.v0g = 0;
	this.g5w = 0;
}

p9r()
{
	let p5k = new b2s();
	p5k.u9c = this.f0l;
	p5k.r9w = this.v0g;
	p5k.s8a = this.g5w;
	return p5k;
}

z7r()
{
	return this.g5w == 0 && this.v0g == 0 && this.f0l == 0;
}

k7u()
{
	let s8a = this.g5w.toString().padStart(4, '0');
	let r9w = this.v0g.toString().padStart(2, '0');
	let u9c = this.f0l.toString().padStart(2, '0');
	return s8a + r9w + u9c;
}

c1e(z5m, i1t)
{
	let w5e = i1t.length;
	if (!w5e)
	{
		this.g5w = 0;
		this.v0g = 0;
		this.f0l = 0;
	}
	else if (z5m == "\x64\x64\x2d\x6d\x6d\x2d\x79\x79\x79\x79" || z5m == "\x64\x64\x2e\x6d\x6d\x2e\x79\x79\x79\x79")
	{
  	if (w5e == 4)
		{
      this.g5w = j3e(i1t.substr(1, 4), 0);
		}
		else if (w5e == 10)
		{
			this.f0l = j3e(i1t.substr(0, 2), 0);
			this.v0g = j3e(i1t.substr(3, 2), 0);
			this.g5w = j3e(i1t.substr(6, 4), 0);
		}
	}
	else if (z5m == "\x79\x79\x79\x79\x2d\x6d\x6d\x2d\x64\x64" || z5m == "\x79\x79\x79\x79\x2e\x6d\x6d\x2e\x64\x64")
	{
  	if (w5e == 4)
		{
      this.g5w = j3e(i1t.substr(1, 4), 0);
		}
		else if (w5e == 10)
		{
			this.f0l = j3e(i1t.substr(8, 2), 0);
			this.v0g = j3e(i1t.substr(5, 2), 0);
			this.g5w = j3e(i1t.substr(0, 4), 0);
		}
	}
	else if (z5m == "\x64\x64\x2d\x6d\x6d\x2d\x79\x79" || z5m == "\x64\x64\x2e\x6d\x6d\x2e\x79\x79")
	{
		if (w5e == 8)
		{
			this.f0l = j3e(i1t.substr(0, 2), 0);
			this.v0g = j3e(i1t.substr(3, 2), 0);
			this.g5w = j3e(i1t.substr(6, 2), 0) + 2000;
		}
	}
}

toString(z5m)
{
	let i1t = '';
	if (this.z7r())
	{
	}
	else if (z5m == "\x6c\x69\x73\x74")
	{
		let s8a = this.g5w.toString().padStart(4, '0');
		let r9w = this.v0g.toString().padStart(2, '0');
		let u9c = this.f0l.toString().padStart(2, '0');
		if (this.f0l)
		{
			i1t = u9c + "\x2d" + r9w + "\x2d" + s8a;
		}
		else if (this.v0g)
		{
			i1t = r9w + "\x2d" + s8a;
		}
		else if (this.g5w)
		{
			i1t = s8a;
		}
	}
	else if (z5m == "\x64\x64\x2d\x6d\x6d\x2d\x79\x79\x79\x79")
	{
		let s8a = this.g5w.toString().padStart(4, '0');
		let r9w = this.v0g.toString().padStart(2, '0');
		let u9c = this.f0l.toString().padStart(2, '0');
		i1t = u9c + "\x2d" + r9w + "\x2d" + s8a;
	}
	else if (z5m == "\x64\x64\x2e\x6d\x6d\x2e\x79\x79\x79\x79")
	{
		let s8a = this.g5w.toString().padStart(4, '0');
		let r9w = this.v0g.toString().padStart(2, '0');
		let u9c = this.f0l.toString().padStart(2, '0');
		i1t = u9c + "\x2e" + r9w + "\x2e" + s8a;
	}
	else if (z5m == "\x79\x79\x79\x79\x2d\x6d\x6d\x2d\x64\x64")
	{
		let s8a = this.g5w.toString().padStart(4, '0');
		let r9w = this.v0g.toString().padStart(2, '0');
		let u9c = this.f0l.toString().padStart(2, '0');
		i1t = s8a + "\x2d" + r9w + "\x2d" + u9c;
	}
	else if (z5m == "\x79\x79\x79\x79\x2e\x6d\x6d\x2e\x64\x64")
	{
		let s8a = this.g5w.toString().padStart(4, '0');
		let r9w = this.v0g.toString().padStart(2, '0');
		let u9c = this.f0l.toString().padStart(2, '0');
		i1t = s8a + "\x2e" + r9w + "\x2e" + u9c;
	}
	else if (z5m == "\x79\x79\x79\x79\x6d\x6d\x64\x64")
	{
		let s8a = this.g5w.toString().padStart(4, '0');
		let r9w = this.v0g.toString().padStart(2, '0');
		let u9c = this.f0l.toString().padStart(2, '0');
		i1t = s8a + r9w + u9c;
	}
	else if (z5m == "\x79\x79\x79\x79")
	{
		let s8a = this.g5w.toString().padStart(4, '0');
		i1t = s8a;
	}
	return i1t;
}

}

class p6z
{

constructor()
{
	this.w6a = new d0k();
	this.g9a = new l8c();
	this.h7p = 0;
	this.b8r = 0;
	this.p4h = "";
  this.x5f = y2m.j0j;
}

p9r()
{
	let u8v = new p6z();
	u8v.w6a = this.w6a.p9r();
	u8v.g9a = this.g9a.p9r();
	u8v.h7p = this.h7p;
	u8v.b8r = this.b8r;
	u8v.p4h = this.p4h;
  u8v.x5f = this.x5f;
	return u8v;
}

z7r()
{
	return this.w6a.z7r() &&
		this.g9a.z7r() &&
		this.h7p == 0 &&
		this.b8r == 0 &&
		this.p4h == "" &&
 		this.x5f == y2m.j0j;
}

}


class m3k
{

constructor()
{
	this.m5l = new p6z();
	this.u6y = new p6z();
	this.n2v = new v3a();
	this.p0d = new b5n();
	this.s4t = new o7f();
	this.p4h = new o0y();
	this.k7u = new b2s();
	this.c3m = o9d.j0j;
	this.k9z = 0;
	this.y1n = 0;
	this.g3t = 0;
	this.b9d = new s5d();
  this.q6n = new c6g();
}

p9r()
{
	let o0o = new m3k();
	o0o.m5l = this.m5l.p9r();
	o0o.u6y = this.u6y.p9r();
	o0o.n2v = this.n2v.p9r();
	o0o.p0d = this.p0d.p9r();
	o0o.s4t = this.s4t.p9r();
	o0o.p4h = this.p4h.p9r();
	o0o.k7u = this.k7u.p9r();
	o0o.c3m = this.c3m;
	o0o.k9z = this.k9z;
	o0o.y1n = this.y1n;
	o0o.g3t = this.g3t;
	o0o.b9d = this.b9d.p9r();
  o0o.q6n = this.q6n.p9r();
	return o0o;
}

z7r()
{
	return this.m5l.z7r() &&
		this.u6y.z7r() &&
		this.n2v.z7r() &&
		this.p0d.z7r() &&
		this.s4t.z7r() &&
		this.p4h.z7r() &&
		this.k7u.z7r() &&
		this.c3m == o9d.j0j &&
		this.k9z == 0 &&
		this.y1n == 0 &&
		this.g3t == 0 &&
		this.b9d.z7r();
}

u4b()
{
	let i1t = '';
	if (this.g3t)
	{
		i1t = this.y1n.toString() + "\x2e" + this.g3t.toString();
	}
	else if (this.y1n)
	{
		i1t = this.y1n.toString();
	}
	return i1t;
}

}


class c6g
{

constructor()
{
	this.h1h = '';
}

p9r()
{
	let a6t = new c6g();
	a6t.h1h = this.h1h;
	return a6t;
}

toString()
{
  return this.h1h;
}

}


class o0y
{

constructor()
{
	this.p4h = '';
}

p9r()
{
	let i0g = new o0y();
	i0g.p4h = this.p4h;
	return i0g;
}

z7r()
{
	return this.p4h.length == 0;
}

b7l()
{
	return this.p4h;
}

}


class d0k
{

constructor()
{
	this.y6n = '';
	this.s6s = '';
}

p9r()
{
	let b6q = new d0k();
	b6q.y6n = this.y6n;
	b6q.s6s = this.s6s;
	return b6q;
}

z7r()
{
	return this.s6s.length == 0 &&
		this.y6n.length == 0;
}

h8n()
{
	if (!this.s6s.length == 0 && !this.y6n.length == 0)
	{
		return this.s6s + "\x2c" + this.y6n;
	}
	else if (this.s6s.length == 0 && this.y6n.length == 0)
	{
		return "";
	}
	else if (this.y6n.length == 0)
	{
		return this.s6s;
	}
	else
	{
		return this.y6n;
	}
}

w3g()
{
	return this.h8n().replace(/,/g, "\x20");
}

c2e()
{
	return this.p8l(1).replace(/,/g, "\x20");
}

p8l(j7z)
{
	if (this.s6s.length == 0)
	{
		if (this.y6n.length == 0 || j7z < 1)
		{
			return "";
		}
		else
		{
			return this.y6n.substring(0, j7z);
		}
	}
	else
	{
		if (this.y6n.length == 0 || j7z < 1)
		{
			return this.s6s;
		}
		else
		{
			return this.s6s + "\x2c" + this.y6n.substring(0, j7z);
		}
	}
}

b5v(f5e)
{
	let i1t = f5e.trim();
	let x3c = i1t.lastIndexOf("\x2c");
	if (x3c != -1)
	{
		this.s6s = i1t.substr(0, x3c).trim();
		this.y6n = i1t.substr(x3c+1, i1t.length).trim();
		if (this.y6n.length != 0)
		{
			if (this.y6n.charAt(0).toLowerCase() == this.y6n.charAt(0))
			{
				this.s6s += "\x2c";
				this.s6s += this.y6n;
				this.y6n = "";
			}
		}
	}
	else
	{
		this.s6s = i1t;
		this.y6n = "";
	}
}

b7l()
{
	return this.h8n();
}

}

const o9d =
{
	j0j : 0,
	a8l : 1,
	k6l : 2,
	a3c : 3,
	u6l : 4,
	g7i : 5,
	v2w : 6,
	o9f : 7,
	l6d : 8,
	e7o : 9,
	o0g : 10,
	i8a : 11,
	o5y : 12,
	g3o : 13,
	y5i : 14,
	x7q : 15
};


function s4a(c3m)
{
	switch (c3m)
	{
		case o9d.a8l:
			return "\x32\x2d\x30";
		case o9d.a3c:
			return "\x31\x2d\x31";
		case o9d.k6l:
			return "\x30\x2d\x32";
		default:
			return "";
	}
}
const k2e =
{
	d2r : 0,
	g8o : 1,
	h5r : 2
};

const e9p =
[
	[ k2e.d2r,   "\x48\x69\x67\x68" ],
	[ k2e.g8o, "\x4d\x69\x64\x64\x6c\x65" ],
	[ k2e.h5r,    "\x4c\x6f\x77" ]
];

class o7f
{

constructor()
{
	this.p4h = '';
	this.h3l = '';
	this.j0e = new b2s();
	this.f0f = new b2s();
	this.j4b = 0;
	this.k6w = k2e.d2r;
}

p9r()
{
	let j4v = new o7f();
	j4v.p4h = this.p4h;
	j4v.h3l = this.h3l;
	j4v.j0e = this.j0e.p9r();
	j4v.f0f = this.f0f.p9r();
	j4v.j4b = this.j4b;
	j4v.k6w = this.k6w;
	return j4v;
}

z7r()
{
	return this.p4h.length == 0 &&
		this.h3l.length == 0 &&
		this.j0e.z7r() &&
		this.f0f.z7r() &&
		this.j4b == 0 &&
		this.k6w == k2e.d2r;
}

b7l()
{
	let i1t = this.p4h;
	if (this.h3l.length)
	{
		if (i1t.length)
		{
			i1t += "\x20";
		}
		i1t += this.h3l;
	}
	return i1t;
}

}


const d1q =
{
	l5v : 0,
	r8u : 1,
	q2j : 2,
	z0r : 3,
	n9a : 4,
	b9q : 5,
	c7c : 6,
	x8l : 7,
	n3y : 8,
	k7p : 9,
	j4c : 10,
	r0s : 11,
	v0a : 12,
	u2w : 13,
	d6e : 14,
	c4v : 15
};

class s5d
{

constructor()
{
	this.n9s = 0;
}

g7b(n9s)
{
	this.n9s = n9s;
}

p9r()
{
	let a0m = new s5d();
	a0m.n9s = this.n9s;
	return a0m;
}

z7r()
{
	return this.n9s == 0;
}

g6i()
{
	return this.n9s != 0;
}

j0j()
{
	return this.n9s == 0;
}

z7g()
{
	let y2h = 0;
	for (let i = 0; i < 16; i++)
	{
		if (this.x7z(i))
		{
			y2h++;
		}
	}
	return y2h;
}

v7r()
{
	this.n9s = 0;
}

set(d1x, h2n)
{
	if (h2n)
	{
		this.n9s |= (1 << d1x);
	}
	else
	{
		this.n9s &= ~(1 << d1x);
	}
}

x7z(d1x)
{
	return (this.n9s & (1 << d1x)) != 0;
}

b5w()
{
	return this.n9s;
}

}

function v2k(s8a)
{
	return s8a.toString().padStart(4, '0');
}

class l8c
{

constructor()
{
	this.h8n = '';
	this.p7t = 0;
	this.s8a = 0;
	this.j0l = false;
	this.x5f = y2m.j0j;
}

p9r()
{
	let q8a = new l8c();
	q8a.h8n = this.h8n;
	q8a.p7t = this.p7t;
	q8a.s8a = this.s8a;
	q8a.j0l = this.j0l;
	q8a.x5f = this.x5f;
	return q8a;
}

z7r()
{
	return this.h8n.length == 0 &&
		this.p7t == 0 &&
		this.s8a == 0 &&
		this.j0l == false &&
		this.x5f == y2m.j0j;
}

l4h()
{
	let i1t = this.h8n;
	if (this.p7t)
	{
		if (i1t.length)
		{
			i1t += "\x20";
		}
		i1t += this.p7t;
	}
	return i1t;
}

b7l()
{
	let i1t = this.h8n;
	if (this.p7t)
	{
		if (i1t.length)
		{
			i1t += "\x20";
		}
		i1t += this.p7t;
	}
	if (i1t.length)
	{
		i1t += "\x20";
	}
	i1t += this.f7n();
	return i1t;
}


z5n()
{
	let i1t = this.h8n;
	if (this.p7t > 1)
	{
		i1t += "\x20";
		i1t += this.p7t;
	}
	return i1t;
}

f7n()
{
	let i1t = '';
	if (this.j0l)
	{
		let x9v = v2k(this.s8a);
		let t8b = v2k(this.s8a + 1);
		let s5z = x9v + "\x2f" + t8b.substr(2, 2);
		i1t = s5z;
	}
	else
	{
		i1t = v2k(this.s8a);
	}
	return i1t;
}

}

class x1c
{

constructor()
{
	this.p3w = 0;
	this.a3e = 0;
	this.y0n = 0;

}

}

function d2w(i1t, v2y, b8r)
{
	b8r.p3w = 0;
	b8r.a3e = 0;
	b8r.y0n = 0;

	let w5e = i1t.length;
	if (!w5e || i1t == "\x3f")
	{
		return;
	}
	let i = 0;
	for (; i < w5e; i++)
	{
		if (!isNaN(i1t[i]))
		{
			break;
		}
	}
	let h1b = '';
	for (; i < w5e; i++)
	{
		if (isNaN(i1t[i]))
		{
			break;
		}
		h1b += i1t[i].toString();
	}
	for (; i < w5e; i++)
	{
		if (!isNaN(i1t[i]))
		{
			break;
		}
	}
	let j8u = '';
	for (; i < w5e; i++)
	{
		if (isNaN(i1t[i]))
		{
			break;
		}
		j8u += i1t[i].toString();
	}
	for (; i < w5e; i++)
	{
		if (!isNaN(i1t[i]))
		{
			break;
		}
	}
	let j0v = '';
	for (; i < w5e; i++)
	{
		if (isNaN(i1t[i]))
		{
			break;
		}
		j0v += i1t[i].toString();
	}
	let s4u = j3e(h1b, 0);
	let m6x = j3e(j8u, 0);
	let a5f = j3e(j0v, 0);
	if (
		s4u < 0 || s4u > v2y ||
		m6x < 0 || m6x > 59 ||
		a5f < 0 || a5f > 59)
	{
		s4u = 0;
		m6x = 0;
		a5f = 0;
	}
	b8r.p3w = s4u;
	b8r.a3e = m6x;
	b8r.y0n = a5f;
}

function i0y(i1t)
{
	if (i1t.length == 0)
	{
		return 0;
	}
	else
	{
		let b8r = new x1c();
		d2w(i1t, 9, b8r);
		return b8r.p3w * 60 + b8r.a3e;
	}
}


const f4v =
{
	j0j : 0,
	h6r : 1,
	k2b : 2,
	n2v : 3,
	b9h : 4,
	w2h : 5,
	j5y : 6,
	y6x : 7
};

const a6c =
[
	[ f4v.j0j, 			 	""                   ],
	[ f4v.h6r,  		 	"\x53\x69\x6e\x67\x6c\x65\x47\x61\x6d\x65"         ],
	[ f4v.k2b,  		 	"\x4d\x61\x74\x63\x68"              ],
	[ f4v.n2v,  "\x52\x6f\x75\x6e\x64\x52\x6f\x62\x69\x6e"         ],
	[ f4v.b9h,   		"\x53\x77\x69\x73\x73\x53\x79\x73\x74\x65\x6d"        ],
	[ f4v.w2h,    "\x4b\x6e\x6f\x63\x6b\x6f\x75\x74"           ],
	[ f4v.j5y,"\x53\x69\x6d\x75\x6c"              ],
	[ f4v.y6x,"\x53\x63\x68\x65\x76\x65\x6e\x69\x6e\x67\x65\x6e\x53\x79\x73\x74\x65\x6d" ]
];

class v3a
{

constructor()
{
	this.p4h = '';
	this.w7p = '';
	this.z4b = new b2s();
	this.h9e = new b2s();
	this.s3y = f0j.u7c;
	this.c7g = 0;
	this.x5f = y2m.j0j;
	this.type = f4v.j0j;
	this.a8d = 0;
	this.k6b = false;
	this.k5j = false;
	this.p8w = false;
	this.f0k = false;
}

p9r()
{
	let f7j = new v3a();
	f7j.p4h = this.p4h;
	f7j.w7p = this.w7p;
	f7j.z4b = this.z4b.p9r();
	f7j.h9e = this.h9e.p9r();
	f7j.s3y = this.s3y;
	f7j.c7g = this.c7g;
	f7j.x5f = this.x5f;
	f7j.type = this.type;
	f7j.a8d = this.a8d;
	f7j.k6b = this.k6b;
	f7j.k5j = this.k5j;
	f7j.p8w = this.p8w;
	f7j.f0k = this.f0k;
	return f7j;
}

z7r()
{
	return this.p4h.length == 0 &&
		this.w7p.length == 0 &&
		this.z4b.z7r() &&
		this.h9e.z7r() &&
		this.s3y == f0j.u7c &&
		this.c7g == 0 &&
		this.x5f == y2m.j0j &&
		this.type == f4v.j0j &&
		!this.a8d &&
		!this.k6b &&
		!this.k5j &&
		!this.p8w &&
		!this.f0k;
}

b7l()
{
	let i1t = this.p4h;
	if (this.w7p.length)
	{
		if (i1t.length)
		{
			i1t += "\x20";
		}
		i1t += this.w7p;
	}
	if (i1t.length)
	{
		i1t += "\x20";
	}
	let s8a = this.z4b.s8a.toString().padStart(4, '0');
	i1t += s8a;
	return i1t;
}

}



const f0j =
{
	u7c : 0,
	a2m : 1,
	w3w : 2,
	t8l : 3
};

const o0q =
[
	[ f0j.u7c, "\x4e\x6f\x72\x6d\x61\x6c" ],
	[ f0j.a2m,  "\x52\x61\x70\x69\x64"  ],
	[ f0j.w3w,  "\x42\x6c\x69\x74\x7a"  ],
	[ f0j.t8l,   "\x43\x6f\x72\x72"   ]
];

function g6q(s3y)
{
	return o0q[s3y][1];
}

function h0q()
{
	let u6v = [];
	for (const s3y of o0q)
	{
		u6v.push(s3y[1]);
	}
	return u6v;
}

class v0r
{

constructor()
{
	this.z8s = '';
	this.q9g = '';
	this.j3g = n8u.j0j;
	this.style = c8l.j0j;
	this.n9s = b4c.j0j;
	this.n4n = new p6t();
	this.e6v = new s7c();
	this.a7a = new x6l();
	this.z4y = o9q.j0j;
	this.q4x = false;
	this.d6h = false;
  this.z8f = false;
}

p9r()
{
	let o2d = new v0r();
	o2d.z8s = this.z8s;
	o2d.q9g = this.q9g;
	o2d.j3g = this.j3g;
	o2d.style = this.style;
	o2d.n9s = this.n9s;
	o2d.n4n = this.n4n.p9r();
	o2d.e6v = this.e6v.p9r();
	o2d.a7a = this.a7a.p9r();
	o2d.z4y = this.z4y;
	o2d.q4x = this.q4x;
	o2d.d6h = this.d6h;
 	o2d.z8f = this.z8f;
	return o2d;
}

z7r()
{
	return this.z8s.length == 0 &&
		this.q9g.length == 0 &&
		this.j3g == n8u.j0j &&
		this.style == c8l.j0j &&
		this.n9s == b4c.j0j &&
		this.n4n.z7r() &&
		this.e6v.z7r() &&
		this.a7a.z7r() &&
		this.z4y == o9q.j0j &&
		this.q4x == false &&
		this.d6h == false &&
 		this.z8f == false;
}

}

const o9q =
{
	j0j : 0,
	n2g : 1,
	g8o : 2,
	i6d : 3
};

const f1z =
{
	n4l : 0,
	g2k : 1,
	r7y : 2,
	j7i : 3,
	y8e : 4,
	t8m : 5,
	w5x : 6,
	x7q : 7,
	u6z : 8,
	a2l : 9,
	x4h : 10,
	y3f : 11,
	h5p : 12,
	v2o : 13,
	q6q : 14,
	a7p : 15
};

class p6t
{

constructor()
{
	this.n9s = 0;
}

g7b(n9s)
{
	this.n9s = n9s;
}

p9r()
{
	let u5j = new p6t();
	u5j.n9s = this.n9s;
	return u5j;
}

z7r()
{
	return this.n9s == 0;
}

g6i()
{
	return this.n9s != 0;
}

j0j()
{
	return this.n9s == 0;
}

z7g()
{
	let y2h = 0;
	for (let i = 0; i < 16; i++)
	{
		if (this.x7z(i))
		{
			y2h++;
		}
	}
	return y2h;
}

v7r()
{
	this.n9s = 0;
}

set(d1x, h2n)
{
	if (h2n)
	{
		this.n9s |= (1 << d1x);
	}
	else
	{
		this.n9s &= ~(1 << d1x);
	}
}

x7z(d1x)
{
	return (this.n9s & (1 << d1x)) != 0;
}

b5w()
{
	return this.n9s;
}

}

const n8u =
{
	j0j : 0,
	x0a : 1,
	s4n : 2,
	t1f : 3,
	i9b : 4,
	n5j : 5,
	s9h : 6
};

const v3w =
[
	[ n8u.j0j,     		  ""   ],
	[ n8u.x0a,       		  "\x52\x52" ],
	[ n8u.s4n, 		  "\x26\x23\x38\x39\x37\x39\x3b"  ],
	[ n8u.t1f, 		  "\x26\x23\x38\x38\x30\x34\x3b"  ],
	[ n8u.i9b,  "\x3d"  ],
	[ n8u.n5j,   "\x26\x23\x39\x36\x35\x31\x3b"  ],
	[ n8u.s9h,  "\x26\x23\x39\x36\x36\x31\x3b"  ]
];

function d4k(j3g)
{
	return v3w[j3g][1];
}


const c8l =
{
	j0j : 0,
	p7l : 1,
	y7x : 2,
	p7h : 3,
	d6n : 4,
	d0h : 5,
	u3z : 6,
	a8g : 7,
	q7y : 8
};

const b4h =
[
	[ c8l.j0j,     		"" 	 ],
	[ c8l.p7l,       	"\x21"  ],
	[ c8l.y7x, 					"\x3f"  ],
	[ c8l.p7h,	"\x21\x3f" ],
	[ c8l.d6n,	 		"\x3f\x21" ],
	[ c8l.d0h,  	"\x21\x21" ],
	[ c8l.u3z, 			"\x3f\x3f" ],
	[ c8l.a8g, 		"\x26\x23\x38\x38\x35\x37\x3b"  ],
	[ c8l.q7y, 		"\x26\x23\x39\x37\x32\x33\x3b"  ]
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
	this.v8b = null;
	this.w3s = null;
	this.p3p = null;
	this.k5r = null;
  this.p7t = 0; 
}

s0o(u0y)
{
	this.u0y = u0y.p9r();
}

j7v(l6q, b7t, m8h, c8h)
{
	this.u0y.j7v(l6q, b7t, m8h, c8h);
}

}

class w6u
{

constructor()
{
	this.d0w = null;
	this.u0y = null;
}

e2m(b1i)
{
	return this.d0w == b1i.d0w;
}

i5u(b1i)
{
	return !this.e2m(b1i);
}

p9r()
{
	let w5n = new w6u();
  w5n.d0w = this.d0w;
  w5n.u0y = this.u0y;
	return w5n;
}

}


class e5q
{

constructor()
{
	this.v6m = new z4m();
 	this.t9y = null;
	this.q9x = 1;
	this.v6m.l7d();
  this.m7j = new v0r();
}

g4i(b1i)
{
	this.k2y(b1i.v6m, b1i.q9x);
	this.m7j = b1i.m7j.p9r();
	this.t9y = this.y0q(b1i.t9y);
}

p9r()
{
	let k7l = new e5q();
	k7l.g4i(this);
	return k7l;
}

k2y(x1z, o7x)
{
	this.v6m = x1z.p9r();
	this.q9x = o7x;
	this.m7j = new v0r();
	this.t9y = null;
}

o7x()
{
	return this.q9x;
}

x1z()
{
	return this.v6m.p9r();
}


u4f()
{
	let x3c = this.y5m();
	this.m0t(x3c);
	return x3c;
}


q7d()
{
	let m0t = this.u4f();
	return this.l6q(m0t);
}


l8b(x3c)
{
  let i3l = this.q2s(x3c) + 1;
	if (i3l)
	{
		return this.q9x +
			Math.floor((i3l - 1 + this.v6m.n3a()) / 2);
	}
	else
	{
		return this.q9x;
	}
}

q2s(x3c)
{
	let i3l = 0;
	if (!x3c.d0w)
	{
		return 0;
	}
	let a1m = x3c.d0w;
	while (1)
	{
		i3l++;
		if (!a1m.w3s)
		{
			let b9j = a1m;
			while (b9j.p3p)
			{
				b9j = b9j.p3p;
			}
			if (!b9j.w3s)
			{
				break;
			}
		}
		if (a1m.w3s)
		{
			a1m = a1m.w3s;
		}
		else
		{
			let b9j = a1m;
			while (b9j.p3p)
			{
				b9j = b9j.p3p;
			}
			a1m = b9j.w3s;
		}
	}
	return i3l;
}


n7v()
{
	let d4m = 0;
	let u5v = this.t9y;
	while (u5v)
	{
		d4m++;
		u5v = u5v.v8b;
	}
	return d4m;
}

z4c()
{
	return this.t9y != null;
}

s4j(x3c)
{
	return x3c.e2m(this.y5m());
}

q0r(x3c)
{
	if (x3c.d0w)
	{
		return x3c.d0w.v8b == null;
	}
	else if (this.t9y)
	{
		return false;
	}
	else
	{
		return true;
	}
}

y9l(x3c)
{
	if (!this.s4j(x3c))
	{
		if (x3c.d0w.w3s)
		{
			x3c.d0w = x3c.d0w.w3s;
			x3c.u0y = x3c.d0w.u0y;
		}
		else
		{
			let a1m = x3c.d0w;
			while (a1m.p3p)
			{
				a1m = a1m.p3p;
			}
			a1m = a1m.w3s;
			x3c.d0w = a1m;
      if (x3c.d0w)
      {
  			x3c.u0y = x3c.d0w.u0y;
      }
      else
      {
        x3c.u0y = null;
      }
		}
	}
}

v0o(x3c)
{
	if (!this.q0r(x3c))
	{
		x3c.d0w = this.o5o(x3c);
		x3c.u0y = x3c.d0w.u0y;
	}
}

l1n(x3c, r1k)
{
	let x6r = this.a3k(x3c);
	if (r1k < 0 || r1k >= x6r)
	{
		return;
	}
	let b9j = this.o5o(x3c);
	let i = 0;
	while (i != r1k)
	{
		i++;
		b9j = b9j.k5r;
	}
	x3c.d0w = b9j;
	x3c.u0y = x3c.d0w.u0y;
}

a2y(x3c)
{
	if (!x3c.d0w)
	{
		return this.q9x;
	}
	let i3l = this.q2s(x3c);
	if (i3l)
	{
		return this.q9x +
      Math.floor((i3l - 1 + this.v6m.n3a()) / 2);
	}
	else
	{
		return this.q9x;
	}
}

y5m()
{
	let x3c = new w6u();
	x3c.d0w = null;
	x3c.u0y = null;
	return x3c;
}

m0t(x3c)
{
	if (!this.q0r(x3c))
	{
		let a1m = this.o5o(x3c);
		while (true)
		{
			if (!a1m.v8b)
			{
				break;
			}
			a1m = a1m.v8b;
		}
		x3c.d0w = a1m;
		x3c.u0y = x3c.d0w.u0y;
	}
}

b3t(k1h)
{
	let x3c = this.y5m();
	if (k1h > 0)
	{
    this.k1h = 0;
		this.g0c(x3c, k1h);
		return x3c;
	}
	else
	{
		return x3c;
	}
}

g0c(x3c, k1h)
{
	while (true)
	{
		if (this.q0r(x3c))
		{
			return false;
		}
		let x6r = this.a3k(x3c);
		if (x6r > 1)
		{
			let l2x = x3c.p9r();
			for (let i = 1; i < x6r; i++)
			{
				this.l1n(x3c, i);
				this.k1h++;
				if (this.k1h == k1h)
				{
					return true;
				}
				if (this.g0c(x3c, k1h))
				{
					return true;
				}
        x3c.d0w = l2x.d0w;
        x3c.u0y = l2x.u0y;
			}
		}
		this.v0o(x3c);
		this.k1h++;
		if (this.k1h == k1h)
		{
			return true;
		}
	}
}

p6h(x3c)
{
	if (!x3c.d0w)
	{
		return 0;
	}
	else
	{
		return x3c.d0w.p7t;
	}
}

p7w(x3c)
{
	let v3n = [];
 	if (!x3c.d0w)
  {
		return v3n;
	}
	let a1m = x3c.d0w;
	while (1)
	{
		v3n.push(a1m);
		if (!a1m.w3s)
		{
			let b9j = a1m;
			while (b9j.p3p)
			{
				b9j = b9j.p3p;
			}
			if (!b9j.w3s)
			{
				break;
			}
		}
		if (a1m.w3s)
		{
			a1m = a1m.w3s;
		}
		else
		{
			let b9j = a1m;
			while (b9j.p3p)
			{
				b9j = b9j.p3p;
			}
			a1m = b9j.w3s;
		}
	}
	return v3n.reverse();
}

r7l(x3c)
{
	let v3n = this.p7w(x3c);
	let x6r = this.a3k(x3c);
	if (x6r == 0)
	{
		return v3n;
	}
	let v8t = this.z2k(x3c, 0);
	while (v8t)
	{
		v3n.push(v8t);
		v8t = v8t.v8b;
	}
	return v3n;
}

a3k(x3c)
{
	let v8t = this.o5o(x3c);
	if (!v8t)
	{
		return 0;
	}
	let x6r = 1;
	while (v8t.k5r)
	{
		x6r++;
		v8t = v8t.k5r;
	}
	return x6r;
}

u2j(x3c, j3o)
{
	if (this.s4j(x3c))
	{
		this.t9y = j3o;
		x3c.d0w = j3o;
		x3c.u0y = x3c.d0w.u0y;
	}
	else
	{
		x3c.d0w.v8b = j3o;
		j3o.w3s = x3c.d0w;
		x3c.d0w = j3o;
		x3c.u0y = x3c.d0w.u0y;
	}
}

b7y(x3c, j3o)
{
	let b9j = this.o5o(x3c);
	while (b9j.k5r)
	{
		b9j = b9j.k5r;
	}
	b9j.k5r = j3o;
	j3o.p3p = b9j;

	x3c.d0w = j3o;
	x3c.u0y = x3c.d0w.u0y;
}

v9t(x3c, u0y)
{
	let j3o = new q3c();
 	j3o.s0o(u0y);
	if (this.q0r(x3c))
	{
		this.u2j(x3c, j3o);
	}
	else
	{
		this.b7y(x3c, j3o);
	}
}


t3s(x3c, v3n)
{
	for (const u0y of v3n)
	{
		this.v9t(x3c, u0y);
	}
}


o7o(x3c)
{
	let b9j = this.z2k(x3c, 1);
	if (!b9j)
	{
		return false;
	}
	while (b9j)
	{
		let u5v = b9j.v8b;
		while (u5v)
		{
			if (u5v.k5r)
			{
				return false;
			}
			u5v = u5v.v8b;
		}
		b9j = b9j.k5r;
	}
	return true;
}

f8e()
{
	let u5v = this.t9y;
	while (u5v)
	{
		if (u5v.k5r)
		{
			return true;
		}
		u5v = u5v.v8b;
	}
	return false;
}

z9l()
{
	if (!this.m7j.z7r())
	{
		return true;
	}
	if (this.f8e())
	{
		return true;
	}
	let u5v = this.t9y;
	while (u5v)
	{
		if (u5v.u0y.z9l())
		{
			return true;
		}
		u5v = u5v.v8b;
	}
	return false;
}

o5o(x3c)
{
	if (x3c.d0w)
	{
		return x3c.d0w.v8b;
	}
	return this.t9y;
}

z2k(x3c, r1k)
{
	let i = 0;
	let b9j = this.o5o(x3c);
	while (b9j && i != r1k)
	{
		b9j = b9j.k5r;
		i++;
	}
	return b9j;
}

y0q(b9j)
{
	let w4y = b9j;
	let u4v = null;
	let j3o = null;
	let v2d = null;
	while (w4y)
	{
		j3o = new q3c();
		j3o.s0o(w4y.u0y);
		if (u4v)
		{
			u4v.v8b = j3o;
			j3o.w3s = u4v;
		}
		else
		{
			v2d = j3o;
		}
		u4v = j3o;
		if (w4y.k5r && !w4y.p3p)
		{
			let l4i = w4y.k5r;
			let z4x = u4v;
			while (l4i)
			{
				let c3a = this.y0q(l4i);
				z4x.k5r = c3a;
				c3a.p3p = z4x;
				z4x = c3a;
				l4i = l4i.k5r;
			}
		}
		w4y = w4y.v8b;
	}
	return v2d;
}

w1p()
{
	return this.m7j;
}

n4b()
{
	return this.m7j.z8s;
}

o9x(a1z)
{
	this.m7j.z8s = a1z;
}

f1k()
{
	return !this.m7j.e6v.z7r();
}

c1i(e6v)
{
	this.m7j.e6v = e6v.p9r();
}

p9b()
{
	return this.m7j.e6v;
}

l4f()
{
	return !this.m7j.a7a.z7r();
}

u5m(a7a)
{
	this.m7j.a7a = a7a.p9r();
}

e2l()
{
	return this.m7j.a7a;
}

v0j()
{
	return !this.m7j.n4n.z7r();
}

s5h(n4n)
{
	this.m7j.n4n = n4n.p9r();
}

c2d()
{
	return this.m7j.n4n;
}

r2e(k1h)
{
  if (k1h == 0)
  {
    return true;
  }
	let u5v = this.t9y;
	while (u5v)
	{
    if (u5v.p7t == k1h)
    {
      return true;
    }
		u5v = u5v.v8b;
	}
	return false;
}

i3m()
{
	let x3c = this.y5m();
	this.k1h = 0;
	this.k0b(x3c);
}

k0b(x3c)
{
	while (true)
	{
		if (this.q0r(x3c))
		{
			return;
		}
		let x6r = this.a3k(x3c);
		if (x6r > 1)
		{
			let l2x = x3c.p9r();
			for (let i = 1; i < x6r; i++)
			{
				this.l1n(x3c, i);
				this.k1h++;
        x3c.d0w.p7t = this.k1h;
				this.k0b(x3c);
        x3c.d0w = l2x.d0w;
        x3c.u0y = l2x.u0y;
			}
		}
		this.v0o(x3c);
  	this.k1h++;
    x3c.d0w.p7t = this.k1h;
	}
}

l6q(x3c)
{
	let l6q = this.v6m.p9r();
	if (!x3c.d0w)
	{
		return l6q;
	}
	let v3n = this.f6n(x3c);
  for (const u0y of v3n)
	{
		l6q.v0o(u0y.u1n());
	}
	return l6q;
}

f6n(x3c)
{
	let v3n = [];
 	if (!x3c.d0w)
  {
		return v3n;
	}
	let a1m = x3c.d0w;
	while (1)
	{
		v3n.push(a1m.u0y);
		if (!a1m.w3s)
		{
			let b9j = a1m;
			while (b9j.p3p)
			{
				b9j = b9j.p3p;
			}
			if (!b9j.w3s)
			{
				break;
			}
		}
		if (a1m.w3s)
		{
			a1m = a1m.w3s;
		}
		else
		{
			let b9j = a1m;
			while (b9j.p3p)
			{
				b9j = b9j.p3p;
			}
			a1m = b9j.w3s;
		}
	}
	return v3n.reverse();
}


a1t()
{
	this.m7j = new v0r();
	this.t9y = null; 
  
}


r1l()
{
	let v3n = [];
	let u5v = this.t9y;
	while (u5v)
	{
		v3n.push(u5v.u0y);
		u5v = u5v.v8b;
	}
	return v3n;
}


}

const b4c =
{
	j0j : 0,
	u6l : 1,
	g7i : 2,
	v2w : 3,
	o9f : 4,
	l6d : 5,
	e7o : 6,
	o0g : 7,
	i8a : 8,
	o5y : 9,
	g3o : 10,
	y5i : 11,
	x7q : 12,
	o1x : 13,
	a7e : 14,
	j7i : 15
};

const s5c =
[
	[ b4c.j0j,     						  ""    ],
	[ b4c.u6l,        "\x2b\x26\x23\x38\x32\x31\x31\x3b" ],
	[ b4c.g7i, 						"\x26\x23\x31\x37\x37\x3b" ],
	[ b4c.v2w,		"\x26\x23\x31\x30\x38\x36\x36\x3b"  ],
	[ b4c.o9f, 							"\x3d"   ],
	[ b4c.l6d,  							"\x26\x23\x38\x37\x33\x34\x3b" ],
	[ b4c.e7o,  	"\x26\x23\x31\x30\x38\x36\x35\x3b"],
	[ b4c.o0g, 						"\x26\x23\x38\x37\x32\x33\x3b" ],
	[ b4c.i8a, 				"\x26\x23\x38\x32\x31\x31\x3b\x2b"],
	[ b4c.o5y,						"\x26\x23\x38\x37\x37\x33\x3b" ],
	[ b4c.g3o, 						"\x26\x23\x38\x36\x34\x36\x3b" ],
	[ b4c.y5i,  						"\x26\x23\x38\x35\x39\x33\x3b" ],
	[ b4c.x7q, 								"\x26\x23\x38\x35\x39\x34\x3b" ],
	[ b4c.o1x, 					"\x26\x23\x38\x38\x35\x33\x3b" ],
	[ b4c.a7e,		"\x26\x23\x31\x30\x32\x32\x37\x3b"],
	[ b4c.j7i, 								"\x4e"   ]
];

function l3m(n9s)
{
	return s5c[n9s][1];
}


const b4f =
{
	z0x : 0,
	x2e : 1,
	p4n : 2
};

const u9g =
{
	j0j : 0,
	r3k : 1,
	s7m : 2,
	l6w : 3,
	z3n : 4,
	j3g : 5,
	q9g : 6,
	z8s : 7,
	x3x : 8,
	n4n : 9,
	q4x : 10,
	d6h : 11
};

/*
TO DO
- Aanpassen voor tekst after van d8s daar kan dia inzitten (zie c++)
- Vette tekst en niet vette r3k testen bij wel/niet MultiPV
*/
class c9o
{

constructor()
{
	this.j2x = new z1b();
  this.i3h = true;
  this.f8o = false;
  this.r5n = true;
  this.b2b = true;
  this.h5w = b4f.z0x;
  this.w3m = false;
  this.x5k = true;
 	this.o5x = true;
 	this.e0h = -1;
  this.w7l = false;
  this.z3x = false;
	this.u8e = false;
	this.d4a = true;
  this.r8e = false;
  this.t2m = false;
  this.k0v = 0;
	this.g9u = true;
  this.m7s = null;
 	this.a5l = u9g.j0j;
}

e4e(v3n)
{
	this.m7s = v3n;
 	let y5m = this.m7s.y5m();
	let x1z = this.m7s.x1z();
	this.a5l = u9g.j0j;
	this.d4a = true;
	this.z3x = false;
	this.u8e = false;
	this.w7l = false;
	this.r8e = this.m7s.z9l();
	this.g9u = true;
	this.k0v = 0;

	if (this.w3m)
	{
		this.y3m(u9g.s7m);
		this.c3z();
	}
	else
	{
    
    if (this.h5w == b4f.x2e ||
      (this.h5w == b4f.p4n && !x1z.m5x()))
    {
      if (this.b2b)
      {
        this.u2k(y5m, x1z, k0v);
        this.d4a = true;
      }
    }

    this.y3m((this.r8e && !this.z8f) ? u9g.r3k : u9g.s7m);
    this.f4c(this.r8e);
    this.v9t(y5m, "");
    this.q8u(y5m, this.m7s.w1p().z8s);

    if (this.m7s.z4c())
    {
      this.o5m();
    }
   	this.y3m(u9g.j0j);
   	this.o2x();
  }
}

c3z()
{
	let x3c = this.m7s.y5m();
	let a3k = this.m7s.a3k(x3c);
	for (let i = 0; i < a3k; i++)
	{
    this.j2x.c3l('<div class="variation-row">');
		x3c = this.m7s.y5m();
  	let l6q = this.m7s.x1z();
	  let a2y = this.m7s.o7x();
		this.m7s.l1n(x3c, i);
		this.d4a = true;
		let h5y = true;
		let u0y = x3c.u0y;
		let q9g = u0y.q9g();
		if (q9g.length)
		{
			this.e4m(x3c, q9g);
		}
		this.y3m(u9g.s7m);
		do
		{
			if (h5y)
			{
				x3c.u0y.r8o();
			}
			this.e1w(x3c, l6q, a2y);
			if (h5y)
			{
				x3c.u0y.z7d(q9g);
				h5y = false;
			}
			if (this.m7s.q0r(x3c))
			{
				break;
			}
			l6q.v0o(x3c.u0y);
			if (l6q.m0s())
			{
				a2y++;
			}
			this.m7s.v0o(x3c);
		} while (true);
    this.j2x.c3l('<div');
	}
}

o5m()
{
  let e8c = 0;
 	let x3c = this.m7s.y5m();
	let l6q = this.m7s.x1z();
  let a2y = this.m7s.o7x();

	let t6y = 100000;
	if (this.e0h == 0)
	{
		return;
	}
	if (this.e0h != -1)
	{
		t6y = this.e0h;
	}
	let i8b = a2y + t6y - 1;
	this.d4a = true;
	while (true)
	{
		let a3k = this.m7s.a3k(x3c);
		while (a2y <= i8b && !this.m7s.q0r(x3c))
		{
      this.m7s.v0o(x3c);
    	this.y3m((this.r8e && !this.z8f) ? u9g.r3k : u9g.s7m);
			this.e1w(x3c, l6q, a2y);
			l6q.v0o(x3c.u0y.u1n());
 			if (l6q.m0s())
			{
				a2y++;
			}
			if (this.o5x && a3k > 1)
			{
				break;
			}
			a3k = this.m7s.a3k(x3c);
		}
		if (!a3k || a2y > i8b)
		{
			return;
		}
    l6q.y9l(x3c.u0y.u1n());
		if (l6q.n3a())
		{
			a2y--;
		}
    this.m7s.y9l(x3c);
		for (let i = 1; i < a3k; i++)
		{
      e8c++;
      let c0u = "<span class=\"tdline\" data-level=\"";
      c0u += e8c.toString();
      c0u += "\">";
      this.j2x.c3l(c0u);
			this.q2f(u9g.l6w);
			this.v1n("\x5b", true);
			let j3g = '';
      this.e5j(x3c, l6q, a2y, i, j3g, e8c);
			this.y3m(u9g.l6w);
			this.v1n("\x5d", true);
      this.j2x.c3l("\x3c\x2f\x73\x70\x61\x6e\x3e");
      e8c--;
     	this.y3m((this.r8e && !this.z8f) ? u9g.r3k : u9g.s7m);
		}
		this.q2f(this.a5l);
    this.m7s.v0o(x3c);
    l6q.v0o(x3c.u0y.u1n());
		if (l6q.m0s())
		{
			a2y++;
		}
		this.d4a = true;
	}
}

e1w(x3c, l6q, a2y)
{
	if (this.m7s.s4j(x3c))
	{
		return;
	}
 	let u0y = x3c.u0y;

	let i1t = '';
  let j5l = false;
  if (this.i3h)
	{
		if (u0y.j6e())
		{
			if (!this.m7s.s4j(x3c))
			{
        let h7c = x3c.p9r();
        this.m7s.y9l(h7c);
        if (h7c.u0y)
        {
  				if (h7c.u0y.h1t())
	  			{
		  			j5l = true;
			  	}
        }
			}
		}
  }
	if (this.z3x)
	{
		i1t = "\x28";
		this.z3x = false;
		if (this.i3h && u0y.e4g())
		{
			this.v1n("\x28", true);
			let b2u = this.a5l;
			this.e4m(x3c, u0y.q9g());
			this.y3m(b2u);
			i1t = "";
      j5l = true;
		}
	}
	else
	{
		if (this.i3h && u0y.e4g())
		{
  	  let b2u = this.a5l;
	  	this.e4m(x3c, u0y.q9g());
		  this.y3m(b2u);
      j5l = true;
    }
	}
	if (u0y.e7m())
	{
		i1t += d4k(u0y.j3g());
	}
	let z0u = u0y.c1n();
	if (z0u)
	{
    i1t += a2y;
		i1t += '.';
	}
	else
	{
		if (this.d4a || j5l)
		{
 			i1t += a2y;
			i1t += "\x2e\x2e\x2e";
		}
	}
	i1t += m9t(l6q, u0y.u1n(), false);
	if (u0y.j5x())
	{
		i1t += q2l(u0y.style());
	}
	if (u0y.o6h())
	{
		i1t += l3m(u0y.n9s());
	}
	if (u0y.v4k())
	{
		i1t += "\x20\x45\x6e\x64\x20\x4f\x66\x20\x47\x61\x6d\x65";
  }
	if (this.u8e || this.w7l)
	{
		if (this.m7s.q0r(x3c) && (!this.i3h || !u0y.h1t()))
		{
			if (this.u8e)
			{
				i1t += "\x29";
				this.u8e = false;
			}
			else
			{
				i1t += "\x3b";
				this.w7l = false;
			}
		}
	}
	this.v9t(x3c, i1t);
	this.d4a = false;

	if (u0y.i1g())
	{
		let z8s = u0y.z8s();
    let s0h = z8s.indexOf("\x5b\x23\x5d");
		let q2q = z8s.substring(0, s0h);
	  let k7i = z8s.substring(s0h + 3);
		if (q2q.length)
		{
			this.q8u(x3c, q2q);
		}
		this.k0v++;
		if (this.b2b)
		{
			this.q2f(u9g.j0j);
      this.u2k(x3c, l6q, this.k0v);
			this.d4a = true;
		}
		if (k7i.length)
		{
			this.q8u(x3c, k7i);
		}
	}
	else
	{
		this.q8u(x3c, u0y.z8s());
	}

  if (u0y.v4k())
	{
    this.j2x.i5y("\x3c\x64\x69\x76\x3e\x26\x6e\x62\x73\x70\x3b\x3c\x2f\x64\x69\x76\x3e"); 
   	this.o2x();
 	  this.f4c(false); 
 	  this.t2m = true;
	}
}

y3m(i2y)
{
	if (i2y != this.a5l)
	{
		this.y3t();
		this.a5l = i2y;
		this.n8j();
	}
}

n8j()
{
}

y3t()
{
	this.a5l = u9g.j0j;
}

q2f(i2y)
{
	this.y3t();
	this.a5l = u9g.j0j;
  
  
  
  
  this.j2x.i5y("\x3c\x62\x72\x3e"); 
	if (i2y != u9g.j0j)
	{
		this.a5l = i2y;
		this.n8j();
	}
}

u2k(x3c, l6q, p7t)
{
  this.g9u = true;
	let c0u = "<span class=\"tddia\" movenr=\"";
  c0u += this.m7s.p6h(x3c).toString();
	c0u += "\">",
	this.j2x.c3l(c0u);
	this.j2x.c3l("\x3c\x63\x61\x6e\x76\x61\x73\x3e\x3c\x2f\x63\x61\x6e\x76\x61\x73\x3e");
	this.j2x.c3l("\x3c\x2f\x73\x70\x61\x6e\x3e");
	this.d4a = true;
}

u5f(x3c, a1z)
{
  this.a2e(x3c);
	this.h7n(a1z);
  this.o3o();
}

e5j(v8e, i7j, a2y, r1k, j3g, e8c)
{
  let x3c = v8e.p9r();
  let l6q = i7j.p9r();

	if (j3g.length)
	{
		this.y3m(u9g.j3g);
		let l9z = j3g;
		l9z += "\x29";
    let c0u = "<span class=\"tdprefix\">";
    this.j2x.c3l(c0u);
  	this.v1n(l9z);
    this.j2x.c3l("\x3c\x2f\x73\x70\x61\x6e\x3e");
	}
	let a3k = 0;
	let g9x = 1;
  this.m7s.l1n(x3c, r1k);
	this.d4a = true;
	do
	{
		this.y3m(u9g.l6w);
		this.e1w(x3c, l6q, a2y);
		if (a3k > 1)
		{
      this.m7s.y9l(x3c);
      this.a2h(x3c, l6q, a2y);
      this.m7s.v0o(x3c);
			this.d4a = true;
		}
		l6q.v0o(x3c.u0y.u1n());
		if (l6q.m0s())
		{
			a2y++;
		}
		a3k = this.m7s.a3k(x3c);
		if (a3k == 0)
		{
			break;
		}
		if (a3k > 1)
		{
			if (!this.m7s.o7o(x3c))
			{
				break;
			}
		}
    this.m7s.v0o(x3c);
		g9x++;
	} while (true);

	if (this.m7s.q0r(x3c))
	{
		return;
	}

	let r5b = j3g.length;
	let l9z = '';
	let w3c = 1;
	for (let i = 0; i < a3k; i++)
	{
		if (r5b == 0)
		{
      l9z = String.fromCharCode('A'.charCodeAt() + w3c - 1);
		}
		else if (r5b == 1)
		{
      l9z = j3g;
      l9z += w3c;
		}
		else if (r5b == 2)
		{
      l9z = j3g;
      l9z += String.fromCharCode('a'.charCodeAt() + w3c - 1);
		}
		else
		{
      l9z = j3g;
      l9z += w3c;
		}

    let c0u = "<span class=\"tdline\" data-level=\"";
    c0u += e8c.toString();
    c0u += "\">";
    this.j2x.c3l(c0u);
  	this.q2f(this.a5l);
    this.e5j(x3c, l6q, a2y, i, l9z, e8c);
    this.j2x.c3l("\x3c\x2f\x73\x70\x61\x6e\x3e");
		w3c++;
	}
}

a2h(v8e, i7j, a2y)
{
  let x3c = v8e.p9r();
  let l6q = i7j.p9r();

	this.y3m(u9g.z3n);
	this.z3x = true;
	this.w7l = false;
	let a3k = this.m7s.a3k(x3c);
	for (let i = 1; i < a3k; i++)
	{
		if (i == a3k - 1)
		{
			this.u8e = true;
		}
		if (i < a3k - 1)
		{
			this.w7l = true;
		}
    this.u6t(x3c, l6q, a2y, i);
		if (this.w7l)
		{
			this.y3m(u9g.z3n);
			this.v1n("\x3b", false);
			this.w7l = false;
		}
	}
	this.y3m(u9g.z3n);
	if (this.u8e)
	{
		this.v1n("\x29", false);
		this.u8e = false;
	}
}

u6t(v8e, i7j, a2y, r1k)
{
  let x3c = v8e.p9r();
  let l6q = i7j.p9r();

  this.m7s.l1n(x3c, r1k);
	let g9x = 0;
	this.d4a = true;
	do
	{
		g9x++;
		this.y3m(u9g.z3n);
		this.e1w(x3c, l6q, a2y);
		if (this.m7s.q0r(x3c))
		{
			break;
		}
		l6q.v0o(x3c.u0y.u1n());
		if (l6q.m0s())
		{
			a2y++;
		}
    this.m7s.v0o(x3c);
	} while (true);
}

v9t(x3c, i1t)
{
	if (i1t.length)
	{
 		this.b5z(x3c, i1t);
	}
	else
	{
		if (this.x5k)
    {
      this.b5z(x3c, "\x5b\x2e\x2e\x2e\x5d");
    }
	}
	if (x3c.u0y)
	{
		if (x3c.u0y.z4a() || x3c.u0y.k6j())
		{
			this.w9i(x3c, u9g.x3x);
		}
		if (x3c.u0y.i1g())
		{
		}
		if (x3c.u0y.v8d())
		{
			this.w9i(x3c, u9g.q4x);
		}
		if (x3c.u0y.x8q())
		{
			this.w9i(x3c, u9g.n4n);
		}
	}
	else
	{
		if (this.m7s.f1k() || this.m7s.l4f())
		{
			this.w9i(x3c, u9g.x3x);
		}
		if (this.m7s.v0j())
		{
		 	this.w9i(x3c, u9g.n4n);
		}
	}
}

v1n(i1t, t2o)
{
	if (i1t.length == 0)
	{
		return;
	}
	if (!this.g9u && t2o)
	{
		this.j2x.i5y("\x20");
	}
	this.j2x.i5y(i1t);
	this.g9u = false;
}

e4m(x3c, q9g)
{
	if (this.i3h && q9g.length)
	{
		this.y3m(u9g.q9g);
		this.u5f(x3c, q9g);
	}
}

q8u(x3c, z8s)
{
	if (this.i3h && z8s.length)
	{
		this.y3m(u9g.z8s);
		this.u5f(x3c, z8s);
	}
}

h7n(a1z)
{
  let m6e = a1z;
  let z0m = m6e.replaceAll("\x3c\x62\x72\x3e\x3c\x62\x72\x3e", "\x3c\x62\x72\x3e");
  let p0y = z0m.replaceAll("\x3c\x62\x72\x3e\x3c\x62\x72\x3e", "\x3c\x62\x72\x3e");
  let e6u = p0y.replaceAll("\x3c\x62\x72\x3e", "\x3c\x64\x69\x76\x3e\x26\x6e\x62\x73\x70\x3b\x3c\x2f\x64\x69\x76\x3e");
  let s = e6u;
  this.j2x.i5y(s);
}

b5z(x3c, i1t)
{
	if (i1t.length == 0)
	{
		return;
	}
	if (!this.g9u)
	{
		this.j2x.i5y("\x20");
	}
  let v5h = '';
  if (x3c.u0y)
  {
  	if (x3c.u0y.a5b())
	  {
		  if (x3c.u0y.z4y() == o9q.n2g)
  		{
	  		v5h = "\x74\x64\x6d\x6f\x76\x65\x2d\x63\x72\x69\x74\x2d\x6f\x70\x65\x6e\x69\x6e\x67";
		  }
  		else if (x3c.u0y.z4y() == o9q.g8o)
	  	{
		  	v5h = "\x74\x64\x6d\x6f\x76\x65\x2d\x63\x72\x69\x74\x2d\x6d\x69\x64\x64\x6c\x65";
  		}
	  	else if (x3c.u0y.z4y() == o9q.i6d)
		  {
  			v5h = "\x74\x64\x6d\x6f\x76\x65\x2d\x63\x72\x69\x74\x2d\x65\x6e\x64";
	  	}
  	}
  }
	let t2z = "<span class=\"";
	if (v5h.length == 0)
	{
		t2z += "tdmove\" movenr=\"";
	}
	else
	{
		t2z += "\x74\x64\x6d\x6f\x76\x65\x20" + v5h + "\" movenr=\"";
	}
  t2z += this.m7s.p6h(x3c).toString();
  t2z += "\"";
	t2z += "\x3e",
	t2z += i1t;
	t2z += "\x3c\x2f\x73\x70\x61\x6e\x3e";

	this.j2x.c3l(t2z);
	this.g9u = false;
}

w9i(x3c, i2y)
{
  if (i2y == u9g.x3x)
  {
    this.k1u(x3c);
  }
  else if (i2y == u9g.n4n)
  {
    this.i7y(x3c);
  }
}

k1u(x3c)
{
	let c0u = "<span class=\"tdcolors\" movenr=\"";
  c0u += this.m7s.p6h(x3c).toString();
	c0u += "\">",
	this.j2x.c3l(c0u);
	this.j2x.c3l("\x3c\x2f\x73\x70\x61\x6e\x3e");
}

i7y(x3c)
{
	let c0u = "<span class=\"tdmedal\" movenr=\"";
  c0u += this.m7s.p6h(x3c).toString();
	c0u += "\">",
	this.j2x.c3l(c0u);
	this.j2x.c3l("\x3c\x63\x61\x6e\x76\x61\x73\x3e\x3c\x2f\x63\x61\x6e\x76\x61\x73\x3e");
	this.j2x.c3l("\x3c\x2f\x73\x70\x61\x6e\x3e");
}

f4c(c9y)
{
 	let c0u = "<span class=\"tdline\"";
	if (c9y)
	{
		c0u += " data-commented=\"1\"";
	}
	c0u += " data-level=\"0\">";
	this.j2x.i5y(c0u);
}

o2x()
{
  this.j2x.c3l("\x3c\x2f\x73\x70\x61\x6e\x3e");
}

a2e(x3c)
{
  let w3l = "\x74\x64\x63\x6f\x6d\x6d\x65\x6e\x74";
  if (this.f8o)
  {
    w3l += "\x20\x69\x73\x2d\x62\x6f\x6c\x64";
  }
  let c0u = "<span class=\"" + w3l + "\" movenr=\"";
  c0u += this.m7s.p6h(x3c).toString();
  c0u += "\">";
  this.j2x.i5y(c0u);
}

o3o()
{
  this.j2x.c3l("\x3c\x2f\x73\x70\x61\x6e\x3e");
}

m7d(n9s)
{
  this.x5k = n9s;
}

z1f(n9s)
{
  this.f8o = n9s;
}

l3z(n9s)
{
  this.r5n = n9s;
}

k1n(n9s)
{
  this.w3m = n9s;
}

} 
const c3j =
{
	x7q : 1,
	a2l : 2,
	o1q : 3
};

class k7q
{

constructor()
{
	this.c6i = 0;
	this.q8c = 0;
	this.type = c3j.x7q;
}

p9r()
{
	let e9r = new k7q();
	e9r.c6i = this.c6i;
	e9r.q8c = this.q8c;
	e9r.type = this.type;
	return e9r;
}

}

function c4d(c6i, q8c, type)
{
	let s = new k7q();
	s.c6i = c6i;
	s.q8c = q8c;
	s.type = type;
	return s;
}
class s7c
{

constructor()
{
	this.q1s = [];
}

p9r()
{
	let c2q = new s7c();
	for (const f3z of this.q1s)
	{
		c2q.add(f3z.p9r());
	}
	return c2q;
}

c4m()
{
	this.q1s.length = 0;
}

z7r()
{
	return this.q1s.length == 0;
}

q8e()
{
	return this.q1s.length;
}

add(f3z)
{
	let u9j = f3z.p9r();
	this.q1s.push(u9j);
}

}

const c7m =
{
	i1u : 0,
	c4p : 1,
	n7e : 2
};

class r3c
{

constructor()
{
	this.c6b = 0;
	this.type = c7m.i1u;
}

p9r()
{
	let p9c = new r3c();
	p9c.c6b = this.c6b;
	p9c.type = this.type;
	return p9c;
}

}

function p3a(c6b, type)
{
	let y2p = new r3c();
	y2p.c6b = c6b;
	y2p.type = type;
	return y2p;
}

class x6l
{

constructor()
{
	this.s6p = [];
}

p9r()
{
	let i1a = new x6l();
	for (const e6o of this.s6p)
	{
		i1a.add(e6o.p9r());
	}
	return i1a;
}

c4m()
{
	this.s6p.length = 0;
}

z7r()
{
	return this.s6p.length == 0;
}

q8e()
{
	return this.s6p.length;
}

add(l8r)
{
	let g3z = l8r.p9r();
	this.s6p.push(g3z);
}

}

const h7x =
{
	e7x    : 0,
	i7t  : 1,
	j1s  : 2,
	k6a    : 3,
  r9g   : 4,
	x7m    : 5,
};


function l1s(x9m)
{
	let i1t = '';
	switch (x9m)
	{
		case h7x.e7x:
			i1t = "\x50";
			break;
		case h7x.i7t:
			i1t = "\x4e";
			break;
		case h7x.j1s:
			i1t = "\x42";
			break;
		case h7x.k6a:
			i1t = "\x52";
			break;
		case h7x.r9g:
			i1t = "\x51";
			break;
		case h7x.king:
			i1t = "\x4b";
			break;
	}
	return i1t;
}

class i0b
{

constructor()
{
  this.w4z = 0;
	this.g1b = new m3k();
	this.v3n = new e5q();
}

p9r()
{
	let v9e = new i0b();
  v9e.w4z = this.w4z;
	v9e.g1b = this.g1b.p9r();
	v9e.v3n = this.v3n.p9r();
	return v9e;
}

}

const c9b = 	 		"\x23\x37\x42\x38\x32\x39\x35";
const q6z =			"\x23\x39\x46\x39\x46\x39\x46";
const z0k = 			    "\x23\x37\x42\x38\x32\x39\x35";
const i8y = 		  "\x23\x46\x46\x46\x46\x46\x46";
const s3s =       "\x23\x44\x30\x42\x31\x39\x34";

const k3c	   = "\x23\x45\x31\x33\x31\x32\x39";
const o5b	 = "\x23\x33\x38\x39\x43\x31\x33";
const x9b = "\x23\x45\x32\x42\x36\x32\x38";

const t8e	 = "\x23\x45\x31\x33\x31\x32\x39";
const j8c	 = "\x23\x33\x38\x39\x43\x31\x33";
const w2y	   = "\x23\x45\x32\x42\x36\x32\x38";

class s0a
{

constructor()
{
	this.e2q = null;
	this.y6y = false;
	this.z3y = null;
	this.b2c = null;
	this.r9e = null;
	this.c0k = 0;
	this.b0l = 0;
	this.f7a = 0;
	this.x7c = 0;
	this.s7w = 0;
	this.q0o = 0;
	this.x2h = new j6p();
	this.l6q = new z4m();
	this.e6v = new s7c();
	this.a7a = new x6l();
  this.y1u = new q5w();
  this.g4e = true;
	this.e0v = true;
	this.r0f = true;
	this.e5i = false;
	this.r1a = c9b;
	this.y8a = q6z;
	this.c5v = u7f;
	this.d4v = w7n;
	this.n4a = w7n;
	this.n6r = l3x;
	this.s7u = true;
	this.c0b = a7i;
	this.r4h = a7i;
	this.o3z = false;
	this.v0m = [];
	this.w4g = 0;
}

s4l(e2q)
{
	this.e2q = e2q;
}

c3o(x2h)
{
	this.x2h = x2h;
	this.f7a = x2h.f7a();
	this.x7c = x2h.f7a();

	this.c0k = (this.e2q.width - this.f7a) / 2;
	let top = (this.e2q.height - this.x7c) * 0.25;
	if (top > 0 && top < 16) top = 16;
	this.b0l = top;
	this.s7w = this.c0k + this.f7a - 1;
	this.q0o = this.b0l + this.x7c - 1;
	this.y6y = false;
	this.m1p();
}

k2y(l6q)
{
	this.l6q = l6q.p9r();
	this.e6v.c4m();
	this.a7a.c4m();
}

b2e(e6v)
{
	this.e6v = e6v.p9r();
}

s3z(a7a)
{
	this.a7a = a7a.p9r();
}

h2p(u0y)
{
  this.y1u = u0y.p9r();
}

z5w(e5i)
{
	this.e5i = e5i;
}

t1c()
{
	this.e5i = !this.e5i;
}

a3c()
{
	if (!this.e2q) return;
	if (this.f7a <= 0 || this.x7c <= 0)
	{
		return;
	}
	this.z6v();
}

a9n()
{
	let v7w = this.x2h.v7w;
	if (this.y6y)
	{
		return;
	}
	this.y6y = true;
	if (v7w == k5t.s0p)
	{
  	this.z3y = j2k.c0f("\x69\x6d\x61\x67\x65\x73\x2f\x62\x6f\x61\x72\x64\x2f\x4c\x69\x67\x68\x74\x53\x71\x75\x61\x72\x65");
  	this.b2c = j2k.c0f("\x69\x6d\x61\x67\x65\x73\x2f\x62\x6f\x61\x72\x64\x2f\x44\x61\x72\x6b\x53\x71\x75\x61\x72\x65");
		this.r9e = j2k.c0f("\x69\x6d\x61\x67\x65\x73\x2f\x62\x6f\x61\x72\x64\x2f\x4d\x61\x72\x67\x69\x6e");
	}
}

m1p()
{
	this.a9n();
	let v7w = this.x2h.v7w;
	if (v7w == k5t.s0p)
	{
		this.s7u = false;
		this.e0v = false;
		this.r0f = false;
		this.c5v = "\x23\x46\x46\x46\x46\x39\x37";
		this.d4v = "\x23\x39\x42\x32\x45\x33\x31";
		this.n4a = b0y;
	}
}

z6v()
{
	this.m1p();
	if (this.x2h.v7w == k5t.s0p)
	{
		let l7o = j2k.c0f("\x69\x6d\x61\x67\x65\x73\x2f\x62\x6f\x61\x72\x64\x2f\x42\x6f\x61\x72\x64\x42\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64");
		this.s2p(new k0x(0, 0, this.e2q.width, this.e2q.height), l7o);
	}
	this.w1k();  
	this.q6i(); 
	this.e3t(); 
  if (chess)
  {
	  this.e1f();
  }
  else
  {
	  this.v7p();
  	this.o3n();
  }
  
  this.a2a();
 	this.q7h();
 	this.v9s();
 	this.y8o();
	this.j4o(); 
	this.j2t();      
}

w1k()
{
	let m6w = this.b0l;
	let j9z = this.c0k;
	let q3r = this.s7w;
	let w4r = this.q0o;
	let t2a = this.x2h.z0a;
	this.b4q(new k0x(j9z, m6w, q3r, m6w+t2a-1), this.d4v);
	this.b4q(new k0x(j9z, w4r-t2a+1, q3r, w4r), this.n4a);
	this.b4q(new k0x(j9z, m6w, j9z+t2a-1, w4r), this.d4v);
	this.b4q(new k0x(q3r-t2a+1, m6w, q3r, w4r), this.n4a);
}

q6i()
{
	let z0a = this.x2h.z0a;
	let u9e = this.x2h.u9e;
	if (!u9e)
	{
		return;
	}
	if (this.s7u || !this.r9e)
	{
		this.u4s(this.n6r);
	}
	else
	{
		let left = this.c0k + z0a;
		let top = this.b0l + z0a;
		let i8u = this.s7w - z0a;
		let f7k = this.b0l + z0a + u9e - 1;
		this.s2p(new k0x(left, top, i8u, f7k), this.r9e);

		left = this.c0k + z0a;
		top = this.b0l + z0a;
		i8u = this.c0k + z0a + u9e - 1;
		f7k = this.q0o - z0a;
		this.s2p(new k0x(left, top, i8u, f7k), this.r9e);

		left = this.c0k + z0a;
		top = this.q0o - z0a - u9e + 1;
		i8u = this.s7w - z0a;
		f7k = this.q0o - z0a;
		this.s2p(new k0x(left, top, i8u, f7k), this.r9e);

		left = this.s7w - z0a - u9e + 1;
		top = this.b0l + z0a;
		i8u = this.s7w - z0a;
		f7k = this.q0o - z0a;
		this.s2p(new k0x(left, top, i8u, f7k), this.r9e);
	}
}

u4s()
{
	let z0a = this.x2h.z0a;
	let u9e = this.x2h.u9e;
	if (!u9e)
	{
		return;
	}

	let left = this.c0k + z0a;
	let top = this.b0l + z0a;
	let i8u = this.s7w - z0a;
	let f7k = this.b0l + z0a + u9e - 1;
	this.b4q(new k0x(left, top, i8u, f7k), this.n6r);

	left = this.c0k + z0a;
	top = this.b0l + z0a;
	i8u = this.c0k + z0a + u9e - 1;
	f7k = this.q0o - z0a;
	this.b4q(new k0x(left, top, i8u, f7k), this.n6r);

	left = this.c0k + z0a;
	top = this.q0o - z0a - u9e + 1;
	i8u = this.s7w - z0a;
	f7k = this.q0o - z0a;
	this.b4q(new k0x(left, top, i8u, f7k), this.n6r);

	left = this.s7w - z0a - u9e + 1;
	top = this.b0l + z0a;
	i8u = this.s7w - z0a;
	f7k = this.q0o - z0a;
	this.b4q(new k0x(left, top, i8u, f7k), this.n6r);
}

j2t()
{
	if (this.x2h.d2d)
	{
  	if (!this.x2h.u9e)
  	{
	  	return;
  	}
		let n7y = "\x23\x30\x30\x30\x30\x30\x30";
		if (this.l6q.m0s())
		{
			n7y = "\x23\x45\x44\x44\x37\x39\x30";
		}
		else
		{
			n7y = "\x23\x30\x30\x30\x30\x30\x30";
		}
		let rect = this.c2m();
		let z4d = this.d1t();
		z4d.beginPath();
		z4d.fillStyle = n7y;
		let j8l = rect.f3w() * 0.40;
		z4d.arc(rect.j6q + rect.f3w()/2 - 1, rect.n8v + rect.k4s()/2 - 1,
			j8l, 0, 2 * Math.PI);
		z4d.fill();
	}
}

e3t()
{
	let j4r = b0y;
	let z0a = this.x2h.z0a;
	let u9e = this.x2h.u9e;
	let t2a = this.x2h.t2a;
	let m6w = this.b0l + z0a + u9e;
	let j9z = this.c0k + z0a + u9e;
	let q3r = this.s7w - z0a - u9e;
	let w4r = this.q0o - z0a - u9e;
	this.b4q(new k0x(j9z, m6w, q3r, m6w+t2a-1), j4r);
	this.b4q(new k0x(j9z, w4r-t2a+1, q3r, w4r), j4r);
	this.b4q(new k0x(j9z, m6w, j9z+t2a-1, w4r), j4r);
	this.b4q(new k0x(q3r-t2a+1, m6w, q3r, w4r), j4r);
}

d1t()
{
	return this.e2q.getContext('2d');
}

m2k(rect, n7y)
{
	let z4d = this.d1t();
	z4d.beginPath();
	z4d.lineWidth = "\x31";
	z4d.strokeStyle = n7y;
	z4d.rect(rect.j6q, rect.n8v, rect.f3w(), rect.k4s());
	z4d.stroke();
}

b4q(rect, n7y)
{
	let z4d = this.d1t();
	z4d.fillStyle = n7y;
	z4d.fillRect(rect.j6q, rect.n8v, rect.f3w(), rect.k4s());
}

s2p(rect, img)
{
	let z4d = this.d1t();
	let l3c = z4d.createPattern(img, 'repeat');
	z4d.fillStyle = l3c;
	z4d.fillRect(rect.j6q, rect.n8v, rect.f3w(), rect.k4s());
}

f5y(rect, img)
{
	let z4d = this.d1t();
	let l3c = z4d.createPattern(img, 'no-repeat');
	z4d.fillStyle = l3c;
	z4d.fillRect(rect.j6q, rect.n8v, rect.f3w(), rect.k4s());
}

q2r(c6b)
{
	let z3w = l4o;
	let f6u = t2c;
	if (this.e5i)
	{
		z3w = b8f(r7j(c6b));
		f6u = m0x(r7j(c6b));
	}
	else
	{
		z3w = b8f(c6b);
		f6u = m0x(c6b);
	}
	if (g5c(f6u))
	{
		z3w++;
	}
	else
	{
		z3w--;
	}
	return this.v5x(f6u, z3w);
}

v7p()
{
	for (const c6b of h0i)
	{
		this.f2e(c6b);
	}
}

f2e(c6b)
{
	this.f2t(this.q2r(c6b), c6b);
}

f2t(rect, c6b)
{
	let c0f = this.z3y;
	if (this.r0f)
	{
		this.z6g(rect, this.y8a);
		return;
	}
	if (!c0f)
	{
		this.z6g(rect, this.y8a);
		return;
	}

	let u2m = c0f.width;
	let r5f = c0f.height;
	let r0d = this.x2h.z4p;
	if (u2m < r0d || r5f < r0d)
	{
		this.f5y(rect, c0f);
		return;
	}

	let k7f = Math.trunc(u2m / this.x2h.z4p);
	let t9z = Math.trunc(r5f / this.x2h.z4p);
	if (k7f == 0)
	{
		k7f = 1;
	}
	if (t9z == 0)
	{
		t9z = 1;
	}

	let c1b = Math.trunc((c6b) / k7f);
	let g5q = (c6b) % k7f;
	let y = Math.trunc(c1b / t9z);
	c1b = c1b % t9z;

  let i9k = new k0x();
	i9k.j6q = g5q * this.x2h.z4p;
	i9k.n8v = c1b * this.x2h.z4p;
	i9k.o0c = (g5q + 1) * this.x2h.z4p - 1;
	i9k.d7v = (c1b + 1) * this.x2h.z4p - 1;
	let z4d = this.d1t();
	x4c(z4d, rect, c0f, i9k);
}

j0h(c6b)
{
	let z3w = l4o;
	let f6u = t2c;
	if (this.e5i)
	{
		z3w = b8f(r7j(c6b));
		f6u = m0x(r7j(c6b));
	}
	else
	{
		z3w = b8f(c6b);
		f6u = m0x(c6b);
	}
	return this.v5x(f6u, z3w);
}

o3n()
{
	for (const c6b of h0i)
	{
		this.t4u(c6b);
	}
}

t4u(c6b)
{
	this.u4m(this.j0h(c6b), c6b);
}

u4m(rect, c6b)
{
	let c0f = this.b2c;
	if (this.e0v)
	{
		this.z6g(rect, this.r1a);
		return;
	}
	if (!c0f)
	{
		this.z6g(rect, this.r1a);
		return;
	}

	let u2m = c0f.width;
	let r5f = c0f.height;
	let r0d = this.x2h.z4p;
	if (u2m < r0d || r5f < r0d)
	{
		this.f5y(rect, c0f);
		return;
	}

	let k7f = Math.trunc(u2m / this.x2h.z4p);
	let t9z = Math.trunc(r5f / this.x2h.z4p);
	if (k7f == 0)
	{
		k7f = 1;
	}
	if (t9z == 0)
	{
		t9z = 1;
	}

	let c1b = Math.trunc((c6b) / k7f);
	let g5q = (c6b) % k7f;
	let y = Math.trunc(c1b / t9z);
	c1b = c1b % t9z;

  let i9k = new k0x();
	i9k.j6q = g5q * this.x2h.z4p;
	i9k.n8v = c1b * this.x2h.z4p;
	i9k.o0c = (g5q + 1) * this.x2h.z4p - 1;
	i9k.d7v = (c1b + 1) * this.x2h.z4p - 1;
	let z4d = this.d1t();
	x4c(z4d, rect, c0f, i9k);
}

v5x(f6u, z3w)
{
	let z0a = this.x2h.z0a;
	let u9e = this.x2h.u9e;
	let t2a = this.x2h.t2a;
	let z4p = this.x2h.z4p;
	let rect = new k0x();
	rect.j6q = this.c0k + z0a + u9e +	t2a + (z3w) * z4p;
	rect.o0c = rect.j6q + z4p - 1;
	rect.n8v = this.b0l + z0a + u9e +	t2a + (c4f - f6u - 1) * z4p;
	rect.d7v = rect.n8v + z4p - 1;
	return rect;
}

w9z(c6b)
{
	let z3w = l4o;
	let f6u = t2c;
	if (this.e5i)
	{
		z3w = b8f(r7j(c6b));
		f6u = m0x(r7j(c6b));
	}
	else
	{
		z3w = b8f(c6b);
		f6u = m0x(c6b);
	}
	return this.v5x(f6u, z3w);
}

e1f()
{
	for (const c6b of h0i)
	{
		this.c9e(c6b);
	}
}

c9e(c6b)
{
	this.g3r(this.w9z(c6b), c6b);
}

g3r(rect, c6b)
{
	let u5o = isDarkSquare(c6b);
	let c0f = this.z3y;
	if (u5o)
	{
		c0f = this.b2c;
	}
	if (u5o)
	{
		if (this.e0v)
		{
			this.z6g(rect, this.r1a);
			return;
		}
		if (!c0f)
		{
			this.z6g(rect, this.r1a);
			return;
		}
	}
	else
	{
		if (this.r0f)
		{
			this.z6g(rect, this.y8a);
			return;
		}
		if (!c0f)
		{
			this.z6g(rect, this.y8a);
			return;
		}
	}

 	let u2m = c0f.width;
	let r5f = c0f.height;
	let r0d = this.x2h.z4p;
	if (u2m < r0d || r5f < r0d)
	{
		this.f5y(rect, c0f);
		return;
	}
	let k7f = Math.trunc(u2m / this.x2h.z4p);
	let t9z = Math.trunc(r5f / this.x2h.z4p);
	if (k7f == 0)
	{
		k7f = 1;
	}
	if (t9z == 0)
	{
		t9z = 1;
	}

	let c1b = Math.trunc((c6b) / k7f);
	let g5q = (c6b) % k7f;
	let y = Math.trunc(c1b / t9z);
	c1b = c1b % t9z;

  let i9k = new k0x();
	i9k.j6q = g5q * this.x2h.z4p;
	i9k.n8v = c1b * this.x2h.z4p;
	i9k.o0c = (g5q + 1) * this.x2h.z4p - 1;
	i9k.d7v = (c1b + 1) * this.x2h.z4p - 1;
	let z4d = this.d1t();
	x4c(z4d, rect, c0f, i9k);
}

z6g(rect, n7y)
{
	this.b4q(rect, n7y);
}

v9s()
{
	for (const c6b of h0i)
	{
		this.w7r(c6b);
	}
}

w1j(c6i, q8c, q2h)
{
	this.c0b = c6i;
	this.r4h = q8c;
	this.o3z = q2h;

	this.v0m.length = 0;
 	let j7l = this.w9z(c6i);
  let h8h = this.w9z(q8c);
	let c2h = this.x2h.z4p;

	let l4s = 32;
	if (c2h < 32)
	{
		l4s = c2h;
	}

  
	if (false)
	{
    
    
		let i6o = new x9h(j7l.j6q + c2h / 2, j7l.n8v + c2h / 2);
		let x8h = new x9h(h8h.j6q + c2h / 2, h8h.n8v + c2h / 2);
		let t0x = Math.abs(i6o.X - x8h.X);
		let u1y = Math.abs(i6o.Y - x8h.Y);
		let l8h = Math.atan2(x8h.X - i6o.X, i6o.Y - x8h.Y);
		let e0q = Math.sqrt(t0x*t0x + u1y*u1y) / 2;
		x8h.X = i6o.X + e0q * 2;
		x8h.Y = i6o.Y;
		let x3o = new x9h(i6o.X + e0q, i6o.Y);
		let n2o = Math.PI / l4s;
		let y7k = c2h * 0.40;
		let z1e = Math.PI;
		let q3y = (h8h.j6q > j7l.j6q && h8h.n8v < j7l.n8v) ||
			(h8h.j6q < j7l.j6q && h8h.n8v > j7l.n8v);
		for (let i = 1; i < l4s; i++)
		{
			let m2k = new k0x();
			if (q3y)
			{
				z1e -= n2o;
			}
			else
			{
				z1e += n2o;
			}
			let j0p = Math.cos(z1e);
			let i8l = Math.sin(z1e);
			let g5y = new x9h(x3o.X + e0q * j0p,
				x3o.Y - y7k * i8l);
			this.v0m.push(d6x(g5y, i6o, l8h - Math.PI / 2));
		}
	}
	else
	{
		let i6o = new x9h(j7l.j6q + c2h / 2, j7l.n8v + c2h / 2);
		let x8h = new x9h(h8h.j6q + c2h / 2, h8h.n8v + c2h / 2);
		let w0v = (x8h.X - i6o.X) / l4s;
		let q3z = (x8h.Y - i6o.Y) / l4s;
		for (let i = 1; i < l4s; i++)
		{
			this.v0m.push(new x9h(i6o.X + i * w0v, i6o.Y + i * q3z));
		}
	}
	this.v0m.push(new x9h(h8h.j6q + c2h / 2, h8h.n8v + c2h / 2));
	this.w4g = 0;
}

t2h()
{
	this.c0b = a7i;
	this.r4h = a7i;
}

l2q()
{
	this.a3c(); 

	let g6w = this.v0m[this.w4g];
	let z4p = this.x2h.z4p;
	let m2k = new k0x();
	m2k.j6q = g6w.X - z4p / 2;
	m2k.n8v = g6w.Y - z4p / 2;
	m2k.j3a(z4p);
	m2k.u2s(z4p);
 	let z4d = this.d1t();
	t1a(z4d, m2k, this.l6q.t9a(this.c0b));

	this.w4g++;
	if (this.w4g >= this.v0m.length)
	{
		let x9m = this.l6q.t9a(this.c0b);
		this.l6q.q0e(this.c0b, o8u.z7r);
		this.l6q.q0e(this.r4h, x9m);
		this.t2h();
		return true;
	}
	else
	{
		return false;
	}
}

w7r(c6b)
{
	if (c6b == this.c0b)
	{
		return;
	}
	let j6t = this.w9z(c6b);
 	let z4d = this.d1t();
	t1a(z4d, j6t, this.l6q.t9a(c6b));
}

j4o()
{
	if (!this.x2h.i5k)
	{
    return;
  }

 	let t2a = this.x2h.t2a;
	let z0a = this.x2h.z0a;
	let u9e = this.x2h.u9e;
	let z4p = this.x2h.z4p;

	let i2w = new k0x();
	i2w.j6q = this.c0k + z0a + u9e;
	i2w.n8v = this.b0l + z0a + u9e;
	i2w.j3a(c4f * z4p + 2 * t2a);
	i2w.u2s(c4f * z4p + 2 * t2a);

 	let z4d = this.d1t();
  let h8r = c0l(z4d, u9e-8);

  j4o(z4d,
    i2w,
    this.x2h,
    h8r,
    l8m.l7z,
    this.c5v,
    this.e5i,
    u9e);
}

p9h(c6b, n7y)
{
	let rect = this.w9z(c6b);
	let z4d = this.d1t();
  z4d.save();
  z4d.globalAlpha = 0.25; 
	z4d.fillStyle = n7y;
	z4d.fillRect(rect.j6q, rect.n8v, rect.f3w(), rect.k4s());
  z4d.restore();
}

a2a()
{
	if (this.g4e)
	{
		if (!this.y1u.z7r())
		{
      let n7y = "\x23\x38\x30\x30\x30\x38\x30"; 
			this.p9h(this.y1u.c6i, n7y);
			this.p9h(this.y1u.q8c, n7y);
		}
  }
}

q7h()
{
	for (const e6o of this.a7a.s6p)
	{
		this.z4u(e6o);
	}
}

z4u(e6o)
{
	let rect = this.w9z(e6o.c6b);
	let s6n = '';
	switch (e6o.type)
	{
		case c7m.i1u:
			s6n = k3c;
			break;
		case c7m.c4p:
			s6n = o5b;
			break;
		case c7m.n7e:
			s6n = x9b;
			break;
	}
	let c2h = this.f7a / 10;
	let z4d = this.d1t();
  /* dit is met roundrect
  y1r(rect, 5);
	z4d.lineWidth = c2h / 15;
	z4d.strokeStyle = s6n;
	e9m(z4d, rect.j6q, rect.n8v, rect.f3w(), rect.k4s(), 10);
  */
  
  z4d.save();
  z4d.globalAlpha = 0.7; 
	z4d.fillStyle = s6n;
	z4d.fillRect(rect.j6q, rect.n8v, rect.f3w(), rect.k4s());
  z4d.restore();
}

y8o()
{
	for (const f3z of this.e6v.q1s)
	{
		this.v9m(f3z);
	}
}

v9m(f3z)
{
	let c6i = f3z.c6i;
	let q8c = f3z.q8c;
	let h1d = f3z.type;

	let j7l = this.w9z(c6i);
	let h8h = this.w9z(q8c);

	let z8i = j7l.j6q + j7l.f3w()/2;
	let l4d = j7l.n8v + j7l.k4s()/2;
	let w8t = new x9h(z8i, l4d);

	let o6w = h8h.j6q + h8h.f3w()/2;
	let j9o = h8h.n8v + h8h.k4s()/2;

	let x8d = (o6w-z8i)*(o6w-z8i) + (j9o-l4d)*(j9o-l4d);
	let p3t = Math.sqrt(x8d);

	let t7q = (this.l6q.j6o(c6i)) ? 0 : j7l.f3w() / 4;
	p3t -= t7q;
	let s2i = (this.l6q.j6o(q8c)) ? 0 : j7l.f3w() / 4;
	p3t -= s2i;

	let j3i = 5;
	let n8s = 5 * j3i;
	let h0b = 7 * j3i;

	let z5q = z8i + t7q;
	let p8i = l4d;

	let z5b = z5q + p3t - 1;
	let d7u = l4d;

	let v7y = z5b - h0b;
	let w6j = l4d;

	let l8h = Math.atan2((o6w - z8i), (l4d - j9o));

  
	let z0p = [];
  let n3k = 10; 
	z0p.push(new x9h(v7y, w6j));
	z0p.push(new x9h(v7y - n3k, w6j - n8s));
	z0p.push(new x9h(z5b, d7u));
	z0p.push(new x9h(v7y - n3k, w6j + n8s));
	z0p.push(new x9h(v7y, d7u));
	let x2b = [];
	for (let i = 0; i <= 4; i++)
	{
		x2b.push(d6x(z0p[i], w8t, l8h - Math.PI / 2));
	}

	let z4d = this.d1t();
  z4d.save();
  z4d.globalAlpha = 0.7;

 	let n4u = '';
	switch (h1d)
	{
		case c3j.x7q:
			n4u = t8e;
			break;
		case c3j.a2l:
			n4u = j8c;
			break;
		case c3j.o1q:
			n4u = w2y;
			break;
	}
 	z4d.fillStyle = n4u;
  z4d.strokeStyle = n4u;
	z4d.beginPath();
	z4d.moveTo(x2b[0].X, x2b[0].Y);
	for (let i = 1; i <= 4; i++)
	{
		z4d.lineTo(x2b[i].X, x2b[i].Y);
	}
	z4d.closePath();
	z4d.fill();

  
	z0p.length = 0;
	z0p.push(new x9h(z5q, p8i - j3i));
	z0p.push(new x9h(z5q, p8i + j3i));
	z0p.push(new x9h(v7y, p8i + j3i));
	z0p.push(new x9h(v7y, p8i - j3i));
	x2b.length = 0;
	for (let i = 0; i <= 3; i++)
	{
		x2b.push(d6x(z0p[i], w8t, l8h - Math.PI / 2));
	}
	if (z8i == o6w)
	{
		if (x2b[0].Y != x2b[1].Y)
		{
			x2b[0].Y = x2b[1].Y;
		}
		if (x2b[2].Y != x2b[3].Y)
		{
			x2b[2].Y = x2b[3].Y;
		}
	}
	if (l4d == j9o)
	{
		if (x2b[0].X != x2b[1].X)
		{
			x2b[0].X = x2b[1].X;
		}
		if (x2b[2].X != x2b[3].X)
		{
			x2b[2].X = x2b[3].X;
		}
	}
	z4d.beginPath();
	z4d.moveTo(x2b[0].X, x2b[0].Y);
	for (let i = 1; i <= 3; i++)
	{
		z4d.lineTo(x2b[i].X, x2b[i].Y);
	}
	z4d.closePath();
	z4d.fill();
  z4d.restore();
}

c2m()
{
	let z0a = this.x2h.z0a;
	let u9e = this.x2h.u9e;
	let c2h = this.x2h.z4p;
	let rect = new k0x();
	rect.j6q = this.s7w - z0a - u9e + 1;
	rect.n8v = this.q0o - z0a - u9e;
	rect.d7v = this.q0o;
	rect.o0c = this.s7w - 1;
	return rect;
}

}

const l8k = 14;

const k5t =
{
	s0p : 0
};

const l6y =
{
	s0p : 0
};

const p9u =
{
	j0j : 0,
	o8d : 1,
};

const l8m =
{
	h7i: 0,
	q8f: 1,
	l7z: 2,
	m3e: 3,
	d3j: 4,
};

class j6p
{

constructor()
{
	this.v7w = k5t.s0p;
	this.q0w = 1; 
	this.z0a = 0;
	this.u9e = l8k;
	this.t2a = 2;
	this.z4p = 32;
	this.l6p = 20;
	this.i5k = true;
	this.y0y = p9u.o8d;
	this.d2d = true;
}

p9r()
{
	let i2u = new j6p();
	i2u.v7w = this.v7w;
	i2u.q0w = this.q0w;
	i2u.z0a = this.z0a;
	i2u.u9e = this.u9e;
	i2u.t2a = this.t2a;
	i2u.z4p = this.z4p;
	i2u.l6p = this.l6p;
	i2u.i5k = this.i5k;
	i2u.y0y = this.y0y;
	i2u.d2d = this.d2d;
	return i2u;
}

f7a()
{
	return this.z4p * c4f + 2 * (this.z0a + this.u9e + this.t2a);
}

q8j(rect)
{
	let w = rect.f3w();
	let h = rect.k4s();
	let t5j = 0;
	if (w < h)
	{
		t5j = w;
	}
	else
	{
		t5j = h;
	}
	if (this.u9e)
	{
		for (this.z4p = 2; this.z4p < 1000; this.z4p++)
		{
			this.u9e = (this.z4p / 100) * this.l6p;
			if (this.u9e < l8k)
			{
				this.u9e = l8k;
			}
			let q8e = 2 * (this.z0a + this.u9e + this.t2a) + c4f * this.z4p;
			if (q8e > t5j)
			{
				break;
			}
		}
		this.z4p--;
		this.u9e = (this.z4p / 100) * this.l6p;
		if (this.u9e < l8k)
		{
			this.u9e = l8k;
		}
	}
	else
	{
		for (this.z4p = 2; this.z4p < 1000; this.z4p++)
		{
			let q8e = 2 * (this.z0a + this.t2a) + c4f * this.z4p;
			if (q8e > t5j)
			{
				break;
			}
		}
		this.z4p--;
	}
	return this.f7a();
}

}


class e1x
{

constructor()
{
	this.x1z = new z4m();
	this.d1j = new z4m();
	this.e6v = new s7c();
	this.a7a = new x6l();
	this.v8b = new q5w();
 	this.w3s = new q5w();
	this.l8b = 0;
	this.r6v = false;
	this.x9d = false;
	this.g9x = 0;
	this.q2s = 0;
	this.x4h = '';
}

}

const l7a =
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

function y1r(rect, r6e)
{
	rect.j6q += r6e;
	rect.o0c -= r6e;
	if (rect.j6q > rect.o0c)
	{
		rect.j6q = rect.o0c;
	}
	rect.n8v += r6e;
	rect.d7v -= r6e;
	if (rect.n8v > rect.d7v)
	{
		rect.n8v = rect.d7v;
	}
}

function x4c(j1c, t4q, f6o, i9k)
{
	j1c.drawImage(f6o, i9k.j6q, i9k.n8v, i9k.f3w(), i9k.k4s(),
		t4q.j6q, t4q.n8v, t4q.f3w(), t4q.k4s());
}

function e9m(z4d, x, y, width, height, j8l)
{
	z4d.beginPath();
	z4d.moveTo(x, y + j8l);
	z4d.lineTo(x, y + height - j8l);
	z4d.arcTo(x, y + height, x + j8l, y + height, j8l);
	z4d.lineTo(x + width - j8l, y + height);
	z4d.arcTo(x + width, y + height, x + width, y + height-j8l, j8l);
	z4d.lineTo(x + width, y + j8l);
	z4d.arcTo(x + width, y, x + width - j8l, y, j8l);
	z4d.lineTo(x + j8l, y);
	z4d.arcTo(x, y, x, y + j8l, j8l);
	z4d.stroke();
}

function d6x(o0s, w8t, d9s)
{
	let p = new x9h();
	p.X = (Math.cos(d9s) * (o0s.X - w8t.X)) - (Math.sin(d9s) * (o0s.Y - w8t.Y)) + w8t.X;
	p.Y = (Math.sin(d9s) * (o0s.X - w8t.X)) + (Math.cos(d9s) * (o0s.Y - w8t.Y)) + w8t.Y;
	return p;
}

function n9q(z4d, rect, n4n)
{
	let left = rect.j6q;
	let top = rect.n8v;
	let i8u = rect.o0c;
	let f7k = rect.d7v;

	z4d.fillStyle = b0x;
	z4d.fillRect(rect.j6q, rect.n8v, rect.f3w(), rect.k4s());

	if (n4n.j0j())
	{
		return;
	}

	let h3t = n4n.z7g();
	let q7b = 0;
	if (h3t > 8)
	{
		q7b = (i8u - left) / 8;
	}
	else
	{
		q7b = (i8u - left) / h3t;
	}
	let n5e = left - q7b;
	let f3t = top;
	let w0o = n5e + q7b;
	let c2w = 0;
	if (h3t > 8)
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
		if (n4n.x7z(i))
		{
			n5e += q7b;
			w0o += q7b;
			if (d3y == 7 || d3y == 15 ||
				(d3y < 8 && d3y == h3t - 1))
			{
				w0o = i8u;
			}
			if (d3y == 8)
			{
				n5e = left;
				w0o = n5e + q7b;
				f3t = top + c2w;
				f6y = f7k;
			}
			let b5h = new k0x(n5e, f3t, w0o, f6y);
			z4d.fillStyle = l7a[i];
			z4d.fillRect(b5h.j6q, b5h.n8v, b5h.f3w(), b5h.k4s());
			d3y++;
		}
	}
}




class i7n
{

constructor()
{
	this.h8n = '';
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
	v3c.h8n = img.q6n;
	v3c.c0f = img;
	this.t2l.push(v3c);
}

c0f(h8n)
{
	for (const m3f of this.t2l)
	{
		if (m3f.h8n.toLowerCase() == h8n.toLowerCase())
		{
			return m3f.c0f;
		}
	}
	return null;
}

}
const w0h 				= "\x23\x30\x30\x46\x46\x46\x46";
const b0y 			= "\x23\x30\x30\x30\x30\x30\x30";
const l3x 				= "\x23\x30\x30\x30\x30\x46\x46";
const e0w 			= "\x23\x46\x46\x46\x42\x46\x30";
const p0m 			= "\x23\x38\x30\x38\x30\x38\x30";
const o1h 		= "\x23\x46\x46\x30\x30\x46\x46";
const s1v 				= "\x23\x38\x30\x38\x30\x38\x30";
const h2w 			= "\x23\x30\x30\x38\x30\x30\x30";
const x3b 				= "\x23\x30\x30\x46\x46\x30\x30";
const t0a 			= "\x23\x43\x30\x43\x30\x43\x30";
const g9z 			= "\x23\x38\x30\x30\x30\x30\x30";
const e6x 		= "\x23\x41\x30\x41\x30\x41\x34";
const b9b 	= "\x23\x43\x30\x44\x43\x43\x30";
const g4o 				= "\x23\x30\x30\x30\x30\x38\x30";
const m7e 			= "\x23\x38\x30\x38\x30\x30\x30";
const e6m 			= "\x23\x38\x30\x30\x30\x38\x30";
const b0x 				= "\x23\x46\x46\x30\x30\x30\x30";
const i8h 			= "\x23\x43\x30\x43\x30\x43\x30";
const t5u 		= "\x23\x41\x36\x43\x41\x46\x30";
const t6r 				= "\x23\x30\x30\x38\x30\x30\x30";
const w7n 			= "\x23\x46\x46\x46\x46\x46\x46";
const u7f 			= "\x23\x46\x46\x46\x46\x30\x30";

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

p9r()
{
	let e5f = new x9h();
	e5f.j6q = this.X;
	e5f.n8v = this.Y;
	return e5f;
}

}

class k0x
{

constructor(left, top, i8u, f7k)
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
		this.o0c = i8u;
		this.d7v = f7k;
	}
}

p9r()
{
	let q0t = new k0x();
	q0t.j6q = this.j6q;
	q0t.n8v = this.n8v;
	q0t.o0c = this.o0c;
	q0t.d7v = this.d7v;
	return q0t;
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

u4d(g6w)
{
	return g6w.X >= this.j6q &&
		g6w.X <= this.o0c &&
		g6w.Y >= this.n8v &&
		g6w.Y <= this.d7v;
}


}

class b2l
{

constructor(y2n)
{
	this.y2n = y2n;
	this.z7a = new z4m();
	this.m6m = new s0a();
	this.z8u = null;
	this.x2h = new j6p();
	this.s8u = true;
}

e3h()
{
	let h0t = window.devicePixelRatio;

	this.m6m.e2q.width = this.z8u.clientWidth * h0t;
	this.m6m.e2q.height = this.z8u.clientHeight * h0t;

	let u0d = 32 * h0t;
	let n4q = 32 * h0t;
	let d1o = this.m6m.e2q.width - u0d;
	let f8s = this.m6m.e2q.height - n4q;
	let c8n = f8s < d1o ? f8s : d1o;
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
 	this.m6m.c3o(this.x2h);
	this.m6m.a3c();
}

t1c()
{
	this.m6m.t1c();
	this.m6m.a3c();
}

h5j()
{
	this.x2h.i5k = !this.x2h.i5k;
	this.m6m.c3o(this.x2h);
	this.m6m.a3c();
}

h2l()
{
	this.m6m.c3o(this.x2h);
	this.m6m.a3c();
}

u6i(p2g)
{
	this.z7a = p2g.d1j.p9r();
	this.m6m.k2y(this.z7a);
	this.m6m.b2e(p2g.e6v);
	this.m6m.s3z(p2g.a7a);
  
 	this.m6m.h2p(p2g.w3s);
	this.m6m.a3c();

	if (this.s8u)
	{
		t6k('playBackward' + this.y2n, p2g.r6v);
		t6k('goToBegin'+ this.y2n, p2g.r6v);
		t6k('playForward' + this.y2n, p2g.x9d);
		t6k('goToEnd' + this.y2n, p2g.x9d);
		t6k('autoPlay' + this.y2n, p2g.x9d);
	}
	else
	{
		t6k('goToBegin' + this.y2n, p2g.r6v);
		t6k('goToEnd' + this.y2n, p2g.x9d);
	}
}

k2y(l6q)
{
	let p2g = new e1x();
	p2g.d1j = l6q.p9r();
	this.k2y(p2g);
}

c3o(x2h)
{
  this.x2h = x2h.p9r();
}

}

const h2g =
{
	s1s       : 0,
	e2e        : 1,
};

class w3p
{

constructor(y2n)
{
	this.y2n = y2n;
 	this.x0u = new e5q();
 	this.t0s = new u9p(y2n);
  this.t0s.x5k = false;
  this.t0s.d2t = true;
  this.t0s.f8o = true;
  this.t0s.r5n = false;
  this.t7e = null;
  this.a1v = new g0e();
  this.a1e = new e5o();
 	this.z9z = new n1y();
	this.l2o = new z4m();
	this.t4y = new z4m();
	this.y6r = 0;
	this.k2o = [];
	this.p2y = false;
 	this.s3u = false;
 	this.b6h = false;
 	this.o9y = false;
  this.q4c = h2g.s1s;
  this.a6h = document.getElementById("\x74\x68\x72\x65\x61\x74"+this.y2n);
 	this.a6h.onclick = this.t3h.bind(this);
  this.c6a();
  this.d7c = document.getElementById("\x65\x6e\x67\x69\x6e\x65\x53\x65\x74\x74\x69\x6e\x67\x73"+this.y2n);
}

c7t(h3d)
{
  this.t7e = new j0c();
  this.t7e.d0x = (event) => {
    this.f1m(event);
  };
  this.t7e.v0e(h3d);
  this.t7e.g1j();
}

b9l()
{
	this.a1v = this.t7e.h3d();
	this.z9z = new n1y();
  /*
	showName();
	MovePanel->Caption = "";
	ScorePanel->Caption = "";
	DepthPanel->Caption = "";
	NodesPanel->Caption = "";
  */
	this.x0u.k2y(this.z9z.l6q,
    this.z9z.a2y);
	this.c4e();
 	this.w3q();
  this.c6a();
}

k2y(x1z, o7x, v3n, z4c)
{
	this.t4y = x1z.p9r();
	this.y6r = o7x;
	this.k2o = v3n.slice(); 
	this.p2y = z4c;
	this.w3q();
}

w3q()
{
	if (!this.t7e) return;
	if (this.s3u) return;

	if (this.b6h)
	{
		let v3n = new e5q();
		v3n.k2y(this.t4y, this.y6r);
		let y5m = v3n.y5m();
		v3n.t3s(y5m, this.k2o);
		let v6b = v3n.q7d();
		let k0g = v3n.l8b(v3n.u4f());
		if (v6b.n3a())
		{
			k0g++;
		}
		let g2x = v6b;
		g2x.f1c();
		this.a1e = new e5o();
    this.a1e.v3n.k2y(g2x, k0g);
		this.l2o = g2x;
  }
  else
  {
 		this.a1e.v3n.k2y(this.t4y, this.y6r);
		let y5m = this.a1e.v3n.y5m();
		this.a1e.v3n.t3s(y5m, this.k2o);
		this.l2o = this.a1e.v3n.q7d();
  }
  if (o4i === 10) 
  {
    this.a1e.i2m = l9m;
  }
  else
  {
    this.a1e.i2m = f5x(o4i);
  }

  this.t7e.n4t();
	this.o9y = false;
  let v3n = g8j(this.l2o);
  if (v3n.length == 0)
  {
  	this.t7e.c0g(this.a1e);
		return;
  }
  else
  {
  	this.t7e.c0g(this.a1e);
		return;
  }
}

p3c()
{
	this.z9z = this.t7e.l2s();
  /*
	showScore();
	showDepth();
	showNodes();
	showCM();
  */
	this.x0u.k2y(this.z9z.l6q,
    this.z9z.a2y);
	this.c4e();
}

u3j()
{
	this.z9z = this.t7e.l2s();
	
}


d0n()
{
	this.z9z = this.t7e.l2s();
  
	
	
	
  
	this.c4e();
}

c4e()
{
	let g0w = this.z9z.x8y.v3n.p9r();
  g0w.k2y(this.z9z.l6q, this.z9z.a2y);

  if (this.z9z.w3m)
  {
    for (let g9i of this.z9z.l1h)
    {
      let v3n = g9i.v3n.r1l();
      let x3c = g0w.y5m();
      let a2y = 0;
      for (let u0y of v3n)
      {
        if (a2y == 0)
        {
					let x7f = g9i.d8g() +
						"\x2f" + g9i.g4w;
					u0y.z7d(x7f);
        }
        g0w.v9t(x3c, u0y);
        a2y++;
      }
    }
  }
  else
  {
    if (this.z9z.l1h.length !== 0)
    {
      let g9i = this.z9z.l1h[this.z9z.l1h.length - 1];
      let v3n = g9i.v3n.r1l();
      let x3c = g0w.y5m();
      let a2y = 0;
      for (let u0y of v3n)
      {
				if (a2y == 0)
				{
					let x7f = g9i.d8g() +
						"\x2f" + g9i.g4w;
					u0y.z7d(x7f);
				}
        g0w.v9t(x3c, u0y);
        a2y++;
      }
    }
  }
  this.x0u = g0w.p9r();
  this.t0s.w3m = this.z9z.w3m;
  this.t0s.h4h(this.x0u, 0);
}

f1m(event)
{
  const {cmd, data} = event;
  if (cmd === 'ready')
  {
    this.b9l()
  }
  else if (cmd === 'go')
  {
    this.p3c()
  }
  else if (cmd === 'cm')
  {
    this.u3j();
  }
  else if (cmd === 'pv')
  {
    this.d0n();
  }
}

l4r()
{
	if (this.t7e)
	{
    this.t7e.d0x = null;
    this.t7e.z5p();
		this.t7e = null;
		this.z9z = new n1y();
  	this.x0u.k2y(this.z9z.l6q,
      this.z9z.a2y);
  	this.c4e();
    this.b6h = false;
    this.c6a();
  }
}

z8x()
{
	return (this.t7e != null);
}

b6j()
{
  return (this.engineMode === h2g.e2e);
}

t3h()
{
	if (this.t7e && !this.b6j())
	{
		this.b6h = !this.b6h;
		this.c6a();
		this.w3q();
	}
}

c6a()
{
	if (this.t7e)
	{
    this.a6h.disabled = false;
    this.a6h.classList.remove('threat-inactive');
		if (this.b6h)
		{
      this.a6h.classList.remove('threat-off');
      this.a6h.classList.add('threat-on');
		}
		else
		{
      this.a6h.classList.remove('threat-on');
      this.a6h.classList.add('threat-off');
		}
	}
	else
	{
    this.a6h.disabled = true;
    this.a6h.classList.add('threat-inactive');
    this.a6h.classList.remove('threat-on');
    this.a6h.classList.add('threat-off');
	}
}

}

class r3w
{

constructor(y2n)
{
	this.y2n = y2n;
  this.c6j = null;
	this.g3j = new m3k();
}

h1q(g3j)
{
	this.g3j = g3j.p9r();
	this.g0g();
}

g0g()
{
	let k9k = this.g3j.m5l.w6a.w3g();
	let r3s = this.g3j.u6y.w6a.w3g();

	let a9q = '';
	if (k9k.length && this.g3j.m5l.h7p)
	{
		a9q = this.g3j.m5l.h7p.toString();
	}
	let j8e = '';
	if (k9k.length && this.g3j.m5l.p4h.length)
	{
		j8e = this.g3j.m5l.p4h.toString();
	}

	let n6a = '';
	if (r3s.length && this.g3j.u6y.h7p)
	{
		n6a = this.g3j.u6y.h7p.toString();
	}
	let x9n = '';
	if (r3s.length && this.g3j.u6y.p4h.length)
	{
		x9n = this.g3j.u6y.p4h.toString();
	}

	let k5o = this.g3j.m5l.w6a.p8l(1);
	let n0j = this.g3j.u6y.w6a.p8l(1);

	let d4r = '';
	let z8a = '';
	if (!this.g3j.m5l.g9a.z7r() &&
		!this.g3j.u6y.g9a.z7r())
	{
		d4r = this.g3j.m5l.g9a.l4h();
		z8a = this.g3j.u6y.g9a.l4h();
	}

	let d7i = s4a(this.g3j.c3m);
	let n2v = this.g3j.n2v.p4h;
	if (!this.g3j.n2v.z4b.z7r())
	{
		n2v += "\x20";
		n2v += this.g3j.n2v.z4b.s8a.toString();
	}
	let w2r = '';
	if (!this.g3j.k7u.z7r())
	{
		w2r = this.g3j.k7u.toString("\x64\x64\x2d\x6d\x6d\x2d\x79\x79\x79\x79");
	}
	let p0d = '';
	if (!this.g3j.p0d.z7r())
	{
		p0d = '</br>' + '[' + this.g3j.p0d.h8n + ']';
	}

	let s2x = document.getElementById("\x6e\x6f\x74\x61\x2d\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72"+this.y2n);
	let n0o = s2x.clientHeight;
	let t6x = 200;

  let index = this.y2n;
  let w7p = this.g3j.n2v.w7p;

	let m6u = true;
	if (this.c6j.clientWidth >= 374 && n0o >= t6x)
	{
    let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable scroll\">";
    s +=      "\x3c\x74\x72\x3e";
    s +=        "<td class=\"playerPortrait\" colspan=\"3\" rowspan=\"2\">";
    
    s += 				"\x3c\x2f\x74\x64\x3e";
		s +=        "<td class=\"playerWhite\" colspan=\"8\">";
    s +=          "<span class=\"player\">" + k9k + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s += 					"<span class=\"rating\">" + a9q + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "\x3c\x62\x72\x3e";
		s += 				  "<span class=\"team\">" + d4r + "\x3c\x2f\x73\x70\x61\x6e\x3e";
		s +=        "\x3c\x2f\x74\x64\x3e";
    s += 		  	"<td class=\"result\" colspan=\"2\">";
    s +=          "\x3c\x73\x70\x61\x6e\x3e" + d7i + "\x3c\x2f\x73\x70\x61\x6e\x3e";
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
		s +=          "\x3c\x73\x70\x61\x6e\x3e" + j8e + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"tournamentData\" colspan=\"12\">";
    s +=          "<span class=\"tournamentTitle\">" + n2v + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "\x3c\x62\x72\x3e";
    s +=          "<span class=\"tournamentPlace\">" + w7p + "\x3c\x2f\x73\x70\x61\x6e\x3e";
		s +=          "<span class=\"gameDate\">" + w2r + "\x3c\x2f\x73\x70\x61\x6e\x3e";
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
		this.c6j.innerHTML = s;

		
		
		let o6t = Math.trunc(this.c6j.clientWidth / 10);
		if (o6t < 24) o6t = 24;
    
		
		
		
		
		
		
	}
	else if (this.c6j.clientWidth >= 300 && n0o >= t6x)
	{
		
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "\x3c\x74\x72\x3e";
    s +=        "<td class=\"playerWhite\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + k5o + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "<span class=\"rating\">" + a9q + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "\x3c\x62\x72\x3e";
		s += 				  "<span class=\"team\">" + d4r + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"result\" colspan=\"2\">";
    s +=          "\x3c\x73\x70\x61\x6e\x3e" + d7i + "\x3c\x2f\x73\x70\x61\x6e\x3e";
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
    s +=          "\x3c\x73\x70\x61\x6e\x3e" + j8e + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
		s +=        "<td class=\"tournamentData\" colspan=\"14\">";
    s +=          "<span class=\"tournamentTitle\">" + n2v + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "<span class=\"tournamentPlace\">" + "\x3c\x2f\x62\x72\x3e" + w7p + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "<span class=\"gameDate\">" + w2r + "\x3c\x2f\x73\x70\x61\x6e\x3e";
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
		this.c6j.innerHTML = s;
	}
	else if (this.c6j.clientWidth >= 280)
	{
		
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "\x3c\x74\x72\x3e";
    s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"playerWhite\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + k5o + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=          "<span class=\"rating\">" + a9q + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"result\" colspan=\"2\">";
    s +=          "\x3c\x73\x70\x61\x6e\x3e" + d7i + "\x3c\x2f\x73\x70\x61\x6e\x3e";
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
		this.c6j.innerHTML = s;
	}
	else
	{
		
		m6u = false; 
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "\x3c\x74\x72\x3e";
    s +=        "<td class=\"playerWhite\" width=\"45%\">";
    s +=          "<span class=\"player\">" + k5o + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"result\" width=\"10%\">";
    s +=          "\x3c\x73\x70\x61\x6e\x3e" + d7i + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=        "<td class=\"playerBlack\" width=\"45%\">";
    s +=          "<span class=\"player\">" + n0j + "\x3c\x2f\x73\x70\x61\x6e\x3e";
    s +=        "\x3c\x2f\x74\x64\x3e";
    s +=      "\x3c\x2f\x74\x72\x3e";
    s +=    "\x3c\x2f\x74\x61\x62\x6c\x65\x3e";
		this.c6j.innerHTML = s;
	}

	if (m6u)
	{
		let z9k = 16;
		if (this.c6j.clientWidth < 400)
		{
			z9k = 16;
		}
		else if (this.c6j.clientWidth < 500)
		{
			z9k = 24;
		}
		else
		{
			z9k = 32;
		}
    if (this.g3j.m5l.x5f != y2m.j0j)
    {
  		let i3f = document.getElementById("\x77\x68\x69\x74\x65\x50\x6c\x61\x79\x65\x72\x4e\x61\x74\x69\x6f\x6e"+this.y2n);
	  	i3f.src = "\x69\x6d\x61\x67\x65\x73\x2f\x66\x6c\x61\x67\x73\x2f" + z9k.toString() +"\x2f" + s0y(this.g3j.m5l.x5f) + "\x2e\x70\x6e\x67";
		  i3f.height = z9k;
  		i3f.width = z9k;
    }
    if (this.g3j.u6y.x5f != y2m.j0j)
    {
  		let n4d = document.getElementById("\x62\x6c\x61\x63\x6b\x50\x6c\x61\x79\x65\x72\x4e\x61\x74\x69\x6f\x6e"+this.y2n);
	  	n4d.src = "\x69\x6d\x61\x67\x65\x73\x2f\x66\x6c\x61\x67\x73\x2f" + z9k.toString() + "\x2f" + s0y(this.g3j.u6y.x5f) + "\x2e\x70\x6e\x67";
		  n4d.height = z9k;
  		n4d.width = z9k;
    }
	}
}

}

class j0n
{

constructor(y2n)
{
	this.y2n = y2n;
	this.g3j = new m3k();
	this.d5n = new b2l(y2n);
	this.n2u = new l4v(y2n);
	this.n2u.t0s.l3r = this; 
	this.p1n = new r7g();
  this.c8k = new w3p(y2n);
}

t1c()
{
	this.d5n.t1c();
}

h5j()
{
	this.d5n.h5j();
}

h2l()
{
	this.d5n.h2l();
	this.n2u.t0s.h2l();
}

f1i(s0k, g9l, k1h, h6r)
{
	this.k1p(h6r, k1h);
}

k1p(h6r, k1h)
{
	this.g3j = h6r.g1b.p9r();
	this.h1q();
	this.n2u.t0s.h4h(h6r.v3n, k1h);
}

h1q()
{
	this.n2u.p3r.h1q(this.g3j);
}

x8t(p2g)
{
	this.d5n.u6i(p2g);
  this.p2d();
}

v5r()
{
	if (this.p1n.c5z())
	{
		this.p1n.u0i();
    this.r5v();
	}
	else
	{
		if (!this.n2u.t0s.q0r())
		{
      
			this.p1n.l3r = this; 
			this.p1n.o1r();
			this.n2u.t0s.w2k();
		}
	}
}

a3y(h3d)
{
	this.c8k.c7t(h3d);
}

u1e()
{
	this.c8k.l4r();
}

b8p()
{
	return this.c8k.z8x();
}

p2d()
{
  if (!this.p1n.c5z())
  {
    this.r5v();
  }
}

r5v()
{
	this.c8k.k2y(
		this.n2u.t0s.x1z(),
		this.n2u.t0s.o7x(),
		this.n2u.t0s.f6n(),
		this.n2u.t0s.z4c());
}

}

const t9u =
{
	e4t : 0,
	r1c : 1,
	o5v : 2,
	s6h : 3,
	z7x : 4,
 	n5a : 5,
	c3m : 6,
	v3n : 7,
	s8a : 8,
	event : 9,
	y1n : 10
};

const j5w =
{
	j0j : 0,
	r6n : 1,
	t7s : 2
};

let e5p = 0;
let y4e = 0;
let s5a = 0;
let f3u = 0;
let a8r = 0;
let a6x = 0;
let u4x = 0;
let m6c = 0;

let t7s = false;

function f2g(f, s)
{
	let r9v = f.g1b.m5l.w6a.h8n();
	let v4e = s.g1b.m5l.w6a.h8n();
	if (r9v < v4e)
	{
		return t7s ? -1 : 1;
	}
	if (r9v > v4e)
	{
		return t7s ? 1 : -1;
	}
	r9v = f.g1b.u6y.w6a.h8n();
	v4e = s.g1b.u6y.w6a.h8n();
	if (r9v < v4e)
	{
		return -1;
	}
	if (r9v > v4e)
	{
		return 1;
	}
	return 0;
}

function k9v(f, s)
{
	let r9v = f.g1b.u6y.w6a.h8n();
	let v4e = s.g1b.u6y.w6a.h8n();
	if (r9v < v4e)
	{
		return t7s ? -1 : 1;
	}
	if (r9v > v4e)
	{
		return t7s ? 1 : -1;
	}
	r9v = f.g1b.m5l.w6a.h8n();
	v4e = s.g1b.m5l.w6a.h8n();
	if (r9v < v4e)
	{
		return -1;
	}
	if (r9v > v4e)
	{
		return 1;
	}
	return 0;
}

function a7h(f, s)
{
	let n1m = f.g1b.m5l.h7p - s.g1b.m5l.h7p;
	if (t7s)
	{
		n1m = -n1m;
	}
	if (n1m < 0) return -1;
	if (n1m > 0) return 1;
	n1m = f.g1b.u6y.h7p - s.g1b.u6y.h7p;
	if (t7s)
	{
		n1m = -n1m;
	}
	if (n1m < 0) return -1;
	if (n1m > 0) return 1;
	return f2g(f, s);
}

function w8u(f, s)
{
	let n1m = f.g1b.u6y.h7p - s.g1b.u6y.h7p;
	if (t7s)
	{
		n1m = -n1m;
	}
	if (n1m < 0) return -1;
	if (n1m > 0) return 1;
	n1m = f.g1b.m5l.h7p - s.g1b.m5l.h7p;
	if (t7s)
	{
		n1m = -n1m;
	}
	if (n1m < 0) return -1;
	if (n1m > 0) return 1;
	return f2g(f, s);
}

function k6i(f, s)
{
	let n1m = f.g1b.m5l.x5f - s.g1b.m5l.x5f;
	if (t7s)
	{
		n1m = -n1m;
	}
	if (n1m < 0) return -1;
	if (n1m > 0) return 1;
	n1m = f.g1b.u6y.x5f - s.g1b.u6y.x5f;
	if (t7s)
	{
		n1m = -n1m;
	}
	if (n1m < 0) return -1;
	if (n1m > 0) return 1;
	return f2g(f, s);
}

function s4e(f, s)
{
	let n1m = f.g1b.u6y.x5f - s.g1b.u6y.x5f;
	if (t7s)
	{
		n1m = -n1m;
	}
	if (n1m < 0) return -1;
	if (n1m > 0) return 1;
	n1m = f.g1b.m5l.x5f - s.g1b.m5l.x5f;
	if (t7s)
	{
		n1m = -n1m;
	}
	if (n1m < 0) return -1;
	if (n1m > 0) return 1;
	return f2g(f, s);
}

function p5j(f, s)
{
	let n1m = f.g1b.c3m - s.g1b.c3m;
	if (t7s)
	{
		n1m = -n1m;
	}
	if (n1m < 0) return -1;
	if (n1m > 0) return 1;
	return f2g(f, s);
}

function y1i(f, s)
{
	let n1m = s.g1b.k7u.k7u() - f.g1b.k7u.k7u();
	if (t7s)
	{
		n1m = -n1m;
	}
	if (n1m < 0) return -1;
	if (n1m > 0) return 1;
	return f2g(f, s);
}

function v8u(f, s)
{
	let t3w = f.g1b.n2v.p4h;
	let c5t = s.g1b.n2v.p4h;
	if (t3w < c5t)
	{
		return t7s ? -1 : 1;
	}
	if (t3w > c5t)
	{
		return t7s ? 1 : -1;
	}
	let n1m = f.g1b.n2v.z4b.k7u() - s.g1b.n2v.z4b.k7u();
	if (t7s)
	{
		n1m = -n1m;
	}
	if (n1m < 0) return -1;
	if (n1m > 0) return 1;
	n1m = f.g1b.y1n - s.g1b.y1n;
	if (n1m < 0) return -1;
	if (n1m > 0) return 1;
	n1m = f.g1b.g3t - s.g1b.g3t;
	if (n1m < 0) return -1;
	if (n1m > 0) return 1;
	return f2g(f, s);
}

function v0d(f, s)
{
	let n1m = s.g1b.y1n - f.g1b.y1n;
	if (t7s)
	{
		n1m = -n1m;
	}
	if (n1m < 0) return -1;
	if (n1m > 0) return 1;
	n1m = s.g1b.g3t - f.g1b.g3t;
	if (t7s)
	{
		n1m = -n1m;
	}
	if (n1m < 0) return -1;
	if (n1m > 0) return 1;
	return f2g(f, s);
}

function s7x(f, s)
{
	let n1m = s.w4z - f.w4z;
	if (t7s)
	{
		n1m = -n1m;
	}
	if (n1m < 0) return -1;
	if (n1m > 0) return 1;
	return f2g(f, s);
}

class b2a
{

constructor(y2n)
{
	this.y2n = y2n;
	this.d3x = [];
	this.l1i = null;
	this.r4r = null;
	this.k3x = null;
	this.j5b = [];
	this.c0y = [];
	this.p2p = -1;
	this.b3k = j5w.j0j;
	this.p5a = 0;
  this.k1s = null;
}

u4p()
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
	this.k3x.innerHTML = s;
	this.j5b = this.k3x.getElementsByTagName("\x54\x48");
	let y2n = this.y2n;

 	this.j5b[t9u.e4t].onclick = this.y0m.bind(this);
	this.j5b[t9u.r1c].onclick = this.d7h.bind(this);
  this.j5b[t9u.o5v].onclick = this.t4r.bind(this);
	this.j5b[t9u.s6h].onclick = this.y0m.bind(this);
	this.j5b[t9u.z7x].onclick = this.a9w.bind(this);
  this.j5b[t9u.n5a].onclick = this.d0p.bind(this);
	this.j5b[t9u.c3m].onclick = this.d9i.bind(this);
	this.j5b[t9u.v3n].onclick = this.p6n.bind(this);
	this.j5b[t9u.s8a].onclick = this.f7y.bind(this);
	this.j5b[t9u.event].onclick = this.u6b.bind(this);
	this.j5b[t9u.y1n].onclick = this.k5l.bind(this);
}

x4w(d3x)
{
	this.d3x = d3x;
	this.e3h();
}

d7b()
{
	this.y4a("\x67\x72\x69\x64\x2d\x70\x6c\x61\x79\x65\x72");
	this.y4a("\x67\x72\x69\x64\x2d\x72\x61\x74\x69\x6e\x67");
 	this.y4a("\x67\x72\x69\x64\x2d\x66\x6c\x61\x67");
	this.y4a("\x67\x72\x69\x64\x2d\x72\x65\x73\x75\x6c\x74");
	this.y4a("\x67\x72\x69\x64\x2d\x6d\x6f\x76\x65\x73");
	this.y4a("\x67\x72\x69\x64\x2d\x79\x65\x61\x72");
	this.y4a("\x67\x72\x69\x64\x2d\x65\x76\x65\x6e\x74");
	this.y4a("\x67\x72\x69\x64\x2d\x72\x6f\x75\x6e\x64");
}

o1a()
{
	this.q8i("\x67\x72\x69\x64\x2d\x70\x6c\x61\x79\x65\x72", e5p);
	this.q8i("\x67\x72\x69\x64\x2d\x72\x61\x74\x69\x6e\x67", y4e);
 	this.q8i("\x67\x72\x69\x64\x2d\x66\x6c\x61\x67", m6c);
	this.q8i("\x67\x72\x69\x64\x2d\x72\x65\x73\x75\x6c\x74", s5a);
	this.q8i("\x67\x72\x69\x64\x2d\x6d\x6f\x76\x65\x73", f3u);
	this.q8i("\x67\x72\x69\x64\x2d\x79\x65\x61\x72", a8r);
	this.q8i("\x67\x72\x69\x64\x2d\x65\x76\x65\x6e\x74", a6x);
	this.q8i("\x67\x72\x69\x64\x2d\x72\x6f\x75\x6e\x64", u4x);

}

y4a(o4h)
{
	let p4u = this.l1i.getElementsByClassName(o4h);
	for (let i = 0; i < p4u.length; i++) {
		p4u[i].style.display = "\x6e\x6f\x6e\x65";
	}
}

m2w(o4h)
{
	let p4u = this.l1i.getElementsByClassName(o4h);
	for (let i = 0; i < p4u.length; i++) {
		p4u[i].style.display = "\x74\x61\x62\x6c\x65\x2d\x63\x65\x6c\x6c";
	}
}

q8i(o4h, width)
{
	let p4u = this.l1i.getElementsByClassName(o4h);
	for (let i = 0; i < p4u.length; i++) {
		p4u[i].style.width = (width) + "\x70\x78";
	}
}

e3h()
{
	this.p5a = this.l1i.clientWidth;
	this.p5a -= 17;
	if (this.p5a < 100)
	{
		this.p5a = 100;
	}
	e5p = 200;
	y4e = 52;
	s5a = 34;
	f3u = 50;
	a8r = 52;
	a6x = 200;
	u4x = 50;
  m6c = 30;

 
	let q0s = document.getElementsByClassName("\x74\x64\x72\x65\x70\x6c\x61\x79")[0];
	if (q0s.clientWidth <= h6d)
	{
		let v4m = 0.7;
		e5p *= v4m;
		y4e *= v4m;
		s5a *= v4m;
		f3u *= v4m;
		a8r *= v4m;
		a6x *= v4m;
		u4x *= v4m;
	}
	this.l2z();
}

a4l()
{
	this.d7b();
	this.o1a();

  let u5a = 2.8;
  let w2j = 2.8;
  let c5x = 17;
	if (this.p5a <= 400)
	{
		this.m2w("\x67\x72\x69\x64\x2d\x70\x6c\x61\x79\x65\x72");
		this.m2w("\x67\x72\x69\x64\x2d\x72\x65\x73\x75\x6c\x74");
    this.m2w("\x67\x72\x69\x64\x2d\x79\x65\x61\x72");
		this.m2w("\x67\x72\x69\x64\x2d\x65\x76\x65\x6e\x74");
    let w5j = 5 * (u5a + w2j);
		let z4w = s5a + a8r;
		let h0p = Math.trunc((this.p5a - z4w - w5j - c5x) / 3);
		this.q8i("\x67\x72\x69\x64\x2d\x70\x6c\x61\x79\x65\x72", h0p);
		this.q8i("\x67\x72\x69\x64\x2d\x65\x76\x65\x6e\x74", h0p);
	}
	else if (this.p5a <= 580)
	{
		this.m2w("\x67\x72\x69\x64\x2d\x70\x6c\x61\x79\x65\x72");
		this.m2w("\x67\x72\x69\x64\x2d\x72\x61\x74\x69\x6e\x67");
		this.m2w("\x67\x72\x69\x64\x2d\x72\x65\x73\x75\x6c\x74");
		this.m2w("\x67\x72\x69\x64\x2d\x79\x65\x61\x72");
		this.m2w("\x67\x72\x69\x64\x2d\x65\x76\x65\x6e\x74");
    let w5j = 7 * (u5a + w2j);
		let z4w = 2 * y4e + s5a + a8r;
		let h0p = Math.trunc((this.p5a - z4w - w5j - c5x) / 3);
		this.q8i("\x67\x72\x69\x64\x2d\x70\x6c\x61\x79\x65\x72", h0p);
		this.q8i("\x67\x72\x69\x64\x2d\x65\x76\x65\x6e\x74", h0p);
	}
	else
	{
		this.m2w("\x67\x72\x69\x64\x2d\x70\x6c\x61\x79\x65\x72");
		this.m2w("\x67\x72\x69\x64\x2d\x72\x61\x74\x69\x6e\x67");
    this.m2w("\x67\x72\x69\x64\x2d\x66\x6c\x61\x67");
		this.m2w("\x67\x72\x69\x64\x2d\x72\x65\x73\x75\x6c\x74");
		this.m2w("\x67\x72\x69\x64\x2d\x6d\x6f\x76\x65\x73");
		this.m2w("\x67\x72\x69\x64\x2d\x79\x65\x61\x72");
		this.m2w("\x67\x72\x69\x64\x2d\x65\x76\x65\x6e\x74");
		this.m2w("\x67\x72\x69\x64\x2d\x72\x6f\x75\x6e\x64");
    let w5j = 11 * (u5a + w2j);
		let z4w = 2 * y4e + 2 * m6c + s5a + f3u + a8r + u4x;
		let h0p = Math.trunc((this.p5a - z4w - w5j - c5x) / 3);
		this.q8i("\x67\x72\x69\x64\x2d\x70\x6c\x61\x79\x65\x72", h0p);
		this.q8i("\x67\x72\x69\x64\x2d\x65\x76\x65\x6e\x74", h0p);
	}
}

l2z()
{
	let z9k = 16;
	let s = '';
  s += "<tbody id=\"gameList" + this.y2n + "\">"; 
	for (const h6r of this.d3x)
	{
		s += "<tr class=\"grid-row\">";
		s += "<td class=\"grid-cell grid-player\">";
		s += h6r.g1b.m5l.w6a.c2e();
		s += "\x3c\x2f\x74\x64\x3e";
		s += "<td class=\"grid-cell grid-rating\">";
		if (h6r.g1b.m5l.h7p)
		{
			s += h6r.g1b.m5l.h7p;
		}
		s += "\x3c\x2f\x74\x64\x3e";
   	s += "<td class=\"grid-cell grid-flag\">";
		if (h6r.g1b.m5l.x5f != y2m.j0j)
		{
      let e9k = "\x69\x6d\x61\x67\x65\x73\x2f\x66\x6c\x61\x67\x73\x2f" + z9k.toString() + "\x2f" + s0y(h6r.g1b.m5l.x5f) + "\x2e\x70\x6e\x67";
  		s += "\x3c\x73\x70\x61\x6e\x3e";
      s += "<img src=\"";
      s += e9k;
      s += "\" height=\"16\"";
      s += "\x3e";
   		s += "\x3c\x2f\x73\x70\x61\x6e\x3e";
		}
		s += "\x3c\x2f\x74\x64\x3e";
		s += "<td class=\"grid-cell grid-player\">";
		s += h6r.g1b.u6y.w6a.c2e();
		s += "\x3c\x2f\x74\x64\x3e";
		s += "<td class=\"grid-cell grid-rating\">";
		if (h6r.g1b.u6y.h7p)
		{
			s += h6r.g1b.u6y.h7p;
		}
		s += "\x3c\x2f\x74\x64\x3e";
		s += "<td class=\"grid-cell grid-flag\">";
		if (h6r.g1b.u6y.x5f != y2m.j0j)
		{
      let e9k = "\x69\x6d\x61\x67\x65\x73\x2f\x66\x6c\x61\x67\x73\x2f" + z9k.toString() + "\x2f" + s0y(h6r.g1b.u6y.x5f) + "\x2e\x70\x6e\x67";
  		s += "\x3c\x73\x70\x61\x6e\x3e";
      s += "<img src=\"";
      s += e9k;
      s += "\" height=\"16\"";
      s += "\x3e";
   		s += "\x3c\x2f\x73\x70\x61\x6e\x3e";
		}
		s += "\x3c\x2f\x74\x64\x3e";
		s += "<td class=\"grid-cell grid-result\">";
		s += s4a(h6r.g1b.c3m);
		s += "\x3c\x2f\x74\x64\x3e";
		s += "<td class=\"grid-cell grid-moves\">";
		s += h6r.w4z;
		s += "\x3c\x2f\x74\x64\x3e";
		s += "<td class=\"grid-cell grid-year\">";
		s += h6r.g1b.k7u.toString("\x79\x79\x79\x79");
		s += "\x3c\x2f\x74\x64\x3e";
		s += "<td class=\"grid-cell grid-event\">";
		s += h6r.g1b.n2v.p4h;
		s += "\x3c\x2f\x74\x64\x3e";
		s += "<td class=\"grid-cell grid-round\">";
		s += h6r.g1b.u4b();
		s += "\x3c\x2f\x74\x64\x3e";
		s += "\x3c\x2f\x74\x72\x3e";
	}
  s += "\x3c\x2f\x74\x62\x6f\x64\x79\x3e";
	this.r4r.innerHTML = s;

  let p7b = document.getElementById('gameList' + this.y2n);
  p7b.addEventListener('click', this.k6r.bind(this));

	this.a4l();
}

w8l(k7c)
{
	if (k7c != this.p2p)
	{
		this.p2p = k7c;
		this.b3k = j5w.r6n;
	}
	else
	{
		if (this.b3k == j5w.j0j)
		{
			this.b3k = j5w.r6n;
		}
		else if (this.b3k == j5w.r6n)
		{
			this.b3k = j5w.t7s;
		}
		else if (this.b3k == j5w.t7s)
		{
			this.b3k = j5w.r6n;
		}
	}
	t7s = (this.b3k == j5w.t7s);

	for (const j0x of this.j5b)
	{
		let s = j0x.w3l;
		let f2w = s.replace("\x20\x67\x72\x69\x64\x2d\x68\x65\x61\x64\x65\x72\x2d\x73\x6f\x72\x74\x20\x67\x72\x69\x64\x2d\x68\x65\x61\x64\x65\x72\x2d\x73\x6f\x72\x74\x2d\x64\x65\x73\x63", "");
		let d7w = f2w.replace("\x20\x67\x72\x69\x64\x2d\x68\x65\x61\x64\x65\x72\x2d\x73\x6f\x72\x74\x20\x67\x72\x69\x64\x2d\x68\x65\x61\x64\x65\x72\x2d\x73\x6f\x72\x74\x2d\x61\x73\x63", "");
		j0x.w3l = d7w;
	}
	let w3r = this.j5b[this.p2p];
	if (this.b3k == j5w.t7s)
	{
		w3r.w3l = w3r.w3l + "\x20\x67\x72\x69\x64\x2d\x68\x65\x61\x64\x65\x72\x2d\x73\x6f\x72\x74\x20\x67\x72\x69\x64\x2d\x68\x65\x61\x64\x65\x72\x2d\x73\x6f\x72\x74\x2d\x64\x65\x73\x63";
	}
	else
	{
		w3r.w3l = w3r.w3l + "\x20\x67\x72\x69\x64\x2d\x68\x65\x61\x64\x65\x72\x2d\x73\x6f\x72\x74\x20\x67\x72\x69\x64\x2d\x68\x65\x61\x64\x65\x72\x2d\x73\x6f\x72\x74\x2d\x61\x73\x63";
	}
}

y0m(event)
{
	this.w8l(t9u.e4t);
	this.d3x.sort(f2g);
	this.l2z();
}

d7h(event)
{
	this.w8l(t9u.r1c);
	this.d3x.sort(a7h);
	this.l2z();
}

t4r(event)
{
	this.w8l(t9u.o5v);
	this.d3x.sort(k6i);
	this.l2z();
}

w7e(event)
{
	this.w8l(t9u.s6h);
	this.d3x.sort(k9v);
	this.l2z();
}

a9w(event)
{
	this.w8l(t9u.z7x);
	this.d3x.sort(w8u);
	this.l2z();
}

d0p(event)
{
	this.w8l(t9u.n5a);
	this.d3x.sort(s4e);
	this.l2z();
}

d9i(event)
{
	this.w8l(t9u.c3m);
	this.d3x.sort(p5j);
	this.l2z();
}

f7y(event)
{
	this.w8l(t9u.s8a);
	this.d3x.sort(y1i);
	this.l2z();
}

u6b(event)
{
	this.w8l(t9u.event);
	this.d3x.sort(v8u);
	this.l2z();
}

k5l(event)
{
	this.w8l(t9u.y1n);
	this.d3x.sort(v0d);
	this.l2z();
}

p6n(event)
{
	this.w8l(t9u.v3n);
	this.d3x.sort(s7x);
	this.l2z();
}

k6r(event)
{
  const clickedRow = event.target.closest('tr');
  if (!clickedRow) return;
  const index = clickedRow.rowIndex;
  if (this.k1s)
  {
    this.k1s(this, index);
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
	this.l6q = new z4m();
	this.h4t = new z4m();
	this.q2h = false;
	this.q3k = 0;
	this.f7z = 0;
	this.y0s = [];
}

}

var tooltip = null;

class u9p
{

constructor(y2n)
{
	this.y2n = y2n;
	this.m7s = new e5q();
	this.l3r = null;
	this.q7w = new s3i();
	this.l3y = null;
	this.e2r = [];
	this.w2m = [];
  this.z6a = [];
  this.f8a = [];
	this.z8c = -1;
	this.x2h = new j6p();
  this.h7w = null;
	this.f0i = true;
	this.c0j = false;
	this.x0d = [];
	this.q7n = 0;
  this.x5k = true;
  this.d2t = false;
	this.f8o = false;
	this.r5n = true;
  this.w3m = false;
}

h4h(b1e, k1h)
{
	this.m7s = b1e.p9r();
  this.m7s.i3m();
	this.h7w = this.m7s.b3t(k1h);
	this.f1i();
}

h1j(k0m)
{
  this.n9r(this.z6a[k0m]);
}

f1i()
{
	this.e6j();
	this.w2k();
  this.r5q(this.m7s.p6h(this.h7w));
}

e6j()
{
	let k7h = new c9o();
  k7h.m7d(this.x5k);
	k7h.k1n(this.w3m);
  /*
	k7h.setOneLine(this.w3m);
  */
	k7h.z1f(this.f8o);
	k7h.l3z(this.r5n);
	k7h.e4e(this.m7s);

  this.l3y.innerHTML = k7h.j2x.a1z;
  this.e2r = this.l3y.getElementsByClassName("\x74\x64\x6d\x6f\x76\x65");
  this.w2m = this.l3y.getElementsByClassName("\x74\x64\x63\x6f\x6d\x6d\x65\x6e\x74");

	this.m3d("\x74\x64\x6d\x6f\x76\x65");
	this.m3d("\x74\x64\x63\x6f\x6d\x6d\x65\x6e\x74");
	this.m3d("\x74\x64\x64\x69\x61");
	this.m3d("\x74\x64\x6d\x65\x64\x61\x6c");
  this.m3d("\x74\x64\x63\x6f\x6c\x6f\x72\x73");

  this.c6n("\x74\x64\x6d\x6f\x76\x65");

	this.h3i();
	this.n9q();
}

m3d(d5o)
{
	let y2n = this.y2n;
	let b9d = this.l3y.getElementsByClassName(d5o);
	for (const d1x of b9d)
	{
    let k1h = d1x.getAttribute('movenr');
    d1x.onclick = this.r3g.bind(this, k1h);
	}
}

c6n(d5o)
{
	let y2n = this.y2n;
	let b9d = this.l3y.getElementsByClassName(d5o);
	for (const d1x of b9d)
	{
    let k1h = d1x.getAttribute('movenr');
    d1x.onmouseover = this.m9n.bind(this, k1h);
    d1x.onmouseleave = this.e2n.bind(this, k1h);
	}
}

h2l()
{
	this.h3i();
}

h3i()
{
	let e7q = this.l3y.getElementsByClassName("\x74\x64\x64\x69\x61");
	for (const c7a of e7q)
	{
		let m6m = new s0a();
		m6m.e2q = c7a.getElementsByTagName("\x63\x61\x6e\x76\x61\x73")[0];
		let c8n = this.x2h.f7a();
		m6m.e2q.width = c8n;
		m6m.e2q.height = c8n;
		m6m.c3o(this.x2h);
		let x3c = this.m7s.b3t(c7a.getAttribute('movenr'));
    m6m.k2y(this.m7s.l6q(x3c));
    if (x3c.u0y)
    {
  		m6m.b2e(x3c.u0y.e6v());
	  	m6m.s3z(x3c.u0y.a7a());
    }
    else
    {
   		m6m.b2e(this.m7s.p9b());
	  	m6m.s3z(this.m7s.e2l());
    }
		m6m.a3c();
	}
}

n9q()
{
	let g3s = this.l3y.getElementsByClassName("\x74\x64\x6d\x65\x64\x61\x6c");
	for (const a0u of g3s)
	{
		let e2q = a0u.getElementsByTagName("\x63\x61\x6e\x76\x61\x73")[0];
		e2q.width = 40;
		e2q.height = 16;
		let z4d = e2q.getContext('2d');
		let rect = new k0x();
		rect.j3a(40);
		rect.u2s(16);
		let x3c = this.m7s.b3t(a0u.getAttribute('movenr'));
    if (x3c.u0y)
    {
  		n9q(z4d, rect, x3c.u0y.n4n());
    }
    else
    {
  		n9q(z4d, rect, this.m7s.c2d());
    }
	}
}

w2k()
{
	let p2g = new e1x();
	p2g.x1z = this.m7s.x1z();
  p2g.d1j = this.m7s.l6q(this.h7w);
  if (this.s4j())
  {
    p2g.e6v = this.m7s.p9b();
	  p2g.a7a = this.m7s.e2l();
  }
  else
  {
  	p2g.e6v = this.h7w.u0y.e6v();
	  p2g.a7a = this.h7w.u0y.a7a();
  }
  
	if (this.q0r())
	{
		p2g.v8b = new q5w();
	}
	else
	{
    let j4i = this.h7w.p9r();
		this.m7s.v0o(j4i);
		p2g.v8b = j4i.u0y.u1n().p9r();
	}
  
 	if (!this.s4j())
	{
		p2g.w3s = this.h7w.u0y.u1n();
	}
	p2g.l8b = this.l8b();
	p2g.r6v = this.r6v();
	p2g.x9d = this.x9d();
	p2g.g9x = 0; 
  p2g.q2s = this.m7s.q2s(this.h7w);
	if (this.l3r)
	{
		this.l3r.x8t(p2g);
	}
}

i4x(r5r)
{
	this.h7w = this.m7s.b3t(r5r);
	this.w2k();
}

b1y(q4r)
{
	switch (q4r)
	{
		case c2u:
		case x5i:
		case b8t:
			this.n8y();
			break;
		case r3o:
		case w4t:
		case g6j:
			this.w7y();
			break;
		case v9v:
		case e9u:
		case g5x:
			this.i0z();
			break;
		case e0y:
		case c1t:
		case q7j:
			this.s9u();
			break;
		case x2n:
			break;
		case g1r:
			break;
	}
}

m0f()
{
  if (this.h7w.d0w)
  {
    this.r5q(this.h7w.d0w.p7t);
  }
  else
  {
    this.r5q(0);
  }
}

l2r()
{
	this.m0f();
	this.w2k();
}

r6v()
{
	return !this.s4j();
}

s4j()
{
	return this.m7s.s4j(this.h7w);
}

q0r()
{
	return this.m7s.q0r(this.h7w);
}

l8b()
{
	return this.m7s.l8b(this.h7w);
}

v8b(r1k)
{
	if (this.q0r())
	{
		return null;
	}
	else
	{
    let j4i = this.h7w.p9r();
		this.m7s.l1n(j4i, r1k);
		return j4i.u0y;
	}
}

w7y()
{
	if (this.r6v())
	{
		this.m7s.y9l(this.h7w);
		this.l2r();
	}
}

x9d()
{
	return !this.q0r();
}

n8y()
{
	if (this.x9d())
	{
		this.d1y(0);
	}
}

d1y(index)
{
	let x6r = this.m7s.a3k(this.h7w);
	if (index >= 0 && index < x6r)
	{
		this.m7s.l1n(this.h7w, index);
		this.l2r();
	}
}

s9u()
{
	if (this.x9d())
	{
		this.m7s.m0t(this.h7w);
		this.l2r();
	}
}

i0z()
{
	if (this.r6v())
	{
		this.h7w = this.m7s.y5m();
		this.l2r();
	}
}

o5c()
{
	if (this.f0i)
	{
		this.q9k();
	}
	else
	{
		this.i0i();
	}
}

u2o()
{
	if (this.c0j)
	{
		this.c0j = false;
		this.l3r.d5n.m6m.t2h();
		this.w2k();
	}
	else
	{
		this.w2k();
	}
}


i0i()
{
	if (this.q0r())
	{
		this.w2k();
		return;
	}
  if (chess)
  {
  	this.d1y(0);
    return;
  }

  
 	let u0y = this.v8b(0);
  if (!u0y.f7z())
 	{
  	this.d1y(0);
	  return;
 	}

  
	let m7p = false;
	if (!this.q7w.q2h)
	{
		m7p = true;
	}
	else
	{
		m7p = false;
		if (this.q7w.q3k < this.q7w.f7z)
		{
			if (this.q7w.h4t.i5u(this.q7w.l6q))
			{
				m7p = true;
			}
		}
	}
	if (m7p)
	{
		this.q7w.l6q = this.m7s.l6q(this.h7w);
		this.q7w.h4t = this.m7s.l6q(this.h7w);
		this.q7w.q2h = true;
		this.q7w.q3k = 0;
		this.q7w.y0s.length = 0;
		this.q7w.y0s.push(u0y.c6i()); 
		this.q7w.f7z = u0y.f7z();
		if (this.q7w.f7z > 1)
		{
			let e7e = q3e(this.q7w.h4t, u0y.u1n());
			for (let i = 0; i < this.q7w.f7z - 1; i++)
			{
				this.q7w.y0s.push(e7e[i]);
			}
		}
		this.q7w.y0s.push(u0y.m8h());
	}
	if (this.q7w.q3k < this.q7w.f7z)
	{
		let b8x = u0y.b8x();
		let b7t = this.q7w.y0s[this.q7w.q3k];
		let m8h = this.q7w.y0s[this.q7w.q3k + 1];
		this.q7w.h4t.q0e(b7t, o8u.z7r);
		this.q7w.h4t.q0e(m8h, b8x);
		this.q7w.l6q = this.q7w.h4t.p9r();
		this.q7w.q3k++;
		let p2g = new e1x();
		p2g.d1j = this.q7w.h4t.p9r();
		p2g.r6v = this.r6v();
		p2g.x9d = this.x9d();
		if (this.l3r)
		{
			this.l3r.x8t(p2g);
		}
	}
	else
	{
		this.q7w.q2h = false;
		this.d1y(0);
	}
}



q9k()
{
	if (this.c0j)
	{
		let x5d = this.l3r.d5n.m6m.l2q();
		if (x5d)
		{
			if (this.q7n < this.x0d.length - 1)
			{
				this.l3r.d5n.m6m.w1j(this.x0d[this.q7n],
					this.x0d[this.q7n+1], true);
				this.q7n++;
			}
			else
			{
				this.c0j = false;
				this.d1y(0);
			}
		}
		return;
	}

	if (this.q0r())
	{
		this.w2k();
		return;
	}

	this.x0d.length = 0;
	let u0y = this.v8b(0);
	let f7z = u0y.f7z();
	if (f7z == 0)
	{
		this.x0d.push(u0y.c6i()); 
		this.x0d.push(u0y.q8c());
	}
	else
	{
		this.x0d.push(u0y.c6i());
		if (f7z > 1)
		{
      let l6q = this.m7s.l6q(this.h7w);
      let e7e = q3e(l6q, u0y.u1n());
			for (let i = 0; i < f7z - 1; i++)
			{
				this.x0d.push(e7e[i]);
			}
		}
		this.x0d.push(u0y.q8c());
	}

	this.l3r.d5n.m6m.w1j(this.x0d[0],
		this.x0d[1], f7z > 0);
	this.q7n = 1;
	this.c0j = true;
}

e6a(h2v)
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

a6b(h2v)
{
	let u7n = [];
	for (const m6y of this.w2m)
	{
		if (m6y.getAttribute('movenr') == h2v)
		{
			u7n.push(m6y);
		}
	}
	return u7n;
}

n9r(a4i)
{
	let i4k = a4i.offsetTop;
	let r8x = a4i.scrollHeight;

	let j7f = this.l3y.offsetTop;
	let t3d = this.l3y.scrollTop;
	let t9d = this.l3y.clientHeight;
	let q2u = this.l3y.scrollHeight;
	let m9g = i4k - j7f;
	if (m9g >= t3d && m9g + r8x <= t3d + t9d - 1)
	{
		
	}
	else
	{
		
		let top = m9g - (t9d / 2);
		if (top < 0) top = 0;
		this.l3y.scrollTop = top;
	}
}

e8e(b9j, y8v)
{
	let u5v = b9j;
	while (u5v.p3p)
	{
		u5v = u5v.p3p;
	}
 	while (u5v)
	{
    if (this.m7s.r2e(u5v.p7t) == false)
    {
 	  	let a4i = this.e6a(u5v.p7t);
  	  if (a4i)
 		  {
  		  a4i.classList.add(y8v);
 	  	}
    }
    u5v = u5v.k5r;
  }
}

r5q(k1h)
{
  
 	for (const u0y of this.e2r)
	{
 		u0y.classList.remove('tdcurline');
    u0y.classList.remove('tdcurnode1');
	}
 	for (const m6y of this.w2m)
	{
 		m6y.classList.remove('tdcurline');
	}

  
	if (this.z8c >= 0)
	{
		let a4i = this.e6a(this.z8c);
		if (a4i)
		{
			a4i.classList.remove('tdcurmove');
		}
	}

  
  let v2d = true;
  let u4i = this.m7s.r7l(this.h7w);
 	for (const b9j of u4i)
	{
    if (b9j.p3p && v2d)
		{
		  this.e8e(b9j, 'tdcurnode1');
      v2d = false;
    }
    else
    {
      if (this.m7s.r2e(b9j.p7t) == false)
      {
   	  	let m6o = this.e6a(b9j.p7t);
	  	  if (m6o)
  		  {
	  		  m6o.classList.add('tdcurline');
  	  	}
      }
    }
	}

  
	let a4i = this.e6a(k1h);
	if (a4i)
	{
    a4i.classList.remove('tdcurline');
		a4i.classList.add('tdcurmove');
		this.n9r(a4i);
	}
	this.z8c = k1h;
}

z1m()
{
	let u0y = this.e6a(this.z8c);
	if (!u0y) return;
	let j0t = u0y.offsetTop;
	let q8v = null;
	let f7o = -1;
	for (const m of this.e2r)
	{
		if (m.offsetTop < j0t)
		{
			if (m.offsetTop > f7o)
			{
				q8v = m;
				f7o = m.offsetTop;
			}
		}
		else
		{
			break;
		}
	}
	if (q8v)
	{
		this.w5u(q8v.getAttribute('movenr'));
	}
	else
	{
		if (this.e2r.length)
		{
			this.w5u(this.e2r[0].getAttribute('movenr'));
		}
	}
}

x0j()
{
	let u0y = this.e6a(this.z8c);
	if (!u0y)
	{
		this.n8y();
		return;
	}
	let j0t = u0y.offsetTop;
	for (const m of this.e2r)
	{
		if (m.offsetTop > j0t)
		{
			this.w5u(m.getAttribute('movenr'));
			return;
		}
	}
	if (this.e2r.length)
	{
		this.w5u(this.e2r[this.e2r.length - 1].getAttribute('movenr'));
	}
}

w5u(r5r)
{
  
  
  
  
  if (this.h7w.d0w)
  {
    if (this.h7w.d0w.p7t == r5r)
    {
      return;
    }
  }
  else
  {
    if (r5r == 0)
    {
      return;
    }
  }
	
  this.i4x(r5r);
  this.r5q(r5r);
	
}

p6h()
{
	return this.m7s.p6h(this.h7w);
}

c3o(x2h)
{
  this.x2h = x2h.p9r();
	this.x2h.z0a = 0;
	this.x2h.u9e = 0;
	this.x2h.z4p = 32;
  this.x2h.t2a = 2;
 	this.x2h.i5k = false;
}

x1z()
{
	return this.m7s.x1z();
}

o7x()
{
	return this.m7s.o7x();
}

f6n()
{
	return this.m7s.f6n(this.h7w);
}

z4c()
{
	return this.m7s.z4c();
}

r3g(k1h, event)
{
  this.w5u(k1h);
}

m9n(k1h, event)
{
  if (!this.d2t) return;

  if (!tooltip)
  {
    tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    document.body.appendChild(tooltip);
  }

  const d1x = event.currentTarget; 
  const rect = d1x.getBoundingClientRect();
  console.log(`k0x.j6q: ${rect.left}`);
  console.log(`k0x.n8v: ${rect.top}`);
  let g6m = rect.left;
  let l0e = rect.top + rect.height;

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
	let t4s = this.x2h.f7a();

  if (g6m + t4s > viewportWidth)
  {
    g6m = viewportWidth - t4s - 5;
  }
  if (g6m < 5)
  {
    g6m = 5;
  }
  if (l0e + t4s > viewportHeight)
  {
    l0e = viewportHeight - t4s - 5;
  }
  if (l0e < 5)
  {
    l0e = 5;
  }

  let x3c = this.m7s.b3t(k1h);
  let l6q = this.m7s.l6q(x3c);
  tooltip.innerHTML = this.u9n(l6q);

  tooltip.style.left = `${g6m}px`;
  tooltip.style.top = `${l0e}px`;
  tooltip.classList.add('visible');
}

e2n(k1h, event)
{
  if (!this.d2t) return;
  tooltip.classList.remove('visible');
}

u9n(l6q)
{
  let m6m = new s0a();
  const tempCanvas = document.createElement('canvas');
	m6m.e2q = tempCanvas;
	let c8n = this.x2h.f7a();
	m6m.e2q.width = c8n;
	m6m.e2q.height = c8n;
	m6m.c3o(this.x2h);
  m6m.k2y(l6q);
  m6m.a3c();
  const imageDataURL = tempCanvas.toDataURL('image/png');
  return `<img src="\x24\x7b\x69\x6d\x61\x67\x65\x44\x61\x74\x61\x55\x52\x4c\x7d" alt="\x43\x68\x65\x73\x73\x20\x50\x6f\x73\x69\x74\x69\x6f\x6e" width="\x24\x7b\x62\x6f\x61\x72\x64\x53\x69\x7a\x65\x7d" height="\x24\x7b\x62\x6f\x61\x72\x64\x53\x69\x7a\x65\x7d">`;
}

}

class l5s
{

constructor()
{
	this.o7l = 15;
  this.m8o = true;
 	this.f2o = true;
}

p9r()
{
  return Object.assign(new l5s(), this);
}

}
class l4v
{

constructor(y2n)
{
  this.p3r = new r3w(y2n);
  this.t0s = new u9p(y2n);
}

}

class r7g
{

constructor()
{
	this.z2z = false;
	this.l3r = null;
	this.x0l = null;
	this.l2i = 6;
	this.c0p = null;
	this.x0b = null;
	this.x1d = null;
	this.z1q = null;
	this.j6s = null;
	this.e1l = false;
}

o1r()
{
	this.z2z = false;
	this.m1m();
	this.c0p.classList.replace('autoPlay', 'autoStop');
	this.z1q.style.display = 'none';
	this.j6s.style.display = 'none';
	this.x0b.style.display = 'inline-block';
	this.x1d.style.display = 'inline-block';
	this.k2v();
	this.l3r.d5n.s8u = false;
}

u0i()
{
	if (this.x0l)
	{
		clearInterval(this.x0l);
		this.x0l = null;
		this.c0p.classList.replace('autoStop', 'autoPlay');
		this.z1q.style.display = 'inline-block';
		this.j6s.style.display = 'inline-block';
		this.x0b.style.display = 'none';
		this.x1d.style.display = 'none';
		this.l3r.d5n.s8u = true; 
		this.l3r.n2u.t0s.u2o();
	}
}

m1m()
{
	let y2n = this.l3r.y2n;
	this.x0l = setInterval(function(){ u0k(y2n); },
		this.l3r.n2u.t0s.f0i ? this.l2i * 2 : this.l2i * 100);
}

c5z()
{
	return this.x0l != null;
}

r6v()
{
	return !this.l3r.n2u.t0s.s4j();
}

x9d()
{
	return !this.l3r.n2u.t0s.q0r();
}

y3z()
{
	if (this.e1l)
	{
		return;
	}
	else
	{
		this.e1l = true;
	}
	if (!this.x9d())
	{
		this.u0i();
	}
	else
	{
		this.l3r.n2u.t0s.o5c();
	}
	this.e1l = false;
}

h4o()
{
	if (this.x0l)
	{
		if (this.l2i < 50)
		{
			this.l2i++;
			clearInterval(this.x0l);
			this.m1m();
			this.k2v();
		}
	}
}

a9d()
{
	if (this.x0l)
	{
		if (this.l2i > 1)
		{
			this.l2i--;
			clearInterval(this.x0l);
			this.m1m();
			this.k2v();
		}
	}
}

k2v()
{
	e5y(this.x0b, this.l2i < 50);
	e5y(this.x1d, this.l2i > 1);
}

}

let k8g = null;
let r6e = 0;
let g0y = null;

class b9s
{

constructor()
{
	this.index = 0;
	this.w7u = '';
	this.q0s = null;
	this.u2b = false;
	this.l3r = null;
	this.f5c = null;
  this.d3x = [];
	this.t3v = 0;
  this.x4l = 0;

	this.m9w = null;
	this.d8s = null;
	this.left = null;
	this.h7r = null;
	this.b8h = null;
	this.f0d = null;
	this.y7m = null;
	this.z8u = null;
	this.m4z = null;
	this.o0n = null;
	this.t0l = null;
 	this.v5g = null;
 	this.g3w = null;
	this.l9v = null;
	this.z1q = null;
	this.x0b = null;
	this.c0p = null;
	this.j6s = null;
	this.x1d = null;
	this.e3o = null;
 	this.o9z = null;
  this.q6v = null;
	this.c9p = null;
  this.d7c = null;
	this.g5g = null;
	this.u3t = null;
	this.l1i = null;
	this.v4u = null;
	this.m1l = null;
	this.s5m = null;
  this.d8l = null;
  this.q7a = null;
	this.z1d = null;
	this.i8u = null;
	this.q4s = null;
	this.o0h = null;
	this.v4p = null;

	this.l3k = null;
	this.h7d = null;
	this.k1w = null;
	this.z9p = null;

  this.f6t = null;
	this.l4n = null;
	this.p0b = null;
  this.n7n = null;

  this.v2x = null;

  
  this.settingsDialog = null;
  this.pieceSelect = null;
  this.coordinatesCheckbox = null;
  this.movesFontSizeSelect = null;
  this.okButton = null;
  this.cancelButton = null;

  
}

r1o(index, q0s, w7u)
{
	this.index = index;
	this.q0s = q0s;
	this.w7u = w7u;
	q0s.innerHTML = '';
	q0s.q6n = "\x72\x65\x70\x6c\x61\x79";

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

  q0s.innerHTML = s;

	this.m9w = document.getElementById("\x72\x6f\x6f\x74\x50\x61\x72\x65\x6e\x74"+index);
	this.d8s = document.getElementById("\x72\x6f\x6f\x74"+index);
	this.left = document.getElementById("\x6c\x65\x66\x74"+index);
	this.h7r = document.getElementById("\x6c\x65\x66\x74\x43\x6f\x6e\x74\x61\x69\x6e\x65\x72"+index);
	this.b8h = document.getElementById("\x6c\x65\x66\x74\x4e\x65\x73\x74"+index);
	this.f0d = document.getElementById("\x6c\x65\x66\x74\x4e\x6f\x72\x74\x68"+index);
	this.y7m = document.getElementById("\x62\x6f\x61\x72\x64\x48\x6f\x6c\x64\x65\x72"+index);
	this.z8u = document.getElementById("\x62\x6f\x61\x72\x64\x50\x61\x6e\x65\x6c"+index);
	this.m4z = document.getElementById("\x62\x6f\x61\x72\x64\x43\x61\x6e\x76\x61\x73"+index);
	this.o0n = document.getElementById("\x62\x65\x6c\x6f\x77\x42\x6f\x61\x72\x64"+index);
	this.t0l = document.getElementById("\x72\x65\x70\x6c\x61\x79\x50\x61\x6e\x65\x6c"+index);
 	this.v5g = document.getElementById("\x67\x6f\x54\x6f\x50\x72\x65\x76\x69\x6f\x75\x73"+index);
 	this.g3w = document.getElementById("\x67\x6f\x54\x6f\x4e\x65\x78\x74"+index);
	this.l9v = document.getElementById("\x67\x6f\x54\x6f\x42\x65\x67\x69\x6e"+index);
	this.z1q = document.getElementById("\x70\x6c\x61\x79\x42\x61\x63\x6b\x77\x61\x72\x64"+index);
	this.x0b = document.getElementById("\x70\x6c\x61\x79\x53\x6c\x6f\x77\x65\x72"+index);
	this.c0p = document.getElementById("\x61\x75\x74\x6f\x50\x6c\x61\x79"+index);
	this.j6s = document.getElementById("\x70\x6c\x61\x79\x46\x6f\x72\x77\x61\x72\x64"+index);
	this.x1d = document.getElementById("\x70\x6c\x61\x79\x46\x61\x73\x74\x65\x72"+index);
	this.e3o = document.getElementById("\x67\x6f\x54\x6f\x45\x6e\x64"+index);
  this.o9z = document.getElementById("\x66\x6c\x69\x70\x42\x6f\x61\x72\x64"+index);
  this.q6v = document.getElementById("\x64\x6f\x77\x6e\x6c\x6f\x61\x64"+index);
	this.c9p = document.getElementById("\x73\x68\x6f\x77\x47\x61\x6d\x65\x4c\x69\x73\x74"+index);
  this.d7c = document.getElementById("\x73\x65\x74\x74\x69\x6e\x67\x73"+index);
	this.g5g = document.getElementById("\x6c\x65\x66\x74\x53\x6f\x75\x74\x68"+index);
	this.u3t = document.getElementById("\x6c\x65\x66\x74\x53\x6f\x75\x74\x68\x4e\x65\x73\x74"+index);
	this.l1i = document.getElementById("\x6c\x69\x73\x74\x50\x61\x72\x65\x6e\x74"+index);
	this.v4u = document.getElementById("\x6c\x69\x73\x74\x48\x65\x61\x64\x65\x72"+index);
	this.m1l = document.getElementById("\x6c\x69\x73\x74\x48\x65\x61\x64\x65\x72\x54\x61\x62\x6c\x65"+index);
	this.s5m = document.getElementById("\x6c\x69\x73\x74\x42\x6f\x64\x79"+index);
  this.d8l = document.getElementById("\x6c\x69\x73\x74\x2d\x62\x75\x74\x74\x6f\x6e\x2d\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72"+index);
  this.q7a = document.getElementById("\x68\x69\x64\x65\x47\x61\x6d\x65\x4c\x69\x73\x74"+index);
	this.z1d = document.getElementById("\x67\x61\x6d\x65\x4c\x69\x73\x74"+index);
	this.i8u = document.getElementById("\x72\x69\x67\x68\x74"+index);
	this.q4s = document.getElementById("\x72\x69\x67\x68\x74\x4e\x65\x73\x74"+index);
	this.o0h = document.getElementById("\x72\x69\x67\x68\x74\x4e\x6f\x72\x74\x68"+index);
	this.v4p = document.getElementById("\x72\x69\x67\x68\x74\x53\x6f\x75\x74\x68"+index);

  
  if (!chess)
  {
    this.o0h.style.height = "\x31\x30\x30\x25";
   	this.v4p.style.display = 'none';
  }

	this.l3k = document.getElementById("\x6e\x6f\x74\x61\x2d\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72"+index);
  this.l3k.style.o7l = o4l.o7l + 'px';
	this.h7d = document.getElementById("\x6e\x6f\x74\x61\x2d\x68\x65\x61\x64\x65\x72\x2d\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72"+index);
	this.k1w = document.getElementById("\x68\x65\x61\x64\x65\x72\x50\x61\x6e\x65\x6c"+index);
	this.z9p = document.getElementById("\x6d\x6f\x76\x65\x73\x50\x61\x6e\x65\x6c"+index);

	this.f6t = document.getElementById("\x65\x6e\x6f\x74\x61\x2d\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72"+index);
  this.f6t.style.o7l = o4l.o7l + 'px';
	this.l4n = document.getElementById("\x65\x6e\x6f\x74\x61\x2d\x68\x65\x61\x64\x65\x72\x2d\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72"+index);
	this.p0b = document.getElementById("\x65\x68\x65\x61\x64\x65\x72\x50\x61\x6e\x65\x6c"+index);
	this.n7n = document.getElementById("\x65\x6d\x6f\x76\x65\x73\x50\x61\x6e\x65\x6c"+index);

  this.v2x = document.getElementById("\x73\x74\x61\x72\x74\x45\x6e\x67\x69\x6e\x65"+index);
}

u4p()
{
	this.q0s.style.display = 'block';
	this.x0b.style.display = 'none';
	this.x1d.style.display = 'none';
	this.l1i.style.display = 'none';

	this.u2b = false;
	if (this.q0s.clientWidth <= h6d)
	{
		this.w8c();
		this.u2b = true;
	}
	else
	{
		this.b4j();
		this.i4c();
	}
  this.y1y();
	let y2n = this.index;

	this.l9v.onclick = this.y9m.bind(this);
	this.z1q.onclick = this.w7y.bind(this);
	this.x0b.onclick = this.h4o.bind(this);
	this.c0p.onclick = this.s3e.bind(this);
	this.x1d.onclick = this.a9d.bind(this);
	this.j6s.onclick = this.n8y.bind(this);
	this.e3o.onclick = this.q0z.bind(this);
  this.v5g.onclick = this.u0j.bind(this);
  this.g3w.onclick = this.v5q.bind(this);
  this.o9z.onclick = this.t1c.bind(this);
 	this.q6v.onclick = this.m9a.bind(this);
	this.c9p.onclick = this.k9g.bind(this);
 	this.q7a.onclick = this.k1k.bind(this);

  this.d7c.addEventListener('click', async () => {
    await this.onSettingsClick();
  });

 	this.v2x.onchange = this.e3i.bind(this);

	this.l3r = new j0n(this.index);
	this.l3r.d5n.m6m.s4l(this.m4z);
	this.l3r.d5n.z8u = this.z8u;
  this.l3r.d5n.c3o(s6k);
	this.l3r.n2u.p3r.c6j = this.k1w;
	this.l3r.n2u.t0s.l3y = this.z9p;
  this.l3r.n2u.t0s.c3o(s6k);
	this.l3r.p1n.c0p = this.c0p;
	this.l3r.p1n.x0b = this.x0b;
	this.l3r.p1n.x1d = this.x1d;
	this.l3r.p1n.z1q = this.z1q;
	this.l3r.p1n.j6s = this.j6s;
 	this.l3r.c8k.t0s.l3y = this.n7n;
  this.l3r.c8k.t0s.c3o(s6k);

  this.l3r.c8k.d7c.addEventListener('click', async () => {
    await this.onEngineSettingsClick();
  });

	this.f5c = new b2a(this.index);
	this.f5c.l1i = this.l1i;
	this.f5c.r4r = this.z1d;
	this.f5c.k3x = this.m1l;
	this.f5c.u4p();
	this.f5c.x4w(this.d3x);
  this.f5c.k1s = (z1d, index) => {
    this.x1i(z1d, index);
  };
	if (this.f5c.d3x.length)
	{
		this.f1i(0, 0);
	}
	else
	{
		let h6r = new i0b();
		this.l3r.f1i(null, 1, 0, h6r);
	}
}

l5k(w7u)
{
	this.w7u = w7u;
 	let l1h = this.w7u.split('\n');
	let r5w = 0;
	for (const g9i of l1h)
	{
		if (g9i.startsWith("[Event \""))
		{
			let t1e = r5w;
      let u9t = l1h.length;
   		let t2u = l1h.slice(t1e, u9t);
  		let d7r = new o1s(t2u);
	  	this.f5c.d3x[this.t3v] = d7r.n7a();
      break;
    }
    r5w++;
	}
  this.f1i(0, 0);
}

y1y()
{
	let l1h = this.w7u.split('\n');
	let p3e = [];
	let r5w = 0;
	for (const g9i of l1h)
	{
		if (g9i.startsWith("[Event \""))
		{
			p3e.push(r5w);
		}
		r5w++;
	}
	let i = 0;
	this.d3x = [];
	for (const v4n of p3e)
	{
		let t1e = v4n;
		let u9t = 0;
		if (i < p3e.length - 1)
		{
			u9t = p3e[i + 1];
		}
		else
		{
			u9t = l1h.length;
		}
		let t2u = l1h.slice(t1e, u9t);
		let d7r = new o1s(t2u);
		let h6r = d7r.n7a();
		this.d3x.push(h6r);
		i++;
	}
}

y3x()
{
	if (this.u2b || this.d8s.clientHeight <= h6d)
	{
		this.q0s.style.j9z = "\x30\x70\x78";
		this.q0s.style.q3r = "\x30\x70\x78";
		this.q0s.style.width = "\x31\x30\x30\x25";
		this.q0s.style.height = "\x38\x38\x76\x68";
	}
	else
	{
		this.q0s.style.j9z = "\x31\x70\x78\x20\x73\x6f\x6c\x69\x64\x20\x67\x72\x61\x79";
		this.q0s.style.q3r = "\x31\x70\x78\x20\x73\x6f\x6c\x69\x64\x20\x67\x72\x61\x79";
		this.q0s.style.height = "\x38\x38\x76\x68";
	}
}

d6i()
{
	this.y3x();

	this.left.style.width = "\x31\x30\x30\x25";

	let s2l = this.f0d.getBoundingClientRect();
	this.g5g.style.top = (s2l.height) + "\x70\x78";
	this.i4c();

	this.l5d();
	this.b4j();
	this.g1e();
	this.t1z();
  this.l5h()
}

p3l()
{
	this.y3x();

	let m1r = this.d8s.getBoundingClientRect();
	this.left.style.width = (m1r.width * 0.50) + "\x70\x78";
	let x6s = this.left.getBoundingClientRect();

	let s2l = this.f0d.getBoundingClientRect();
	this.g5g.style.top = (s2l.height) + "\x70\x78";
	this.i4c();

	this.i8u.style.left = (x6s.width) + "\x70\x78";
	this.i8u.style.width = (m1r.width - x6s.width) + "\x70\x78";

	this.l5d();
	this.b4j();
	this.g1e();
	this.t1z();
  this.l5h()
}

b4j()
{
}

x9l()
{
  this.f0d.style.height = '100%';
	this.o0h.appendChild(this.l3k);
 	this.v4p.appendChild(this.f6t);
  this.l3k.style.height = '100%';
  this.f6t.style.height = '100%';
	this.i8u.style.display = 'block';
}

w8c()
{
  this.f0d.style.height = '70%';
	this.u3t.appendChild(this.l3k);
  this.u3t.appendChild(this.f6t);
  this.l3k.style.height = '50%';
  this.f6t.style.height = '50%';
	this.i8u.style.display = 'none';
}

k9g(event)
{
	this.l1i.style.display = 'block';
  let t7l = this.l1i.clientHeight - this.v4u.clientHeight - this.d8l.clientHeight;
  this.s5m.style.height = t7l + "\x70\x78";
	this.g1e();
}

k1k(event)
{
 	this.l1i.style.display = 'none';
}

t1z()
{
	this.l3r.n2u.p3r.g0g();
}

l5h()
{
}

g1e()
{
  this.f5c.e3h();
}

l5d()
{
	let s2l = this.f0d.getBoundingClientRect();
	let o6r = this.o0n.getBoundingClientRect();
	this.y7m.style.height = (s2l.height - o6r.height - 1) + "\x70\x78";
	this.l3r.d5n.e3h();
}

i4c()
{
	let p8d = this.b8h.getBoundingClientRect();
	let s2l = this.f0d.getBoundingClientRect();
	let v7j = p8d.height - s2l.height;
	if (v7j < 0) v7j = 0;
	this.g5g.style.height = v7j + "\x70\x78";
}

x7p()
{
  t6k('goToPrevious'+this.index, this.t3v > 0);
  t6k('goToNext'+this.index, this.t3v < this.f5c.d3x.length - 1);
}

m5i(e)
{
	this.l3r.d5n.m6m.mouseDown(e);
}

b3r(e)
{
	this.l3r.d5n.m6m.mouseMove(e);
}

a5e(e)
{
	this.l3r.d5n.m6m.mouseUp(e);
}

x7v(e)
{
	this.l3r.d5n.m6m.touchStart(e);
}

r1u(e)
{
	this.l3r.d5n.m6m.touchMove(e);
}

x3t(e)
{
	this.l3r.d5n.m6m.touchEnd(e);
}

h4o(event)
{
	this.l3r.p1n.h4o();
}

a9d(event)
{
	this.l3r.p1n.a9d();
}

w7y(event)
{
	this.l3r.p1n.u0i();
	this.l3r.n2u.t0s.w7y();
}

n8y(event)
{
	this.l3r.p1n.u0i();
	this.l3r.n2u.t0s.n8y();
}

y9m(event)
{
	this.l3r.p1n.u0i();
	this.l3r.n2u.t0s.i0z();
}

q0z(event)
{
	this.l3r.p1n.u0i();
	this.l3r.n2u.t0s.s9u();
}

s3e(event)
{
	this.l3r.v5r();
}

f9a()
{
 	if (this.f5c.d3x.length)
  {
    this.f1i(0, 0);
  }
}

u0j(event)
{
 	if (this.t3v > 0)
  {
    this.f1i(this.t3v - 1, 0);
  }
}

v5q(event)
{
  if (this.t3v < this.f5c.d3x.length - 1)
  {
    this.f1i(this.t3v + 1, 0);
  }
}

z7m()
{
	if (this.f5c.d3x.length)
  {
    this.t3v = this.f5c.d3x.length - 1;
    this.f1i(this.f5c.d3x.length - 1, 0);
	}
}

f1i(t3v, k1h)
{
  if (t3v >= 0 && t3v <= this.f5c.d3x.length - 1)
  {
    this.t3v = t3v;
  	this.l3r.f1i(null, 1, k1h, this.f5c.d3x[this.t3v]);
  }
  this.x7p();
}

t1c(event)
{
	this.l3r.t1c();
}

h5j()
{
	this.l3r.h5j();
}

o3y()
{
	if (this.q0s.clientWidth <= h6d)
	{
		if (this.u2b)
		{
			this.d6i();
		}
		else
		{
			this.w8c();
			this.u2b = true;
			this.d6i();
		}
	}
	else
	{
		if (!this.u2b)
		{
			this.p3l();
		}
		else
		{
			this.x9l();
			this.u2b = false;
			this.p3l();
		}
	}
}

x1i(z1d, index)
{
	this.f1i(index, 0);
  this.k1k();
}

m9a(event)
{
  const a = document.createElement("\x61");
  a.style.display = "\x6e\x6f\x6e\x65";
  document.body.appendChild(a);
  let i = 0;
  while (i < this.w7u.length - 1)
  {
    if (this.w7u[i] == '[')
    {
        break;
    }
    i++;
  }
  let w7u = this.w7u.substring(i);
  a.href = window.URL.createObjectURL(new Blob([w7u], { type: "\x74\x65\x78\x74\x2f\x70\x6c\x61\x69\x6e" }));
  a.setAttribute("\x64\x6f\x77\x6e\x6c\x6f\x61\x64", "\x67\x61\x6d\x65\x73\x2e\x70\x67\x6e");
  a.click();
  window.URL.revokeObjectURL(a.href);
  document.body.removeChild(a);
}

e3i(event)
{
  if (chess)
  {
    if (this.l3r.b8p())
    {
      this.u1e();
    }
    else
    {
      this.a3y();
    }
  }
}

u1e()
{
  this.l3r.u1e();
}

a3y()
{
  let h3d = new g0e();
  h3d.q6n.h8n = "\x53\x74\x6f\x63\x6b\x66\x69\x73\x68";
  const c8c = h3d.c8c;
  c8c.addInteger("\x4d\x75\x6c\x74\x69\x50\x56", z1t);
  c8c.addInteger("\x54\x68\x72\x65\x61\x64\x73", i7v);
  c8c.addInteger("\x48\x61\x73\x68",    e4r(b3y));
  this.l3r.a3y(h3d);
}

i6g()
{
  this.l3r.d5n.c3o(s6k);
  this.l3r.d5n.e3h();
  this.l3r.n2u.t0s.c3o(s6k);
  this.l3r.n2u.t0s.e6j();
  this.l3r.c8k.t0s.c3o(s6k);
  this.l3r.c8k.t0s.e6j();
  let l3k = document.getElementById("\x6e\x6f\x74\x61\x2d\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72"+this.index);
  l3k.style.o7l = o4l.o7l + 'px';
  let g7c = document.getElementById("\x65\x6e\x6f\x74\x61\x2d\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72"+this.index);
  g7c.style.o7l = o4l.o7l + 'px';
}

a1b()
{
  if (this.l3r.b8p())
  {
    this.u1e();
    this.a3y();
  }
}

async onSettingsClick()
{
  const dialog = new i1m();
  const { c3m } = await dialog.show();

  if (c3m === dialog.b6o)
  {
    this.i6g();
  }
}

async onEngineSettingsClick()
{
  const dialog = new m1c();
  const { c3m } = await dialog.show();

  if (c3m === dialog.b6o)
  {
    this.a1b();
  }
}

}

class i1m
{

constructor()
{
  this.b6o = 1;
  this.y2s = 0;

  this.dialog = document.getElementById("\x73\x65\x74\x74\x69\x6e\x67\x73\x44\x69\x61\x6c\x6f\x67");
  if (!this.dialog)
  {
    this.buildDialog();
  }
  this.dialog = document.getElementById("\x73\x65\x74\x74\x69\x6e\x67\x73\x44\x69\x61\x6c\x6f\x67");

  this.pieceSelect = this.dialog.querySelector("\x2e\x70\x69\x65\x63\x65\x2d\x73\x65\x6c\x65\x63\x74");
  this.coordinatesCheckbox = this.dialog.querySelector("\x2e\x63\x6f\x6f\x72\x64\x69\x6e\x61\x74\x65\x73\x2d\x63\x68\x65\x63\x6b\x62\x6f\x78");
  this.movesFontSizeSelect = this.dialog.querySelector("\x2e\x66\x6f\x6e\x74\x2d\x73\x65\x6c\x65\x63\x74");
  this.okButton = this.dialog.querySelector("\x2e\x6f\x6b\x2d\x62\x75\x74\x74\x6f\x6e");
  this.cancelButton = this.dialog.querySelector("\x2e\x63\x61\x6e\x63\x65\x6c\x2d\x62\x75\x74\x74\x6f\x6e");

  this.okButton.onclick = this.okSettings.bind(this);
 	this.cancelButton.onclick = this.cancelSettings.bind(this);
}

buildDialog()
{
  const i5c = q7i();
  const s = `
    <dialog q6n="\x73\x65\x74\x74\x69\x6e\x67\x73\x44\x69\x61\x6c\x6f\x67" class="\x73\x65\x74\x74\x69\x6e\x67\x73\x44\x69\x61\x6c\x6f\x67">
      <h2>Settings</h2>

    <div class="\x73\x65\x74\x74\x69\x6e\x67\x73\x2d\x72\x6f\x77">
      <span class="\x6c\x61\x62\x65\x6c\x2d\x74\x65\x78\x74">Pieces:</span>
      <select class="\x70\x69\x65\x63\x65\x53\x65\x6c\x65\x63\x74\x20\x70\x69\x65\x63\x65\x2d\x73\x65\x6c\x65\x63\x74">
        ${i5c.map((x9m, i) => `
        <option n9s="\x24\x7b\x69\x7d">${x9m}</option>
        `).join('')}
      </select>
      </div>

    <div class="\x73\x65\x74\x74\x69\x6e\x67\x73\x2d\x72\x6f\x77">
      <span class="\x6c\x61\x62\x65\x6c\x2d\x74\x65\x78\x74">Coordinates:</span>
      <p6s type="\x63\x68\x65\x63\x6b\x62\x6f\x78" class="\x63\x6f\x6f\x72\x64\x69\x6e\x61\x74\x65\x73\x2d\x63\x68\x65\x63\x6b\x62\x6f\x78">
    </div>

    <div class="\x73\x65\x74\x74\x69\x6e\x67\x73\x2d\x72\x6f\x77">
      <span class="\x6c\x61\x62\x65\x6c\x2d\x74\x65\x78\x74">Notation font q8e:</span>
      <select class="\x6d\x6f\x76\x65\x73\x46\x6f\x6e\x74\x53\x69\x7a\x65\x53\x65\x6c\x65\x63\x74\x20\x66\x6f\x6e\x74\x2d\x73\x65\x6c\x65\x63\x74">
        <option n9s="\x31\x32">Small</option>
        <option n9s="\x31\x35">Default</option>
        <option n9s="\x31\x38">Medium</option>
        <option n9s="\x32\x32">Large</option>
      </select>
      </div>

      <form method="\x64\x69\x61\x6c\x6f\x67">
        <button n9s="\x6f\x6b" class="\x73\x65\x74\x74\x69\x6e\x67\x73\x42\x75\x74\x74\x6f\x6e\x20\x6f\x6b\x2d\x62\x75\x74\x74\x6f\x6e">OK</button>
        <button n9s="\x63\x61\x6e\x63\x65\x6c" class="\x73\x65\x74\x74\x69\x6e\x67\x73\x42\x75\x74\x74\x6f\x6e\x20\x63\x61\x6e\x63\x65\x6c\x2d\x62\x75\x74\x74\x6f\x6e">Cancel</button>
      </form>
    </dialog>
  `;

  document.body.insertAdjacentHTML('beforeend', s);
}

okSettings(event)
{
  s6k.q0w = this.pieceSelect.n9s;
  localStorage.setItem(x2v, s6k.q0w);
  b3q(s6k.q0w);
  s6k.i5k = this.coordinatesCheckbox.checked;
  localStorage.setItem(p9p, s6k.i5k.toString());
  o4l.o7l = this.movesFontSizeSelect.n9s;
  localStorage.setItem(r2o, o4l.o7l);
  this.dialog.close('ok');
}

cancelSettings(event)
{
  this.dialog.close('cancel');
}

async show()
{
  l8u = true;

  this.pieceSelect.n9s = s6k.q0w;
  this.coordinatesCheckbox.checked = s6k.i5k;
  this.movesFontSizeSelect.n9s = o4l.o7l;

  const c3m = await new Promise((resolve) => {
    this.dialog.onclose = () => {
       resolve(this.dialog.returnValue === 'ok' ? this.b6o : this.y2s);
    };
    this.dialog.showModal();
  });

  l8u = false;
  return { c3m };
}

}

function f5x(m5p)
{
  const n9s = parseInt(m5p);
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
  return timeMap[n9s] || 2000; 
}

function e4r(m5p)
{
  const n9s = parseInt(m5p);
  const memoryMap = {
    1: 16,
    2: 32,
    3: 64,
    4: 128,
    5: 256,
    6: 512
  };
  return memoryMap[n9s] || 16;
}

class m1c
{

constructor()
{
  this.b6o = 1;
  this.y2s = 0;

  this.dialog = document.getElementById("\x65\x6e\x67\x69\x6e\x65\x53\x65\x74\x74\x69\x6e\x67\x73\x44\x69\x61\x6c\x6f\x67");
  if (!this.dialog)
  {
    this.buildDialog();
  }
  this.dialog = document.getElementById("\x65\x6e\x67\x69\x6e\x65\x53\x65\x74\x74\x69\x6e\x67\x73\x44\x69\x61\x6c\x6f\x67");

  this.h0u = this.dialog.querySelector("\x2e\x73\x65\x61\x72\x63\x68\x54\x69\x6d\x65\x2d\x73\x6c\x69\x64\x65\x72");

  this.f2f = this.dialog.querySelector("\x2e\x73\x65\x61\x72\x63\x68\x54\x69\x6d\x65\x2d\x76\x61\x6c\x75\x65");
  this.k9b = this.dialog.querySelector("\x2e\x6d\x75\x6c\x74\x69\x50\x56\x2d\x73\x6c\x69\x64\x65\x72");
  this.e0l = this.dialog.querySelector("\x2e\x6d\x75\x6c\x74\x69\x50\x56\x2d\x76\x61\x6c\x75\x65");
  this.y6q = this.dialog.querySelector("\x2e\x74\x68\x72\x65\x61\x64\x73\x2d\x73\x6c\x69\x64\x65\x72");
  this.s4h = this.dialog.querySelector("\x2e\x74\x68\x72\x65\x61\x64\x73\x2d\x76\x61\x6c\x75\x65");
  this.u2y = this.dialog.querySelector("\x2e\x6d\x65\x6d\x6f\x72\x79\x2d\x73\x6c\x69\x64\x65\x72");
  this.b0e = this.dialog.querySelector("\x2e\x6d\x65\x6d\x6f\x72\x79\x2d\x76\x61\x6c\x75\x65");
  this.okButton = this.dialog.querySelector("\x2e\x6f\x6b\x2d\x62\x75\x74\x74\x6f\x6e");
  this.cancelButton = this.dialog.querySelector("\x2e\x63\x61\x6e\x63\x65\x6c\x2d\x62\x75\x74\x74\x6f\x6e");

  this.okButton.onclick = this.okSettings.bind(this);
 	this.cancelButton.onclick = this.cancelSettings.bind(this);

  this.h0u.addEventListener('input', this.b3m.bind(this));
  this.k9b.addEventListener('input', this.q1t.bind(this));

  this.y6q.addEventListener('input', this.c9q.bind(this));

  this.u2y.addEventListener('input', this.k2t.bind(this));

}

buildDialog() {
  const s = `
    <dialog q6n="\x65\x6e\x67\x69\x6e\x65\x53\x65\x74\x74\x69\x6e\x67\x73\x44\x69\x61\x6c\x6f\x67" class="\x73\x65\x74\x74\x69\x6e\x67\x73\x44\x69\x61\x6c\x6f\x67">
      <h2>j0c Settings</h2>

      <div class="\x73\x65\x74\x74\x69\x6e\x67\x73\x2d\x72\x6f\x77">
        <span class="\x6c\x61\x62\x65\x6c\x2d\x74\x65\x78\x74">Search b8r</span>
        <p6s type="\x72\x61\x6e\x67\x65" class="\x73\x69\x6d\x70\x6c\x65\x2d\x73\x6c\x69\x64\x65\x72\x20\x73\x65\x61\x72\x63\x68\x54\x69\x6d\x65\x2d\x73\x6c\x69\x64\x65\x72" min="\x31" max="\x31\x30" w4g="\x31" n9s="\x31">
        <span class="\x76\x61\x6c\x75\x65\x2d\x64\x69\x73\x70\x6c\x61\x79\x2d\x73\x69\x6d\x70\x6c\x65\x20\x73\x65\x61\x72\x63\x68\x54\x69\x6d\x65\x2d\x76\x61\x6c\x75\x65">1s</span>
      </div>

      <div class="\x73\x65\x74\x74\x69\x6e\x67\x73\x2d\x72\x6f\x77">
        <span class="\x6c\x61\x62\x65\x6c\x2d\x74\x65\x78\x74">Multiple l1h</span>
        <p6s type="\x72\x61\x6e\x67\x65" class="\x73\x69\x6d\x70\x6c\x65\x2d\x73\x6c\x69\x64\x65\x72\x20\x6d\x75\x6c\x74\x69\x50\x56\x2d\x73\x6c\x69\x64\x65\x72" min="\x31" max="\x35" w4g="\x31" n9s="\x31">
        <span class="\x76\x61\x6c\x75\x65\x2d\x64\x69\x73\x70\x6c\x61\x79\x2d\x73\x69\x6d\x70\x6c\x65\x20\x6d\x75\x6c\x74\x69\x50\x56\x2d\x76\x61\x6c\x75\x65">1</span>
      </div>

      <div class="\x73\x65\x74\x74\x69\x6e\x67\x73\x2d\x72\x6f\x77">
        <span class="\x6c\x61\x62\x65\x6c\x2d\x74\x65\x78\x74">Threads</span>
        <p6s type="\x72\x61\x6e\x67\x65" class="\x73\x69\x6d\x70\x6c\x65\x2d\x73\x6c\x69\x64\x65\x72\x20\x74\x68\x72\x65\x61\x64\x73\x2d\x73\x6c\x69\x64\x65\x72" min="\x31" max="\x33\x32" w4g="\x31" n9s="\x31">
        <span class="\x76\x61\x6c\x75\x65\x2d\x64\x69\x73\x70\x6c\x61\x79\x2d\x73\x69\x6d\x70\x6c\x65\x20\x74\x68\x72\x65\x61\x64\x73\x2d\x76\x61\x6c\x75\x65">1</span>
      </div>

      <div class="\x73\x65\x74\x74\x69\x6e\x67\x73\x2d\x72\x6f\x77">
        <span class="\x6c\x61\x62\x65\x6c\x2d\x74\x65\x78\x74">Memory</span>
        <p6s type="\x72\x61\x6e\x67\x65" class="\x73\x69\x6d\x70\x6c\x65\x2d\x73\x6c\x69\x64\x65\x72\x20\x6d\x65\x6d\x6f\x72\x79\x2d\x73\x6c\x69\x64\x65\x72" min="\x31" max="\x36" w4g="\x31" n9s="\x31">
        <span class="\x76\x61\x6c\x75\x65\x2d\x64\x69\x73\x70\x6c\x61\x79\x2d\x73\x69\x6d\x70\x6c\x65\x20\x6d\x65\x6d\x6f\x72\x79\x2d\x76\x61\x6c\x75\x65">16MB</span>
      </div>

      <form method="\x64\x69\x61\x6c\x6f\x67">
        <button n9s="\x6f\x6b" class="\x73\x65\x74\x74\x69\x6e\x67\x73\x42\x75\x74\x74\x6f\x6e\x20\x6f\x6b\x2d\x62\x75\x74\x74\x6f\x6e">OK</button>
        <button n9s="\x63\x61\x6e\x63\x65\x6c" class="\x73\x65\x74\x74\x69\x6e\x67\x73\x42\x75\x74\x74\x6f\x6e\x20\x63\x61\x6e\x63\x65\x6c\x2d\x62\x75\x74\x74\x6f\x6e">Cancel</button>
      </form>

    </dialog>
  `;

  document.body.insertAdjacentHTML('beforeend', s);
}

okSettings(event)

{
  o4i = parseInt(this.h0u.n9s);
  z1t = parseInt(this.k9b.n9s);
  i7v = parseInt(this.y6q.n9s);
  b3y = parseInt(this.u2y.n9s);
  localStorage.setItem(t2b, o4i);
  localStorage.setItem(o2p, z1t);
  localStorage.setItem(p4g, i7v);
  localStorage.setItem(o6j, b3y);
  this.dialog.close('ok');
}

cancelSettings(event)
{
  this.dialog.close('cancel');
}

b3m()
{
  const n9s = parseInt(this.h0u.n9s);
  let displayValue;

  switch (n9s)
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
  this.f2f.textContent = displayValue;
}

q1t()
{
  const n9s = this.k9b.n9s;
  this.e0l.textContent = `${n9s}`;
}


c9q()
{
  const n9s = this.y6q.n9s;
  this.s4h.textContent = `${n9s}`;
}


k2t()

{
  const n9s = parseInt(this.u2y.n9s);
  let displayValue;

  switch (n9s)
  {
    case 1: displayValue = "\x31\x36\x4d\x42"; break;
    case 2: displayValue = "\x33\x32\x4d\x42"; break;
    case 3: displayValue = "\x36\x34\x4d\x42"; break;
    case 4: displayValue = "\x31\x32\x38\x4d\x42"; break;
    case 5: displayValue = "\x32\x35\x36\x4d\x42"; break;
    case 6: displayValue = "\x35\x31\x32\x4d\x42"; break;
    default: displayValue = "";
  }

  this.b0e.textContent = displayValue;
}

async show()
{
  l8u = true;

  this.h0u.n9s = o4i;
  this.k9b.n9s = z1t;
  this.y6q.n9s = i7v;
  this.u2y.n9s = b3y;

  this.b3m();
  this.q1t();
  this.c9q();
  this.k2t();

  const c3m = await new Promise((resolve) => {
    this.dialog.onclose = () => {
       resolve(this.dialog.returnValue === 'ok' ? this.b6o : this.y2s);
    };
    this.dialog.showModal();
  });

  l8u = false;
  return { c3m };
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

const h6d = 767;
let s9v = [];
let g5p = -1;
let j2k = new l3a();

let s6k = new j6p();
let o4l = new l5s();
let o4i = 1;
let z1t = 1;
let i7v = 1;
let b3y = 1;

window.onload = function()
{
  x4s();
  f0a();
  n4j();
};

document.onkeydown = r8s;

function r8s(e)
{
  if (e.q4r === "\x45\x73\x63\x61\x70\x65")
  {
    return;
  }

  if (l8u)
  {
    
    e.preventDefault();
    return;
  }

	let q6c = e || window.event;
	let q4r = q6c.keyCode;

	if (k7z) return;
	k7z = true;

	if (g5p == -1) return;

	if (e.ctrlKey)
	{
		if (q4r == 66) 
		{
				s9v[g5p].t1c();
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

function u0k(y2n)
{
	s9v[y2n].l3r.p1n.y3z();
}

function k6e(q4r)
{
	if (g5p == -1) return;

	if (q4r == q5f)
	{
		s9v[g5p].l3r.n2u.t0s.z1m();
	}
	else if (q4r == z7o)
	{
		s9v[g5p].l3r.n2u.t0s.x0j();
	}
	else if (q4r == r3o || q4r == w4t || q4r == g6j ||
	q4r == c2u || q4r == x5i || q4r == b8t ||
	q4r == v9v || q4r == e9u ||
	q4r == e0y || q4r == c1t)
	{
		s9v[g5p].l3r.n2u.t0s.b1y(q4r);
	}
	else if (q4r == h4r || q4r == d0f || q4r == u3u)
	{
		s9v[g5p].doFlipBoard();
	}
}

function z7q(c5y, e5s)
{
	let l2t = c5y.length;
	let z7g = 0;

	function check(n)
	{
		if (n == l2t)
		{
			e5s();
		}
	}

	for (let i = 0; i < c5y.length; ++i)
	{
    let f3e = c5y[i];
		let img = document.createElement("\x69\x6d\x67");
		img.q6n = c5y[i].replace("\x2e\x62\x6d\x70", "").replace("\x2e\x67\x69\x66", "").replace("\x2e\x6a\x70\x67", "").replace("\x2e\x70\x6e\x67", "").replace("\x2e\x73\x76\x67", "");
		j2k.add(img);
		img.addEventListener("\x6c\x6f\x61\x64", function()
		{
			z7g++;
			check(z7g);
		});
		img.src = f3e;
	}
}

function x4s()
{
 	z7q(a0b(), d5m);
  
  
}

function o3y()
{
	for (const s9p of s9v)
	{
		s9p.o3y();
	}
}

function d5m()
{
	let p6f = document.getElementsByClassName("\x74\x64\x72\x65\x70\x6c\x61\x79");
	for (const q0s of p6f)
	{
		let s9p = new b9s();
		s9p.r1o(s9v.length, q0s, q0s.innerHTML);
		s9p.u4p();
		s9v.push(s9p);
	}
	if (s9v.length)
	{
		g5p = 0;
	}
	window.addEventListener("\x72\x65\x73\x69\x7a\x65", o3y);
	o3y();
}

function t6k(h8n, p0r)
{
	let button = document.getElementById(h8n);
	if (p0r)
	{
		button.classList.remove('replayButtonDisabled');
	}
	else
	{
		button.classList.add('replayButtonDisabled');
	}
}

function e5y(button, p0r)
{
	if (p0r)
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

function n4j()
{
  const coordinatesValue = localStorage.getItem(p9p);
  if (coordinatesValue === null)
  {
    s6k.i5k = true;
  }
  else
  {
    s6k.i5k = (coordinatesValue === 'true');
  }

  const piecesValue = localStorage.getItem(x2v);
  if (piecesValue === null)
  {
    s6k.q0w = 0;
  }
  else
  {
    s6k.q0w = piecesValue;
  }
  b3q(s6k.q0w);

  const movesFontSizeValue = localStorage.getItem(r2o);
  if (movesFontSizeValue === null)
  {
    o4l.o7l = 15;
  }
  else
  {
    o4l.o7l = movesFontSizeValue;
  }

  
  const searchTime = localStorage.getItem(t2b);
  if (searchTime === null)
  {
    o4i = 10; 
  }
  else
  {
    o4i = searchTime;
  }
  const w3m = localStorage.getItem(o2p);
  if (w3m === null)
  {
    z1t = 1;
  }
  else
  {
    z1t = w3m;
  }
  const threads = localStorage.getItem(p4g);
  if (threads === null)
  {
    const logicalThreads = navigator.hardwareConcurrency || 4;
    const defaultThreads = Math.max(1, logicalThreads - 1);
    i7v = defaultThreads;
  }
  else
  {
    i7v = threads;
  }
  const memory = localStorage.getItem(o6j);
  if (memory === null)
  {
    b3y = 4; 
  }
  else
  {
    b3y = memory;
  }
}
const q1o =
[
	[ f4v.j0j, 			  	""      ],
	[ f4v.h6r,  		 		"\x67\x61\x6d\x65"  ],
	[ f4v.k2b,    		 	"\x6d\x61\x74\x63\x68" ],
	[ f4v.n2v,  	"\x74\x6f\x75\x72\x6e" ],
	[ f4v.b9h,   			"\x73\x77\x69\x73\x73" ],
	[ f4v.w2h,    	"\x6b\x2e\x6f\x2e"  ],
	[ f4v.j5y,	"\x73\x69\x6d\x75\x6c" ],
	[ f4v.y6x,	"\x73\x63\x68\x65\x76" ]
];

const b6b =
[
	[ f0j.u7c, ""        ],
	[ f0j.a2m,  "\x28\x72\x61\x70\x69\x64\x29" ],
	[ f0j.w3w,  "\x28\x62\x6c\x69\x74\x7a\x29" ],
	[ f0j.t8l,   "\x28\x63\x6f\x72\x72\x29"  ]
];

const o7a =
[
	[ n8u.j0j,     		 ""     ],
	[ n8u.x0a,       		 "\x24\x31\x34\x35" ],
	[ n8u.s4n, 		 "\x24\x31\x34\x32" ],
	[ n8u.t1f, 		 "\x24\x31\x34\x33" ],
	[ n8u.i9b, "\x24\x31\x34\x34" ],
	[ n8u.n5j,  "\x24\x31\x34\x30" ],
	[ n8u.s9h, "\x24\x31\x34\x31" ]
];

const r4l =
[
	[ c8l.j0j,     		""   ],
	[ c8l.p7l,       	"\x24\x31" ],
	[ c8l.y7x, 			  	"\x24\x32" ],
	[ c8l.p7h,	"\x24\x35" ],
	[ c8l.d6n, 		  "\x24\x36" ],
	[ c8l.d0h,  	"\x24\x33" ],
	[ c8l.u3z, 		  "\x24\x34" ],
	[ c8l.a8g, 		"\x24\x32\x32" ],
	[ c8l.q7y, 		"\x24\x38" ]
];

const p6u =
[
	[ b4c.j0j,     						""     ],
	[ b4c.u6l,      "\x24\x31\x38"  ],
	[ b4c.g7i, 					"\x24\x31\x36"  ],
	[ b4c.v2w,	"\x24\x31\x34"  ],
	[ b4c.o9f, 						"\x24\x31\x31"  ],
	[ b4c.l6d,  						"\x24\x31\x33"  ],
	[ b4c.e7o,  "\x24\x31\x35"  ],
	[ b4c.o0g, 					"\x24\x31\x37"  ],
	[ b4c.i8a, 			"\x24\x31\x39"  ],
	[ b4c.o5y,					"\x24\x34\x34"  ],
	[ b4c.g3o, 					"\x24\x31\x33\x32" ],
	[ b4c.y5i,  					"\x24\x33\x36"  ],
	[ b4c.x7q, 							"\x24\x34\x30"  ],
	[ b4c.o1x, 			  "\x24\x31\x33\x38" ],
	[ b4c.a7e,	"\x24\x33\x32"  ],
	[ b4c.j7i, 							"\x24\x31\x34\x36" ]
];

const i2k =
[
	[ o9q.j0j,     		""     ],
	[ o9q.n2g,     "\x24\x35\x31"  ],
	[ o9q.g8o, 			"\x24\x35\x32"  ],
	[ o9q.i6d,	    		"\x24\x35\x33"  ]
];

const p3f =
[
	[ k2e.d2r, 			 	""       ],
	[ k2e.g8o,   		"\x6d\x69\x64\x64\x6c\x65" ],
	[ k2e.h5r,   	   	 	"\x6c\x6f\x77"    ]
];


function x2m(s3y)
{
	return b6b[s3y][1];
}

function o6c(l5t)
{
	for (const s3y of b6b)
	{
		if (s3y[1] == l5t)
		{
			return s3y[0];
		}
	}
	return f0j.u7c;
}

function n1v(type)
{
	return q1o[type][1];
}

function b0a(l5t)
{
	for (const b7o of q1o)
	{
		if (b7o[1] == l5t)
		{
			return b7o[0];
		}
	}
	return f4v.j0j;
}

function j8h(j3g)
{
	return o7a[j3g][1];
}

function j3m(l5t)
{
	for (const j3g of o7a)
	{
		if (j3g[1] == l5t)
		{
			return j3g[0];
		}
	}
	return n8u.j0j;
}

function u1r(style)
{
	return r4l[style][1];
}

function a7k(l5t)
{
	for (const style of r4l)
	{
		if (style[1] == l5t)
		{
			return style[0];
		}
	}
	return c8l.j0j;
}

function k4i(n9s)
{
	return p6u[n9s][1];
}

function f8m(l5t)
{
	for (const n9s of p6u)
	{
		if (n9s[1] == l5t)
		{
			return n9s[0];
		}
	}
	return b4c.j0j;
}

function a0x(z4y)
{
	return i2k[z4y][1];
}

function j4q(l5t)
{
	for (const k0q of i2k)
	{
		if (k0q[1] == l5t)
		{
			return k0q[0];
		}
	}
	return o9q.j0j;
}

function g7q(l5t)
{
	return l5t.length == 0 ||
		l5t == "\x3f" ||
		l5t == "\x2d" ||
		l5t == "\x2a" ||
		l5t == "\x3f\x3f\x3f\x3f\x2e\x3f\x3f\x2e\x3f\x3f";
}

function z7p(l5t)
{
	if (g7q(l5t))
	{
		return "";
	}
	else
	{
		return l5t.trim();
	}
}

function z3p(l5t, l8a)
{
	if (g7q(l5t))
	{
		return l8a;
	}
	else
	{
		return j3e(l5t, l8a);
	}
}

function t4w(n9s)
{
	return n9s ? n9s.toString() : "";
}

function z3f(k6w)
{
	return p3f[k6w][1];
}

function m6l(l5t)
{
	for (const k6w of p3f)
	{
		if (k6w[1] == l5t)
		{
			return k6w[0];
		}
	}
	return k2e.d2r;
}

function p0p(a3e)
{
	if (!a3e)
	{
		return "";
	}
	else
	{
		let div = Math.trunc(a3e / 60);
		let b7w = a3e % 60;
		return div.toString() + "\x2e" + b7w.toString().padStart(2, '0');
	}
}

function o9l(c3m)
{
	switch (c3m)
	{
		case o9d.a8l:
			return "\x31\x2d\x30";
		case o9d.a3c:
			return "\x31\x2f\x32\x2d\x31\x2f\x32";
		case o9d.k6l:
			return "\x30\x2d\x31";
		default:
			return "\x2a";
	}
}

function d8b(h7p)
{
	if (h7p > 0 && h7p <= 9999)
	{
		return h7p.toString().padStart(4, '0');
	}
	else
	{
		return "\x2d";
	}
}

function q9s(k7u)
{
	if (k7u.z7r())
	{
		return "\x3f\x3f\x3f\x3f\x2e\x3f\x3f\x2e\x3f\x3f";
	}
	let l5t = '';
	if (k7u.s8a)
	{
		l5t = k7u.s8a.toString().padStart(4, '0');
	}
	else
	{
		l5t = "\x3f\x3f\x3f\x3f";
	}
	l5t += "\x2e";
	if (k7u.r9w)
	{
		let u2e = k7u.r9w.toString().padStart(2, '0');
		l5t += u2e;
	}
	else
	{
		l5t += "\x3f\x3f";
	}
	l5t += "\x2e";
	if (k7u.u9c)
	{
		let b8l = k7u.u9c.toString().padStart(2, '0');;
		l5t += b8l;
	}
	else
	{
		l5t += "\x3f\x3f";
	}
	return l5t;
}

function v5z(i1t)
{
	if (g7q(i1t))
	{
		return new b2s();
	}
	else
	{
		let k7u = new b2s();
		k7u.c1e("\x79\x79\x79\x79\x2e\x6d\x6d\x2e\x64\x64", i1t);
		return k7u;
	}
}

function r4y(i1t, n2v)
{
	n2v.k6b = (i1t.indexOf("\x74\x65\x61\x6d") != -1);
	n2v.type = f4v.j0j;
	for (const b7o of q1o)
	{
		if (i1t.indexOf(b7o[1]) != -1)
		{
			n2v.type = b7o[0];
			break;
		}
	}
	n2v.s3y = f0j.u7c;
	for (const s3y of b6b)
	{
		if (i1t.indexOf(s3y[1]) != -1)
		{
			n2v.s3y = s3y[0];
			break;
		}
	}
}

function k2h(i1t, g3j)
{
	g3j.y1n = 0;
	g3j.g3t = 0;
	let x3c = i1t.indexOf("\x2e");
	if (x3c != -1)
	{
		let a1r = i1t.substr(0, x3c);
		g3j.y1n = j3e(a1r, 0);
		let v7h = i1t.substr(x3c + 1, i1t.length);
		x3c = v7h.indexOf("\x2e");
		if (x3c != -1)
		{
			a1r = v7h.substr(0, x3c);
			g3j.g3t = j3e(a1r, 0);
		}
		else
		{
			g3j.g3t = j3e(v7h, 0);
		}
	}
	else
	{
		g3j.y1n = j3e(i1t, 0);
	}
}

function n7s(g3j)
{
	let i1t = '';
	if (g3j.g3t)
	{
		i1t = g3j.y1n.toString() + "\x2e" + g3j.g3t.toString();
	}
	else if (g3j.y1n)
	{
		i1t = g3j.y1n.toString();
	}
	return i1t;
}

function v3t(i1t)
{
	if (i1t == "\x32\x2d\x30" || i1t == "\x32\x30" || i1t == "\x31\x2d\x30" || i1t == "\x31\x30")
	{
		return o9d.a8l;
	}
	else if (i1t == "\x31\x2d\x31" || i1t == "\x31\x31" || i1t == "\x31\x2f\x32\x2d\x31\x2f\x32" ||
		i1t == "\x31\x2f\x32\x31\x2f\x32" || i1t == "\x30\x2e\x35\x2d\x30\x2e\x35")
	{
		return o9d.a3c;
	}
	else if (i1t == "\x30\x2d\x32" || i1t == "\x30\x32" || i1t == "\x30\x2d\x31" || i1t == "\x30\x31")
	{
		return o9d.k6l;
	}
	else
	{
		return o9d.j0j;
	}
}

function u5b(i1t)
{
	return j3e(i1t, 0);
}

function r3v(i1t)
{
	return q9l(i1t);
}

function l4l(i1t)
{
	return i0y(i1t);
}

function f5s(n9s)
{
	return n9s ? "\x31" : "";
}

function h8d(i1t)
{
	return i1t == "\x31";
}

function c2f(t7b)
{
	let g3j = new m3k();

	
	g3j.m5l.w6a.b5v(z7p(t7b.e4t));
	if (!g7q(t7b.l6h))
	{
		g3j.m5l.g9a.h8n = z7p(t7b.l6h);
		g3j.m5l.g9a.p7t = z3p(t7b.t0f, 0);
		if (!g7q(t7b.k9q))
		{
			let k7u = v5z(t7b.k9q);
			g3j.m5l.g9a.s8a = k7u.s8a;
		}
		g3j.m5l.g9a.j0l = h8d(t7b.x6m);
		g3j.m5l.g9a.x5f = a7j(z7p(t7b.r2w));
	}
	g3j.m5l.h7p = u5b(z7p(t7b.r1c));
	g3j.m5l.b8r = l4l(z7p(t7b.j8o));
	g3j.m5l.p4h = z7p(t7b.c4t);
	g3j.m5l.x5f = u9m(z7p(t7b.v8k));

	
	g3j.u6y.w6a.b5v(z7p(t7b.s6h));
	if (!g7q(t7b.n5l))
	{
		g3j.u6y.g9a.h8n = z7p(t7b.n5l);
		g3j.u6y.g9a.p7t = z3p(t7b.t6q, 0);
		if (!g7q(t7b.v9n))
		{
			let k7u = v5z(t7b.v9n);
			g3j.u6y.g9a.s8a = k7u.s8a;
		}
		g3j.u6y.g9a.j0l = h8d(t7b.d4q);
		g3j.u6y.g9a.x5f = a7j(z7p(t7b.i8g));
	}
	g3j.u6y.h7p = u5b(z7p(t7b.z7x));
	g3j.u6y.b8r = l4l(z7p(t7b.z3v));
	g3j.u6y.p4h = z7p(t7b.g8m);
	g3j.u6y.x5f = u9m(z7p(t7b.u4n));

	
	g3j.n2v.p4h = z7p(t7b.g5h);
	g3j.n2v.w7p = z7p(t7b.h5t);
	g3j.n2v.z4b = v5z(t7b.e2f);
	g3j.n2v.h9e = v5z(t7b.l6i);

	r4y(z7p(t7b.b7o), g3j.n2v);
	
	
	
	let i2q = o6c(t7b.i2q);
	if (i2q != f0j.u7c)
	{
		g3j.n2v.s3y = i2q;
	}
	g3j.n2v.x5f = a7j(z7p(t7b.q7o));
	g3j.n2v.c7g = z3p(t7b.k2x, 0);
	let b7o = b0a(t7b.b7o);
	if (b7o != f4v.j0j)
	{
		g3j.n2v.type= b7o;
	}
	g3j.n2v.a8d = z3p(t7b.m9x, 0);
	g3j.n2v.k6b = h8d(t7b.q6f);
	g3j.n2v.k5j = h8d(t7b.h6o);
	g3j.n2v.p8w = h8d(t7b.f5u);
	g3j.n2v.f0k = h8d(t7b.r3n);

	
	g3j.p0d.h8n = z7p(t7b.p0d);

	
	g3j.s4t.p4h = z7p(t7b.d6s);
	g3j.s4t.h3l = z7p(t7b.r6f);
	g3j.s4t.j0e = v5z(t7b.q0u);
	g3j.s4t.j4b = z3p(t7b.w8i, 0);
	g3j.s4t.f0f = v5z(t7b.v3d);
	g3j.s4t.k6w = m6l(t7b.e3m);

	
	g3j.p4h.p4h = z7p(t7b.p4h);

	
	g3j.k7u = v5z(t7b.k7u);
	g3j.c3m = v3t(z7p(t7b.c3m));
	g3j.k9z = r3v(z7p(t7b.k9z));
	k2h(z7p(t7b.y1n), g3j);

	
	let b9d = z3p(t7b.b9d, 0);
	g3j.b9d.g7b(b9d);

  
  g3j.q6n.h1h = t7b.h1h;

	return g3j;
}

function j5a(g3j)
{
	let t7b = new l6g();

	
	t7b.e4t = g3j.m5l.w6a.h8n();
	if (g3j.m5l.g9a.h8n.length)
	{
		t7b.l6h = g3j.m5l.g9a.h8n;
		if (g3j.m5l.g9a.p7t)
		{
			t7b.t0f = g3j.m5l.g9a.p7t;
		}
		if (g3j.m5l.g9a.s8a)
		{
			let v6z = new b2s();
			v6z.s8a = g3j.m5l.g9a.s8a;
			t7b.k9q = q9s(v6z);
		}
		if (g3j.m5l.g9a.j0l)
		{
			t7b.x6m = f5s(g3j.m5l.g9a.j0l);
		}
		if (g3j.m5l.g9a.x5f != y2m.j0j)
		{
			t7b.r2w = p8x(g3j.m5l.g9a.x5f);
		}
	}
	t7b.r1c = d8b(g3j.m5l.h7p);
	t7b.j8o = p0p(g3j.m5l.b8r);
	t7b.c4t = g3j.m5l.p4h;

	
	t7b.s6h = g3j.u6y.w6a.h8n();
	if (g3j.u6y.g9a.h8n.length)
	{
		t7b.n5l = g3j.u6y.g9a.h8n;
		if (g3j.u6y.g9a.p7t)
		{
			t7b.t6q = g3j.u6y.g9a.p7t;
		}
		if (g3j.u6y.g9a.s8a)
		{
			let d4o = new b2s();
			d4o.s8a = g3j.u6y.g9a.s8a;
			t7b.v9n = q9s(d4o);
		}
		if (g3j.u6y.g9a.j0l)
		{
			t7b.d4q = f5s(g3j.u6y.g9a.j0l);
		}
		if (g3j.u6y.g9a.x5f != y2m.j0j)
		{
			t7b.i8g = p8x(g3j.u6y.g9a.x5f);
		}
	}
	t7b.z7x = d8b(g3j.u6y.h7p);
	t7b.z3v = p0p(g3j.u6y.b8r);
	t7b.g8m = g3j.u6y.p4h;

	
	t7b.g5h = g3j.n2v.p4h;
	t7b.h5t = g3j.n2v.w7p;
	t7b.e2f = q9s(g3j.n2v.z4b);
	t7b.l6i = q9s(g3j.n2v.h9e);
	t7b.i2q = x2m(g3j.n2v.s3y);
	t7b.k2x = t4w(g3j.n2v.c7g);
	t7b.q7o = p8x(g3j.n2v.x5f);
	t7b.b7o = n1v(g3j.n2v.type);
	t7b.m9x = t4w(g3j.n2v.a8d);
	t7b.q6f = f5s(g3j.n2v.k6b);
	t7b.h6o = f5s(g3j.n2v.k5j);
	t7b.f5u = f5s(g3j.n2v.p8w);
	t7b.r3n = f5s(g3j.n2v.f0k);

	
	t7b.p0d = g3j.p0d.h8n;

	
	t7b.d6s = g3j.s4t.p4h;
	t7b.r6f = g3j.s4t.h3l;
	t7b.q0u = q9s(g3j.s4t.j0e);
	t7b.w8i = t4w(g3j.s4t.j4b);
	t7b.v3d = q9s(g3j.s4t.f0f);
	t7b.e3m = z3f(g3j.s4t.k6w);

	
	t7b.p4h = g3j.p4h.p4h;

	
	t7b.k7u = q9s(g3j.k7u);
	t7b.c3m = o9l(g3j.c3m);
	t7b.k9z = o7v(g3j.k9z);
	t7b.y1n = n7s(g3j);

	
	t7b.b9d = t4w(g3j.b9d.b5w());

	return t7b;
}

const m4t  					= "\x57\x68\x69\x74\x65";
const e2c					= "\x57\x68\x69\x74\x65\x54\x65\x61\x6d";
const g3u 				= "\x57\x68\x69\x74\x65\x54\x65\x61\x6d\x4e\x75\x6d\x62\x65\x72";
const p6q 					= "\x57\x68\x69\x74\x65\x54\x65\x61\x6d\x59\x65\x61\x72";
const m1u 				= "\x57\x68\x69\x74\x65\x54\x65\x61\x6d\x53\x65\x61\x73\x6f\x6e";
const g1s 			= "\x57\x68\x69\x74\x65\x54\x65\x61\x6d\x43\x6f\x75\x6e\x74\x72\x79";
const c3c 						= "\x57\x68\x69\x74\x65\x52\x61\x74\x69\x6e\x67";
const f9j 							= "\x57\x68\x69\x74\x65\x54\x69\x6d\x65";
const l6s 							= "\x57\x68\x69\x74\x65\x45\x6c\x6f";
const k7k  						= "\x57\x68\x69\x74\x65\x54\x69\x74\x6c\x65";
const m0l						= "\x57\x68\x69\x74\x65\x43\x6f\x75\x6e\x74\x72\x79";

const j6b						= "\x42\x6c\x61\x63\x6b";
const m1g					= "\x42\x6c\x61\x63\x6b\x54\x65\x61\x6d";
const d2p 				= "\x42\x6c\x61\x63\x6b\x54\x65\x61\x6d\x4e\x75\x6d\x62\x65\x72";
const a9s 					= "\x42\x6c\x61\x63\x6b\x54\x65\x61\x6d\x59\x65\x61\x72";
const j8a 				= "\x42\x6c\x61\x63\x6b\x54\x65\x61\x6d\x53\x65\x61\x73\x6f\x6e";
const t5r 			= "\x42\x6c\x61\x63\x6b\x54\x65\x61\x6d\x43\x6f\x75\x6e\x74\x72\x79";
const h0f 						= "\x42\x6c\x61\x63\x6b\x52\x61\x74\x69\x6e\x67";
const r0w 							= "\x42\x6c\x61\x63\x6b\x54\x69\x6d\x65";
const r6w 							= "\x42\x6c\x61\x63\x6b\x45\x6c\x6f";
const t3z  						= "\x42\x6c\x61\x63\x6b\x54\x69\x74\x6c\x65";
const f4x						= "\x42\x6c\x61\x63\x6b\x43\x6f\x75\x6e\x74\x72\x79";

const s3l 				= "\x45\x76\x65\x6e\x74";
const p2h				= "\x53\x69\x74\x65";
const i6l 			 	= "\x45\x76\x65\x6e\x74\x44\x61\x74\x65";
const e4y 		 	= "\x45\x76\x65\x6e\x74\x45\x6e\x64\x44\x61\x74\x65";
const w0m 			 	= "\x45\x76\x65\x6e\x74\x53\x70\x65\x65\x64";
const y8y 	 	= "\x45\x76\x65\x6e\x74\x43\x61\x74\x65\x67\x6f\x72\x79";
const m8c 		 	= "\x45\x76\x65\x6e\x74\x43\x6f\x75\x6e\x74\x72\x79";
const h9n 			 	= "\x45\x76\x65\x6e\x74\x54\x79\x70\x65";
const l0j 		 	= "\x45\x76\x65\x6e\x74\x52\x6f\x75\x6e\x64\x73";
const g1d 			 	= "\x45\x76\x65\x6e\x74\x54\x65\x61\x6d\x73";
const v0l		 	= "\x45\x76\x65\x6e\x74\x43\x6f\x6d\x70\x6c\x65\x74\x65";
const d4p 	= "\x45\x76\x65\x6e\x74\x54\x68\x72\x65\x65\x50\x6f\x69\x6e\x74\x73";
const k3q	= "\x45\x76\x65\x6e\x74\x42\x6f\x61\x72\x64\x50\x6f\x69\x6e\x74\x73";

const s7l 							= "\x41\x6e\x6e\x6f\x74\x61\x74\x6f\x72";

const y8l 				 		= "\x53\x6f\x75\x72\x63\x65\x54\x69\x74\x6c\x65";
const v5t 				 		= "\x50\x75\x62\x6c\x69\x63\x61\x74\x69\x6f\x6e";
const t3o		 		= "\x53\x6f\x75\x72\x63\x65\x50\x75\x62\x6c\x69\x73\x68\x65\x72";
const p4t		 		= "\x50\x75\x62\x6c\x69\x63\x61\x74\x69\x6f\x6e\x44\x61\x74\x65";
const u4a 				 		= "\x53\x6f\x75\x72\x63\x65\x44\x61\x74\x65";
const q8r 		= "\x53\x6f\x75\x72\x63\x65\x56\x65\x72\x73\x69\x6f\x6e\x4e\x75\x6d\x62\x65\x72";
const s4r 	 		= "\x53\x6f\x75\x72\x63\x65\x56\x65\x72\x73\x69\x6f\x6e\x44\x61\x74\x65";
const x8g 			 		= "\x53\x6f\x75\x72\x63\x65\x51\x75\x61\x6c\x69\x74\x79";

const i1y 					 		    = "\x54\x69\x74\x6c\x65";

const k8e 							 		= "\x44\x61\x74\x65";
const x7d 								= "\x52\x65\x73\x75\x6c\x74";
const c8e 										= "\x45\x43\x4f";
const c2b 									= "\x52\x6f\x75\x6e\x64";

const s1a			 							= "\x54\x61\x67\x73";

const t8c 									= "\x53\x65\x74\x75\x70";
const s6y 										= "\x46\x45\x4e";
const q9a 							= "\x50\x6c\x79\x43\x6f\x75\x6e\x74";

const r8h      							= "\x47\x55\x49\x44";

const r5y = "\x28";
const t8a   = "\x29";
const y1t    = "\x7b";

class x7l
{

constructor()
{
  this.j3b = new s7c();
  this.m2b = new x6l();
  this.n4n = new p6t();
  this.y8e = false;
  this.q4x = false;
  this.z8f = false;
  this.c3d = '';
}

}

class o1s
{

constructor(l1h)
{
	this.w3d = new l6g();
	this.w5z = l1h;
	this.i4m = 0;
	this.p8t = '';
	this.q1p = 0;
	this.x5b = 0;
	this.a2j = '';
	this.n9f = 0;
	this.i8p = false;
	this.r7x = '';
	this.y5a = '';
	this.m7s = null;
	this.v6m = new z4m();
	this.c4c = '';
	this.e5t = false;
 	this.w7k = false;
	this.s2z = false;
}

n7a()
{
  this.n9f = 0;
	let h6r = new i0b();
	this.m7s = h6r.v3n;
	try
	{
		this.t6e();
	}
	catch (err)
	{
	}
	h6r.g1b = c2f(this.w3d);
  h6r.w4z = this.n9f;
	return h6r;
}

t6e()
{
	this.i8p = false;
	this.o4u();
	if (this.i8p)
	{
		this.x1z = a6q(this.y5a);
		this.m7s.k2y(this.x1z, 1);
	}
 	this.y0x();
}

q8l()
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

o4u()
{
	this.s2z = false;
	this.w7k = false;
	while (true)
	{
		if (!this.q8l())
		{
			return;
		}
		this.k1e();
		if (!this.m9k())
		{
			return;
		}
		this.l8q();
	}
}


z6x(e4n)
{
	let i1t = this.a2j.substr(1, this.a2j.length - 1);
	return i1t.toUpperCase() === e4n.toUpperCase();
}

y0x()
{
 	if (this.a2j.length == 0) return;
	this.e5t = false;

	while (this.a2j[0] == '{')
	{
		let a1z = this.a9r();
    let j6l = new x7l();
		this.j4t(a1z, j6l);
    if (!j6l.j3b.z7r())
		{
			this.m7s.c1i(j6l.j3b);
		}
 		if (!j6l.m2b.z7r())
		{
			this.m7s.u5m(j6l.m2b);
		}
		if (!j6l.n4n.z7r())
		{
			this.m7s.s5h(j6l.n4n);
		}
 		a1z = j6l.c3d.trim();
    if (a1z.length)
    {
      
      
      if (a1z.startsWith("\x5b\x25\x61") && a1z.length > 7)
      {
        a1z = a1z.substr(7, a1z.length).trim();
      }
      let n4b = this.m7s.n4b();
      if (n4b.length)
      {
        n4b += ' ';
      }
      n4b += a1z;
      this.m7s.o9x(n4b);
		}
		this.k1e();
		if (this.a2j.length == 0)
		{
			return;
		}
	}
	this.h7a(this.m7s.y5m(), this.m7s.x1z());
}

h7a(v8e, i7j)
{
  let x3c = v8e.p9r();
  let l6q = i7j.p9r();

	let v5c = null;
 	let z0h = new d5f();

	do
	{
		if (this.a2j == r5y)
		{
			if (!v5c)
			{
				throw "\x65\x72\x72\x6f\x72";
			}
			if (!this.k1e())
			{
				throw "\x65\x72\x72\x6f\x72";
			}

 			l6q.y9l(x3c.u0y.u1n());
			l6q.c8d(z0h);
			this.m7s.y9l(x3c); 
      this.h7a(x3c, l6q);
			this.m7s.v0o(x3c); 
			l6q.v0o(x3c.u0y.u1n());

			while (this.k1e())
			{
				if (this.a2j != r5y)
				{
					break;
				}
				if (!this.k1e())
				{
					throw "\x65\x72\x72\x6f\x72";
				}
        l6q.y9l(x3c.u0y.u1n());
				l6q.c8d(z0h);
				this.m7s.y9l(x3c); 
				this.h7a(x3c, l6q);
				this.m7s.v0o(x3c);  
				l6q.v0o(x3c.u0y.u1n());
			}
		}

		if (this.a2j == t8a)
		{
			break;
		}

		if (
			this.a2j == "\x31\x2d\x30" ||
			this.a2j == "\x32\x2d\x30" ||
			this.a2j == "\x30\x2d\x31" ||
			this.a2j == "\x30\x2d\x32" ||
			this.a2j == "\x31\x2f\x32\x2d\x31\x2f\x32" ||
			this.a2j == "\x31\x2d\x31" ||
			this.a2j == "\x2a" ||
			this.a2j == "\x2a\x2a" ||
			this.a2j == "\x2d\x2a" ||
			this.a2j == "\x31\x2d\x30\x2a" ||
			this.a2j == "\x32\x2d\x30\x2a" ||
			this.a2j == "\x30\x2d\x31\x2a" ||
			this.a2j == "\x30\x2d\x32\x2a" ||
			this.a2j == "\x31\x2f\x32\x2d\x31\x2f\x32\x2a" ||
			this.a2j == "\x31\x2d\x31\x2a" ||
			this.a2j == "\x32\x2d\x30\x30\x2a" ||
			this.a2j == "\x30\x30\x2d\x32\x2a")
			break;

		if (this.a2j[0] == '$')
		{
			if (!v5c)
			{
				throw "\x65\x72\x72\x6f\x72";
			}
			let j3g = j3m(this.a2j);
			if (j3g != n8u.j0j)
			{
				v5c.b1f(j3g);
				continue;
			}
			let style = a7k(this.a2j);
			if (style != c8l.j0j)
			{
				v5c.a1f(style);
				continue;
			}
			let n9s = f8m(this.a2j);
			if (n9s != b4c.j0j)
			{
				v5c.i6z(n9s);
				continue;
			}
			let z4y = j4q(this.a2j);
			if (z4y != o9q.j0j)
			{
				v5c.y7q(z4y);
				continue;
			}
			continue;
		}
		if (this.a2j[0] == '{')
		{
			let a1z = this.a9r();
      let j6l = new x7l();
  		this.j4t(a1z, j6l);
      if (!j6l.j3b.z7r())
      {
		  	if (v5c)
			  {
				  v5c.b2e(j6l.j3b);
				}
			}
   		if (!j6l.m2b.z7r())
      {
				if (v5c)
				{
					v5c.s3z(j6l.m2b);
				}
			}
   		if (!j6l.n4n.z7r())
      {
				if (v5c)
				{
					v5c.h7l(j6l.n4n);
				}
			}
      if (j6l.q4x)
      {
				if (v5c)
				{
					v5c.n5g();
				}
			}
      if (j6l.z8f)
      {
				if (v5c)
				{
					v5c.w5c();
				}
			}
   		a1z = j6l.c3d.trim();
      if (!a1z.length)
      {
        continue;
      }
			if (v5c)
			{
        let z8s = v5c.z8s();
        if (z8s.length)
        {
          z8s += ' ';
        }
        z8s += a1z;
				v5c.y5w(z8s);
			}
			else
			{
        if (this.c4c.length)
        {
   				this.c4c += ' ';
        }
				this.c4c += a1z;
				this.e5t = true;
			}
			continue;
		}
		if (!this.i9e())
		{
			continue;
		}
		let y1u = false;
		if (this.a2j[this.a2j.length] == '*')
		{
			this.a2j = this.a2j.substr(0, this.a2j.length - 1);
			y1u = true;
		}
 		let z0t = this.j5j(this.a2j);
    let u1n = n4w(l6q, this.a2j);
 		z0h = l6q.z0h();
		l6q.v0o(u1n);
		let u0y = l9h(u1n);
    u0y.a1f(z0t);
    this.m7s.v9t(x3c, u0y);
		v5c = x3c.u0y;
		if (this.e5t)
		{
			v5c.z7d(this.c4c);
			this.e5t = false;
      this.c4c = '';
		}
		if (y1u)
		{
			break;
		}
	} while (this.k1e());
}

j5j(i1t)
{
	if (i1t.endsWith("\x3f\x3f"))
	{
		i1t = i1t.subString(0, i1t.length-2);
		return c8l.u3z;
	}
	else if (i1t.endsWith("\x21\x21"))
	{
		i1t = i1t.subString(0, i1t.length-2);
		return c8l.d0h;
	}
	else if (i1t.endsWith("\x3f\x21"))
	{
		i1t = i1t.subString(0, i1t.length-2);
		return c8l.d6n;
	}
	else if (i1t.endsWith("\x21\x3f"))
	{
		i1t = i1t.subString(0, i1t.length-2);
		return c8l.p7h;
	}
	else if (i1t.endsWith("\x3f"))
	{
		i1t = i1t.subString(0, i1t.length-1);
		return c8l.y7x;
	}
	else if (i1t.endsWith("\x21"))
	{
		i1t = i1t.subString(0, i1t.length-1);
		return c8l.p7l;
	}
	else
	{
		return c8l.j0j;
	}
}

i9e()
{
	let w5e = this.a2j.length;
	let x3c = -1;
	for (let i = 0; i < w5e; i++)
	{
		if (this.a2j[i] == '.')
		{
			x3c = i;
		}
	}
	if (x3c != -1)
	{
		this.a2j = this.a2j.substr(x3c + 1 , w5e);
	}
	return this.a2j.length != 0;
}

k1e()
{
	this.a2j = "";
	let x8d = '';
	let index = 0;
	let w5e = 0;
	while (true)
	{
		let e6r = 0;
		if (this.x5b < this.q1p)
		{
			e6r = this.p8t[this.x5b];
		}
		else
		{
			e6r = 0;
		}
		if (!e6r)
		{
			if (w5e)
			{
				break;
			}
			if (!this.q8l())
			{
				return false;
			}
			continue;
		}
		if (e6r == ';')
		{
			if (!this.q8l())
			{
				return false;
			}
			continue;
		}
		if (e6r == '(')
		{
			if (w5e)
			{
				break;
			}
			else
			{
				this.x5b++;
				this.a2j = r5y;
				return true;
			}
		}
		if (e6r == ')')
		{
			if (w5e)
			{
				break;
			}
			else
			{
				this.x5b++;
				this.a2j = t8a;
				return true;
			}
		}
		if (e6r == '{')
		{
			if (w5e)
			{
				break;
			}
			else
			{
				this.x5b++;
				this.a2j = y1t;
				return true;
			}
		}
		if (e6r == ' ' || e6r == '\r' || e6r == '\n')
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
		x8d += e6r;
		index++;
		w5e++;
		this.x5b++;
	}
	if (index)
	{
		this.a2j += x8d;
	}
	return this.a2j.length != 0;
}

a9r()
{
	let i1t = '';
	let x8d = '';
	let index = 0;
	let c9s = 0;
	while (true)
	{
		let e6r = 0;
		if (this.x5b < this.q1p)
		{
			e6r = this.p8t[this.x5b];
		}
		else
		{
			e6r = 0;
		}
		if (!e6r)
		{
			if (!this.q8l())
			{
				break;
			}
			if (index > 0)
			{
				x8d += ' '; 
				index++;
			}
			continue;
		}
		if (e6r == '{')
		{
			c9s++;
		}
		if (e6r == '}')
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
		x8d += e6r;
		index++;
		this.x5b++;
	}
	if (index)
	{
		i1t += x8d;
	}
	return i1t.trim();
}

b3g()
{
	this.r7x = "";

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
	let r9f = false;
	let x8d = '';
	while (true)
	{
		let e6r = 0;
		if (this.x5b < this.q1p)
		{
			e6r = this.p8t[this.x5b];
		}
		else
		{
			e6r = 0;
		}
		if (!e6r)
		{
			if (!this.q8l())
			{
				break;
			}
			continue;
		}
		if (e6r == '\"')
		{
			r9f = true;
			this.x5b++;
			continue;
		}
		if (e6r == ']')
		{
			if (this.x5b == p0i)
			{
				this.x5b++;
				break;
			}
		}
		if (r9f)
		{
			x8d += e6r;
			index++;
		}
		this.x5b++;
	}
	if (index)
	{
		this.r7x += x8d;
	}
}

m9k()
{
	if (this.a2j.length == 0)
	{
		return false;
	}
	if (this.a2j[0] != '[')
	{
		return false;
	}
	
	let index = this.x5b;
	let a2u = false;
	while (index < this.q1p)
	{
		let e6r = this.p8t[index++];
		if (e6r == '\"' && this.p8t[index] == ']')
		{
			index++;
			a2u = true;
			continue;
		}
		if (e6r == '\r' || e6r == '\n')
		{
			break;
		}
		if (a2u)
		{
			a2u = false;
			break;
		}
	}
	return a2u;
}

l8q()
{
	
	if (this.z6x(m4t))
	{
		this.b3g();
		this.w3d.e4t = this.r7x;
		return;
	}
	if (this.z6x(e2c))
	{
		this.b3g();
		this.w3d.l6h = this.r7x;
		return;
	}
	if (this.z6x(g3u))
	{
		this.b3g();
		this.w3d.t0f = this.r7x;
		return;
	}
	if (this.z6x(p6q))
	{
		this.b3g();
		this.w3d.k9q = this.r7x;
		return;
	}
	if (this.z6x(m1u))
	{
		this.b3g();
		this.w3d.x6m = this.r7x;
		return;
	}
	if (this.z6x(g1s))
	{
		this.b3g();
		this.w3d.r2w = this.r7x;
		return;
	}
	if (this.z6x(l6s) || this.z6x(c3c))
	{
		this.b3g();
		this.w3d.r1c = this.r7x;
		return;
	}
	if (this.z6x(f9j))
	{
		this.b3g();
		this.w3d.j8o = this.r7x;
		return;
	}
	if (this.z6x(k7k))
	{
		this.b3g();
		this.w3d.c4t = this.r7x;
		return;
	}
	if (this.z6x(m0l))
	{
		this.b3g();
		this.w3d.v8k = this.r7x;
		return;
	}

	
	if (this.z6x(j6b))
	{
		this.b3g();
		this.w3d.s6h = this.r7x;
		return;
	}
	if (this.z6x(m1g))
	{
		this.b3g();
		this.w3d.n5l = this.r7x;
		return;
	}
	if (this.z6x(d2p))
	{
		this.b3g();
		this.w3d.t6q = this.r7x;
		return;
	}
	if (this.z6x(a9s))
	{
		this.b3g();
		this.w3d.v9n = this.r7x;
		return;
	}
	if (this.z6x(j8a))
	{
		this.b3g();
		this.w3d.d4q = this.r7x;
		return;
	}
	if (this.z6x(t5r))
	{
		this.b3g();
		this.w3d.i8g = this.r7x;
		return;
	}
	if (this.z6x(r6w) || this.z6x(h0f))
	{
		this.b3g();
		this.w3d.z7x = this.r7x;
		return;
	}
	if (this.z6x(r0w))
	{
		this.b3g();
		this.w3d.z3v = this.r7x;
		return;
	}
	if (this.z6x(t3z))
	{
		this.b3g();
		this.w3d.g8m = this.r7x;
		return;
	}
	if (this.z6x(f4x))
	{
		this.b3g();
		this.w3d.u4n = this.r7x;
		return;
	}

	
	if (this.z6x(s3l))
	{
		this.b3g();
		this.w3d.g5h = this.r7x;
		return;
	}
	if (this.z6x(p2h))
	{
		this.b3g();
		this.w3d.h5t = this.r7x;
		return;
	}
	if (this.z6x(i6l))
	{
		this.b3g();
		this.w3d.e2f = this.r7x;
		return;
	}
	if (this.z6x(e4y))
	{
		this.b3g();
		this.w3d.l6i = this.r7x;
		return;
	}
	if (this.z6x(w0m))
	{
		this.b3g();
		this.w3d.i2q = this.r7x;
		return;
	}
	if (this.z6x(y8y))
	{
		this.b3g();
		this.w3d.k2x = this.r7x;
		return;
	}
	if (this.z6x(m8c))
	{
		this.b3g();
		this.w3d.q7o = this.r7x;
		return;
	}
	if (this.z6x(h9n))
	{
		this.b3g();
		this.w3d.b7o = this.r7x;
		return;
	}
	if (this.z6x(l0j))
	{
		this.b3g();
		this.w3d.m9x = this.r7x;
		return;
	}
	if (this.z6x(g1d))
	{
		this.b3g();
		this.w3d.q6f = this.r7x;
		return;
	}
	if (this.z6x(v0l))
	{
		this.b3g();
		this.w3d.h6o = this.r7x;
		return;
	}
	if (this.z6x(d4p))
	{
		this.b3g();
		this.w3d.f5u = this.r7x;
		return;
	}
	if (this.z6x(k3q))
	{
		this.b3g();
		this.w3d.r3n = this.r7x;
		return;
	}

	
	if (this.z6x(s7l))
	{
		this.b3g();
		this.w3d.p0d = this.r7x;
		return;
	}

	
	if (this.z6x(y8l))
	{
		this.b3g();
		this.w3d.d6s = this.r7x;
		return;
	}
	if (this.z6x(v5t))
	{
		this.b3g();
		this.w3d.d6s = this.r7x;
		return;
	}
	if (this.z6x(t3o))
	{
		this.b3g();
		this.w3d.r6f = this.r7x;
		return;
	}
	if (this.z6x(u4a))
	{
		this.b3g();
		this.w3d.q0u = this.r7x;
		return;
	}
	if (this.z6x(p4t))
	{
		this.b3g();
		this.w3d.q0u = this.r7x;
		return;
	}
	if (this.z6x(q8r))
	{
		this.b3g();
		this.w3d.w8i = this.r7x;
		return;
	}
	if (this.z6x(s4r))
	{
		this.b3g();
		this.w3d.v3d = this.r7x;
		return;
	}
	if (this.z6x(x8g))
	{
		this.b3g();
		this.w3d.e3m = this.r7x;
		return;
	}

	
	if (this.z6x(i1y))
	{
		this.b3g();
		this.w3d.p4h = this.r7x;
		return;
	}

	
	if (this.z6x(k8e))
	{
		this.b3g();
		this.w3d.k7u = this.r7x;
		return;
	}
	if (this.z6x(x7d))
	{
		this.b3g();
		this.w3d.c3m = this.r7x;
		return;
	}
	if (this.z6x(c8e))
	{
		this.b3g();
		this.w3d.k9z = this.r7x;
		return;
	}
	if (this.z6x(c2b))
	{
		this.b3g();
		this.w3d.y1n = this.r7x;
		return;
	}

	
	if (this.z6x(s1a))
	{
		this.b3g();
		this.w3d.b9d = this.r7x;
		return;
	}

	
	if (this.z6x(t8c))
	{
		this.b3g();
		return;
	}
	if (this.z6x(s6y))
	{
		this.b3g();
		if (this.r7x.length == 0 || this.r7x == "\x3f")
		{
			return;
		}
		this.i8p = true;
		this.y5a = this.r7x;
		return;
	}
	if (this.z6x(q9a))
	{
		this.b3g();
		this.n9f = j3e(this.r7x, 0);
		return;
	}
  
 	if (this.z6x(r8h))
	{
		this.b3g();
		this.w3d.h1h = this.r7x;
		return;
	}

}

f1a(a1z)
{
	let e6v = new s7c();
	let i1t = a1z.substr(6, a1z.length - 6);
	let d6z = i1t.split("\x2c");
	for (const s of d6z)
	{
		if (s.length < 5)
		{
			continue;
		}
		let c6i = g1t(s.substr(1, 2));
		let q8c = g1t(s.substr(3, 2));
		if (s[0] == 'R')
		{
			let f3z = c4d(c6i, q8c, c3j.x7q);
			e6v.add(f3z);
		}
		else if (s[0] == 'G')
		{
			let f3z = c4d(c6i, q8c, c3j.a2l);
			e6v.add(f3z);
		}
		else if (s[0] == 'Y')
		{
			let f3z = c4d(c6i, q8c, c3j.o1q);
			e6v.add(f3z);
		}
	}
	return e6v;
}

t2f(a1z)
{
	let a7a = new x6l();
	let i1t = a1z.substr(6, a1z.length - 6);
	let d6z = i1t.split("\x2c");
	for (const s of d6z)
	{
		if (s.length < 3)
		{
			continue;
		}
 		let c6b = g1t(s.substr(1, 2));
		if (s[0] == 'R')
		{
      let e6o = p3a(c6b, c7m.i1u);
			a7a.add(e6o);
		}
		else if (s[0] == 'G')
		{
      let e6o = p3a(c6b, c7m.c4p);
			a7a.add(e6o);
		}
		else if (s[0] == 'Y')
		{
      let e6o = p3a(c6b, c7m.n7e);
			a7a.add(e6o);
		}
	}
	return a7a;
}

r7n(a1z)
{
	let i1t = a1z.substr(6, a1z.length - 6);
	let x3c = i1t.indexOf("\x5d");
	if (x3c != -1)
	{
		let n4n = new p6t();
		let n9s = j3e(i1t.substr(0, x3c), 0);
		n4n.g7b(n9s);
		return n4n;
	}
	else
	{
		return new p6t();
	}
}


j4t(a1z, j6l)
{
	if (
		a1z.startsWith("\x5b\x25\x63\x61\x6c") ||
    a1z.startsWith("\x5b\x25\x63\x73\x62") ||
		a1z.startsWith("\x5b\x25\x63\x73\x6c") ||
		a1z.startsWith("\x5b\x25\x6d\x64\x6c") ||
		a1z.startsWith("\x5b\x25\x65\x76\x70") ||
		a1z.startsWith("\x5b\x25\x65\x76\x61\x6c") ||
		a1z.startsWith("\x5b\x25\x65\x6d\x74") ||
		a1z.startsWith("\x5b\x25\x74\x71\x75") ||
		a1z.startsWith("\x5b\x25\x74\x71\x75") ||
		a1z.startsWith("\x5b\x25\x70\x77\x73") ||
		a1z.startsWith("\x5b\x25\x70\x74\x68") ||
		a1z.startsWith("\x5b\x25\x65\x6f\x67"))
	{
		let e8v = 0;
		{
     	let a5z = a1z.indexOf("\x5b\x25\x63\x61\x6c");
			if (a5z != -1)
			{
        let m0t = a1z.indexOf("\x5d", a5z);
				if (m0t != -1)
				{
     			let z2d = a1z.substring(a5z, m0t + 1);
					j6l.j3b = this.f1a(z2d).p9r();
					if (m0t > e8v) e8v = m0t;
				}
			}
		}
		{
     	let a5z = a1z.indexOf("\x5b\x25\x63\x73\x62");
   		if (a5z != -1)
			{
        let m0t = a1z.indexOf("\x5d", a5z);
				if (m0t != -1)
				{
          let n3h = a1z.substring(a5z, m0t + 1);
					j6l.m2b = this.t2f(n3h).p9r();
					if (m0t > e8v) e8v = m0t;
				}
			}
		}
		{
      let a5z = a1z.indexOf("\x5b\x25\x63\x73\x6c");
			if (a5z != -1)
			{
        let m0t = a1z.indexOf("\x5d", a5z);
				if (m0t != -1)
				{
          let n3h = a1z.substring(a5z, m0t + 1);
					j6l.m2b = this.t2f(n3h).p9r();
					if (m0t > e8v) e8v = m0t;
				}
			}
		}
		{
      let a5z = a1z.indexOf("\x5b\x25\x6d\x64\x6c");
			if (a5z != -1)
			{
        let m0t = a1z.indexOf("\x5d", a5z);
				if (m0t != -1)
				{
          let o4s = a1z.substring(a5z, m0t + 1);
					j6l.n4n = this.r7n(o4s).p9r();
					if (m0t > e8v) e8v = m0t;
				}
			}
		}
		{
      let a5z = a1z.indexOf("\x5b\x25\x65\x76\x70");
			if (a5z != -1)
			{
        let m0t = a1z.indexOf("\x5d", a5z);
				if (m0t != -1)
				{
					if (m0t > e8v) e8v = m0t;
				}
			}
		}
		{
      let a5z = a1z.indexOf("\x5b\x25\x65\x76\x61\x6c");
			if (a5z != -1)
			{
        let m0t = a1z.indexOf("\x5d", a5z);
				if (m0t != -1)
				{
					if (m0t > e8v) e8v = m0t;
				}
			}
		}
		{
      let a5z = a1z.indexOf("\x5b\x25\x65\x6d\x74");
			if (a5z = -1)
			{
        let m0t = a1z.indexOf("\x5d", a5z);
				if (m0t != -1)
				{
					if (m0t > e8v) e8v = m0t;
				}
			}
		}
		{
      let a5z = a1z.indexOf("\x5b\x25\x74\x71\x75");
			if (a5z != -1)
			{
        let m0t = a1z.indexOf("\x5d", a5z);
				if (m0t != -1)
				{
					if (m0t > e8v) e8v = m0t;
				}
			}
		}
		{
      let a5z = a1z.indexOf("\x5b\x25\x70\x77\x73");
			if (a5z != -1)
			{
        let m0t = a1z.indexOf("\x5d", a5z);
				if (m0t != -1)
				{
          j6l.y8e = true;
					if (m0t > e8v) e8v = m0t;
				}
			}
		}
		{
      let a5z = a1z.indexOf("\x5b\x25\x70\x74\x68");
			if (a5z != -1)
			{
        let m0t = a1z.indexOf("\x5d", a5z);
				if (m0t != -1)
				{
          j6l.q4x = true;
					if (m0t > e8v) e8v = m0t;
				}
			}
		}
		{
      let a5z = a1z.indexOf("\x5b\x25\x65\x6f\x67");
			if (a5z != -1)
			{
        let m0t = a1z.indexOf("\x5d", a5z);
				if (m0t != -1)
				{
					j6l.z8f = true; 
					if (m0t > e8v) e8v = m0t;
				}
			}
		}
    j6l.c3d = a1z.substring(e8v + 1);
	}
	else
	{
		j6l.c3d = a1z;
	}
}

}

class i6u
{

constructor()
{
  this.w4z = 0;
	this.g1b = new l6g();
	this.v3n = new e5q();
}

p9r()
{
	let i2z = new i6u();
  i2z.w4z = this.w4z;
	i2z.g1b = this.g1b.p9r();
	i2z.v3n = this.v3n.p9r();
	return i2z;
}

}

class l6g
{

constructor()
{
	this.e4t = '';
	this.l6h = '';
	this.t0f = '';
	this.k9q = '';
	this.x6m = '';
	this.r2w = '';
	this.r1c = '';
	this.j8o = '';
	this.c4t = '';
  this.v8k = '';
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
	this.g5h = '';
	this.h5t = '';
	this.e2f = '';
	this.l6i = '';
	this.i2q = '';
	this.k2x = '';
	this.q7o = '';
	this.b7o = '';
	this.m9x = '';
	this.q6f = '';
	this.h6o = '';
	this.f5u = '';
	this.r3n = '';
	this.p0d = '';
	this.d6s = '';
	this.r6f = '';
	this.q0u = '';
	this.w8i = '';
	this.v3d = '';
	this.e3m = '';
	this.p4h = '';
	this.k7u = '';
	this.c3m = '';
	this.k9z = '';
	this.y1n = '';
	this.b9d = '';
  this.h1h = '';
}

p9r()
{
	let o7c = new l6g();

	o7c.e4t = this.e4t;
	o7c.l6h = this.l6h;
	o7c.t0f = this.t0f;
	o7c.k9q = this.k9q;
	o7c.x6m = this.x6m;
	o7c.r2w = this.r2w;
	o7c.r1c = this.r1c;
	o7c.j8o = this.j8o;
	o7c.c4t = this.c4t;
	o7c.v8k = this.v8k;

	o7c.s6h = this.s6h;
	o7c.n5l = this.n5l;
	o7c.t6q = this.t6q;
	o7c.v9n = this.v9n;
	o7c.d4q = this.d4q;
	o7c.i8g = this.i8g;
	o7c.z7x = this.z7x;
	o7c.z3v = this.z3v;
	o7c.g8m = this.g8m;
	o7c.u4n = this.u4n;

	o7c.g5h = this.g5h;
	o7c.h5t = this.h5t;
	o7c.e2f = this.e2f;
	o7c.l6i = this.l6i;
	o7c.i2q = this.i2q;
	o7c.k2x = this.k2x;
	o7c.q7o = this.q7o;
	o7c.b7o = this.b7o;
	o7c.m9x = this.m9x;
	o7c.q6f = this.q6f;
	o7c.h6o = this.h6o;
	o7c.f5u = this.f5u;
	o7c.r3n = this.r3n;

	o7c.p0d = this.p0d;

	o7c.d6s = this.d6s;
	o7c.r6f = this.r6f;
	o7c.q0u = this.q0u;
	o7c.w8i = this.w8i;
	o7c.v3d = this.v3d;
	o7c.e3m = this.e3m;

	o7c.p4h = this.p4h;

	o7c.k7u = this.k7u;
	o7c.c3m = this.c3m;
	o7c.k9z = this.k9z;
	o7c.y1n = this.y1n;

	o7c.b9d = this.b9d;
 	o7c.h1h = this.h1h;

	return o7c;
}

}


const p0n =
[
		[ y2m.j0j, 				  									"",											            "", 																	"",   ""    ],
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
		[ y2m.k3d,  										  "\x43\x61\x70\x65\x56\x65\x72\x64\x65",												"\x43\x61\x70\x65\x20\x56\x65\x72\x64\x65",													"\x63\x76", "\x43\x50\x56" ], 
		[ y2m.l0p,  										  "\x43\x61\x74\x61\x6c\x6f\x6e\x69\x61",												"\x43\x61\x74\x61\x6c\x6f\x6e\x69\x61",													"\x78\x32", "\x58\x58\x32" ], 
		[ y2m.z5s,  								  "\x43\x61\x79\x6d\x61\x6e\x49\x73\x6c\x61\x6e\x64\x73",										"\x43\x61\x79\x6d\x61\x6e\x20\x49\x73\x6c\x61\x6e\x64\x73",											"\x6b\x79", "\x43\x59\x4d" ],
		[ y2m.q5a,  				  "\x43\x65\x6e\x74\x72\x61\x6c\x41\x66\x72\x69\x63\x61\x6e\x52\x65\x70\x75\x62\x6c\x69\x63",					  "\x43\x65\x6e\x74\x72\x61\x6c\x20\x41\x66\x72\x69\x63\x61\x6e\x20\x52\x65\x70\x75\x62\x6c\x69\x63",						"\x63\x66", "\x43\x41\x46" ],
		[ y2m.n7t,  													  "\x43\x68\x61\x64",														  "\x43\x68\x61\x64",																"\x74\x64", "\x54\x43\x44" ],
		[ y2m.h1p,  												 	"\x43\x68\x69\x6c\x65",														"\x43\x68\x69\x6c\x65",															"\x63\x6c", "\x43\x48\x4c" ],
		[ y2m.e6q,  												 	"\x43\x68\x69\x6e\x61",														"\x43\x68\x69\x6e\x61",															"\x63\x6e", "\x43\x48\x4e" ],
		[ y2m.u0f,  							 	"\x43\x68\x72\x69\x73\x74\x6d\x61\x73\x49\x73\x6c\x61\x6e\x64",									"\x43\x68\x72\x69\x73\x74\x6d\x61\x73",													"\x63\x78", "\x43\x58\x52" ],
		[ y2m.k8r,  					 	"\x43\x6f\x63\x6f\x73\x4b\x65\x65\x6c\x69\x6e\x67\x49\x73\x6c\x61\x6e\x64\x73",							"\x43\x6f\x63\x6f\x73\x20\x28\x4b\x65\x65\x6c\x69\x6e\x67\x29",										"\x63\x63", "\x43\x43\x4b" ], 
		[ y2m.g6s,  											  "\x43\x6f\x6c\x6f\x6d\x62\x69\x61",												  "\x43\x6f\x6c\x6f\x6d\x62\x69\x61",														"\x63\x6f", "\x43\x4f\x4c" ],
		[ y2m.m6n,  											 	"\x43\x6f\x6d\x6f\x72\x6f\x73",													"\x43\x6f\x6d\x6f\x72\x6f\x73",														"\x6b\x6d", "\x43\x4f\x4d" ],
		[ y2m.e5e,  												 	"\x43\x6f\x6e\x67\x6f",														"\x43\x6f\x6e\x67\x6f\x2d\x42\x72\x61\x7a\x7a\x61\x76\x69\x6c\x6c\x65", 						    	"\x63\x67", "\x43\x4f\x47" ],
		[ y2m.d7o,  			 	"\x43\x6f\x6e\x67\x6f\x44\x65\x6d\x6f\x63\x72\x61\x74\x69\x63\x52\x65\x70\x75\x62\x6c\x69\x63",					"\x43\x6f\x6e\x67\x6f\x2d\x4b\x69\x6e\x73\x68\x61\x73\x61\x28\x5a\x61\x69\x72\x65\x29",						  "\x63\x64", "\x43\x4f\x44" ],
		[ y2m.d1c,  									 	"\x43\x6f\x6f\x6b\x49\x73\x6c\x61\x6e\x64\x73",											"\x43\x6f\x6f\x6b\x20\x49\x73\x6c\x61\x6e\x64\x73",											 	"\x63\x6b", "\x43\x4f\x4b" ],
		[ y2m.h0o,  											"\x43\x6f\x73\x74\x61\x52\x69\x63\x61",												"\x43\x6f\x73\x74\x61\x20\x52\x69\x63\x61",												 	"\x63\x72", "\x43\x52\x49" ],
		[ y2m.i9f,  												"\x43\x72\x6f\x61\x74\x69\x61",													"\x43\x72\x6f\x61\x74\x69\x61",														"\x68\x72", "\x48\x52\x56" ],
		[ y2m.z5g,  													  "\x43\x75\x62\x61",														  "\x43\x75\x62\x61",															 	"\x63\x75", "\x43\x55\x42" ],
		[ y2m.z1j,  												"\x43\x75\x72\x61\x63\x61\x6f",													"\x43\x75\x72\x61\x63\x61\x6f",											  		"\x63\x77", "\x43\x55\x57" ],
		[ y2m.k4o,  												  "\x43\x79\x70\x72\x75\x73",													  "\x43\x79\x70\x72\x75\x73",														 	"\x63\x79", "\x43\x59\x50" ],
		[ y2m.t1j,  									      "\x43\x7a\x65\x63\x68\x69\x61",										      "\x43\x7a\x65\x63\x68\x20\x52\x65\x70\x75\x62\x6c\x69\x63", 										"\x63\x7a", "\x43\x5a\x45" ],
		[ y2m.m7i,  										  "\x43\x6f\x74\x65\x49\x76\x6f\x69\x72\x65",	   					 				  "\x43\x6f\x74\x65\x20\x64\x27\x49\x76\x6f\x69\x72\x65",											"\x63\x69", "\x43\x49\x56" ],
		[ y2m.m9b,  												"\x44\x65\x6e\x6d\x61\x72\x6b",													"\x44\x65\x6e\x6d\x61\x72\x6b",													  "\x64\x6b", "\x44\x4e\x4b" ],
		[ y2m.d1a,  											  "\x44\x6a\x69\x62\x6f\x75\x74\x69",												  "\x44\x6a\x69\x62\x6f\x75\x74\x69",													 	"\x64\x6a", "\x44\x4a\x49" ],
		[ y2m.j7e,  											  "\x44\x6f\x6d\x69\x6e\x69\x63\x61",												  "\x44\x6f\x6d\x69\x6e\x69\x63\x61",													 	"\x64\x6d", "\x44\x4d\x41" ],
		[ y2m.f4i,  							"\x44\x6f\x6d\x69\x6e\x69\x63\x61\x6e\x52\x65\x70\x75\x62\x6c\x69\x63",								"\x44\x6f\x6d\x69\x6e\x69\x63\x61\x6e\x20\x52\x65\x70\x75\x62\x6c\x69\x63",								 	"\x64\x6f", "\x44\x4f\x4d" ],
		[ y2m.q2o,  												"\x45\x63\x75\x61\x64\x6f\x72",													"\x45\x63\x75\x61\x64\x6f\x72",													 	"\x65\x63", "\x45\x43\x55" ],
		[ y2m.r6q,  													"\x45\x67\x79\x70\x74",														"\x45\x67\x79\x70\x74", 														 	"\x65\x67", "\x45\x47\x59" ],
		[ y2m.n5i,  										  "\x45\x6c\x53\x61\x6c\x76\x61\x64\x6f\x72",											  "\x45\x6c\x20\x53\x61\x6c\x76\x61\x64\x6f\x72",												"\x73\x76", "\x53\x4c\x56" ],
		[ y2m.l9f,  												"\x45\x6e\x67\x6c\x61\x6e\x64",													"\x45\x6e\x67\x6c\x61\x6e\x64",														"\x78\x33", "\x47\x42\x52" ],
		[ y2m.i0h,  							  "\x45\x71\x75\x61\x74\x6f\x72\x69\x61\x6c\x47\x75\x69\x6e\x65\x61",								  "\x45\x71\x75\x61\x74\x6f\x72\x69\x61\x6c\x20\x47\x75\x69\x6e\x65\x61",									"\x67\x71", "\x47\x4e\x51" ], 
		[ y2m.v9y,  												"\x45\x72\x69\x74\x72\x65\x61",													"\x45\x72\x69\x74\x72\x65\x61",														"\x65\x72", "\x45\x52\x49" ],
		[ y2m.c6m,  												"\x45\x73\x74\x6f\x6e\x69\x61",													"\x45\x73\x74\x6f\x6e\x69\x61",														"\x65\x65", "\x45\x53\x54" ],
		[ y2m.j3x,  											  "\x45\x74\x68\x69\x6f\x70\x69\x61",												  "\x45\x74\x68\x69\x6f\x70\x69\x61",													 	"\x65\x74", "\x45\x54\x48" ],
		[ y2m.z2m,  								"\x46\x61\x6c\x6b\x6c\x61\x6e\x64\x49\x73\x6c\x61\x6e\x64\x73",									"\x45\x6e\x67\x6c\x61\x6e\x64",														"\x66\x6b", "\x46\x4c\x4b" ], 
		[ y2m.a0h,  									  "\x46\x61\x72\x6f\x65\x49\x73\x6c\x61\x6e\x64\x73",										  "\x46\x61\x72\x6f\x65\x73",														 	"\x66\x6f", "\x46\x52\x4f" ],
		[ y2m.s5o,  													  "\x46\x69\x6a\x69",														  "\x46\x69\x6a\x69",															 	"\x66\x6a", "\x46\x4a\x49" ],
		[ y2m.g8f,  												"\x46\x69\x6e\x6c\x61\x6e\x64",													"\x46\x69\x6e\x6c\x61\x6e\x64",														"\x66\x69", "\x46\x49\x4e" ],
		[ y2m.c6v,  												  "\x46\x72\x61\x6e\x63\x65",													  "\x46\x72\x61\x6e\x63\x65",														 	"\x66\x72", "\x46\x52\x41" ],
		[ y2m.m2p,  									  "\x46\x72\x65\x6e\x63\x68\x47\x75\x69\x61\x6e\x61",										  "\x47\x75\x79\x61\x6e\x61", 														"\x67\x66", "\x47\x55\x46" ], 
		[ y2m.m7r,  								"\x46\x72\x65\x6e\x63\x68\x50\x6f\x6c\x79\x6e\x65\x73\x69\x61",									"\x54\x61\x68\x69\x74\x69\x28\x46\x72\x65\x6e\x63\x68\x20\x50\x6f\x6c\x69\x6e\x65\x73\x69\x61\x29", 					"\x70\x66", "\x50\x59\x46" ], 
		[ y2m.x1e,  			"\x46\x72\x65\x6e\x63\x68\x53\x6f\x75\x74\x68\x65\x72\x6e\x54\x65\x72\x72\x69\x74\x6f\x72\x69\x65\x73",				"\x46\x72\x65\x6e\x63\x68\x20\x53\x6f\x75\x74\x68\x65\x72\x6e\x20\x61\x6e\x64\x20\x41\x6e\x74\x61\x72\x63\x74\x69\x63\x20\x4c\x61\x6e\x64\x73","\x74\x66", "\x41\x54\x46" ],
		[ y2m.f3x,  													"\x47\x61\x62\x6f\x6e",														"\x47\x61\x62\x6f\x6e",															"\x67\x61", "\x47\x41\x42" ], 
		[ y2m.c5f,  												  "\x47\x61\x6d\x62\x69\x61",													  "\x47\x61\x6d\x62\x69\x61",															"\x67\x6d", "\x47\x4d\x42" ],
		[ y2m.m8n,  												"\x47\x65\x6f\x72\x67\x69\x61",													"\x47\x65\x6f\x72\x67\x69\x61",														"\x67\x65", "\x47\x45\x4f" ],
		[ y2m.z6z,  												"\x47\x65\x72\x6d\x61\x6e\x79",													"\x47\x65\x72\x6d\x61\x6e\x79",														"\x64\x65", "\x44\x45\x55" ],
		[ y2m.x3e, 													  "\x47\x68\x61\x6e\x61",														"\x47\x68\x61\x6e\x61",															"\x67\x68", "\x47\x48\x41" ],
		[ y2m.p4i,  											"\x47\x69\x62\x72\x61\x6c\x74\x61\x72",												"\x47\x69\x62\x72\x61\x6c\x74\x61\x72",													"\x67\x69", "\x47\x49\x42" ],
		[ y2m.e1j,  												  "\x47\x72\x65\x65\x63\x65",													  "\x47\x72\x65\x65\x63\x65",															"\x67\x72", "\x47\x52\x43" ],
		[ y2m.p5g,  											"\x47\x72\x65\x65\x6e\x6c\x61\x6e\x64",												"\x47\x72\x65\x65\x6e\x6c\x61\x6e\x64",													"\x67\x6c", "\x47\x52\x4c" ],
		[ y2m.i2x,  												"\x47\x72\x65\x6e\x61\x64\x61",													"\x47\x72\x65\x6e\x61\x64\x61",														"\x67\x64", "\x47\x52\x44" ],
		[ y2m.o4f,  										  "\x47\x75\x61\x64\x65\x6c\x6f\x75\x70\x65",											  "\x47\x75\x61\x64\x65\x6c\x6f\x75\x70\x65",													"\x67\x70", "\x47\x4c\x50" ],
		[ y2m.v8q,  													  "\x47\x75\x61\x6d",														  "\x47\x75\x61\x6d",																"\x67\x75", "\x47\x55\x4d" ],
		[ y2m.w2b,  											"\x47\x75\x61\x74\x65\x6d\x61\x6c\x61",												"\x47\x75\x61\x74\x65\x6d\x61\x6c\x61",													"\x67\x74", "\x47\x54\x4d" ],
		[ y2m.b0q,  											  "\x47\x75\x65\x72\x6e\x73\x65\x79",												  "\x47\x75\x65\x72\x6e\x73\x65\x79",														"\x67\x67", "\x47\x47\x59" ], 
		[ y2m.y5p,  												  "\x47\x75\x69\x6e\x65\x61",													  "\x47\x75\x69\x6e\x65\x61",															"\x67\x6e", "\x47\x49\x4e" ],
		[ y2m.d5c,  									  "\x47\x75\x69\x6e\x65\x61\x42\x69\x73\x73\x61\x75",										  "\x47\x75\x69\x6e\x65\x61\x2d\x42\x69\x73\x73\x61\x75",											"\x67\x77", "\x47\x4e\x42" ],
		[ y2m.y6m,  												  "\x47\x75\x79\x61\x6e\x61",													  "\x47\x75\x79\x61\x6e\x61",															"\x67\x79", "\x47\x55\x59" ],
		[ y2m.c9m,  													"\x48\x61\x69\x74\x69",														"\x48\x61\x69\x74\x69",															"\x68\x74", "\x48\x54\x49" ],
		[ y2m.w5k, 			"\x48\x65\x61\x72\x64\x49\x73\x6c\x61\x6e\x64\x4d\x63\x44\x6f\x6e\x61\x6c\x64\x49\x73\x6c\x61\x6e\x64\x73", 			"\x41\x75\x73\x74\x72\x61\x6c\x69\x61",   									  		"\x68\x6d", "\x48\x4d\x44" ],
		[ y2m.g0q,  			 	                "\x56\x61\x74\x69\x63\x61\x6e",	  			                "\x56\x61\x74\x69\x63\x61\x6e\x20\x43\x69\x74\x79", 											"\x76\x61", "\x56\x41\x54" ],
		[ y2m.m9d,  											  "\x48\x6f\x6e\x64\x75\x72\x61\x73",												  "\x48\x6f\x6e\x64\x75\x72\x61\x73",														"\x68\x6e", "\x48\x4e\x44" ],
		[ y2m.y5u,  											  "\x48\x6f\x6e\x67\x4b\x6f\x6e\x67",												  "\x48\x6f\x6e\x67\x20\x4b\x6f\x6e\x67",													"\x68\x6b", "\x48\x4b\x47" ],
		[ y2m.o5k,  											 	"\x48\x75\x6e\x67\x61\x72\x79",													"\x48\x75\x6e\x67\x61\x72\x79",														"\x68\x75", "\x48\x55\x4e" ],
		[ y2m.v4x,  											 	"\x49\x63\x65\x6c\x61\x6e\x64",													"\x49\x63\x65\x6c\x61\x6e\x64",														"\x69\x73", "\x49\x53\x4c" ],
		[ y2m.u5z,  												 	"\x49\x6e\x64\x69\x61",														"\x49\x6e\x64\x69\x61",															"\x69\x6e", "\x49\x4e\x44" ],
		[ y2m.q8g,  										 	"\x49\x6e\x64\x6f\x6e\x65\x73\x69\x61",												"\x49\x6e\x64\x6f\x6e\x65\x73\x69\x61",													"\x69\x64", "\x49\x44\x4e" ],
		[ y2m.e9c,  													  "\x49\x72\x61\x6e",														  "\x49\x72\x61\x6e",																"\x69\x72", "\x49\x52\x4e" ],
		[ y2m.g2p,  													  "\x49\x72\x61\x71",														  "\x49\x72\x61\x71",																"\x69\x71", "\x49\x52\x51" ],
		[ y2m.g0f,  											 	"\x49\x72\x65\x6c\x61\x6e\x64",													"\x49\x72\x65\x6c\x61\x6e\x64",														"\x69\x65", "\x49\x52\x4c" ],
		[ y2m.d9l,  										 	"\x49\x73\x6c\x65\x4f\x66\x4d\x61\x6e",												"\x49\x73\x6c\x65\x20\x6f\x66\x20\x4d\x61\x6e",												"\x69\x6d", "\x49\x4d\x4e" ],
		[ y2m.f1x,  												  "\x49\x73\x72\x61\x65\x6c",													  "\x49\x73\x72\x61\x65\x6c",															"\x69\x6c", "\x49\x53\x52" ],
		[ y2m.g5b,  												 	"\x49\x74\x61\x6c\x79",														"\x49\x74\x61\x6c\x79",															"\x69\x74", "\x49\x54\x41" ],
		[ y2m.x6h,  											 	"\x4a\x61\x6d\x61\x69\x63\x61",													"\x4a\x61\x6d\x61\x69\x63\x61",														"\x6a\x6d", "\x4a\x41\x4d" ],
		[ y2m.w9g,  											  "\x4a\x61\x6e\x4d\x61\x79\x65\x6e",								  			  "\x4e\x6f\x72\x77\x61\x79", 														"\x78\x34", "\x58\x58\x34" ], 
		[ y2m.y4l,  												 	"\x4a\x61\x70\x61\x6e",														"\x4a\x61\x70\x61\x6e",															"\x6a\x70", "\x4a\x50\x4e" ],
		[ y2m.d6j,  												  "\x4a\x65\x72\x73\x65\x79",													  "\x4a\x65\x72\x73\x65\x79",															"\x6a\x65", "\x4a\x45\x59" ],
		[ y2m.m1q,  												  "\x4a\x6f\x72\x64\x61\x6e",													  "\x4a\x6f\x72\x64\x61\x6e",															"\x6a\x6f", "\x4a\x4f\x52" ],
		[ y2m.d9x,  										  "\x4b\x61\x7a\x61\x6b\x68\x73\x74\x61\x6e",											  "\x4b\x61\x7a\x61\x6b\x68\x73\x74\x61\x6e",													"\x6b\x7a", "\x4b\x41\x5a" ],
		[ y2m.a3z,  												 	"\x4b\x65\x6e\x79\x61",														"\x4b\x65\x6e\x79\x61",															"\x6b\x65", "\x4b\x45\x4e" ],
		[ y2m.z3s,  											  "\x4b\x69\x72\x69\x62\x61\x74\x69",												  "\x4b\x69\x72\x69\x62\x61\x74\x69",														"\x6b\x69", "\x4b\x49\x52" ],
		[ y2m.l0o,  										  "\x4b\x6f\x72\x65\x61\x4e\x6f\x72\x74\x68",											  "\x4e\x6f\x72\x74\x68\x20\x4b\x6f\x72\x65\x61",												"\x6b\x70", "\x50\x52\x4b" ], 
		[ y2m.g9c,  										  "\x4b\x6f\x72\x65\x61\x53\x6f\x75\x74\x68",	 	  								  "\x53\x6f\x75\x74\x68\x20\x4b\x6f\x72\x65\x61", 												"\x6b\x72", "\x4b\x4f\x52" ], 
		[ y2m.q7u,  												  "\x4b\x6f\x73\x6f\x76\x6f",													  "\x4b\x6f\x73\x6f\x76\x6f",															"\x78\x35", "\x52\x4b\x53" ],
		[ y2m.x0v,  												  "\x4b\x75\x77\x61\x69\x74",													  "\x4b\x75\x77\x61\x69\x74",															"\x6b\x77", "\x4b\x57\x54" ],
		[ y2m.m4a,  										  "\x4b\x79\x72\x67\x79\x7a\x73\x74\x61\x6e",											  "\x4b\x79\x72\x67\x79\x7a\x73\x74\x61\x6e",													"\x6b\x67", "\x4b\x47\x5a" ],
		[ y2m.g6r,  													  "\x4c\x61\x6f\x73",														  "\x4c\x61\x6f\x73",																"\x6c\x61", "\x4c\x41\x4f" ],
		[ y2m.a6d, 	 											 	"\x4c\x61\x74\x76\x69\x61",													  "\x4c\x61\x74\x76\x69\x61",															"\x6c\x76", "\x4c\x56\x41" ],
		[ y2m.o3j,  											 	"\x4c\x65\x62\x61\x6e\x6f\x6e",													"\x4c\x65\x62\x61\x6e\x6f\x6e",														"\x6c\x62", "\x4c\x42\x4e" ],
		[ y2m.y5o, 												  "\x4c\x65\x73\x6f\x74\x68\x6f",													"\x4c\x65\x73\x6f\x74\x68\x6f",														"\x6c\x73", "\x4c\x53\x4f" ],
		[ y2m.q8p,  											 	"\x4c\x69\x62\x65\x72\x69\x61",													"\x4c\x69\x62\x65\x72\x69\x61",														"\x6c\x72", "\x4c\x42\x52" ],
		[ y2m.c8w,  												 	"\x4c\x69\x62\x79\x61",														"\x4c\x69\x62\x79\x61",															"\x6c\x79", "\x4c\x42\x59" ],
		[ y2m.e6g,  								 	"\x4c\x69\x65\x63\x68\x74\x65\x6e\x73\x74\x65\x69\x6e",										"\x4c\x69\x65\x63\x68\x74\x65\x6e\x73\x74\x65\x69\x6e",											"\x6c\x69", "\x4c\x49\x45" ],
		[ y2m.l4z,  										 	"\x4c\x69\x74\x68\x75\x61\x6e\x69\x61",												"\x4c\x69\x74\x68\x75\x61\x6e\x69\x61",													"\x6c\x74", "\x4c\x54\x55" ],
		[ y2m.l3h,  										  "\x4c\x75\x78\x65\x6d\x62\x6f\x75\x72\x67",											  "\x4c\x75\x78\x65\x6d\x62\x6f\x75\x72\x67",													"\x6c\x75", "\x4c\x55\x58" ],
		[ y2m.macau,  												 	"\x4d\x61\x63\x61\x75",														"\x4d\x61\x63\x61\x75",															"\x6d\x6f", "\x4d\x41\x43" ],
		[ y2m.a3h,  	  					 	  "\x4e\x6f\x72\x74\x68\x4d\x61\x63\x65\x64\x6f\x6e\x69\x61",	   							  "\x4d\x61\x63\x65\x64\x6f\x6e\x69\x61",													"\x6d\x6b", "\x4d\x4b\x44" ],
		[ y2m.d8q,  										  "\x4d\x61\x64\x61\x67\x61\x73\x63\x61\x72",											  "\x4d\x61\x64\x61\x67\x61\x73\x63\x61\x72",													"\x6d\x67", "\x4d\x44\x47" ],
		[ y2m.b3a,  												  "\x4d\x61\x6c\x61\x77\x69",													  "\x4d\x61\x6c\x61\x77\x69",															"\x6d\x77", "\x4d\x57\x49" ],
		[ y2m.q5v,  											  "\x4d\x61\x6c\x61\x79\x73\x69\x61",												  "\x4d\x61\x6c\x61\x79\x73\x69\x61",														"\x6d\x79", "\x4d\x59\x53" ],
		[ y2m.n1f,  											  "\x4d\x61\x6c\x64\x69\x76\x65\x73",												  "\x4d\x61\x6c\x64\x69\x76\x65\x73",														"\x6d\x76", "\x4d\x44\x56" ],
		[ y2m.r9x, 													 	"\x4d\x61\x6c\x69",														  "\x4d\x61\x6c\x69",																"\x6d\x6c", "\x4d\x4c\x49" ],
		[ y2m.g7h,  												 	"\x4d\x61\x6c\x74\x61",														"\x4d\x61\x6c\x74\x61",															"\x6d\x74", "\x4d\x4c\x54" ],
		[ y2m.i3x,  							 	"\x4d\x61\x72\x73\x68\x61\x6c\x6c\x49\x73\x6c\x61\x6e\x64\x73",									"\x4d\x61\x72\x73\x68\x61\x6c\x6c\x20\x49\x73\x6c\x61\x6e\x64\x73",										"\x6d\x68", "\x4d\x48\x4c" ],
		[ y2m.a7c,  										  "\x4d\x61\x72\x74\x69\x6e\x69\x71\x75\x65",											  "\x4d\x61\x72\x74\x69\x6e\x69\x71\x75\x65",													"\x6d\x71", "\x4d\x54\x51" ],
		[ y2m.g9j,  										  "\x4d\x61\x75\x72\x69\x74\x61\x6e\x69\x61",											  "\x4d\x61\x75\x72\x69\x74\x61\x6e\x69\x61",													"\x6d\x72", "\x4d\x52\x54" ],
		[ y2m.o1c,  										 	"\x4d\x61\x75\x72\x69\x74\x69\x75\x73",												"\x4d\x61\x75\x72\x69\x74\x69\x75\x73",													"\x6d\x75", "\x4d\x55\x53" ],
		[ y2m.s2u,  											  "\x4d\x61\x79\x6f\x74\x74\x65",													"\x4d\x61\x79\x6f\x74\x74\x65",														"\x79\x74", "\x4d\x59\x54" ],
		[ y2m.k0p,  												  "\x4d\x65\x78\x69\x63\x6f",													  "\x4d\x65\x78\x69\x63\x6f",															"\x6d\x78", "\x4d\x45\x58" ],
		[ y2m.u5i,  										  "\x4d\x69\x63\x72\x6f\x6e\x65\x73\x69\x61",											  "\x4d\x69\x63\x72\x6f\x6e\x65\x73\x69\x61",													"\x66\x6d", "\x46\x53\x4d" ],
		[ y2m.u5r,  											 	"\x4d\x6f\x6c\x64\x6f\x76\x61",													"\x4d\x6f\x6c\x64\x6f\x76\x61",														"\x6d\x64", "\x4d\x44\x41" ],
		[ y2m.v1d,  												  "\x4d\x6f\x6e\x61\x63\x6f",													  "\x4d\x6f\x6e\x61\x63\x6f",															"\x6d\x63", "\x4d\x43\x4f" ],
		[ y2m.o5h,  											  "\x4d\x6f\x6e\x67\x6f\x6c\x69\x61",												  "\x4d\x6f\x6e\x67\x6f\x6c\x69\x61",														"\x6d\x6e", "\x4d\x4e\x47" ],
		[ y2m.o2k,  										  "\x4d\x6f\x6e\x74\x65\x6e\x65\x67\x72\x6f",											  "\x4d\x6f\x6e\x74\x65\x6e\x65\x67\x72\x6f",													"\x6d\x65", "\x4d\x4e\x45" ],
		[ y2m.l6c,  										  "\x4d\x6f\x6e\x74\x73\x65\x72\x72\x61\x74",											  "\x4d\x6f\x6e\x74\x73\x65\x72\x72\x61\x74",													"\x6d\x73", "\x4d\x53\x52" ],
		[ y2m.q1l,  												"\x4d\x6f\x72\x6f\x63\x63\x6f",													"\x4d\x6f\x72\x6f\x63\x63\x6f",														"\x6d\x61", "\x4d\x41\x52" ],
		[ y2m.q4k,  										  "\x4d\x6f\x7a\x61\x6d\x62\x69\x71\x75\x65",											  "\x4d\x6f\x7a\x61\x6d\x62\x69\x71\x75\x65",													"\x6d\x7a", "\x4d\x4f\x5a" ],
		[ y2m.m3j, 												  "\x4d\x79\x61\x6e\x6d\x61\x72",													"\x4d\x79\x61\x6e\x6d\x61\x72\x28\x42\x75\x72\x6d\x61\x29", 										"\x6d\x6d", "\x4d\x4d\x52" ],
		[ y2m.i1q,  												"\x4e\x61\x6d\x69\x62\x69\x61",													"\x4e\x61\x6d\x69\x62\x69\x61",														"\x6e\x61", "\x4e\x41\x4d" ],
		[ y2m.m5g,  													"\x4e\x61\x75\x72\x75",														"\x4e\x61\x75\x72\x75",															"\x6e\x72", "\x4e\x52\x55" ],
		[ y2m.w2v,  													"\x4e\x65\x70\x61\x6c",														"\x4e\x65\x70\x61\x6c",															"\x6e\x70", "\x4e\x50\x4c" ],
		[ y2m.y1k,  										"\x54\x68\x65\x4e\x65\x74\x68\x65\x72\x6c\x61\x6e\x64\x73",	  							  "\x4e\x65\x74\x68\x65\x72\x6c\x61\x6e\x64\x73",												"\x6e\x6c", "\x4e\x4c\x44" ],
		[ y2m.x3y, 						  "\x4e\x65\x74\x68\x65\x72\x6c\x61\x6e\x64\x73\x41\x6e\x74\x69\x6c\x6c\x65\x73",							"\x4e\x65\x74\x68\x65\x72\x6c\x61\x6e\x64\x73\x20\x41\x6e\x74\x69\x6c\x6c\x65\x73",								"\x61\x6e", "\x41\x4e\x54" ],
		[ y2m.x2d,  									  "\x4e\x65\x77\x43\x61\x6c\x65\x64\x6f\x6e\x69\x61",										  "\x4e\x65\x77\x20\x43\x61\x6c\x65\x64\x6f\x6e\x69\x61",											"\x6e\x63", "\x4e\x43\x4c" ],
		[ y2m.t5v,  										  "\x4e\x65\x77\x5a\x65\x61\x6c\x61\x6e\x64",											  "\x4e\x65\x77\x20\x5a\x65\x61\x6c\x61\x6e\x64",												"\x6e\x7a", "\x4e\x5a\x4c" ],
		[ y2m.j9d,  											"\x4e\x69\x63\x61\x72\x61\x67\x75\x61",												"\x4e\x69\x63\x61\x72\x61\x67\x75\x61",													"\x6e\x69", "\x4e\x49\x43" ],
		[ y2m.t7o,  													"\x4e\x69\x67\x65\x72",														"\x4e\x69\x67\x65\x72",															"\x6e\x65", "\x4e\x45\x52" ],
		[ y2m.l5e,  												"\x4e\x69\x67\x65\x72\x69\x61",													"\x4e\x69\x67\x65\x72\x69\x61",														"\x6e\x67", "\x4e\x47\x41" ],
		[ y2m.i4f,  													  "\x4e\x69\x75\x65",														  "\x4e\x69\x75\x65",																"\x6e\x75", "\x4e\x49\x55" ],
		[ y2m.j1l,  									"\x4e\x6f\x72\x66\x6f\x6c\x6b\x49\x73\x6c\x61\x6e\x64",										"\x4e\x6f\x72\x66\x6f\x6c\x6b", 														"\x6e\x66", "\x4e\x46\x4b" ],
		[ y2m.l3n,  								"\x4e\x6f\x72\x74\x68\x65\x72\x6e\x49\x72\x65\x6c\x61\x6e\x64",									"\x4e\x6f\x72\x74\x68\x65\x72\x6e\x20\x49\x72\x65\x6c\x61\x6e\x64",										"\x78\x36", "\x47\x42\x52" ], 
		[ y2m.x6w,  				  "\x4e\x6f\x72\x74\x68\x65\x72\x6e\x4d\x61\x72\x69\x61\x6e\x61\x49\x73\x6c\x61\x6e\x64\x73",					  "\x4e\x6f\x72\x74\x68\x65\x72\x6e\x20\x4d\x61\x72\x69\x61\x6e\x61",										"\x6d\x70", "\x4d\x4e\x50" ],
		[ y2m.y6k,  												  "\x4e\x6f\x72\x77\x61\x79",													  "\x4e\x6f\x72\x77\x61\x79",															"\x6e\x6f", "\x4e\x4f\x52" ],
		[ y2m.a8s,  													  "\x4f\x6d\x61\x6e",														  "\x4f\x6d\x61\x6e",																"\x6f\x6d", "\x4f\x4d\x4e" ],
		[ y2m.e6h,  											  "\x50\x61\x6b\x69\x73\x74\x61\x6e",												  "\x50\x61\x6b\x69\x73\x74\x61\x6e",														"\x70\x6b", "\x50\x41\x4b" ],
		[ y2m.s1t,  													"\x50\x61\x6c\x61\x75",														"\x50\x61\x6c\x61\x75",															"\x70\x77", "\x50\x4c\x57" ],
		[ y2m.a4t,  											"\x50\x61\x6c\x65\x73\x74\x69\x6e\x65",												"\x50\x61\x6c\x65\x73\x74\x69\x6e\x65",													"\x70\x73", "\x50\x53\x45" ],
		[ y2m.e1i,  												  "\x50\x61\x6e\x61\x6d\x61",													  "\x50\x61\x6e\x61\x6d\x61",															"\x70\x61", "\x50\x41\x4e" ],
		[ y2m.t6j,  								  "\x50\x61\x70\x75\x61\x4e\x65\x77\x47\x75\x69\x6e\x65\x61",									  "\x50\x61\x70\x75\x61\x20\x4e\x65\x77\x20\x47\x75\x69\x6e\x65\x61",										"\x70\x67", "\x50\x4e\x47" ],
		[ y2m.a9g,  											  "\x50\x61\x72\x61\x67\x75\x61\x79",												  "\x50\x61\x72\x61\x67\x75\x61\x79",														"\x70\x79", "\x50\x52\x59" ],
		[ y2m.j9b,  													  "\x50\x65\x72\x75",														  "\x50\x65\x72\x75",																"\x70\x65", "\x50\x45\x52" ],
		[ y2m.m8s,  										"\x50\x68\x69\x6c\x69\x70\x70\x69\x6e\x65\x73",											"\x50\x68\x69\x6c\x69\x70\x70\x69\x6e\x65\x73",												"\x70\x68", "\x50\x48\x4c" ],
		[ y2m.k6k,  											  "\x50\x69\x74\x63\x61\x69\x72\x6e",												  "\x50\x69\x74\x63\x61\x69\x72\x6e",														"\x70\x6e", "\x50\x43\x4e" ],
		[ y2m.r5k,  												  "\x50\x6f\x6c\x61\x6e\x64",													  "\x50\x6f\x6c\x61\x6e\x64",															"\x70\x6c", "\x50\x4f\x4c" ],
		[ y2m.j9h,  											  "\x50\x6f\x72\x74\x75\x67\x61\x6c",												  "\x50\x6f\x72\x74\x75\x67\x61\x6c",														"\x70\x74", "\x50\x52\x54" ],
		[ y2m.x9g,  										  "\x50\x75\x65\x72\x74\x6f\x52\x69\x63\x6f",											  "\x50\x75\x65\x72\x74\x6f\x20\x52\x69\x63\x6f",												"\x70\x72", "\x50\x52\x49" ],
		[ y2m.j0g,  													"\x51\x61\x74\x61\x72",														"\x51\x61\x74\x61\x72",															"\x71\x61", "\x51\x41\x54" ],
		[ y2m.v1x,  												"\x52\x65\x75\x6e\x69\x6f\x6e",													"\x52\x65\x75\x6e\x69\x6f\x6e",														"\x72\x65", "\x52\x45\x55" ],
		[ y2m.a4b,  												"\x52\x6f\x6d\x61\x6e\x69\x61",													"\x52\x6f\x6d\x61\x6e\x69\x61",														"\x72\x6f", "\x52\x4f\x55" ],
		[ y2m.y9a,  												  "\x52\x75\x73\x73\x69\x61",													  "\x52\x75\x73\x73\x69\x61\x6e\x20\x46\x65\x64\x65\x72\x61\x74\x69\x6f\x6e", 								"\x72\x75", "\x52\x55\x53" ],
		[ y2m.n8n,  												  "\x52\x77\x61\x6e\x64\x61",													  "\x52\x77\x61\x6e\x64\x61",															"\x72\x77", "\x52\x57\x41" ],
		[ y2m.a4f,  								"\x53\x61\x69\x6e\x74\x42\x61\x72\x74\x68\x65\x6c\x65\x6d\x79",									"\x53\x61\x69\x6e\x74\x20\x42\x61\x72\x74\x68\x65\x6c\x65\x6d\x79", 									"\x62\x6c", "\x42\x4c\x4d" ],
		[ y2m.x6d,  										"\x53\x61\x69\x6e\x74\x48\x65\x6c\x65\x6e\x61",											"\x53\x61\x69\x6e\x74\x20\x48\x65\x6c\x65\x6e\x61", 											"\x73\x68", "\x53\x48\x4e" ], 
		[ y2m.t4o,  								"\x53\x61\x69\x6e\x74\x4b\x69\x74\x74\x73\x4e\x65\x76\x69\x73",									"\x53\x74\x20\x4b\x69\x74\x74\x73\x20\x26\x20\x4e\x65\x76\x69\x73", 									"\x6b\x6e", "\x4b\x4e\x41" ], 
		[ y2m.c8o, 											"\x53\x61\x69\x6e\x74\x4c\x75\x63\x69\x61",											  "\x53\x61\x69\x6e\x74\x20\x4c\x75\x63\x69\x61", 												"\x6c\x63", "\x4c\x43\x41" ], 
		[ y2m.c3f,  					"\x53\x61\x69\x6e\x74\x4d\x61\x72\x74\x69\x6e\x46\x72\x65\x6e\x63\x68\x50\x61\x72\x74",  					"\x53\x61\x69\x6e\x74\x20\x4d\x61\x72\x74\x69\x6e", 											"\x6d\x66", "\x4d\x41\x46" ],
		[ y2m.v1h,  						"\x53\x61\x69\x6e\x74\x50\x69\x65\x72\x72\x65\x4d\x69\x71\x75\x65\x6c\x6f\x6e",							"\x53\x61\x69\x6e\x74\x20\x50\x69\x65\x72\x72\x65\x20\x61\x6e\x64\x20\x4d\x69\x71\x75\x65\x6c\x6f\x6e", 					"\x70\x6d", "\x53\x50\x4d" ], 
		[ y2m.c7h,  				  "\x53\x61\x69\x6e\x74\x56\x69\x6e\x63\x65\x6e\x74\x47\x72\x65\x6e\x61\x64\x69\x6e\x65\x73",					  "\x53\x74\x20\x56\x69\x6e\x63\x65\x6e\x74\x20\x26\x20\x74\x68\x65\x20\x47\x72\x65\x6e\x61\x64\x69\x6e\x65\x73", 				"\x76\x63", "\x56\x43\x54" ], 
		[ y2m.k0h,  													"\x53\x61\x6d\x6f\x61",														"\x53\x61\x6d\x6f\x61",															"\x77\x73", "\x57\x53\x4d" ],
		[ y2m.p8b,  											"\x53\x61\x6e\x4d\x61\x72\x69\x6e\x6f",												"\x53\x61\x6e\x20\x4d\x61\x72\x69\x6e\x6f",													"\x73\x6d", "\x53\x4d\x52" ],
		[ y2m.f6h,  								"\x53\x61\x6f\x54\x6f\x6d\x65\x50\x72\x69\x6e\x63\x69\x70\x65",									"\x53\x61\x6f\x20\x54\x6f\x6d\x65\x20\x26\x20\x50\x72\x69\x6e\x63\x69\x70\x65", 								"\x73\x74", "\x53\x54\x50" ],
		[ y2m.e8s,  										"\x53\x61\x75\x64\x69\x41\x72\x61\x62\x69\x61",											"\x53\x61\x75\x64\x69\x20\x41\x72\x61\x62\x69\x61", 											"\x73\x61", "\x53\x41\x55" ],
		[ y2m.c9x,  											  "\x53\x63\x6f\x74\x6c\x61\x6e\x64",												  "\x53\x63\x6f\x74\x6c\x61\x6e\x64",														"\x78\x37", "\x47\x42\x52" ],
		[ y2m.s4y,  												"\x53\x65\x6e\x65\x67\x61\x6c",													"\x53\x65\x6e\x65\x67\x61\x6c",														"\x73\x6e", "\x53\x45\x4e" ],
		[ y2m.e9x,  												  "\x53\x65\x72\x62\x69\x61",													  "\x53\x65\x72\x62\x69\x61\x28\x59\x75\x67\x6f\x73\x6c\x61\x76\x69\x61\x29", 								"\x72\x73", "\x53\x52\x42" ],
		[ y2m.p2k,  										  "\x53\x65\x79\x63\x68\x65\x6c\x6c\x65\x73",											  "\x53\x65\x79\x63\x68\x65\x6c\x6c\x65\x73",													"\x73\x63", "\x53\x59\x43" ],
		[ y2m.b7c,  									  "\x53\x69\x65\x72\x72\x61\x4c\x65\x6f\x6e\x65",											"\x53\x69\x65\x72\x72\x61\x20\x4c\x65\x6f\x6e\x65",												"\x73\x6c", "\x53\x4c\x45" ],
		[ y2m.o4z,  										 	"\x53\x69\x6e\x67\x61\x70\x6f\x72\x65",												"\x53\x69\x6e\x67\x61\x70\x6f\x72\x65",													"\x73\x67", "\x53\x47\x50" ],
		[ y2m.q6r,						  "\x53\x69\x6e\x74\x4d\x61\x61\x72\x74\x65\x6e\x44\x75\x74\x63\x68\x50\x61\x72\x74",  					  "\x53\x69\x6e\x74\x20\x4d\x61\x61\x72\x74\x65\x6e",												"\x73\x78", "\x53\x58\x4d" ],
		[ y2m.h9k,  											  "\x53\x6c\x6f\x76\x61\x6b\x69\x61",												  "\x53\x6c\x6f\x76\x61\x6b\x69\x61",														"\x73\x6b", "\x53\x56\x4b" ],
		[ y2m.s7n,  											  "\x53\x6c\x6f\x76\x65\x6e\x69\x61",												  "\x53\x6c\x6f\x76\x65\x6e\x69\x61",														"\x73\x69", "\x53\x56\x4e" ],
		[ y2m.m6h,  								  "\x53\x6f\x6c\x6f\x6d\x6f\x6e\x49\x73\x6c\x61\x6e\x64\x73",									  "\x53\x6f\x6c\x6f\x6d\x6f\x6e\x20\x49\x73\x6c\x61\x6e\x64\x73", 										"\x73\x62", "\x53\x4c\x42" ],
		[ y2m.s9w,  											 	"\x53\x6f\x6d\x61\x6c\x69\x61",													"\x53\x6f\x6d\x61\x6c\x69\x61",														"\x73\x6f", "\x53\x4f\x4d" ],
		[ y2m.r9j,  									 	"\x53\x6f\x75\x74\x68\x41\x66\x72\x69\x63\x61",											"\x53\x6f\x75\x74\x68\x20\x41\x66\x72\x69\x63\x61",												"\x7a\x61", "\x5a\x41\x46" ],
		[ y2m.f8g, "\x53\x6f\x75\x74\x68\x47\x65\x6f\x72\x67\x69\x61\x53\x6f\x75\x74\x68\x53\x61\x6e\x64\x77\x69\x63\x68\x49\x73\x6c\x61\x6e\x64\x73", "\x53\x6f\x75\x74\x68\x20\x47\x65\x6f\x72\x67\x69\x61\x20\x61\x6e\x64\x20\x53\x6f\x75\x74\x68\x20\x53\x61\x6e\x64\x77\x69\x63\x68", 	"\x67\x73", "\x53\x47\x53" ],
		[ y2m.h1v,  										  "\x53\x6f\x75\x74\x68\x53\x75\x64\x61\x6e",											  "\x53\x6f\x75\x74\x68\x65\x72\x6e\x20\x53\x75\x64\x61\x6e", 										"\x73\x73", "\x53\x53\x44" ],
		[ y2m.o4t,  									 	"\x53\x6f\x76\x69\x65\x74\x55\x6e\x69\x6f\x6e",											"\x53\x6f\x76\x69\x65\x74\x20\x55\x6e\x69\x6f\x6e", 			 								"\x73\x75", "\x55\x52\x53" ],
		[ y2m.g5e, 	 												  "\x53\x70\x61\x69\x6e",														"\x53\x70\x61\x69\x6e",															"\x65\x73", "\x45\x53\x50" ],
		[ y2m.h2j,  											  "\x53\x72\x69\x4c\x61\x6e\x6b\x61",												  "\x53\x72\x69\x20\x4c\x61\x6e\x6b\x61",													"\x6c\x6b", "\x4c\x4b\x41" ],
		[ y2m.b6s,  												 	"\x53\x75\x64\x61\x6e",														"\x53\x75\x64\x61\x6e",															"\x73\x64", "\x53\x44\x4e" ],
		[ y2m.i0c,  											  "\x53\x75\x72\x69\x6e\x61\x6d\x65",												  "\x53\x75\x72\x69\x6e\x61\x6d\x65",														"\x73\x72", "\x53\x55\x52" ], 
		[ y2m.b6m,  											  "\x53\x76\x61\x6c\x62\x61\x72\x64",												  "\x4e\x6f\x72\x77\x61\x79", 														"\x73\x6a", "\x53\x4a\x4d" ], 
		[ y2m.h1z,  										 	"\x53\x77\x61\x7a\x69\x6c\x61\x6e\x64",												"\x53\x77\x61\x7a\x69\x6c\x61\x6e\x64",													"\x73\x7a", "\x53\x57\x5a" ],
		[ y2m.g0r,  												  "\x53\x77\x65\x64\x65\x6e",													  "\x53\x77\x65\x64\x65\x6e",															"\x73\x65", "\x53\x57\x45" ],
		[ y2m.w1d,  									 	"\x53\x77\x69\x74\x7a\x65\x72\x6c\x61\x6e\x64",											"\x53\x77\x69\x74\x7a\x65\x72\x6c\x61\x6e\x64",												"\x63\x68", "\x43\x48\x45" ],
		[ y2m.a7n,  												 	"\x53\x79\x72\x69\x61",														"\x53\x79\x72\x69\x61",															"\x73\x79", "\x53\x59\x52" ],
		[ y2m.k5h,  												  "\x54\x61\x69\x77\x61\x6e",													  "\x54\x61\x69\x77\x61\x6e",															"\x74\x77", "\x54\x57\x4e" ],
		[ y2m.k8u,  										  "\x54\x61\x6a\x69\x6b\x69\x73\x74\x61\x6e",											  "\x54\x61\x6a\x69\x6b\x69\x73\x74\x61\x6e",													"\x74\x6a", "\x54\x4a\x4b" ],
		[ y2m.u7h,  											  "\x54\x61\x6e\x7a\x61\x6e\x69\x61",												  "\x54\x61\x6e\x7a\x61\x6e\x69\x61",														"\x74\x7a", "\x54\x5a\x41" ],
		[ y2m.o9b, 											  "\x54\x68\x61\x69\x6c\x61\x6e\x64",												  "\x54\x68\x61\x69\x6c\x61\x6e\x64",														"\x74\x68", "\x54\x48\x41" ],
		[ y2m.x1h,  										  "\x54\x69\x6d\x6f\x72\x4c\x65\x73\x74\x65",	  									  "\x54\x69\x6d\x6f\x72\x2d\x4c\x65\x73\x74\x65", 												"\x74\x6c", "\x54\x4c\x53" ], 
		[ y2m.y0v, 													 	"\x54\x6f\x67\x6f",														  "\x54\x6f\x67\x6f",																"\x74\x67", "\x54\x47\x4f" ],
		[ y2m.v1o,  											 	"\x54\x6f\x6b\x65\x6c\x61\x75",													"\x54\x6f\x6b\x65\x6c\x61\x75",														"\x74\x6b", "\x54\x4b\x4c" ], 
		[ y2m.y2r,  												 	"\x54\x6f\x6e\x67\x61",														"\x54\x6f\x6e\x67\x61",															"\x74\x6f", "\x54\x4f\x4e" ],
		[ y2m.m1d,  								  "\x54\x72\x69\x6e\x69\x64\x61\x64\x54\x6f\x62\x61\x67\x6f",									  "\x54\x72\x69\x6e\x69\x64\x61\x64\x20\x26\x20\x54\x6f\x62\x61\x67\x6f", 									"\x74\x74", "\x54\x54\x4f" ],
		[ y2m.b1x,  												"\x54\x75\x6e\x69\x73\x69\x61",													"\x54\x75\x6e\x69\x73\x69\x61",														"\x74\x6e", "\x54\x55\x4e" ],
		[ y2m.q5u,  												  "\x54\x75\x72\x6b\x65\x79",													  "\x54\x75\x72\x6b\x65\x79",															"\x74\x72", "\x54\x55\x52" ],
		[ y2m.q1j,  									  "\x54\x75\x72\x6b\x6d\x65\x6e\x69\x73\x74\x61\x6e",										  "\x54\x75\x72\x6b\x6d\x65\x6e\x69\x73\x74\x61\x6e",												"\x74\x6d", "\x54\x4b\x4d" ],
		[ y2m.y7r,  						  "\x54\x75\x72\x6b\x73\x43\x61\x69\x63\x6f\x73\x49\x73\x6c\x61\x6e\x64\x73",							  "\x54\x75\x72\x6b\x73\x20\x61\x6e\x64\x20\x43\x61\x69\x63\x6f\x73\x20\x49\x73\x6c\x61\x6e\x64\x73", 					"\x74\x63", "\x54\x43\x41" ],
		[ y2m.v4y,  												  "\x54\x75\x76\x61\x6c\x75",													  "\x54\x75\x76\x61\x6c\x75", 														"\x74\x76", "\x54\x55\x56" ],
		[ y2m.i1x,  												  "\x55\x67\x61\x6e\x64\x61",													  "\x55\x67\x61\x6e\x64\x61",															"\x75\x67", "\x55\x47\x41" ],
		[ y2m.a2r,  											  "\x55\x6b\x72\x61\x69\x6e\x65",													"\x55\x6b\x72\x61\x69\x6e\x65",														"\x75\x61", "\x55\x4b\x52" ],
		[ y2m.q6y,  						  "\x55\x6e\x69\x74\x65\x64\x41\x72\x61\x62\x45\x6d\x69\x72\x61\x74\x65\x73",							  "\x55\x6e\x69\x74\x65\x64\x20\x41\x72\x61\x62\x20\x45\x6d\x69\x72\x61\x74\x65\x73",								"\x61\x65", "\x41\x52\x45" ],
		[ y2m.h3h,  									"\x55\x6e\x69\x74\x65\x64\x4b\x69\x6e\x67\x64\x6f\x6d",										"\x55\x6e\x69\x74\x65\x64\x20\x4b\x69\x6e\x67\x64\x6f\x6d\x28\x47\x72\x65\x61\x74\x20\x42\x72\x69\x74\x61\x69\x6e\x29", 			"\x67\x62", "\x47\x42\x52" ], 
		[ y2m.h5s,  									  "\x55\x6e\x69\x74\x65\x64\x53\x74\x61\x74\x65\x73",										  "\x55\x6e\x69\x74\x65\x64\x20\x53\x74\x61\x74\x65\x73\x20\x6f\x66\x20\x41\x6d\x65\x72\x69\x63\x61", 					"\x75\x73", "\x55\x53\x41" ],
		[ y2m.x1x, "\x55\x6e\x69\x74\x65\x64\x53\x74\x61\x74\x65\x73\x4d\x69\x6e\x6f\x72\x4f\x75\x74\x6c\x79\x69\x6e\x67\x49\x73\x6c\x61\x6e\x64\x73", "\x55\x6e\x69\x74\x65\x64\x20\x53\x74\x61\x74\x65\x73\x20\x6f\x66\x20\x41\x6d\x65\x72\x69\x63\x61",						"\x75\x6d", "\x55\x4d\x49" ],
		[ y2m.e6y,  										 		"\x55\x72\x75\x67\x75\x61\x79",													"\x55\x72\x75\x67\x75\x61\x79",														"\x75\x79", "\x55\x52\x59" ],
		[ y2m.y0a,  									 	  "\x55\x7a\x62\x65\x6b\x69\x73\x74\x61\x6e",											  "\x55\x7a\x62\x65\x6b\x69\x73\x74\x61\x6e",													"\x75\x7a", "\x55\x5a\x42" ],
		[ y2m.j9x,  										 		"\x56\x61\x6e\x75\x61\x74\x75",													"\x56\x61\x6e\x75\x61\x74\x75",														"\x76\x75", "\x56\x55\x54" ],
		[ y2m.o2w,  											"\x56\x65\x6e\x65\x7a\x75\x65\x6c\x61",												"\x56\x65\x6e\x65\x7a\x75\x65\x6c\x61",													"\x76\x65", "\x56\x45\x4e" ],
		[ y2m.t9q,  												"\x56\x69\x65\x74\x6e\x61\x6d",													"\x56\x69\x65\x74\x20\x4e\x61\x6d",														"\x76\x6e", "\x56\x4e\x4d" ],
		[ y2m.c1s,  					  "\x56\x69\x72\x67\x69\x6e\x49\x73\x6c\x61\x6e\x64\x73\x42\x72\x69\x74\x69\x73\x68",       			"\x56\x69\x72\x67\x69\x6e\x20\x49\x73\x6c\x61\x6e\x64\x73\x20\x42\x72\x69\x74\x69\x73\x68", 						"\x76\x67", "\x56\x47\x42" ],
		[ y2m.x5s,  								"\x56\x69\x72\x67\x69\x6e\x49\x73\x6c\x61\x6e\x64\x73\x55\x53",	  							"\x56\x69\x72\x67\x69\x6e\x20\x49\x73\x6c\x61\x6e\x64\x73\x20\x55\x53", 									"\x76\x69", "\x56\x49\x52" ],
		[ y2m.u5u,  													"\x57\x61\x6c\x65\x73",														"\x57\x61\x6c\x65\x73",															"\x78\x38", "\x47\x42\x52" ],
		[ y2m.y8z,  									  "\x57\x61\x6c\x6c\x69\x73\x46\x75\x74\x75\x6e\x61",										  "\x57\x61\x6c\x6c\x69\x73\x20\x61\x6e\x64\x20\x46\x75\x74\x75\x6e\x61",									"\x77\x66", "\x57\x4c\x46" ],
		[ y2m.i5e,  									"\x57\x65\x73\x74\x65\x72\x6e\x53\x61\x68\x61\x72\x61",										"\x57\x65\x73\x74\x65\x72\x6e\x20\x53\x61\x68\x61\x72\x61",											"\x65\x68", "\x45\x53\x48" ],
		[ y2m.b6v,  											 		"\x59\x65\x6d\x65\x6e",														"\x59\x65\x6d\x65\x6e",															"\x79\x65", "\x59\x45\x4d" ],
		[ y2m.i4b,  											 		"\x5a\x61\x69\x72\x65",														"",																		"\x7a\x72", "\x5a\x52\x4e" ], 
		[ y2m.o6x,  											 	  "\x5a\x61\x6d\x62\x69\x61",													  "\x5a\x61\x6d\x62\x69\x61",															"\x7a\x6d", "\x5a\x4d\x42" ],
		[ y2m.p9i,  										 	  "\x5a\x69\x6d\x62\x61\x62\x77\x65",												  "\x5a\x69\x6d\x62\x61\x62\x77\x65",														"\x7a\x77", "\x5a\x57\x45" ],
];

function s0y(x5f)
{
	return p0n[x5f][2];
}

function p8x(x5f)
{
	return p0n[x5f][4];
}

function a7j(t9j)
{
	for (const x5f of p0n)
	{
		if (x5f[4] == t9j)
		{
			return x5f[0];
		}
	}
	return y2m.j0j;
}

function u9m(e9d)
{
	for (const x5f of p0n)
	{
		if (x5f[3] == e9d)
		{
			return x5f[0];
		}
	}
	return y2m.j0j;
}
class z1b
{

constructor()
{
	this.a1z = '';
}

i5y(i1t)
{
	this.a1z += i1t;
}

c3l(i1t)
{
	this.a1z += i1t + '\n';
}

a8u()
{
	this.a1z += '\n';
}

}




function j3e(u8s, i0p)
{
	let n9s = Number(u8s);
	if (isNaN(n9s))
	{
		return i0p;
	}
	else
	{
		return n9s;
	}
}
