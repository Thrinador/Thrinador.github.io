This post is an exploration of the characteristic polynomials of tridiagonal matrices. In particular what are the coefficients for characteristic polynomial in a fully expanded form. This paper was inspired by Matrix Analysis [[5]](#references) which posed the problem of determining the characteristic polynomial of a 5 by 5 all ones tridiagonal matrix. The followup was how this procedure can be generalized.

# All ones tridiagonal matrices

Let 

$$T_n := \begin{bmatrix}
1 & 1 &   &   &  \\
1 & 1 & 1 &      \\
& \ddots & \ddots & \ddots \\
& & 1 & 1 & 1 \\
& & & 1 & 1
\end{bmatrix}$$ 

be the $$n$$ by $$n$$ tridiagonal matrix of all 1s.

**Question 1**. What is the characteristic polynomial of $$T_n$$?

A good place to start is to work with some examples. In this effort, the coefficients for the characteristic polynomials of $$T_n$$ for $$n$$ up to 15 in decreasing order are given below.


![Characteristic polynomials of Tridiagonal matrices up to order 15.](/images/tridiagonal_table_1.PNG)

This is an interesting pattern. Some immediate takeaways the first term is always 1, the last term oscillates between 1,-1, and 0, and the second term is a negative growing term matching $$n$$.

Using the standard method of finding the characteristic polynomial we get, as noted in Matrix Analysis [[5]](#references) property 0.9.10 of tridiagonal matrices,

$$\det \left| \lambda I_n - T_n \right| = (\lambda-1) \det \left| \lambda I_{n-1} T_{n-1} \right| - \det\left| \lambda I_{n-2} - T_{n-2} \right|.$$

This leads to the recurrence relation 

$$ \tag{1}
    p_{T_n}(\lambda) = (\lambda - 1) p_{T_{n-1}}(\lambda) - p_{T_{n-2}}(\lambda)
$$ 

with initial conditions $$p_{T_1}(\lambda) = \lambda -1$$ and $$p_{T_2}(\lambda) = (\lambda - 1)^2 - 1$$. Evaluating some of these
yields 

$$
    \begin{array}{ll}
        1 & (\lambda - 1) \\
        2 & (\lambda - 1)^2 - 1 \\
        3 & (\lambda - 1)^3 - 2(\lambda - 1) \\
        4 & (\lambda - 1)^4 - 3(\lambda - 1)^2 + 1 \\
        5 & (\lambda - 1)^5 - 4(\lambda - 1)^3 + 3(\lambda - 1) \\
        6 & (\lambda - 1)^6 - 5(\lambda - 1)^4 + 6(\lambda - 1)^2 -1
    \end{array}
$$

From [[2]](#references) Gullerud, Mbirika, and Post explore the set of tridiagonal matrices which are all ones except the main diagonal is zeros. They come to a similar recurrence relation of the form

$$f_n(\lambda) = -\lambda f_{n-1}(\lambda) - f_{n-2}(\lambda).$$ 

and find that the entries follow pascal's triangle on the diagonals instead of the rows.

In our case the third entry also follows pascal's triangle. However the fourth and onward do not. This is a step towards showing the characteristic polynomials follow a sum of binomial coefficients.

## Chebyshev polynomials

Looking at the OEIS, I found [oeis.org/A049310](https://oeis.org/A049310). This closely matched the coefficients of the factored recurrence relation. From there I found [[7]](#references) where Artisevich, Bychkov, and Shabat look into the relation between Chebyshev polynomials and Catalan numbers. They use this relation on an application to tridiagonal matrices. For a good introduction to Chebyshev polynomials see [[7]](#references).

Chebyshev polynomials come in for kinds with the second two being derived from the first two by the half angle trigonometric identities. In our case we care about Chebyshev polynomials of the second kind, which from [[7]](#references), are defined as

**Definition 2**. The Chebyshev polynomial $$U_n(x)$$ of the second kind is a polynomial of degree $$n$$ in $$x$$ defined by

$$U_n(x) = \frac{\sin (\theta n + \theta)}{\sin \theta}$$ 

when $$x = \cos \theta$$.

From this definition it can be shown that $$U_n$$ satisfies the recurrence relation 

$$U_n(x) = 2x U_{n-1}(x) - U_{n-2}(x)$$ 

with initial conditions $$U_0(x) = 1$$ and $$U_1(x) = 2x$$.

This is very similar to the recurrence relation from equation $$(1)$$ and shows why, in the OEIS entry, taking $$U_n(x/2)$$ matches exactly to our factored form. However neither Artisevich's paper or the book on Chebyshev polynomials had a good solution to this recurrence relation.

## Catalan numbers and Generalized Fibonacci polynomials

Another similar looking OEIS entry for the coefficients of the factored terms was, [oeis.org/A115139](https://oeis.org/A115139). This is an interesting connection since it shows that the coefficients in this semi-factored form are related to the Catalan numbers (or at least through the Catalan number's generating function).

One of the references to the OEIS entry was [[3]](#references) which talked about generalized Fibonacci polynomials. In the paper they were defined as follows

$$
\mathcal{F}_0(x) = 0, ~ \mathcal{F}_1(x) = 1, \text{ and } \mathcal{F}_n(x) = d(x) \mathcal{F}_{n-1}(x) + g(x) \mathcal{F}_{n-2}(x)
$$

for $$n \geq 2$$, where $$d(x)$$ and $$g(x)$$ are fixed non-zero polynomials in $$\mathbb{Z}[x]$$ satisfying gcd$$(d(x), g(x)) = 1$$. In the paper was the following Lemma, which was originally proven in [[4]](#references) by Hoggatt and Long,

**Lemma 3**. If $$\mathcal{F}_n(x)$$ is a generalized Fibonacci polynomial of Fibonacci type, with $$n > 0$$, then 

$$
\mathcal{F}_n(x) = \sum_{k=0}^{\lfloor \frac{n-1}{2} \rfloor} { n-k-1 \choose k } d(x)^{n - 2k - 1} g(x)^k.
$$


Now in our case we can add two extension characteristic polynomials 

$$
p_{T_0}(\lambda) = 1 \text{ and } p_{T_{-1}}(\lambda) = 0.
$$ 

These don't really make sense from a matrix point of view since we can't have $$0$$ by $$0$$ or $$-1$$ by $$-1$$ sized matrices, but this allows us to turn our recurrence relation into the form for it to be a generalized Fibonacci polynomial. They also still give the correct initial conditions from equation $$(1)$$.


**Lemma 4**. The characteristic polynomial for $$T_n$$, in its recurrence
relation factored form, is given by

$$
p_{T_n}(\lambda) = \sum_{k=0}^{\left\lfloor n/2 \right\rfloor} { n - k \choose k} (-1)^{k} (\lambda - 1)^{n-2k}.
$$

**Proof** Applying Lemma 3 to the recurrence relation 

$$
p_{T_{-1}}(\lambda) = 0,~ p_{T_0}(\lambda) = 1, \text{ and } p_{T_n}(\lambda) = (\lambda - 1) p_{T_{n-1}}(\lambda) - p_{T_{n-2}}(\lambda).
$$

We get that $$d(\lambda) = (\lambda - 1)$$ and $$g(\lambda) = -1$$. Putting this together with the shift since we are starting at $$-1$$ yields

$$
p_{T_n}(\lambda) = \sum_{k=0}^{\left\lfloor n/2 \right\rfloor} { n - k \choose k}  (-1)^{k} (\lambda - 1)^{n-2k}.
$$


**Question 5**. Can the formula above be used to find the exact coefficients of a fully expanded tridiagonal matrix?

To start on answering this question we can use the binomial theorem to expand the $$(\lambda - 1)^j$$ this gives the following 

$$
p_{T_n}(\lambda) = \sum_{k=0}^{\left\lfloor n/2 \right\rfloor} \sum_{j=0}^{n-2k} { n - k \choose k} {n-2k \choose j} (-1)^{n-k-j} \lambda^{j}.
$$

From there we can carefully swap the sums and bring out the $$\lambda$$
giving 

$$
p_{T_n}(\lambda) = \sum_{j=0}^{n} \lambda^{j} \sum_{k=0}^{\left\lfloor \frac{n-j}{2} \right\rfloor}  { n - k \choose k} {n-2k \choose j} (-1)^{n-k-j}.
$$

Thus the coefficients of the characteristic polynomial $$T_n$$ are of the form 

$$
    \sum_{k=0}^{\left\lfloor \frac{n-j}{2} \right\rfloor}  { n - k \choose k} {n-2k \choose j} (-1)^{n-k-j}.
$$ 

Sadly I don't see any way to get this in a more closed form. The binomial coefficients don't seem to combine or simplify in any meaningful way especially with the sign flipping every term.

# Generalization to constant diagonal tridiagonal matrices

Lets now turn to tridiagonal matrices who have constant diagonal entries. We can define this as 

$$T_n(a,b,c) = \begin{bmatrix}
b & c &   &   &  \\
a & b & c &      \\
& \ddots & \ddots & \ddots \\
& & a & b & c \\
& & & a & b
\end{bmatrix}
$$

Again applying the standard method of finding the characteristic polynomial we get

$$
\det \left| \lambda I_n - T_n(a,b,c) \right| = b(\lambda-1) \det \left| \lambda I_{n-1} T_{n-1}(a,b,c) \right| - (ac) \det\left| \lambda I_{n-2} - T_{n-2}(a,b,c) \right|.
$$

Which gives us the recurrence relation

$$
p_{T_n(a,b,c)}(\lambda) = b(\lambda - 1) p_{T_{n-1}(a,b,c)}(\lambda) - (ac) p_{T_{n-2}(a,b,c)}(\lambda).
$$

We can use the same generalized Fibonacci polynomial formula with $$d(\lambda) = b(\lambda-1)$$ and $$g(\lambda) = -ac$$ to derive the formula

$$
p_{T_n(a,b,c)}(\lambda) = \sum_{k=0}^{\left\lfloor n/2 \right\rfloor} { n - k \choose k} (-ac)^{k} b^{n-2k} (\lambda - 1)^{n-2k}.
$$

Once again we can expand this out with the binomial theorem and carefully swap the sums to get 

$$
\begin{aligned} \tag{2}
    p_{T_n(a,b,c)}(\lambda) 
    &= \sum_{k=0}^{\left\lfloor n/2 \right\rfloor} \sum_{j=0}^{n-2k} { n - k \choose k} {n-2k \choose j} (-1)^{n-k-j} (ac)^{k} b^{n-2k} \lambda^j \\
    &= \sum_{j=0}^{n} \lambda^j \sum_{k=0}^{\left\lfloor \frac{n-j}{2} \right\rfloor} { n - k \choose k} {n-2k \choose j} (-1)^{n-k-j} (ac)^{k} b^{n-2k}.
\end{aligned}
$$

Which gives that the coefficients of the characteristic polynomial for $$T_n(a,b,c)$$ are

$$
\sum_{k=0}^{\left\lfloor \frac{n-j}{2} \right\rfloor} { n - k \choose k} {n-2k \choose j} (-1)^{n-k-j} (ac)^{k} b^{n-2k}.
$$

# Concluding remarks

The coefficients for the characteristic polynomials of $$T_n$$ and $$T_n(a,b,c)$$ have two binomial terms that flip signs. From [[6]](#references) there may be an interesting ways to simplify this using Catalan numbers.

The pattern for finding the determinant of a tridiagonal matrix may allow for equation $$(2)$$ to be extended to arbitrary tridiagonal matrices.

**Conjecture 6**. Let $$b \in \mathbb{C}^n$$, $$a,c \in \mathbb{C}^{n-1}$$,
and define 

$$
T_n(a,b,c) = \begin{bmatrix}
b_1 & c_1 &   &   &  \\
a_1 & b_2 & c_2 &      \\
& \ddots & \ddots & \ddots \\
& & a_{n-2} & b_{n-1} & c_{n-1} \\
& & & a_{n-1} & b_n
\end{bmatrix}
$$ 

as an arbitrary tridiagonal matrix. The characteristic polynomial, $$p_{T_n(a,b,c)}(\lambda)$$, is given by

$$p_{T_n(a,b,c)}(\lambda) = \sum_{j=0}^{n} \lambda^j \sum_{k=0}^{\left\lfloor \frac{n-j}{2} \right\rfloor} { n - k \choose k} {n-2k \choose j} (-1)^{n-k-j} \left( \prod_{\ell = 1}^k a_\ell c_\ell \right) \left( \prod_{\ell = 1}^{n-2k} b_\ell \right).$$

# References

1. Artisevich, A. E., B. S. Bychkov, and A. B. Shabat. 2020. “Chebyshev
Polynomials, Catalan Numbers, and Tridiagonal Matrices.” *Teoret. Mat.
Fiz.* 204 (1): 3–9. <https://doi.org/10.4213/tmf9885>.

2. Emily Gullerud, Rita Post, aBa Mbirika. 2020. “Characteristic
Polynomials and Eigenvalues for a Family of Tridiagonal Real Symmetric
Matrices.”

3. Flórez, Rigoberto, and J. C. Saunders. 2022. “Irreducibility of
Generalized Fibonacci Polynomials.” *Integers* 22: Paper No. A69, 16.

4. Hoggatt, Verner E., Jr., and Calvin T. Long. 1974. “Divisibility
Properties of Generalized Fibonacci Polynomials.” *Fibonacci Quart.* 12:
113–20.

5. Horn, Roger A., and Charles R. Johnson. 2013. *Matrix Analysis*. Second.
Cambridge University Press, Cambridge.

6. Lang, Wolfdieter. 2000. “On Polynomials Related to Powers of the
Generating Function of Catalan’s Numbers.” *Fibonacci Quart.* 38 (5):
408–19.

7. Mason, J. C., and D. C. Handscomb. 2003. *Chebyshev Polynomials*.
Chapman & Hall/CRC, Boca Raton, FL.
