# star-web-print
A GitHub copy of the Star Micronics Web Print code found at https://starmicronics.com/support/developers/webprnt-sdk/.

# Changes made by DigiTickets

1. We have added support for the CommonJS module format.
2. We have added a `main.json` file to act as a package entry point.
3. We have created `bower.json` and `package.json` files to help manage dependencies and deployment.

# Versioning

To allow for ease of upgrading, we take the standard package supplied by Star Micronics, add support for CommonJS module
format, and repackage it with a `+1` version.

As Star Micronics changes the format of the version number from time to time, it will be based upon the version within
the zip file from the official site.

This is currently `StarWebPRNT_WebContents_V1.9.0_20230907.zip`, and so this version is `1.9.0+1`.
