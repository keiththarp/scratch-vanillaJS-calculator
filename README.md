# scratch-vanillaJS-calculator
Building a calculator sans tutorial

## Pseudo code
Let's think this through, we all know how a calculator works.

**Simple Case**
- A user types in a number, one digit at a time.
  * The program collects these numbers in a temporary variable.
- The user selects an operator Key.
  * The program stores the type of operator to be used during calculation in variable.
  * The program transfers the completed number to a holding variable.
- User creates the second number in the equation.
  * Program collects these numbers in the temporary variable.
- User clicks 'Equals' button.
  * program retrieves the first number in holding variable and second number in temporary variable, then calculates using the stored operator.

**Multiple calculations**
*Like 4 + 3 - 2 = ?*
- As in **simple case...**
- Rather than clicking 'equals' user clicks another operator key.
  * program must now:
    1. Process the first equation with the first operator.
    2. Store the result in the holding variable.
    3. Update the operator in operatorStorage variable.
    4. Update the temporary variable with the next number sequence input
- Finish as in **Simple case**

**Repetitive equals clicks**
*Like 4 + 3 =, =, =*
- As in **previous cases**
- User desires to repeat previous calculation by repeating equals click.
  * Original equals click needs to update the holdingVariable with the solution.
  * Next equals click performs the equals function again using the updated holding variable and the same/previous operator and temporary variable.
  
