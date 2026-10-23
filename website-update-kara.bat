@echo off
chcp 65001 >nul
title ZPHS Ganori - Website Update Tool
color 0A

echo.
echo  ╔══════════════════════════════════════════════════════╗
echo  ║   पीएम श्री जि.प. प्रशाला, गणोरी - Website Update  ║
echo  ║         GitHub Pages वर Live Upload करा             ║
echo  ╚══════════════════════════════════════════════════════╝
echo.

cd /d "C:\Users\Aniket mane\Downloads\website zphs"

echo  [1/4] बदललेल्या files तपासत आहे...
git status
echo.

echo  [2/4] सगळ्या files add करत आहे...
git add .
echo.

:: Get current date and time for commit message
for /f "tokens=1-4 delims=/ " %%a in ('date /t') do set mydate=%%a-%%b-%%c
for /f "tokens=1-2 delims=: " %%a in ('time /t') do set mytime=%%a:%%b

echo  [3/4] Update save (commit) करत आहे...
git commit -m "Website update - %mydate% %mytime%"
echo.

echo  [4/4] GitHub वर Upload (push) करत आहे...
git push origin main
echo.

echo  ╔══════════════════════════════════════════════════════╗
echo  ║  ✅ झाले! 2-3 मिनिटात Live होईल:                   ║
echo  ║  https://aadmane.github.io/zphs-ganori/             ║
echo  ╚══════════════════════════════════════════════════════╝
echo.
pause
