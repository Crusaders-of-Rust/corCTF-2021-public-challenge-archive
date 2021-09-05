#include <stdio.h>
#include <stdlib.h>

int main() {
	FILE* f = fopen("/flag.txt", "r");
    if (!f) {
        puts("Couldn't open flag, contact an admin");
        exit(-1);
    }
    long size = fsize(f);
    char* flag = malloc(size);
    fread(flag, 1, size, f);
    fclose(f);
}
