# Banking Stored Procedures

This project contains a collection of PL/SQL stored procedures for common banking operations.

## Overview of Procedures

1. **ProcessMonthlyInterest**  
   Applies a 1% monthly interest to all savings accounts.

2. **UpdateEmployeeBonus**  
   Increases the salary of employees in a specified department by a given bonus percentage.

3. **TransferFunds**  
   Transfers a specified amount from one account to another, with balance validation.

## Usage Instructions

You can execute these procedures using Oracle SQLcl, SQL*Plus, or the Oracle SQL extension in Visual Studio Code.

### Execution Order

Run the following scripts in order to define the procedures:

```sql
@01_ProcessMonthlyInterest.sql
@02_UpdateEmployeeBonus.sql
@03_TransferFunds.sql
