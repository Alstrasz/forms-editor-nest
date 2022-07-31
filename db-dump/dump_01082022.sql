--
-- PostgreSQL database dump
--

-- Dumped from database version 14.4 (Debian 14.4-1.pgdg110+1)
-- Dumped by pg_dump version 14.4 (Debian 14.4-1.pgdg110+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: form; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.form (
    id integer NOT NULL,
    name character varying NOT NULL,
    description character varying NOT NULL,
    fields jsonb NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.form OWNER TO root;

--
-- Name: form_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.form_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.form_id_seq OWNER TO root;

--
-- Name: form_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.form_id_seq OWNED BY public.form.id;


--
-- Name: form_response; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.form_response (
    id integer NOT NULL,
    form_id integer NOT NULL,
    fields jsonb NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.form_response OWNER TO root;

--
-- Name: form_response_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.form_response_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.form_response_id_seq OWNER TO root;

--
-- Name: form_response_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.form_response_id_seq OWNED BY public.form_response.id;


--
-- Name: form id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.form ALTER COLUMN id SET DEFAULT nextval('public.form_id_seq'::regclass);


--
-- Name: form_response id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.form_response ALTER COLUMN id SET DEFAULT nextval('public.form_response_id_seq'::regclass);


--
-- Data for Name: form; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.form (id, name, description, fields, created_at) FROM stdin;
1	Book club poll	Form dedicated to choosing books for the next reading session	[{"name": "Suggest a book", "type": "input", "description": "Here you can type any book name if your's not on the list below"}, {"name": "Book club suggestions", "type": "textarea", "description": "Here you can suggest your idea how to make next club session better"}, {"name": "Book selection", "type": "select", "options": ["Wheel of Time", "Stormlight Archive", "Witcher", "Kingkiller Chronicle"], "description": "What would you like to read next?"}]	2022-07-31 21:56:15.826051
2	Suggestions	Here you can suggest how to make something better	[{"name": "Name", "type": "input", "description": "You can introduce yourself if you want"}, {"name": "Suggestion", "type": "textarea", "description": "Here you can type anything you want, although it is better to stick to the topic"}, {"name": "Rate", "type": "select", "options": ["1", "2", "3", "4", "5"], "description": "Here you can leave a rating (1 is a lowest)"}]	2022-07-31 22:18:58.169345
\.


--
-- Data for Name: form_response; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.form_response (id, form_id, fields, created_at) FROM stdin;
1	1	[{"data": "-", "name": "Suggest a book"}, {"data": "-", "name": "Book club suggestions"}, {"data": "Stormlight Archive", "name": "Book selection"}]	2022-07-31 22:00:50.609404
2	1	[{"data": "Wings of Fire", "name": "Suggest a book"}, {"data": "Everything is good, keep it up!", "name": "Book club suggestions"}, {"data": "Kingkiller Chronicle", "name": "Book selection"}]	2022-07-31 22:01:33.382386
3	1	[{"data": "-", "name": "Suggest a book"}, {"data": "Let's make time between sessions longer, this books are kind of big!", "name": "Book club suggestions"}, {"data": "Witcher", "name": "Book selection"}]	2022-07-31 22:12:11.733014
4	2	[{"data": "-", "name": "Name"}, {"data": "Something is missing, but not sure what", "name": "Suggestion"}, {"data": "4", "name": "Rate"}]	2022-07-31 22:19:22.750012
5	2	[{"data": "Noone", "name": "Name"}, {"data": "Why does it even exists?", "name": "Suggestion"}, {"data": "1", "name": "Rate"}]	2022-07-31 22:19:45.895162
\.


--
-- Name: form_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public.form_id_seq', 2, true);


--
-- Name: form_response_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public.form_response_id_seq', 5, true);


--
-- Name: form_response PK_590558d307109b9ee2aa8f8e8e2; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.form_response
    ADD CONSTRAINT "PK_590558d307109b9ee2aa8f8e8e2" PRIMARY KEY (id);


--
-- Name: form PK_8f72b95aa2f8ba82cf95dc7579e; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.form
    ADD CONSTRAINT "PK_8f72b95aa2f8ba82cf95dc7579e" PRIMARY KEY (id);


--
-- Name: form_response FK_be6cd308cbc246d14f8e1d953b3; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.form_response
    ADD CONSTRAINT "FK_be6cd308cbc246d14f8e1d953b3" FOREIGN KEY (form_id) REFERENCES public.form(id);


--
-- PostgreSQL database dump complete
--

