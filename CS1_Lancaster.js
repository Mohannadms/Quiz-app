const chapters = {
	1: [
		{
			question:
				"What is the primary function of a program in the context of software development?",
			correctAnswer: "A clear, step-by-step manual to solve a problem",
			wrongAnswers: [
				"A design blueprint for software",
				"A user interface prototype",
				"A compiled binary",
			],
		},
		{
			question: "Why is communicating with computers considered difficult?",
			correctAnswer:
				"Computers interpret instructions literally and require precise language",
			wrongAnswers: [
				"Computers only understand images",
				"They change their behavior randomly",
				"They use natural language processing by default",
			],
		},
		{
			question:
				"What is a key advantage of programming languages over natural languages?",
			correctAnswer:
				"They have a precise, mostly unambiguous meaning for each word",
			wrongAnswers: [
				"They are faster to type",
				"They support more artistic expression",
				"They are easier for beginners to understand",
			],
		},
		{
			question:
				"In the C programming language, what does the `#include <stdio.h>` statement do?",
			correctAnswer:
				"It allows use of standard input/output functions like printf",
			wrongAnswers: [
				"It defines a main function",
				"It creates a new variable",
				"It compiles the program",
			],
		},
		{
			question: "What does the `main` function signify in a C program?",
			correctAnswer:
				"It is the entry point of the program where execution starts",
			wrongAnswers: [
				"It includes external libraries",
				"It prints the first output",
				"It declares global variables",
			],
		},
		{
			question:
				"What is the correct way to add a comment in C that spans multiple lines?",
			correctAnswer: "/* This is a block comment */",
			wrongAnswers: [
				"// This is a block comment",
				"# This is a block comment",
				"/* This is a block comment //",
			],
		},
		{
			question: "Which of the following best defines a 'statement' in C?",
			correctAnswer:
				"A concrete step in a program, like a variable definition or assignment",
			wrongAnswers: [
				"A paragraph of code",
				"A user comment",
				"A conditional structure only",
			],
		},
		{
			question: "What does the assignment operator `=` do in C?",
			correctAnswer: "Assigns a value to a variable",
			wrongAnswers: [
				"Checks for equality",
				"Adds two variables",
				"Declares a new function",
			],
		},
		{
			question:
				"Which data type would you use for floating-point numbers in C?",
			correctAnswer: "double",
			wrongAnswers: ["int", "char", "bool"],
		},
		{
			question: "What is the purpose of a compiler in C programming?",
			correctAnswer:
				"It translates C code into machine code that a computer can run",
			wrongAnswers: [
				"It interprets C code at runtime",
				"It uploads the program to the cloud",
				"It checks spelling and grammar",
			],
		},
		{
			question:
				"What file is typically created when you compile a C program without specifying an output name using `gcc`?",
			correctAnswer: "a.out",
			wrongAnswers: ["main.c", "program.exe", "compile.log"],
		},
		{
			question:
				"What is the effect of the `-Wall` option when using `gcc` to compile a C program?",
			correctAnswer: "It enables common compiler warnings",
			wrongAnswers: [
				"It compiles all files in the folder",
				"It links the standard library",
				"It runs the program in debug mode",
			],
		},
	],

	2: [
		{
			question: "What are the requirements for a valid identifier in C?",
			correctAnswer:
				"Begins with a letter or underscore, contains letters/digits/underscores, case-sensitive",
			wrongAnswers: [
				"Can begin with a number, must use only lowercase letters",
				"Allows special characters like & and -",
				"Must be written in camelCase only",
			],
		},
		{
			question: "Which of the following is NOT a valid identifier in C?",
			correctAnswer: "x-ray",
			wrongAnswers: ["int_", "_voltage", "x0"],
		},
		{
			question: "What naming convention is typical for constants in C?",
			correctAnswer: "Uppercase letters, possibly with underscores",
			wrongAnswers: [
				"camelCase with leading underscore",
				"All lowercase with hyphens",
				"Any format is fine for constants",
			],
		},
		{
			question: "What is the purpose of using descriptive variable names?",
			correctAnswer: "To make code easier to understand and maintain",
			wrongAnswers: [
				"To increase performance",
				"To reduce file size",
				"To enable faster compilation",
			],
		},
		{
			question:
				"What is the correct way to perform a shorthand subtraction in C?",
			correctAnswer: "a -= b",
			wrongAnswers: ["a =- b", "a = b - a", "a = b -="],
		},
		{
			question: "What is the main difference between ++a and a++ in C?",
			correctAnswer: "++a increments before use; a++ increments after use",
			wrongAnswers: [
				"++a adds two; a++ adds one",
				"++a decrements; a++ increments",
				"They behave identically",
			],
		},
		{
			question: "Why should you avoid expressions like `a = a++ + ++a` in C?",
			correctAnswer:
				"The result is not defined by the C standard and is unpredictable",
			wrongAnswers: [
				"They are too slow to run",
				"They cause syntax errors",
				"They always evaluate to zero",
			],
		},
		{
			question: "What is the result of integer division 5 / 2 in C?",
			correctAnswer: "2",
			wrongAnswers: ["2.5", "2.0", "1.5"],
		},
		{
			question: "How does C treat the division of `11 / 2 / 2.0 / 2`?",
			correctAnswer: "((11 / 2) / 2.0) / 2 → 1.25",
			wrongAnswers: [
				"11 / (2 / (2.0 / 2)) → 5.5",
				"(11 / 2.0) / (2 / 2) → 2.75",
				"(11 / 4.0) / 2 → 1.375",
			],
		},
		{
			question:
				"What is the default behavior of an uninitialized variable in C?",
			correctAnswer: "It contains arbitrary garbage data",
			wrongAnswers: [
				"It defaults to zero",
				"It causes a compile-time error",
				"It stores NULL",
			],
		},
		{
			question:
				"Which of the following format specifiers is used to print a double in standard format?",
			correctAnswer: "%lf",
			wrongAnswers: ["%d", "%f", "%g"],
		},
		{
			question: "What does the `\n` character do in a printf format string?",
			correctAnswer: "Starts a new line",
			wrongAnswers: ["Ends the program", "Clears the screen", "Skips a space"],
		},
		{
			question:
				"What is the correct way to print an integer followed by a percent sign using printf?",
			correctAnswer: 'printf("%d %% complete\\n", percent);',
			wrongAnswers: [
				'printf("%d % complete\\n", percent);',
				'printf("%d %\\n", percent);',
				'printf("%d complete%\\n", percent);',
			],
		},
		{
			question: "What happens if you use %lf with an int in printf?",
			correctAnswer: "You get unpredictable output and a warning",
			wrongAnswers: [
				"The program crashes immediately",
				"It prints 0.000000 always",
				"It is automatically converted",
			],
		},
		{
			question:
				"Why should you include `<stdio.h>` in a program that uses `printf`?",
			correctAnswer:
				"To avoid implicit declaration warning and enable standard I/O functions",
			wrongAnswers: [
				"To define integer types",
				"To make the program faster",
				"To include debugging features",
			],
		},
		{
			question: "How do you read an integer from the user in C?",
			correctAnswer: 'scanf("%d", &a);',
			wrongAnswers: ['scanf("%d", a);', 'scanf("%i", a);', 'scanf("int", &a);'],
		},
		{
			question: "What does `scanf` return when reading input?",
			correctAnswer: "The number of successfully read values",
			wrongAnswers: ["The input value", "0 on success", "Always returns void"],
		},
		{
			question:
				"What should you check to detect input errors when using `scanf`?",
			correctAnswer:
				"If the return value matches the number of expected inputs",
			wrongAnswers: [
				"If the input matches the variable name",
				"If the input length is even",
				"If `scanf` returns -1",
			],
		},
		{
			question:
				'What happens if you type a letter instead of a number when using scanf("%d", &x)?',
			correctAnswer:
				"scanf stops, x is not written to, and remains uninitialized",
			wrongAnswers: [
				"It assigns 0 to x",
				"It prints an error automatically",
				"It converts the letter to its ASCII value",
			],
		},
	],

	3: [
		{
			question:
				"In C, what is the process of 'viewing' a variable of one type as another type called?",
			correctAnswer: "Type Casting",
			wrongAnswers: ["Type Splicing", "Variable Mutation", "Data Conversion"],
		},
		{
			question:
				"What is the key difference between implicit and explicit type casting?",
			correctAnswer:
				"Implicit casting is done automatically by the compiler, while explicit casting is specified by the programmer.",
			wrongAnswers: [
				"Implicit casting is always safe, while explicit casting can be dangerous.",
				"Explicit casting only works on integer types, while implicit casting works on all types.",
				"Implicit casting is a newer feature in C, while explicit casting is outdated.",
			],
		},
		{
			question:
				"Which of the following correctly demonstrates the syntax for explicit type casting in C?",
			correctAnswer: "(double) int_val",
			wrongAnswers: [
				"double(int_val)",
				"cast<double>(int_val)",
				"int_val as double",
			],
		},
		{
			question:
				"What happens when a 'double' is cast to an 'int', for example, 'int a = 2.99;'?",
			correctAnswer: "The value is truncated, so 'a' becomes 2.",
			wrongAnswers: [
				"The value is rounded to the nearest integer, so 'a' becomes 3.",
				"The compiler throws an error because information would be lost.",
				"The value is rounded down, so 'a' becomes 2.",
			],
		},
		{
			question: "What is meant by the 'flow of control' in a program?",
			correctAnswer: "The order in which statements are executed.",
			wrongAnswers: [
				"The speed at which the program runs.",
				"The way data is stored in memory.",
				"The process of compiling the code.",
			],
		},
		{
			question:
				"To use the 'bool' data type in C, which header file must be included?",
			correctAnswer: "<stdbool.h>",
			wrongAnswers: ["<stdio.h>", "<boolean.h>", "<types.h>"],
		},
		{
			question: "What is the C operator for checking if two values are equal?",
			correctAnswer: "==",
			wrongAnswers: ["=", "!=", "==="],
		},
		{
			question: "What is the result of the logical expression 'a && b'?",
			correctAnswer: "True only if both a and b are true.",
			wrongAnswers: [
				"True if either a or b is true.",
				"True only if a is true and b is false.",
				"False if both a and b are true.",
			],
		},
		{
			question:
				"In an 'if-else' statement, what happens if the boolean expression evaluates to false?",
			correctAnswer: "The 'else' block is executed.",
			wrongAnswers: [
				"The 'if' block is executed.",
				"The program terminates.",
				"The entire 'if-else' statement is skipped.",
			],
		},
		{
			question: "What is the 'dangling else' problem?",
			correctAnswer:
				"An 'else' statement is matched with the closest unmatched 'if', regardless of indentation.",
			wrongAnswers: [
				"An 'else' statement without a corresponding 'if' statement.",
				"An 'if' statement that is never executed.",
				"Using 'else' with a single-statement 'if' block.",
			],
		},
		{
			question:
				"What is a common pitfall when writing conditional statements that can lead to unexpected behavior?",
			correctAnswer:
				"Using the assignment operator '=' instead of the comparison operator '=='.",
			wrongAnswers: [
				"Forgetting to include an 'else' block.",
				"Nesting too many 'if' statements.",
				"Using boolean expressions that are too complex.",
			],
		},
		{
			question:
				"What is the primary purpose of using functions in programming?",
			correctAnswer:
				"To modularize and structure instructions, allowing for code re-use.",
			wrongAnswers: [
				"To make the code run faster.",
				"To declare all variables in one place.",
				"To create a graphical user interface.",
			],
		},
		{
			question: "What does it mean if a function has a return type of 'void'?",
			correctAnswer: "The function does not return any value.",
			wrongAnswers: [
				"The function returns a null pointer.",
				"The function can return any type of value.",
				"The function must have no parameters.",
			],
		},
		{
			question:
				"What is the significance of the 'main' function in a C program?",
			correctAnswer:
				"It is the entry point of the program; execution starts by calling 'main'.",
			wrongAnswers: [
				"It is the only function that can call other functions.",
				"It must be the last function defined in the source file.",
				"It is an optional function for debugging purposes.",
			],
		},
		{
			question:
				"What happens to the variables declared inside a function when the function finishes executing?",
			correctAnswer:
				"The variables are local to the function and are destroyed.",
			wrongAnswers: [
				"The variables become global and can be accessed from anywhere.",
				"The variables are passed to the calling function.",
				"The variables remain in memory for the duration of the program.",
			],
		},
		{
			question:
				"What does the term 'call-by-value' mean in the context of C functions?",
			correctAnswer:
				"The function receives a copy of the argument's value, not the original variable itself.",
			wrongAnswers: [
				"The function can only be called by its name.",
				"The function's return value is always an integer.",
				"The function can modify the original variable passed as an argument.",
			],
		},
		{
			question:
				"In a 'switch' statement, what is the purpose of the 'break' keyword?",
			correctAnswer:
				"It causes an exit from the 'switch' statement, preventing fall-through to the next case.",
			wrongAnswers: [
				"It marks the beginning of a case block.",
				"It is used to define the default case.",
				"It pauses the program for a specified amount of time.",
			],
		},
		{
			question:
				"What is the purpose of the 'default' case in a 'switch' statement?",
			correctAnswer:
				"It is executed if none of the other case values match the expression.",
			wrongAnswers: [
				"It is always the first case to be checked.",
				"It is a mandatory case in every 'switch' statement.",
				"It is used to declare variables for the 'switch' block.",
			],
		},
	],

	4: [
		{
			question:
				"According to the slides, what is the primary motivation for using loops in programming?",
			correctAnswer:
				"To repeat a block of code multiple times without having to copy and paste it.",
			wrongAnswers: [
				"To make the program run faster by using less memory.",
				"To organize code into separate, reusable modules.",
				"To handle user input and output operations.",
			],
		},
		{
			question: "What is the procedure for a `while` loop's execution?",
			correctAnswer:
				"Check a condition, if it's true, execute a block of code, and then repeat the process.",
			wrongAnswers: [
				"Execute a block of code once, then check a condition to see if it should repeat.",
				"Initialize a counter, check a condition, execute a block, and then increment the counter.",
				"Execute a block of code a predetermined number of times.",
			],
		},
		{
			question: "What is a key characteristic of a `do-while` loop?",
			correctAnswer:
				"The condition is checked at the end of the loop, guaranteeing the loop's body is executed at least once.",
			wrongAnswers: [
				"It is functionally identical to a `for` loop.",
				"It cannot create an infinite loop.",
				"The condition is checked at the beginning and the end of each iteration.",
			],
		},
		{
			question:
				"What are the three essential actions that should be performed on a loop control variable (LCV) to avoid an infinite loop?",
			correctAnswer:
				"It should be declared and initialized, tested by the loop, and updated in the body of the loop.",
			wrongAnswers: [
				"It must be a global variable, be positive, and be an integer.",
				"It should be declared as a constant, checked for equality, and never modified.",
				"It must be passed as a function argument, have a random value, and be reset every iteration.",
			],
		},
		{
			question:
				"What are the three components within the parentheses of a `for` loop, in order?",
			correctAnswer:
				"An initialization step, a condition, and a command to execute after each iteration.",
			wrongAnswers: [
				"A condition, an increment, and a declaration.",
				"A declaration, a command, and a condition.",
				"An initialization step, a break condition, and a return value.",
			],
		},
		{
			question: "What is the function of the `break` statement within a loop?",
			correctAnswer:
				"To immediately exit the loop and jump to the statement following it.",
			wrongAnswers: [
				"To skip the current iteration and start the next one.",
				"To pause the execution of the program.",
				"To delete the loop from memory.",
			],
		},
		{
			question:
				"What is a common error when writing a `while` loop that can cause an infinite loop?",
			correctAnswer:
				"Placing a semicolon directly after the `while (<condition>)` part.",
			wrongAnswers: [
				"Forgetting to use curly braces for a multi-statement loop body.",
				"Using a variable in the condition that was declared inside the loop.",
				"Initializing the loop control variable to 0.",
			],
		},
		{
			question: "How is an array defined in C?",
			correctAnswer:
				"A sequence of variables of the same type stored in a contiguous block of memory.",
			wrongAnswers: [
				"A collection of variables of different types.",
				"A dynamic list that can grow or shrink in size.",
				"A special type of function for storing data.",
			],
		},
		{
			question:
				"If you declare an array as `double rates[42];`, what is the valid range of indices you can use to access its elements?",
			correctAnswer: "0 to 41.",
			wrongAnswers: [
				"1 to 42.",
				"0 to 42.",
				"The range is determined at runtime.",
			],
		},
		{
			question: "In C, what does an array variable itself store?",
			correctAnswer: "Only the starting address of the array, not its size.",
			wrongAnswers: [
				"The size of the array and the address of the first element.",
				"A copy of all the elements within the array.",
				"The address of the last element in the array.",
			],
		},
		{
			question:
				"What is the result of comparing two arrays using the `==` operator, as in `if (one == other)`?",
			correctAnswer:
				"It compares the memory addresses of the arrays, not their contents.",
			wrongAnswers: [
				"It performs an element-by-element comparison of the arrays.",
				"It results in a compilation error.",
				"It checks if the arrays have the same size.",
			],
		},
		{
			question:
				"Who is responsible for ensuring that array indices stay within their valid bounds?",
			correctAnswer:
				"The developer is responsible, as the compiler does not typically check for this.",
			wrongAnswers: [
				"The C compiler, which will prevent the program from running if bounds are exceeded.",
				"The operating system, which automatically handles out-of-bounds access.",
				"The user of the program.",
			],
		},
		{
			question:
				"When passing an array to a function, what is the common and necessary practice regarding its size?",
			correctAnswer:
				"To pass the size of the array as a separate argument to the function.",
			wrongAnswers: [
				"The function can automatically determine the size using the `sizeof()` operator.",
				"To store the size in the first element of the array.",
				"The size does not need to be known by the function.",
			],
		},
		{
			question:
				"What happens when you modify the elements of an array inside a function?",
			correctAnswer:
				"The original array in the calling function is modified because the function receives its address.",
			wrongAnswers: [
				"The function works on a local copy, so the original array is unchanged.",
				"It is not possible to modify an array's contents within a function.",
				"A new array is created and returned by the function.",
			],
		},
		{
			question:
				"What is a Variable Length Array (VLA), and what is the recommendation given in the slides for their use?",
			correctAnswer:
				"It is an array whose size is determined by a variable, and the recommendation is not to use them.",
			wrongAnswers: [
				"It is an array that can grow or shrink after being created, and it is the recommended approach.",
				"It is another name for a string, and it should be used for all text.",
				"It is an array declared with a constant size, which is considered good practice.",
			],
		},
	],

	5: [
		{
			question:
				"According to the ASCII standard, what is the fundamental representation of a 'char' in C?",
			correctAnswer:
				"Each character, letter, or symbol is represented by a specific number.",
			wrongAnswers: [
				"Each character is a small object with its own properties.",
				"Characters are stored as pointers to a font file.",
				"Characters are represented by a sequence of pixels.",
			],
		},
		{
			question:
				"What is the key difference between a character literal and a string literal in C?",
			correctAnswer:
				"A character literal is enclosed in single quotes (e.g., 'a'), while a string literal is in double quotes (e.g., \"a\").",
			wrongAnswers: [
				"They are interchangeable and have no difference.",
				"Character literals are for variables, and string literals are for constants.",
				"Character literals are stored as numbers, while string literals are not.",
			],
		},
		{
			question: "In C, what is a string fundamentally?",
			correctAnswer:
				"An array of characters that ends with a special null terminator character ('\\0').",
			wrongAnswers: [
				"A primitive data type built into the language.",
				"A dynamic list of characters that automatically resizes.",
				"A linked list of character nodes.",
			],
		},
		{
			question:
				'What is the critical error in the declaration `char my_string[3] = "abc";`?',
			correctAnswer:
				"The array is not large enough; it needs 4 bytes to store 'a', 'b', 'c', and the final null terminator ('\\0').",
			wrongAnswers: [
				"The compiler will automatically resize the array to fit the string.",
				"String literals cannot be used to initialize arrays.",
				"The array size should be `char my_string[2]`.",
			],
		},
		{
			question:
				"What is a major pitfall of modifying a string by overwriting its null terminator?",
			correctAnswer:
				"The character array is no longer a valid C-string, which causes unpredictable results with functions like `printf`.",
			wrongAnswers: [
				"The compiler will throw a 'missing null terminator' error.",
				"The string simply becomes one character shorter.",
				"It automatically appends a new null terminator at the end of the array.",
			],
		},
		{
			question:
				"Which header file must be included to use standard string manipulation functions like `strlen()` and `strcpy()`?",
			correctAnswer: "<string.h>",
			wrongAnswers: ["<stdio.h>", "<strings.h>", "<str.h>"],
		},
		{
			question: 'What value does `strlen("hello")` return?',
			correctAnswer:
				"5, because it measures the length of the string excluding the null character.",
			wrongAnswers: [
				"6, because it includes the null character in its count.",
				"The memory address of the string.",
				"The size of the char type, which is 1.",
			],
		},
		{
			question:
				"What is the correct interpretation of the result of `strcmp(string1, string2)`?",
			correctAnswer:
				"It returns zero if the strings are the same, and a non-zero value if they are different.",
			wrongAnswers: [
				"It returns `true` if the strings are the same and `false` otherwise.",
				"It returns the number of characters that are different between the strings.",
				"It returns `1` if the strings are identical and `0` otherwise.",
			],
		},
		{
			question:
				"What is a primary danger of using the `strcpy(destination, source)` function?",
			correctAnswer:
				"It does not check if the destination array is large enough, which can lead to buffer overflows and security vulnerabilities.",
			wrongAnswers: [
				"It is significantly slower than copying a string manually.",
				"It does not copy the null terminator, creating an invalid string.",
				"It changes the source string as well as the destination.",
			],
		},
		{
			question:
				"What is the purpose of the `strcat(destination, source)` function?",
			correctAnswer:
				"It appends the `source` string to the end of the `destination` string.",
			wrongAnswers: [
				"It compares two strings and concatenates them if they are equal.",
				"It creates a new string that is the combination of the two source strings.",
				"It copies and replaces the `destination` string with the `source` string.",
			],
		},
		{
			question:
				"Why is it recommended to use functions like `strlcpy()` and `strlcat()` over their counterparts `strcpy()` and `strcat()`?",
			correctAnswer:
				"They are safer because they take a size limit as an argument to prevent writing past the end of the destination buffer.",
			wrongAnswers: [
				"They are faster and more memory-efficient.",
				"They are part of the newer C++ standard and have more features.",
				"They can handle Unicode characters, unlike the older functions.",
			],
		},
		{
			question:
				'When reading a string with `scanf("%s", text)`, why do you not use the ampersand `&` before the array name?',
			correctAnswer:
				"An array's name already acts as an address (a pointer to the first element).",
			wrongAnswers: [
				"It is an exception only for the `scanf` function.",
				"Using an ampersand is optional and has no effect.",
				"You must use an ampersand for all types with `scanf`.",
			],
		},
		{
			question:
				'What is a significant limitation of reading user input with `scanf("%s", string);`?',
			correctAnswer:
				"It only reads a single 'word', stopping at the first whitespace character.",
			wrongAnswers: [
				"It can only read strings up to 256 characters long.",
				"It requires the user to press Enter twice.",
				"It automatically converts all input to uppercase.",
			],
		},
		{
			question:
				"Which function is recommended for safely reading a line of text, including spaces, from the user?",
			correctAnswer: "fgets(array, size, stdin)",
			wrongAnswers: ['scanf("%s", array)', "gets(array)", "read(array, size)"],
		},
	],

	6: [
		{
			question: "How is memory arranged in the standard memory model?",
			correctAnswer: "Memory is arranged in one long row (one 'street')",
			wrongAnswers: [
				"Memory is arranged in a grid structure",
				"Memory is arranged in circular blocks",
				"Memory is arranged in hierarchical trees",
			],
		},
		{
			question: "What does each cell in the memory row represent?",
			correctAnswer: "One byte (8 bits)",
			wrongAnswers: ["One bit", "One word (32 bits)", "One kilobyte"],
		},
		{
			question: "How are memory addresses assigned?",
			correctAnswer: "Starting from 0 and counting upward",
			wrongAnswers: [
				"Starting from 1 and counting upward",
				"Randomly assigned by the OS",
				"Based on variable names",
			],
		},
		{
			question: "What are addresses in memory?",
			correctAnswer: "Simply numbers (usually 64 bit = 8 byte numbers)",
			wrongAnswers: [
				"Text strings identifying locations",
				"Binary patterns with special meaning",
				"Hardware-specific identifiers",
			],
		},
		{
			question: "What is the typical size of an int in this lecture?",
			correctAnswer: "32 bit / 4 bytes",
			wrongAnswers: ["16 bit / 2 bytes", "64 bit / 8 bytes", "8 bit / 1 byte"],
		},
		{
			question: "What is the typical size of long and double in this lecture?",
			correctAnswer: "64 bit / 8 bytes",
			wrongAnswers: [
				"32 bit / 4 bytes",
				"128 bit / 16 bytes",
				"16 bit / 2 bytes",
			],
		},
		{
			question: "What does the sizeof operator return?",
			correctAnswer: "Size of operand in bytes (type: size_t)",
			wrongAnswers: [
				"Size of operand in bits",
				"Number of elements in an array",
				"Memory address of the operand",
			],
		},
		{
			question: "What is the output of sizeof('123456')?",
			correctAnswer: "7",
			wrongAnswers: ["6", "8", "12"],
		},
		{
			question: "What is special about sizeof in terms of execution?",
			correctAnswer:
				"It's not a normal function called at runtime - the compiler replaces it with the correct value during translation",
			wrongAnswers: [
				"It's executed at runtime like other functions",
				"It's a macro that expands to assembly code",
				"It queries the operating system for size information",
			],
		},
		{
			question:
				"When you declare 'int a;', what are you doing in terms of memory?",
			correctAnswer: "Reserving sizeof(int) = 4 plots on memory lane",
			wrongAnswers: [
				"Creating a pointer to an integer",
				"Allocating dynamic memory on the heap",
				"Registering a variable name with the compiler",
			],
		},
		{
			question: "What is 'a' in essence when you declare 'int a;'?",
			correctAnswer: "An alias for that memory address",
			wrongAnswers: [
				"A pointer to the memory location",
				"The actual value stored in memory",
				"A reference to the memory block",
			],
		},
		{
			question: "What does &a represent?",
			correctAnswer: "The address where variable a is stored",
			wrongAnswers: [
				"The value stored in variable a",
				"A pointer to variable a's type",
				"The size of variable a",
			],
		},
		{
			question: "What does 'int array[3];' do in terms of memory allocation?",
			correctAnswer: "Buys one block of 3 × 4 = 12 plots (3 × sizeof(int))",
			wrongAnswers: [
				"Creates 3 separate integer variables",
				"Allocates 3 pointers to integers",
				"Reserves 3 bytes of memory",
			],
		},
		{
			question: "Why don't arrays know their size?",
			correctAnswer:
				"They are simply the first address of the memory plots, nothing more",
			wrongAnswers: [
				"The size information is stored separately",
				"Arrays are dynamic by nature",
				"Size information is stored in the last element",
			],
		},
		{
			question: "What does 'array[2]' mean in terms of memory access?",
			correctAnswer:
				"Fetch the starting address of array, move 2 × sizeof(int) to the right, look at the content of the next sizeof(int) bytes",
			wrongAnswers: [
				"Access the second element directly by name",
				"Jump to memory address 2",
				"Get the third pointer in the array",
			],
		},
		{
			question: "Why is array[0] the first element?",
			correctAnswer: "Because it means 0 offset from the start",
			wrongAnswers: [
				"Because arrays are indexed starting from 0 by convention",
				"Because the first element is at address 0",
				"Because it's more efficient for the processor",
			],
		},
		{
			question: "What happens when you access array[4] on an array of size 3?",
			correctAnswer:
				"You are trespassing - accessing memory you have not reserved",
			wrongAnswers: [
				"The program automatically extends the array",
				"You get a null value",
				"The compiler prevents this access",
			],
		},
		{
			question: "What is a SEGFAULT?",
			correctAnswer:
				"Segmentation fault - accessing memory that we have not reserved",
			wrongAnswers: [
				"A syntax error in pointer declaration",
				"A compiler optimization failure",
				"An arithmetic overflow error",
			],
		},
		{
			question: "What is a pointer effectively?",
			correctAnswer: "An address",
			wrongAnswers: [
				"A variable that stores values",
				"A function that returns addresses",
				"A data type for large numbers",
			],
		},
		{
			question: "How do you declare a pointer?",
			correctAnswer: "Just like a normal variable, only with * on the type",
			wrongAnswers: [
				"Using the & symbol before the variable name",
				"Using the ptr keyword",
				"Using square brackets after the type",
			],
		},
		{
			question: "What is important to remember about pointers?",
			correctAnswer: "Pointers are variables! Just different type",
			wrongAnswers: [
				"Pointers are not stored in memory",
				"Pointers cannot be modified",
				"Pointers are only temporary references",
			],
		},
		{
			question: "What does *int_ptr mean when int_ptr is a pointer to int a?",
			correctAnswer:
				"The value of a (dereference operator - the opposite of &)",
			wrongAnswers: [
				"The address of a",
				"A new pointer to a",
				"The size of the integer",
			],
		},
		{
			question: "If variable has type t, what type does &variable have?",
			correctAnswer: "t *",
			wrongAnswers: ["t", "* t", "&t"],
		},
		{
			question: "If variable has type * t, what type does *variable have?",
			correctAnswer: "t",
			wrongAnswers: ["* t", "t *", "**t"],
		},
		{
			question: "What is special about dereferenced pointers?",
			correctAnswer: "Dereferenced pointers can be lvalues!",
			wrongAnswers: [
				"They can only be used for reading",
				"They automatically become null after use",
				"They can only store integer values",
			],
		},
		{
			question: "What does scanf do in terms of pointers?",
			correctAnswer: "scanf writes values to the addresses we give it",
			wrongAnswers: [
				"scanf reads values from pointers",
				"scanf creates new pointers",
				"scanf returns pointer addresses",
			],
		},
		{
			question:
				"What is dangerous about dereferencing an uninitialized pointer?",
			correctAnswer:
				"It points to an arbitrary memory location - very likely trespassing",
			wrongAnswers: [
				"It always causes a compilation error",
				"It automatically initializes to zero",
				"It creates a memory leak",
			],
		},
		{
			question: "What should you do when declaring pointers?",
			correctAnswer: "Either directly assign a value or initialize with NULL",
			wrongAnswers: [
				"Always initialize to zero",
				"Never initialize - let the compiler handle it",
				"Initialize with the & operator",
			],
		},
		{
			question: "What is NULL used to indicate?",
			correctAnswer:
				"The 'absence' of something - a pointer that points to 'nothingness'",
			wrongAnswers: [
				"An empty string",
				"A zero value",
				"An uninitialized variable",
			],
		},
		{
			question:
				"What happens when you try to access a null pointer in most environments?",
			correctAnswer:
				"The program fails immediately and reliably, so you see that you made a mistake",
			wrongAnswers: [
				"The program continues with undefined behavior",
				"The pointer is automatically initialized",
				"A warning is displayed but execution continues",
			],
		},
		{
			question: "What did Tony Hoare call his 'billion-dollar mistake'?",
			correctAnswer: "The invention of the null reference in 1965",
			wrongAnswers: [
				"The creation of pointer arithmetic",
				"The development of dynamic memory allocation",
				"The introduction of the goto statement",
			],
		},
		{
			question:
				"What type of memory allocation have we used so far in the course?",
			correctAnswer:
				"Static allocation - the required memory is put on the stack",
			wrongAnswers: [
				"Dynamic allocation on the heap",
				"Automatic garbage collection",
				"Memory-mapped allocation",
			],
		},
		{
			question: "What is the second area of memory for a program called?",
			correctAnswer: "The heap",
			wrongAnswers: ["The stack", "The cache", "The buffer"],
		},
		{
			question: "What are the two functions used for allocating memory?",
			correctAnswer: "malloc and calloc",
			wrongAnswers: ["alloc and free", "new and delete", "create and destroy"],
		},
		{
			question: "What does malloc take as a parameter?",
			correctAnswer: "Number of bytes that should be allocated",
			wrongAnswers: [
				"Number of elements to allocate",
				"The data type to allocate",
				"The variable name to create",
			],
		},
		{
			question: "What is the state of memory allocated by malloc?",
			correctAnswer:
				"The memory area is not initialized, its contents are arbitrary",
			wrongAnswers: [
				"The memory is initialized to zero",
				"The memory is initialized to null",
				"The memory is initialized to the maximum value for the type",
			],
		},
		{
			question: "What does calloc take as parameters?",
			correctAnswer:
				"Two arguments: Number of elements and size of one element",
			wrongAnswers: [
				"One argument: Total number of bytes",
				"Three arguments: Type, count, and initial value",
				"No arguments - it allocates a default amount",
			],
		},
		{
			question: "What does calloc do to the allocated memory?",
			correctAnswer:
				"Reserves the memory area, initializes it to zero, and returns void pointer",
			wrongAnswers: [
				"Reserves memory but leaves it uninitialized",
				"Initializes memory to null pointers",
				"Initializes memory to random values",
			],
		},
		{
			question: "What is void * (void-pointer)?",
			correctAnswer:
				"Untyped pointer that can be cast to anything (also implicitly)",
			wrongAnswers: [
				"A pointer that points to nothing",
				"A pointer that can only point to void functions",
				"A null pointer",
			],
		},
		{
			question: "What header file provides malloc and calloc?",
			correctAnswer: "stdlib.h",
			wrongAnswers: ["stdio.h", "memory.h", "malloc.h"],
		},
		{
			question: "What do malloc and calloc return if successful?",
			correctAnswer:
				"The starting address of the block of memory you requested",
			wrongAnswers: [
				"The number of bytes allocated",
				"A handle to the memory block",
				"The end address of the allocated block",
			],
		},
		{
			question: "What do malloc and calloc return if unsuccessful?",
			correctAnswer: "NULL (e.g. not enough memory)",
			wrongAnswers: ["Zero", "A negative number", "An error code"],
		},
		{
			question: "Why can you use array[2] on a pointer int *array?",
			correctAnswer:
				"For a pointer, array[2] means: get the starting address, move two blocks to the right, get the content",
			wrongAnswers: [
				"Pointers and arrays are completely different types",
				"The compiler automatically converts pointers to arrays",
				"Array notation only works with malloc'd memory",
			],
		},
		{
			question: "What are *array and array[0] in relation to each other?",
			correctAnswer: "They are exactly the same",
			wrongAnswers: [
				"*array is the pointer, array[0] is the value",
				"*array gives the address, array[0] gives the content",
				"They are different - one is dereferencing, one is indexing",
			],
		},
		{
			question:
				"What function is used to release dynamically allocated memory?",
			correctAnswer: "free(ptr)",
			wrongAnswers: ["delete(ptr)", "release(ptr)", "dealloc(ptr)"],
		},
		{
			question: "What does free(ptr) do to the pointer ptr itself?",
			correctAnswer:
				"It does not modify ptr - ptr still points at the old address",
			wrongAnswers: [
				"It sets ptr to NULL automatically",
				"It makes ptr point to a new location",
				"It deletes the pointer variable",
			],
		},
		{
			question: "What is good practice after calling free(ptr)?",
			correctAnswer: "Also NULL the pointer after free",
			wrongAnswers: [
				"Immediately allocate new memory",
				"Set the pointer to zero",
				"Don't use the pointer variable again",
			],
		},
		{
			question: "What are the four most common sources of error with pointers?",
			correctAnswer:
				"Dereferencing null, forgetting to free, use-after-free, and double-free",
			wrongAnswers: [
				"Wrong type casting, buffer overflow, memory leaks, and syntax errors",
				"Uninitialized pointers, wrong allocation size, missing headers, and compiler bugs",
				"Stack overflow, heap corruption, segmentation faults, and arithmetic errors",
			],
		},
		{
			question:
				"In the rectangular case for multi-dimensional dynamic arrays, where is the jth grade of student i located?",
			correctAnswer: "At position m × i + j",
			wrongAnswers: [
				"At position i × j",
				"At position i + j × m",
				"At position (i + j) × m",
			],
		},
		{
			question:
				"What type would you use for a dynamic 2D array in the general case?",
			correctAnswer: "int **array",
			wrongAnswers: ["int *array[]", "int array[][]", "int ***array"],
		},
		{
			question:
				"In nested allocation, what do you need to do to properly free all memory?",
			correctAnswer:
				"Free each individual array first, then free the array of pointers",
			wrongAnswers: [
				"Just free the main pointer - the rest is automatic",
				"Free in the same order as allocation",
				"Call free() once for each malloc() call in any order",
			],
		},
	],

	7: [
		{
			question:
				"What are the three steps that happen when you write 'int a = 1;'?",
			correctAnswer:
				"Reserve a chunk of memory for int, remember the address for a, store value 1 at this location",
			wrongAnswers: [
				"Create a variable name, assign a type, initialize to zero",
				"Allocate heap memory, create a pointer, set the value",
				"Register with compiler, reserve stack space, copy from constant pool",
			],
		},
		{
			question: "What happens when you write 'a' or 'a = ...'?",
			correctAnswer:
				"Go to the address in memory associated with a, read or write the value at this location",
			wrongAnswers: [
				"Look up the variable name in a symbol table",
				"Access the variable through a pointer indirection",
				"Retrieve the value from the processor register",
			],
		},
		{
			question: "What does '&a' give you?",
			correctAnswer: "The address of a",
			wrongAnswers: [
				"The value stored in a",
				"A reference to variable a",
				"The size of variable a",
			],
		},
		{
			question:
				"What type does 'the address of a' have when a is an int variable?",
			correctAnswer: "int * (address of int)",
			wrongAnswers: [
				"int (same as the variable)",
				"void * (generic pointer)",
				"address_t (address type)",
			],
		},
		{
			question:
				"What are the four steps that happen when you write '*addr' or '*addr = ...'?",
			correctAnswer:
				"Go to address of addr, read the value (an address of int), go to that address, read or write the value at this location",
			wrongAnswers: [
				"Dereference the pointer, check for null, access the memory, return the value",
				"Look up the pointer, validate the address, access the location, perform the operation",
				"Get the pointer value, add offset, access memory, return result",
			],
		},
		{
			question: "What are arrays in relation to pointers?",
			correctAnswer: "Arrays are just pointers",
			wrongAnswers: [
				"Arrays are containers that hold pointers",
				"Arrays are different from pointers but related",
				"Arrays are special data structures with pointer-like behavior",
			],
		},
		{
			question: "What happens when you write 'int array[10];'?",
			correctAnswer:
				"Reserve a chunk of memory for ten int, remember the starting address of this chunk for array",
			wrongAnswers: [
				"Create 10 separate integer variables with consecutive names",
				"Allocate an array object that contains 10 integer pointers",
				"Reserve memory and create an index table for accessing elements",
			],
		},
		{
			question: "What does 'array[2]' mean in terms of memory operations?",
			correctAnswer:
				"Take the address associated with array and increase it by two int, go to this address in memory, read or write the value",
			wrongAnswers: [
				"Look up the second element in the array's index table",
				"Access the third pointer in the array and dereference it",
				"Jump to memory location 2 and read the integer value",
			],
		},
		{
			question:
				"What is the relationship between (&a)[1] and the address 102 when &a ≡ 102?",
			correctAnswer: "(&a)[1] → 102 + 4 (assuming sizeof(int) ≡ 4)",
			wrongAnswers: ["(&a)[1] → 102 + 1", "(&a)[1] → 103", "(&a)[1] → 102 * 2"],
		},
		{
			question:
				"What are the three steps of dynamic memory allocation with malloc/calloc?",
			correctAnswer:
				"You say how much space you need, these functions find a block of that size, you get back a pointer to the starting address",
			wrongAnswers: [
				"Request memory type, allocate from heap, initialize to zero",
				"Specify variable name, reserve memory, return handle to block",
				"Calculate size needed, register with OS, receive memory identifier",
			],
		},
		{
			question: "What does 'free(ptr)' do?",
			correctAnswer: "Frees a previously reserved memory region",
			wrongAnswers: [
				"Sets the pointer to NULL automatically",
				"Zeros out the memory before releasing it",
				"Returns the memory size to the caller",
			],
		},
		{
			question: "What is the NULL pointer?",
			correctAnswer: "A special pointer that points to 'nothing'",
			wrongAnswers: [
				"A pointer that points to memory address zero",
				"An uninitialized pointer variable",
				"A pointer that has been freed but not reset",
			],
		},
		{
			question: "What happens when you dereference a NULL pointer?",
			correctAnswer: "Error (in Java: NullPointerException)",
			wrongAnswers: [
				"Returns zero or empty value",
				"Automatically allocates memory",
				"Causes undefined but safe behavior",
			],
		},
		{
			question:
				"What does setting a pointer to NULL do to the memory block it points to?",
			correctAnswer:
				"Just setting a pointer to NULL does not free the memory block it points to",
			wrongAnswers: [
				"Automatically frees the memory block",
				"Marks the memory block for garbage collection",
				"Zeros out the memory block contents",
			],
		},
		{
			question:
				"What is the main problem with storing an array of points using separate arrays like 'int x[n], y[n];'?",
			correctAnswer: "Data of the same thing is scattered in memory",
			wrongAnswers: [
				"It uses more memory than other approaches",
				"It's slower to access the data",
				"It doesn't work with different data types",
			],
		},
		{
			question:
				"What are structs described as in relation to object-oriented languages?",
			correctAnswer: "Structs are precursors to objects in OO languages",
			wrongAnswers: [
				"Structs are simplified versions of classes",
				"Structs are the same as objects but without methods",
				"Structs are containers for objects",
			],
		},
		{
			question: "What is the correct syntax for declaring a struct?",
			correctAnswer:
				"struct <struct name> { <type 1> <name 1>; <type 2> <name 2>; ... };",
			wrongAnswers: [
				"struct <struct name> ( <type 1> <name 1>; <type 2> <name 2>; ... )",
				"struct { <type 1> <name 1>; <type 2> <name 2>; ... } <struct name>;",
				"<struct name> struct { <type 1> <name 1>; <type 2> <name 2>; ... };",
			],
		},
		{
			question: "What should you not forget when declaring a struct?",
			correctAnswer: "The trailing semi-colon",
			wrongAnswers: [
				"The opening brace",
				"The struct keyword",
				"The member initializers",
			],
		},
		{
			question: "What is the type name when you declare 'struct point p;'?",
			correctAnswer: "struct point, not point",
			wrongAnswers: ["point, not struct point", "struct_point", "point_t"],
		},
		{
			question: "How do you access members of a struct?",
			correctAnswer: "Access each member with .<name>, just like a variable",
			wrongAnswers: [
				"Use -> operator for all member access",
				"Use square brackets like arrays",
				"Use the & operator before the member name",
			],
		},
		{
			question:
				"What is the output of this code: 'struct point p = {1, 2}; struct point q = {.y = 1, .x = 2}; printf(\"%d %d\\n\", q.y, p.y);'?",
			correctAnswer: "1 2",
			wrongAnswers: ["2 1", "1 1", "2 2"],
		},
		{
			question: "What does 'q = p;' do when both are struct variables?",
			correctAnswer:
				"Copy values from p to q, equivalent to q.x = p.x; q.y = p.y;",
			wrongAnswers: [
				"Makes q point to the same memory as p",
				"Swaps the values between p and q",
				"Creates a reference from q to p",
			],
		},
		{
			question:
				"What is the output of this code: 'struct point p = {0, 0}; struct point q = {.y = 1, .x = 1}; q = p; p.x = 3; printf(\"%d %d\\n\", q.x, q.y);'?",
			correctAnswer: "0 0",
			wrongAnswers: ["3 0", "1 1", "3 3"],
		},
		{
			question:
				"Why does the add_point function not modify the original struct when called like 'add_point(p, q);'?",
			correctAnswer:
				"Structs are not pointers! When calling add_point, p and q are copied",
			wrongAnswers: [
				"The function parameters are declared as const",
				"Structs are passed by reference by default",
				"The compiler optimizes away the changes",
			],
		},
		{
			question:
				"What operator is used for 'Dereference + Access member' on struct pointers?",
			correctAnswer: "-> (arrow operator)",
			wrongAnswers: [
				". (dot operator)",
				"* (dereference operator)",
				"& (address operator)",
			],
		},
		{
			question: "What is equivalent to 'a->x'?",
			correctAnswer: "(*a).x",
			wrongAnswers: ["*a.x", "&a.x", "a.x"],
		},
		{
			question: "What is the size of 'struct point { int x; int y; };'?",
			correctAnswer: "2 × sizeof(int) = 8 bytes",
			wrongAnswers: [
				"sizeof(int) = 4 bytes",
				"3 × sizeof(int) = 12 bytes",
				"sizeof(int*) = 8 bytes",
			],
		},
		{
			question:
				"What are the sizes of 'struct onechar { char x; int y; };' and 'struct twochar { char x; char y; };'?",
			correctAnswer:
				"8 and 2 - The compiler may pad memory regions if more suitable",
			wrongAnswers: [
				"5 and 2 - Sum of member sizes",
				"4 and 2 - Aligned to int boundaries",
				"8 and 8 - All structs padded to same size",
			],
		},
		{
			question:
				"What should you always use instead of computing struct size manually?",
			correctAnswer:
				"Always use sizeof(struct ...), do not compute it manually",
			wrongAnswers: [
				"Use a size calculation function",
				"Sum the sizes of all members",
				"Use the compiler's size estimation",
			],
		},
		{
			question: "Can you nest structs?",
			correctAnswer: "Yes, we can nest structs",
			wrongAnswers: [
				"No, structs cannot contain other structs",
				"Only if the nested struct is declared first",
				"Only up to 3 levels of nesting",
			],
		},
		{
			question:
				"How do you access array members in a struct with fixed size arrays?",
			correctAnswer: "Access with . and []",
			wrongAnswers: [
				"Access with -> and []",
				"Access with . and ()",
				"Access with * and []",
			],
		},
		{
			question:
				"What does a struct with pointer array members mean in terms of memory layout?",
			correctAnswer: "Parts are on stack and parts on heap!",
			wrongAnswers: [
				"Everything is stored on the stack",
				"Everything is stored on the heap",
				"Memory is automatically managed",
			],
		},
		{
			question: "What is a flexible array member (FAM)?",
			correctAnswer:
				"The last member declared as 'int data[];' - every variable is one block of continuous memory but dynamically sized",
			wrongAnswers: [
				"An array that can change its type at runtime",
				"A pointer that can point to arrays of different sizes",
				"An array that automatically grows when needed",
			],
		},
		{
			question:
				"Where is a struct with flexible array member completely located?",
			correctAnswer: "Completely on the heap",
			wrongAnswers: [
				"Completely on the stack",
				"Split between stack and heap",
				"In a special flexible memory region",
			],
		},
		{
			question:
				"What does sizeof report for a struct with flexible array member?",
			correctAnswer: "sizeof reports size assuming that the FAM has size 0",
			wrongAnswers: [
				"sizeof includes the full array size",
				"sizeof returns -1 for flexible structs",
				"sizeof calculates the maximum possible size",
			],
		},
		{
			question:
				"Can you create a struct variable with flexible array member directly?",
			correctAnswer:
				"No, we can only create struct pointers (struct i_array *)",
			wrongAnswers: [
				"Yes, you can create them like regular structs",
				"Only if you specify the size in the declaration",
				"Yes, but only on the stack",
			],
		},
		{
			question: "What are the advantages of pointer-based array members?",
			correctAnswer:
				"(Somewhat) Easier to use, re-allocate without changing the object, can be statically initialized, well-behaved in arrays",
			wrongAnswers: [
				"Uses less memory, faster access, automatic memory management",
				"Better cache performance, no fragmentation, type safety",
				"Simpler syntax, automatic bounds checking, garbage collection",
			],
		},
		{
			question: "What are the advantages of flexible array members?",
			correctAnswer:
				"Does not fragment memory, no additional allocation, no additional dereference when accessing",
			wrongAnswers: [
				"Easier to use, automatic memory management, better type safety",
				"Can be statically initialized, works with all compilers, simpler syntax",
				"Faster allocation, automatic resizing, better debugging support",
			],
		},
		{
			question:
				"In most cases, which approach is sufficient for array members in structs?",
			correctAnswer: "Pointer-based is sufficient",
			wrongAnswers: [
				"Flexible array members are preferred",
				"Fixed size arrays are best",
				"It depends on the compiler",
			],
		},
		{
			question:
				"What are constructor and destructor functions used for with structs?",
			correctAnswer:
				"Creating and freeing a struct appropriately - constructor creates, destructor frees",
			wrongAnswers: [
				"Initializing and validating struct data",
				"Converting between different struct types",
				"Copying and comparing struct instances",
			],
		},
		{
			question:
				"What is the relationship between constructors/destructors and object-oriented languages?",
			correctAnswer: "Similar concepts exist in object-oriented languages!",
			wrongAnswers: [
				"These concepts are unique to C",
				"Object-oriented languages don't need these",
				"These are more advanced than OO concepts",
			],
		},
		{
			question:
				"What is the advantage of keeping allocation logic with struct definition?",
			correctAnswer: "Keep definition and logic for allocation together",
			wrongAnswers: [
				"Makes the code run faster",
				"Reduces memory usage",
				"Prevents memory leaks automatically",
			],
		},
		{
			question:
				"What is the difference between initializer/de-initializer and constructor/destructor?",
			correctAnswer:
				"Constructor/Destructor also allocates memory for struct itself",
			wrongAnswers: [
				"Initializer/de-initializer work only with pointers",
				"Constructor/destructor are called automatically",
				"Initializer/de-initializer are for stack objects only",
			],
		},
		{
			question: "What is the pro of using initializer/de-initializer approach?",
			correctAnswer: "Can re-use p / use p on the stack",
			wrongAnswers: [
				"Automatic memory management",
				"Better performance",
				"Type safety guarantees",
			],
		},
		{
			question: "What is the con of using initializer/de-initializer approach?",
			correctAnswer: "Need to remember to free p if on heap",
			wrongAnswers: [
				"Cannot use the struct on the stack",
				"Requires more memory",
				"Slower execution time",
			],
		},
		{
			question: "What is the relationship between constructor and initializer?",
			correctAnswer: "Constructor = Allocate memory + Initializer",
			wrongAnswers: [
				"Initializer = Constructor + Memory allocation",
				"They are completely different concepts",
				"Constructor replaces the need for initializer",
			],
		},
		{
			question:
				"What is important when defining both constructor/destructor and initializer/de-initializer?",
			correctAnswer: "Consistent naming is important to not mix things up!",
			wrongAnswers: [
				"They must be in the same source file",
				"The constructor must call the initializer",
				"They must have the same return type",
			],
		},
		{
			question: "What is the syntax for typedef?",
			correctAnswer: "typedef <existing type> <alias name>",
			wrongAnswers: [
				"typedef <alias name> <existing type>",
				"type <existing type> as <alias name>",
				"alias <alias name> = <existing type>",
			],
		},
		{
			question: "What does typedef do?",
			correctAnswer: "Creates a type alias for existing type",
			wrongAnswers: [
				"Creates a new data type",
				"Defines a macro for type names",
				"Declares a new struct",
			],
		},
		{
			question: "What is common naming convention for typedef aliases?",
			correctAnswer: "Common to use ..._t as names for types",
			wrongAnswers: [
				"Use all uppercase names",
				"Prefix with 'type_'",
				"Use camelCase notation",
			],
		},
		{
			question: "What is the specific syntax for typedef with structs?",
			correctAnswer: "typedef struct <name> { struct body } <type name>;",
			wrongAnswers: [
				"struct typedef <name> { struct body } <type name>;",
				"typedef <type name> struct <name> { struct body };",
				"struct <name> typedef { struct body } <type name>;",
			],
		},
		{
			question: "What should you be careful about when using typedef?",
			correctAnswer: "Do not forcefully abbreviate everything!",
			wrongAnswers: [
				"Always use typedef for all types",
				"Never use typedef with pointers",
				"Only use typedef with structs",
			],
		},
		{
			question:
				"What is a different usage of typedef besides reducing clutter?",
			correctAnswer: "Give semantic meaning to types",
			wrongAnswers: [
				"Create new data types",
				"Improve runtime performance",
				"Enable generic programming",
			],
		},
		{
			question:
				"What is important to note about semantic types created with typedef?",
			correctAnswer: "To the compiler they all look the same!",
			wrongAnswers: [
				"The compiler enforces type safety between them",
				"They have different runtime representations",
				"They cannot be assigned to each other",
			],
		},
		{
			question:
				"Is the assignment 'p = t;' allowed when 'typedef double temperature_t; typedef double pressure_t; temperature_t t = 20.1; pressure_t p = 1021.2;'?",
			correctAnswer: "Yes, it's allowed",
			wrongAnswers: [
				"No, it causes a compilation error",
				"Only with explicit casting",
				"Only if they have the same value",
			],
		},
	],

	8: [
		{
			question: "What is a data structure according to the lecture?",
			correctAnswer: "A way to store, organize, and manipulate data",
			wrongAnswers: [
				"A programming language feature",
				"A type of algorithm",
				"A memory allocation technique",
			],
		},
		{
			question: "What are arrays particularly good at?",
			correctAnswer:
				"Fast access by index and fast iteration over all stored elements",
			wrongAnswers: [
				"Checking if a given element is in the array",
				"Inserting elements in the middle",
				"Keeping elements automatically sorted",
			],
		},
		{
			question: "What are arrays not so good at according to the lecture?",
			correctAnswer:
				"Checking if a given element is in the array and inserting additional elements in the middle",
			wrongAnswers: [
				"Storing a fixed amount of data",
				"Fast access by index",
				"Fast iteration over all elements",
			],
		},
		{
			question:
				"What is the inherent characteristic of arrays mentioned in the lecture?",
			correctAnswer: "Arrays are inherently linear",
			wrongAnswers: [
				"Arrays are inherently hierarchical",
				"Arrays are inherently circular",
				"Arrays are inherently random",
			],
		},
		{
			question:
				"What is the main problem with allocating a very large array (like 1048576 elements) from the start?",
			correctAnswer:
				"It doesn't seem clever and will break if a very eager user exceeds it",
			wrongAnswers: [
				"It uses too much CPU time",
				"It's not supported by the compiler",
				"It makes the code unreadable",
			],
		},
		{
			question:
				"What is the problem with increasing array size by +1 each time?",
			correctAnswer:
				"It will be very slow because you need to copy all existing elements for each new element",
			wrongAnswers: [
				"It uses too much memory",
				"It causes compilation errors",
				"It doesn't work with realloc",
			],
		},
		{
			question:
				"What is the optimal approach for resizing arrays according to the lecture?",
			correctAnswer: "Double the size each time you need to resize",
			wrongAnswers: [
				"Increase by a fixed amount of 10",
				"Increase by +1 each time",
				"Triple the size each time",
			],
		},
		{
			question:
				"What three pieces of data does the int_list struct need to store?",
			correctAnswer:
				"Data itself (int *array), the size of the array (int length), and how many elements are currently stored (int free_index)",
			wrongAnswers: [
				"Only the data array and its size",
				"The data, maximum capacity, and current position",
				"The data, creation time, and access count",
			],
		},
		{
			question:
				"What is the initial size chosen for the array list in the lecture example?",
			correctAnswer: "8",
			wrongAnswers: ["16", "4", "1024"],
		},
		{
			question:
				"Why is the length field not considered in the is_equal function for array lists?",
			correctAnswer:
				"Because length represents allocated space, not actual content",
			wrongAnswers: [
				"Because length is always the same",
				"Because it would make comparison too slow",
				"Because it's a private field",
			],
		},
		{
			question:
				"What happens when you check a_list == b_list for two different array lists?",
			correctAnswer:
				"It returns false because these are two different addresses",
			wrongAnswers: [
				"It returns true if they have the same content",
				"It causes a compilation error",
				"It compares the actual list contents",
			],
		},
		{
			question:
				"What is the difference between referential equality and structural equality?",
			correctAnswer:
				"Referential equality means same reference/address, structural equality means same structure/content",
			wrongAnswers: [
				"Referential equality is faster, structural equality is more accurate",
				"Referential equality compares content, structural equality compares addresses",
				"There is no difference between them",
			],
		},
		{
			question:
				"What is the German equivalent distinction mentioned for referential vs structural equality?",
			correctAnswer: "dasselbe vs das gleiche",
			wrongAnswers: [
				"derselbe vs der gleiche",
				"dieselbe vs die gleiche",
				"das eine vs das andere",
			],
		},
		{
			question: "What is shallow copy?",
			correctAnswer: "Only copying the address, internals are still shared",
			wrongAnswers: [
				"Copying only the first few elements",
				"Copying without proper memory allocation",
				"Copying with reduced precision",
			],
		},
		{
			question:
				"What is the problem with the first version of copy_list function shown?",
			correctAnswer:
				"The data array is only copied shallowly, so changes to one list's data will be visible in the copy",
			wrongAnswers: [
				"It doesn't allocate enough memory",
				"It has a memory leak",
				"It doesn't copy the length field",
			],
		},
		{
			question: "What does LIFO stand for in the context of stacks?",
			correctAnswer: "Last In First Out",
			wrongAnswers: [
				"Last In First Off",
				"Low In First Out",
				"Line In First Out",
			],
		},
		{
			question:
				"What are the core operations of a stack according to the lecture?",
			correctAnswer:
				"push (add element on top) and pop (get and remove top-most element)",
			wrongAnswers: [
				"insert and delete",
				"enqueue and dequeue",
				"add and remove",
			],
		},
		{
			question:
				"What additional stack operations are mentioned besides push and pop?",
			correctAnswer:
				"peek (get top-most element), size (get total number of elements), and is_empty (check if stack is empty)",
			wrongAnswers: [
				"find, sort, and reverse",
				"clear, copy, and compare",
				"rotate, shift, and swap",
			],
		},
		{
			question:
				"What is the main advantage of using a circular buffer for queues?",
			correctAnswer:
				"It avoids keeping all the processed data and prevents costly regular re-allocation",
			wrongAnswers: [
				"It's easier to implement",
				"It uses less memory initially",
				"It's faster for small datasets",
			],
		},
		{
			question:
				"In the circular queue implementation, what does it mean when h == t?",
			correctAnswer: "The queue is empty",
			wrongAnswers: [
				"The queue is full",
				"There's an error",
				"The queue needs resizing",
			],
		},
		{
			question: "Why does the circular queue keep one empty element?",
			correctAnswer: "To distinguish empty from full state",
			wrongAnswers: [
				"To prevent buffer overflow",
				"To improve performance",
				"To simplify the implementation",
			],
		},
		{
			question: "What does the C preprocessor do?",
			correctAnswer: "Modifies source files before actual compilation happens",
			wrongAnswers: [
				"Optimizes the compiled code",
				"Checks for syntax errors",
				"Links object files together",
			],
		},
		{
			question: "What do lines starting with # indicate?",
			correctAnswer: "Pre-processor statements",
			wrongAnswers: ["Comments", "Compiler directives", "Debug statements"],
		},
		{
			question:
				'What is the difference between #include <stdio.h> and #include "myfunctions.h"?',
			correctAnswer:
				'<> indicates compiler standard header file, "" indicates user file from given path',
			wrongAnswers: [
				'<> is for system files, "" is for local files in same directory only',
				'<> is faster, "" is more flexible',
				'<> is mandatory, "" is optional',
			],
		},
		{
			question: "What effectively happens when you use #include?",
			correctAnswer:
				"It pulls another file into the source, basically like manually copy-pasting the file there",
			wrongAnswers: [
				"It creates a reference to another file",
				"It compiles the included file separately",
				"It creates a symbolic link to the file",
			],
		},
		{
			question:
				"Why do we get a 'redefinition of print' error in the multiple includes example?",
			correctAnswer:
				"Because the preprocessor includes util.h multiple times, creating multiple definitions of the same function",
			wrongAnswers: [
				"Because the function is declared in the wrong file",
				"Because the function signature is incorrect",
				"Because there's a circular dependency",
			],
		},
		{
			question: "What is the conventional naming pattern for include guards?",
			correctAnswer: "_FILENAME_H_",
			wrongAnswers: ["FILENAME_GUARD", "__FILENAME__", "GUARD_FILENAME_H"],
		},
		{
			question: "What does #ifndef test for?",
			correctAnswer: "Whether a macro has NOT been defined already",
			wrongAnswers: [
				"Whether a file has not been included",
				"Whether a variable is not null",
				"Whether a function is not declared",
			],
		},
		{
			question:
				"What is the most important usage of conditional compilation mentioned in the lecture?",
			correctAnswer: "Platform specific compilation",
			wrongAnswers: [
				"Code optimization",
				"Error handling",
				"Memory management",
			],
		},
		{
			question: "What are examples of platform-specific macros mentioned?",
			correctAnswer: "_WIN32, _WIN64, __linux__",
			wrongAnswers: [
				"WINDOWS, MAC, LINUX",
				"WIN, OSX, UNIX",
				"PLATFORM_WIN, PLATFORM_MAC, PLATFORM_LINUX",
			],
		},
		{
			question: "What macro does DOMjudge define when compiling?",
			correctAnswer: "DOMJUDGE",
			wrongAnswers: ["DOM_JUDGE", "JUDGE_DOM", "ONLINE_JUDGE"],
		},
		{
			question:
				"How can you wrap local code to exclude it from DOMjudge compilation?",
			correctAnswer: "Wrap it in #ifndef DOMJUDGE and #endif",
			wrongAnswers: [
				"Wrap it in #ifdef LOCAL and #endif",
				"Wrap it in #ifndef ONLINE and #endif",
				"Wrap it in #ifdef DEBUG and #endif",
			],
		},
		{
			question:
				"What is the result of SQUARE(2+3) if SQUARE(x) is defined as x*x?",
			correctAnswer: "11 (because it expands to 2+3*2+3)",
			wrongAnswers: [
				"25 (because (2+3)*(2+3))",
				"10 (because 2*5)",
				"8 (because 2*3+2)",
			],
		},
		{
			question:
				"What is the problem with SQUARE(x++) when SQUARE(x) is defined as x*x?",
			correctAnswer: "It expands to x++ * x++, which increments x twice",
			wrongAnswers: [
				"It causes a compilation error",
				"It returns the wrong mathematical result",
				"It creates an infinite loop",
			],
		},
		{
			question:
				"What gcc flag can you use to see the file after preprocessing?",
			correctAnswer: "-E",
			wrongAnswers: ["-P", "-pre", "-preprocess"],
		},
		{
			question: "What is the lecture's recommendation for using macros?",
			correctAnswer: "Stick to guards, simple constants, and debugging",
			wrongAnswers: [
				"Use them extensively for performance",
				"Avoid them completely",
				"Only use them for mathematical operations",
			],
		},
		{
			question:
				"What is described as 'a good way to make your code completely unreadable'?",
			correctAnswer: "Complex macros with for-loops and complex #if statements",
			wrongAnswers: [
				"Using too many include files",
				"Not using include guards",
				"Mixing different programming languages",
			],
		},
		{
			question: "Why is the C preprocessor described as 'dumb'?",
			correctAnswer:
				"Because it is a pure text processor that doesn't care about C in particular",
			wrongAnswers: [
				"Because it has limited functionality",
				"Because it's slow",
				"Because it produces errors frequently",
			],
		},
		{
			question:
				"Where else besides C is the C preprocessor used according to the lecture?",
			correctAnswer: "Java",
			wrongAnswers: ["Python", "JavaScript", "PHP"],
		},
		{
			question:
				"What is the difference between choosing the right data structure vs the wrong one in terms of runtime?",
			correctAnswer: "Several hours vs. a few seconds",
			wrongAnswers: [
				"A few minutes vs. a few seconds",
				"Several days vs. several hours",
				"Twice as fast vs. half as fast",
			],
		},
		{
			question:
				"Why do tech companies love to ask about data structures in interviews according to the lecture?",
			correctAnswer:
				"Because data structures are a super interesting area of research by its own",
			wrongAnswers: [
				"Because they're the hardest topic to understand",
				"Because they're used in every program",
				"Because they test mathematical skills",
			],
		},
		{
			question: "What does realloc do according to the lecture?",
			correctAnswer:
				"It frees the old pointer and copies the data to grow memory region if possible",
			wrongAnswers: [
				"It only allocates new memory without copying",
				"It only frees the old memory",
				"It compresses the existing data",
			],
		},
		{
			question:
				"What alternative to memcpy is mentioned for copying array data?",
			correctAnswer: "A for loop to copy each element individually",
			wrongAnswers: [
				"strcpy function",
				"Direct assignment",
				"memmove function",
			],
		},
	],

	9: [
		{
			question:
				"What do you find when you open stdio.h according to the lecture?",
			correctAnswer: "There is nothing (no actual code) there",
			wrongAnswers: [
				"Complete implementation of printf",
				"Only comments and documentation",
				"Binary code for standard functions",
			],
		},
		{
			question: "What does C separate according to the lecture?",
			correctAnswer: "Declaration and implementation",
			wrongAnswers: [
				"Compilation and execution",
				"Variables and functions",
				"Headers and libraries",
			],
		},
		{
			question: "What do header files typically contain?",
			correctAnswer:
				"Declarations of what is provided, not how it is implemented",
			wrongAnswers: [
				"Complete source code implementation",
				"Only variable definitions",
				"Compiled binary code",
			],
		},
		{
			question: "What does stdio.h contain according to the example?",
			correctAnswer: "Only declaration of printf, not its source code",
			wrongAnswers: [
				"The complete implementation of printf",
				"Only comments about printf",
				"Binary code for printf",
			],
		},
		{
			question: "What should list.h provide according to the lecture?",
			correctAnswer: "The functions, but not the implementation",
			wrongAnswers: [
				"Only the struct definition",
				"Complete implementation details",
				"Only documentation",
			],
		},
		{
			question:
				"What is the OOP equivalent of the header/implementation separation?",
			correctAnswer: "Interface vs. class",
			wrongAnswers: [
				"Public vs. private",
				"Abstract vs. concrete",
				"Static vs. dynamic",
			],
		},
		{
			question:
				"What does the example list.h header file contain for the struct?",
			correctAnswer: "Only typedef our list type – No internals",
			wrongAnswers: [
				"Complete struct definition with all fields",
				"Only the struct name",
				"Implementation of all methods",
			],
		},
		{
			question:
				"What is the important principle stated about header and source files?",
			correctAnswer: "Header files declare what, source files declare how",
			wrongAnswers: [
				"Header files declare how, source files declare what",
				"Both declare the same thing",
				"Header files are optional",
			],
		},
		{
			question: "What does #include do according to the lecture?",
			correctAnswer: "Just means copy-paste that file here",
			wrongAnswers: [
				"Creates a reference to another file",
				"Compiles the included file",
				"Links to external libraries",
			],
		},
		{
			question:
				"What error do you get when you compile with gcc main.c if main.c only includes the header?",
			correctAnswer: "undefined reference to create_list",
			wrongAnswers: [
				"syntax error in main function",
				"header file not found",
				"compilation successful but no output",
			],
		},
		{
			question:
				"What does writing a function definition like int_list_t *create_list(); do?",
			correctAnswer: "Promise an implementation",
			wrongAnswers: [
				"Provide the implementation",
				"Create a macro",
				"Define a variable",
			],
		},
		{
			question:
				"What is the dedicated step for connecting names with implementations?",
			correctAnswer: "Linking",
			wrongAnswers: ["Compiling", "Preprocessing", "Assembly"],
		},
		{
			question:
				"What are the four stages of compilation mentioned in the lecture?",
			correctAnswer: "Preprocessing, Compiling, Assembly, Linking",
			wrongAnswers: [
				"Preprocessing, Compiling, Linking, Execution",
				"Parsing, Compiling, Assembly, Linking",
				"Preprocessing, Optimization, Assembly, Linking",
			],
		},
		{
			question: "What does gcc main.c do according to the lecture?",
			correctAnswer: "Does all compilation stages in one",
			wrongAnswers: [
				"Only preprocesses the file",
				"Only compiles to assembly",
				"Only links object files",
			],
		},
		{
			question: "What does the -c option in gcc do?",
			correctAnswer: "Only compile (i.e. produce object code)",
			wrongAnswers: [
				"Only preprocess the file",
				"Create a complete executable",
				"Check syntax only",
			],
		},
		{
			question: "What does gcc -c list.c produce?",
			correctAnswer: "list.o",
			wrongAnswers: ["list.exe", "list.out", "list.obj"],
		},
		{
			question: "What are .o files?",
			correctAnswer: "Object files (program in the language of the processor)",
			wrongAnswers: [
				"Original source files",
				"Output executable files",
				"Optional configuration files",
			],
		},
		{
			question: "What tool lets you inspect object files?",
			correctAnswer: "objdump",
			wrongAnswers: ["objview", "objinfo", "objread"],
		},
		{
			question: "What flag do you use with objdump to print the symbols?",
			correctAnswer: "-t",
			wrongAnswers: ["-s", "-p", "-d"],
		},
		{
			question: "What does *UND* mean in objdump output?",
			correctAnswer: "A symbol is used but UNDefined",
			wrongAnswers: [
				"A symbol is undefined but not used",
				"A symbol is under development",
				"A symbol is universally defined",
			],
		},
		{
			question: "What command links object files together into an executable?",
			correctAnswer: "gcc -o <target> <list of object files>",
			wrongAnswers: [
				"gcc -l <target> <list of object files>",
				"gcc -link <target> <list of object files>",
				"gcc -merge <target> <list of object files>",
			],
		},
		{
			question: "What example command links main.o and list.o together?",
			correctAnswer: "gcc -o main main.o list.o",
			wrongAnswers: [
				"gcc -link main main.o list.o",
				"gcc -merge main main.o list.o",
				"gcc -combine main main.o list.o",
			],
		},
		{
			question: "What are static libraries?",
			correctAnswer: "Collections of .o files",
			wrongAnswers: [
				"Collections of .c files",
				"Collections of .h files",
				"Single executable files",
			],
		},
		{
			question: "What file extension do static libraries have?",
			correctAnswer: ".a",
			wrongAnswers: [".lib", ".so", ".dll"],
		},
		{
			question:
				"Where can you find many static libraries according to the lecture?",
			correctAnswer: "/usr/lib/x86_64-linux-gnu/",
			wrongAnswers: ["/usr/local/lib/", "/lib/x86_64/", "/usr/share/lib/"],
		},
		{
			question:
				'By default, where does gcc search for user files when using #include "file.h"?',
			correctAnswer: "Current directory",
			wrongAnswers: [
				"System include directory",
				"User home directory",
				"All subdirectories",
			],
		},
		{
			question:
				"What flag adds additional folders for gcc to search for header files?",
			correctAnswer: "-I<path>",
			wrongAnswers: ["-L<path>", "-include<path>", "-search<path>"],
		},
		{
			question: "What command creates a static library?",
			correctAnswer: "ar -rcs <library name>.a <list of .o files>",
			wrongAnswers: [
				"gcc -lib <library name>.a <list of .o files>",
				"ld -static <library name>.a <list of .o files>",
				"lib -create <library name>.a <list of .o files>",
			],
		},
		{
			question: "What is an example command for creating liblist.a?",
			correctAnswer: "ar -rcs liblist.a list.o helper.o",
			wrongAnswers: [
				"gcc -lib liblist.a list.o helper.o",
				"ar -create liblist.a list.o helper.o",
				"lib -make liblist.a list.o helper.o",
			],
		},
		{
			question: "What does -l<name> specify in gcc?",
			correctAnswer: "To search for lib<name>.a",
			wrongAnswers: [
				"To search for <name>.a",
				"To search for <name>.lib",
				"To link with <name>.o",
			],
		},
		{
			question: "What does -L<path> specify in gcc?",
			correctAnswer: "To search for static libraries in <path>",
			wrongAnswers: [
				"To search for header files in <path>",
				"To link with libraries in <path>",
				"To output libraries to <path>",
			],
		},
		{
			question: "What must static library names always start with?",
			correctAnswer: "lib",
			wrongAnswers: ["static", "archive", "obj"],
		},
		{
			question: "What are the two types of linking mentioned in the lecture?",
			correctAnswer: "Compile-time/static linking and Dynamic/Shared libraries",
			wrongAnswers: [
				"Static linking and Runtime linking",
				"Internal linking and External linking",
				"Local linking and Global linking",
			],
		},
		{
			question:
				"What file extensions are mentioned for dynamic/shared libraries?",
			correctAnswer: ".dll and .so",
			wrongAnswers: [".lib and .a", ".dyn and .shared", ".link and .dynamic"],
		},
		{
			question: "What does .dll stand for?",
			correctAnswer: "Dynamic-Link Library",
			wrongAnswers: [
				"Dynamic Library Link",
				"Direct Link Library",
				"Dynamic Load Library",
			],
		},
		{
			question: "What does .so stand for?",
			correctAnswer: "Shared Object",
			wrongAnswers: ["System Object", "Static Object", "Source Object"],
		},
		{
			question:
				"What is the problem called when two programs need different versions of the same library?",
			correctAnswer: "dependency hell",
			wrongAnswers: [
				"version conflict",
				"library chaos",
				"compatibility crisis",
			],
		},
		{
			question: "What is a makefile compared to in the lecture?",
			correctAnswer: "A cook-book",
			wrongAnswers: ["A recipe card", "A shopping list", "A menu"],
		},
		{
			question: "What are the three components each makefile target has?",
			correctAnswer:
				"A name, prerequisites, and a recipe (list of commands to execute)",
			wrongAnswers: [
				"A name, dependencies, and output files",
				"A name, inputs, and compilation flags",
				"A name, sources, and build directory",
			],
		},
		{
			question: "What is the typical name for a makefile?",
			correctAnswer: "Makefile",
			wrongAnswers: ["makefile.txt", "build.make", "project.mk"],
		},
		{
			question: "What must be used for indentation in makefile commands?",
			correctAnswer: "Tab, not space",
			wrongAnswers: ["4 spaces", "2 spaces", "Either tab or spaces"],
		},
		{
			question: "What happens when you omit @ in front of a makefile command?",
			correctAnswer: "Command itself is printed",
			wrongAnswers: [
				"Command fails to execute",
				"Command runs in background",
				"Command runs with elevated privileges",
			],
		},
		{
			question:
				"What happens when you just write 'make' without specifying a target?",
			correctAnswer: "The first target is run",
			wrongAnswers: [
				"All targets are run",
				"An error occurs",
				"The last target is run",
			],
		},
		{
			question:
				"What is the common practice for the first target in a makefile?",
			correctAnswer: "Put target all first",
			wrongAnswers: [
				"Put target main first",
				"Put target build first",
				"Put target default first",
			],
		},
		{
			question: "When does make NOT need to cook a target file again?",
			correctAnswer: "If target file exists and is newer than all dependencies",
			wrongAnswers: [
				"If the target file exists regardless of age",
				"If all dependencies exist",
				"If the makefile hasn't changed",
			],
		},
		{
			question:
				"What are some common makefile variables mentioned in the lecture?",
			correctAnswer: "CC, INC_FLAGS, CPPFLAGS, CFLAGS, LDFLAGS, LOADLIBES",
			wrongAnswers: [
				"COMPILER, HEADERS, FLAGS, LINKER",
				"GCC, INCLUDE, COMPILE, LINK",
				"BUILD, SOURCE, TARGET, OUTPUT",
			],
		},
		{
			question: "What does CC stand for in makefiles?",
			correctAnswer: "C Compiler",
			wrongAnswers: ["Code Compiler", "C Code", "Compile Command"],
		},
		{
			question: "What does INC_FLAGS stand for in makefiles?",
			correctAnswer: "Flags related to including headers",
			wrongAnswers: [
				"Include directory flags",
				"Input compilation flags",
				"Internal configuration flags",
			],
		},
		{
			question: "What does CPPFLAGS stand for in makefiles?",
			correctAnswer: "C PreProcessor flags (NOT for C++!)",
			wrongAnswers: [
				"C++ Preprocessor flags",
				"C Plus Plus flags",
				"C Project Processor flags",
			],
		},
		{
			question: "What does CXX represent in makefiles?",
			correctAnswer: "C++ compiler (usually g++)",
			wrongAnswers: [
				"C extension compiler",
				"Cross compiler",
				"C extra compiler",
			],
		},
		{
			question: "Why is CPP in CPPFLAGS not for C++?",
			correctAnswer: "Make is older than C++ (1976 vs. 1985)",
			wrongAnswers: [
				"C++ uses different preprocessing",
				"It's a naming convention",
				"CPP stands for something else",
			],
		},
		{
			question: "What symbol is used for line comments in makefiles?",
			correctAnswer: "#",
			wrongAnswers: ["//", "/*", "--"],
		},
		{
			question:
				"How should targets that are not files be declared in makefiles?",
			correctAnswer: "Should be declared phony with .PHONY: all clean",
			wrongAnswers: [
				"Should be declared virtual with .VIRTUAL:",
				"Should be declared fake with .FAKE:",
				"Should be declared abstract with .ABSTRACT:",
			],
		},
		{
			question: "What implicit rule does make have for main.o?",
			correctAnswer:
				"main.o implicitly built from main.c using $(CC) $(CPPFLAGS) $(CFLAGS) -c main.c -o main.o",
			wrongAnswers: [
				"main.o built from main.cpp using g++",
				"main.o built from main.s using assembler",
				"main.o built from main.h using header compiler",
			],
		},
		{
			question: "What quote is given about make and C compilation?",
			correctAnswer:
				"Make loves C compilation. And every time it expresses its love, things get confusing",
			wrongAnswers: [
				"Make and C are a perfect match for compilation",
				"Make simplifies C compilation significantly",
				"Make was designed specifically for C compilation",
			],
		},
		{
			question:
				"What tools are mentioned that generate Makefiles from a higher-level language?",
			correctAnswer: "automake",
			wrongAnswers: ["cmake", "makegen", "autobuild"],
		},
		{
			question: "What alternative build systems are mentioned besides make?",
			correctAnswer: "Cmake, meson",
			wrongAnswers: ["Gradle, Maven", "Ant, Bazel", "Ninja, Buck"],
		},
		{
			question: "What is make described as in terms of danger?",
			correctAnswer:
				"Like C, Makefiles can be very cool, but dangerous – don't overdo it",
			wrongAnswers: [
				"Makefiles are always safe to use",
				"Makefiles are more dangerous than C",
				"Makefiles should be avoided completely",
			],
		},
		{
			question: "Is make bound to C according to the lecture?",
			correctAnswer: "Make is not bound to C! Can use it for other things, too",
			wrongAnswers: [
				"Make is specifically designed only for C",
				"Make only works with C and C++",
				"Make requires C compiler to function",
			],
		},
	],

	10: [
		{
			question: "What is Git described as in the lecture?",
			correctAnswer: "A distributed version control system",
			wrongAnswers: [
				"A centralized version control system",
				"A file backup system",
				"A programming language",
			],
		},
		{
			question: "What is the primary purpose of version control?",
			correctAnswer:
				"Record changes to files over time and allow switching between versions",
			wrongAnswers: [
				"Compile source code into executables",
				"Optimize code performance",
				"Debug programming errors",
			],
		},
		{
			question: "What does Git track according to the lecture?",
			correctAnswer: "Changes made by you and others",
			wrongAnswers: [
				"Only your personal changes",
				"Only compilation errors",
				"Only file sizes",
			],
		},
		{
			question: "What is a repository in Git?",
			correctAnswer: "Basically the project folder, containing all files",
			wrongAnswers: [
				"A single file being tracked",
				"The Git installation directory",
				"A remote server location",
			],
		},
		{
			question: "What does Git call specific snapshots in time?",
			correctAnswer: "commit",
			wrongAnswers: ["snapshot", "checkpoint", "savepoint"],
		},
		{
			question: "How many levels does Git have where things are happening?",
			correctAnswer: "Four levels",
			wrongAnswers: ["Three levels", "Five levels", "Two levels"],
		},
		{
			question: "What are the four levels of Git?",
			correctAnswer:
				"Working directory, Staging area, Local repository, Remote repository",
			wrongAnswers: [
				"Edit, Stage, Commit, Deploy",
				"Local, Remote, Branch, Merge",
				"Create, Modify, Delete, Sync",
			],
		},
		{
			question: "What is the working directory in Git?",
			correctAnswer: "Where you are doing things",
			wrongAnswers: [
				"Where Git stores its configuration",
				"Where commits are permanently stored",
				"Where remote repositories are located",
			],
		},
		{
			question: "What is the staging area in Git?",
			correctAnswer: "All changes marked to be remembered",
			wrongAnswers: [
				"Where files are temporarily stored",
				"The remote repository location",
				"Where Git commands are executed",
			],
		},
		{
			question: "What is the local repository in Git?",
			correctAnswer: "The locally stored complete history of commits",
			wrongAnswers: [
				"The current working files",
				"Files ready to be committed",
				"The remote server copy",
			],
		},
		{
			question: "What is the remote repository in Git?",
			correctAnswer: "Repositories on other machines",
			wrongAnswers: [
				"The local backup copy",
				"The staging area copy",
				"The working directory backup",
			],
		},
		{
			question:
				"What is the first step in the Git workflow for changing things?",
			correctAnswer: "Modify / create / delete files in the working directory",
			wrongAnswers: [
				"Add changes to staging area",
				"Commit the changes",
				"Push to remote repository",
			],
		},
		{
			question: "What command initializes a repository in the current folder?",
			correctAnswer: "git init",
			wrongAnswers: ["git create", "git start", "git new"],
		},
		{
			question: "What command shows information of everything local in Git?",
			correctAnswer: "git status",
			wrongAnswers: ["git info", "git show", "git list"],
		},
		{
			question:
				"What does git status show for a newly created file that hasn't been added?",
			correctAnswer: "An untracked file – only in working directory",
			wrongAnswers: [
				"A staged file ready for commit",
				"A committed file",
				"A modified file",
			],
		},
		{
			question: "What command adds the current content of a file to staging?",
			correctAnswer: "git add",
			wrongAnswers: ["git stage", "git include", "git prepare"],
		},
		{
			question: "What command creates a commit with a message?",
			correctAnswer: "git commit -m",
			wrongAnswers: ["git save -m", "git snapshot -m", "git record -m"],
		},
		{
			question:
				"What happens if you modify a file after adding it to staging but before committing?",
			correctAnswer: "git status shows staged and unstaged changes",
			wrongAnswers: [
				"The file automatically gets re-added to staging",
				"Git prevents further modifications",
				"The previous changes are lost",
			],
		},
		{
			question: "What command shows the commit history?",
			correctAnswer: "git log",
			wrongAnswers: ["git history", "git list", "git show"],
		},
		{
			question: "How is each commit identified in Git?",
			correctAnswer: "By its hash (very long, unique string)",
			wrongAnswers: [
				"By a sequential number",
				"By the commit message",
				"By the author name",
			],
		},
		{
			question: "What command copies individual files from a specific commit?",
			correctAnswer: "git checkout <hash> -- <file>",
			wrongAnswers: [
				"git restore <hash> -- <file>",
				"git copy <hash> -- <file>",
				"git get <hash> -- <file>",
			],
		},
		{
			question: "What command shows differences between commits?",
			correctAnswer: "git diff",
			wrongAnswers: ["git compare", "git changes", "git delta"],
		},
		{
			question: "What command adds a remote repository to Git?",
			correctAnswer: "git remote add",
			wrongAnswers: ["git add remote", "git connect", "git link"],
		},
		{
			question: "What is the standard name for the main remote repository?",
			correctAnswer: "origin",
			wrongAnswers: ["master", "main", "upstream"],
		},
		{
			question: "What is an example SSH URL format for GitHub?",
			correctAnswer: "git@github.com:user/project.git",
			wrongAnswers: [
				"https://github.com/user/project.git",
				"ssh://github.com/user/project.git",
				"github.com/user/project.git",
			],
		},
		{
			question:
				"What command pushes changes and sets upstream for the first time?",
			correctAnswer: "git push --set-upstream origin master",
			wrongAnswers: [
				"git push --upstream origin master",
				"git push --set-remote origin master",
				"git push --first-time origin master",
			],
		},
		{
			question: "What does --set-upstream do in the git push command?",
			correctAnswer:
				"Set default remote for pushing to origin and create a branch called master on origin",
			wrongAnswers: [
				"Create a new repository on the remote",
				"Delete the local branch after pushing",
				"Merge changes automatically",
			],
		},
		{
			question: "How is Git history structured according to the lecture?",
			correctAnswer: "History is not linear, it is a tree",
			wrongAnswers: [
				"History is completely linear",
				"History is a circular structure",
				"History is a flat list",
			],
		},
		{
			question: "What do branches collect in Git?",
			correctAnswer: "Multiple commits",
			wrongAnswers: [
				"Individual files",
				"Configuration settings",
				"User permissions",
			],
		},
		{
			question: "What is every branch in Git?",
			correctAnswer: "Simply a pointer to a specific commit",
			wrongAnswers: [
				"A copy of all files",
				"A separate repository",
				"A user account",
			],
		},
		{
			question: "What happens to a branch when you commit on it?",
			correctAnswer: "The branch also advances",
			wrongAnswers: [
				"The branch gets deleted",
				"The branch stays pointing to the same commit",
				"The branch merges automatically",
			],
		},
		{
			question: "What command shows the commit tree structure?",
			correctAnswer: "git log --graph --decorate --oneline",
			wrongAnswers: [
				"git tree --show --branches",
				"git branch --graph --all",
				"git show --tree --commits",
			],
		},
		{
			question: "What is described as the most annoying part of development?",
			correctAnswer: "Merging",
			wrongAnswers: ["Committing", "Branching", "Pushing"],
		},
		{
			question:
				"What command do you use to switch to the branch you want to merge into?",
			correctAnswer: "git checkout",
			wrongAnswers: ["git switch", "git change", "git select"],
		},
		{
			question: "What command merges another branch into the current branch?",
			correctAnswer: "git merge <branch>",
			wrongAnswers: [
				"git combine <branch>",
				"git join <branch>",
				"git integrate <branch>",
			],
		},
		{
			question: "What command shows who last touched each line of a file?",
			correctAnswer: "git blame <file>",
			wrongAnswers: [
				"git author <file>",
				"git history <file>",
				"git track <file>",
			],
		},
		{
			question: "What command shows commits related to a given file?",
			correctAnswer: "git log -p -- <file>",
			wrongAnswers: [
				"git history -p -- <file>",
				"git show -p -- <file>",
				"git track -p -- <file>",
			],
		},
		{
			question: "What does the -p flag do in git log?",
			correctAnswer: "Shows changes",
			wrongAnswers: ["Shows patches", "Shows permissions", "Shows paths"],
		},
		{
			question: "What is the Git mantra mentioned in the lecture?",
			correctAnswer: "Commit early, commit often",
			wrongAnswers: [
				"Push early, push often",
				"Branch early, merge often",
				"Test early, test often",
			],
		},
		{
			question: "Why don't commits cost much according to the lecture?",
			correctAnswer:
				"Git only tracks changes, commits don't copy the complete repository",
			wrongAnswers: [
				"Commits are stored in compressed format",
				"Commits only store file names",
				"Commits are stored on remote servers",
			],
		},
		{
			question: "What is the rule of thumb for when to commit?",
			correctAnswer: "Whenever finished something and code compiles",
			wrongAnswers: [
				"Once per day maximum",
				"Only when all features are complete",
				"Only when code is perfect",
			],
		},
		{
			question: "What code formatter for C is mentioned in the lecture?",
			correctAnswer: "clang-format",
			wrongAnswers: ["c-format", "gnu-format", "gcc-format"],
		},
		{
			question: "What command runs clang-format on a file?",
			correctAnswer: "clang-format -i <your file>",
			wrongAnswers: [
				"clang-format --format <your file>",
				"clang-format -f <your file>",
				"clang-format --inline <your file>",
			],
		},
		{
			question: "What are Git hooks according to the lecture?",
			correctAnswer:
				"You can say run this command whenever I commit or do something else",
			wrongAnswers: [
				"Configuration files for Git settings",
				"Backup mechanisms for repositories",
				"Security features for authentication",
			],
		},
		{
			question: "What Python tool is mentioned for managing commit hooks?",
			correctAnswer: "pre-commit",
			wrongAnswers: ["git-hooks", "commit-hooks", "pre-git"],
		},
		{
			question: "What command installs pre-commit?",
			correctAnswer: "pipx install pre-commit",
			wrongAnswers: [
				"pip install pre-commit",
				"npm install pre-commit",
				"apt install pre-commit",
			],
		},
		{
			question: "What command initializes pre-commit in your git directory?",
			correctAnswer: "pre-commit install",
			wrongAnswers: ["pre-commit init", "pre-commit setup", "pre-commit start"],
		},
		{
			question: "What file configures pre-commit hooks?",
			correctAnswer: ".pre-commit-config.yaml",
			wrongAnswers: [
				".pre-commit-config.json",
				"pre-commit.yaml",
				".precommit.yaml",
			],
		},
		{
			question:
				"What file controls which files should not be synchronized in Git?",
			correctAnswer: ".gitignore",
			wrongAnswers: [".gitexclude", ".gitskip", ".ignoregit"],
		},
		{
			question: "What is the basic rationale for .gitignore?",
			correctAnswer: "Only put in the repository what is needed",
			wrongAnswers: [
				"Hide all personal files",
				"Prevent accidental deletions",
				"Reduce repository size",
			],
		},
		{
			question: "What website provides examples of .gitignore files?",
			correctAnswer: "https://github.com/github/gitignore",
			wrongAnswers: [
				"https://gitignore.io",
				"https://git-scm.com/gitignore",
				"https://gitignore-examples.com",
			],
		},
		{
			question: "What command starts Git bisection?",
			correctAnswer: "git bisect start",
			wrongAnswers: [
				"git bisect begin",
				"git bisect init",
				"git bisect create",
			],
		},
		{
			question: "What command marks the current commit as bad in bisection?",
			correctAnswer: "git bisect bad",
			wrongAnswers: [
				"git bisect broken",
				"git bisect fail",
				"git bisect wrong",
			],
		},
		{
			question: "What command marks a specific commit as good in bisection?",
			correctAnswer: "git bisect good <commit>",
			wrongAnswers: [
				"git bisect working <commit>",
				"git bisect ok <commit>",
				"git bisect pass <commit>",
			],
		},
		{
			question:
				"How many steps does bisection need to cover over 1000 commits?",
			correctAnswer: "≈ 10 steps",
			wrongAnswers: ["≈ 100 steps", "≈ 50 steps", "≈ 500 steps"],
		},
		{
			question: "What technique is bisection called in computer science?",
			correctAnswer: "binary search",
			wrongAnswers: ["linear search", "tree search", "hash search"],
		},
		{
			question: "What command automates bisection with a script?",
			correctAnswer: "git bisect run <script> <arguments>",
			wrongAnswers: [
				"git bisect auto <script> <arguments>",
				"git bisect exec <script> <arguments>",
				"git bisect test <script> <arguments>",
			],
		},
		{
			question: "What protocol does Git use by default for communication?",
			correctAnswer: "Secure Shell Protocol (SSH)",
			wrongAnswers: ["HTTP Protocol", "FTP Protocol", "HTTPS Protocol"],
		},
		{
			question:
				"What authentication method does Git use instead of user/password?",
			correctAnswer: "SSH Keys",
			wrongAnswers: ["API tokens", "OAuth", "Certificate files"],
		},
		{
			question: "What command creates an SSH key with ED25519 algorithm?",
			correctAnswer: "ssh-keygen -t ed25519",
			wrongAnswers: [
				"ssh-keygen -t rsa",
				"ssh-create -t ed25519",
				"ssh-key -t ed25519",
			],
		},
		{
			question: "What is the usual location to store SSH keys?",
			correctAnswer: "~/.ssh/id_ed25519",
			wrongAnswers: [
				"~/.keys/id_ed25519",
				"~/ssh/id_ed25519",
				"~/.ssh/keys/id_ed25519",
			],
		},
		{
			question: "Why should you provide a passphrase for SSH keys?",
			correctAnswer:
				"Otherwise, anyone with access to the private key file can use it",
			wrongAnswers: [
				"It makes the key more secure during transmission",
				"It's required by GitHub",
				"It prevents key corruption",
			],
		},
		{
			question: "What command shows the public part of an SSH key?",
			correctAnswer: "cat <key>.pub",
			wrongAnswers: [
				"ssh-show <key>.pub",
				"view <key>.pub",
				"display <key>.pub",
			],
		},
		{
			question: "What service manages SSH keys on most Linux systems?",
			correctAnswer: "ssh-agent",
			wrongAnswers: ["ssh-manager", "key-agent", "ssh-service"],
		},
		{
			question:
				"What are the basic programming concepts covered in the course?",
			correctAnswer:
				"Data types, type casting, variables, input/output, functions, control flow, loops, dynamic memory, pointers, data structures",
			wrongAnswers: [
				"Only C-specific features",
				"Only object-oriented programming",
				"Only web development concepts",
			],
		},
		{
			question: "What control flow structures were covered in the course?",
			correctAnswer: "if, switch, while, for",
			wrongAnswers: [
				"if, case, repeat, loop",
				"if, select, while, iterate",
				"when, switch, while, for",
			],
		},
		{
			question: "What future topics are mentioned for learning?",
			correctAnswer:
				"Object oriented and functional programming, testing, multithreading, advanced build systems, further data structures",
			wrongAnswers: [
				"Only web development technologies",
				"Only database management",
				"Only mobile app development",
			],
		},
		{
			question: "What online platforms are suggested for practice?",
			correctAnswer:
				"programiz.com, codeforwin.org, projecteuler.net, codewars.com, geeksforgeeks.org",
			wrongAnswers: [
				"Only GitHub repositories",
				"Only university websites",
				"Only paid tutorial sites",
			],
		},
		{
			question: "What coding competition platforms are mentioned?",
			correctAnswer: "spoj.com, codeforces.com, atcoder.jp",
			wrongAnswers: [
				"leetcode.com, hackerrank.com",
				"Only local competitions",
				"Only university contests",
			],
		},
		{
			question:
				"How many hours per week are expected for coursework during the break?",
			correctAnswer: "≈ 4 hours per week",
			wrongAnswers: [
				"≈ 2 hours per week",
				"≈ 8 hours per week",
				"≈ 6 hours per week",
			],
		},
		{
			question:
				"What are the three knowledge levels mentioned for course content?",
			correctAnswer: "Must know, should know, may know",
			wrongAnswers: [
				"Basic, intermediate, advanced",
				"Required, optional, extra",
				"Core, supplementary, additional",
			],
		},
		{
			question:
				"What is the significance of having a decent ranking on coding competition sites?",
			correctAnswer: "It's good for an IT CV",
			wrongAnswers: [
				"It's required for graduation",
				"It provides course credit",
				"It guarantees job placement",
			],
		},
		{
			question: "What does the lecturer say about C being annoying and tricky?",
			correctAnswer:
				"But reflect on what you have seen and try to map it to other languages",
			wrongAnswers: [
				"You should avoid using C in the future",
				"C is the hardest programming language",
				"Other languages are always better",
			],
		},
		{
			question:
				"What examples are given of concepts that other languages hide but still have to do?",
			correctAnswer: "Heap memory, call-by-reference",
			wrongAnswers: [
				"Variables and functions",
				"Loops and conditions",
				"Input and output",
			],
		},
		{
			question: "What is the main benefit of understanding how languages work?",
			correctAnswer:
				"Understand how languages work even when they hide implementation details",
			wrongAnswers: [
				"Write faster code",
				"Use fewer resources",
				"Debug more easily",
			],
		},
	],

	11: [
		{
			question: "What is the origin of Python's name?",
			correctAnswer: "Monty Python, not the snake",
			wrongAnswers: [
				"The Python snake",
				"A mathematical concept called Python",
				"The developer's pet snake named Python",
			],
		},
		{
			question: "When was Python originally developed?",
			correctAnswer: "Late 1980s",
			wrongAnswers: ["Early 1990s", "Mid 1980s", "Early 2000s"],
		},
		{
			question:
				"What does 'batteries included' mean in Python's design philosophy?",
			correctAnswer: "Python comes with extensive built-in functionality",
			wrongAnswers: [
				"Python has built-in power management",
				"Python includes hardware drivers",
				"Python has built-in graphics libraries",
			],
		},
		{
			question: "When did Python 2 reach end-of-life status?",
			correctAnswer: "2020",
			wrongAnswers: ["2018", "2019", "2021"],
		},
		{
			question: "When was Python 2 originally released?",
			correctAnswer: "2000",
			wrongAnswers: ["1998", "2002", "1999"],
		},
		{
			question: "When was Python 3 originally released?",
			correctAnswer: "2008",
			wrongAnswers: ["2010", "2006", "2009"],
		},
		{
			question: "According to the Zen of Python, what is better than ugly?",
			correctAnswer: "Beautiful",
			wrongAnswers: ["Simple", "Explicit", "Complex"],
		},
		{
			question: "According to the Zen of Python, what is better than implicit?",
			correctAnswer: "Explicit",
			wrongAnswers: ["Beautiful", "Simple", "Complex"],
		},
		{
			question: "According to the Zen of Python, what is better than complex?",
			correctAnswer: "Simple",
			wrongAnswers: ["Beautiful", "Explicit", "Complicated"],
		},
		{
			question:
				"According to the Zen of Python, what is better than complicated?",
			correctAnswer: "Complex",
			wrongAnswers: ["Simple", "Beautiful", "Explicit"],
		},
		{
			question:
				"What command might you need to use instead of 'python' to run Python 3?",
			correctAnswer: "python3",
			wrongAnswers: ["python-3", "py3", "python_3"],
		},
		{
			question: "How is Python executed compared to C?",
			correctAnswer: "Python is interpreted, C is compiled",
			wrongAnswers: [
				"Python is compiled, C is interpreted",
				"Both are interpreted",
				"Both are compiled",
			],
		},
		{
			question: "How is Python typed compared to C?",
			correctAnswer: "Python is dynamically typed, C is statically typed",
			wrongAnswers: [
				"Python is statically typed, C is dynamically typed",
				"Both are dynamically typed",
				"Both are statically typed",
			],
		},
		{
			question: "What does Python use instead of braces for code blocks?",
			correctAnswer: "Indentation",
			wrongAnswers: [
				"Parentheses",
				"Square brackets",
				"Keywords like 'begin' and 'end'",
			],
		},
		{
			question: "What does Python use instead of semicolons to end statements?",
			correctAnswer: "Newline",
			wrongAnswers: ["Comma", "Period", "Colon"],
		},
		{
			question: "What is the Python interpreter usually written in?",
			correctAnswer: "C",
			wrongAnswers: ["Python", "Java", "Assembly"],
		},
		{
			question: "What does REPL stand for?",
			correctAnswer: "Read-Eval-Print Loop",
			wrongAnswers: [
				"Read-Execute-Print Loop",
				"Repeat-Eval-Print Loop",
				"Read-Eval-Process Loop",
			],
		},
		{
			question: "How do you exit the Python interactive mode?",
			correctAnswer: "Press Ctrl-D",
			wrongAnswers: ["Press Ctrl-C", "Type 'exit'", "Press Escape"],
		},
		{
			question: "In Python's dynamic typing, what has the type attached to it?",
			correctAnswer: "The value",
			wrongAnswers: ["The variable", "The function", "The class"],
		},
		{
			question:
				"What are variables internally in Python due to dynamic typing?",
			correctAnswer: "Always pointers",
			wrongAnswers: ["Always integers", "Always strings", "Always objects"],
		},
		{
			question: "What is the duck typing principle?",
			correctAnswer:
				"If it walks like a duck and quacks like a duck, then it must be a duck",
			wrongAnswers: [
				"All objects must inherit from a Duck class",
				"Only duck objects can be used in functions",
				"Variables must be declared as duck type",
			],
		},
		{
			question: "What Python feature eliminates the need for malloc and free?",
			correctAnswer: "Automatic memory management / garbage collection",
			wrongAnswers: ["Dynamic typing", "Interpretation", "Duck typing"],
		},
		{
			question: "What is the usual indentation level in Python?",
			correctAnswer: "2 or 4 spaces",
			wrongAnswers: ["1 or 2 spaces", "4 or 8 spaces", "Only 4 spaces"],
		},
		{
			question: "What is forbidden when mixing indentation in Python?",
			correctAnswer: "Switching between tabs and spaces",
			wrongAnswers: [
				"Using more than 4 spaces",
				"Using less than 2 spaces",
				"Using spaces at all",
			],
		},
		{
			question: "How do you write a line comment in Python?",
			correctAnswer: "Start with #",
			wrongAnswers: ["Start with //", "Wrap with /* */", "Start with --"],
		},
		{
			question: "Does Python support multi-line comments?",
			correctAnswer: "No",
			wrongAnswers: [
				"Yes, with /* */",
				"Yes, with triple quotes",
				"Yes, with # on each line",
			],
		},
		{
			question: "How are boolean values capitalized in Python?",
			correctAnswer: "True and False (capitalized)",
			wrongAnswers: [
				"true and false (lowercase)",
				"TRUE and FALSE (all caps)",
				"True and false (mixed case)",
			],
		},
		{
			question: "What is the bit limitation for integers in Python?",
			correctAnswer: "Not limited to 32/64 bit",
			wrongAnswers: [
				"Limited to 32 bit",
				"Limited to 64 bit",
				"Limited to 128 bit",
			],
		},
		{
			question: "What is the Python float equivalent to in C?",
			correctAnswer: "64-bit double, not float",
			wrongAnswers: ["32-bit float", "32-bit double", "16-bit float"],
		},
		{
			question: "What quotes can be used for string literals in Python?",
			correctAnswer: "Both double and single quotes",
			wrongAnswers: [
				"Only double quotes",
				"Only single quotes",
				"Triple quotes only",
			],
		},
		{
			question: "Does Python have a char data type?",
			correctAnswer: "No",
			wrongAnswers: [
				"Yes",
				"Yes, but it's called character",
				"Yes, but it's called chr",
			],
		},
		{
			question: "Are strings mutable in Python?",
			correctAnswer: "No, strings are immutable",
			wrongAnswers: [
				"Yes, strings are mutable",
				"Only single-quoted strings are mutable",
				"Only double-quoted strings are mutable",
			],
		},
		{
			question:
				"Is there a way to declare a variable without assigning a value in Python?",
			correctAnswer:
				"No way/need to just declare a variable (except some tricks)",
			wrongAnswers: [
				"Yes, using var keyword",
				"Yes, using declare keyword",
				"Yes, using let keyword",
			],
		},
		{
			question: "Does Python have constants?",
			correctAnswer: "No, Python does not have constants",
			wrongAnswers: [
				"Yes, declared with const keyword",
				"Yes, declared with final keyword",
				"Yes, declared with readonly keyword",
			],
		},
		{
			question: "What naming convention is used for variables in Python?",
			correctAnswer: "Lower-case, underscore-separated names",
			wrongAnswers: ["camelCase", "PascalCase", "UPPER_CASE"],
		},
		{
			question:
				"What naming convention is used for supposedly constant values in Python?",
			correctAnswer: "Upper case, underscore-separated",
			wrongAnswers: [
				"Lower case, underscore-separated",
				"camelCase",
				"PascalCase",
			],
		},
		{
			question: "What operator is used for exponentiation in Python?",
			correctAnswer: "**",
			wrongAnswers: ["^", "pow", "exp"],
		},
		{
			question:
				"How do you calculate square root using exponentiation in Python?",
			correctAnswer: "a ** 0.5",
			wrongAnswers: ["sqrt(a)", "a ^ 0.5", "a ** 2"],
		},
		{
			question: "What does the / operator always do in Python?",
			correctAnswer: "Float division",
			wrongAnswers: [
				"Integer division",
				"Depends on operand types",
				"String concatenation",
			],
		},
		{
			question: "What operator is used for integer division in Python?",
			correctAnswer: "//",
			wrongAnswers: ["/", "div", "\\"],
		},
		{
			question: "What is the precise meaning of the // operator?",
			correctAnswer: "Compute a / b and round down (floor division)",
			wrongAnswers: [
				"Integer division only",
				"Ceiling division",
				"Truncated division",
			],
		},
		{
			question: "What function gets the type of a variable in Python?",
			correctAnswer: "type(x)",
			wrongAnswers: ["typeof(x)", "gettype(x)", "class(x)"],
		},
		{
			question: "What function gets the string representation of a variable?",
			correctAnswer: "str(x)",
			wrongAnswers: ["string(x)", "toString(x)", "convert(x)"],
		},
		{
			question:
				"What function gets the printable representation with full information?",
			correctAnswer: "repr(x)",
			wrongAnswers: ["print(x)", "debug(x)", "info(x)"],
		},
		{
			question: "When should you use str() vs repr()?",
			correctAnswer: "str for talking to users, repr for debugging",
			wrongAnswers: [
				"repr for talking to users, str for debugging",
				"Always use str",
				"Always use repr",
			],
		},
		{
			question: "What function shows documentation related to an object?",
			correctAnswer: "help(x)",
			wrongAnswers: ["doc(x)", "info(x)", "manual(x)"],
		},
		{
			question: "What function shows everything an object can do?",
			correctAnswer: "dir(x)",
			wrongAnswers: ["methods(x)", "functions(x)", "attributes(x)"],
		},
		{
			question: "What is the Python equivalent of NULL?",
			correctAnswer: "None",
			wrongAnswers: ["null", "NULL", "nil"],
		},
		{
			question: "What is a common way to 'declare' a variable in Python?",
			correctAnswer: "a = None",
			wrongAnswers: ["var a", "declare a", "let a"],
		},
		{
			question: "What does print(x, y, z) do by default?",
			correctAnswer: "Prints str of x, y, z, space-separated, with a newline",
			wrongAnswers: [
				"Prints x, y, z without spaces or newline",
				"Prints x, y, z comma-separated with newline",
				"Prints x, y, z on separate lines",
			],
		},
		{
			question: "What does input() return?",
			correctAnswer: "str",
			wrongAnswers: ["int", "float", "The appropriate type based on input"],
		},
		{
			question:
				"How do you change the separator in print() from space to something else?",
			correctAnswer: "print(..., sep='--')",
			wrongAnswers: [
				"print(..., separator='--')",
				"print(..., delim='--')",
				"print(..., join='--')",
			],
		},
		{
			question: "How do you prevent print() from adding a newline?",
			correctAnswer: "print(..., end='')",
			wrongAnswers: [
				"print(..., newline=False)",
				"print(..., nl=False)",
				"print(..., line=False)",
			],
		},
		{
			question: "What happens when int(x) cannot understand the string?",
			correctAnswer: "Throws an exception",
			wrongAnswers: [
				"Returns 0",
				"Returns None",
				"Returns the original string",
			],
		},
		{
			question: "What are formatted string literals also called?",
			correctAnswer: "f-string",
			wrongAnswers: ["format-string", "template-string", "literal-string"],
		},
		{
			question: "How do you create an f-string?",
			correctAnswer:
				"Prepend string with f and write values inside curly braces",
			wrongAnswers: [
				"Use format() function",
				"Use % operator",
				"Use + operator for concatenation",
			],
		},
		{
			question: "How do you include literal curly braces in an f-string?",
			correctAnswer: "Double-brace {{ }}",
			wrongAnswers: [
				"Escape with backslash \\{ \\}",
				"Use single quotes around braces",
				"Use parentheses instead",
			],
		},
		{
			question: "Can you write expressions inside f-string braces?",
			correctAnswer: "Yes",
			wrongAnswers: [
				"No, only variable names",
				"Only simple arithmetic",
				"Only function calls",
			],
		},
		{
			question:
				"What can you do with boolean comparisons in Python that C doesn't allow?",
			correctAnswer: "Range compare, like 0 <= a < 5",
			wrongAnswers: [
				"Use words instead of symbols",
				"Compare different types directly",
				"Use multiple operators on same line",
			],
		},
		{
			question: "What is the boolean negation operator in Python?",
			correctAnswer: "not",
			wrongAnswers: ["!", "~", "neg"],
		},
		{
			question: "What are the boolean combination operators in Python?",
			correctAnswer: "and and or",
			wrongAnswers: ["&& and ||", "& and |", "+ and *"],
		},
		{
			question: "What is the difference between == and is in Python?",
			correctAnswer:
				"== is structural equality (same value), is is referential equality",
			wrongAnswers: [
				"is is structural equality, == is referential equality",
				"They are the same",
				"== is for numbers, is is for strings",
			],
		},
		{
			question: "What is the structural inequality operator in Python?",
			correctAnswer: "!=",
			wrongAnswers: ["is not", "<>", "not =="],
		},
		{
			question: "What is the referential inequality operator in Python?",
			correctAnswer: "is not",
			wrongAnswers: ["!=", "not is", "<>"],
		},
		{
			question: "What is preferred: 'a != b' or 'not (a == b)'?",
			correctAnswer: "a != b",
			wrongAnswers: [
				"not (a == b)",
				"They are equally preferred",
				"Depends on the context",
			],
		},
		{
			question: "What keyword is used instead of 'else if' in Python?",
			correctAnswer: "elif",
			wrongAnswers: ["else if", "elseif", "elsif"],
		},
		{
			question: "Are braces needed around conditions in Python if statements?",
			correctAnswer: "No",
			wrongAnswers: [
				"Yes, always",
				"Only for complex conditions",
				"Only for multiple conditions",
			],
		},
		{
			question: "When were switch statements introduced in Python?",
			correctAnswer: "Version 3.10 (very recently)",
			wrongAnswers: ["Version 2.0", "Version 3.0", "They don't exist yet"],
		},
		{
			question: "What do Python switch statements implement?",
			correctAnswer: "Pattern matching",
			wrongAnswers: [
				"Simple value comparison",
				"Regular expressions",
				"Type checking",
			],
		},
		{
			question: "What is the syntax for Python switch statements?",
			correctAnswer: "match expr: and case ...:",
			wrongAnswers: [
				"switch expr: and case ...:",
				"select expr: and when ...:",
				"choose expr: and option ...:",
			],
		},
		{
			question: "What is the boolean value of None?",
			correctAnswer: "False",
			wrongAnswers: ["True", "None", "Error"],
		},
		{
			question: "What is the boolean value of 0?",
			correctAnswer: "False",
			wrongAnswers: ["True", "None", "Error"],
		},
		{
			question: "What is the boolean value of 1?",
			correctAnswer: "True",
			wrongAnswers: ["False", "None", "Error"],
		},
		{
			question: "What is the boolean value of an empty string ''?",
			correctAnswer: "False",
			wrongAnswers: ["True", "None", "Error"],
		},
		{
			question: "What is the boolean value of a non-empty string like 'a'?",
			correctAnswer: "True",
			wrongAnswers: ["False", "None", "Error"],
		},
		{
			question:
				"What is the general convention for boolean conversion in Python?",
			correctAnswer: "Anything that is 'empty' is False",
			wrongAnswers: [
				"Anything that is 'empty' is True",
				"Only None and 0 are False",
				"Only strings can be False",
			],
		},
		{
			question:
				"What are the fundamental differences between Python and C mentioned in the lecture?",
			correctAnswer:
				"Interpreted vs compiled, dynamically vs statically typed, automatic memory management, exceptions for errors, indentation vs braces",
			wrongAnswers: [
				"Only syntax differences",
				"Only performance differences",
				"Only library differences",
			],
		},
		{
			question:
				"According to the lecture, what room number are the workshops held in?",
			correctAnswer: "Room 625",
			wrongAnswers: ["Room 606", "Room 620", "Grassi"],
		},
		{
			question: "What room are office hours held in according to the lecture?",
			correctAnswer: "Room 606",
			wrongAnswers: ["Room 625", "Room 620", "Grassi"],
		},
		{
			question: "When are office hours held according to the lecture?",
			correctAnswer: "Mon 14-15 (directly after Workshops)",
			wrongAnswers: ["Tue 14-16", "Mon 11-12", "Mon 13-14"],
		},
		{
			question:
				"What programming languages need to be used for the coursework?",
			correctAnswer: "Both Python and C",
			wrongAnswers: ["Only Python", "Only C", "Python, C, and Java"],
		},
		{
			question: "Where will coursework be submitted?",
			correctAnswer: "DOMjudge",
			wrongAnswers: ["Moodle", "GitHub", "Email"],
		},
		{
			question: "What aspects will coursework be graded on?",
			correctAnswer: "Correctness, documentation, and style",
			wrongAnswers: [
				"Only correctness",
				"Correctness and performance",
				"Only documentation",
			],
		},
	],

	12: [
		{
			question: "What topics were covered in Week 11 according to the lecture?",
			correctAnswer:
				"What is Python, some differences to C, basic input/output, conditionals",
			wrongAnswers: [
				"Loops, functions, methods, scope",
				"Object-oriented programming concepts",
				"File handling and error management",
			],
		},
		{
			question: "What topics are covered in Week 12 according to the lecture?",
			correctAnswer: "Loops, functions, methods, scope & shadowing",
			wrongAnswers: [
				"Classes, inheritance, polymorphism",
				"File I/O, exceptions, modules",
				"Data structures, algorithms, testing",
			],
		},
		{
			question: "What type of for loop does Python NOT have?",
			correctAnswer: "Classical for loop (initialization; condition; step)",
			wrongAnswers: [
				"For-each loop",
				"Nested for loop",
				"Range-based for loop",
			],
		},
		{
			question:
				"What type of for loop does Python have instead of classical for loops?",
			correctAnswer: "For-each loop",
			wrongAnswers: [
				"Classical for loop",
				"While-based for loop",
				"Iterator-based for loop",
			],
		},
		{
			question: "What do we always iterate over in Python for loops?",
			correctAnswer: "Sequences",
			wrongAnswers: ["Numbers", "Conditions", "Variables"],
		},
		{
			question: "What does range(n) produce?",
			correctAnswer: "Numbers from 0 to n-1",
			wrongAnswers: [
				"Numbers from 1 to n",
				"Numbers from 0 to n",
				"Numbers from 1 to n-1",
			],
		},
		{
			question: "What does range(s, n) produce?",
			correctAnswer: "All numbers from s to n-1",
			wrongAnswers: [
				"All numbers from s to n",
				"All numbers from s+1 to n",
				"All numbers from s to n+1",
			],
		},
		{
			question: "What does range(s, n, k) produce?",
			correctAnswer: "Numbers s, s + k, s + 2k, ... until n-1",
			wrongAnswers: [
				"Numbers s, s + k, s + 2k, ... until n",
				"Numbers from s to n with step k",
				"Numbers s * k, s * 2k, ... until n",
			],
		},
		{
			question:
				"What should you use for non-constant or multiplicative steps in loops?",
			correctAnswer: "Use a while loop",
			wrongAnswers: [
				"Use range with custom parameters",
				"Use nested for loops",
				"Use break and continue statements",
			],
		},
		{
			question:
				"When iterating over a string in Python, what type is each character?",
			correctAnswer: "Also a string (no chars in Python)",
			wrongAnswers: ["Character type", "Integer ASCII value", "Boolean value"],
		},
		{
			question: "What does break do in a loop?",
			correctAnswer: "Exit the loop, ignore condition",
			wrongAnswers: [
				"Jump back to start, check condition",
				"Skip current iteration only",
				"Pause the loop temporarily",
			],
		},
		{
			question: "What does continue do in a loop?",
			correctAnswer: "Jump back to start, check condition",
			wrongAnswers: [
				"Exit the loop, ignore condition",
				"End the program",
				"Skip to the next loop",
			],
		},
		{
			question: "According to the lecture, when should you use while loops?",
			correctAnswer: "If you do not know the length",
			wrongAnswers: [
				"When you know the exact number of iterations",
				"Only for infinite loops",
				"When working with strings",
			],
		},
		{
			question: "According to the lecture, when should you use for loops?",
			correctAnswer: "To go over each element",
			wrongAnswers: [
				"When you don't know the length",
				"Only for numeric calculations",
				"When using break statements",
			],
		},
		{
			question:
				"What happens if you give a negative number to the boolean conversion example program?",
			correctAnswer: "If given negative i, runs forever",
			wrongAnswers: [
				"It returns 0",
				"It throws an error",
				"It converts to positive",
			],
		},
		{
			question: "What keyword is used to declare a function in Python?",
			correctAnswer: "def",
			wrongAnswers: ["function", "func", "define"],
		},
		{
			question: "What keyword is used to return a value from a function?",
			correctAnswer: "return",
			wrongAnswers: ["ret", "send", "output"],
		},
		{
			question: "Can Python functions return different types?",
			correctAnswer: "Yes, no fixed return type",
			wrongAnswers: [
				"No, return type must be consistent",
				"Only if declared with multiple types",
				"Only between int and float",
			],
		},
		{
			question:
				"Whose responsibility is it to be consistent with return types?",
			correctAnswer:
				"It's your responsibility to be consistent with return types",
			wrongAnswers: [
				"Python automatically handles consistency",
				"The compiler enforces consistency",
				"Return type consistency is not important",
			],
		},
		{
			question: "How do you return multiple values from a function?",
			correctAnswer:
				"Simply write return a, b, c (separate values with commas)",
			wrongAnswers: [
				"Use return [a, b, c]",
				"Call return multiple times",
				"Use return (a, b, c) with parentheses",
			],
		},
		{
			question: "How do you unpack multiple return values?",
			correctAnswer: "a, b, c = function(...)",
			wrongAnswers: [
				"[a, b, c] = function(...)",
				"a = function(...)[0], b = function(...)[1]",
				"Use unpack(function(...))",
			],
		},
		{
			question: "How do you define default values for function arguments?",
			correctAnswer: "Write arg=default when declaring a function",
			wrongAnswers: [
				"Use default(arg, value) syntax",
				"Declare defaults after the function",
				"Use the default keyword",
			],
		},
		{
			question: "Where must arguments with default values be placed?",
			correctAnswer: "All arguments with default value at the end",
			wrongAnswers: [
				"At the beginning of the parameter list",
				"Anywhere in the parameter list",
				"In a separate default section",
			],
		},
		{
			question: "What type of values should NOT be used as default arguments?",
			correctAnswer: "Mutable values (e.g. a list)",
			wrongAnswers: ["Immutable values", "String values", "Numeric values"],
		},
		{
			question:
				"What can be used as a default value trick for optional arguments?",
			correctAnswer: "None as default value",
			wrongAnswers: [
				"Empty string as default",
				"Zero as default",
				"False as default",
			],
		},
		{
			question:
				"What advantage does using None as default provide over no default?",
			correctAnswer: "We can write maximum(a, b) and maximum(a, b, c) then",
			wrongAnswers: [
				"It makes the function faster",
				"It prevents type errors",
				"It allows negative values",
			],
		},
		{
			question:
				"What does using explicit argument names (like end='') provide?",
			correctAnswer: "Increases readability and protects against reordering",
			wrongAnswers: [
				"Makes the function run faster",
				"Is required for all function calls",
				"Only works with built-in functions",
			],
		},
		{
			question: "Can you define functions inside other functions in Python?",
			correctAnswer: "Yes, can define functions inside functions",
			wrongAnswers: [
				"No, functions must be at top level",
				"Only with special syntax",
				"Only in classes",
			],
		},
		{
			question: "What is a method approximately equivalent to?",
			correctAnswer: "A function where the first argument is the object",
			wrongAnswers: [
				"A function with no arguments",
				"A function that returns an object",
				"A function inside a class only",
			],
		},
		{
			question: "How do you call a method in Python?",
			correctAnswer: "<value>.<method>(<args>)",
			wrongAnswers: [
				"<method>(<value>, <args>)",
				"<value>::<method>(<args>)",
				"call <method> on <value> with <args>",
			],
		},
		{
			question: "What is <value>.<method>(<args>) equivalent to?",
			correctAnswer: "<method>(<value>, <args>) (sort of)",
			wrongAnswers: [
				"<method>(<args>, <value>)",
				"call(<method>, <value>, <args>)",
				"<value>(<method>, <args>)",
			],
		},
		{
			question: "What is the output of a.find('er') where a = 'Hello there! '?",
			correctAnswer: "8",
			wrongAnswers: ["7", "9", "-1"],
		},
		{
			question: "What does a + b actually translate to in Python?",
			correctAnswer: "a.__add__(b)",
			wrongAnswers: ["add(a, b)", "__add__(a, b)", "a.add(b)"],
		},
		{
			question:
				"What are two implications of every operation being a method call?",
			correctAnswer:
				"Every operation is quite slow, and to support '+' you just need to define __add__",
			wrongAnswers: [
				"Operations are faster and more secure",
				"Only built-in types can use operators",
				"All operations return the same type",
			],
		},
		{
			question: "What does a.find(s) return if s is not found in a?",
			correctAnswer: "-1 if not there",
			wrongAnswers: [
				"0 if not there",
				"None if not there",
				"False if not there",
			],
		},
		{
			question: "What is the difference between a.find(s) and a.rfind(s)?",
			correctAnswer: "First position vs Last position of s in a",
			wrongAnswers: [
				"Case sensitive vs case insensitive",
				"Returns index vs returns boolean",
				"Searches from start vs searches whole string",
			],
		},
		{
			question:
				"What do a.lstrip() and a.rstrip() do differently from a.strip()?",
			correctAnswer: "Remove leading whitespace vs trailing whitespace vs both",
			wrongAnswers: [
				"Remove left characters vs right characters vs all characters",
				"Strip letters vs strip numbers vs strip both",
				"Work on lists vs work on strings vs work on both",
			],
		},
		{
			question:
				"What is the difference between a.isdecimal(), a.isdigit(), and a.isnumeric()?",
			correctAnswer: "Check if it is a decimal vs digit vs number",
			wrongAnswers: [
				"Check different number bases",
				"Work with different data types",
				"Have different return types",
			],
		},
		{
			question: "What does a.replace(old, new) do?",
			correctAnswer: "Replace occurrences of old with new",
			wrongAnswers: [
				"Replace the first occurrence only",
				"Replace characters at positions old with new",
				"Replace a with new if it equals old",
			],
		},
		{
			question:
				"How do variables behave differently in Python compared to C regarding scope?",
			correctAnswer:
				"In C variables live only in their block, in Python they continue to live",
			wrongAnswers: [
				"In Python variables live only in their block, in C they continue to live",
				"Both languages have the same scoping rules",
				"Python has no scoping rules",
			],
		},
		{
			question:
				"In the pitfall example with input '1', what is the output and why?",
			correctAnswer: "Output: 45 9 because i was reassigned in the for loop",
			wrongAnswers: [
				"Output: 45 1 because i retains its original value",
				"Output: 10 1 because the loop doesn't execute",
				"It causes an error because of variable conflict",
			],
		},
		{
			question:
				"What is the recommended convention for loop variables you don't need?",
			correctAnswer: "Name it _ (underscore)",
			wrongAnswers: [
				"Name it unused",
				"Name it temp",
				"Don't use a variable name",
			],
		},
		{
			question: "What does _ (underscore) indicate by convention?",
			correctAnswer: "I do not need this",
			wrongAnswers: [
				"This is a private variable",
				"This is a temporary variable",
				"This is a special Python keyword",
			],
		},
		{
			question: "Is _ (underscore) a special name in Python?",
			correctAnswer: "No, '_' is as valid as 'a'",
			wrongAnswers: [
				"Yes, it's a reserved keyword",
				"Yes, it has special meaning in the interpreter",
				"Yes, it's automatically ignored by Python",
			],
		},
		{
			question:
				"What happens to the outside variable 'a' when shadowed inside a function?",
			correctAnswer: "The outside a and inside a are different objects",
			wrongAnswers: [
				"The outside variable is modified",
				"The outside variable becomes undefined",
				"Python throws a shadowing error",
			],
		},
		{
			question:
				"What happens in the left program vs right program in Shadowing II example?",
			correctAnswer: "Left: Unknown variable! Right: Works as expected",
			wrongAnswers: [
				"Both programs work the same way",
				"Left works, right gives unknown variable error",
				"Both programs give unknown variable errors",
			],
		},
		{
			question: "What is the key rule about shadowing in functions?",
			correctAnswer:
				"If a name ever occurs inside a function, it always shadows outside",
			wrongAnswers: [
				"Only assignment statements cause shadowing",
				"Only the first occurrence causes shadowing",
				"Shadowing only happens with global variables",
			],
		},
		{
			question:
				"What is the output of the Shadowing III example (eggs(2 * a))?",
			correctAnswer: "Prints: 21 10",
			wrongAnswers: ["Prints: 20 10", "Prints: 21 21", "Prints: 20 20"],
		},
		{
			question: "Does shadowing work for function parameters?",
			correctAnswer: "Yes, shadowing also works for parameters",
			wrongAnswers: [
				"No, parameters are treated differently",
				"Only for optional parameters",
				"Only for named parameters",
			],
		},
		{
			question:
				"What happens when you assign a variable name that matches a built-in function?",
			correctAnswer:
				"The built-in is overwritten/re-assigned and calling it will yield an error",
			wrongAnswers: [
				"Python prevents the assignment",
				"The built-in function still works normally",
				"Python creates a new scope automatically",
			],
		},
		{
			question:
				"Which built-in functions are mentioned as commonly problematic to shadow?",
			correctAnswer: "str, int, input",
			wrongAnswers: [
				"print, len, type",
				"list, dict, tuple",
				"range, enumerate, zip",
			],
		},
		{
			question: "Why does Python allow redefining built-in functions?",
			correctAnswer:
				"Since there are no constants, Python allows redefining them",
			wrongAnswers: [
				"It's a bug in Python that will be fixed",
				"Only advanced users are allowed to do this",
				"It's required for object-oriented programming",
			],
		},
		{
			question: "What is the global keyword used for?",
			correctAnswer: "Used to circumvent shadowing",
			wrongAnswers: [
				"To declare global constants",
				"To import global modules",
				"To create global classes",
			],
		},
		{
			question: "What is the lecture's stance on using the global keyword?",
			correctAnswer:
				"Considered bad practice, never necessary, not cool and dangerous, avoid global",
			wrongAnswers: [
				"Recommended for all global variables",
				"Required in certain situations",
				"Good practice for function communication",
			],
		},
		{
			question: "What are the key points in the scope summary?",
			correctAnswer:
				"Variables live beyond their defining scope, shadowing can lead to subtle problems, don't use names of built-ins, don't use global",
			wrongAnswers: [
				"Always use global variables for better performance",
				"Shadowing is recommended for code organization",
				"Built-in names should be reused when possible",
			],
		},
		{
			question: "What are the main topics in the final wrap-up summary?",
			correctAnswer:
				"while and for loops, break and continue, functions with explicit and default arguments, methods are just functions with extra steps, shadowing",
			wrongAnswers: [
				"Classes, inheritance, and polymorphism",
				"File I/O, exception handling, and modules",
				"Data structures, algorithms, and testing",
			],
		},
		{
			question:
				"According to the lecture, what is the driving idea of object-oriented programming?",
			correctAnswer:
				"Types are not just a way to organize memory, but carry functionality",
			wrongAnswers: [
				"Everything should be encapsulated in classes",
				"Inheritance is the most important concept",
				"Objects should hide their internal state",
			],
		},
		{
			question:
				"In the duck typing context of for loops, what does a for loop only need?",
			correctAnswer: "That something can be iterated over",
			wrongAnswers: [
				"That something is a list or array",
				"That something has a length property",
				"That something is a numeric type",
			],
		},
		{
			question:
				"What example demonstrates duck typing with strings in for loops?",
			correctAnswer: "Strings support iteration operation",
			wrongAnswers: [
				"Strings can be converted to lists",
				"Strings have numeric indices",
				"Strings are arrays of characters",
			],
		},
	],

	13: [
		{
			question: "What are the two ways to create an empty list in Python?",
			correctAnswer: "a = list() or a = []",
			wrongAnswers: [
				"a = array() or a = {}",
				"a = new_list() or a = ()",
				"a = empty() or a = <>",
			],
		},
		{
			question: "How are Python's lists implemented internally?",
			correctAnswer: "As array lists",
			wrongAnswers: ["As linked lists", "As hash tables", "As binary trees"],
		},
		{
			question:
				"What is the time complexity for access and append/remove operations on Python lists?",
			correctAnswer: "Constant-time access and append/remove",
			wrongAnswers: [
				"Linear time for all operations",
				"Logarithmic time access, constant append/remove",
				"Constant access, linear append/remove",
			],
		},
		{
			question:
				"What is the time complexity for search and middle modification operations on Python lists?",
			correctAnswer: "Linear time search and middle modification",
			wrongAnswers: [
				"Constant time for both operations",
				"Logarithmic time for both operations",
				"Linear search, constant middle modification",
			],
		},
		{
			question: "What does the list() constructor do when passed a sequence?",
			correctAnswer: "Creates a copy of the sequence",
			wrongAnswers: [
				"Creates a reference to the original sequence",
				"Creates an empty list",
				"Converts the sequence to a string",
			],
		},
		{
			question: "What happens when you write list('abc')?",
			correctAnswer: "Creates ['a', 'b', 'c']",
			wrongAnswers: ["Creates ['abc']", "Creates 'abc'", "Throws an error"],
		},
		{
			question: "What is the difference between list(a) and [a]?",
			correctAnswer:
				"list(a) sees a as a sequence and copies all elements, [a] makes a list with element a",
			wrongAnswers: [
				"They are identical operations",
				"list(a) creates a reference, [a] creates a copy",
				"list(a) only works with strings, [a] works with any type",
			],
		},
		{
			question:
				"In the code 'a = [1, 2, 3]; b = a; c = list(a); a.append(4)', what will b and c contain?",
			correctAnswer: "b contains [1, 2, 3, 4], c contains [1, 2, 3]",
			wrongAnswers: [
				"Both b and c contain [1, 2, 3, 4]",
				"Both b and c contain [1, 2, 3]",
				"b contains [1, 2, 3], c contains [1, 2, 3, 4]",
			],
		},
		{
			question: "What is true about the types of elements in a Python list?",
			correctAnswer:
				"A list does not require anything of its elements - they can be of any type",
			wrongAnswers: [
				"All elements must be of the same type",
				"Only primitive types are allowed",
				"Elements must be comparable",
			],
		},
		{
			question:
				"What is the runtime complexity of deleting or inserting at a specific position in a Python list?",
			correctAnswer: "Linear runtime",
			wrongAnswers: [
				"Constant runtime",
				"Logarithmic runtime",
				"Quadratic runtime",
			],
		},
		{
			question:
				"What happens when you try to access an index that is out of bounds in Python?",
			correctAnswer: "Produces IndexError: list assignment index out of range",
			wrongAnswers: [
				"Returns None",
				"Returns the last element",
				"Automatically extends the list",
			],
		},
		{
			question: "What does len('abc') return?",
			correctAnswer: "3",
			wrongAnswers: ["1", "4", "An error"],
		},
		{
			question:
				"What is the preferred way to iterate over a list when you need both index and element?",
			correctAnswer: "for i, x in enumerate(l):",
			wrongAnswers: [
				"for i in range(len(l)): x = l[i]",
				"i = 0; for x in l: i += 1",
				"for x in l: i = l.index(x)",
			],
		},
		{
			question:
				"How much slower is range-based iteration compared to for-each iteration?",
			correctAnswer: "Approximately 50% slower",
			wrongAnswers: [
				"Approximately 25% slower",
				"Approximately 100% slower",
				"They have the same performance",
			],
		},
		{
			question: "What does a[-1] represent in Python?",
			correctAnswer: "The last element of the list",
			wrongAnswers: [
				"An error",
				"The first element of the list",
				"The second-to-last element",
			],
		},
		{
			question: "How does Python interpret negative indices?",
			correctAnswer: "a[-i] ≈ a[len(a) - i] (reversed order)",
			wrongAnswers: ["As an error", "As zero", "As positive indices"],
		},
		{
			question: "What does a += 'abc' do when a is an empty list?",
			correctAnswer: "a contains 'a', 'b', and 'c' as separate elements",
			wrongAnswers: [
				"a contains 'abc' as a single element",
				"Throws an error",
				"a remains empty",
			],
		},
		{
			question: "What does [1, 2] * 3 produce?",
			correctAnswer: "[1, 2, 1, 2, 1, 2]",
			wrongAnswers: ["[1, 2, 3]", "[3, 6]", "[[1, 2], [1, 2], [1, 2]]"],
		},
		{
			question:
				"In the code 'a = []; b = [a] * 5; a.append(10)', what does b contain?",
			correctAnswer: "[[10], [10], [10], [10], [10]]",
			wrongAnswers: [
				"[[], [], [], [], []]",
				"[10, 10, 10, 10, 10]",
				"An error occurs",
			],
		},
		{
			question:
				"Why does the multiplication [...] * n create the result shown in the previous question?",
			correctAnswer:
				"The multiplication does a shallow copy - it copies addresses/references",
			wrongAnswers: [
				"It creates deep copies of each element",
				"It's a bug in Python",
				"It only happens with empty lists",
			],
		},
		{
			question: "Why should you generally not use 'in' repeatedly for lists?",
			correctAnswer: "It has linear complexity",
			wrongAnswers: [
				"It modifies the list",
				"It's not supported in Python",
				"It has quadratic complexity",
			],
		},
		{
			question:
				"What should you convert to if you need many containment checks?",
			correctAnswer: "Set or dict",
			wrongAnswers: ["Tuple or string", "Array or vector", "Queue or stack"],
		},
		{
			question: "What does sorted([6, 1, -10, 2, 12]) return?",
			correctAnswer: "[-10, 1, 2, 6, 12]",
			wrongAnswers: [
				"[1, 2, 6, 12, -10]",
				"[12, 6, 2, 1, -10]",
				"[6, 1, -10, 2, 12]",
			],
		},
		{
			question: "What does sorted([6, 1, -10, 2, 12], key=abs) return?",
			correctAnswer: "[1, 2, 6, -10, 12]",
			wrongAnswers: [
				"[-10, 1, 2, 6, 12]",
				"[1, 2, 6, 10, 12]",
				"[12, 10, 6, 2, 1]",
			],
		},
		{
			question: "What does max(w.split(), key=len) return for a string w?",
			correctAnswer: "The longest word",
			wrongAnswers: [
				"The length of the longest word",
				"The first word",
				"The last word",
			],
		},
		{
			question: "What does ', '.join(['abc', 'x', '----', 'eggs']) return?",
			correctAnswer: "abc, x, ----, eggs",
			wrongAnswers: [
				"abcx----eggs",
				"['abc', 'x', '----', 'eggs']",
				"abc x ---- eggs",
			],
		},
		{
			question: "What requirement must be met for string.join(l) to work?",
			correctAnswer: "All elements of l must be strings",
			wrongAnswers: [
				"l must be sorted",
				"l must have at least 2 elements",
				"All elements must be the same length",
			],
		},
		{
			question: "What does l[1:] represent in list slicing?",
			correctAnswer: "All elements starting from index 1 onwards",
			wrongAnswers: [
				"Only the element at index 1",
				"All elements except the first and last",
				"All elements from index 0 to 1",
			],
		},
		{
			question: "In list slicing, what does l[start:end] represent?",
			correctAnswer:
				"All elements between start (inclusive) and end (exclusive)",
			wrongAnswers: [
				"All elements between start and end (both inclusive)",
				"All elements between start and end (both exclusive)",
				"All elements from start (exclusive) to end (inclusive)",
			],
		},
		{
			question:
				"What does a[::2] = [0] * 3 do to the list a = [1, 2, 3, 4, 5]?",
			correctAnswer: "Changes a to [0, 2, 0, 4, 0]",
			wrongAnswers: [
				"Changes a to [0, 0, 0, 4, 5]",
				"Changes a to [1, 0, 3, 0, 5]",
				"Throws an error",
			],
		},
		{
			question: "What does ' '.join(a[1::2]) return for a = 'abcdefg'?",
			correctAnswer: "b d f",
			wrongAnswers: ["a c e g", "bdf", "b c d e f g"],
		},
		{
			question:
				"What is the main advantage of slicing over range-based iteration?",
			correctAnswer: "Slicing is faster and more pythonic",
			wrongAnswers: [
				"Slicing uses less memory",
				"Slicing is more readable only",
				"There is no difference",
			],
		},
		{
			question: "What does l.pop() do?",
			correctAnswer: "Removes and returns the last element",
			wrongAnswers: [
				"Removes the first element",
				"Returns the last element without removing it",
				"Clears the entire list",
			],
		},
		{
			question: "What does l.pop(i) do?",
			correctAnswer: "Removes and returns the element at position i",
			wrongAnswers: [
				"Removes all elements from position i onwards",
				"Inserts an element at position i",
				"Returns the element at position i without removing it",
			],
		},
		{
			question:
				"What is the alternative to l.pop(i) for removing an element at position i?",
			correctAnswer: "del a[i]",
			wrongAnswers: ["remove a[i]", "delete a[i]", "a[i].remove()"],
		},
		{
			question: "What does l.insert(i, x) do?",
			correctAnswer: "Inserts x at position i",
			wrongAnswers: [
				"Replaces element at position i with x",
				"Appends x to the end of the list",
				"Inserts x after position i",
			],
		},
		{
			question: "What does l.extend(other) do?",
			correctAnswer: "Adds all elements from other to l",
			wrongAnswers: [
				"Replaces l with other",
				"Adds other as a single element to l",
				"Creates a new list combining l and other",
			],
		},
		{
			question: "What is an alternative syntax for l.extend(other)?",
			correctAnswer: "l += other",
			wrongAnswers: ["l + other", "l.append(other)", "l << other"],
		},
		{
			question: "What does l.clear() do?",
			correctAnswer: "Removes all elements from the list",
			wrongAnswers: [
				"Creates a new empty list",
				"Sets all elements to None",
				"Resets the list to its initial state",
			],
		},
		{
			question: "What does l.count(x) return?",
			correctAnswer: "The number of occurrences of x in the list",
			wrongAnswers: [
				"True if x is in the list, False otherwise",
				"The index of the first occurrence of x",
				"The total number of elements in the list",
			],
		},
		{
			question: "What does l.reverse() do?",
			correctAnswer: "Reverses the list in place (modifies the original list)",
			wrongAnswers: [
				"Returns a reversed copy of the list",
				"Sorts the list in reverse order",
				"Rotates the list elements",
			],
		},
		{
			question: "What does reversed(l) return?",
			correctAnswer: "Returns a reversed copy of the list",
			wrongAnswers: [
				"Reverses the original list",
				"Returns the last element",
				"Returns None",
			],
		},
		{
			question: "What does l.sort() do?",
			correctAnswer: "Sorts the list in place (modifies the original list)",
			wrongAnswers: [
				"Returns a sorted copy of the list",
				"Checks if the list is sorted",
				"Removes duplicate elements",
			],
		},
		{
			question: "What mathematical relationship does l * 3 relate to?",
			correctAnswer:
				"l * 3 == l + l + l (similar to mathematical a · 3 = a + a + a)",
			wrongAnswers: [
				"l * 3 == l ** 3",
				"l * 3 == [l, l, l]",
				"l * 3 == len(l) * 3",
			],
		},
		{
			question:
				"According to the slides, when should you use for i in range(len(l))?",
			correctAnswer: "Only when really necessary",
			wrongAnswers: [
				"Always when working with lists",
				"When you need the index",
				"When performance is critical",
			],
		},
		{
			question: "What slicing variants are mentioned as most commonly used?",
			correctAnswer: "l[i:] or l[:-i]",
			wrongAnswers: ["l[:i] or l[i:]", "l[::2] or l[::-1]", "l[i:j] or l[::k]"],
		},
	],

	14: [
		{
			question:
				"What happens when a function returns multiple values using 'return a, b, c'?",
			correctAnswer: "This creates a tuple",
			wrongAnswers: [
				"This creates a list",
				"This creates three separate variables",
				"This throws an error",
			],
		},
		{
			question: "How are tuple literals written?",
			correctAnswer: "With parentheses like (1, 2, 3)",
			wrongAnswers: [
				"With square brackets like [1, 2, 3]",
				"With curly braces like {1, 2, 3}",
				"With angle brackets like <1, 2, 3>",
			],
		},
		{
			question: "What is the key characteristic of tuples compared to lists?",
			correctAnswer: "Tuples are immutable and cannot be modified",
			wrongAnswers: [
				"Tuples are faster to access",
				"Tuples can only contain numbers",
				"Tuples have unlimited size",
			],
		},
		{
			question: "How are lists and tuples sorted?",
			correctAnswer:
				"Lexicographically - first element is compared, if equal then second, etc.",
			wrongAnswers: [
				"By length first, then by content",
				"Randomly unless specified",
				"By the sum of all elements",
			],
		},
		{
			question:
				"What is the typical use case difference between lists and tuples?",
			correctAnswer:
				"Lists are mostly homogeneous and variable width, tuples are often heterogeneous and fixed width",
			wrongAnswers: [
				"Lists are for numbers, tuples are for strings",
				"Lists are faster, tuples are more memory efficient",
				"Lists are for small data, tuples are for large data",
			],
		},
		{
			question: "What does the unpacking operation 'x, y = t' do?",
			correctAnswer:
				"It puts t[0] into x and t[1] into y, checking that t has two elements",
			wrongAnswers: [
				"It creates a new tuple with x and y",
				"It swaps the values of x and y",
				"It concatenates x and y into t",
			],
		},
		{
			question: "What makes unpacking code 'Pythonic' according to the slides?",
			correctAnswer: "It creates compact, elegant code",
			wrongAnswers: [
				"It runs faster than other methods",
				"It uses less memory",
				"It prevents errors automatically",
			],
		},
		{
			question: "What does enumerate() return when used with a list?",
			correctAnswer: "A sequence of (index, value) tuples",
			wrongAnswers: [
				"A dictionary with indices as keys",
				"A list of indices only",
				"A set of unique values",
			],
		},
		{
			question:
				"What is the key difference between sets and lists regarding element ordering?",
			correctAnswer:
				"Sets have no notion of 'first' or 'second' element, while lists are ordered",
			wrongAnswers: [
				"Sets are always sorted, lists are not",
				"Sets use reverse ordering compared to lists",
				"Sets and lists have the same ordering",
			],
		},
		{
			question: "How many times can an element appear in a set?",
			correctAnswer: "At most once",
			wrongAnswers: ["Unlimited times", "Exactly twice", "At least once"],
		},
		{
			question: "Are {1, 2} and {2, 1} the same set?",
			correctAnswer: "Yes, they are the same set",
			wrongAnswers: [
				"No, order matters in sets",
				"Only if they contain the same data types",
				"It depends on how they were created",
			],
		},
		{
			question: "How do you create an empty set in Python?",
			correctAnswer: "Using set()",
			wrongAnswers: ["Using {}", "Using []", "Using ()"],
		},
		{
			question: "What does {} create in Python?",
			correctAnswer: "An empty dictionary",
			wrongAnswers: ["An empty set", "An empty tuple", "An empty list"],
		},
		{
			question:
				"What is the time complexity of basic set operations like add, discard, and membership testing?",
			correctAnswer: "Constant time",
			wrongAnswers: ["Linear time", "Logarithmic time", "Quadratic time"],
		},
		{
			question: "What is the difference between s.discard(e) and s.remove(e)?",
			correctAnswer:
				"discard() doesn't throw an error if element is not present, remove() does",
			wrongAnswers: [
				"discard() is faster than remove()",
				"remove() can remove multiple elements, discard() cannot",
				"discard() returns the removed element, remove() doesn't",
			],
		},
		{
			question: "What does s.pop() do on a set?",
			correctAnswer: "Removes and returns an arbitrary element",
			wrongAnswers: [
				"Removes and returns the first element",
				"Removes and returns the last element",
				"Returns the largest element",
			],
		},
		{
			question: "Can you access set elements by index like s[i]?",
			correctAnswer: "No, sets are unordered and don't support indexing",
			wrongAnswers: [
				"Yes, but only for the first element",
				"Yes, if the set is sorted first",
				"Only for sets with numeric elements",
			],
		},
		{
			question: "What does s.difference(t) return?",
			correctAnswer: "All elements in s but not in t",
			wrongAnswers: [
				"All elements in t but not in s",
				"All elements that are in both s and t",
				"All elements that are in either s or t",
			],
		},
		{
			question: "What does s.symmetric_difference(t) return?",
			correctAnswer: "All elements in either s or t, but not both",
			wrongAnswers: [
				"All elements that are in both s and t",
				"All elements in s but not in t",
				"All elements in t but not in s",
			],
		},
		{
			question:
				"Why are set bulk operations much faster than equivalent list operations?",
			correctAnswer: "They are linear instead of quadratic time complexity",
			wrongAnswers: [
				"Sets use less memory",
				"Sets are stored in sorted order",
				"Sets use special hardware acceleration",
			],
		},
		{
			question: "What is the shorthand operator for s.intersection(t)?",
			correctAnswer: "s & t",
			wrongAnswers: ["s + t", "s | t", "s - t"],
		},
		{
			question: "What is the shorthand operator for s.union(t)?",
			correctAnswer: "s | t",
			wrongAnswers: ["s & t", "s + t", "s ^ t"],
		},
		{
			question: "What is the shorthand operator for s.difference(t)?",
			correctAnswer: "s - t",
			wrongAnswers: ["s / t", "s ^ t", "s & t"],
		},
		{
			question: "Why is s + t not defined for sets?",
			correctAnswer: "To avoid confusion with list concatenation",
			wrongAnswers: [
				"It would be too slow to implement",
				"Sets cannot be combined",
				"It would create duplicates",
			],
		},
		{
			question: "What does s.isdisjoint(t) check?",
			correctAnswer: "Whether s and t have no elements in common",
			wrongAnswers: [
				"Whether s is a subset of t",
				"Whether s and t are identical",
				"Whether s is larger than t",
			],
		},
		{
			question: "What does s <= t mean for sets?",
			correctAnswer: "s is a subset of t",
			wrongAnswers: [
				"s has fewer elements than t",
				"s was created before t",
				"s is lexicographically smaller than t",
			],
		},
		{
			question: "Is the subset relation on sets a total order?",
			correctAnswer: "No, there can be sets where neither s <= t nor t <= s",
			wrongAnswers: [
				"Yes, all sets can be compared",
				"Only for sets with the same data types",
				"Only for finite sets",
			],
		},
		{
			question: "What do dictionaries store?",
			correctAnswer: "Key-value associations",
			wrongAnswers: [
				"Only string values",
				"Ordered sequences",
				"Unique elements only",
			],
		},
		{
			question:
				"What is another common name for dictionaries in other programming languages?",
			correctAnswer: "Map",
			wrongAnswers: ["Array", "Table", "Index"],
		},
		{
			question: "How do you create an empty dictionary?",
			correctAnswer: "Using {} or dict()",
			wrongAnswers: [
				"Using [] or list()",
				"Using set() or {set}",
				"Using () or tuple()",
			],
		},
		{
			question:
				"How are lists similar to dictionaries according to the slides?",
			correctAnswer:
				"Lists are like dictionaries with integer keys from 0 to len(l)",
			wrongAnswers: [
				"They both store ordered sequences",
				"They both allow duplicate values",
				"They both use the same syntax",
			],
		},
		{
			question:
				"What error do you get when accessing a non-existent key with d[key]?",
			correctAnswer: "KeyError",
			wrongAnswers: ["IndexError", "ValueError", "AttributeError"],
		},
		{
			question:
				"What does d.get(key, default=value) do when the key is not found?",
			correctAnswer: "Returns the default value",
			wrongAnswers: [
				"Throws a KeyError",
				"Returns None",
				"Creates the key with the default value",
			],
		},
		{
			question: "What does 'key in d' check for dictionaries?",
			correctAnswer: "Whether the key is present in the dictionary",
			wrongAnswers: [
				"Whether the value is present in the dictionary",
				"Whether the key-value pair exists",
				"Whether the key is a valid type",
			],
		},
		{
			question: "What does d.pop(key, val) return if the key is not present?",
			correctAnswer: "The value 'val'",
			wrongAnswers: ["None", "An empty string", "A KeyError"],
		},
		{
			question:
				"What happens when you use d.update(other) with overlapping keys?",
			correctAnswer: "Existing keys are overwritten with values from 'other'",
			wrongAnswers: [
				"The operation fails with an error",
				"The original values are preserved",
				"The values are combined",
			],
		},
		{
			question: "What is the shorthand operator equivalent to d.update(other)?",
			correctAnswer: "d |= other",
			wrongAnswers: ["d += other", "d &= other", "d -= other"],
		},
		{
			question: "What does 'for x in d:' iterate over by default?",
			correctAnswer: "The keys of the dictionary",
			wrongAnswers: [
				"The values of the dictionary",
				"The key-value pairs",
				"Both keys and values simultaneously",
			],
		},
		{
			question: "What does d.keys() return?",
			correctAnswer: "A set containing all keys",
			wrongAnswers: [
				"A list containing all keys",
				"A tuple containing all keys",
				"A string containing all keys",
			],
		},
		{
			question: "What does d.values() return?",
			correctAnswer: "A sequence containing all values (may have duplicates)",
			wrongAnswers: [
				"A set containing all unique values",
				"A dictionary with swapped keys and values",
				"A list of unique values only",
			],
		},
		{
			question: "What does d.items() return?",
			correctAnswer: "A sequence of all key-value pairs as tuples",
			wrongAnswers: [
				"A list of keys and a list of values",
				"A set of key-value pairs",
				"A nested dictionary",
			],
		},
		{
			question:
				"What is the Pythonic way to iterate over both keys and values in a dictionary?",
			correctAnswer: "for k, v in d.items():",
			wrongAnswers: [
				"for k in d.keys(): v = d[k]",
				"for v in d.values(): k = d.key(v)",
				"for k, v in d.keys(), d.values():",
			],
		},
		{
			question:
				"Why is 'for k, v in d.items():' preferred over 'for k in d.keys(): v = d[k]'?",
			correctAnswer: "It is more Pythonic and faster",
			wrongAnswers: [
				"It uses less memory",
				"It prevents KeyError exceptions",
				"It automatically sorts the items",
			],
		},
		{
			question: "When should you use d.keys() vs d.values() vs d.items()?",
			correctAnswer:
				"Use d.items() if you need both key and value, d.keys()/d.values() otherwise",
			wrongAnswers: [
				"Always use d.items() for consistency",
				"Use d.keys() for small dictionaries, d.items() for large ones",
				"Use d.values() when order matters",
			],
		},
		{
			question: "Can tuples be modified after creation?",
			correctAnswer: "No, tuples are immutable like strings",
			wrongAnswers: [
				"Yes, but only the first element",
				"Yes, using special methods",
				"Only if they contain mutable objects",
			],
		},
		{
			question: "Is it normal to have lists of tuples?",
			correctAnswer: "Yes, it is entirely normal",
			wrongAnswers: [
				"No, it creates performance issues",
				"Only for small datasets",
				"Only if the tuples have the same length",
			],
		},
		{
			question: "What function creates a tuple from a list?",
			correctAnswer: "tuple(l)",
			wrongAnswers: [
				"list.to_tuple()",
				"convert(l, tuple)",
				"tuple.from_list(l)",
			],
		},
		{
			question: "Can parentheses be omitted when creating tuples?",
			correctAnswer: "Sometimes, like with 1, 2, 3",
			wrongAnswers: [
				"Never, parentheses are always required",
				"Always, parentheses are optional",
				"Only for single-element tuples",
			],
		},
	],

	15: [
		{
			question:
				"What do sets and dictionaries rely on internally for their implementation?",
			correctAnswer: "Hashing (hashset and hashmap)",
			wrongAnswers: ["Binary search trees", "Linked lists", "Array indexing"],
		},
		{
			question:
				"What must be true for equal objects (a == b) regarding their hash values?",
			correctAnswer: "The hash number must be the same",
			wrongAnswers: [
				"The hash number should be different",
				"The hash number can be anything",
				"Hash values are not computed for equal objects",
			],
		},
		{
			question:
				"What should be true for different objects (a != b) regarding their hash values?",
			correctAnswer: "The hash number should be different",
			wrongAnswers: [
				"The hash number must be the same",
				"The hash number must be sequential",
				"Hash values are ignored for different objects",
			],
		},
		{
			question: "What error do you get when trying to use hash(set())?",
			correctAnswer: "TypeError: unhashable type: 'set'",
			wrongAnswers: [
				"ValueError: cannot hash mutable object",
				"AttributeError: set has no hash method",
				"KeyError: set is not a valid key",
			],
		},
		{
			question: "Why are sets unhashable?",
			correctAnswer:
				"Sets are mutable, so their hash would change when modified, violating hash consistency rules",
			wrongAnswers: [
				"Sets contain too many elements to hash efficiently",
				"Sets use a different equality comparison than other objects",
				"Python developers decided sets should not be hashable for performance reasons",
			],
		},
		{
			question:
				"In the unhashable example, what creates a contradiction when s.add(4) is called?",
			correctAnswer:
				"Either hash_mod == hash_copy but s_copy != s, or hash_mod != hash_copy but s_ref is s",
			wrongAnswers: [
				"The set becomes too large to hash",
				"The hash function stops working",
				"Python throws an immediate error",
			],
		},
		{
			question:
				"What are the immutable counterparts of the three main mutable collections?",
			correctAnswer:
				"list → tuple, set → frozenset, dict → frozenset(d.items())",
			wrongAnswers: [
				"list → array, set → frozenset, dict → frozendict",
				"list → tuple, set → immutableset, dict → tuple(d.items())",
				"list → sequence, set → staticset, dict → map",
			],
		},
		{
			question:
				"Why is frozenset(d.items()) suggested for dictionaries instead of tuple(...)?",
			correctAnswer:
				"The slides ask this as a question but don't provide the answer",
			wrongAnswers: [
				"Tuples are slower for dictionary operations",
				"Frozensets maintain key uniqueness",
				"Tuples cannot store key-value pairs",
			],
		},
		{
			question: "How can you use a list as a dictionary key?",
			correctAnswer: "Convert it to a tuple: d[tuple(l)]",
			wrongAnswers: [
				"Use it directly: d[l]",
				"Convert it to a string: d[str(l)]",
				"Convert it to a frozenset: d[frozenset(l)]",
			],
		},
		{
			question:
				"In the coordinates example, what does 'coordinates[x, y] = v' demonstrate?",
			correctAnswer:
				"Using tuple unpacking to create coordinate keys in a dictionary",
			wrongAnswers: [
				"Creating a 2D array structure",
				"Using multiple assignment operators",
				"Defining custom dictionary syntax",
			],
		},
		{
			question:
				"What potential issue exists with using floats as dictionary keys?",
			correctAnswer:
				"Float arithmetic is not nice and can cause unexpected behavior",
			wrongAnswers: [
				"Floats are unhashable",
				"Floats take too much memory as keys",
				"Floats are automatically converted to integers",
			],
		},
		{
			question: "Is the float arithmetic problem specific to Python?",
			correctAnswer: "No, it's not a Python-specific problem",
			wrongAnswers: [
				"Yes, only Python has this issue",
				"Only interpreted languages have this problem",
				"It only affects older versions of Python",
			],
		},
		{
			question:
				"What do you need to be careful about when defining hashing for mutable objects?",
			correctAnswer: "Not to change them once they are in a set or dictionary",
			wrongAnswers: [
				"To always use the same hash function",
				"To make sure they are thread-safe",
				"To ensure they use minimal memory",
			],
		},
		{
			question: "What is the general format of list comprehension?",
			correctAnswer: "[<expr with x> for x in <sequence>]",
			wrongAnswers: [
				"[for x in <sequence>: <expr with x>]",
				"[<expr with x> in <sequence> for x]",
				"[x for <expr with x> in <sequence>]",
			],
		},
		{
			question:
				"What is list comprehension equivalent to in terms of a traditional loop?",
			correctAnswer: "l = []; for x in <sequence>: l.append(<expr with x>)",
			wrongAnswers: [
				"for x in <sequence>: yield <expr with x>",
				"l = []; l.extend(<expr with x> for x in <sequence>)",
				"return [x for x in <sequence> if <expr with x>]",
			],
		},
		{
			question:
				"How much faster can list comprehension be compared to explicit for-loops?",
			correctAnswer: "Approximately 10% faster",
			wrongAnswers: [
				"Approximately 50% faster",
				"2-3 times faster",
				"The same speed",
			],
		},
		{
			question:
				"What does the underscore _ represent in list comprehensions like [[None] * 10 for _ in range(10)]?",
			correctAnswer:
				"A throwaway variable when you don't need the iteration value",
			wrongAnswers: [
				"A special keyword for list comprehensions",
				"The previous element in the sequence",
				"An error in the syntax",
			],
		},
		{
			question: "What is the syntax for list comprehension with filtering?",
			correctAnswer: "[<expr> for <elem> in <seq> if <test>]",
			wrongAnswers: [
				"[<expr> if <test> for <elem> in <seq>]",
				"[<expr> for <elem> in <seq> where <test>]",
				"[<expr> for <elem> if <test> in <seq>]",
			],
		},
		{
			question:
				"In the filtering example, what method is used to check if a word starts with uppercase?",
			correctAnswer: "word.isupper()",
			wrongAnswers: [
				"word.isuppercase()",
				"word.startswith_upper()",
				"word[0].isupper()",
			],
		},
		{
			question:
				"What is a comprehension <expr> for <elem> in <seq> if <test> actually?",
			correctAnswer: "A generator",
			wrongAnswers: ["A list", "A function", "A tuple"],
		},
		{
			question: "What is the syntax for set comprehension?",
			correctAnswer: "{<expr> for <elem> in <seq>}",
			wrongAnswers: [
				"[<expr> for <elem> in <seq>]",
				"(<expr> for <elem> in <seq>)",
				"set(<expr> for <elem> in <seq>)",
			],
		},
		{
			question: "In set comprehension, what does 'bowl' not need to be?",
			correctAnswer:
				"Bowl does not need to be a list - can also be a set or other sequences",
			wrongAnswers: [
				"Bowl must always be a list",
				"Bowl must be a dictionary",
				"Bowl must be immutable",
			],
		},
		{
			question: "What is the syntax for dictionary comprehension?",
			correctAnswer: "{key: value for ... in ...}",
			wrongAnswers: [
				"{key, value for ... in ...}",
				"[key: value for ... in ...]",
				"dict(key: value for ... in ...)",
			],
		},
		{
			question:
				"What special character distinguishes dictionary comprehension syntax?",
			correctAnswer: "The colon (:) between key and value",
			wrongAnswers: [
				"The semicolon (;) between key and value",
				"The equals sign (=) between key and value",
				"The comma (,) between key and value",
			],
		},
		{
			question:
				"What happens in dictionary comprehension if the same key appears twice?",
			correctAnswer: "Some key-value pairs may get overwritten",
			wrongAnswers: [
				"An error is thrown",
				"The values are combined into a list",
				"Only the first occurrence is kept",
			],
		},
		{
			question:
				"What does this comprehension do: [w[:i] for i, w in enumerate(input().split()) if len(w) > i]?",
			correctAnswer:
				"Creates a list of words longer than their position, taking only the first i letters of each",
			wrongAnswers: [
				"Creates a list of all words with their positions",
				"Filters words that are shorter than their position",
				"Returns the last i characters of words longer than position i",
			],
		},
		{
			question: "What warning is given about complex comprehensions?",
			correctAnswer:
				"Don't over-do it, but once you get used to it, these expressions become very readable",
			wrongAnswers: [
				"Never use complex comprehensions",
				"Always prefer explicit loops",
				"Complex comprehensions are always faster",
			],
		},
		{
			question: "Why does join require comprehension sometimes?",
			correctAnswer:
				"join expects all elements of the list to be strings, so comprehension converts if needed",
			wrongAnswers: [
				"join is faster with comprehensions",
				"join only works with comprehensions",
				"Comprehensions are required for formatting",
			],
		},
		{
			question:
				"What is the preferred Python alternative to the filter() function according to the slides?",
			correctAnswer: "[x for x in l if ...] list comprehension with filtering",
			wrongAnswers: [
				"Using explicit for loops with if statements",
				"The filter() function is always preferred",
				"Using map() with conditional expressions",
			],
		},
		{
			question:
				"What is the most pythonic way to convert input to two integers according to the slides?",
			correctAnswer: "n, m = map(int, input().split())",
			wrongAnswers: [
				"n, m = (int(w) for w in input().split())",
				"n, m = [int(w) for w in input().split()]",
				"n, m = int(input().split()[0]), int(input().split()[1])",
			],
		},
		{
			question:
				"In dictionary comprehension mapping, what remains unique when you only map values?",
			correctAnswer: "The keys will remain to be unique",
			wrongAnswers: [
				"The values will remain unique",
				"Both keys and values remain unique",
				"Nothing remains unique",
			],
		},
		{
			question:
				"What are the three fundamental data structures mentioned as 'mathematical building blocks'?",
			correctAnswer: "Lists, Sets, and Maps (Dictionaries)",
			wrongAnswers: [
				"Arrays, Trees, and Graphs",
				"Stacks, Queues, and Heaps",
				"Tuples, Lists, and Sets",
			],
		},
		{
			question:
				"What is the key characteristic of lists regarding object identification?",
			correctAnswer: "Objects are identified by their position",
			wrongAnswers: [
				"Objects are identified by their hash value",
				"Objects are identified by their equality",
				"Objects are identified by their type",
			],
		},
		{
			question:
				"What is the key characteristic of sets regarding object identification?",
			correctAnswer:
				"Objects are identified by their notion of equality, with at most one of each",
			wrongAnswers: [
				"Objects are identified by their position",
				"Objects are identified by their hash value only",
				"Objects are identified by their insertion order",
			],
		},
		{
			question: "What is lists' performance characteristic?",
			correctAnswer: "Fast to get the i-th object, slow for containment checks",
			wrongAnswers: [
				"Fast for containment checks, slow for indexing",
				"Fast for both indexing and containment",
				"Slow for both indexing and containment",
			],
		},
		{
			question: "What is sets' performance characteristic?",
			correctAnswer: "Fast for containment checks",
			wrongAnswers: [
				"Fast for indexing operations",
				"Fast for ordering operations",
				"Fast for duplicate detection only",
			],
		},
		{
			question:
				"What performance impact can choosing the right data structure representation have?",
			correctAnswer: "Orders of magnitude difference",
			wrongAnswers: [
				"Only minor improvements",
				"No significant difference",
				"Slight memory savings only",
			],
		},
		{
			question:
				"In Example I (exam results), what data structure should be used to check which questions have been solved by anyone?",
			correctAnswer: "A set to store the questions that have been solved",
			wrongAnswers: [
				"A list to maintain order of questions",
				"A dictionary mapping questions to students",
				"A tuple for immutability",
			],
		},
		{
			question: "Why is a set appropriate for the exam results example?",
			correctAnswer:
				"Only property needed is 'Was question X solved by anyone?' - no need for order or duplicates",
			wrongAnswers: [
				"Sets are faster than all other structures",
				"Sets use less memory",
				"Sets are required for boolean operations",
			],
		},
		{
			question:
				"In Example II (robot movements), what data structure should be used?",
			correctAnswer: "A list to gather the sequence of moves",
			wrongAnswers: [
				"A set for unique movements only",
				"A dictionary mapping moves to positions",
				"A tuple for immutable sequence",
			],
		},
		{
			question: "Why is a list appropriate for the robot movements example?",
			correctAnswer: "Duplicates and order are relevant",
			wrongAnswers: [
				"Lists are always fastest",
				"Movements must be unique",
				"Order doesn't matter for movements",
			],
		},
		{
			question:
				"In Example III (student exam scores), what data structure should be used?",
			correctAnswer: "A dictionary from student to overall points",
			wrongAnswers: [
				"A list of student-score pairs",
				"A set of unique scores",
				"A tuple of all results",
			],
		},
		{
			question:
				"Why is a dictionary appropriate for the student scores example?",
			correctAnswer: "We want 'value per student' - students are the 'key'",
			wrongAnswers: [
				"Dictionaries are always fastest",
				"Students must be unique",
				"Scores need to be ordered",
			],
		},
		{
			question:
				"In Example IV (chess board), what storage options were mentioned?",
			correctAnswer:
				"64-sized list, dictionary mapping occupied cells to content, dictionary mapping pieces to positions",
			wrongAnswers: [
				"Only a 64-sized list",
				"Only dictionaries mapping cells to pieces",
				"A single string representation",
			],
		},
		{
			question:
				"For the chess board example, which combination was suggested as probably needed?",
			correctAnswer:
				"Both the 64-sized list and dictionary mapping occupied cells to content",
			wrongAnswers: [
				"Only the dictionary mapping pieces to positions",
				"All three options together",
				"Just the 64-sized list",
			],
		},
		{
			question:
				"In Example V (text word order), what were the two suggested approaches?",
			correctAnswer:
				"Dictionary mapping word to first occurrence, or Set of known words + List storing them in order",
			wrongAnswers: [
				"Only a dictionary approach",
				"Only a list approach",
				"A single data structure combining both",
			],
		},
		{
			question:
				"Which approach is better for remembering word positions in the text example?",
			correctAnswer: "Dictionary mapping word to first occurrence",
			wrongAnswers: [
				"Set of known words + List storing them in order",
				"Both approaches are equally good",
				"A simple list of all words",
			],
		},
		{
			question:
				"Which approach is better for iterating words in order in the text example?",
			correctAnswer: "Set of known words + List storing them in order",
			wrongAnswers: [
				"Dictionary mapping word to first occurrence",
				"Both approaches are equally good",
				"A dictionary with ordered keys",
			],
		},
		{
			question:
				"What is the rule of thumb mentioned for choosing data structures?",
			correctAnswer: "If you can afford to use a set, use it",
			wrongAnswers: [
				"Always use lists for simplicity",
				"Always use dictionaries for speed",
				"Use the most complex structure available",
			],
		},
		{
			question: "What three properties summarize the data structure choices?",
			correctAnswer: "List: Ordered, Set: Unique, Dict: Key-Value",
			wrongAnswers: [
				"List: Fast, Set: Small, Dict: Complex",
				"List: Mutable, Set: Immutable, Dict: Flexible",
				"List: Sequential, Set: Random, Dict: Mapped",
			],
		},
		{
			question: "What types are mentioned as immutable in Python?",
			correctAnswer: "Strings, integers, and floats",
			wrongAnswers: [
				"Lists, tuples, and sets",
				"Only strings and integers",
				"All numeric types only",
			],
		},
		{
			question: "What types are mentioned as mutable and therefore unhashable?",
			correctAnswer: "list, set, dict",
			wrongAnswers: [
				"tuple, frozenset, string",
				"int, float, bool",
				"Only list and dict",
			],
		},
		{
			question:
				"According to the summary, what should you use to store mutable structures in a set/dict?",
			correctAnswer: "Use immutable counterparts to store them in a set/dict",
			wrongAnswers: [
				"Convert them to strings first",
				"Use them directly with special syntax",
				"It's impossible to store them",
			],
		},
		{
			question: "What advice is given about structuring solution approaches?",
			correctAnswer:
				"Structure your solution approach with data structures in mind",
			wrongAnswers: [
				"Always code first, then optimize data structures",
				"Data structures don't matter for small problems",
				"Use the same structure for all problems",
			],
		},
		{
			question: "What should you reflect on when choosing data structures?",
			correctAnswer: "Which properties you need",
			wrongAnswers: [
				"Which structure is fastest",
				"Which structure uses least memory",
				"Which structure is most popular",
			],
		},
		{
			question:
				"What are the both languages mentioned that need to be used in coursework?",
			correctAnswer: "Both C and Python",
			wrongAnswers: ["Python and Java", "C and JavaScript", "C++ and Python"],
		},
	],

	16: [
		{
			question:
				"What happens when Python encounters 'import util' in terms of file searching?",
			correctAnswer:
				"First looks for util.py in current directory, then util/ package directory, then system library",
			wrongAnswers: [
				"Only searches for system libraries",
				"Searches recursively through all subdirectories",
				"Only looks in the current directory",
			],
		},
		{
			question:
				"What is the most important characteristic of importing a module in Python?",
			correctAnswer: "The code in the module is executed when imported",
			wrongAnswers: [
				"Only function definitions are loaded without execution",
				"Variables are copied but functions are not executed",
				"Only class definitions are processed",
			],
		},
		{
			question:
				"Why does Python need to execute top-level code when importing?",
			correctAnswer:
				"Because def statements are commands that need to be executed to define functions",
			wrongAnswers: [
				"To check for syntax errors in the module",
				"To allocate memory for the module",
				"To register the module with the interpreter",
			],
		},
		{
			question:
				"What does Python have by default that prevents multiple executions of the same import?",
			correctAnswer: "Include-guards",
			wrongAnswers: ["Import locks", "Module cache", "Execution barriers"],
		},
		{
			question: "How can you import a module with a shorter name?",
			correctAnswer: "import <module> as <short name>",
			wrongAnswers: [
				"from <module> use <short name>",
				"import <short name> from <module>",
				"alias <module> as <short name>",
			],
		},
		{
			question:
				"What syntax allows you to import specific items into your own namespace?",
			correctAnswer: "from <module> import <name> (as <other name>)",
			wrongAnswers: [
				"import <name> from <module>",
				"using <module> import <name>",
				"get <name> from <module>",
			],
		},
		{
			question:
				"What is the magic variable that equals '__main__' when a file is run directly?",
			correctAnswer: "__name__",
			wrongAnswers: ["__main__", "__file__", "__module__"],
		},
		{
			question:
				"What is the recommended practice for code that should only run when a file is executed directly?",
			correctAnswer: "Use if __name__ == '__main__': guard",
			wrongAnswers: [
				"Use if __file__ == '__main__': guard",
				"Use if __module__ == '__main__': guard",
				"Use if __script__ == '__main__': guard",
			],
		},
		{
			question: "What does the __file__ magic variable contain?",
			correctAnswer: "The path to the current script",
			wrongAnswers: [
				"The name of the current function",
				"The import name of the module",
				"The line number being executed",
			],
		},
		{
			question:
				"How can you get a complete list of standard library module names?",
			correctAnswer: "sys.stdlib_module_names",
			wrongAnswers: [
				"sys.modules",
				"sys.standard_modules",
				"sys.builtin_modules",
			],
		},
		{
			question:
				"What is the key advantage of exceptions over return codes for error handling?",
			correctAnswer: "Failing on errors is 'opt-out' instead of 'opt-in'",
			wrongAnswers: [
				"Exceptions are faster than return codes",
				"Exceptions use less memory",
				"Exceptions are easier to debug",
			],
		},
		{
			question: "What happens to an exception if nobody catches it?",
			correctAnswer: "The program dies",
			wrongAnswers: [
				"It gets logged and ignored",
				"It converts to a warning",
				"It gets stored for later handling",
			],
		},
		{
			question: "What is the correct syntax for a try-except block?",
			correctAnswer: "try: / try block / except exception type: / except block",
			wrongAnswers: [
				"catch: / try block / except exception type: / except block",
				"try: / try block / catch exception type: / catch block",
				"attempt: / try block / except exception type: / except block",
			],
		},
		{
			question:
				"What exception type is raised when trying to access a dictionary key that doesn't exist?",
			correctAnswer: "KeyError",
			wrongAnswers: ["IndexError", "AttributeError", "ValueError"],
		},
		{
			question:
				"What exception type is raised when the wrong kind of thing is given to a function?",
			correctAnswer: "TypeError",
			wrongAnswers: ["ValueError", "AttributeError", "KeyError"],
		},
		{
			question:
				"What exception type is raised when the right kind but inappropriate value is given?",
			correctAnswer: "ValueError",
			wrongAnswers: ["TypeError", "AttributeError", "IndexError"],
		},
		{
			question:
				"What exception type is raised when trying to access something that doesn't exist, like 'abc'.foo()?",
			correctAnswer: "AttributeError",
			wrongAnswers: ["MethodError", "AccessError", "NameError"],
		},
		{
			question:
				"What happens to variables modified inside a try block when an exception is raised?",
			correctAnswer: "The changes are not reverted - we just jump to except",
			wrongAnswers: [
				"All changes are automatically reverted",
				"Only the last change is reverted",
				"Changes are saved to a backup state",
			],
		},
		{
			question:
				"How do you catch an exception and give it a name for further use?",
			correctAnswer: "except type as name:",
			wrongAnswers: [
				"except type named name:",
				"except type -> name:",
				"except type = name:",
			],
		},
		{
			question:
				"How do you catch multiple exception types in a single except clause?",
			correctAnswer: "except (type a, type b, ...):",
			wrongAnswers: [
				"except type a, type b, ...:",
				"except [type a, type b, ...]:",
				"except type a | type b | ...:",
			],
		},
		{
			question:
				"What block is always executed regardless of whether an exception occurred?",
			correctAnswer: "finally",
			wrongAnswers: ["always", "cleanup", "ensure"],
		},
		{
			question: "What does LBYL stand for in error handling approaches?",
			correctAnswer: "Look before you leap",
			wrongAnswers: [
				"Learn before you leap",
				"Look beyond your limits",
				"Logic before you leap",
			],
		},
		{
			question: "What does EAFP stand for in error handling approaches?",
			correctAnswer: "Easier to ask forgiveness than permission",
			wrongAnswers: [
				"Exception and failure prevention",
				"Error avoidance and failure processing",
				"Execute and fix problems",
			],
		},
		{
			question:
				"When should you use LBYL vs EAFP according to the rule of thumb?",
			correctAnswer: "Use LBYL if things are likely to fail, EAFP if not",
			wrongAnswers: [
				"Always use LBYL for better performance",
				"Always use EAFP in Python",
				"Use LBYL for user input, EAFP for calculations",
			],
		},
		{
			question: "Why does EAFP avoid checking things twice in Python?",
			correctAnswer:
				"Because checking s.isdigit() is effectively done by int(s) anyway",
			wrongAnswers: [
				"Because exceptions are cached automatically",
				"Because Python optimizes duplicate checks",
				"Because EAFP uses lazy evaluation",
			],
		},
		{
			question:
				"What keyword is used to manually create and throw an exception?",
			correctAnswer: "raise",
			wrongAnswers: ["throw", "except", "error"],
		},
		{
			question:
				"What should you always provide when raising custom exceptions?",
			correctAnswer: "Descriptive error messages",
			wrongAnswers: ["Stack traces", "Error codes", "Timestamps"],
		},
		{
			question: "What is considered an anti-pattern when handling exceptions?",
			correctAnswer: "Both printing and raising the same exception",
			wrongAnswers: [
				"Using multiple except blocks",
				"Re-raising exceptions",
				"Adding notes to exceptions",
			],
		},
		{
			question:
				"What is the correct syntax to re-raise an exception with a new underlying cause?",
			correctAnswer: "raise ... from e",
			wrongAnswers: [
				"raise ... because e",
				"raise ... due to e",
				"raise ... caused by e",
			],
		},
		{
			question:
				"Since Python 3.11, what method can you use to add context to an exception?",
			correctAnswer: "e.add_note(string)",
			wrongAnswers: [
				"e.add_context(string)",
				"e.append_note(string)",
				"e.add_message(string)",
			],
		},
		{
			question:
				"What Python library provides further collections besides set, list, and dict?",
			correctAnswer: "collections",
			wrongAnswers: ["containers", "structures", "datatypes"],
		},
		{
			question: "Which library is used for regular expressions in Python?",
			correctAnswer: "re",
			wrongAnswers: ["regex", "regexp", "pattern"],
		},
		{
			question: "What library provides pseudo-random choice functionality?",
			correctAnswer: "random",
			wrongAnswers: ["choice", "probability", "rand"],
		},
		{
			question:
				"Which library handles compression and archive files like gzip?",
			correctAnswer: "gzip, bz2, zipfile, tarfile",
			wrongAnswers: [
				"compress, archive, zip",
				"compression, archives",
				"filecompress, archiver",
			],
		},
		{
			question:
				"What database library is included in Python's standard library?",
			correctAnswer: "sqlite3",
			wrongAnswers: ["mysql", "postgresql", "database"],
		},
		{
			question: "In the context of importing, what does 'namespace' refer to?",
			correctAnswer:
				"Each module has its own namespace, accessed with module.item syntax",
			wrongAnswers: [
				"A global dictionary of all imported items",
				"The directory structure of modules",
				"The memory location where modules are stored",
			],
		},
		{
			question:
				"What happens when you use conditional definitions with def statements?",
			correctAnswer:
				"Different functions can be defined based on runtime conditions",
			wrongAnswers: [
				"The code will raise a syntax error",
				"Only the first definition is kept",
				"All definitions are merged together",
			],
		},
		{
			question:
				"Why might conditional definitions be sensible according to the slides?",
			correctAnswer: "For optional dependencies",
			wrongAnswers: [
				"For better performance",
				"For code organization",
				"For memory optimization",
			],
		},
		{
			question:
				"What is the relationship between importing and copy-pasting code?",
			correctAnswer: "Importing is like copy-pasting code with namespace",
			wrongAnswers: [
				"Importing is completely different from copy-pasting",
				"Importing only copies function signatures",
				"Importing creates symbolic links to code",
			],
		},
		{
			question: "What are exceptions compared to in the slides?",
			correctAnswer:
				"A hot potato that gets passed upward until someone catches it",
			wrongAnswers: [
				"A red flag that signals danger",
				"A message in a bottle",
				"A fire alarm that sounds everywhere",
			],
		},
		{
			question:
				"What advantage do exceptions provide in terms of program flow?",
			correctAnswer: "Returns are not polluted and functions behave normally",
			wrongAnswers: [
				"Functions execute faster",
				"Memory usage is reduced",
				"Code becomes shorter",
			],
		},
	],

	17: [
		{
			question:
				"What are the two interfaces Python provides for working with files?",
			correctAnswer:
				"open() function with os module and pathlib (object-oriented)",
			wrongAnswers: [
				"file() function and fileio module",
				"read() function and write() module",
				"stream() function and buffer module",
			],
		},
		{
			question: "Which approach is recommended for file handling in Python?",
			correctAnswer:
				"pathlib (there is no reason to stick with the old approach)",
			wrongAnswers: [
				"open() function for better performance",
				"os module for compatibility",
				"Both approaches should be mixed",
			],
		},
		{
			question: "What import statement is needed to use pathlib?",
			correctAnswer: "from pathlib import Path",
			wrongAnswers: [
				"import pathlib as Path",
				"from pathlib import pathlib",
				"import Path from pathlib",
			],
		},
		{
			question: "What does Path('.') or Path.cwd() represent?",
			correctAnswer: "The current directory",
			wrongAnswers: [
				"The parent directory",
				"The root directory",
				"The home directory",
			],
		},
		{
			question: "What does Path.home() represent?",
			correctAnswer: "The user home directory",
			wrongAnswers: [
				"The current working directory",
				"The system root directory",
				"The application directory",
			],
		},
		{
			question: "How does Python handle Windows path separators?",
			correctAnswer: "Python unifies Windows backslashes to forward slash",
			wrongAnswers: [
				"Python keeps the original backslashes",
				"Python converts to double backslashes",
				"Python uses system-specific separators",
			],
		},
		{
			question: "What method is used to add to a path in pathlib?",
			correctAnswer: "p.joinpath('other')",
			wrongAnswers: [
				"p.append('other')",
				"p.add_path('other')",
				"p.extend('other')",
			],
		},
		{
			question:
				"What is the 'super useful' feature that paths implement for adding paths?",
			correctAnswer: "Division operator: Path.home() / 'Desktop' / 'LZSCC111'",
			wrongAnswers: [
				"Addition operator: Path.home() + 'Desktop' + 'LZSCC111'",
				"Multiplication operator: Path.home() * 'Desktop' * 'LZSCC111'",
				"Concatenation operator: Path.home() & 'Desktop' & 'LZSCC111'",
			],
		},
		{
			question:
				"For p = Path('/home/user/hello.tar.gz'), what does p.name return?",
			correctAnswer: "hello.tar.gz",
			wrongAnswers: ["hello.tar", "hello", "/home/user/hello.tar.gz"],
		},
		{
			question:
				"For p = Path('/home/user/hello.tar.gz'), what does p.suffix return?",
			correctAnswer: ".gz (including the dot)",
			wrongAnswers: ["gz (without the dot)", ".tar.gz", "tar.gz"],
		},
		{
			question:
				"For p = Path('/home/user/hello.tar.gz'), what does p.suffixes return?",
			correctAnswer: "['.tar', '.gz']",
			wrongAnswers: [
				"['tar', 'gz']",
				"['.tar.gz']",
				"['hello.tar', 'hello.tar.gz']",
			],
		},
		{
			question:
				"For p = Path('/home/user/hello.tar.gz'), what does p.stem return?",
			correctAnswer: "hello.tar (name without last extension)",
			wrongAnswers: [
				"hello (name without all extensions)",
				"hello.tar.gz (full name)",
				"tar (middle extension)",
			],
		},
		{
			question:
				"For p = Path('/home/user/hello.tar.gz'), what does p.parent return?",
			correctAnswer: "Path('/home/user')",
			wrongAnswers: ["Path('/home')", "Path('/')", "'/home/user'"],
		},
		{
			question:
				"For p = Path('/home/user/hello.tar.gz'), what does p.parents return?",
			correctAnswer: "[Path('/home/user'), Path('/home'), Path('/')]",
			wrongAnswers: [
				"[Path('/home'), Path('/')]",
				"[Path('/home/user')]",
				"Path('/home/user')",
			],
		},
		{
			question:
				"What important relationship exists between p.is_dir() and p.is_file()?",
			correctAnswer:
				"not p.is_dir() does not imply p.is_file() (there are special files)",
			wrongAnswers: [
				"not p.is_dir() always implies p.is_file()",
				"p.is_dir() and p.is_file() are mutually exclusive",
				"p.is_dir() and p.is_file() can both be True",
			],
		},
		{
			question: "What does p.stat() return?",
			correctAnswer: "A stat object with information (size, change time, etc.)",
			wrongAnswers: [
				"A boolean indicating if file exists",
				"A string with file permissions",
				"A dictionary with file metadata",
			],
		},
		{
			question: "What are the three basic file opening modes?",
			correctAnswer: "r (read), w (write), a (append)",
			wrongAnswers: [
				"read, write, modify",
				"input, output, append",
				"get, put, add",
			],
		},
		{
			question: "What happens when you open a file in 'w' mode?",
			correctAnswer: "The file is overwritten if existing",
			wrongAnswers: [
				"An error occurs if file exists",
				"Content is appended to existing file",
				"File is opened read-only",
			],
		},
		{
			question: "What happens when you open a file in 'a' mode?",
			correctAnswer:
				"File is created if it does not exist, content appended at end",
			wrongAnswers: [
				"Error occurs if file doesn't exist",
				"File is overwritten if it exists",
				"File is opened read-only",
			],
		},
		{
			question: "What must be true for 'r' mode to work?",
			correctAnswer: "The file must exist",
			wrongAnswers: [
				"The file must be empty",
				"The file must be writable",
				"The file must be executable",
			],
		},
		{
			question: "How do you open a file in binary mode?",
			correctAnswer: "Append 'b' to the mode (e.g. rb)",
			wrongAnswers: [
				"Use mode 'binary'",
				"Add 'bin' to the mode",
				"Use mode 'b' only",
			],
		},
		{
			question: "How do you explicitly specify text mode?",
			correctAnswer: "Append 't' to the mode (e.g. rt) - this is good practice",
			wrongAnswers: [
				"Use mode 'text'",
				"Add 'txt' to the mode",
				"Use mode 't' only",
			],
		},
		{
			question:
				"What is the clean utility Python provides for automatically closing files?",
			correctAnswer: "Context managers (with statement)",
			wrongAnswers: [
				"try-except-finally blocks",
				"Auto-close decorators",
				"Garbage collection",
			],
		},
		{
			question:
				"What is the correct syntax for using context managers with files?",
			correctAnswer: "with path.open() as f:",
			wrongAnswers: [
				"using path.open() as f:",
				"open path.open() as f:",
				"auto path.open() as f:",
			],
		},
		{
			question: "What advantage do context managers provide for file handling?",
			correctAnswer:
				"Files are automatically closed even if an exception occurs",
			wrongAnswers: [
				"Files open faster",
				"Files use less memory",
				"Files have better performance",
			],
		},
		{
			question:
				"What error handling approach is demonstrated in the file opening example?",
			correctAnswer: "LBYL (Look before you leap)",
			wrongAnswers: [
				"EAFP (Easier to ask forgiveness than permission)",
				"Try-catch methodology",
				"Defensive programming",
			],
		},
		{
			question: "What does f.read() return?",
			correctAnswer: "Complete content as a single string",
			wrongAnswers: [
				"First line of the file",
				"List of all lines",
				"Next available character",
			],
		},
		{
			question: "What does f.readline() return?",
			correctAnswer: "The next line including trailing newline",
			wrongAnswers: [
				"The next line without newline",
				"All remaining lines",
				"The first line only",
			],
		},
		{
			question: "What does f.readlines() return?",
			correctAnswer: "All remaining lines as list including trailing newline",
			wrongAnswers: [
				"All lines without trailing newlines",
				"Only the next line",
				"All lines as a single string",
			],
		},
		{
			question: "What is the preferred way to iterate over lines in a file?",
			correctAnswer:
				"for line in f: (better than iterating over f.readlines())",
			wrongAnswers: [
				"for line in f.readlines():",
				"while f.readline():",
				"for i in range(len(f)):",
			],
		},
		{
			question: "How do you remove the line-break at the end of a line?",
			correctAnswer: "Use l.rstrip()",
			wrongAnswers: ["Use l.strip()", "Use l.remove('\\n')", "Use l.chomp()"],
		},
		{
			question: "What method is used to write to a file?",
			correctAnswer: "f.write(string)",
			wrongAnswers: [
				"f.writeline(string)",
				"f.put(string)",
				"f.append(string)",
			],
		},
		{
			question:
				"What are the two shortcut methods for reading and writing entire files?",
			correctAnswer: "p.read_text() and p.write_text(string)",
			wrongAnswers: [
				"p.get_text() and p.set_text(string)",
				"p.load_text() and p.save_text(string)",
				"p.fetch_text() and p.store_text(string)",
			],
		},
		{
			question: "What does p.iterdir() do?",
			correctAnswer: "Iterates over all objects in that directory (like ls)",
			wrongAnswers: [
				"Creates a new directory",
				"Lists only files in directory",
				"Counts items in directory",
			],
		},
		{
			question: "In glob patterns, what does '*' match?",
			correctAnswer: "Any single name",
			wrongAnswers: [
				"Any sequence of directories",
				"Any file extension",
				"Any character",
			],
		},
		{
			question: "In glob patterns, what does '**' match?",
			correctAnswer: "A sequence of directories",
			wrongAnswers: ["Any single name", "Any file extension", "Hidden files"],
		},
		{
			question: "What does p.glob('*/*.py') find?",
			correctAnswer: "All files ending in .py in any subdirectory",
			wrongAnswers: [
				"All .py files recursively below this directory",
				"All .py files in the current directory",
				"All directories containing .py files",
			],
		},
		{
			question: "What does p.glob('**/*.py') find?",
			correctAnswer: "All .py files below this directory",
			wrongAnswers: [
				"All .py files in any subdirectory only",
				"All .py files in current directory",
				"All directories with .py extension",
			],
		},
		{
			question: "What does p.touch() do?",
			correctAnswer: "Create a file if it does not exist",
			wrongAnswers: [
				"Update file modification time",
				"Delete the file",
				"Check if file exists",
			],
		},
		{
			question: "What does p.mkdir() do by default?",
			correctAnswer: "Create a new directory - error if it exists",
			wrongAnswers: [
				"Create a new directory - ok if exists",
				"Create directory and all parents",
				"Remove the directory",
			],
		},
		{
			question:
				"What parameter allows p.mkdir() to succeed even if directory exists?",
			correctAnswer: "exist_ok=True",
			wrongAnswers: [
				"allow_existing=True",
				"ignore_exists=True",
				"force_create=True",
			],
		},
		{
			question:
				"What is the recommended mkdir command that creates all parents?",
			correctAnswer:
				"p.mkdir(parents=True, exist_ok=True) - usually you want this",
			wrongAnswers: [
				"p.mkdir(recursive=True, exist_ok=True)",
				"p.mkdir(create_parents=True, exist_ok=True)",
				"p.mkdir(all_parents=True, exist_ok=True)",
			],
		},
		{
			question: "What dangerous side effect does p.open('w') have?",
			correctAnswer: "It deletes the contents of the file",
			wrongAnswers: [
				"It deletes the file completely",
				"It makes the file read-only",
				"It corrupts the file",
			],
		},
		{
			question: "What does p.unlink() do?",
			correctAnswer: "Deletes the file",
			wrongAnswers: [
				"Deletes file contents",
				"Creates a symbolic link",
				"Renames the file",
			],
		},
		{
			question: "What does p.rmdir() do?",
			correctAnswer: "Deletes an empty directory",
			wrongAnswers: [
				"Deletes any directory recursively",
				"Creates a directory",
				"Lists directory contents",
			],
		},
		{
			question: "How do you delete a whole directory recursively?",
			correctAnswer: "shutil.rmtree(p)",
			wrongAnswers: [
				"p.rmdir(recursive=True)",
				"p.delete_tree()",
				"p.remove_all()",
			],
		},
		{
			question:
				"What are the three consequences of the difference between human and computer data preferences?",
			correctAnswer:
				"Data looks different, needs agreed format, creating nice interfaces is hard",
			wrongAnswers: [
				"Data is slower, uses more memory, is less secure",
				"Data is encrypted, compressed, and validated",
				"Data is visual, textual, and interactive",
			],
		},
		{
			question: "What year did CSV format originate?",
			correctAnswer: "Approximately 1972",
			wrongAnswers: ["1985", "1995", "1980"],
		},
		{
			question: "What applications support CSV format?",
			correctAnswer: "Excel, SQL databases, Moodle",
			wrongAnswers: [
				"Only spreadsheet applications",
				"Only database applications",
				"Only web applications",
			],
		},
		{
			question: "What is a major problem with CSV format?",
			correctAnswer:
				"CSV is not precisely specified, which can lead to problems",
			wrongAnswers: [
				"CSV files are too large",
				"CSV is not human readable",
				"CSV cannot handle numbers",
			],
		},
		{
			question: "What are the key characteristics of CSV format?",
			correctAnswer:
				"One entry per line, fields separated by delimiter, no header row, everything is str",
			wrongAnswers: [
				"Multiple entries per line, fixed-width fields, mandatory header",
				"XML-like structure with tags and attributes",
				"Binary format with type information",
			],
		},
		{
			question: "What can separate CSV columns besides commas?",
			correctAnswer: "Semi-colon or other delimiters",
			wrongAnswers: ["Only tabs", "Only spaces", "Only pipes"],
		},
		{
			question: "What function creates a CSV reader in Python?",
			correctAnswer: "csv.reader(file)",
			wrongAnswers: ["csv.open(file)", "csv.parse(file)", "csv.load(file)"],
		},
		{
			question: "What does csv.DictReader do differently from csv.reader?",
			correctAnswer:
				"Reads first row as header and transforms other rows into dictionaries",
			wrongAnswers: [
				"Writes dictionaries to CSV format",
				"Validates CSV structure",
				"Sorts CSV data by keys",
			],
		},
		{
			question: "What methods are used to write CSV data?",
			correctAnswer:
				"w.writerow(row) for single row, w.writerows(rows) for multiple",
			wrongAnswers: [
				"w.write(row) and w.write_all(rows)",
				"w.put(row) and w.put_all(rows)",
				"w.add(row) and w.add_all(rows)",
			],
		},
		{
			question: "How do you create a CSV DictWriter?",
			correctAnswer: "csv.DictWriter(f, fieldnames=header)",
			wrongAnswers: [
				"csv.DictWriter(f, headers=header)",
				"csv.DictWriter(f, columns=header)",
				"csv.DictWriter(f, keys=header)",
			],
		},
		{
			question: "What method writes the header row in DictWriter?",
			correctAnswer: "w.writeheader()",
			wrongAnswers: ["w.write_header()", "w.header()", "w.add_header()"],
		},
		{
			question: "What is important to remember about CSV cell data types?",
			correctAnswer: "Every cell is just text, always need parsing",
			wrongAnswers: [
				"Cells preserve their original data types",
				"Numbers are automatically converted",
				"Booleans are handled specially",
			],
		},
		{
			question: "What limitation does CSV have compared to other formats?",
			correctAnswer:
				"CSV can only handle tabular data - each entry must be of the same kind",
			wrongAnswers: [
				"CSV cannot handle text data",
				"CSV files are too slow to process",
				"CSV cannot be read by humans",
			],
		},
		{
			question: "What does CSV effectively represent?",
			correctAnswer: "A list of tuples",
			wrongAnswers: [
				"A list of dictionaries",
				"A nested data structure",
				"A tree structure",
			],
		},
		{
			question: "What does JSON stand for?",
			correctAnswer: "JavaScript Object Notation",
			wrongAnswers: [
				"Java Structured Object Notation",
				"Just Simple Object Notation",
				"Joint Standard Object Notation",
			],
		},
		{
			question: "What type of format is JSON?",
			correctAnswer:
				"A precisely defined, human-readable, data-interchange format",
			wrongAnswers: [
				"A binary data storage format",
				"A database query language",
				"A programming language",
			],
		},
		{
			question: "Why is JSON important beyond Python?",
			correctAnswer:
				"JSON is independent of Python and most used for web-services",
			wrongAnswers: [
				"JSON is faster than other formats",
				"JSON is more secure than alternatives",
				"JSON uses less storage space",
			],
		},
		{
			question: "What major public APIs use JSON?",
			correctAnswer:
				"Docker, GitHub, Kraken, YouTube, Twitter, ChatGPT, Discord",
			wrongAnswers: [
				"Only social media platforms",
				"Only Google services",
				"Only Microsoft services",
			],
		},
		{
			question: "What are the basic JSON data types?",
			correctAnswer: "String, Number, Boolean (true/false), Null",
			wrongAnswers: [
				"String, Integer, Float, Boolean",
				"Text, Number, Logic, Empty",
				"Char, Int, Bool, Void",
			],
		},
		{
			question: "What are the two JSON structure types?",
			correctAnswer:
				"List: [value1, value2, ...] and Dictionary: {string1: value1, string2: value2, ...}",
			wrongAnswers: [
				"Array and Object with any key types",
				"Sequence and Map with numeric keys",
				"Collection and Record with typed keys",
			],
		},
		{
			question: "What is important about JSON dictionary keys?",
			correctAnswer: "Only strings as dictionary keys",
			wrongAnswers: [
				"Any data type can be used as keys",
				"Only numbers can be used as keys",
				"Keys must be boolean values",
			],
		},
		{
			question: "How are JSON boolean values written?",
			correctAnswer: "true, false (lowercase)",
			wrongAnswers: [
				"True, False (uppercase)",
				"TRUE, FALSE (all caps)",
				"1, 0 (numeric)",
			],
		},
		{
			question: "What are the four main JSON functions in Python?",
			correctAnswer: "json.dumps(), json.dump(), json.loads(), json.load()",
			wrongAnswers: [
				"json.encode(), json.decode(), json.read(), json.write()",
				"json.stringify(), json.parse(), json.save(), json.open()",
				"json.serialize(), json.deserialize(), json.get(), json.put()",
			],
		},
		{
			question: "What does json.dumps(obj) do?",
			correctAnswer:
				"Creates a string containing the JSON representation of obj",
			wrongAnswers: [
				"Writes JSON directly to a file",
				"Reads JSON from a string",
				"Validates JSON structure",
			],
		},
		{
			question: "What does json.dump(obj, f) do?",
			correctAnswer: "Directly writes JSON to file object f",
			wrongAnswers: [
				"Reads JSON from file object f",
				"Creates a JSON string",
				"Validates and writes JSON",
			],
		},
		{
			question: "What does json.loads(string) do?",
			correctAnswer: "Reads a JSON string and returns the object",
			wrongAnswers: [
				"Writes a JSON string to file",
				"Creates a JSON string",
				"Validates JSON syntax",
			],
		},
		{
			question: "What does json.load(f) do?",
			correctAnswer: "Reads the contents of f as JSON and returns the object",
			wrongAnswers: [
				"Writes JSON to file f",
				"Creates JSON from file path",
				"Validates file as JSON",
			],
		},
		{
			question: "How do you get nicely formatted JSON output?",
			correctAnswer: "json.dumps(obj, indent=2) - same with dump",
			wrongAnswers: [
				"json.dumps(obj, format=True)",
				"json.dumps(obj, pretty=True)",
				"json.dumps(obj, readable=True)",
			],
		},
		{
			question: "What should you NOT do when writing JSON to files?",
			correctAnswer:
				"f.writeline(json.dumps(obj)) - use specific methods instead",
			wrongAnswers: [
				"json.dump(obj, f)",
				"json.dumps(obj, indent=2)",
				"with open() as f:",
			],
		},
		{
			question: "What exception is raised for malformed JSON input?",
			correctAnswer: "json.JSONDecodeError",
			wrongAnswers: ["json.JSONError", "json.ParseError", "json.FormatError"],
		},
		{
			question: "What command-line tool can format JSON files nicely?",
			correctAnswer: "python -m json.tool <file>",
			wrongAnswers: [
				"python -m json.format <file>",
				"python -m json.pretty <file>",
				"python -m json.beautify <file>",
			],
		},
		{
			question: "What is YAML in relation to JSON?",
			correctAnswer:
				"A superset of JSON with comments, extensible data types, more popular for configuration",
			wrongAnswers: [
				"A replacement for JSON with better performance",
				"A subset of JSON with simpler syntax",
				"A binary version of JSON",
			],
		},
		{
			question: "What applications commonly use YAML?",
			correctAnswer: "docker-compose, GitHub Actions",
			wrongAnswers: [
				"Web browsers and mobile apps",
				"Database systems and spreadsheets",
				"Only configuration management tools",
			],
		},
		{
			question: "Is YAML support built into Python?",
			correctAnswer: "No, support is not built-in but can easily be installed",
			wrongAnswers: [
				"Yes, it's part of the standard library",
				"Yes, but only basic support",
				"No, and it's difficult to install",
			],
		},
	],

	18: [
		{
			question:
				"What does the lecturer say objects are, bluntly speaking, in Python?",
			correctAnswer: "Everything (in Python)",
			wrongAnswers: [
				"Only user-defined classes",
				"Data structures with methods",
				"Complex data types only",
			],
		},
		{
			question: "How does the lecturer describe objects in C terms?",
			correctAnswer: "Struct with functions (and more...)",
			wrongAnswers: [
				"Arrays with pointers",
				"Functions with data",
				"Memory blocks with addresses",
			],
		},
		{
			question: "What is the lecturer's answer to 'Why do I need objects?'",
			correctAnswer: "You don't - you can do everything with functions",
			wrongAnswers: [
				"Objects are mandatory in Python",
				"Functions cannot handle complex data",
				"Objects are faster than functions",
			],
		},
		{
			question:
				"What analogy does the lecturer use about not needing Python because you know C?",
			correctAnswer: "Technically correct, yet here we are",
			wrongAnswers: [
				"It's completely wrong to think that way",
				"C is always better than Python",
				"You should never use higher-level languages",
			],
		},
		{
			question:
				"What is the name of the method that serves as the initializer in Python classes?",
			correctAnswer: "__init__",
			wrongAnswers: ["__new__", "__create__", "__construct__"],
		},
		{
			question:
				"What happens when you write Point(a, b) according to the lecture?",
			correctAnswer: "Point's __init__ is called with a, b",
			wrongAnswers: [
				"Point's __new__ is called with a, b",
				"A new instance is created without calling any method",
				"Point's __call__ method is invoked",
			],
		},
		{
			question: "What is the first argument that every method receives?",
			correctAnswer: "The object itself (self)",
			wrongAnswers: [
				"The class definition",
				"The method name",
				"The calling context",
			],
		},
		{
			question:
				"How does the lecturer explain the relationship between p.prod() and Point.prod(p)?",
			correctAnswer: "p.prod() → Point.prod(p) (sort of)",
			wrongAnswers: [
				"They are completely different operations",
				"Point.prod(p) → p.prod()",
				"They cannot be used interchangeably",
			],
		},
		{
			question:
				"What does the lecturer say about duck typing in the context of the dot_product method?",
			correctAnswer:
				"We do not require other to be Point, only that it has x and y",
			wrongAnswers: [
				"other must be explicitly typed as Point",
				"Duck typing doesn't apply to mathematical operations",
				"Type checking is mandatory for dot products",
			],
		},
		{
			question:
				"What output does print(Point(1, 2)) produce without a __str__ method?",
			correctAnswer: "<__main__.Point object at 0x7f1dda950700>",
			wrongAnswers: ["Point(1, 2)", "An error message", "(1, 2)"],
		},
		{
			question: "What are magic methods also called according to the lecture?",
			correctAnswer: "Dunder (double underscore) methods",
			wrongAnswers: ["Special methods", "System methods", "Built-in methods"],
		},
		{
			question:
				"What does the lecturer say you should (almost) always implement?",
			correctAnswer: "__str__",
			wrongAnswers: ["__repr__", "__init__", "__eq__"],
		},
		{
			question:
				"What does Point(1, 2) == Point(1, 2) return by default without implementing __eq__?",
			correctAnswer: "False",
			wrongAnswers: ["True", "None", "An error"],
		},
		{
			question:
				"What type of comparison do objects use by default according to the lecture?",
			correctAnswer: "Referential comparison",
			wrongAnswers: [
				"Structural comparison",
				"Value comparison",
				"Memory address comparison",
			],
		},
		{
			question: "What should __eq__ provide according to the lecture?",
			correctAnswer: "Structural equality",
			wrongAnswers: [
				"Referential equality",
				"Memory equality",
				"Type equality",
			],
		},
		{
			question:
				"What are the two 'commandments' or rules for hashing and equality?",
			correctAnswer:
				"If x == y then hash(x) == hash(y), and the hash must never change during lifetime",
			wrongAnswers: [
				"Hash must be unique, and equality must be symmetric",
				"Hash must be fast, and equality must be transitive",
				"Hash must be deterministic, and equality must be reflexive",
			],
		},
		{
			question:
				"What is the good rule of thumb for implementing __hash__ according to the lecture?",
			correctAnswer: "Hash everything mentioned in __eq__",
			wrongAnswers: [
				"Hash only the primary key attributes",
				"Hash all attributes of the object",
				"Hash the object's memory address",
			],
		},
		{
			question:
				"What utility does the lecturer recommend for the second rule of hashing?",
			correctAnswer: "Use Python's hash function with a tuple of these",
			wrongAnswers: [
				"Use a custom hash algorithm",
				"Use the object's id() function",
				"Use a random number generator",
			],
		},
		{
			question: "What magic method is called when we write p * other?",
			correctAnswer: "__mul__",
			wrongAnswers: ["__rmul__", "__imul__", "__multiply__"],
		},
		{
			question:
				"What happens when we write p *= 2.0 without implementing __imul__?",
			correctAnswer:
				"It is rewritten to p = p * 2.0, which calls p.__mul__(2.0)",
			wrongAnswers: [
				"It calls p.__imul__(2.0) automatically",
				"It produces an error",
				"It modifies p in place",
			],
		},
		{
			question: "What does the 'i' stand for in __imul__?",
			correctAnswer: "in-place",
			wrongAnswers: ["integer", "inverse", "internal"],
		},
		{
			question: "What must __imul__ return according to the lecture?",
			correctAnswer: "self",
			wrongAnswers: ["None", "The modified value", "A new object"],
		},
		{
			question: "What does the 'r' stand for in __rmul__?",
			correctAnswer: "right",
			wrongAnswers: ["reverse", "recursive", "result"],
		},
		{
			question: "When does Python look for __rmul__ method?",
			correctAnswer: "When float.__mul__(p) does not know how to handle Point",
			wrongAnswers: [
				"When __mul__ is not implemented",
				"When multiplication is commutative",
				"When the left operand is smaller",
			],
		},
		{
			question: "What does the / operator map to in terms of magic methods?",
			correctAnswer: "__truediv__",
			wrongAnswers: ["__div__", "__floordiv__", "__divmod__"],
		},
		{
			question:
				"What example does the lecturer give of a class that implements __truediv__?",
			correctAnswer: "Path",
			wrongAnswers: ["Point", "String", "Number"],
		},
		{
			question: "What does the // operator map to?",
			correctAnswer: "__floordiv__",
			wrongAnswers: ["__truediv__", "__div__", "__mod__"],
		},
		{
			question:
				"How many comparison magic methods do you need to implement according to the lecture?",
			correctAnswer:
				"You only need to implement one, Python derives the others",
			wrongAnswers: [
				"All four comparison methods",
				"At least two methods",
				"None, they're automatic",
			],
		},
		{
			question:
				"What is the performance cost of implementing only one comparison method?",
			correctAnswer: "Some performance cost",
			wrongAnswers: [
				"No performance cost",
				"Significant performance cost",
				"Memory overhead only",
			],
		},
		{
			question: "What becomes possible when you implement comparison methods?",
			correctAnswer: "A list containing your class can be sorted()",
			wrongAnswers: [
				"The class becomes hashable",
				"The class becomes iterable",
				"The class becomes serializable",
			],
		},
		{
			question: "What warning does the lecturer give about magic methods?",
			correctAnswer:
				"Nothing enforces __mul__, __rmul__, and __imul__ to do the same thing",
			wrongAnswers: [
				"They are automatically synchronized",
				"Python validates their consistency",
				"They must all be implemented together",
			],
		},
		{
			question:
				"What is the lecturer's advice about being a responsible wizard with magic methods?",
			correctAnswer:
				"Do not be afraid to use magic, but be a responsible wizard!",
			wrongAnswers: [
				"Avoid magic methods unless absolutely necessary",
				"Always implement all magic methods",
				"Only use magic methods for mathematical operations",
			],
		},
		{
			question: "What does __len__(self) enable?",
			correctAnswer: "len(obj)",
			wrongAnswers: ["obj.length()", "size(obj)", "obj.__size__()"],
		},
		{
			question: "What does __contains__(self, o) enable?",
			correctAnswer: "o in obj",
			wrongAnswers: ["obj.contains(o)", "o.in(obj)", "contains(obj, o)"],
		},
		{
			question: "What does __getitem__(self, i) enable?",
			correctAnswer: "obj[i]",
			wrongAnswers: ["obj.get(i)", "get(obj, i)", "obj.item(i)"],
		},
		{
			question: "What does __setitem__(self, i, v) enable?",
			correctAnswer: "obj[i] = v",
			wrongAnswers: ["obj.set(i, v)", "set(obj, i, v)", "obj[i].set(v)"],
		},
		{
			question: "What does __call__(self, arg) enable?",
			correctAnswer: "obj(arg)",
			wrongAnswers: ["obj.call(arg)", "call(obj, arg)", "obj.invoke(arg)"],
		},
		{
			question:
				"What does the lecturer say magic methods are not needed for (except maybe two)?",
			correctAnswer:
				"They are not absolutely needed (except maybe __eq__ and __hash__)",
			wrongAnswers: [
				"They are always required for proper classes",
				"Only __str__ and __init__ are exceptions",
				"All magic methods are mandatory",
			],
		},
		{
			question:
				"What warning does the lecturer give about wrongly using magic methods?",
			correctAnswer:
				"Wrongly using magic methods can lead to very very strange bugs",
			wrongAnswers: [
				"They will cause performance issues",
				"They will make code unreadable",
				"They will break inheritance",
			],
		},
		{
			question:
				"What does collections.namedtuple create according to the lecture?",
			correctAnswer: "Such classes in a single line",
			wrongAnswers: [
				"Mutable tuple-like objects",
				"Dictionary-based classes",
				"Inherited tuple classes",
			],
		},
		{
			question:
				"What characteristic do namedtuple classes have that's similar to tuples?",
			correctAnswer: "They are immutable (like tuples)",
			wrongAnswers: [
				"They are ordered (like tuples)",
				"They are indexed (like tuples)",
				"They are iterable (like tuples)",
			],
		},
		{
			question: "What does the : int represent in dataclass definitions?",
			correctAnswer: "A type annotation",
			wrongAnswers: ["A default value", "A constraint", "A validation rule"],
		},
		{
			question:
				"What does the lecturer say about type annotations in dataclasses?",
			correctAnswer: "These types are not checked during runtime",
			wrongAnswers: [
				"They are enforced at runtime",
				"They provide compile-time checking",
				"They automatically convert types",
			],
		},
		{
			question: "What does the @ symbol mean in @dataclass?",
			correctAnswer: "Decorator",
			wrongAnswers: ["Annotation", "Attribute", "Abstract"],
		},
		{
			question:
				"What is the default behavior of @dataclass regarding mutability?",
			correctAnswer: "By default, @dataclass is mutable (and not hashable!)",
			wrongAnswers: [
				"By default, @dataclass is immutable and hashable",
				"By default, @dataclass is immutable but not hashable",
				"By default, @dataclass is mutable and hashable",
			],
		},
		{
			question: "How do you make a dataclass immutable and hashable?",
			correctAnswer: "@dataclass(frozen=True)",
			wrongAnswers: [
				"@dataclass(immutable=True)",
				"@dataclass(readonly=True)",
				"@dataclass(const=True)",
			],
		},
		{
			question:
				"How do you create a custom exception according to the lecture?",
			correctAnswer: "class MyException(Exception): pass",
			wrongAnswers: [
				"class MyException(Error): pass",
				"class MyException(BaseException): pass",
				"class MyException: pass",
			],
		},
		{
			question: "What does the 'pass' keyword mean in Python?",
			correctAnswer: "Nothing",
			wrongAnswers: ["Skip this line", "Continue execution", "Return None"],
		},
		{
			question:
				"What does the lecturer say about attributes in Python objects?",
			correctAnswer: "Attributes are not fixed, but dynamically added",
			wrongAnswers: [
				"Attributes must be declared beforehand",
				"Attributes are immutable once set",
				"Attributes are automatically initialized",
			],
		},
		{
			question:
				"How does the lecturer describe objects in relation to dictionaries?",
			correctAnswer: "In a way, objects are just dictionaries",
			wrongAnswers: [
				"Objects are completely different from dictionaries",
				"Objects are faster than dictionaries",
				"Objects are more secure than dictionaries",
			],
		},
		{
			question: "What happens if you do not set self.y in __init__?",
			correctAnswer: "That concrete object does not have this attribute",
			wrongAnswers: [
				"Python sets it to None automatically",
				"An error is raised",
				"It gets a default value",
			],
		},
		{
			question:
				"What Python motto does the lecturer mention regarding responsible use?",
			correctAnswer: "We are all responsible users",
			wrongAnswers: [
				"With great power comes great responsibility",
				"Users should be restricted from dangerous operations",
				"Safety first, features second",
			],
		},
		{
			question:
				"How does the lecturer describe Python's approach to visibility compared to other OOP languages?",
			correctAnswer:
				"Many OOP languages are 'defensive', but in Python: Everyone can access everything (more or less)",
			wrongAnswers: [
				"Python is more defensive than other languages",
				"Python has strict private/public distinctions",
				"Python uses access control keywords",
			],
		},
		{
			question: "What does starting an attribute name with underscore signify?",
			correctAnswer:
				"Please do not mess with this unless you know what you are doing",
			wrongAnswers: [
				"This attribute is private and cannot be accessed",
				"This attribute is deprecated",
				"This attribute is automatically generated",
			],
		},
		{
			question:
				"What is the lecturer's recommendation about initializing attributes?",
			correctAnswer:
				"It is a good idea to just initialize everything in __init__",
			wrongAnswers: [
				"Only initialize attributes when they're needed",
				"Let Python handle attribute initialization",
				"Initialize attributes in separate methods",
			],
		},
		{
			question:
				"What does the lecturer say about dynamically changing attributes?",
			correctAnswer: "Dynamically changing attributes is quite advanced",
			wrongAnswers: [
				"It's a basic Python feature everyone should use",
				"It's deprecated and should be avoided",
				"It's only possible with special decorators",
			],
		},
		{
			question: "How does the lecturer summarize objects in the wrap-up?",
			correctAnswer: "Objects: A dictionary with extra steps",
			wrongAnswers: [
				"Objects: Advanced data structures",
				"Objects: Encapsulated functions",
				"Objects: Type-safe containers",
			],
		},
		{
			question:
				"What major OOP concepts does the lecturer mention were skipped?",
			correctAnswer:
				"Inheritance, Abstract methods/abc, Static methods, Enums and Decorators",
			wrongAnswers: [
				"Polymorphism, Encapsulation, Composition",
				"Interfaces, Generics, Reflection",
				"Factories, Singletons, Observers",
			],
		},
		{
			question:
				"What example does the lecturer give of a function that stores results for used inputs?",
			correctAnswer: "@functools.cache",
			wrongAnswers: [
				"@functools.memoize",
				"@functools.store",
				"@functools.remember",
			],
		},
		{
			question: "In the bit operations section, what does & map to?",
			correctAnswer: "__and__",
			wrongAnswers: ["__band__", "__bitand__", "__amp__"],
		},
		{
			question: "In the bit operations section, what does | map to?",
			correctAnswer: "__or__",
			wrongAnswers: ["__bor__", "__bitor__", "__pipe__"],
		},
		{
			question: "In the bit operations section, what does ^ map to?",
			correctAnswer: "__xor__",
			wrongAnswers: ["__bxor__", "__bitxor__", "__caret__"],
		},
		{
			question:
				"What does the lecturer say about the relationship between object orientation and human thought processes?",
			correctAnswer:
				"Object orientation often fits more natural to human thought processes",
			wrongAnswers: [
				"Object orientation is contrary to human thinking",
				"Functional programming is more natural",
				"Procedural programming matches human logic better",
			],
		},
	],

	19: [
		{
			question:
				"What are the four main topics covered in Week 19 of Software Development Practices?",
			correctAnswer: "Assertions, Testing, Documentation, Logging",
			wrongAnswers: [
				"Debugging, Profiling, Version Control, Deployment",
				"Classes, Functions, Variables, Loops",
				"Git, GitHub, Pull Requests, Branches",
			],
		},
		{
			question:
				"What is the syntax for adding a message to a Python assertion?",
			correctAnswer: "assert condition, message",
			wrongAnswers: [
				"assert condition: message",
				"assert(condition, message)",
				"assert condition -> message",
			],
		},
		{
			question: "What type of error is raised when a Python assertion fails?",
			correctAnswer: "AssertionError",
			wrongAnswers: ["ValueError", "TypeError", "RuntimeError"],
		},
		{
			question: "What command-line flag disables assertions in Python?",
			correctAnswer: "python -O program.py",
			wrongAnswers: [
				"python -D program.py",
				"python --no-assert program.py",
				"python -A program.py",
			],
		},
		{
			question: "What is a 'Heisenbug' in the context of assertions?",
			correctAnswer:
				"A bug that behaves differently depending on whether assertions are enabled or disabled",
			wrongAnswers: [
				"A bug that only appears in production environments",
				"A bug that randomly appears and disappears",
				"A bug that only occurs during debugging",
			],
		},
		{
			question: "What should assertions be used for according to the lecture?",
			correctAnswer: "Internal assumptions and invariants",
			wrongAnswers: [
				"Validating user input",
				"Handling network errors",
				"Managing file operations",
			],
		},
		{
			question: "What is exploratory testing?",
			correctAnswer:
				"Run program and see what happens without a concrete plan, rather ad-hoc",
			wrongAnswers: [
				"Writing automated test scripts",
				"Following a detailed test checklist manually",
				"Testing individual code components in isolation",
			],
		},
		{
			question: "What is a unit test?",
			correctAnswer: "Check an atomic piece (a singular unit) of your code",
			wrongAnswers: [
				"Check that the program solves a given problem correctly",
				"Test the user interface components",
				"Verify database connections work properly",
			],
		},
		{
			question: "What is an integration test?",
			correctAnswer: "Check that the program solves a given problem correctly",
			wrongAnswers: [
				"Check an atomic piece of your code",
				"Test only the user interface",
				"Verify individual functions work in isolation",
			],
		},
		{
			question: "What car analogy is used for unit tests?",
			correctAnswer: "Check that the spark plug in your car creates sparks",
			wrongAnswers: [
				"Check that you can drive from point A to point B",
				"Check that the engine starts properly",
				"Check that all dashboard lights work",
			],
		},
		{
			question: "What car analogy is used for integration tests?",
			correctAnswer: "Check that you can drive from point A to point B",
			wrongAnswers: [
				"Check that the spark plug creates sparks",
				"Check that the fuel pump works",
				"Check that the brakes respond properly",
			],
		},
		{
			question: "What testing framework is discussed in the lecture?",
			correctAnswer: "pytest",
			wrongAnswers: ["unittest", "nose", "testify"],
		},
		{
			question: "How does pytest identify test files?",
			correctAnswer: "Files that begin with test_ or end with _test",
			wrongAnswers: [
				"Files that contain the word 'test' anywhere",
				"Files with .test extension",
				"Files in a 'tests' directory only",
			],
		},
		{
			question: "How does pytest identify test functions within files?",
			correctAnswer: "Functions that begin with test_ or end with _test",
			wrongAnswers: [
				"Functions with @test decorator",
				"Functions that contain assert statements",
				"Functions with 'test' in the docstring",
			],
		},
		{
			question: "When does a pytest test fail?",
			correctAnswer: "If an error is raised",
			wrongAnswers: [
				"If it returns False",
				"If it prints an error message",
				"If it takes too long to execute",
			],
		},
		{
			question: "What was the bug in the Counter class __iadd__ method?",
			correctAnswer:
				"Should either set _data[v] = 1 or move += 1 out of the else branch",
			wrongAnswers: [
				"Missing return statement",
				"Wrong variable name used",
				"Incorrect loop structure",
			],
		},
		{
			question:
				"What additional problem was mentioned with the Counter class __getitem__ method?",
			correctAnswer: "Should default-get with 0",
			wrongAnswers: [
				"Should raise a custom exception",
				"Should return None for missing keys",
				"Should create the key automatically",
			],
		},
		{
			question: "What is Test-Driven Development according to the lecture?",
			correctAnswer: "Writes tests first",
			wrongAnswers: [
				"Writes documentation before code",
				"Tests only after all code is complete",
				"Uses only integration tests",
			],
		},
		{
			question: "What is Continuous Integration in the context of testing?",
			correctAnswer: "Run tests on every commit",
			wrongAnswers: [
				"Run tests only before releases",
				"Manually test each feature",
				"Test only on production servers",
			],
		},
		{
			question: "What quote about code is attributed to Guido van Rossum?",
			correctAnswer: "Code is more often read than written",
			wrongAnswers: [
				"Code should be self-documenting",
				"Simple is better than complex",
				"Readability counts",
			],
		},
		{
			question: "Who is Jeff Atwood mentioned in the lecture?",
			correctAnswer: "Co-founder of StackOverflow",
			wrongAnswers: [
				"Creator of Python",
				"Author of pytest",
				"Developer of GitHub",
			],
		},
		{
			question: "What is Jeff Atwood's first guideline for comments?",
			correctAnswer:
				"Keep comments as close to the code being described as possible",
			wrongAnswers: [
				"Don't use complex formatting",
				"Don't include redundant information",
				"Design your code to comment itself",
			],
		},
		{
			question: "What is Jeff Atwood's second guideline for comments?",
			correctAnswer:
				"Don't use complex formatting (such as tables or ASCII figures)",
			wrongAnswers: [
				"Keep comments close to the code",
				"Don't include redundant information",
				"Design your code to comment itself",
			],
		},
		{
			question: "What is Jeff Atwood's fourth guideline for comments?",
			correctAnswer: "Design your code to comment itself",
			wrongAnswers: [
				"Keep comments close to the code",
				"Don't use complex formatting",
				"Don't include redundant information",
			],
		},
		{
			question:
				"What is the difference between comments and documentation according to the lecture?",
			correctAnswer:
				"Comments are for developers vs. documentation is for users",
			wrongAnswers: [
				"Comments are longer vs. documentation is shorter",
				"Comments use special syntax vs. documentation uses plain text",
				"Comments are optional vs. documentation is required",
			],
		},
		{
			question: "What Python feature is used for documentation?",
			correctAnswer: "Docstrings",
			wrongAnswers: ["Comments", "Annotations", "Metadata"],
		},
		{
			question: "How do you access a function's docstring programmatically?",
			correctAnswer: "Using the __doc__ attribute",
			wrongAnswers: [
				"Using the __help__ attribute",
				"Using the __info__ attribute",
				"Using the __description__ attribute",
			],
		},
		{
			question: "How do you create a docstring in Python?",
			correctAnswer: "Write a string directly after a definition",
			wrongAnswers: [
				"Use the @doc decorator",
				"Call the doc() function",
				"Use special comment syntax",
			],
		},
		{
			question: "What should be the first line of a multi-line docstring?",
			correctAnswer: "A one-line summary line",
			wrongAnswers: [
				"The function name",
				"Parameter descriptions",
				"Return value description",
			],
		},
		{
			question:
				"What should follow the summary line in a multi-line docstring?",
			correctAnswer: "A blank line proceeding the summary",
			wrongAnswers: [
				"Parameter list immediately",
				"Code examples",
				"Version information",
			],
		},
		{
			question: "What is doctest used for?",
			correctAnswer:
				"Checking that usage examples in documentation are correct",
			wrongAnswers: [
				"Running unit tests only",
				"Generating documentation automatically",
				"Validating function signatures",
			],
		},
		{
			question: "What was the bug in the add_or_mul function doctest example?",
			correctAnswer: "add_or_mul(3, 4) should return 12, not 7",
			wrongAnswers: [
				"add_or_mul(4, 2) should return 8, not 6",
				"The function name is misspelled",
				"The parameters are in wrong order",
			],
		},
		{
			question: "What are the main problems with using print for all output?",
			correctAnswer:
				"Mixing actual output with debugging info, different importance levels, different user interests",
			wrongAnswers: [
				"Print is too slow for large applications",
				"Print doesn't work in production environments",
				"Print can't handle complex data types",
			],
		},
		{
			question:
				"What is the recommended way to create a logger in each Python file?",
			correctAnswer: "log = logging.getLogger(__name__)",
			wrongAnswers: [
				"log = logging.Logger(__name__)",
				"log = logging.create(__name__)",
				"log = logging.new(__name__)",
			],
		},
		{
			question: "What should you add to your main function for logging?",
			correctAnswer: "logging.basicConfig(level=logging.DEBUG)",
			wrongAnswers: [
				"logging.setup(level=logging.DEBUG)",
				"logging.init(level=logging.DEBUG)",
				"logging.configure(level=logging.DEBUG)",
			],
		},
		{
			question: "What is the DEBUG logging level used for?",
			correctAnswer:
				"Detailed information, typically of interest only when diagnosing problems",
			wrongAnswers: [
				"Confirmation that things are working as expected",
				"An indication that something unexpected happened",
				"Due to a more serious problem",
			],
		},
		{
			question: "What is the INFO logging level used for?",
			correctAnswer: "Confirmation that things are working as expected",
			wrongAnswers: [
				"Detailed information for diagnosing problems",
				"An indication that something unexpected happened",
				"Due to a more serious problem",
			],
		},
		{
			question: "What is the WARNING logging level used for?",
			correctAnswer:
				"An indication that something unexpected happened, or indicative of some problem in the near future",
			wrongAnswers: [
				"Detailed information for diagnosing problems",
				"Confirmation that things are working as expected",
				"Due to a more serious problem",
			],
		},
		{
			question: "What is the ERROR logging level used for?",
			correctAnswer:
				"Due to a more serious problem, the software has not been able to perform some function",
			wrongAnswers: [
				"Detailed information for diagnosing problems",
				"Confirmation that things are working as expected",
				"An indication that something unexpected happened",
			],
		},
		{
			question: "What is the CRITICAL logging level used for?",
			correctAnswer:
				"A serious error, indicating that the program itself may be unable to continue running",
			wrongAnswers: [
				"Due to a more serious problem with some function",
				"An indication that something unexpected happened",
				"Detailed information for diagnosing problems",
			],
		},
		{
			question: "How do you log to a file instead of console?",
			correctAnswer:
				'logging.basicConfig(filename="example.log", level=logging.DEBUG)',
			wrongAnswers: [
				'logging.setFile("example.log")',
				'logging.basicConfig(output="example.log", level=logging.DEBUG)',
				'logging.configure(file="example.log", level=logging.DEBUG)',
			],
		},
		{
			question:
				"What is the recommended way to format log messages with variables?",
			correctAnswer: 'log.debug("x and y have values %s and %s", x, y)',
			wrongAnswers: [
				'log.debug(f"x and y have values {x} and {y}")',
				'log.debug("x and y have values " + str(x) + " and " + str(y))',
				'log.debug("x and y have values {0} and {1}".format(x, y))',
			],
		},
		{
			question: "Why should you avoid f-strings in log messages?",
			correctAnswer:
				"Formatting could be costly and unneeded if debug is not enabled",
			wrongAnswers: [
				"F-strings don't work with logging module",
				"F-strings are deprecated in Python",
				"F-strings cause memory leaks in logging",
			],
		},
		{
			question:
				"According to the lecture, what should you use print for vs logging?",
			correctAnswer: "Display things to user: print, to developer: logging",
			wrongAnswers: [
				"Simple messages: print, complex messages: logging",
				"Debugging: print, production: logging",
				"Temporary output: print, permanent output: logging",
			],
		},
		{
			question:
				"What does the lecture say about real applications and print statements?",
			correctAnswer: "Most real applications will never use print",
			wrongAnswers: [
				"Real applications use print for user output only",
				"Real applications use both print and logging equally",
				"Real applications prefer print over logging",
			],
		},
		{
			question:
				"What error occurs when trying to access a non-existent key in the buggy Counter class?",
			correctAnswer: "KeyError from __getitem__ method",
			wrongAnswers: [
				"IndexError from __getitem__ method",
				"ValueError from __iadd__ method",
				"AttributeError from __init__ method",
			],
		},
		{
			question: "What does the Counter class use internally to store data?",
			correctAnswer: "A dictionary (_data)",
			wrongAnswers: ["A list", "A set", "A tuple"],
		},
		{
			question:
				"What method does the Counter class implement for the += operator?",
			correctAnswer: "__iadd__",
			wrongAnswers: ["__add__", "__plus__", "__increment__"],
		},
		{
			question:
				"In the buggy tuple sorting example, what was the assertion that failed?",
			correctAnswer: 'assert y >= x, f"Expected {x} <= {y}"',
			wrongAnswers: [
				'assert x <= y, f"Expected {x} <= {y}"',
				'assert y > x, f"Expected {x} < {y}"',
				'assert x < y, f"Expected {x} < {y}"',
			],
		},
		{
			question:
				"What was wrong with the assumption in the tuple sorting example?",
			correctAnswer:
				"sorted() sorts by first element of tuple, not ensuring y >= x",
			wrongAnswers: [
				"The loop variable order was incorrect",
				"The max_diff calculation was wrong",
				"The list initialization was incorrect",
			],
		},
		{
			question:
				"What important skill does the lecture mention but not cover in detail?",
			correctAnswer: "Debugging (IDE specific)",
			wrongAnswers: [
				"Version control",
				"Code review",
				"Performance optimization",
			],
		},
	],

	20: [
		{
			question:
				"What are the three main topics covered in Week 20 of Advanced Python Topics?",
			correctAnswer: "Dependencies, Command Line Arguments, A Look Back",
			wrongAnswers: [
				"Virtual Environments, Testing, Documentation",
				"Packages, Modules, Classes",
				"Functions, Objects, Collections",
			],
		},
		{
			question: "What does 'pip' stand for?",
			correctAnswer: "Pip Installs Packages",
			wrongAnswers: [
				"Python Install Package",
				"Package Installation Program",
				"Python Integrated Packager",
			],
		},
		{
			question: "What is the command to install a package using pip?",
			correctAnswer: "pip install <package>",
			wrongAnswers: [
				"pip get <package>",
				"pip download <package>",
				"pip add <package>",
			],
		},
		{
			question: "What is the command to upgrade a package using pip?",
			correctAnswer: "pip install --upgrade <package>",
			wrongAnswers: [
				"pip upgrade <package>",
				"pip update <package>",
				"pip install --update <package>",
			],
		},
		{
			question: "What is the command to uninstall a package using pip?",
			correctAnswer: "pip uninstall <package>",
			wrongAnswers: [
				"pip remove <package>",
				"pip delete <package>",
				"pip drop <package>",
			],
		},
		{
			question: "What might you need to use instead of 'pip' on some systems?",
			correctAnswer: "pip3",
			wrongAnswers: ["python-pip", "pip-python", "python3-pip"],
		},
		{
			question: "What package would you install to download YouTube videos?",
			correctAnswer: "yt-dlp",
			wrongAnswers: ["youtube-dl", "video-downloader", "yt-download"],
		},
		{
			question: "What packages would you install to train a neural network?",
			correctAnswer: "keras tensorflow (or pytorch)",
			wrongAnswers: ["numpy scipy", "sklearn pandas", "matplotlib seaborn"],
		},
		{
			question: "What package would you install to build a webpage?",
			correctAnswer: "django (or flask)",
			wrongAnswers: ["html5lib", "web-framework", "http-server"],
		},
		{
			question: "What package would you install for computer vision tasks?",
			correctAnswer: "opencv",
			wrongAnswers: ["vision-lib", "image-processing", "cv-tools"],
		},
		{
			question: "What package would you install to program a game?",
			correctAnswer: "pygame",
			wrongAnswers: ["game-engine", "graphics-lib", "python-games"],
		},
		{
			question:
				"What packages would you install for data analysis and visualization?",
			correctAnswer: "pandas seaborn",
			wrongAnswers: ["numpy matplotlib", "scipy plotly", "data-tools charts"],
		},
		{
			question: "What is Python's solution for managing dependencies?",
			correctAnswer: "requirements.txt",
			wrongAnswers: ["dependencies.txt", "packages.txt", "imports.txt"],
		},
		{
			question:
				"What is the syntax for specifying a minimum version in requirements.txt?",
			correctAnswer: "keras>=3.0.0",
			wrongAnswers: ["keras>3.0.0", "keras minimum 3.0.0", "keras^3.0.0"],
		},
		{
			question:
				"What is the syntax for specifying an exact version pattern in requirements.txt?",
			correctAnswer: "some_package==2.4.*",
			wrongAnswers: [
				"some_package=2.4.*",
				"some_package~=2.4.*",
				"some_package@2.4.*",
			],
		},
		{
			question:
				"What command installs all requirements from a requirements.txt file?",
			correctAnswer: "pip install -r requirements.txt",
			wrongAnswers: [
				"pip install --requirements requirements.txt",
				"pip install -f requirements.txt",
				"pip install --file requirements.txt",
			],
		},
		{
			question:
				"What is Python's solution for handling different package versions across projects?",
			correctAnswer: "Virtual Environments",
			wrongAnswers: [
				"Package Managers",
				"Version Control",
				"Dependency Isolation",
			],
		},
		{
			question: "What is a virtual environment (venv) in a nutshell?",
			correctAnswer: "A copy of Python",
			wrongAnswers: [
				"A separate Python installation",
				"A Docker container for Python",
				"A Python configuration file",
			],
		},
		{
			question:
				"What is initially available when you create a new virtual environment?",
			correctAnswer: "Only the standard library",
			wrongAnswers: [
				"All previously installed packages",
				"The most common packages",
				"No packages at all",
			],
		},
		{
			question: "What command creates a virtual environment?",
			correctAnswer: "python -m venv venv",
			wrongAnswers: [
				"python -m virtualenv venv",
				"python create-venv venv",
				"python -m env venv",
			],
		},
		{
			question: "What is important to know about moving virtual environments?",
			correctAnswer:
				"They cannot be moved around - recreate if you move the project",
			wrongAnswers: [
				"They can be moved but need reconfiguration",
				"They are portable and can be moved anywhere",
				"They automatically update paths when moved",
			],
		},
		{
			question: "What command activates a virtual environment on Linux/macOS?",
			correctAnswer: ". ./venv/bin/activate",
			wrongAnswers: [
				"source venv/bin/activate",
				"activate venv/bin",
				"./venv/bin/activate",
			],
		},
		{
			question: "What command activates a virtual environment on Windows?",
			correctAnswer: "venv\\Scripts\\activate",
			wrongAnswers: [
				"venv/Scripts/activate",
				"activate venv\\Scripts",
				".\\venv\\Scripts\\activate",
			],
		},
		{
			question:
				"What should your shell show when a virtual environment is activated?",
			correctAnswer: "(venv) as prompt",
			wrongAnswers: ["[venv] as prompt", "<venv> as prompt", "venv: as prompt"],
		},
		{
			question:
				"What is mentioned as a newer alternative to traditional virtual environments?",
			correctAnswer: "uv",
			wrongAnswers: ["pipenv", "conda", "poetry"],
		},
		{
			question: "On many systems, what is preferable for installing yt-dlp?",
			correctAnswer: "pipx install yt-dlp",
			wrongAnswers: [
				"pip install yt-dlp",
				"pip3 install yt-dlp",
				"python -m pip install yt-dlp",
			],
		},
		{
			question: "What Python variable contains command line arguments?",
			correctAnswer: "sys.argv",
			wrongAnswers: ["sys.args", "sys.arguments", "sys.cmdline"],
		},
		{
			question:
				"What would be the output of 'python argv_example.py 1 foo None'?",
			correctAnswer: "['argv_example.py', '1', 'foo', 'None']",
			wrongAnswers: [
				"['1', 'foo', 'None']",
				"['python', 'argv_example.py', '1', 'foo', 'None']",
				"[1, 'foo', None]",
			],
		},
		{
			question: "What is the first element of the argument vector (sys.argv)?",
			correctAnswer: "The name of the script",
			wrongAnswers: [
				"The Python interpreter path",
				"The first command line argument",
				"The current directory",
			],
		},
		{
			question: "What type are all arguments in sys.argv?",
			correctAnswer: "Strings",
			wrongAnswers: [
				"Mixed types based on content",
				"Objects",
				"Integers when numeric",
			],
		},
		{
			question:
				"What Python module is used for writing command-line interfaces?",
			correctAnswer: "argparse",
			wrongAnswers: ["cmdparse", "argparser", "cli"],
		},
		{
			question: "How do you start using argparse?",
			correctAnswer: "parser = argparse.ArgumentParser()",
			wrongAnswers: [
				"parser = argparse.Parser()",
				"parser = argparse.new_parser()",
				"parser = argparse.create_parser()",
			],
		},
		{
			question: "How do you specify a positional argument in argparse?",
			correctAnswer: 'parser.add_argument("name")',
			wrongAnswers: [
				'parser.add_argument("--name")',
				'parser.add_positional("name")',
				'parser.add_argument("-name")',
			],
		},
		{
			question: "How do you specify an option argument in argparse?",
			correctAnswer: 'parser.add_argument("--option")',
			wrongAnswers: [
				'parser.add_argument("option")',
				'parser.add_option("--option")',
				'parser.add_argument("-option")',
			],
		},
		{
			question:
				"What parameter adds explanatory text to an argument in argparse?",
			correctAnswer: 'help="Helpful text"',
			wrongAnswers: [
				'description="Helpful text"',
				'info="Helpful text"',
				'text="Helpful text"',
			],
		},
		{
			question: "What parameter specifies the type of an argument in argparse?",
			correctAnswer: "type=int",
			wrongAnswers: ["dtype=int", "argtype=int", "expect=int"],
		},
		{
			question: "What parameter makes an argument required in argparse?",
			correctAnswer: "required=True",
			wrongAnswers: ["mandatory=True", "needed=True", "must_have=True"],
		},
		{
			question:
				"What parameter sets a default value for an argument in argparse?",
			correctAnswer: "default=x",
			wrongAnswers: ["initial=x", "fallback=x", "value=x"],
		},
		{
			question:
				"What action creates a switch that stores True when specified in argparse?",
			correctAnswer: 'action="store_true"',
			wrongAnswers: ['action="boolean"', 'action="flag"', 'action="switch"'],
		},
		{
			question: "What method parses the arguments in argparse?",
			correctAnswer: "parser.parse_args()",
			wrongAnswers: [
				"parser.parse()",
				"parser.get_args()",
				"parser.process_args()",
			],
		},
		{
			question: "What is mentioned as an advanced alternative to argparse?",
			correctAnswer: "click (Command Line Interface Creation Kit)",
			wrongAnswers: ["fire", "typer", "docopt"],
		},
		{
			question:
				"According to the lecture, what should you almost never need to use directly?",
			correctAnswer: "sys.argv",
			wrongAnswers: [
				"argparse",
				"command line arguments",
				"parser.parse_args()",
			],
		},
		{
			question: "What syntax indicates a parameter type in Python type hints?",
			correctAnswer: "n: int",
			wrongAnswers: ["n -> int", "int n", "n = int"],
		},
		{
			question: "What syntax indicates a return type in Python type hints?",
			correctAnswer: "-> int",
			wrongAnswers: [": int", "returns int", "=> int"],
		},
		{
			question: "Are Python type hints checked during runtime?",
			correctAnswer: "No, they are not checked during runtime",
			wrongAnswers: [
				"Yes, they raise errors if violated",
				"Only in development mode",
				"Only with special flags enabled",
			],
		},
		{
			question: "What is the purpose of Python type hints?",
			correctAnswer: "Support during development (e.g., IDE auto-completion)",
			wrongAnswers: [
				"Runtime type checking",
				"Performance optimization",
				"Memory management",
			],
		},
		{
			question: "What are the basic types mentioned for type hints?",
			correctAnswer: "int, float, str, bool",
			wrongAnswers: [
				"number, text, boolean, object",
				"integer, decimal, string, flag",
				"int, double, char, bool",
			],
		},
		{
			question: "What are the collection types mentioned for type hints?",
			correctAnswer: "list, set, dict, tuple",
			wrongAnswers: [
				"array, collection, map, sequence",
				"list, array, hash, pair",
				"vector, set, dictionary, tuple",
			],
		},
		{
			question: "How do you specify the element type of a list in type hints?",
			correctAnswer: "list[int]",
			wrongAnswers: ["list<int>", "list(int)", "list: int"],
		},
		{
			question:
				"How do you specify key-value types for a dictionary in type hints?",
			correctAnswer: "dict[int, str]",
			wrongAnswers: ["dict<int, str>", "dict(int, str)", "dict[int: str]"],
		},
		{
			question: "How do you specify a three-tuple with specific element types?",
			correctAnswer: "tuple[int, str, float]",
			wrongAnswers: [
				"tuple<int, str, float>",
				"tuple(int, str, float)",
				"(int, str, float)",
			],
		},
		{
			question:
				"What operator separates multiple possible types in union types?",
			correctAnswer: "|",
			wrongAnswers: ["&", "+", "or"],
		},
		{
			question:
				"What typing import is used for something that can be iterated over?",
			correctAnswer: "Iterable",
			wrongAnswers: ["Iterator", "Sequence", "Collection"],
		},
		{
			question:
				"What typing import requires both __getitem__ and len() methods?",
			correctAnswer: "Sequence",
			wrongAnswers: ["Iterable", "Collection", "List"],
		},
		{
			question: "What are dict-like types in typing called?",
			correctAnswer: "Mapping and MutableMapping",
			wrongAnswers: [
				"Dictionary and MutableDict",
				"Map and EditableMap",
				"Dict and WritableDict",
			],
		},
		{
			question: "What typing is used for objects that support int(obj)?",
			correctAnswer: "SupportsInt",
			wrongAnswers: ["Convertible", "IntCompatible", "ToInt"],
		},
		{
			question:
				"How do you specify a callable type with two arguments returning int?",
			correctAnswer: "Callable[[int, str], int]",
			wrongAnswers: [
				"Callable<int, str, int>",
				"Callable(int, str) -> int",
				"Function[int, str, int]",
			],
		},
		{
			question: "What is required for @dataclass according to the lecture?",
			correctAnswer: "Type hints",
			wrongAnswers: [
				"Documentation strings",
				"Default values",
				"Method definitions",
			],
		},
		{
			question: "What is mentioned as a static type checker for Python?",
			correctAnswer: "mypy",
			wrongAnswers: ["pylint", "flake8", "pytype"],
		},
		{
			question: "What is Python described as in terms of typing?",
			correctAnswer: "Dynamically typed + uses duck typing",
			wrongAnswers: [
				"Statically typed with runtime checks",
				"Weakly typed with implicit conversion",
				"Strongly typed with compile-time checking",
			],
		},
		{
			question: "What type of language is Python in terms of execution?",
			correctAnswer: "Interpreted language – no separate compilation",
			wrongAnswers: [
				"Compiled language with bytecode",
				"Hybrid compiled-interpreted language",
				"Just-in-time compiled language",
			],
		},
		{
			question: "What is Python ideal for according to the lecture?",
			correctAnswer: "Scripting and supervision tasks",
			wrongAnswers: [
				"High-performance computing",
				"System programming",
				"Real-time applications",
			],
		},
		{
			question: "What is Python NOT suitable for?",
			correctAnswer: "High-performance implementations",
			wrongAnswers: ["Web development", "Data analysis", "Automation scripts"],
		},
		{
			question: "What is Python good for in terms of development process?",
			correctAnswer: "Prototyping",
			wrongAnswers: [
				"Production optimization",
				"Memory management",
				"Performance tuning",
			],
		},
		{
			question: "What are the basic types mentioned in the summary?",
			correctAnswer: "bool, int, float, str",
			wrongAnswers: [
				"boolean, integer, decimal, string",
				"bit, number, real, text",
				"flag, int, double, char",
			],
		},
		{
			question: "What collections are mentioned in the summary?",
			correctAnswer: "set, list",
			wrongAnswers: ["array, vector", "collection, sequence", "tuple, dict"],
		},
		{
			question: "What type of mapping is mentioned in the summary?",
			correctAnswer: "dict",
			wrongAnswers: ["map", "hash", "table"],
		},
		{
			question: "What is the difference between / and // operators?",
			correctAnswer: "/ true division, // floor division",
			wrongAnswers: [
				"/ float division, // integer division",
				"/ regular division, // modulo division",
				"/ exact division, // approximate division",
			],
		},
		{
			question:
				"What is the syntax for f-string formatting mentioned in the summary?",
			correctAnswer: 'f"{number:05d} {rate:.4f}"',
			wrongAnswers: [
				'f"{number:5d} {rate:4f}"',
				'f"{number:%05d} {rate:%.4f}"',
				'f"{number::05d} {rate::.4f}"',
			],
		},
		{
			question: "What file operation syntax is mentioned in the summary?",
			correctAnswer: 'with pathlib.Path("file.py").open("rt") as f:',
			wrongAnswers: [
				'with open("file.py", "rt") as f:',
				'with pathlib.open("file.py", "rt") as f:',
				'with Path("file.py").read("rt") as f:',
			],
		},
		{
			question: "What types do set and dict require?",
			correctAnswer: "Hashable types",
			wrongAnswers: [
				"Immutable types",
				"Comparable types",
				"Serializable types",
			],
		},
		{
			question: "What is the syntax for creating a custom exception?",
			correctAnswer: "class MyException(Exception):",
			wrongAnswers: [
				"class MyException extends Exception:",
				"class MyException(Error):",
				"class MyException inherits Exception:",
			],
		},
		{
			question: "What are methods described as in the objects section?",
			correctAnswer: "Function with self",
			wrongAnswers: [
				"Class procedures",
				"Object functions",
				"Instance procedures",
			],
		},
		{
			question: "What magic methods are mentioned in the summary?",
			correctAnswer: "__eq__, __hash__, __str__",
			wrongAnswers: [
				"__init__, __new__, __del__",
				"__get__, __set__, __delete__",
				"__add__, __sub__, __mul__",
			],
		},
		{
			question: "What does 'import xy' do according to the summary?",
			correctAnswer: "Executes code, makes everything available under xy",
			wrongAnswers: [
				"Only imports functions from xy",
				"Creates a reference to module xy",
				"Copies xy code into current namespace",
			],
		},
		{
			question: "What logging setup is mentioned in best practices?",
			correctAnswer: "import logging, log = logging.getLogger(__name__)",
			wrongAnswers: [
				"import logging, log = logging.Logger(__name__)",
				"import logging, log = logging.create(__name__)",
				"import logging, log = logging.new(__name__)",
			],
		},
		{
			question: "What formatting tool is mentioned in best practices?",
			correctAnswer: "black file.py (or ruff format file.py)",
			wrongAnswers: ["autopep8 file.py", "yapf file.py", "format file.py"],
		},
		{
			question: "What imports are included in the program template?",
			correctAnswer: "logging, pathlib, argparse",
			wrongAnswers: [
				"sys, os, json",
				"typing, collections, itertools",
				"unittest, doctest, pytest",
			],
		},
		{
			question: "What is the main function signature in the program template?",
			correctAnswer: "def main(args):",
			wrongAnswers: ["def main():", "def main(*args):", "def main(**kwargs):"],
		},
		{
			question: "What is the condition check in the program template?",
			correctAnswer: 'if __name__ == "__main__":',
			wrongAnswers: [
				'if __main__ == "__name__":',
				'if __file__ == "__main__":',
				'if __module__ == "__main__":',
			],
		},
	],

	21: [
		{
			question: "What year was Java originally developed?",
			correctAnswer: "1995",
			wrongAnswers: ["1996", "1994", "1993"],
		},
		{
			question: "What year was Java released?",
			correctAnswer: "1996",
			wrongAnswers: ["1995", "1997", "1994"],
		},
		{
			question: "What is Java named after?",
			correctAnswer: "Java coffee from Indonesia",
			wrongAnswers: [
				"The Java island",
				"A programming concept",
				"The creator's nickname",
			],
		},
		{
			question: "How many bits does a char data type use in Java?",
			correctAnswer: "8 bit",
			wrongAnswers: ["16 bit", "32 bit", "64 bit"],
		},
		{
			question: "How many bits does an int data type use in Java?",
			correctAnswer: "32 bit",
			wrongAnswers: ["16 bit", "64 bit", "8 bit"],
		},
		{
			question: "How many bits does a long data type use in Java?",
			correctAnswer: "64 bit",
			wrongAnswers: ["32 bit", "128 bit", "16 bit"],
		},
		{
			question: "How many bits does a double data type use in Java?",
			correctAnswer: "64 bit",
			wrongAnswers: ["32 bit", "128 bit", "16 bit"],
		},
		{
			question: "What command is used to compile Java source code?",
			correctAnswer: "javac",
			wrongAnswers: ["java", "compile", "javacompile"],
		},
		{
			question: "What command is used to run Java bytecode?",
			correctAnswer: "java",
			wrongAnswers: ["javac", "run", "execute"],
		},
		{
			question: "What file extension does Java bytecode have?",
			correctAnswer: ".class",
			wrongAnswers: [".java", ".byte", ".jvm"],
		},
		{
			question: "What does JVM stand for?",
			correctAnswer: "Java Virtual Machine",
			wrongAnswers: [
				"Java Virtual Memory",
				"Java Variable Machine",
				"Java Verification Module",
			],
		},
		{
			question: "What does JDK stand for?",
			correctAnswer: "Java Development Kit",
			wrongAnswers: [
				"Java Deployment Kit",
				"Java Development Kernel",
				"Java Debug Kit",
			],
		},
		{
			question: "What does WORA stand for in Java?",
			correctAnswer: "Write once, run anywhere",
			wrongAnswers: [
				"Write once, run always",
				"Work once, run anywhere",
				"Write often, run anywhere",
			],
		},
		{
			question: "What must the Java file name match for technical reasons?",
			correctAnswer: "The class name",
			wrongAnswers: [
				"The method name",
				"The package name",
				"The variable name",
			],
		},
		{
			question: "What are the two types of line comments in Java (like in C)?",
			correctAnswer: "// and /* */",
			wrongAnswers: ["# and /* */", "// and <!-- -->", "# and //"],
		},
		{
			question: "What keyword is used to declare constants in Java?",
			correctAnswer: "final",
			wrongAnswers: ["const", "constant", "static"],
		},
		{
			question: "What character is used for single character literals in Java?",
			correctAnswer: "Single quotes",
			wrongAnswers: ["Double quotes", "Backticks", "Forward slashes"],
		},
		{
			question: "What character is used for string literals in Java?",
			correctAnswer: "Double quotes",
			wrongAnswers: ["Single quotes", "Backticks", "Forward slashes"],
		},
		{
			question: "Are strings mutable or immutable in Java?",
			correctAnswer: "Immutable",
			wrongAnswers: ["Mutable", "Depends on declaration", "Partially mutable"],
		},
		{
			question:
				"What method is used to format strings in Java (similar to f-strings)?",
			correctAnswer: "formatted()",
			wrongAnswers: ["format()", "sprintf()", "fstring()"],
		},
		{
			question:
				"What value are arrays always filled with when created in Java?",
			correctAnswer: "Zero (false, 0, or 0.0)",
			wrongAnswers: ["Null values", "Random values", "Undefined values"],
		},
		{
			question: "How do you access the length of an array in Java?",
			correctAnswer: "array.length",
			wrongAnswers: ["array.size()", "array.length()", "length(array)"],
		},
		{
			question: "Does Java support negative indices for arrays?",
			correctAnswer: "No",
			wrongAnswers: [
				"Yes",
				"Only for certain array types",
				"Only with special syntax",
			],
		},
		{
			question: "Does Java support array slicing?",
			correctAnswer: "No",
			wrongAnswers: [
				"Yes",
				"Only for string arrays",
				"Only with special libraries",
			],
		},
		{
			question:
				"What happens when you access an array with a negative index in Java?",
			correctAnswer: "An exception is thrown",
			wrongAnswers: [
				"Returns null",
				"Returns the first element",
				"Causes undefined behavior",
			],
		},
		{
			question: "When you declare an array as final, what does final apply to?",
			correctAnswer: "The reference, not the contents",
			wrongAnswers: [
				"The contents, not the reference",
				"Both reference and contents",
				"Neither reference nor contents",
			],
		},
		{
			question: "What is the Java equivalent of Python's 'for in' loop called?",
			correctAnswer: "Enhanced for loop",
			wrongAnswers: [
				"Advanced for loop",
				"Improved for loop",
				"Extended for loop",
			],
		},
		{
			question: "What does System.err.println() do?",
			correctAnswer: "Prints to error output",
			wrongAnswers: [
				"Prints to standard output",
				"Prints error messages only",
				"Prints in red color",
			],
		},
		{
			question: "What type of stream is System.in?",
			correctAnswer: "InputStream (byte-oriented)",
			wrongAnswers: ["StringStream", "CharacterStream", "TextStream"],
		},
		{
			question: "What class is used for simple input reading in Java?",
			correctAnswer: "Scanner",
			wrongAnswers: ["Reader", "Input", "BufferedReader"],
		},
		{
			question:
				"What import statement should you use for basic Java utilities according to the lecture?",
			correctAnswer: "import java.util.*;",
			wrongAnswers: [
				"import java.*;",
				"import java.io.*;",
				"import java.lang.*;",
			],
		},
		{
			question: "What method splits a string into a String array?",
			correctAnswer: "split()",
			wrongAnswers: ["divide()", "separate()", "parse()"],
		},
		{
			question: "What method converts a string to an integer?",
			correctAnswer: "Integer.parseInt()",
			wrongAnswers: [
				"Integer.valueOf()",
				"String.toInt()",
				"Integer.convert()",
			],
		},
		{
			question: "What method converts a string to a double?",
			correctAnswer: "Double.parseDouble()",
			wrongAnswers: [
				"Double.valueOf()",
				"String.toDouble()",
				"Double.convert()",
			],
		},
		{
			question: "What exception is thrown when parsing fails?",
			correctAnswer: "NumberFormatException",
			wrongAnswers: [
				"ParseException",
				"FormatException",
				"ConversionException",
			],
		},
		{
			question: "What exception is thrown when there's no next element?",
			correctAnswer: "NoSuchElementException",
			wrongAnswers: [
				"ElementNotFoundException",
				"MissingElementException",
				"EmptyElementException",
			],
		},
		{
			question:
				"What is a specific Java feature regarding exceptions that makes code not compile if not handled?",
			correctAnswer: "Checked exceptions",
			wrongAnswers: [
				"Unchecked exceptions",
				"Runtime exceptions",
				"Compile-time exceptions",
			],
		},
		{
			question:
				"What is an example of a checked exception mentioned in the lecture?",
			correctAnswer: "FileNotFoundException",
			wrongAnswers: [
				"NullPointerException",
				"NumberFormatException",
				"ArrayIndexOutOfBoundsException",
			],
		},
		{
			question: "Does Java have functions?",
			correctAnswer: "No",
			wrongAnswers: ["Yes", "Only static functions", "Only instance functions"],
		},
		{
			question: "What are the closest thing to functions in Java?",
			correctAnswer: "Static methods",
			wrongAnswers: ["Instance methods", "Abstract methods", "Private methods"],
		},
		{
			question: "What is Java's equivalent to Python's None?",
			correctAnswer: "null",
			wrongAnswers: ["None", "empty", "void"],
		},
		{
			question: "What exception is thrown when accessing a null variable?",
			correctAnswer: "NullPointerException",
			wrongAnswers: ["NullException", "PointerException", "AccessException"],
		},
		{
			question:
				"Should you catch NullPointerException according to the lecture?",
			correctAnswer: "No",
			wrongAnswers: ["Yes", "Only in special cases", "Only for debugging"],
		},
		{
			question: "In Java, what does == check for?",
			correctAnswer: "Referential equality",
			wrongAnswers: [
				"Structural equality",
				"Value equality",
				"Content equality",
			],
		},
		{
			question: "In Java, what method checks for structural equality?",
			correctAnswer: "equals()",
			wrongAnswers: ["compare()", "isEqual()", "matches()"],
		},
		{
			question: "What do Java documentation comments start with?",
			correctAnswer: "/**",
			wrongAnswers: ["/*", "//", "##"],
		},
		{
			question: "What is Java's documentation system called?",
			correctAnswer: "Javadoc",
			wrongAnswers: ["JavaDoc", "JDoc", "DocJava"],
		},
		{
			question: "Are assertions enabled by default in Java?",
			correctAnswer: "No",
			wrongAnswers: ["Yes", "Only in debug mode", "Only in development"],
		},
		{
			question: "What flag is used to enable assertions when running Java?",
			correctAnswer: "-ea",
			wrongAnswers: ["-assert", "-enable", "-debug"],
		},
		{
			question: "What does -ea stand for?",
			correctAnswer: "enable assertions",
			wrongAnswers: ["execute assertions", "enable all", "error analysis"],
		},
		{
			question: "Which IDEs are recommended in the lecture?",
			correctAnswer: "IntelliJ Ultimate or VSCode",
			wrongAnswers: [
				"Eclipse or NetBeans",
				"IntelliJ Community or Eclipse",
				"VSCode or Sublime Text",
			],
		},
		{
			question:
				"According to the lecture, Java sits between which two languages in many aspects?",
			correctAnswer: "C and Python",
			wrongAnswers: [
				"C++ and Python",
				"C and JavaScript",
				"Python and JavaScript",
			],
		},
		{
			question: "Java syntax is quite similar to which language?",
			correctAnswer: "C",
			wrongAnswers: ["Python", "JavaScript", "Pascal"],
		},
		{
			question: "What type of memory management does Java use?",
			correctAnswer: "Automatic memory management / Garbage collection",
			wrongAnswers: [
				"Manual memory management",
				"Stack-based memory management",
				"Reference counting",
			],
		},
		{
			question: "How does Java indicate errors?",
			correctAnswer: "Uses exceptions",
			wrongAnswers: [
				"Uses error codes",
				"Uses return values",
				"Uses global variables",
			],
		},
		{
			question: "What does Java use for statements and blocks (like C)?",
			correctAnswer: "Semicolon for statements and braces for blocks",
			wrongAnswers: [
				"Colons for statements and indentation for blocks",
				"Periods for statements and parentheses for blocks",
				"Commas for statements and brackets for blocks",
			],
		},
		{
			question: "In Java, (nearly) everything is what?",
			correctAnswer: "An object",
			wrongAnswers: ["A primitive", "A function", "A class"],
		},
		{
			question: "How is Java's speed typically compared to C and Python?",
			correctAnswer: "Slightly slower than C, faster than Python",
			wrongAnswers: [
				"Faster than C, slower than Python",
				"Slower than both C and Python",
				"Faster than both C and Python",
			],
		},
		{
			question:
				"What are some examples of platforms where Java is supported according to the lecture?",
			correctAnswer:
				"smart cards, toasters, smartphones (Android!), PCs, supercomputers",
			wrongAnswers: [
				"only desktop computers and servers",
				"only mobile devices and tablets",
				"only web browsers and servers",
			],
		},
		{
			question:
				"Is declaring variables as final important for performance according to the lecture?",
			correctAnswer: "No, it's largely irrelevant for performance",
			wrongAnswers: [
				"Yes, it significantly improves performance",
				"Yes, it moderately improves performance",
				"Only in certain cases",
			],
		},
		{
			question:
				"What is the opinion given about Java's IDE support compared to Python and C?",
			correctAnswer: "FAR better than Python and C",
			wrongAnswers: [
				"Slightly better than Python and C",
				"About the same as Python and C",
				"Worse than Python and C",
			],
		},
		{
			question:
				"According to the lecture, is the Scanner class the most efficient for input?",
			correctAnswer: "No",
			wrongAnswers: ["Yes", "Only for small inputs", "Only for large inputs"],
		},
	],

	22: [
		{
			question: "How were objects used in Python according to the lecture?",
			correctAnswer:
				'As "containers" for data and functions, like a dictionary',
			wrongAnswers: [
				"As the centrepiece and actors of the program",
				"Primarily for inheritance and polymorphism",
				"Only for encapsulation and abstraction",
			],
		},
		{
			question:
				"What is Object-Oriented Programming described as in the lecture?",
			correctAnswer: "One possible programming paradigm",
			wrongAnswers: [
				"The only correct programming paradigm",
				"A flawed programming approach",
				"A replacement for functional programming",
			],
		},
		{
			question:
				"According to the lecture, what is the current status of Object-Oriented Programming?",
			correctAnswer: "One of the most prominent programming paradigms",
			wrongAnswers: [
				"A declining programming paradigm",
				"The newest programming paradigm",
				"An experimental programming approach",
			],
		},
		{
			question:
				"What does the lecture say about flaws in Object-Oriented Programming?",
			correctAnswer:
				"It is not without flaws, especially many ideas have multiple ways of doing them",
			wrongAnswers: [
				"It has no significant flaws",
				"Its only flaw is complexity",
				"It only has performance-related flaws",
			],
		},
		{
			question: "What is a class in Object-Oriented Programming?",
			correctAnswer: "Definition of the structure and functionality",
			wrongAnswers: [
				"A concrete object that can be used",
				"A collection of functions only",
				"A data container without methods",
			],
		},
		{
			question: "What is an instance in Object-Oriented Programming?",
			correctAnswer: "Concrete objects that are an instantiation of a class",
			wrongAnswers: [
				"The definition of structure and functionality",
				"A method within a class",
				"A static variable",
			],
		},
		{
			question: "What car analogy is used to explain classes?",
			correctAnswer:
				"The (precise) schematics of a car and all its functionality",
			wrongAnswers: [
				"The actual car standing in front of your home",
				"The engine of a car",
				"The color and design of a car",
			],
		},
		{
			question: "What car analogy is used to explain instances?",
			correctAnswer: "The actual car standing in front of your home",
			wrongAnswers: [
				"The (precise) schematics of a car and all its functionality",
				"The manufacturing process of a car",
				"The blueprint of a car engine",
			],
		},
		{
			question: "What are the two main components of a class anatomy?",
			correctAnswer: "Members (or Fields, Attributes, Properties) and Methods",
			wrongAnswers: [
				"Constructors and Destructors",
				"Public and Private sections",
				"Static and Instance variables",
			],
		},
		{
			question: "What are Members in a class also called?",
			correctAnswer: "Fields, Attributes, or Properties",
			wrongAnswers: [
				"Functions, Procedures, or Subroutines",
				"Constructors, Initializers, or Builders",
				"Interfaces, Contracts, or Protocols",
			],
		},
		{
			question: "What do Members represent in a class?",
			correctAnswer: "Variables / Data",
			wrongAnswers: [
				"Functions associated with the object",
				"Inheritance relationships",
				"Access control modifiers",
			],
		},
		{
			question: "What do Methods represent in a class?",
			correctAnswer: "Functions associated with the kind of object / class",
			wrongAnswers: [
				"Variables and data storage",
				"Inheritance hierarchies",
				"Memory allocation patterns",
			],
		},
		{
			question: "In the car example, what are examples of Members?",
			correctAnswer: "Speed of fuel pump, RPM",
			wrongAnswers: [
				"accelerate, brake, enable light",
				"The car's color and model",
				"The steering wheel and pedals",
			],
		},
		{
			question: "In the car example, what are examples of Methods?",
			correctAnswer: "accelerate, brake, enable light",
			wrongAnswers: [
				"Speed of fuel pump, RPM",
				"The car's engine size",
				"The number of seats",
			],
		},
		{
			question: "How do you declare a class in Java according to the lecture?",
			correctAnswer: "class Name { ... }",
			wrongAnswers: [
				"class Name:",
				"define class Name { ... }",
				"create class Name { ... }",
			],
		},
		{
			question:
				"How do you declare a class in Python according to the lecture?",
			correctAnswer: "class Name:",
			wrongAnswers: [
				"class Name { ... }",
				"define class Name:",
				"create class Name:",
			],
		},
		{
			question: "What does declaring a class define according to the lecture?",
			correctAnswer: 'The "schematic"! Does not actually do anything.',
			wrongAnswers: [
				"A concrete instance that can be used immediately",
				"A memory allocation for the object",
				"The execution path of the program",
			],
		},
		{
			question: "In Java methods, what is the equivalent of Python's 'self'?",
			correctAnswer: "this",
			wrongAnswers: ["self", "me", "current"],
		},
		{
			question:
				"According to the lecture, do you need to write 'self' in Java methods?",
			correctAnswer: "No",
			wrongAnswers: [
				"Yes, always",
				"Only in constructors",
				"Only in static methods",
			],
		},
		{
			question: "What does creating an object represent in the car analogy?",
			correctAnswer: "Manufacturing a car according to the schematic",
			wrongAnswers: [
				"Drawing the blueprint of a car",
				"Designing the car's features",
				"Testing the car's performance",
			],
		},
		{
			question:
				"What is the Java syntax for creating an object similar to Python?",
			correctAnswer: "new ExampleObject();",
			wrongAnswers: [
				"ExampleObject()",
				"create ExampleObject();",
				"make ExampleObject();",
			],
		},
		{
			question: "What does 'new Type();' call according to the lecture?",
			correctAnswer: "The constructor of Type (like __init__)",
			wrongAnswers: [
				"The destructor of Type",
				"The main method of Type",
				"The toString method of Type",
			],
		},
		{
			question: "What does the default constructor set everything to?",
			correctAnswer: '"zero"',
			wrongAnswers: ["null", "undefined", "random values"],
		},
		{
			question: "What is a constructor described as in the lecture?",
			correctAnswer: 'Just a "special method"',
			wrongAnswers: [
				"A regular method",
				"A static function",
				"An abstract method",
			],
		},
		{
			question:
				"In Object-Oriented Programming, what are objects described as being the focus of?",
			correctAnswer: 'They are the "centrepiece", they are the actors!',
			wrongAnswers: [
				"They are simple data containers",
				"They are utility functions",
				"They are structural units only",
			],
		},
		{
			question:
				"How were objects used before true OOP according to the lecture?",
			correctAnswer:
				'"Dumb" data containers, just data + functions. Would use them as utilities / structural units',
			wrongAnswers: [
				"As the main actors and centrepiece of programs",
				"Primarily for complex inheritance hierarchies",
				"Only for encapsulation purposes",
			],
		},
		{
			question: "In OOP, what are objects about according to the lecture?",
			correctAnswer: "functionality, not data",
			wrongAnswers: [
				"data, not functionality",
				"both data and functionality equally",
				"neither data nor functionality",
			],
		},
		{
			question: "How do objects interact in OOP according to the lecture?",
			correctAnswer: "via methods",
			wrongAnswers: [
				"via direct data access",
				"via global variables",
				"via function calls only",
			],
		},
		{
			question: "What do objects have in OOP according to the lecture?",
			correctAnswer: "internal members",
			wrongAnswers: [
				"external references only",
				"global state only",
				"static variables only",
			],
		},
		{
			question: "What does the lecture note about different OO languages?",
			correctAnswer: "Different OO languages do things slightly different",
			wrongAnswers: [
				"All OO languages do things exactly the same way",
				"Only Java implements OOP correctly",
				"OO languages are all fundamentally incompatible",
			],
		},
		{
			question:
				"What is the running example used for Abstraction & Encapsulation?",
			correctAnswer: "A TV Remote",
			wrongAnswers: ["A car engine", "A computer keyboard", "A mobile phone"],
		},
		{
			question:
				"What does a TV Remote represent for the user according to the lecture?",
			correctAnswer: "A set of buttons that have an effect on the TV",
			wrongAnswers: [
				"Complicated circuitry and infra-red communication",
				"The internal electronic components",
				"The manufacturing process",
			],
		},
		{
			question:
				"What does a TV Remote contain internally according to the lecture?",
			correctAnswer: "Complicated circuitry, infra-red communication",
			wrongAnswers: [
				"Simple buttons only",
				"Just a battery",
				"Only plastic components",
			],
		},
		{
			question: "What does Abstraction do according to the TV Remote example?",
			correctAnswer:
				"pressOnButton() abstracts away the internal behaviour. When you are using the remote, you do not need to know more",
			wrongAnswers: [
				"It exposes all internal details to the user",
				"It prevents any interaction with the remote",
				"It only handles data storage",
			],
		},
		{
			question:
				"What does Encapsulation do according to the TV Remote example?",
			correctAnswer:
				"pressOnButton() is only way to interact with the internals. When you have a remote, you should not fiddle with the circuits",
			wrongAnswers: [
				"It allows direct access to all internal circuits",
				"It prevents the remote from working",
				"It only protects data, not functionality",
			],
		},
		{
			question: "How do you achieve Abstraction according to the lecture?",
			correctAnswer: "Simple – just define the methods!",
			wrongAnswers: [
				"Use visibility modifiers",
				"Create abstract classes only",
				"Use inheritance",
			],
		},
		{
			question: "How do you achieve Encapsulation according to the lecture?",
			correctAnswer: "Visibility modifiers",
			wrongAnswers: [
				"Just define the methods",
				"Use inheritance",
				"Create abstract classes",
			],
		},
		{
			question:
				"Which language mentioned in the lecture does NOT have visibility concepts?",
			correctAnswer: "Python",
			wrongAnswers: ["Java", "C++", "C#"],
		},
		{
			question: "What are the most important visibility modifiers mentioned?",
			correctAnswer: "public and private",
			wrongAnswers: [
				"static and final",
				"abstract and concrete",
				"virtual and override",
			],
		},
		{
			question:
				"How many additional visibility modifiers does Java have that are not discussed?",
			correctAnswer: "two more",
			wrongAnswers: ["one more", "three more", "four more"],
		},
		{
			question: "What does 'public' mean in terms of visibility?",
			correctAnswer: "Everyone can see / use it (buttons on the remote)",
			wrongAnswers: [
				"Only instances of the class itself can use it",
				"Only subclasses can access it",
				"No one can access it",
			],
		},
		{
			question: "What does 'private' mean in terms of visibility?",
			correctAnswer:
				"Only instances of the class itself can use it (internal circuits)",
			wrongAnswers: [
				"Everyone can see / use it",
				"Only subclasses can access it",
				"Only the main method can access it",
			],
		},
		{
			question: 'What is the "Law of Demeter" also known as?',
			correctAnswer: "the principle of least knowledge",
			wrongAnswers: [
				"the principle of maximum encapsulation",
				"the principle of inheritance",
				"the principle of polymorphism",
			],
		},
		{
			question: 'What does the "Law of Demeter" state?',
			correctAnswer: "Make everything private unless needed",
			wrongAnswers: [
				"Make everything public by default",
				"Use inheritance whenever possible",
				"Always create abstract classes",
			],
		},
		{
			question:
				"According to the lecture, what should generally be private and what should be public?",
			correctAnswer: "All fields private, (some) methods public",
			wrongAnswers: [
				"All fields public, all methods private",
				"Everything should be public",
				"Everything should be private",
			],
		},
		{
			question: "What is the benefit of encapsulating internal structure?",
			correctAnswer:
				"The class is in control of its internals and how they can be modified!",
			wrongAnswers: [
				"It makes the code run faster",
				"It reduces memory usage",
				"It simplifies the syntax",
			],
		},
		{
			question:
				'From an outside perspective, how is the remote "defined" according to the lecture?',
			correctAnswer:
				"by what it does, not how it does it (Functionality over structure)",
			wrongAnswers: [
				"by its internal circuitry and components",
				"by its physical appearance",
				"by its manufacturing process",
			],
		},
		{
			question:
				"What does abstraction and encapsulation ensure according to the lecture?",
			correctAnswer:
				"We can change the internals of the remote without changing anything else",
			wrongAnswers: [
				"The code runs faster",
				"Memory usage is optimized",
				"The program becomes shorter",
			],
		},
		{
			question:
				"How should you think of objects in the OOP way according to the lecture?",
			correctAnswer:
				"Do not think of objects as data containers, but functional units",
			wrongAnswers: [
				"Think of objects primarily as data containers",
				"Think of objects as simple variables",
				"Think of objects as static functions",
			],
		},
		{
			question:
				"In the TV remote example with isOn member, what's the problem with making it public for modification?",
			correctAnswer:
				"You also need to call sendCurrentState()! Could run into all sorts of trouble if not",
			wrongAnswers: [
				"It uses too much memory",
				"It makes the code slower",
				"It violates naming conventions",
			],
		},
		{
			question: "What is the standard pattern for accessing private data?",
			correctAnswer: "Getters and Setters",
			wrongAnswers: [
				"Direct field access",
				"Static methods only",
				"Abstract methods",
			],
		},
		{
			question: "What is the naming convention for getters and setters?",
			correctAnswer:
				"For field <name> have get<Name>() and set<Name>(<type> val)",
			wrongAnswers: [
				"For field <name> have read<Name>() and write<Name>(<type> val)",
				"For field <name> have access<Name>() and modify<Name>(<type> val)",
				"For field <name> have fetch<Name>() and store<Name>(<type> val)",
			],
		},
		{
			question:
				"Why shouldn't you just make fields public instead of using getters and setters?",
			correctAnswer:
				"Maybe things change later – easier to add checks, logging etc. Does not cost performance. Code can be generated by IDE",
			wrongAnswers: [
				"It always causes performance issues",
				"It violates Java syntax rules",
				"It prevents inheritance from working",
			],
		},
		{
			question:
				"What does the lecture say about making fields public in practice?",
			correctAnswer: "This happens and OK if you know what you are doing",
			wrongAnswers: [
				"This should never be done under any circumstances",
				"This is the preferred approach",
				"This only works in specific Java versions",
			],
		},
		{
			question:
				"What is the running example used for Inheritance & Polymorphism?",
			correctAnswer:
				"Messages of a simple messenger, e.g. text and image messages",
			wrongAnswers: [
				"Different types of vehicles",
				"Various types of TV remotes",
				"Different kinds of animals",
			],
		},
		{
			question:
				"What commonality do all messages share in the messenger example?",
			correctAnswer: "Every message needs a recipient",
			wrongAnswers: [
				"Every message has the same size",
				"Every message uses the same format",
				"Every message has the same timestamp",
			],
		},
		{
			question: "What keyword is used for inheritance in Java?",
			correctAnswer: "extends",
			wrongAnswers: ["inherits", "derives", "implements"],
		},
		{
			question: "What does 'class TextMessage extends Message' mean?",
			correctAnswer: "Take things from Message and add more",
			wrongAnswers: [
				"Replace everything in Message",
				"Remove features from Message",
				"Create a completely separate class",
			],
		},
		{
			question:
				"Can a TextMessage access the private recipient field directly?",
			correctAnswer:
				"No! A TextMessage cannot access recipient directly (private)!",
			wrongAnswers: [
				"Yes, inheritance allows direct access to private fields",
				"Only if it's in the same package",
				"Only through static methods",
			],
		},
		{
			question:
				"In inheritance terminology, what is Message in relation to TextMessage?",
			correctAnswer: "Message is the parent / ancestor of TextMessage",
			wrongAnswers: [
				"Message is the child of TextMessage",
				"Message is the sibling of TextMessage",
				"Message is unrelated to TextMessage",
			],
		},
		{
			question:
				"In inheritance terminology, what is TextMessage in relation to Message?",
			correctAnswer: "TextMessage is a child / sub-type of Message",
			wrongAnswers: [
				"TextMessage is the parent of Message",
				"TextMessage is the sibling of Message",
				"TextMessage is unrelated to Message",
			],
		},
		{
			question:
				'What caution does the lecture give about the term "child" in inheritance?',
			correctAnswer:
				'"child" makes it sound "smaller", but TextMessage has more to offer',
			wrongAnswers: [
				'"child" accurately represents that it has fewer features',
				'"child" means it\'s less important',
				'"child" indicates it\'s simpler',
			],
		},
		{
			question:
				"What principle states that a sub-type can behave like the parent type?",
			correctAnswer: "Liskov substitution principle / behavioural subtyping",
			wrongAnswers: [
				"Single responsibility principle",
				"Open-closed principle",
				"Dependency inversion principle",
			],
		},
		{
			question: "What does Polymorphism literally mean?",
			correctAnswer: "Many shapes",
			wrongAnswers: ["One shape", "Different colors", "Multiple functions"],
		},
		{
			question: "What does Polymorphism mean in programming?",
			correctAnswer: "One object can take many roles",
			wrongAnswers: [
				"One object can only have one role",
				"Objects cannot change their behavior",
				"Objects must be identical",
			],
		},
		{
			question: "What type of polymorphism is being discussed in the lecture?",
			correctAnswer: "Subtyping polymorphism, in OOP this is often synonymous",
			wrongAnswers: [
				"Parametric polymorphism",
				"Ad hoc polymorphism",
				"Compile-time polymorphism",
			],
		},
		{
			question:
				"What does the lecture observe about Message and TextMessage being different types?",
			correctAnswer:
				"Not obvious, Message and TextMessage are different types! Some languages do not allow this",
			wrongAnswers: [
				"It's obvious and all languages support this",
				"They are actually the same type",
				"This is not a valid relationship",
			],
		},
		{
			question:
				"In some languages, what does inheritance relate to instead of sub-typing?",
			correctAnswer: "inheritance = relating implementation, not sub-typing",
			wrongAnswers: [
				"inheritance = relating interfaces only",
				"inheritance = relating data structures only",
				"inheritance = relating performance characteristics",
			],
		},
		{
			question: "How is polymorphism used according to the lecture?",
			correctAnswer:
				'Polymorphism is not something you actively use. Rather: A feature of type systems that is "natural"',
			wrongAnswers: [
				"Polymorphism must be explicitly activated in code",
				"Polymorphism requires special syntax",
				"Polymorphism only works with interfaces",
			],
		},
		{
			question: "What other type of polymorphism is mentioned as an example?",
			correctAnswer: "Duck typing also is a form of polymorphism",
			wrongAnswers: [
				"Static typing is a form of polymorphism",
				"Strong typing is a form of polymorphism",
				"Weak typing is a form of polymorphism",
			],
		},
		{
			question:
				'What keyword is used to check if something "can morph" into a type?',
			correctAnswer: "instanceof",
			wrongAnswers: ["typeof", "istype", "checktype"],
		},
		{
			question: "For TextMessage text, what instanceof checks return true?",
			correctAnswer:
				"text instanceof TextMessage and also text instanceof Message",
			wrongAnswers: [
				"Only text instanceof TextMessage",
				"Only text instanceof Message",
				"Neither would return true",
			],
		},
		{
			question:
				"What problem arises when you want to call getSize() on a Message array?",
			correctAnswer:
				"Whenever we have Message m, we cannot m.getSize(); because Message doesn't have getSize()",
			wrongAnswers: [
				"getSize() works perfectly on Message arrays",
				"You need to use instanceof first",
				"You need to cast to Object first",
			],
		},
		{
			question: "What is the issue with adding getSize() to the Message class?",
			correctAnswer: "But a message does not know its content!",
			wrongAnswers: [
				"getSize() is too complex to implement",
				"It would break encapsulation",
				"It requires too much memory",
			],
		},
		{
			question:
				"What's the problem with using instanceof to check message types?",
			correctAnswer: "Not nice: What if we create a new type of message?",
			wrongAnswers: [
				"instanceof is too slow",
				"instanceof doesn't work with inheritance",
				"instanceof causes memory leaks",
			],
		},
		{
			question: "What does the lecture observe about the Message class?",
			correctAnswer:
				"Message is an abstract concept, it does not make sense on its own. Just gathers commonalities of all messages",
			wrongAnswers: [
				"Message should be a concrete class with full implementation",
				"Message should not exist at all",
				"Message should only contain static methods",
			],
		},
		{
			question: "What does it mean when classes are declared abstract?",
			correctAnswer: "they cannot be directly created",
			wrongAnswers: [
				"they can be created like any other class",
				"they can only be created once",
				"they require special permissions to create",
			],
		},
		{
			question: "What makes sense about making Message abstract?",
			correctAnswer:
				"How does a generic Message look like? Only concrete messages (Text, Image, . . .) should exist",
			wrongAnswers: [
				"All classes should be abstract by default",
				"Abstract classes are faster",
				"Abstract classes use less memory",
			],
		},
		{
			question:
				"What are the two options for a descendant when a method is abstract?",
			correctAnswer: "Needs to implement it OR Be abstract itself",
			wrongAnswers: [
				"Must ignore it OR Must override it",
				"Can implement it OR Can delete it",
				"Should implement it OR Should make it static",
			],
		},
		{
			question: "What does an abstract method say according to the lecture?",
			correctAnswer: '"there should be this kind of functionality"',
			wrongAnswers: [
				'"this functionality is optional"',
				'"this functionality is deprecated"',
				'"this functionality is internal only"',
			],
		},
		{
			question: "What does any instance of an abstract class provide?",
			correctAnswer: "the functionality",
			wrongAnswers: [
				"the data structure only",
				"the inheritance hierarchy",
				"the memory layout",
			],
		},
		{
			question: "What is an abstract method compared to in C?",
			correctAnswer: "A bit like a header declaration in C!",
			wrongAnswers: [
				"Like a macro definition in C",
				"Like a global variable in C",
				"Like a typedef in C",
			],
		},
		{
			question: "What is @Override?",
			correctAnswer:
				"an annotation, marking that we overwrite the parent's definition",
			wrongAnswers: [
				"a keyword for creating new methods",
				"a modifier for private methods",
				"a specifier for static methods",
			],
		},
		{
			question: "What is not allowed when a class is abstract?",
			correctAnswer: "new Message(); is not allowed!",
			wrongAnswers: [
				"Extending the class is not allowed",
				"Calling methods is not allowed",
				"Creating subclasses is not allowed",
			],
		},
		{
			question:
				"What is available for any instance of an abstract Message class?",
			correctAnswer: "getSize() is available for any instance of Message",
			wrongAnswers: [
				"Only concrete methods are available",
				"No methods are available",
				"Only static methods are available",
			],
		},
		{
			question:
				"What caution does the lecture give about behavioural subtyping?",
			correctAnswer:
				"Implementations of getSize() should yield the size. But we could just, e.g., return 1;? Its the task of the programmer to ensure this!",
			wrongAnswers: [
				"The compiler automatically ensures correct behavior",
				"Abstract methods cannot be implemented incorrectly",
				"Type checking prevents all implementation errors",
			],
		},
		{
			question:
				"What should you do for abstract methods according to the lecture?",
			correctAnswer: "Document what it should do",
			wrongAnswers: [
				"Leave them undocumented for flexibility",
				"Only document them if they're complex",
				"Documentation is handled automatically",
			],
		},
		{
			question:
				"What example questions does the lecture give about documenting getSize()?",
			correctAnswer: "What unit is the size? What should be counted?",
			wrongAnswers: [
				"How fast should it execute? How much memory should it use?",
				"What color should it return? What format should it use?",
				"When should it be called? Where should it be stored?",
			],
		},
		{
			question:
				"What does imprecision in documentation cause according to the lecture?",
			correctAnswer: "Imprecision here is source for a lot of bugs",
			wrongAnswers: [
				"Imprecision only affects performance",
				"Imprecision is not a significant issue",
				"Imprecision only matters for beginners",
			],
		},
		{
			question: "What does inheritance allow one class to do to another?",
			correctAnswer: "One class can extend another, inheriting all behaviour",
			wrongAnswers: [
				"One class can replace another completely",
				"One class can delete another's methods",
				"One class can hide another's functionality",
			],
		},
		{
			question: "What is inheritance often associated with?",
			correctAnswer:
				"Often: Inheritance is subtyping, subtypes can be used in place of parent",
			wrongAnswers: [
				"Inheritance is only about code reuse",
				"Inheritance only affects data storage",
				"Inheritance only works with interfaces",
			],
		},
		{
			question: "What type of polymorphism does inheritance create?",
			correctAnswer: "This is (subtyping) polymorphism",
			wrongAnswers: [
				"This is parametric polymorphism",
				"This is ad hoc polymorphism",
				"This is compile-time polymorphism",
			],
		},
		{
			question: "What can classes and methods both be?",
			correctAnswer: "abstract",
			wrongAnswers: ["concrete only", "static only", "final only"],
		},
		{
			question: "According to the final summary, what are objects about?",
			correctAnswer: "Objects are about functionality",
			wrongAnswers: [
				"Objects are about data storage",
				"Objects are about inheritance",
				"Objects are about performance",
			],
		},
		{
			question:
				"What do Abstraction & Encapsulation do according to the final summary?",
			correctAnswer: "Just expose necessary functionality",
			wrongAnswers: [
				"Hide all functionality",
				"Expose all internal details",
				"Focus on data structures",
			],
		},
		{
			question:
				"What do Inheritance & Polymorphism allow according to the final summary?",
			correctAnswer: "Classes can inherit and extend others",
			wrongAnswers: [
				"Classes can only inherit, not extend",
				"Classes can only extend, not inherit",
				"Classes cannot be related to each other",
			],
		},
		{
			question: "What final caution does the lecture give?",
			correctAnswer: "Be careful of aligning behaviour",
			wrongAnswers: [
				"Be careful of memory usage",
				"Be careful of performance issues",
				"Be careful of syntax errors",
			],
		},
	],

	23: [
		{
			question: "What type of inheritance does Java support?",
			correctAnswer: "Single inheritance (only one parent class)",
			wrongAnswers: [
				"Multiple inheritance like C++ and Python",
				"No inheritance at all",
				"Triple inheritance with three parent classes",
			],
		},
		{
			question:
				"What happens if a parent class has a constructor with arguments but the child class doesn't call it?",
			correctAnswer: "Compilation error - the parent class is not initialized",
			wrongAnswers: [
				"The program runs but with null values",
				"Java automatically creates a default constructor",
				"The child class inherits the parent constructor automatically",
			],
		},
		{
			question: "What does 'super(recipient)' do in a constructor?",
			correctAnswer:
				"Calls the parent class's constructor with the recipient parameter",
			wrongAnswers: [
				"Creates a new instance of the parent class",
				"Calls the current class's constructor",
				"Initializes only the recipient field",
			],
		},
		{
			question: "Which class is the ancestor of all classes in Java?",
			correctAnswer: "Object",
			wrongAnswers: ["Class", "Parent", "Base"],
		},
		{
			question:
				"In the FileMessage example, what does 'super.getSize()' refer to?",
			correctAnswer: "TextMessage's getSize method",
			wrongAnswers: [
				"Message's getSize method",
				"Object's getSize method",
				"FileMessage's own getSize method",
			],
		},
		{
			question:
				"What is a potential problem with overriding non-abstract methods?",
			correctAnswer:
				"Easy to forget to override already implemented methods, and parent class changes may require updates",
			wrongAnswers: [
				"It's not allowed in Java",
				"It always causes compilation errors",
				"It makes the code run slower",
			],
		},
		{
			question:
				"In Quiz I, what does 'child.foo()' output when Child overrides Parent's foo method?",
			correctAnswer: "bar",
			wrongAnswers: ["foo", "foo bar", "Nothing - compilation error"],
		},
		{
			question:
				"In Quiz II, what does 'child.foo()' output when Child overrides doPrint but not foo?",
			correctAnswer: "Child foo",
			wrongAnswers: ["foo", "Child", "foo Child"],
		},
		{
			question: "What is Java's equivalent of Python's __str__ method?",
			correctAnswer: "public String toString()",
			wrongAnswers: [
				"public String getString()",
				"public String str()",
				"public String print()",
			],
		},
		{
			question: "Why does every class in Java have a toString() method?",
			correctAnswer:
				"Because toString() is a method of Object class, which every class extends",
			wrongAnswers: [
				"Because it's a keyword in Java",
				"Because the compiler automatically generates it",
				"Because it's required by the Java specification",
			],
		},
		{
			question:
				"What are Java's equivalents of Python's __eq__ and __hash__ methods?",
			correctAnswer:
				"public boolean equals(Object other) and public int hashCode()",
			wrongAnswers: [
				"public boolean compare(Object other) and public int hash()",
				"public boolean isEqual(Object other) and public int getHash()",
				"public boolean eq(Object other) and public int hashValue()",
			],
		},
		{
			question:
				"What does 'new Point(1, 2).equals(new Point(1, 2))' return by default without overriding equals?",
			correctAnswer: "false",
			wrongAnswers: ["true", "null", "Compilation error"],
		},
		{
			question:
				"What is the first check typically done in a proper equals method implementation?",
			correctAnswer: "if (this == obj) { return true; }",
			wrongAnswers: [
				"if (obj == null) { return false; }",
				"if (!(obj instanceof MyClass)) { return false; }",
				"if (obj.getClass() != this.getClass()) { return false; }",
			],
		},
		{
			question:
				"What method is recommended for implementing hashCode in most cases?",
			correctAnswer: "Objects.hash(field1, field2, ...)",
			wrongAnswers: [
				"field1.hashCode() + field2.hashCode()",
				"this.toString().hashCode()",
				"System.identityHashCode(this)",
			],
		},
		{
			question:
				"In the equality and inheritance example, what happens with point.equals(labelled) and labelled.equals(point)?",
			correctAnswer: "First returns true, second returns false",
			wrongAnswers: [
				"Both return true",
				"Both return false",
				"First returns false, second returns true",
			],
		},
		{
			question:
				"What are the three basic methods that should almost always be implemented in Java classes?",
			correctAnswer: "toString(), equals(Object other), and hashCode()",
			wrongAnswers: [
				"getString(), compare(Object other), and hash()",
				"print(), isEqual(Object other), and getHash()",
				"display(), equals(Object other), and hashValue()",
			],
		},
		{
			question: "What is the main purpose of an interface in Java?",
			correctAnswer:
				"To define public methods that describe functionality without prescribing structure",
			wrongAnswers: [
				"To provide implementation details for classes",
				"To store data and state",
				"To replace abstract classes entirely",
			],
		},
		{
			question: "What keyword is used to implement an interface in Java?",
			correctAnswer: "implements",
			wrongAnswers: ["extends", "inherits", "uses"],
		},
		{
			question: "Are methods in an interface public by default?",
			correctAnswer: "Yes, all interface methods are always public",
			wrongAnswers: [
				"No, you must specify public explicitly",
				"They are private by default",
				"They are protected by default",
			],
		},
		{
			question:
				"Can you write code that uses an interface before implementing it?",
			correctAnswer:
				"Yes, because the code only relies on the defined behavior",
			wrongAnswers: [
				"No, you must implement the interface first",
				"Only if you use abstract methods",
				"Only with special compiler flags",
			],
		},
		{
			question:
				"What is the main difference between abstract classes and interfaces according to the lecture?",
			correctAnswer:
				"Abstract classes are for sharing/reusing implementation details, interfaces define functionality",
			wrongAnswers: [
				"Abstract classes are faster, interfaces are slower",
				"Abstract classes can have methods, interfaces cannot",
				"There is no difference between them",
			],
		},
		{
			question: "Can one interface extend another interface?",
			correctAnswer: "Yes, interfaces can extend other interfaces",
			wrongAnswers: [
				"No, only classes can extend",
				"Only if they are in the same package",
				"Only abstract interfaces can extend",
			],
		},
		{
			question: "Can one class implement multiple interfaces?",
			correctAnswer: "Yes, one class can implement multiple interfaces",
			wrongAnswers: [
				"No, only one interface per class",
				"Only if the interfaces are related",
				"Only abstract classes can implement multiple interfaces",
			],
		},
		{
			question:
				"If a class implements StringList which extends StringCollection, what methods does it have?",
			correctAnswer: "All methods from both StringList and StringCollection",
			wrongAnswers: [
				"Only StringList methods",
				"Only StringCollection methods",
				"It must choose which interface to implement",
			],
		},
		{
			question:
				"What is the recommended approach when possible according to the lecture?",
			correctAnswer: "Try to use interfaces where possible",
			wrongAnswers: [
				"Always use abstract classes",
				"Avoid inheritance completely",
				"Use only concrete classes",
			],
		},
		{
			question:
				"What does the 'instanceof' operator check in the equals method?",
			correctAnswer:
				"Whether the object is an instance of the specified class or its subclasses",
			wrongAnswers: [
				"Whether two objects are exactly the same class",
				"Whether an object is null",
				"Whether an object has the same hash code",
			],
		},
		{
			question: "What is the relationship between equals and hashCode methods?",
			correctAnswer:
				"If a.equals(b) is true, then a.hashCode() == b.hashCode() must also be true",
			wrongAnswers: [
				"They are completely independent",
				"hashCode should always return the same value",
				"equals should call hashCode internally",
			],
		},
		{
			question:
				"What does '(Point) obj' represent in the equals method implementation?",
			correctAnswer: "Type casting obj to Point type",
			wrongAnswers: [
				"Creating a new Point object",
				"Checking if obj is a Point",
				"Calling Point's constructor",
			],
		},
		{
			question:
				"Why is inheritance with multiple parent classes more complicated?",
			correctAnswer: "What if two parents define methods with the same name",
			wrongAnswers: [
				"It uses more memory",
				"It's slower to execute",
				"It's not supported by any programming language",
			],
		},
		{
			question:
				"What problem can occur when a parent class adds new methods after a child class is created?",
			correctAnswer: "May need to override the new methods in the child class",
			wrongAnswers: [
				"The child class automatically inherits them",
				"Compilation will fail",
				"The parent class cannot add new methods",
			],
		},
	],

	24: [
		{
			question:
				"What is the main problem with using Object type for a generic list?",
			correctAnswer:
				"You lose type safety and can mix different types accidentally",
			wrongAnswers: [
				"It uses more memory than specific types",
				"It's slower than using specific types",
				"It doesn't support inheritance",
			],
		},
		{
			question:
				"What happens when you retrieve an element from a List that uses Object type?",
			correctAnswer: "You get Object type even if you only put String in it",
			wrongAnswers: [
				"You get the original type automatically",
				"You get a compilation error",
				"You get null values",
			],
		},
		{
			question: "What is parametric polymorphism also called in Java?",
			correctAnswer: "Generics",
			wrongAnswers: ["Templates", "Dynamic typing", "Polymorphic inheritance"],
		},
		{
			question: "How do you define a generic interface in Java?",
			correctAnswer:
				"Add <T> to the class definition, like public interface List<T>",
			wrongAnswers: [
				"Use the generic keyword before interface",
				"Add (T) after the interface name",
				"Use template<T> before the interface declaration",
			],
		},
		{
			question:
				"In a generic class implementation, can you use a different parameter name than the interface?",
			correctAnswer:
				"Yes, you can use different names like public class DynArrayList<TYPE> implements List<TYPE>",
			wrongAnswers: [
				"No, you must use the exact same parameter name",
				"Only if you extend the interface first",
				"Only for abstract classes, not interfaces",
			],
		},
		{
			question:
				"What is the shortened syntax for creating a generic list instance?",
			correctAnswer: "List<Message> list = new ArrayList<>();",
			wrongAnswers: [
				"List<Message> list = new ArrayList<>();",
				"List<Message> list = new ArrayList<Message, Message>();",
				"List<Message> list = ArrayList<Message>.new();",
			],
		},
		{
			question: "What are generics called in C++?",
			correctAnswer: "Templates",
			wrongAnswers: ["Generics", "Parametrics", "Polymorphics"],
		},
		{
			question: "Which programming language had generics as early as 1977?",
			correctAnswer: "Ada",
			wrongAnswers: ["C", "Pascal", "COBOL"],
		},
		{
			question: "What import statement is needed for Java collections?",
			correctAnswer: "import java.util.*;",
			wrongAnswers: [
				"import java.collections.*;",
				"import java.lang.collections.*;",
				"import java.data.*;",
			],
		},
		{
			question: "What does the add method return in the Collection interface?",
			correctAnswer: "boolean - true if things changed",
			wrongAnswers: [
				"void - it returns nothing",
				"int - the new size of the collection",
				"Object - the added element",
			],
		},
		{
			question:
				"Why do contains and remove methods take Object parameter instead of the generic type E?",
			correctAnswer: "Different types can still be equal",
			wrongAnswers: [
				"It's a design mistake in Java",
				"Object is faster to process",
				"It allows null values to be handled",
			],
		},
		{
			question:
				"What type of polymorphism is used when writing methods that accept Collection<Object>?",
			correctAnswer: "Behavioural polymorphism",
			wrongAnswers: [
				"Parametric polymorphism",
				"Static polymorphism",
				"Dynamic polymorphism",
			],
		},
		{
			question:
				"What is the main difference between List and Collection interfaces?",
			correctAnswer: "List has index-based methods like get(int index)",
			wrongAnswers: [
				"List can only hold strings",
				"Collection is abstract while List is concrete",
				"List doesn't support iteration",
			],
		},
		{
			question:
				"What is the recommended List implementation to use in 99/100 cases?",
			correctAnswer: "ArrayList",
			wrongAnswers: ["LinkedList", "Vector", "UnmodifiableList"],
		},
		{
			question:
				"Why should you almost never declare variables as ArrayList instead of List?",
			correctAnswer:
				"You require the functionality of a list, not how it works internally",
			wrongAnswers: [
				"ArrayList is deprecated in newer Java versions",
				"It uses more memory",
				"It's slower than using the interface",
			],
		},
		{
			question:
				"What new methods does the Set interface add compared to Collection?",
			correctAnswer: "None - it only changes behavior to ensure uniqueness",
			wrongAnswers: [
				"Methods for sorting elements",
				"Methods for accessing elements by index",
				"Methods for mathematical set operations",
			],
		},
		{
			question:
				"What does Set.add() return when you try to add an element that already exists?",
			correctAnswer: "false",
			wrongAnswers: ["true", "null", "throws an exception"],
		},
		{
			question:
				"What is the standard implementation of Set that should be used if you don't need sorting?",
			correctAnswer: "HashSet",
			wrongAnswers: ["TreeSet", "LinkedHashSet", "SortedSet"],
		},
		{
			question: "What is the standard implementation for SortedSet?",
			correctAnswer: "TreeSet",
			wrongAnswers: ["HashSet", "LinkedHashSet", "OrderedSet"],
		},
		{
			question:
				"If you only need sorting once, what should you use instead of SortedSet?",
			correctAnswer: "Collections.sort(list)",
			wrongAnswers: ["TreeSet anyway", "Arrays.sort(set)", "Set.sort() method"],
		},
		{
			question: "What are dictionaries called in Java?",
			correctAnswer: "Map",
			wrongAnswers: ["Dict", "Dictionary", "HashMap"],
		},
		{
			question: "What do the put and remove methods return in Map interface?",
			correctAnswer: "The previous value (or null if none was there)",
			wrongAnswers: [
				"boolean indicating success",
				"The new value that was set",
				"void - they return nothing",
			],
		},
		{
			question: "In Map interface, are keys a Set and values a Collection?",
			correctAnswer: "Yes, keys are a Set but values are a Collection",
			wrongAnswers: [
				"Both keys and values are Sets",
				"Both keys and values are Collections",
				"Keys are Collection and values are Set",
			],
		},
		{
			question:
				"What represents key-value pairs in Java Map, similar to Python's .items()?",
			correctAnswer: "Map.Entry<K, V>",
			wrongAnswers: ["Map.Pair<K, V>", "Map.Item<K, V>", "Map.Tuple<K, V>"],
		},
		{
			question: "How do you access key and value from a Map.Entry?",
			correctAnswer: "entry.getKey() and entry.getValue()",
			wrongAnswers: [
				"entry.key() and entry.value()",
				"entry.first() and entry.second()",
				"entry[0] and entry[1]",
			],
		},
		{
			question:
				"What are the standard Map implementations similar to Set implementations?",
			correctAnswer: "HashMap and TreeMap",
			wrongAnswers: [
				"HashDict and TreeDict",
				"ArrayMap and LinkedMap",
				"SimpleMap and SortedMap",
			],
		},
		{
			question:
				"What should you be careful about when adding objects into hash-based collections?",
			correctAnswer: "Adding mutable objects into collections",
			wrongAnswers: [
				"Adding too many objects at once",
				"Adding null values",
				"Adding objects without constructors",
			],
		},
		{
			question:
				"What does LBYL vs EAFP refer to in the context of type checking?",
			correctAnswer:
				"Look Before You Leap vs Easier to Ask for Forgiveness than Permission",
			wrongAnswers: [
				"List-Based vs Exception-Aware Functional Programming",
				"Lazy Binding vs Early Allocation for Performance",
				"Low-level vs High-level Programming approaches",
			],
		},
		{
			question:
				"How many different collection implementations are there in standard Java according to the lecture?",
			correctAnswer: "About 20 implementations",
			wrongAnswers: [
				"About 5 implementations",
				"About 10 implementations",
				"About 50 implementations",
			],
		},
		{
			question: "Which of these is NOT mentioned as a skipped Java concept?",
			correctAnswer: "Interfaces and inheritance",
			wrongAnswers: [
				"Lambda expressions & Streams API",
				"Design patterns like Singleton and Builder",
				"Reflection and dynamic code generation",
			],
		},
		{
			question: "What are the 'Gang of Four' design patterns?",
			correctAnswer:
				"A reference to classic design patterns like Factories, Singleton, Builder, Visitor",
			wrongAnswers: [
				"Four fundamental Java programming principles",
				"Four types of inheritance patterns",
				"Four basic collection interfaces",
			],
		},
		{
			question: "Which build management tools are mentioned for Java?",
			correctAnswer: "Gradle, ant, maven",
			wrongAnswers: [
				"Make, CMake, Bazel",
				"NPM, Yarn, Webpack",
				"pip, conda, poetry",
			],
		},
		{
			question:
				"What advanced Java topics involve 'weak/soft/shadow references'?",
			correctAnswer: "Garbage collection",
			wrongAnswers: [
				"Memory allocation",
				"Thread management",
				"Network programming",
			],
		},
		{
			question:
				"What is the mantra about objects that's emphasized when discussing interfaces?",
			correctAnswer: "Objects are about functionality (their interface)",
			wrongAnswers: [
				"Objects are about data storage",
				"Objects are about performance optimization",
				"Objects are about code organization",
			],
		},
		{
			question: "What does 'generic programming' refer to?",
			correctAnswer: "One implementation for many types",
			wrongAnswers: [
				"Programming without specific requirements",
				"Creating flexible user interfaces",
				"Writing code that works on any platform",
			],
		},
	],
};
