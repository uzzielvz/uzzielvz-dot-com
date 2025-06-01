---
title: "C# Analysis Tool"
year: "2024"
category: "Java Application"
technologies: ["Java", "JFlex", "Swing", "compilerTools"]
features:
  - "Lexical Analysis: Uses JFlex to generate a lexer that turns source code into tokens."
  - "Graphical User Interface: Built with Swing, allowing user interaction through a GUI."
  - "Syntax Highlighting: Displays source code with color highlighting for keywords, operators, comments, etc., using lexical analysis."
  - "Error Detection: Identifies and displays lexical and syntactical errors in the GUI."
  - "C# Compatibility: Tailored to handle a subset of C# syntax."
  - "PDF Documentation: Generates documentation for the analyzed code."
requirements:
  - "Java 8 or higher: Requires JDK version 8 or above."
  - "JFlex: Used for generating the lexer."
  - "Swing: For the graphical user interface."
  - "compilerTools: Library containing classes to handle tokens, errors, grammars, etc."
githubUrl: "https;//github.com/uzzielvz/ProyectoCompiladores"
---

This project is a code analysis tool developed in Java, designed to analyze and process source code written in a C# programming language. It utilizes JFlex for lexical analysis and features a Swing-based graphical user interface (GUI) for user interaction. While not a full compiler, it provides lexical and syntactic analysis, error detection, and code documentation capabilities. The tool is designed to help users understand the different stages of a compiler in a simple and educational context. 