build:
	docker build -t doc_builder_img .

run:
	docker container rm -f doc_builder
	docker run --name doc_builder -v "./doc:/doc" doc_builder_img:latest


build_doc:
	node -v
	npm -v
	cd /doc/project-doc && npm run build