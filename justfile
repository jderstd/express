set shell := ["bash", "-cu"]
set windows-shell := ["pwsh", "-Command"]

tsc := "pnpm exec tsgo"
biome := "pnpm exec biome"
tsdown := "pnpm exec tsdown"
vitest := "pnpm exec vitest"
typedoc := "pnpm exec typedoc"
publish := "pnpm publish"

lsl_cfg := "-config ../../.ls-lint.yaml"

express := "packages/express"

test_express := "tests/express"

example_js := "examples/express-js"
example_ts := "examples/express-ts"

# Default action
_:
    just --list -u

# Install
i:
    pnpm install

# Format code
fmt:
    {{biome}} check --write .

# Lint code with ls-lint
ls-lint:
    cd ./{{express}} && ls-lint {{lsl_cfg}}

# Lint code with ls-lint
lslint:
    just ls-lint

# Lint code with typos
typos:
    typos

# Lint code with TypeScript Compiler
tsc:
    cd ./{{express}} && {{tsc}} --noEmit

# Lint code
lint:
    just lslint
    just typos
    just tsc

# Lint code with Biome
lint-biome:
    {{biome}} lint .

# Build package
build:
    cd ./{{express}} && {{tsdown}} -c tsdown.config.ts

# Run tests
test:
    cd ./{{test_express}} && {{vitest}} run

# Check code
check:
    just build
    just fmt
    just lint
    just test

# Generate APIs documentation
api:
    cd ./{{express}} && {{typedoc}}

# Publish express package as dry-run
publish-try-express:
    cd ./{{express}} && {{publish}} --no-git-checks --dry-run

# Publish all packages as dry-run
publish-try:
    just publish-try-express

# Publish express package
publish-express:
    cd ./{{express}} && {{publish}}

# Publish all packages
publish:
    just publish-express

# Clean builds (Linux)
clean-linux:
    rm -rf ./examples/*/dist
    rm -rf ./packages/*/dist

# Clean builds (macOS)
clean-macos:
    just clean-linux

# Clean builds (Windows)
clean-windows:
    Remove-Item -Recurse -Force ./examples/*/dist
    Remove-Item -Recurse -Force ./packages/*/dist

# Clean builds
clean:
    just clean-{{os()}}

# Clean everything (Linux)
clean-all-linux:
    just clean

    rm -rf ./examples/*/node_modules
    rm -rf ./tests/*/node_modules
    rm -rf ./packages/*/node_modules
    
    rm -rf ./node_modules

# Clean everything (macOS)
clean-all-macos:
    just clean-all-linux

# Clean everything (Windows)
clean-all-windows:
    just clean

    Remove-Item -Recurse -Force ./examples/*/node_modules
    Remove-Item -Recurse -Force ./tests/*/node_modules
    Remove-Item -Recurse -Force ./packages/*/node_modules

    Remove-Item -Recurse -Force ./node_modules

# Clean everything
clean-all:
    just clean-all-{{os()}}
