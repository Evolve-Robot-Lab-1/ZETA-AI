@echo off
echo Activating Zeta environment...
call conda deactivate
call conda activate zeta

echo Starting development servers...
npm run dev

cmd /k 