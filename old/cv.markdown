---
layout: page
title: CV
permalink: /CV/
---

[Download a pdf version](/pdfs/CV.pdf)

Email: [find.ben.clark@gmail.com](find.ben.clark@gmail.com)

Github: [github.com/thrinador](https://github.com/thrinador)

## Education

* Pursuing Ph.D. in Mathematics at Washington State University September 2022--Present

* Bachelor of Science in Mathematics from University of Washington Bothell January 2020--June 2022

* Bachelor of Science in Computer Science and Software Engineering from University of Washington Bothell September 2015--June 2019

## Experience

### Teaching assistant at Washington State University 
August 2022 to Present

* Run labs for entry level math classes.

* Tutor at the math learning center covering all undergrad math subjects.

### Site Reliability Engineer / Software Engineer at Google
June 2019 to August 2022

* Working on reducing the complexity of a large scale distributed file storage system.

* Service owner for Chrome Webstore; this entails leading dev syncs, providing production expertise, and being the point of contact for the developers.

* Designed and implemented monitoring metrics, graphs, and alerts for Chrome Webstore. Identified the critical user journeys for their service and wrote alerts to best serve those journeys.

* Improved the efficiency of a large caching service saving resources and improving startup time.
  
### Lead CSSE tutor at University of Washington Bothell
January 2017 to March 2019

* Tutored computer science concepts to students in Java, C/C++, and Python.

* Tutored math concepts from calculus to intro proof classes.

* Trained tutors in communication, structure, and various approaches for tutoring.

* Interviewed and hired new tutors.

## Publications

### Polynomials that preserve nonnegative matrices of order two
Published Fall 2022 in the Mathematics Exchange

Preprint available at [arxiv.org/abs/2109.13365](https://arxiv.org/abs/2109.13365)

* Gave explicit conditions for a polynomial to preserve two-by-two nonnegative matrices.

* Explored what these conditions mean and gave further tests for satisfying these conditions.

### Polynomials that preserve nonnegative matrices
Published September 2021 in the journal of Linear Algebra and its Applications.

Preprint available at [arxiv.org/abs/2109.03360](https://arxiv.org/abs/2109.03360)

* Explored what the set of polynomials that take nonnegative matrices as inputs and outputs look like.

* Derived several tests that would help determine if a given polynomial was in this set and found properties that these polynomials have.

* Further restricted the input set to special classes of nonnegative matrices, in particular the Jordan matrices and circulant matrices.

### Would gamers collaborate given the opportunity
Publishd August 2018 in FDG conference proceedings 

Publication available at [dl.acm.org/doi/10.1145/3235765.3236497](https://dl.acm.org/doi/10.1145/3235765.3236497)

* Coauthored a paper/poster about video game collaboration. I presented the work at the FDG conference in Malmö Sweden.

* The research was done by making a series of short games to test different aspects of cooperation. In each game players could collaborate, but did not need to. The question was if they were not prompted to collaborate, would they?
  

## Presentations

### Pacific Northwest Section of the Mathematical Association of America
Gave presentation March 2023

* Gave a presentation on the two published papers involving polynomials preserving nonnegative matrices.

* Talked about potential future areas of research that can be done.

### CSSE Capstone
Gave presentation June 2019

* Summarized my optimizations and findings for the Brain Grid project.

* Explained how classes from my CSSE degree aided in this project.

* Reflected on what I learned from this project and how it could have been done better.

### Northwest Undergraduate Mathematics Symposium
Gave presentation November 2018

* Gave a introduction nonnegative matrix analysis to other undergraduate students.

* Talked about some preliminary results for how polynomials interact with nonnegative matrices.

* Concluded by explaining why this work is important and what the next steps are.

### Foundations of Digital Games
Gave presentation August 2018

* Gave a poster presentation of my coauthored paper ``Would gamers collaborate given the opportunity?".

* Summarized what we found and pointed out flaws in our testing methodology.

* Concluded with how we could expand this into a larger study with concrete outcomes.

### UW Undergraduate Research Symposium
Gave presentation May 2018

* Explained what the nonnegative inverse eigenvalue problem is and how this work contributes to it.

* Presented an early summary of the paper ``Polynomials that preserve nonnegative matrices"

* Talked about some of the interesting results and where we wanted to explore further.

## Awards 

### Founders Fellow
Received April 2018

* Was recognized with the Founders Fellowship Scholarship.

* The purpose of this scholarship is to encourage and recognize the participation of undergraduate students in research in all disciplines and inter-disciplines represented on the UW Bothell campus.

### Dean's List

* Made the dean's list 8 out of the 9 full credit quarters during my CSSE degree.

## Projects

### Matrix polynomial analysis
[github.com/Thrinador/matrix\_polynomial\_analysis](https://github.com/Thrinador/matrix_polynomial_analysis)

Topics: Rust, Optimization, Thread pools

* The goal of the project was to get a picture of what the space of polynomials that preserve the nonnegativity of matrices of a given size looks like.

* This is being done as a followup investigation into the research I did on polynomials that preserve nonnegative matrices.

* The main process is to generate a set of polynomials, then try and minimize their coefficients. Since there is no know test to see if a polynomial preserves nonnegative matrices after a minimization action is preformed the polynomial must be tested against a large set of matrices. This led to several performance optimization problems including thread pools, generating a large amount of random numbers, and race conditions.

* I did this project in rust because it is a very performant language and as a way of learning the language better.

### Brain Grid 
[github.com/UWB-Biocomputing/BrainGrid](https://github.com/UWB-Biocomputing/BrainGrid)

Topics: C++, Cuda, Optimization

* BrainGrid is an open-source spiking neural network simulator that is intended to aid scientists and researchers by providing pre-built code that can be easily modified to fit different models.

* Worked on optimizing the performance of the Cuda code through profiling different aspects of the kernel.

* Found and fixed a bug that reduced the number of memory allocations from 6 million to 10 thousand.

* Tuned the micro kernels and reduced the branching paths to give a 2 times speed up.

### Chess
[github.com/thrinador/Chess](https://github.com/Thrinador/Chess)

Topics: Java, JavaFX, Networking

* Wrote a GUI chess application in JavaFX using event driven programming.

* Improved the project as part of my networking class by adding server code and allowing clients to make lobbies and join games.

## CSSE Technical Skills

### Languages 

* C/C++
* Java
* Rust
* Python
* Matlab

### Developer Tools

* Git
* VSCode
* Visual Studio
* Netbeans

### Platforms/Frameworks

* Linux
* Cuda
* Actix web
* JavaFX
