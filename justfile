set shell := ["bash", "-cu"]
set windows-shell := ["powershell"]

node_bin := "./node_modules/.bin/"
tsc := node_bin + "tsc"
biome := node_bin + "biome"
tsdown := node_bin + "tsdown"
vitest := node_bin + "vitest"
typedoc := node_bin + "typedoc"

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

# Setup the project
setup:
    brew install ls-lint typos-cli
    just i

# Lint code
lint:
    ls-lint
    typos
    cd ./{{express}} && ../../{{tsc}} --noEmit

# Format code
fmt:
    ./{{biome}} check --write .

# Build package
build:
    cd ./{{express}} && ../../{{tsdown}} -c tsdown.config.ts

# Run tests
test:
    cd ./{{test_express}} && ./{{vitest}} run

# Run tests with different runtimes
test-all:
    cd ./{{test_express}} && pnpm run test

    cd ./{{test_express}} && bun run test

# Generate APIs documentation
api:
    cd ./{{express}} && ../../{{typedoc}}

# Publish express package as dry-run
publish-try-express:
    cd ./{{express}} && pnpm publish --no-git-checks --dry-run

# Publish all packages as dry-run
publish-try:
    just publish-try-express

# Publish express package
publish-express:
    cd ./{{express}} && pnpm publish

# Publish all packages
publish:
    just publish-express

# Clean builds
clean:
    rm -rf ./{{example_js}}/dist
    rm -rf ./{{example_ts}}/dist
    rm -rf ./{{express}}/dist

# Clean everything
clean-all:
    just clean
    
    rm -rf ./{{example_js}}/node_modules
    rm -rf ./{{example_ts}}/node_modules

    rm -rf ./{{test_express}}/node_modules

    rm -rf ./{{express}}/node_modules
    
    rm -rf ./node_modules
