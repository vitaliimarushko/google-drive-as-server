# How to make your Google Drive as Web server for static data?

1. Make some web-application.

2. Go to your Google Drive and create somewhere a folder with a name in the following format:
    ```
    www.{any-name-you-want}.com
    ```

3. Make this folder with public access.

4. Copy all application files into this folder: `index.html` file must be in the root folder!

5. Go to [DriveToWeb](https://drv.tw) site, authorize with your account and grant access to your Google Drive files.

6. After automatic scanning your drive you will see at the top of the page something like this:
    ```
    https://1hy2cgzkdrau803zbteolf-on.drv.tw/Other/sites/www.my-supersite.com/
    ```
