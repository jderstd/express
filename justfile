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
    just lint
    just fmt
    just build
    just test

# Install
i:
    pnpm install

# Lint code with ls-lint
lslint:
    cd ./{{express}} && ls-lint {{lsl_cfg}}

# Lint code with TypeScript Compiler
tsc:
    cd ./{{express}} && {{tsc}} --noEmit

# Lint code
lint:
    just lslint
    typos
    just tsc

# Lint code with Biome
lint-biome:
    {{biome}} lint .

# Format code
fmt:
    {{biome}} check --write .

# Build package
build:
    cd ./{{express}} && {{tsdown}} -c tsdown.config.ts

# Run tests
test:
    cd ./{{test_express}} && {{vitest}} run

# Run tests with different runtimes
test-all:
    cd ./{{test_express}} && pnpm run test

    cd ./{{test_express}} && bun run test

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

# Clean builds
clean:
    rm -rf ./examples/*/dist

    rm -rf ./packages/*/dist

# Clean everything
clean-all:
    just clean
    
    rm -rf ./examples/*/node_modules

    rm -rf ./tests/*/node_modules

    rm -rf ./packages/*/node_modules
    
    rm -rf ./node_modules
