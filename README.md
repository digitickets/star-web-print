# star-web-print
A GitHub copy of the Star Micronics Web Print code found at http://www.starmicronics.com/support/sdkdocumentation.aspx.

# Changes made by DigiTickets

1. We have added support for the CommonJS module format.
2. We have added a `main.json` file to act as a package entry point.
3. We have created `bower.json` and `package.json` files to help manage dependencies and deployment.

# Versioning

To allow for ease of upgrading, we take the standard package supplied by Star Micronics, add support for CommonJS module
format, and repackage it with a `+1` version. So, if the official version is `v1.7.0`, our version is `v1.7.0+1`.
