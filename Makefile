update-version:
	sh ./hack/version.sh $(version)

check-link:
	go run ./hack/linkcheck.go

check-sort:
	go run ./hack/sortcheck.go
