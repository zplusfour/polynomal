clear
echo "Build start..."

npx pkg . --target linux --output bin/polynomal.elf
npx pkg . --target darwin --output bin/polynomal.app
npx pkg . --target windows --output bin/polynomal.exe

clear
echo "Build done!"