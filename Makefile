VPS_HOST ?= rogueroutine-vps
VPS_PATH ?= ~/repo/dist

.PHONY: build serve deploy clean

build:
	npm run build

serve:
	npm run dev

deploy: build
	rsync -avz --delete dist/ $(VPS_HOST):$(VPS_PATH)/
	@echo "Deployed to $(VPS_HOST):$(VPS_PATH)"

clean:
	rm -rf dist/
