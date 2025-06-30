Banking Stored Procedures
This project contains a collection of PL/SQL stored procedures designed to perform common banking operations.

Overview of Procedures
ProcessMonthlyInterest
Applies a 1% monthly interest to all savings accounts.

UpdateEmployeeBonus
Increases the salary of employees in a specified department by a given bonus percentage.

TransferFunds
Transfers a specified amount from one account to another, with balance validation.

Usage Instructions
You can execute these procedures using Oracle SQLcl, SQL*Plus, or the Oracle SQL extension in VS Code.

Execution Order
Run the following scripts in order to define the procedures:

sql
Copy
Edit
@01_ProcessMonthlyInterest.sql
@02_UpdateEmployeeBonus.sql
@03_TransferFunds.sql
 Sample Execution
Once the scripts are loaded, execute the procedures using:

sql
Copy
Edit
EXEC ProcessMonthlyInterest;
EXEC UpdateEmployeeBonus(10, 5);    -- Department ID 10, Bonus 5%
EXEC TransferFunds(101, 102, 500);  -- Transfer ₹500 from account 101 to 102
Setting Up in Visual Studio Code
Open Visual Studio Code and create a new folder:
BankingStoredProcedures

Inside this folder, create the following SQL files:

01_ProcessMonthlyInterest.sql

02_UpdateEmployeeBonus.sql

03_TransferFunds.sql

Install and configure the Oracle SQL extension or open an integrated terminal using Oracle SQLcl.

Connect to your Oracle database, then run the .sql scripts in sequence.

Prerequisites
Oracle Database

Oracle SQLcl or SQL*Plus

Visual Studio Code (optional)

Oracle SQL extension for VS Code (optional)
