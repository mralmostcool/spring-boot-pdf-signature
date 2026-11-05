package com.pdfsignature.error.exceptions.signature;

public class SignatureOperationException extends RuntimeException {
    public SignatureOperationException(String message) {
        super(message);
    }

    public SignatureOperationException(String message, Throwable cause) {
        super(message, cause);
    }
}

