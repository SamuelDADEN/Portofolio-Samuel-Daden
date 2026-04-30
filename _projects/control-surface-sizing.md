---
title: "Optimised Control Surface Sizing"
subtitle: "A systematic methodology for determining the minimum control surface area satisfying stability and manoeuvrability requirements."
category: "Aeronautics"
icon: "✈️"
summary: "Developed an optimisation framework to size control surfaces (ailerons, elevators, rudder) while minimising structural weight and aerodynamic drag, subject to handling-quality constraints."
tools: [Python, MATLAB, Xfoil]
keywords: [control surfaces, sizing, optimisation, flight mechanics, aerodynamics]
image: /assets/images/control-surface-sizing.svg
order: 1
---

## Overview

Correct sizing of control surfaces is one of the most constrained design problems in aeronautics. An undersized surface fails to meet manoeuvrability requirements; an oversized one adds unnecessary weight and drag. This project develops a **systematic optimisation framework** that finds the minimum surface area satisfying all regulatory and performance constraints.

## Objectives

- Define a rigorous set of stability and manoeuvrability constraints (roll rate, pitch authority, yaw control).
- Build a parametric model linking surface geometry to aerodynamic effectiveness.
- Minimise total control-surface area (or structural weight) subject to those constraints.
- Validate results against reference aircraft data.

## Methodology

### Aerodynamic Modelling

Control-surface effectiveness is modelled using thin-airfoil theory and semi-empirical corrections. For each surface (aileron, elevator, rudder), the hinge-moment and lift-increment coefficients are computed as functions of:

- Chord ratio \\(c_f / c\\)
- Span fraction
- Deflection angle

### Constraint Formulation

| Constraint | Requirement |
|---|---|
| Roll rate | \\(p \geq p_{\min}\\) at maximum aileron deflection |
| Pitch authority | Trim at forward CG and landing configuration |
| Rudder | Engine-out yaw balance at \\(V_{\text{MC}}\\) |

### Optimisation

The sizing problem is cast as a **constrained nonlinear programme (NLP)**:

$$\min_{x} \; \sum_i A_i \quad \text{subject to} \quad g_j(x) \leq 0, \; j = 1,\ldots,m$$

where \\(x\\) collects chord ratios and span fractions for each surface.

## Results

> Add your key results here: optimal chord ratios, weight savings vs. initial sizing, comparison plots, etc.

- Achieved a **X% reduction** in total control-surface area compared to the initial baseline.
- All manoeuvrability constraints satisfied at the optimum.
- Sensitivity analysis revealed that the roll-rate constraint is the most active.

## Figures

<figure>
  <img src="{{ '/assets/images/control-surface-sizing.svg' | relative_url }}" alt="Feasible region and active constraints">
  <figcaption>Fig. 1 — Feasible region defined by the roll-rate and pitch-authority constraints. The optimal solution (●) minimises total surface area within the feasible region.</figcaption>
</figure>

## References & Tools

- **Python / SciPy** — `minimize` with SLSQP solver
- **MATLAB** — initial parametric studies
- **Xfoil** — 2D aerodynamic validation of hinge-moment coefficients
