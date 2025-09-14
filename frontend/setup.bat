@echo off
title MediConnect Keep-Alive Setup
echo ========================================
echo   MediConnect Keep-Alive Setup
echo ========================================
echo.

REM Get current directory
set "CURRENT_DIR=%~dp0"
set "STARTUP_DIR=%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup"

echo Installing to Windows Startup...
echo.

REM Create shortcut in startup folder
powershell -Command "$WshShell = New-Object -comObject WScript.Shell; $Shortcut = $WshShell.CreateShortcut('%STARTUP_DIR%\MediConnect Keep-Alive.lnk'); $Shortcut.TargetPath = 'node'; $Shortcut.Arguments = 'keep-alive.js'; $Shortcut.WorkingDirectory = '%CURRENT_DIR%'; $Shortcut.Description = 'MediConnect Keep-Alive Service'; $Shortcut.Save()"

echo ✅ SUCCESS! MediConnect Keep-Alive installed to Windows Startup
echo.
echo ✅ It will automatically start when you log in to Windows
echo ✅ Your Render backend will be pinged every 5 minutes
echo.
echo To remove: Delete shortcut from Startup folder
echo Startup folder: %STARTUP_DIR%
echo.
echo Press any key to exit...
pause >nul
